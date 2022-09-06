---
title: "Building a Voice-Powered Song Search"
description: "🎅  Let Deepgram detect the Christmas song"
date: 2021-12-16
cover: https://res.cloudinary.com/deepgram/image/upload/v1639662018/blog/2021/12/song-search-js/Building-Voice-Powered-Song-Search%402x.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
    - javascript
    - microphone
seo:
    title: "Building a Voice-Powered Song Search"
    description: "🎅  Let Deepgram detect the Christmas song"
shorturls:
    share: https://dpgr.am/15b5006
    twitter: https://dpgr.am/73a2300
    linkedin: https://dpgr.am/3e7d48b
    reddit: https://dpgr.am/e2319b5
    facebook: https://dpgr.am/cd65bc2
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453835/blog/song-search-js/ograph.png
---

Love it or hate it, Christmas is a period for music, and that comes the frustrating scenario of knowing lyrics but not quite knowing the song. Of course, you could just search the lyrics, but where's the fun in that? In this project, we will warm up our vocal cords and use Deepgram and the Genius Song Lyrics API to build a website that should correctly guess spoken or sung lyrics.

While doing this, we'll learn how to stream microphone data to Deepgram via a server, so you don't need to worry about exposing your API Key.

This is what we'll be building:

![A diagram showing 9 steps. 1 - emit mic data from browser to server using socket.io. 2 - send mic data from server to Deepgram via Deepgram SDK. 3 - Deepgram returns utterances to server. 4 - the server stores utterances. 5 - a user presses a button and emits search event to server. 6 - server searches song on Genius. 7 - Genius sends response to server. 8 - Server emits response to browser. 9 - browser shows result. Steps 1-3 have a green background and steps 4-9 have a blue background.](https://res.cloudinary.com/deepgram/image/upload/v1637178711/blog/2021/12/song-search-js/diagram.png)

The green area is one set of steps that gets us to the point of transcripts. The blue area covers searching for and displaying songs. Don't worry if that looks like a lot - we'll take it step by step. If you want to look at the final project code, you can find it at `https://github.com/deepgram-devs/song-search`.

## Before We Start

You will need:

*   Node.js installed on your machine - [download it here](https://nodejs.org/en/).
*   A Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys).
*   A Genius API Access Token - [get one here](https://genius.com/api-clients).

Create a new directory and navigate to it with your terminal. Run `npm init -y` to create a `package.json` file and then install the following packages:

    npm install dotenv @deepgram/sdk express socket.io axios

Create a `.env` file and add the following:

    DG_KEY=replace_with_deepgram_api_key
    GENIUS_TOKEN=replace_with_genius_access_token

Create an `index.js` file, a folder called `public`, and inside of the public folder create an `index.html` file. In `index.html` create a boilerplate HTML file:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <!-- Further code goes here -->
  </body>
</html>
```

## Establish a Socket Connection

The socket.io library can establish a two-way connection between our server (`index.js`) and client (`index.html`). Once connected, we can push data between the two in real-time. We will use this to send data from the user's microphone to our server to be processed by Deepgram and show results from the server logic.

In the `index.html` `<body>` tag:

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io()
  // Further code goes here
</script>
```

In `index.js` create a combined express and socket.io server and listen for connections:

```js
// Require
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

// Configure
app.use(express.static('public'))

// Logic
io.on('connection', (socket) => {
  console.log(`Connected at ${new Date().toISOString()}`)
})

// Run
http.listen(3000, console.log(`Started at ${new Date().toISOString()}`))
```

For this tutorial, I would leave the comments in as I refer to sections later by their names. Start the server in your terminal by navigating to the directory and running `node index.js`. Open your browser to `http://localhost:3000`, and you should see 'Connected at {date}' in your terminal. Once this connection is established, we can send and listen for events on both the server and the client.

## Access and Send Audio

In [a blog post last month](/blog/2021/11/live-transcription-mic-browser/) we covered how to access and retreive data from user's mic in a web browser. Each of the steps are covered there, so we'll be lifting the examples from it without a deep explanation. In `index.html`:

```js
navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  const mediaRecorder = new MediaRecorder(stream)

  mediaRecorder.addEventListener('dataavailable', (event) => {
    if (event.data.size > 0) {
      socket.emit('microphone-stream', event.data)
    }
  })
  mediaRecorder.start(1000)
})
```

This will immediately ask for access to the microphone and begin accessing data once permitted. When emitting events with socket.io, we can specify a specific event name which we can then listen for on the server. Here, we have called it `microphone-stream` and send it with the raw mic data.

## Listening for Events

In `index.js` inside of the connection and below the `console.log()` statement:

```js
socket.on('microphone-stream', (data) => {
  console.log('microphone-stream event')
})
```

Restart your server and then refresh your web page. Once you grant access to your microphone, you should see a steady stream of logs indicating that data is sent from your browser to the server. You may stop your server while we continue with the next step.

![A terminal showing the server starting, a client connecting, and then 4 microphone stream event logs.](https://res.cloudinary.com/deepgram/image/upload/v1637178711/blog/2021/12/song-search-js/microphone-stream-event.png)

## Setting Up Deepgram

At the top of the Require section in `index.js` add `dotenv` which will allow access to the `.env` file values.

```js
require('dotenv').config()
```

At the bottom of the Require section require the Deepgram Node.js SDK which we installed earlier:

```js
const { Deepgram } = require('@deepgram/sdk')
```

Finally, in configure, initialize the SDK and create a new live transcription service:

```js
const deepgram = new Deepgram(process.env.DG_KEY)
const deepgramLive = deepgram.transcription.live({ utterances: true })
```

## Getting Live Deepgram Transcripts

Inside of the `microphone-stream` event handler comment out the `console.log()`. In it's place, take the provided data and send it directly to Deepgram:

```js
socket.on('microphone-stream', (data) => {
  // console.log('microphone-stream event')
  deepgramLive.send(data)
})

// Further code goes here
```

`deepgramLive` provides an event when Deepgram has a transcript ready, and like the [browser live transcription blog post](/blog/2021/11/live-transcription-mic-browser/) we will wait for the final transcript for each of our utterances (phrases).

```js
let transcript = ''
deepgramLive.addListener('transcriptReceived', (data) => {
  const result = JSON.parse(data)
  const utterance = result.channel.alternatives[0].transcript
  if (result.is_final && utterance) {
    transcript += ' ' + utterance
    console.log(transcript)
  }
})
```

Restart your server, refresh your browser, and speak into your microphone. You should see a transcript appear in your terminal.

![A terminal showing give phrases with words spoken, with each adding words on to the last and getting longer.](https://res.cloudinary.com/deepgram/image/upload/v1637178714/blog/2021/12/song-search-js/transcript-terminal-log.png)

## Triggering Song Search

Because a set of lyrics can take up multiple utterances, we need to have a way to indicate that we are finished and the search should take place. We will attach an event listener to a button that, when pressed, will emit an event.

In `index.html` add a `<button>` at the top of your `<body>` tag:

    <button>Search Song</button>

Just below `mediaRecorder.start(1000)` add the following logic:

```js
const button = document.querySelector('button')
button.addEventListener('click', () => {
  button.remove()
  mediaRecorder.stop()
  socket.emit('search')
})
```

When the button is pressed, it will be removed from the DOM, so we only can click it once; we stop the mediaRecorder (and, in doing so, stop emitting the `microphone-stream` events), and emit a new event called `search`.

In `index.js` add a new socket event listener just after the block for `microphone-stream` is closed:

```js
socket.on('search', async () => {
  console.log('search event', transcript)
  // Further code here
})
```

Restart your server and refresh the browser. Speak a few phrases and click the button. You should see the search event take place with the final transcript logged.

## Searching for Songs

We will use the [Genius API](https://docs.genius.com) to search for songs based on lyrics. To make this API call, we'll utilize Node package `axios`. In the Require section of our `index.js` file, add the package:

```js
const axios = require('axios')
```

And make the API call when the `search` event is received:

```js
const { data } = await axios({
  method: 'GET',
  url: `https://api.genius.com/search?q=${transcript}`,
  headers: {
    Authorization: `Bearer ${process.env.GENIUS_TOKEN}`,
  },
})
const topThree = data.response.hits.slice(0, 3)
console.log(topThree)

// Further code here
```

Restart your server and refresh your browser.

![A terminal showing an array with several items. Each item contains metadata for one song.](https://res.cloudinary.com/deepgram/image/upload/v1637178713/blog/2021/12/song-search-js/songs-returned.png)

**Yay!**

## Displaying Results

The final step is to show the output to the user by emitting an event from the server back to the client. Doing this is nearly identical to the other direction. In `index.js`:

```js
socket.emit('result', topThree)
```

In `index.html` add an empty `<ul>` under the `<button>`:

    <ul></ul>

At the bottom of the `<script>` tag, below all other code, listen for the `results` event and add items to the new list:

```js
socket.on('results', (data) => {
  const ul = document.querySelector('ul')
  for (let song of data) {
    const li = `
    <li>
      <img src="${song.result.song_art_image_url}">
      <p>${song.result.full_title}</p>
    </li>
  `
    ul.innerHTML += li
  }
})
```

Before we try this add this minimal styling inside of your `<head>` tag:

```html
<style>
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4em;
    list-style: none;
  }
  img {
    width: 100%;
  }
</style>
```

Restart your server, refresh your browser, and try it out! You can display any of the information provided by Genius.

<youtube id="IFuJiNNoYYw"></youtube>

No one ever said I was a good singer.

## Wrapping Up

There are quite a lot of improvements you could make here:

*   Show utterances to users in the browser
*   Do searches as soon as utterances are available, and update them as more words are said
*   Allow multiple songs without needing to 'reset' by refreshing
*   Give it a festive theme

This post has also introduced you to the code required to stream your microphone from the browser to Deepgram via a server, thus protecting your API Key from being exposed.

We'll have some more posts coming out before Christmas, but from me, this is it until January, so please have a wonderful festive period and a wonderful new year. The complete project is available at `https://github.com/deepgram-devs/song-search`, and if you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).

        