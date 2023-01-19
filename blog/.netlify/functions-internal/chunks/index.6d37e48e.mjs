import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../entry.mjs';
import Slugger from 'github-slugger';
import '@astrojs/netlify/netlify-functions.js';
import 'preact';
import 'preact-render-to-string';
import 'vue';
import 'vue/server-renderer';
import 'html-escaper';
import 'node-html-parser';
import 'axios';
/* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                          */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           */import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [], "source": `\r
Our friends over at StepZen have a blog post up about how to use Deepgram, StepZen, and Next.js. In this post, they'll show you how to convert the Deepgram API into your own GraphQL API, translate English audio to French text, and display the results with Next.js.\r
\r
You can read ["Consuming the Deepgram API: The GraphQL Edit"](https://stepzen.com/blog/consuming-the-deepgram-api-the-graphql-edit) on the StepZen Blog now. If you have any questions about how to use Deepgram or want to learn how to add more features to your Deepgram transcript, please reach out to us on Twitter [@DeepgramDevs](https://twitter.com/DeepgramDevs). We\u2019re happy to help!\r
\r
        `, "html": '<p>Our friends over at StepZen have a blog post up about how to use Deepgram, StepZen, and Next.js. In this post, they\u2019ll show you how to convert the Deepgram API into your own GraphQL API, translate English audio to French text, and display the results with Next.js.</p>\n<p>You can read <a href="https://stepzen.com/blog/consuming-the-deepgram-api-the-graphql-edit">\u201CConsuming the Deepgram API: The GraphQL Edit\u201D</a> on the StepZen Blog now. If you have any questions about how to use Deepgram or want to learn how to add more features to your Deepgram transcript, please reach out to us on Twitter <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>. We\u2019re happy to help!</p>' };
const frontmatter = { "title": "How to Use Deepgram with Next.js Using StepZen", "description": "Do you want to learn how to convert Deepgram's API into your own GraphQL API? This post is for you!", "date": "2022-06-09T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1654877200/blog/2022/06/deepgram-stepzen-collaboration/stepzen-cover.png", "authors": ["bekah-hawrot-weigel"], "category": "tutorial", "tags": ["graphQL", "nextjs", "stepzen"], "seo": { "title": "How to Use Deepgram with Next.js Using StepZen", "description": "Do you want to learn how to convert Deepgram's API into your own GraphQL API? This post is for you!" }, "shorturls": { "share": "https://dpgr.am/52c40e7", "twitter": "https://dpgr.am/f697111", "linkedin": "https://dpgr.am/33bf612", "reddit": "https://dpgr.am/e15cf04", "facebook": "https://dpgr.am/4974e33" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661454093/blog/deepgram-stepzen-collaboration/ograph.png" }, "astro": { "headings": [], "source": `\r
Our friends over at StepZen have a blog post up about how to use Deepgram, StepZen, and Next.js. In this post, they'll show you how to convert the Deepgram API into your own GraphQL API, translate English audio to French text, and display the results with Next.js.\r
\r
You can read ["Consuming the Deepgram API: The GraphQL Edit"](https://stepzen.com/blog/consuming-the-deepgram-api-the-graphql-edit) on the StepZen Blog now. If you have any questions about how to use Deepgram or want to learn how to add more features to your Deepgram transcript, please reach out to us on Twitter [@DeepgramDevs](https://twitter.com/DeepgramDevs). We\u2019re happy to help!\r
\r
        `, "html": '<p>Our friends over at StepZen have a blog post up about how to use Deepgram, StepZen, and Next.js. In this post, they\u2019ll show you how to convert the Deepgram API into your own GraphQL API, translate English audio to French text, and display the results with Next.js.</p>\n<p>You can read <a href="https://stepzen.com/blog/consuming-the-deepgram-api-the-graphql-edit">\u201CConsuming the Deepgram API: The GraphQL Edit\u201D</a> on the StepZen Blog now. If you have any questions about how to use Deepgram or want to learn how to add more features to your Deepgram transcript, please reach out to us on Twitter <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>. We\u2019re happy to help!</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-stepzen-collaboration/index.md" };
function rawContent() {
  return `\r
Our friends over at StepZen have a blog post up about how to use Deepgram, StepZen, and Next.js. In this post, they'll show you how to convert the Deepgram API into your own GraphQL API, translate English audio to French text, and display the results with Next.js.\r
\r
You can read ["Consuming the Deepgram API: The GraphQL Edit"](https://stepzen.com/blog/consuming-the-deepgram-api-the-graphql-edit) on the StepZen Blog now. If you have any questions about how to use Deepgram or want to learn how to add more features to your Deepgram transcript, please reach out to us on Twitter [@DeepgramDevs](https://twitter.com/DeepgramDevs). We\u2019re happy to help!\r
\r
        `;
}
function compiledContent() {
  return '<p>Our friends over at StepZen have a blog post up about how to use Deepgram, StepZen, and Next.js. In this post, they\u2019ll show you how to convert the Deepgram API into your own GraphQL API, translate English audio to French text, and display the results with Next.js.</p>\n<p>You can read <a href="https://stepzen.com/blog/consuming-the-deepgram-api-the-graphql-edit">\u201CConsuming the Deepgram API: The GraphQL Edit\u201D</a> on the StepZen Blog now. If you have any questions about how to use Deepgram or want to learn how to add more features to your Deepgram transcript, please reach out to us on Twitter <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>. We\u2019re happy to help!</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-stepzen-collaboration/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Our friends over at StepZen have a blog post up about how to use Deepgram, StepZen, and Next.js. In this post, they’ll show you how to convert the Deepgram API into your own GraphQL API, translate English audio to French text, and display the results with Next.js.</p>
<p>You can read <a href="https://stepzen.com/blog/consuming-the-deepgram-api-the-graphql-edit">“Consuming the Deepgram API: The GraphQL Edit”</a> on the StepZen Blog now. If you have any questions about how to use Deepgram or want to learn how to add more features to your Deepgram transcript, please reach out to us on Twitter <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>. We’re happy to help!</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-stepzen-collaboration/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
