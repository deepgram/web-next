---
title: "Transcribing Browser Tab Audio with Chrome Extensions"
description: "Build your first Google Chrome browser extension and learn how to use Deepgram's speech-to-text API to record tab audio, with and without your microphone."
date: 2022-07-21
cover: https://res.cloudinary.com/deepgram/image/upload/v1658240278/blog/2022/07/transcribing-browser-tab-audio-chrome-extensions/cover.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
    - extension
    - javascript
seo:
    title: "Transcribing Browser Tab Audio with Chrome Extensions"
    description: "Build your first Google Chrome browser extension and learn how to use Deepgram's speech-to-text API to record tab audio, with and without your microphone."
shorturls:
    share: https://dpgr.am/56c127e
    twitter: https://dpgr.am/02a6d9c
    linkedin: https://dpgr.am/8fa7312
    reddit: https://dpgr.am/f2281f2
    facebook: https://dpgr.am/4561947
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454112/blog/transcribing-browser-tab-audio-chrome-extensions/ograph.png
---

Chances are you have installed at least one browser extension before. With over 2.5 billion (yes, with a b) global users of Chrome, it's an excellent platform to build and release apps on. In this tutorial, you will create a Chrome extension that captures browser tab audio and transcribes it with Deepgram.

![Transcripts are showing in the popup](https://res.cloudinary.com/deepgram/image/upload/v1657316996/blog/2022/07/transcribing-browser-tab-audio-chrome-extensions/transcripts-in-extension.png)

## The Manifest

Create a `manifest.json` file. This file contains critical information about our extension, which is required by the browser to load it (and publish it to the Chrome Web Store). Add the following to it:

```json
{
    "name": "Transcribe Tab Audio",
    "version": "1.0",
    "manifest_version": 3,
    "host_permissions": ["*://*/"],
    "permissions": ["storage", "tabs", "scripting"]
}
```

The `host_permissions` specify which webpages this extension will be active on - the `*` matches everything, so this will work on every page. You can alter this if you only want it to work on specific pages or domains.

The `permissions` specified are also needed for this project - `"storage"` allows the extension to store small amounts of data on the machine, `"tabs"` provides access to all data fields regarding tabs in the browser, and `"scripting"` allows us to execute JavaScript files - more on this later.

At this point, you actually have a valid Chrome Extension - let's load it in. Head to <chrome://extensions>, toggle Developer Mode on and click *Load Unpacked*. Select the folder with your `manifest.json` file, and you should see the extension appear in your browser.

It's a bit rubbish right now—time to fix that.

## Creating a Popup

An extension popup is the small pane that appears when you click on the extension icon in your address bar.

Create a `popup.html` file:

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body style="padding: 1em;">
    <button id="start">Start transcription</button>
    <p id="transcript"></p>
    <script src="popup.js"></script>
  </body>
</html>
```

In your `manifest.json` file, specify the popup file by adding this property:

```json
"action": {
    "default_popup": "popup.html"
}
```

![The extension icon is clicked, and a small white popup shows one button reading 'start transcription'](https://res.cloudinary.com/deepgram/image/upload/v1657316996/blog/2022/07/transcribing-browser-tab-audio-chrome-extensions/popup-hello-world.png)

You may have noticed that the linked JavaScript file does not yet exist. Before we create it, it's important to note that as soon as the popup is closed, it's as if that page no longer exists, and the code will cease to run. For this reason, the extension must inject some code to run in the current webpage. This means the code will continue to run even once the popup is closed.

With this in mind, create a `popup.js` file:

```js
document.getElementById('start').addEventListener('click', async () => {
    const tab = await getCurrentTab()
    if(!tab) return alert('Require an active tab')
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['main.js']
    })
})

