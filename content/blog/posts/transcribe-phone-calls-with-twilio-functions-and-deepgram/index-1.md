---
title: Transcribe Phone Calls with Twilio Functions and Deepgram
description: Learn how to use Deepgram's Speech Recognition API to transcribe
  Twilio phone calls with Twilio Functions and Node.js
date: 2022-08-29T23:48:20.204Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1661256278/blog/2022/08/transcribe-twilio-calls-functions/cover.jpg
authors:
  - kevin-lewis
category: tutorial
tags:
  - twilio
  - serverless
---
Twilio is a cloud communication platform that lets developers integrate a whole set of communication technologies into applications. On top of providing APIs, they also have Twilio Runtime - which allows the development and deployment of serverless applications directly in the Twilio Console. Super cool.



Today you will be using Twilio Functions to build a phone number that gives callers a prompt, then records a message similar to a voicemail. Once completed, a transcript will be generated with Deepgram and sent to the caller.



![A diagram showing a person talking into a phone call with a Twilio number, then ending the call, and then a text message thread with the spoken text sent from Twilio.](https://res.cloudinary.com/deepgram/image/upload/v1658239971/blog/2022/08/transcribe-twilio-calls-functions/twilio-diagram.png)



## Before You Start



You will need a free [Deepgram API Key](https://console.deepgram.com/signup?jump=keys). You will also need a [Twilio account](https://console.twilio.com) and a phone number in your account with SMS and Voice capabilities.



## Set Up Twilio Functions Space



Inside the Twilio Console, head to **Developer Tools -> Functions & Assets** and create a new service. A service can contain multiple Twilio Functions and assets related to a single project. It's important that you create a new service here and not a standalone function.



Head to the *Dependencies* section and add `@deepgram/sdk` (you can omit the version for the latest). Then head to the *Environment Variables* section and add a key called `DEEPGRAM_KEY` with the value of your API Key generated in your Deepgram console.



Functions can have one of three visibility levels - public, protected, and private. The default of 'protected' is totally fine for this project and means that only Twilio webhooks can trigger them.



## Record Inbound Call



Rename the default `/welcome` function to `/inbound`. Replace the whole file with the following:



```js
exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.VoiceResponse()

  twiml.say({ voice: 'woman', language: 'en' }, 'Try Deepgram transcription by speaking after the beep. Talk about what you see around you right now.')

  twiml.record({
    maxLength: 30, // seconds, 30 is default
    playBeep: true,
    recordingStatusCallback: '/transcribe'
  })

  return callback(null, twiml)
};
```



To respond to incoming calls and texts, Twilio lets you form and respond to requests with TwiML (Twilio Markup Language). It looks a lot like XML and can be generated with the Node Helper Library, which is included in Twilio Functions by default.



This snippet creates a new TwiML response, speaks the phrase, beeps, and begins the recording. Once the call is ended (hang up or ended after 30 seconds of recording), a payload is sent to `/transcribe` (which will be created in the next section).



Save the function, and click *Deploy All*. Once deployed, this function is ready to be used. Go to your Twilio number settings, and when a call comes in, select *Function*. Select your service and the `/inbound` function path.



![When a call comes in, use a Function. Default service with the /inbound function path.](https://res.cloudinary.com/deepgram/image/upload/v1661255979/blog/2022/08/transcribe-twilio-calls-functions/set-inbound-endpoint.png)



Call your number, and you should hear it speaking, then beep. If you speak now, a recording will take place, and data will be sent to `/transcribe`, but that endpoint does not exist yet - let's fix that.



## Transcribe Call



Create a new function - `/transcribe`. Delete the boilerplate and set up the function with the following code:



```js
const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DEEPGRAM_KEY)

exports.handler = async function(context, event, callback) {
  const { RecordingUrl, CallSid } = event
  // Further code here
  return callback(null, true)
};
```



The recording data will be available in the `event` object, which destructures to the `RecordingUrl` and `CallSid` values. Unfortunately, this payload doesn't include the caller's phone number, but it can be looked up from the `CallSid`. Where the `Further code here` comment is situation, add the following:



```javascript
const twilioClient = context.getTwilioClient()
const { from: caller, to: twilioNumber } = await twilioClient.calls(CallSid).fetch()
```



The caller's phone number is now available in a variable called `caller`, and the number they called as `twilioNumber`. Now generate a transcription with Deepgram's Node.js SDK:



```js
const transcriptionFeatures = { punctuate: true, tier: 'enhanced' }
const { results } = await deepgram.transcription.preRecorded({ url: RecordingUrl }, transcriptionFeatures)
const { transcript } = results.channels[0].alternatives[0]
```



This request uses Deepgram's [punctuation](https://developers.deepgram.com/documentation/features/punctuate/) feature, along with a request to use the [enhanced tier](https://developers.deepgram.com/documentation/features/tier/) for higher-accuracy transcripts.



## Send Transcription via SMS



Now that a transcript has been generated, it's time to send it to the caller. Just after the transcript is generated, add the following to send an SMS message:



```js
const message = await twilioClient.messages.create({
  body: `Here is what you said:\n\n${transcript}`,
  to: caller,
  from: twilioNumber
})
```



Finally, change the callback value from `true` to `{ results, message }`. This is purely for logging to your Twilio Console.



Save both files again and deploy all functions in your service. Call your Twilio number, speak after the beep, then hang up. You should receive a message a few seconds later.



## In Summary



The final code is as follows:



```js
// /record
exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.VoiceResponse()
  twiml.say({ voice: 'woman', language: 'en' }, 'Try Deepgram transcription by speaking after the beep. Talk about what you see around you right now.');
  twiml.record({
    maxLength: 30,
    playBeep: true,
    recordingStatusCallback: '/transcribe'
  })
  return callback(null, twiml)
}

// /transcribe
const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DEEPGRAM_KEY)
exports.handler = async function(context, event, callback) {
  const { RecordingUrl, CallSid } = event
  const twilioClient = context.getTwilioClient()
  const { from: caller, to: twilioNumber } = await twilioClient.calls(CallSid).fetch()
  const transcriptionFeatures = { punctuate: true , tier: 'enhanced' }
  const { results } = await deepgram.transcription.preRecorded({ url: RecordingUrl }, transcriptionFeatures)
  const { transcript } = results.channels[0].alternatives[0]
  const message = await twilioClient.messages.create({
    body: `Here is what you said:\n\n${transcript}`,
    to: caller,
    from: twilioNumber
  })
  return callback(null, { results, message })
}
```



Don't forget to install dependencies and set your environment variables. If you have any questions about this project, feel free to get in touch.