---
title: How AI is Advancing the Transcription Process
description: Learn more about how artificial intelligence and machine learning
  are advancing automatic transcription.
date: 2019-02-12
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981344/blog/how-ai-is-advancing-the-transcription-process/how-ai-is-advancing-the-transcription-process-blog.jpg
authors:
  - morris-gevirtz
category: ai-and-engineering
tags:
  - machine-learning
  - deep-learning
seo:
  title: How AI is Advancing the Transcription Process
  description: ""
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981344/blog/how-ai-is-advancing-the-transcription-process/how-ai-is-advancing-the-transcription-process-blog.jpg
shorturls:
  share: https://dpgr.am/349299d
  twitter: https://dpgr.am/1635f67
  linkedin: https://dpgr.am/9836e57
  reddit: https://dpgr.am/feabd6e
  facebook: https://dpgr.am/76375a2
---

![](https://images.unsplash.com/photo-1522165078649-823cf4dbaf46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80) Until recently, there's only been one way to accurately produce real-time audio transcription: voice writers use dictation software to convert audio to text and real-time editors clean up the resulting transcript to produce the final output. Yet, it's costly to have voice writing in the process. Now, companies are shifting from this model, employing automatic speech recognition in place of voice writers.

## The Traditional Transcription Pipeline: Voice Writers, Scopists, and Editors

Voice writing was developed in the 1990's to leverage the benefits of first generation speech recognition software.

While the software originally served to speed up the transcription process, it poses significant limitations - it can only recognize one speaker and has trouble with ambient noise and intonational variation in speech.

To compensate for this, highly trained voice writers listen to real-world audio and re-speak its contents in a way that the software understands what is being said. It can take 6 months to train a new voice writer and, even then, voice writing accuracy typically ranges between 70% to 80% depending on the skill of the transcriptionist. Not to mention, a real-time editor-sometimes called a scopist-must counteract the limited accuracy of voice writing immediately afterward. All together, this process worked well for the time, but has caused strain as time has passed, burdening transcription operations with high employee turnover rates and expensive software licenses.

## The Need for a New Approach: ASR as the First Step

For this reason, companies have started using an [Automatic Speech Recognition (ASR)](https://blog.deepgram.com/what-is-asr/)-first approach to doing highly-accurate real-time transcription. Instead of voice-writing the first level, audio is transcribed with ASR and then passed onto real-time editors.

In the last few years, the advent of end-to-end deep learning ASR systems has made it possible to reach real-time transcription accuracies of 85% or greater, without the need for human mediation.

This is largely thanks to the ability to train custom models which are tailor fit for specific audio types, languages, accents, and environments. By ensuring key language-technical words, business and product names, jargon, etc.-is transcribed just as well or better than a good voice writer would, transcription companies have been able to dramatically reduce labor costs while increasing accuracy for editors down the pipeline.

## The Process for Adopting ASR

The first step in using custom ASR in the transcription process is to select 100 or more hours of labeled (transcribed) audio. The more hours of labeled data, the more accurate the custom model will be. ASR providers use this data to create one or many custom models. Custom models can be created for as many audio types as the customer wants-given that there is enough labeled data for each model. This customization step is key. Whereas some vendors define customization loosely, evaluating the various outputs will tell you which methods are most effective. Most vendors maintain a traditional speech recognition infrastructure that involves four separate steps. In this case, customization is a shallow layer of understanding added to the model only at the end. Think of this shallow customization _as you would a 2 week intensive Mandarin class_. Sure, you'll be able to say and do some things, but you won't be fluent. In other words, your accuracy is subpar. **In contrast, a custom model that trains using end-to-end deep learning, incorporates the learning from labeled data from the very beginning**. In this way, you end up with a custom model that inherently understands your audio, just _as a child who grew up speaking_ Mandarin would.

## A Modern Transcription Pipeline: Custom ASR, Scopists, and Editors

Using a custom real-time speech API, companies get real-time transcription that vastly outperforms previous solutions. As the transcription industry continues to grow, those that are able to consistently compete on accuracy, scale, and cost will thrive. Clearly, incorporating a high performing ASR solution is necessary in order to achieve the highest levels of accuracy, while also reducing operational costs and delivering on turnaround times. Those that fail to transition quickly risk falling behind their competitors that recognize this as the secret weapon to a quickly evolving industry.

## The Takeaway

1.  Select a modern speech recognition company that can tailor build custom ASR models for your specific needs.
2.  Provide the ASR vendor with audio you have already transcribed in the past.
3.  The ASR provider trains models that natively understand your audio.
4.  Deliver high accuracy transcripts to your editors in real-time, while lowering costs.
