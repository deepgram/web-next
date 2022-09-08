---
title: Upcoming January Releases
description: Learn about some of the language and model improvements coming to
  Deepgram this January.
date: 2021-01-01
cover: https://res.cloudinary.com/deepgram/image/upload/v1662069487/blog/upcoming-january-releases/placeholder-post-image%402x.jpg
authors:
  - natalie-rutgers
category: product-news
tags:
  - language
  - speech-models
seo:
  title: Upcoming January Releases
  description: ""
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1662069487/blog/upcoming-january-releases/placeholder-post-image%402x.jpg
shorturls:
  share: https://dpgr.am/1ab8fb6
  twitter: https://dpgr.am/2c214bb
  linkedin: https://dpgr.am/ecc7afb
  reddit: https://dpgr.am/7a16a37
  facebook: https://dpgr.am/1fe2dd1
---

# **General Release Information**

Deepgram regularly releases new Automatic Speech Recognition (ASR) models and other enterprise features. These releases are planned on a monthly basis with releases occurring throughout the month.

### Opting In

Because new models and features may change client workflow and functions, we want to make sure you can control what you want to Opt-in.  For example, a model may have a new punctuation method, diarization method, or an updated vocabulary which needs to be post-processed in domain-specific ways by client code. Therefore, we recommend that customers with high production uptime requirements **opt-in** to most updates rather than always running with the latest release. Deepgram provides two methods for opting in depending on the type of change being made:

*   All Deepgram _models_ ([`model`](https://developers.deepgram.com/api-reference/speech-recognition-api)) support **version selection** (`version`). This means that in each API call customers can specify which version of a given model they wish to use. New model versions, as well as deprecation of versions, will be announced in the Deepgram Changelog. We recommend that customers with high-uptime requirements always select the model version that they wish to use and opt-in to new models by updating the version number after having tested the new model separately.
*   Almost all new ASR features are configured to be off by default. Customers can **opt-in** to new features through **the use of API parameters**.  As with model version selection, we recommend that customers first test new ASR features separately from their production pipeline and, once they are proven to work well with other customer software and workflow, begin use at a larger scale.

In certain circumstances (e.g. patching security vulnerabilities), it is not possible for DG to provide an opt-in. In these cases, DG will notify customers of the upcoming change through each customer's preferred method of communication, as well as the Deepgram Changelog. These communications will describe what changes, if any, to expect on the client side. Deepgram support, [support@deepgram.com](mailto:deepgram.comnull), is always available to help walk customers through new feature purpose and configuration, as well as resolve any issues that arise when upgrading.

* * *

# **Upcoming January Releases**

## **Improved Spanish Support**

`[language](https://developers.deepgram.com/api-reference/speech-recognition-api)=es` Accuracy improvements and an increased model vocabulary for our Spanish language support. Additionally, we've updated our Spanish support to incorporate our latest improvements to punctuation (`punctuate=true`). To use the latest Spanish support, pass the `language=es` as an API parameter in your request. If you do not wish to use the latest version, be sure to specify the desired version as `version={desired_version}`. Note that Spanish support is only available with Deepgram's General Model (`model=general`).  

## **Improved Turkish Support**

`[language](https://developers.deepgram.com/api-reference/speech-recognition-api#operation/transcribeAudio/properties/language)=tr` Accuracy improvements and an increased model vocabulary for our Turkish language support. Additionally, we've updated our Turkish support to incorporate our latest improvements to punctuation (`punctuate=true`). To use the latest Turkish support, pass the `language=tr` as an API parameter in your request. If you do not wish to use the latest version, be sure to specify the desired version as `version={desired_version}`. Note that Turkish support is only available with Deepgram's General Model (`model=general`).  

## **Improved Meeting Model**

`[model](https://developers.deepgram.com/api-reference/speech-recognition-api#operation/transcribeAudio/properties/model)=meeting` Accuracy improvements and an increased model vocabulary for our base meeting model. Additionally, we've updated our meeting model to incorporate our latest improvements to punctuation (`punctuate=true`). To use the latest meeting model, pass the `model=meeting` as an API parameter in your request. If you do not wish to use the latest version, be sure to specify the desired version as `version={desired_version}`.  

## **Improved Keyword Boosting**

`[keywords](https://developers.deepgram.com/api-reference/speech-recognition-api)={keyword}` We are releasing an updated keyword boosting feature (`keywords={keyword}`) with improved support for out of vocabulary words.  This feature is useful in two situations: (1) recognizing words in domain with a large vocabulary of domain-specific jargon and (2) a client application that depends on recognizing names, brands, or other relatively rare keywords with high accuracy. We recommend using this feature in combination with a custom trained model from Deepgram. Deepgram will customize a model for your domain, ensuring that the vocabulary of the model fits your domain. Keyword Boosting allows customers to add additional words rapidly (i.e. new brands, new menu items, etc) to augment a custom model's domain-focused vocabulary.

## **Improved General Model**

`[model](https://developers.deepgram.com/api-reference/speech-recognition-api#operation/transcribeAudio/properties/model)=general` We are also releasing accuracy improvements and an increased model vocabulary to our general model. Additionally, we've updated our general model to incorporate our latest improvements to punctuation (`punctuate=true`). The general model is Deepgram's default model selection, but can also be called by, passing `model=general` as an API parameter in your request. If you do not wish to use the latest version, be sure to specify the desired version as `version={desired_version}`.   [View the Deepgram Documentation](https://developers.deepgram.com/)
