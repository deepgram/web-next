---
title: "Getting Started with Live Transcription and Vue.js"
description: "Learn how to use Deepgram's Speech-to-Text API for fast and accurate live transcripts in your Vue.js applications."
date: 2022-07-18
cover: https://res.cloudinary.com/deepgram/image/upload/v1658067804/blog/2022/07/getting-started-live-transcription-vue/cover.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
    - websockets
    - vuejs
seo:
    title: "Getting Started with Live Transcription and Vue.js"
    description: "Learn how to use Deepgram's Speech-to-Text API for fast and accurate live transcripts in your Vue.js applications."
shorturls:
    share: https://dpgr.am/e81eaba
    twitter: https://dpgr.am/eb6c990
    linkedin: https://dpgr.am/edcdb3d
    reddit: https://dpgr.am/adf60f5
    facebook: https://dpgr.am/4db5941
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454106/blog/getting-started-live-transcription-vue/ograph.png
---

This post will cover how to set up Deepgram for live transcriptions in your Vue.js application. We'll set up Deepgram in a single HTML file with the Vue.js `<script>` include and no other dependencies.

## Before We Start

You will need a free [Deepgram API Key](https://console.deepgram.com/signup?jump=keys).

## Setting Up a Vue Project With a Script Include

Create an `index.html` file and open it in a code editor. Set up a Vue project:

```js
<html>
<head></head>
<body>
  <div id="app">
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.7.0"></script>
  <script>
    const app = new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```

## Get Microphone Data

This code will be written in the `created()` lifecycle method - meaning it will happen immediately.

Firstly, ask the user for access to their mic:

```js
const app = new Vue({
  el: '#app',
  async created() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      .catch(error => alert(error))
  }
})
```

Next, plug the stream into a MediaRecorder so we can later access the raw data from the accessed microphone:

```js
const app = new Vue({
  el: '#app',
  async created() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      .catch(error => alert(error))

    // Create MediaRecorder
    if(!MediaRecorder.isTypeSupported('audio/webm')) return alert('Unsupported browser')
    this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' })
  },
  // Store MediaRecorder
  data: {
    mediaRecorder: null
  }
})
```

Remember that if you are creating Vue components, `data` must be a function that returns an object.

## Connect to Deepgram

Create a button which will begin transcription. Trigger a new `begin()` method with it's clicked:

```js
<html>
<head></head>
<body>
  <div id="app">
    <!-- Add button -->
    <button @click="begin">Begin transcription</button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.7.0"></script>
  <script>
    const app = new Vue({
      el: '#app',
      async created() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
          .catch(error => alert(error))

        if(!MediaRecorder.isTypeSupported('audio/webm')) return alert('Unsupported browser')
        this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' })
      },
      data: {
        mediaRecorder: null
      },
      // Create begin method
      methods: {
        begin() {

        }
      }
    })
  </script>
</body>
</html>
```

Take a moment to get [a free Deepgram API Key](https://console.deepgram.com/signup?jump=keys) before continuing.

Use the browser native WebSocket interface to connect to Deepgram's live transcription server. Store the WebSocket instance in `data`:

```js
data: {
  mediaRecorder: null,
  // Add socket
  socket: null
},
methods: {
  begin() {
    const DG_URL = 'wss://api.deepgram.com/v1/listen?language=de'
    const DG_KEY = 'YOUR_DEEPGRAM_API_KEY'
    this.socket = new WebSocket(DG_URL, ['token', DG_KEY])
  }
}
```

This WebSocket creates a 2-way connection with Deepgram. See the `language=de` in the URL? That's telling it you'll be speaking German. We have loads of [supported languages](https://developers.deepgram.com/documentation/features/language/) to check out!

## Send Data to Deepgram

Once the WebSocket connection is open, start sending mic data:

```js
methods: {
  begin() {
    const DG_URL = 'wss://api.deepgram.com/v1/listen?language=de'
    const DG_KEY = 'YOUR_DEEPGRAM_API_KEY'
    this.socket = new WebSocket(DG_URL, ['token', DG_KEY])
    // Run the startStreaming method when socket is opened
    this.socket.onopen = this.startStreaming
  },
  // Create startStreaming method
  startStreaming() {
    this.mediaRecorder.addEventListener('dataavailable', event => {
      if(event.data.size > 0 && this.socket.readyState == 1) {
        this.socket.send(event.data)
      }
      // Send data every 250ms (.25s)
      mediaRecorder.start(250)
    })
  }
}
```

## Receive Transcript Results

You are currently sending data through our persistent connection to Deepgram every 0.25 seconds. You will receive transcripts back nearly as often - it's time to write the handling code.

```js
methods: {
  begin() {
    const DG_URL = 'wss://api.deepgram.com/v1/listen?language=de'
    const DG_KEY = 'YOUR_DEEPGRAM_API_KEY'
    this.socket = new WebSocket(DG_URL, ['token', DG_KEY])
    this.socket.onopen = this.startStreaming
    // Run the handleResponse method when data is received
    this.socket.onmessage = this.handleResponse
  },
  startStreaming() {
    this.mediaRecorder.addEventListener('dataavailable', event => {
      if(event.data.size > 0 && this.socket.readyState == 1) {
        this.socket.send(event.data)
      }
      mediaRecorder.start(250)
    })
  },
  // Create handleResponse method
  handleResponse(message) {
    const received = JSON.parse(message.data)
    const transcript = received.channel.alternatives[0].transcript
    if(transcript) {
      console.log(transcript)
    }
  }
}
```

Refresh your browser, and you should see transcripts showing in your console.

![Browser console showing one line in German](https://res.cloudinary.com/deepgram/image/upload/v1657299918/blog/2022/07/getting-started-live-transcription-vue/logs.jpg)

## Show Transcripts On Page

First, create a new `transcripts` property in `data` with an empty array:

```js
data: {
  mediaRecorder: null,
  socket: null,
  // Add this
  transcripts: []
},
```

Then, instead of logging transcripts, add them to this array:

```js
if(transcript) {
  this.transcripts.push(transcript)
}
```

Finally, update your HTML to display items from the array:

```js
<div id="app">
  <button @click="begin">Begin transcription</button>
  <!-- Add looping element -->
  <p v-for="transcript in transcripts">{{ transcript }}</p>
</div>
```

Your page should look like this once you've spoken a couple of phrases:

![Page showing two lines - each with one line of transcripted German text](https://res.cloudinary.com/deepgram/image/upload/v1657299918/blog/2022/07/getting-started-live-transcription-vue/display.png)

## Wrapping Up

The final code looks like this:

```js
<html>
<head></head>
<body>
  <div id="app">
    <button @click="begin">Begin transcription</button>
    <p v-for="transcript in transcripts">{{ transcript }}</p>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.7.0"></script>
  <script>
    const app = new Vue({
      el: '#app',
      async created() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
          .catch(error => alert(error))

        if(!MediaRecorder.isTypeSupported('audio/webm')) return alert('Unsupported browser')
        this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' })
      },
      data: {
        mediaRecorder: null,
        socket: null,
        transcripts: []
      },
      methods: {
        begin() {
          const DG_URL = 'wss://api.deepgram.com/v1/listen?language=de'
          const DG_KEY = 'YOUR_DEEPGRAM_API_KEY'
          this.socket = new WebSocket(DG_URL, ['token', DG_KEY])
          this.socket.onopen = this.startStreaming
          this.socket.onmessage = this.handleResponse
        },
        startStreaming() {
          this.mediaRecorder.addEventListener('dataavailable', event => {
            if(event.data.size > 0 && this.socket.readyState == 1) {
              this.socket.send(event.data)
            }
            mediaRecorder.start(250)
          })
        },
        handleResponse(message) {
          const received = JSON.parse(message.data)
          const transcript = received.channel.alternatives[0].transcript
          if(transcript) {
            this.transcripts.push(transcript)
          }
        }
      }
    })
  </script>
</body>
</html>
```

This is the most simple implementation with Vue and is written for clarity over conciseness. If you want to learn more about Vue 3, including its setup() function and composables, then Sandra wrote [an excellent tutorial series on Vue 3](https://developers.deepgram.com/blog/2022/01/diving-into-vue-3-getting-started/).

If you have questions, please feel free to message us on Twitter, [@DeepgramDevs](https://twitter.com/DeepgramDevs).

        