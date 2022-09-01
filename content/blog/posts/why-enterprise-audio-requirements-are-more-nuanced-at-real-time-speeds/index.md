---
title: "Why Enterprise Audio Requirements are More “Nuanced” at Real-time Speeds"
description: "Review of Nuance and Deepgram for Real-Time Speech to Text Transcriptions"
date: 2021-02-16
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981361/blog/why-enterprise-audio-requirements-are-more-nuanced-at-real-time-speeds/enterprise-audio-reqs-more-nuanced%402x.jpg
authors:
  - keith-lam
category: speech-trends
tags:
  - education
seo:
  title: "Why Enterprise Audio Requirements are More “Nuanced” at Real-time Speeds"
  description: "Review of Nuance and Deepgram for Real-Time Speech to Text Transcriptions"
shorturls:
  share: 
  twitter: 
  linkedin: 
  reddit: 
  facebook: 
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981361/blog/why-enterprise-audio-requirements-are-more-nuanced-at-real-time-speeds/enterprise-audio-reqs-more-nuanced%402x.jpg
---

Nuance recently acquired Saykara, a mobile speech recognition technology provider to expand their medical transcription business. This acquisition is one of many major investments and acquisitions in the Natural Language Processing (NLP) and Customer Service space that we are monitoring at Deepgram. Due to the recent acquisition of Saykara, we thought it would be a good time to review Nuance speech recognition capabilities and why customers creating real-time experiences should consider alternatives. Enterprise audio is more nuanced than it may seem - pun intended! 

### **Leader of previous speech tech solutions **

Nuance is a great brand in the speech recognition business and has been around for over 30 years.  They have gobbled up smaller speech recognition businesses, including Saykara just recently to expand their medical transcription business.  If you need speech to text transcription especially in the medical setting, they will always be on the list to evaluate.  To be honest, our most recent survey indicates good satisfaction with Nuance.

### **Core architecture has remained unchanged **

Nuance does a good job at speech to text transcription using their 1970's legacy speech model, called the Hidden Markov Model or [tri-gram model](https://deepgram.com/product/overview/).  They have added some AI and keyword libraries to their models to improve their accuracy but technically they need to sacrifice transcription speed for this accuracy.  So, for non-real time transcriptions, like medical transcriptions for medical records, they do an admirable job.  They can add hundreds of medical specific terms, acronyms, and drug names to make their model more accurate but it slows down their transcriptions. Deepgram does not use this legacy [tri-gram model](https://deepgram.com/product/overview/). We built our speech recognition solution from scratch using a completely different architecture. Deepgram uses an end to end Deep Learning Neural Network, which in simple terms means we perform audio to text transcription in one AI-enabled step and we can continually improve our accuracy with more data at the same transcription speed.  Due to our architecture, customers do not have to compromise accuracy vs. speed, speed vs. costs or cost vs. scalability. Our tests with their speech recognition engine shows they can transcribe 1 hour of normal speech data (500 MB with one CPU/GPU) in 1 hour.  While, Deepgram can transcribe the same 1 hour in 30 seconds. Check out this [demo](https://drive.google.com/file/d/1OylFXC4siC9PKlIg6ybcJ80MrLOE54FR/view) of Deepgram speed compared to Google, and this [demo](https://www.youtube.com/watch?v=3gv8lbbuY-Q&t=2s) of Deepgram scale.

### **Enabling real-time AI is Deepgram's forte**

When we talk about real-time AI for [Conversational AI virtual agents](https://deepgram.com/solutions/voicebots/), sales or support [agent enablement](https://deepgram.com/solutions/contact-centers/), or real-time [compliance monitoring](https://deepgram.com/solutions/finance/), you need both millisecond speed and high accuracy.  Customers do not want to wait for the virtual agent to transcribe what you said, send that data to the AI engine, get a response and then turn the response from text to speech.  Any lag in that process would cause customer dissatisfaction.  Worst is if the response is incorrect or the virtual agent needs to ask the customer to repeat what they said, poor transcription accuracy.  For real-time streaming, our AI Speech Platform transcription lag is under 300 milliseconds.

### **Compare us**

You know I'm biased so do a comparison yourself or we can do a [comparison](https://offers.deepgram.com/nuance-speech-assessment) for you. [Get your comparison](https://offers.deepgram.com/nuance-speech-assessment)
