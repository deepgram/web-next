---
title: "Live Transcription With Python and Flask"
description: "Learn how to do a live, real-time transcription with Flask in Python and Deepgram"
date: 2022-03-02
cover: https://res.cloudinary.com/deepgram/image/upload/v1646232657/blog/2022/03/live-transcription-flask/Live-Transcription-With-Python-Flask-Deepgram%402x.jpg
authors:
    - tonya-sims
category: tutorial
tags:
    - python
    - flask
seo:
    title: "Live Transcription With Python and Flask"
    description: "Learn how to do a live, real-time transcription with Flask in Python and Deepgram"
shorturls:
    share: https://dpgr.am/bbacddc
    twitter: https://dpgr.am/d7ec666
    linkedin: https://dpgr.am/05c42ed
    reddit: https://dpgr.am/0bf905b
    facebook: https://dpgr.am/4ee5d48
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454036/blog/live-transcription-flask/ograph.png
---

Have you ever wondered how to do live voice-to-text transcription with Python? We'll use Flask 2.0 and Deepgram to achieve our goal in this article.

Flask 2.0 is a familiar, lightweight, micro web framework that is very flexible. It doesn't make decisions for us, meaning we are free to choose which database, templating engine, etc., to use without lacking functionality. Deepgram uses AI speech recognition to do real-time audio transcription, and we'll be using our Python SDK.

