---
title: "Adding Translation to Your Transcription Project"
description: "Use iTranslate's API to translate both pre-recorded and live transcription."
date: 2022-01-26
cover: https://res.cloudinary.com/deepgram/image/upload/v1642934713/blog/2022/01/translation-itranslate/Adding-Live-Translation-to-Your-Transcription-Project%402x.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
    - translation
    - nodejs
seo:
    title: "Adding Translation to Your Transcription Project"
    description: "Use iTranslate's API to translate both pre-recorded and live transcription."
shorturls:
    share: https://dpgr.am/ea626e0
    twitter: https://dpgr.am/291f11b
    linkedin: https://dpgr.am/2f4977d
    reddit: https://dpgr.am/4810389
    facebook: https://dpgr.am/dbbcb17
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453854/blog/translation-itranslate/ograph.png
---

Getting fast and accurate transcripts with Deepgram is often just one step in a broader project. We frequently get asked about adding translations to projects once transcripts are returned, and that's what we'll be doing in this project.

There are plenty of translation APIs available to developers, but I've become rather fond of [iTranslate](https://itranslate.com/api) after using them in a project earlier this month. It's a fast an straightforward API with a generous free tier and no rate limits at the time of writing.

## Before We Start

You will need:

*   Node.js installed on your machine - [download it here](https://nodejs.org/en/).
*   A Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys).
*   An iTranslate API Key - [get one here](https://itranslate.com/api).

Create a new directory and navigate to it with your terminal. Run `npm init -y` to create a `package.json` file and then install the following packages:

    npm install dotenv @deepgram/sdk cross-fetch

Create a `.env` file and add the following:

    DG_KEY=replace_with_deepgram_api_key
    ITRANSLATE_KEY=replace_with_itranslate_api_key

Create an `index.js` file and add the following to it:

```js
require('dotenv').config()
const fetch = require('cross-fetch')
const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DG_KEY)
```

## An Introduction to iTranslate

iTranslate supports text translation for over 50 languages. You may either specify the 'source dialect' with a value such as `en` (English) or `es` (Spanish), or set the value to `auto` and let iTranslate detect the language automatically. You must also specify a 'target dialect' for translation to work. An API request would look like this:

    POST https://dev-api.itranslate.com/translation/v2/
    data: {
       'source': { 'dialect': 'en', 'text': 'Hello World' },
       'target': { 'dialect': 'es' }
    }
    headers: {
        'Authorization': 'Bearer YOUR-API-KEY'
        'Content-Type': 'application/json'
    }

The result looks like this:

```js
{
  'source': { 'dialect': 'en', 'text': 'Hello World' },
  'target': { 'dialect': 'es', 'text': 'Hola, Mundo' },
  'times': { 'total_time': 0.051 }
}
```

## Create A Translation Function

Add the following to the bottom of your `index.js` file:

```js
async function translate(source, target, text) {
  const url = 'https://dev-api.itranslate.com/translation/v2/'
  const headers = {
    Authorization: 'YOUR ITRANSLATE API KEY',
    'Content-Type': 'application/json',
  }
  const data = {
    source: { dialect: source, text: text },
    target: { dialect: target },
  }

  const result = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  }).then((r) => r.json())

  return result
}
```

Try it out by adding the following code underneath the translate function:

```js
translate('en', 'es', 'Hello world').then((data) => console.log(data))
```

Run this with `node index.js`, and you should see the output in your terminal. Once you know it works, delete the line you just wrote.

## Pre-Recorded Transcript Translation

To provide transcripts in languages which are different from the source audio, we will first get a transcript with Deepgram. Once the transcript is returned, we will translate the text. An example would look like this:

```js
const url = 'https://static.deepgram.com/examples/nasa-spacewalk-interview.wav'
deepgram.transcription.preRecorded({ url }).then(async (response) => {
  const { transcript } = response.results.channels[0].alternatives[0]
  const translated = await translate('en', 'es', transcript)
  console.log(translated)
})
```

## Live Transcript Translation

iTranslate does not impose a rate limit at the time of writing, so transcribing live results from Deepgram is possible. This example gets live radio data and transcribes it with Deepgram. Once data is returned, we use the `translate` function:

```js
const deepgramLive = deepgram.transcription.live({ punctuate: true })

const url = 'http://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourlw_online_nonuk'
fetch(url)
  .then((r) => r.body)
  .then((res) => {
    res.on('readable', () => {
      if (deepgramLive.getReadyState() == 1) {
        deepgramLive.send(res.read())
      }
    })
  })

deepgramLive.addListener('transcriptReceived', async (transcript) => {
  const data = JSON.parse(transcript)
  const response = data.channel.alternatives[0]
  if (response.transcript && data.is_final) {
    translate('en', 'es', response.transcript).then((data) => console.log(data))
  }
})
```

## In Summary

Because iTranslate is such a fast translation service, it is a good pairing with Deepgram's super fast speech recognition API.

If you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).

        