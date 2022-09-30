---
title: Olá! Enhanced Portuguese (beta) Speech-to-Text Language Model Now Available
description: We’re excited to announce the launch of our Enhanced Portuguese
  language model—now in beta!
date: 2022-09-30T13:22:44.848Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1664544531/2209-How-Accurate-is-OpenAI-Whisper-Speech-to-Text-Model-featured-1200x630_qndzys.png
authors:
  - katie-byrne
category: product-news
tags:
  - portuguese
  - language
seo:
  canonical: enhanced-portuguese-speech-to-text-language-model-available
  title: Enhanced Portuguese (beta) Speech-to-Text Language Model Now Available
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1664544873/2209-How-Accurate-is-OpenAI-Whisper-Speech-to-Text-Model-social-1200x628_pbpaui.png
  title: Enhanced Portuguese (beta) Speech-to-Text Language Model Now Available
---
Several months ago, we released our Base Portuguese ASR model to support our customers in Europe and South America. Working closely with our customers in these regions to deeply understand their use cases and data, we’re excited to announce the next generation of our Enhanced Portuguese model as an additional option for use cases that require exceptional accuracy.

## How to Get Started with Enhanced Portuguese

If you want to try out our Enhanced Portuguese model, you can quickly create an account on Deepgram [Console](https://console.deepgram.com/) and we’ll give you $150 in free credits. Simply select Portuguese from the language menu when trying out our APIs.

If you’re already a Deepgram customer, you can call the Enhanced Portuguese model using the following arguments:

* ``model=general``
* ``version=beta``
* ``language=pt-BR`` (Brazil) or ``pt-PT`` (Portugal)

You can also find an example API call using these arguments below.

### Example API Call

```
curl \
--request POST \
--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \
--header 'Content-Type: audio/wav' \
--data-binary @youraudio.wav \
--url 'https://api.deepgram.com/v1/listen?language=pt-BR'
--url 'https://api.deepgram.com/v1/listen?language=pt-PT'
```

## Key Benefits of a Portuguese Language Model

* Accurately transcribe both Brazilian and Portugal Portuguese [pronunciations](https://www.youtube.com/watch?v=7_3ECC8ZPP4).
* Many developers see high accuracy depending on their use case.
* Available for Pre-recorded and Streaming Phone Call, Meeting, Voicemail, and Conversational AI use cases.
* Transcribe on-premises or through the Deepgram Cloud.
* Available for both Base and now Enhanced model tiers.

## What Can You Use a Portuguese Language Model for?

* Pair with a Phone Call model to transcribe recording from your call centers in Europe and South America.
* Pair with a Meetings model to understand the sentiment of your development team in Brazil or South Africa
* Create an Agent Assist solution for your LATAM sales team.

Deepgram customers now have two fantastic model options for Portuguese, providing them greater investment flexibility depending on their use case. This continues our commitment to provide something more than “one size fits all” when it comes to language models for our customers. We will continue to invest in world-class research and engineering to provide our customers with the optionality they deserve from their speech API. 

## Wrapping Up

To learn more about the dozens of other languages and use cases Deepgram enables, please see the [Language](https://developers.deepgram.com/documentation/features/language/) page in our documentation. Need help getting started? [Reach out to our sales team](https://deepgram.com/contact-us/) and they’ll be happy to get you up and running. We welcome your feedback, please share it with us at [deepgram.com/feedback](https://www.deepgram.com/feedback).