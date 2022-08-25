---
title: Browser Live Transcription - Protecting Your API Key
description: Protect your API Key from unauthorized use with these tips.
date: 2022-01-17
cover: https://res.cloudinary.com/deepgram/image/upload/v1642183098/blog/2022/01/protecting-api-key/Browser-Live-Transcription-Protecting-Your-API-Key%402x.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
    - browser,
    - tutorial,
    - best-practice
seo:
    title: Browser Live Transcription - Protecting Your API Key
    description: Protect your API Key from unauthorized use with these tips.
shorturls:
    share: https://dpgr.am/343095
    twitter: https://dpgr.am/f45ad2
    linkedin: https://dpgr.am/9526ac
    reddit: https://dpgr.am/393816
    facebook: https://dpgr.am/3ff1fb
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453850/blog/protecting-api-key/ograph.png
---

We love how little code is needed to get live transcripts directly from a web browser with Deepgram, but doing so may leave your API Key vulnerable in a user-accessible client. Any user with access to your key can access the Deepgram APIs, which, in turn, may provide full account access.

This post will cover three approaches to live transcription from the browser while protecting your account. Before reading this guide, you should understand how to open a WebSocket connection and send data to Deepgram in the browser - if not, we cover it in this [blog post](https://developers.deepgram.com/blog/2021/11/live-transcription-mic-browser/).

## Scopes and Roles

Each project in your Deepgram console can have multiple API Keys. Each key has several 'scopes' that describe the key's permissions. For example, one key may provide access to manage a project's team members, while others may not.

To make working with scopes easier, we also provide some 'roles' which provide a defined list of scopes for you. Instead of providing six common scopes, you can use `member`, and it will apply them all for you when creating a key. We'll be creating keys with specific scopes in this guide, and if you want to learn more about roles, we have a [Working with Roles](https://developers.deepgram.com/documentation/getting-started/roles/) guide in our documentation.

![One project can have multiple keys. The first key in this diagram has permissions to create new keys, alter project settings, and use transcription APIs. The second key only has access to transcription APIs.](https://res.cloudinary.com/deepgram/image/upload/v1639592303/blog/2022/01/protecting-api-key/project-keys-scopes.png)

## Approach 1: Create and Delete Keys On-Demand

Deepgram provides a set of API endpoints to manage project keys. In this approach, we will create a key when required and then delete it when finished.

To create and delete additional keys with the API, the key used for this operation must have the `keys:write` scope. This key will not be sent to the browser - its whole purpose is to manage sharable keys on our behalf. If you created the initial key in our web console, you would have assigned a role that will include the `keys:write` permission.

![Clicking the start transcription button in the browser sends a request to the server which creates a usage-only key with Deepgram. Clicking the end transcription button deletes it.](https://res.cloudinary.com/deepgram/image/upload/v1639592303/blog/2022/01/protecting-api-key/create-destroy-key.png)

An abbreviated version of this with code with the [Deepgram Node.js SDK](https://developers.deepgram.com/sdks-tools/sdks/node-sdk/) may look like this:

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html>
  <body>
    <button id="start">Start transcription</button>
    <button id="end">End transcription</button>
    <script>
      let key, api_key_id, mediaRecorder, socket

      document.querySelector('#start').addEventListener('click', async () => {
        // Access key and key id from server
        const result = await fetch('/key', { method: 'POST' }).then((r) =>
          r.json()
        )
        key = result.key
        api_key_id = result.api_key_id

        // Standard logic utilizing fetched key
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
          mediaRecorder = new MediaRecorder(stream)
          socket = new WebSocket('wss://api.deepgram.com/v1/listen', [ 'token', key ])
          socket.onopen = () => {
            mediaRecorder.addEventListener('dataavailable', async (event) =>
              socket.send(event.data)
            )
            mediaRecorder.start(250)
          }
          socket.onmessage = (message) => console.log(JSON.parse(message))
        })
      })

      document.querySelector('#end').addEventListener('click', async () => {
        // Delete key
        const result = await fetch('/key/' + api_key_id, {
          method: 'DELETE',
        }).then((r) => r.json())
        console.log(result)

        // Client logic for closing connection
        socket.close()
        mediaRecorder.stop()
      })
    </script>
  </body>
</html>
```

```js
// index.js
const express = require('express')
const { Deepgram } = require('@deepgram/sdk')
const app = express()
const deepgram = new Deepgram('YOUR_DEEPGRAM_API_KEY')
app.use(express.static('public'))

app.post('/key', (req, res) => {
  const { key, api_key_id } = await deepgram.keys.create(
    'PROJECT_ID',
    'Temporary user key',
    ['usage:write']
  )
  res.json({ key, api_key_id })
})

app.delete('/key/:keyId', (req, res) => {
  const result = await deepgram.keys.delete('PROJECT_ID', req.params.keyId)
  res.json(result)
})

app.listen(3000)
```

In this example, clicking the **start** button sends a request to our server, creating a brand-new Deepgram key with the only scope required to use transcription - `usage:write`. It then sends the API Key and key ID to the browser - we require the key ID to refer to this key when deleting it.

When the user clicks the **end** button, a request is sent to our server, which, in turn, deletes the key so it is no longer usable.

## Approach 2: Automatically-Expiring Keys

We recently released some additional properties you can provide when creating project keys via the API, which set an expiry time. After the provided time, the key is invalidated automatically. You may either provide `expiration_date` or `time_to_live_in_seconds`, so pick whatever is best for your use case.

Keys are validated by Deepgram when a new live transcription session is started, so you can set a short `time_to_live_in_seconds` as it is only needed when initially connecting.

You can also do this with the Node.js SDK with an object containing either `expirationDate` or `timeToLive`:

```js
app.get('/deepgram-token', async (req, res) => {
  const newKey = await deepgram.keys.create(
    process.env.DG_PROJECT_ID,
    'Temporary key - works for 10 secs',
    ['usage:write'],
    { timeToLive: 10 }
  )

  res.send(newKey)
})
```

## Approach 3: Create a Server Proxy to Deepgram

The first two approaches in this guide are a good stop-gap, but you should avoid sending keys to the client wherever possible. The most common and recommended approach is to set up a signaling server that will proxy requests to and from your browser and Deepgram. This approach means that your server communicates with Deepgram, avoiding the need for a Deepgram API Key to be present in the browser.

An illustration for how this might work in code looks like this:

```js
// index.js
const express = require('express')
const app = express()
app.use(express.static('public'))

const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 3001 })

