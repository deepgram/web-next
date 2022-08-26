---
title: "Starting Out with Python and Deepgram Live Streaming Audio"
description: "Learn how to perform real-time Automatic Speech Recognition using various Python web frameworks and Deepgram's Speech-to-Text API with this roundup post."
date: 2022-06-23
cover: https://res.cloudinary.com/deepgram/image/upload/v1655914351/blog/2022/06/python-deepgram-roundup/Transcribing-Real-Time-Audio-Using-Python-in-5-Minutes%402x.jpg
authors:
    - tonya-sims
category: thought-leadership
tags:
    - python
    - fastapi
seo:
    title: "Starting Out with Python and Deepgram Live Streaming Audio"
    description: "Learn how to perform real-time Automatic Speech Recognition using various Python web frameworks and Deepgram's Speech-to-Text API with this roundup post."
shorturls:
    share: https://dpgr.am/bf4bebf
    twitter: https://dpgr.am/d4a669d
    linkedin: https://dpgr.am/f0f7a33
    reddit: https://dpgr.am/039d224
    facebook: https://dpgr.am/02c041e
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454100/blog/python-deepgram-roundup/ograph.png
---

## Python Web Frameworks for Live Audio Transcription

This blog post will summarize how to transcribe speech-to-text streaming audio in real-time using Deepgram with four different Python web frameworks. At Deepgram, we have a Python SDK that handles pre-recorded and live streaming speech recognition transcription, which can be used with your framework of choice.

### FastAPI Live Streaming Audio

FastAPI is a new, innovative Python web framework gaining popularity because of its modern features, such as concurrency and asynchronous code support.

Working with WebSockets in FastAPI is a breeze because it uses the [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API), making it easier to establish two-way communication between the browser and server. There’s a section about working with WebSockets in the [FastAPI documentation](https://fastapi.tiangolo.com/advanced/websockets/).

FastAPI is very easy to use because of its thorough documentation, so even beginners can get started. Remember that supporting community resources, as a newer Python web framework, may not be as robust as other options. It didn’t take long to get FastAPI up and running with Deepgram’s live streaming audio speech-to-text transcription in Python. We wrote a [step-by-step tutorial](https://developers.deepgram.com/blog/2022/03/live-transcription-fastapi/) on using FastAPI with Deepgram for real-time audio transcription in Python.

### Flask 2.0 Live Streaming Audio

Flask 2.0 is a familiar, lightweight, micro web framework that is very flexible. It doesn't make decisions for you, meaning you are free to choose which database, templating engine, etc., to use without lacking functionality. Check out the [tutorial we wrote on using Flask](https://developers.deepgram.com/blog/2022/03/live-transcription-flask/) to get up and running with a live-streamed audio speech-to-text transcript in Python.

Flask does not have WebSocket support built-in, but there is a workaround. You use [aiohttp](https://docs.aiohttp.org/en/v3.8.1/faq.html), an Async HTTP client/server for asyncio and Python. It also supports server and client WebSockets out of the box.

Once you get aiohttp configured for WebSockets, getting Flask 2.0 working with Deepgram is pretty straightforward. If you'd like to work with a Python framework similar to Flask with WebSocket support built-in, you can use Quart.

### Quart Live Streaming Audio

Quart is a Python web microframework that is asynchronous, making it easier to serve WebSockets. Quart is an asyncio reimplementation of Flask. If you're familiar with Flask, you'll be able to ramp up on Quart quickly. We have a tutorial on using [Quart with Deepgram](https://developers.deepgram.com/blog/2022/03/live-transcription-quart/) live streaming audio speech-to-text.

Getting started with Quart was very simple. They have a short [tutorial on WebSockets](https://pgjones.gitlab.io/quart/tutorials/websocket_tutorial.html) on their website that covers the basics. Since Quart is very similar to Flask, there wasn’t as much ramp-up time, which is nice. Quart also has support for WebSockets, so there was no need for extra configuration, and it worked perfectly with Deepgram’s live streaming audio.

### Django Live Streaming Audio

Django is a familiar Python web framework for rapid development. It provides a lot of things you need "out of the box" and everything is included with the framework, following a “Batteries included” philosophy.

Django uses [Channels](https://channels.readthedocs.io/en/stable/introduction.html) to handle WebSockets. It allows for real-time communication to happen between a browser and a server. The Django Channels setup was different than the other three Python web frameworks but was easy to follow because of their documentation. It might be good to have a little experience with Django, but if you want to use it with Deepgram, check out the [blog post](https://developers.deepgram.com/blog/2022/03/live-transcription-django/) we wrote on using Django to handle real-time speech-to-text transcription.

## Final Words

Hopefully, you can see that regardless of your application's Python web framework choice, you can use Deepgram speech-to-text live streaming transcription. As a next step, you can go to the [Deepgram console](https://console.deepgram.com/) and grab an API Key. You'll need this key to do speech-to-text transcription with Deepgram and Python. We also have missions to try in the console to get up and running quickly with real-time or pre-recorded audio-to-text transcription.

Please feel free to Tweet us at [@deepgramdevs](https://twitter.com/DeepgramDevs). We would love to hear from you!

        