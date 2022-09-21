---
title: "[Title TBC] Improve Conversational AI Prompts To Reduce Retry Rates"
description: TBC
date: 2022-09-22T13:49:54.196Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1662119478/blog/2022/09/presentation-coaching-recall/blog-placeholder.png
authors:
  - kevin-lewis
category: tutorial
tags:
  - conversational-ai
---
One of the biggest challenges for conversational AI is anticipating all the ways which a user may express a single phrase. Even with decent natural language processing, users often have frustrating experiences with 'retry rates' - the number of times a request is rejected before it succeeds. However, data around failed attempts can be key in improving understanding in how people frame their requests.

In this project, we'll cover an approach to gather failed requests and infer their meaning based on the successful attempt. This data can ultimately be used to improve your intent triggers and improve customer experience.

![Diagram showing a back and forth conversation in text. The first two messages from the user are not understood but the third is. This generates a report that shows the two failed phrases next to the eventually-successful intent.](https://res.cloudinary.com/deepgram/image/upload/v1663768360/blog/2022/09/conversational-ai-retry-report/diagram_kquxm1.png)

We'll be using Deepgram with JavaScript and browser live transcription to demonstrate the concept, but it can easily be applied in other settings and programming languages.

Before we start, you will need a Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys) and keep it handy.

Create an empty `index.html` file and open it in your code editor.

## Set Up Live Transcription

Add the following code to `index.html` to set up live transcription in your browser. For a detailed explanation on how this works, check out our [blog post on browser live transcription](https://blog.deepgram.com/live-transcription-mic-browser/).

```html
<html>
    <body>
        <script>
            navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
                const mediaRecorder = new MediaRecorder(stream)

                const DG_KEY = 'replace-with-your-deepgram-api-key'
                const socket = new WebSocket('wss://api.deepgram.com/v1/listen', [ 'token', DG_KEY ])

                socket.onopen = () => {
                    mediaRecorder.addEventListener('dataavailable', event => {
                        if (event.data.size > 0 && socket.readyState == 1) {
                            socket.send(event.data)
                        }
                    })
                    mediaRecorder.start(250)
                }

                socket.onmessage = (message) => {
                    const { transcript } = JSON.parse(message.data).channel.alternatives[0]
                    if(transcript) handleResponse(transcript)
                }
            })

            function handleResponse(transcript) {
                console.log(transcript)
            }
        </script>
    </body>
</html>
```

Open the file in your browser. You should immediately be prompted for access to your microphone. Once granted, open up your browser console and start speaking to see your words logged.

![Browser console showing several lines of transcripts](https://res.cloudinary.com/deepgram/image/upload/v1663768361/blog/2022/09/conversational-ai-retry-report/browser-live-transcription_t58fww.png)

## Set Up Intents

In reality, your conversational AI system will be a lot more complex and robust than what we'll build today, but they mostly have the same characteristics:

1. A list of request options - 'intents'
2. Each option has a number of phrases or terms that can be used to trigger it - 'triggers'
3. An action to happen when an intent occurs - 'response'

Intents normally inform a machine learning model which will match phrases similar but not identical, and responses may execute some logic before continuing. For this project, we'll need a partial match on an intent trigger and a response will be speaking a fixed phrase back to the user.

At the top of your `<script>` tag, add the following intents:

```js
const intents = [
    {
        intent: 'balance',
        triggers: [
            'balance',
            'balance',
            'how much money'
        ],
        response: 'Your bank balance is over nine thousand'
    },
    {
        intent: 'new_transaction',
        triggers: [
            'transfer',
            'send',
            'set up payee'
        ],
        response: 'Who would you like to send money to?'
    },
    {
        intent: 'help',
        triggers: [
            'help',
            'advice',
            'struggling'
        ],
        response: 'Putting you through to one of our agents now'
    },
]
```

## Match User Speech to Intents

When a user speaks, we need to determine if there was a match or not. Update `handleResponse()` with the following:

```js
function handleResponse(transcript) {
    const match = intents.find(intent => intent.triggers.some(trigger => transcript.includes(trigger)))
    console.log(match)
}
```

`match` will either be the entire intent object for the matching item, or `undefined`.

![Browser console showing two undefined logs, and an object with one intent.](https://res.cloudinary.com/deepgram/image/upload/v1663768361/blog/2022/09/conversational-ai-retry-report/match_bf4zgt.png)

## Save Intent Matching

Just above `handleResponse()`, create two new variables - `current` that will contain the current string of requests towards a single intent and `report` that will contain all failed intents and the final successful phrase.

```js
let current = {}
const report = []
```

Update `handleResponse()` with logic if there was no match. Specifically, add the phrase to `current.retries`, creating it if it doesn't already exist:

```js
function handleResponse(transcript) {
    const match = intents.find(intent => intent.triggers.some(trigger => transcript.includes(trigger)))

    if(!match) {
        console.log(`No match for ${transcript}`)
        if(!current.retries) current.retries = [transcript]
        else current.retries.push(transcript)
    }
}
```

If there was a match, add it to the `current` object, and push it into the `report` array. Each object in `report` will contain failed attempts and the eventual successful trigger:

```js
if(!match) {
    console.log(`No match for ${transcript}`)
    if(!current.retries) current.retries = [transcript]
    else current.retries.push(transcript)
} else {
    if(current.retries) {
        current.intent = match.intent
        report.push(current)
    }
    current = {}
    console.log(match.response)
}
```

Try it out. Refresh the browser and start speaking. Try some random phrases, and then one which will trigger a match - "I need help", "What's my overdraft balance?", and "send some money" should all work.

![Browser console showing no matches for two phrases, and then a successful response.](https://res.cloudinary.com/deepgram/image/upload/v1663768361/blog/2022/09/conversational-ai-retry-report/match-response_fpclpv.png)

## Prompt the User to Speak

To wrap up, let's add spoken prompts and replies for this application using the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis).

At the bottom of the `<script>` tag, create a `speak()` function:

```js
const synth = window.speechSynthesis
function speak(text) {
    if (synth.speaking) synth.cancel()
    const utterThis = new SpeechSynthesisUtterance(text)
    synth.speak(utterThis)
}
```

Add an initial prompt to speak. Under `mediaRecorder.start(250)` add:

```js
speak('What can we help you with today?')
```

At the bottom of the logic in the if statement, when there is no match, add a retry prompt:

```js
speak('I didn\'t understand that, sorry. Can you try again?')
```

When there is a match, respond to the user:

```js
speak(match.response)
```

At any point, the `report` variable contains an array of potential improvements you can make to your conversational AI intents.

![Logging report after several interactions. Each object has an array of retry strings, and the correct intent.](https://res.cloudinary.com/deepgram/image/upload/v1663768361/blog/2022/09/conversational-ai-retry-report/report_r4q0o1.png)

## In Practice

This tutorial shows an overall approach for inferring the meaning of failed intent triggers, assuming that a user does not change their intent. To build this system out further, you should consider the common change in intent from interfacing with a bot to "speak to a human".

You may also choose to do this after an interaction has ended rather than live, but you'll need to determine when a retry occurs.

If you have questions about anything in this post, we’d love to hear from you. Head over to [our forum](https://github.com/orgs/deepgram/discussions/categories/q-a) and create a new discussion with your questions, or send us a tweet [@DeepgramAI](https://twitter.com/DeepgramAI)