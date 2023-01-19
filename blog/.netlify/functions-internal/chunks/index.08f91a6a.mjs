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

const metadata = { "headings": [], "source": "The [2021 State of Automatic Speech Recognition (ASR) report](https://deepgram.com/state-of-asr-report/) details where enterprises are currently using this technology and where they see the most value.  Find out why 85% of enterprises say that ASR is important or very important to their future strategy. \n\n[![](https://res.cloudinary.com/deepgram/image/upload/v1661976835/blog/2021-state-of-automatic-speech-recognition-infographic/state-of-asr-infogfx-full%402x.png)](https://deepgram.com/state-of-asr-report/)", "html": '<p>The <a href="https://deepgram.com/state-of-asr-report/">2021 State of Automatic Speech Recognition (ASR) report</a> details where enterprises are currently using this technology and where they see the most value.  Find out why 85% of enterprises say that ASR is important or very important to their future strategy.</p>\n<p><a href="https://deepgram.com/state-of-asr-report/"><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976835/blog/2021-state-of-automatic-speech-recognition-infographic/state-of-asr-infogfx-full%402x.png" alt=""></a></p>' };
const frontmatter = { "title": "2021 State of Automatic Speech Recognition Infographic", "description": "The 2021 State of Automatic Speech Recognition (ASR) report details where enterprises are currently using this technology and where they see the most value. Find out why 85% of enterprises say that ASR is important or very important to their future strategy.", "date": "2021-03-03T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981248/blog/2021-state-of-automatic-speech-recognition-infographic/2021-state-of-asr-infogfx%402x.jpg", "authors": ["keith-lam"], "category": "speech-trends", "tags": ["education"], "seo": { "title": "2021 State of Automatic Speech Recognition Infographic", "description": "The 2021 State of Automatic Speech Recognition (ASR) report details where enterprises are currently using this technology and where they see the most value.\xA0Find out why 85% of enterprises say that ASR is important or very important to their future strategy." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981248/blog/2021-state-of-automatic-speech-recognition-infographic/2021-state-of-asr-infogfx%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/51a2e3b", "twitter": "https://dpgr.am/8a7f914", "linkedin": "https://dpgr.am/f727a45", "reddit": "https://dpgr.am/c1c5957", "facebook": "https://dpgr.am/adbc253" }, "astro": { "headings": [], "source": "The [2021 State of Automatic Speech Recognition (ASR) report](https://deepgram.com/state-of-asr-report/) details where enterprises are currently using this technology and where they see the most value.  Find out why 85% of enterprises say that ASR is important or very important to their future strategy. \n\n[![](https://res.cloudinary.com/deepgram/image/upload/v1661976835/blog/2021-state-of-automatic-speech-recognition-infographic/state-of-asr-infogfx-full%402x.png)](https://deepgram.com/state-of-asr-report/)", "html": '<p>The <a href="https://deepgram.com/state-of-asr-report/">2021 State of Automatic Speech Recognition (ASR) report</a> details where enterprises are currently using this technology and where they see the most value.  Find out why 85% of enterprises say that ASR is important or very important to their future strategy.</p>\n<p><a href="https://deepgram.com/state-of-asr-report/"><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976835/blog/2021-state-of-automatic-speech-recognition-infographic/state-of-asr-infogfx-full%402x.png" alt=""></a></p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/2021-state-of-automatic-speech-recognition-infographic/index.md" };
function rawContent() {
  return "The [2021 State of Automatic Speech Recognition (ASR) report](https://deepgram.com/state-of-asr-report/) details where enterprises are currently using this technology and where they see the most value.  Find out why 85% of enterprises say that ASR is important or very important to their future strategy. \n\n[![](https://res.cloudinary.com/deepgram/image/upload/v1661976835/blog/2021-state-of-automatic-speech-recognition-infographic/state-of-asr-infogfx-full%402x.png)](https://deepgram.com/state-of-asr-report/)";
}
function compiledContent() {
  return '<p>The <a href="https://deepgram.com/state-of-asr-report/">2021 State of Automatic Speech Recognition (ASR) report</a> details where enterprises are currently using this technology and where they see the most value.  Find out why 85% of enterprises say that ASR is important or very important to their future strategy.</p>\n<p><a href="https://deepgram.com/state-of-asr-report/"><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976835/blog/2021-state-of-automatic-speech-recognition-infographic/state-of-asr-infogfx-full%402x.png" alt=""></a></p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/2021-state-of-automatic-speech-recognition-infographic/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>The <a href="https://deepgram.com/state-of-asr-report/">2021 State of Automatic Speech Recognition (ASR) report</a> details where enterprises are currently using this technology and where they see the most value.  Find out why 85% of enterprises say that ASR is important or very important to their future strategy.</p>
<p><a href="https://deepgram.com/state-of-asr-report/"><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976835/blog/2021-state-of-automatic-speech-recognition-infographic/state-of-asr-infogfx-full%402x.png" alt=""></a></p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/2021-state-of-automatic-speech-recognition-infographic/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
