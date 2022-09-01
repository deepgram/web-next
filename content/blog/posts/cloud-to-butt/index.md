---
title: "Remembering Cloud To Butt"
description: "Who remembers the Cloud to Butt extension? Say no to buzzwords and use Deepgram's Find and Replace feature to make transcripts way more fun to read."
date: 2022-08-11
cover: https://res.cloudinary.com/deepgram/image/upload/v1660159294/blog/2022/08/cloud-to-butt/ctb.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
seo:
    title: "Remembering Cloud To Butt"
    description: "Who remembers the Cloud to Butt extension? Say no to buzzwords and use Deepgram's Find and Replace feature to make transcripts way more fun to read."
shorturls:
    share: https://dpgr.am/3d72211
    twitter: https://dpgr.am/0588a0f
    linkedin: https://dpgr.am/a013353
    reddit: https://dpgr.am/1c11ab7
    facebook: https://dpgr.am/c24e20f
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454113/blog/cloud-to-butt/ograph.png
---

Every morning I cycle through the same few apps on my phone before I get up, and one of my stops is Facebook. While it isn't really a platform I actively use, I take a moment to go into today's 'memories' - all of the posts I posted on this date in previous years - and scrub old, embarrassing entries.

On the day I'm writing this, I was made to remember the [Cloud to Butt Chrome Extension](https://www.gizmodo.com.au/2014/08/a-chrome-extension-that-replaces-cloud-with-butts-wins-everything/) - which replaces instances of "cloud" with "butt". I'm all for slapping the wrists of those who lean into buzzwords, which in 2014, "the cloud" definitely was.

Chrome Extensions are so last month ([cough cough here's a blog post I wrote on them](https://developers.deepgram.com/blog/2022/07/transcribing-browser-tab-audio-chrome-extensions/)), so I thought it'd be fun to use the new Deepgram [Find and Replace feature](https://developers.deepgram.com/documentation/features/replace/) to get my nostalgia trip in 2022.

I recorded some words based on [this 2014 talk from Maciej Cegłowski](https://idlewords.com/talks/internet_with_a_human_face.htm). [Here is the audio file we're going to use](http://lws.io/static/the-cloud.mp3).

## Using cURL

Open your terminal, copy and paste the following (remembering to replace `YOUR_DEEPGRAM_API_KEY` with a real API Key generated in the [Deepgram Console](https://console.deepgram.com/signup?jump=keys)), and hit enter.

```bash
curl \
  --request POST \
  --header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"url":"http://lws.io/static/the-cloud.mp3"}' \
  --url 'https://api.deepgram.com/v1/listen?replace=the%20cloud:my%20butt'
```

The `replace` query parameter accepts the following format `original:new`. The value `%20` is a URL-encoded space. So `the%20cloud:my%20butt` replaces `the cloud` with `my butt`.

## Adding jq

[`jq`](https://stedolan.github.io/jq/) is an excellent command-line utility that allows you to display and manipulate json data. Once installed, try running this command to display just the transcript:

```bash
curl \
  --request POST \
  --header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"url":"http://lws.io/static/the-cloud.mp3"}' \
  --url 'https://api.deepgram.com/v1/listen?replace=the%20cloud:my%20butt' | jq '.results.channels[0].alternatives[0].transcript'
```

> "and then there's my butt my butt fascinates me because of the distance between what it promises and what it actually is my butt promises us complete liberation from the mundane world of hardware and infrastructure it invites us to soar into a plane of pure computation freed from the weary bonds of earth what my butt is is a big collection of buildings and computers that we actually know very little about run by a large American company notorious for being pretty terrible to its workers but who knows what angry admin looks inside my butt"

I hope you found this... insightful? And remember, if I can get paid to write posts like this for my job then anything's possible. Have a fantastic rest of your day!

        