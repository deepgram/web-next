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

const metadata = { "headings": [{ "depth": 2, "slug": "how-to-get-started-with-enhanced-portuguese", "text": "How to Get Started with Enhanced Portuguese" }, { "depth": 3, "slug": "example-api-call", "text": "Example API Call" }, { "depth": 2, "slug": "key-benefits-of-a-portuguese-language-model", "text": "Key Benefits of a Portuguese Language Model" }, { "depth": 2, "slug": "what-can-you-use-a-portuguese-language-model-for", "text": "What Can You Use a Portuguese Language Model for?" }, { "depth": 2, "slug": "wrapping-up", "text": "Wrapping Up" }], "source": "Several months ago, we released our Base Portuguese ASR model to support our customers in Europe and South America. Working closely with our customers in these regions to deeply understand their use cases and data, we\u2019re excited to announce the next generation of our Enhanced Portuguese model as an additional option for use cases that require exceptional accuracy.\n\n## How to Get Started with Enhanced Portuguese\n\nIf you want to try out our Enhanced Portuguese model, you can quickly create an account on Deepgram [Console](https://console.deepgram.com/) and we\u2019ll give you $150 in free credits. Simply select Portuguese from the language menu when trying out our APIs.\n\nIf you\u2019re already a Deepgram customer, you can call the Enhanced Portuguese model using the following arguments:\n\n* ``model=general``\n* ``version=beta``\n* ``language=pt-BR`` (Brazil) or ``pt-PT`` (Portugal)\n\nYou can also find an example API call using these arguments below.\n\n### Example API Call\n\n```\ncurl \\\n--request POST \\\n--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \\\n--header 'Content-Type: audio/wav' \\\n--data-binary @youraudio.wav \\\n--url 'https://api.deepgram.com/v1/listen?language=pt-BR'\n--url 'https://api.deepgram.com/v1/listen?language=pt-PT'\n```\n\n## Key Benefits of a Portuguese Language Model\n\n* Accurately transcribe both Brazilian and Portugal Portuguese [pronunciations](https://www.youtube.com/watch?v=7_3ECC8ZPP4).\n* Many developers see high accuracy depending on their use case.\n* Available for Pre-recorded and Streaming Phone Call, Meeting, Voicemail, and Conversational AI use cases.\n* Transcribe on-premises or through the Deepgram Cloud.\n* Available for both Base and now Enhanced model tiers.\n\n## What Can You Use a Portuguese Language Model for?\n\n* Pair with a Phone Call model to transcribe recording from your call centers in Europe and South America.\n* Pair with a Meetings model to understand the sentiment of your development team in Brazil or South Africa\n* Create an Agent Assist solution for your LATAM sales team.\n\nDeepgram customers now have two fantastic model options for Portuguese, providing them greater investment flexibility depending on their use case. This continues our commitment to provide something more than \u201Cone size fits all\u201D when it comes to language models for our customers. We will continue to invest in world-class research and engineering to provide our customers with the optionality they deserve from their speech API.\xA0\n\n## Wrapping Up\n\nTo learn more about the dozens of other languages and use cases Deepgram enables, please see the [Language](https://developers.deepgram.com/documentation/features/language/) page in our documentation. Need help getting started? [Reach out to our sales team](https://deepgram.com/contact-us/) and they\u2019ll be happy to get you up and running. We welcome your feedback, please share it with us at [deepgram.com/feedback](https://www.deepgram.com/feedback).", "html": '<p>Several months ago, we released our Base Portuguese ASR model to support our customers in Europe and South America. Working closely with our customers in these regions to deeply understand their use cases and data, we\u2019re excited to announce the next generation of our Enhanced Portuguese model as an additional option for use cases that require exceptional accuracy.</p>\n<h2 id="how-to-get-started-with-enhanced-portuguese">How to Get Started with Enhanced Portuguese</h2>\n<p>If you want to try out our Enhanced Portuguese model, you can quickly create an account on Deepgram <a href="https://console.deepgram.com/">Console</a> and we\u2019ll give you $150 in free credits. Simply select Portuguese from the language menu when trying out our APIs.</p>\n<p>If you\u2019re already a Deepgram customer, you can call the Enhanced Portuguese model using the following arguments:</p>\n<ul>\n<li><code is:raw>model=general</code></li>\n<li><code is:raw>version=beta</code></li>\n<li><code is:raw>language=pt-BR</code> (Brazil) or <code is:raw>pt-PT</code> (Portugal)</li>\n</ul>\n<p>You can also find an example API call using these arguments below.</p>\n<h3 id="example-api-call">Example API Call</h3>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #c9d1d9">curl \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--request POST \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--header &#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39; \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--header &#39;Content-Type: audio/wav&#39; \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--data-binary @youraudio.wav \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--url &#39;https://api.deepgram.com/v1/listen?language=pt-BR&#39;</span></span>\n<span class="line"><span style="color: #c9d1d9">--url &#39;https://api.deepgram.com/v1/listen?language=pt-PT&#39;</span></span></code></pre>\n<h2 id="key-benefits-of-a-portuguese-language-model">Key Benefits of a Portuguese Language Model</h2>\n<ul>\n<li>Accurately transcribe both Brazilian and Portugal Portuguese <a href="https://www.youtube.com/watch?v=7_3ECC8ZPP4">pronunciations</a>.</li>\n<li>Many developers see high accuracy depending on their use case.</li>\n<li>Available for Pre-recorded and Streaming Phone Call, Meeting, Voicemail, and Conversational AI use cases.</li>\n<li>Transcribe on-premises or through the Deepgram Cloud.</li>\n<li>Available for both Base and now Enhanced model tiers.</li>\n</ul>\n<h2 id="what-can-you-use-a-portuguese-language-model-for">What Can You Use a Portuguese Language Model for?</h2>\n<ul>\n<li>Pair with a Phone Call model to transcribe recording from your call centers in Europe and South America.</li>\n<li>Pair with a Meetings model to understand the sentiment of your development team in Brazil or South Africa</li>\n<li>Create an Agent Assist solution for your LATAM sales team.</li>\n</ul>\n<p>Deepgram customers now have two fantastic model options for Portuguese, providing them greater investment flexibility depending on their use case. This continues our commitment to provide something more than \u201Cone size fits all\u201D when it comes to language models for our customers. We will continue to invest in world-class research and engineering to provide our customers with the optionality they deserve from their speech API.\xA0</p>\n<h2 id="wrapping-up">Wrapping Up</h2>\n<p>To learn more about the dozens of other languages and use cases Deepgram enables, please see the <a href="https://developers.deepgram.com/documentation/features/language/">Language</a> page in our documentation. Need help getting started? <a href="https://deepgram.com/contact-us/">Reach out to our sales team</a> and they\u2019ll be happy to get you up and running. We welcome your feedback, please share it with us at <a href="https://www.deepgram.com/feedback">deepgram.com/feedback</a>.</p>' };
const frontmatter = { "title": "Ol\xE1! Enhanced Portuguese (beta) Speech-to-Text Language Model Now Available", "description": "We\u2019re excited to announce the launch of our Enhanced Portuguese language model\u2014now in beta!", "date": "2022-09-30T13:22:44.848Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1664544531/2209-How-Accurate-is-OpenAI-Whisper-Speech-to-Text-Model-featured-1200x630_qndzys.png", "authors": ["katie-byrne"], "category": "product-news", "tags": ["portuguese", "language"], "seo": { "canonical": "enhanced-portuguese-speech-to-text-language-model-available", "title": "Enhanced Portuguese (beta) Speech-to-Text Language Model Now Available" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1664544873/2209-How-Accurate-is-OpenAI-Whisper-Speech-to-Text-Model-social-1200x628_pbpaui.png", "title": "Enhanced Portuguese (beta) Speech-to-Text Language Model Now Available" }, "astro": { "headings": [{ "depth": 2, "slug": "how-to-get-started-with-enhanced-portuguese", "text": "How to Get Started with Enhanced Portuguese" }, { "depth": 3, "slug": "example-api-call", "text": "Example API Call" }, { "depth": 2, "slug": "key-benefits-of-a-portuguese-language-model", "text": "Key Benefits of a Portuguese Language Model" }, { "depth": 2, "slug": "what-can-you-use-a-portuguese-language-model-for", "text": "What Can You Use a Portuguese Language Model for?" }, { "depth": 2, "slug": "wrapping-up", "text": "Wrapping Up" }], "source": "Several months ago, we released our Base Portuguese ASR model to support our customers in Europe and South America. Working closely with our customers in these regions to deeply understand their use cases and data, we\u2019re excited to announce the next generation of our Enhanced Portuguese model as an additional option for use cases that require exceptional accuracy.\n\n## How to Get Started with Enhanced Portuguese\n\nIf you want to try out our Enhanced Portuguese model, you can quickly create an account on Deepgram [Console](https://console.deepgram.com/) and we\u2019ll give you $150 in free credits. Simply select Portuguese from the language menu when trying out our APIs.\n\nIf you\u2019re already a Deepgram customer, you can call the Enhanced Portuguese model using the following arguments:\n\n* ``model=general``\n* ``version=beta``\n* ``language=pt-BR`` (Brazil) or ``pt-PT`` (Portugal)\n\nYou can also find an example API call using these arguments below.\n\n### Example API Call\n\n```\ncurl \\\n--request POST \\\n--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \\\n--header 'Content-Type: audio/wav' \\\n--data-binary @youraudio.wav \\\n--url 'https://api.deepgram.com/v1/listen?language=pt-BR'\n--url 'https://api.deepgram.com/v1/listen?language=pt-PT'\n```\n\n## Key Benefits of a Portuguese Language Model\n\n* Accurately transcribe both Brazilian and Portugal Portuguese [pronunciations](https://www.youtube.com/watch?v=7_3ECC8ZPP4).\n* Many developers see high accuracy depending on their use case.\n* Available for Pre-recorded and Streaming Phone Call, Meeting, Voicemail, and Conversational AI use cases.\n* Transcribe on-premises or through the Deepgram Cloud.\n* Available for both Base and now Enhanced model tiers.\n\n## What Can You Use a Portuguese Language Model for?\n\n* Pair with a Phone Call model to transcribe recording from your call centers in Europe and South America.\n* Pair with a Meetings model to understand the sentiment of your development team in Brazil or South Africa\n* Create an Agent Assist solution for your LATAM sales team.\n\nDeepgram customers now have two fantastic model options for Portuguese, providing them greater investment flexibility depending on their use case. This continues our commitment to provide something more than \u201Cone size fits all\u201D when it comes to language models for our customers. We will continue to invest in world-class research and engineering to provide our customers with the optionality they deserve from their speech API.\xA0\n\n## Wrapping Up\n\nTo learn more about the dozens of other languages and use cases Deepgram enables, please see the [Language](https://developers.deepgram.com/documentation/features/language/) page in our documentation. Need help getting started? [Reach out to our sales team](https://deepgram.com/contact-us/) and they\u2019ll be happy to get you up and running. We welcome your feedback, please share it with us at [deepgram.com/feedback](https://www.deepgram.com/feedback).", "html": '<p>Several months ago, we released our Base Portuguese ASR model to support our customers in Europe and South America. Working closely with our customers in these regions to deeply understand their use cases and data, we\u2019re excited to announce the next generation of our Enhanced Portuguese model as an additional option for use cases that require exceptional accuracy.</p>\n<h2 id="how-to-get-started-with-enhanced-portuguese">How to Get Started with Enhanced Portuguese</h2>\n<p>If you want to try out our Enhanced Portuguese model, you can quickly create an account on Deepgram <a href="https://console.deepgram.com/">Console</a> and we\u2019ll give you $150 in free credits. Simply select Portuguese from the language menu when trying out our APIs.</p>\n<p>If you\u2019re already a Deepgram customer, you can call the Enhanced Portuguese model using the following arguments:</p>\n<ul>\n<li><code is:raw>model=general</code></li>\n<li><code is:raw>version=beta</code></li>\n<li><code is:raw>language=pt-BR</code> (Brazil) or <code is:raw>pt-PT</code> (Portugal)</li>\n</ul>\n<p>You can also find an example API call using these arguments below.</p>\n<h3 id="example-api-call">Example API Call</h3>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #c9d1d9">curl \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--request POST \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--header &#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39; \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--header &#39;Content-Type: audio/wav&#39; \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--data-binary @youraudio.wav \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--url &#39;https://api.deepgram.com/v1/listen?language=pt-BR&#39;</span></span>\n<span class="line"><span style="color: #c9d1d9">--url &#39;https://api.deepgram.com/v1/listen?language=pt-PT&#39;</span></span></code></pre>\n<h2 id="key-benefits-of-a-portuguese-language-model">Key Benefits of a Portuguese Language Model</h2>\n<ul>\n<li>Accurately transcribe both Brazilian and Portugal Portuguese <a href="https://www.youtube.com/watch?v=7_3ECC8ZPP4">pronunciations</a>.</li>\n<li>Many developers see high accuracy depending on their use case.</li>\n<li>Available for Pre-recorded and Streaming Phone Call, Meeting, Voicemail, and Conversational AI use cases.</li>\n<li>Transcribe on-premises or through the Deepgram Cloud.</li>\n<li>Available for both Base and now Enhanced model tiers.</li>\n</ul>\n<h2 id="what-can-you-use-a-portuguese-language-model-for">What Can You Use a Portuguese Language Model for?</h2>\n<ul>\n<li>Pair with a Phone Call model to transcribe recording from your call centers in Europe and South America.</li>\n<li>Pair with a Meetings model to understand the sentiment of your development team in Brazil or South Africa</li>\n<li>Create an Agent Assist solution for your LATAM sales team.</li>\n</ul>\n<p>Deepgram customers now have two fantastic model options for Portuguese, providing them greater investment flexibility depending on their use case. This continues our commitment to provide something more than \u201Cone size fits all\u201D when it comes to language models for our customers. We will continue to invest in world-class research and engineering to provide our customers with the optionality they deserve from their speech API.\xA0</p>\n<h2 id="wrapping-up">Wrapping Up</h2>\n<p>To learn more about the dozens of other languages and use cases Deepgram enables, please see the <a href="https://developers.deepgram.com/documentation/features/language/">Language</a> page in our documentation. Need help getting started? <a href="https://deepgram.com/contact-us/">Reach out to our sales team</a> and they\u2019ll be happy to get you up and running. We welcome your feedback, please share it with us at <a href="https://www.deepgram.com/feedback">deepgram.com/feedback</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/ol\xE1-enhanced-portuguese-beta-speech-to-text-language-model-now-available/index.md" };
function rawContent() {
  return "Several months ago, we released our Base Portuguese ASR model to support our customers in Europe and South America. Working closely with our customers in these regions to deeply understand their use cases and data, we\u2019re excited to announce the next generation of our Enhanced Portuguese model as an additional option for use cases that require exceptional accuracy.\n\n## How to Get Started with Enhanced Portuguese\n\nIf you want to try out our Enhanced Portuguese model, you can quickly create an account on Deepgram [Console](https://console.deepgram.com/) and we\u2019ll give you $150 in free credits. Simply select Portuguese from the language menu when trying out our APIs.\n\nIf you\u2019re already a Deepgram customer, you can call the Enhanced Portuguese model using the following arguments:\n\n* ``model=general``\n* ``version=beta``\n* ``language=pt-BR`` (Brazil) or ``pt-PT`` (Portugal)\n\nYou can also find an example API call using these arguments below.\n\n### Example API Call\n\n```\ncurl \\\n--request POST \\\n--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \\\n--header 'Content-Type: audio/wav' \\\n--data-binary @youraudio.wav \\\n--url 'https://api.deepgram.com/v1/listen?language=pt-BR'\n--url 'https://api.deepgram.com/v1/listen?language=pt-PT'\n```\n\n## Key Benefits of a Portuguese Language Model\n\n* Accurately transcribe both Brazilian and Portugal Portuguese [pronunciations](https://www.youtube.com/watch?v=7_3ECC8ZPP4).\n* Many developers see high accuracy depending on their use case.\n* Available for Pre-recorded and Streaming Phone Call, Meeting, Voicemail, and Conversational AI use cases.\n* Transcribe on-premises or through the Deepgram Cloud.\n* Available for both Base and now Enhanced model tiers.\n\n## What Can You Use a Portuguese Language Model for?\n\n* Pair with a Phone Call model to transcribe recording from your call centers in Europe and South America.\n* Pair with a Meetings model to understand the sentiment of your development team in Brazil or South Africa\n* Create an Agent Assist solution for your LATAM sales team.\n\nDeepgram customers now have two fantastic model options for Portuguese, providing them greater investment flexibility depending on their use case. This continues our commitment to provide something more than \u201Cone size fits all\u201D when it comes to language models for our customers. We will continue to invest in world-class research and engineering to provide our customers with the optionality they deserve from their speech API.\xA0\n\n## Wrapping Up\n\nTo learn more about the dozens of other languages and use cases Deepgram enables, please see the [Language](https://developers.deepgram.com/documentation/features/language/) page in our documentation. Need help getting started? [Reach out to our sales team](https://deepgram.com/contact-us/) and they\u2019ll be happy to get you up and running. We welcome your feedback, please share it with us at [deepgram.com/feedback](https://www.deepgram.com/feedback).";
}
function compiledContent() {
  return '<p>Several months ago, we released our Base Portuguese ASR model to support our customers in Europe and South America. Working closely with our customers in these regions to deeply understand their use cases and data, we\u2019re excited to announce the next generation of our Enhanced Portuguese model as an additional option for use cases that require exceptional accuracy.</p>\n<h2 id="how-to-get-started-with-enhanced-portuguese">How to Get Started with Enhanced Portuguese</h2>\n<p>If you want to try out our Enhanced Portuguese model, you can quickly create an account on Deepgram <a href="https://console.deepgram.com/">Console</a> and we\u2019ll give you $150 in free credits. Simply select Portuguese from the language menu when trying out our APIs.</p>\n<p>If you\u2019re already a Deepgram customer, you can call the Enhanced Portuguese model using the following arguments:</p>\n<ul>\n<li><code is:raw>model=general</code></li>\n<li><code is:raw>version=beta</code></li>\n<li><code is:raw>language=pt-BR</code> (Brazil) or <code is:raw>pt-PT</code> (Portugal)</li>\n</ul>\n<p>You can also find an example API call using these arguments below.</p>\n<h3 id="example-api-call">Example API Call</h3>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #c9d1d9">curl \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--request POST \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--header &#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39; \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--header &#39;Content-Type: audio/wav&#39; \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--data-binary @youraudio.wav \\</span></span>\n<span class="line"><span style="color: #c9d1d9">--url &#39;https://api.deepgram.com/v1/listen?language=pt-BR&#39;</span></span>\n<span class="line"><span style="color: #c9d1d9">--url &#39;https://api.deepgram.com/v1/listen?language=pt-PT&#39;</span></span></code></pre>\n<h2 id="key-benefits-of-a-portuguese-language-model">Key Benefits of a Portuguese Language Model</h2>\n<ul>\n<li>Accurately transcribe both Brazilian and Portugal Portuguese <a href="https://www.youtube.com/watch?v=7_3ECC8ZPP4">pronunciations</a>.</li>\n<li>Many developers see high accuracy depending on their use case.</li>\n<li>Available for Pre-recorded and Streaming Phone Call, Meeting, Voicemail, and Conversational AI use cases.</li>\n<li>Transcribe on-premises or through the Deepgram Cloud.</li>\n<li>Available for both Base and now Enhanced model tiers.</li>\n</ul>\n<h2 id="what-can-you-use-a-portuguese-language-model-for">What Can You Use a Portuguese Language Model for?</h2>\n<ul>\n<li>Pair with a Phone Call model to transcribe recording from your call centers in Europe and South America.</li>\n<li>Pair with a Meetings model to understand the sentiment of your development team in Brazil or South Africa</li>\n<li>Create an Agent Assist solution for your LATAM sales team.</li>\n</ul>\n<p>Deepgram customers now have two fantastic model options for Portuguese, providing them greater investment flexibility depending on their use case. This continues our commitment to provide something more than \u201Cone size fits all\u201D when it comes to language models for our customers. We will continue to invest in world-class research and engineering to provide our customers with the optionality they deserve from their speech API.\xA0</p>\n<h2 id="wrapping-up">Wrapping Up</h2>\n<p>To learn more about the dozens of other languages and use cases Deepgram enables, please see the <a href="https://developers.deepgram.com/documentation/features/language/">Language</a> page in our documentation. Need help getting started? <a href="https://deepgram.com/contact-us/">Reach out to our sales team</a> and they\u2019ll be happy to get you up and running. We welcome your feedback, please share it with us at <a href="https://www.deepgram.com/feedback">deepgram.com/feedback</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/ol\xE1-enhanced-portuguese-beta-speech-to-text-language-model-now-available/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Several months ago, we released our Base Portuguese ASR model to support our customers in Europe and South America. Working closely with our customers in these regions to deeply understand their use cases and data, we’re excited to announce the next generation of our Enhanced Portuguese model as an additional option for use cases that require exceptional accuracy.</p>
<h2 id="how-to-get-started-with-enhanced-portuguese">How to Get Started with Enhanced Portuguese</h2>
<p>If you want to try out our Enhanced Portuguese model, you can quickly create an account on Deepgram <a href="https://console.deepgram.com/">Console</a> and we’ll give you $150 in free credits. Simply select Portuguese from the language menu when trying out our APIs.</p>
<p>If you’re already a Deepgram customer, you can call the Enhanced Portuguese model using the following arguments:</p>
<ul>
<li><code>model=general</code></li>
<li><code>version=beta</code></li>
<li><code>language=pt-BR</code> (Brazil) or <code>pt-PT</code> (Portugal)</li>
</ul>
<p>You can also find an example API call using these arguments below.</p>
<h3 id="example-api-call">Example API Call</h3>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #c9d1d9">curl \\</span></span>
<span class="line"><span style="color: #c9d1d9">--request POST \\</span></span>
<span class="line"><span style="color: #c9d1d9">--header &#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39; \\</span></span>
<span class="line"><span style="color: #c9d1d9">--header &#39;Content-Type: audio/wav&#39; \\</span></span>
<span class="line"><span style="color: #c9d1d9">--data-binary @youraudio.wav \\</span></span>
<span class="line"><span style="color: #c9d1d9">--url &#39;https://api.deepgram.com/v1/listen?language=pt-BR&#39;</span></span>
<span class="line"><span style="color: #c9d1d9">--url &#39;https://api.deepgram.com/v1/listen?language=pt-PT&#39;</span></span></code></pre>
<h2 id="key-benefits-of-a-portuguese-language-model">Key Benefits of a Portuguese Language Model</h2>
<ul>
<li>Accurately transcribe both Brazilian and Portugal Portuguese <a href="https://www.youtube.com/watch?v=7_3ECC8ZPP4">pronunciations</a>.</li>
<li>Many developers see high accuracy depending on their use case.</li>
<li>Available for Pre-recorded and Streaming Phone Call, Meeting, Voicemail, and Conversational AI use cases.</li>
<li>Transcribe on-premises or through the Deepgram Cloud.</li>
<li>Available for both Base and now Enhanced model tiers.</li>
</ul>
<h2 id="what-can-you-use-a-portuguese-language-model-for">What Can You Use a Portuguese Language Model for?</h2>
<ul>
<li>Pair with a Phone Call model to transcribe recording from your call centers in Europe and South America.</li>
<li>Pair with a Meetings model to understand the sentiment of your development team in Brazil or South Africa</li>
<li>Create an Agent Assist solution for your LATAM sales team.</li>
</ul>
<p>Deepgram customers now have two fantastic model options for Portuguese, providing them greater investment flexibility depending on their use case. This continues our commitment to provide something more than “one size fits all” when it comes to language models for our customers. We will continue to invest in world-class research and engineering to provide our customers with the optionality they deserve from their speech API. </p>
<h2 id="wrapping-up">Wrapping Up</h2>
<p>To learn more about the dozens of other languages and use cases Deepgram enables, please see the <a href="https://developers.deepgram.com/documentation/features/language/">Language</a> page in our documentation. Need help getting started? <a href="https://deepgram.com/contact-us/">Reach out to our sales team</a> and they’ll be happy to get you up and running. We welcome your feedback, please share it with us at <a href="https://www.deepgram.com/feedback">deepgram.com/feedback</a>.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/ol\xE1-enhanced-portuguese-beta-speech-to-text-language-model-now-available/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
