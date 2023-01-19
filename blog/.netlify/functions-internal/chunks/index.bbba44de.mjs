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

const metadata = { "headings": [], "source": `\r
A few weeks ago I spent an evening building a small personal project with a Raspberry Pi and Deepgram - a wearable screen that live captions your voice to help people understand you while wearing a mask. [I tweeted it and it blew up.](https://twitter.com/_phzn/status/1478821408486699009)\r
\r
Something about a solution to this simple and universal problem made this project get way more popular than I expected, and made me take more time to build additional features.\r
\r
In this video, I show you how I built this project, along with the parts you need and steps to take to create your own. This project was build with JavaScript, Vue.js, Node.js, Deepgram, and iTranslate. It is hosted for free on Glitch.\r
\r
<YouTube id="VPdvo6fF0zc"></YouTube>\r
\r
Important links:\r
\r
*   [Glitch Remix URL](https://glitch.com/edit/#!/remix/deepgram-transcription-badge)\r
*   [How to automatically launch Chromium in Kiosk Mode](https://blog.deepgram.com/chromium-kiosk-pi/)\r
\r
Code:\r
\r
*   [Code in Glitch](https://glitch.com/~deepgram-transcription-badge)\r
*   [Code in GitHub](https://github.com/deepgram-devs/live-transcription-badge)\r
\r
If you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).\r
\r
        `, "html": '<p>A few weeks ago I spent an evening building a small personal project with a Raspberry Pi and Deepgram - a wearable screen that live captions your voice to help people understand you while wearing a mask. <a href="https://twitter.com/_phzn/status/1478821408486699009">I tweeted it and it blew up.</a></p>\n<p>Something about a solution to this simple and universal problem made this project get way more popular than I expected, and made me take more time to build additional features.</p>\n<p>In this video, I show you how I built this project, along with the parts you need and steps to take to create your own. This project was build with JavaScript, Vue.js, Node.js, Deepgram, and iTranslate. It is hosted for free on Glitch.</p>\n<YouTube id="VPdvo6fF0zc" />\n<p>Important links:</p>\n<ul>\n<li><a href="https://glitch.com/edit/#!/remix/deepgram-transcription-badge">Glitch Remix URL</a></li>\n<li><a href="https://blog.deepgram.com/chromium-kiosk-pi/">How to automatically launch Chromium in Kiosk Mode</a></li>\n</ul>\n<p>Code:</p>\n<ul>\n<li><a href="https://glitch.com/~deepgram-transcription-badge">Code in Glitch</a></li>\n<li><a href="https://github.com/deepgram-devs/live-transcription-badge">Code in GitHub</a></li>\n</ul>\n<p>If you have any questions, please feel free to reach out on Twitter - we\u2019re <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>.</p>' };
