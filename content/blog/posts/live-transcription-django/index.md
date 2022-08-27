---
title: "Live Transcription With Python and Django"
description: "Learn how to do a live, real-time transcription with Django in Python and Deepgram"
date: 2022-03-03
cover: https://res.cloudinary.com/deepgram/image/upload/v1646295674/blog/2022/03/live-transcription-django/Live-Transcription-With-Python-Django-Deepgram%402x.jpg
authors:
    - tonya-sims
category: tutorial
tags:
    - python
    - django
seo:
    title: "Live Transcription With Python and Django"
    description: "Learn how to do a live, real-time transcription with Django in Python and Deepgram"
shorturls:
    share: https://dpgr.am/abcb022
    twitter: https://dpgr.am/ba1aaba
    linkedin: https://dpgr.am/b5ab554
    reddit: https://dpgr.am/654438d
    facebook: https://dpgr.am/3d4f4bd
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454032/blog/live-transcription-django/ograph.png
---

Have you ever wondered how to do live voice-to-text transcription with Python? We'll use Django and Deepgram to achieve our goal in this article.

Django is a familiar Python web framework for rapid development. It provides a lot of things we need "out of the box" and everything is included with the framework, following a “Batteries included” philosophy. Deepgram uses AI speech recognition to do real-time audio transcription, and we’ll be using our Python SDK.

