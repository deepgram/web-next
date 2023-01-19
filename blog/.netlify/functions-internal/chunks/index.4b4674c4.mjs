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

const metadata = { "headings": [{ "depth": 2, "slug": "documentation", "text": "Documentation" }, { "depth": 2, "slug": "sdks--tools", "text": "SDKs & Tools" }, { "depth": 2, "slug": "developer-blog", "text": "Developer Blog" }, { "depth": 2, "slug": "use-cases", "text": "Use Cases" }, { "depth": 2, "slug": "wrap-up", "text": "Wrap Up" }], "source": "\r\nYou love to build and learn, and we love to help you do it. That's why the team\r\nat Deepgram has spent the past few months building a new home for our\r\ndocumentation and API reference. Of course, we couldn't stop there so let me\r\ntake a few minutes to highlight what you'll find on the new Deepgram Developer\r\nPlatform.\r\n\r\n## Documentation\r\n\r\nAs I mentioned, this is where you'll find the Deepgram API documentation moving\r\nforward. But as we moved, we took time to review each page to ensure it was\r\nup-to-date and accurate so you can get started building fast. There's **much**\r\nmore coming in this area. Stay tuned for new content targeting different\r\nlearning methods.\r\n\r\n## SDKs & Tools\r\n\r\nIn the new SDKs & Tools area, you will find our official & community-driven\r\nSDKs. You'll also find integrations with 3rd parties like Twilio & Zoom, as well\r\nas accelerators that make it easy to start getting value from the Deepgram API\r\nwith little to no code.\r\n\r\n## Developer Blog\r\n\r\nWe're stoked about some of the content we have planned for our new\r\ndeveloper blog. From beginner to advanced, our goal is to help all developers\r\nlearn exciting new technologies and level up their skills. In the coming months,\r\nwe'll open the ability for you to contribute to our blog and even be compensated\r\nfor your work.\r\n\r\n## Use Cases\r\n\r\nWhen you're evaluating APIs, it's always easier to make decisions if you can\r\nsee examples that illustrate your needs. That's why we're building use cases\r\nwith code samples you can take and start running immediately, taking you from\r\nzero to hero with minimal effort.\r\n\r\n## Wrap Up\r\n\r\nThere's a ton of features, content, and more that I can't wait to share, but\r\nfor now: Hello world! We're Deepgram and we believe every voice deserves to be\r\nheard and understood.\r\n\r\n        ", "html": '<p>You love to build and learn, and we love to help you do it. That\u2019s why the team\r\nat Deepgram has spent the past few months building a new home for our\r\ndocumentation and API reference. Of course, we couldn\u2019t stop there so let me\r\ntake a few minutes to highlight what you\u2019ll find on the new Deepgram Developer\r\nPlatform.</p>\n<h2 id="documentation">Documentation</h2>\n<p>As I mentioned, this is where you\u2019ll find the Deepgram API documentation moving\r\nforward. But as we moved, we took time to review each page to ensure it was\r\nup-to-date and accurate so you can get started building fast. There\u2019s <strong>much</strong>\r\nmore coming in this area. Stay tuned for new content targeting different\r\nlearning methods.</p>\n<h2 id="sdks--tools">SDKs & Tools</h2>\n<p>In the new SDKs & Tools area, you will find our official & community-driven\r\nSDKs. You\u2019ll also find integrations with 3rd parties like Twilio & Zoom, as well\r\nas accelerators that make it easy to start getting value from the Deepgram API\r\nwith little to no code.</p>\n<h2 id="developer-blog">Developer Blog</h2>\n<p>We\u2019re stoked about some of the content we have planned for our new\r\ndeveloper blog. From beginner to advanced, our goal is to help all developers\r\nlearn exciting new technologies and level up their skills. In the coming months,\r\nwe\u2019ll open the ability for you to contribute to our blog and even be compensated\r\nfor your work.</p>\n<h2 id="use-cases">Use Cases</h2>\n<p>When you\u2019re evaluating APIs, it\u2019s always easier to make decisions if you can\r\nsee examples that illustrate your needs. That\u2019s why we\u2019re building use cases\r\nwith code samples you can take and start running immediately, taking you from\r\nzero to hero with minimal effort.</p>\n<h2 id="wrap-up">Wrap Up</h2>\n<p>There\u2019s a ton of features, content, and more that I can\u2019t wait to share, but\r\nfor now: Hello world! We\u2019re Deepgram and we believe every voice deserves to be\r\nheard and understood.</p>' };
const frontmatter = { "title": "Hello World! We're Deepgram.", "description": "Introducing the new Deepgram Developer Platform; the new home of Deepgram's documentation, developer blog, use cases, SDKs, and more.", "date": "2021-11-01T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1635464706/blog/2021/11/hello-world/hello-world-blog%402x.jpg", "authors": ["michael-jolley"], "category": "devlife", "tags": ["team"], "seo": { "title": "Hello World! We're Deepgram.", "description": "Introducing the new Deepgram Developer Platform; the new home of Deepgram's documentation, developer blog, use cases, SDKs, and more." }, "shorturls": { "share": "https://dpgr.am/5729572", "twitter": "https://dpgr.am/d21d0b3", "linkedin": "https://dpgr.am/2f063b5", "reddit": "https://dpgr.am/5dd5a34", "facebook": "https://dpgr.am/bfd3c79" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661453808/blog/hello-world/ograph.png" }, "astro": { "headings": [{ "depth": 2, "slug": "documentation", "text": "Documentation" }, { "depth": 2, "slug": "sdks--tools", "text": "SDKs & Tools" }, { "depth": 2, "slug": "developer-blog", "text": "Developer Blog" }, { "depth": 2, "slug": "use-cases", "text": "Use Cases" }, { "depth": 2, "slug": "wrap-up", "text": "Wrap Up" }], "source": "\r\nYou love to build and learn, and we love to help you do it. That's why the team\r\nat Deepgram has spent the past few months building a new home for our\r\ndocumentation and API reference. Of course, we couldn't stop there so let me\r\ntake a few minutes to highlight what you'll find on the new Deepgram Developer\r\nPlatform.\r\n\r\n## Documentation\r\n\r\nAs I mentioned, this is where you'll find the Deepgram API documentation moving\r\nforward. But as we moved, we took time to review each page to ensure it was\r\nup-to-date and accurate so you can get started building fast. There's **much**\r\nmore coming in this area. Stay tuned for new content targeting different\r\nlearning methods.\r\n\r\n## SDKs & Tools\r\n\r\nIn the new SDKs & Tools area, you will find our official & community-driven\r\nSDKs. You'll also find integrations with 3rd parties like Twilio & Zoom, as well\r\nas accelerators that make it easy to start getting value from the Deepgram API\r\nwith little to no code.\r\n\r\n## Developer Blog\r\n\r\nWe're stoked about some of the content we have planned for our new\r\ndeveloper blog. From beginner to advanced, our goal is to help all developers\r\nlearn exciting new technologies and level up their skills. In the coming months,\r\nwe'll open the ability for you to contribute to our blog and even be compensated\r\nfor your work.\r\n\r\n## Use Cases\r\n\r\nWhen you're evaluating APIs, it's always easier to make decisions if you can\r\nsee examples that illustrate your needs. That's why we're building use cases\r\nwith code samples you can take and start running immediately, taking you from\r\nzero to hero with minimal effort.\r\n\r\n## Wrap Up\r\n\r\nThere's a ton of features, content, and more that I can't wait to share, but\r\nfor now: Hello world! We're Deepgram and we believe every voice deserves to be\r\nheard and understood.\r\n\r\n        ", "html": '<p>You love to build and learn, and we love to help you do it. That\u2019s why the team\r\nat Deepgram has spent the past few months building a new home for our\r\ndocumentation and API reference. Of course, we couldn\u2019t stop there so let me\r\ntake a few minutes to highlight what you\u2019ll find on the new Deepgram Developer\r\nPlatform.</p>\n<h2 id="documentation">Documentation</h2>\n<p>As I mentioned, this is where you\u2019ll find the Deepgram API documentation moving\r\nforward. But as we moved, we took time to review each page to ensure it was\r\nup-to-date and accurate so you can get started building fast. There\u2019s <strong>much</strong>\r\nmore coming in this area. Stay tuned for new content targeting different\r\nlearning methods.</p>\n<h2 id="sdks--tools">SDKs & Tools</h2>\n<p>In the new SDKs & Tools area, you will find our official & community-driven\r\nSDKs. You\u2019ll also find integrations with 3rd parties like Twilio & Zoom, as well\r\nas accelerators that make it easy to start getting value from the Deepgram API\r\nwith little to no code.</p>\n<h2 id="developer-blog">Developer Blog</h2>\n<p>We\u2019re stoked about some of the content we have planned for our new\r\ndeveloper blog. From beginner to advanced, our goal is to help all developers\r\nlearn exciting new technologies and level up their skills. In the coming months,\r\nwe\u2019ll open the ability for you to contribute to our blog and even be compensated\r\nfor your work.</p>\n<h2 id="use-cases">Use Cases</h2>\n<p>When you\u2019re evaluating APIs, it\u2019s always easier to make decisions if you can\r\nsee examples that illustrate your needs. That\u2019s why we\u2019re building use cases\r\nwith code samples you can take and start running immediately, taking you from\r\nzero to hero with minimal effort.</p>\n<h2 id="wrap-up">Wrap Up</h2>\n<p>There\u2019s a ton of features, content, and more that I can\u2019t wait to share, but\r\nfor now: Hello world! We\u2019re Deepgram and we believe every voice deserves to be\r\nheard and understood.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/hello-world/index.md" };
function rawContent() {
  return "\r\nYou love to build and learn, and we love to help you do it. That's why the team\r\nat Deepgram has spent the past few months building a new home for our\r\ndocumentation and API reference. Of course, we couldn't stop there so let me\r\ntake a few minutes to highlight what you'll find on the new Deepgram Developer\r\nPlatform.\r\n\r\n## Documentation\r\n\r\nAs I mentioned, this is where you'll find the Deepgram API documentation moving\r\nforward. But as we moved, we took time to review each page to ensure it was\r\nup-to-date and accurate so you can get started building fast. There's **much**\r\nmore coming in this area. Stay tuned for new content targeting different\r\nlearning methods.\r\n\r\n## SDKs & Tools\r\n\r\nIn the new SDKs & Tools area, you will find our official & community-driven\r\nSDKs. You'll also find integrations with 3rd parties like Twilio & Zoom, as well\r\nas accelerators that make it easy to start getting value from the Deepgram API\r\nwith little to no code.\r\n\r\n## Developer Blog\r\n\r\nWe're stoked about some of the content we have planned for our new\r\ndeveloper blog. From beginner to advanced, our goal is to help all developers\r\nlearn exciting new technologies and level up their skills. In the coming months,\r\nwe'll open the ability for you to contribute to our blog and even be compensated\r\nfor your work.\r\n\r\n## Use Cases\r\n\r\nWhen you're evaluating APIs, it's always easier to make decisions if you can\r\nsee examples that illustrate your needs. That's why we're building use cases\r\nwith code samples you can take and start running immediately, taking you from\r\nzero to hero with minimal effort.\r\n\r\n## Wrap Up\r\n\r\nThere's a ton of features, content, and more that I can't wait to share, but\r\nfor now: Hello world! We're Deepgram and we believe every voice deserves to be\r\nheard and understood.\r\n\r\n        ";
}
function compiledContent() {
  return '<p>You love to build and learn, and we love to help you do it. That\u2019s why the team\r\nat Deepgram has spent the past few months building a new home for our\r\ndocumentation and API reference. Of course, we couldn\u2019t stop there so let me\r\ntake a few minutes to highlight what you\u2019ll find on the new Deepgram Developer\r\nPlatform.</p>\n<h2 id="documentation">Documentation</h2>\n<p>As I mentioned, this is where you\u2019ll find the Deepgram API documentation moving\r\nforward. But as we moved, we took time to review each page to ensure it was\r\nup-to-date and accurate so you can get started building fast. There\u2019s <strong>much</strong>\r\nmore coming in this area. Stay tuned for new content targeting different\r\nlearning methods.</p>\n<h2 id="sdks--tools">SDKs & Tools</h2>\n<p>In the new SDKs & Tools area, you will find our official & community-driven\r\nSDKs. You\u2019ll also find integrations with 3rd parties like Twilio & Zoom, as well\r\nas accelerators that make it easy to start getting value from the Deepgram API\r\nwith little to no code.</p>\n<h2 id="developer-blog">Developer Blog</h2>\n<p>We\u2019re stoked about some of the content we have planned for our new\r\ndeveloper blog. From beginner to advanced, our goal is to help all developers\r\nlearn exciting new technologies and level up their skills. In the coming months,\r\nwe\u2019ll open the ability for you to contribute to our blog and even be compensated\r\nfor your work.</p>\n<h2 id="use-cases">Use Cases</h2>\n<p>When you\u2019re evaluating APIs, it\u2019s always easier to make decisions if you can\r\nsee examples that illustrate your needs. That\u2019s why we\u2019re building use cases\r\nwith code samples you can take and start running immediately, taking you from\r\nzero to hero with minimal effort.</p>\n<h2 id="wrap-up">Wrap Up</h2>\n<p>There\u2019s a ton of features, content, and more that I can\u2019t wait to share, but\r\nfor now: Hello world! We\u2019re Deepgram and we believe every voice deserves to be\r\nheard and understood.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/hello-world/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>You love to build and learn, and we love to help you do it. That’s why the team
at Deepgram has spent the past few months building a new home for our
documentation and API reference. Of course, we couldn’t stop there so let me
take a few minutes to highlight what you’ll find on the new Deepgram Developer
Platform.</p>
<h2 id="documentation">Documentation</h2>
<p>As I mentioned, this is where you’ll find the Deepgram API documentation moving
forward. But as we moved, we took time to review each page to ensure it was
up-to-date and accurate so you can get started building fast. There’s <strong>much</strong>
more coming in this area. Stay tuned for new content targeting different
learning methods.</p>
<h2 id="sdks--tools">SDKs & Tools</h2>
<p>In the new SDKs & Tools area, you will find our official & community-driven
SDKs. You’ll also find integrations with 3rd parties like Twilio & Zoom, as well
as accelerators that make it easy to start getting value from the Deepgram API
with little to no code.</p>
<h2 id="developer-blog">Developer Blog</h2>
<p>We’re stoked about some of the content we have planned for our new
developer blog. From beginner to advanced, our goal is to help all developers
learn exciting new technologies and level up their skills. In the coming months,
we’ll open the ability for you to contribute to our blog and even be compensated
for your work.</p>
<h2 id="use-cases">Use Cases</h2>
<p>When you’re evaluating APIs, it’s always easier to make decisions if you can
see examples that illustrate your needs. That’s why we’re building use cases
with code samples you can take and start running immediately, taking you from
zero to hero with minimal effort.</p>
<h2 id="wrap-up">Wrap Up</h2>
<p>There’s a ton of features, content, and more that I can’t wait to share, but
for now: Hello world! We’re Deepgram and we believe every voice deserves to be
heard and understood.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/hello-world/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
