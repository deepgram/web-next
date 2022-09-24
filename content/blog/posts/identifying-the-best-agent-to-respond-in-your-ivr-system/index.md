---
title: Identifying the Best Agent to Respond in Your IVR System
description: This tutorial will use Python, Twilio, Flask 2.0, and Deepgram API
  speech-to-text in an IVR system to identify the best customer support agent to
  respond to various spoken conversations based on language detection.
date: 2022-09-27T17:28:43.057Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1663954319/blog/identifying-best-agent-to-respond-ivr-system-python/2209-Identifying-the-Best-Agent-to-Respond-in-Your-IVR-System-blog_2x_oxhwox.jpg
authors:
  - tonya-sims
category: tutorial
tags:
  - python
  - ivr
seo:
  title: Identifying the Best Agent to Respond in Your IVR System
  description: This tutorial will use Python, Twilio, Flask 2.0, and Deepgram API
    speech-to-text in an IVR system to identify the best customer support agent
    to respond to various spoken conversations based on language detection.
---
What would you say if I told you that you could detect spoken conversational language using AI in a speech-to-text transcript with Python? 

Would you spit your beer out?

Ok, maybe your water, but the point is I built a cool conversational AI project with an Interactive Voice Response (IVR) using Twilio, a speech recognition provider, and Python. The best part about it is that it was reasonably easy to build using Flask 2.0. The purpose was to identify the best virtual customer support agent to respond to a call.

I would love to walk you through the project, but if you want to skip ahead to the code, scroll to the bottom of this blog post.

## Create Voice Recognition Phone IVR With Speech Recognition Using Twilio and Python

This project was my first attempt at building an IVR with AI in Python, so I researched how these interactive voice response systems work. Simply put, you can think of them as a tree with many branches. They allow you to interact with a system, like an automated phone customer support agent, before being connected or transferred to a representative.

For example, you may be prompted to press “2” on your phone to connect to a department and then “1” to speak to a live customer support agent. I’m sure we’ve all been in that situation.

