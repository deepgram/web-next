---
title: The History of Automatic Speech Recognition
description: Learn about the history of automatic speech recognition (ASR) and
  how end-to-end deep learning is creating a new revolution in ASR.
date: 2021-01-15
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981358/blog/the-history-of-automatic-speech-recognition/history-of-asr-infogfx%402x.jpg
authors:
  - keith-lam
category: speech-trends
tags:
  - education
seo:
  title: The History of Automatic Speech Recognition
  description: Learn about the history of automatic speech recognition (ASR) and
    how end-to-end deep learning is creating a new revolution in ASR.
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981358/blog/the-history-of-automatic-speech-recognition/history-of-asr-infogfx%402x.jpg
shorturls:
  share: https://dpgr.am/799a8c3
  twitter: https://dpgr.am/bfedebb
  linkedin: https://dpgr.am/4fd7971
  reddit: https://dpgr.am/1e7447d
  facebook: https://dpgr.am/6844267
---
The most exciting time to be in the Automatic Speech Recognition (ASR) space is right now. Consumers are using Siri and Alexa daily to ask questions, order products, play music, play games, and do simple tasks. This is the norm, and it started less than 15 years ago with Google Voice Search. On the enterprise side, we see [voicebots & conversational AI](https://deepgram.com/solutions/voicebots/), and [speech analytics](https://deepgram.com/solutions/speech-analytics/) that can determine [sentiment and emotions](https://blog.deepgram.com/sentiment-analysis-emotion-regulation-difference/) as well as [languages](https://deepgram.com/product/languages/).

## **Early Years: Hidden Markov Models and Trigram Models**

The history of Automatic Speech Recognition started in 1952 with Bell Labs and a program called [Audrey](https://astaspeaks.wordpress.com/2014/10/13/audrey-the-first-speech-recognition-system/), which could transcribe simple numbers. The next breakthrough did not occur until the mid-1970 when researchers started using [Hidden Markov Models](https://jonathan-hui.medium.com/speech-recognition-gmm-hmm-8bb5eff8b196) (HMM).HMM uses probability functions to determine the correct words to transcribe. These ASR speech models take snippets of audio to determine the smallest unit of sound for a word or what is called a [phoneme](https://www.britannica.com/topic/phoneme).  The phoneme is then fed into another program that uses the HMM to guess the right word using a most common word probability function. These serial processing models are refined by adding noise reduction upfront and [beam search language models](https://towardsdatascience.com/an-intuitive-explanation-of-beam-search-9b1d744e7a0f) on the back end to create understandable text and sentences. Bean search is a time-dependent probability function and looks at the transcribed words before and after the target word to find the best fit for the target word. This whole serial process is called the ["trigram" model](https://towardsdatascience.com/introduction-to-language-models-n-gram-e323081503d9), and 80% of the ASR technology currently being used is a refined version of this 1970's model.

## **New Generation of ASR: Neural Networks**

The next big breakthrough came in the late 1980s with the addition of neural networks. This was also an inflection point for ASR. Most researchers and companies use these neural networks to improve their current trigram models with better upfront audio phoneme differentiation or better backend text and sentence creation. This trigram model works very well for consumer devices like Alexa and Siri that only have a small set of voice commands to respond to.  However, this model is not as effective with enterprise use cases, like meetings, phone calls, and automated voicebots. The refined trigram models require huge amounts of processing power to provide accurate transcription at speed. Businesses need to trade speed for accuracy or accuracy for costs. 

## **New Revolution in ASR: Deep Learning**

Other researchers believed that neural networks were the key to having a new type of ASR. With the advent of big data, faster computers, and graphical processing unit (GPU) processing, a new ASR method was developed, [end-to-end deep learning ASR](https://heartbeat.fritz.ai/the-3-deep-learning-frameworks-for-end-to-end-speech-recognition-that-power-your-devices-37b891ddc380). This new ASR method could "learn" and be "trained" to become more accurate as more data is fed into the neural networks. No more developers re-coding each part of the trigram serial model to add new languages, parse accents, reduce noise, and add new words. The other big advantage of using an end-to-end deep learning ASR is that you can have the [accuracy, speed, and scalability without sacrificing costs](https://offers.deepgram.com/how-to-evaluate-deep-learning-asr-platform-solution-brief).

![history of speech recognition](https://res.cloudinary.com/deepgram/image/upload/v1661976833/blog/the-history-of-automatic-speech-recognition/history-hmm-v-dg_2%402x-1024x580.png) 

*History of Speech Recognition and Hidden Markov Models*

This is how [Deepgram](https://deepgram.com/company/about/) was born; out of research that did not look at refining a 50-year-old ASR model but starting from deep learning neural networks. Check out the entire history of ASR in the image above. [Contact us](https://deepgram.com/contact-us/) to learn how you can decrease word error rate systematically without compromising speed, scale, or cost, or sign up for a [free API key](https://console.deepgram.com/signup) to get started today.

<WhitepaperPromo whitepaper="latest"></WhitepaperPromo>