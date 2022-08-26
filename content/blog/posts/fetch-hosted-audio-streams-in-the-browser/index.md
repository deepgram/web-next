---
title: "Fetch Hosted Audio Streams In The Browser"
description: "Learn how to fetch an audio stream from a URL, break down a readable stream into chunks using the JavaScript Streams API, and send the audio stream through a WebSocket to Deepgram."
date: 2022-06-16
cover: https://res.cloudinary.com/deepgram/image/upload/v1655135180/blog/2022/06/fetch-hosted-audio-streams-in-the-browser/How-to-fetch-hosted-audio-streams-in-the-browser-blog.png
authors:
    - sandra-rodgers
category: tutorial
tags:
    - websockets
    - browser
    - javascript
seo:
    title: "Fetch Hosted Audio Streams In The Browser"
    description: "Learn how to fetch an audio stream from a URL, break down a readable stream into chunks using the JavaScript Streams API, and send the audio stream through a WebSocket to Deepgram."
shorturls:
    share: https://dpgr.am/1aab758
    twitter: https://dpgr.am/754f7d0
    linkedin: https://dpgr.am/d758df7
    reddit: https://dpgr.am/5ef955f
    facebook: https://dpgr.am/590f31a
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454096/blog/fetch-hosted-audio-streams-in-the-browser/ograph.png
---

Today we'll look at how to fetch an audio stream from a URL, send the stream data to Deepgram, and receive transcriptions in return. This is particularly useful when you want to get live stream data and send it in real-time (and also receive a transcription back from Deepgram in real-time chunks).

This will require three main steps:

1.  Open a WebSocket channel to Deepgram
2.  Request the hosted audio stream data from the URL where the stream is hosted (using Fetch)
3.  Pass the stream in incremental chunks to Deepgram

If you want to see the audio stream transcribed by Deepgram's speech-to-text API, I recommend signing up for a free account and getting an API key [here](https://console.deepgram.com/signup?jump=keys).

## Open WebSocket Channel

The very first thing we need to do is connect to Deepgram with a browser WebSocket.

```js
const socket = new WebSocket('wss://api.deepgram.com/v1/listen', [
  'token',
  'YOUR_DEEPGRAM_API_KEY',
])
```

Next we'll write several event listeners. **Events** are actions that occur within a programmed system; the system is designed to inform us of those events so that we can write code in reaction to them. The WebSocket API includes several events that fire throughout the process of the socket opening, data being received, and the socket closing. We'll use an event listener to react to those events.

We write this WebSocket logic first because then we can listen for the `onopen` event to take place, and once it does, we make the fetch request to receive the audio file:

```js
socket.onopen = () => {
  // Fetch stream
  // Send stream to Deepgram
}

socket.onmessage = (message) => {
  // Receive transcript from Deepgram
  // Do something with transcript
}

socket.onclose = () => {
  console.log({ event: 'onclose' })
}

socket.onerror = (error) => {
  console.log({ event: 'onerror', error })
}
```

## Fetch Hosted Audio Stream

The next step will be to write the fetch request. The browser's global `fetch()` method takes a string parameter that is the URL to where we will be making the request.

The method returns a promise, so we can chain `.then()` to wait for the response and get the response body.

```js
socket.onopen = () => {
  const url =
    'https://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourlw_online_nonuk'

  fetch(url)
    .then((response) => response.body)
    .then((body) => {
      // Send stream to Deepgram
    })
}
```

## Read Chunks and Send to Deepgram

The `response.body` we receive from the URL will be a `ReadableStream`, which is a "readable stream of byte data" ([Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)). This just means it is data that can be read. And in order to read the data, we must break it down - similar to the way a human must break a sentence down into words in order to comprehend its meaning.

How do we break down the stream data? The Streams API was created for this purpose. We'll use it to take the stream and break it into **chunks**, which are the single pieces of data that are written to or read from a stream.

We can write a function to consume the readable stream and turn it into chunks to send to Deepgram. There are different ways to do this, but all of them will need to do the following:

1.  Create a [reader](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader) using the `getReader()` method
2.  Use the `read()` method of the reader interface to get access to each chunk in the queue (returned as a promise)

Here is one way to write this function:

```js
async function readAllChunks(readableStream) {
  // Create reader:
  const reader = readableStream.getReader()
  while (true) {
    // Read chunks:
    const { done, value } = await reader.read()
    if (done) {
      break
    }
    // Send chunks to Deepgram:
    socket.send(value)
  }
}
```

Since the `.read()` method returns a promise that resolves to an object, we can destructure that object into its two properties: `done` and `value`. Then we can send that value on to Deepgram for transcription.

The Streams API specification provides [other useful examples](https://streams.spec.whatwg.org/#rs-intro) for how to consume a `ReadableStream`.

Now that we have the logic to read the stream as chunks, we need to invoke the function and pass in the readable stream:

```js
socket.onopen = () => {
  const url =
    'https://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourlw_online_nonuk'

  fetch(url)
    .then((response) => response.body)
    .then((body) => {
      // Invoke function that sends readable stream:
      readAllChunks(body)
    })
}
```

## Finishing Up

We have accomplished what we set out to do, which is to get a hosted audio stream and send it to Deepgram to be transcribed in realtime. When the transcript is returned, we can do whatever it is we intended to do with it.

Here's the code in its entirety. I've also included [an example](https://stackblitz.com/edit/web-platform-v9nyiq?file=script.js,index.html) in my Stackblitz account that puts the text from the stream onto the browser page. Be sure to add an API key to make it work.

```js
const socket = new WebSocket('wss://api.deepgram.com/v1/listen', [
  'token',
  'YOUR_DEEPGRAM_API_KEY',
])

socket.onopen = () => {
  const url =
    'https://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourlw_online_nonuk'
  fetch(url)
    .then((response) => response.body)
    .then((body) => {
      readAllChunks(body)
    })
}

async function readAllChunks(readableStream) {
  const reader = readableStream.getReader()
  while (true) {
    const { done, value } = await reader.read()
    if (done) {
      break
    }
    socket.send(value)
  }
}

socket.onmessage = (message) => {
  const received = JSON.parse(message.data)
  const transcript = received.channel.alternatives[0].transcript
  if (transcript && received.is_final) {
    document.querySelector('#captions').textContent += transcript + ' '
  }
}

socket.onclose = () => {
  console.log({ event: 'onclose' })
}

socket.onerror = (error) => {
  console.log({ event: 'onerror', error })
}
```

Have questions? We're happy to help [@DeepgramDevs.](https://twitter.com/DeepgramDevs)

        