---
title: Everything You Need to Know about Keywords for Speech Recognition
description: Speech recognition such as Google, AWS and others apply different
  techniques to increasing accuracy through keywords. Here’s a brief overview of
  what you need to know about Keywords and when you should consider using them.
date: 2022-10-17T22:48:27.811Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1666046992/blog/Everything%20You%20Need%20to%20Know%20about%20Keywords%20for%20Speech%20Recognition/2210-Keywords-for-speech-recognition-featured-1200x630_2x_1_mb9ngj.png
authors:
  - shir-goldberg
category: best-practice
tags:
  - Keywords
shorturls:
  share: https://dpgr.am/b1d2e02
  twitter: https://dpgr.am/265ac49
  linkedin: https://dpgr.am/bfad845
  reddit: https://dpgr.am/7a4f07c
  facebook: https://dpgr.am/62a6ff4
---

Just like humans, AI learns through experience. In absence of training your model to all of the possible audio scenarios and special vocabulary it may encounter, Keywords are a way of increasing accuracy without having to give your model the “experience”—a shortcut, if you will.

Speech recognition such as Google, AWS and others apply different techniques to increasing accuracy through keywords. Here’s a brief overview of what you need to know about Keywords and when you should consider using them.

## What are Keywords?

Keywords are a way of specifying that certain words are expected to appear in a conversation. Deepgram’s end-to-end deep learning platform will read the entire model and utilize this information to make more accurate predictions.

Customers who want better performance on product names or industry-specific vocabulary can use keywords to increase the chances that Deepgram’s model will predict those words instead of more common ones. 

Deepgram’s deep learning models are trained on real-world audio and have extensive vocabularies. Most common words will already be correctly predicted by our models. Keyword boosting (sometimes known as word boost or speech adaptation boost) can help with words that are not in the model’s vocabulary, such as proper nouns.

### **Example with and without keyword boosting:**

    keywords=snuffleupagus:2.2

**\*Truth\***

and then big bird said to snuffleupagus why aren’t you eating that banana

**\*Before boosting\***

and then big bird said to sniff why aren’t you eating that banana

**\*After boosting\***

and then big bird said to snuffleupagus why aren’t you eating that banana

Here’s how to make a request with keyword boosting using Deepgram’s speech-to-text API.

    curl \

    \--request POST \

    \--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \

    \--header 'Content-Type: audio/wav' \

    \--data-binary @youraudio.wav \

    \--url 'https://api.deepgram.com/v1/listen?keywords=KEYWORD:INTENSIFIER'

For more information about keywords, you can refer to our [developer documentation](https://developers.deepgram.com/documentation/features/keywords/).

## Why is Keyword Boosting Used?

Just like a human listener, Deepgram can better understand mumbled, distorted, or otherwise hard-to-decipher speech when it knows the context of the conversation. When using Deepgram’s API to transcribe audio, you can specify keywords to which the model should pay particular attention to help it understand context; this is known as keyword boosting. Similarly, you can suppress keywords.

For example, in a conversational AI application, keyword boosting can be used for your product names and business terminology. If you run a burger drive-through and use speech-to-text to handle orders, your customers are more likely to be ordering a “burger with fries” than a “breaker with five”. Boosting “burger” and “fries” can help ensure you get the output your application is expecting.

## Where Should I Use a Custom Model Instead of Keywords? 

Though keywords can be used to aid a few uncommon or out-of-vocabulary words, a custom model trained on representative data will always give the best performance. The more keywords specified, the higher the chance that the models may give unexpected outputs. Additionally, keywords cannot accept multiple-word phrases, such as “no problem”, to be boosted as a unit. Even if multiple words are sent in the keywords parameter using URL encoding, Deepgram will boost each word individually, which may not lead to the desired results. 

For customers who work in industries with lots of uncommon vocabulary or specific phrases, Deepgram recommends talking to our team about custom model training. Deepgram can also provide data labeling services, and even create audio to train on to ensure custom models produce the best results possible.

If custom model training isn’t an option but better accuracy is desired, another option is using Deepgram’s enhanced model tier. Deepgram's Enhanced model has increased effective vocabulary and handles long tail vocabulary (words that appear infrequently) significantly better. If switching models, testing should be done with and without keywords, as transcription outputs may change.

## Where Should I Use Find and Replace Versus Keywords?

Keyword boosting is designed to increase the chances that a certain word will be transcribed. [Find and replace ](https://developers.deepgram.com/documentation/features/replace/)is designed for cases where when a certain word is transcribed, it should be replaced with something different. One example of where find and replace should be used is if the name "Aaron" appears in the transcript but should be spelled "Erin" instead.

## Wrapping Up

If you’d like to give keywords a try in your project, you can [sign up for Console](https://console.deepgram.com/signup) and get $150 in free credit to try it out. Still have questions? Check out our [developer documentation](https://developers.deepgram.com/), or [reach out to Sales with your questions](https://deepgram.com/contact-us/).

