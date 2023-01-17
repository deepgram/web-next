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

const metadata = { "headings": [{ "depth": 2, "slug": "barely-scratching-the-surface-of-voice-and-asrs-potential", "text": "Barely scratching the surface of voice and ASR\u2019s potential" }, { "depth": 2, "slug": "overcoming-barriers-to-deliver-voice-and-video-analytics-at-scale", "text": "Overcoming barriers to deliver voice and video analytics at scale" }, { "depth": 2, "slug": "maximizing-your-voice-and-ai-strategy", "text": "Maximizing your voice and AI strategy" }], "source": `***With voice data increasingly seen as a strategic asset awash with rich insights, timely access to real-time high-quality audio and transcripts for AI engines to reason over is critical.***  In fact, the advanced capabilities of speech analytics and associated use-cases are making enterprises wake up to the value held in call recordings, with almost 76%\\* of C-level executives regarding voice data as "valuable" or "very valuable" to their organization.  Add to this the 85%\\** of organizations regarding ASR as "important" to their future AI strategies, it is evident that the value of the spoken word is rising.

## **Barely scratching the surface of voice and ASR's potential** 

However, despite the potentially game-changing ability to extract rich insights from the analysis of audio data at scale, around 66% of organizations\\*\\* are unable to capture and fully utilize the vast amount of voice and unstructured/ structured data that flows throughout their business daily, preventing them from tapping into valuable AI-driven insights that could help optimize customer experience (CX), improve sales performance, enhance compliance, and drive process efficiencies through automation.

Most often, companies are hindered by data that is siloed and locked away in proprietary systems, with traditional incumbents often charging to export call recordings in batch. Add to this the absence of real-time recording streams and an inability to access 'AI ready' uncompressed voice data, and the result is untimely access to low-quality recordings that impact the accuracy of transcripts which in turn drives sub-par analytics. The ultimate impact is failure to fully optimize ROI from conversational AI investments and the stifling of agile innovation.

## **Overcoming barriers to deliver voice and video analytics at scale**

The good news is that there are ways to overcome issues with the consumption of media across the enterprise to satisfy the demand for accurate, real-time data that fuels customer analysis and enhances competitive advantage. To get the most out of data, organizations should look for a call recording vendor that is able to capture every conversation taking place and not just within siloed departments. They should ensure they have free access to their aggregated voice data sets and the ability to leverage these in transcription engines of their choice whether through an extensive ecosystem of leading AI and ML vendors or their own in-house applications. This methodology will become increasingly important as the capture and real-time routing of data with context becomes table stakes in many leading enterprise operations.

## **Maximizing your voice and AI strategy** 

As data grows exponentially across enterprises and as the capture of conversational data-driven by AI - becomes more broadly focused, organizations should ensure they have the correct foundations in place to maximize the benefits of their voice and AI strategy.  [TIPS TO MAXIMIZE YOU VOICE AND AI STRATEGY](https://www.redboxvoice.com/campaigns/the-secrets-to-maximizing-your-voice-and-ai-strategy-whitepaper) 

\\*Survey conducted by SAPIO Research for Red Box, 2020

\\*\\* 2021 Deepgram State of Automatic Speech Recognition Report`, "html": '<p><em><strong>With voice data increasingly seen as a strategic asset awash with rich insights, timely access to real-time high-quality audio and transcripts for AI engines to reason over is critical.</strong></em>  In fact, the advanced capabilities of speech analytics and associated use-cases are making enterprises wake up to the value held in call recordings, with almost 76%* of C-level executives regarding voice data as \u201Cvaluable\u201D or \u201Cvery valuable\u201D to their organization.  Add to this the 85%** of organizations regarding ASR as \u201Cimportant\u201D to their future AI strategies, it is evident that the value of the spoken word is rising.</p>\n<h2 id="barely-scratching-the-surface-of-voice-and-asrs-potential"><strong>Barely scratching the surface of voice and ASR\u2019s potential</strong></h2>\n<p>However, despite the potentially game-changing ability to extract rich insights from the analysis of audio data at scale, around 66% of organizations** are unable to capture and fully utilize the vast amount of voice and unstructured/ structured data that flows throughout their business daily, preventing them from tapping into valuable AI-driven insights that could help optimize customer experience (CX), improve sales performance, enhance compliance, and drive process efficiencies through automation.</p>\n<p>Most often, companies are hindered by data that is siloed and locked away in proprietary systems, with traditional incumbents often charging to export call recordings in batch. Add to this the absence of real-time recording streams and an inability to access \u2018AI ready\u2019 uncompressed voice data, and the result is untimely access to low-quality recordings that impact the accuracy of transcripts which in turn drives sub-par analytics. The ultimate impact is failure to fully optimize ROI from conversational AI investments and the stifling of agile innovation.</p>\n<h2 id="overcoming-barriers-to-deliver-voice-and-video-analytics-at-scale"><strong>Overcoming barriers to deliver voice and video analytics at scale</strong></h2>\n<p>The good news is that there are ways to overcome issues with the consumption of media across the enterprise to satisfy the demand for accurate, real-time data that fuels customer analysis and enhances competitive advantage. To get the most out of data, organizations should look for a call recording vendor that is able to capture every conversation taking place and not just within siloed departments. They should ensure they have free access to their aggregated voice data sets and the ability to leverage these in transcription engines of their choice whether through an extensive ecosystem of leading AI and ML vendors or their own in-house applications. This methodology will become increasingly important as the capture and real-time routing of data with context becomes table stakes in many leading enterprise operations.</p>\n<h2 id="maximizing-your-voice-and-ai-strategy"><strong>Maximizing your voice and AI strategy</strong></h2>\n<p>As data grows exponentially across enterprises and as the capture of conversational data-driven by AI - becomes more broadly focused, organizations should ensure they have the correct foundations in place to maximize the benefits of their voice and AI strategy.  <a href="https://www.redboxvoice.com/campaigns/the-secrets-to-maximizing-your-voice-and-ai-strategy-whitepaper">TIPS TO MAXIMIZE YOU VOICE AND AI STRATEGY</a></p>\n<p>*Survey conducted by SAPIO Research for Red Box, 2020</p>\n<p>** 2021 Deepgram State of Automatic Speech Recognition Report</p>' };
const frontmatter = { "title": "Real-time routing of conversational data is table stakes for enterprises", "description": "Fuel your companys strategy, insights, and growth with capturing and using the valuable voice data from all your meetings, phone calls, and video conferences.", "date": "2021-07-08T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981377/blog/real-time-routing-of-conversational-data-is-table-stakes-for-enterprises/real-time-routing-convo-data%402x.jpg", "authors": ["richard-stevenson"], "category": "speech-trends", "tags": ["voice-strategy"], "seo": { "title": "Real-time routing of conversational data is table stakes for enterprises", "description": "Fuel your companys strategy, insights, and growth with capturing and using the valuable voice data from all your meetings, phone calls, and video conferences." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981377/blog/real-time-routing-of-conversational-data-is-table-stakes-for-enterprises/real-time-routing-convo-data%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/6e39a74", "twitter": "https://dpgr.am/3dcbc65", "linkedin": "https://dpgr.am/58e1a21", "reddit": "https://dpgr.am/3ea450b", "facebook": "https://dpgr.am/6781440" }, "astro": { "headings": [{ "depth": 2, "slug": "barely-scratching-the-surface-of-voice-and-asrs-potential", "text": "Barely scratching the surface of voice and ASR\u2019s potential" }, { "depth": 2, "slug": "overcoming-barriers-to-deliver-voice-and-video-analytics-at-scale", "text": "Overcoming barriers to deliver voice and video analytics at scale" }, { "depth": 2, "slug": "maximizing-your-voice-and-ai-strategy", "text": "Maximizing your voice and AI strategy" }], "source": `***With voice data increasingly seen as a strategic asset awash with rich insights, timely access to real-time high-quality audio and transcripts for AI engines to reason over is critical.***  In fact, the advanced capabilities of speech analytics and associated use-cases are making enterprises wake up to the value held in call recordings, with almost 76%\\* of C-level executives regarding voice data as "valuable" or "very valuable" to their organization.  Add to this the 85%\\** of organizations regarding ASR as "important" to their future AI strategies, it is evident that the value of the spoken word is rising.

## **Barely scratching the surface of voice and ASR's potential** 

However, despite the potentially game-changing ability to extract rich insights from the analysis of audio data at scale, around 66% of organizations\\*\\* are unable to capture and fully utilize the vast amount of voice and unstructured/ structured data that flows throughout their business daily, preventing them from tapping into valuable AI-driven insights that could help optimize customer experience (CX), improve sales performance, enhance compliance, and drive process efficiencies through automation.

Most often, companies are hindered by data that is siloed and locked away in proprietary systems, with traditional incumbents often charging to export call recordings in batch. Add to this the absence of real-time recording streams and an inability to access 'AI ready' uncompressed voice data, and the result is untimely access to low-quality recordings that impact the accuracy of transcripts which in turn drives sub-par analytics. The ultimate impact is failure to fully optimize ROI from conversational AI investments and the stifling of agile innovation.

## **Overcoming barriers to deliver voice and video analytics at scale**

The good news is that there are ways to overcome issues with the consumption of media across the enterprise to satisfy the demand for accurate, real-time data that fuels customer analysis and enhances competitive advantage. To get the most out of data, organizations should look for a call recording vendor that is able to capture every conversation taking place and not just within siloed departments. They should ensure they have free access to their aggregated voice data sets and the ability to leverage these in transcription engines of their choice whether through an extensive ecosystem of leading AI and ML vendors or their own in-house applications. This methodology will become increasingly important as the capture and real-time routing of data with context becomes table stakes in many leading enterprise operations.

## **Maximizing your voice and AI strategy** 

As data grows exponentially across enterprises and as the capture of conversational data-driven by AI - becomes more broadly focused, organizations should ensure they have the correct foundations in place to maximize the benefits of their voice and AI strategy.  [TIPS TO MAXIMIZE YOU VOICE AND AI STRATEGY](https://www.redboxvoice.com/campaigns/the-secrets-to-maximizing-your-voice-and-ai-strategy-whitepaper) 

\\*Survey conducted by SAPIO Research for Red Box, 2020

\\*\\* 2021 Deepgram State of Automatic Speech Recognition Report`, "html": '<p><em><strong>With voice data increasingly seen as a strategic asset awash with rich insights, timely access to real-time high-quality audio and transcripts for AI engines to reason over is critical.</strong></em>  In fact, the advanced capabilities of speech analytics and associated use-cases are making enterprises wake up to the value held in call recordings, with almost 76%* of C-level executives regarding voice data as \u201Cvaluable\u201D or \u201Cvery valuable\u201D to their organization.  Add to this the 85%** of organizations regarding ASR as \u201Cimportant\u201D to their future AI strategies, it is evident that the value of the spoken word is rising.</p>\n<h2 id="barely-scratching-the-surface-of-voice-and-asrs-potential"><strong>Barely scratching the surface of voice and ASR\u2019s potential</strong></h2>\n<p>However, despite the potentially game-changing ability to extract rich insights from the analysis of audio data at scale, around 66% of organizations** are unable to capture and fully utilize the vast amount of voice and unstructured/ structured data that flows throughout their business daily, preventing them from tapping into valuable AI-driven insights that could help optimize customer experience (CX), improve sales performance, enhance compliance, and drive process efficiencies through automation.</p>\n<p>Most often, companies are hindered by data that is siloed and locked away in proprietary systems, with traditional incumbents often charging to export call recordings in batch. Add to this the absence of real-time recording streams and an inability to access \u2018AI ready\u2019 uncompressed voice data, and the result is untimely access to low-quality recordings that impact the accuracy of transcripts which in turn drives sub-par analytics. The ultimate impact is failure to fully optimize ROI from conversational AI investments and the stifling of agile innovation.</p>\n<h2 id="overcoming-barriers-to-deliver-voice-and-video-analytics-at-scale"><strong>Overcoming barriers to deliver voice and video analytics at scale</strong></h2>\n<p>The good news is that there are ways to overcome issues with the consumption of media across the enterprise to satisfy the demand for accurate, real-time data that fuels customer analysis and enhances competitive advantage. To get the most out of data, organizations should look for a call recording vendor that is able to capture every conversation taking place and not just within siloed departments. They should ensure they have free access to their aggregated voice data sets and the ability to leverage these in transcription engines of their choice whether through an extensive ecosystem of leading AI and ML vendors or their own in-house applications. This methodology will become increasingly important as the capture and real-time routing of data with context becomes table stakes in many leading enterprise operations.</p>\n<h2 id="maximizing-your-voice-and-ai-strategy"><strong>Maximizing your voice and AI strategy</strong></h2>\n<p>As data grows exponentially across enterprises and as the capture of conversational data-driven by AI - becomes more broadly focused, organizations should ensure they have the correct foundations in place to maximize the benefits of their voice and AI strategy.  <a href="https://www.redboxvoice.com/campaigns/the-secrets-to-maximizing-your-voice-and-ai-strategy-whitepaper">TIPS TO MAXIMIZE YOU VOICE AND AI STRATEGY</a></p>\n<p>*Survey conducted by SAPIO Research for Red Box, 2020</p>\n<p>** 2021 Deepgram State of Automatic Speech Recognition Report</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/real-time-routing-of-conversational-data-is-table-stakes-for-enterprises/index.md" };
function rawContent() {
  return `***With voice data increasingly seen as a strategic asset awash with rich insights, timely access to real-time high-quality audio and transcripts for AI engines to reason over is critical.***  In fact, the advanced capabilities of speech analytics and associated use-cases are making enterprises wake up to the value held in call recordings, with almost 76%\\* of C-level executives regarding voice data as "valuable" or "very valuable" to their organization.  Add to this the 85%\\** of organizations regarding ASR as "important" to their future AI strategies, it is evident that the value of the spoken word is rising.

## **Barely scratching the surface of voice and ASR's potential** 

However, despite the potentially game-changing ability to extract rich insights from the analysis of audio data at scale, around 66% of organizations\\*\\* are unable to capture and fully utilize the vast amount of voice and unstructured/ structured data that flows throughout their business daily, preventing them from tapping into valuable AI-driven insights that could help optimize customer experience (CX), improve sales performance, enhance compliance, and drive process efficiencies through automation.

Most often, companies are hindered by data that is siloed and locked away in proprietary systems, with traditional incumbents often charging to export call recordings in batch. Add to this the absence of real-time recording streams and an inability to access 'AI ready' uncompressed voice data, and the result is untimely access to low-quality recordings that impact the accuracy of transcripts which in turn drives sub-par analytics. The ultimate impact is failure to fully optimize ROI from conversational AI investments and the stifling of agile innovation.

## **Overcoming barriers to deliver voice and video analytics at scale**

The good news is that there are ways to overcome issues with the consumption of media across the enterprise to satisfy the demand for accurate, real-time data that fuels customer analysis and enhances competitive advantage. To get the most out of data, organizations should look for a call recording vendor that is able to capture every conversation taking place and not just within siloed departments. They should ensure they have free access to their aggregated voice data sets and the ability to leverage these in transcription engines of their choice whether through an extensive ecosystem of leading AI and ML vendors or their own in-house applications. This methodology will become increasingly important as the capture and real-time routing of data with context becomes table stakes in many leading enterprise operations.

## **Maximizing your voice and AI strategy** 

As data grows exponentially across enterprises and as the capture of conversational data-driven by AI - becomes more broadly focused, organizations should ensure they have the correct foundations in place to maximize the benefits of their voice and AI strategy.  [TIPS TO MAXIMIZE YOU VOICE AND AI STRATEGY](https://www.redboxvoice.com/campaigns/the-secrets-to-maximizing-your-voice-and-ai-strategy-whitepaper) 

\\*Survey conducted by SAPIO Research for Red Box, 2020

\\*\\* 2021 Deepgram State of Automatic Speech Recognition Report`;
}
function compiledContent() {
  return '<p><em><strong>With voice data increasingly seen as a strategic asset awash with rich insights, timely access to real-time high-quality audio and transcripts for AI engines to reason over is critical.</strong></em>  In fact, the advanced capabilities of speech analytics and associated use-cases are making enterprises wake up to the value held in call recordings, with almost 76%* of C-level executives regarding voice data as \u201Cvaluable\u201D or \u201Cvery valuable\u201D to their organization.  Add to this the 85%** of organizations regarding ASR as \u201Cimportant\u201D to their future AI strategies, it is evident that the value of the spoken word is rising.</p>\n<h2 id="barely-scratching-the-surface-of-voice-and-asrs-potential"><strong>Barely scratching the surface of voice and ASR\u2019s potential</strong></h2>\n<p>However, despite the potentially game-changing ability to extract rich insights from the analysis of audio data at scale, around 66% of organizations** are unable to capture and fully utilize the vast amount of voice and unstructured/ structured data that flows throughout their business daily, preventing them from tapping into valuable AI-driven insights that could help optimize customer experience (CX), improve sales performance, enhance compliance, and drive process efficiencies through automation.</p>\n<p>Most often, companies are hindered by data that is siloed and locked away in proprietary systems, with traditional incumbents often charging to export call recordings in batch. Add to this the absence of real-time recording streams and an inability to access \u2018AI ready\u2019 uncompressed voice data, and the result is untimely access to low-quality recordings that impact the accuracy of transcripts which in turn drives sub-par analytics. The ultimate impact is failure to fully optimize ROI from conversational AI investments and the stifling of agile innovation.</p>\n<h2 id="overcoming-barriers-to-deliver-voice-and-video-analytics-at-scale"><strong>Overcoming barriers to deliver voice and video analytics at scale</strong></h2>\n<p>The good news is that there are ways to overcome issues with the consumption of media across the enterprise to satisfy the demand for accurate, real-time data that fuels customer analysis and enhances competitive advantage. To get the most out of data, organizations should look for a call recording vendor that is able to capture every conversation taking place and not just within siloed departments. They should ensure they have free access to their aggregated voice data sets and the ability to leverage these in transcription engines of their choice whether through an extensive ecosystem of leading AI and ML vendors or their own in-house applications. This methodology will become increasingly important as the capture and real-time routing of data with context becomes table stakes in many leading enterprise operations.</p>\n<h2 id="maximizing-your-voice-and-ai-strategy"><strong>Maximizing your voice and AI strategy</strong></h2>\n<p>As data grows exponentially across enterprises and as the capture of conversational data-driven by AI - becomes more broadly focused, organizations should ensure they have the correct foundations in place to maximize the benefits of their voice and AI strategy.  <a href="https://www.redboxvoice.com/campaigns/the-secrets-to-maximizing-your-voice-and-ai-strategy-whitepaper">TIPS TO MAXIMIZE YOU VOICE AND AI STRATEGY</a></p>\n<p>*Survey conducted by SAPIO Research for Red Box, 2020</p>\n<p>** 2021 Deepgram State of Automatic Speech Recognition Report</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/real-time-routing-of-conversational-data-is-table-stakes-for-enterprises/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p><em><strong>With voice data increasingly seen as a strategic asset awash with rich insights, timely access to real-time high-quality audio and transcripts for AI engines to reason over is critical.</strong></em>  In fact, the advanced capabilities of speech analytics and associated use-cases are making enterprises wake up to the value held in call recordings, with almost 76%* of C-level executives regarding voice data as “valuable” or “very valuable” to their organization.  Add to this the 85%** of organizations regarding ASR as “important” to their future AI strategies, it is evident that the value of the spoken word is rising.</p>
<h2 id="barely-scratching-the-surface-of-voice-and-asrs-potential"><strong>Barely scratching the surface of voice and ASR’s potential</strong></h2>
<p>However, despite the potentially game-changing ability to extract rich insights from the analysis of audio data at scale, around 66% of organizations** are unable to capture and fully utilize the vast amount of voice and unstructured/ structured data that flows throughout their business daily, preventing them from tapping into valuable AI-driven insights that could help optimize customer experience (CX), improve sales performance, enhance compliance, and drive process efficiencies through automation.</p>
<p>Most often, companies are hindered by data that is siloed and locked away in proprietary systems, with traditional incumbents often charging to export call recordings in batch. Add to this the absence of real-time recording streams and an inability to access ‘AI ready’ uncompressed voice data, and the result is untimely access to low-quality recordings that impact the accuracy of transcripts which in turn drives sub-par analytics. The ultimate impact is failure to fully optimize ROI from conversational AI investments and the stifling of agile innovation.</p>
<h2 id="overcoming-barriers-to-deliver-voice-and-video-analytics-at-scale"><strong>Overcoming barriers to deliver voice and video analytics at scale</strong></h2>
<p>The good news is that there are ways to overcome issues with the consumption of media across the enterprise to satisfy the demand for accurate, real-time data that fuels customer analysis and enhances competitive advantage. To get the most out of data, organizations should look for a call recording vendor that is able to capture every conversation taking place and not just within siloed departments. They should ensure they have free access to their aggregated voice data sets and the ability to leverage these in transcription engines of their choice whether through an extensive ecosystem of leading AI and ML vendors or their own in-house applications. This methodology will become increasingly important as the capture and real-time routing of data with context becomes table stakes in many leading enterprise operations.</p>
<h2 id="maximizing-your-voice-and-ai-strategy"><strong>Maximizing your voice and AI strategy</strong></h2>
<p>As data grows exponentially across enterprises and as the capture of conversational data-driven by AI - becomes more broadly focused, organizations should ensure they have the correct foundations in place to maximize the benefits of their voice and AI strategy.  <a href="https://www.redboxvoice.com/campaigns/the-secrets-to-maximizing-your-voice-and-ai-strategy-whitepaper">TIPS TO MAXIMIZE YOU VOICE AND AI STRATEGY</a></p>
<p>*Survey conducted by SAPIO Research for Red Box, 2020</p>
<p>** 2021 Deepgram State of Automatic Speech Recognition Report</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/real-time-routing-of-conversational-data-is-table-stakes-for-enterprises/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
