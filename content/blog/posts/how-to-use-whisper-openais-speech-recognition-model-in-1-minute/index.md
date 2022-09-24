---
title: "Try Whisper: OpenAI's Speech Recognition Model in 1 Minute"
description: Deepgram has made testing OpenAI's new open-sourced Whisper speech
  recognition model easy as copy and paste. Try it today!
date: 2022-09-26T18:59:11.323Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1663880277/blog/how-to-use-whisper-openais-speech-recognition-model-in-1-minute/2209-How-to-Use-Whisper-blog_2x_qb1eah.jpg
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



Last week, we released the Whisper speech recognition model via the Deepgram API. All accounts now have access to the `whisper` model, but we wanted to make it even easier to try. That's why we made it available for people without a Deepgram account. That's right! You can send files to the API without needing an API key. Try out the shell commands below to see how Whisper performs on your local files or those hosted elsewhere.



### Use cURL to Transcribe Local Files with Whisper



You can start testing the Whisper model now by running the snippet below in your terminal.



```shell
curl \
 --request POST \
 --data-binary @youraudio.wav \
 --url 'https://api.deepgram.com/v1/listen?model=whisper'
```



### Use cURL to Transcribe Remote Files with Whisper



Don't have an audio file to test? You can also send the URL to a hosted file by changing your request to the code snippet below. You can replace the `https://static.deepgram.com/examples/epi.wav` URL with a file that you'd like to test against.



```shell
curl \
  --request POST \
  --url 'https://api.deepgram.com/v1/listen?model=whisper' \
  --header 'content-type: application/json' \
  --data '{"url":"https://static.deepgram.com/examples/epi.wav"}'
```



We even provide several demo files that you can use:



- https://static.deepgram.com/examples/dragons.wav
- https://static.deepgram.com/examples/epi.wav
- https://static.deepgram.com/examples/interview_speech-analytics.wav
- https://static.deepgram.com/examples/koreanSampleFile.mp3
- https://static.deepgram.com/examples/sofiavergaraspanish.clip.wav
- https://static.deepgram.com/examples/timotheefrench.clip.wav



## Testing the OpenAI Whisper Models



Have you tried using any of the Whisper models since their release? Tell the community about your experience in our [GitHub Discussions](https://github.com/orgs/deepgram/discussions/30).