async function getCurrentTab() {
    const queryOptions = { active: true, lastFocusedWindow: true }
    const [tab] = await chrome.tabs.query(queryOptions)
    return tab
}
```

When the start button is clicked, it will get the active tab and inject a `main.js` file. Go and create one:

```js
alert('This is an injected script!')
```

Open the extension and press the button. You should see the alert! Delete the alert before moving on.

## Transcribing Tab Audio

In your `main.js` file, ask for access to a user's display, check it has audio attached, and plug it into a MediaRecorder:

```js
navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then(stream => {
    if(stream.getAudioTracks().length == 0) return alert('You must share your tab with audio. Refresh the page.')
    const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' })

    // Further code here
})
```

Try it out. When you share a tab, ensure you are also sharing the tab audio. If not, we've set up an alert to show the error and stop further code from running.

![A popup shows a screen scaring dialog. A chrome tab is selected, and a big red arrow is pointing to a checked checkbox reading 'share tab audio'.](https://res.cloudinary.com/deepgram/image/upload/v1657316996/blog/2022/07/transcribing-browser-tab-audio-chrome-extensions/share-audio.png)

Connect to Deepgram using a WebSocket and, as soon as the connection is open, begin sending tab audio data:

```js
socket = new WebSocket('wss://api.deepgram.com/v1/listen?tier=enhanced', ['token', 'YOUR_DEEPGRAM_API_KEY'])

recorder.addEventListener('dataavailable', evt => {
    if(evt.data.size > 0 && socket.readyState == 1) socket.send(evt.data)
})

socket.onopen = () => { recorder.start(250) }

// Further code here
```

Note that the `socket` is being placed in global scope (shown by the lack of a `var`, `let`, or `const` keyword) so we can later close the connection.

Then, listen for Deepgram's returned transcripts:

```js
socket.onmessage = msg => {
    const { transcript } = JSON.parse(msg.data).channel.alternatives[0]
    if(transcript) {
        console.log(transcript)
    }
}
```

Go to a tab with audio, start transcribing and look in your browser developer tools.

![Several logs to the console with transcripts](https://res.cloudinary.com/deepgram/image/upload/v1657316997/blog/2022/07/transcribing-browser-tab-audio-chrome-extensions/logging-transcripts.png)

Nice! It's certainly coming together.

## Passing Data From Content Script to Popup

You can't expect users to open up their browser console to see transcripts. You can send 'messages' from the injected script to the popup, but if the popup is closed, it won't be received. So, here's the plan:

1.  When a new transcript is available, put it in chrome storage.
2.  Send a message from the injected script to the popup to say there's a new transcript available.
3.  If the popup is open, display the latest transcript from storage.
4.  When the popup opens, get the latest transcript (even if messages are missed, this will get us up to date).

[Chrome Storage](https://developer.chrome.com/docs/extensions/reference/storage/) is an extension-specific API that acts similarly to localStorage, but is more specialized towards the needs of extensions and may be synced using Chrome Sync (this extension won't be).

At the very top of `main.js`, above all other code, create a new transcript key in Chrome storage and set the initial value to an empty string:

```js
chrome.storage.local.set({ transcript: '' })
```

Replace `console.log(transcript)` with:

```js
chrome.storage.local.get('transcript', data => {
    chrome.storage.local.set({
      transcript: data.transcript += ' ' + transcript
    })

    // Throws error when popup is closed, so this swallows the errors with catch.
    chrome.runtime.sendMessage({
      message: 'transcriptavailable'
    }).catch(err => ({}))
})
```

This gets the existing transcript and adds the new transcript to the end of it. Then, a message is sent with the value 'transcriptavailable,' which we can now listen for in `popup.js`.

At the bottom of `popup.js`:

```js
chrome.runtime.onMessage.addListener(({ message }) => {
    if(message == 'transcriptavailable') {
        showLatestTranscript()
    }
})