The final code for this project is located [here in Github](https://github.com/deepgram-devs/live-transcription-flask), if you want to jump ahead.

## Getting Started

Before we start, it's essential to generate a Deepgram API key to use in our project. We can [go here](https://console.deepgram.com/signup?jump=keys). For this tutorial, we'll be using Python 3.10, but Deepgram supports some earlier versions of Python as well. Since we're using `async` in Flask, you'll need to have Python 3.7 or higher. We'll also need to set up a virtual environment to hold our project. We can read more about those [here](https://blog.deepgram.com/python-virtual-environments/) and how to create one.

## Install Dependencies

Create a folder directory to store all of our project files, and inside of it, create a virtual environment. Ensure our virtual environment is activated, as described in the article in the previous section. Make sure that all of the dependencies get installed inside that environment.

For a quick reference, here are the commands we need to create and activate our virtual environment:

    mkdir [% NAME_OF_YOUR_DIRECTORY %]
    cd [% NAME_OF_YOUR_DIRECTORY %]
    python3 -m venv venv
    source venv/bin/activate

We need to install the following dependencies from our terminal:

*   The latest version of Flask
*   The Deepgram Python SDK
*   The dotenv library, which helps us work with our environment variables
*   The aiohttp-wsgi, which allows us to work with WebSockets in our WSGI application

<!---->

    pip install Flask
    pip install deepgram-sdk
    pip install python-dotenv
    pip install aiohttp-wsgi

## Create a Flask Application

Let's get a starter Flask application up and running that renders an HTML page so that we can progress on our live transcription project.

Create a file called `main.py` inside our project and a templates folder with an HTML file called `index.html`.

![flask project structure](https://res.cloudinary.com/deepgram/image/upload/v1646232661/blog/2022/03/live-transcription-flask/flask-project-structure.png)

The `main.py` file will hold our Python code.

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
   return render_template('index.html')
```

Lastly, we'll store our HTML file inside the templates folder and hold our HTML markup here.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Live Transcription</title>
  </head>
  <body>
    <h1>Transcribe Audio With Flask 2.0</h1>
    <p id="status">Connection status will go here</p>
    <p id="transcript"></p>
  </body>
</html>
```

We have to export it into an environment variable to run the application. In our terminal, type the following:

    export FLASK_APP=main

If we start our development server from the terminal to run the project using `flask run`, the `index.html` page renders in the browser.

![render the index HTML page](https://res.cloudinary.com/deepgram/image/upload/v1647977919/blog/2022/03/live-transcription-flask/flask-index-html.png)

## Add Deepgram API Key

Our API Key will allow access to use Deepgram. Let's create a `.env` file that will store our key. When we push our code to Github, hide our key, make sure to add this to our `.gitignore` file.

![hide api key with .env file](https://res.cloudinary.com/deepgram/image/upload/v1646232661/blog/2022/03/live-transcription-flask/flask-env-file.png)

In our file, add the following environment variable with our Deepgram API key, which we can [grab here](https://console.deepgram.com/signup?jump=keys):

    DEEPGRAM_API_KEY="abcde12345"

The below code shows how to load our key into the project and access it in `main.py`:

```python
from deepgram import Deepgram
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

dg_client = Deepgram(os.getenv('DEEPGRAM_API_KEY'))
```

## Get Mic Data From Browser

Our next step is to get the microphone data from the browser, which will require a little JavaScript.

Use this code inside the `<script></script>` tag in `index.html` to access data from the user's microphone.

```js
<script>
  navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    const mediaRecorder = new MediaRecorder(stream)
  })
</script>
```

If you want to learn more about working with the mic in the browser, please check out [this post](https://blog.deepgram.com/live-transcription-mic-browser/).

## Websocket Connection Between Server and Browser

We'll need to work with WebSockets in our project. We can think of WebSockets as a connection between a server and a client that stays open and allows sending continuous messages back and forth.

The first WebSocket connection is between our Python server that holds our Flask application and our browser client. In this project, we'll use [aiohttp](https://docs.aiohttp.org/en/v3.8.1/faq.html) to handle the WebSocket server.

We need to create a WebSocket endpoint that listens to our Flask web server code for client connections. In the `main.py` file, add the following code:

```python
import asyncio
from aiohttp import web
from aiohttp_wsgi import WSGIHandler

app = Flask('aioflask')

async def socket(request): #new
   ws = web.WebSocketResponse()
   await ws.prepare(request)

   deepgram_socket = await process_audio(ws)

   while True:
       data = await ws.receive_bytes()
       deepgram_socket.send(data)
```

This code accepts a WebSocket connection between the server and the client. As long as the connection stays open, we will receive bytes and wait until we get a message from the client. We're defining a variable called `deepgram_socket`, which calls a function `process_audio` and opens the connection to Deepgram. In this user-defined method, we'll also connect to Deepgram. While the server and browser connection stays open, we'll wait for messages and send data.

In `index.html`, this code listens for a client connection then connects to the client like so:

```js
<script>... const socket = new WebSocket('ws://localhost:5555/listen')</script>
```

## Websocket Connection Between Server and Deepgram

We need to establish a connection between our central Flask server and Deepgram to get the audio and do our real-time transcription. Add this code to our `main.py` file.

```python
if __name__ == "__main__": # new
   loop = asyncio.get_event_loop()
   aio_app = web.Application()
   wsgi = WSGIHandler(app)
   aio_app.router.add_route('*', '/{path_info: *}', wsgi.handle_request)
   aio_app.router.add_route('GET', '/listen', socket)
   web.run_app(aio_app, port=5555)
```

This code adds a route to the endpoint `listen` to the `socket` function. The equivalent of this is `app.route` in Flask.

Next, let's create our functions to process the audio, get the transcript from that audio and connect to Deepgram. In our `main.py`, add this code.

```python
from typing import Dict, Callable

async def process_audio(fast_socket: web.WebSocketResponse):
   async def get_transcript(data: Dict) -> None:
       if 'channel' in data:
           transcript = data['channel']['alternatives'][0]['transcript']

           if transcript:
               await fast_socket.send_str(transcript)

   deepgram_socket = await connect_to_deepgram(get_transcript)

   return deepgram_socket

async def connect_to_deepgram(transcript_received_handler: Callable[[Dict], None]) -> str:
   try:
       socket = await dg_client.transcription.live({'punctuate': True, 'interim_results': False})
       socket.registerHandler(socket.event.CLOSE, lambda c: print(f'Connection closed with code {c}.'))
       socket.registerHandler(socket.event.TRANSCRIPT_RECEIVED, transcript_received_handler)

       return socket
   except Exception as e:
       raise Exception(f'Could not open socket: {e}')
```

The `process_audio` function takes `fast_socket` as an argument, which will keep the connection open between the client and the Flask server. We also connect to Deepgram and pass in the `get_transcript` function. This function gets the transcript and sends it back to the client.

The `connect_to_deepgram` function creates a socket connection to deepgram, listens for the connection to close, and gets incoming transcription objects.

Lastly, in our `index.html`, we need to receive and obtain data with the below events. Notice they are getting logged to our console. If you want to know more about what these events do, check out [this blog post](https://blog.deepgram.com/live-transcription-mic-browser/).

```js
<script>
  socket.onopen = () => {
    document.querySelector('#status').textContent = 'Connected'
    console.log({
        event: 'onopen'
    })
    mediaRecorder.addEventListener('dataavailable', async (event) => {
        if (event.data.size > 0 && socket.readyState == 1) {
            socket.send(event.data)
        }
    })
    mediaRecorder.start(250)
}

  socket.onmessage = (message) => {
      const received = message.data
      if (received) {
          console.log(received)
          document.querySelector('#transcript').textContent += ' ' + received
      }
  }

  socket.onclose = () => {
      console.log({
          event: 'onclose'
      })
  }

  socket.onerror = (error) => {
      console.log({
          event: 'onerror',
          error
      })
  }
</script>
```

Let's start our application and start getting real-time transcriptions. From our terminal, run `python main.py` and pull up our localhost on port 5555, `http://127.0.0.1:5555/`. If we haven't already, allow access to our microphone. Start speaking, and we should see a transcript like the one below:

![final result in Flask live streaming example](https://res.cloudinary.com/deepgram/image/upload/v1646232661/blog/2022/03/live-transcription-flask/flask-final-screenshot.png)

Congratulations on building a real-time transcription project with Flask and Deepgram. You can find the [code here](https://github.com/deepgram-devs/live-transcription-flask) with instructions on how to run the project. If you have any questions, please feel free to reach out to us on Twitter at [@DeepgramDevs](https://twitter.com/DeepgramDevs).

        