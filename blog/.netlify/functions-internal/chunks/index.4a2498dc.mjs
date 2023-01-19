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

const metadata = { "headings": [{ "depth": 3, "slug": "deepgram-x-bitext-partnership", "text": "Deepgram X Bitext partnership" }], "source": `### **Deepgram X Bitext partnership**

As companies consider adding voicebots to their customer service, they are seeing the same "Achilles' heel" with NLU voicebots as experienced with [chatbots](https://blog.bitext.com/nlu-chatbot-evaluation-3-common-errors-and-5-key-steps).  To understand the root of the problem, we should first look at the ideal process:

1. Customer provides information by voice
2. Automatic Speech Recognition (ASR) must quickly and accurately process that audio into data the Voicebot/Chatbot can use without lag time to the customer
3. Voicebot/Chatbot needs to "understand" that information
4. It must use that understanding to determine intent
5. It uses that intent to either route the customer to a human agent or answer the request with a knowledge base AI



  ![](https://res.cloudinary.com/deepgram/image/upload/v1661976840/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/ideal-chatbot-process%402x.png)   

With a slow and inaccurate ASR, that "understanding" phase is compromised, creating issues for the remainder of the process:

1. Responding with the wrong intent
2. Transferring to a human agent due to lack of confidence, when it should have understood the intent from the beginning
3. Responding when it doesn't have to, instead of passing it on to an agent
4. For voicebots, not understanding the customer and asking, "Sorry, I did not get that, can you repeat."

  ![](https://res.cloudinary.com/deepgram/image/upload/v1661976841/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/slow-inaccurate-chatbot-process%402x.png)   

Deepgram is built for Conversational Al and voicebots with an End-to-End Deep Learning approach to automatic speech recognition (ASR). This approach allows you to solve for real-time speed at &lt;300 millisecond lag and obtain 90%+ trained accuracy. With higher accuracy data from the ASR, you can then dig into optimizing your NLU voicebot with Bitext. Get a snapshot of your NLU voicebot performance and find the root cause of incorrect responses or mis-routing. With the **Bitext and Deepgram partnership**, companies can analyze and improve their entire NLU voicebot platform to either correct issues or identify weak points before product release. Then, we can help create audio and voicebot training data to improve your models and track this improvement for further optimization and quality control. Contact us today or request a demo: [Bitext](https://info.bitext.com/request-a-demo-bitext) [Deepgram](https://www.deepgram.com/contact-us).`, "html": '<h3 id="deepgram-x-bitext-partnership"><strong>Deepgram X Bitext partnership</strong></h3>\n<p>As companies consider adding voicebots to their customer service, they are seeing the same \u201CAchilles\u2019 heel\u201D with NLU voicebots as experienced with <a href="https://blog.bitext.com/nlu-chatbot-evaluation-3-common-errors-and-5-key-steps">chatbots</a>.  To understand the root of the problem, we should first look at the ideal process:</p>\n<ol>\n<li>Customer provides information by voice</li>\n<li>Automatic Speech Recognition (ASR) must quickly and accurately process that audio into data the Voicebot/Chatbot can use without lag time to the customer</li>\n<li>Voicebot/Chatbot needs to \u201Cunderstand\u201D that information</li>\n<li>It must use that understanding to determine intent</li>\n<li>It uses that intent to either route the customer to a human agent or answer the request with a knowledge base AI</li>\n</ol>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976840/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/ideal-chatbot-process%402x.png" alt=""></p>\n<p>With a slow and inaccurate ASR, that \u201Cunderstanding\u201D phase is compromised, creating issues for the remainder of the process:</p>\n<ol>\n<li>Responding with the wrong intent</li>\n<li>Transferring to a human agent due to lack of confidence, when it should have understood the intent from the beginning</li>\n<li>Responding when it doesn\u2019t have to, instead of passing it on to an agent</li>\n<li>For voicebots, not understanding the customer and asking, \u201CSorry, I did not get that, can you repeat.\u201D</li>\n</ol>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976841/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/slow-inaccurate-chatbot-process%402x.png" alt=""></p>\n<p>Deepgram is built for Conversational Al and voicebots with an End-to-End Deep Learning approach to automatic speech recognition (ASR). This approach allows you to solve for real-time speed at <300 millisecond lag and obtain 90%+ trained accuracy. With higher accuracy data from the ASR, you can then dig into optimizing your NLU voicebot with Bitext. Get a snapshot of your NLU voicebot performance and find the root cause of incorrect responses or mis-routing. With the <strong>Bitext and Deepgram partnership</strong>, companies can analyze and improve their entire NLU voicebot platform to either correct issues or identify weak points before product release. Then, we can help create audio and voicebot training data to improve your models and track this improvement for further optimization and quality control. Contact us today or request a demo: <a href="https://info.bitext.com/request-a-demo-bitext">Bitext</a> <a href="https://www.deepgram.com/contact-us">Deepgram</a>.</p>' };
const frontmatter = { "title": "Regular ASR will Never Create a Humanized Bot Experience", "description": "This Deepgram X Bitext partnership will drastically improve Natural Language Understanding (NLU) for Voicebots and allow more human-like conversations.", "date": "2021-04-06T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981366/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/regular-asr-never-create-humanized-bot%402x.jpg", "authors": ["keith-lam"], "category": "ai-and-engineering", "tags": ["deep-learning", "nlu"], "seo": { "title": "Regular ASR will Never Create a Humanized Bot Experience", "description": "This Deepgram X Bitext partnership will drastically improve Natural Language Understanding (NLU) for Voicebots and allow more human-like conversations." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981366/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/regular-asr-never-create-humanized-bot%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/b5115a6", "twitter": "https://dpgr.am/4a4a966", "linkedin": "https://dpgr.am/72f5eb1", "reddit": "https://dpgr.am/56e414d", "facebook": "https://dpgr.am/72b7b4a" }, "astro": { "headings": [{ "depth": 3, "slug": "deepgram-x-bitext-partnership", "text": "Deepgram X Bitext partnership" }], "source": `### **Deepgram X Bitext partnership**

As companies consider adding voicebots to their customer service, they are seeing the same "Achilles' heel" with NLU voicebots as experienced with [chatbots](https://blog.bitext.com/nlu-chatbot-evaluation-3-common-errors-and-5-key-steps).  To understand the root of the problem, we should first look at the ideal process:

1. Customer provides information by voice
2. Automatic Speech Recognition (ASR) must quickly and accurately process that audio into data the Voicebot/Chatbot can use without lag time to the customer
3. Voicebot/Chatbot needs to "understand" that information
4. It must use that understanding to determine intent
5. It uses that intent to either route the customer to a human agent or answer the request with a knowledge base AI



  ![](https://res.cloudinary.com/deepgram/image/upload/v1661976840/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/ideal-chatbot-process%402x.png)   

With a slow and inaccurate ASR, that "understanding" phase is compromised, creating issues for the remainder of the process:

1. Responding with the wrong intent
2. Transferring to a human agent due to lack of confidence, when it should have understood the intent from the beginning
3. Responding when it doesn't have to, instead of passing it on to an agent
4. For voicebots, not understanding the customer and asking, "Sorry, I did not get that, can you repeat."

  ![](https://res.cloudinary.com/deepgram/image/upload/v1661976841/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/slow-inaccurate-chatbot-process%402x.png)   

Deepgram is built for Conversational Al and voicebots with an End-to-End Deep Learning approach to automatic speech recognition (ASR). This approach allows you to solve for real-time speed at &lt;300 millisecond lag and obtain 90%+ trained accuracy. With higher accuracy data from the ASR, you can then dig into optimizing your NLU voicebot with Bitext. Get a snapshot of your NLU voicebot performance and find the root cause of incorrect responses or mis-routing. With the **Bitext and Deepgram partnership**, companies can analyze and improve their entire NLU voicebot platform to either correct issues or identify weak points before product release. Then, we can help create audio and voicebot training data to improve your models and track this improvement for further optimization and quality control. Contact us today or request a demo: [Bitext](https://info.bitext.com/request-a-demo-bitext) [Deepgram](https://www.deepgram.com/contact-us).`, "html": '<h3 id="deepgram-x-bitext-partnership"><strong>Deepgram X Bitext partnership</strong></h3>\n<p>As companies consider adding voicebots to their customer service, they are seeing the same \u201CAchilles\u2019 heel\u201D with NLU voicebots as experienced with <a href="https://blog.bitext.com/nlu-chatbot-evaluation-3-common-errors-and-5-key-steps">chatbots</a>.  To understand the root of the problem, we should first look at the ideal process:</p>\n<ol>\n<li>Customer provides information by voice</li>\n<li>Automatic Speech Recognition (ASR) must quickly and accurately process that audio into data the Voicebot/Chatbot can use without lag time to the customer</li>\n<li>Voicebot/Chatbot needs to \u201Cunderstand\u201D that information</li>\n<li>It must use that understanding to determine intent</li>\n<li>It uses that intent to either route the customer to a human agent or answer the request with a knowledge base AI</li>\n</ol>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976840/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/ideal-chatbot-process%402x.png" alt=""></p>\n<p>With a slow and inaccurate ASR, that \u201Cunderstanding\u201D phase is compromised, creating issues for the remainder of the process:</p>\n<ol>\n<li>Responding with the wrong intent</li>\n<li>Transferring to a human agent due to lack of confidence, when it should have understood the intent from the beginning</li>\n<li>Responding when it doesn\u2019t have to, instead of passing it on to an agent</li>\n<li>For voicebots, not understanding the customer and asking, \u201CSorry, I did not get that, can you repeat.\u201D</li>\n</ol>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976841/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/slow-inaccurate-chatbot-process%402x.png" alt=""></p>\n<p>Deepgram is built for Conversational Al and voicebots with an End-to-End Deep Learning approach to automatic speech recognition (ASR). This approach allows you to solve for real-time speed at <300 millisecond lag and obtain 90%+ trained accuracy. With higher accuracy data from the ASR, you can then dig into optimizing your NLU voicebot with Bitext. Get a snapshot of your NLU voicebot performance and find the root cause of incorrect responses or mis-routing. With the <strong>Bitext and Deepgram partnership</strong>, companies can analyze and improve their entire NLU voicebot platform to either correct issues or identify weak points before product release. Then, we can help create audio and voicebot training data to improve your models and track this improvement for further optimization and quality control. Contact us today or request a demo: <a href="https://info.bitext.com/request-a-demo-bitext">Bitext</a> <a href="https://www.deepgram.com/contact-us">Deepgram</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/index.md" };
function rawContent() {
  return `### **Deepgram X Bitext partnership**

As companies consider adding voicebots to their customer service, they are seeing the same "Achilles' heel" with NLU voicebots as experienced with [chatbots](https://blog.bitext.com/nlu-chatbot-evaluation-3-common-errors-and-5-key-steps).  To understand the root of the problem, we should first look at the ideal process:

1. Customer provides information by voice
2. Automatic Speech Recognition (ASR) must quickly and accurately process that audio into data the Voicebot/Chatbot can use without lag time to the customer
3. Voicebot/Chatbot needs to "understand" that information
4. It must use that understanding to determine intent
5. It uses that intent to either route the customer to a human agent or answer the request with a knowledge base AI



  ![](https://res.cloudinary.com/deepgram/image/upload/v1661976840/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/ideal-chatbot-process%402x.png)   

With a slow and inaccurate ASR, that "understanding" phase is compromised, creating issues for the remainder of the process:

1. Responding with the wrong intent
2. Transferring to a human agent due to lack of confidence, when it should have understood the intent from the beginning
3. Responding when it doesn't have to, instead of passing it on to an agent
4. For voicebots, not understanding the customer and asking, "Sorry, I did not get that, can you repeat."

  ![](https://res.cloudinary.com/deepgram/image/upload/v1661976841/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/slow-inaccurate-chatbot-process%402x.png)   

Deepgram is built for Conversational Al and voicebots with an End-to-End Deep Learning approach to automatic speech recognition (ASR). This approach allows you to solve for real-time speed at &lt;300 millisecond lag and obtain 90%+ trained accuracy. With higher accuracy data from the ASR, you can then dig into optimizing your NLU voicebot with Bitext. Get a snapshot of your NLU voicebot performance and find the root cause of incorrect responses or mis-routing. With the **Bitext and Deepgram partnership**, companies can analyze and improve their entire NLU voicebot platform to either correct issues or identify weak points before product release. Then, we can help create audio and voicebot training data to improve your models and track this improvement for further optimization and quality control. Contact us today or request a demo: [Bitext](https://info.bitext.com/request-a-demo-bitext) [Deepgram](https://www.deepgram.com/contact-us).`;
}
function compiledContent() {
  return '<h3 id="deepgram-x-bitext-partnership"><strong>Deepgram X Bitext partnership</strong></h3>\n<p>As companies consider adding voicebots to their customer service, they are seeing the same \u201CAchilles\u2019 heel\u201D with NLU voicebots as experienced with <a href="https://blog.bitext.com/nlu-chatbot-evaluation-3-common-errors-and-5-key-steps">chatbots</a>.  To understand the root of the problem, we should first look at the ideal process:</p>\n<ol>\n<li>Customer provides information by voice</li>\n<li>Automatic Speech Recognition (ASR) must quickly and accurately process that audio into data the Voicebot/Chatbot can use without lag time to the customer</li>\n<li>Voicebot/Chatbot needs to \u201Cunderstand\u201D that information</li>\n<li>It must use that understanding to determine intent</li>\n<li>It uses that intent to either route the customer to a human agent or answer the request with a knowledge base AI</li>\n</ol>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976840/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/ideal-chatbot-process%402x.png" alt=""></p>\n<p>With a slow and inaccurate ASR, that \u201Cunderstanding\u201D phase is compromised, creating issues for the remainder of the process:</p>\n<ol>\n<li>Responding with the wrong intent</li>\n<li>Transferring to a human agent due to lack of confidence, when it should have understood the intent from the beginning</li>\n<li>Responding when it doesn\u2019t have to, instead of passing it on to an agent</li>\n<li>For voicebots, not understanding the customer and asking, \u201CSorry, I did not get that, can you repeat.\u201D</li>\n</ol>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976841/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/slow-inaccurate-chatbot-process%402x.png" alt=""></p>\n<p>Deepgram is built for Conversational Al and voicebots with an End-to-End Deep Learning approach to automatic speech recognition (ASR). This approach allows you to solve for real-time speed at <300 millisecond lag and obtain 90%+ trained accuracy. With higher accuracy data from the ASR, you can then dig into optimizing your NLU voicebot with Bitext. Get a snapshot of your NLU voicebot performance and find the root cause of incorrect responses or mis-routing. With the <strong>Bitext and Deepgram partnership</strong>, companies can analyze and improve their entire NLU voicebot platform to either correct issues or identify weak points before product release. Then, we can help create audio and voicebot training data to improve your models and track this improvement for further optimization and quality control. Contact us today or request a demo: <a href="https://info.bitext.com/request-a-demo-bitext">Bitext</a> <a href="https://www.deepgram.com/contact-us">Deepgram</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><h3 id="deepgram-x-bitext-partnership"><strong>Deepgram X Bitext partnership</strong></h3>
<p>As companies consider adding voicebots to their customer service, they are seeing the same “Achilles’ heel” with NLU voicebots as experienced with <a href="https://blog.bitext.com/nlu-chatbot-evaluation-3-common-errors-and-5-key-steps">chatbots</a>.  To understand the root of the problem, we should first look at the ideal process:</p>
<ol>
<li>Customer provides information by voice</li>
<li>Automatic Speech Recognition (ASR) must quickly and accurately process that audio into data the Voicebot/Chatbot can use without lag time to the customer</li>
<li>Voicebot/Chatbot needs to “understand” that information</li>
<li>It must use that understanding to determine intent</li>
<li>It uses that intent to either route the customer to a human agent or answer the request with a knowledge base AI</li>
</ol>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976840/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/ideal-chatbot-process%402x.png" alt=""></p>
<p>With a slow and inaccurate ASR, that “understanding” phase is compromised, creating issues for the remainder of the process:</p>
<ol>
<li>Responding with the wrong intent</li>
<li>Transferring to a human agent due to lack of confidence, when it should have understood the intent from the beginning</li>
<li>Responding when it doesn’t have to, instead of passing it on to an agent</li>
<li>For voicebots, not understanding the customer and asking, “Sorry, I did not get that, can you repeat.”</li>
</ol>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976841/blog/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/slow-inaccurate-chatbot-process%402x.png" alt=""></p>
<p>Deepgram is built for Conversational Al and voicebots with an End-to-End Deep Learning approach to automatic speech recognition (ASR). This approach allows you to solve for real-time speed at <300 millisecond lag and obtain 90%+ trained accuracy. With higher accuracy data from the ASR, you can then dig into optimizing your NLU voicebot with Bitext. Get a snapshot of your NLU voicebot performance and find the root cause of incorrect responses or mis-routing. With the <strong>Bitext and Deepgram partnership</strong>, companies can analyze and improve their entire NLU voicebot platform to either correct issues or identify weak points before product release. Then, we can help create audio and voicebot training data to improve your models and track this improvement for further optimization and quality control. Contact us today or request a demo: <a href="https://info.bitext.com/request-a-demo-bitext">Bitext</a> <a href="https://www.deepgram.com/contact-us">Deepgram</a>.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/natural-language-understanding-nlu-for-audio-requires-a-highly-accurate-and-fast-speech-to-text-foundation/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
