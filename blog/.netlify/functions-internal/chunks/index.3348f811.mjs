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

const metadata = { "headings": [{ "depth": 2, "slug": "background-on-automl", "text": "Background on AutoML" }, { "depth": 2, "slug": "how-automl-unlocks-speech", "text": "How AutoML Unlocks Speech" }], "source": `There is a lot of buzz around the term "AutoML" and what it can really do for companies. When you hear the term "AI creating AI", it's bound to incite a lot of excitement... and curiosity. At its core, AutoML means automated machine learning. It gives enterprises the power to train and deploy thousands of models to fit the needs of various customers and industries through an automated approach. This capability especially benefits speech recognition, which is notoriously time-consuming, complex and expensive. With 73 percent of organizations [expecting to spend more money](https://deepgram.com/state-of-asr-report/) on speech recognition in the next 12 months, it's critical to ensure that the technology is worth the investment and is as efficient as possible. Our team recently announced [Deepgram AutoML](https://blog.deepgram.com/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies-2/), a new training capability that streamlines AI model development, reducing manual cycles for data scientists and developers, while providing them with the best accuracy on the market. In light of this exciting news, we wanted to provide a deeper dive into what AutoML actually is and how it can unlock value for companies' voice data.

## Background on AutoML

AutoML is a relatively new process that automates iterative tasks of machine learning model development, essentially allowing AI to create the next AI. Typically, when building a machine learning model, a data scientist needs to perform various tasks such as collecting representative data sets, prepping those files, defining model training curriculums, neural network parameters, and much more. Each of these micro-decisions determines a model's effectiveness, however tedious tasks can pull data scientists away from strategic areas that also need their attention, such as ways to reduce bias. AutoML removes tedious steps and allows data scientists to more rapidly iterate on their models, to reach their accuracy and overarching business goals faster.

## How AutoML Unlocks Speech

While AutoML has been used in Natural Language Processing (NLP), image recognition and vision for the last few years, Deepgram AutoML is the first time that AutoML has been deployed in automatic speech recognition (ASR). As the world's fastest, most accurate, reliable and scalable speech solution, Deepgram is uniquely positioned to provide easy access to this technology. By leveraging AutoML within ASR, organizations of all sizes can now:

* **Extract even more value from their audio:** Most enterprises have years of recordings, but don't have the insights readily available to unlock value for their business. For example, imagine being able to arm your sales team with knowledge articles dynamically as they are speaking with a customer, or notifying a manager or technical expert to jump on the phone at just the right time to answer a question. By leveraging AutoML, your data science team can develop speech recognition models faster, with higher accuracy than ever before. With accurate, reliable transcriptions delivered quickly to engineering you can build delightful experiences for internal and external customers now-not in 6 or 12 months-that will differentiate you from your competition.
* **Solve the talent gap:** Data scientists with experience in deep learning are hard to find and hard to keep. By leveraging AutoML, you can reserve precious productivity cycles for data scientists and allow them to focus on the strategic problems and opportunity areas for your business. AutoML enables data scientists to scale the development of models, and mentor less experienced data enthusiasts to implement low code/no code solutions that also contribute to company results.
* **Pave the way for accurate NLP:** By integrating ASR powered by AutoML, you'll lay the foundation for accurate NLP. If you don't have a reliable foundation, your data classification won't be accurate either, which will cause additional feedback cycles for data scientists, engineers, compliance and QA teams down the road. Once the ASR foundation is set and you no longer have to worry about the quality of the data, you can turn your attention to how to classify the data, and find ways to create a deeper understanding of your customer.

AutoML is an important next step in the evolution of AI and ML and we're excited to offer access to this technology to our customers and partners. To learn more about our AutoML offering, check out our blog post [here](https://blog.deepgram.com/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies)!`, "html": '<p>There is a lot of buzz around the term \u201CAutoML\u201D and what it can really do for companies. When you hear the term \u201CAI creating AI\u201D, it\u2019s bound to incite a lot of excitement\u2026 and curiosity. At its core, AutoML means automated machine learning. It gives enterprises the power to train and deploy thousands of models to fit the needs of various customers and industries through an automated approach. This capability especially benefits speech recognition, which is notoriously time-consuming, complex and expensive. With 73 percent of organizations <a href="https://deepgram.com/state-of-asr-report/">expecting to spend more money</a> on speech recognition in the next 12 months, it\u2019s critical to ensure that the technology is worth the investment and is as efficient as possible. Our team recently announced <a href="https://blog.deepgram.com/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies-2/">Deepgram AutoML</a>, a new training capability that streamlines AI model development, reducing manual cycles for data scientists and developers, while providing them with the best accuracy on the market. In light of this exciting news, we wanted to provide a deeper dive into what AutoML actually is and how it can unlock value for companies\u2019 voice data.</p>\n<h2 id="background-on-automl">Background on AutoML</h2>\n<p>AutoML is a relatively new process that automates iterative tasks of machine learning model development, essentially allowing AI to create the next AI. Typically, when building a machine learning model, a data scientist needs to perform various tasks such as collecting representative data sets, prepping those files, defining model training curriculums, neural network parameters, and much more. Each of these micro-decisions determines a model\u2019s effectiveness, however tedious tasks can pull data scientists away from strategic areas that also need their attention, such as ways to reduce bias. AutoML removes tedious steps and allows data scientists to more rapidly iterate on their models, to reach their accuracy and overarching business goals faster.</p>\n<h2 id="how-automl-unlocks-speech">How AutoML Unlocks Speech</h2>\n<p>While AutoML has been used in Natural Language Processing (NLP), image recognition and vision for the last few years, Deepgram AutoML is the first time that AutoML has been deployed in automatic speech recognition (ASR). As the world\u2019s fastest, most accurate, reliable and scalable speech solution, Deepgram is uniquely positioned to provide easy access to this technology. By leveraging AutoML within ASR, organizations of all sizes can now:</p>\n<ul>\n<li><strong>Extract even more value from their audio:</strong> Most enterprises have years of recordings, but don\u2019t have the insights readily available to unlock value for their business. For example, imagine being able to arm your sales team with knowledge articles dynamically as they are speaking with a customer, or notifying a manager or technical expert to jump on the phone at just the right time to answer a question. By leveraging AutoML, your data science team can develop speech recognition models faster, with higher accuracy than ever before. With accurate, reliable transcriptions delivered quickly to engineering you can build delightful experiences for internal and external customers now-not in 6 or 12 months-that will differentiate you from your competition.</li>\n<li><strong>Solve the talent gap:</strong> Data scientists with experience in deep learning are hard to find and hard to keep. By leveraging AutoML, you can reserve precious productivity cycles for data scientists and allow them to focus on the strategic problems and opportunity areas for your business. AutoML enables data scientists to scale the development of models, and mentor less experienced data enthusiasts to implement low code/no code solutions that also contribute to company results.</li>\n<li><strong>Pave the way for accurate NLP:</strong> By integrating ASR powered by AutoML, you\u2019ll lay the foundation for accurate NLP. If you don\u2019t have a reliable foundation, your data classification won\u2019t be accurate either, which will cause additional feedback cycles for data scientists, engineers, compliance and QA teams down the road. Once the ASR foundation is set and you no longer have to worry about the quality of the data, you can turn your attention to how to classify the data, and find ways to create a deeper understanding of your customer.</li>\n</ul>\n<p>AutoML is an important next step in the evolution of AI and ML and we\u2019re excited to offer access to this technology to our customers and partners. To learn more about our AutoML offering, check out our blog post <a href="https://blog.deepgram.com/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies">here</a>!</p>' };
const frontmatter = { "title": "What is AutoML? How the Technology Paves the Way for the Future of ASR", "description": 'There is a lot of buzz around the term "AutoML" and what it can really do for companies. Learn what it means here.', "date": "2020-10-22T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981357/blog/what-is-automl-how-the-technology-paves-the-way-for-the-future-of-asr/what-is-automl%402x.jpg", "authors": ["katie-byrne"], "category": "ai-and-engineering", "tags": ["machine-learning", "deep-learning"], "seo": { "title": "What is AutoML? How the Technology Paves the Way for the Future of ASR", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981357/blog/what-is-automl-how-the-technology-paves-the-way-for-the-future-of-asr/what-is-automl%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/6c64f6c", "twitter": "https://dpgr.am/8542cd5", "linkedin": "https://dpgr.am/2f06f98", "reddit": "https://dpgr.am/e042049", "facebook": "https://dpgr.am/6155e95" }, "astro": { "headings": [{ "depth": 2, "slug": "background-on-automl", "text": "Background on AutoML" }, { "depth": 2, "slug": "how-automl-unlocks-speech", "text": "How AutoML Unlocks Speech" }], "source": `There is a lot of buzz around the term "AutoML" and what it can really do for companies. When you hear the term "AI creating AI", it's bound to incite a lot of excitement... and curiosity. At its core, AutoML means automated machine learning. It gives enterprises the power to train and deploy thousands of models to fit the needs of various customers and industries through an automated approach. This capability especially benefits speech recognition, which is notoriously time-consuming, complex and expensive. With 73 percent of organizations [expecting to spend more money](https://deepgram.com/state-of-asr-report/) on speech recognition in the next 12 months, it's critical to ensure that the technology is worth the investment and is as efficient as possible. Our team recently announced [Deepgram AutoML](https://blog.deepgram.com/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies-2/), a new training capability that streamlines AI model development, reducing manual cycles for data scientists and developers, while providing them with the best accuracy on the market. In light of this exciting news, we wanted to provide a deeper dive into what AutoML actually is and how it can unlock value for companies' voice data.

## Background on AutoML

AutoML is a relatively new process that automates iterative tasks of machine learning model development, essentially allowing AI to create the next AI. Typically, when building a machine learning model, a data scientist needs to perform various tasks such as collecting representative data sets, prepping those files, defining model training curriculums, neural network parameters, and much more. Each of these micro-decisions determines a model's effectiveness, however tedious tasks can pull data scientists away from strategic areas that also need their attention, such as ways to reduce bias. AutoML removes tedious steps and allows data scientists to more rapidly iterate on their models, to reach their accuracy and overarching business goals faster.

## How AutoML Unlocks Speech

While AutoML has been used in Natural Language Processing (NLP), image recognition and vision for the last few years, Deepgram AutoML is the first time that AutoML has been deployed in automatic speech recognition (ASR). As the world's fastest, most accurate, reliable and scalable speech solution, Deepgram is uniquely positioned to provide easy access to this technology. By leveraging AutoML within ASR, organizations of all sizes can now:

* **Extract even more value from their audio:** Most enterprises have years of recordings, but don't have the insights readily available to unlock value for their business. For example, imagine being able to arm your sales team with knowledge articles dynamically as they are speaking with a customer, or notifying a manager or technical expert to jump on the phone at just the right time to answer a question. By leveraging AutoML, your data science team can develop speech recognition models faster, with higher accuracy than ever before. With accurate, reliable transcriptions delivered quickly to engineering you can build delightful experiences for internal and external customers now-not in 6 or 12 months-that will differentiate you from your competition.
* **Solve the talent gap:** Data scientists with experience in deep learning are hard to find and hard to keep. By leveraging AutoML, you can reserve precious productivity cycles for data scientists and allow them to focus on the strategic problems and opportunity areas for your business. AutoML enables data scientists to scale the development of models, and mentor less experienced data enthusiasts to implement low code/no code solutions that also contribute to company results.
* **Pave the way for accurate NLP:** By integrating ASR powered by AutoML, you'll lay the foundation for accurate NLP. If you don't have a reliable foundation, your data classification won't be accurate either, which will cause additional feedback cycles for data scientists, engineers, compliance and QA teams down the road. Once the ASR foundation is set and you no longer have to worry about the quality of the data, you can turn your attention to how to classify the data, and find ways to create a deeper understanding of your customer.

AutoML is an important next step in the evolution of AI and ML and we're excited to offer access to this technology to our customers and partners. To learn more about our AutoML offering, check out our blog post [here](https://blog.deepgram.com/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies)!`, "html": '<p>There is a lot of buzz around the term \u201CAutoML\u201D and what it can really do for companies. When you hear the term \u201CAI creating AI\u201D, it\u2019s bound to incite a lot of excitement\u2026 and curiosity. At its core, AutoML means automated machine learning. It gives enterprises the power to train and deploy thousands of models to fit the needs of various customers and industries through an automated approach. This capability especially benefits speech recognition, which is notoriously time-consuming, complex and expensive. With 73 percent of organizations <a href="https://deepgram.com/state-of-asr-report/">expecting to spend more money</a> on speech recognition in the next 12 months, it\u2019s critical to ensure that the technology is worth the investment and is as efficient as possible. Our team recently announced <a href="https://blog.deepgram.com/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies-2/">Deepgram AutoML</a>, a new training capability that streamlines AI model development, reducing manual cycles for data scientists and developers, while providing them with the best accuracy on the market. In light of this exciting news, we wanted to provide a deeper dive into what AutoML actually is and how it can unlock value for companies\u2019 voice data.</p>\n<h2 id="background-on-automl">Background on AutoML</h2>\n<p>AutoML is a relatively new process that automates iterative tasks of machine learning model development, essentially allowing AI to create the next AI. Typically, when building a machine learning model, a data scientist needs to perform various tasks such as collecting representative data sets, prepping those files, defining model training curriculums, neural network parameters, and much more. Each of these micro-decisions determines a model\u2019s effectiveness, however tedious tasks can pull data scientists away from strategic areas that also need their attention, such as ways to reduce bias. AutoML removes tedious steps and allows data scientists to more rapidly iterate on their models, to reach their accuracy and overarching business goals faster.</p>\n<h2 id="how-automl-unlocks-speech">How AutoML Unlocks Speech</h2>\n<p>While AutoML has been used in Natural Language Processing (NLP), image recognition and vision for the last few years, Deepgram AutoML is the first time that AutoML has been deployed in automatic speech recognition (ASR). As the world\u2019s fastest, most accurate, reliable and scalable speech solution, Deepgram is uniquely positioned to provide easy access to this technology. By leveraging AutoML within ASR, organizations of all sizes can now:</p>\n<ul>\n<li><strong>Extract even more value from their audio:</strong> Most enterprises have years of recordings, but don\u2019t have the insights readily available to unlock value for their business. For example, imagine being able to arm your sales team with knowledge articles dynamically as they are speaking with a customer, or notifying a manager or technical expert to jump on the phone at just the right time to answer a question. By leveraging AutoML, your data science team can develop speech recognition models faster, with higher accuracy than ever before. With accurate, reliable transcriptions delivered quickly to engineering you can build delightful experiences for internal and external customers now-not in 6 or 12 months-that will differentiate you from your competition.</li>\n<li><strong>Solve the talent gap:</strong> Data scientists with experience in deep learning are hard to find and hard to keep. By leveraging AutoML, you can reserve precious productivity cycles for data scientists and allow them to focus on the strategic problems and opportunity areas for your business. AutoML enables data scientists to scale the development of models, and mentor less experienced data enthusiasts to implement low code/no code solutions that also contribute to company results.</li>\n<li><strong>Pave the way for accurate NLP:</strong> By integrating ASR powered by AutoML, you\u2019ll lay the foundation for accurate NLP. If you don\u2019t have a reliable foundation, your data classification won\u2019t be accurate either, which will cause additional feedback cycles for data scientists, engineers, compliance and QA teams down the road. Once the ASR foundation is set and you no longer have to worry about the quality of the data, you can turn your attention to how to classify the data, and find ways to create a deeper understanding of your customer.</li>\n</ul>\n<p>AutoML is an important next step in the evolution of AI and ML and we\u2019re excited to offer access to this technology to our customers and partners. To learn more about our AutoML offering, check out our blog post <a href="https://blog.deepgram.com/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies">here</a>!</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-is-automl-how-the-technology-paves-the-way-for-the-future-of-asr/index.md" };
function rawContent() {
  return `There is a lot of buzz around the term "AutoML" and what it can really do for companies. When you hear the term "AI creating AI", it's bound to incite a lot of excitement... and curiosity. At its core, AutoML means automated machine learning. It gives enterprises the power to train and deploy thousands of models to fit the needs of various customers and industries through an automated approach. This capability especially benefits speech recognition, which is notoriously time-consuming, complex and expensive. With 73 percent of organizations [expecting to spend more money](https://deepgram.com/state-of-asr-report/) on speech recognition in the next 12 months, it's critical to ensure that the technology is worth the investment and is as efficient as possible. Our team recently announced [Deepgram AutoML](https://blog.deepgram.com/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies-2/), a new training capability that streamlines AI model development, reducing manual cycles for data scientists and developers, while providing them with the best accuracy on the market. In light of this exciting news, we wanted to provide a deeper dive into what AutoML actually is and how it can unlock value for companies' voice data.

## Background on AutoML

AutoML is a relatively new process that automates iterative tasks of machine learning model development, essentially allowing AI to create the next AI. Typically, when building a machine learning model, a data scientist needs to perform various tasks such as collecting representative data sets, prepping those files, defining model training curriculums, neural network parameters, and much more. Each of these micro-decisions determines a model's effectiveness, however tedious tasks can pull data scientists away from strategic areas that also need their attention, such as ways to reduce bias. AutoML removes tedious steps and allows data scientists to more rapidly iterate on their models, to reach their accuracy and overarching business goals faster.

## How AutoML Unlocks Speech

While AutoML has been used in Natural Language Processing (NLP), image recognition and vision for the last few years, Deepgram AutoML is the first time that AutoML has been deployed in automatic speech recognition (ASR). As the world's fastest, most accurate, reliable and scalable speech solution, Deepgram is uniquely positioned to provide easy access to this technology. By leveraging AutoML within ASR, organizations of all sizes can now:

* **Extract even more value from their audio:** Most enterprises have years of recordings, but don't have the insights readily available to unlock value for their business. For example, imagine being able to arm your sales team with knowledge articles dynamically as they are speaking with a customer, or notifying a manager or technical expert to jump on the phone at just the right time to answer a question. By leveraging AutoML, your data science team can develop speech recognition models faster, with higher accuracy than ever before. With accurate, reliable transcriptions delivered quickly to engineering you can build delightful experiences for internal and external customers now-not in 6 or 12 months-that will differentiate you from your competition.
* **Solve the talent gap:** Data scientists with experience in deep learning are hard to find and hard to keep. By leveraging AutoML, you can reserve precious productivity cycles for data scientists and allow them to focus on the strategic problems and opportunity areas for your business. AutoML enables data scientists to scale the development of models, and mentor less experienced data enthusiasts to implement low code/no code solutions that also contribute to company results.
* **Pave the way for accurate NLP:** By integrating ASR powered by AutoML, you'll lay the foundation for accurate NLP. If you don't have a reliable foundation, your data classification won't be accurate either, which will cause additional feedback cycles for data scientists, engineers, compliance and QA teams down the road. Once the ASR foundation is set and you no longer have to worry about the quality of the data, you can turn your attention to how to classify the data, and find ways to create a deeper understanding of your customer.

AutoML is an important next step in the evolution of AI and ML and we're excited to offer access to this technology to our customers and partners. To learn more about our AutoML offering, check out our blog post [here](https://blog.deepgram.com/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies)!`;
}
function compiledContent() {
  return '<p>There is a lot of buzz around the term \u201CAutoML\u201D and what it can really do for companies. When you hear the term \u201CAI creating AI\u201D, it\u2019s bound to incite a lot of excitement\u2026 and curiosity. At its core, AutoML means automated machine learning. It gives enterprises the power to train and deploy thousands of models to fit the needs of various customers and industries through an automated approach. This capability especially benefits speech recognition, which is notoriously time-consuming, complex and expensive. With 73 percent of organizations <a href="https://deepgram.com/state-of-asr-report/">expecting to spend more money</a> on speech recognition in the next 12 months, it\u2019s critical to ensure that the technology is worth the investment and is as efficient as possible. Our team recently announced <a href="https://blog.deepgram.com/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies-2/">Deepgram AutoML</a>, a new training capability that streamlines AI model development, reducing manual cycles for data scientists and developers, while providing them with the best accuracy on the market. In light of this exciting news, we wanted to provide a deeper dive into what AutoML actually is and how it can unlock value for companies\u2019 voice data.</p>\n<h2 id="background-on-automl">Background on AutoML</h2>\n<p>AutoML is a relatively new process that automates iterative tasks of machine learning model development, essentially allowing AI to create the next AI. Typically, when building a machine learning model, a data scientist needs to perform various tasks such as collecting representative data sets, prepping those files, defining model training curriculums, neural network parameters, and much more. Each of these micro-decisions determines a model\u2019s effectiveness, however tedious tasks can pull data scientists away from strategic areas that also need their attention, such as ways to reduce bias. AutoML removes tedious steps and allows data scientists to more rapidly iterate on their models, to reach their accuracy and overarching business goals faster.</p>\n<h2 id="how-automl-unlocks-speech">How AutoML Unlocks Speech</h2>\n<p>While AutoML has been used in Natural Language Processing (NLP), image recognition and vision for the last few years, Deepgram AutoML is the first time that AutoML has been deployed in automatic speech recognition (ASR). As the world\u2019s fastest, most accurate, reliable and scalable speech solution, Deepgram is uniquely positioned to provide easy access to this technology. By leveraging AutoML within ASR, organizations of all sizes can now:</p>\n<ul>\n<li><strong>Extract even more value from their audio:</strong> Most enterprises have years of recordings, but don\u2019t have the insights readily available to unlock value for their business. For example, imagine being able to arm your sales team with knowledge articles dynamically as they are speaking with a customer, or notifying a manager or technical expert to jump on the phone at just the right time to answer a question. By leveraging AutoML, your data science team can develop speech recognition models faster, with higher accuracy than ever before. With accurate, reliable transcriptions delivered quickly to engineering you can build delightful experiences for internal and external customers now-not in 6 or 12 months-that will differentiate you from your competition.</li>\n<li><strong>Solve the talent gap:</strong> Data scientists with experience in deep learning are hard to find and hard to keep. By leveraging AutoML, you can reserve precious productivity cycles for data scientists and allow them to focus on the strategic problems and opportunity areas for your business. AutoML enables data scientists to scale the development of models, and mentor less experienced data enthusiasts to implement low code/no code solutions that also contribute to company results.</li>\n<li><strong>Pave the way for accurate NLP:</strong> By integrating ASR powered by AutoML, you\u2019ll lay the foundation for accurate NLP. If you don\u2019t have a reliable foundation, your data classification won\u2019t be accurate either, which will cause additional feedback cycles for data scientists, engineers, compliance and QA teams down the road. Once the ASR foundation is set and you no longer have to worry about the quality of the data, you can turn your attention to how to classify the data, and find ways to create a deeper understanding of your customer.</li>\n</ul>\n<p>AutoML is an important next step in the evolution of AI and ML and we\u2019re excited to offer access to this technology to our customers and partners. To learn more about our AutoML offering, check out our blog post <a href="https://blog.deepgram.com/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies">here</a>!</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-is-automl-how-the-technology-paves-the-way-for-the-future-of-asr/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>There is a lot of buzz around the term “AutoML” and what it can really do for companies. When you hear the term “AI creating AI”, it’s bound to incite a lot of excitement… and curiosity. At its core, AutoML means automated machine learning. It gives enterprises the power to train and deploy thousands of models to fit the needs of various customers and industries through an automated approach. This capability especially benefits speech recognition, which is notoriously time-consuming, complex and expensive. With 73 percent of organizations <a href="https://deepgram.com/state-of-asr-report/">expecting to spend more money</a> on speech recognition in the next 12 months, it’s critical to ensure that the technology is worth the investment and is as efficient as possible. Our team recently announced <a href="https://blog.deepgram.com/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies-2/">Deepgram AutoML</a>, a new training capability that streamlines AI model development, reducing manual cycles for data scientists and developers, while providing them with the best accuracy on the market. In light of this exciting news, we wanted to provide a deeper dive into what AutoML actually is and how it can unlock value for companies’ voice data.</p>
<h2 id="background-on-automl">Background on AutoML</h2>
<p>AutoML is a relatively new process that automates iterative tasks of machine learning model development, essentially allowing AI to create the next AI. Typically, when building a machine learning model, a data scientist needs to perform various tasks such as collecting representative data sets, prepping those files, defining model training curriculums, neural network parameters, and much more. Each of these micro-decisions determines a model’s effectiveness, however tedious tasks can pull data scientists away from strategic areas that also need their attention, such as ways to reduce bias. AutoML removes tedious steps and allows data scientists to more rapidly iterate on their models, to reach their accuracy and overarching business goals faster.</p>
<h2 id="how-automl-unlocks-speech">How AutoML Unlocks Speech</h2>
<p>While AutoML has been used in Natural Language Processing (NLP), image recognition and vision for the last few years, Deepgram AutoML is the first time that AutoML has been deployed in automatic speech recognition (ASR). As the world’s fastest, most accurate, reliable and scalable speech solution, Deepgram is uniquely positioned to provide easy access to this technology. By leveraging AutoML within ASR, organizations of all sizes can now:</p>
<ul>
<li><strong>Extract even more value from their audio:</strong> Most enterprises have years of recordings, but don’t have the insights readily available to unlock value for their business. For example, imagine being able to arm your sales team with knowledge articles dynamically as they are speaking with a customer, or notifying a manager or technical expert to jump on the phone at just the right time to answer a question. By leveraging AutoML, your data science team can develop speech recognition models faster, with higher accuracy than ever before. With accurate, reliable transcriptions delivered quickly to engineering you can build delightful experiences for internal and external customers now-not in 6 or 12 months-that will differentiate you from your competition.</li>
<li><strong>Solve the talent gap:</strong> Data scientists with experience in deep learning are hard to find and hard to keep. By leveraging AutoML, you can reserve precious productivity cycles for data scientists and allow them to focus on the strategic problems and opportunity areas for your business. AutoML enables data scientists to scale the development of models, and mentor less experienced data enthusiasts to implement low code/no code solutions that also contribute to company results.</li>
<li><strong>Pave the way for accurate NLP:</strong> By integrating ASR powered by AutoML, you’ll lay the foundation for accurate NLP. If you don’t have a reliable foundation, your data classification won’t be accurate either, which will cause additional feedback cycles for data scientists, engineers, compliance and QA teams down the road. Once the ASR foundation is set and you no longer have to worry about the quality of the data, you can turn your attention to how to classify the data, and find ways to create a deeper understanding of your customer.</li>
</ul>
<p>AutoML is an important next step in the evolution of AI and ML and we’re excited to offer access to this technology to our customers and partners. To learn more about our AutoML offering, check out our blog post <a href="https://blog.deepgram.com/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies">here</a>!</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-is-automl-how-the-technology-paves-the-way-for-the-future-of-asr/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