const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DG_KEY)
const deepgramLive = deepgram.transcription.live({ utterances: true })

deepgramLive.onopen = () => console.log('dg onopen')

wss.on('connection', (ws) => {
  ws.onmessage = (event) => deepgramLive.send(event.data)
  deepgramLive.addListener('transcriptReceived', (data) => ws.send(data))
})

app.listen(3000)
```

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html>
  <body>
    <button id="start">Start transcription</button>
    <script>
      document.querySelector('#start').addEventListener('click', async () => {
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
          const mediaRecorder = new MediaRecorder(stream)
          const socket = new WebSocket(`ws://localhost:3001`)
          socket.onopen = () => {
            mediaRecorder.addEventListener('dataavailable', (event) =>
              socket.send(event.data)
            )
            mediaRecorder.start(250)
          }
          socket.onmessage = (message) => console.log(JSON.parse(message.data))
        })
      })
    </script>
  </body>
</html>
```

This approach is very similar to opening a connection directly to Deepgram. In this example, however, we create a Node.js application that starts an express web application on port 3000 and a WebSocket server on port 3001, then connect to the WebSocket endpoint from our client. The server's main job is pushing data to and from the browser and Deepgram. These lines handle all of that logic:

```js
ws.onmessage = (event) => deepgramLive.send(event.data)
deepgramLive.addListener('transcriptReceived', (data) => ws.send(data))
```

## In Summary

API Keys created in the console with roles have more permissions than you would want users to have access to. Hopefully, this guide provides some useful strategies which allow you to protect your Deepgram account with minimal additional code in your project.

If you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).

