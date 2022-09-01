---
title: "Quick Guide to the Deepgram Brain Transcription API"
description: ""
date: 2018-03-08
cover: https://res.cloudinary.com/deepgram/image/upload/v1662069447/blog/quick-guide-to-the-deepgram-transcription-api/placeholder-post-image%402x.jpg
authors:
  - scott-stephenson
category: product-news
tags:
  - ohsnap
seo:
  title: "Quick Guide to the Deepgram Brain Transcription API"
  description: ""
shorturls:
  share: https://dpgr.am/69db914
  twitter: https://dpgr.am/ca6bbcf
  linkedin: https://dpgr.am/2fd0dd1
  reddit: https://dpgr.am/771f752
  facebook: https://dpgr.am/72c23c5
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1662069447/blog/quick-guide-to-the-deepgram-transcription-api/placeholder-post-image%402x.jpg
---

This is a quick guide for using Deepgram Brain, our general transcription service.

### The API URL

    https://brain.deepgram.com  

You can both upload a local file (one that is on the computer running the request) or a remote file that is publicly accessible (e.g. hosted in AWS S3 or another server).

#### Local Upload

For local upload, let's say you have a file `/path/to/file.mp3` on your computer (you can scroll down for similar directions working with files hosted on a server). You can upload this mp3 file to Brain using the following `curl` command (filling in `USER` and `PASS` with your username/password or API ID/token):

    curl -u USER:PASS -X POST -T /path/to/file.mp3 -H 'Content-type: application/octet-stream' https://brain.deepgram.com/speech:recognize  

Wait a little bit and you'll get a JSON response like this:

    {
        "content_url": "...",
        "confidence": [0.999649, 0.995753, ...],
        "duration": 21.43,
        "asset_id": "05e36324fca6c919",
        "transcript": "Hello and how are ...",
        ...
    }

If you want to re-download this JSON blob at a later point, you just need to use the `asset_id`, like so:

    curl -u USER:PASS https://brain.deepgram.com/assets/05e36324fca6c919  

Additionally, to get word-level timings for each word, add the `?times=true` query parameter:

    curl -u USER:PASS https://brain.deepgram.com/assets/05e36324fca6c919?times=true  

To list all your available assets, you can simply do:

    curl -u USER:PASS https://brain.deepgram.com/assets  

This sort of "global" listing of all assets doesn't contain quite as much information as a specific asset query, so if you want more information about a particular asset, just query for the asset directly, as in the previous examples (`.../assets/ASSET_ID`).

If you want to queue an asset for processing, but don't want to wait for it to complete, you can simply add the `async=true` query parameter, like so:

    curl -u USER:PASS -X POST -T /path/to/file.mp3 -H 'Content-type: application/octet-stream' https://brain.deepgram.com/speech:recognize?async=true  

#### Remote Upload

If the media file you want transcribed is already available from a public URL, you can avoid the overhead of a file upload by submitting the URL directly to Brain:

    curl -u USER:PASS -d '{"audio": {"url": "https://my.domain.com/path/to/media.mp3"}, "config": {"async": true}}' https://brain.deepgram.com/speech:recognize  

Note that in this case, where we submit a JSON payload, the `async` flag goes in the `config` field of the JSON object (if the `config` field is absent, `async` defaults to `false`). With this type of request, the file will be downloaded by the Deepgram Brain API then processed in the standard way.
