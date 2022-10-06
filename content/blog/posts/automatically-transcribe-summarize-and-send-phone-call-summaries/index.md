---
title: Automatically Transcribe, Summarize, and Send Phone Call Summaries
description: Learn how to use Twilio Functions and Deepgram's summarization
  feature to send all phone call participants a bite-sized version of what
  happened.
date: 2022-10-06T19:43:14.093Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1664560715/blog/automatically-transcribe-summarize-and-send-phone-call-summaries/2209-Automatically-Transcribe-Summarize-and-Send-Phone-Call-Summaries-blog_2x_wvgy7d.jpg
authors:
  - kevin-lewis
category: tutorial
tags:
  - javascript
  - twilio
shorturls:
  share: https://dpgr.am/bd1239a
  twitter: https://dpgr.am/0daa6ee
  linkedin: https://dpgr.am/e0856ca
  reddit: https://dpgr.am/1e08cde
  facebook: https://dpgr.am/969a1cd
---

In this tutorial, we'll use Twilio Functions and Deepgram's [summarize](https://developers.deepgram.com/documentation/features/summarize/) feature to send call summaries via SMS once a conversation has ended.

Users can call a Twilio phone number, which will be forwarded to your agent while recording. Once the call is completed, we will get a transcript and summary of the call using Deepgram. Finally, the summary will be sent to both the caller and the agent via SMS.

We've previously written a post on [transcribing phone calls with Twilio Functions](https://blog.deepgram.com/transcribe-phone-calls-with-twilio-functions-and-deepgram/). We'll run through all the steps here, but do take a look for more detail.

## Before You Start

You will need a Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys). You will also need a [Twilio account](https://console.twilio.com/) and a phone number in your account with SMS and Voice capabilities. Finally, you'll need two phones to test your project - one to make the call and one to receive.

## Set Up Twilio Functions

Inside the Twilio Console, head to **Developer Tools -> Functions & Assets** and create a new service. A service can contain multiple Twilio Functions and assets related to a single project. It’s important that you create a new service here and not a standalone function.

In the Dependencies section, add `@deepgram/sdk` (you can omit the version for the latest).

In the Environment Variables section, add a key called `DEEPGRAM_KEY` with the value of your API Key generated in your Deepgram console. Create a second key called `FORWARDING_NUMBER` with the value of your agent phone number with [E.164 formatting](https://support.twilio.com/hc/en-us/articles/223183008-Formatting-International-Phone-Numbers) like this: +14155552671.

## Record and Forward Inbound Calls

Rename the `/welcome` function to `/inbound`. Replace the whole file with the following:

```js
exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.VoiceResponse()
  const dial = twiml.dial({
    record: 'record-from-answer-dual',
    recordingStatusCallback: '/recordings'
  })
  dial.number(process.env.FORWARDING_NUMBER)
  return callback(null, twiml)
}
```

When this function receives incoming call data, it will forward it to your agent while recording it. Once completed, call data will be sent to `/recordings` (which will be created in the next section).

Save the function, and click *Deploy All*. Once deployed, this function is ready to be used. Go to your Twilio number settings, and when a call comes in, select Function. Select your service and the `/inbound` function path.

![When a call comes in, use a Function. Default service with the /inbound function path.](https://res.cloudinary.com/deepgram/image/upload/v1663789484/blog/2022/09/automatically-transcribe-summarize-and-send-phone-call-summaries/set-inbound-endpoint_rw5v5z.png)

## Transcribe and Summarize Call

Create a new function - `/transcribe`. Delete the boilerplate and set up the function with the following code:

```js
const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DEEPGRAM_KEY)

exports.handler = async function(context, event, callback) {
  const { RecordingUrl, CallSid } = event
  const twilioClient = context.getTwilioClient()
  const { from: caller, to: twilioNumber } = await twilioClient.calls(CallSid).fetch()

  // Further code here

  return callback(null, true)
}
```

This code takes the `CallSid` and looks up the call for further call information. The caller’s phone number is now available in a variable called `caller`, and the number they called as `twilioNumber`. Now generate a transcription with Deepgram’s Node.js SDK:

```js
const transcriptionFeatures = { punctuate: true, tier: 'enhanced', summarize: true }
const { results } = await deepgram.transcription.preRecorded({ url: RecordingUrl }, transcriptionFeatures)
const { summaries } = results.channels[0].alternatives[0]
```

`summaries` is an array of objects containing summary text and what time period it is summarizing. Add the following to turn it into one string that can be sent via SMS:

```js
const summary = summaries.map(s => s.summary).join('\n\n')
```

## Send Summary Messages

Now that you have a summary of the call provided by Deepgram's [summarization](https://developers.deepgram.com/documentation/features/summarize/) feature, it's time to send it to both the caller and the agent. Just below `summary` add the following:

```js
for(let number of [process.env.FORWARD_NUMBER, caller]) {
  await twilioClient.messages.create({
    body: summary,
    to: number,
    from: twilioNumber
  })
}
```

Save both files again and deploy all functions in your service. Call your Twilio number, pick it up on your 'agent device', speak, and hang up. You should receive a summary message a few seconds later.

## In Summary

Getting high-quality summaries from your audio is as simple as adding one parameter in your Deepgram request. They're super useful in understanding what was said and what needs to happen next.

If you have questions about anything in this post, we’d love to hear from you. Head over to [our forum](https://github.com/orgs/deepgram/discussions/categories/q-a) and create a new discussion with your questions, or send us a tweet [@DeepgramAI](https://twitter.com/DeepgramAI)

The final code is as follows:

```js
// /inbound
exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.VoiceResponse()
  const dial = twiml.dial({
    record: 'record-from-answer-dual',
    recordingStatusCallback: '/transcribe'
  })
  dial.number(process.env.FORWARDING_NUMBER)
  return callback(null, twiml)
}

// /transcribe
const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DEEPGRAM_KEY, 'api.beta.deepgram.com')

exports.handler = async function(context, event, callback) {
  const { RecordingUrl, CallSid } = event
  const twilioClient = context.getTwilioClient()
  const { from: caller, to: twilioNumber } = await twilioClient.calls(CallSid).fetch()

  const transcriptionFeatures = { punctuate: true, tier: 'enhanced', summarize: true }
  const { results } = await deepgram.transcription.preRecorded({ url: RecordingUrl }, transcriptionFeatures)
  const { summaries } = results.channels[0].alternatives[0]
  const summary = summaries.map(s => s.summary).join('\n\n')

  for(let number of [process.env.FORWARDING_NUMBER, caller]) {
    await twilioClient.messages.create({
      body: summary,
      to: number,
      from: twilioNumber
    })
  }

  return callback(null, true)
}
```

