import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderComponent } from '../entry.mjs';
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

const metadata = { "headings": [], "source": `I ate the world's hottest pepper to get you to respond to this email. Your move.

<iframe class="wistia_embed" title="Wistia video player" src="https://fast.wistia.net/embed/iframe/275gfw0348?videoFoam=true" name="wistia_embed" width="600" height="315" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen"></iframe>

It hurts, a lot. Ready to get started? [Sign up for a free API key](https://console.deepgram.com/signup) or [contact us](https://deepgram.com/contact-us/) if you have questions.

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>`, "html": '<p>I ate the world\u2019s hottest pepper to get you to respond to this email. Your move.</p>\n<iframe class="wistia_embed" title="Wistia video player" src="https://fast.wistia.net/embed/iframe/275gfw0348?videoFoam=true" name="wistia_embed" width="600" height="315" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen" />\n<p>It hurts, a lot. Ready to get started? <a href="https://console.deepgram.com/signup">Sign up for a free API key</a> or <a href="https://deepgram.com/contact-us/">contact us</a> if you have questions.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />' };
const frontmatter = { "title": "Chili Pepper", "description": "Want to see Deepgrams founder eat a chili pepper? Not sure why you wouldn't. Check it out.", "date": "2020-01-01T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981336/blog/chili-pepper/chili-pepper%402x.jpg", "authors": ["scott-stephenson"], "category": "dg-insider", "tags": ["fun"], "seo": { "title": "Chili Pepper", "description": "Want to see Deepgrams founder eat a chili pepper? Not sure why you wouldn't. Check it out." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981336/blog/chili-pepper/chili-pepper%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/34c4678", "twitter": "https://dpgr.am/50c551f", "linkedin": "https://dpgr.am/cff6b95", "reddit": "https://dpgr.am/db72e68", "facebook": "https://dpgr.am/866a9f2" }, "astro": { "headings": [], "source": `I ate the world's hottest pepper to get you to respond to this email. Your move.

<iframe class="wistia_embed" title="Wistia video player" src="https://fast.wistia.net/embed/iframe/275gfw0348?videoFoam=true" name="wistia_embed" width="600" height="315" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen"></iframe>

It hurts, a lot. Ready to get started? [Sign up for a free API key](https://console.deepgram.com/signup) or [contact us](https://deepgram.com/contact-us/) if you have questions.

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>`, "html": '<p>I ate the world\u2019s hottest pepper to get you to respond to this email. Your move.</p>\n<iframe class="wistia_embed" title="Wistia video player" src="https://fast.wistia.net/embed/iframe/275gfw0348?videoFoam=true" name="wistia_embed" width="600" height="315" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen" />\n<p>It hurts, a lot. Ready to get started? <a href="https://console.deepgram.com/signup">Sign up for a free API key</a> or <a href="https://deepgram.com/contact-us/">contact us</a> if you have questions.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/chili-pepper/index.md" };
function rawContent() {
  return `I ate the world's hottest pepper to get you to respond to this email. Your move.

<iframe class="wistia_embed" title="Wistia video player" src="https://fast.wistia.net/embed/iframe/275gfw0348?videoFoam=true" name="wistia_embed" width="600" height="315" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen"></iframe>

It hurts, a lot. Ready to get started? [Sign up for a free API key](https://console.deepgram.com/signup) or [contact us](https://deepgram.com/contact-us/) if you have questions.

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>`;
}
function compiledContent() {
  return '<p>I ate the world\u2019s hottest pepper to get you to respond to this email. Your move.</p>\n<iframe class="wistia_embed" title="Wistia video player" src="https://fast.wistia.net/embed/iframe/275gfw0348?videoFoam=true" name="wistia_embed" width="600" height="315" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen" />\n<p>It hurts, a lot. Ready to get started? <a href="https://console.deepgram.com/signup">Sign up for a free API key</a> or <a href="https://deepgram.com/contact-us/">contact us</a> if you have questions.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/chili-pepper/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>I ate the world’s hottest pepper to get you to respond to this email. Your move.</p>
<iframe class="wistia_embed" title="Wistia video player" src="https://fast.wistia.net/embed/iframe/275gfw0348?videoFoam=true" name="wistia_embed" width="600" height="315" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen"></iframe>
<p>It hurts, a lot. Ready to get started? <a href="https://console.deepgram.com/signup">Sign up for a free API key</a> or <a href="https://deepgram.com/contact-us/">contact us</a> if you have questions.</p>
${renderComponent($$result, "WhitepaperPromo", WhitepaperPromo, { "whitepaper": "deepgram-whitepaper-how-deepgram-works" })}`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/chili-pepper/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
