---
title: "How To Transcribe YouTube Videos From Your Terminal"
description: "A five-year old snippet shared by our CEO still stacks up. Learn how to transcribe a YouTube video entirely from the terminal with youtube-dl and jq."
date: 2022-08-22
cover: https://res.cloudinary.com/deepgram/image/upload/v1661178745/blog/2022/08/transcribe-youtube-videos-from-terminal/2208-Transcribing-YouTube-Videos-From-Your-Terminal-blog%402x.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
    - terminal,
    - youtube
seo:
    title: "How To Transcribe YouTube Videos From Your Terminal"
    description: "A five-year old snippet shared by our CEO still stacks up. Learn how to transcribe a YouTube video entirely from the terminal with youtube-dl and jq."
shorturls:
    share: https://dpgr.am/ea99736
    twitter: https://dpgr.am/623ea0b
    linkedin: https://dpgr.am/ca09b28
    reddit: https://dpgr.am/c92034c
    facebook: https://dpgr.am/6243eec
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454124/blog/transcribe-youtube-videos-from-terminal/ograph.png
---

In our internal Deepgram Slack workspace, there's a channel where folks can share fun and wacky things they've achieved on the terminal (`#bash-hall-of-fame`). Over five years ago, our CEO Scott shared a nice little snippet that allows you to download just the audio from a YouTube video. Today, I'm going to take that still-functional piece of code and show you how to download audio from a YouTube video and then transcribe it with Deepgram's Speech Recognition API.

The steps are remarkably similar to our [Transcribing YouTube Videos with Node.js](https://developers.deepgram.com/blog/2021/11/transcribe-youtube-videos-nodejs/) post, but entirely on the terminal.

You will need to download [`youtube-dl`](http://ytdl-org.github.io/youtube-dl/download.html), [`ffmpeg`](http://ffmpeg.org/download.html), and [`jq`](https://stedolan.github.io/jq/) for this tutorial to work. If you use macOS and have homebrew installed, this is `brew install youtube-dl`, `brew install ffmpeg`, and `brew install jq`. You will also need a Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys).

## Download Audio From YouTube Video with youtube\_dl

We'll use the following YouTube ID: `9NZDwZbyDus`. Starting with Scott's original snippet:

```bash
youtube-dl 9NZDwZbyDus --extract-audio --audio-format wav -o 9NZDwZbyDus.wav
```

Given that we use the same value twice, let's abstract the video ID into a variable:

```bash
VIDEO_ID=9NZDwZbyDus; youtube-dl $VIDEO_ID --extract-audio --audio-format wav -o $VIDEO_ID.wav
```

## Transcribe With Deepgram

Now that we have a local file and know its file format, we can use cURL to get a transcript from Deepgram:

```bash
curl https://api.deepgram.com/v1/listen?punctuate=true -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" -H "Content-Type: audio/wav" --data-binary @${VIDEO_ID}.wav
```

Using `jq` to extract just the transcript text and saving that to a file:

```bash
curl https://api.deepgram.com/v1/listen?punctuate=true -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" -H "Content-Type: audio/wav" --data-binary @${VIDEO_ID}.wav | jq '.results.channels[0].alternatives[0].transcript' > "$VIDEO_ID.txt"
```

## Delete Audio File

Finally, if you no longer require the audio file, delete it:

```bash
rm $VIDEO_ID.wav
```

## Bringing It All Together

When we first introduced a variable to this script, we separated the declaration and the cURL command with a semicolon. We can do exactly the same with all subsequent steps. The one-liner for this project is:

```bash
VIDEO_ID=EmIhbFeJgiE; youtube-dl ${VIDEO_ID} --extract-audio --audio-format wav -o ${VIDEO_ID}.wav; curl https://api.deepgram.com/v1/listen\?punctuate\=true -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" -H "Content-Type: audio/wav" --data-binary @${VIDEO_ID}.wav | jq '.results.channels[0].alternatives[0].transcript' > "$VIDEO_ID.txt"; rm "$VIDEO_ID.wav"
```

If you have any questions, please let us know - we love to help!