Twilio is the best choice for building the IVR because of its easy-to-navigate dashboard and simplicity. Also, since I’m using Python, they have tons of tutorials on implementing IVR systems like [the one in Flask I’m using for this tutorial](https://www.twilio.com/docs/voice/tutorials/build-interactive-voice-response-ivr-phone-tree/python). 

I also needed a speech-to-text API and leveraged Deepgram. We have a [Python SDK](https://github.com/deepgram/python-sdk) I tapped into that made it super quick and easy to get up and running with the voice recognition transcription. 

Deepgram also has language detection with prerecorded audio in which you can detect over 30 [supported languages](https://developers.deepgram.com/documentation/features/language/) like Hindi, Spanish, and Ukrainian, to name a few. 

Let’s get to the meat of the project: the code. 

## Code Breakdown for Creating IVR Speech-to-Text With Language Detection Using Python

Imagine you had to build a Python application that detects different conversational languages. It would help if you rerouted phone calls from customers using an IVR system to the appropriate virtual customer agent who speaks their language.

The following Python code breakdown demonstrates how to do so. There are just a few things I had to set up before the coding started. It’s painless, I promise.  

1. Grab a [Deepgram API Key](https://console.deepgram.com/signup?jump=keys). I needed this to tap into the speech-to-text Python SDK. 
2. Create a Twilio account and voice phone number [here](https://www.twilio.com/login?g=%2Fconsole%2Fphone-numbers%2Fincoming%3F&t=98a31204d675661e83d6f3d24078fc1b9f3d6c8f85f0695f6c24ccb513fd05cf). This allowed me to make an outgoing call and navigate the IVR with dial prompts. 
3. Install [ngrok](https://ngrok.com/) to test my webhooks locally. 

Next, I made a new directory to hold all my Python files and activated a [virtual environment](https://blog.deepgram.com/python-virtual-environments/) to `pip install` all of my Python packages.

These are the packages I installed:

```
pip install Flask
pip install ‘flask[async]’
pip install Twilio
pip install deepgram-sdk
pip install python-dotenv
```

After creating my directory, I downloaded three audio files with different spoken languages from [this website](https://www.audio-lingua.eu/?lang=en) and added them to my project in a folder called **languages**.

I created a file called **views.py** that contains most of my Flask 2.0 Python code. You’ll see the entirety of this code at the bottom of this post, but I’ll walk through the most critical parts of it.

This code is where the Deepgram Python speech-to-text transcription magic happens. I’m transcribing the audio MP3 file and returning the transcript and detected language. The API detected the conversational language and provided a language code like `es` for Spanish. 

```python
async def deepgram_transcribe(PATH_TO_FILE):

  # Initializes the Deepgram SDK
   deepgram = Deepgram(os.getenv("DEEPGRAM_API_KEY"))

  # Open the audio file
   with open(PATH_TO_FILE, 'rb') as audio:

      # ...or replace mimetype as appropriate
       source = {'buffer': audio, 'mimetype': 'audio/mp3'}
       response = await deepgram.transcription.prerecorded(source, {"detect_language": True})


       if 'transcript' in response['results']['channels'][0]['alternatives'][0]:
           transcript = response['results']['channels'][0]['alternatives'][0]['transcript']


       if 'detected_language' in response['results']['channels'][0]:
           detected_language = response['results']['channels'][0]['detected_language']

  
   return transcript, detected_language
```

At the top of the file, I created a Python dictionary that acts as a lookup. This dictionary contains the language code as a key and the name of the customer support agent that speaks that language as the value. 

```python
customer_service_reps = {
                           "fr": "Sally",
                           "es": "Pete",
                           "de": "Ann"
                       }
```

I created a POST route and prompted the user to press either 1,2, or 3, each for different languages. For example, if a customer presses 2 when they call in, they’ll get routed to the agent who speaks French.

Whichever option is selected will invoke a private function, as noted in the `menu` function. When option 2 is pressed, the function  `_french_recording` is called. 

```python
@app.route('/ivr/welcome', methods=['POST'])
def welcome():
   response = VoiceResponse()
   with response.gather(
       num_digits=1, action=url_for('menu'), method="POST"
   ) as g:

       g.say(message="Thanks for calling the Deepgram Speech-to-Text Python SDK. " +
             "Please press 1 for Spanish" +
             "Press 2 for French" +
             "Press 3 for German", loop=3)


   return twiml(response)


@app.route('/ivr/menu', methods=['POST'])
async def menu():
   selected_option = request.form['Digits']
   option_actions = {'1': _spanish_recording,
                     '2': _french_recording,
                     '3': _german_recording}


   if selected_option in option_actions:
       response = VoiceResponse()
       await option_actions[selected_option](response)

       return twiml(response)


   return _redirect_welcome()
```

I created a private function for each spoken language, and when they’re selected, that method will get called, and a phone response will say the message. For French, the automated IVR response will be \`”This is the French response and Sally will help you.”\`

```python
async def _spanish_recording(response):
   recording = "languages/spanish-recording.mp3"
   spanish_transcript = await deepgram_transcribe(recording)

   representative = customer_service_reps[spanish_transcript[1]]


   response.say(f"This is the Spanish response and {representative} will help you.",
                voice="alice", language="en-US")

   response.hangup()

   return response



async def _french_recording(response):

   recording = "languages/french-recording.mp3"

   french_transcript = await deepgram_transcribe(recording)



   representative = customer_service_reps[french_transcript[1]]

   response.say(f"This is the French response and {representative} will help you.",
                voice="alice", language="en-US")


   response.hangup()

   return response


async def _german_recording(response):
   recording = "languages/german-recording.mp3"

   german_transcript = await deepgram_transcribe(recording)



   representative = customer_service_reps[german_transcript[1]]



   response.say(f"This is the German response and {representative} will help you.",
                voice="alice", language="en-US")


   response.hangup()

   return response
```

I also created a **templates** folder in the main Python Flask project directory with a blank **index.html** file. We don’t need anything in this file but feel free to add any HTML or Jinja.

To run the application, I fired up two terminals simultaneously in Visual Studio Code, one to run my Flask application and another for ngrok. Both are important, and you’ll need the ngrok url to add to your Twilio dashboard.

To run the Flask application, I used this command from the terminal:

`FLASK_APP=main.py FLASK_DEBUG=1 flask run` allows my application to run in debug mode, so when changes are made to my code, there’s no need for me to keep stopping and starting the terminal. 

In the other terminal window, I ran this command:

`ngrok http 5000`

Make sure to grab the ngrok url, which is different from the one in the Flask terminal. It looks something like this: [`https://3afb-104-6-9-133.ngrok.io`](https://3afb-104-6-9-133.ngrok.io).

In the Twilio dashboard, click on `Manage -> Active Numbers`, then click on the purchased number. Put the ngrok url in the webhook with the following endpoint: [`https://3afb-104-6-9-133.ngrok.io/ivr/welcome`](https://3afb-104-6-9-133.ngrok.io/ivr/welcome), which is the unique ngrok url followed by the Flask route in the Python application `/ivr/welcome`.

![ ivr-call-agent-system-with-twilio-and-python](https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/ivr-call-agent-system-with-twilio-and-python_fqs5mc.png "IVR Call Agent System with Twilio and Python")

Now, dial the Twilio number and follow the prompts, and you’ll get routed to the best customer agent to handle your call based on speech-to-text language detection!

## Conclusion

Please let me know if you followed this tutorial or built your project using Python with Deepgram’s language detection. Please hop over to our [Deepgram Github Discussions](https://github.com/orgs/deepgram/discussions) and send us a message.

## The Python Flask Code for the IVR Speech-To-Text Application

**\
My project structure**:

![flask-python-ivr-twilio-project-structure.](https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/flask-python-ivr-twilio-project-structure_o7pgkw.png "Flask Python IVR Twilio Project Structure")

**views.py**

```python
from deepgram import Deepgram
from flask import (
   Flask,
   render_template,
   request,
   url_for,
)

from twilio.twiml.voice_response import VoiceResponse
from view_helpers import twiml
from dotenv import load_dotenv
import asyncio, json, os

app = Flask(__name__)



customer_service_reps = {

                           "fr": "Sally",
                           "es": "Pete",
                           "de": "Ann"

                       }



async def deepgram_transcribe(PATH_TO_FILE):
  # Initializes the Deepgram SDK
   deepgram = Deepgram(os.getenv("DEEPGRAM_API_KEY"))

  # Open the audio file
   with open(PATH_TO_FILE, 'rb') as audio:
      # ...or replace mimetype as appropriate
      source = {'buffer': audio, 'mimetype': 'audio/mp3'}
      response = await deepgram.transcription.prerecorded(source, {"detect_language": True})

       if 'transcript' in response['results']['channels'][0]['alternatives'][0]:
           transcript = response['results']['channels'][0]['alternatives'][0]['transcript']


       if 'detected_language' in response['results']['channels'][0]:
           detected_language = response['results']['channels'][0]['detected_language']

  
   return transcript, detected_language



@app.route('/')
@app.route('/ivr')
def home():
   return render_template('index.html')


@app.route('/ivr/welcome', methods=['POST'])
def welcome():
   response = VoiceResponse()
   with response.gather(
       num_digits=1, action=url_for('menu'), method="POST"
   ) as g:
       g.say(message="Thanks for calling the Deepgram Speech-to-Text Python SDK. " +
             "Please press 1 for Spanish" +
             "Press 2 for French" +
             "Press 3 for German", loop=3)


   return twiml(response)


@app.route('/ivr/menu', methods=['POST'])
async def menu():
   selected_option = request.form['Digits']
   option_actions = {'1': _spanish_recording,
                     '2': _french_recording,
                     '3': _german_recording}


   if selected_option in option_actions:
       response = VoiceResponse()
       await option_actions[selected_option](response)

       return twiml(response)


   return _redirect_welcome()



async def _spanish_recording(response):
   recording = "languages/spanish-recording.mp3"
   spanish_transcript = await deepgram_transcribe(recording)

   representative = customer_service_reps[spanish_transcript[1]]

   response.say(f"This is the Spanish response and {representative} will help you.",
                voice="alice", language="en-US")

   response.hangup()

   return response


async def _french_recording(response):
   recording = "languages/french-recording.mp3"
   french_transcript = await deepgram_transcribe(recording)

   representative = customer_service_reps[french_transcript[1]]

   response.say(f"This is the French response and {representative} will help you.",
                voice="alice", language="en-US")


   response.hangup()

   return response



async def _german_recording(response):
   recording = "languages/german-recording.mp3"
   german_transcript = await deepgram_transcribe(recording)



   representative = customer_service_reps[german_transcript[1]]



   response.say(f"This is the German response and {representative} will help you.",
                voice="alice", language="en-US")


   response.hangup()

   return response


def _redirect_welcome():
   response = VoiceResponse()
   response.say("Returning to the main menu", voice="alice", language="en-US")
   response.redirect(url_for('welcome'))

   return twiml(response)
```

**view_helpers.py**

```python
import flask

def twiml(resp):
   resp = flask.Response(str(resp))
   resp.headers['Content-Type'] = 'text/xml'

   return resp
```