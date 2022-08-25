---
title: Live Transcription With Python and Quart
description: Learn how to do a live, real-time voice-to-text transcription with Quart's Python web microframework and Deepgram's Python SDK.
date: 2022-03-08
cover: https://res.cloudinary.com/deepgram/image/upload/v1646675713/blog/2022/03/live-transcription-quart/Live-Transcription-With-Python-Quart-Deepgram%402x.jpg
authors:
    - tonya-sims
category: tutorial
tags:
    - python,
    - quart,
    - speech recognition,
    - streaming
seo:
    title: Live Transcription With Python and Quart
    description: Learn how to do a live, real-time voice-to-text transcription with Quart's Python web microframework and Deepgram's Python SDK.
shorturls:
    share: https://dpgr.am/bdcec1
    twitter: https://dpgr.am/c6f7b4
    linkedin: https://dpgr.am/536fb4
    reddit: https://dpgr.am/58247b
    facebook: https://dpgr.am/680816
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454038/blog/live-transcription-quart/ograph.png
---

Have you ever wondered how to do live speech-to-text transcription with Python? We’ll use Quart and Deepgram to achieve our goal in this article.

Quart is a Python web microframework that is asynchronous, making it easier to serve WebSockets, which we’ll use in this tutorial. Quart is an asyncio reimplementation of Flask. If we’re familiar with Flask, we’ll be able to ramp up on Quart quickly. Deepgram uses AI speech recognition to do real-time audio transcription, and we’ll be using our Python SDK.

