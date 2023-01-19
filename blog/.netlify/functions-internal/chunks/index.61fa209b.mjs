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

const metadata = { "headings": [{ "depth": 3, "slug": "what-are-idioms", "text": "What Are Idioms?" }], "source": `\r
We know this means to be sick or ill, but why?\r
\r
\r
\r
\r
\r
![](https://res.cloudinary.com/deepgram/image/upload/v1661976797/blog/what-does-it-mean-to-be-under-the-weather/U.S.S.-Seminole--Thursday--November-07--1861---Shi.jpg)\r
\r
<div>_A picture the ship's log from the [U.S.S. Seminole](https://en.wikipedia.org/wiki/USS_Seminole_(1859)), Thursday, November 07, 1861._</div>\r
\r
1.  Back in the sailing days, captains kept logs of all the activity on the boat, including who was ill. When the number of sick sailors exceeded the space allotted in the ship's log for sick sailors their names were written under the weather section of the log.\r
2.  In the days of sailing and even in the golden days of steam powered ships, passengers would often get seasick. The ill would be advised to sleep off their nausea under the ship's weather rail. This is the below-deck area on the side of the boat that faces the wind.\r
3.  Ill passengers and sailors alike would go below deck, out of the weather and under the topsides of the ship. Perhaps the notion of out of the elements and underneath were joined.\r
\r
\r
\r
\r
\r
Like so many set phrases in English, to be under the weather is a sailing term. There are several conjectures as how it came about. Here are three: It is neat to point out that if one or one's machines are "ship-shape" they are in good condition. Though this is not the literal opposite of "under the weather" it is a contrasting phrase. You can't be ship-shape if you are under the weather.\r
\r
* * *\r
\r
### What Are Idioms?\r
\r
Idioms are phrases in language that are used to convey emotions about certain topics. They are fascinating to everyday language speakers and linguists for a couple of reasons. They exist in a space between grammar and single words-this means that they somewhat conform to grammatical rules, yet have to be learned phrase by phrase just like most words need to be learned. Idioms also preserve in them the history of how and where they came to be. Certain idioms haven't left their villages in rural England. Others are universal. Variations in one idiom tell us about where they have been in time and place. They remind us of times long-gone and places near and far-when and where the world was different but people were the same.\r
`, "html": '<p>We know this means to be sick or ill, but why?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976797/blog/what-does-it-mean-to-be-under-the-weather/U.S.S.-Seminole--Thursday--November-07--1861---Shi.jpg" alt=""></p>\n<div><em>A picture the ship\u2019s log from the <a href="https://en.wikipedia.org/wiki/USS_Seminole_(1859)">U.S.S. Seminole</a>, Thursday, November 07, 1861.</em></div>\n<ol>\n<li>Back in the sailing days, captains kept logs of all the activity on the boat, including who was ill. When the number of sick sailors exceeded the space allotted in the ship\u2019s log for sick sailors their names were written under the weather section of the log.</li>\n<li>In the days of sailing and even in the golden days of steam powered ships, passengers would often get seasick. The ill would be advised to sleep off their nausea under the ship\u2019s weather rail. This is the below-deck area on the side of the boat that faces the wind.</li>\n<li>Ill passengers and sailors alike would go below deck, out of the weather and under the topsides of the ship. Perhaps the notion of out of the elements and underneath were joined.</li>\n</ol>\n<p>Like so many set phrases in English, to be under the weather is a sailing term. There are several conjectures as how it came about. Here are three: It is neat to point out that if one or one\u2019s machines are \u201Cship-shape\u201D they are in good condition. Though this is not the literal opposite of \u201Cunder the weather\u201D it is a contrasting phrase. You can\u2019t be ship-shape if you are under the weather.</p>\n<hr>\n<h3 id="what-are-idioms">What Are Idioms?</h3>\n<p>Idioms are phrases in language that are used to convey emotions about certain topics. They are fascinating to everyday language speakers and linguists for a couple of reasons. They exist in a space between grammar and single words-this means that they somewhat conform to grammatical rules, yet have to be learned phrase by phrase just like most words need to be learned. Idioms also preserve in them the history of how and where they came to be. Certain idioms haven\u2019t left their villages in rural England. Others are universal. Variations in one idiom tell us about where they have been in time and place. They remind us of times long-gone and places near and far-when and where the world was different but people were the same.</p>' };
const frontmatter = { "title": "Under the Weather \u2014 What Does it Mean?", "description": 'Where does the phrase "under the weather" come from? Find out here!', "date": "2019-01-08T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981953/blog/what-does-it-mean-to-be-under-the-weather/placeholder-post-image%402x.jpg", "authors": ["morris-gevirtz"], "category": "linguistics", "tags": ["education", "language"], "seo": { "title": "Under the Weather \u2014 What Does it Mean?", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981953/blog/what-does-it-mean-to-be-under-the-weather/placeholder-post-image%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/ad4b98f", "twitter": "https://dpgr.am/8e092ec", "linkedin": "https://dpgr.am/12f4966", "reddit": "https://dpgr.am/9c7fae0", "facebook": "https://dpgr.am/738d63f" }, "astro": { "headings": [{ "depth": 3, "slug": "what-are-idioms", "text": "What Are Idioms?" }], "source": `\r
We know this means to be sick or ill, but why?\r
\r
\r
\r
\r
\r
![](https://res.cloudinary.com/deepgram/image/upload/v1661976797/blog/what-does-it-mean-to-be-under-the-weather/U.S.S.-Seminole--Thursday--November-07--1861---Shi.jpg)\r
\r
<div>_A picture the ship's log from the [U.S.S. Seminole](https://en.wikipedia.org/wiki/USS_Seminole_(1859)), Thursday, November 07, 1861._</div>\r
\r
1.  Back in the sailing days, captains kept logs of all the activity on the boat, including who was ill. When the number of sick sailors exceeded the space allotted in the ship's log for sick sailors their names were written under the weather section of the log.\r
2.  In the days of sailing and even in the golden days of steam powered ships, passengers would often get seasick. The ill would be advised to sleep off their nausea under the ship's weather rail. This is the below-deck area on the side of the boat that faces the wind.\r
3.  Ill passengers and sailors alike would go below deck, out of the weather and under the topsides of the ship. Perhaps the notion of out of the elements and underneath were joined.\r
\r
\r
\r
\r
\r
Like so many set phrases in English, to be under the weather is a sailing term. There are several conjectures as how it came about. Here are three: It is neat to point out that if one or one's machines are "ship-shape" they are in good condition. Though this is not the literal opposite of "under the weather" it is a contrasting phrase. You can't be ship-shape if you are under the weather.\r
\r
* * *\r
\r
### What Are Idioms?\r
\r
Idioms are phrases in language that are used to convey emotions about certain topics. They are fascinating to everyday language speakers and linguists for a couple of reasons. They exist in a space between grammar and single words-this means that they somewhat conform to grammatical rules, yet have to be learned phrase by phrase just like most words need to be learned. Idioms also preserve in them the history of how and where they came to be. Certain idioms haven't left their villages in rural England. Others are universal. Variations in one idiom tell us about where they have been in time and place. They remind us of times long-gone and places near and far-when and where the world was different but people were the same.\r
`, "html": '<p>We know this means to be sick or ill, but why?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976797/blog/what-does-it-mean-to-be-under-the-weather/U.S.S.-Seminole--Thursday--November-07--1861---Shi.jpg" alt=""></p>\n<div><em>A picture the ship\u2019s log from the <a href="https://en.wikipedia.org/wiki/USS_Seminole_(1859)">U.S.S. Seminole</a>, Thursday, November 07, 1861.</em></div>\n<ol>\n<li>Back in the sailing days, captains kept logs of all the activity on the boat, including who was ill. When the number of sick sailors exceeded the space allotted in the ship\u2019s log for sick sailors their names were written under the weather section of the log.</li>\n<li>In the days of sailing and even in the golden days of steam powered ships, passengers would often get seasick. The ill would be advised to sleep off their nausea under the ship\u2019s weather rail. This is the below-deck area on the side of the boat that faces the wind.</li>\n<li>Ill passengers and sailors alike would go below deck, out of the weather and under the topsides of the ship. Perhaps the notion of out of the elements and underneath were joined.</li>\n</ol>\n<p>Like so many set phrases in English, to be under the weather is a sailing term. There are several conjectures as how it came about. Here are three: It is neat to point out that if one or one\u2019s machines are \u201Cship-shape\u201D they are in good condition. Though this is not the literal opposite of \u201Cunder the weather\u201D it is a contrasting phrase. You can\u2019t be ship-shape if you are under the weather.</p>\n<hr>\n<h3 id="what-are-idioms">What Are Idioms?</h3>\n<p>Idioms are phrases in language that are used to convey emotions about certain topics. They are fascinating to everyday language speakers and linguists for a couple of reasons. They exist in a space between grammar and single words-this means that they somewhat conform to grammatical rules, yet have to be learned phrase by phrase just like most words need to be learned. Idioms also preserve in them the history of how and where they came to be. Certain idioms haven\u2019t left their villages in rural England. Others are universal. Variations in one idiom tell us about where they have been in time and place. They remind us of times long-gone and places near and far-when and where the world was different but people were the same.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-does-it-mean-to-be-under-the-weather/index.md" };
function rawContent() {
  return `\r
We know this means to be sick or ill, but why?\r
\r
\r
\r
\r
\r
![](https://res.cloudinary.com/deepgram/image/upload/v1661976797/blog/what-does-it-mean-to-be-under-the-weather/U.S.S.-Seminole--Thursday--November-07--1861---Shi.jpg)\r
\r
<div>_A picture the ship's log from the [U.S.S. Seminole](https://en.wikipedia.org/wiki/USS_Seminole_(1859)), Thursday, November 07, 1861._</div>\r
\r
1.  Back in the sailing days, captains kept logs of all the activity on the boat, including who was ill. When the number of sick sailors exceeded the space allotted in the ship's log for sick sailors their names were written under the weather section of the log.\r
2.  In the days of sailing and even in the golden days of steam powered ships, passengers would often get seasick. The ill would be advised to sleep off their nausea under the ship's weather rail. This is the below-deck area on the side of the boat that faces the wind.\r
3.  Ill passengers and sailors alike would go below deck, out of the weather and under the topsides of the ship. Perhaps the notion of out of the elements and underneath were joined.\r
\r
\r
\r
\r
\r
Like so many set phrases in English, to be under the weather is a sailing term. There are several conjectures as how it came about. Here are three: It is neat to point out that if one or one's machines are "ship-shape" they are in good condition. Though this is not the literal opposite of "under the weather" it is a contrasting phrase. You can't be ship-shape if you are under the weather.\r
\r
* * *\r
\r
### What Are Idioms?\r
\r
Idioms are phrases in language that are used to convey emotions about certain topics. They are fascinating to everyday language speakers and linguists for a couple of reasons. They exist in a space between grammar and single words-this means that they somewhat conform to grammatical rules, yet have to be learned phrase by phrase just like most words need to be learned. Idioms also preserve in them the history of how and where they came to be. Certain idioms haven't left their villages in rural England. Others are universal. Variations in one idiom tell us about where they have been in time and place. They remind us of times long-gone and places near and far-when and where the world was different but people were the same.\r
`;
}
function compiledContent() {
  return '<p>We know this means to be sick or ill, but why?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976797/blog/what-does-it-mean-to-be-under-the-weather/U.S.S.-Seminole--Thursday--November-07--1861---Shi.jpg" alt=""></p>\n<div><em>A picture the ship\u2019s log from the <a href="https://en.wikipedia.org/wiki/USS_Seminole_(1859)">U.S.S. Seminole</a>, Thursday, November 07, 1861.</em></div>\n<ol>\n<li>Back in the sailing days, captains kept logs of all the activity on the boat, including who was ill. When the number of sick sailors exceeded the space allotted in the ship\u2019s log for sick sailors their names were written under the weather section of the log.</li>\n<li>In the days of sailing and even in the golden days of steam powered ships, passengers would often get seasick. The ill would be advised to sleep off their nausea under the ship\u2019s weather rail. This is the below-deck area on the side of the boat that faces the wind.</li>\n<li>Ill passengers and sailors alike would go below deck, out of the weather and under the topsides of the ship. Perhaps the notion of out of the elements and underneath were joined.</li>\n</ol>\n<p>Like so many set phrases in English, to be under the weather is a sailing term. There are several conjectures as how it came about. Here are three: It is neat to point out that if one or one\u2019s machines are \u201Cship-shape\u201D they are in good condition. Though this is not the literal opposite of \u201Cunder the weather\u201D it is a contrasting phrase. You can\u2019t be ship-shape if you are under the weather.</p>\n<hr>\n<h3 id="what-are-idioms">What Are Idioms?</h3>\n<p>Idioms are phrases in language that are used to convey emotions about certain topics. They are fascinating to everyday language speakers and linguists for a couple of reasons. They exist in a space between grammar and single words-this means that they somewhat conform to grammatical rules, yet have to be learned phrase by phrase just like most words need to be learned. Idioms also preserve in them the history of how and where they came to be. Certain idioms haven\u2019t left their villages in rural England. Others are universal. Variations in one idiom tell us about where they have been in time and place. They remind us of times long-gone and places near and far-when and where the world was different but people were the same.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-does-it-mean-to-be-under-the-weather/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>We know this means to be sick or ill, but why?</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976797/blog/what-does-it-mean-to-be-under-the-weather/U.S.S.-Seminole--Thursday--November-07--1861---Shi.jpg" alt=""></p>
<div><em>A picture the ship’s log from the <a href="https://en.wikipedia.org/wiki/USS_Seminole_(1859)">U.S.S. Seminole</a>, Thursday, November 07, 1861.</em></div>
<ol>
<li>Back in the sailing days, captains kept logs of all the activity on the boat, including who was ill. When the number of sick sailors exceeded the space allotted in the ship’s log for sick sailors their names were written under the weather section of the log.</li>
<li>In the days of sailing and even in the golden days of steam powered ships, passengers would often get seasick. The ill would be advised to sleep off their nausea under the ship’s weather rail. This is the below-deck area on the side of the boat that faces the wind.</li>
<li>Ill passengers and sailors alike would go below deck, out of the weather and under the topsides of the ship. Perhaps the notion of out of the elements and underneath were joined.</li>
</ol>
<p>Like so many set phrases in English, to be under the weather is a sailing term. There are several conjectures as how it came about. Here are three: It is neat to point out that if one or one’s machines are “ship-shape” they are in good condition. Though this is not the literal opposite of “under the weather” it is a contrasting phrase. You can’t be ship-shape if you are under the weather.</p>
<hr>
<h3 id="what-are-idioms">What Are Idioms?</h3>
<p>Idioms are phrases in language that are used to convey emotions about certain topics. They are fascinating to everyday language speakers and linguists for a couple of reasons. They exist in a space between grammar and single words-this means that they somewhat conform to grammatical rules, yet have to be learned phrase by phrase just like most words need to be learned. Idioms also preserve in them the history of how and where they came to be. Certain idioms haven’t left their villages in rural England. Others are universal. Variations in one idiom tell us about where they have been in time and place. They remind us of times long-gone and places near and far-when and where the world was different but people were the same.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-does-it-mean-to-be-under-the-weather/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
