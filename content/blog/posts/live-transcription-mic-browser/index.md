---
title: "Get Live Speech Transcriptions In Your Browser"
description: "Learn how to use Deepgram's streaming audio feature with one HTML file."
date: 2021-11-22
cover: https://res.cloudinary.com/deepgram/image/upload/v1637012204/blog/2021/11/live-transcription-mic-browser/Get-Live-Speech-Transcriptions-In-Browser%402x.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
    - javascript,
    - microphone,
    - streaming
seo:
    title: "Get Live Speech Transcriptions In Your Browser"
    description: "Learn how to use Deepgram's streaming audio feature with one HTML file."
shorturls:
    share: https://dpgr.am/0c15c9e
    twitter: https://dpgr.am/fd7b4aa
    linkedin: https://dpgr.am/37db098
    reddit: https://dpgr.am/3f4c75e
    facebook: https://dpgr.am/f224dff
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453810/blog/live-transcription-mic-browser/ograph.png
---

There are so many projects you can build with Deepgram's streaming audio transcriptions. Today, we are going to get live transcriptions from a user's mic inside of your browser.

Watch this tutorial as a video:

<youtube id="kIyPX16zuQY"></youtube>

## Before We Start

For this project, you will need a Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys). That's it in terms of dependencies - this project is entirely browser-based.

Create a new `index.html` file, open it in a code editor, and add the following boilerplate code:

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="status">Connection status will go here</p>
    <p id="transcript">Deepgram transcript will go here</p>
    <script>
      // Further code goes here
    </script>
  </body>
</html>
```

## Get User Microphone

You can request access to a user's media input devices (microphones and cameras) using a built in `getUserMedia()` method. If allowed by the user, it will return a `MediaStream` which we can then prepare to send to Deepgram. Inside of your `<script>` add the following:

```js
navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
  console.log({ stream })
  // Further code goes here
})
```

Load your `index.html` file in your browser, and you should immediately receive a prompt to access your microphone. Grant it, and then look at the console in your developer tools.

![The first half of the image shows the browser asking for access to the mic. An arrow with the phrase "once granted" points to the second half of the image, which has the browser console open, showing an object containing a MediaStream](https://res.cloudinary.com/deepgram/image/upload/v1637186575/blog/2021/11/live-transcription-mic-browser/granting-mic.png)

Now we have a `MediaStream` we must provide it to a `MediaRecorder` which will prepare the data and, once available, emit it with a `datavailable` event:

```js
const mediaRecorder = new MediaRecorder(stream)
```

We now have everything we need to send Deepgram.

## Connect to Deepgram

To stream audio to Deepgram's Speech Recognition service, we must open a WebSocket connection and send data via it. First, establish the connection:

```js
const socket = new WebSocket('wss://api.deepgram.com/v1/listen', [ 'token', 'YOUR_DEEPGRAM_API_KEY' ])
```

<Alert type="warning">
A reminder that this key is client-side and, therefore, your users can see it. Any user with access to your key can access the Deepgram APIs, which, in turn, may provide full account access. Refer to our post on <a href="https://developers.deepgram.com/blog/2022/01/protecting-api-key/">protecting your API key with browser live transcription</a>.
</Alert>

Then, log when socket `onopen`, `onmessage`, `onclose`, and `onerror` events are triggered:

```js
socket.onopen = () => {
  console.log({ event: 'onopen' })
}

socket.onmessage = (message) => {
  console.log({ event: 'onmessage', message })
}

socket.onclose = () => {
  console.log({ event: 'onclose' })
}

socket.onerror = (error) => {
  console.log({ event: 'onerror', error })
}
```

Refresh your browser and watch the console. You should see the socket connection is opened and then closed. To keep the connection open, we must swiftly send some data once the connection is opened.

## Sending Data to Deepgram

Inside of the `socket.onopen` function send data to Deepgram in 250ms increments:

```js
mediaRecorder.addEventListener('dataavailable', event => {
  if (event.data.size > 0 && socket.readyState == 1) {
    socket.send(event.data)
  }
})
mediaRecorder.start(250)
```

Deepgram isn't fussy about the timeslice you provide (here it's 250ms), but bear in mind that the bigger this number is, the longer between words being spoken and it being sent, slowing down your transcription. 100-250 is ideal.

Take a look at your console now while speaking into your mic - you should be seeing data come back from Deepgram!

![The browser console shows four onmessage events. The last one is expanded and shows a JSON object, including a data object. The data object contains the words "how are you doing today."](https://res.cloudinary.com/deepgram/image/upload/v1635938341/blog/2021/11/live-transcription-mic-browser/onmessage.png)

## Handling the Deepgram Response

Inside of the `socket.onmessage` function parse the data sent from Deepgram, pull out the transcript only, and determine if it's the final transcript for that phrase ("utterance"):

```js
const received = JSON.parse(message.data)
const transcript = received.channel.alternatives[0].transcript
if (transcript && received.is_final) {
  console.log(transcript)
}
```

You may have noticed that for each phrase, you have received several messages from Deepgram - each growing by a word (for example "hello", "hello how", "hello how are", etc). Deepgram will send you back data as each word is transcribed, which is great for getting a speedy response. For this simple project, we will only show the final version of each utterance which is denoted by an `is_final` property in the response.

To neaten this up, remove the `console.log({ event: 'onmessage', message })` from this function, and then test your code again.

![The terminal shows two phrases written in plain text.](https://res.cloudinary.com/deepgram/image/upload/v1635938773/blog/2021/11/live-transcription-mic-browser/is_final-log.png)

That's it! That's the project. Before we wrap up, let's give the user some indication of progress in the web page itself.

## Showing Status & Progress In Browser

Change the text inside of `<p id="status">` to 'Not Connected'. Then, at the top of your `socket.onopen` function add this line:

```js
document.querySelector('#status').textContent = 'Connected'
```

Remove the text inside of `<p id="transcript">`. Where you are logging the transcript in your `socket.onmessage` function add this line:

```js
document.querySelector('#transcript').textContent += transcript + ' '
```

Try your project once more, and your web page should show you when you're connected and what words you have spoken, thanks to Deepgram's Speech Recognition.

The full code is here:

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="status">Connection status will go here</p>
    <p id="transcript">Deepgram transcript will go here</p>
    <script>
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        const mediaRecorder = new MediaRecorder(stream)
        const socket = new WebSocket('wss://api.deepgram.com/v1/listen', [ 'token', 'YOUR_DEEPGRAM_API_KEY' ])

        socket.onopen = () => {
          console.log({ event: 'onopen' })
          document.querySelector('#status').textContent = 'Connected'
          mediaRecorder.addEventListener('dataavailable', event => {
            if (event.data.size > 0 && socket.readyState == 1) {
              socket.send(event.data)
            }
          })
          mediaRecorder.start(250)
        }

        socket.onmessage = (message) => {
          console.log({ event: 'onmessage', message })
          const received = JSON.parse(message.data)
          const transcript = received.channel.alternatives[0].transcript
          if (transcript && received.is_final) {
            document.querySelector('#transcript').textContent += transcript + ' '
          }
        }

        socket.onclose = () => {
          console.log({ event: 'onclose' })
        }

        socket.onerror = (error) => {
          console.log({ event: 'onerror', error })
        }
      })
    </script>
  </body>
</html>
```

If you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).

