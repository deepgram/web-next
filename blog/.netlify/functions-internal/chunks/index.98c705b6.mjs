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

const metadata = { "headings": [{ "depth": 2, "slug": "where-it-began", "text": "Where it Began" }, { "depth": 2, "slug": "full-transparency", "text": "Full Transparency" }], "source": `\r
Hello world! I'm Michael Jolley and I'm super excited to be joining Deepgram as\r
the Head of Developer Relations. Most of my career was spent building with .NET\r
and JavaScript, but today I consider myself a polyglot developer and love\r
continually learning new languages, frameworks, and platforms.\r
\r
## Where it Began\r
\r
I'm sure you've experienced one of those "Ah-ha!" moments. They aren't exclusive\r
to code; maybe you were learning to cook or learning a new language. You finally\r
hit that point where it "clicked" and you felt that rush of pride and\r
accomplishment.\r
\r
My career started writing custom software for clients ranging from start-ups to\r
Fortune 500 companies. I spent nearly 20 years building and leading\r
teams on some cool projects. As my career progressed, I moved into\r
management roles and spent more and more time investing in the team members I\r
was leading; helping them discover and learn new skills that would "level up"\r
their personal and professional lives.\r
\r
Looking back, I gained a lot of positive self-gratification from\r
seeing clients use the software I wrote to empower their businesses, but that paled\r
in comparison to the satisfaction of helping others have those "Ah-ha!" moments.\r
So in 2018, I started moving towards developer advocacy and, in 2019, landed my\r
first developer relations role at Nexmo (Vonage.)\r
\r
So now, here I am... just a Developer Advocate... standing in front of\r
developers... asking them to love me.\r
\r
![Julia Roberts in the movie Notting Hill](https://res.cloudinary.com/deepgram/image/upload/v1636427833/blog/2021/11/michael-jolley-joins-deepgram/justagirl.png)\r
\r
## Full Transparency\r
\r
Okay, so although this post is dated for November, I technically started with\r
Deepgram back in April of this year. What have I been doing? In short, laying\r
foundation and hiring. We've assembled an amazing team whose focus is on helping\r
developers, like you, succeed. Whether you're using Deepgram's APIs or not, we\r
want you to have those "Ah-ha!" moments.\r
\r
That's why, in the coming months, you'll start to see us creating a ton of\r
content, hanging out in communities, hosting hack-a-thons, and doing everything\r
we can to help you level up your technical and soft skills. I get seriously\r
excited every time I think about some of the things we've got planned. Hope to\r
see you all along the journey!\r
\r
        `, "html": '<p>Hello world! I\u2019m Michael Jolley and I\u2019m super excited to be joining Deepgram as\r\nthe Head of Developer Relations. Most of my career was spent building with .NET\r\nand JavaScript, but today I consider myself a polyglot developer and love\r\ncontinually learning new languages, frameworks, and platforms.</p>\n<h2 id="where-it-began">Where it Began</h2>\n<p>I\u2019m sure you\u2019ve experienced one of those \u201CAh-ha!\u201D moments. They aren\u2019t exclusive\r\nto code; maybe you were learning to cook or learning a new language. You finally\r\nhit that point where it \u201Cclicked\u201D and you felt that rush of pride and\r\naccomplishment.</p>\n<p>My career started writing custom software for clients ranging from start-ups to\r\nFortune 500 companies. I spent nearly 20 years building and leading\r\nteams on some cool projects. As my career progressed, I moved into\r\nmanagement roles and spent more and more time investing in the team members I\r\nwas leading; helping them discover and learn new skills that would \u201Clevel up\u201D\r\ntheir personal and professional lives.</p>\n<p>Looking back, I gained a lot of positive self-gratification from\r\nseeing clients use the software I wrote to empower their businesses, but that paled\r\nin comparison to the satisfaction of helping others have those \u201CAh-ha!\u201D moments.\r\nSo in 2018, I started moving towards developer advocacy and, in 2019, landed my\r\nfirst developer relations role at Nexmo (Vonage.)</p>\n<p>So now, here I am\u2026 just a Developer Advocate\u2026 standing in front of\r\ndevelopers\u2026 asking them to love me.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1636427833/blog/2021/11/michael-jolley-joins-deepgram/justagirl.png" alt="Julia Roberts in the movie Notting Hill"></p>\n<h2 id="full-transparency">Full Transparency</h2>\n<p>Okay, so although this post is dated for November, I technically started with\r\nDeepgram back in April of this year. What have I been doing? In short, laying\r\nfoundation and hiring. We\u2019ve assembled an amazing team whose focus is on helping\r\ndevelopers, like you, succeed. Whether you\u2019re using Deepgram\u2019s APIs or not, we\r\nwant you to have those \u201CAh-ha!\u201D moments.</p>\n<p>That\u2019s why, in the coming months, you\u2019ll start to see us creating a ton of\r\ncontent, hanging out in communities, hosting hack-a-thons, and doing everything\r\nwe can to help you level up your technical and soft skills. I get seriously\r\nexcited every time I think about some of the things we\u2019ve got planned. Hope to\r\nsee you all along the journey!</p>' };
