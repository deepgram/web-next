---
title: "Generate WebVTT and SRT Captions Automatically with Node.js"
description: "Create ready-to-upload caption files for the web and broadcast."
date: 2021-11-15
cover: https://res.cloudinary.com/deepgram/image/upload/v1636406494/blog/2021/11/generate-webvtt-srt-captions-nodejs/Generate-WebVTT-SRT-Captions-w-Nodejs%402x.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
    - nodejs
    - accessibility
seo:
    title: "Generate WebVTT and SRT Captions Automatically with Node.js"
    description: "Create ready-to-upload caption files for the web and broadcast."
shorturls:
    share: https://dpgr.am/edad73f
    twitter: https://dpgr.am/40622a2
    linkedin: https://dpgr.am/3530253
    reddit: https://dpgr.am/76f3d80
    facebook: https://dpgr.am/2991d2d
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453801/blog/generate-webvtt-srt-captions-nodejs/ograph.png
---

Providing captions for audio and video isn't just a nice-to-have - it's critical for accessibility. While this isn't specifically an accessibility post, I wanted to start by sharing [Microsoft's Inclusive Toolkit](https://www.microsoft.com/design/inclusive/). Something I hadn't considered before reading this was the impact of situational limitations. To learn more, jump to Section 3 of the toolkit - "Solve for one, extend to many". Having a young (read "loud") child, I've become even more aware of where captions are available, and if they aren't, I simply can't watch something with her around.

There are two common and similar caption formats we are going to generate today - WebVTT and SRT. A WebVTT file looks like this:

    WEBVTT

    1
    00:00:00.219 --> 00:00:03.512
    - yeah, as much as it's worth celebrating

    2
    00:00:04.569 --> 00:00:06.226
    - the first space walk

    3
    00:00:06.564 --> 00:00:07.942
    - with an all female team

    4
    00:00:08.615 --> 00:00:09.795
    - I think many of us

    5
    00:00:10.135 --> 00:00:13.355
    - are looking forward to it just being normal.

And a SRT file looks like this:

    1
    00:00:00,219 --> 00:00:03,512
    yeah, as much as it's worth celebrating

    2
    00:00:04,569 --> 00:00:06,226
    the first space walk

    3
    00:00:06,564 --> 00:00:07,942
    with an all female team

    4
    00:00:08,615 --> 00:00:09,795
    I think many of us

    5
    00:00:10,135 --> 00:00:13,355
    are looking forward to it just being normal.

Both are very similar in their basic forms, except for the millisecond separator being `.` in WebVTT and `,` in SRT. In this post, we will generate them manually from a Deepgram transcription result to see the technique, and then use the brand new Node.js SDK methods (available from v1.1.0) to make it even easier.

## Before We Start

You will need:

*   Node.js installed on your machine - [download it here](https://nodejs.org/en/).
*   A Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys).
*   A hosted audio file URL to transcribe - you can use https://static.deepgram.com/examples/deep-learning-podcast-clip.wav if you don't have one.

Create a new directory and navigate to it with your terminal. Run `npm init -y` to create a `package.json` file and then install the Deepgram Node.js SDK with `npm install @deepgram/sdk`.

## Set Up Dependencies

Create an `index.js` file, open it in your code editor, and require then initialize the dependencies:

```js
const fs = require('fs')
const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram('YOUR_API_KEY')
```

## Get Transcript

To be given timestamps of phrases to include in our caption files, you need to ask Deepgram to include utterances (a chain of words or, more simply, a phrase).

```js
deepgram.transcription
  .preRecorded(
    {
      url: 'https://static.deepgram.com/examples/deep-learning-podcast-clip.wav',
    },
    { punctuate: true, utterances: true }
  )
  .then((response) => {
    //  Following code here
  })
  .catch((error) => {
    console.log({ error })
  })
```

## Create a Write Stream

Once you open a writable stream, you can insert text directly into your file. When you do this, pass in the `a` flag, and any time you write data to the stream, it will be appended to the end. Inside of the `.then()` block:

```js
// WebVTT Filename
const stream = fs.createWriteStream('output.vtt', { flags: 'a' })

// SRT Filename
const stream = fs.createWriteStream('output.srt', { flags: 'a' })
```

## Write Captions

The WebVTT and SRT formats are very similar, and each requires a block of text per utterance.

### WebVTT

```js
stream.write('WEBVTT\n\n')
for (let i = 0; i < response.results.utterances.length; i++) {
  const utterance = response.results.utterances[i]
  const start = new Date(utterance.start * 1000).toISOString().substr(11, 12)
  const end = new Date(utterance.end * 1000).toISOString().substr(11, 12)
  stream.write(`${i + 1}\n${start} --> ${end}\n- ${utterance.transcript}\n\n`)
}
```

Deepgram provides seconds back as a number (`15.4` means 15.4 seconds), but both formats require times as `HH:MM:SS.milliseconds` and getting the end of a `Date().toISOString()` will achieve this for us.

#### Using the SDK

Replace the above code with this single line:

```js
stream.write(response.toWebVTT())
```

### SRT

```js
for (let i = 0; i < response.results.utterances.length; i++) {
  const utterance = response.results.utterances[i]
  const start = new Date(utterance.start * 1000)
    .toISOString()
    .substr(11, 12)
    .replace('.', ',')
  const end = new Date(utterance.end * 1000)
    .toISOString()
    .substr(11, 12)
    .replace('.', ',')
  stream.write(`${i + 1}\n${start} --> ${end}\n${utterance.transcript}\n\n`)
}
```

Differences? No `WEBVTT` line at the top, millisecond separator is `,`, and no `-` before the utterance.

#### Using the SDK

Replace the above code with this single line:

```js
stream.write(response.toSRT())
```

## One Line to Captions

We actually implemented `.toWebVTT()` and `.toSRT()` straight into the Node.js SDK while writing this post. Now, it's easier than ever to create valid caption files automatically with Deepgram. If you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).

        