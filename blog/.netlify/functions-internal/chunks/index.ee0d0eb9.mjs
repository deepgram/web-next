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

const metadata = { "headings": [{ "depth": 2, "slug": "voice-assistants-are-not-the-future-of-voice", "text": "Voice assistants are not the future of voice." }], "source": `\r
[Speech recognition](https://blog.deepgram.com/what-is-asr/) is a hot topic. Google just announced new features for its [voice assistant](https://blog.deepgram.com/what-makes-alexa-siri-terminator-and-hal-tick/) like continued conversation and multiple actions. Amazon Alexa has been leading the way in voice-enabled shopping. Both companies are making vast improvements, but they're missing the big picture.\r
\r
## Voice assistants are not the future of voice.\r
\r
Voice assistants will be a component for consumers, but the sleeping giant is speech recognition for businesses. [By 2020, there will be more than 169 billion calls made to businesses per year](http://www.biakelsey.com/biakelsey-estimates-click-call-influences-1-trillion-u-s-consumer-spending/). Businesses currently invest large amounts in software to track and personalize the customer journey, but they're blind when it comes to those calls with their customers. Why? _Most speech recognition is terrible._\r
\r
**Much of speech recognition has been optimized for one-way, short-form conversations like those delivered to an assistant.**\r
\r
Speech recognition hasn't been trained to handle real-life use cases. So, when you're calling your insurance company from the side of a busy freeway, the resulting data may look something like this:\r
\r
![](https://res.cloudinary.com/deepgram/image/upload/v1661976372/blog/google-and-amazon-are-wrong-about-voice/google%402x.png)\r
\r
_Actual result from leading speech recognition provider_\r
\r
Rather than:\r
\r
![](https://res.cloudinary.com/deepgram/image/upload/v1661976373/blog/google-and-amazon-are-wrong-about-voice/full%402x-1.png)\r
\r
**Higher accuracy speech recognition allows for faster action and greater insight into your customer's wants and needs.**\r
\r
And, with nearly [90% of companies saying they compete on the basis of customer experience](https://blogs.gartner.com/jake-sorofman/gartner-surveys-confirm-customer-experience-new-battlefield/), an inability to act on the insights buried within speech means massive missed opportunity.\r
\r
For example, the difference between a five minute wait for that tow versus a two hour one will probably cause you to switch insurance providers. Multiply that by the number of people that need roadside assistance every year and soon all those unhappy customers mean huge losses in revenue.\r
\r
That's why companies like [NVIDIA, a leader in AI Computing, has invested in Deepgram](https://blogs.nvidia.com/blog/2018/03/26/nvidia-invests-in-speech-recognition-startup-deepgram/) to revamp the way companies approach speech recognition.\r
\r
> "While many companies already implement accelerated speech recognition, true speech analytics has until recently been largely untouched by deep learning," said Jeff Herbst, vice president of business development at NVIDIA. "Deepgram has done an amazing job introducing deep learning to this field, and we look forward to working closely with them to advance deep learning-driven speech analytics to the next level."\r
\r
[Deepgram](https://www.deepgram.com/business) works with companies that facilitate these critical moments by building speech recognition models directly trained and tailored to deliver high accuracy on everyday audio. By pushing our models to perform under complex, real-life conditions with background-noise, multiple speakers, diverse accents, and more, our [customers achieve accuracy rates miles above what they were seeing from competitor solutions](https://blog.deepgram.com/customer-story-rideshare-smartrhino-deepgram/). With Deepgram's speech recognition, they finally get visibility into a pivotal piece of the customer journey.\r
\r
To learn more about Deepgram's speech recognition built for business, contact [sales@deepgram.com](https://deepgram.comnull/).\r
`, "html": '<p><a href="https://blog.deepgram.com/what-is-asr/">Speech recognition</a> is a hot topic. Google just announced new features for its <a href="https://blog.deepgram.com/what-makes-alexa-siri-terminator-and-hal-tick/">voice assistant</a> like continued conversation and multiple actions. Amazon Alexa has been leading the way in voice-enabled shopping. Both companies are making vast improvements, but they\u2019re missing the big picture.</p>\n<h2 id="voice-assistants-are-not-the-future-of-voice">Voice assistants are not the future of voice.</h2>\n<p>Voice assistants will be a component for consumers, but the sleeping giant is speech recognition for businesses. <a href="http://www.biakelsey.com/biakelsey-estimates-click-call-influences-1-trillion-u-s-consumer-spending/">By 2020, there will be more than 169 billion calls made to businesses per year</a>. Businesses currently invest large amounts in software to track and personalize the customer journey, but they\u2019re blind when it comes to those calls with their customers. Why? <em>Most speech recognition is terrible.</em></p>\n<p><strong>Much of speech recognition has been optimized for one-way, short-form conversations like those delivered to an assistant.</strong></p>\n<p>Speech recognition hasn\u2019t been trained to handle real-life use cases. So, when you\u2019re calling your insurance company from the side of a busy freeway, the resulting data may look something like this:</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976372/blog/google-and-amazon-are-wrong-about-voice/google%402x.png" alt=""></p>\n<p><em>Actual result from leading speech recognition provider</em></p>\n<p>Rather than:</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976373/blog/google-and-amazon-are-wrong-about-voice/full%402x-1.png" alt=""></p>\n<p><strong>Higher accuracy speech recognition allows for faster action and greater insight into your customer\u2019s wants and needs.</strong></p>\n<p>And, with nearly <a href="https://blogs.gartner.com/jake-sorofman/gartner-surveys-confirm-customer-experience-new-battlefield/">90% of companies saying they compete on the basis of customer experience</a>, an inability to act on the insights buried within speech means massive missed opportunity.</p>\n<p>For example, the difference between a five minute wait for that tow versus a two hour one will probably cause you to switch insurance providers. Multiply that by the number of people that need roadside assistance every year and soon all those unhappy customers mean huge losses in revenue.</p>\n<p>That\u2019s why companies like <a href="https://blogs.nvidia.com/blog/2018/03/26/nvidia-invests-in-speech-recognition-startup-deepgram/">NVIDIA, a leader in AI Computing, has invested in Deepgram</a> to revamp the way companies approach speech recognition.</p>\n<blockquote>\n<p>\u201CWhile many companies already implement accelerated speech recognition, true speech analytics has until recently been largely untouched by deep learning,\u201D said Jeff Herbst, vice president of business development at NVIDIA. \u201CDeepgram has done an amazing job introducing deep learning to this field, and we look forward to working closely with them to advance deep learning-driven speech analytics to the next level.\u201D</p>\n</blockquote>\n<p><a href="https://www.deepgram.com/business">Deepgram</a> works with companies that facilitate these critical moments by building speech recognition models directly trained and tailored to deliver high accuracy on everyday audio. By pushing our models to perform under complex, real-life conditions with background-noise, multiple speakers, diverse accents, and more, our <a href="https://blog.deepgram.com/customer-story-rideshare-smartrhino-deepgram/">customers achieve accuracy rates miles above what they were seeing from competitor solutions</a>. With Deepgram\u2019s speech recognition, they finally get visibility into a pivotal piece of the customer journey.</p>\n<p>To learn more about Deepgram\u2019s speech recognition built for business, contact <a href="https://deepgram.comnull/">sales@deepgram.com</a>.</p>' };
const frontmatter = { "title": "Google and Amazon are Wrong About Voice", "description": "Google and Amazon are often thought of as the forefront of voice technology\u2014but they're getting it wrong.", "date": "2018-05-11T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1662069451/blog/google-and-amazon-are-wrong-about-voice/placeholder-post-image%402x.jpg", "authors": ["scott-stephenson"], "category": "ai-and-engineering", "tags": ["voice-tech"], "seo": { "title": "Google and Amazon are wrong about voice", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1662069451/blog/google-and-amazon-are-wrong-about-voice/placeholder-post-image%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/472d6e5", "twitter": "https://dpgr.am/7e3cc62", "linkedin": "https://dpgr.am/4dbfb6e", "reddit": "https://dpgr.am/a206172", "facebook": "https://dpgr.am/58a8676" }, "astro": { "headings": [{ "depth": 2, "slug": "voice-assistants-are-not-the-future-of-voice", "text": "Voice assistants are not the future of voice." }], "source": `\r
[Speech recognition](https://blog.deepgram.com/what-is-asr/) is a hot topic. Google just announced new features for its [voice assistant](https://blog.deepgram.com/what-makes-alexa-siri-terminator-and-hal-tick/) like continued conversation and multiple actions. Amazon Alexa has been leading the way in voice-enabled shopping. Both companies are making vast improvements, but they're missing the big picture.\r
\r
## Voice assistants are not the future of voice.\r
\r
Voice assistants will be a component for consumers, but the sleeping giant is speech recognition for businesses. [By 2020, there will be more than 169 billion calls made to businesses per year](http://www.biakelsey.com/biakelsey-estimates-click-call-influences-1-trillion-u-s-consumer-spending/). Businesses currently invest large amounts in software to track and personalize the customer journey, but they're blind when it comes to those calls with their customers. Why? _Most speech recognition is terrible._\r
\r
**Much of speech recognition has been optimized for one-way, short-form conversations like those delivered to an assistant.**\r
\r
Speech recognition hasn't been trained to handle real-life use cases. So, when you're calling your insurance company from the side of a busy freeway, the resulting data may look something like this:\r
\r
![](https://res.cloudinary.com/deepgram/image/upload/v1661976372/blog/google-and-amazon-are-wrong-about-voice/google%402x.png)\r
\r
_Actual result from leading speech recognition provider_\r
\r
Rather than:\r
\r
![](https://res.cloudinary.com/deepgram/image/upload/v1661976373/blog/google-and-amazon-are-wrong-about-voice/full%402x-1.png)\r
\r
**Higher accuracy speech recognition allows for faster action and greater insight into your customer's wants and needs.**\r
\r
And, with nearly [90% of companies saying they compete on the basis of customer experience](https://blogs.gartner.com/jake-sorofman/gartner-surveys-confirm-customer-experience-new-battlefield/), an inability to act on the insights buried within speech means massive missed opportunity.\r
\r
For example, the difference between a five minute wait for that tow versus a two hour one will probably cause you to switch insurance providers. Multiply that by the number of people that need roadside assistance every year and soon all those unhappy customers mean huge losses in revenue.\r
\r
That's why companies like [NVIDIA, a leader in AI Computing, has invested in Deepgram](https://blogs.nvidia.com/blog/2018/03/26/nvidia-invests-in-speech-recognition-startup-deepgram/) to revamp the way companies approach speech recognition.\r
\r
> "While many companies already implement accelerated speech recognition, true speech analytics has until recently been largely untouched by deep learning," said Jeff Herbst, vice president of business development at NVIDIA. "Deepgram has done an amazing job introducing deep learning to this field, and we look forward to working closely with them to advance deep learning-driven speech analytics to the next level."\r
\r
[Deepgram](https://www.deepgram.com/business) works with companies that facilitate these critical moments by building speech recognition models directly trained and tailored to deliver high accuracy on everyday audio. By pushing our models to perform under complex, real-life conditions with background-noise, multiple speakers, diverse accents, and more, our [customers achieve accuracy rates miles above what they were seeing from competitor solutions](https://blog.deepgram.com/customer-story-rideshare-smartrhino-deepgram/). With Deepgram's speech recognition, they finally get visibility into a pivotal piece of the customer journey.\r
\r
To learn more about Deepgram's speech recognition built for business, contact [sales@deepgram.com](https://deepgram.comnull/).\r
`, "html": '<p><a href="https://blog.deepgram.com/what-is-asr/">Speech recognition</a> is a hot topic. Google just announced new features for its <a href="https://blog.deepgram.com/what-makes-alexa-siri-terminator-and-hal-tick/">voice assistant</a> like continued conversation and multiple actions. Amazon Alexa has been leading the way in voice-enabled shopping. Both companies are making vast improvements, but they\u2019re missing the big picture.</p>\n<h2 id="voice-assistants-are-not-the-future-of-voice">Voice assistants are not the future of voice.</h2>\n<p>Voice assistants will be a component for consumers, but the sleeping giant is speech recognition for businesses. <a href="http://www.biakelsey.com/biakelsey-estimates-click-call-influences-1-trillion-u-s-consumer-spending/">By 2020, there will be more than 169 billion calls made to businesses per year</a>. Businesses currently invest large amounts in software to track and personalize the customer journey, but they\u2019re blind when it comes to those calls with their customers. Why? <em>Most speech recognition is terrible.</em></p>\n<p><strong>Much of speech recognition has been optimized for one-way, short-form conversations like those delivered to an assistant.</strong></p>\n<p>Speech recognition hasn\u2019t been trained to handle real-life use cases. So, when you\u2019re calling your insurance company from the side of a busy freeway, the resulting data may look something like this:</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976372/blog/google-and-amazon-are-wrong-about-voice/google%402x.png" alt=""></p>\n<p><em>Actual result from leading speech recognition provider</em></p>\n<p>Rather than:</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976373/blog/google-and-amazon-are-wrong-about-voice/full%402x-1.png" alt=""></p>\n<p><strong>Higher accuracy speech recognition allows for faster action and greater insight into your customer\u2019s wants and needs.</strong></p>\n<p>And, with nearly <a href="https://blogs.gartner.com/jake-sorofman/gartner-surveys-confirm-customer-experience-new-battlefield/">90% of companies saying they compete on the basis of customer experience</a>, an inability to act on the insights buried within speech means massive missed opportunity.</p>\n<p>For example, the difference between a five minute wait for that tow versus a two hour one will probably cause you to switch insurance providers. Multiply that by the number of people that need roadside assistance every year and soon all those unhappy customers mean huge losses in revenue.</p>\n<p>That\u2019s why companies like <a href="https://blogs.nvidia.com/blog/2018/03/26/nvidia-invests-in-speech-recognition-startup-deepgram/">NVIDIA, a leader in AI Computing, has invested in Deepgram</a> to revamp the way companies approach speech recognition.</p>\n<blockquote>\n<p>\u201CWhile many companies already implement accelerated speech recognition, true speech analytics has until recently been largely untouched by deep learning,\u201D said Jeff Herbst, vice president of business development at NVIDIA. \u201CDeepgram has done an amazing job introducing deep learning to this field, and we look forward to working closely with them to advance deep learning-driven speech analytics to the next level.\u201D</p>\n</blockquote>\n<p><a href="https://www.deepgram.com/business">Deepgram</a> works with companies that facilitate these critical moments by building speech recognition models directly trained and tailored to deliver high accuracy on everyday audio. By pushing our models to perform under complex, real-life conditions with background-noise, multiple speakers, diverse accents, and more, our <a href="https://blog.deepgram.com/customer-story-rideshare-smartrhino-deepgram/">customers achieve accuracy rates miles above what they were seeing from competitor solutions</a>. With Deepgram\u2019s speech recognition, they finally get visibility into a pivotal piece of the customer journey.</p>\n<p>To learn more about Deepgram\u2019s speech recognition built for business, contact <a href="https://deepgram.comnull/">sales@deepgram.com</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/google-and-amazon-are-wrong-about-voice/index.md" };
function rawContent() {
  return `\r
[Speech recognition](https://blog.deepgram.com/what-is-asr/) is a hot topic. Google just announced new features for its [voice assistant](https://blog.deepgram.com/what-makes-alexa-siri-terminator-and-hal-tick/) like continued conversation and multiple actions. Amazon Alexa has been leading the way in voice-enabled shopping. Both companies are making vast improvements, but they're missing the big picture.\r
\r
## Voice assistants are not the future of voice.\r
\r
Voice assistants will be a component for consumers, but the sleeping giant is speech recognition for businesses. [By 2020, there will be more than 169 billion calls made to businesses per year](http://www.biakelsey.com/biakelsey-estimates-click-call-influences-1-trillion-u-s-consumer-spending/). Businesses currently invest large amounts in software to track and personalize the customer journey, but they're blind when it comes to those calls with their customers. Why? _Most speech recognition is terrible._\r
\r
**Much of speech recognition has been optimized for one-way, short-form conversations like those delivered to an assistant.**\r
\r
Speech recognition hasn't been trained to handle real-life use cases. So, when you're calling your insurance company from the side of a busy freeway, the resulting data may look something like this:\r
\r
![](https://res.cloudinary.com/deepgram/image/upload/v1661976372/blog/google-and-amazon-are-wrong-about-voice/google%402x.png)\r
\r
_Actual result from leading speech recognition provider_\r
\r
Rather than:\r
\r
![](https://res.cloudinary.com/deepgram/image/upload/v1661976373/blog/google-and-amazon-are-wrong-about-voice/full%402x-1.png)\r
\r
**Higher accuracy speech recognition allows for faster action and greater insight into your customer's wants and needs.**\r
\r
And, with nearly [90% of companies saying they compete on the basis of customer experience](https://blogs.gartner.com/jake-sorofman/gartner-surveys-confirm-customer-experience-new-battlefield/), an inability to act on the insights buried within speech means massive missed opportunity.\r
\r
For example, the difference between a five minute wait for that tow versus a two hour one will probably cause you to switch insurance providers. Multiply that by the number of people that need roadside assistance every year and soon all those unhappy customers mean huge losses in revenue.\r
\r
That's why companies like [NVIDIA, a leader in AI Computing, has invested in Deepgram](https://blogs.nvidia.com/blog/2018/03/26/nvidia-invests-in-speech-recognition-startup-deepgram/) to revamp the way companies approach speech recognition.\r
\r
> "While many companies already implement accelerated speech recognition, true speech analytics has until recently been largely untouched by deep learning," said Jeff Herbst, vice president of business development at NVIDIA. "Deepgram has done an amazing job introducing deep learning to this field, and we look forward to working closely with them to advance deep learning-driven speech analytics to the next level."\r
\r
[Deepgram](https://www.deepgram.com/business) works with companies that facilitate these critical moments by building speech recognition models directly trained and tailored to deliver high accuracy on everyday audio. By pushing our models to perform under complex, real-life conditions with background-noise, multiple speakers, diverse accents, and more, our [customers achieve accuracy rates miles above what they were seeing from competitor solutions](https://blog.deepgram.com/customer-story-rideshare-smartrhino-deepgram/). With Deepgram's speech recognition, they finally get visibility into a pivotal piece of the customer journey.\r
\r
To learn more about Deepgram's speech recognition built for business, contact [sales@deepgram.com](https://deepgram.comnull/).\r
`;
}
function compiledContent() {
  return '<p><a href="https://blog.deepgram.com/what-is-asr/">Speech recognition</a> is a hot topic. Google just announced new features for its <a href="https://blog.deepgram.com/what-makes-alexa-siri-terminator-and-hal-tick/">voice assistant</a> like continued conversation and multiple actions. Amazon Alexa has been leading the way in voice-enabled shopping. Both companies are making vast improvements, but they\u2019re missing the big picture.</p>\n<h2 id="voice-assistants-are-not-the-future-of-voice">Voice assistants are not the future of voice.</h2>\n<p>Voice assistants will be a component for consumers, but the sleeping giant is speech recognition for businesses. <a href="http://www.biakelsey.com/biakelsey-estimates-click-call-influences-1-trillion-u-s-consumer-spending/">By 2020, there will be more than 169 billion calls made to businesses per year</a>. Businesses currently invest large amounts in software to track and personalize the customer journey, but they\u2019re blind when it comes to those calls with their customers. Why? <em>Most speech recognition is terrible.</em></p>\n<p><strong>Much of speech recognition has been optimized for one-way, short-form conversations like those delivered to an assistant.</strong></p>\n<p>Speech recognition hasn\u2019t been trained to handle real-life use cases. So, when you\u2019re calling your insurance company from the side of a busy freeway, the resulting data may look something like this:</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976372/blog/google-and-amazon-are-wrong-about-voice/google%402x.png" alt=""></p>\n<p><em>Actual result from leading speech recognition provider</em></p>\n<p>Rather than:</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976373/blog/google-and-amazon-are-wrong-about-voice/full%402x-1.png" alt=""></p>\n<p><strong>Higher accuracy speech recognition allows for faster action and greater insight into your customer\u2019s wants and needs.</strong></p>\n<p>And, with nearly <a href="https://blogs.gartner.com/jake-sorofman/gartner-surveys-confirm-customer-experience-new-battlefield/">90% of companies saying they compete on the basis of customer experience</a>, an inability to act on the insights buried within speech means massive missed opportunity.</p>\n<p>For example, the difference between a five minute wait for that tow versus a two hour one will probably cause you to switch insurance providers. Multiply that by the number of people that need roadside assistance every year and soon all those unhappy customers mean huge losses in revenue.</p>\n<p>That\u2019s why companies like <a href="https://blogs.nvidia.com/blog/2018/03/26/nvidia-invests-in-speech-recognition-startup-deepgram/">NVIDIA, a leader in AI Computing, has invested in Deepgram</a> to revamp the way companies approach speech recognition.</p>\n<blockquote>\n<p>\u201CWhile many companies already implement accelerated speech recognition, true speech analytics has until recently been largely untouched by deep learning,\u201D said Jeff Herbst, vice president of business development at NVIDIA. \u201CDeepgram has done an amazing job introducing deep learning to this field, and we look forward to working closely with them to advance deep learning-driven speech analytics to the next level.\u201D</p>\n</blockquote>\n<p><a href="https://www.deepgram.com/business">Deepgram</a> works with companies that facilitate these critical moments by building speech recognition models directly trained and tailored to deliver high accuracy on everyday audio. By pushing our models to perform under complex, real-life conditions with background-noise, multiple speakers, diverse accents, and more, our <a href="https://blog.deepgram.com/customer-story-rideshare-smartrhino-deepgram/">customers achieve accuracy rates miles above what they were seeing from competitor solutions</a>. With Deepgram\u2019s speech recognition, they finally get visibility into a pivotal piece of the customer journey.</p>\n<p>To learn more about Deepgram\u2019s speech recognition built for business, contact <a href="https://deepgram.comnull/">sales@deepgram.com</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/google-and-amazon-are-wrong-about-voice/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p><a href="https://blog.deepgram.com/what-is-asr/">Speech recognition</a> is a hot topic. Google just announced new features for its <a href="https://blog.deepgram.com/what-makes-alexa-siri-terminator-and-hal-tick/">voice assistant</a> like continued conversation and multiple actions. Amazon Alexa has been leading the way in voice-enabled shopping. Both companies are making vast improvements, but they’re missing the big picture.</p>
<h2 id="voice-assistants-are-not-the-future-of-voice">Voice assistants are not the future of voice.</h2>
<p>Voice assistants will be a component for consumers, but the sleeping giant is speech recognition for businesses. <a href="http://www.biakelsey.com/biakelsey-estimates-click-call-influences-1-trillion-u-s-consumer-spending/">By 2020, there will be more than 169 billion calls made to businesses per year</a>. Businesses currently invest large amounts in software to track and personalize the customer journey, but they’re blind when it comes to those calls with their customers. Why? <em>Most speech recognition is terrible.</em></p>
<p><strong>Much of speech recognition has been optimized for one-way, short-form conversations like those delivered to an assistant.</strong></p>
<p>Speech recognition hasn’t been trained to handle real-life use cases. So, when you’re calling your insurance company from the side of a busy freeway, the resulting data may look something like this:</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976372/blog/google-and-amazon-are-wrong-about-voice/google%402x.png" alt=""></p>
<p><em>Actual result from leading speech recognition provider</em></p>
<p>Rather than:</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976373/blog/google-and-amazon-are-wrong-about-voice/full%402x-1.png" alt=""></p>
<p><strong>Higher accuracy speech recognition allows for faster action and greater insight into your customer’s wants and needs.</strong></p>
<p>And, with nearly <a href="https://blogs.gartner.com/jake-sorofman/gartner-surveys-confirm-customer-experience-new-battlefield/">90% of companies saying they compete on the basis of customer experience</a>, an inability to act on the insights buried within speech means massive missed opportunity.</p>
<p>For example, the difference between a five minute wait for that tow versus a two hour one will probably cause you to switch insurance providers. Multiply that by the number of people that need roadside assistance every year and soon all those unhappy customers mean huge losses in revenue.</p>
<p>That’s why companies like <a href="https://blogs.nvidia.com/blog/2018/03/26/nvidia-invests-in-speech-recognition-startup-deepgram/">NVIDIA, a leader in AI Computing, has invested in Deepgram</a> to revamp the way companies approach speech recognition.</p>
<blockquote>
<p>“While many companies already implement accelerated speech recognition, true speech analytics has until recently been largely untouched by deep learning,” said Jeff Herbst, vice president of business development at NVIDIA. “Deepgram has done an amazing job introducing deep learning to this field, and we look forward to working closely with them to advance deep learning-driven speech analytics to the next level.”</p>
</blockquote>
<p><a href="https://www.deepgram.com/business">Deepgram</a> works with companies that facilitate these critical moments by building speech recognition models directly trained and tailored to deliver high accuracy on everyday audio. By pushing our models to perform under complex, real-life conditions with background-noise, multiple speakers, diverse accents, and more, our <a href="https://blog.deepgram.com/customer-story-rideshare-smartrhino-deepgram/">customers achieve accuracy rates miles above what they were seeing from competitor solutions</a>. With Deepgram’s speech recognition, they finally get visibility into a pivotal piece of the customer journey.</p>
<p>To learn more about Deepgram’s speech recognition built for business, contact <a href="https://deepgram.comnull/">sales@deepgram.com</a>.</p>`;
});

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
