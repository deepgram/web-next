import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../entry.mjs';
import Slugger from 'github-slugger';
import '@astrojs/netlify/netlify-functions.js';
import 'preact';
import 'preact-render-to-string';
import 'vue';
import 'vue/server-renderer';
import 'html-escaper';
import 'node-html-parser';
/* empty css                           */import 'axios';
/* empty css                          *//* empty css                           *//* empty css                          *//* empty css                              *//* empty css                              */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           *//* empty css                              */import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [{ "depth": 2, "slug": "python-web-frameworks-for-live-audio-transcription", "text": "Python Web Frameworks for Live Audio Transcription" }, { "depth": 3, "slug": "fastapi-live-streaming-audio", "text": "FastAPI Live Streaming Audio" }, { "depth": 3, "slug": "flask-20-live-streaming-audio", "text": "Flask 2.0 Live Streaming Audio" }, { "depth": 3, "slug": "quart-live-streaming-audio", "text": "Quart Live Streaming Audio" }, { "depth": 3, "slug": "django-live-streaming-audio", "text": "Django Live Streaming Audio" }, { "depth": 2, "slug": "final-words", "text": "Final Words" }], "source": `## Python Web Frameworks for Live Audio Transcription

This blog post will summarize how to transcribe speech-to-text streaming audio in real-time using Deepgram with four different Python web frameworks. At Deepgram, we have a Python SDK that handles pre-recorded and live streaming speech recognition transcription, which can be used with your framework of choice.

### FastAPI Live Streaming Audio

FastAPI is a new, innovative Python web framework gaining popularity because of its modern features, such as concurrency and asynchronous code support.

