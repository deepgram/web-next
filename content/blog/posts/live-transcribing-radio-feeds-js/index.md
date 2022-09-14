---
title: Transcribing Radio Broadcasts With Node.js
description: Learn how to use Deepgram to generate and store transcripts for
  your favorite radio stations. An excellent starting point to learn more about
  live transcription.
date: 2022-07-25
cover: https://res.cloudinary.com/deepgram/image/upload/v1658753935/blog/2022/07/live-transcribing-radio-feeds-js/cover.png
authors:
  - kevin-lewis
category: tutorial
tags:
  - javascript
  - nodejs
seo:
  title: Transcribing Radio Broadcasts With Node.js
  description: Learn how to use Deepgram to generate and store transcripts for
    your favorite radio stations. An excellent starting point to learn more
    about live transcription.
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661454108/blog/live-transcribing-radio-feeds-js/ograph.png
shorturls:
  share: https://dpgr.am/dd89e87
  twitter: https://dpgr.am/dc14509
  linkedin: https://dpgr.am/ac23935
  reddit: https://dpgr.am/0f3c3af
  facebook: https://dpgr.am/151cdf6
---
There are so many uses for Deepgram's live transcription service - from captioning meetings and events to creating home assistance and supporting call center operators by picking up on keywords.

Today, you'll use the Deepgram JavaScript SDK to provide live transcriptions to live radio broadcasts and store spoken words in a file that can then be further analyzed.

## Before You Start

You will need a Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys).

Create a new directory, open it on a code editor, and navigate to it in your terminal. Initialize a new Node.js project and install this project's dependencies:

```
npm init -y
npm install cross-fetch @deepgram/sdk
```

[`cross-fetch`](https://npm.im/cross-fetch) is used to make HTTP requests more straightforward in your Node.js projects. Alternatives include `axios`, `got`, and `httpie` - use whatever works for you or the default `http` library in Node.js, which requires no dependencies.

Create an `index.js` file and open it in your code editor. Initialize the project dependencies:

```js
const fetch = require('cross-fetch')
const { Deepgram } = require('@deepgram/sdk')
const fs = require('fs')
```

## Create a Deepgram Live Transcription Session

Initialize the Deepgram JavaScript SDK, and create a new live transcription session:

```js
const deepgram = new Deepgram('YOUR_DEEPGRAM_API_KEY')
const deepgramLive = deepgram.transcription.live({
  punctuate: true,
  tier: 'enhanced'
})
```

Two features are used in this session - punctuation and tier. Read more about [Deepgram features](https://developers.deepgram.com/documentation/features/) such as redaction, diarization, and language.

## Fetch Real-Time Data from Radio Stations

Make sure you have a direct audio stream for the radio station. A good way of testing this is to open the URL in a browser - you should see just the built-in browser audio player without an accompanying web page.

![A browser showing a blank page, except one live native audio player](https://res.cloudinary.com/deepgram/image/upload/v1657635287/blog/2022/07/live-transcribing-radio-feeds-js/livestream-station.png)

Here are a few URLs for you to try:

* BBC Radio 4 (works outside the UK): http://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourlw_online_nonuk
* BBC Radio 4 (works in the UK): http://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourlw
* France Inter: https://direct.franceinter.fr/live/franceinter-midfi.mp3

If you use the French channel, be sure to add `language: fr` to your Deepgram session options.

```js
const url = 'http://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourlw_online_nonuk'

fetch(url).then(r => r.body).then(res => {
  res.on('readable', () => {
    const data = res.read()
    console.log(data)
  })
})
```

Run your code with `node index.js`, leave it running for a couple of seconds, and stop it with `ctrl+c`. You should see a bunch of buffers logged to your console.

![Terminal showing the code being run, and 4 buffers of data](https://res.cloudinary.com/deepgram/image/upload/v1657635287/blog/2022/07/live-transcribing-radio-feeds-js/logging-buffers.png)

This is what you want to see - these buffers of audio data can be sent directly to Deepgram.

## Transcribe the Radio Station

Replace `console.log(data)` with the following to send the buffers to Deepgram if the connection is still open:

```js
if(deepgramLive.getReadyState() === 1) {
    deepgramLive.send(data)
}
```

At the bottom of `index.js`, below all other code, add this code to listen for returned transcripts:

```js
deepgramLive.addListener('transcriptReceived', (message) => {
  const data = JSON.parse(message)
  const transcript = data.channel.alternatives[0].transcript
  if(transcript) {
    console.log(transcript)
  }
})
```

Rerun your code, and you should see transcripts in your terminal.

![Terminal showing code being run, and 4 lines of transcripts](https://res.cloudinary.com/deepgram/image/upload/v1657636164/blog/2022/07/live-transcribing-radio-feeds-js/transcripts-in-term.png)

## Save New Transcripts to a File

To save these transcripts to a file, you must first create a write stream and then write content to it. At the top of your file, just below your require statements, create the stream:

```js
const stream = fs.createWriteStream('output.txt', { flags: 'a' })
```

The `a` flag will open the file specifically for appending new data. If it does not exist, it will be automatically created.

Replace `console.log(transcript)` with the following:

```js
stream.write(transcript + ' ')
```

This will add the new transcript to the end of the existing file, ensuring there is a space between each item.

Run your code again, wait a few seconds, and then stop it. Take a look at the new `output.txt` file, and you should see a big block of text which can then be stored in a database for compliance or further analysis.

## In Summary

The full code is here:

```js
const fetch = require('cross-fetch')
const { Deepgram } = require('@deepgram/sdk')
const fs = require('fs')
const stream = fs.createWriteStream('output.txt', { flags:'a' })

const deepgram = new Deepgram(deepgramApiKey)
const deepgramLive = deepgram.transcription.live({
  punctuate: true,
  tier: 'enhanced'
})

const url = 'http://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourlw_online_nonuk'

fetch(url).then(r => r.body).then(res => {
  res.on('readable', () => {
    const data = res.read()
    if(deepgramLive.getReadyState() === 1) {
      deepgramLive.send(data)
    }
  })
})

deepgramLive.addListener('transcriptReceived', (message) => {
  const data = JSON.parse(message)
  const transcript = data.channel.alternatives[0].transcript
  if(transcript) {
    stream.write(transcript + ' ')
  }
})
```

If you have any questions, please feel free to reach out to us over email (`devrel@deepgram.com`) or via Twitter ([@DeepgramDevs](https://mobile.twitter.com/deepgramdevs)).

```
    
```