function showLatestTranscript() {
    chrome.storage.local.get('transcript', ({ transcript }) => {
        document.getElementById('transcript').innerHTML = transcript
    })
}
```

Also, get the latest transcript at the very top of `popup.js`, above all other code:

```js
showLatestTranscript()
```

![Transcripts are showing in the popup](https://res.cloudinary.com/deepgram/image/upload/v1657316996/blog/2022/07/transcribing-browser-tab-audio-chrome-extensions/transcripts-in-extension.png)

## Stopping Transcription

Add a button, just below the start button, to `popup.html`:

```html
<button id="stop">Stop transcription</button>
```

When the button is pressed, send a message back to the injected script. In `popup.js`:

```js
document.getElementById('stop').addEventListener('click', async () => {
    const tab = await getCurrentTab()
    if(!tab) return alert('Require an active tab')
    chrome.tabs.sendMessage(tab.id, { message: 'stop' })
})
```

At the very bottom of `main.js`, below all other code, receive the message and close the WebSocket connection to Deepgram:

```js
chrome.runtime.onMessage.addListener(({ message }) => {
    if(message == 'stop') {
        socket.close()
        alert('Transcription ended')
    }
})
```

Excellent.

## Creating an Options Page

Right now, your Deepgram API Key is coded right into the application. Next, you will build an options page for the user to enter their key, save it to Chrome storage, and use that value when connecting to Deepgram.

In `manifest.json`, add the following property:

```js
"options_page": "options.html"
```

Create and open an `options.html` file:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Provide your Deepgram API Key</h1>

    <input type="text" id="api">
    <button>Save</button>

    <script src="options.js"></script>
  </body>
</html>
```

Create and open an `options.js` file:

```js
const api = document.getElementById('api')
const button = document.querySelector('button')

// If it exists, load it in
chrome.storage.local.get('key', ({ key }) => {
  if(key) api.value = key
})

button.addEventListener('click', () => {
  const key = api.value
  chrome.storage.local.set({ key }, () => {
    alert('Deepgram API Key Set')
  })
})
```

Time to use the key. At the top of `main.js`, above all other code:

```js
let apiKey
chrome.storage.local.get('key', ({ key }) => apiKey = key)
```

After this, `apiKey` will either be `undefined` or be a string with the API Key.

Replace the following in `main.js`:

```js
socket = new WebSocket('wss://api.deepgram.com/v1/listen?tier=enhanced', ['token', 'YOUR_DEEPGRAM_API_KEY'])

// Replace with 👇

if(!apiKey) return alert('You must provide a Deepgram API Key in the options page.')
socket = new WebSocket('wss://api.deepgram.com/v1/listen?tier=enhanced', ['token', apiKey])
```

Right-click the extension and click *Options* to open the new page. Save your Deepgram API Key, and the extension should still work.

## Accessing Browser Tab Audio and Microphone

A hypothetical situation - you want to transcribe a browser-based video call with this extension. Everyone's voice is transcribed, except yours - this is because your audio doesn't come through the tab (or you would hear yourself!), so let's alter this extension to allow for both your mic and tab audio to be transcribed together.

If you only want to transcribe tab audio, skip to the end.

At the moment, in `main.js`, you are requesting a user display, checking there is audio, and piping the resulting stream into a MediaRecorder. Now, we must:

1.  Get access to a user display and check there if is audio.
2.  Get access to a user audio device (microphone).
3.  Create a new, empty `AudioContext`.
4.  Mix the two audio sources together as sources in the single `AudioContext`.
5.  Create a MediaRecorder with the `AudioContext`, now containing two sources.

At the very bottom of main.js, below all other code:

```js
// https://stackoverflow.com/a/47071576
function mix(audioContext, streams) {
    const dest = audioContext.createMediaStreamDestination()
    streams.forEach(stream => {
        const source = audioContext.createMediaStreamSource(stream)
        source.connect(dest)
    })
    return dest.stream
}
```

Replace the following in `main.js`:

```js
const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' })

// Replace with 👇

const micStream = await navigator.mediaDevices.getUserMedia({ audio: true })
const audioContext = new AudioContext()
const mixed = mix(audioContext, [stream, micStream])
const recorder = new MediaRecorder(mixed, { mimeType: 'audio/webm' })
```

Add the `async` keyword just before `stream` in the `.then()` function:

```js
navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then(await stream => {
```

Boom. Done.

## Next Steps

There's so much you can do to improve your Chrome extension - make it look nicer with some CSS, change how you display transcripts or alter the extension icon when it is recording. You may also consider using Deepgram features such as [diarization](https://developers.deepgram.com/documentation/features/diarize/) to detect different speakers and display them differently.

You can find the full finished code for this project on GitHub at [deepgram-devs/transcription-chrome-extension](https://github.com/deepgram-devs/transcription-chrome-extension). As ever, if you have any questions, please feel free to reach out on Twitter (we are [@DeepgramDevs](https://twitter.com/DeepgramDevs)).

        