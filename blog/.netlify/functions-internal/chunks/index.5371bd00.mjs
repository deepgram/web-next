import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderComponent } from '../entry.mjs';
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

const metadata = { "headings": [{ "depth": 2, "slug": "20-language-models-now-available", "text": "20+ Language Models Now Available" }, { "depth": 2, "slug": "wrapping-up", "text": "Wrapping Up" }], "source": `One of our driving principles at Deepgram is to make every voice heard and understood. If your business has international locations or customers, you need a speech recognition solution that can deliver the same level of accuracy, regardless of language or dialect. We're thrilled to announce that we now offer more than 20 language and dialect models, all of which provide the level of speed and accuracy that sets Deepgram apart.  This announcement marks Deepgram's commitment to expanding to new regions and improving accuracy for as many users as possible. Adding this new suite of languages is a significant step towards delivering a global language experience that is on par with the success we've seen from our English model. Deepgram provides businesses with the fastest, most efficient language models from day one, and outperforms the other ASR providers in the space.

## 20+ Language Models Now Available

By utilizing transfer learning processes, and backed by our [end-to-end deep learning](https://offers.deepgram.com/how-deepgram-works-whitepaper) architecture trained with real-world audio datasets, we've been able to double the number of models we offer in just one quarter. Continuously incorporating new language models like these allows our team to provide the most cost-effective, fast, and accurate speech-to-text system on the market in an ever-expanding number of languages, allowing our users to make incredible speech experiences available to their customers worldwide. The 24 language models that we currently offer are:

* Dutch
* English (unique models for Australian, US, British, New Zealand, and Indian Englishes)
* French (unique models for continental and Canadian French)
* German
* Hindi
* Indonesian
* Italian
* Japanese
* Korean
* Mandarin (simplified and traditional)
* Portuguese (unique models for continental and Brazilian)
* Russian
* Spanish (unique models for continental and Latin American)
* Swedish
* Turkish
* Ukrainian

By providing a best-of-breed, API-based solution, Deepgram is creating meaningful and data-rich voice experiences that excite developers and improve the overall experience for customers. These new language models are now available for you and your software teams to use at no extra charge. And don't miss out; the following languages are free to use for a limited time!

* Dutch
* French
* German
* Indonesian
* Italian
* Japanese
* Korean
* Mandarin (simplified and traditional)
* Russian
* Swedish
* Ukrainian

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

## Wrapping Up

We've got lots more planned for the year ahead. If you'd like to stay in the know about any new language releases, you can sign up for our newsletter below, or keep an eye on our [languages page](https://deepgram.com/product/languages/) for updates on the models we offer. And if you'd like to give these languages a try, sign up for a [free API key](https://console.deepgram.com/) or [contact us](https://deepgram.com/contact-us/) to see how we can help with your multilingual ASR needs.`, "html": '<p>One of our driving principles at Deepgram is to make every voice heard and understood. If your business has international locations or customers, you need a speech recognition solution that can deliver the same level of accuracy, regardless of language or dialect. We\u2019re thrilled to announce that we now offer more than 20 language and dialect models, all of which provide the level of speed and accuracy that sets Deepgram apart.  This announcement marks Deepgram\u2019s commitment to expanding to new regions and improving accuracy for as many users as possible. Adding this new suite of languages is a significant step towards delivering a global language experience that is on par with the success we\u2019ve seen from our English model. Deepgram provides businesses with the fastest, most efficient language models from day one, and outperforms the other ASR providers in the space.</p>\n<h2 id="20-language-models-now-available">20+ Language Models Now Available</h2>\n<p>By utilizing transfer learning processes, and backed by our <a href="https://offers.deepgram.com/how-deepgram-works-whitepaper">end-to-end deep learning</a> architecture trained with real-world audio datasets, we\u2019ve been able to double the number of models we offer in just one quarter. Continuously incorporating new language models like these allows our team to provide the most cost-effective, fast, and accurate speech-to-text system on the market in an ever-expanding number of languages, allowing our users to make incredible speech experiences available to their customers worldwide. The 24 language models that we currently offer are:</p>\n<ul>\n<li>Dutch</li>\n<li>English (unique models for Australian, US, British, New Zealand, and Indian Englishes)</li>\n<li>French (unique models for continental and Canadian French)</li>\n<li>German</li>\n<li>Hindi</li>\n<li>Indonesian</li>\n<li>Italian</li>\n<li>Japanese</li>\n<li>Korean</li>\n<li>Mandarin (simplified and traditional)</li>\n<li>Portuguese (unique models for continental and Brazilian)</li>\n<li>Russian</li>\n<li>Spanish (unique models for continental and Latin American)</li>\n<li>Swedish</li>\n<li>Turkish</li>\n<li>Ukrainian</li>\n</ul>\n<p>By providing a best-of-breed, API-based solution, Deepgram is creating meaningful and data-rich voice experiences that excite developers and improve the overall experience for customers. These new language models are now available for you and your software teams to use at no extra charge. And don\u2019t miss out; the following languages are free to use for a limited time!</p>\n<ul>\n<li>Dutch</li>\n<li>French</li>\n<li>German</li>\n<li>Indonesian</li>\n<li>Italian</li>\n<li>Japanese</li>\n<li>Korean</li>\n<li>Mandarin (simplified and traditional)</li>\n<li>Russian</li>\n<li>Swedish</li>\n<li>Ukrainian</li>\n</ul>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<h2 id="wrapping-up">Wrapping Up</h2>\n<p>We\u2019ve got lots more planned for the year ahead. If you\u2019d like to stay in the know about any new language releases, you can sign up for our newsletter below, or keep an eye on our <a href="https://deepgram.com/product/languages/">languages page</a> for updates on the models we offer. And if you\u2019d like to give these languages a try, sign up for a <a href="https://console.deepgram.com/">free API key</a> or <a href="https://deepgram.com/contact-us/">contact us</a> to see how we can help with your multilingual ASR needs.</p>' };
const frontmatter = { "title": "Deepgram Now Offers More than 20 Language and Dialect Speech Models\xA0", "description": "We're pleased to announce that we now offer more than 20 languages and dialect speech models\u2014read on to learn more about what we offer.", "date": "2022-03-29T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981413/blog/deepgram-language-speech-models/DG-offers-over-20-language-models-thumb-554x220%402x.png", "authors": ["keith-lam"], "category": "dg-insider", "tags": ["language"], "seo": { "title": "Deepgram Now Offers More than 20 Language and Dialect Speech Models\xA0", "description": "We pleased to announce that we now offer more than 20 languages and dialect speech models\u2014read on to learn more about what we offer." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981413/blog/deepgram-language-speech-models/DG-offers-over-20-language-models-thumb-554x220%402x.png" }, "shorturls": { "share": "https://dpgr.am/14da294", "twitter": "https://dpgr.am/5de8ab3", "linkedin": "https://dpgr.am/57f1aa3", "reddit": "https://dpgr.am/c255159", "facebook": "https://dpgr.am/3641d94" }, "astro": { "headings": [{ "depth": 2, "slug": "20-language-models-now-available", "text": "20+ Language Models Now Available" }, { "depth": 2, "slug": "wrapping-up", "text": "Wrapping Up" }], "source": `One of our driving principles at Deepgram is to make every voice heard and understood. If your business has international locations or customers, you need a speech recognition solution that can deliver the same level of accuracy, regardless of language or dialect. We're thrilled to announce that we now offer more than 20 language and dialect models, all of which provide the level of speed and accuracy that sets Deepgram apart.  This announcement marks Deepgram's commitment to expanding to new regions and improving accuracy for as many users as possible. Adding this new suite of languages is a significant step towards delivering a global language experience that is on par with the success we've seen from our English model. Deepgram provides businesses with the fastest, most efficient language models from day one, and outperforms the other ASR providers in the space.

## 20+ Language Models Now Available

By utilizing transfer learning processes, and backed by our [end-to-end deep learning](https://offers.deepgram.com/how-deepgram-works-whitepaper) architecture trained with real-world audio datasets, we've been able to double the number of models we offer in just one quarter. Continuously incorporating new language models like these allows our team to provide the most cost-effective, fast, and accurate speech-to-text system on the market in an ever-expanding number of languages, allowing our users to make incredible speech experiences available to their customers worldwide. The 24 language models that we currently offer are:

* Dutch
* English (unique models for Australian, US, British, New Zealand, and Indian Englishes)
* French (unique models for continental and Canadian French)
* German
* Hindi
* Indonesian
* Italian
* Japanese
* Korean
* Mandarin (simplified and traditional)
* Portuguese (unique models for continental and Brazilian)
* Russian
* Spanish (unique models for continental and Latin American)
* Swedish
* Turkish
* Ukrainian

By providing a best-of-breed, API-based solution, Deepgram is creating meaningful and data-rich voice experiences that excite developers and improve the overall experience for customers. These new language models are now available for you and your software teams to use at no extra charge. And don't miss out; the following languages are free to use for a limited time!

* Dutch
* French
* German
* Indonesian
* Italian
* Japanese
* Korean
* Mandarin (simplified and traditional)
* Russian
* Swedish
* Ukrainian

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

## Wrapping Up

We've got lots more planned for the year ahead. If you'd like to stay in the know about any new language releases, you can sign up for our newsletter below, or keep an eye on our [languages page](https://deepgram.com/product/languages/) for updates on the models we offer. And if you'd like to give these languages a try, sign up for a [free API key](https://console.deepgram.com/) or [contact us](https://deepgram.com/contact-us/) to see how we can help with your multilingual ASR needs.`, "html": '<p>One of our driving principles at Deepgram is to make every voice heard and understood. If your business has international locations or customers, you need a speech recognition solution that can deliver the same level of accuracy, regardless of language or dialect. We\u2019re thrilled to announce that we now offer more than 20 language and dialect models, all of which provide the level of speed and accuracy that sets Deepgram apart.  This announcement marks Deepgram\u2019s commitment to expanding to new regions and improving accuracy for as many users as possible. Adding this new suite of languages is a significant step towards delivering a global language experience that is on par with the success we\u2019ve seen from our English model. Deepgram provides businesses with the fastest, most efficient language models from day one, and outperforms the other ASR providers in the space.</p>\n<h2 id="20-language-models-now-available">20+ Language Models Now Available</h2>\n<p>By utilizing transfer learning processes, and backed by our <a href="https://offers.deepgram.com/how-deepgram-works-whitepaper">end-to-end deep learning</a> architecture trained with real-world audio datasets, we\u2019ve been able to double the number of models we offer in just one quarter. Continuously incorporating new language models like these allows our team to provide the most cost-effective, fast, and accurate speech-to-text system on the market in an ever-expanding number of languages, allowing our users to make incredible speech experiences available to their customers worldwide. The 24 language models that we currently offer are:</p>\n<ul>\n<li>Dutch</li>\n<li>English (unique models for Australian, US, British, New Zealand, and Indian Englishes)</li>\n<li>French (unique models for continental and Canadian French)</li>\n<li>German</li>\n<li>Hindi</li>\n<li>Indonesian</li>\n<li>Italian</li>\n<li>Japanese</li>\n<li>Korean</li>\n<li>Mandarin (simplified and traditional)</li>\n<li>Portuguese (unique models for continental and Brazilian)</li>\n<li>Russian</li>\n<li>Spanish (unique models for continental and Latin American)</li>\n<li>Swedish</li>\n<li>Turkish</li>\n<li>Ukrainian</li>\n</ul>\n<p>By providing a best-of-breed, API-based solution, Deepgram is creating meaningful and data-rich voice experiences that excite developers and improve the overall experience for customers. These new language models are now available for you and your software teams to use at no extra charge. And don\u2019t miss out; the following languages are free to use for a limited time!</p>\n<ul>\n<li>Dutch</li>\n<li>French</li>\n<li>German</li>\n<li>Indonesian</li>\n<li>Italian</li>\n<li>Japanese</li>\n<li>Korean</li>\n<li>Mandarin (simplified and traditional)</li>\n<li>Russian</li>\n<li>Swedish</li>\n<li>Ukrainian</li>\n</ul>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<h2 id="wrapping-up">Wrapping Up</h2>\n<p>We\u2019ve got lots more planned for the year ahead. If you\u2019d like to stay in the know about any new language releases, you can sign up for our newsletter below, or keep an eye on our <a href="https://deepgram.com/product/languages/">languages page</a> for updates on the models we offer. And if you\u2019d like to give these languages a try, sign up for a <a href="https://console.deepgram.com/">free API key</a> or <a href="https://deepgram.com/contact-us/">contact us</a> to see how we can help with your multilingual ASR needs.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-language-speech-models/index.md" };
function rawContent() {
  return `One of our driving principles at Deepgram is to make every voice heard and understood. If your business has international locations or customers, you need a speech recognition solution that can deliver the same level of accuracy, regardless of language or dialect. We're thrilled to announce that we now offer more than 20 language and dialect models, all of which provide the level of speed and accuracy that sets Deepgram apart.  This announcement marks Deepgram's commitment to expanding to new regions and improving accuracy for as many users as possible. Adding this new suite of languages is a significant step towards delivering a global language experience that is on par with the success we've seen from our English model. Deepgram provides businesses with the fastest, most efficient language models from day one, and outperforms the other ASR providers in the space.

## 20+ Language Models Now Available

By utilizing transfer learning processes, and backed by our [end-to-end deep learning](https://offers.deepgram.com/how-deepgram-works-whitepaper) architecture trained with real-world audio datasets, we've been able to double the number of models we offer in just one quarter. Continuously incorporating new language models like these allows our team to provide the most cost-effective, fast, and accurate speech-to-text system on the market in an ever-expanding number of languages, allowing our users to make incredible speech experiences available to their customers worldwide. The 24 language models that we currently offer are:

* Dutch
* English (unique models for Australian, US, British, New Zealand, and Indian Englishes)
* French (unique models for continental and Canadian French)
* German
* Hindi
* Indonesian
* Italian
* Japanese
* Korean
* Mandarin (simplified and traditional)
* Portuguese (unique models for continental and Brazilian)
* Russian
* Spanish (unique models for continental and Latin American)
* Swedish
* Turkish
* Ukrainian

By providing a best-of-breed, API-based solution, Deepgram is creating meaningful and data-rich voice experiences that excite developers and improve the overall experience for customers. These new language models are now available for you and your software teams to use at no extra charge. And don't miss out; the following languages are free to use for a limited time!

* Dutch
* French
* German
* Indonesian
* Italian
* Japanese
* Korean
* Mandarin (simplified and traditional)
* Russian
* Swedish
* Ukrainian

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

## Wrapping Up

We've got lots more planned for the year ahead. If you'd like to stay in the know about any new language releases, you can sign up for our newsletter below, or keep an eye on our [languages page](https://deepgram.com/product/languages/) for updates on the models we offer. And if you'd like to give these languages a try, sign up for a [free API key](https://console.deepgram.com/) or [contact us](https://deepgram.com/contact-us/) to see how we can help with your multilingual ASR needs.`;
}
function compiledContent() {
  return '<p>One of our driving principles at Deepgram is to make every voice heard and understood. If your business has international locations or customers, you need a speech recognition solution that can deliver the same level of accuracy, regardless of language or dialect. We\u2019re thrilled to announce that we now offer more than 20 language and dialect models, all of which provide the level of speed and accuracy that sets Deepgram apart.  This announcement marks Deepgram\u2019s commitment to expanding to new regions and improving accuracy for as many users as possible. Adding this new suite of languages is a significant step towards delivering a global language experience that is on par with the success we\u2019ve seen from our English model. Deepgram provides businesses with the fastest, most efficient language models from day one, and outperforms the other ASR providers in the space.</p>\n<h2 id="20-language-models-now-available">20+ Language Models Now Available</h2>\n<p>By utilizing transfer learning processes, and backed by our <a href="https://offers.deepgram.com/how-deepgram-works-whitepaper">end-to-end deep learning</a> architecture trained with real-world audio datasets, we\u2019ve been able to double the number of models we offer in just one quarter. Continuously incorporating new language models like these allows our team to provide the most cost-effective, fast, and accurate speech-to-text system on the market in an ever-expanding number of languages, allowing our users to make incredible speech experiences available to their customers worldwide. The 24 language models that we currently offer are:</p>\n<ul>\n<li>Dutch</li>\n<li>English (unique models for Australian, US, British, New Zealand, and Indian Englishes)</li>\n<li>French (unique models for continental and Canadian French)</li>\n<li>German</li>\n<li>Hindi</li>\n<li>Indonesian</li>\n<li>Italian</li>\n<li>Japanese</li>\n<li>Korean</li>\n<li>Mandarin (simplified and traditional)</li>\n<li>Portuguese (unique models for continental and Brazilian)</li>\n<li>Russian</li>\n<li>Spanish (unique models for continental and Latin American)</li>\n<li>Swedish</li>\n<li>Turkish</li>\n<li>Ukrainian</li>\n</ul>\n<p>By providing a best-of-breed, API-based solution, Deepgram is creating meaningful and data-rich voice experiences that excite developers and improve the overall experience for customers. These new language models are now available for you and your software teams to use at no extra charge. And don\u2019t miss out; the following languages are free to use for a limited time!</p>\n<ul>\n<li>Dutch</li>\n<li>French</li>\n<li>German</li>\n<li>Indonesian</li>\n<li>Italian</li>\n<li>Japanese</li>\n<li>Korean</li>\n<li>Mandarin (simplified and traditional)</li>\n<li>Russian</li>\n<li>Swedish</li>\n<li>Ukrainian</li>\n</ul>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<h2 id="wrapping-up">Wrapping Up</h2>\n<p>We\u2019ve got lots more planned for the year ahead. If you\u2019d like to stay in the know about any new language releases, you can sign up for our newsletter below, or keep an eye on our <a href="https://deepgram.com/product/languages/">languages page</a> for updates on the models we offer. And if you\u2019d like to give these languages a try, sign up for a <a href="https://console.deepgram.com/">free API key</a> or <a href="https://deepgram.com/contact-us/">contact us</a> to see how we can help with your multilingual ASR needs.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-language-speech-models/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>One of our driving principles at Deepgram is to make every voice heard and understood. If your business has international locations or customers, you need a speech recognition solution that can deliver the same level of accuracy, regardless of language or dialect. We’re thrilled to announce that we now offer more than 20 language and dialect models, all of which provide the level of speed and accuracy that sets Deepgram apart.  This announcement marks Deepgram’s commitment to expanding to new regions and improving accuracy for as many users as possible. Adding this new suite of languages is a significant step towards delivering a global language experience that is on par with the success we’ve seen from our English model. Deepgram provides businesses with the fastest, most efficient language models from day one, and outperforms the other ASR providers in the space.</p>
<h2 id="20-language-models-now-available">20+ Language Models Now Available</h2>
<p>By utilizing transfer learning processes, and backed by our <a href="https://offers.deepgram.com/how-deepgram-works-whitepaper">end-to-end deep learning</a> architecture trained with real-world audio datasets, we’ve been able to double the number of models we offer in just one quarter. Continuously incorporating new language models like these allows our team to provide the most cost-effective, fast, and accurate speech-to-text system on the market in an ever-expanding number of languages, allowing our users to make incredible speech experiences available to their customers worldwide. The 24 language models that we currently offer are:</p>
<ul>
<li>Dutch</li>
<li>English (unique models for Australian, US, British, New Zealand, and Indian Englishes)</li>
<li>French (unique models for continental and Canadian French)</li>
<li>German</li>
<li>Hindi</li>
<li>Indonesian</li>
<li>Italian</li>
<li>Japanese</li>
<li>Korean</li>
<li>Mandarin (simplified and traditional)</li>
<li>Portuguese (unique models for continental and Brazilian)</li>
<li>Russian</li>
<li>Spanish (unique models for continental and Latin American)</li>
<li>Swedish</li>
<li>Turkish</li>
<li>Ukrainian</li>
</ul>
<p>By providing a best-of-breed, API-based solution, Deepgram is creating meaningful and data-rich voice experiences that excite developers and improve the overall experience for customers. These new language models are now available for you and your software teams to use at no extra charge. And don’t miss out; the following languages are free to use for a limited time!</p>
<ul>
<li>Dutch</li>
<li>French</li>
<li>German</li>
<li>Indonesian</li>
<li>Italian</li>
<li>Japanese</li>
<li>Korean</li>
<li>Mandarin (simplified and traditional)</li>
<li>Russian</li>
<li>Swedish</li>
<li>Ukrainian</li>
</ul>
${renderComponent($$result, "WhitepaperPromo", WhitepaperPromo, { "whitepaper": "deepgram-whitepaper-how-deepgram-works" })}
<h2 id="wrapping-up">Wrapping Up</h2>
<p>We’ve got lots more planned for the year ahead. If you’d like to stay in the know about any new language releases, you can sign up for our newsletter below, or keep an eye on our <a href="https://deepgram.com/product/languages/">languages page</a> for updates on the models we offer. And if you’d like to give these languages a try, sign up for a <a href="https://console.deepgram.com/">free API key</a> or <a href="https://deepgram.com/contact-us/">contact us</a> to see how we can help with your multilingual ASR needs.</p>`;
});

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
