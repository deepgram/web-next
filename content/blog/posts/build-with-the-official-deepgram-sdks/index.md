---
title: "Build With the Official Deepgram SDKs"
description: "Add speech-to-text to your application even faster with the new Node.js and Python SDKs for the Deepgram API."
date: 2021-07-22
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981374/blog/build-with-the-official-deepgram-sdks/build-w-official-dg-sdks%402x.jpg
authors:
  - michael-jolley
category: product
tags:
  - nodejs
  - python
  - sdk
seo:
  title: "Build With the Official Deepgram SDKs"
  description: "Add speech-to-text to your application even faster with the new Node.js and Python SDKs for the Deepgram API."
shorturls:
  share: 
  twitter: 
  linkedin: 
  reddit: 
  facebook: 
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981374/blog/build-with-the-official-deepgram-sdks/build-w-official-dg-sdks%402x.jpg
---

We love empowering our developer communities to take full advantage of voice in their applications. So, we're announcing two new official SDKs for Node.js and Python. Both of these SDKs make it easier than ever to add automated speech-to-text recognition to your applications.

## How Easy Is It?

To get started, make sure you have a Deepgram account by signing up at [https://console.deepgram.com/signup](https://console.deepgram.com/signup). After signing up, log in and get an API key. Then, in your terminal, run the appropriate command below to install the SDK.

#### **Node.js**

<pre>npm install @deepgram/sdk</pre>

#### **Python**

<pre>pip install deepgram-sdk</pre>

Once the SDK has been installed, the following snippets will allow you to transcribe a prerecorded audio file. Be sure to replace `YOUR_DEEPGRAM_API_KEY` with the API key, you created earlier.

#### **Node.js**

<pre>const { Deepgram } = require('@deepgram/sdk');

const deepgramApiKey = 'YOUR_DEEPGRAM_API_KEY';

function main() {
 return new Promise((resolve, reject) => {
 (async () => {
 try {
 const deepgram = new Deepgram(deepgramApiKey);
 const transcription = await newDeepgram.transcription.preRecorded({
 url: 'https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav'
 }, {
 punctuate: true
 });
 console.dir(transcription, { depth: null });
 resolve();
 }
 catch (err) {
 console.log(`Err: ${err}`);
 reject(err);
 }
 })()
 });
} 
main();</pre>

#### **Python**

<pre>from deepgram import Deepgram

import asyncio, json

DEEPGRAM_API_KEY = 'YOUR_API_KEY'

async def main():

    # Initializes the Deepgram SDK

    dg_client = Deepgram(DEEPGRAM_API_KEY)

    source = {'url': 'https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav'}

    response = await dg_client.transcription.prerecorded(source)

    print(json.dumps(response, indent=4))

asyncio.run(main())</pre>

## Contributions Welcome

Our SDKs are still in their infancy, but we're building them in public. We welcome all issues and pull requests to our [Node.js](https://github.com/deepgram/node-sdk) and [Python](https://github.com/deepgram/python-sdk) repositories. Of course, we'd also love to hear what you're building, so tweet at [@DeepgramDevs](https://twitter.com/DeepgramDevs) and let us know!
