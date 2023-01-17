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

const metadata = { "headings": [], "source": `Following on from my "[Getting Started with Supabase](https://blog.deepgram.com/getting-started-with-supabase/)" blog post, this guest post on the freeCodeCamp blog covers how to implement authentication into your Vue 3 application.

We cover how to include and set up Supabase, create components to manage registration and login, gate content behind authentication, how to log out, and finally how to complete the flow with a 'magic link' via email.

You can read the post now over on the [freeCodeCamp Blog](https://www.freecodecamp.org/news/add-supabase-authentication-to-vue/). If you ever have any questions about this post, please feel free to reach out to us on Twitter [@DeepgramDevs](https://twitter.com/DeepgramDevs). We\u2019re happy to help!`, "html": '<p>Following on from my \u201D<a href="https://blog.deepgram.com/getting-started-with-supabase/">Getting Started with Supabase</a>\u201D blog post, this guest post on the freeCodeCamp blog covers how to implement authentication into your Vue 3 application.</p>\n<p>We cover how to include and set up Supabase, create components to manage registration and login, gate content behind authentication, how to log out, and finally how to complete the flow with a \u2018magic link\u2019 via email.</p>\n<p>You can read the post now over on the <a href="https://www.freecodecamp.org/news/add-supabase-authentication-to-vue/">freeCodeCamp Blog</a>. If you ever have any questions about this post, please feel free to reach out to us on Twitter <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>. We\u2019re happy to help!</p>' };
const frontmatter = { "title": "How to Add Supabase Authentication to a Vue App", "description": "In this post we will walk through getting authentication set up using Supabase and Vue 3.", "date": "2022-02-10T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1646690723/blog/2022/02/supabase-authentication-vue/Getting-Started-with-supabase-blog%402x.jpg", "authors": ["brian-barrow"], "category": "tutorial", "tags": ["supabase"], "seo": { "title": "How to Add Supabase Authentication to a Vue App", "description": "In this post we will walk through getting authentication set up using Supabase and Vue 3." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661453998/blog/supabase-authentication-vue/ograph.png" }, "shorturls": { "share": "https://dpgr.am/3afd559", "twitter": "https://dpgr.am/f87b3f4", "linkedin": "https://dpgr.am/99a7dcb", "reddit": "https://dpgr.am/d5d0e76", "facebook": "https://dpgr.am/60f3165" }, "astro": { "headings": [], "source": `Following on from my "[Getting Started with Supabase](https://blog.deepgram.com/getting-started-with-supabase/)" blog post, this guest post on the freeCodeCamp blog covers how to implement authentication into your Vue 3 application.

We cover how to include and set up Supabase, create components to manage registration and login, gate content behind authentication, how to log out, and finally how to complete the flow with a 'magic link' via email.

You can read the post now over on the [freeCodeCamp Blog](https://www.freecodecamp.org/news/add-supabase-authentication-to-vue/). If you ever have any questions about this post, please feel free to reach out to us on Twitter [@DeepgramDevs](https://twitter.com/DeepgramDevs). We\u2019re happy to help!`, "html": '<p>Following on from my \u201D<a href="https://blog.deepgram.com/getting-started-with-supabase/">Getting Started with Supabase</a>\u201D blog post, this guest post on the freeCodeCamp blog covers how to implement authentication into your Vue 3 application.</p>\n<p>We cover how to include and set up Supabase, create components to manage registration and login, gate content behind authentication, how to log out, and finally how to complete the flow with a \u2018magic link\u2019 via email.</p>\n<p>You can read the post now over on the <a href="https://www.freecodecamp.org/news/add-supabase-authentication-to-vue/">freeCodeCamp Blog</a>. If you ever have any questions about this post, please feel free to reach out to us on Twitter <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>. We\u2019re happy to help!</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/supabase-authentication-vue/index.md" };
function rawContent() {
  return `Following on from my "[Getting Started with Supabase](https://blog.deepgram.com/getting-started-with-supabase/)" blog post, this guest post on the freeCodeCamp blog covers how to implement authentication into your Vue 3 application.

We cover how to include and set up Supabase, create components to manage registration and login, gate content behind authentication, how to log out, and finally how to complete the flow with a 'magic link' via email.

You can read the post now over on the [freeCodeCamp Blog](https://www.freecodecamp.org/news/add-supabase-authentication-to-vue/). If you ever have any questions about this post, please feel free to reach out to us on Twitter [@DeepgramDevs](https://twitter.com/DeepgramDevs). We\u2019re happy to help!`;
}
function compiledContent() {
  return '<p>Following on from my \u201D<a href="https://blog.deepgram.com/getting-started-with-supabase/">Getting Started with Supabase</a>\u201D blog post, this guest post on the freeCodeCamp blog covers how to implement authentication into your Vue 3 application.</p>\n<p>We cover how to include and set up Supabase, create components to manage registration and login, gate content behind authentication, how to log out, and finally how to complete the flow with a \u2018magic link\u2019 via email.</p>\n<p>You can read the post now over on the <a href="https://www.freecodecamp.org/news/add-supabase-authentication-to-vue/">freeCodeCamp Blog</a>. If you ever have any questions about this post, please feel free to reach out to us on Twitter <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>. We\u2019re happy to help!</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/supabase-authentication-vue/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Following on from my ”<a href="https://blog.deepgram.com/getting-started-with-supabase/">Getting Started with Supabase</a>” blog post, this guest post on the freeCodeCamp blog covers how to implement authentication into your Vue 3 application.</p>
<p>We cover how to include and set up Supabase, create components to manage registration and login, gate content behind authentication, how to log out, and finally how to complete the flow with a ‘magic link’ via email.</p>
<p>You can read the post now over on the <a href="https://www.freecodecamp.org/news/add-supabase-authentication-to-vue/">freeCodeCamp Blog</a>. If you ever have any questions about this post, please feel free to reach out to us on Twitter <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>. We’re happy to help!</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/supabase-authentication-vue/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
