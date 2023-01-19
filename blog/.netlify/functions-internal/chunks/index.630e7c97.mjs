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

const metadata = { "headings": [], "source": "\r\nThe Scripps National Spelling Bee is America's longest-running educational competition - its primary goal being to help young people increase the size of their vocabulary through practice and a friendly competitive atmosphere. The team behind Spelling Hero wanted to simulate this great educational experience in the browser. I sat down with [Judah Daniels](https://www.linkedin.com/in/judah-daniels/), [Leon Zhang](https://www.linkedin.com/in/leon-bz/), [Saksham Shah](https://www.linkedin.com/in/saksham-shah-9803581b9/), and [Saomiyan Mathetharan](https://linkedin.com/in/saomiyan-mathetharan) to ask them about their project.\r\n\r\nSpelling Hero is a spelling bee simulator to emulate the experience of participating in a spelling bee competition. Users select a difficulty level, and the browser speaks a word aloud. Players then have to spell out the word to complete the level.\r\n\r\n![Easy mode. Word 1 of 5 with a score of 1. The word 'answer' is in green and displayed as correct. Several buttons read start spelling, repeat word, definition, language of origin, type of word, and example of sentence.](https://res.cloudinary.com/deepgram/image/upload/v1646255611/blog/2022/04/practice-spelling-bees-hero/screenshot.png)\r\n\r\nSpelling Hero's data was manually curated in this first version, and each word also includes a definition, origin, type, and a sample sentence - all options given to spelling bee participants.\r\n\r\nThe team used the Deepgram Speech Recognition API to understand a user's voice input, basing their code on our [Browser Live Transcription](https://blog.deepgram.com/live-transcription-mic-browser/) tutorial. The user interface was built with P5.js ([see our P5.js tutorial here](https://blog.deepgram.com/p5js-getting-started/)), and you can check out the [code on GitHub](https://github.com/saksham-shah/deepgram-game).\r\n\r\n        ", "html": '<p>The Scripps National Spelling Bee is America\u2019s longest-running educational competition - its primary goal being to help young people increase the size of their vocabulary through practice and a friendly competitive atmosphere. The team behind Spelling Hero wanted to simulate this great educational experience in the browser. I sat down with <a href="https://www.linkedin.com/in/judah-daniels/">Judah Daniels</a>, <a href="https://www.linkedin.com/in/leon-bz/">Leon Zhang</a>, <a href="https://www.linkedin.com/in/saksham-shah-9803581b9/">Saksham Shah</a>, and <a href="https://linkedin.com/in/saomiyan-mathetharan">Saomiyan Mathetharan</a> to ask them about their project.</p>\n<p>Spelling Hero is a spelling bee simulator to emulate the experience of participating in a spelling bee competition. Users select a difficulty level, and the browser speaks a word aloud. Players then have to spell out the word to complete the level.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646255611/blog/2022/04/practice-spelling-bees-hero/screenshot.png" alt="Easy mode. Word 1 of 5 with a score of 1. The word &#x27;answer&#x27; is in green and displayed as correct. Several buttons read start spelling, repeat word, definition, language of origin, type of word, and example of sentence."></p>\n<p>Spelling Hero\u2019s data was manually curated in this first version, and each word also includes a definition, origin, type, and a sample sentence - all options given to spelling bee participants.</p>\n<p>The team used the Deepgram Speech Recognition API to understand a user\u2019s voice input, basing their code on our <a href="https://blog.deepgram.com/live-transcription-mic-browser/">Browser Live Transcription</a> tutorial. The user interface was built with P5.js (<a href="https://blog.deepgram.com/p5js-getting-started/">see our P5.js tutorial here</a>), and you can check out the <a href="https://github.com/saksham-shah/deepgram-game">code on GitHub</a>.</p>' };
const frontmatter = { "title": "Practice Spelling Bees with Spelling Hero", "description": "We speak to the developers behind Spelling Hero - a spelling bee simulator complete with contextual usage and multi-difficulty. Learn more here.", "date": "2022-04-05T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1646255609/blog/2022/04/practice-spelling-bees-hero/cover.jpg", "authors": ["kevin-lewis"], "category": "project-showcase", "tags": ["hackathon", "javascript"], "seo": { "title": "Practice Spelling Bees with Spelling Hero", "description": "We speak to the developers behind Spelling Hero - a spelling bee simulator complete with contextual usage and multi-difficulty. Learn more here." }, "shorturls": { "share": "https://dpgr.am/57b1035", "twitter": "https://dpgr.am/19800df", "linkedin": "https://dpgr.am/c19e631", "reddit": "https://dpgr.am/e61da07", "facebook": "https://dpgr.am/0fb0ea5" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661454069/blog/practice-spelling-bees-hero/ograph.png" }, "astro": { "headings": [], "source": "\r\nThe Scripps National Spelling Bee is America's longest-running educational competition - its primary goal being to help young people increase the size of their vocabulary through practice and a friendly competitive atmosphere. The team behind Spelling Hero wanted to simulate this great educational experience in the browser. I sat down with [Judah Daniels](https://www.linkedin.com/in/judah-daniels/), [Leon Zhang](https://www.linkedin.com/in/leon-bz/), [Saksham Shah](https://www.linkedin.com/in/saksham-shah-9803581b9/), and [Saomiyan Mathetharan](https://linkedin.com/in/saomiyan-mathetharan) to ask them about their project.\r\n\r\nSpelling Hero is a spelling bee simulator to emulate the experience of participating in a spelling bee competition. Users select a difficulty level, and the browser speaks a word aloud. Players then have to spell out the word to complete the level.\r\n\r\n![Easy mode. Word 1 of 5 with a score of 1. The word 'answer' is in green and displayed as correct. Several buttons read start spelling, repeat word, definition, language of origin, type of word, and example of sentence.](https://res.cloudinary.com/deepgram/image/upload/v1646255611/blog/2022/04/practice-spelling-bees-hero/screenshot.png)\r\n\r\nSpelling Hero's data was manually curated in this first version, and each word also includes a definition, origin, type, and a sample sentence - all options given to spelling bee participants.\r\n\r\nThe team used the Deepgram Speech Recognition API to understand a user's voice input, basing their code on our [Browser Live Transcription](https://blog.deepgram.com/live-transcription-mic-browser/) tutorial. The user interface was built with P5.js ([see our P5.js tutorial here](https://blog.deepgram.com/p5js-getting-started/)), and you can check out the [code on GitHub](https://github.com/saksham-shah/deepgram-game).\r\n\r\n        ", "html": '<p>The Scripps National Spelling Bee is America\u2019s longest-running educational competition - its primary goal being to help young people increase the size of their vocabulary through practice and a friendly competitive atmosphere. The team behind Spelling Hero wanted to simulate this great educational experience in the browser. I sat down with <a href="https://www.linkedin.com/in/judah-daniels/">Judah Daniels</a>, <a href="https://www.linkedin.com/in/leon-bz/">Leon Zhang</a>, <a href="https://www.linkedin.com/in/saksham-shah-9803581b9/">Saksham Shah</a>, and <a href="https://linkedin.com/in/saomiyan-mathetharan">Saomiyan Mathetharan</a> to ask them about their project.</p>\n<p>Spelling Hero is a spelling bee simulator to emulate the experience of participating in a spelling bee competition. Users select a difficulty level, and the browser speaks a word aloud. Players then have to spell out the word to complete the level.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646255611/blog/2022/04/practice-spelling-bees-hero/screenshot.png" alt="Easy mode. Word 1 of 5 with a score of 1. The word &#x27;answer&#x27; is in green and displayed as correct. Several buttons read start spelling, repeat word, definition, language of origin, type of word, and example of sentence."></p>\n<p>Spelling Hero\u2019s data was manually curated in this first version, and each word also includes a definition, origin, type, and a sample sentence - all options given to spelling bee participants.</p>\n<p>The team used the Deepgram Speech Recognition API to understand a user\u2019s voice input, basing their code on our <a href="https://blog.deepgram.com/live-transcription-mic-browser/">Browser Live Transcription</a> tutorial. The user interface was built with P5.js (<a href="https://blog.deepgram.com/p5js-getting-started/">see our P5.js tutorial here</a>), and you can check out the <a href="https://github.com/saksham-shah/deepgram-game">code on GitHub</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/practice-spelling-bees-hero/index.md" };
function rawContent() {
  return "\r\nThe Scripps National Spelling Bee is America's longest-running educational competition - its primary goal being to help young people increase the size of their vocabulary through practice and a friendly competitive atmosphere. The team behind Spelling Hero wanted to simulate this great educational experience in the browser. I sat down with [Judah Daniels](https://www.linkedin.com/in/judah-daniels/), [Leon Zhang](https://www.linkedin.com/in/leon-bz/), [Saksham Shah](https://www.linkedin.com/in/saksham-shah-9803581b9/), and [Saomiyan Mathetharan](https://linkedin.com/in/saomiyan-mathetharan) to ask them about their project.\r\n\r\nSpelling Hero is a spelling bee simulator to emulate the experience of participating in a spelling bee competition. Users select a difficulty level, and the browser speaks a word aloud. Players then have to spell out the word to complete the level.\r\n\r\n![Easy mode. Word 1 of 5 with a score of 1. The word 'answer' is in green and displayed as correct. Several buttons read start spelling, repeat word, definition, language of origin, type of word, and example of sentence.](https://res.cloudinary.com/deepgram/image/upload/v1646255611/blog/2022/04/practice-spelling-bees-hero/screenshot.png)\r\n\r\nSpelling Hero's data was manually curated in this first version, and each word also includes a definition, origin, type, and a sample sentence - all options given to spelling bee participants.\r\n\r\nThe team used the Deepgram Speech Recognition API to understand a user's voice input, basing their code on our [Browser Live Transcription](https://blog.deepgram.com/live-transcription-mic-browser/) tutorial. The user interface was built with P5.js ([see our P5.js tutorial here](https://blog.deepgram.com/p5js-getting-started/)), and you can check out the [code on GitHub](https://github.com/saksham-shah/deepgram-game).\r\n\r\n        ";
}
function compiledContent() {
  return '<p>The Scripps National Spelling Bee is America\u2019s longest-running educational competition - its primary goal being to help young people increase the size of their vocabulary through practice and a friendly competitive atmosphere. The team behind Spelling Hero wanted to simulate this great educational experience in the browser. I sat down with <a href="https://www.linkedin.com/in/judah-daniels/">Judah Daniels</a>, <a href="https://www.linkedin.com/in/leon-bz/">Leon Zhang</a>, <a href="https://www.linkedin.com/in/saksham-shah-9803581b9/">Saksham Shah</a>, and <a href="https://linkedin.com/in/saomiyan-mathetharan">Saomiyan Mathetharan</a> to ask them about their project.</p>\n<p>Spelling Hero is a spelling bee simulator to emulate the experience of participating in a spelling bee competition. Users select a difficulty level, and the browser speaks a word aloud. Players then have to spell out the word to complete the level.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646255611/blog/2022/04/practice-spelling-bees-hero/screenshot.png" alt="Easy mode. Word 1 of 5 with a score of 1. The word &#x27;answer&#x27; is in green and displayed as correct. Several buttons read start spelling, repeat word, definition, language of origin, type of word, and example of sentence."></p>\n<p>Spelling Hero\u2019s data was manually curated in this first version, and each word also includes a definition, origin, type, and a sample sentence - all options given to spelling bee participants.</p>\n<p>The team used the Deepgram Speech Recognition API to understand a user\u2019s voice input, basing their code on our <a href="https://blog.deepgram.com/live-transcription-mic-browser/">Browser Live Transcription</a> tutorial. The user interface was built with P5.js (<a href="https://blog.deepgram.com/p5js-getting-started/">see our P5.js tutorial here</a>), and you can check out the <a href="https://github.com/saksham-shah/deepgram-game">code on GitHub</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/practice-spelling-bees-hero/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>The Scripps National Spelling Bee is America’s longest-running educational competition - its primary goal being to help young people increase the size of their vocabulary through practice and a friendly competitive atmosphere. The team behind Spelling Hero wanted to simulate this great educational experience in the browser. I sat down with <a href="https://www.linkedin.com/in/judah-daniels/">Judah Daniels</a>, <a href="https://www.linkedin.com/in/leon-bz/">Leon Zhang</a>, <a href="https://www.linkedin.com/in/saksham-shah-9803581b9/">Saksham Shah</a>, and <a href="https://linkedin.com/in/saomiyan-mathetharan">Saomiyan Mathetharan</a> to ask them about their project.</p>
<p>Spelling Hero is a spelling bee simulator to emulate the experience of participating in a spelling bee competition. Users select a difficulty level, and the browser speaks a word aloud. Players then have to spell out the word to complete the level.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646255611/blog/2022/04/practice-spelling-bees-hero/screenshot.png" alt="Easy mode. Word 1 of 5 with a score of 1. The word 'answer' is in green and displayed as correct. Several buttons read start spelling, repeat word, definition, language of origin, type of word, and example of sentence."></p>
<p>Spelling Hero’s data was manually curated in this first version, and each word also includes a definition, origin, type, and a sample sentence - all options given to spelling bee participants.</p>
<p>The team used the Deepgram Speech Recognition API to understand a user’s voice input, basing their code on our <a href="https://blog.deepgram.com/live-transcription-mic-browser/">Browser Live Transcription</a> tutorial. The user interface was built with P5.js (<a href="https://blog.deepgram.com/p5js-getting-started/">see our P5.js tutorial here</a>), and you can check out the <a href="https://github.com/saksham-shah/deepgram-game">code on GitHub</a>.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/practice-spelling-bees-hero/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
