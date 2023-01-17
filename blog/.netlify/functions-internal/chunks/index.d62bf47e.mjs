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
/* empty css                           *//* empty css                           *//* empty css                           */import '@storyblok/js';
/* empty css                           *//* empty css                          */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           */import 'camelcase';
import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [], "source": '\r\nDeepgram community member Filip Grebowski recently built a really cool demo which allows him to build websites by dictating elements and their attributes.\r\n\r\n<YouTube id="rhFlRPz-AxQ"></YouTube>\r\n\r\nIn Part 1, Filip expands on our [Get Live Speech Transcriptions In Your Browser](https://blog.deepgram.com/live-transcription-mic-browser/) demo to detect keywords and build a webpage.\r\n\r\n![Actions: add, delete, modify, save, structure. Elements: button, title, paragraph, input. Sub-actions: all, at index. Sub-category: name, palceholder, default.](https://res.cloudinary.com/deepgram/image/upload/v1646692165/blog/2022/02/coding-website-with-voice/keywords.png)\r\n\r\n<YouTube id="HgoUIIhjc2A"></YouTube>\r\n\r\nIn Part 2, more functionality was introduced to add layout and styling to a webpage.\r\n\r\n        ', "html": '<p>Deepgram community member Filip Grebowski recently built a really cool demo which allows him to build websites by dictating elements and their attributes.</p>\n<YouTube id="rhFlRPz-AxQ" />\n<p>In Part 1, Filip expands on our <a href="https://blog.deepgram.com/live-transcription-mic-browser/">Get Live Speech Transcriptions In Your Browser</a> demo to detect keywords and build a webpage.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646692165/blog/2022/02/coding-website-with-voice/keywords.png" alt="Actions: add, delete, modify, save, structure. Elements: button, title, paragraph, input. Sub-actions: all, at index. Sub-category: name, palceholder, default."></p>\n<YouTube id="HgoUIIhjc2A" />\n<p>In Part 2, more functionality was introduced to add layout and styling to a webpage.</p>' };
const frontmatter = { "title": "Video: Coding a Website With Your Voice", "description": "Deepgram community member Filip builds a project which creates websites through voice commands. Find out how.", "date": "2022-02-18T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1646692163/blog/2022/02/coding-website-with-voice/cover.png", "authors": ["kevin-lewis"], "category": "project-showcase", "tags": ["javascript"], "seo": { "title": "Video: Coding a Website With Your Voice", "description": "Deepgram community member Filip builds a project which creates websites through voice commands. Find out how." }, "shorturls": { "share": "https://dpgr.am/7718cf2", "twitter": "https://dpgr.am/9b4fcd7", "linkedin": "https://dpgr.am/2c77018", "reddit": "https://dpgr.am/143cc54", "facebook": "https://dpgr.am/30931e1" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661453860/blog/coding-website-with-voice/ograph.png" }, "astro": { "headings": [], "source": '\r\nDeepgram community member Filip Grebowski recently built a really cool demo which allows him to build websites by dictating elements and their attributes.\r\n\r\n<YouTube id="rhFlRPz-AxQ"></YouTube>\r\n\r\nIn Part 1, Filip expands on our [Get Live Speech Transcriptions In Your Browser](https://blog.deepgram.com/live-transcription-mic-browser/) demo to detect keywords and build a webpage.\r\n\r\n![Actions: add, delete, modify, save, structure. Elements: button, title, paragraph, input. Sub-actions: all, at index. Sub-category: name, palceholder, default.](https://res.cloudinary.com/deepgram/image/upload/v1646692165/blog/2022/02/coding-website-with-voice/keywords.png)\r\n\r\n<YouTube id="HgoUIIhjc2A"></YouTube>\r\n\r\nIn Part 2, more functionality was introduced to add layout and styling to a webpage.\r\n\r\n        ', "html": '<p>Deepgram community member Filip Grebowski recently built a really cool demo which allows him to build websites by dictating elements and their attributes.</p>\n<YouTube id="rhFlRPz-AxQ" />\n<p>In Part 1, Filip expands on our <a href="https://blog.deepgram.com/live-transcription-mic-browser/">Get Live Speech Transcriptions In Your Browser</a> demo to detect keywords and build a webpage.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646692165/blog/2022/02/coding-website-with-voice/keywords.png" alt="Actions: add, delete, modify, save, structure. Elements: button, title, paragraph, input. Sub-actions: all, at index. Sub-category: name, palceholder, default."></p>\n<YouTube id="HgoUIIhjc2A" />\n<p>In Part 2, more functionality was introduced to add layout and styling to a webpage.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/coding-website-with-voice/index.md" };
function rawContent() {
  return '\r\nDeepgram community member Filip Grebowski recently built a really cool demo which allows him to build websites by dictating elements and their attributes.\r\n\r\n<YouTube id="rhFlRPz-AxQ"></YouTube>\r\n\r\nIn Part 1, Filip expands on our [Get Live Speech Transcriptions In Your Browser](https://blog.deepgram.com/live-transcription-mic-browser/) demo to detect keywords and build a webpage.\r\n\r\n![Actions: add, delete, modify, save, structure. Elements: button, title, paragraph, input. Sub-actions: all, at index. Sub-category: name, palceholder, default.](https://res.cloudinary.com/deepgram/image/upload/v1646692165/blog/2022/02/coding-website-with-voice/keywords.png)\r\n\r\n<YouTube id="HgoUIIhjc2A"></YouTube>\r\n\r\nIn Part 2, more functionality was introduced to add layout and styling to a webpage.\r\n\r\n        ';
}
function compiledContent() {
  return '<p>Deepgram community member Filip Grebowski recently built a really cool demo which allows him to build websites by dictating elements and their attributes.</p>\n<YouTube id="rhFlRPz-AxQ" />\n<p>In Part 1, Filip expands on our <a href="https://blog.deepgram.com/live-transcription-mic-browser/">Get Live Speech Transcriptions In Your Browser</a> demo to detect keywords and build a webpage.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646692165/blog/2022/02/coding-website-with-voice/keywords.png" alt="Actions: add, delete, modify, save, structure. Elements: button, title, paragraph, input. Sub-actions: all, at index. Sub-category: name, palceholder, default."></p>\n<YouTube id="HgoUIIhjc2A" />\n<p>In Part 2, more functionality was introduced to add layout and styling to a webpage.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/coding-website-with-voice/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Deepgram community member Filip Grebowski recently built a really cool demo which allows him to build websites by dictating elements and their attributes.</p>
${renderComponent($$result, "YouTube", YouTube, { "id": "rhFlRPz-AxQ" })}
<p>In Part 1, Filip expands on our <a href="https://blog.deepgram.com/live-transcription-mic-browser/">Get Live Speech Transcriptions In Your Browser</a> demo to detect keywords and build a webpage.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646692165/blog/2022/02/coding-website-with-voice/keywords.png" alt="Actions: add, delete, modify, save, structure. Elements: button, title, paragraph, input. Sub-actions: all, at index. Sub-category: name, palceholder, default."></p>
${renderComponent($$result, "YouTube", YouTube, { "id": "HgoUIIhjc2A" })}
<p>In Part 2, more functionality was introduced to add layout and styling to a webpage.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/coding-website-with-voice/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
