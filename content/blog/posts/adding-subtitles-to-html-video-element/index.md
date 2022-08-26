---
title: "How to Add Captions and Subtitles to HTML5 Videos"
description: "Generating accurate transcripts is often just the start of a journey. Learn how to use Deepgram's best-in-class transcriptions in HTML Video elements."
date: 2022-07-28
cover: https://res.cloudinary.com/deepgram/image/upload/v1658998154/blog/2022/07/adding-subtitles-to-html-video-element/post-cover.png
authors:
    - kevin-lewis
category: tutorial
tags:
    - html,
    - beginners
seo:
    title: "How to Add Captions and Subtitles to HTML5 Videos"
    description: "Generating accurate transcripts is often just the start of a journey. Learn how to use Deepgram's best-in-class transcriptions in HTML Video elements."
shorturls:
    share: https://dpgr.am/7f7fa03
    twitter: https://dpgr.am/6b7aeab
    linkedin: https://dpgr.am/e58d57e
    reddit: https://dpgr.am/b0ec347
    facebook: https://dpgr.am/6b9e567
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454104/blog/adding-subtitles-to-html-video-element/ograph.png
---

Generating accurate transcripts is often just the start of a journey. Learn how to use Deepgram's best-in-class transcriptions in HTML `<video>` elements.

## Generating Transcriptions

To add subtitles to a HTML `<video>` element requires a WebVTT file. We previously wrote about [generating WebVTT captions with Node.js](https://developers.deepgram.com/blog/2021/11/generate-webvtt-srt-captions-nodejs/). Assuming you have an MP4 video to transcribe, you can use this snippet to generate a subtitles file:

```js
// npm install @deepgram/sdk

const fs = require('fs')
const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram('YOUR_DEEPGRAM_API_KEY')

const fileSource = {
    stream: fs.createReadStream('./video.mp4'),
    mimetype: 'video/mp4',
}

deepgram.transcription.preRecorded(fileSource, {
    punctuate: true,
    utterances: true
}).then(result => {
    fs.writeFileSync('captions-en.vtt', result.toWebVTT());
})
```

You will need to replace `YOUR_DEEPGRAM_API_KEY` with a valid key which you can get [for free here](https://console.deepgram.com).

## Set Up a Video Player

Create an `index.html` page:

```html
<!DOCTYPE html>
<html>
    <body>
        <video controls width="500px">
            <source type="video/mp4" src="video.mp4" >
       </video>
    </body>
</html>
```

Load the webpage, and you should see a video player.

![A webpage with only a video player visible](https://res.cloudinary.com/deepgram/image/upload/v1657806576/blog/2022/07/adding-subtitles-to-html-video-element/video.png)

## Add Subtitles

Inside of the `<video>` tag add a `<track>` element to represent the caption file:

```html
<track src="captions-en.vtt" label="English" kind="subtitles" srclang="en" default>
```

*   The `src` attribute is a filepath. This assumes the file is in the same directory as the HTML file.
*   `label` is shown to the user when selecting which subtitles they want to see.
*   `kind` specifies the type of track. We're choosing `subtitles` as these generally just contain spoken words, while `captions` include other important background sounds.
*   `srclang` specifies the language of the file.
*   `default` is honored by Safari, while Chromium-based browsers will try and select a captions file based on the browser's language setting.

![A webpage with only a video player visible. The video player has subtitles.](https://res.cloudinary.com/deepgram/image/upload/v1657806575/blog/2022/07/adding-subtitles-to-html-video-element/subtitles.png)

You can add as many subtitle tracks as you want, but only one can have the `default` attribute. For example:

```html
<video controls width="500px">
    <source type="video/mp4" src="video.mp4" >
    <track src="captions-en.vtt" label="English" kind="subtitles" srclang="en" default >
    <track src="captions-fr.vtt" label="French" kind="subtitles" srclang="fr" >
</video>
```

As a final note, if you've not seen [Scott's Chili Pepper video](https://deepgram.com/blog/chili-pepper/) which is in the header image for this post - you should. It's hilarious. If you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).

