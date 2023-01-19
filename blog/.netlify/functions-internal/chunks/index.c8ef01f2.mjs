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
The team behind TomScottPlus used Deepgram to analyze YouTube videos in real-time and provide an contextual overlays with Wikipedia links to read. I sat down with Gwendolen Sellers, Harry Langford, [Maxwell Pettett](https://github.com/StolenCheese), and Tim McGilly to ask them about their project.\r
\r
[Tom is an English YouTuber](https://www.youtube.com/TomScottGo) who mostly makes videos about geography, history, science, technology, and linguistics. His style is 'talk to camera' as he explains various nerdy topics, sometimes with cutaways to other experts explaining a concept.\r
\r
<YouTube id="cdPymLgfXSY"></YouTube>\r
\r
The team took their inspiration from Tom's YouTube experience, where he shares interesting facts that inspire watchers to learn more. As they talked about learning through YouTube videos, they all agreed that it was cumbersome to learn more about topics mentioned in the videos. They found themselves often pausing videos, opening a browser tab, and searching for a mentioned topic for further reading. That's how the idea for TomScottPlus was born. TomScottPlus is a Chrome extension that aims to make this as seamless as possible by providing clickable overlay for videos with contextual Wikipedia article links in a video overlay as topics are mentioned in the video.\r
\r
![A frame from a playing video with Tom speaking. On the left side is a purple pane with a link to Wikipedia article "Coins of the pound sterling" with a short page summary underneath.](https://res.cloudinary.com/deepgram/image/upload/v1646146519/blog/2022/03/contextual-video-overlay-tomscottplus/screenshot.jpg)\r
\r
When a YouTube video is visited, the Chrome extension sends a request to a Python application which downloads the audio and gets a high-quality transcript using the [Deepgram Python SDK](https://developers.deepgram.com/sdks-tools/) and our [utterances](https://developers.deepgram.com/documentation/features/utterances/) feature.\r
\r
The Python application then performed basic Natural Language Processing to look for contextually-relevant words and look for matching data points on Wikipedia (which took several API requests making this quite computationally expensive even with batching). Data points were filtered based on relevance and returned to the Chrome extension, which would display data over the video.\r
\r
You can check out the code for this [project on GitHub](https://github.com/StolenCheese/hackathon2022).\r
\r
        `, "html": '<p>The team behind TomScottPlus used Deepgram to analyze YouTube videos in real-time and provide an contextual overlays with Wikipedia links to read. I sat down with Gwendolen Sellers, Harry Langford, <a href="https://github.com/StolenCheese">Maxwell Pettett</a>, and Tim McGilly to ask them about their project.</p>\n<p><a href="https://www.youtube.com/TomScottGo">Tom is an English YouTuber</a> who mostly makes videos about geography, history, science, technology, and linguistics. His style is \u2018talk to camera\u2019 as he explains various nerdy topics, sometimes with cutaways to other experts explaining a concept.</p>\n<YouTube id="cdPymLgfXSY" />\n<p>The team took their inspiration from Tom\u2019s YouTube experience, where he shares interesting facts that inspire watchers to learn more. As they talked about learning through YouTube videos, they all agreed that it was cumbersome to learn more about topics mentioned in the videos. They found themselves often pausing videos, opening a browser tab, and searching for a mentioned topic for further reading. That\u2019s how the idea for TomScottPlus was born. TomScottPlus is a Chrome extension that aims to make this as seamless as possible by providing clickable overlay for videos with contextual Wikipedia article links in a video overlay as topics are mentioned in the video.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646146519/blog/2022/03/contextual-video-overlay-tomscottplus/screenshot.jpg" alt="A frame from a playing video with Tom speaking. On the left side is a purple pane with a link to Wikipedia article &#x22;Coins of the pound sterling&#x22; with a short page summary underneath."></p>\n<p>When a YouTube video is visited, the Chrome extension sends a request to a Python application which downloads the audio and gets a high-quality transcript using the <a href="https://developers.deepgram.com/sdks-tools/">Deepgram Python SDK</a> and our <a href="https://developers.deepgram.com/documentation/features/utterances/">utterances</a> feature.</p>\n<p>The Python application then performed basic Natural Language Processing to look for contextually-relevant words and look for matching data points on Wikipedia (which took several API requests making this quite computationally expensive even with batching). Data points were filtered based on relevance and returned to the Chrome extension, which would display data over the video.</p>\n<p>You can check out the code for this <a href="https://github.com/StolenCheese/hackathon2022">project on GitHub</a>.</p>' };
const frontmatter = { "title": "Creating Contextual Video Overlays with TomScottPlus", "description": "How the team behind TomScottPlus used Deepgram to analyze YouTube videos in real-time and provide an overlay with Wikipedia links to read. Read more here.", "date": "2022-03-17T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1646146501/blog/2022/03/contextual-video-overlay-tomscottplus/cover.jpg", "authors": ["kevin-lewis"], "category": "project-showcase", "tags": ["analysis", "research"], "seo": { "title": "Creating Contextual Video Overlays with TomScottPlus", "description": "How the team behind TomScottPlus used Deepgram to analyze YouTube videos in real-time and provide an overlay with Wikipedia links to read. Read more here." }, "shorturls": { "share": "https://dpgr.am/bfad829", "twitter": "https://dpgr.am/afe279a", "linkedin": "https://dpgr.am/ced2dbb", "reddit": "https://dpgr.am/76bdc62", "facebook": "https://dpgr.am/0a64ab6" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661454018/blog/contextual-video-overlay-tomscottplus/ograph.png" }, "astro": { "headings": [], "source": `\r
The team behind TomScottPlus used Deepgram to analyze YouTube videos in real-time and provide an contextual overlays with Wikipedia links to read. I sat down with Gwendolen Sellers, Harry Langford, [Maxwell Pettett](https://github.com/StolenCheese), and Tim McGilly to ask them about their project.\r
\r
[Tom is an English YouTuber](https://www.youtube.com/TomScottGo) who mostly makes videos about geography, history, science, technology, and linguistics. His style is 'talk to camera' as he explains various nerdy topics, sometimes with cutaways to other experts explaining a concept.\r
\r
<YouTube id="cdPymLgfXSY"></YouTube>\r
\r
The team took their inspiration from Tom's YouTube experience, where he shares interesting facts that inspire watchers to learn more. As they talked about learning through YouTube videos, they all agreed that it was cumbersome to learn more about topics mentioned in the videos. They found themselves often pausing videos, opening a browser tab, and searching for a mentioned topic for further reading. That's how the idea for TomScottPlus was born. TomScottPlus is a Chrome extension that aims to make this as seamless as possible by providing clickable overlay for videos with contextual Wikipedia article links in a video overlay as topics are mentioned in the video.\r
\r
![A frame from a playing video with Tom speaking. On the left side is a purple pane with a link to Wikipedia article "Coins of the pound sterling" with a short page summary underneath.](https://res.cloudinary.com/deepgram/image/upload/v1646146519/blog/2022/03/contextual-video-overlay-tomscottplus/screenshot.jpg)\r
\r
When a YouTube video is visited, the Chrome extension sends a request to a Python application which downloads the audio and gets a high-quality transcript using the [Deepgram Python SDK](https://developers.deepgram.com/sdks-tools/) and our [utterances](https://developers.deepgram.com/documentation/features/utterances/) feature.\r
\r
The Python application then performed basic Natural Language Processing to look for contextually-relevant words and look for matching data points on Wikipedia (which took several API requests making this quite computationally expensive even with batching). Data points were filtered based on relevance and returned to the Chrome extension, which would display data over the video.\r
\r
You can check out the code for this [project on GitHub](https://github.com/StolenCheese/hackathon2022).\r
\r
        `, "html": '<p>The team behind TomScottPlus used Deepgram to analyze YouTube videos in real-time and provide an contextual overlays with Wikipedia links to read. I sat down with Gwendolen Sellers, Harry Langford, <a href="https://github.com/StolenCheese">Maxwell Pettett</a>, and Tim McGilly to ask them about their project.</p>\n<p><a href="https://www.youtube.com/TomScottGo">Tom is an English YouTuber</a> who mostly makes videos about geography, history, science, technology, and linguistics. His style is \u2018talk to camera\u2019 as he explains various nerdy topics, sometimes with cutaways to other experts explaining a concept.</p>\n<YouTube id="cdPymLgfXSY" />\n<p>The team took their inspiration from Tom\u2019s YouTube experience, where he shares interesting facts that inspire watchers to learn more. As they talked about learning through YouTube videos, they all agreed that it was cumbersome to learn more about topics mentioned in the videos. They found themselves often pausing videos, opening a browser tab, and searching for a mentioned topic for further reading. That\u2019s how the idea for TomScottPlus was born. TomScottPlus is a Chrome extension that aims to make this as seamless as possible by providing clickable overlay for videos with contextual Wikipedia article links in a video overlay as topics are mentioned in the video.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646146519/blog/2022/03/contextual-video-overlay-tomscottplus/screenshot.jpg" alt="A frame from a playing video with Tom speaking. On the left side is a purple pane with a link to Wikipedia article &#x22;Coins of the pound sterling&#x22; with a short page summary underneath."></p>\n<p>When a YouTube video is visited, the Chrome extension sends a request to a Python application which downloads the audio and gets a high-quality transcript using the <a href="https://developers.deepgram.com/sdks-tools/">Deepgram Python SDK</a> and our <a href="https://developers.deepgram.com/documentation/features/utterances/">utterances</a> feature.</p>\n<p>The Python application then performed basic Natural Language Processing to look for contextually-relevant words and look for matching data points on Wikipedia (which took several API requests making this quite computationally expensive even with batching). Data points were filtered based on relevance and returned to the Chrome extension, which would display data over the video.</p>\n<p>You can check out the code for this <a href="https://github.com/StolenCheese/hackathon2022">project on GitHub</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/contextual-video-overlay-tomscottplus/index.md" };
function rawContent() {
  return `\r
The team behind TomScottPlus used Deepgram to analyze YouTube videos in real-time and provide an contextual overlays with Wikipedia links to read. I sat down with Gwendolen Sellers, Harry Langford, [Maxwell Pettett](https://github.com/StolenCheese), and Tim McGilly to ask them about their project.\r
\r
[Tom is an English YouTuber](https://www.youtube.com/TomScottGo) who mostly makes videos about geography, history, science, technology, and linguistics. His style is 'talk to camera' as he explains various nerdy topics, sometimes with cutaways to other experts explaining a concept.\r
\r
<YouTube id="cdPymLgfXSY"></YouTube>\r
\r
The team took their inspiration from Tom's YouTube experience, where he shares interesting facts that inspire watchers to learn more. As they talked about learning through YouTube videos, they all agreed that it was cumbersome to learn more about topics mentioned in the videos. They found themselves often pausing videos, opening a browser tab, and searching for a mentioned topic for further reading. That's how the idea for TomScottPlus was born. TomScottPlus is a Chrome extension that aims to make this as seamless as possible by providing clickable overlay for videos with contextual Wikipedia article links in a video overlay as topics are mentioned in the video.\r
\r
![A frame from a playing video with Tom speaking. On the left side is a purple pane with a link to Wikipedia article "Coins of the pound sterling" with a short page summary underneath.](https://res.cloudinary.com/deepgram/image/upload/v1646146519/blog/2022/03/contextual-video-overlay-tomscottplus/screenshot.jpg)\r
\r
When a YouTube video is visited, the Chrome extension sends a request to a Python application which downloads the audio and gets a high-quality transcript using the [Deepgram Python SDK](https://developers.deepgram.com/sdks-tools/) and our [utterances](https://developers.deepgram.com/documentation/features/utterances/) feature.\r
\r
The Python application then performed basic Natural Language Processing to look for contextually-relevant words and look for matching data points on Wikipedia (which took several API requests making this quite computationally expensive even with batching). Data points were filtered based on relevance and returned to the Chrome extension, which would display data over the video.\r
\r
You can check out the code for this [project on GitHub](https://github.com/StolenCheese/hackathon2022).\r
\r
        `;
}
function compiledContent() {
  return '<p>The team behind TomScottPlus used Deepgram to analyze YouTube videos in real-time and provide an contextual overlays with Wikipedia links to read. I sat down with Gwendolen Sellers, Harry Langford, <a href="https://github.com/StolenCheese">Maxwell Pettett</a>, and Tim McGilly to ask them about their project.</p>\n<p><a href="https://www.youtube.com/TomScottGo">Tom is an English YouTuber</a> who mostly makes videos about geography, history, science, technology, and linguistics. His style is \u2018talk to camera\u2019 as he explains various nerdy topics, sometimes with cutaways to other experts explaining a concept.</p>\n<YouTube id="cdPymLgfXSY" />\n<p>The team took their inspiration from Tom\u2019s YouTube experience, where he shares interesting facts that inspire watchers to learn more. As they talked about learning through YouTube videos, they all agreed that it was cumbersome to learn more about topics mentioned in the videos. They found themselves often pausing videos, opening a browser tab, and searching for a mentioned topic for further reading. That\u2019s how the idea for TomScottPlus was born. TomScottPlus is a Chrome extension that aims to make this as seamless as possible by providing clickable overlay for videos with contextual Wikipedia article links in a video overlay as topics are mentioned in the video.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646146519/blog/2022/03/contextual-video-overlay-tomscottplus/screenshot.jpg" alt="A frame from a playing video with Tom speaking. On the left side is a purple pane with a link to Wikipedia article &#x22;Coins of the pound sterling&#x22; with a short page summary underneath."></p>\n<p>When a YouTube video is visited, the Chrome extension sends a request to a Python application which downloads the audio and gets a high-quality transcript using the <a href="https://developers.deepgram.com/sdks-tools/">Deepgram Python SDK</a> and our <a href="https://developers.deepgram.com/documentation/features/utterances/">utterances</a> feature.</p>\n<p>The Python application then performed basic Natural Language Processing to look for contextually-relevant words and look for matching data points on Wikipedia (which took several API requests making this quite computationally expensive even with batching). Data points were filtered based on relevance and returned to the Chrome extension, which would display data over the video.</p>\n<p>You can check out the code for this <a href="https://github.com/StolenCheese/hackathon2022">project on GitHub</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/contextual-video-overlay-tomscottplus/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>The team behind TomScottPlus used Deepgram to analyze YouTube videos in real-time and provide an contextual overlays with Wikipedia links to read. I sat down with Gwendolen Sellers, Harry Langford, <a href="https://github.com/StolenCheese">Maxwell Pettett</a>, and Tim McGilly to ask them about their project.</p>
<p><a href="https://www.youtube.com/TomScottGo">Tom is an English YouTuber</a> who mostly makes videos about geography, history, science, technology, and linguistics. His style is ‘talk to camera’ as he explains various nerdy topics, sometimes with cutaways to other experts explaining a concept.</p>
${renderComponent($$result, "YouTube", YouTube, { "id": "cdPymLgfXSY" })}
<p>The team took their inspiration from Tom’s YouTube experience, where he shares interesting facts that inspire watchers to learn more. As they talked about learning through YouTube videos, they all agreed that it was cumbersome to learn more about topics mentioned in the videos. They found themselves often pausing videos, opening a browser tab, and searching for a mentioned topic for further reading. That’s how the idea for TomScottPlus was born. TomScottPlus is a Chrome extension that aims to make this as seamless as possible by providing clickable overlay for videos with contextual Wikipedia article links in a video overlay as topics are mentioned in the video.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646146519/blog/2022/03/contextual-video-overlay-tomscottplus/screenshot.jpg" alt="A frame from a playing video with Tom speaking. On the left side is a purple pane with a link to Wikipedia article &quot;Coins of the pound sterling&quot; with a short page summary underneath."></p>
<p>When a YouTube video is visited, the Chrome extension sends a request to a Python application which downloads the audio and gets a high-quality transcript using the <a href="https://developers.deepgram.com/sdks-tools/">Deepgram Python SDK</a> and our <a href="https://developers.deepgram.com/documentation/features/utterances/">utterances</a> feature.</p>
<p>The Python application then performed basic Natural Language Processing to look for contextually-relevant words and look for matching data points on Wikipedia (which took several API requests making this quite computationally expensive even with batching). Data points were filtered based on relevance and returned to the Chrome extension, which would display data over the video.</p>
<p>You can check out the code for this <a href="https://github.com/StolenCheese/hackathon2022">project on GitHub</a>.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/contextual-video-overlay-tomscottplus/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