const frontmatter = { "title": "Video: Building a Live Transcription Badge With Deepgram", "description": "We show you how we built our popular live transcription badge project.", "date": "2022-01-21T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1643835533/blog/2022/01/live-transcription-badge-video/build-badge.png", "authors": ["kevin-lewis"], "category": "tutorial", "tags": ["raspberrypi", "javascript", "iot"], "seo": { "title": "Video: Building a Live Transcription Badge With Deepgram", "description": "We show you how we built our popular live transcription badge project." }, "shorturls": { "share": "https://dpgr.am/52f278c", "twitter": "https://dpgr.am/d9fab4f", "linkedin": "https://dpgr.am/a8943c4", "reddit": "https://dpgr.am/83e1f9e", "facebook": "https://dpgr.am/aa075d0" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661453845/blog/live-transcription-badge-video/ograph.png" }, "astro": { "headings": [], "source": `\r
A few weeks ago I spent an evening building a small personal project with a Raspberry Pi and Deepgram - a wearable screen that live captions your voice to help people understand you while wearing a mask. [I tweeted it and it blew up.](https://twitter.com/_phzn/status/1478821408486699009)\r
\r
Something about a solution to this simple and universal problem made this project get way more popular than I expected, and made me take more time to build additional features.\r
\r
In this video, I show you how I built this project, along with the parts you need and steps to take to create your own. This project was build with JavaScript, Vue.js, Node.js, Deepgram, and iTranslate. It is hosted for free on Glitch.\r
\r
<YouTube id="VPdvo6fF0zc"></YouTube>\r
\r
Important links:\r
\r
*   [Glitch Remix URL](https://glitch.com/edit/#!/remix/deepgram-transcription-badge)\r
*   [How to automatically launch Chromium in Kiosk Mode](https://blog.deepgram.com/chromium-kiosk-pi/)\r
\r
Code:\r
\r
*   [Code in Glitch](https://glitch.com/~deepgram-transcription-badge)\r
*   [Code in GitHub](https://github.com/deepgram-devs/live-transcription-badge)\r
\r
If you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).\r
\r
        `, "html": '<p>A few weeks ago I spent an evening building a small personal project with a Raspberry Pi and Deepgram - a wearable screen that live captions your voice to help people understand you while wearing a mask. <a href="https://twitter.com/_phzn/status/1478821408486699009">I tweeted it and it blew up.</a></p>\n<p>Something about a solution to this simple and universal problem made this project get way more popular than I expected, and made me take more time to build additional features.</p>\n<p>In this video, I show you how I built this project, along with the parts you need and steps to take to create your own. This project was build with JavaScript, Vue.js, Node.js, Deepgram, and iTranslate. It is hosted for free on Glitch.</p>\n<YouTube id="VPdvo6fF0zc" />\n<p>Important links:</p>\n<ul>\n<li><a href="https://glitch.com/edit/#!/remix/deepgram-transcription-badge">Glitch Remix URL</a></li>\n<li><a href="https://blog.deepgram.com/chromium-kiosk-pi/">How to automatically launch Chromium in Kiosk Mode</a></li>\n</ul>\n<p>Code:</p>\n<ul>\n<li><a href="https://glitch.com/~deepgram-transcription-badge">Code in Glitch</a></li>\n<li><a href="https://github.com/deepgram-devs/live-transcription-badge">Code in GitHub</a></li>\n</ul>\n<p>If you have any questions, please feel free to reach out on Twitter - we\u2019re <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/live-transcription-badge-video/index.md" };
function rawContent() {
  return `\r
A few weeks ago I spent an evening building a small personal project with a Raspberry Pi and Deepgram - a wearable screen that live captions your voice to help people understand you while wearing a mask. [I tweeted it and it blew up.](https://twitter.com/_phzn/status/1478821408486699009)\r
\r
Something about a solution to this simple and universal problem made this project get way more popular than I expected, and made me take more time to build additional features.\r
\r
In this video, I show you how I built this project, along with the parts you need and steps to take to create your own. This project was build with JavaScript, Vue.js, Node.js, Deepgram, and iTranslate. It is hosted for free on Glitch.\r
\r
<YouTube id="VPdvo6fF0zc"></YouTube>\r
\r
Important links:\r
\r
*   [Glitch Remix URL](https://glitch.com/edit/#!/remix/deepgram-transcription-badge)\r
*   [How to automatically launch Chromium in Kiosk Mode](https://blog.deepgram.com/chromium-kiosk-pi/)\r
\r
Code:\r
\r
*   [Code in Glitch](https://glitch.com/~deepgram-transcription-badge)\r
*   [Code in GitHub](https://github.com/deepgram-devs/live-transcription-badge)\r
\r
If you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).\r
\r
        `;
}
function compiledContent() {
  return '<p>A few weeks ago I spent an evening building a small personal project with a Raspberry Pi and Deepgram - a wearable screen that live captions your voice to help people understand you while wearing a mask. <a href="https://twitter.com/_phzn/status/1478821408486699009">I tweeted it and it blew up.</a></p>\n<p>Something about a solution to this simple and universal problem made this project get way more popular than I expected, and made me take more time to build additional features.</p>\n<p>In this video, I show you how I built this project, along with the parts you need and steps to take to create your own. This project was build with JavaScript, Vue.js, Node.js, Deepgram, and iTranslate. It is hosted for free on Glitch.</p>\n<YouTube id="VPdvo6fF0zc" />\n<p>Important links:</p>\n<ul>\n<li><a href="https://glitch.com/edit/#!/remix/deepgram-transcription-badge">Glitch Remix URL</a></li>\n<li><a href="https://blog.deepgram.com/chromium-kiosk-pi/">How to automatically launch Chromium in Kiosk Mode</a></li>\n</ul>\n<p>Code:</p>\n<ul>\n<li><a href="https://glitch.com/~deepgram-transcription-badge">Code in Glitch</a></li>\n<li><a href="https://github.com/deepgram-devs/live-transcription-badge">Code in GitHub</a></li>\n</ul>\n<p>If you have any questions, please feel free to reach out on Twitter - we\u2019re <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/live-transcription-badge-video/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>A few weeks ago I spent an evening building a small personal project with a Raspberry Pi and Deepgram - a wearable screen that live captions your voice to help people understand you while wearing a mask. <a href="https://twitter.com/_phzn/status/1478821408486699009">I tweeted it and it blew up.</a></p>
<p>Something about a solution to this simple and universal problem made this project get way more popular than I expected, and made me take more time to build additional features.</p>
<p>In this video, I show you how I built this project, along with the parts you need and steps to take to create your own. This project was build with JavaScript, Vue.js, Node.js, Deepgram, and iTranslate. It is hosted for free on Glitch.</p>
${renderComponent($$result, "YouTube", YouTube, { "id": "VPdvo6fF0zc" })}
<p>Important links:</p>
<ul>
<li><a href="https://glitch.com/edit/#!/remix/deepgram-transcription-badge">Glitch Remix URL</a></li>
<li><a href="https://blog.deepgram.com/chromium-kiosk-pi/">How to automatically launch Chromium in Kiosk Mode</a></li>
</ul>
<p>Code:</p>
<ul>
<li><a href="https://glitch.com/~deepgram-transcription-badge">Code in Glitch</a></li>
<li><a href="https://github.com/deepgram-devs/live-transcription-badge">Code in GitHub</a></li>
</ul>
<p>If you have any questions, please feel free to reach out on Twitter - we’re <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/live-transcription-badge-video/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