const frontmatter = { "title": "Michael Jolley Joins the Developer Relations Team", "description": "Welcome Michael Jolley, the bald, bearded, builder to the Deepgram Developer Relations team.", "date": "2021-11-19T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1636422499/blog/2021/11/michael-jolley-joins-deepgram/birmingham-city-scape.jpg", "authors": ["michael-jolley"], "category": "devlife", "tags": ["team"], "seo": { "title": "Michael Jolley Joins the Developer Relations Team", "description": "Welcome Michael Jolley, the bald, bearded, builder to the Deepgram Developer Relations team." }, "shorturls": { "share": "https://dpgr.am/059f5a0", "twitter": "https://dpgr.am/92c5421", "linkedin": "https://dpgr.am/d85cc49", "reddit": "https://dpgr.am/8cf3e98", "facebook": "https://dpgr.am/08bb3eb" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661453818/blog/michael-jolley-joins-deepgram/ograph.png" }, "astro": { "headings": [{ "depth": 2, "slug": "where-it-began", "text": "Where it Began" }, { "depth": 2, "slug": "full-transparency", "text": "Full Transparency" }], "source": `\r
Hello world! I'm Michael Jolley and I'm super excited to be joining Deepgram as\r
the Head of Developer Relations. Most of my career was spent building with .NET\r
and JavaScript, but today I consider myself a polyglot developer and love\r
continually learning new languages, frameworks, and platforms.\r
\r
## Where it Began\r
\r
I'm sure you've experienced one of those "Ah-ha!" moments. They aren't exclusive\r
to code; maybe you were learning to cook or learning a new language. You finally\r
hit that point where it "clicked" and you felt that rush of pride and\r
accomplishment.\r
\r
My career started writing custom software for clients ranging from start-ups to\r
Fortune 500 companies. I spent nearly 20 years building and leading\r
teams on some cool projects. As my career progressed, I moved into\r
management roles and spent more and more time investing in the team members I\r
was leading; helping them discover and learn new skills that would "level up"\r
their personal and professional lives.\r
\r
Looking back, I gained a lot of positive self-gratification from\r
seeing clients use the software I wrote to empower their businesses, but that paled\r
in comparison to the satisfaction of helping others have those "Ah-ha!" moments.\r
So in 2018, I started moving towards developer advocacy and, in 2019, landed my\r
first developer relations role at Nexmo (Vonage.)\r
\r
So now, here I am... just a Developer Advocate... standing in front of\r
developers... asking them to love me.\r
\r
![Julia Roberts in the movie Notting Hill](https://res.cloudinary.com/deepgram/image/upload/v1636427833/blog/2021/11/michael-jolley-joins-deepgram/justagirl.png)\r
\r
## Full Transparency\r
\r
Okay, so although this post is dated for November, I technically started with\r
Deepgram back in April of this year. What have I been doing? In short, laying\r
foundation and hiring. We've assembled an amazing team whose focus is on helping\r
developers, like you, succeed. Whether you're using Deepgram's APIs or not, we\r
want you to have those "Ah-ha!" moments.\r
\r
That's why, in the coming months, you'll start to see us creating a ton of\r
content, hanging out in communities, hosting hack-a-thons, and doing everything\r
we can to help you level up your technical and soft skills. I get seriously\r
excited every time I think about some of the things we've got planned. Hope to\r
see you all along the journey!\r
\r
        `, "html": '<p>Hello world! I\u2019m Michael Jolley and I\u2019m super excited to be joining Deepgram as\r\nthe Head of Developer Relations. Most of my career was spent building with .NET\r\nand JavaScript, but today I consider myself a polyglot developer and love\r\ncontinually learning new languages, frameworks, and platforms.</p>\n<h2 id="where-it-began">Where it Began</h2>\n<p>I\u2019m sure you\u2019ve experienced one of those \u201CAh-ha!\u201D moments. They aren\u2019t exclusive\r\nto code; maybe you were learning to cook or learning a new language. You finally\r\nhit that point where it \u201Cclicked\u201D and you felt that rush of pride and\r\naccomplishment.</p>\n<p>My career started writing custom software for clients ranging from start-ups to\r\nFortune 500 companies. I spent nearly 20 years building and leading\r\nteams on some cool projects. As my career progressed, I moved into\r\nmanagement roles and spent more and more time investing in the team members I\r\nwas leading; helping them discover and learn new skills that would \u201Clevel up\u201D\r\ntheir personal and professional lives.</p>\n<p>Looking back, I gained a lot of positive self-gratification from\r\nseeing clients use the software I wrote to empower their businesses, but that paled\r\nin comparison to the satisfaction of helping others have those \u201CAh-ha!\u201D moments.\r\nSo in 2018, I started moving towards developer advocacy and, in 2019, landed my\r\nfirst developer relations role at Nexmo (Vonage.)</p>\n<p>So now, here I am\u2026 just a Developer Advocate\u2026 standing in front of\r\ndevelopers\u2026 asking them to love me.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1636427833/blog/2021/11/michael-jolley-joins-deepgram/justagirl.png" alt="Julia Roberts in the movie Notting Hill"></p>\n<h2 id="full-transparency">Full Transparency</h2>\n<p>Okay, so although this post is dated for November, I technically started with\r\nDeepgram back in April of this year. What have I been doing? In short, laying\r\nfoundation and hiring. We\u2019ve assembled an amazing team whose focus is on helping\r\ndevelopers, like you, succeed. Whether you\u2019re using Deepgram\u2019s APIs or not, we\r\nwant you to have those \u201CAh-ha!\u201D moments.</p>\n<p>That\u2019s why, in the coming months, you\u2019ll start to see us creating a ton of\r\ncontent, hanging out in communities, hosting hack-a-thons, and doing everything\r\nwe can to help you level up your technical and soft skills. I get seriously\r\nexcited every time I think about some of the things we\u2019ve got planned. Hope to\r\nsee you all along the journey!</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/michael-jolley-joins-deepgram/index.md" };
function rawContent() {
  return `\r
Hello world! I'm Michael Jolley and I'm super excited to be joining Deepgram as\r
the Head of Developer Relations. Most of my career was spent building with .NET\r
and JavaScript, but today I consider myself a polyglot developer and love\r
continually learning new languages, frameworks, and platforms.\r
\r
## Where it Began\r
\r
I'm sure you've experienced one of those "Ah-ha!" moments. They aren't exclusive\r
to code; maybe you were learning to cook or learning a new language. You finally\r
hit that point where it "clicked" and you felt that rush of pride and\r
accomplishment.\r
\r
My career started writing custom software for clients ranging from start-ups to\r
Fortune 500 companies. I spent nearly 20 years building and leading\r
teams on some cool projects. As my career progressed, I moved into\r
management roles and spent more and more time investing in the team members I\r
was leading; helping them discover and learn new skills that would "level up"\r
their personal and professional lives.\r
\r
Looking back, I gained a lot of positive self-gratification from\r
seeing clients use the software I wrote to empower their businesses, but that paled\r
in comparison to the satisfaction of helping others have those "Ah-ha!" moments.\r
So in 2018, I started moving towards developer advocacy and, in 2019, landed my\r
first developer relations role at Nexmo (Vonage.)\r
\r
So now, here I am... just a Developer Advocate... standing in front of\r
developers... asking them to love me.\r
\r
![Julia Roberts in the movie Notting Hill](https://res.cloudinary.com/deepgram/image/upload/v1636427833/blog/2021/11/michael-jolley-joins-deepgram/justagirl.png)\r
\r
## Full Transparency\r
\r
Okay, so although this post is dated for November, I technically started with\r
Deepgram back in April of this year. What have I been doing? In short, laying\r
foundation and hiring. We've assembled an amazing team whose focus is on helping\r
developers, like you, succeed. Whether you're using Deepgram's APIs or not, we\r
want you to have those "Ah-ha!" moments.\r
\r
That's why, in the coming months, you'll start to see us creating a ton of\r
content, hanging out in communities, hosting hack-a-thons, and doing everything\r
we can to help you level up your technical and soft skills. I get seriously\r
excited every time I think about some of the things we've got planned. Hope to\r
see you all along the journey!\r
\r
        `;
}
function compiledContent() {
  return '<p>Hello world! I\u2019m Michael Jolley and I\u2019m super excited to be joining Deepgram as\r\nthe Head of Developer Relations. Most of my career was spent building with .NET\r\nand JavaScript, but today I consider myself a polyglot developer and love\r\ncontinually learning new languages, frameworks, and platforms.</p>\n<h2 id="where-it-began">Where it Began</h2>\n<p>I\u2019m sure you\u2019ve experienced one of those \u201CAh-ha!\u201D moments. They aren\u2019t exclusive\r\nto code; maybe you were learning to cook or learning a new language. You finally\r\nhit that point where it \u201Cclicked\u201D and you felt that rush of pride and\r\naccomplishment.</p>\n<p>My career started writing custom software for clients ranging from start-ups to\r\nFortune 500 companies. I spent nearly 20 years building and leading\r\nteams on some cool projects. As my career progressed, I moved into\r\nmanagement roles and spent more and more time investing in the team members I\r\nwas leading; helping them discover and learn new skills that would \u201Clevel up\u201D\r\ntheir personal and professional lives.</p>\n<p>Looking back, I gained a lot of positive self-gratification from\r\nseeing clients use the software I wrote to empower their businesses, but that paled\r\nin comparison to the satisfaction of helping others have those \u201CAh-ha!\u201D moments.\r\nSo in 2018, I started moving towards developer advocacy and, in 2019, landed my\r\nfirst developer relations role at Nexmo (Vonage.)</p>\n<p>So now, here I am\u2026 just a Developer Advocate\u2026 standing in front of\r\ndevelopers\u2026 asking them to love me.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1636427833/blog/2021/11/michael-jolley-joins-deepgram/justagirl.png" alt="Julia Roberts in the movie Notting Hill"></p>\n<h2 id="full-transparency">Full Transparency</h2>\n<p>Okay, so although this post is dated for November, I technically started with\r\nDeepgram back in April of this year. What have I been doing? In short, laying\r\nfoundation and hiring. We\u2019ve assembled an amazing team whose focus is on helping\r\ndevelopers, like you, succeed. Whether you\u2019re using Deepgram\u2019s APIs or not, we\r\nwant you to have those \u201CAh-ha!\u201D moments.</p>\n<p>That\u2019s why, in the coming months, you\u2019ll start to see us creating a ton of\r\ncontent, hanging out in communities, hosting hack-a-thons, and doing everything\r\nwe can to help you level up your technical and soft skills. I get seriously\r\nexcited every time I think about some of the things we\u2019ve got planned. Hope to\r\nsee you all along the journey!</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/michael-jolley-joins-deepgram/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Hello world! I’m Michael Jolley and I’m super excited to be joining Deepgram as
the Head of Developer Relations. Most of my career was spent building with .NET
and JavaScript, but today I consider myself a polyglot developer and love
continually learning new languages, frameworks, and platforms.</p>
<h2 id="where-it-began">Where it Began</h2>
<p>I’m sure you’ve experienced one of those “Ah-ha!” moments. They aren’t exclusive
to code; maybe you were learning to cook or learning a new language. You finally
hit that point where it “clicked” and you felt that rush of pride and
accomplishment.</p>
<p>My career started writing custom software for clients ranging from start-ups to
Fortune 500 companies. I spent nearly 20 years building and leading
teams on some cool projects. As my career progressed, I moved into
management roles and spent more and more time investing in the team members I
was leading; helping them discover and learn new skills that would “level up”
their personal and professional lives.</p>
<p>Looking back, I gained a lot of positive self-gratification from
seeing clients use the software I wrote to empower their businesses, but that paled
in comparison to the satisfaction of helping others have those “Ah-ha!” moments.
So in 2018, I started moving towards developer advocacy and, in 2019, landed my
first developer relations role at Nexmo (Vonage.)</p>
<p>So now, here I am… just a Developer Advocate… standing in front of
developers… asking them to love me.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1636427833/blog/2021/11/michael-jolley-joins-deepgram/justagirl.png" alt="Julia Roberts in the movie Notting Hill"></p>
<h2 id="full-transparency">Full Transparency</h2>
<p>Okay, so although this post is dated for November, I technically started with
Deepgram back in April of this year. What have I been doing? In short, laying
foundation and hiring. We’ve assembled an amazing team whose focus is on helping
developers, like you, succeed. Whether you’re using Deepgram’s APIs or not, we
want you to have those “Ah-ha!” moments.</p>
<p>That’s why, in the coming months, you’ll start to see us creating a ton of
content, hanging out in communities, hosting hack-a-thons, and doing everything
we can to help you level up your technical and soft skills. I get seriously
excited every time I think about some of the things we’ve got planned. Hope to
see you all along the journey!</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/michael-jolley-joins-deepgram/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
