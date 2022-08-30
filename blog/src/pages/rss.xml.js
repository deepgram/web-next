import rss from "@astrojs/rss";

const postImportResult = import.meta.glob("../content/blog/posts/**/index.md", { eager: true });
const allPosts = Object.values(postImportResult)
	.sort((a, b) => {
		const aDate = new Date(b.frontmatter.date);
		const bDate = new Date(a.frontmatter.date);
		return aDate.getTime() - bDate.getTime();
	})
	.slice(0, 5);

async function getPosts() {
	const unresolved = allPosts.map(async (post) => {
		const slug = post.frontmatter.slug || post.file.split("/")[post.file.split("/").length - 2];

		return {
			link: slug,
			title: post.frontmatter.title,
			description: post.frontmatter.description,
			pubDate: post.frontmatter.date,
			customData: `<content:encoded><![CDATA[${await post.compiledContent()}]]></content:encoded>`,
		};
	});

	return await Promise.all(unresolved);
}

export const get = async () =>
	rss({
		title: "Deepgram Blog",
		site: import.meta.env.URL,
		description: "Deepgram Automatic Speech Recognition helps you build voice applications with better, faster, more economical transcription at scale.",
		items: await getPosts(),
		xmlns: {
			content: "http://purl.org/rss/1.0/modules/content/",
		},
	});
