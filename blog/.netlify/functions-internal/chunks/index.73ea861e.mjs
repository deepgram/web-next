import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderComponent } from '../entry.mjs';
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

const metadata = { "headings": [{ "depth": 2, "slug": "how-to-test-an-asr-solution", "text": "How to test an ASR Solution?" }, { "depth": 3, "slug": "step-1-select-50-randomly-sampled-audio-files-that-are-representative-of-the-audio-your-company-encounters", "text": "Step 1: Select 50 randomly sampled audio files that are representative of the audio your company encounters" }, { "depth": 3, "slug": "step-2-send-the-same-50-one-minute-clips-to-each-of-the-speech-vendors-that-you-are-considering-to-test-the-output-of-their-apis", "text": "Step 2: Send the same 50 one-minute clips to each of the speech vendors that you are considering to test the output of their APIs" }, { "depth": 3, "slug": "step-3-receive-the-text-outputs-and-normalize-them-for-the-choices-that-an-asr-company-makes-with-their-out-of-the-box-transcripts", "text": "Step 3: Receive the text outputs and normalize them for the \u201Cchoices\u201D that an ASR company makes with their out-of-the-box transcripts" }, { "depth": 3, "slug": "step-4-do-a-word-error-rate-wer-comparison-on-the-files", "text": "Step 4: Do a Word Error Rate (WER) comparison on the files" }, { "depth": 3, "slug": "step-5-make-a-visual-representation-of-what-was-wrong", "text": "Step 5: Make a visual representation of what was wrong" }, { "depth": 2, "slug": "next-steps", "text": "Next Steps" }], "source": `Selecting the best [ASR](https://blog.deepgram.com/what-is-asr/) option for your company is an important decision. While the bulk of this article is an educational piece on how to most effectively test for ASR providers, the first step when making an important buying decision is identifying your priorities:

1. What do you want?
2. What do you need?
3. What doesn't matter?

Besides what was discussed in the tip sheet, **[How to Vet an Automatic Speech Recognition Solution Provider?](https://offers.deepgram.com/hubfs/Collateral/How-to-Vet-an-ASR-Provider.pdf)**, here are some other features you should also consider:

1. Speed - How fast is your batch transcription?  How fast is your real-time transcription?
2. Multi-channel support - Do you support multi-channel audio or only single channel?
3. Speaker separation - Can you separate the speakers; i.e. speaker 1 or speaker 2, even for non-stereo applications?
4. Deep search - Can you search the audio for find specific words or phrases to listen and review; not search the transcription?

Getting a sense of what features your company might need before starting talks with providers will help you avoid the common trap of relying purely on accuracy rate. Otherwise, you'll likely find yourself having this conversation:

> **Buyer**: "We've been looking at a couple ASR providers...what's your accuracy rate?" **ASR Provider**: "Fantastic. On an academic data set that is publicly known, we claim a 95% accuracy rate." **Buyer**: "That sounds great! But how does that relate to our audio data?" **ASR Provider**:"Trust me, we'll do great on that too!" **Buyer**: "Hmm..."

For a long time, ASR companies have avoided doing real comparisons on company specific audio data by focusing marketing dollars and sales narratives on impressive outcomes from public datasets. ([Like new advances on word error rates](https://blog.deepgram.com/the-trouble-with-wer/)). By distracting companies from the fact that gamed success statistics don't translate to real world applications, ASR providers have been able to trick companies into buying a car without test driving it first. So, what is the best way to actually test drive and walk away with a great deal?

## How to test an ASR Solution?

With the goal of getting the truth and investing as little effort as possible, here are optimal guidelines for testing speech recognition providers in an apples to apples accuracy comparison:

### **Step 1: Select 50 randomly sampled audio files that are representative of the audio your company encounters**

Do:

1. Use meeting recordings if your goal is to transcribe meetings
2. Use voicemails if the goal is to transcribe voicemails
3. Use audio with accents if your audio will have speakers with accents

Don't:

1. Record yourself talking into your computer
2. Use a random YouTube video
3. Test out your favorite podcast or broadcast audio
4. Use a song

Pay humans to transcribe one minute from each of these files. This effort should cost $100 or less and will serve as the truth of all truths for all the ASR providers you'll be comparing. You can easily find transcriptionists using Rev.com or Upwork.

### **Step 2: Send the same 50 one-minute clips to each of the speech vendors that you are considering to test the output of their APIs**

Take note of what each provider deems an acceptable audio format and how it fits into your list of considerations from earlier.

### **Step 3: Receive the text outputs and normalize them** for the "choices" that an ASR company makes with their out-of-the-box transcripts

<ul>
<li>How are phone numbers transcribed?</li>
<ul>
<li> - 905-678-1234?</li>
<li> - nine zero five six seven eight one two three four?</li>
<li> - 9 0 5 6 7 8 1 2 3 4?</li>

</ul>
<li>Are outputs punctuated and capitalized?</li>
</ul>

### **Step 4: Do a Word Error Rate (WER) comparison on the files**

[Word Error Rate (WER)](https://blog.deepgram.com/what-is-word-error-rate/) will give you a sense of the overall accuracy of the transcripts, but don't just look at the number. You also want to look at *where* the output was wrong and *why* the output was wrong. This includes what words were incorrectly added, omitted, or simply misinterpreted.

### **Step 5: Make a visual representation of what was wrong**

* Who is getting the *important* words right vs. wrong?
* Whose outputs are the most legible?

## Next Steps

At this point, you will know where each ASR provider stands from a general accuracy perspective on audio representative of your use case. Next, consider the other variables in **[How to Vet an Automatic Speech Recognition Solution Provider?](https://offers.deepgram.com/how-to-vet-an-asr-provider-thank-you)** and drill down on accuracy improvements with keywords, libraries, reprogramming, and custom training. With a good handle on where each competitor stands in terms all these variables, you can confidently go into pricing conversations and make better decisions for your business. If you're ready to compare Deepgram's AI Speech Platform with other ASR providers, [contact us](https://www.deepgram.com/contact-us).

<WhitepaperPromo whitepaper="latest"></WhitepaperPromo>
`, "html": '<p>Selecting the best <a href="https://blog.deepgram.com/what-is-asr/">ASR</a> option for your company is an important decision. While the bulk of this article is an educational piece on how to most effectively test for ASR providers, the first step when making an important buying decision is identifying your priorities:</p>\n<ol>\n<li>What do you want?</li>\n<li>What do you need?</li>\n<li>What doesn\u2019t matter?</li>\n</ol>\n<p>Besides what was discussed in the tip sheet, <strong><a href="https://offers.deepgram.com/hubfs/Collateral/How-to-Vet-an-ASR-Provider.pdf">How to Vet an Automatic Speech Recognition Solution Provider?</a></strong>, here are some other features you should also consider:</p>\n<ol>\n<li>Speed - How fast is your batch transcription?  How fast is your real-time transcription?</li>\n<li>Multi-channel support - Do you support multi-channel audio or only single channel?</li>\n<li>Speaker separation - Can you separate the speakers; i.e. speaker 1 or speaker 2, even for non-stereo applications?</li>\n<li>Deep search - Can you search the audio for find specific words or phrases to listen and review; not search the transcription?</li>\n</ol>\n<p>Getting a sense of what features your company might need before starting talks with providers will help you avoid the common trap of relying purely on accuracy rate. Otherwise, you\u2019ll likely find yourself having this conversation:</p>\n<blockquote>\n<p><strong>Buyer</strong>: \u201CWe\u2019ve been looking at a couple ASR providers\u2026what\u2019s your accuracy rate?\u201D <strong>ASR Provider</strong>: \u201CFantastic. On an academic data set that is publicly known, we claim a 95% accuracy rate.\u201D <strong>Buyer</strong>: \u201CThat sounds great! But how does that relate to our audio data?\u201D <strong>ASR Provider</strong>:\u201CTrust me, we\u2019ll do great on that too!\u201D <strong>Buyer</strong>: \u201CHmm\u2026\u201D</p>\n</blockquote>\n<p>For a long time, ASR companies have avoided doing real comparisons on company specific audio data by focusing marketing dollars and sales narratives on impressive outcomes from public datasets. (<a href="https://blog.deepgram.com/the-trouble-with-wer/">Like new advances on word error rates</a>). By distracting companies from the fact that gamed success statistics don\u2019t translate to real world applications, ASR providers have been able to trick companies into buying a car without test driving it first. So, what is the best way to actually test drive and walk away with a great deal?</p>\n<h2 id="how-to-test-an-asr-solution">How to test an ASR Solution?</h2>\n<p>With the goal of getting the truth and investing as little effort as possible, here are optimal guidelines for testing speech recognition providers in an apples to apples accuracy comparison:</p>\n<h3 id="step-1-select-50-randomly-sampled-audio-files-that-are-representative-of-the-audio-your-company-encounters"><strong>Step 1: Select 50 randomly sampled audio files that are representative of the audio your company encounters</strong></h3>\n<p>Do:</p>\n<ol>\n<li>Use meeting recordings if your goal is to transcribe meetings</li>\n<li>Use voicemails if the goal is to transcribe voicemails</li>\n<li>Use audio with accents if your audio will have speakers with accents</li>\n</ol>\n<p>Don\u2019t:</p>\n<ol>\n<li>Record yourself talking into your computer</li>\n<li>Use a random YouTube video</li>\n<li>Test out your favorite podcast or broadcast audio</li>\n<li>Use a song</li>\n</ol>\n<p>Pay humans to transcribe one minute from each of these files. This effort should cost $100 or less and will serve as the truth of all truths for all the ASR providers you\u2019ll be comparing. You can easily find transcriptionists using Rev.com or Upwork.</p>\n<h3 id="step-2-send-the-same-50-one-minute-clips-to-each-of-the-speech-vendors-that-you-are-considering-to-test-the-output-of-their-apis"><strong>Step 2: Send the same 50 one-minute clips to each of the speech vendors that you are considering to test the output of their APIs</strong></h3>\n<p>Take note of what each provider deems an acceptable audio format and how it fits into your list of considerations from earlier.</p>\n<h3 id="step-3-receive-the-text-outputs-and-normalize-them-for-the-choices-that-an-asr-company-makes-with-their-out-of-the-box-transcripts"><strong>Step 3: Receive the text outputs and normalize them</strong> for the \u201Cchoices\u201D that an ASR company makes with their out-of-the-box transcripts</h3>\n<ul><li>How are phone numbers transcribed?</li><ul><li> - 905-678-1234?</li>\n<li> - nine zero five six seven eight one two three four?</li>\n<li> - 9 0 5 6 7 8 1 2 3 4?</li></ul><li>Are outputs punctuated and capitalized?</li></ul>\n<h3 id="step-4-do-a-word-error-rate-wer-comparison-on-the-files"><strong>Step 4: Do a Word Error Rate (WER) comparison on the files</strong></h3>\n<p><a href="https://blog.deepgram.com/what-is-word-error-rate/">Word Error Rate (WER)</a> will give you a sense of the overall accuracy of the transcripts, but don\u2019t just look at the number. You also want to look at <em>where</em> the output was wrong and <em>why</em> the output was wrong. This includes what words were incorrectly added, omitted, or simply misinterpreted.</p>\n<h3 id="step-5-make-a-visual-representation-of-what-was-wrong"><strong>Step 5: Make a visual representation of what was wrong</strong></h3>\n<ul>\n<li>Who is getting the <em>important</em> words right vs. wrong?</li>\n<li>Whose outputs are the most legible?</li>\n</ul>\n<h2 id="next-steps">Next Steps</h2>\n<p>At this point, you will know where each ASR provider stands from a general accuracy perspective on audio representative of your use case. Next, consider the other variables in <strong><a href="https://offers.deepgram.com/how-to-vet-an-asr-provider-thank-you">How to Vet an Automatic Speech Recognition Solution Provider?</a></strong> and drill down on accuracy improvements with keywords, libraries, reprogramming, and custom training. With a good handle on where each competitor stands in terms all these variables, you can confidently go into pricing conversations and make better decisions for your business. If you\u2019re ready to compare Deepgram\u2019s AI Speech Platform with other ASR providers, <a href="https://www.deepgram.com/contact-us">contact us</a>.</p>\n<WhitepaperPromo whitepaper="latest" />' };
const frontmatter = { "title": "How to Test Automatic Speech Recognition (ASR) Providers For Your Business", "description": "Learn how to test various ASR providers and the variables to consider to truly vet an ASR provider", "date": "2021-03-03T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981357/blog/how-to-test-automatic-speech-recognition-asr-providers-for-your-business/how-to-test-asr-providers%402x.jpg", "authors": ["scott-stephenson"], "category": "ai-and-engineering", "tags": ["education"], "seo": { "title": "How to Test Automatic Speech Recognition (ASR) Providers For Your Business", "description": "Learn how to test various ASR providers and the variables to consider to truly vet an ASR provider" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981357/blog/how-to-test-automatic-speech-recognition-asr-providers-for-your-business/how-to-test-asr-providers%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/9503902", "twitter": "https://dpgr.am/5452614", "linkedin": "https://dpgr.am/24d5b7c", "reddit": "https://dpgr.am/46dd6c6", "facebook": "https://dpgr.am/ebd4cf1" }, "astro": { "headings": [{ "depth": 2, "slug": "how-to-test-an-asr-solution", "text": "How to test an ASR Solution?" }, { "depth": 3, "slug": "step-1-select-50-randomly-sampled-audio-files-that-are-representative-of-the-audio-your-company-encounters", "text": "Step 1: Select 50 randomly sampled audio files that are representative of the audio your company encounters" }, { "depth": 3, "slug": "step-2-send-the-same-50-one-minute-clips-to-each-of-the-speech-vendors-that-you-are-considering-to-test-the-output-of-their-apis", "text": "Step 2: Send the same 50 one-minute clips to each of the speech vendors that you are considering to test the output of their APIs" }, { "depth": 3, "slug": "step-3-receive-the-text-outputs-and-normalize-them-for-the-choices-that-an-asr-company-makes-with-their-out-of-the-box-transcripts", "text": "Step 3: Receive the text outputs and normalize them for the \u201Cchoices\u201D that an ASR company makes with their out-of-the-box transcripts" }, { "depth": 3, "slug": "step-4-do-a-word-error-rate-wer-comparison-on-the-files", "text": "Step 4: Do a Word Error Rate (WER) comparison on the files" }, { "depth": 3, "slug": "step-5-make-a-visual-representation-of-what-was-wrong", "text": "Step 5: Make a visual representation of what was wrong" }, { "depth": 2, "slug": "next-steps", "text": "Next Steps" }], "source": `Selecting the best [ASR](https://blog.deepgram.com/what-is-asr/) option for your company is an important decision. While the bulk of this article is an educational piece on how to most effectively test for ASR providers, the first step when making an important buying decision is identifying your priorities:

1. What do you want?
2. What do you need?
3. What doesn't matter?

Besides what was discussed in the tip sheet, **[How to Vet an Automatic Speech Recognition Solution Provider?](https://offers.deepgram.com/hubfs/Collateral/How-to-Vet-an-ASR-Provider.pdf)**, here are some other features you should also consider:

1. Speed - How fast is your batch transcription?  How fast is your real-time transcription?
2. Multi-channel support - Do you support multi-channel audio or only single channel?
3. Speaker separation - Can you separate the speakers; i.e. speaker 1 or speaker 2, even for non-stereo applications?
4. Deep search - Can you search the audio for find specific words or phrases to listen and review; not search the transcription?

Getting a sense of what features your company might need before starting talks with providers will help you avoid the common trap of relying purely on accuracy rate. Otherwise, you'll likely find yourself having this conversation:

> **Buyer**: "We've been looking at a couple ASR providers...what's your accuracy rate?" **ASR Provider**: "Fantastic. On an academic data set that is publicly known, we claim a 95% accuracy rate." **Buyer**: "That sounds great! But how does that relate to our audio data?" **ASR Provider**:"Trust me, we'll do great on that too!" **Buyer**: "Hmm..."

For a long time, ASR companies have avoided doing real comparisons on company specific audio data by focusing marketing dollars and sales narratives on impressive outcomes from public datasets. ([Like new advances on word error rates](https://blog.deepgram.com/the-trouble-with-wer/)). By distracting companies from the fact that gamed success statistics don't translate to real world applications, ASR providers have been able to trick companies into buying a car without test driving it first. So, what is the best way to actually test drive and walk away with a great deal?

## How to test an ASR Solution?

With the goal of getting the truth and investing as little effort as possible, here are optimal guidelines for testing speech recognition providers in an apples to apples accuracy comparison:

### **Step 1: Select 50 randomly sampled audio files that are representative of the audio your company encounters**

Do:

1. Use meeting recordings if your goal is to transcribe meetings
2. Use voicemails if the goal is to transcribe voicemails
3. Use audio with accents if your audio will have speakers with accents

Don't:

1. Record yourself talking into your computer
2. Use a random YouTube video
3. Test out your favorite podcast or broadcast audio
4. Use a song

Pay humans to transcribe one minute from each of these files. This effort should cost $100 or less and will serve as the truth of all truths for all the ASR providers you'll be comparing. You can easily find transcriptionists using Rev.com or Upwork.

### **Step 2: Send the same 50 one-minute clips to each of the speech vendors that you are considering to test the output of their APIs**

Take note of what each provider deems an acceptable audio format and how it fits into your list of considerations from earlier.

### **Step 3: Receive the text outputs and normalize them** for the "choices" that an ASR company makes with their out-of-the-box transcripts

<ul>
<li>How are phone numbers transcribed?</li>
<ul>
<li> - 905-678-1234?</li>
<li> - nine zero five six seven eight one two three four?</li>
<li> - 9 0 5 6 7 8 1 2 3 4?</li>

</ul>
<li>Are outputs punctuated and capitalized?</li>
</ul>

### **Step 4: Do a Word Error Rate (WER) comparison on the files**

[Word Error Rate (WER)](https://blog.deepgram.com/what-is-word-error-rate/) will give you a sense of the overall accuracy of the transcripts, but don't just look at the number. You also want to look at *where* the output was wrong and *why* the output was wrong. This includes what words were incorrectly added, omitted, or simply misinterpreted.

### **Step 5: Make a visual representation of what was wrong**

* Who is getting the *important* words right vs. wrong?
* Whose outputs are the most legible?

## Next Steps

At this point, you will know where each ASR provider stands from a general accuracy perspective on audio representative of your use case. Next, consider the other variables in **[How to Vet an Automatic Speech Recognition Solution Provider?](https://offers.deepgram.com/how-to-vet-an-asr-provider-thank-you)** and drill down on accuracy improvements with keywords, libraries, reprogramming, and custom training. With a good handle on where each competitor stands in terms all these variables, you can confidently go into pricing conversations and make better decisions for your business. If you're ready to compare Deepgram's AI Speech Platform with other ASR providers, [contact us](https://www.deepgram.com/contact-us).

<WhitepaperPromo whitepaper="latest"></WhitepaperPromo>
`, "html": '<p>Selecting the best <a href="https://blog.deepgram.com/what-is-asr/">ASR</a> option for your company is an important decision. While the bulk of this article is an educational piece on how to most effectively test for ASR providers, the first step when making an important buying decision is identifying your priorities:</p>\n<ol>\n<li>What do you want?</li>\n<li>What do you need?</li>\n<li>What doesn\u2019t matter?</li>\n</ol>\n<p>Besides what was discussed in the tip sheet, <strong><a href="https://offers.deepgram.com/hubfs/Collateral/How-to-Vet-an-ASR-Provider.pdf">How to Vet an Automatic Speech Recognition Solution Provider?</a></strong>, here are some other features you should also consider:</p>\n<ol>\n<li>Speed - How fast is your batch transcription?  How fast is your real-time transcription?</li>\n<li>Multi-channel support - Do you support multi-channel audio or only single channel?</li>\n<li>Speaker separation - Can you separate the speakers; i.e. speaker 1 or speaker 2, even for non-stereo applications?</li>\n<li>Deep search - Can you search the audio for find specific words or phrases to listen and review; not search the transcription?</li>\n</ol>\n<p>Getting a sense of what features your company might need before starting talks with providers will help you avoid the common trap of relying purely on accuracy rate. Otherwise, you\u2019ll likely find yourself having this conversation:</p>\n<blockquote>\n<p><strong>Buyer</strong>: \u201CWe\u2019ve been looking at a couple ASR providers\u2026what\u2019s your accuracy rate?\u201D <strong>ASR Provider</strong>: \u201CFantastic. On an academic data set that is publicly known, we claim a 95% accuracy rate.\u201D <strong>Buyer</strong>: \u201CThat sounds great! But how does that relate to our audio data?\u201D <strong>ASR Provider</strong>:\u201CTrust me, we\u2019ll do great on that too!\u201D <strong>Buyer</strong>: \u201CHmm\u2026\u201D</p>\n</blockquote>\n<p>For a long time, ASR companies have avoided doing real comparisons on company specific audio data by focusing marketing dollars and sales narratives on impressive outcomes from public datasets. (<a href="https://blog.deepgram.com/the-trouble-with-wer/">Like new advances on word error rates</a>). By distracting companies from the fact that gamed success statistics don\u2019t translate to real world applications, ASR providers have been able to trick companies into buying a car without test driving it first. So, what is the best way to actually test drive and walk away with a great deal?</p>\n<h2 id="how-to-test-an-asr-solution">How to test an ASR Solution?</h2>\n<p>With the goal of getting the truth and investing as little effort as possible, here are optimal guidelines for testing speech recognition providers in an apples to apples accuracy comparison:</p>\n<h3 id="step-1-select-50-randomly-sampled-audio-files-that-are-representative-of-the-audio-your-company-encounters"><strong>Step 1: Select 50 randomly sampled audio files that are representative of the audio your company encounters</strong></h3>\n<p>Do:</p>\n<ol>\n<li>Use meeting recordings if your goal is to transcribe meetings</li>\n<li>Use voicemails if the goal is to transcribe voicemails</li>\n<li>Use audio with accents if your audio will have speakers with accents</li>\n</ol>\n<p>Don\u2019t:</p>\n<ol>\n<li>Record yourself talking into your computer</li>\n<li>Use a random YouTube video</li>\n<li>Test out your favorite podcast or broadcast audio</li>\n<li>Use a song</li>\n</ol>\n<p>Pay humans to transcribe one minute from each of these files. This effort should cost $100 or less and will serve as the truth of all truths for all the ASR providers you\u2019ll be comparing. You can easily find transcriptionists using Rev.com or Upwork.</p>\n<h3 id="step-2-send-the-same-50-one-minute-clips-to-each-of-the-speech-vendors-that-you-are-considering-to-test-the-output-of-their-apis"><strong>Step 2: Send the same 50 one-minute clips to each of the speech vendors that you are considering to test the output of their APIs</strong></h3>\n<p>Take note of what each provider deems an acceptable audio format and how it fits into your list of considerations from earlier.</p>\n<h3 id="step-3-receive-the-text-outputs-and-normalize-them-for-the-choices-that-an-asr-company-makes-with-their-out-of-the-box-transcripts"><strong>Step 3: Receive the text outputs and normalize them</strong> for the \u201Cchoices\u201D that an ASR company makes with their out-of-the-box transcripts</h3>\n<ul><li>How are phone numbers transcribed?</li><ul><li> - 905-678-1234?</li>\n<li> - nine zero five six seven eight one two three four?</li>\n<li> - 9 0 5 6 7 8 1 2 3 4?</li></ul><li>Are outputs punctuated and capitalized?</li></ul>\n<h3 id="step-4-do-a-word-error-rate-wer-comparison-on-the-files"><strong>Step 4: Do a Word Error Rate (WER) comparison on the files</strong></h3>\n<p><a href="https://blog.deepgram.com/what-is-word-error-rate/">Word Error Rate (WER)</a> will give you a sense of the overall accuracy of the transcripts, but don\u2019t just look at the number. You also want to look at <em>where</em> the output was wrong and <em>why</em> the output was wrong. This includes what words were incorrectly added, omitted, or simply misinterpreted.</p>\n<h3 id="step-5-make-a-visual-representation-of-what-was-wrong"><strong>Step 5: Make a visual representation of what was wrong</strong></h3>\n<ul>\n<li>Who is getting the <em>important</em> words right vs. wrong?</li>\n<li>Whose outputs are the most legible?</li>\n</ul>\n<h2 id="next-steps">Next Steps</h2>\n<p>At this point, you will know where each ASR provider stands from a general accuracy perspective on audio representative of your use case. Next, consider the other variables in <strong><a href="https://offers.deepgram.com/how-to-vet-an-asr-provider-thank-you">How to Vet an Automatic Speech Recognition Solution Provider?</a></strong> and drill down on accuracy improvements with keywords, libraries, reprogramming, and custom training. With a good handle on where each competitor stands in terms all these variables, you can confidently go into pricing conversations and make better decisions for your business. If you\u2019re ready to compare Deepgram\u2019s AI Speech Platform with other ASR providers, <a href="https://www.deepgram.com/contact-us">contact us</a>.</p>\n<WhitepaperPromo whitepaper="latest" />' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/how-to-test-automatic-speech-recognition-asr-providers-for-your-business/index.md" };
function rawContent() {
  return `Selecting the best [ASR](https://blog.deepgram.com/what-is-asr/) option for your company is an important decision. While the bulk of this article is an educational piece on how to most effectively test for ASR providers, the first step when making an important buying decision is identifying your priorities:

1. What do you want?
2. What do you need?
3. What doesn't matter?

Besides what was discussed in the tip sheet, **[How to Vet an Automatic Speech Recognition Solution Provider?](https://offers.deepgram.com/hubfs/Collateral/How-to-Vet-an-ASR-Provider.pdf)**, here are some other features you should also consider:

1. Speed - How fast is your batch transcription?  How fast is your real-time transcription?
2. Multi-channel support - Do you support multi-channel audio or only single channel?
3. Speaker separation - Can you separate the speakers; i.e. speaker 1 or speaker 2, even for non-stereo applications?
4. Deep search - Can you search the audio for find specific words or phrases to listen and review; not search the transcription?

Getting a sense of what features your company might need before starting talks with providers will help you avoid the common trap of relying purely on accuracy rate. Otherwise, you'll likely find yourself having this conversation:

> **Buyer**: "We've been looking at a couple ASR providers...what's your accuracy rate?" **ASR Provider**: "Fantastic. On an academic data set that is publicly known, we claim a 95% accuracy rate." **Buyer**: "That sounds great! But how does that relate to our audio data?" **ASR Provider**:"Trust me, we'll do great on that too!" **Buyer**: "Hmm..."

For a long time, ASR companies have avoided doing real comparisons on company specific audio data by focusing marketing dollars and sales narratives on impressive outcomes from public datasets. ([Like new advances on word error rates](https://blog.deepgram.com/the-trouble-with-wer/)). By distracting companies from the fact that gamed success statistics don't translate to real world applications, ASR providers have been able to trick companies into buying a car without test driving it first. So, what is the best way to actually test drive and walk away with a great deal?

## How to test an ASR Solution?

With the goal of getting the truth and investing as little effort as possible, here are optimal guidelines for testing speech recognition providers in an apples to apples accuracy comparison:

### **Step 1: Select 50 randomly sampled audio files that are representative of the audio your company encounters**

Do:

1. Use meeting recordings if your goal is to transcribe meetings
2. Use voicemails if the goal is to transcribe voicemails
3. Use audio with accents if your audio will have speakers with accents

Don't:

1. Record yourself talking into your computer
2. Use a random YouTube video
3. Test out your favorite podcast or broadcast audio
4. Use a song

Pay humans to transcribe one minute from each of these files. This effort should cost $100 or less and will serve as the truth of all truths for all the ASR providers you'll be comparing. You can easily find transcriptionists using Rev.com or Upwork.

### **Step 2: Send the same 50 one-minute clips to each of the speech vendors that you are considering to test the output of their APIs**

Take note of what each provider deems an acceptable audio format and how it fits into your list of considerations from earlier.

### **Step 3: Receive the text outputs and normalize them** for the "choices" that an ASR company makes with their out-of-the-box transcripts

<ul>
<li>How are phone numbers transcribed?</li>
<ul>
<li> - 905-678-1234?</li>
<li> - nine zero five six seven eight one two three four?</li>
<li> - 9 0 5 6 7 8 1 2 3 4?</li>

</ul>
<li>Are outputs punctuated and capitalized?</li>
</ul>

### **Step 4: Do a Word Error Rate (WER) comparison on the files**

[Word Error Rate (WER)](https://blog.deepgram.com/what-is-word-error-rate/) will give you a sense of the overall accuracy of the transcripts, but don't just look at the number. You also want to look at *where* the output was wrong and *why* the output was wrong. This includes what words were incorrectly added, omitted, or simply misinterpreted.

### **Step 5: Make a visual representation of what was wrong**

* Who is getting the *important* words right vs. wrong?
* Whose outputs are the most legible?

## Next Steps

At this point, you will know where each ASR provider stands from a general accuracy perspective on audio representative of your use case. Next, consider the other variables in **[How to Vet an Automatic Speech Recognition Solution Provider?](https://offers.deepgram.com/how-to-vet-an-asr-provider-thank-you)** and drill down on accuracy improvements with keywords, libraries, reprogramming, and custom training. With a good handle on where each competitor stands in terms all these variables, you can confidently go into pricing conversations and make better decisions for your business. If you're ready to compare Deepgram's AI Speech Platform with other ASR providers, [contact us](https://www.deepgram.com/contact-us).

<WhitepaperPromo whitepaper="latest"></WhitepaperPromo>
`;
}
function compiledContent() {
  return '<p>Selecting the best <a href="https://blog.deepgram.com/what-is-asr/">ASR</a> option for your company is an important decision. While the bulk of this article is an educational piece on how to most effectively test for ASR providers, the first step when making an important buying decision is identifying your priorities:</p>\n<ol>\n<li>What do you want?</li>\n<li>What do you need?</li>\n<li>What doesn\u2019t matter?</li>\n</ol>\n<p>Besides what was discussed in the tip sheet, <strong><a href="https://offers.deepgram.com/hubfs/Collateral/How-to-Vet-an-ASR-Provider.pdf">How to Vet an Automatic Speech Recognition Solution Provider?</a></strong>, here are some other features you should also consider:</p>\n<ol>\n<li>Speed - How fast is your batch transcription?  How fast is your real-time transcription?</li>\n<li>Multi-channel support - Do you support multi-channel audio or only single channel?</li>\n<li>Speaker separation - Can you separate the speakers; i.e. speaker 1 or speaker 2, even for non-stereo applications?</li>\n<li>Deep search - Can you search the audio for find specific words or phrases to listen and review; not search the transcription?</li>\n</ol>\n<p>Getting a sense of what features your company might need before starting talks with providers will help you avoid the common trap of relying purely on accuracy rate. Otherwise, you\u2019ll likely find yourself having this conversation:</p>\n<blockquote>\n<p><strong>Buyer</strong>: \u201CWe\u2019ve been looking at a couple ASR providers\u2026what\u2019s your accuracy rate?\u201D <strong>ASR Provider</strong>: \u201CFantastic. On an academic data set that is publicly known, we claim a 95% accuracy rate.\u201D <strong>Buyer</strong>: \u201CThat sounds great! But how does that relate to our audio data?\u201D <strong>ASR Provider</strong>:\u201CTrust me, we\u2019ll do great on that too!\u201D <strong>Buyer</strong>: \u201CHmm\u2026\u201D</p>\n</blockquote>\n<p>For a long time, ASR companies have avoided doing real comparisons on company specific audio data by focusing marketing dollars and sales narratives on impressive outcomes from public datasets. (<a href="https://blog.deepgram.com/the-trouble-with-wer/">Like new advances on word error rates</a>). By distracting companies from the fact that gamed success statistics don\u2019t translate to real world applications, ASR providers have been able to trick companies into buying a car without test driving it first. So, what is the best way to actually test drive and walk away with a great deal?</p>\n<h2 id="how-to-test-an-asr-solution">How to test an ASR Solution?</h2>\n<p>With the goal of getting the truth and investing as little effort as possible, here are optimal guidelines for testing speech recognition providers in an apples to apples accuracy comparison:</p>\n<h3 id="step-1-select-50-randomly-sampled-audio-files-that-are-representative-of-the-audio-your-company-encounters"><strong>Step 1: Select 50 randomly sampled audio files that are representative of the audio your company encounters</strong></h3>\n<p>Do:</p>\n<ol>\n<li>Use meeting recordings if your goal is to transcribe meetings</li>\n<li>Use voicemails if the goal is to transcribe voicemails</li>\n<li>Use audio with accents if your audio will have speakers with accents</li>\n</ol>\n<p>Don\u2019t:</p>\n<ol>\n<li>Record yourself talking into your computer</li>\n<li>Use a random YouTube video</li>\n<li>Test out your favorite podcast or broadcast audio</li>\n<li>Use a song</li>\n</ol>\n<p>Pay humans to transcribe one minute from each of these files. This effort should cost $100 or less and will serve as the truth of all truths for all the ASR providers you\u2019ll be comparing. You can easily find transcriptionists using Rev.com or Upwork.</p>\n<h3 id="step-2-send-the-same-50-one-minute-clips-to-each-of-the-speech-vendors-that-you-are-considering-to-test-the-output-of-their-apis"><strong>Step 2: Send the same 50 one-minute clips to each of the speech vendors that you are considering to test the output of their APIs</strong></h3>\n<p>Take note of what each provider deems an acceptable audio format and how it fits into your list of considerations from earlier.</p>\n<h3 id="step-3-receive-the-text-outputs-and-normalize-them-for-the-choices-that-an-asr-company-makes-with-their-out-of-the-box-transcripts"><strong>Step 3: Receive the text outputs and normalize them</strong> for the \u201Cchoices\u201D that an ASR company makes with their out-of-the-box transcripts</h3>\n<ul><li>How are phone numbers transcribed?</li><ul><li> - 905-678-1234?</li>\n<li> - nine zero five six seven eight one two three four?</li>\n<li> - 9 0 5 6 7 8 1 2 3 4?</li></ul><li>Are outputs punctuated and capitalized?</li></ul>\n<h3 id="step-4-do-a-word-error-rate-wer-comparison-on-the-files"><strong>Step 4: Do a Word Error Rate (WER) comparison on the files</strong></h3>\n<p><a href="https://blog.deepgram.com/what-is-word-error-rate/">Word Error Rate (WER)</a> will give you a sense of the overall accuracy of the transcripts, but don\u2019t just look at the number. You also want to look at <em>where</em> the output was wrong and <em>why</em> the output was wrong. This includes what words were incorrectly added, omitted, or simply misinterpreted.</p>\n<h3 id="step-5-make-a-visual-representation-of-what-was-wrong"><strong>Step 5: Make a visual representation of what was wrong</strong></h3>\n<ul>\n<li>Who is getting the <em>important</em> words right vs. wrong?</li>\n<li>Whose outputs are the most legible?</li>\n</ul>\n<h2 id="next-steps">Next Steps</h2>\n<p>At this point, you will know where each ASR provider stands from a general accuracy perspective on audio representative of your use case. Next, consider the other variables in <strong><a href="https://offers.deepgram.com/how-to-vet-an-asr-provider-thank-you">How to Vet an Automatic Speech Recognition Solution Provider?</a></strong> and drill down on accuracy improvements with keywords, libraries, reprogramming, and custom training. With a good handle on where each competitor stands in terms all these variables, you can confidently go into pricing conversations and make better decisions for your business. If you\u2019re ready to compare Deepgram\u2019s AI Speech Platform with other ASR providers, <a href="https://www.deepgram.com/contact-us">contact us</a>.</p>\n<WhitepaperPromo whitepaper="latest" />';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/how-to-test-automatic-speech-recognition-asr-providers-for-your-business/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Selecting the best <a href="https://blog.deepgram.com/what-is-asr/">ASR</a> option for your company is an important decision. While the bulk of this article is an educational piece on how to most effectively test for ASR providers, the first step when making an important buying decision is identifying your priorities:</p>
<ol>
<li>What do you want?</li>
<li>What do you need?</li>
<li>What doesn’t matter?</li>
</ol>
<p>Besides what was discussed in the tip sheet, <strong><a href="https://offers.deepgram.com/hubfs/Collateral/How-to-Vet-an-ASR-Provider.pdf">How to Vet an Automatic Speech Recognition Solution Provider?</a></strong>, here are some other features you should also consider:</p>
<ol>
<li>Speed - How fast is your batch transcription?  How fast is your real-time transcription?</li>
<li>Multi-channel support - Do you support multi-channel audio or only single channel?</li>
<li>Speaker separation - Can you separate the speakers; i.e. speaker 1 or speaker 2, even for non-stereo applications?</li>
<li>Deep search - Can you search the audio for find specific words or phrases to listen and review; not search the transcription?</li>
</ol>
<p>Getting a sense of what features your company might need before starting talks with providers will help you avoid the common trap of relying purely on accuracy rate. Otherwise, you’ll likely find yourself having this conversation:</p>
<blockquote>
<p><strong>Buyer</strong>: “We’ve been looking at a couple ASR providers…what’s your accuracy rate?” <strong>ASR Provider</strong>: “Fantastic. On an academic data set that is publicly known, we claim a 95% accuracy rate.” <strong>Buyer</strong>: “That sounds great! But how does that relate to our audio data?” <strong>ASR Provider</strong>:“Trust me, we’ll do great on that too!” <strong>Buyer</strong>: “Hmm…”</p>
</blockquote>
<p>For a long time, ASR companies have avoided doing real comparisons on company specific audio data by focusing marketing dollars and sales narratives on impressive outcomes from public datasets. (<a href="https://blog.deepgram.com/the-trouble-with-wer/">Like new advances on word error rates</a>). By distracting companies from the fact that gamed success statistics don’t translate to real world applications, ASR providers have been able to trick companies into buying a car without test driving it first. So, what is the best way to actually test drive and walk away with a great deal?</p>
<h2 id="how-to-test-an-asr-solution">How to test an ASR Solution?</h2>
<p>With the goal of getting the truth and investing as little effort as possible, here are optimal guidelines for testing speech recognition providers in an apples to apples accuracy comparison:</p>
<h3 id="step-1-select-50-randomly-sampled-audio-files-that-are-representative-of-the-audio-your-company-encounters"><strong>Step 1: Select 50 randomly sampled audio files that are representative of the audio your company encounters</strong></h3>
<p>Do:</p>
<ol>
<li>Use meeting recordings if your goal is to transcribe meetings</li>
<li>Use voicemails if the goal is to transcribe voicemails</li>
<li>Use audio with accents if your audio will have speakers with accents</li>
</ol>
<p>Don’t:</p>
<ol>
<li>Record yourself talking into your computer</li>
<li>Use a random YouTube video</li>
<li>Test out your favorite podcast or broadcast audio</li>
<li>Use a song</li>
</ol>
<p>Pay humans to transcribe one minute from each of these files. This effort should cost $100 or less and will serve as the truth of all truths for all the ASR providers you’ll be comparing. You can easily find transcriptionists using Rev.com or Upwork.</p>
<h3 id="step-2-send-the-same-50-one-minute-clips-to-each-of-the-speech-vendors-that-you-are-considering-to-test-the-output-of-their-apis"><strong>Step 2: Send the same 50 one-minute clips to each of the speech vendors that you are considering to test the output of their APIs</strong></h3>
<p>Take note of what each provider deems an acceptable audio format and how it fits into your list of considerations from earlier.</p>
<h3 id="step-3-receive-the-text-outputs-and-normalize-them-for-the-choices-that-an-asr-company-makes-with-their-out-of-the-box-transcripts"><strong>Step 3: Receive the text outputs and normalize them</strong> for the “choices” that an ASR company makes with their out-of-the-box transcripts</h3>
<ul><li>How are phone numbers transcribed?</li><ul><li> - 905-678-1234?</li>
<li> - nine zero five six seven eight one two three four?</li>
<li> - 9 0 5 6 7 8 1 2 3 4?</li></ul><li>Are outputs punctuated and capitalized?</li></ul>
<h3 id="step-4-do-a-word-error-rate-wer-comparison-on-the-files"><strong>Step 4: Do a Word Error Rate (WER) comparison on the files</strong></h3>
<p><a href="https://blog.deepgram.com/what-is-word-error-rate/">Word Error Rate (WER)</a> will give you a sense of the overall accuracy of the transcripts, but don’t just look at the number. You also want to look at <em>where</em> the output was wrong and <em>why</em> the output was wrong. This includes what words were incorrectly added, omitted, or simply misinterpreted.</p>
<h3 id="step-5-make-a-visual-representation-of-what-was-wrong"><strong>Step 5: Make a visual representation of what was wrong</strong></h3>
<ul>
<li>Who is getting the <em>important</em> words right vs. wrong?</li>
<li>Whose outputs are the most legible?</li>
</ul>
<h2 id="next-steps">Next Steps</h2>
<p>At this point, you will know where each ASR provider stands from a general accuracy perspective on audio representative of your use case. Next, consider the other variables in <strong><a href="https://offers.deepgram.com/how-to-vet-an-asr-provider-thank-you">How to Vet an Automatic Speech Recognition Solution Provider?</a></strong> and drill down on accuracy improvements with keywords, libraries, reprogramming, and custom training. With a good handle on where each competitor stands in terms all these variables, you can confidently go into pricing conversations and make better decisions for your business. If you’re ready to compare Deepgram’s AI Speech Platform with other ASR providers, <a href="https://www.deepgram.com/contact-us">contact us</a>.</p>
${renderComponent($$result, "WhitepaperPromo", WhitepaperPromo, { "whitepaper": "latest" })}`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/how-to-test-automatic-speech-recognition-asr-providers-for-your-business/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
