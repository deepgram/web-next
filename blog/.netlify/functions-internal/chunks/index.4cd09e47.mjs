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

const metadata = { "headings": [{ "depth": 2, "slug": "what-are-keywords", "text": "What are Keywords?" }, { "depth": 3, "slug": "example-with-and-without-keyword-boosting", "text": "Example with and without keyword boosting:" }, { "depth": 2, "slug": "why-is-keyword-boosting-used", "text": "Why is Keyword Boosting Used?" }, { "depth": 2, "slug": "where-should-i-use-a-custom-model-instead-of-keywords", "text": "Where Should I Use a Custom Model Instead of Keywords?\xA0" }, { "depth": 2, "slug": "where-should-i-use-find-and-replace-versus-keywords", "text": "Where Should I Use Find and Replace Versus Keywords?" }, { "depth": 2, "slug": "wrapping-up", "text": "Wrapping Up" }], "source": `
Just like humans, AI learns through experience. In absence of training your model to all of the possible audio scenarios and special vocabulary it may encounter, Keywords are a way of increasing accuracy without having to give your model the \u201Cexperience\u201D\u2014a shortcut, if you will.

Speech recognition such as Google, AWS and others apply different techniques to increasing accuracy through keywords. Here\u2019s a brief overview of what you need to know about Keywords and when you should consider using them.

## What are Keywords?

Keywords are a way of specifying that certain words are expected to appear in a conversation. Deepgram\u2019s end-to-end deep learning platform will read the entire model and utilize this information to make more accurate predictions.

Customers who want better performance on product names or industry-specific vocabulary can use keywords to increase the chances that Deepgram\u2019s model will predict those words instead of more common ones.\xA0

Deepgram\u2019s deep learning models are trained on real-world audio and have extensive vocabularies. Most common words will already be correctly predicted by our models. Keyword boosting (sometimes known as word boost or speech adaptation boost) can help with words that are not in the model\u2019s vocabulary, such as proper nouns.

### **Example with and without keyword boosting:**

    keywords=snuffleupagus:2.2

**\\*Truth\\***

and then big bird said to snuffleupagus why aren\u2019t you eating that banana

**\\*Before boosting\\***

and then big bird said to sniff why aren\u2019t you eating that banana

**\\*After boosting\\***

and then big bird said to snuffleupagus why aren\u2019t you eating that banana

Here\u2019s how to make a request with keyword boosting using Deepgram\u2019s speech-to-text API.

    curl \\

    \\--request POST \\

    \\--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \\

    \\--header 'Content-Type: audio/wav' \\

    \\--data-binary @youraudio.wav \\

    \\--url 'https://api.deepgram.com/v1/listen?keywords=KEYWORD:INTENSIFIER'

For more information about keywords, you can refer to our [developer documentation](https://developers.deepgram.com/documentation/features/keywords/).

## Why is Keyword Boosting Used?

Just like a human listener, Deepgram can better understand mumbled, distorted, or otherwise hard-to-decipher speech when it knows the context of the conversation. When using Deepgram\u2019s API to transcribe audio, you can specify keywords to which the model should pay particular attention to help it understand context; this is known as keyword boosting. Similarly, you can suppress keywords.

For example, in a conversational AI application, keyword boosting can be used for your product names and business terminology. If you run a burger drive-through and use speech-to-text to handle orders, your customers are more likely to be ordering a \u201Cburger with fries\u201D than a \u201Cbreaker with five\u201D. Boosting \u201Cburger\u201D and \u201Cfries\u201D can help ensure you get the output your application is expecting.

## Where Should I Use a Custom Model Instead of Keywords?\xA0

Though keywords can be used to aid a few uncommon or out-of-vocabulary words, a custom model trained on representative data will always give the best performance. The more keywords specified, the higher the chance that the models may give unexpected outputs. Additionally, keywords cannot accept multiple-word phrases, such as \u201Cno problem\u201D, to be boosted as a unit. Even if multiple words are sent in the keywords parameter using URL encoding, Deepgram will boost each word individually, which may not lead to the desired results.\xA0

For customers who work in industries with lots of uncommon vocabulary or specific phrases, Deepgram recommends talking to our team about custom model training. Deepgram can also provide data labeling services, and even create audio to train on to ensure custom models produce the best results possible.

If custom model training isn\u2019t an option but better accuracy is desired, another option is using Deepgram\u2019s enhanced model tier. Deepgram's Enhanced model has increased effective vocabulary and handles long tail vocabulary (words that appear infrequently) significantly better. If switching models, testing should be done with and without keywords, as transcription outputs may change.

## Where Should I Use Find and Replace Versus Keywords?

Keyword boosting is designed to increase the chances that a certain word will be transcribed. [Find and replace ](https://developers.deepgram.com/documentation/features/replace/)is designed for cases where when a certain word is transcribed, it should be replaced with something different. One example of where find and replace should be used is if the name "Aaron" appears in the transcript but should be spelled "Erin" instead.

## Wrapping Up

If you\u2019d like to give keywords a try in your project, you can [sign up for Console](https://console.deepgram.com/signup) and get $150 in free credit to try it out. Still have questions? Check out our [developer documentation](https://developers.deepgram.com/), or [reach out to Sales with your questions](https://deepgram.com/contact-us/).

`, "html": '<p>Just like humans, AI learns through experience. In absence of training your model to all of the possible audio scenarios and special vocabulary it may encounter, Keywords are a way of increasing accuracy without having to give your model the \u201Cexperience\u201D\u2014a shortcut, if you will.</p>\n<p>Speech recognition such as Google, AWS and others apply different techniques to increasing accuracy through keywords. Here\u2019s a brief overview of what you need to know about Keywords and when you should consider using them.</p>\n<h2 id="what-are-keywords">What are Keywords?</h2>\n<p>Keywords are a way of specifying that certain words are expected to appear in a conversation. Deepgram\u2019s end-to-end deep learning platform will read the entire model and utilize this information to make more accurate predictions.</p>\n<p>Customers who want better performance on product names or industry-specific vocabulary can use keywords to increase the chances that Deepgram\u2019s model will predict those words instead of more common ones.\xA0</p>\n<p>Deepgram\u2019s deep learning models are trained on real-world audio and have extensive vocabularies. Most common words will already be correctly predicted by our models. Keyword boosting (sometimes known as word boost or speech adaptation boost) can help with words that are not in the model\u2019s vocabulary, such as proper nouns.</p>\n<h3 id="example-with-and-without-keyword-boosting"><strong>Example with and without keyword boosting:</strong></h3>\n<p>keywords=snuffleupagus:2.2</p>\n<p><strong>*Truth*</strong></p>\n<p>and then big bird said to snuffleupagus why aren\u2019t you eating that banana</p>\n<p><strong>*Before boosting*</strong></p>\n<p>and then big bird said to sniff why aren\u2019t you eating that banana</p>\n<p><strong>*After boosting*</strong></p>\n<p>and then big bird said to snuffleupagus why aren\u2019t you eating that banana</p>\n<p>Here\u2019s how to make a request with keyword boosting using Deepgram\u2019s speech-to-text API.</p>\n<p>curl \\</p>\n<p>\u2014request POST \\</p>\n<p>\u2014header \u2018Authorization: Token YOUR_DEEPGRAM_API_KEY\u2019 \\</p>\n<p>\u2014header \u2018Content-Type: audio/wav\u2019 \\</p>\n<p>\u2014data-binary @youraudio.wav \\</p>\n<p>\u2014url \u2019<a href="https://api.deepgram.com/v1/listen?keywords=KEYWORD:INTENSIFIER">https://api.deepgram.com/v1/listen?keywords=KEYWORD:INTENSIFIER</a>\u2019</p>\n<p>For more information about keywords, you can refer to our <a href="https://developers.deepgram.com/documentation/features/keywords/">developer documentation</a>.</p>\n<h2 id="why-is-keyword-boosting-used">Why is Keyword Boosting Used?</h2>\n<p>Just like a human listener, Deepgram can better understand mumbled, distorted, or otherwise hard-to-decipher speech when it knows the context of the conversation. When using Deepgram\u2019s API to transcribe audio, you can specify keywords to which the model should pay particular attention to help it understand context; this is known as keyword boosting. Similarly, you can suppress keywords.</p>\n<p>For example, in a conversational AI application, keyword boosting can be used for your product names and business terminology. If you run a burger drive-through and use speech-to-text to handle orders, your customers are more likely to be ordering a \u201Cburger with fries\u201D than a \u201Cbreaker with five\u201D. Boosting \u201Cburger\u201D and \u201Cfries\u201D can help ensure you get the output your application is expecting.</p>\n<h2 id="where-should-i-use-a-custom-model-instead-of-keywords">Where Should I Use a Custom Model Instead of Keywords?\xA0</h2>\n<p>Though keywords can be used to aid a few uncommon or out-of-vocabulary words, a custom model trained on representative data will always give the best performance. The more keywords specified, the higher the chance that the models may give unexpected outputs. Additionally, keywords cannot accept multiple-word phrases, such as \u201Cno problem\u201D, to be boosted as a unit. Even if multiple words are sent in the keywords parameter using URL encoding, Deepgram will boost each word individually, which may not lead to the desired results.\xA0</p>\n<p>For customers who work in industries with lots of uncommon vocabulary or specific phrases, Deepgram recommends talking to our team about custom model training. Deepgram can also provide data labeling services, and even create audio to train on to ensure custom models produce the best results possible.</p>\n<p>If custom model training isn\u2019t an option but better accuracy is desired, another option is using Deepgram\u2019s enhanced model tier. Deepgram\u2019s Enhanced model has increased effective vocabulary and handles long tail vocabulary (words that appear infrequently) significantly better. If switching models, testing should be done with and without keywords, as transcription outputs may change.</p>\n<h2 id="where-should-i-use-find-and-replace-versus-keywords">Where Should I Use Find and Replace Versus Keywords?</h2>\n<p>Keyword boosting is designed to increase the chances that a certain word will be transcribed. <a href="https://developers.deepgram.com/documentation/features/replace/">Find and replace </a>is designed for cases where when a certain word is transcribed, it should be replaced with something different. One example of where find and replace should be used is if the name \u201CAaron\u201D appears in the transcript but should be spelled \u201CErin\u201D instead.</p>\n<h2 id="wrapping-up">Wrapping Up</h2>\n<p>If you\u2019d like to give keywords a try in your project, you can <a href="https://console.deepgram.com/signup">sign up for Console</a> and get $150 in free credit to try it out. Still have questions? Check out our <a href="https://developers.deepgram.com/">developer documentation</a>, or <a href="https://deepgram.com/contact-us/">reach out to Sales with your questions</a>.</p>' };
const frontmatter = { "title": "Everything You Need to Know about Keywords for Speech Recognition", "description": "Speech recognition such as Google, AWS and others apply different techniques to increasing accuracy through keywords. Here\u2019s a brief overview of what you need to know about Keywords and when you should consider using them.", "date": "2022-10-17T22:48:27.811Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1666046992/blog/Everything%20You%20Need%20to%20Know%20about%20Keywords%20for%20Speech%20Recognition/2210-Keywords-for-speech-recognition-featured-1200x630_2x_1_mb9ngj.png", "authors": ["shir-goldberg"], "category": "best-practice", "tags": ["Keywords"], "shorturls": { "share": "https://dpgr.am/b1d2e02", "twitter": "https://dpgr.am/265ac49", "linkedin": "https://dpgr.am/bfad845", "reddit": "https://dpgr.am/7a4f07c", "facebook": "https://dpgr.am/62a6ff4" }, "astro": { "headings": [{ "depth": 2, "slug": "what-are-keywords", "text": "What are Keywords?" }, { "depth": 3, "slug": "example-with-and-without-keyword-boosting", "text": "Example with and without keyword boosting:" }, { "depth": 2, "slug": "why-is-keyword-boosting-used", "text": "Why is Keyword Boosting Used?" }, { "depth": 2, "slug": "where-should-i-use-a-custom-model-instead-of-keywords", "text": "Where Should I Use a Custom Model Instead of Keywords?\xA0" }, { "depth": 2, "slug": "where-should-i-use-find-and-replace-versus-keywords", "text": "Where Should I Use Find and Replace Versus Keywords?" }, { "depth": 2, "slug": "wrapping-up", "text": "Wrapping Up" }], "source": `
Just like humans, AI learns through experience. In absence of training your model to all of the possible audio scenarios and special vocabulary it may encounter, Keywords are a way of increasing accuracy without having to give your model the \u201Cexperience\u201D\u2014a shortcut, if you will.

Speech recognition such as Google, AWS and others apply different techniques to increasing accuracy through keywords. Here\u2019s a brief overview of what you need to know about Keywords and when you should consider using them.

## What are Keywords?

Keywords are a way of specifying that certain words are expected to appear in a conversation. Deepgram\u2019s end-to-end deep learning platform will read the entire model and utilize this information to make more accurate predictions.

Customers who want better performance on product names or industry-specific vocabulary can use keywords to increase the chances that Deepgram\u2019s model will predict those words instead of more common ones.\xA0

Deepgram\u2019s deep learning models are trained on real-world audio and have extensive vocabularies. Most common words will already be correctly predicted by our models. Keyword boosting (sometimes known as word boost or speech adaptation boost) can help with words that are not in the model\u2019s vocabulary, such as proper nouns.

### **Example with and without keyword boosting:**

    keywords=snuffleupagus:2.2

**\\*Truth\\***

and then big bird said to snuffleupagus why aren\u2019t you eating that banana

**\\*Before boosting\\***

and then big bird said to sniff why aren\u2019t you eating that banana

**\\*After boosting\\***

and then big bird said to snuffleupagus why aren\u2019t you eating that banana

Here\u2019s how to make a request with keyword boosting using Deepgram\u2019s speech-to-text API.

    curl \\

    \\--request POST \\

    \\--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \\

    \\--header 'Content-Type: audio/wav' \\

    \\--data-binary @youraudio.wav \\

    \\--url 'https://api.deepgram.com/v1/listen?keywords=KEYWORD:INTENSIFIER'

For more information about keywords, you can refer to our [developer documentation](https://developers.deepgram.com/documentation/features/keywords/).

## Why is Keyword Boosting Used?

Just like a human listener, Deepgram can better understand mumbled, distorted, or otherwise hard-to-decipher speech when it knows the context of the conversation. When using Deepgram\u2019s API to transcribe audio, you can specify keywords to which the model should pay particular attention to help it understand context; this is known as keyword boosting. Similarly, you can suppress keywords.

For example, in a conversational AI application, keyword boosting can be used for your product names and business terminology. If you run a burger drive-through and use speech-to-text to handle orders, your customers are more likely to be ordering a \u201Cburger with fries\u201D than a \u201Cbreaker with five\u201D. Boosting \u201Cburger\u201D and \u201Cfries\u201D can help ensure you get the output your application is expecting.

## Where Should I Use a Custom Model Instead of Keywords?\xA0

Though keywords can be used to aid a few uncommon or out-of-vocabulary words, a custom model trained on representative data will always give the best performance. The more keywords specified, the higher the chance that the models may give unexpected outputs. Additionally, keywords cannot accept multiple-word phrases, such as \u201Cno problem\u201D, to be boosted as a unit. Even if multiple words are sent in the keywords parameter using URL encoding, Deepgram will boost each word individually, which may not lead to the desired results.\xA0

For customers who work in industries with lots of uncommon vocabulary or specific phrases, Deepgram recommends talking to our team about custom model training. Deepgram can also provide data labeling services, and even create audio to train on to ensure custom models produce the best results possible.

If custom model training isn\u2019t an option but better accuracy is desired, another option is using Deepgram\u2019s enhanced model tier. Deepgram's Enhanced model has increased effective vocabulary and handles long tail vocabulary (words that appear infrequently) significantly better. If switching models, testing should be done with and without keywords, as transcription outputs may change.

## Where Should I Use Find and Replace Versus Keywords?

Keyword boosting is designed to increase the chances that a certain word will be transcribed. [Find and replace ](https://developers.deepgram.com/documentation/features/replace/)is designed for cases where when a certain word is transcribed, it should be replaced with something different. One example of where find and replace should be used is if the name "Aaron" appears in the transcript but should be spelled "Erin" instead.

## Wrapping Up

If you\u2019d like to give keywords a try in your project, you can [sign up for Console](https://console.deepgram.com/signup) and get $150 in free credit to try it out. Still have questions? Check out our [developer documentation](https://developers.deepgram.com/), or [reach out to Sales with your questions](https://deepgram.com/contact-us/).

`, "html": '<p>Just like humans, AI learns through experience. In absence of training your model to all of the possible audio scenarios and special vocabulary it may encounter, Keywords are a way of increasing accuracy without having to give your model the \u201Cexperience\u201D\u2014a shortcut, if you will.</p>\n<p>Speech recognition such as Google, AWS and others apply different techniques to increasing accuracy through keywords. Here\u2019s a brief overview of what you need to know about Keywords and when you should consider using them.</p>\n<h2 id="what-are-keywords">What are Keywords?</h2>\n<p>Keywords are a way of specifying that certain words are expected to appear in a conversation. Deepgram\u2019s end-to-end deep learning platform will read the entire model and utilize this information to make more accurate predictions.</p>\n<p>Customers who want better performance on product names or industry-specific vocabulary can use keywords to increase the chances that Deepgram\u2019s model will predict those words instead of more common ones.\xA0</p>\n<p>Deepgram\u2019s deep learning models are trained on real-world audio and have extensive vocabularies. Most common words will already be correctly predicted by our models. Keyword boosting (sometimes known as word boost or speech adaptation boost) can help with words that are not in the model\u2019s vocabulary, such as proper nouns.</p>\n<h3 id="example-with-and-without-keyword-boosting"><strong>Example with and without keyword boosting:</strong></h3>\n<p>keywords=snuffleupagus:2.2</p>\n<p><strong>*Truth*</strong></p>\n<p>and then big bird said to snuffleupagus why aren\u2019t you eating that banana</p>\n<p><strong>*Before boosting*</strong></p>\n<p>and then big bird said to sniff why aren\u2019t you eating that banana</p>\n<p><strong>*After boosting*</strong></p>\n<p>and then big bird said to snuffleupagus why aren\u2019t you eating that banana</p>\n<p>Here\u2019s how to make a request with keyword boosting using Deepgram\u2019s speech-to-text API.</p>\n<p>curl \\</p>\n<p>\u2014request POST \\</p>\n<p>\u2014header \u2018Authorization: Token YOUR_DEEPGRAM_API_KEY\u2019 \\</p>\n<p>\u2014header \u2018Content-Type: audio/wav\u2019 \\</p>\n<p>\u2014data-binary @youraudio.wav \\</p>\n<p>\u2014url \u2019<a href="https://api.deepgram.com/v1/listen?keywords=KEYWORD:INTENSIFIER">https://api.deepgram.com/v1/listen?keywords=KEYWORD:INTENSIFIER</a>\u2019</p>\n<p>For more information about keywords, you can refer to our <a href="https://developers.deepgram.com/documentation/features/keywords/">developer documentation</a>.</p>\n<h2 id="why-is-keyword-boosting-used">Why is Keyword Boosting Used?</h2>\n<p>Just like a human listener, Deepgram can better understand mumbled, distorted, or otherwise hard-to-decipher speech when it knows the context of the conversation. When using Deepgram\u2019s API to transcribe audio, you can specify keywords to which the model should pay particular attention to help it understand context; this is known as keyword boosting. Similarly, you can suppress keywords.</p>\n<p>For example, in a conversational AI application, keyword boosting can be used for your product names and business terminology. If you run a burger drive-through and use speech-to-text to handle orders, your customers are more likely to be ordering a \u201Cburger with fries\u201D than a \u201Cbreaker with five\u201D. Boosting \u201Cburger\u201D and \u201Cfries\u201D can help ensure you get the output your application is expecting.</p>\n<h2 id="where-should-i-use-a-custom-model-instead-of-keywords">Where Should I Use a Custom Model Instead of Keywords?\xA0</h2>\n<p>Though keywords can be used to aid a few uncommon or out-of-vocabulary words, a custom model trained on representative data will always give the best performance. The more keywords specified, the higher the chance that the models may give unexpected outputs. Additionally, keywords cannot accept multiple-word phrases, such as \u201Cno problem\u201D, to be boosted as a unit. Even if multiple words are sent in the keywords parameter using URL encoding, Deepgram will boost each word individually, which may not lead to the desired results.\xA0</p>\n<p>For customers who work in industries with lots of uncommon vocabulary or specific phrases, Deepgram recommends talking to our team about custom model training. Deepgram can also provide data labeling services, and even create audio to train on to ensure custom models produce the best results possible.</p>\n<p>If custom model training isn\u2019t an option but better accuracy is desired, another option is using Deepgram\u2019s enhanced model tier. Deepgram\u2019s Enhanced model has increased effective vocabulary and handles long tail vocabulary (words that appear infrequently) significantly better. If switching models, testing should be done with and without keywords, as transcription outputs may change.</p>\n<h2 id="where-should-i-use-find-and-replace-versus-keywords">Where Should I Use Find and Replace Versus Keywords?</h2>\n<p>Keyword boosting is designed to increase the chances that a certain word will be transcribed. <a href="https://developers.deepgram.com/documentation/features/replace/">Find and replace </a>is designed for cases where when a certain word is transcribed, it should be replaced with something different. One example of where find and replace should be used is if the name \u201CAaron\u201D appears in the transcript but should be spelled \u201CErin\u201D instead.</p>\n<h2 id="wrapping-up">Wrapping Up</h2>\n<p>If you\u2019d like to give keywords a try in your project, you can <a href="https://console.deepgram.com/signup">sign up for Console</a> and get $150 in free credit to try it out. Still have questions? Check out our <a href="https://developers.deepgram.com/">developer documentation</a>, or <a href="https://deepgram.com/contact-us/">reach out to Sales with your questions</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/everything-you-need-to-know-about-keywords-for-speech-recognition/index.md" };
function rawContent() {
  return `
Just like humans, AI learns through experience. In absence of training your model to all of the possible audio scenarios and special vocabulary it may encounter, Keywords are a way of increasing accuracy without having to give your model the \u201Cexperience\u201D\u2014a shortcut, if you will.

Speech recognition such as Google, AWS and others apply different techniques to increasing accuracy through keywords. Here\u2019s a brief overview of what you need to know about Keywords and when you should consider using them.

## What are Keywords?

Keywords are a way of specifying that certain words are expected to appear in a conversation. Deepgram\u2019s end-to-end deep learning platform will read the entire model and utilize this information to make more accurate predictions.

Customers who want better performance on product names or industry-specific vocabulary can use keywords to increase the chances that Deepgram\u2019s model will predict those words instead of more common ones.\xA0

Deepgram\u2019s deep learning models are trained on real-world audio and have extensive vocabularies. Most common words will already be correctly predicted by our models. Keyword boosting (sometimes known as word boost or speech adaptation boost) can help with words that are not in the model\u2019s vocabulary, such as proper nouns.

### **Example with and without keyword boosting:**

    keywords=snuffleupagus:2.2

**\\*Truth\\***

and then big bird said to snuffleupagus why aren\u2019t you eating that banana

**\\*Before boosting\\***

and then big bird said to sniff why aren\u2019t you eating that banana

**\\*After boosting\\***

and then big bird said to snuffleupagus why aren\u2019t you eating that banana

Here\u2019s how to make a request with keyword boosting using Deepgram\u2019s speech-to-text API.

    curl \\

    \\--request POST \\

    \\--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \\

    \\--header 'Content-Type: audio/wav' \\

    \\--data-binary @youraudio.wav \\

    \\--url 'https://api.deepgram.com/v1/listen?keywords=KEYWORD:INTENSIFIER'

For more information about keywords, you can refer to our [developer documentation](https://developers.deepgram.com/documentation/features/keywords/).

## Why is Keyword Boosting Used?

Just like a human listener, Deepgram can better understand mumbled, distorted, or otherwise hard-to-decipher speech when it knows the context of the conversation. When using Deepgram\u2019s API to transcribe audio, you can specify keywords to which the model should pay particular attention to help it understand context; this is known as keyword boosting. Similarly, you can suppress keywords.

For example, in a conversational AI application, keyword boosting can be used for your product names and business terminology. If you run a burger drive-through and use speech-to-text to handle orders, your customers are more likely to be ordering a \u201Cburger with fries\u201D than a \u201Cbreaker with five\u201D. Boosting \u201Cburger\u201D and \u201Cfries\u201D can help ensure you get the output your application is expecting.

## Where Should I Use a Custom Model Instead of Keywords?\xA0

Though keywords can be used to aid a few uncommon or out-of-vocabulary words, a custom model trained on representative data will always give the best performance. The more keywords specified, the higher the chance that the models may give unexpected outputs. Additionally, keywords cannot accept multiple-word phrases, such as \u201Cno problem\u201D, to be boosted as a unit. Even if multiple words are sent in the keywords parameter using URL encoding, Deepgram will boost each word individually, which may not lead to the desired results.\xA0

For customers who work in industries with lots of uncommon vocabulary or specific phrases, Deepgram recommends talking to our team about custom model training. Deepgram can also provide data labeling services, and even create audio to train on to ensure custom models produce the best results possible.

If custom model training isn\u2019t an option but better accuracy is desired, another option is using Deepgram\u2019s enhanced model tier. Deepgram's Enhanced model has increased effective vocabulary and handles long tail vocabulary (words that appear infrequently) significantly better. If switching models, testing should be done with and without keywords, as transcription outputs may change.

## Where Should I Use Find and Replace Versus Keywords?

Keyword boosting is designed to increase the chances that a certain word will be transcribed. [Find and replace ](https://developers.deepgram.com/documentation/features/replace/)is designed for cases where when a certain word is transcribed, it should be replaced with something different. One example of where find and replace should be used is if the name "Aaron" appears in the transcript but should be spelled "Erin" instead.

## Wrapping Up

If you\u2019d like to give keywords a try in your project, you can [sign up for Console](https://console.deepgram.com/signup) and get $150 in free credit to try it out. Still have questions? Check out our [developer documentation](https://developers.deepgram.com/), or [reach out to Sales with your questions](https://deepgram.com/contact-us/).

`;
}
function compiledContent() {
  return '<p>Just like humans, AI learns through experience. In absence of training your model to all of the possible audio scenarios and special vocabulary it may encounter, Keywords are a way of increasing accuracy without having to give your model the \u201Cexperience\u201D\u2014a shortcut, if you will.</p>\n<p>Speech recognition such as Google, AWS and others apply different techniques to increasing accuracy through keywords. Here\u2019s a brief overview of what you need to know about Keywords and when you should consider using them.</p>\n<h2 id="what-are-keywords">What are Keywords?</h2>\n<p>Keywords are a way of specifying that certain words are expected to appear in a conversation. Deepgram\u2019s end-to-end deep learning platform will read the entire model and utilize this information to make more accurate predictions.</p>\n<p>Customers who want better performance on product names or industry-specific vocabulary can use keywords to increase the chances that Deepgram\u2019s model will predict those words instead of more common ones.\xA0</p>\n<p>Deepgram\u2019s deep learning models are trained on real-world audio and have extensive vocabularies. Most common words will already be correctly predicted by our models. Keyword boosting (sometimes known as word boost or speech adaptation boost) can help with words that are not in the model\u2019s vocabulary, such as proper nouns.</p>\n<h3 id="example-with-and-without-keyword-boosting"><strong>Example with and without keyword boosting:</strong></h3>\n<p>keywords=snuffleupagus:2.2</p>\n<p><strong>*Truth*</strong></p>\n<p>and then big bird said to snuffleupagus why aren\u2019t you eating that banana</p>\n<p><strong>*Before boosting*</strong></p>\n<p>and then big bird said to sniff why aren\u2019t you eating that banana</p>\n<p><strong>*After boosting*</strong></p>\n<p>and then big bird said to snuffleupagus why aren\u2019t you eating that banana</p>\n<p>Here\u2019s how to make a request with keyword boosting using Deepgram\u2019s speech-to-text API.</p>\n<p>curl \\</p>\n<p>\u2014request POST \\</p>\n<p>\u2014header \u2018Authorization: Token YOUR_DEEPGRAM_API_KEY\u2019 \\</p>\n<p>\u2014header \u2018Content-Type: audio/wav\u2019 \\</p>\n<p>\u2014data-binary @youraudio.wav \\</p>\n<p>\u2014url \u2019<a href="https://api.deepgram.com/v1/listen?keywords=KEYWORD:INTENSIFIER">https://api.deepgram.com/v1/listen?keywords=KEYWORD:INTENSIFIER</a>\u2019</p>\n<p>For more information about keywords, you can refer to our <a href="https://developers.deepgram.com/documentation/features/keywords/">developer documentation</a>.</p>\n<h2 id="why-is-keyword-boosting-used">Why is Keyword Boosting Used?</h2>\n<p>Just like a human listener, Deepgram can better understand mumbled, distorted, or otherwise hard-to-decipher speech when it knows the context of the conversation. When using Deepgram\u2019s API to transcribe audio, you can specify keywords to which the model should pay particular attention to help it understand context; this is known as keyword boosting. Similarly, you can suppress keywords.</p>\n<p>For example, in a conversational AI application, keyword boosting can be used for your product names and business terminology. If you run a burger drive-through and use speech-to-text to handle orders, your customers are more likely to be ordering a \u201Cburger with fries\u201D than a \u201Cbreaker with five\u201D. Boosting \u201Cburger\u201D and \u201Cfries\u201D can help ensure you get the output your application is expecting.</p>\n<h2 id="where-should-i-use-a-custom-model-instead-of-keywords">Where Should I Use a Custom Model Instead of Keywords?\xA0</h2>\n<p>Though keywords can be used to aid a few uncommon or out-of-vocabulary words, a custom model trained on representative data will always give the best performance. The more keywords specified, the higher the chance that the models may give unexpected outputs. Additionally, keywords cannot accept multiple-word phrases, such as \u201Cno problem\u201D, to be boosted as a unit. Even if multiple words are sent in the keywords parameter using URL encoding, Deepgram will boost each word individually, which may not lead to the desired results.\xA0</p>\n<p>For customers who work in industries with lots of uncommon vocabulary or specific phrases, Deepgram recommends talking to our team about custom model training. Deepgram can also provide data labeling services, and even create audio to train on to ensure custom models produce the best results possible.</p>\n<p>If custom model training isn\u2019t an option but better accuracy is desired, another option is using Deepgram\u2019s enhanced model tier. Deepgram\u2019s Enhanced model has increased effective vocabulary and handles long tail vocabulary (words that appear infrequently) significantly better. If switching models, testing should be done with and without keywords, as transcription outputs may change.</p>\n<h2 id="where-should-i-use-find-and-replace-versus-keywords">Where Should I Use Find and Replace Versus Keywords?</h2>\n<p>Keyword boosting is designed to increase the chances that a certain word will be transcribed. <a href="https://developers.deepgram.com/documentation/features/replace/">Find and replace </a>is designed for cases where when a certain word is transcribed, it should be replaced with something different. One example of where find and replace should be used is if the name \u201CAaron\u201D appears in the transcript but should be spelled \u201CErin\u201D instead.</p>\n<h2 id="wrapping-up">Wrapping Up</h2>\n<p>If you\u2019d like to give keywords a try in your project, you can <a href="https://console.deepgram.com/signup">sign up for Console</a> and get $150 in free credit to try it out. Still have questions? Check out our <a href="https://developers.deepgram.com/">developer documentation</a>, or <a href="https://deepgram.com/contact-us/">reach out to Sales with your questions</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/everything-you-need-to-know-about-keywords-for-speech-recognition/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Just like humans, AI learns through experience. In absence of training your model to all of the possible audio scenarios and special vocabulary it may encounter, Keywords are a way of increasing accuracy without having to give your model the “experience”—a shortcut, if you will.</p>
<p>Speech recognition such as Google, AWS and others apply different techniques to increasing accuracy through keywords. Here’s a brief overview of what you need to know about Keywords and when you should consider using them.</p>
<h2 id="what-are-keywords">What are Keywords?</h2>
<p>Keywords are a way of specifying that certain words are expected to appear in a conversation. Deepgram’s end-to-end deep learning platform will read the entire model and utilize this information to make more accurate predictions.</p>
<p>Customers who want better performance on product names or industry-specific vocabulary can use keywords to increase the chances that Deepgram’s model will predict those words instead of more common ones. </p>
<p>Deepgram’s deep learning models are trained on real-world audio and have extensive vocabularies. Most common words will already be correctly predicted by our models. Keyword boosting (sometimes known as word boost or speech adaptation boost) can help with words that are not in the model’s vocabulary, such as proper nouns.</p>
<h3 id="example-with-and-without-keyword-boosting"><strong>Example with and without keyword boosting:</strong></h3>
<p>keywords=snuffleupagus:2.2</p>
<p><strong>*Truth*</strong></p>
<p>and then big bird said to snuffleupagus why aren’t you eating that banana</p>
<p><strong>*Before boosting*</strong></p>
<p>and then big bird said to sniff why aren’t you eating that banana</p>
<p><strong>*After boosting*</strong></p>
<p>and then big bird said to snuffleupagus why aren’t you eating that banana</p>
<p>Here’s how to make a request with keyword boosting using Deepgram’s speech-to-text API.</p>
<p>curl \\</p>
<p>—request POST \\</p>
<p>—header ‘Authorization: Token YOUR_DEEPGRAM_API_KEY’ \\</p>
<p>—header ‘Content-Type: audio/wav’ \\</p>
<p>—data-binary @youraudio.wav \\</p>
<p>—url ’<a href="https://api.deepgram.com/v1/listen?keywords=KEYWORD:INTENSIFIER">https://api.deepgram.com/v1/listen?keywords=KEYWORD:INTENSIFIER</a>’</p>
<p>For more information about keywords, you can refer to our <a href="https://developers.deepgram.com/documentation/features/keywords/">developer documentation</a>.</p>
<h2 id="why-is-keyword-boosting-used">Why is Keyword Boosting Used?</h2>
<p>Just like a human listener, Deepgram can better understand mumbled, distorted, or otherwise hard-to-decipher speech when it knows the context of the conversation. When using Deepgram’s API to transcribe audio, you can specify keywords to which the model should pay particular attention to help it understand context; this is known as keyword boosting. Similarly, you can suppress keywords.</p>
<p>For example, in a conversational AI application, keyword boosting can be used for your product names and business terminology. If you run a burger drive-through and use speech-to-text to handle orders, your customers are more likely to be ordering a “burger with fries” than a “breaker with five”. Boosting “burger” and “fries” can help ensure you get the output your application is expecting.</p>
<h2 id="where-should-i-use-a-custom-model-instead-of-keywords">Where Should I Use a Custom Model Instead of Keywords? </h2>
<p>Though keywords can be used to aid a few uncommon or out-of-vocabulary words, a custom model trained on representative data will always give the best performance. The more keywords specified, the higher the chance that the models may give unexpected outputs. Additionally, keywords cannot accept multiple-word phrases, such as “no problem”, to be boosted as a unit. Even if multiple words are sent in the keywords parameter using URL encoding, Deepgram will boost each word individually, which may not lead to the desired results. </p>
<p>For customers who work in industries with lots of uncommon vocabulary or specific phrases, Deepgram recommends talking to our team about custom model training. Deepgram can also provide data labeling services, and even create audio to train on to ensure custom models produce the best results possible.</p>
<p>If custom model training isn’t an option but better accuracy is desired, another option is using Deepgram’s enhanced model tier. Deepgram’s Enhanced model has increased effective vocabulary and handles long tail vocabulary (words that appear infrequently) significantly better. If switching models, testing should be done with and without keywords, as transcription outputs may change.</p>
<h2 id="where-should-i-use-find-and-replace-versus-keywords">Where Should I Use Find and Replace Versus Keywords?</h2>
<p>Keyword boosting is designed to increase the chances that a certain word will be transcribed. <a href="https://developers.deepgram.com/documentation/features/replace/">Find and replace </a>is designed for cases where when a certain word is transcribed, it should be replaced with something different. One example of where find and replace should be used is if the name “Aaron” appears in the transcript but should be spelled “Erin” instead.</p>
<h2 id="wrapping-up">Wrapping Up</h2>
<p>If you’d like to give keywords a try in your project, you can <a href="https://console.deepgram.com/signup">sign up for Console</a> and get $150 in free credit to try it out. Still have questions? Check out our <a href="https://developers.deepgram.com/">developer documentation</a>, or <a href="https://deepgram.com/contact-us/">reach out to Sales with your questions</a>.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/everything-you-need-to-know-about-keywords-for-speech-recognition/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