The final code for this project is [here in Github](https://github.com/deepgram-devs/live-transcription-django) if you want to jump ahead.

## Getting Started

Before we start, it’s essential to generate a Deepgram API key to use in our project. We can [go here](https://console.deepgram.com/signup?jump=keys). For this tutorial, we'll be using Python 3.10, but Deepgram supports some earlier versions of Python as well. We're also going to use Django version 4.0 and [Django Channels](https://channels.readthedocs.io/en/stable/introduction.html) to handle the WebSockets. We'll need to set up a virtual environment to hold our project. We can read more about those [here](https://developers.deepgram.com/blog/2022/02/python-virtual-environments/) and how to create one.

## Install Dependencies

Create a folder directory to store all of our project files, and inside of it, create a virtual environment. Ensure our virtual environment is activated, as described in the article in the previous section. Make sure that all of the dependencies get installed inside that environment.

For a quick reference, here are the commands we need to create and activate our virtual environment:

    mkdir [% NAME_OF_YOUR_DIRECTORY %]
    cd [% NAME_OF_YOUR_DIRECTORY %]
    python3 -m venv venv
    source venv/bin/activate

We need to install the following dependencies from our terminal:

*   The latest version of Django
*   The Deepgram Python SDK
*   The dotenv library, which helps us work with our environment variables
*   The latest version of Django Channels

<!---->

    pip install Django
    pip install deepgram-sdk
    pip install python-dotenv
    pip install channels

## Create a Django Project

Let's get a Django project created by running this command from our terminal, `django-admin startproject stream`.

Our project directory will now look like this:

![django project structure](https://res.cloudinary.com/deepgram/image/upload/v1646295675/blog/2022/03/live-transcription-django/django-project.png)

## Create a Django App

We need to hold our code for the server part of our application inside an app called `transcript`. Let’s ensure we’re inside our project with `manage.py`. We need to change directories into our stream project by doing the following:

    cd stream
    python3 manage.py startapp transcript

We’ll see our new app `transcript` at the same directory level as our project.

![django app](https://res.cloudinary.com/deepgram/image/upload/v1646295675/blog/2022/03/live-transcription-django/django-app.png)

We also need to tell our project that we’re using this new `transcript` app. To do so, go to our `stream` folder inside our `settings.py` file and add our app to `INSTALLED_APPS`.

![django settings](https://res.cloudinary.com/deepgram/image/upload/v1646295675/blog/2022/03/live-transcription-django/settings-installed-apps.png)

## Create Index View

Let’s get a starter Django application up and running that renders an HTML page so that we can progress on our live transcription project.

Create a folder called `templates` inside our `transcript` app. Inside the templates folder, create an `index.html` file inside another directory called `transcript`.

![django templates folder](https://res.cloudinary.com/deepgram/image/upload/v1646295675/blog/2022/03/live-transcription-django/templates-folder.png)

Inside our `transcript/templates/transcript/index.html` add the following HTML markup:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Live Transcription</title>
  </head>
  <body>
    <h1>Transcribe Audio With Django</h1>
    <p id="status">Connection status will go here</p>
    <p id="transcript"></p>
  </body>
</html>
```

Then add the following code to our `views.py` and `transcript` app.

```python
from django.shortcuts import render

def index(request):
   return render(request, 'transcript/index.html')
```

We need to create a `urls.py` inside our `transcript` app to call our view.

![django urls](https://res.cloudinary.com/deepgram/image/upload/v1646295675/blog/2022/03/live-transcription-django/urls-app.png)

Let’s add the following code to our new `urls.py` file:

```python
from django.urls import path

from . import views

urlpatterns = [
   path('', views.index, name='index'),
]
```

We have to point this file at the `transcript.urls` module to `stream/urls.py`. In the `stream/urls.py` add the code:

```python
from django.conf.urls import include
from django.contrib import admin
from django.urls import path

urlpatterns = [
   path('', include('transcript.urls')),
   path('admin/', admin.site.urls),
]
```

If we start our development server from the terminal to run the project using `python3 manage.py runserver`, the `index.html` page renders in the browser when we navigate to our localhost at `http://127.0.0.1:8000`.

![render the index HTML page](https://res.cloudinary.com/deepgram/image/upload/v1646295675/blog/2022/03/live-transcription-django/django-index.png)

## Integrate Django Channels

We need to add code to our `stream/asgi.py` file.

![django asgi file](https://res.cloudinary.com/deepgram/image/upload/v1646295675/blog/2022/03/live-transcription-django/asgi.png)

```python
import os

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import transcript.routing

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "stream.settings")

application = ProtocolTypeRouter({
 "http": get_asgi_application(),
 "websocket": AuthMiddlewareStack(
       URLRouter(
           transcript.routing.websocket_urlpatterns
       )
   ),
})
```

Now we have to add the Channels library to our `INSTALLED_APPS` in the `settings.py` file at `stream/settings.py`

![django settings add channels](https://res.cloudinary.com/deepgram/image/upload/v1646295675/blog/2022/03/live-transcription-django/settings-channels.png)

We also need to add the following line to our `stream/settings.py` at the bottom of the file:

`ASGI_APPLICATION = 'stream.asgi.application'`

To ensure everything is working correctly with Channels, run the development server `python3 manage.py runserver`. We should see the output in our terminal like the following:

![django channels output in terminal](https://res.cloudinary.com/deepgram/image/upload/v1646295675/blog/2022/03/live-transcription-django/channels-output.png)

## Add Deepgram API Key

Our API Key will allow access to use Deepgram. Let’s create a `.env` file that will store our key. When we push our code to Github, hide our key, make sure to add this to our `.gitignore` file.

![hide api key with .env file](https://res.cloudinary.com/deepgram/image/upload/v1646295675/blog/2022/03/live-transcription-django/django-env-file.png)

In our file, add the following environment variable with our Deepgram API key, which we can [grab here](https://console.deepgram.com/signup?jump=keys):

    DEEPGRAM_API_KEY="abcde12345"

Next, create a `consumers.py` file inside our `transcript` app, acting as our server.

![django consumers file to hold server](https://res.cloudinary.com/deepgram/image/upload/v1646295675/blog/2022/03/live-transcription-django/consumers-file.png)

Let’s add this code to our `consumers.py`. This code loads our key into the project and accesses it in our application:

```python
from channels.generic.websocket import AsyncWebsocketConsumer
from dotenv import load_dotenv
from deepgram import Deepgram

import os

load_dotenv()

class TranscriptConsumer(AsyncWebsocketConsumer):
   dg_client = Deepgram(os.getenv('DEEPGRAM_API_KEY'))
```

We also have to add a `routing.py` file inside our `transcript` app. This file will direct channels to run the correct code when we make an HTTP request intercepted by the Channels server.

![django routing file in channels](https://res.cloudinary.com/deepgram/image/upload/v1646295675/blog/2022/03/live-transcription-django/routing-file.png)

```python
from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
   re_path(r'listen', consumers.TranscriptConsumer.as_asgi()),
]
```

## Get Mic Data From Browser

Our next step is to get the microphone data from the browser, which will require a little JavaScript.

Use this code inside the `<script></script>` tag in `index.html` to access data from the user’s microphone.

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

The first WebSocket connection is between our Python server that holds our Django application and our browser client. In this project, we’ll use [Django Channels](https://channels.readthedocs.io/en/stable/introduction.html) to handle the WebSocket server.

We need to create a WebSocket endpoint that listens to our Django web server code for client connections. In the `consumers.py` file from the previous section `re_path(r'listen', consumers.TranscriptConsumer.as_asgi())` accomplishes this connection.

```python
class TranscriptConsumer(AsyncWebsocketConsumer):
   dg_client = Deepgram(os.getenv('DEEPGRAM_API_KEY'))

    async def connect(self):
       await self.connect_to_deepgram()
       await self.accept()

      async def receive(self, bytes_data):
       self.socket.send(bytes_data)
```

The above code accepts a WebSocket connection between the server and the client. As long as the connection stays open, we will receive bytes and wait until we get a message from the client. While the server and browser connection remains open, we’ll wait for messages and send data.

In `index.html`, this code listens for a client connection then connects to the client like so:

```js
<script>... const socket = new WebSocket('ws://localhost:8000/listen')</script>
```

## Websocket Connection Between Server and Deepgram

We need to establish a connection between our central Django server and Deepgram to get the audio and real-time transcription. Add this code to our `consumers.py` file.

```python
from typing import Dict

class TranscriptConsumer(AsyncWebsocketConsumer):
   dg_client = Deepgram(os.getenv('DEEPGRAM_API_KEY'))

   async def get_transcript(self, data: Dict) -> None:
       if 'channel' in data:
           transcript = data['channel']['alternatives'][0]['transcript']

           if transcript:
               await self.send(transcript)


   async def connect_to_deepgram(self):
       try:
           self.socket = await self.dg_client.transcription.live({'punctuate': True, 'interim_results': False})
           self.socket.registerHandler(self.socket.event.CLOSE, lambda c: print(f'Connection closed with code {c}.'))
           self.socket.registerHandler(self.socket.event.TRANSCRIPT_RECEIVED, self.get_transcript)

       except Exception as e:
           raise Exception(f'Could not open socket: {e}')

   async def connect(self):
       await self.connect_to_deepgram()
       await self.accept()


   async def disconnect(self, close_code):
       await self.channel_layer.group_discard(
           self.room_group_name,
           self.channel_name
       )

   async def receive(self, bytes_data):
       self.socket.send(bytes_data)
```

The `connect_to_deepgram` function connects us to Deepgram and creates a socket connection to deepgram, listens for the connection to close, and gets incoming transcription objects. The `get_transcript` method gets the transcript from Deepgram and sends it back to the client.

Lastly, in our `index.html`, we need to receive and obtain data with the below events. Notice they are getting logged to our console. If you want to know more about what these events do, check out [this blog post](https://developers.deepgram.com/blog/2021/11/live-transcription-mic-browser/).

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

Let’s start our application and start getting real-time transcriptions. From our terminal, run `python3 manage.py runserver` and pull up our localhost on port 8000, `http://127.0.0.1:8000/`. If we haven’t already, allow access to our microphone. Start speaking, and we should see a transcript like the one below:

![final result in Django live streaming example](https://res.cloudinary.com/deepgram/image/upload/v1646295675/blog/2022/03/live-transcription-django/django-final-screenshot.png)

Congratulations on building a real-time transcription project with Django and Deepgram. You can find the [code here](https://github.com/deepgram-devs/live-transcription-django) with instructions on how to run the project. If you have any questions, please feel free to reach out to us on Twitter at [@DeepgramDevs](https://twitter.com/DeepgramDevs).

        