If you want to jump ahead, the final code for this project is located [here in Github](https://github.com/deepgram-devs/live-transcription-quart).

## Getting Started

Before we start, it’s essential to generate a Deepgram API key to use in our project. We can [go here](https://console.deepgram.com/signup?jump=keys). For this tutorial, we’ll be using Python 3.10, but Deepgram supports some earlier versions of Python as well. We’ll also need to set up a virtual environment to hold our project. We can read more about those [here](https://developers.deepgram.com/blog/2022/02/python-virtual-environments/) and how to create one.

## Install Dependencies

Create a folder directory to store all of our project files, and inside of it, create a virtual environment. Ensure our virtual environment is activated, as described in the article in the previous section. Make sure that all of the dependencies get installed inside that environment.

For a quick reference, here are the commands we need to create and activate our virtual environment:

    mkdir [% NAME_OF_YOUR_DIRECTORY %]
    cd [% NAME_OF_YOUR_DIRECTORY %]
    python3 -m venv venv
    source venv/bin/activate

We need to install the following dependencies from our terminal:

*   The latest version of Quart
*   The Deepgram Python SDK
*   The dotenv library, which helps us work with our environment variables

<!---->

    pip install quart
    pip install deepgram-sdk
    pip install python-dotenv

## Create a Quart Application

Let’s get a starter Quart application up and running that renders an HTML page so that we can progress on our live speech-to-text transcription project.

Create a file called `main.py` inside of our project and a templates folder with an HTML file inside called `index.html`

![quart project structure](https://res.cloudinary.com/deepgram/image/upload/v1646675715/blog/2022/03/live-transcription-quart/quart-project-structure.png)

The `main.py` file will hold our Python code.

```python
from quart import Quart, render_template

app = Quart(__name__)

@app.route('/')
async def index():
   return await render_template('index.html')

if __name__ == "__main__":
   app.run('localhost', port=3000, debug=True)
```

Lastly, we’ll store our HTML file inside the templates folder and hold our HTML markup here.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Live Transcription</title>
  </head>
  <body>
    <h1>Transcribe Audio With Quart</h1>
    <p id="status">Connection status will go here</p>
    <p id="transcript"></p>
  </body>
</html>
```

We have to export it into an environment variable to run the application. In our terminal, type the following:

    export QUART_APP=main:app

If we start our development server from the terminal to run the project using `python main.py`, and pull up the browser at http://127.0.0.1:3000/, the `index.html` page will render:

![render the Quart index HTML page](https://res.cloudinary.com/deepgram/image/upload/v1646675714/blog/2022/03/live-transcription-quart/quart-index-html.png)

## Add Deepgram API Key

Our API Key will allow access to use Deepgram to do our real-time audio transcription using AI speech recognition. Let’s create a `.env` file that will store our key. Make sure to add this file to our `.gitignore` file when we push our code to Github, hiding our key.

![hide api key with .env file](https://res.cloudinary.com/deepgram/image/upload/v1646675715/blog/2022/03/live-transcription-quart/env-file.png)

In our file, add the following environment variable with our Deepgram API key, which we can [grab here](https://console.deepgram.com/signup?jump=keys):

    DEEPGRAM_API_KEY="abcde12345"

The below code shows how to load our key into the project and access it in `main.py`:

```python
from deepgram import Deepgram
from dotenv import load_dotenv
import os

load_dotenv()

app = Quart(__name__)

dg_client = Deepgram(os.getenv('DEEPGRAM_API_KEY'))
```

## Get Mic Data From Browser

Our next step is to get the microphone data from the browser, which will require a little JavaScript.

Use this code inside the `<script></script>` tag in `index.html` to access the user’s microphone data.

```js
<script>
 navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
   const mediaRecorder = new MediaRecorder(stream)
 })
</script>
```

If you want to learn more about working with the mic in the browser, please check out [this post](https://developers.deepgram.com/blog/2021/11/live-transcription-mic-browser/).

## Websocket Connection Between Server and Browser

We’ll need to work with WebSockets in our project. We can think of WebSockets as a connection between a server and a client that stays open and allows sending continuous messages back and forth.

The first WebSocket connection is between our Python server that holds our Quart application and our browser client.

We need to create a WebSocket endpoint that listens for client connections in our Quart web server code. In the `main.py` file, add the following code:

```python
from quart import Quart, render_template, websocket

@app.websocket('/listen')
async def websocket_endpoint():
  await websocket.accept()
  try:
      while True:
          data = await websocket.receive()
  except Exception as e:
      raise Exception(f'Could not process audio: {e}')
  finally:
      await websocket.close(1000)
```

This code accepts a WebSocket connection between the server and the client. As long as the connection stays open, we will receive bytes and wait until we get a message from the client. If that doesn’t work, then we’ll throw an exception. Once the server and client finish sending messages to one another, we’ll close the connection.

The code in `index.html` listens for a client connection. If there is one, it connects to the client like so:

```js
<script>... const socket = new WebSocket('ws://localhost:3000/listen')</script>
```

## Websocket Connection Between Server and Deepgram

We need to establish a connection between our central Quart server and Deepgram to get the audio and do our real-time speech transcription. Add this code to our `main.py` file.

```python
@app.websocket('/listen')
async def websocket_endpoint():

   try:
       deepgram_socket = await process_audio(websocket)

       while True:
           data = await websocket.receive()
           deepgram_socket.send(data)
   except Exception as e:
       raise Exception(f'Could not process audio: {e}')
   finally:
       websocket.close(1000)
```

We’re defining a variable called `deepgram_socket`, which calls a function `process_audio` and opens the connection to Deepgram. In this user-defined method, we’ll also connect to Deepgram. While the server and browser connection stays open, we’ll wait for messages and send data.

Next, let’s create our functions to process the audio, get the real-time audio transcription and connect to Deepgram. In our `main.py`, add this code.

```python
from typing import Dict, Callable

async def process_audio(fast_socket):
   async def get_transcript(data: Dict) -> None:
       if 'channel' in data:
           transcript = data['channel']['alternatives'][0]['transcript']

           if transcript:
               await fast_socket.send(transcript)

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

The `process_audio` function takes `fast_socket` as an argument, which will keep the connection open between the client and the Quart server. We also connect to Deepgram and pass in the `get_transcript` function. This function gets the transcript and sends it back to the client.

The `connect_to_deepgram` function creates a socket connection to deepgram, listens for the connection to close, and gets incoming transcription objects.

Lastly, in our `index.html`, we need to receive and obtain data with the below events. Notice they are getting logged to our console. If you want to know more about what these events do, check out [this blog post](https://developers.deepgram.com/blog/2021/11/live-transcription-mic-browser/).

```js
<script>
    socket.onopen = () => {
        document.querySelector('#status').textContent = 'Connected'
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
            document.querySelector('#transcript').textContent += ' ' + message.data
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

Let’s start our application and start getting real-time audio transcriptions. From our terminal, run `python main.py` and pull up our localhost on port 3000, `http://127.0.0.1:3000/`. If we haven’t already, allow access to our microphone. Start speaking, and we should see a transcript like the one below:

![final result in Quart live streaming example](https://res.cloudinary.com/deepgram/image/upload/v1646675714/blog/2022/03/live-transcription-quart/quart-final-screenshot.png)

Congratulations on building a live voice-to-text transcription project with Quart and Deepgram. You can find the [code here](https://github.com/deepgram-devs/live-transcription-quart) with instructions on how to run the project. If you have any questions, please feel free to reach out to us on Twitter at [@DeepgramDevs](https://twitter.com/DeepgramDevs).

