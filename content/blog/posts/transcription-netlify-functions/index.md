---
title: Transcriptions Without a Server Using Netlify and Deepgram
description: Use Netlify Functions to transcribe pre-recorded audio without a server
date: 2022-01-31
cover: https://res.cloudinary.com/deepgram/image/upload/v1643628688/blog/2022/01/transcription-netlify-functions/Transcribe-without-server-Netlify-Deepgram%402x.jpg
authors:
  - kevin-lewis
category: tutorial
tags:
  - nodejs
  - netlify
  - serverless
seo:
  title: Transcriptions Without a Server Using Netlify and Deepgram
  description: Use Netlify Functions to transcribe pre-recorded audio without a server
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661453852/blog/transcription-netlify-functions/ograph.png
shorturls:
  share: https://dpgr.am/a0ed7cf
  twitter: https://dpgr.am/838386f
  linkedin: https://dpgr.am/038d7a4
  reddit: https://dpgr.am/f2a916e
  facebook: https://dpgr.am/1f580fd
---

Traditional server applications typically need to be always on, always using resources and require maintenance to ensure availability. Serverless works differently - functionality is exposed via URLs. When a request is made they spin up, execute logic, and spin back down. Each serverless script (known as a 'function') can be run many times in parallel, so this approach may be suitable for scale, dependent on your use case.

In this tutorial, you will set up serverless functions with [Netlify](https://www.netlify.com/products/functions/) to get transcripts using [Deepgram's Node.js SDK](https://developers.deepgram.com/sdks-tools/sdks/node-sdk/) - one for hosted files, and one for local files. Because serverless functions do not lend themselves to long-living scripts, it's not recommended to use this approach for live transcription.

## Before We Start

You will need:

*   Node.js installed on your machine - [download it here](https://nodejs.org/en/).
*   A Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys).
*   The Netlify CLI installed - [get started guide here](https://docs.netlify.com/cli/get-started/). Also, make sure to log in.

Create a new directory and navigate to it with your terminal. Run `npm init -y` to create a `package.json` file and then install the Deepgram Node.js SDK:

    npm install @deepgram/sdk

## Set Up Netlify Project

You can set up a Netlify project from the web dashboard, but as we need the Netlify CLI to test our functions, we may as well use it here. Inside of your project directory, run `netlify init`, and when prompted, choose *Create and deploy site manually*.

A new project will now be visible in your Netlify web dashboard - you can open it with `netlify open`.

## Your First Netlify Function

Netlify offer zero-configuration serverless functions if you put your logic in a specific directory - `/netlify/functions`. Create a new file at `/netlify/functions/hello.js` and populate it with the following:

```js
exports.handler = async (event) => {
  try {
    // Any logic goes here, but we'll return a fixed response
    return { statusCode: 200, body: JSON.stringify({ message: 'ok' }) }
  } catch (err) {
    return { statusCode: 500, body: String(err) }
  }
}
```

### Test Your Function

Run `netlify dev` and wait for the local server to start - usually at `http://localhost:8888`. Open another terminal and run the following command to see the response:
```
    curl http://localhost:8888/.netlify/functions/hello
```
<Alert type="info">Don't be alarmed by the . in the URL - your local directory, which contains your functions, should just be /netlify</Alert>

Your terminal should look something like this:

![A terminal showing the curl command and a response of a json object with message ok](https://res.cloudinary.com/deepgram/image/upload/v1640794183/blog/2022/01/transcription-netlify-functions/hello.png)

## Adding Your Deepgram API Key

Like most hosting providers, Netlify provides a way to set sensitive keys as environment variables. Netlify CLI will inject any variables from your web dashboard to your local runtime for you - super cool.

Open your project dashboard with `netlify open` while in your project directory. Heard to **Site settings > Build & deploy > Environment > Environment variables** and create a new variable called `DEEPGRAM_API_KEY` with the value from the [Deepgram Console](https://console.deepgram.com).

If you are still running your `netlify dev` server, stop it with `ctrl + c` and restart it. You should see the key being injected,meaning it is now available with `process.env.DEEPGRAM_API_KEY`

![netlify dev being run, and then the log 'Injected build settings env var DEEPGRAM\_API\_KEY'](https://res.cloudinary.com/deepgram/image/upload/v1640794183/blog/2022/01/transcription-netlify-functions/key-injection.png)

## Transcribe Hosted Files

Inside of your `functions` directory, create `hosted.js` with the following content:

```js
const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY)

exports.handler = async (event) => {
  try {
    const { url } = JSON.parse(event.body)
    const { results } = await deepgram.transcription.preRecorded({ url })
    return { statusCode: 200, body: JSON.stringify(results) }
  } catch (err) {
    return { statusCode: 500, body: String(err) }
  }
}
```

Once you save the file, the new URL is immediately available. This function requires a data payload with a `url` property. You can test it by once again using cURL:
```
  curl -X POST -H "Content-Type: application/json" -d '{"url": "https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}' http://localhost:8888/.netlify/functions/hosted
```
## Accessing Functions From The Web

Netlify makes your functions available on the same domain as your main application (just under the `/.netlify/functions` path). Due to this, we can call Netlify Functions from our main application by specifying the relative URL. This means it will work both locally and once deployed.

Create an `index.html` file in your main directory:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <button>Transcribe from URL</button>
    <script>
      document.querySelector('button').addEventListener('click', () => {
        const url = prompt('Please provide an audio file URL')
        fetch('/.netlify/functions/hosted', {
          method: 'POST',
          body: JSON.stringify({ url }),
        })
          .then((r) => r.json())
          .then((data) => {
            console.log(data)
          })
      })
    </script>
  </body>
</html>
```

Navigate to `http://localhost:8888` in your browser, click the button, and provide a static file URL (if you don't have one, use https://static.deepgram.com/examples/nasa-spacewalk-interview.wav). Open your browser console, and you should see the response from Deepgram.

![Browser console showing a large object from Deepgram](https://res.cloudinary.com/deepgram/image/upload/v1640794184/blog/2022/01/transcription-netlify-functions/console.png)

## Transcribe Local Files

Create a new functions file - `file.js`:

```js
const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY)

exports.handler = async (event) => {
  try {
    const { results } = await deepgram.transcription.preRecorded({
      buffer: Buffer.from(event.body, 'base64'),
      mimetype: 'audio/wav',
    })
    return { statusCode: 200, body: JSON.stringify(results) }
  } catch (err) {
    return { statusCode: 500, body: String(err) }
  }
}
```

Add a `<form>` just below the `<button>` in `index.html`:

```html
<form
  enctype="multipart/form-data"
  action="/.netlify/functions/file"
  method="POST"
>
  <input id="file" type="file" name="file" />
  <input type="submit" value="POST to server" />
</form>
```

Refresh your browser and upload a file - you should see the results in your browser. If you want to handle the results within the page, [Sandra details how to submit a form using JavaScript here](https://sweet-pie-c52a63-blog.netlify.app/sending-audio-files-to-expressjs-server/#html-and-js-using-a-formdata-object).

## Deploying Functions

Ready? `netlify deploy`. That's it.

Once deployed, you'll be able to access your Netlify functions at **random-name.netlify.app/.netlify/functions/function-name**. Your webpage will work without modifications because it will be served at the same subdomain.

Netlify also supports push-to-deploy with GitHub if you configure your project to deploy from a repo.

## Wrapping Up

Netlify makes deploying serverless functions reasonably straightforward, but if you have any questions after reading this guide, we are here to help! Just pop us a line at [@DeepgramDevs](https://twitter.com/deepgramdevs).