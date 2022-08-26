---
title: "How to Add Speech Recognition to Your React and Node.js project"
description: "Do you have a React project that could use speech-to-text? This tutorial will go through the steps to upgrade your React project with Deepgram transcriptions."
date: 2022-06-20
cover: https://res.cloudinary.com/deepgram/image/upload/v1655815938/blog/2022/06/how-to-add-speech-recognition-to-your-react-project/How-to-Add-Speech-Recognition-to-Your-React-Project-blog.png
authors:
    - bekah-hawrot-weigel
category: tutorial
tags:
    - reactjs
seo:
    title: "How to Add Speech Recognition to Your React and Node.js project"
    description: "Do you have a React project that could use speech-to-text? This tutorial will go through the steps to upgrade your React project with Deepgram transcriptions."
shorturls:
    share: https://dpgr.am/d4e9f5a
    twitter: https://dpgr.am/6a86a1c
    linkedin: https://dpgr.am/3508bf1
    reddit: https://dpgr.am/c31ff53
    facebook: https://dpgr.am/859f3ae
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454098/blog/how-to-add-speech-recognition-to-your-react-project/ograph.png
---

One of my favorite pieces of advice for learning a new technology is to build a project that solves a need or interests you. I’ve been interested in finding ways to improve mental health for a long time. If you have a React project you can follow along with this post to add Deepgram for speech-to-text transcription to your project. If you don't, I've got you covered with a React project called *Affirmation*, that uses automatic speech recognition to boost self-confidence.

Before you jump into the code, I want to share a little bit about the inspiration for the project. According to [Christopher N Cascio, et al.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4814782/), “Self-affirmation activates brain systems associated with self-related processing and reward and is reinforced by future orientation.” Other studies have indicated that motivational self-affirmations can impact how you view youself and your performance; they also can be more effective if spoken aloud. You’ll be taking an existing React project with a complete front-end and adding the capability to speak and transcribe your affirmation.

## Getting Started with React

**Prerequisites**

