---
title: "Transcribe YouTube Videos with Node.js"
description: "Generate and save transcripts from YouTube videos with the Deepgram SDK for Node.js."
date: 2021-11-01
cover: https://res.cloudinary.com/deepgram/image/upload/v1635374324/blog/2021/11/transcribe-youtube-videos-nodejs/getting-transcripts-from-youtube-videos-blog%402x.png
authors:
    - kevin-lewis
category: tutorial
tags:
    - nodejs
    - sdk
    - javascript
seo:
    title: "Transcribe YouTube Videos with Node.js"
    description: "Generate and save transcripts from YouTube videos with the Deepgram SDK for Node.js."
shorturls:
    share: https://dpgr.am/0f005c0
    twitter: https://dpgr.am/5091038
    linkedin: https://dpgr.am/94f4999
    reddit: https://dpgr.am/429a550
    facebook: https://dpgr.am/a63d46e
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453823/blog/transcribe-youtube-videos-nodejs/ograph.png
---

In this blog post we will be creating transcripts for YouTube videos using Deepgram's Speech Recognition API. First, we will download videos and convert them to mp3 audio files. Then, we will use Deepgram to generate a transcript. Finally, we will store the transcript in a text file and delete the media file.

The final project code can be found at <https://github.com/deepgram-devs/youtube-transcripts>.

Watch this tutorial as a video:

<youtube id="LrNS_q886uQ"></youtube>

We need a sample video, so I am using a [Shang-Chi and The Legend of The Ten Rings teaser trailer](https://www.youtube.com/watch?v=ir-mWUYH_uo) - if that is a spoiler for you please go ahead and grab another video link.

<youtube id="ir-mWUYH_uo"></youtube>

## Before We Start

You will need:

*   Node.js installed on your machine - [download it here](https://nodejs.org/en/).
*   A Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys).
*   A YouTube Video ID which is part of the URL of a video. The one we will be using is `ir-mWUYH_uo`.

Create a new directory and navigate to it with your terminal. Run `npm init -y` to create a `package.json` file and then install the following packages:

    npm install @deepgram/sdk ffmpeg-static youtube-mp3-downloader

Create an `index.js` file, and open it in your code editor.

## Preparing Dependencies

At the top of your file require these four packages:

```js
const fs = require('fs')
const YoutubeMp3Downloader = require('youtube-mp3-downloader')
const { Deepgram } = require('@deepgram/sdk')
const ffmpeg = require('ffmpeg-static')
```

`fs` is the built-in file system module for Node.js. It is used to read and write files which we will be doing a few times throughout this post. `ffmpeg-static` includes a version of ffmpeg in our node\_modules directory, and requiring it returns the file path.

Initialize the Deepgram and YouTubeMp3Downloader clients:

```js
const deepgram = new Deepgram('YOUR DEEPGRAM KEY')
const YD = new YoutubeMp3Downloader({
  ffmpegPath: ffmpeg,
  outputPath: './',
  youtubeVideoQuality: 'highestaudio',
})
```

## Download Video and Convert to MP3

Under the hood, the `youtube-mp3-downloader` package will download the video and convert it with `ffmpeg` on our behalf. While it is doing this it triggers several events - we are going to use the `progress` event so we know how far through the download we are, and `finished` which indicates we can move on.

```js
YD.download('ir-mWUYH_uo')

YD.on('progress', (data) => {
  console.log(data.progress.percentage + '% downloaded')
})

YD.on('finished', async (err, video) => {
  const videoFileName = video.file
  console.log(`Downloaded ${videoFileName}`)

  // Continue on to get transcript here
})
```

Save and run the file with `node index.js` and you should see the file progress in your terminal and then have the file available in your file directory.

![A terminal showing various percentages downloaded ending with 100%. The final log states the final filename.](https://res.cloudinary.com/deepgram/image/upload/v1635374325/blog/2021/11/transcribe-youtube-videos-nodejs/downloaded.png)

## Get Transcript from Deepgram

Where the comment is above, prepare and create a Deepgram transcription request:

```js
const file = {
  buffer: fs.readFileSync(videoFileName),
  mimetype: 'audio/mp3',
}
const options = {
  punctuate: true,
}

const result = await deepgram.transcription
  .preRecorded(file, options)
  .catch((e) => console.log(e))
console.log(result)
```

There are lots of options which can make your transcript more useful including diarization which recognizes different speakers, a profanity filter which replaces profanity with nearby terms, and punctuation. We are using punctuation in this tutorial to show you how setting options works.

Rerun your code and you should see a JSON object printed in your terminal.

![A terminal showing the file being downloaded, and then an object containing data from Deepgram. Within the object is a results object with a channels array. Further content is ommitted from the screenshot as it is nested too far.](https://res.cloudinary.com/deepgram/image/upload/v1635374324/blog/2021/11/transcribe-youtube-videos-nodejs/transcript.png)

## Saving Transcript and Deleting Media

There is a lot of data that comes back from Deepgram, but all we want is the transcript which, with the options we provided, is a single string of text. Add the following line to access just the transcript:

```js
const transcript = result.results.channels[0].alternatives[0].transcript
```

Now we have the string, we can create a text file with it:

```js
fs.writeFileSync(
  `${videoFileName}.txt`,
  transcript,
  () => `Wrote ${videoFileName}.txt`
)
```

Then, if desired, delete the mp3 file:

```js
fs.unlinkSync(videoFileName)
```

## Summary

Transcribing YouTube videos has never been easier thanks to Deepgram's Speech Recognition API and the Deepgram Node SDK. You can find the final project code at <https://github.com/deepgram-devs/youtube-transcripts>

Check out the other options supported by the [Deepgram Node SDK](https://github.com/deepgram/node-sdk) and if you have any questions feel free to reach out to us on Twitter (we are [@DeepgramDevs](https://twitter.com/DeepgramDevs)).

        