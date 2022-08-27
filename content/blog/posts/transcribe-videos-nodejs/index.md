---
title: "Transcribe Videos With Node.js"
description: "Convert and Transcribe Videos with Node.js and Deepgram"
date: 2021-11-11
cover: https://res.cloudinary.com/deepgram/image/upload/v1635374324/blog/2021/11/transcribe-videos-nodejs/transcribe-videos-with-nodejs-blog%402x.png
authors:
    - kevin-lewis
category: tutorial
tags:
    - nodejs
    - sdk
    - javascript
seo:
    title: "Transcribe Videos With Node.js"
    description: "Convert and Transcribe Videos with Node.js and Deepgram"
shorturls:
    share: https://dpgr.am/c5961f4
    twitter: https://dpgr.am/dc34079
    linkedin: https://dpgr.am/3621965
    reddit: https://dpgr.am/977352f
    facebook: https://dpgr.am/9df6807
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453821/blog/transcribe-videos-nodejs/ograph.png
---

Whether your video is hosted online or on your machine, for accessibility or analysis, Deepgram can provide accurate transcriptions in just a few lines of code.

I'm glad you're here, but I must confess that I am leading you down a path slightly different to what you would expect. Instead of transcribing video directly, this post will cover converting video files to audio files and then sending them to Deepgram. First, we will transcribe local files, and then we will download files programatically before transcribing them.

## Before We Start

You will need:

*   Node.js installed on your machine - [download it here](https://nodejs.org/en/).
*   A Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys).
*   A video file to transcribe - [here's one you can download](https://github.com/deepgram-devs/transcribe-videos/blob/main/deepgram.mp4) and place in your new project directory.
*   A link to a hosted video file - [here is the same video's direct URL](https://github.com/deepgram-devs/transcribe-videos/raw/main/deepgram.mp4).

Create a new directory and navigate to it with your terminal. Run `npm init -y` to create a `package.json` file and then install the following packages:

    npm install @deepgram/sdk ffmpeg-static

Create an `index.js` file, and open it in your code editor.

## Preparing Dependencies

At the top of your file require these packages:

```js
const fs = require('fs')
const https = require('https')
const { execSync: exec } = require('child_process')
const { Deepgram } = require('@deepgram/sdk')
const ffmpegStatic = require('ffmpeg-static')
```

`fs` is the built-in file system module for Node.js. It is used to read and write files which you will be doing a few times throughout this post. `ffmpeg-static` includes a version of ffmpeg in our node\_modules directory, and requiring it returns the file path.

Initialize the Deepgram client:

```js
const deepgram = new Deepgram('YOUR DEEPGRAM KEY')
```

## Running ffmpeg Commands

[ffmpeg](https://ffmpeg.org) is a toolkit for developers to work with audio and video files - which includes conversion between formats. It's used most commonly in a terminal, so below is a utility function to add to your `index.js` file. It allows us to fire off terminal commands directly from our Node.js application:

```js
async function ffmpeg(command) {
  return new Promise((resolve, reject) => {
    exec(`${ffmpegStatic} ${command}`, (err, stderr, stdout) => {
      if (err) reject(err)
      resolve(stdout)
    })
  })
}
```

## Transcribing Local Video

This function will convert and transcribe local video files:

```js
async function transcribeLocalVideo(filePath) {
  ffmpeg(`-hide_banner -y -i ${filePath} ${filePath}.wav`)

  const audioFile = {
    buffer: fs.readFileSync(`${filePath}.wav`),
    mimetype: 'audio/wav',
  }
  const response = await deepgram.transcription.preRecorded(audioFile, {
    punctuation: true,
  })
  return response.results
}

transcribeLocalVideo('deepgram.mp4').then((transcript) =>
  console.dir(transcript, { depth: null })
)
```

``ffmpeg(`-hide_banner -y -i ${filePath} ${filePath}.wav`)`` takes in the provided file, and converts it to a `.wav` audio file. `-hide_banner` reduces the amount of information printed in the terminal and`-y` will overwrite an existing file (useful for development).

Save and run the file in your terminal with `node index.js` and you should see transcripts appear.

## Transcribing Remote Video

Add this utility to the bottom of your file:

```js
async function downloadFile(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      const fileName = url.split('/').slice(-1)[0] // Get the final part of the URL only
      const fileStream = fs.createWriteStream(fileName)
      response.pipe(fileStream)
      response.on('end', () => {
        fileStream.close()
        resolve(fileName)
      })
    })
  })
}
```

This allows us to download a file to our machine. The file name will be derived from the last part of the URL - for example `https://example.com/directory/directory2/file.mp4` becomes `file.mp4` locally.

With this in place, we first download the video and then use our existing `transcribeLocalVideo()` function:

```js
async function transcribeRemoteVideo(url) {
  const filePath = await downloadFile(url)
  const transcript = await transcribeLocalVideo(filePath)
  console.dir(transcript, { depth: null })
}
```

The complete project is available at <https://github.com/deepgram-devs/transcribe-videos> and if you have any questions please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).

        