*   Understanding of JavaScript and React
*   Familiarity of [hooks](https://reactjs.org/docs/hooks-intro.html)
*   Understanding of HTML and CSS
*   [Node.js](https://nodejs.org/en/download/) installed on your computer

If you want to follow along with this project, you can find the [code for the front-end here](https://github.com/deepgram-devs/react-app/tree/bare-react-app). To get started quickly, I used Create React App. The file structure for this project will be similar to what you get with Create React App, but you’ll notice that you have a component called `Affirmation.js`.

Once you’ve forked or cloned the code, cd into the app.

In your terminal run `npm install` to install the dependencies you can find the `package.json` file. Then run `npm run start` and navigate to <http://localhost:3000/>. You should see your app up and running. Right now, everything you see is being rendered from the `App.js` file. Here’s what you should see.

![Image of affirmation screen](https://res.cloudinary.com/deepgram/image/upload/v1654259676/blog/2022/06/how-to-add-speech-recognition-to-your-react-project/affirmation-screen.png)

## Adding Speech-to-Text with Deepgram's Node SDK

Now that your project is up and running, you can get started with adding the speaking capabilities with our Automatic Speech Recognition (ASR) technology. You’ll add a new button that allows the user to give microphone access and share their affirmation aloud.

When they do this, the audio will be processed using [Deepgram’s Node SDK](https://developers.deepgram.com/sdks-tools/sdks/node-sdk/), and the transcription will be submitted and appear on the screen. Although you could go deeper with this project by allowing the user to save the affirmation or collect all the affirmations, for the scope of this project, you’ll be showing one transcript at a time.

## Updating Your Front-End

Before you add your backend, update your `Affirmations.js` file. Below your Submit button, add a Voice button with the following code:

```js
<button>
	onClick={activateMicrophone}
	type='button'
	className='submit-button'>
	Voice 💬
</button>
```

You’ll notice that you have an `onClick` function called `activateMicrophone`, which doesn’t exist yet. So next, create that function.

Just below your `handleChange` function, add the function with a console.log and the steps you need to take to get things working.

```js
const activateMicrophone = ( ) => {

	console.log("Submit")

	//Add microphone access

	//create a WebSocket connection

}
```

To add microphone access, you’ll use the [Media Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API). Setting this up allows the browser to ask the user for access to their microphone. You do this by using the [MediaDevices interface](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices). Designate that you’re using audio and then create a new variable `const mediaRecorder` to use when implementing Deepgram.

Below the "Add microphone access" comment, add the following:

```js
navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
	const mediaRecorder = new MediaRecorder(stream)
	// You’ll add more code here later
})
```

It's time to pause. You've made it as far as you can without connecting to the server.

## Creating a Server Connection

Now you’re going to work on setting up your connection to Deepgram’s Node.js SDK and WebSocket connection.

Because you’re using API keys, you want to keep them safe. To learn more about keeping your API keys safe, check out Kevin’s post [Browser Live Transcription - Protecting Your API Key](https://developers.deepgram.com/blog/2022/01/protecting-api-key/). Using the terminal, let’s run
`npm i @deepgram/sdk dotenv` to add Deepgram and `dotenv` to your project.

Next, you’ll need to:

*   Create a Deepgram API Key with an admin or owner role - get it [here](https://console.deepgram.com/signup?jump=keys).
*   Create a file called .env and add `DG_KEY='your-API-key'`.

At the root of your project, add a `server` folder with a `server.js` file. In that file, you need three things to happen:

1.  Create a WebSocket connection
2.  When the WebSocket connection is open, Deepgram will create a live transcription.
3.  Once the data is received, send the transcript (as `data`) to your `Affirmation.js` component to record in your app.

To do this, use the following code:

```js
require('dotenv').config()

// Add Deepgram so you can get the transcription
const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DEEPGRAM_KEY)

// Add WebSocket
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 3002 })

// Open WebSocket connection and initiate live transcription
wss.on('connection', (ws) => {
	const deepgramLive = deepgram.transcription.live({
		interim_results: true,
		punctuate: true,
		endpointing: true,
		vad_turnoff: 500,
	})

	deepgramLive.addListener('open', () => console.log('dg onopen'))
	deepgramLive.addListener('error', (error) => console.log({ error }))

	ws.onmessage = (event) => deepgramLive.send(event.data)
	ws.onclose = () => deepgramLive.finish()

	deepgramLive.addListener('transcriptReceived', (data) => ws.send(data))
})


```

Your server is ready to go! Now you just need to put the finishing touches on your `Affirmation.js` file.

## Connecting the WebSocket to the Front-end

You need to be able to check if the WebSocket is open. To do this, you’re going to use the built-in hook from React, [useRef](https://reactjs.org/docs/hooks-reference.html#useref).

Make sure you import `useRef`. Once you’ve done that, add `const socketRef = useRef(null)` just below your `finalAffirmation` hook.

Now you’re ready to connect our frontend code to your server.

Within the `activateMicrophone` function-below the `mediaRecorder` variable-you’ll:

*   Create and open a new WebSocket.
*   Update the value of `setAffirmation` with the results of the transcript.
*   Close the socket and handle errors.

Go ahead and add this to your file:

```js
const socket = new WebSocket('ws://localhost:3002')

socket.onopen = () => {
	console.log({ event: 'onopen' })
	mediaRecorder.addEventListener('dataavailable', async (event) => {
		if (event.data.size > 0 && socket.readyState === 1) {
			socket.send(event.data)
		}
	})
	mediaRecorder.start(1000)
}

socket.onmessage = (message) => {
	const received = JSON.parse(message.data)
	const transcript = received.channel.alternatives[0].transcript
	if (transcript) {
		console.log(transcript)
		setAffirmation(transcript)
	}
}

socket.onclose = () => {
	console.log({ event: 'onclose' })
}

socket.onerror = (error) => {
	console.log({ event: 'onerror', error })
}

socketRef.current = socket

```

You’re almost there. Your very last step is to close your WebSocket in your `handleSubmit` function if it’s open. Just before `setFinalAffirmation(true)` add the following:

```js
if (socketRef.current !== null) {
	socketRef.current.close()
}
```

Go ahead and run this now. You should still have your React app running on `localhost:3000`, but you need to get that server running. To do that, go to your terminal and run `node server/server.js`. Click the Voice button.

You should get a pop-up asking you to allow the use of your microphone. Go ahead and give your browser permission. Now, test it out. Try using this affirmation: “I am intelligent.”

You should see that text in your text box. Hit submit. There it is!

As you’ve seen, there are a couple of steps involved to get Deepgram live transcription in your React project, but luckily, the process is very repeatable once you’ve done it. And now you’ve done it! You can also find all the code in the [repo for this project](https://github.com/deepgram-devs/react-app). To learn more about the features you have access to with our Node SDK, check out our [Node SDK documentation](https://developers.deepgram.com/sdks-tools/sdks/node-sdk/streaming-transcription/). If you have questions or want to learn more about using Automatic Speech Recognition in your React project, please hit us up on Twitter, [@DeepgramDevs](https://twitter.com/DeepgramDevs).

        