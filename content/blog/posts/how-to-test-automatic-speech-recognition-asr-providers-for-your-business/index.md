---
title: How to Test Automatic Speech Recognition (ASR) Providers For Your Business
description: Learn how to test various ASR providers and the variables to
  consider to truly vet an ASR provider
date: 2021-03-03
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981357/blog/how-to-test-automatic-speech-recognition-asr-providers-for-your-business/how-to-test-asr-providers%402x.jpg
authors:
  - scott-stephenson
category: ai-and-engineering
tags:
  - education
seo:
  title: How to Test Automatic Speech Recognition (ASR) Providers For Your Business
  description: Learn how to test various ASR providers and the variables to
    consider to truly vet an ASR provider
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981357/blog/how-to-test-automatic-speech-recognition-asr-providers-for-your-business/how-to-test-asr-providers%402x.jpg
shorturls:
  share: https://dpgr.am/9503902
  twitter: https://dpgr.am/5452614
  linkedin: https://dpgr.am/24d5b7c
  reddit: https://dpgr.am/46dd6c6
  facebook: https://dpgr.am/ebd4cf1
---
Selecting the best [ASR](https://blog.deepgram.com/what-is-asr/) option for your company is an important decision. While the bulk of this article is an educational piece on how to most effectively test for ASR providers, the first step when making an important buying decision is identifying your priorities:

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
