---
title: "6 Biggest Challenges of Automatic Speech Recognition (ASR) for Hindi"
description: "Speech-to-text systems for Hindi can encounter some unique challenges.  Here are 6 of the biggest ones that tend to crop up."
date: 2022-03-17
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981411/blog/6-challenges-asr-hindi/6-biggest-challenges-of-ASR-for-Hindi-thumb-554x22.png
authors:
  - dan-shafer
category: tutorial
tags:
  - deep-learning
  - language
seo:
  title: "6 Biggest Challenges of Automatic Speech Recognition (ASR) for Hindi"
  description: "Speech-to-text systems for Hindi can encounter some unique challenges. Here are 6 of the biggest ones that tend to crop up."
shorturls:
  share: https://dpgr.am/1fb276e
  twitter: https://dpgr.am/f7bd5e2
  linkedin: https://dpgr.am/eb4f800
  reddit: https://dpgr.am/ee4763e
  facebook: https://dpgr.am/a927f55
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981411/blog/6-challenges-asr-hindi/6-biggest-challenges-of-ASR-for-Hindi-thumb-554x22.png
---

As Deepgram expands [the number of languages that we offer automatic speech recognition (ASR) for](https://deepgram.com/product/languages/), we're bound to run into languages that present different challenges than we encountered for English. In this blog post, we'll review six of the biggest challenges that are present for people looking to create a Hindi speech-to-text model. Before we dive into the specifics, let's take a look at what Hindi is and where it's spoken.

## What is Hindi?

[Hindi](https://en.wikipedia.org/wiki/Hindi) is an Indo-European language spoken in the northern part of India, in the so-called [Hindi Belt](https://en.wikipedia.org/wiki/Hindi_Belt), and is one of the two official languages of the government of India. With some 322 million native speakers with an additional 270 second-language users, Hindi is one of the most widely-spoken languages in the world.

## 6 Biggest Challenges for Hindi ASR

With that background out of the way, let's look at six ways that Hindi can create challenges for speech-to-text systems.

### 1\. Limited Resources

Perhaps the first challenge that arises when trying to build an ASR model for Hindi is that the language is what's sometimes called a low-resource language. This means that there isn't as much data available for training ASR models as there is for languages like English. For example, the open source [Common Voice](https://commonvoice.mozilla.org/en) project, which releases crowd-sourced and crowd-validated utterances for dozens of languages, released a Hindi dataset for the first time at the end of 2020, with a mere half an hour of labeled (validated) audio. That number has since grown to 11 hours. Compare that with 217 validated hours for Tamil (another Indian language) or 2186 for English. Training a robust supervised ASR model typically requires several thousand hours of labeled audio, so the lack of available audio can create real challenges.

### 2\. Multilingualism and Dialects

Because Hindi is a lingua franca in India, maybe people speak it as a second (or even third or fourth) language. This means that, even in conversations that are in Hindi, speakers may be switching between it and other languages, a phenomenon called [code switching](https://en.wikipedia.org/wiki/Code-switching). This can make it difficult for an ASR model to track what's being said. Even if speakers from other languages aren't code switching, Hindi has a lot of loanwords from other languages. This can make it difficult for ASR to correctly identify the words, since the pronunciation may not follow the usual rules of Hindi. Add on to that the fact that Hindi has several different dialects, and this can again make it difficult for ASR to correctly recognize words, since the same word can be pronounced differently in different dialects.



### 3\. Data Quality Problems

To address the lack of available data, teams will sometimes purchase labeled audio data from data vendors to help make their model more robust-a common practice when trying to bump up the amount of data they have to train a model. However, purchased data can be of mixed quality, which means you need an internal quality control process to make sure the data will actually improve the accuracy of your model instead of harming it. And even if you get good data, it might not be labeled and annotated in the same way as your model expects, creating an additional hurdle for using purchased data. And data labeling itself can also be a challenge, as we are about to see.

### 4\. Data Labeling

Because of code switching, and the fact that English words often get used in Hindi-along with the fact that some customers will send Indian-accented English to the Hindi model-you need to have a model that can handle this variety of the language, often called [Hinglish](https://en.wikipedia.org/wiki/Hinglish). In order to handle this, your model needs to be trained on all of the possibilities, from solely English on one end of the scale, to solely Hindi on the other end. This means that the data must be labeled based on what is there-English transcription for the English elements, and Hindi transcriptions in Devanagari for the Hindi elements.

### 5\. Inflection

One additional ASR challenge for Hindi is that it is an [inflected language](https://en.wikipedia.org/wiki/Inflection), meaning its words change depending on factors like their role in the sentence, the tense of the verb, and so forth. This means that there can be a lot of variation in forms of words. For ASR to work well, it needs to be able to handle this kind of variability and be able to recognize different forms of the same word. This is doubly challenging due to the mixture of English; you need a very large dictionary to not only contain all of the variations of Hindi words, but also all of the English words that might get mixed into the speech of those communicating in Hindi-of even just Indian-accented English that gets sent to the Hindi model.

### 6\. Model Building

The final challenge that we'll talk about is actually producing an [end-to-end deep-learning model](https://blog.deepgram.com/deep-learning-speech-recognition/) that successfully addresses the other challenges mentioned above. To tackle differences in labels and labeling conventions, you need a pipeline to normalize the transcripts from different sources, and you need to have a dictionary that can address issues of code switching and borrowings. And even with all that, you still have to deal with not having as much data as you would for, say, English. One of the best ways to address the last point is with transfer learning. Transfer learning allows you to take a model that you already have and is performing well, and train it on new data. This obviously isn't a perfect solution-you can't just take an English model, toss in Hindi data, and expect it to work as well as your English model-but it does give you a place to start, and can help make up for some of the data issues that we discussed above.

## Wrapping Up

ASR technology has come a long way in recent years, and our data operations and curation team, along with our in-house linguists, allow us to effectively find and use real-world audio data to train our models, including our Hindi model. We're excited to be able to continue to expand the number of [languages we offer models for](https://deepgram.com/product/languages/). We currently have both a Hindi model and an Indian English model that can handle code switching, borrowings, and the other issues discussed above-and we're confident that our current model has better accuracy than other Hindi speech-to-text systems available because we've tested it against them. If you'd like to give our Hindi model a try, you can sign up for a [free API key](https://console.deepgram.com/) or [reach out to us](https://deepgram.com/contact-us/) to chat about your needs and how we can help.
