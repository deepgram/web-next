---
title: "How to Use Whisper: OpenAI's Speech Recognition Model in 1 Minute"
description: "Deepgram has made testing OpenAI's new open-sourced Whisper speech
  recognition model easy as copy and paste. "
date: 2022-09-22T18:59:11.323Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1663197013/devrel-on-premise-release-blog_1_ejgm2u.png
authors:
  - michael-jolley
category: ai-and-engineering
tags:
  - speech-models
  - machine-learning
---
OpenAI's newly released "Whisper" speech recognition model claims it can provide accurate transcriptions in multiple languages and even translate them to English. As Deepgram CEO, Scott Stephenson, recently tweeted "OpenAI + Deepgram is all good — rising tide lifts all boats." We're stoked to see others are buying into what we've been preaching for nearly a decade: end-to-end deep learning is the answer to speech-to-text.

As our team played with Whisper yesterday, we wanted to make sure as many people as possible could try it with minimal effort. And since we already offer some of the most accurate and performant speech recognition models in the world, why not add another? 😁

## Announcing Whisper Multilingual AI Speech Recognition on Deepgram

Today, we have released the Whisper "small" speech recognition model via the Deepgram API, with no sign up required. Simply copy and paste the code snippet below into your terminal and start transcribing now.

```bash
curl \
 --request POST \
 --data-binary @youraudio.wav \
 --url ‘https://api.deepgram.com/v1/listen?
model=whisper’
```