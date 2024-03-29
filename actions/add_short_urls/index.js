import * as core from "@actions/core";
import * as exec from "@actions/exec";
import * as httpm from "@actions/http-client";
import fs from "fs";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import yaml from "yaml";

let filesChanged = false;

const { SHORT_URL_FUNCTION_URL } = process.env;
const utm_sources = ["share_link", "twitter", "linkedin", "reddit", "facebook"];
const https = new httpm.HttpClient();

const filterChildren = (opts) => {
	return (tree) => {
		return Object.assign({}, tree, {
			children: tree.children.filter(opts.filter),
		});
	};
};

const processPost = async (filename) => {
	const slug = filename.split("/")[3];
	const postUrl = `https://blog.deepgram.com/${slug}/`;

	const orig = fs.readFileSync(filename);

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
	await exec.exec("git", ["config", "--local", "user.name", "Short Url Action"]);
	await exec.exec("git", ["config", "--local", "user.email", "devrel@deepgram.com"]);
	await exec.exec("git", ["pull", "origin", "main", "--tags"]);
	await exec.exec("git", ["add", "."]);
	await exec.exec("git", ["commit", "--no-verify", "-m", `Adding short urls for blog posts`]);

	// push new version
	await exec.exec("git", ["push", "origin", `HEAD:main`]);
};

try {
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
