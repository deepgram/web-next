const core = require("@actions/core");
const exec = require("@actions/exec");
const httpm = require("@actions/http-client");
const fs = require("fs/promises");
const { remark } = require("remark");
const remarkParse = require("remark-parse");
const remarkFrontmatter = require("remark-frontmatter");
const yaml = require("yaml");
const { Toolkit } = require("actions-toolkit");

let filesChanged = false;

const { SHORT_URL_FUNCTION_URL } = process.env;
const utm_sources = ["share_link", "twitter", "linkedin", "reddit", "facebook"];
const https = new httpm.HttpClient();

Toolkit.run(async (tools) => {
	{
		try {

			const filterChildren = (opts) => {
				return (tree) => {
					return Object.assign({}, tree, {
						children: tree.children.filter(opts.filter)
					})
				}
			}

			const processPost = async (filename) => {
				const slug = filename.split("/")[3];
				const postUrl = `https://blog.deepgram.com/${slug}/`;

				const orig = await fs.readFile(filename);

				const processor = remark().use(remarkParse).use(remarkFrontmatter, ["yaml"]);

				let originalTree = processor.parse(orig);
				const transformedTree = processor.runSync(originalTree);

				const yamlNode = transformedTree.children.find((c) => c.type === "yaml");
				const outputProcessor = processor().use(filterChildren, { filter: (c) => c.type !== "yaml" });
				const outputTree = outputProcessor.runSync(transformedTree);
				const newMdText = outputProcessor.stringify(outputTree);

				const yml = yaml.parse(yamlNode.value);
				const shorturls = yml.shorturls || {};

				for (const source of utm_sources) {
					if (!shorturls[source.replace("_link", "")]) {
						shorturls[source.replace("_link", "")] = await getShortUrl(`${postUrl}?utm_medium=share&utm_source=${source}&utm_campaign=blog&utm_content=${slug}`);
						filesChanged = true;
					}
				}

				yml.shorturls = shorturls;

				let content = `---
${yaml.stringify(yml)}---

${newMdText}
`;
				fs.writeFileSync(filename, content);
			};

			const getShortUrl = async (longUrl) => {
				const result = await https.postJson(
					SHORT_URL_FUNCTION_URL,
					{
						longUrl,
						honeypot: "",
					},
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				);

				if (result.result) {
					return result.result?.shortUrl;
				}

				return undefined;
			};

			const commitChanges = async (slug) => {
				// git login & pull
				await exec("git", ["config", "--local", "user.name", "Short Url Action"]);
				await exec("git", ["config", "--local", "user.email", "devrel@deepgram.com"]);
				await exec("git", ["pull", "origin", "main", "--tags"]);
				await exec("git", ["add", "."]);
				await exec("git", ["commit", "--no-commit-hooks", "-m", `Adding short urls for blog posts`]);

				// push new version
				await exec("git", ["push", "origin", `HEAD:main`]);
			};

			// Identify files & slugs to generate
			const inputfiles = core.getInput("files");

			const files = inputfiles.split(" ");

			for (const file of files) {
				await processPost(file);
			}

			// If we made changes, we need to commit and push
			if (filesChanged) {
				await commitChanges();
			}
		} catch (error) {
			core.setFailed(error.message);
		}
	}
});
