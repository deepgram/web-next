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

const metadata = { "headings": [{ "depth": 2, "slug": "the-experiment", "text": "The Experiment" }, { "depth": 2, "slug": "the-take-home", "text": "The Take-Home" }, { "depth": 3, "slug": "try-the-experiment-yourself", "text": "Try the Experiment Yourself" }], "source": `<iframe src="https://www.youtube.com/embed/04YXLTnafTc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Alexa and Siri are great and all, but they often make funny, if not serious mistakes. Why is this?

![](https://res.cloudinary.com/deepgram/image/upload/v1661976769/blog/why-does-your-speech-recognition-need-context/Screen-Shot-2018-11-19-at-4.19.58-PM-1.png)



I conducted an experiment to measure how important context is in understanding audio-especially when the audio is noisy. As humans we tend to enter conversations with some knowledge of what the topic is, which allows us to follow along. The speech recognition APIs which power Google Assistant, Siri, and Amazon Alexa, do not have this context. **As far as they know, every time you speak to them is like the first time you have ever spoken to them.** Suspecting this might be the reason they often misunderstand things which they shouldn't, I decided to test this:

## The Experiment

I found an interesting image and recorded myself saying a sentence about it. I chose one of these images and went out to the street to ask people to listen to the recording, first without the visual stimulus, then with it. Both times, I asked people to tell me what they heard in order to see what effect seeing the image had on their ability to understand what was said. Without the context, people said some crazy things-their grammar, word choice and logic was awful. But, when they had some notion as to what the sentence could be about, they performed significantly better (despite the noisy audio).

## The Take-Home

What is true of the human brain, in this case, is also true of speech recognition APIs. <mark>When you use a speech recognition API trained on your specific voice data, it's context gets narrowed down to your world, limiting and focusing the words it can choose from.</mark> The result is much more accurate, and usable, transcription.

### Try the Experiment Yourself

<iframe src="https://www.youtube.com/embed/IyqLOIDLZnQ" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>`, "html": '<iframe src="https://www.youtube.com/embed/04YXLTnafTc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p>Alexa and Siri are great and all, but they often make funny, if not serious mistakes. Why is this?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976769/blog/why-does-your-speech-recognition-need-context/Screen-Shot-2018-11-19-at-4.19.58-PM-1.png" alt=""></p>\n<p>I conducted an experiment to measure how important context is in understanding audio-especially when the audio is noisy. As humans we tend to enter conversations with some knowledge of what the topic is, which allows us to follow along. The speech recognition APIs which power Google Assistant, Siri, and Amazon Alexa, do not have this context. <strong>As far as they know, every time you speak to them is like the first time you have ever spoken to them.</strong> Suspecting this might be the reason they often misunderstand things which they shouldn\u2019t, I decided to test this:</p>\n<h2 id="the-experiment">The Experiment</h2>\n<p>I found an interesting image and recorded myself saying a sentence about it. I chose one of these images and went out to the street to ask people to listen to the recording, first without the visual stimulus, then with it. Both times, I asked people to tell me what they heard in order to see what effect seeing the image had on their ability to understand what was said. Without the context, people said some crazy things-their grammar, word choice and logic was awful. But, when they had some notion as to what the sentence could be about, they performed significantly better (despite the noisy audio).</p>\n<h2 id="the-take-home">The Take-Home</h2>\n<p>What is true of the human brain, in this case, is also true of speech recognition APIs. <mark>When you use a speech recognition API trained on your specific voice data, it\u2019s context gets narrowed down to your world, limiting and focusing the words it can choose from.</mark> The result is much more accurate, and usable, transcription.</p>\n<h3 id="try-the-experiment-yourself">Try the Experiment Yourself</h3>\n<iframe src="https://www.youtube.com/embed/IyqLOIDLZnQ" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen" />' };
const frontmatter = { "title": "Why Does Your Speech Recognition Need Context?", "description": "Learn what context means in speech recognition, and why it's so important.", "date": "2018-12-01T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1662069465/blog/why-does-your-speech-recognition-need-context/placeholder-post-image%402x.jpg", "authors": ["morris-gevirtz"], "category": "ai-and-engineering", "tags": ["machine-learning", "voice-tech"], "seo": { "title": "Why Does Your Speech Recognition Need Context?", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1662069465/blog/why-does-your-speech-recognition-need-context/placeholder-post-image%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/57466dd", "twitter": "https://dpgr.am/fdd6127", "linkedin": "https://dpgr.am/8e14aa4", "reddit": "https://dpgr.am/ec104f3", "facebook": "https://dpgr.am/6526000" }, "astro": { "headings": [{ "depth": 2, "slug": "the-experiment", "text": "The Experiment" }, { "depth": 2, "slug": "the-take-home", "text": "The Take-Home" }, { "depth": 3, "slug": "try-the-experiment-yourself", "text": "Try the Experiment Yourself" }], "source": `<iframe src="https://www.youtube.com/embed/04YXLTnafTc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Alexa and Siri are great and all, but they often make funny, if not serious mistakes. Why is this?

![](https://res.cloudinary.com/deepgram/image/upload/v1661976769/blog/why-does-your-speech-recognition-need-context/Screen-Shot-2018-11-19-at-4.19.58-PM-1.png)



I conducted an experiment to measure how important context is in understanding audio-especially when the audio is noisy. As humans we tend to enter conversations with some knowledge of what the topic is, which allows us to follow along. The speech recognition APIs which power Google Assistant, Siri, and Amazon Alexa, do not have this context. **As far as they know, every time you speak to them is like the first time you have ever spoken to them.** Suspecting this might be the reason they often misunderstand things which they shouldn't, I decided to test this:

## The Experiment

I found an interesting image and recorded myself saying a sentence about it. I chose one of these images and went out to the street to ask people to listen to the recording, first without the visual stimulus, then with it. Both times, I asked people to tell me what they heard in order to see what effect seeing the image had on their ability to understand what was said. Without the context, people said some crazy things-their grammar, word choice and logic was awful. But, when they had some notion as to what the sentence could be about, they performed significantly better (despite the noisy audio).

## The Take-Home

What is true of the human brain, in this case, is also true of speech recognition APIs. <mark>When you use a speech recognition API trained on your specific voice data, it's context gets narrowed down to your world, limiting and focusing the words it can choose from.</mark> The result is much more accurate, and usable, transcription.

### Try the Experiment Yourself

<iframe src="https://www.youtube.com/embed/IyqLOIDLZnQ" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>`, "html": '<iframe src="https://www.youtube.com/embed/04YXLTnafTc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p>Alexa and Siri are great and all, but they often make funny, if not serious mistakes. Why is this?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976769/blog/why-does-your-speech-recognition-need-context/Screen-Shot-2018-11-19-at-4.19.58-PM-1.png" alt=""></p>\n<p>I conducted an experiment to measure how important context is in understanding audio-especially when the audio is noisy. As humans we tend to enter conversations with some knowledge of what the topic is, which allows us to follow along. The speech recognition APIs which power Google Assistant, Siri, and Amazon Alexa, do not have this context. <strong>As far as they know, every time you speak to them is like the first time you have ever spoken to them.</strong> Suspecting this might be the reason they often misunderstand things which they shouldn\u2019t, I decided to test this:</p>\n<h2 id="the-experiment">The Experiment</h2>\n<p>I found an interesting image and recorded myself saying a sentence about it. I chose one of these images and went out to the street to ask people to listen to the recording, first without the visual stimulus, then with it. Both times, I asked people to tell me what they heard in order to see what effect seeing the image had on their ability to understand what was said. Without the context, people said some crazy things-their grammar, word choice and logic was awful. But, when they had some notion as to what the sentence could be about, they performed significantly better (despite the noisy audio).</p>\n<h2 id="the-take-home">The Take-Home</h2>\n<p>What is true of the human brain, in this case, is also true of speech recognition APIs. <mark>When you use a speech recognition API trained on your specific voice data, it\u2019s context gets narrowed down to your world, limiting and focusing the words it can choose from.</mark> The result is much more accurate, and usable, transcription.</p>\n<h3 id="try-the-experiment-yourself">Try the Experiment Yourself</h3>\n<iframe src="https://www.youtube.com/embed/IyqLOIDLZnQ" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen" />' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/why-does-your-speech-recognition-need-context/index.md" };
function rawContent() {
  return `<iframe src="https://www.youtube.com/embed/04YXLTnafTc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Alexa and Siri are great and all, but they often make funny, if not serious mistakes. Why is this?

![](https://res.cloudinary.com/deepgram/image/upload/v1661976769/blog/why-does-your-speech-recognition-need-context/Screen-Shot-2018-11-19-at-4.19.58-PM-1.png)



I conducted an experiment to measure how important context is in understanding audio-especially when the audio is noisy. As humans we tend to enter conversations with some knowledge of what the topic is, which allows us to follow along. The speech recognition APIs which power Google Assistant, Siri, and Amazon Alexa, do not have this context. **As far as they know, every time you speak to them is like the first time you have ever spoken to them.** Suspecting this might be the reason they often misunderstand things which they shouldn't, I decided to test this:

## The Experiment

I found an interesting image and recorded myself saying a sentence about it. I chose one of these images and went out to the street to ask people to listen to the recording, first without the visual stimulus, then with it. Both times, I asked people to tell me what they heard in order to see what effect seeing the image had on their ability to understand what was said. Without the context, people said some crazy things-their grammar, word choice and logic was awful. But, when they had some notion as to what the sentence could be about, they performed significantly better (despite the noisy audio).

## The Take-Home

What is true of the human brain, in this case, is also true of speech recognition APIs. <mark>When you use a speech recognition API trained on your specific voice data, it's context gets narrowed down to your world, limiting and focusing the words it can choose from.</mark> The result is much more accurate, and usable, transcription.

### Try the Experiment Yourself

<iframe src="https://www.youtube.com/embed/IyqLOIDLZnQ" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>`;
}
function compiledContent() {
  return '<iframe src="https://www.youtube.com/embed/04YXLTnafTc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p>Alexa and Siri are great and all, but they often make funny, if not serious mistakes. Why is this?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976769/blog/why-does-your-speech-recognition-need-context/Screen-Shot-2018-11-19-at-4.19.58-PM-1.png" alt=""></p>\n<p>I conducted an experiment to measure how important context is in understanding audio-especially when the audio is noisy. As humans we tend to enter conversations with some knowledge of what the topic is, which allows us to follow along. The speech recognition APIs which power Google Assistant, Siri, and Amazon Alexa, do not have this context. <strong>As far as they know, every time you speak to them is like the first time you have ever spoken to them.</strong> Suspecting this might be the reason they often misunderstand things which they shouldn\u2019t, I decided to test this:</p>\n<h2 id="the-experiment">The Experiment</h2>\n<p>I found an interesting image and recorded myself saying a sentence about it. I chose one of these images and went out to the street to ask people to listen to the recording, first without the visual stimulus, then with it. Both times, I asked people to tell me what they heard in order to see what effect seeing the image had on their ability to understand what was said. Without the context, people said some crazy things-their grammar, word choice and logic was awful. But, when they had some notion as to what the sentence could be about, they performed significantly better (despite the noisy audio).</p>\n<h2 id="the-take-home">The Take-Home</h2>\n<p>What is true of the human brain, in this case, is also true of speech recognition APIs. <mark>When you use a speech recognition API trained on your specific voice data, it\u2019s context gets narrowed down to your world, limiting and focusing the words it can choose from.</mark> The result is much more accurate, and usable, transcription.</p>\n<h3 id="try-the-experiment-yourself">Try the Experiment Yourself</h3>\n<iframe src="https://www.youtube.com/embed/IyqLOIDLZnQ" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen" />';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/why-does-your-speech-recognition-need-context/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><iframe src="https://www.youtube.com/embed/04YXLTnafTc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<p>Alexa and Siri are great and all, but they often make funny, if not serious mistakes. Why is this?</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976769/blog/why-does-your-speech-recognition-need-context/Screen-Shot-2018-11-19-at-4.19.58-PM-1.png" alt=""></p>
<p>I conducted an experiment to measure how important context is in understanding audio-especially when the audio is noisy. As humans we tend to enter conversations with some knowledge of what the topic is, which allows us to follow along. The speech recognition APIs which power Google Assistant, Siri, and Amazon Alexa, do not have this context. <strong>As far as they know, every time you speak to them is like the first time you have ever spoken to them.</strong> Suspecting this might be the reason they often misunderstand things which they shouldn’t, I decided to test this:</p>
<h2 id="the-experiment">The Experiment</h2>
<p>I found an interesting image and recorded myself saying a sentence about it. I chose one of these images and went out to the street to ask people to listen to the recording, first without the visual stimulus, then with it. Both times, I asked people to tell me what they heard in order to see what effect seeing the image had on their ability to understand what was said. Without the context, people said some crazy things-their grammar, word choice and logic was awful. But, when they had some notion as to what the sentence could be about, they performed significantly better (despite the noisy audio).</p>
<h2 id="the-take-home">The Take-Home</h2>
<p>What is true of the human brain, in this case, is also true of speech recognition APIs. <mark>When you use a speech recognition API trained on your specific voice data, it’s context gets narrowed down to your world, limiting and focusing the words it can choose from.</mark> The result is much more accurate, and usable, transcription.</p>
<h3 id="try-the-experiment-yourself">Try the Experiment Yourself</h3>
<iframe src="https://www.youtube.com/embed/IyqLOIDLZnQ" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>`;
});

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
