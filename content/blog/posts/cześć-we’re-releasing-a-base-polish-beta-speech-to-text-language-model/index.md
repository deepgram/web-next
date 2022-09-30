---
title: Cześć! We’re Releasing a Base Polish (beta) Speech-to-Text Language Model
description: We’re excited to now offer a speech-to-text language model for
  Polish! Read on for details, including how to get access.
date: 2022-09-30T13:03:57.664Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1664543332/2209-How-Accurate-is-OpenAI-Whisper-Speech-to-Text-Model-featured-1200x630_hhcr5l.png
authors:
  - katie-byrne
category: product-news
tags:
  - polish
  - language
seo:
  canonical: base-polish-speech-to-text-language-model-released
  title: We’re Releasing a Base Polish (beta) Speech-to-Text Language Model
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1664543344/2209-How-Accurate-is-OpenAI-Whisper-Speech-to-Text-Model-social-1200x628_jsyzug.png
---
Did you know Polish is spoken by over fifty million people worldwide, and is the sixth most spoken language in the European Union (EU)? That's a lot of people! That’s why we’re thrilled to announce extended EU language support for the Deepgram platform for our customers with our beta Base Polish model.

## Give Our Polish Language Model a Try

If you want to try out our Base Polish model you can quickly create an account on Deepgram [Console](https://console.deepgram.com/) and we’ll give you $150 in free credits. Simply select Polish from the language menu when trying out our APIs.

If you’re already a Deepgram customer, you can call the Base Polish model using the following arguments:

* `model=general`
* `version=beta`
* `language=nl`

### Example API call

You can see an example of a full API call using these arguments below.

```
curl \
  --request POST \
  --header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \
  --header 'Content-Type: audio/wav' \
  --data-binary @youraudio.wav \
  --url 'https://api.deepgram.com/v1/listen?language=pl'
```

## What Can Developers Do with a Polish Language Model?

* Pair it with a Phone Call model to transcribe recordings from your European call center.
* Pair it with a Meetings model to understand the topics commonly discussed by customers.
* Create an Agent Assist solution to increase the productivity of your European sales team.

## Key Benefits of Deepgram Base Polish Language Model

* Accurately transcribe Polish speakers with our Phone Call, Meeting, Voicemail, Conversational AI use case models.
* Many developers see upwards of 90% accuracy, depending on their use case.
* Available for pre-recorded and [streaming](https://deepgram.com/blog/all-about-transcription-for-real-time-audio-streaming/) ([getting started guide](https://developers.deepgram.com/documentation/getting-started/streaming/)).
* Transcribe on-premises or through the Deepgram Cloud.
* Use in conjunction with speech understanding features such as [Diarization](https://deepgram.com/blog/what-is-speaker-diarization/) ([docs](https://developers.deepgram.com/documentation/features/diarize/)), [Summarization](https://developers.deepgram.com/documentation/features/summarize/), Topic Detection and more.

## More to Come!

As our customers leverage Deepgram’s world-class speech API to expand their markets, we work together with them to create new models for languages they need. We’ll continue to support the expansion of our EU language capabilities in the coming months to support our growing global customer base.

To learn more about the dozens of other languages and use cases Deepgram enables, please see the [Language](https://developers.deepgram.com/documentation/features/language/) page in our documentation. And if you'd like to speak with someone about your project for diving in, [please reach out](https://deepgram.com/contact-us/)! We welcome your feedback, please share it with us at [deepgram.com/feedback](https://www.deepgram.com/feedback).