import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../entry.mjs';
import Slugger from 'github-slugger';
import '@astrojs/netlify/netlify-functions.js';
import 'preact';
import 'preact-render-to-string';
import 'vue';
import 'vue/server-renderer';
import 'html-escaper';
import 'node-html-parser';
/* empty css                           */import 'axios';
/* empty css                          *//* empty css                           *//* empty css                          *//* empty css                              *//* empty css                              */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           *//* empty css                              */import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [{ "depth": 2, "slug": "the-project", "text": "The Project" }, { "depth": 2, "slug": "first-time-hackers", "text": "First-Time Hackers" }, { "depth": 2, "slug": "building-autobubble", "text": "Building AutoBubble" }, { "depth": 2, "slug": "the-winner-is", "text": "The Winner Is\u2026" }], "source": `\r
Back in January, we supported Hack Cambridge - a 24-hour student hackathon. The team behind AutoBubble wanted to see if they could improve the display of captions for online videos. I sat down with [Andy Zhou](https://github.com/Flesh12138), [Conall Moss](https://www.linkedin.com/in/conall-moss-408037221/), [Dan Wendon-Blixrud](https://dwb.no), and [Lochlann-B Baker](https://github.com/Lochlann-B/) to ask them about their project.\r
\r
## The Project\r
\r
"There were a lot of challenges and prompts at Hack Cambridge, but the Deepgram challenge was both the most flexible and the coolest" explains Conall. "We knew we were going to use it but then had to think of an idea."\r
\r
Dan continues: "A lot of speaker communication comes through facial expressions, and while closed captions are super useful, they are generally in a fixed position. We wanted to build a project which allows for captioning while allowing the depth of expression."\r
\r
With that, AutoBubble was born. It is a Chrome extenion that uses facial recognition and Deepgram's Speech Recognition API to place captions next to a speaker's face in a YouTube video.\r
\r
![A screenshot of a video with a man speaking - head in the middle of the frame. To the right of his head is a sentence, with all-but-the-last word slightly bolded.](https://res.cloudinary.com/deepgram/image/upload/v1646039808/blog/2022/03/autobubble-youtube-speech-bubbles/screenshot.jpg)\r
\r
## First-Time Hackers\r
\r
The team behind AutoBubble are all first-year Computer Science students at the University of Cambridge and, amazingly, were taking part in their very first hackathon. All of the team had the same sentiment. In the words of Lochlann:\r
\r
> I expected a super intense competitive event, but it was chill, social, and friendly. All of the activities aside from hacking led to an excellent experience and environment to build a project.\r
\r
## Building AutoBubble\r
\r
As soon as the team landed on an idea, they broke it down into pieces and assigned work to each member. They created a shared document to detail what each of their modules would do and the expected inputs/outputs, making it much easier to glue the project together at the end.\r
\r
Conall got to work on integrating Deepgram, and thanks to the [documentation](https://developers.deepgram.com/documentation/), [tutorials](https://blog.deepgram.com/categories/tutorial/), and [example projects](https://developers.deepgram.com/use-cases/), he could treat them as building blocks to build what they needed.\r
\r
Meanwhile, Lochlann started to work on facial recognition with [face-api.js](https://github.com/justadudewhohacks/face-api.js), which was a challenge. Still, the moment he overcame the hurdle and got it working, the team knew it provided many cool opportunities for this project.\r
\r
Andy built the simple but effective UI for the project, and described that "care was put in to how the captions were styled, including a subtle indication of when a word in a phrase was said. A lot of balancing took place in the finer details of the captions themselves - making sure they weren't too long to be distracting, while also not too short that they disappear too quickly."\r
\r
Dan built the Chrome extension to act as the glue for the project, and the team's shared document made this a lot easier. As a note, I have been involved with hundreds of hackathons, and I have never once seen a team be so intentional with documentation from the outset. It seems to have really paid off!\r
\r
## The Winner Is...\r
\r
There were nearly 30 projects that incorporated Deepgram at Hack Cambridge, but this simple idea with a rock-solid execution was super impressive. Once the extension is installed, any YouTube video could start receiving these new captions, and they looked great.\r
\r
If you're interested in seeing how AutoBubble was built, you can find the code across two repositories - one for the [server](https://github.com/dantechguy/autobubbleserver) and one for the [client](https://github.com/dantechguy/autobubbleclient).\r
\r
        `, "html": '<p>Back in January, we supported Hack Cambridge - a 24-hour student hackathon. The team behind AutoBubble wanted to see if they could improve the display of captions for online videos. I sat down with <a href="https://github.com/Flesh12138">Andy Zhou</a>, <a href="https://www.linkedin.com/in/conall-moss-408037221/">Conall Moss</a>, <a href="https://dwb.no">Dan Wendon-Blixrud</a>, and <a href="https://github.com/Lochlann-B/">Lochlann-B Baker</a> to ask them about their project.</p>\n<h2 id="the-project">The Project</h2>\n<p>\u201CThere were a lot of challenges and prompts at Hack Cambridge, but the Deepgram challenge was both the most flexible and the coolest\u201D explains Conall. \u201CWe knew we were going to use it but then had to think of an idea.\u201D</p>\n<p>Dan continues: \u201CA lot of speaker communication comes through facial expressions, and while closed captions are super useful, they are generally in a fixed position. We wanted to build a project which allows for captioning while allowing the depth of expression.\u201D</p>\n<p>With that, AutoBubble was born. It is a Chrome extenion that uses facial recognition and Deepgram\u2019s Speech Recognition API to place captions next to a speaker\u2019s face in a YouTube video.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646039808/blog/2022/03/autobubble-youtube-speech-bubbles/screenshot.jpg" alt="A screenshot of a video with a man speaking - head in the middle of the frame. To the right of his head is a sentence, with all-but-the-last word slightly bolded."></p>\n<h2 id="first-time-hackers">First-Time Hackers</h2>\n<p>The team behind AutoBubble are all first-year Computer Science students at the University of Cambridge and, amazingly, were taking part in their very first hackathon. All of the team had the same sentiment. In the words of Lochlann:</p>\n<blockquote>\n<p>I expected a super intense competitive event, but it was chill, social, and friendly. All of the activities aside from hacking led to an excellent experience and environment to build a project.</p>\n</blockquote>\n<h2 id="building-autobubble">Building AutoBubble</h2>\n<p>As soon as the team landed on an idea, they broke it down into pieces and assigned work to each member. They created a shared document to detail what each of their modules would do and the expected inputs/outputs, making it much easier to glue the project together at the end.</p>\n<p>Conall got to work on integrating Deepgram, and thanks to the <a href="https://developers.deepgram.com/documentation/">documentation</a>, <a href="https://blog.deepgram.com/categories/tutorial/">tutorials</a>, and <a href="https://developers.deepgram.com/use-cases/">example projects</a>, he could treat them as building blocks to build what they needed.</p>\n<p>Meanwhile, Lochlann started to work on facial recognition with <a href="https://github.com/justadudewhohacks/face-api.js">face-api.js</a>, which was a challenge. Still, the moment he overcame the hurdle and got it working, the team knew it provided many cool opportunities for this project.</p>\n<p>Andy built the simple but effective UI for the project, and described that \u201Ccare was put in to how the captions were styled, including a subtle indication of when a word in a phrase was said. A lot of balancing took place in the finer details of the captions themselves - making sure they weren\u2019t too long to be distracting, while also not too short that they disappear too quickly.\u201D</p>\n<p>Dan built the Chrome extension to act as the glue for the project, and the team\u2019s shared document made this a lot easier. As a note, I have been involved with hundreds of hackathons, and I have never once seen a team be so intentional with documentation from the outset. It seems to have really paid off!</p>\n<h2 id="the-winner-is">The Winner Is\u2026</h2>\n<p>There were nearly 30 projects that incorporated Deepgram at Hack Cambridge, but this simple idea with a rock-solid execution was super impressive. Once the extension is installed, any YouTube video could start receiving these new captions, and they looked great.</p>\n<p>If you\u2019re interested in seeing how AutoBubble was built, you can find the code across two repositories - one for the <a href="https://github.com/dantechguy/autobubbleserver">server</a> and one for the <a href="https://github.com/dantechguy/autobubbleclient">client</a>.</p>' };
const frontmatter = { "title": "Add Live Speech Bubbles To YouTube Videos with Autobubble", "description": "Using facial recognition and speech recognition to create live speech bubbles.", "date": "2022-03-04T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1646039788/blog/2022/03/autobubble-youtube-speech-bubbles/AutoBubble.jpg", "authors": ["kevin-lewis"], "category": "project-showcase", "tags": ["facial-recognition", "nodejs"], "seo": { "title": "Add Live Speech Bubbles To YouTube Videos with Autobubble", "description": "Using facial recognition and speech recognition to create live speech bubbles." }, "shorturls": { "share": "https://dpgr.am/54a290e", "twitter": "https://dpgr.am/ae46666", "linkedin": "https://dpgr.am/75df551", "reddit": "https://dpgr.am/91c9f29", "facebook": "https://dpgr.am/dbcb307" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661454009/blog/autobubble-youtube-speech-bubbles/ograph.png" }, "astro": { "headings": [{ "depth": 2, "slug": "the-project", "text": "The Project" }, { "depth": 2, "slug": "first-time-hackers", "text": "First-Time Hackers" }, { "depth": 2, "slug": "building-autobubble", "text": "Building AutoBubble" }, { "depth": 2, "slug": "the-winner-is", "text": "The Winner Is\u2026" }], "source": `\r
Back in January, we supported Hack Cambridge - a 24-hour student hackathon. The team behind AutoBubble wanted to see if they could improve the display of captions for online videos. I sat down with [Andy Zhou](https://github.com/Flesh12138), [Conall Moss](https://www.linkedin.com/in/conall-moss-408037221/), [Dan Wendon-Blixrud](https://dwb.no), and [Lochlann-B Baker](https://github.com/Lochlann-B/) to ask them about their project.\r
\r
## The Project\r
\r
"There were a lot of challenges and prompts at Hack Cambridge, but the Deepgram challenge was both the most flexible and the coolest" explains Conall. "We knew we were going to use it but then had to think of an idea."\r
\r
Dan continues: "A lot of speaker communication comes through facial expressions, and while closed captions are super useful, they are generally in a fixed position. We wanted to build a project which allows for captioning while allowing the depth of expression."\r
\r
With that, AutoBubble was born. It is a Chrome extenion that uses facial recognition and Deepgram's Speech Recognition API to place captions next to a speaker's face in a YouTube video.\r
\r
![A screenshot of a video with a man speaking - head in the middle of the frame. To the right of his head is a sentence, with all-but-the-last word slightly bolded.](https://res.cloudinary.com/deepgram/image/upload/v1646039808/blog/2022/03/autobubble-youtube-speech-bubbles/screenshot.jpg)\r
\r
## First-Time Hackers\r
\r
The team behind AutoBubble are all first-year Computer Science students at the University of Cambridge and, amazingly, were taking part in their very first hackathon. All of the team had the same sentiment. In the words of Lochlann:\r
\r
> I expected a super intense competitive event, but it was chill, social, and friendly. All of the activities aside from hacking led to an excellent experience and environment to build a project.\r
\r
## Building AutoBubble\r
\r
As soon as the team landed on an idea, they broke it down into pieces and assigned work to each member. They created a shared document to detail what each of their modules would do and the expected inputs/outputs, making it much easier to glue the project together at the end.\r
\r
Conall got to work on integrating Deepgram, and thanks to the [documentation](https://developers.deepgram.com/documentation/), [tutorials](https://blog.deepgram.com/categories/tutorial/), and [example projects](https://developers.deepgram.com/use-cases/), he could treat them as building blocks to build what they needed.\r
\r
Meanwhile, Lochlann started to work on facial recognition with [face-api.js](https://github.com/justadudewhohacks/face-api.js), which was a challenge. Still, the moment he overcame the hurdle and got it working, the team knew it provided many cool opportunities for this project.\r
\r
Andy built the simple but effective UI for the project, and described that "care was put in to how the captions were styled, including a subtle indication of when a word in a phrase was said. A lot of balancing took place in the finer details of the captions themselves - making sure they weren't too long to be distracting, while also not too short that they disappear too quickly."\r
\r
Dan built the Chrome extension to act as the glue for the project, and the team's shared document made this a lot easier. As a note, I have been involved with hundreds of hackathons, and I have never once seen a team be so intentional with documentation from the outset. It seems to have really paid off!\r
\r
## The Winner Is...\r
\r
There were nearly 30 projects that incorporated Deepgram at Hack Cambridge, but this simple idea with a rock-solid execution was super impressive. Once the extension is installed, any YouTube video could start receiving these new captions, and they looked great.\r
\r
If you're interested in seeing how AutoBubble was built, you can find the code across two repositories - one for the [server](https://github.com/dantechguy/autobubbleserver) and one for the [client](https://github.com/dantechguy/autobubbleclient).\r
\r
        `, "html": '<p>Back in January, we supported Hack Cambridge - a 24-hour student hackathon. The team behind AutoBubble wanted to see if they could improve the display of captions for online videos. I sat down with <a href="https://github.com/Flesh12138">Andy Zhou</a>, <a href="https://www.linkedin.com/in/conall-moss-408037221/">Conall Moss</a>, <a href="https://dwb.no">Dan Wendon-Blixrud</a>, and <a href="https://github.com/Lochlann-B/">Lochlann-B Baker</a> to ask them about their project.</p>\n<h2 id="the-project">The Project</h2>\n<p>\u201CThere were a lot of challenges and prompts at Hack Cambridge, but the Deepgram challenge was both the most flexible and the coolest\u201D explains Conall. \u201CWe knew we were going to use it but then had to think of an idea.\u201D</p>\n<p>Dan continues: \u201CA lot of speaker communication comes through facial expressions, and while closed captions are super useful, they are generally in a fixed position. We wanted to build a project which allows for captioning while allowing the depth of expression.\u201D</p>\n<p>With that, AutoBubble was born. It is a Chrome extenion that uses facial recognition and Deepgram\u2019s Speech Recognition API to place captions next to a speaker\u2019s face in a YouTube video.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646039808/blog/2022/03/autobubble-youtube-speech-bubbles/screenshot.jpg" alt="A screenshot of a video with a man speaking - head in the middle of the frame. To the right of his head is a sentence, with all-but-the-last word slightly bolded."></p>\n<h2 id="first-time-hackers">First-Time Hackers</h2>\n<p>The team behind AutoBubble are all first-year Computer Science students at the University of Cambridge and, amazingly, were taking part in their very first hackathon. All of the team had the same sentiment. In the words of Lochlann:</p>\n<blockquote>\n<p>I expected a super intense competitive event, but it was chill, social, and friendly. All of the activities aside from hacking led to an excellent experience and environment to build a project.</p>\n</blockquote>\n<h2 id="building-autobubble">Building AutoBubble</h2>\n<p>As soon as the team landed on an idea, they broke it down into pieces and assigned work to each member. They created a shared document to detail what each of their modules would do and the expected inputs/outputs, making it much easier to glue the project together at the end.</p>\n<p>Conall got to work on integrating Deepgram, and thanks to the <a href="https://developers.deepgram.com/documentation/">documentation</a>, <a href="https://blog.deepgram.com/categories/tutorial/">tutorials</a>, and <a href="https://developers.deepgram.com/use-cases/">example projects</a>, he could treat them as building blocks to build what they needed.</p>\n<p>Meanwhile, Lochlann started to work on facial recognition with <a href="https://github.com/justadudewhohacks/face-api.js">face-api.js</a>, which was a challenge. Still, the moment he overcame the hurdle and got it working, the team knew it provided many cool opportunities for this project.</p>\n<p>Andy built the simple but effective UI for the project, and described that \u201Ccare was put in to how the captions were styled, including a subtle indication of when a word in a phrase was said. A lot of balancing took place in the finer details of the captions themselves - making sure they weren\u2019t too long to be distracting, while also not too short that they disappear too quickly.\u201D</p>\n<p>Dan built the Chrome extension to act as the glue for the project, and the team\u2019s shared document made this a lot easier. As a note, I have been involved with hundreds of hackathons, and I have never once seen a team be so intentional with documentation from the outset. It seems to have really paid off!</p>\n<h2 id="the-winner-is">The Winner Is\u2026</h2>\n<p>There were nearly 30 projects that incorporated Deepgram at Hack Cambridge, but this simple idea with a rock-solid execution was super impressive. Once the extension is installed, any YouTube video could start receiving these new captions, and they looked great.</p>\n<p>If you\u2019re interested in seeing how AutoBubble was built, you can find the code across two repositories - one for the <a href="https://github.com/dantechguy/autobubbleserver">server</a> and one for the <a href="https://github.com/dantechguy/autobubbleclient">client</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/autobubble-youtube-speech-bubbles/index.md" };
function rawContent() {
  return `\r
Back in January, we supported Hack Cambridge - a 24-hour student hackathon. The team behind AutoBubble wanted to see if they could improve the display of captions for online videos. I sat down with [Andy Zhou](https://github.com/Flesh12138), [Conall Moss](https://www.linkedin.com/in/conall-moss-408037221/), [Dan Wendon-Blixrud](https://dwb.no), and [Lochlann-B Baker](https://github.com/Lochlann-B/) to ask them about their project.\r
\r
## The Project\r
\r
"There were a lot of challenges and prompts at Hack Cambridge, but the Deepgram challenge was both the most flexible and the coolest" explains Conall. "We knew we were going to use it but then had to think of an idea."\r
\r
Dan continues: "A lot of speaker communication comes through facial expressions, and while closed captions are super useful, they are generally in a fixed position. We wanted to build a project which allows for captioning while allowing the depth of expression."\r
\r
With that, AutoBubble was born. It is a Chrome extenion that uses facial recognition and Deepgram's Speech Recognition API to place captions next to a speaker's face in a YouTube video.\r
\r
![A screenshot of a video with a man speaking - head in the middle of the frame. To the right of his head is a sentence, with all-but-the-last word slightly bolded.](https://res.cloudinary.com/deepgram/image/upload/v1646039808/blog/2022/03/autobubble-youtube-speech-bubbles/screenshot.jpg)\r
\r
## First-Time Hackers\r
\r
The team behind AutoBubble are all first-year Computer Science students at the University of Cambridge and, amazingly, were taking part in their very first hackathon. All of the team had the same sentiment. In the words of Lochlann:\r
\r
> I expected a super intense competitive event, but it was chill, social, and friendly. All of the activities aside from hacking led to an excellent experience and environment to build a project.\r
\r
## Building AutoBubble\r
\r
As soon as the team landed on an idea, they broke it down into pieces and assigned work to each member. They created a shared document to detail what each of their modules would do and the expected inputs/outputs, making it much easier to glue the project together at the end.\r
\r
Conall got to work on integrating Deepgram, and thanks to the [documentation](https://developers.deepgram.com/documentation/), [tutorials](https://blog.deepgram.com/categories/tutorial/), and [example projects](https://developers.deepgram.com/use-cases/), he could treat them as building blocks to build what they needed.\r
\r
Meanwhile, Lochlann started to work on facial recognition with [face-api.js](https://github.com/justadudewhohacks/face-api.js), which was a challenge. Still, the moment he overcame the hurdle and got it working, the team knew it provided many cool opportunities for this project.\r
\r
Andy built the simple but effective UI for the project, and described that "care was put in to how the captions were styled, including a subtle indication of when a word in a phrase was said. A lot of balancing took place in the finer details of the captions themselves - making sure they weren't too long to be distracting, while also not too short that they disappear too quickly."\r
\r
Dan built the Chrome extension to act as the glue for the project, and the team's shared document made this a lot easier. As a note, I have been involved with hundreds of hackathons, and I have never once seen a team be so intentional with documentation from the outset. It seems to have really paid off!\r
\r
## The Winner Is...\r
\r
There were nearly 30 projects that incorporated Deepgram at Hack Cambridge, but this simple idea with a rock-solid execution was super impressive. Once the extension is installed, any YouTube video could start receiving these new captions, and they looked great.\r
\r
If you're interested in seeing how AutoBubble was built, you can find the code across two repositories - one for the [server](https://github.com/dantechguy/autobubbleserver) and one for the [client](https://github.com/dantechguy/autobubbleclient).\r
\r
        `;
}
function compiledContent() {
  return '<p>Back in January, we supported Hack Cambridge - a 24-hour student hackathon. The team behind AutoBubble wanted to see if they could improve the display of captions for online videos. I sat down with <a href="https://github.com/Flesh12138">Andy Zhou</a>, <a href="https://www.linkedin.com/in/conall-moss-408037221/">Conall Moss</a>, <a href="https://dwb.no">Dan Wendon-Blixrud</a>, and <a href="https://github.com/Lochlann-B/">Lochlann-B Baker</a> to ask them about their project.</p>\n<h2 id="the-project">The Project</h2>\n<p>\u201CThere were a lot of challenges and prompts at Hack Cambridge, but the Deepgram challenge was both the most flexible and the coolest\u201D explains Conall. \u201CWe knew we were going to use it but then had to think of an idea.\u201D</p>\n<p>Dan continues: \u201CA lot of speaker communication comes through facial expressions, and while closed captions are super useful, they are generally in a fixed position. We wanted to build a project which allows for captioning while allowing the depth of expression.\u201D</p>\n<p>With that, AutoBubble was born. It is a Chrome extenion that uses facial recognition and Deepgram\u2019s Speech Recognition API to place captions next to a speaker\u2019s face in a YouTube video.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646039808/blog/2022/03/autobubble-youtube-speech-bubbles/screenshot.jpg" alt="A screenshot of a video with a man speaking - head in the middle of the frame. To the right of his head is a sentence, with all-but-the-last word slightly bolded."></p>\n<h2 id="first-time-hackers">First-Time Hackers</h2>\n<p>The team behind AutoBubble are all first-year Computer Science students at the University of Cambridge and, amazingly, were taking part in their very first hackathon. All of the team had the same sentiment. In the words of Lochlann:</p>\n<blockquote>\n<p>I expected a super intense competitive event, but it was chill, social, and friendly. All of the activities aside from hacking led to an excellent experience and environment to build a project.</p>\n</blockquote>\n<h2 id="building-autobubble">Building AutoBubble</h2>\n<p>As soon as the team landed on an idea, they broke it down into pieces and assigned work to each member. They created a shared document to detail what each of their modules would do and the expected inputs/outputs, making it much easier to glue the project together at the end.</p>\n<p>Conall got to work on integrating Deepgram, and thanks to the <a href="https://developers.deepgram.com/documentation/">documentation</a>, <a href="https://blog.deepgram.com/categories/tutorial/">tutorials</a>, and <a href="https://developers.deepgram.com/use-cases/">example projects</a>, he could treat them as building blocks to build what they needed.</p>\n<p>Meanwhile, Lochlann started to work on facial recognition with <a href="https://github.com/justadudewhohacks/face-api.js">face-api.js</a>, which was a challenge. Still, the moment he overcame the hurdle and got it working, the team knew it provided many cool opportunities for this project.</p>\n<p>Andy built the simple but effective UI for the project, and described that \u201Ccare was put in to how the captions were styled, including a subtle indication of when a word in a phrase was said. A lot of balancing took place in the finer details of the captions themselves - making sure they weren\u2019t too long to be distracting, while also not too short that they disappear too quickly.\u201D</p>\n<p>Dan built the Chrome extension to act as the glue for the project, and the team\u2019s shared document made this a lot easier. As a note, I have been involved with hundreds of hackathons, and I have never once seen a team be so intentional with documentation from the outset. It seems to have really paid off!</p>\n<h2 id="the-winner-is">The Winner Is\u2026</h2>\n<p>There were nearly 30 projects that incorporated Deepgram at Hack Cambridge, but this simple idea with a rock-solid execution was super impressive. Once the extension is installed, any YouTube video could start receiving these new captions, and they looked great.</p>\n<p>If you\u2019re interested in seeing how AutoBubble was built, you can find the code across two repositories - one for the <a href="https://github.com/dantechguy/autobubbleserver">server</a> and one for the <a href="https://github.com/dantechguy/autobubbleclient">client</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/autobubble-youtube-speech-bubbles/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Back in January, we supported Hack Cambridge - a 24-hour student hackathon. The team behind AutoBubble wanted to see if they could improve the display of captions for online videos. I sat down with <a href="https://github.com/Flesh12138">Andy Zhou</a>, <a href="https://www.linkedin.com/in/conall-moss-408037221/">Conall Moss</a>, <a href="https://dwb.no">Dan Wendon-Blixrud</a>, and <a href="https://github.com/Lochlann-B/">Lochlann-B Baker</a> to ask them about their project.</p>
<h2 id="the-project">The Project</h2>
<p>“There were a lot of challenges and prompts at Hack Cambridge, but the Deepgram challenge was both the most flexible and the coolest” explains Conall. “We knew we were going to use it but then had to think of an idea.”</p>
<p>Dan continues: “A lot of speaker communication comes through facial expressions, and while closed captions are super useful, they are generally in a fixed position. We wanted to build a project which allows for captioning while allowing the depth of expression.”</p>
<p>With that, AutoBubble was born. It is a Chrome extenion that uses facial recognition and Deepgram’s Speech Recognition API to place captions next to a speaker’s face in a YouTube video.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646039808/blog/2022/03/autobubble-youtube-speech-bubbles/screenshot.jpg" alt="A screenshot of a video with a man speaking - head in the middle of the frame. To the right of his head is a sentence, with all-but-the-last word slightly bolded."></p>
<h2 id="first-time-hackers">First-Time Hackers</h2>
<p>The team behind AutoBubble are all first-year Computer Science students at the University of Cambridge and, amazingly, were taking part in their very first hackathon. All of the team had the same sentiment. In the words of Lochlann:</p>
<blockquote>
<p>I expected a super intense competitive event, but it was chill, social, and friendly. All of the activities aside from hacking led to an excellent experience and environment to build a project.</p>
</blockquote>
<h2 id="building-autobubble">Building AutoBubble</h2>
<p>As soon as the team landed on an idea, they broke it down into pieces and assigned work to each member. They created a shared document to detail what each of their modules would do and the expected inputs/outputs, making it much easier to glue the project together at the end.</p>
<p>Conall got to work on integrating Deepgram, and thanks to the <a href="https://developers.deepgram.com/documentation/">documentation</a>, <a href="https://blog.deepgram.com/categories/tutorial/">tutorials</a>, and <a href="https://developers.deepgram.com/use-cases/">example projects</a>, he could treat them as building blocks to build what they needed.</p>
<p>Meanwhile, Lochlann started to work on facial recognition with <a href="https://github.com/justadudewhohacks/face-api.js">face-api.js</a>, which was a challenge. Still, the moment he overcame the hurdle and got it working, the team knew it provided many cool opportunities for this project.</p>
<p>Andy built the simple but effective UI for the project, and described that “care was put in to how the captions were styled, including a subtle indication of when a word in a phrase was said. A lot of balancing took place in the finer details of the captions themselves - making sure they weren’t too long to be distracting, while also not too short that they disappear too quickly.”</p>
<p>Dan built the Chrome extension to act as the glue for the project, and the team’s shared document made this a lot easier. As a note, I have been involved with hundreds of hackathons, and I have never once seen a team be so intentional with documentation from the outset. It seems to have really paid off!</p>
<h2 id="the-winner-is">The Winner Is…</h2>
<p>There were nearly 30 projects that incorporated Deepgram at Hack Cambridge, but this simple idea with a rock-solid execution was super impressive. Once the extension is installed, any YouTube video could start receiving these new captions, and they looked great.</p>
<p>If you’re interested in seeing how AutoBubble was built, you can find the code across two repositories - one for the <a href="https://github.com/dantechguy/autobubbleserver">server</a> and one for the <a href="https://github.com/dantechguy/autobubbleclient">client</a>.</p>`;
});

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