Working with WebSockets in FastAPI is a breeze because it uses the [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API), making it easier to establish two-way communication between the browser and server. There\u2019s a section about working with WebSockets in the [FastAPI documentation](https://fastapi.tiangolo.com/advanced/websockets/).

FastAPI is very easy to use because of its thorough documentation, so even beginners can get started. Remember that supporting community resources, as a newer Python web framework, may not be as robust as other options. It didn\u2019t take long to get FastAPI up and running with Deepgram\u2019s live streaming audio speech-to-text transcription in Python. We wrote a [step-by-step tutorial](https://blog.deepgram.com/live-transcription-fastapi/) on using FastAPI with Deepgram for real-time audio transcription in Python.

### Flask 2.0 Live Streaming Audio

Flask 2.0 is a familiar, lightweight, micro web framework that is very flexible. It doesn't make decisions for you, meaning you are free to choose which database, templating engine, etc., to use without lacking functionality. Check out the [tutorial we wrote on using Flask](https://blog.deepgram.com/live-transcription-flask/) to get up and running with a live-streamed audio speech-to-text transcript in Python.

Flask does not have WebSocket support built-in, but there is a workaround. You use [aiohttp](https://docs.aiohttp.org/en/v3.8.1/faq.html), an Async HTTP client/server for asyncio and Python. It also supports server and client WebSockets out of the box.

Once you get aiohttp configured for WebSockets, getting Flask 2.0 working with Deepgram is pretty straightforward. If you'd like to work with a Python framework similar to Flask with WebSocket support built-in, you can use Quart.

### Quart Live Streaming Audio

Quart is a Python web microframework that is asynchronous, making it easier to serve WebSockets. Quart is an asyncio reimplementation of Flask. If you're familiar with Flask, you'll be able to ramp up on Quart quickly. We have a tutorial on using [Quart with Deepgram](https://blog.deepgram.com/live-transcription-quart/) live streaming audio speech-to-text.

Getting started with Quart was very simple. They have a short tutorial on WebSockets on their website that covers the basics. Since Quart is very similar to Flask, there wasn\u2019t as much ramp-up time, which is nice. Quart also has support for WebSockets, so there was no need for extra configuration, and it worked perfectly with Deepgram\u2019s live streaming audio.

### Django Live Streaming Audio

Django is a familiar Python web framework for rapid development. It provides a lot of things you need "out of the box" and everything is included with the framework, following a \u201CBatteries included\u201D philosophy.

Django uses [Channels](https://channels.readthedocs.io/en/stable/introduction.html) to handle WebSockets. It allows for real-time communication to happen between a browser and a server. The Django Channels setup was different than the other three Python web frameworks but was easy to follow because of their documentation. It might be good to have a little experience with Django, but if you want to use it with Deepgram, check out the [blog post](https://blog.deepgram.com/live-transcription-django/) we wrote on using Django to handle real-time speech-to-text transcription.

## Final Words

Hopefully, you can see that regardless of your application's Python web framework choice, you can use Deepgram speech-to-text live streaming transcription. As a next step, you can go to the [Deepgram console](https://console.deepgram.com/) and grab an API Key. You'll need this key to do speech-to-text transcription with Deepgram and Python. We also have missions to try in the console to get up and running quickly with real-time or pre-recorded audio-to-text transcription.

Please feel free to Tweet us at [@deepgramdevs](https://twitter.com/DeepgramDevs). We would love to hear from you!`, "html": '<h2 id="python-web-frameworks-for-live-audio-transcription">Python Web Frameworks for Live Audio Transcription</h2>\n<p>This blog post will summarize how to transcribe speech-to-text streaming audio in real-time using Deepgram with four different Python web frameworks. At Deepgram, we have a Python SDK that handles pre-recorded and live streaming speech recognition transcription, which can be used with your framework of choice.</p>\n<h3 id="fastapi-live-streaming-audio">FastAPI Live Streaming Audio</h3>\n<p>FastAPI is a new, innovative Python web framework gaining popularity because of its modern features, such as concurrency and asynchronous code support.</p>\n<p>Working with WebSockets in FastAPI is a breeze because it uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API">WebSocket API</a>, making it easier to establish two-way communication between the browser and server. There\u2019s a section about working with WebSockets in the <a href="https://fastapi.tiangolo.com/advanced/websockets/">FastAPI documentation</a>.</p>\n<p>FastAPI is very easy to use because of its thorough documentation, so even beginners can get started. Remember that supporting community resources, as a newer Python web framework, may not be as robust as other options. It didn\u2019t take long to get FastAPI up and running with Deepgram\u2019s live streaming audio speech-to-text transcription in Python. We wrote a <a href="https://blog.deepgram.com/live-transcription-fastapi/">step-by-step tutorial</a> on using FastAPI with Deepgram for real-time audio transcription in Python.</p>\n<h3 id="flask-20-live-streaming-audio">Flask 2.0 Live Streaming Audio</h3>\n<p>Flask 2.0 is a familiar, lightweight, micro web framework that is very flexible. It doesn\u2019t make decisions for you, meaning you are free to choose which database, templating engine, etc., to use without lacking functionality. Check out the <a href="https://blog.deepgram.com/live-transcription-flask/">tutorial we wrote on using Flask</a> to get up and running with a live-streamed audio speech-to-text transcript in Python.</p>\n<p>Flask does not have WebSocket support built-in, but there is a workaround. You use <a href="https://docs.aiohttp.org/en/v3.8.1/faq.html">aiohttp</a>, an Async HTTP client/server for asyncio and Python. It also supports server and client WebSockets out of the box.</p>\n<p>Once you get aiohttp configured for WebSockets, getting Flask 2.0 working with Deepgram is pretty straightforward. If you\u2019d like to work with a Python framework similar to Flask with WebSocket support built-in, you can use Quart.</p>\n<h3 id="quart-live-streaming-audio">Quart Live Streaming Audio</h3>\n<p>Quart is a Python web microframework that is asynchronous, making it easier to serve WebSockets. Quart is an asyncio reimplementation of Flask. If you\u2019re familiar with Flask, you\u2019ll be able to ramp up on Quart quickly. We have a tutorial on using <a href="https://blog.deepgram.com/live-transcription-quart/">Quart with Deepgram</a> live streaming audio speech-to-text.</p>\n<p>Getting started with Quart was very simple. They have a short tutorial on WebSockets on their website that covers the basics. Since Quart is very similar to Flask, there wasn\u2019t as much ramp-up time, which is nice. Quart also has support for WebSockets, so there was no need for extra configuration, and it worked perfectly with Deepgram\u2019s live streaming audio.</p>\n<h3 id="django-live-streaming-audio">Django Live Streaming Audio</h3>\n<p>Django is a familiar Python web framework for rapid development. It provides a lot of things you need \u201Cout of the box\u201D and everything is included with the framework, following a \u201CBatteries included\u201D philosophy.</p>\n<p>Django uses <a href="https://channels.readthedocs.io/en/stable/introduction.html">Channels</a> to handle WebSockets. It allows for real-time communication to happen between a browser and a server. The Django Channels setup was different than the other three Python web frameworks but was easy to follow because of their documentation. It might be good to have a little experience with Django, but if you want to use it with Deepgram, check out the <a href="https://blog.deepgram.com/live-transcription-django/">blog post</a> we wrote on using Django to handle real-time speech-to-text transcription.</p>\n<h2 id="final-words">Final Words</h2>\n<p>Hopefully, you can see that regardless of your application\u2019s Python web framework choice, you can use Deepgram speech-to-text live streaming transcription. As a next step, you can go to the <a href="https://console.deepgram.com/">Deepgram console</a> and grab an API Key. You\u2019ll need this key to do speech-to-text transcription with Deepgram and Python. We also have missions to try in the console to get up and running quickly with real-time or pre-recorded audio-to-text transcription.</p>\n<p>Please feel free to Tweet us at <a href="https://twitter.com/DeepgramDevs">@deepgramdevs</a>. We would love to hear from you!</p>' };
const frontmatter = { "title": "Starting Out with Python and Deepgram Live Streaming Audio", "description": "Learn how to perform real-time Automatic Speech Recognition using various Python web frameworks and Deepgram's Speech-to-Text API with this roundup post.", "date": "2022-06-23T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1655914351/blog/2022/06/python-deepgram-roundup/Transcribing-Real-Time-Audio-Using-Python-in-5-Minutes%402x.jpg", "authors": ["tonya-sims"], "category": "tutorial", "tags": ["python", "fastapi"], "seo": { "title": "Starting Out with Python and Deepgram Live Streaming Audio", "description": "Learn how to perform real-time Automatic Speech Recognition using various Python web frameworks and Deepgram's Speech-to-Text API with this roundup post." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661454100/blog/python-deepgram-roundup/ograph.png" }, "shorturls": { "share": "https://dpgr.am/bf4bebf", "twitter": "https://dpgr.am/d4a669d", "linkedin": "https://dpgr.am/f0f7a33", "reddit": "https://dpgr.am/039d224", "facebook": "https://dpgr.am/02c041e" }, "astro": { "headings": [{ "depth": 2, "slug": "python-web-frameworks-for-live-audio-transcription", "text": "Python Web Frameworks for Live Audio Transcription" }, { "depth": 3, "slug": "fastapi-live-streaming-audio", "text": "FastAPI Live Streaming Audio" }, { "depth": 3, "slug": "flask-20-live-streaming-audio", "text": "Flask 2.0 Live Streaming Audio" }, { "depth": 3, "slug": "quart-live-streaming-audio", "text": "Quart Live Streaming Audio" }, { "depth": 3, "slug": "django-live-streaming-audio", "text": "Django Live Streaming Audio" }, { "depth": 2, "slug": "final-words", "text": "Final Words" }], "source": `## Python Web Frameworks for Live Audio Transcription

This blog post will summarize how to transcribe speech-to-text streaming audio in real-time using Deepgram with four different Python web frameworks. At Deepgram, we have a Python SDK that handles pre-recorded and live streaming speech recognition transcription, which can be used with your framework of choice.

### FastAPI Live Streaming Audio

FastAPI is a new, innovative Python web framework gaining popularity because of its modern features, such as concurrency and asynchronous code support.

Working with WebSockets in FastAPI is a breeze because it uses the [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API), making it easier to establish two-way communication between the browser and server. There\u2019s a section about working with WebSockets in the [FastAPI documentation](https://fastapi.tiangolo.com/advanced/websockets/).

FastAPI is very easy to use because of its thorough documentation, so even beginners can get started. Remember that supporting community resources, as a newer Python web framework, may not be as robust as other options. It didn\u2019t take long to get FastAPI up and running with Deepgram\u2019s live streaming audio speech-to-text transcription in Python. We wrote a [step-by-step tutorial](https://blog.deepgram.com/live-transcription-fastapi/) on using FastAPI with Deepgram for real-time audio transcription in Python.

### Flask 2.0 Live Streaming Audio

Flask 2.0 is a familiar, lightweight, micro web framework that is very flexible. It doesn't make decisions for you, meaning you are free to choose which database, templating engine, etc., to use without lacking functionality. Check out the [tutorial we wrote on using Flask](https://blog.deepgram.com/live-transcription-flask/) to get up and running with a live-streamed audio speech-to-text transcript in Python.

Flask does not have WebSocket support built-in, but there is a workaround. You use [aiohttp](https://docs.aiohttp.org/en/v3.8.1/faq.html), an Async HTTP client/server for asyncio and Python. It also supports server and client WebSockets out of the box.

Once you get aiohttp configured for WebSockets, getting Flask 2.0 working with Deepgram is pretty straightforward. If you'd like to work with a Python framework similar to Flask with WebSocket support built-in, you can use Quart.

### Quart Live Streaming Audio

Quart is a Python web microframework that is asynchronous, making it easier to serve WebSockets. Quart is an asyncio reimplementation of Flask. If you're familiar with Flask, you'll be able to ramp up on Quart quickly. We have a tutorial on using [Quart with Deepgram](https://blog.deepgram.com/live-transcription-quart/) live streaming audio speech-to-text.

Getting started with Quart was very simple. They have a short tutorial on WebSockets on their website that covers the basics. Since Quart is very similar to Flask, there wasn\u2019t as much ramp-up time, which is nice. Quart also has support for WebSockets, so there was no need for extra configuration, and it worked perfectly with Deepgram\u2019s live streaming audio.

### Django Live Streaming Audio

Django is a familiar Python web framework for rapid development. It provides a lot of things you need "out of the box" and everything is included with the framework, following a \u201CBatteries included\u201D philosophy.

Django uses [Channels](https://channels.readthedocs.io/en/stable/introduction.html) to handle WebSockets. It allows for real-time communication to happen between a browser and a server. The Django Channels setup was different than the other three Python web frameworks but was easy to follow because of their documentation. It might be good to have a little experience with Django, but if you want to use it with Deepgram, check out the [blog post](https://blog.deepgram.com/live-transcription-django/) we wrote on using Django to handle real-time speech-to-text transcription.

## Final Words

Hopefully, you can see that regardless of your application's Python web framework choice, you can use Deepgram speech-to-text live streaming transcription. As a next step, you can go to the [Deepgram console](https://console.deepgram.com/) and grab an API Key. You'll need this key to do speech-to-text transcription with Deepgram and Python. We also have missions to try in the console to get up and running quickly with real-time or pre-recorded audio-to-text transcription.

Please feel free to Tweet us at [@deepgramdevs](https://twitter.com/DeepgramDevs). We would love to hear from you!`, "html": '<h2 id="python-web-frameworks-for-live-audio-transcription">Python Web Frameworks for Live Audio Transcription</h2>\n<p>This blog post will summarize how to transcribe speech-to-text streaming audio in real-time using Deepgram with four different Python web frameworks. At Deepgram, we have a Python SDK that handles pre-recorded and live streaming speech recognition transcription, which can be used with your framework of choice.</p>\n<h3 id="fastapi-live-streaming-audio">FastAPI Live Streaming Audio</h3>\n<p>FastAPI is a new, innovative Python web framework gaining popularity because of its modern features, such as concurrency and asynchronous code support.</p>\n<p>Working with WebSockets in FastAPI is a breeze because it uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API">WebSocket API</a>, making it easier to establish two-way communication between the browser and server. There\u2019s a section about working with WebSockets in the <a href="https://fastapi.tiangolo.com/advanced/websockets/">FastAPI documentation</a>.</p>\n<p>FastAPI is very easy to use because of its thorough documentation, so even beginners can get started. Remember that supporting community resources, as a newer Python web framework, may not be as robust as other options. It didn\u2019t take long to get FastAPI up and running with Deepgram\u2019s live streaming audio speech-to-text transcription in Python. We wrote a <a href="https://blog.deepgram.com/live-transcription-fastapi/">step-by-step tutorial</a> on using FastAPI with Deepgram for real-time audio transcription in Python.</p>\n<h3 id="flask-20-live-streaming-audio">Flask 2.0 Live Streaming Audio</h3>\n<p>Flask 2.0 is a familiar, lightweight, micro web framework that is very flexible. It doesn\u2019t make decisions for you, meaning you are free to choose which database, templating engine, etc., to use without lacking functionality. Check out the <a href="https://blog.deepgram.com/live-transcription-flask/">tutorial we wrote on using Flask</a> to get up and running with a live-streamed audio speech-to-text transcript in Python.</p>\n<p>Flask does not have WebSocket support built-in, but there is a workaround. You use <a href="https://docs.aiohttp.org/en/v3.8.1/faq.html">aiohttp</a>, an Async HTTP client/server for asyncio and Python. It also supports server and client WebSockets out of the box.</p>\n<p>Once you get aiohttp configured for WebSockets, getting Flask 2.0 working with Deepgram is pretty straightforward. If you\u2019d like to work with a Python framework similar to Flask with WebSocket support built-in, you can use Quart.</p>\n<h3 id="quart-live-streaming-audio">Quart Live Streaming Audio</h3>\n<p>Quart is a Python web microframework that is asynchronous, making it easier to serve WebSockets. Quart is an asyncio reimplementation of Flask. If you\u2019re familiar with Flask, you\u2019ll be able to ramp up on Quart quickly. We have a tutorial on using <a href="https://blog.deepgram.com/live-transcription-quart/">Quart with Deepgram</a> live streaming audio speech-to-text.</p>\n<p>Getting started with Quart was very simple. They have a short tutorial on WebSockets on their website that covers the basics. Since Quart is very similar to Flask, there wasn\u2019t as much ramp-up time, which is nice. Quart also has support for WebSockets, so there was no need for extra configuration, and it worked perfectly with Deepgram\u2019s live streaming audio.</p>\n<h3 id="django-live-streaming-audio">Django Live Streaming Audio</h3>\n<p>Django is a familiar Python web framework for rapid development. It provides a lot of things you need \u201Cout of the box\u201D and everything is included with the framework, following a \u201CBatteries included\u201D philosophy.</p>\n<p>Django uses <a href="https://channels.readthedocs.io/en/stable/introduction.html">Channels</a> to handle WebSockets. It allows for real-time communication to happen between a browser and a server. The Django Channels setup was different than the other three Python web frameworks but was easy to follow because of their documentation. It might be good to have a little experience with Django, but if you want to use it with Deepgram, check out the <a href="https://blog.deepgram.com/live-transcription-django/">blog post</a> we wrote on using Django to handle real-time speech-to-text transcription.</p>\n<h2 id="final-words">Final Words</h2>\n<p>Hopefully, you can see that regardless of your application\u2019s Python web framework choice, you can use Deepgram speech-to-text live streaming transcription. As a next step, you can go to the <a href="https://console.deepgram.com/">Deepgram console</a> and grab an API Key. You\u2019ll need this key to do speech-to-text transcription with Deepgram and Python. We also have missions to try in the console to get up and running quickly with real-time or pre-recorded audio-to-text transcription.</p>\n<p>Please feel free to Tweet us at <a href="https://twitter.com/DeepgramDevs">@deepgramdevs</a>. We would love to hear from you!</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/python-deepgram-roundup/index.md" };
function rawContent() {
  return `## Python Web Frameworks for Live Audio Transcription

This blog post will summarize how to transcribe speech-to-text streaming audio in real-time using Deepgram with four different Python web frameworks. At Deepgram, we have a Python SDK that handles pre-recorded and live streaming speech recognition transcription, which can be used with your framework of choice.

### FastAPI Live Streaming Audio

FastAPI is a new, innovative Python web framework gaining popularity because of its modern features, such as concurrency and asynchronous code support.

Working with WebSockets in FastAPI is a breeze because it uses the [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API), making it easier to establish two-way communication between the browser and server. There\u2019s a section about working with WebSockets in the [FastAPI documentation](https://fastapi.tiangolo.com/advanced/websockets/).

FastAPI is very easy to use because of its thorough documentation, so even beginners can get started. Remember that supporting community resources, as a newer Python web framework, may not be as robust as other options. It didn\u2019t take long to get FastAPI up and running with Deepgram\u2019s live streaming audio speech-to-text transcription in Python. We wrote a [step-by-step tutorial](https://blog.deepgram.com/live-transcription-fastapi/) on using FastAPI with Deepgram for real-time audio transcription in Python.

### Flask 2.0 Live Streaming Audio

Flask 2.0 is a familiar, lightweight, micro web framework that is very flexible. It doesn't make decisions for you, meaning you are free to choose which database, templating engine, etc., to use without lacking functionality. Check out the [tutorial we wrote on using Flask](https://blog.deepgram.com/live-transcription-flask/) to get up and running with a live-streamed audio speech-to-text transcript in Python.

Flask does not have WebSocket support built-in, but there is a workaround. You use [aiohttp](https://docs.aiohttp.org/en/v3.8.1/faq.html), an Async HTTP client/server for asyncio and Python. It also supports server and client WebSockets out of the box.

Once you get aiohttp configured for WebSockets, getting Flask 2.0 working with Deepgram is pretty straightforward. If you'd like to work with a Python framework similar to Flask with WebSocket support built-in, you can use Quart.

### Quart Live Streaming Audio

Quart is a Python web microframework that is asynchronous, making it easier to serve WebSockets. Quart is an asyncio reimplementation of Flask. If you're familiar with Flask, you'll be able to ramp up on Quart quickly. We have a tutorial on using [Quart with Deepgram](https://blog.deepgram.com/live-transcription-quart/) live streaming audio speech-to-text.

Getting started with Quart was very simple. They have a short tutorial on WebSockets on their website that covers the basics. Since Quart is very similar to Flask, there wasn\u2019t as much ramp-up time, which is nice. Quart also has support for WebSockets, so there was no need for extra configuration, and it worked perfectly with Deepgram\u2019s live streaming audio.

### Django Live Streaming Audio

Django is a familiar Python web framework for rapid development. It provides a lot of things you need "out of the box" and everything is included with the framework, following a \u201CBatteries included\u201D philosophy.

Django uses [Channels](https://channels.readthedocs.io/en/stable/introduction.html) to handle WebSockets. It allows for real-time communication to happen between a browser and a server. The Django Channels setup was different than the other three Python web frameworks but was easy to follow because of their documentation. It might be good to have a little experience with Django, but if you want to use it with Deepgram, check out the [blog post](https://blog.deepgram.com/live-transcription-django/) we wrote on using Django to handle real-time speech-to-text transcription.

## Final Words

Hopefully, you can see that regardless of your application's Python web framework choice, you can use Deepgram speech-to-text live streaming transcription. As a next step, you can go to the [Deepgram console](https://console.deepgram.com/) and grab an API Key. You'll need this key to do speech-to-text transcription with Deepgram and Python. We also have missions to try in the console to get up and running quickly with real-time or pre-recorded audio-to-text transcription.

Please feel free to Tweet us at [@deepgramdevs](https://twitter.com/DeepgramDevs). We would love to hear from you!`;
}
function compiledContent() {
  return '<h2 id="python-web-frameworks-for-live-audio-transcription">Python Web Frameworks for Live Audio Transcription</h2>\n<p>This blog post will summarize how to transcribe speech-to-text streaming audio in real-time using Deepgram with four different Python web frameworks. At Deepgram, we have a Python SDK that handles pre-recorded and live streaming speech recognition transcription, which can be used with your framework of choice.</p>\n<h3 id="fastapi-live-streaming-audio">FastAPI Live Streaming Audio</h3>\n<p>FastAPI is a new, innovative Python web framework gaining popularity because of its modern features, such as concurrency and asynchronous code support.</p>\n<p>Working with WebSockets in FastAPI is a breeze because it uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API">WebSocket API</a>, making it easier to establish two-way communication between the browser and server. There\u2019s a section about working with WebSockets in the <a href="https://fastapi.tiangolo.com/advanced/websockets/">FastAPI documentation</a>.</p>\n<p>FastAPI is very easy to use because of its thorough documentation, so even beginners can get started. Remember that supporting community resources, as a newer Python web framework, may not be as robust as other options. It didn\u2019t take long to get FastAPI up and running with Deepgram\u2019s live streaming audio speech-to-text transcription in Python. We wrote a <a href="https://blog.deepgram.com/live-transcription-fastapi/">step-by-step tutorial</a> on using FastAPI with Deepgram for real-time audio transcription in Python.</p>\n<h3 id="flask-20-live-streaming-audio">Flask 2.0 Live Streaming Audio</h3>\n<p>Flask 2.0 is a familiar, lightweight, micro web framework that is very flexible. It doesn\u2019t make decisions for you, meaning you are free to choose which database, templating engine, etc., to use without lacking functionality. Check out the <a href="https://blog.deepgram.com/live-transcription-flask/">tutorial we wrote on using Flask</a> to get up and running with a live-streamed audio speech-to-text transcript in Python.</p>\n<p>Flask does not have WebSocket support built-in, but there is a workaround. You use <a href="https://docs.aiohttp.org/en/v3.8.1/faq.html">aiohttp</a>, an Async HTTP client/server for asyncio and Python. It also supports server and client WebSockets out of the box.</p>\n<p>Once you get aiohttp configured for WebSockets, getting Flask 2.0 working with Deepgram is pretty straightforward. If you\u2019d like to work with a Python framework similar to Flask with WebSocket support built-in, you can use Quart.</p>\n<h3 id="quart-live-streaming-audio">Quart Live Streaming Audio</h3>\n<p>Quart is a Python web microframework that is asynchronous, making it easier to serve WebSockets. Quart is an asyncio reimplementation of Flask. If you\u2019re familiar with Flask, you\u2019ll be able to ramp up on Quart quickly. We have a tutorial on using <a href="https://blog.deepgram.com/live-transcription-quart/">Quart with Deepgram</a> live streaming audio speech-to-text.</p>\n<p>Getting started with Quart was very simple. They have a short tutorial on WebSockets on their website that covers the basics. Since Quart is very similar to Flask, there wasn\u2019t as much ramp-up time, which is nice. Quart also has support for WebSockets, so there was no need for extra configuration, and it worked perfectly with Deepgram\u2019s live streaming audio.</p>\n<h3 id="django-live-streaming-audio">Django Live Streaming Audio</h3>\n<p>Django is a familiar Python web framework for rapid development. It provides a lot of things you need \u201Cout of the box\u201D and everything is included with the framework, following a \u201CBatteries included\u201D philosophy.</p>\n<p>Django uses <a href="https://channels.readthedocs.io/en/stable/introduction.html">Channels</a> to handle WebSockets. It allows for real-time communication to happen between a browser and a server. The Django Channels setup was different than the other three Python web frameworks but was easy to follow because of their documentation. It might be good to have a little experience with Django, but if you want to use it with Deepgram, check out the <a href="https://blog.deepgram.com/live-transcription-django/">blog post</a> we wrote on using Django to handle real-time speech-to-text transcription.</p>\n<h2 id="final-words">Final Words</h2>\n<p>Hopefully, you can see that regardless of your application\u2019s Python web framework choice, you can use Deepgram speech-to-text live streaming transcription. As a next step, you can go to the <a href="https://console.deepgram.com/">Deepgram console</a> and grab an API Key. You\u2019ll need this key to do speech-to-text transcription with Deepgram and Python. We also have missions to try in the console to get up and running quickly with real-time or pre-recorded audio-to-text transcription.</p>\n<p>Please feel free to Tweet us at <a href="https://twitter.com/DeepgramDevs">@deepgramdevs</a>. We would love to hear from you!</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/python-deepgram-roundup/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><h2 id="python-web-frameworks-for-live-audio-transcription">Python Web Frameworks for Live Audio Transcription</h2>
<p>This blog post will summarize how to transcribe speech-to-text streaming audio in real-time using Deepgram with four different Python web frameworks. At Deepgram, we have a Python SDK that handles pre-recorded and live streaming speech recognition transcription, which can be used with your framework of choice.</p>
<h3 id="fastapi-live-streaming-audio">FastAPI Live Streaming Audio</h3>
<p>FastAPI is a new, innovative Python web framework gaining popularity because of its modern features, such as concurrency and asynchronous code support.</p>
<p>Working with WebSockets in FastAPI is a breeze because it uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API">WebSocket API</a>, making it easier to establish two-way communication between the browser and server. There’s a section about working with WebSockets in the <a href="https://fastapi.tiangolo.com/advanced/websockets/">FastAPI documentation</a>.</p>
<p>FastAPI is very easy to use because of its thorough documentation, so even beginners can get started. Remember that supporting community resources, as a newer Python web framework, may not be as robust as other options. It didn’t take long to get FastAPI up and running with Deepgram’s live streaming audio speech-to-text transcription in Python. We wrote a <a href="https://blog.deepgram.com/live-transcription-fastapi/">step-by-step tutorial</a> on using FastAPI with Deepgram for real-time audio transcription in Python.</p>
<h3 id="flask-20-live-streaming-audio">Flask 2.0 Live Streaming Audio</h3>
<p>Flask 2.0 is a familiar, lightweight, micro web framework that is very flexible. It doesn’t make decisions for you, meaning you are free to choose which database, templating engine, etc., to use without lacking functionality. Check out the <a href="https://blog.deepgram.com/live-transcription-flask/">tutorial we wrote on using Flask</a> to get up and running with a live-streamed audio speech-to-text transcript in Python.</p>
<p>Flask does not have WebSocket support built-in, but there is a workaround. You use <a href="https://docs.aiohttp.org/en/v3.8.1/faq.html">aiohttp</a>, an Async HTTP client/server for asyncio and Python. It also supports server and client WebSockets out of the box.</p>
<p>Once you get aiohttp configured for WebSockets, getting Flask 2.0 working with Deepgram is pretty straightforward. If you’d like to work with a Python framework similar to Flask with WebSocket support built-in, you can use Quart.</p>
<h3 id="quart-live-streaming-audio">Quart Live Streaming Audio</h3>
<p>Quart is a Python web microframework that is asynchronous, making it easier to serve WebSockets. Quart is an asyncio reimplementation of Flask. If you’re familiar with Flask, you’ll be able to ramp up on Quart quickly. We have a tutorial on using <a href="https://blog.deepgram.com/live-transcription-quart/">Quart with Deepgram</a> live streaming audio speech-to-text.</p>
<p>Getting started with Quart was very simple. They have a short tutorial on WebSockets on their website that covers the basics. Since Quart is very similar to Flask, there wasn’t as much ramp-up time, which is nice. Quart also has support for WebSockets, so there was no need for extra configuration, and it worked perfectly with Deepgram’s live streaming audio.</p>
<h3 id="django-live-streaming-audio">Django Live Streaming Audio</h3>
<p>Django is a familiar Python web framework for rapid development. It provides a lot of things you need “out of the box” and everything is included with the framework, following a “Batteries included” philosophy.</p>
<p>Django uses <a href="https://channels.readthedocs.io/en/stable/introduction.html">Channels</a> to handle WebSockets. It allows for real-time communication to happen between a browser and a server. The Django Channels setup was different than the other three Python web frameworks but was easy to follow because of their documentation. It might be good to have a little experience with Django, but if you want to use it with Deepgram, check out the <a href="https://blog.deepgram.com/live-transcription-django/">blog post</a> we wrote on using Django to handle real-time speech-to-text transcription.</p>
<h2 id="final-words">Final Words</h2>
<p>Hopefully, you can see that regardless of your application’s Python web framework choice, you can use Deepgram speech-to-text live streaming transcription. As a next step, you can go to the <a href="https://console.deepgram.com/">Deepgram console</a> and grab an API Key. You’ll need this key to do speech-to-text transcription with Deepgram and Python. We also have missions to try in the console to get up and running quickly with real-time or pre-recorded audio-to-text transcription.</p>
<p>Please feel free to Tweet us at <a href="https://twitter.com/DeepgramDevs">@deepgramdevs</a>. We would love to hear from you!</p>`;
});

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
