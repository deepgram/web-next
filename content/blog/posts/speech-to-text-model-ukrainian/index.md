---
title: "Speech-to-Text Model for Ukrainian Released"
description: "We created a Ukrainian speech-to-text model to help with humanitarian efforts in Eastern Europe. This post explains how to get access to it."
date: 2022-03-21
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981411/blog/speech-to-text-model-ukrainian/STT-model-for-ukranian-released-thumb-554x220%402x.png
authors:
  - chris-doty
category: product-news
tags:
  - michael
seo:
  title: "Speech-to-Text Model for Ukrainian Released"
  description: "We created a Ukrainian speech-to-text model to help with humanitarian efforts in Eastern Europe. This post explains how to get access to it."
shorturls:
  share: 
  twitter: 
  linkedin: 
  reddit: 
  facebook: 
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981411/blog/speech-to-text-model-ukrainian/STT-model-for-ukranian-released-thumb-554x220%402x.png
---

We've been asked by a few different organizations to help with humanitarian efforts in Eastern Europe by creating a speech model to transcribe Ukrainian. Such a model is needed in, for example, call centers that have been set up to help refugees fleeing the conflict. We'd like to offer access to that model to anyone who needs it to help with the current crisis-all Ukrainian speech transcription will be free for at least the next 6 months.

## How to Get Access to Ukrainian ASR

If you'd like to get access to Ukrainian speech-to-text, you can [sign up for a Deepgram account](https://console.deepgram.com/) and select Ukrainian as your audio language in our drop down menu, as seen in the image below. ![](https://res.cloudinary.com/deepgram/image/upload/v1661976853/blog/speech-to-text-model-ukrainian/image1-1024x732.png) To transcribe Ukrainian audio with Deepgram's API, simply add **language=uk** to your transcription requests. You can visit [our documentation](https://developers.deepgram.com/documentation/features/language/) for more information about our language support.

<pre>curl -X POST \
 -H "Authorization:Token YOUR_API_KEY" \
 -H 'content-type: application/json' \
 -d '{"url":"LINK_TO_YOUR_FILE"}' \
"https://api.deepgram.com/v1/listen?language=uk"</pre>

## Conclusion

We're pleased that we've been able to use [Deepgram's end-to-end approach](https://blog.deepgram.com/deep-learning-speech-recognition/) and transfer learning to quickly train a model for Ukrainian to support those on the ground assisting the Ukrainian people. If there are other languages that would be useful to you, please see our [language page](https://deepgram.com/product/languages/) for a list of all of the models that we currently offer. And if you still have questions or need help getting started, you can reach out to us via the [contact page](https://deepgram.com/contact-us/).
