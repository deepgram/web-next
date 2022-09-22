---
title: Use OpenAI Whisper Speech Recognition with the Deepgram API
description: test
date: 2022-09-22T21:39:04.411Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1663882926/blog/use-openai-whisper-speech-recognition-with-the-deepgram-api/open-ai-whisper-w-deepgram-code-blog_2x_kldwgp.jpg
authors:
  - scott-stephenson
category: ai-and-engineering
tags:
  - speech-models
  - machine-learning
---
Yesterday was a big day for voice intelligence as OpenAI released Whisper, a general-purpose speech recognition model. We’ve gotten several questions about what this means for the future of Voice AI and companies like Deepgram. We’ve also been humored by posts like this:

![Image of tweet from @LewisNWatson saying "Deepgram bricking it rn with whisper"](https://res.cloudinary.com/deepgram/image/upload/v1663883725/blog/use-openai-whisper-speech-recognition-with-the-deepgram-api/1572720107775995904_gvzzzg.jpg)

Deepgram has advanced state-of-the-art speech recognition capabilities for almost a decade, so we feel uniquely positioned to understand the enormous amount of work it takes to bring something like Whisper to fruition. Congratulations from our team to theirs!

OpenAI chooses to work on some of the most challenging, and promising, foundational aspects of artificial intelligence (AI). We’re thrilled that they’ve expanded into voice. Their entry will only bring even more excitement to the voice revolution. We share the opinion that voice intelligence is one of the most important areas of research in AI and will unlock extraordinary opportunities for AI applications across myriad use cases. In fact, we see this every day as we support our global customers in building voice intelligence products.

Producing transcripts from voice data is just scratching the surface of what we should be accomplishing. We, and others in the voice community, are working towards a future where machines gather just as much from a conversation as humans can. Nonetheless, we need to celebrate every accomplishment along the way and support each other where possible.

As our team, like so many others around the world, tried Whisper for the first time yesterday we thought it would be a great thing if people could use a hosted version. Deepgram’s speech API already hosts some of the most accurate and performant speech recognition models in the world, so we figured what’s one more?

Today, we’re making Whisper available to anyone who wants to use it, hosted by Deepgram. Users that sign up to use Deepgram will find Whisper available as an additional model to use among our world-class language and use case models. Alternatively, anyone can access the Whisper model programmatically via a hosted API — no sign-up required.

To test it quickly, run this command:

```shell
curl \
 --request POST \
 --data-binary @youraudio.wav \
 --url 'https://api.deepgram.com/v1/listen?model=whisper'
```