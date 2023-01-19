import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../entry.mjs';
import Slugger from 'github-slugger';
import '@astrojs/netlify/netlify-functions.js';
import 'preact';
import 'preact-render-to-string';
import 'vue';
import 'vue/server-renderer';
import 'html-escaper';
import 'node-html-parser';
import 'axios';
/* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                          */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           */import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [{ "depth": 2, "slug": "create-voice-recognition-phone-ivr-with-speech-recognition-using-twilio-and-python", "text": "Create Voice Recognition Phone IVR With Speech Recognition Using Twilio and Python" }, { "depth": 2, "slug": "code-breakdown-for-creating-ivr-speech-to-text-with-language-detection-using-python", "text": "Code Breakdown for Creating IVR Speech-to-Text With Language Detection Using Python" }, { "depth": 2, "slug": "conclusion", "text": "Conclusion" }, { "depth": 2, "slug": "the-python-flask-code-for-the-ivr-speech-to-text-application", "text": "The Python Flask Code for the IVR Speech-To-Text Application" }], "source": `
What would you say if I told you that you could detect spoken conversational language using AI in a speech-to-text transcript with Python?\xA0

Would you spit your beer out?

Ok, maybe your water, but the point is I built a cool conversational AI project with an Interactive Voice Response (IVR) using Twilio, a speech recognition provider, and Python. The best part about it is that it was reasonably easy to build using Flask 2.0. The purpose was to identify the best virtual customer support agent to respond to a call.

I would love to walk you through the project, but if you want to skip ahead to the code, scroll to the bottom of this blog post.

## Create Voice Recognition Phone IVR With Speech Recognition Using Twilio and Python

This project was my first attempt at building an IVR with AI in Python, so I researched how these interactive voice response systems work. Simply put, you can think of them as a tree with many branches. They allow you to interact with a system, like an automated phone customer support agent, before being connected or transferred to a representative.

For example, you may be prompted to press \u201C2\u201D on your phone to connect to a department and then \u201C1\u201D to speak to a live customer support agent. I\u2019m sure we\u2019ve all been in that situation.

Twilio is the best choice for building the IVR because of its easy-to-navigate dashboard and simplicity. Also, since I\u2019m using Python, they have tons of tutorials on implementing IVR systems like [the one in Flask I\u2019m using for this tutorial](https://www.twilio.com/docs/voice/tutorials/build-interactive-voice-response-ivr-phone-tree/python).\xA0

I also needed a speech-to-text API and leveraged Deepgram. We have a [Python SDK](https://github.com/deepgram/python-sdk) I tapped into that made it super quick and easy to get up and running with the voice recognition transcription.\xA0

Deepgram also has language detection with prerecorded audio in which you can detect over 30 [supported languages](https://developers.deepgram.com/documentation/features/language/) like Hindi, Spanish, and Ukrainian, to name a few.\xA0

Let\u2019s get to the meat of the project: the code.\xA0

## Code Breakdown for Creating IVR Speech-to-Text With Language Detection Using Python

Imagine you had to build a Python application that detects different conversational languages. It would help if you rerouted phone calls from customers using an IVR system to the appropriate virtual customer agent who speaks their language.

The following Python code breakdown demonstrates how to do so. There are just a few things I had to set up before the coding started. It\u2019s painless, I promise.\xA0\xA0

1.  Grab a [Deepgram API Key](https://console.deepgram.com/signup?jump=keys). I needed this to tap into the speech-to-text Python SDK.\xA0
2.  Create a Twilio account and voice phone number [here](https://www.twilio.com/login?g=%2Fconsole%2Fphone-numbers%2Fincoming%3F\\&t=98a31204d675661e83d6f3d24078fc1b9f3d6c8f85f0695f6c24ccb513fd05cf). This allowed me to make an outgoing call and navigate the IVR with dial prompts.\xA0
3.  Install [ngrok](https://ngrok.com/) to test my webhooks locally.\xA0

Next, I made a new directory to hold all my Python files and activated a [virtual environment](https://blog.deepgram.com/python-virtual-environments/) to \`pip install\` all of my Python packages.

These are the packages I installed:

    pip install Flask
    pip install \u2018flask[async]\u2019
    pip install Twilio
    pip install deepgram-sdk
    pip install python-dotenv

After creating my directory, I downloaded three audio files with different spoken languages from [this website](https://www.audio-lingua.eu/?lang=en) and added them to my project in a folder called **languages**.

I created a file called **views.py** that contains most of my Flask 2.0 Python code. You\u2019ll see the entirety of this code at the bottom of this post, but I\u2019ll walk through the most critical parts of it.

This code is where the Deepgram Python speech-to-text transcription magic happens. I\u2019m transcribing the audio MP3 file and returning the transcript and detected language. The API detected the conversational language and provided a language code like \`es\` for Spanish.\xA0

\`\`\`python
async def deepgram_transcribe(PATH_TO_FILE):

  # Initializes the Deepgram SDK
\xA0\xA0\xA0deepgram = Deepgram(os.getenv("DEEPGRAM_API_KEY"))

  # Open the audio file
\xA0\xA0\xA0with open(PATH_TO_FILE, 'rb') as audio:

      # ...or replace mimetype as appropriate
\xA0\xA0\xA0\xA0\xA0\xA0\xA0source = {'buffer': audio, 'mimetype': 'audio/mp3'}
\xA0\xA0\xA0\xA0\xA0\xA0\xA0response = await deepgram.transcription.prerecorded(source, {"detect_language": True})


\xA0\xA0\xA0\xA0\xA0\xA0\xA0if 'transcript' in response['results']['channels'][0]['alternatives'][0]:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0transcript = response['results']['channels'][0]['alternatives'][0]['transcript']


\xA0\xA0\xA0\xA0\xA0\xA0\xA0if 'detected_language' in response['results']['channels'][0]:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0detected_language = response['results']['channels'][0]['detected_language']

\xA0\xA0
\xA0\xA0\xA0return transcript, detected_language
\`\`\`

At the top of the file, I created a Python dictionary that acts as a lookup. This dictionary contains the language code as a key and the name of the customer support agent that speaks that language as the value.\xA0

\`\`\`python
customer_service_reps = {
                           "fr": "Sally",
                           "es": "Pete",
                           "de": "Ann"
                       }
\`\`\`

I created a POST route and prompted the user to press either 1,2, or 3, each for different languages. For example, if a customer presses 2 when they call in, they\u2019ll get routed to the agent who speaks French.

Whichever option is selected will invoke a private function, as noted in the \`menu\` function. When option 2 is pressed, the function  \`_french_recording\` is called.\xA0

\`\`\`python
@app.route('/ivr/welcome', methods=['POST'])
def welcome():
\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0with response.gather(
\xA0\xA0\xA0\xA0\xA0\xA0\xA0num_digits=1, action=url_for('menu'), method="POST"
\xA0\xA0\xA0) as g:

\xA0\xA0\xA0\xA0\xA0\xA0\xA0g.say(message="Thanks for calling the Deepgram Speech-to-Text Python SDK. " +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Please press 1 for Spanish" +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Press 2 for French" +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Press 3 for German", loop=3)


\xA0\xA0\xA0return twiml(response)


@app.route('/ivr/menu', methods=['POST'])
async def menu():
\xA0\xA0\xA0selected_option = request.form['Digits']
\xA0\xA0\xA0option_actions = {'1': _spanish_recording,
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0'2': _french_recording,
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0'3': _german_recording}


\xA0\xA0\xA0if selected_option in option_actions:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0\xA0\xA0\xA0\xA0await option_actions[selected_option](response)

\xA0\xA0\xA0\xA0\xA0\xA0\xA0return twiml(response)


\xA0\xA0\xA0return _redirect_welcome()
\`\`\`

I created a private function for each spoken language, and when they\u2019re selected, that method will get called, and a phone response will say the message. For French, the automated IVR response will be \\\`\u201DThis is the French response and Sally will help you.\u201D\\\`

\`\`\`python
async def _spanish_recording(response):
\xA0\xA0\xA0recording = "languages/spanish-recording.mp3"
\xA0\xA0\xA0spanish_transcript = await deepgram_transcribe(recording)

\xA0\xA0\xA0representative = customer_service_reps[spanish_transcript[1]]


\xA0\xA0\xA0response.say(f"This is the Spanish response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")

\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response



async def _french_recording(response):

\xA0\xA0\xA0recording = "languages/french-recording.mp3"

\xA0\xA0\xA0french_transcript = await deepgram_transcribe(recording)



\xA0\xA0\xA0representative = customer_service_reps[french_transcript[1]]

\xA0\xA0\xA0response.say(f"This is the French response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")


\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response


async def _german_recording(response):
\xA0\xA0\xA0recording = "languages/german-recording.mp3"

\xA0\xA0\xA0german_transcript = await deepgram_transcribe(recording)



\xA0\xA0\xA0representative = customer_service_reps[german_transcript[1]]



\xA0\xA0\xA0response.say(f"This is the German response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")


\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response
\`\`\`

I also created a **templates** folder in the main Python Flask project directory with a blank **index.html** file. We don\u2019t need anything in this file but feel free to add any HTML or Jinja.

To run the application, I fired up two terminals simultaneously in Visual Studio Code, one to run my Flask application and another for ngrok. Both are important, and you\u2019ll need the ngrok url to add to your Twilio dashboard.

To run the Flask application, I used this command from the terminal:

\`FLASK_APP=views.py FLASK_DEBUG=1 flask run\` allows my application to run in debug mode, so when changes are made to my code, there\u2019s no need for me to keep stopping and starting the terminal.\xA0

In the other terminal window, I ran this command:

\`ngrok http 5000\`

Make sure to grab the ngrok url, which is different from the one in the Flask terminal. It looks something like this: [\`https://3afb-104-6-9-133.ngrok.io\`](https://3afb-104-6-9-133.ngrok.io).

In the Twilio dashboard, click on \`Manage -> Active Numbers\`, then click on the purchased number. Put the ngrok url in the webhook with the following endpoint: [\`https://3afb-104-6-9-133.ngrok.io/ivr/welcome\`](https://3afb-104-6-9-133.ngrok.io/ivr/welcome), which is the unique ngrok url followed by the Flask route in the Python application \`/ivr/welcome\`.

![ ivr-call-agent-system-with-twilio-and-python](https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/ivr-call-agent-system-with-twilio-and-python_fqs5mc.png "IVR Call Agent System with Twilio and Python")

Now, dial the Twilio number and follow the prompts, and you\u2019ll get routed to the best customer agent to handle your call based on speech-to-text language detection!

## Conclusion

Please let me know if you followed this tutorial or built your project using Python with Deepgram\u2019s language detection. Please hop over to our [Deepgram Github Discussions](https://github.com/orgs/deepgram/discussions) and send us a message.

## The Python Flask Code for the IVR Speech-To-Text Application

**\\
My project structure**:

![flask-python-ivr-twilio-project-structure.](https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/flask-python-ivr-twilio-project-structure_o7pgkw.png "Flask Python IVR Twilio Project Structure")

**views.py**

\`\`\`python
from deepgram import Deepgram
from flask import (
\xA0\xA0\xA0Flask,
\xA0\xA0\xA0render_template,
\xA0\xA0\xA0request,
\xA0\xA0\xA0url_for,
)

from twilio.twiml.voice_response import VoiceResponse
from view_helpers import twiml
from dotenv import load_dotenv
import asyncio, json, os

app = Flask(__name__)



customer_service_reps = {

\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"fr": "Sally",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"es": "Pete",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"de": "Ann"

\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}



async def deepgram_transcribe(PATH_TO_FILE):
  # Initializes the Deepgram SDK
\xA0\xA0\xA0deepgram = Deepgram(os.getenv("DEEPGRAM_API_KEY"))

  # Open the audio file
\xA0\xA0\xA0with open(PATH_TO_FILE, 'rb') as audio:
      # ...or replace mimetype as appropriate
      source = {'buffer': audio, 'mimetype': 'audio/mp3'}
      response = await deepgram.transcription.prerecorded(source, {"detect_language": True})

\xA0\xA0\xA0\xA0\xA0\xA0\xA0if 'transcript' in response['results']['channels'][0]['alternatives'][0]:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0transcript = response['results']['channels'][0]['alternatives'][0]['transcript']


\xA0\xA0\xA0\xA0\xA0\xA0\xA0if 'detected_language' in response['results']['channels'][0]:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0detected_language = response['results']['channels'][0]['detected_language']

\xA0\xA0
\xA0\xA0\xA0return transcript, detected_language



@app.route('/')
@app.route('/ivr')
def home():
\xA0\xA0\xA0return render_template('index.html')


@app.route('/ivr/welcome', methods=['POST'])
def welcome():
\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0with response.gather(
\xA0\xA0\xA0\xA0\xA0\xA0\xA0num_digits=1, action=url_for('menu'), method="POST"
\xA0\xA0\xA0) as g:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0g.say(message="Thanks for calling the Deepgram Speech-to-Text Python SDK. " +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Please press 1 for Spanish" +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Press 2 for French" +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Press 3 for German", loop=3)


\xA0\xA0\xA0return twiml(response)


@app.route('/ivr/menu', methods=['POST'])
async def menu():
\xA0\xA0\xA0selected_option = request.form['Digits']
\xA0\xA0\xA0option_actions = {'1': _spanish_recording,
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0'2': _french_recording,
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0'3': _german_recording}


\xA0\xA0\xA0if selected_option in option_actions:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0\xA0\xA0\xA0\xA0await option_actions[selected_option](response)

\xA0\xA0\xA0\xA0\xA0\xA0\xA0return twiml(response)


\xA0\xA0\xA0return _redirect_welcome()



async def _spanish_recording(response):
\xA0\xA0\xA0recording = "languages/spanish-recording.mp3"
\xA0\xA0\xA0spanish_transcript = await deepgram_transcribe(recording)

\xA0\xA0\xA0representative = customer_service_reps[spanish_transcript[1]]

\xA0\xA0\xA0response.say(f"This is the Spanish response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")

\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response


async def _french_recording(response):
\xA0\xA0\xA0recording = "languages/french-recording.mp3"
\xA0\xA0\xA0french_transcript = await deepgram_transcribe(recording)

\xA0\xA0\xA0representative = customer_service_reps[french_transcript[1]]

\xA0\xA0\xA0response.say(f"This is the French response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")


\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response



async def _german_recording(response):
\xA0\xA0\xA0recording = "languages/german-recording.mp3"
\xA0\xA0\xA0german_transcript = await deepgram_transcribe(recording)



\xA0\xA0\xA0representative = customer_service_reps[german_transcript[1]]



\xA0\xA0\xA0response.say(f"This is the German response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")


\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response


def _redirect_welcome():
\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0response.say("Returning to the main menu", voice="alice", language="en-US")
\xA0\xA0\xA0response.redirect(url_for('welcome'))

\xA0\xA0\xA0return twiml(response)
\`\`\`

**view\\_helpers.py**

\`\`\`python
import flask

def twiml(resp):
\xA0\xA0\xA0resp = flask.Response(str(resp))
\xA0\xA0\xA0resp.headers['Content-Type'] = 'text/xml'

\xA0\xA0\xA0return resp
\`\`\`

`, "html": '<p>What would you say if I told you that you could detect spoken conversational language using AI in a speech-to-text transcript with Python?\xA0</p>\n<p>Would you spit your beer out?</p>\n<p>Ok, maybe your water, but the point is I built a cool conversational AI project with an Interactive Voice Response (IVR) using Twilio, a speech recognition provider, and Python. The best part about it is that it was reasonably easy to build using Flask 2.0. The purpose was to identify the best virtual customer support agent to respond to a call.</p>\n<p>I would love to walk you through the project, but if you want to skip ahead to the code, scroll to the bottom of this blog post.</p>\n<h2 id="create-voice-recognition-phone-ivr-with-speech-recognition-using-twilio-and-python">Create Voice Recognition Phone IVR With Speech Recognition Using Twilio and Python</h2>\n<p>This project was my first attempt at building an IVR with AI in Python, so I researched how these interactive voice response systems work. Simply put, you can think of them as a tree with many branches. They allow you to interact with a system, like an automated phone customer support agent, before being connected or transferred to a representative.</p>\n<p>For example, you may be prompted to press \u201C2\u201D on your phone to connect to a department and then \u201C1\u201D to speak to a live customer support agent. I\u2019m sure we\u2019ve all been in that situation.</p>\n<p>Twilio is the best choice for building the IVR because of its easy-to-navigate dashboard and simplicity. Also, since I\u2019m using Python, they have tons of tutorials on implementing IVR systems like <a href="https://www.twilio.com/docs/voice/tutorials/build-interactive-voice-response-ivr-phone-tree/python">the one in Flask I\u2019m using for this tutorial</a>.\xA0</p>\n<p>I also needed a speech-to-text API and leveraged Deepgram. We have a <a href="https://github.com/deepgram/python-sdk">Python SDK</a> I tapped into that made it super quick and easy to get up and running with the voice recognition transcription.\xA0</p>\n<p>Deepgram also has language detection with prerecorded audio in which you can detect over 30 <a href="https://developers.deepgram.com/documentation/features/language/">supported languages</a> like Hindi, Spanish, and Ukrainian, to name a few.\xA0</p>\n<p>Let\u2019s get to the meat of the project: the code.\xA0</p>\n<h2 id="code-breakdown-for-creating-ivr-speech-to-text-with-language-detection-using-python">Code Breakdown for Creating IVR Speech-to-Text With Language Detection Using Python</h2>\n<p>Imagine you had to build a Python application that detects different conversational languages. It would help if you rerouted phone calls from customers using an IVR system to the appropriate virtual customer agent who speaks their language.</p>\n<p>The following Python code breakdown demonstrates how to do so. There are just a few things I had to set up before the coding started. It\u2019s painless, I promise.\xA0\xA0</p>\n<ol>\n<li>Grab a <a href="https://console.deepgram.com/signup?jump=keys">Deepgram API Key</a>. I needed this to tap into the speech-to-text Python SDK.\xA0</li>\n<li>Create a Twilio account and voice phone number <a href="https://www.twilio.com/login?g=%2Fconsole%2Fphone-numbers%2Fincoming%3F&#x26;t=98a31204d675661e83d6f3d24078fc1b9f3d6c8f85f0695f6c24ccb513fd05cf">here</a>. This allowed me to make an outgoing call and navigate the IVR with dial prompts.\xA0</li>\n<li>Install <a href="https://ngrok.com/">ngrok</a> to test my webhooks locally.\xA0</li>\n</ol>\n<p>Next, I made a new directory to hold all my Python files and activated a <a href="https://blog.deepgram.com/python-virtual-environments/">virtual environment</a> to <code is:raw>pip install</code> all of my Python packages.</p>\n<p>These are the packages I installed:</p>\n<p>pip install Flask\npip install \u2018flask[async]\u2019\npip install Twilio\npip install deepgram-sdk\npip install python-dotenv</p>\n<p>After creating my directory, I downloaded three audio files with different spoken languages from <a href="https://www.audio-lingua.eu/?lang=en">this website</a> and added them to my project in a folder called <strong>languages</strong>.</p>\n<p>I created a file called <strong>views.py</strong> that contains most of my Flask 2.0 Python code. You\u2019ll see the entirety of this code at the bottom of this post, but I\u2019ll walk through the most critical parts of it.</p>\n<p>This code is where the Deepgram Python speech-to-text transcription magic happens. I\u2019m transcribing the audio MP3 file and returning the transcript and detected language. The API detected the conversational language and provided a language code like <code is:raw>es</code> for Spanish.\xA0</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">deepgram_transcribe</span><span style="color: #C9D1D9">(PATH_TO_FILE):</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Initializes the Deepgram SDK</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0deepgram </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Deepgram(os.getenv(</span><span style="color: #A5D6FF">&quot;DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9">))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Open the audio file</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">open</span><span style="color: #C9D1D9">(</span><span style="color: #79C0FF">PATH_TO_FILE</span><span style="color: #C9D1D9">, </span><span style="color: #A5D6FF">&#39;rb&#39;</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> audio:</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #8B949E"># ...or replace mimetype as appropriate</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0source </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;buffer&#39;</span><span style="color: #C9D1D9">: audio, </span><span style="color: #A5D6FF">&#39;mimetype&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&#39;audio/mp3&#39;</span><span style="color: #C9D1D9">}</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram.transcription.prerecorded(source, {</span><span style="color: #A5D6FF">&quot;detect_language&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">True</span><span style="color: #C9D1D9">})</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0detected_language </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> transcript, detected_language</span></span></code></pre>\n<p>At the top of the file, I created a Python dictionary that acts as a lookup. This dictionary contains the language code as a key and the name of the customer support agent that speaks that language as the value.\xA0</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">customer_service_reps </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;fr&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Sally&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;es&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Pete&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;de&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Ann&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">                       }</span></span></code></pre>\n<p>I created a POST route and prompted the user to press either 1,2, or 3, each for different languages. For example, if a customer presses 2 when they call in, they\u2019ll get routed to the agent who speaks French.</p>\n<p>Whichever option is selected will invoke a private function, as noted in the <code is:raw>menu</code> function. When option 2 is pressed, the function  <code is:raw>_french_recording</code> is called.\xA0</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/welcome&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">welcome</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> response.gather(</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">num_digits</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">action</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">url_for(</span><span style="color: #A5D6FF">&#39;menu&#39;</span><span style="color: #C9D1D9">), </span><span style="color: #FFA657">method</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;POST&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> g:</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0g.say(</span><span style="color: #FFA657">message</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;Thanks for calling the Deepgram Speech-to-Text Python SDK. &quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Please press 1 for Spanish&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Press 2 for French&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Press 3 for German&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">loop</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">3</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/menu&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">menu</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0selected_option </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> request.form[</span><span style="color: #A5D6FF">&#39;Digits&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0option_actions </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;1&#39;</span><span style="color: #C9D1D9">: _spanish_recording,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&#39;2&#39;</span><span style="color: #C9D1D9">: _french_recording,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&#39;3&#39;</span><span style="color: #C9D1D9">: _german_recording}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> selected_option </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> option_actions:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> option_actions[selected_option](response)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> _redirect_welcome()</span></span></code></pre>\n<p>I created a private function for each spoken language, and when they\u2019re selected, that method will get called, and a phone response will say the message. For French, the automated IVR response will be `\u201DThis is the French response and Sally will help you.\u201D`</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_spanish_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/spanish-recording.mp3&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0spanish_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[spanish_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the Spanish response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_french_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/french-recording.mp3&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0french_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[french_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the French response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_german_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/german-recording.mp3&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0german_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[german_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the German response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span></code></pre>\n<p>I also created a <strong>templates</strong> folder in the main Python Flask project directory with a blank <strong>index.html</strong> file. We don\u2019t need anything in this file but feel free to add any HTML or Jinja.</p>\n<p>To run the application, I fired up two terminals simultaneously in Visual Studio Code, one to run my Flask application and another for ngrok. Both are important, and you\u2019ll need the ngrok url to add to your Twilio dashboard.</p>\n<p>To run the Flask application, I used this command from the terminal:</p>\n<p><code is:raw>FLASK_APP=views.py FLASK_DEBUG=1 flask run</code> allows my application to run in debug mode, so when changes are made to my code, there\u2019s no need for me to keep stopping and starting the terminal.\xA0</p>\n<p>In the other terminal window, I ran this command:</p>\n<p><code is:raw>ngrok http 5000</code></p>\n<p>Make sure to grab the ngrok url, which is different from the one in the Flask terminal. It looks something like this: <a href="https://3afb-104-6-9-133.ngrok.io"><code is:raw>https://3afb-104-6-9-133.ngrok.io</code></a>.</p>\n<p>In the Twilio dashboard, click on <code is:raw>Manage -&gt; Active Numbers</code>, then click on the purchased number. Put the ngrok url in the webhook with the following endpoint: <a href="https://3afb-104-6-9-133.ngrok.io/ivr/welcome"><code is:raw>https://3afb-104-6-9-133.ngrok.io/ivr/welcome</code></a>, which is the unique ngrok url followed by the Flask route in the Python application <code is:raw>/ivr/welcome</code>.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/ivr-call-agent-system-with-twilio-and-python_fqs5mc.png" alt=" ivr-call-agent-system-with-twilio-and-python" title="IVR Call Agent System with Twilio and Python"></p>\n<p>Now, dial the Twilio number and follow the prompts, and you\u2019ll get routed to the best customer agent to handle your call based on speech-to-text language detection!</p>\n<h2 id="conclusion">Conclusion</h2>\n<p>Please let me know if you followed this tutorial or built your project using Python with Deepgram\u2019s language detection. Please hop over to our <a href="https://github.com/orgs/deepgram/discussions">Deepgram Github Discussions</a> and send us a message.</p>\n<h2 id="the-python-flask-code-for-the-ivr-speech-to-text-application">The Python Flask Code for the IVR Speech-To-Text Application</h2>\n<p><strong><br>\nMy project structure</strong>:</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/flask-python-ivr-twilio-project-structure_o7pgkw.png" alt="flask-python-ivr-twilio-project-structure." title="Flask Python IVR Twilio Project Structure"></p>\n<p><strong>views.py</strong></p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> deepgram </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> Deepgram</span></span>\n<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> flask </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> (</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0Flask,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0render_template,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0request,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0url_for,</span></span>\n<span class="line"><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> twilio.twiml.voice_response </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> VoiceResponse</span></span>\n<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> view_helpers </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> twiml</span></span>\n<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> dotenv </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> load_dotenv</span></span>\n<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> asyncio, json, os</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">app </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Flask(</span><span style="color: #79C0FF">__name__</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">customer_service_reps </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;fr&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Sally&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;es&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Pete&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;de&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Ann&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">deepgram_transcribe</span><span style="color: #C9D1D9">(PATH_TO_FILE):</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Initializes the Deepgram SDK</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0deepgram </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Deepgram(os.getenv(</span><span style="color: #A5D6FF">&quot;DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9">))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Open the audio file</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">open</span><span style="color: #C9D1D9">(</span><span style="color: #79C0FF">PATH_TO_FILE</span><span style="color: #C9D1D9">, </span><span style="color: #A5D6FF">&#39;rb&#39;</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> audio:</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #8B949E"># ...or replace mimetype as appropriate</span></span>\n<span class="line"><span style="color: #C9D1D9">      source </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;buffer&#39;</span><span style="color: #C9D1D9">: audio, </span><span style="color: #A5D6FF">&#39;mimetype&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&#39;audio/mp3&#39;</span><span style="color: #C9D1D9">}</span></span>\n<span class="line"><span style="color: #C9D1D9">      response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram.transcription.prerecorded(source, {</span><span style="color: #A5D6FF">&quot;detect_language&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">True</span><span style="color: #C9D1D9">})</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0detected_language </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> transcript, detected_language</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">home</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> render_template(</span><span style="color: #A5D6FF">&#39;index.html&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/welcome&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">welcome</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> response.gather(</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">num_digits</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">action</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">url_for(</span><span style="color: #A5D6FF">&#39;menu&#39;</span><span style="color: #C9D1D9">), </span><span style="color: #FFA657">method</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;POST&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> g:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0g.say(</span><span style="color: #FFA657">message</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;Thanks for calling the Deepgram Speech-to-Text Python SDK. &quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Please press 1 for Spanish&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Press 2 for French&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Press 3 for German&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">loop</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">3</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/menu&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">menu</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0selected_option </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> request.form[</span><span style="color: #A5D6FF">&#39;Digits&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0option_actions </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;1&#39;</span><span style="color: #C9D1D9">: _spanish_recording,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&#39;2&#39;</span><span style="color: #C9D1D9">: _french_recording,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&#39;3&#39;</span><span style="color: #C9D1D9">: _german_recording}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> selected_option </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> option_actions:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> option_actions[selected_option](response)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> _redirect_welcome()</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_spanish_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/spanish-recording.mp3&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0spanish_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[spanish_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the Spanish response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_french_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/french-recording.mp3&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0french_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[french_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the French response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_german_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/german-recording.mp3&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0german_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[german_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the German response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_redirect_welcome</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #A5D6FF">&quot;Returning to the main menu&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.redirect(url_for(</span><span style="color: #A5D6FF">&#39;welcome&#39;</span><span style="color: #C9D1D9">))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span></code></pre>\n<p><strong>view_helpers.py</strong></p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> flask</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">twiml</span><span style="color: #C9D1D9">(resp):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0resp </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> flask.Response(</span><span style="color: #79C0FF">str</span><span style="color: #C9D1D9">(resp))</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0resp.headers[</span><span style="color: #A5D6FF">&#39;Content-Type&#39;</span><span style="color: #C9D1D9">] </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;text/xml&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> resp</span></span></code></pre>' };
const frontmatter = { "title": "Identifying the Best Agent to Respond in Your IVR System", "description": "This tutorial will use Python, Twilio, Flask 2.0, and Deepgram API speech-to-text in an IVR system to identify the best customer support agent to respond to various spoken conversations based on language detection.", "date": "2022-09-27T17:28:43.057Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1663954319/blog/identifying-best-agent-to-respond-ivr-system-python/2209-Identifying-the-Best-Agent-to-Respond-in-Your-IVR-System-blog_2x_oxhwox.jpg", "authors": ["tonya-sims"], "category": "tutorial", "tags": ["python", "ivr"], "seo": { "title": "Identifying the Best Agent to Respond in Your IVR System", "description": "This tutorial will use Python, Twilio, Flask 2.0, and Deepgram API speech-to-text in an IVR system to identify the best customer support agent to respond to various spoken conversations based on language detection." }, "shorturls": { "share": "https://dpgr.am/f0a2b5d", "twitter": "https://dpgr.am/2643cd7", "linkedin": "https://dpgr.am/b789d4c", "reddit": "https://dpgr.am/b2138e4", "facebook": "https://dpgr.am/5b0468b" }, "astro": { "headings": [{ "depth": 2, "slug": "create-voice-recognition-phone-ivr-with-speech-recognition-using-twilio-and-python", "text": "Create Voice Recognition Phone IVR With Speech Recognition Using Twilio and Python" }, { "depth": 2, "slug": "code-breakdown-for-creating-ivr-speech-to-text-with-language-detection-using-python", "text": "Code Breakdown for Creating IVR Speech-to-Text With Language Detection Using Python" }, { "depth": 2, "slug": "conclusion", "text": "Conclusion" }, { "depth": 2, "slug": "the-python-flask-code-for-the-ivr-speech-to-text-application", "text": "The Python Flask Code for the IVR Speech-To-Text Application" }], "source": `
What would you say if I told you that you could detect spoken conversational language using AI in a speech-to-text transcript with Python?\xA0

Would you spit your beer out?

Ok, maybe your water, but the point is I built a cool conversational AI project with an Interactive Voice Response (IVR) using Twilio, a speech recognition provider, and Python. The best part about it is that it was reasonably easy to build using Flask 2.0. The purpose was to identify the best virtual customer support agent to respond to a call.

I would love to walk you through the project, but if you want to skip ahead to the code, scroll to the bottom of this blog post.

## Create Voice Recognition Phone IVR With Speech Recognition Using Twilio and Python

This project was my first attempt at building an IVR with AI in Python, so I researched how these interactive voice response systems work. Simply put, you can think of them as a tree with many branches. They allow you to interact with a system, like an automated phone customer support agent, before being connected or transferred to a representative.

For example, you may be prompted to press \u201C2\u201D on your phone to connect to a department and then \u201C1\u201D to speak to a live customer support agent. I\u2019m sure we\u2019ve all been in that situation.

Twilio is the best choice for building the IVR because of its easy-to-navigate dashboard and simplicity. Also, since I\u2019m using Python, they have tons of tutorials on implementing IVR systems like [the one in Flask I\u2019m using for this tutorial](https://www.twilio.com/docs/voice/tutorials/build-interactive-voice-response-ivr-phone-tree/python).\xA0

I also needed a speech-to-text API and leveraged Deepgram. We have a [Python SDK](https://github.com/deepgram/python-sdk) I tapped into that made it super quick and easy to get up and running with the voice recognition transcription.\xA0

Deepgram also has language detection with prerecorded audio in which you can detect over 30 [supported languages](https://developers.deepgram.com/documentation/features/language/) like Hindi, Spanish, and Ukrainian, to name a few.\xA0

Let\u2019s get to the meat of the project: the code.\xA0

## Code Breakdown for Creating IVR Speech-to-Text With Language Detection Using Python

Imagine you had to build a Python application that detects different conversational languages. It would help if you rerouted phone calls from customers using an IVR system to the appropriate virtual customer agent who speaks their language.

The following Python code breakdown demonstrates how to do so. There are just a few things I had to set up before the coding started. It\u2019s painless, I promise.\xA0\xA0

1.  Grab a [Deepgram API Key](https://console.deepgram.com/signup?jump=keys). I needed this to tap into the speech-to-text Python SDK.\xA0
2.  Create a Twilio account and voice phone number [here](https://www.twilio.com/login?g=%2Fconsole%2Fphone-numbers%2Fincoming%3F\\&t=98a31204d675661e83d6f3d24078fc1b9f3d6c8f85f0695f6c24ccb513fd05cf). This allowed me to make an outgoing call and navigate the IVR with dial prompts.\xA0
3.  Install [ngrok](https://ngrok.com/) to test my webhooks locally.\xA0

Next, I made a new directory to hold all my Python files and activated a [virtual environment](https://blog.deepgram.com/python-virtual-environments/) to \`pip install\` all of my Python packages.

These are the packages I installed:

    pip install Flask
    pip install \u2018flask[async]\u2019
    pip install Twilio
    pip install deepgram-sdk
    pip install python-dotenv

After creating my directory, I downloaded three audio files with different spoken languages from [this website](https://www.audio-lingua.eu/?lang=en) and added them to my project in a folder called **languages**.

I created a file called **views.py** that contains most of my Flask 2.0 Python code. You\u2019ll see the entirety of this code at the bottom of this post, but I\u2019ll walk through the most critical parts of it.

This code is where the Deepgram Python speech-to-text transcription magic happens. I\u2019m transcribing the audio MP3 file and returning the transcript and detected language. The API detected the conversational language and provided a language code like \`es\` for Spanish.\xA0

\`\`\`python
async def deepgram_transcribe(PATH_TO_FILE):

  # Initializes the Deepgram SDK
\xA0\xA0\xA0deepgram = Deepgram(os.getenv("DEEPGRAM_API_KEY"))

  # Open the audio file
\xA0\xA0\xA0with open(PATH_TO_FILE, 'rb') as audio:

      # ...or replace mimetype as appropriate
\xA0\xA0\xA0\xA0\xA0\xA0\xA0source = {'buffer': audio, 'mimetype': 'audio/mp3'}
\xA0\xA0\xA0\xA0\xA0\xA0\xA0response = await deepgram.transcription.prerecorded(source, {"detect_language": True})


\xA0\xA0\xA0\xA0\xA0\xA0\xA0if 'transcript' in response['results']['channels'][0]['alternatives'][0]:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0transcript = response['results']['channels'][0]['alternatives'][0]['transcript']


\xA0\xA0\xA0\xA0\xA0\xA0\xA0if 'detected_language' in response['results']['channels'][0]:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0detected_language = response['results']['channels'][0]['detected_language']

\xA0\xA0
\xA0\xA0\xA0return transcript, detected_language
\`\`\`

At the top of the file, I created a Python dictionary that acts as a lookup. This dictionary contains the language code as a key and the name of the customer support agent that speaks that language as the value.\xA0

\`\`\`python
customer_service_reps = {
                           "fr": "Sally",
                           "es": "Pete",
                           "de": "Ann"
                       }
\`\`\`

I created a POST route and prompted the user to press either 1,2, or 3, each for different languages. For example, if a customer presses 2 when they call in, they\u2019ll get routed to the agent who speaks French.

Whichever option is selected will invoke a private function, as noted in the \`menu\` function. When option 2 is pressed, the function  \`_french_recording\` is called.\xA0

\`\`\`python
@app.route('/ivr/welcome', methods=['POST'])
def welcome():
\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0with response.gather(
\xA0\xA0\xA0\xA0\xA0\xA0\xA0num_digits=1, action=url_for('menu'), method="POST"
\xA0\xA0\xA0) as g:

\xA0\xA0\xA0\xA0\xA0\xA0\xA0g.say(message="Thanks for calling the Deepgram Speech-to-Text Python SDK. " +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Please press 1 for Spanish" +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Press 2 for French" +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Press 3 for German", loop=3)


\xA0\xA0\xA0return twiml(response)


@app.route('/ivr/menu', methods=['POST'])
async def menu():
\xA0\xA0\xA0selected_option = request.form['Digits']
\xA0\xA0\xA0option_actions = {'1': _spanish_recording,
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0'2': _french_recording,
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0'3': _german_recording}


\xA0\xA0\xA0if selected_option in option_actions:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0\xA0\xA0\xA0\xA0await option_actions[selected_option](response)

\xA0\xA0\xA0\xA0\xA0\xA0\xA0return twiml(response)


\xA0\xA0\xA0return _redirect_welcome()
\`\`\`

I created a private function for each spoken language, and when they\u2019re selected, that method will get called, and a phone response will say the message. For French, the automated IVR response will be \\\`\u201DThis is the French response and Sally will help you.\u201D\\\`

\`\`\`python
async def _spanish_recording(response):
\xA0\xA0\xA0recording = "languages/spanish-recording.mp3"
\xA0\xA0\xA0spanish_transcript = await deepgram_transcribe(recording)

\xA0\xA0\xA0representative = customer_service_reps[spanish_transcript[1]]


\xA0\xA0\xA0response.say(f"This is the Spanish response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")

\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response



async def _french_recording(response):

\xA0\xA0\xA0recording = "languages/french-recording.mp3"

\xA0\xA0\xA0french_transcript = await deepgram_transcribe(recording)



\xA0\xA0\xA0representative = customer_service_reps[french_transcript[1]]

\xA0\xA0\xA0response.say(f"This is the French response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")


\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response


async def _german_recording(response):
\xA0\xA0\xA0recording = "languages/german-recording.mp3"

\xA0\xA0\xA0german_transcript = await deepgram_transcribe(recording)



\xA0\xA0\xA0representative = customer_service_reps[german_transcript[1]]



\xA0\xA0\xA0response.say(f"This is the German response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")


\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response
\`\`\`

I also created a **templates** folder in the main Python Flask project directory with a blank **index.html** file. We don\u2019t need anything in this file but feel free to add any HTML or Jinja.

To run the application, I fired up two terminals simultaneously in Visual Studio Code, one to run my Flask application and another for ngrok. Both are important, and you\u2019ll need the ngrok url to add to your Twilio dashboard.

To run the Flask application, I used this command from the terminal:

\`FLASK_APP=views.py FLASK_DEBUG=1 flask run\` allows my application to run in debug mode, so when changes are made to my code, there\u2019s no need for me to keep stopping and starting the terminal.\xA0

In the other terminal window, I ran this command:

\`ngrok http 5000\`

Make sure to grab the ngrok url, which is different from the one in the Flask terminal. It looks something like this: [\`https://3afb-104-6-9-133.ngrok.io\`](https://3afb-104-6-9-133.ngrok.io).

In the Twilio dashboard, click on \`Manage -> Active Numbers\`, then click on the purchased number. Put the ngrok url in the webhook with the following endpoint: [\`https://3afb-104-6-9-133.ngrok.io/ivr/welcome\`](https://3afb-104-6-9-133.ngrok.io/ivr/welcome), which is the unique ngrok url followed by the Flask route in the Python application \`/ivr/welcome\`.

![ ivr-call-agent-system-with-twilio-and-python](https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/ivr-call-agent-system-with-twilio-and-python_fqs5mc.png "IVR Call Agent System with Twilio and Python")

Now, dial the Twilio number and follow the prompts, and you\u2019ll get routed to the best customer agent to handle your call based on speech-to-text language detection!

## Conclusion

Please let me know if you followed this tutorial or built your project using Python with Deepgram\u2019s language detection. Please hop over to our [Deepgram Github Discussions](https://github.com/orgs/deepgram/discussions) and send us a message.

## The Python Flask Code for the IVR Speech-To-Text Application

**\\
My project structure**:

![flask-python-ivr-twilio-project-structure.](https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/flask-python-ivr-twilio-project-structure_o7pgkw.png "Flask Python IVR Twilio Project Structure")

**views.py**

\`\`\`python
from deepgram import Deepgram
from flask import (
\xA0\xA0\xA0Flask,
\xA0\xA0\xA0render_template,
\xA0\xA0\xA0request,
\xA0\xA0\xA0url_for,
)

from twilio.twiml.voice_response import VoiceResponse
from view_helpers import twiml
from dotenv import load_dotenv
import asyncio, json, os

app = Flask(__name__)



customer_service_reps = {

\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"fr": "Sally",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"es": "Pete",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"de": "Ann"

\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}



async def deepgram_transcribe(PATH_TO_FILE):
  # Initializes the Deepgram SDK
\xA0\xA0\xA0deepgram = Deepgram(os.getenv("DEEPGRAM_API_KEY"))

  # Open the audio file
\xA0\xA0\xA0with open(PATH_TO_FILE, 'rb') as audio:
      # ...or replace mimetype as appropriate
      source = {'buffer': audio, 'mimetype': 'audio/mp3'}
      response = await deepgram.transcription.prerecorded(source, {"detect_language": True})

\xA0\xA0\xA0\xA0\xA0\xA0\xA0if 'transcript' in response['results']['channels'][0]['alternatives'][0]:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0transcript = response['results']['channels'][0]['alternatives'][0]['transcript']


\xA0\xA0\xA0\xA0\xA0\xA0\xA0if 'detected_language' in response['results']['channels'][0]:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0detected_language = response['results']['channels'][0]['detected_language']

\xA0\xA0
\xA0\xA0\xA0return transcript, detected_language



@app.route('/')
@app.route('/ivr')
def home():
\xA0\xA0\xA0return render_template('index.html')


@app.route('/ivr/welcome', methods=['POST'])
def welcome():
\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0with response.gather(
\xA0\xA0\xA0\xA0\xA0\xA0\xA0num_digits=1, action=url_for('menu'), method="POST"
\xA0\xA0\xA0) as g:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0g.say(message="Thanks for calling the Deepgram Speech-to-Text Python SDK. " +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Please press 1 for Spanish" +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Press 2 for French" +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Press 3 for German", loop=3)


\xA0\xA0\xA0return twiml(response)


@app.route('/ivr/menu', methods=['POST'])
async def menu():
\xA0\xA0\xA0selected_option = request.form['Digits']
\xA0\xA0\xA0option_actions = {'1': _spanish_recording,
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0'2': _french_recording,
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0'3': _german_recording}


\xA0\xA0\xA0if selected_option in option_actions:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0\xA0\xA0\xA0\xA0await option_actions[selected_option](response)

\xA0\xA0\xA0\xA0\xA0\xA0\xA0return twiml(response)


\xA0\xA0\xA0return _redirect_welcome()



async def _spanish_recording(response):
\xA0\xA0\xA0recording = "languages/spanish-recording.mp3"
\xA0\xA0\xA0spanish_transcript = await deepgram_transcribe(recording)

\xA0\xA0\xA0representative = customer_service_reps[spanish_transcript[1]]

\xA0\xA0\xA0response.say(f"This is the Spanish response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")

\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response


async def _french_recording(response):
\xA0\xA0\xA0recording = "languages/french-recording.mp3"
\xA0\xA0\xA0french_transcript = await deepgram_transcribe(recording)

\xA0\xA0\xA0representative = customer_service_reps[french_transcript[1]]

\xA0\xA0\xA0response.say(f"This is the French response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")


\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response



async def _german_recording(response):
\xA0\xA0\xA0recording = "languages/german-recording.mp3"
\xA0\xA0\xA0german_transcript = await deepgram_transcribe(recording)



\xA0\xA0\xA0representative = customer_service_reps[german_transcript[1]]



\xA0\xA0\xA0response.say(f"This is the German response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")


\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response


def _redirect_welcome():
\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0response.say("Returning to the main menu", voice="alice", language="en-US")
\xA0\xA0\xA0response.redirect(url_for('welcome'))

\xA0\xA0\xA0return twiml(response)
\`\`\`

**view\\_helpers.py**

\`\`\`python
import flask

def twiml(resp):
\xA0\xA0\xA0resp = flask.Response(str(resp))
\xA0\xA0\xA0resp.headers['Content-Type'] = 'text/xml'

\xA0\xA0\xA0return resp
\`\`\`

`, "html": '<p>What would you say if I told you that you could detect spoken conversational language using AI in a speech-to-text transcript with Python?\xA0</p>\n<p>Would you spit your beer out?</p>\n<p>Ok, maybe your water, but the point is I built a cool conversational AI project with an Interactive Voice Response (IVR) using Twilio, a speech recognition provider, and Python. The best part about it is that it was reasonably easy to build using Flask 2.0. The purpose was to identify the best virtual customer support agent to respond to a call.</p>\n<p>I would love to walk you through the project, but if you want to skip ahead to the code, scroll to the bottom of this blog post.</p>\n<h2 id="create-voice-recognition-phone-ivr-with-speech-recognition-using-twilio-and-python">Create Voice Recognition Phone IVR With Speech Recognition Using Twilio and Python</h2>\n<p>This project was my first attempt at building an IVR with AI in Python, so I researched how these interactive voice response systems work. Simply put, you can think of them as a tree with many branches. They allow you to interact with a system, like an automated phone customer support agent, before being connected or transferred to a representative.</p>\n<p>For example, you may be prompted to press \u201C2\u201D on your phone to connect to a department and then \u201C1\u201D to speak to a live customer support agent. I\u2019m sure we\u2019ve all been in that situation.</p>\n<p>Twilio is the best choice for building the IVR because of its easy-to-navigate dashboard and simplicity. Also, since I\u2019m using Python, they have tons of tutorials on implementing IVR systems like <a href="https://www.twilio.com/docs/voice/tutorials/build-interactive-voice-response-ivr-phone-tree/python">the one in Flask I\u2019m using for this tutorial</a>.\xA0</p>\n<p>I also needed a speech-to-text API and leveraged Deepgram. We have a <a href="https://github.com/deepgram/python-sdk">Python SDK</a> I tapped into that made it super quick and easy to get up and running with the voice recognition transcription.\xA0</p>\n<p>Deepgram also has language detection with prerecorded audio in which you can detect over 30 <a href="https://developers.deepgram.com/documentation/features/language/">supported languages</a> like Hindi, Spanish, and Ukrainian, to name a few.\xA0</p>\n<p>Let\u2019s get to the meat of the project: the code.\xA0</p>\n<h2 id="code-breakdown-for-creating-ivr-speech-to-text-with-language-detection-using-python">Code Breakdown for Creating IVR Speech-to-Text With Language Detection Using Python</h2>\n<p>Imagine you had to build a Python application that detects different conversational languages. It would help if you rerouted phone calls from customers using an IVR system to the appropriate virtual customer agent who speaks their language.</p>\n<p>The following Python code breakdown demonstrates how to do so. There are just a few things I had to set up before the coding started. It\u2019s painless, I promise.\xA0\xA0</p>\n<ol>\n<li>Grab a <a href="https://console.deepgram.com/signup?jump=keys">Deepgram API Key</a>. I needed this to tap into the speech-to-text Python SDK.\xA0</li>\n<li>Create a Twilio account and voice phone number <a href="https://www.twilio.com/login?g=%2Fconsole%2Fphone-numbers%2Fincoming%3F&#x26;t=98a31204d675661e83d6f3d24078fc1b9f3d6c8f85f0695f6c24ccb513fd05cf">here</a>. This allowed me to make an outgoing call and navigate the IVR with dial prompts.\xA0</li>\n<li>Install <a href="https://ngrok.com/">ngrok</a> to test my webhooks locally.\xA0</li>\n</ol>\n<p>Next, I made a new directory to hold all my Python files and activated a <a href="https://blog.deepgram.com/python-virtual-environments/">virtual environment</a> to <code is:raw>pip install</code> all of my Python packages.</p>\n<p>These are the packages I installed:</p>\n<p>pip install Flask\npip install \u2018flask[async]\u2019\npip install Twilio\npip install deepgram-sdk\npip install python-dotenv</p>\n<p>After creating my directory, I downloaded three audio files with different spoken languages from <a href="https://www.audio-lingua.eu/?lang=en">this website</a> and added them to my project in a folder called <strong>languages</strong>.</p>\n<p>I created a file called <strong>views.py</strong> that contains most of my Flask 2.0 Python code. You\u2019ll see the entirety of this code at the bottom of this post, but I\u2019ll walk through the most critical parts of it.</p>\n<p>This code is where the Deepgram Python speech-to-text transcription magic happens. I\u2019m transcribing the audio MP3 file and returning the transcript and detected language. The API detected the conversational language and provided a language code like <code is:raw>es</code> for Spanish.\xA0</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">deepgram_transcribe</span><span style="color: #C9D1D9">(PATH_TO_FILE):</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Initializes the Deepgram SDK</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0deepgram </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Deepgram(os.getenv(</span><span style="color: #A5D6FF">&quot;DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9">))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Open the audio file</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">open</span><span style="color: #C9D1D9">(</span><span style="color: #79C0FF">PATH_TO_FILE</span><span style="color: #C9D1D9">, </span><span style="color: #A5D6FF">&#39;rb&#39;</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> audio:</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #8B949E"># ...or replace mimetype as appropriate</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0source </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;buffer&#39;</span><span style="color: #C9D1D9">: audio, </span><span style="color: #A5D6FF">&#39;mimetype&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&#39;audio/mp3&#39;</span><span style="color: #C9D1D9">}</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram.transcription.prerecorded(source, {</span><span style="color: #A5D6FF">&quot;detect_language&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">True</span><span style="color: #C9D1D9">})</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0detected_language </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> transcript, detected_language</span></span></code></pre>\n<p>At the top of the file, I created a Python dictionary that acts as a lookup. This dictionary contains the language code as a key and the name of the customer support agent that speaks that language as the value.\xA0</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">customer_service_reps </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;fr&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Sally&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;es&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Pete&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;de&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Ann&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">                       }</span></span></code></pre>\n<p>I created a POST route and prompted the user to press either 1,2, or 3, each for different languages. For example, if a customer presses 2 when they call in, they\u2019ll get routed to the agent who speaks French.</p>\n<p>Whichever option is selected will invoke a private function, as noted in the <code is:raw>menu</code> function. When option 2 is pressed, the function  <code is:raw>_french_recording</code> is called.\xA0</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/welcome&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">welcome</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> response.gather(</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">num_digits</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">action</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">url_for(</span><span style="color: #A5D6FF">&#39;menu&#39;</span><span style="color: #C9D1D9">), </span><span style="color: #FFA657">method</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;POST&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> g:</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0g.say(</span><span style="color: #FFA657">message</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;Thanks for calling the Deepgram Speech-to-Text Python SDK. &quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Please press 1 for Spanish&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Press 2 for French&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Press 3 for German&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">loop</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">3</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/menu&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">menu</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0selected_option </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> request.form[</span><span style="color: #A5D6FF">&#39;Digits&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0option_actions </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;1&#39;</span><span style="color: #C9D1D9">: _spanish_recording,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&#39;2&#39;</span><span style="color: #C9D1D9">: _french_recording,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&#39;3&#39;</span><span style="color: #C9D1D9">: _german_recording}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> selected_option </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> option_actions:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> option_actions[selected_option](response)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> _redirect_welcome()</span></span></code></pre>\n<p>I created a private function for each spoken language, and when they\u2019re selected, that method will get called, and a phone response will say the message. For French, the automated IVR response will be `\u201DThis is the French response and Sally will help you.\u201D`</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_spanish_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/spanish-recording.mp3&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0spanish_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[spanish_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the Spanish response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_french_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/french-recording.mp3&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0french_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[french_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the French response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_german_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/german-recording.mp3&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0german_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[german_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the German response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span></code></pre>\n<p>I also created a <strong>templates</strong> folder in the main Python Flask project directory with a blank <strong>index.html</strong> file. We don\u2019t need anything in this file but feel free to add any HTML or Jinja.</p>\n<p>To run the application, I fired up two terminals simultaneously in Visual Studio Code, one to run my Flask application and another for ngrok. Both are important, and you\u2019ll need the ngrok url to add to your Twilio dashboard.</p>\n<p>To run the Flask application, I used this command from the terminal:</p>\n<p><code is:raw>FLASK_APP=views.py FLASK_DEBUG=1 flask run</code> allows my application to run in debug mode, so when changes are made to my code, there\u2019s no need for me to keep stopping and starting the terminal.\xA0</p>\n<p>In the other terminal window, I ran this command:</p>\n<p><code is:raw>ngrok http 5000</code></p>\n<p>Make sure to grab the ngrok url, which is different from the one in the Flask terminal. It looks something like this: <a href="https://3afb-104-6-9-133.ngrok.io"><code is:raw>https://3afb-104-6-9-133.ngrok.io</code></a>.</p>\n<p>In the Twilio dashboard, click on <code is:raw>Manage -&gt; Active Numbers</code>, then click on the purchased number. Put the ngrok url in the webhook with the following endpoint: <a href="https://3afb-104-6-9-133.ngrok.io/ivr/welcome"><code is:raw>https://3afb-104-6-9-133.ngrok.io/ivr/welcome</code></a>, which is the unique ngrok url followed by the Flask route in the Python application <code is:raw>/ivr/welcome</code>.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/ivr-call-agent-system-with-twilio-and-python_fqs5mc.png" alt=" ivr-call-agent-system-with-twilio-and-python" title="IVR Call Agent System with Twilio and Python"></p>\n<p>Now, dial the Twilio number and follow the prompts, and you\u2019ll get routed to the best customer agent to handle your call based on speech-to-text language detection!</p>\n<h2 id="conclusion">Conclusion</h2>\n<p>Please let me know if you followed this tutorial or built your project using Python with Deepgram\u2019s language detection. Please hop over to our <a href="https://github.com/orgs/deepgram/discussions">Deepgram Github Discussions</a> and send us a message.</p>\n<h2 id="the-python-flask-code-for-the-ivr-speech-to-text-application">The Python Flask Code for the IVR Speech-To-Text Application</h2>\n<p><strong><br>\nMy project structure</strong>:</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/flask-python-ivr-twilio-project-structure_o7pgkw.png" alt="flask-python-ivr-twilio-project-structure." title="Flask Python IVR Twilio Project Structure"></p>\n<p><strong>views.py</strong></p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> deepgram </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> Deepgram</span></span>\n<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> flask </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> (</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0Flask,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0render_template,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0request,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0url_for,</span></span>\n<span class="line"><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> twilio.twiml.voice_response </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> VoiceResponse</span></span>\n<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> view_helpers </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> twiml</span></span>\n<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> dotenv </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> load_dotenv</span></span>\n<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> asyncio, json, os</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">app </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Flask(</span><span style="color: #79C0FF">__name__</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">customer_service_reps </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;fr&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Sally&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;es&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Pete&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;de&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Ann&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">deepgram_transcribe</span><span style="color: #C9D1D9">(PATH_TO_FILE):</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Initializes the Deepgram SDK</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0deepgram </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Deepgram(os.getenv(</span><span style="color: #A5D6FF">&quot;DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9">))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Open the audio file</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">open</span><span style="color: #C9D1D9">(</span><span style="color: #79C0FF">PATH_TO_FILE</span><span style="color: #C9D1D9">, </span><span style="color: #A5D6FF">&#39;rb&#39;</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> audio:</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #8B949E"># ...or replace mimetype as appropriate</span></span>\n<span class="line"><span style="color: #C9D1D9">      source </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;buffer&#39;</span><span style="color: #C9D1D9">: audio, </span><span style="color: #A5D6FF">&#39;mimetype&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&#39;audio/mp3&#39;</span><span style="color: #C9D1D9">}</span></span>\n<span class="line"><span style="color: #C9D1D9">      response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram.transcription.prerecorded(source, {</span><span style="color: #A5D6FF">&quot;detect_language&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">True</span><span style="color: #C9D1D9">})</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0detected_language </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> transcript, detected_language</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">home</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> render_template(</span><span style="color: #A5D6FF">&#39;index.html&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/welcome&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">welcome</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> response.gather(</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">num_digits</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">action</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">url_for(</span><span style="color: #A5D6FF">&#39;menu&#39;</span><span style="color: #C9D1D9">), </span><span style="color: #FFA657">method</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;POST&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> g:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0g.say(</span><span style="color: #FFA657">message</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;Thanks for calling the Deepgram Speech-to-Text Python SDK. &quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Please press 1 for Spanish&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Press 2 for French&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Press 3 for German&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">loop</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">3</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/menu&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">menu</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0selected_option </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> request.form[</span><span style="color: #A5D6FF">&#39;Digits&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0option_actions </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;1&#39;</span><span style="color: #C9D1D9">: _spanish_recording,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&#39;2&#39;</span><span style="color: #C9D1D9">: _french_recording,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&#39;3&#39;</span><span style="color: #C9D1D9">: _german_recording}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> selected_option </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> option_actions:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> option_actions[selected_option](response)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> _redirect_welcome()</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_spanish_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/spanish-recording.mp3&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0spanish_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[spanish_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the Spanish response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_french_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/french-recording.mp3&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0french_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[french_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the French response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_german_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/german-recording.mp3&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0german_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[german_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the German response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_redirect_welcome</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #A5D6FF">&quot;Returning to the main menu&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.redirect(url_for(</span><span style="color: #A5D6FF">&#39;welcome&#39;</span><span style="color: #C9D1D9">))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span></code></pre>\n<p><strong>view_helpers.py</strong></p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> flask</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">twiml</span><span style="color: #C9D1D9">(resp):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0resp </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> flask.Response(</span><span style="color: #79C0FF">str</span><span style="color: #C9D1D9">(resp))</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0resp.headers[</span><span style="color: #A5D6FF">&#39;Content-Type&#39;</span><span style="color: #C9D1D9">] </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;text/xml&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> resp</span></span></code></pre>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/identifying-the-best-agent-to-respond-in-your-ivr-system/index.md" };
function rawContent() {
  return `
What would you say if I told you that you could detect spoken conversational language using AI in a speech-to-text transcript with Python?\xA0

Would you spit your beer out?

Ok, maybe your water, but the point is I built a cool conversational AI project with an Interactive Voice Response (IVR) using Twilio, a speech recognition provider, and Python. The best part about it is that it was reasonably easy to build using Flask 2.0. The purpose was to identify the best virtual customer support agent to respond to a call.

I would love to walk you through the project, but if you want to skip ahead to the code, scroll to the bottom of this blog post.

## Create Voice Recognition Phone IVR With Speech Recognition Using Twilio and Python

This project was my first attempt at building an IVR with AI in Python, so I researched how these interactive voice response systems work. Simply put, you can think of them as a tree with many branches. They allow you to interact with a system, like an automated phone customer support agent, before being connected or transferred to a representative.

For example, you may be prompted to press \u201C2\u201D on your phone to connect to a department and then \u201C1\u201D to speak to a live customer support agent. I\u2019m sure we\u2019ve all been in that situation.

Twilio is the best choice for building the IVR because of its easy-to-navigate dashboard and simplicity. Also, since I\u2019m using Python, they have tons of tutorials on implementing IVR systems like [the one in Flask I\u2019m using for this tutorial](https://www.twilio.com/docs/voice/tutorials/build-interactive-voice-response-ivr-phone-tree/python).\xA0

I also needed a speech-to-text API and leveraged Deepgram. We have a [Python SDK](https://github.com/deepgram/python-sdk) I tapped into that made it super quick and easy to get up and running with the voice recognition transcription.\xA0

Deepgram also has language detection with prerecorded audio in which you can detect over 30 [supported languages](https://developers.deepgram.com/documentation/features/language/) like Hindi, Spanish, and Ukrainian, to name a few.\xA0

Let\u2019s get to the meat of the project: the code.\xA0

## Code Breakdown for Creating IVR Speech-to-Text With Language Detection Using Python

Imagine you had to build a Python application that detects different conversational languages. It would help if you rerouted phone calls from customers using an IVR system to the appropriate virtual customer agent who speaks their language.

The following Python code breakdown demonstrates how to do so. There are just a few things I had to set up before the coding started. It\u2019s painless, I promise.\xA0\xA0

1.  Grab a [Deepgram API Key](https://console.deepgram.com/signup?jump=keys). I needed this to tap into the speech-to-text Python SDK.\xA0
2.  Create a Twilio account and voice phone number [here](https://www.twilio.com/login?g=%2Fconsole%2Fphone-numbers%2Fincoming%3F\\&t=98a31204d675661e83d6f3d24078fc1b9f3d6c8f85f0695f6c24ccb513fd05cf). This allowed me to make an outgoing call and navigate the IVR with dial prompts.\xA0
3.  Install [ngrok](https://ngrok.com/) to test my webhooks locally.\xA0

Next, I made a new directory to hold all my Python files and activated a [virtual environment](https://blog.deepgram.com/python-virtual-environments/) to \`pip install\` all of my Python packages.

These are the packages I installed:

    pip install Flask
    pip install \u2018flask[async]\u2019
    pip install Twilio
    pip install deepgram-sdk
    pip install python-dotenv

After creating my directory, I downloaded three audio files with different spoken languages from [this website](https://www.audio-lingua.eu/?lang=en) and added them to my project in a folder called **languages**.

I created a file called **views.py** that contains most of my Flask 2.0 Python code. You\u2019ll see the entirety of this code at the bottom of this post, but I\u2019ll walk through the most critical parts of it.

This code is where the Deepgram Python speech-to-text transcription magic happens. I\u2019m transcribing the audio MP3 file and returning the transcript and detected language. The API detected the conversational language and provided a language code like \`es\` for Spanish.\xA0

\`\`\`python
async def deepgram_transcribe(PATH_TO_FILE):

  # Initializes the Deepgram SDK
\xA0\xA0\xA0deepgram = Deepgram(os.getenv("DEEPGRAM_API_KEY"))

  # Open the audio file
\xA0\xA0\xA0with open(PATH_TO_FILE, 'rb') as audio:

      # ...or replace mimetype as appropriate
\xA0\xA0\xA0\xA0\xA0\xA0\xA0source = {'buffer': audio, 'mimetype': 'audio/mp3'}
\xA0\xA0\xA0\xA0\xA0\xA0\xA0response = await deepgram.transcription.prerecorded(source, {"detect_language": True})


\xA0\xA0\xA0\xA0\xA0\xA0\xA0if 'transcript' in response['results']['channels'][0]['alternatives'][0]:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0transcript = response['results']['channels'][0]['alternatives'][0]['transcript']


\xA0\xA0\xA0\xA0\xA0\xA0\xA0if 'detected_language' in response['results']['channels'][0]:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0detected_language = response['results']['channels'][0]['detected_language']

\xA0\xA0
\xA0\xA0\xA0return transcript, detected_language
\`\`\`

At the top of the file, I created a Python dictionary that acts as a lookup. This dictionary contains the language code as a key and the name of the customer support agent that speaks that language as the value.\xA0

\`\`\`python
customer_service_reps = {
                           "fr": "Sally",
                           "es": "Pete",
                           "de": "Ann"
                       }
\`\`\`

I created a POST route and prompted the user to press either 1,2, or 3, each for different languages. For example, if a customer presses 2 when they call in, they\u2019ll get routed to the agent who speaks French.

Whichever option is selected will invoke a private function, as noted in the \`menu\` function. When option 2 is pressed, the function  \`_french_recording\` is called.\xA0

\`\`\`python
@app.route('/ivr/welcome', methods=['POST'])
def welcome():
\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0with response.gather(
\xA0\xA0\xA0\xA0\xA0\xA0\xA0num_digits=1, action=url_for('menu'), method="POST"
\xA0\xA0\xA0) as g:

\xA0\xA0\xA0\xA0\xA0\xA0\xA0g.say(message="Thanks for calling the Deepgram Speech-to-Text Python SDK. " +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Please press 1 for Spanish" +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Press 2 for French" +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Press 3 for German", loop=3)


\xA0\xA0\xA0return twiml(response)


@app.route('/ivr/menu', methods=['POST'])
async def menu():
\xA0\xA0\xA0selected_option = request.form['Digits']
\xA0\xA0\xA0option_actions = {'1': _spanish_recording,
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0'2': _french_recording,
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0'3': _german_recording}


\xA0\xA0\xA0if selected_option in option_actions:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0\xA0\xA0\xA0\xA0await option_actions[selected_option](response)

\xA0\xA0\xA0\xA0\xA0\xA0\xA0return twiml(response)


\xA0\xA0\xA0return _redirect_welcome()
\`\`\`

I created a private function for each spoken language, and when they\u2019re selected, that method will get called, and a phone response will say the message. For French, the automated IVR response will be \\\`\u201DThis is the French response and Sally will help you.\u201D\\\`

\`\`\`python
async def _spanish_recording(response):
\xA0\xA0\xA0recording = "languages/spanish-recording.mp3"
\xA0\xA0\xA0spanish_transcript = await deepgram_transcribe(recording)

\xA0\xA0\xA0representative = customer_service_reps[spanish_transcript[1]]


\xA0\xA0\xA0response.say(f"This is the Spanish response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")

\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response



async def _french_recording(response):

\xA0\xA0\xA0recording = "languages/french-recording.mp3"

\xA0\xA0\xA0french_transcript = await deepgram_transcribe(recording)



\xA0\xA0\xA0representative = customer_service_reps[french_transcript[1]]

\xA0\xA0\xA0response.say(f"This is the French response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")


\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response


async def _german_recording(response):
\xA0\xA0\xA0recording = "languages/german-recording.mp3"

\xA0\xA0\xA0german_transcript = await deepgram_transcribe(recording)



\xA0\xA0\xA0representative = customer_service_reps[german_transcript[1]]



\xA0\xA0\xA0response.say(f"This is the German response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")


\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response
\`\`\`

I also created a **templates** folder in the main Python Flask project directory with a blank **index.html** file. We don\u2019t need anything in this file but feel free to add any HTML or Jinja.

To run the application, I fired up two terminals simultaneously in Visual Studio Code, one to run my Flask application and another for ngrok. Both are important, and you\u2019ll need the ngrok url to add to your Twilio dashboard.

To run the Flask application, I used this command from the terminal:

\`FLASK_APP=views.py FLASK_DEBUG=1 flask run\` allows my application to run in debug mode, so when changes are made to my code, there\u2019s no need for me to keep stopping and starting the terminal.\xA0

In the other terminal window, I ran this command:

\`ngrok http 5000\`

Make sure to grab the ngrok url, which is different from the one in the Flask terminal. It looks something like this: [\`https://3afb-104-6-9-133.ngrok.io\`](https://3afb-104-6-9-133.ngrok.io).

In the Twilio dashboard, click on \`Manage -> Active Numbers\`, then click on the purchased number. Put the ngrok url in the webhook with the following endpoint: [\`https://3afb-104-6-9-133.ngrok.io/ivr/welcome\`](https://3afb-104-6-9-133.ngrok.io/ivr/welcome), which is the unique ngrok url followed by the Flask route in the Python application \`/ivr/welcome\`.

![ ivr-call-agent-system-with-twilio-and-python](https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/ivr-call-agent-system-with-twilio-and-python_fqs5mc.png "IVR Call Agent System with Twilio and Python")

Now, dial the Twilio number and follow the prompts, and you\u2019ll get routed to the best customer agent to handle your call based on speech-to-text language detection!

## Conclusion

Please let me know if you followed this tutorial or built your project using Python with Deepgram\u2019s language detection. Please hop over to our [Deepgram Github Discussions](https://github.com/orgs/deepgram/discussions) and send us a message.

## The Python Flask Code for the IVR Speech-To-Text Application

**\\
My project structure**:

![flask-python-ivr-twilio-project-structure.](https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/flask-python-ivr-twilio-project-structure_o7pgkw.png "Flask Python IVR Twilio Project Structure")

**views.py**

\`\`\`python
from deepgram import Deepgram
from flask import (
\xA0\xA0\xA0Flask,
\xA0\xA0\xA0render_template,
\xA0\xA0\xA0request,
\xA0\xA0\xA0url_for,
)

from twilio.twiml.voice_response import VoiceResponse
from view_helpers import twiml
from dotenv import load_dotenv
import asyncio, json, os

app = Flask(__name__)



customer_service_reps = {

\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"fr": "Sally",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"es": "Pete",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"de": "Ann"

\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}



async def deepgram_transcribe(PATH_TO_FILE):
  # Initializes the Deepgram SDK
\xA0\xA0\xA0deepgram = Deepgram(os.getenv("DEEPGRAM_API_KEY"))

  # Open the audio file
\xA0\xA0\xA0with open(PATH_TO_FILE, 'rb') as audio:
      # ...or replace mimetype as appropriate
      source = {'buffer': audio, 'mimetype': 'audio/mp3'}
      response = await deepgram.transcription.prerecorded(source, {"detect_language": True})

\xA0\xA0\xA0\xA0\xA0\xA0\xA0if 'transcript' in response['results']['channels'][0]['alternatives'][0]:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0transcript = response['results']['channels'][0]['alternatives'][0]['transcript']


\xA0\xA0\xA0\xA0\xA0\xA0\xA0if 'detected_language' in response['results']['channels'][0]:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0detected_language = response['results']['channels'][0]['detected_language']

\xA0\xA0
\xA0\xA0\xA0return transcript, detected_language



@app.route('/')
@app.route('/ivr')
def home():
\xA0\xA0\xA0return render_template('index.html')


@app.route('/ivr/welcome', methods=['POST'])
def welcome():
\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0with response.gather(
\xA0\xA0\xA0\xA0\xA0\xA0\xA0num_digits=1, action=url_for('menu'), method="POST"
\xA0\xA0\xA0) as g:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0g.say(message="Thanks for calling the Deepgram Speech-to-Text Python SDK. " +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Please press 1 for Spanish" +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Press 2 for French" +
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"Press 3 for German", loop=3)


\xA0\xA0\xA0return twiml(response)


@app.route('/ivr/menu', methods=['POST'])
async def menu():
\xA0\xA0\xA0selected_option = request.form['Digits']
\xA0\xA0\xA0option_actions = {'1': _spanish_recording,
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0'2': _french_recording,
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0'3': _german_recording}


\xA0\xA0\xA0if selected_option in option_actions:
\xA0\xA0\xA0\xA0\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0\xA0\xA0\xA0\xA0await option_actions[selected_option](response)

\xA0\xA0\xA0\xA0\xA0\xA0\xA0return twiml(response)


\xA0\xA0\xA0return _redirect_welcome()



async def _spanish_recording(response):
\xA0\xA0\xA0recording = "languages/spanish-recording.mp3"
\xA0\xA0\xA0spanish_transcript = await deepgram_transcribe(recording)

\xA0\xA0\xA0representative = customer_service_reps[spanish_transcript[1]]

\xA0\xA0\xA0response.say(f"This is the Spanish response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")

\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response


async def _french_recording(response):
\xA0\xA0\xA0recording = "languages/french-recording.mp3"
\xA0\xA0\xA0french_transcript = await deepgram_transcribe(recording)

\xA0\xA0\xA0representative = customer_service_reps[french_transcript[1]]

\xA0\xA0\xA0response.say(f"This is the French response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")


\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response



async def _german_recording(response):
\xA0\xA0\xA0recording = "languages/german-recording.mp3"
\xA0\xA0\xA0german_transcript = await deepgram_transcribe(recording)



\xA0\xA0\xA0representative = customer_service_reps[german_transcript[1]]



\xA0\xA0\xA0response.say(f"This is the German response and {representative} will help you.",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0voice="alice", language="en-US")


\xA0\xA0\xA0response.hangup()

\xA0\xA0\xA0return response


def _redirect_welcome():
\xA0\xA0\xA0response = VoiceResponse()
\xA0\xA0\xA0response.say("Returning to the main menu", voice="alice", language="en-US")
\xA0\xA0\xA0response.redirect(url_for('welcome'))

\xA0\xA0\xA0return twiml(response)
\`\`\`

**view\\_helpers.py**

\`\`\`python
import flask

def twiml(resp):
\xA0\xA0\xA0resp = flask.Response(str(resp))
\xA0\xA0\xA0resp.headers['Content-Type'] = 'text/xml'

\xA0\xA0\xA0return resp
\`\`\`

`;
}
function compiledContent() {
  return '<p>What would you say if I told you that you could detect spoken conversational language using AI in a speech-to-text transcript with Python?\xA0</p>\n<p>Would you spit your beer out?</p>\n<p>Ok, maybe your water, but the point is I built a cool conversational AI project with an Interactive Voice Response (IVR) using Twilio, a speech recognition provider, and Python. The best part about it is that it was reasonably easy to build using Flask 2.0. The purpose was to identify the best virtual customer support agent to respond to a call.</p>\n<p>I would love to walk you through the project, but if you want to skip ahead to the code, scroll to the bottom of this blog post.</p>\n<h2 id="create-voice-recognition-phone-ivr-with-speech-recognition-using-twilio-and-python">Create Voice Recognition Phone IVR With Speech Recognition Using Twilio and Python</h2>\n<p>This project was my first attempt at building an IVR with AI in Python, so I researched how these interactive voice response systems work. Simply put, you can think of them as a tree with many branches. They allow you to interact with a system, like an automated phone customer support agent, before being connected or transferred to a representative.</p>\n<p>For example, you may be prompted to press \u201C2\u201D on your phone to connect to a department and then \u201C1\u201D to speak to a live customer support agent. I\u2019m sure we\u2019ve all been in that situation.</p>\n<p>Twilio is the best choice for building the IVR because of its easy-to-navigate dashboard and simplicity. Also, since I\u2019m using Python, they have tons of tutorials on implementing IVR systems like <a href="https://www.twilio.com/docs/voice/tutorials/build-interactive-voice-response-ivr-phone-tree/python">the one in Flask I\u2019m using for this tutorial</a>.\xA0</p>\n<p>I also needed a speech-to-text API and leveraged Deepgram. We have a <a href="https://github.com/deepgram/python-sdk">Python SDK</a> I tapped into that made it super quick and easy to get up and running with the voice recognition transcription.\xA0</p>\n<p>Deepgram also has language detection with prerecorded audio in which you can detect over 30 <a href="https://developers.deepgram.com/documentation/features/language/">supported languages</a> like Hindi, Spanish, and Ukrainian, to name a few.\xA0</p>\n<p>Let\u2019s get to the meat of the project: the code.\xA0</p>\n<h2 id="code-breakdown-for-creating-ivr-speech-to-text-with-language-detection-using-python">Code Breakdown for Creating IVR Speech-to-Text With Language Detection Using Python</h2>\n<p>Imagine you had to build a Python application that detects different conversational languages. It would help if you rerouted phone calls from customers using an IVR system to the appropriate virtual customer agent who speaks their language.</p>\n<p>The following Python code breakdown demonstrates how to do so. There are just a few things I had to set up before the coding started. It\u2019s painless, I promise.\xA0\xA0</p>\n<ol>\n<li>Grab a <a href="https://console.deepgram.com/signup?jump=keys">Deepgram API Key</a>. I needed this to tap into the speech-to-text Python SDK.\xA0</li>\n<li>Create a Twilio account and voice phone number <a href="https://www.twilio.com/login?g=%2Fconsole%2Fphone-numbers%2Fincoming%3F&#x26;t=98a31204d675661e83d6f3d24078fc1b9f3d6c8f85f0695f6c24ccb513fd05cf">here</a>. This allowed me to make an outgoing call and navigate the IVR with dial prompts.\xA0</li>\n<li>Install <a href="https://ngrok.com/">ngrok</a> to test my webhooks locally.\xA0</li>\n</ol>\n<p>Next, I made a new directory to hold all my Python files and activated a <a href="https://blog.deepgram.com/python-virtual-environments/">virtual environment</a> to <code is:raw>pip install</code> all of my Python packages.</p>\n<p>These are the packages I installed:</p>\n<p>pip install Flask\npip install \u2018flask[async]\u2019\npip install Twilio\npip install deepgram-sdk\npip install python-dotenv</p>\n<p>After creating my directory, I downloaded three audio files with different spoken languages from <a href="https://www.audio-lingua.eu/?lang=en">this website</a> and added them to my project in a folder called <strong>languages</strong>.</p>\n<p>I created a file called <strong>views.py</strong> that contains most of my Flask 2.0 Python code. You\u2019ll see the entirety of this code at the bottom of this post, but I\u2019ll walk through the most critical parts of it.</p>\n<p>This code is where the Deepgram Python speech-to-text transcription magic happens. I\u2019m transcribing the audio MP3 file and returning the transcript and detected language. The API detected the conversational language and provided a language code like <code is:raw>es</code> for Spanish.\xA0</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">deepgram_transcribe</span><span style="color: #C9D1D9">(PATH_TO_FILE):</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Initializes the Deepgram SDK</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0deepgram </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Deepgram(os.getenv(</span><span style="color: #A5D6FF">&quot;DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9">))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Open the audio file</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">open</span><span style="color: #C9D1D9">(</span><span style="color: #79C0FF">PATH_TO_FILE</span><span style="color: #C9D1D9">, </span><span style="color: #A5D6FF">&#39;rb&#39;</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> audio:</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #8B949E"># ...or replace mimetype as appropriate</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0source </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;buffer&#39;</span><span style="color: #C9D1D9">: audio, </span><span style="color: #A5D6FF">&#39;mimetype&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&#39;audio/mp3&#39;</span><span style="color: #C9D1D9">}</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram.transcription.prerecorded(source, {</span><span style="color: #A5D6FF">&quot;detect_language&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">True</span><span style="color: #C9D1D9">})</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0detected_language </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> transcript, detected_language</span></span></code></pre>\n<p>At the top of the file, I created a Python dictionary that acts as a lookup. This dictionary contains the language code as a key and the name of the customer support agent that speaks that language as the value.\xA0</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">customer_service_reps </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;fr&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Sally&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;es&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Pete&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;de&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Ann&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">                       }</span></span></code></pre>\n<p>I created a POST route and prompted the user to press either 1,2, or 3, each for different languages. For example, if a customer presses 2 when they call in, they\u2019ll get routed to the agent who speaks French.</p>\n<p>Whichever option is selected will invoke a private function, as noted in the <code is:raw>menu</code> function. When option 2 is pressed, the function  <code is:raw>_french_recording</code> is called.\xA0</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/welcome&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">welcome</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> response.gather(</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">num_digits</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">action</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">url_for(</span><span style="color: #A5D6FF">&#39;menu&#39;</span><span style="color: #C9D1D9">), </span><span style="color: #FFA657">method</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;POST&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> g:</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0g.say(</span><span style="color: #FFA657">message</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;Thanks for calling the Deepgram Speech-to-Text Python SDK. &quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Please press 1 for Spanish&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Press 2 for French&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Press 3 for German&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">loop</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">3</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/menu&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">menu</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0selected_option </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> request.form[</span><span style="color: #A5D6FF">&#39;Digits&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0option_actions </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;1&#39;</span><span style="color: #C9D1D9">: _spanish_recording,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&#39;2&#39;</span><span style="color: #C9D1D9">: _french_recording,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&#39;3&#39;</span><span style="color: #C9D1D9">: _german_recording}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> selected_option </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> option_actions:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> option_actions[selected_option](response)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> _redirect_welcome()</span></span></code></pre>\n<p>I created a private function for each spoken language, and when they\u2019re selected, that method will get called, and a phone response will say the message. For French, the automated IVR response will be `\u201DThis is the French response and Sally will help you.\u201D`</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_spanish_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/spanish-recording.mp3&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0spanish_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[spanish_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the Spanish response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_french_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/french-recording.mp3&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0french_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[french_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the French response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_german_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/german-recording.mp3&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0german_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[german_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the German response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span></code></pre>\n<p>I also created a <strong>templates</strong> folder in the main Python Flask project directory with a blank <strong>index.html</strong> file. We don\u2019t need anything in this file but feel free to add any HTML or Jinja.</p>\n<p>To run the application, I fired up two terminals simultaneously in Visual Studio Code, one to run my Flask application and another for ngrok. Both are important, and you\u2019ll need the ngrok url to add to your Twilio dashboard.</p>\n<p>To run the Flask application, I used this command from the terminal:</p>\n<p><code is:raw>FLASK_APP=views.py FLASK_DEBUG=1 flask run</code> allows my application to run in debug mode, so when changes are made to my code, there\u2019s no need for me to keep stopping and starting the terminal.\xA0</p>\n<p>In the other terminal window, I ran this command:</p>\n<p><code is:raw>ngrok http 5000</code></p>\n<p>Make sure to grab the ngrok url, which is different from the one in the Flask terminal. It looks something like this: <a href="https://3afb-104-6-9-133.ngrok.io"><code is:raw>https://3afb-104-6-9-133.ngrok.io</code></a>.</p>\n<p>In the Twilio dashboard, click on <code is:raw>Manage -&gt; Active Numbers</code>, then click on the purchased number. Put the ngrok url in the webhook with the following endpoint: <a href="https://3afb-104-6-9-133.ngrok.io/ivr/welcome"><code is:raw>https://3afb-104-6-9-133.ngrok.io/ivr/welcome</code></a>, which is the unique ngrok url followed by the Flask route in the Python application <code is:raw>/ivr/welcome</code>.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/ivr-call-agent-system-with-twilio-and-python_fqs5mc.png" alt=" ivr-call-agent-system-with-twilio-and-python" title="IVR Call Agent System with Twilio and Python"></p>\n<p>Now, dial the Twilio number and follow the prompts, and you\u2019ll get routed to the best customer agent to handle your call based on speech-to-text language detection!</p>\n<h2 id="conclusion">Conclusion</h2>\n<p>Please let me know if you followed this tutorial or built your project using Python with Deepgram\u2019s language detection. Please hop over to our <a href="https://github.com/orgs/deepgram/discussions">Deepgram Github Discussions</a> and send us a message.</p>\n<h2 id="the-python-flask-code-for-the-ivr-speech-to-text-application">The Python Flask Code for the IVR Speech-To-Text Application</h2>\n<p><strong><br>\nMy project structure</strong>:</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/flask-python-ivr-twilio-project-structure_o7pgkw.png" alt="flask-python-ivr-twilio-project-structure." title="Flask Python IVR Twilio Project Structure"></p>\n<p><strong>views.py</strong></p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> deepgram </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> Deepgram</span></span>\n<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> flask </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> (</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0Flask,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0render_template,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0request,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0url_for,</span></span>\n<span class="line"><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> twilio.twiml.voice_response </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> VoiceResponse</span></span>\n<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> view_helpers </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> twiml</span></span>\n<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> dotenv </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> load_dotenv</span></span>\n<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> asyncio, json, os</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">app </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Flask(</span><span style="color: #79C0FF">__name__</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">customer_service_reps </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;fr&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Sally&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;es&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Pete&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;de&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Ann&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">deepgram_transcribe</span><span style="color: #C9D1D9">(PATH_TO_FILE):</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Initializes the Deepgram SDK</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0deepgram </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Deepgram(os.getenv(</span><span style="color: #A5D6FF">&quot;DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9">))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Open the audio file</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">open</span><span style="color: #C9D1D9">(</span><span style="color: #79C0FF">PATH_TO_FILE</span><span style="color: #C9D1D9">, </span><span style="color: #A5D6FF">&#39;rb&#39;</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> audio:</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #8B949E"># ...or replace mimetype as appropriate</span></span>\n<span class="line"><span style="color: #C9D1D9">      source </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;buffer&#39;</span><span style="color: #C9D1D9">: audio, </span><span style="color: #A5D6FF">&#39;mimetype&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&#39;audio/mp3&#39;</span><span style="color: #C9D1D9">}</span></span>\n<span class="line"><span style="color: #C9D1D9">      response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram.transcription.prerecorded(source, {</span><span style="color: #A5D6FF">&quot;detect_language&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">True</span><span style="color: #C9D1D9">})</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0detected_language </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> transcript, detected_language</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">home</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> render_template(</span><span style="color: #A5D6FF">&#39;index.html&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/welcome&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">welcome</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> response.gather(</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">num_digits</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">action</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">url_for(</span><span style="color: #A5D6FF">&#39;menu&#39;</span><span style="color: #C9D1D9">), </span><span style="color: #FFA657">method</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;POST&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> g:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0g.say(</span><span style="color: #FFA657">message</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;Thanks for calling the Deepgram Speech-to-Text Python SDK. &quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Please press 1 for Spanish&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Press 2 for French&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&quot;Press 3 for German&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">loop</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">3</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/menu&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">menu</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0selected_option </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> request.form[</span><span style="color: #A5D6FF">&#39;Digits&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0option_actions </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;1&#39;</span><span style="color: #C9D1D9">: _spanish_recording,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&#39;2&#39;</span><span style="color: #C9D1D9">: _french_recording,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #A5D6FF">&#39;3&#39;</span><span style="color: #C9D1D9">: _german_recording}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> selected_option </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> option_actions:</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> option_actions[selected_option](response)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> _redirect_welcome()</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_spanish_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/spanish-recording.mp3&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0spanish_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[spanish_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the Spanish response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_french_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/french-recording.mp3&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0french_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[french_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the French response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_german_recording</span><span style="color: #C9D1D9">(response):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/german-recording.mp3&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0german_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[german_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the German response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.hangup()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_redirect_welcome</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.say(</span><span style="color: #A5D6FF">&quot;Returning to the main menu&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0response.redirect(url_for(</span><span style="color: #A5D6FF">&#39;welcome&#39;</span><span style="color: #C9D1D9">))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span></code></pre>\n<p><strong>view_helpers.py</strong></p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> flask</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">twiml</span><span style="color: #C9D1D9">(resp):</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0resp </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> flask.Response(</span><span style="color: #79C0FF">str</span><span style="color: #C9D1D9">(resp))</span></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0resp.headers[</span><span style="color: #A5D6FF">&#39;Content-Type&#39;</span><span style="color: #C9D1D9">] </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;text/xml&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">\xA0\xA0\xA0</span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> resp</span></span></code></pre>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/identifying-the-best-agent-to-respond-in-your-ivr-system/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>What would you say if I told you that you could detect spoken conversational language using AI in a speech-to-text transcript with Python? </p>
<p>Would you spit your beer out?</p>
<p>Ok, maybe your water, but the point is I built a cool conversational AI project with an Interactive Voice Response (IVR) using Twilio, a speech recognition provider, and Python. The best part about it is that it was reasonably easy to build using Flask 2.0. The purpose was to identify the best virtual customer support agent to respond to a call.</p>
<p>I would love to walk you through the project, but if you want to skip ahead to the code, scroll to the bottom of this blog post.</p>
<h2 id="create-voice-recognition-phone-ivr-with-speech-recognition-using-twilio-and-python">Create Voice Recognition Phone IVR With Speech Recognition Using Twilio and Python</h2>
<p>This project was my first attempt at building an IVR with AI in Python, so I researched how these interactive voice response systems work. Simply put, you can think of them as a tree with many branches. They allow you to interact with a system, like an automated phone customer support agent, before being connected or transferred to a representative.</p>
<p>For example, you may be prompted to press “2” on your phone to connect to a department and then “1” to speak to a live customer support agent. I’m sure we’ve all been in that situation.</p>
<p>Twilio is the best choice for building the IVR because of its easy-to-navigate dashboard and simplicity. Also, since I’m using Python, they have tons of tutorials on implementing IVR systems like <a href="https://www.twilio.com/docs/voice/tutorials/build-interactive-voice-response-ivr-phone-tree/python">the one in Flask I’m using for this tutorial</a>. </p>
<p>I also needed a speech-to-text API and leveraged Deepgram. We have a <a href="https://github.com/deepgram/python-sdk">Python SDK</a> I tapped into that made it super quick and easy to get up and running with the voice recognition transcription. </p>
<p>Deepgram also has language detection with prerecorded audio in which you can detect over 30 <a href="https://developers.deepgram.com/documentation/features/language/">supported languages</a> like Hindi, Spanish, and Ukrainian, to name a few. </p>
<p>Let’s get to the meat of the project: the code. </p>
<h2 id="code-breakdown-for-creating-ivr-speech-to-text-with-language-detection-using-python">Code Breakdown for Creating IVR Speech-to-Text With Language Detection Using Python</h2>
<p>Imagine you had to build a Python application that detects different conversational languages. It would help if you rerouted phone calls from customers using an IVR system to the appropriate virtual customer agent who speaks their language.</p>
<p>The following Python code breakdown demonstrates how to do so. There are just a few things I had to set up before the coding started. It’s painless, I promise.  </p>
<ol>
<li>Grab a <a href="https://console.deepgram.com/signup?jump=keys">Deepgram API Key</a>. I needed this to tap into the speech-to-text Python SDK. </li>
<li>Create a Twilio account and voice phone number <a href="https://www.twilio.com/login?g=%2Fconsole%2Fphone-numbers%2Fincoming%3F&t=98a31204d675661e83d6f3d24078fc1b9f3d6c8f85f0695f6c24ccb513fd05cf">here</a>. This allowed me to make an outgoing call and navigate the IVR with dial prompts. </li>
<li>Install <a href="https://ngrok.com/">ngrok</a> to test my webhooks locally. </li>
</ol>
<p>Next, I made a new directory to hold all my Python files and activated a <a href="https://blog.deepgram.com/python-virtual-environments/">virtual environment</a> to <code>pip install</code> all of my Python packages.</p>
<p>These are the packages I installed:</p>
<p>pip install Flask
pip install ‘flask[async]’
pip install Twilio
pip install deepgram-sdk
pip install python-dotenv</p>
<p>After creating my directory, I downloaded three audio files with different spoken languages from <a href="https://www.audio-lingua.eu/?lang=en">this website</a> and added them to my project in a folder called <strong>languages</strong>.</p>
<p>I created a file called <strong>views.py</strong> that contains most of my Flask 2.0 Python code. You’ll see the entirety of this code at the bottom of this post, but I’ll walk through the most critical parts of it.</p>
<p>This code is where the Deepgram Python speech-to-text transcription magic happens. I’m transcribing the audio MP3 file and returning the transcript and detected language. The API detected the conversational language and provided a language code like <code>es</code> for Spanish. </p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">deepgram_transcribe</span><span style="color: #C9D1D9">(PATH_TO_FILE):</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Initializes the Deepgram SDK</span></span>
<span class="line"><span style="color: #C9D1D9">   deepgram </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Deepgram(os.getenv(</span><span style="color: #A5D6FF">&quot;DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9">))</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Open the audio file</span></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">open</span><span style="color: #C9D1D9">(</span><span style="color: #79C0FF">PATH_TO_FILE</span><span style="color: #C9D1D9">, </span><span style="color: #A5D6FF">&#39;rb&#39;</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> audio:</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #8B949E"># ...or replace mimetype as appropriate</span></span>
<span class="line"><span style="color: #C9D1D9">       source </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;buffer&#39;</span><span style="color: #C9D1D9">: audio, </span><span style="color: #A5D6FF">&#39;mimetype&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&#39;audio/mp3&#39;</span><span style="color: #C9D1D9">}</span></span>
<span class="line"><span style="color: #C9D1D9">       response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram.transcription.prerecorded(source, {</span><span style="color: #A5D6FF">&quot;detect_language&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">True</span><span style="color: #C9D1D9">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">       </span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>
<span class="line"><span style="color: #C9D1D9">           transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">       </span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>
<span class="line"><span style="color: #C9D1D9">           detected_language </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9">]</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  </span></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> transcript, detected_language</span></span></code></pre>
<p>At the top of the file, I created a Python dictionary that acts as a lookup. This dictionary contains the language code as a key and the name of the customer support agent that speaks that language as the value. </p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">customer_service_reps </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;fr&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Sally&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;es&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Pete&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;de&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Ann&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">                       }</span></span></code></pre>
<p>I created a POST route and prompted the user to press either 1,2, or 3, each for different languages. For example, if a customer presses 2 when they call in, they’ll get routed to the agent who speaks French.</p>
<p>Whichever option is selected will invoke a private function, as noted in the <code>menu</code> function. When option 2 is pressed, the function  <code>_french_recording</code> is called. </p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/welcome&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>
<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">welcome</span><span style="color: #C9D1D9">():</span></span>
<span class="line"><span style="color: #C9D1D9">   response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> response.gather(</span></span>
<span class="line"><span style="color: #C9D1D9">       </span><span style="color: #FFA657">num_digits</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">action</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">url_for(</span><span style="color: #A5D6FF">&#39;menu&#39;</span><span style="color: #C9D1D9">), </span><span style="color: #FFA657">method</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;POST&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">   ) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> g:</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">       g.say(</span><span style="color: #FFA657">message</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;Thanks for calling the Deepgram Speech-to-Text Python SDK. &quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>
<span class="line"><span style="color: #C9D1D9">             </span><span style="color: #A5D6FF">&quot;Please press 1 for Spanish&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>
<span class="line"><span style="color: #C9D1D9">             </span><span style="color: #A5D6FF">&quot;Press 2 for French&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>
<span class="line"><span style="color: #C9D1D9">             </span><span style="color: #A5D6FF">&quot;Press 3 for German&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">loop</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">3</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/menu&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>
<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">menu</span><span style="color: #C9D1D9">():</span></span>
<span class="line"><span style="color: #C9D1D9">   selected_option </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> request.form[</span><span style="color: #A5D6FF">&#39;Digits&#39;</span><span style="color: #C9D1D9">]</span></span>
<span class="line"><span style="color: #C9D1D9">   option_actions </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;1&#39;</span><span style="color: #C9D1D9">: _spanish_recording,</span></span>
<span class="line"><span style="color: #C9D1D9">                     </span><span style="color: #A5D6FF">&#39;2&#39;</span><span style="color: #C9D1D9">: _french_recording,</span></span>
<span class="line"><span style="color: #C9D1D9">                     </span><span style="color: #A5D6FF">&#39;3&#39;</span><span style="color: #C9D1D9">: _german_recording}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> selected_option </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> option_actions:</span></span>
<span class="line"><span style="color: #C9D1D9">       response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>
<span class="line"><span style="color: #C9D1D9">       </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> option_actions[selected_option](response)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">       </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> _redirect_welcome()</span></span></code></pre>
<p>I created a private function for each spoken language, and when they’re selected, that method will get called, and a phone response will say the message. For French, the automated IVR response will be \`”This is the French response and Sally will help you.”\`</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_spanish_recording</span><span style="color: #C9D1D9">(response):</span></span>
<span class="line"><span style="color: #C9D1D9">   recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/spanish-recording.mp3&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">   spanish_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[spanish_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the Spanish response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">                </span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   response.hangup()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_french_recording</span><span style="color: #C9D1D9">(response):</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/french-recording.mp3&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   french_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[french_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the French response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">                </span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   response.hangup()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_german_recording</span><span style="color: #C9D1D9">(response):</span></span>
<span class="line"><span style="color: #C9D1D9">   recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/german-recording.mp3&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   german_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[german_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the German response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">                </span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   response.hangup()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span></code></pre>
<p>I also created a <strong>templates</strong> folder in the main Python Flask project directory with a blank <strong>index.html</strong> file. We don’t need anything in this file but feel free to add any HTML or Jinja.</p>
<p>To run the application, I fired up two terminals simultaneously in Visual Studio Code, one to run my Flask application and another for ngrok. Both are important, and you’ll need the ngrok url to add to your Twilio dashboard.</p>
<p>To run the Flask application, I used this command from the terminal:</p>
<p><code>FLASK_APP=views.py FLASK_DEBUG=1 flask run</code> allows my application to run in debug mode, so when changes are made to my code, there’s no need for me to keep stopping and starting the terminal. </p>
<p>In the other terminal window, I ran this command:</p>
<p><code>ngrok http 5000</code></p>
<p>Make sure to grab the ngrok url, which is different from the one in the Flask terminal. It looks something like this: <a href="https://3afb-104-6-9-133.ngrok.io"><code>https://3afb-104-6-9-133.ngrok.io</code></a>.</p>
<p>In the Twilio dashboard, click on <code>Manage -&gt; Active Numbers</code>, then click on the purchased number. Put the ngrok url in the webhook with the following endpoint: <a href="https://3afb-104-6-9-133.ngrok.io/ivr/welcome"><code>https://3afb-104-6-9-133.ngrok.io/ivr/welcome</code></a>, which is the unique ngrok url followed by the Flask route in the Python application <code>/ivr/welcome</code>.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/ivr-call-agent-system-with-twilio-and-python_fqs5mc.png" alt=" ivr-call-agent-system-with-twilio-and-python" title="IVR Call Agent System with Twilio and Python"></p>
<p>Now, dial the Twilio number and follow the prompts, and you’ll get routed to the best customer agent to handle your call based on speech-to-text language detection!</p>
<h2 id="conclusion">Conclusion</h2>
<p>Please let me know if you followed this tutorial or built your project using Python with Deepgram’s language detection. Please hop over to our <a href="https://github.com/orgs/deepgram/discussions">Deepgram Github Discussions</a> and send us a message.</p>
<h2 id="the-python-flask-code-for-the-ivr-speech-to-text-application">The Python Flask Code for the IVR Speech-To-Text Application</h2>
<p><strong><br>
My project structure</strong>:</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1663955729/blog/identifying-best-agent-to-respond-ivr-system-python/flask-python-ivr-twilio-project-structure_o7pgkw.png" alt="flask-python-ivr-twilio-project-structure." title="Flask Python IVR Twilio Project Structure"></p>
<p><strong>views.py</strong></p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> deepgram </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> Deepgram</span></span>
<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> flask </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> (</span></span>
<span class="line"><span style="color: #C9D1D9">   Flask,</span></span>
<span class="line"><span style="color: #C9D1D9">   render_template,</span></span>
<span class="line"><span style="color: #C9D1D9">   request,</span></span>
<span class="line"><span style="color: #C9D1D9">   url_for,</span></span>
<span class="line"><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> twilio.twiml.voice_response </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> VoiceResponse</span></span>
<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> view_helpers </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> twiml</span></span>
<span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> dotenv </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> load_dotenv</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> asyncio, json, os</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">app </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Flask(</span><span style="color: #79C0FF">__name__</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">customer_service_reps </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;fr&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Sally&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;es&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Pete&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">                           </span><span style="color: #A5D6FF">&quot;de&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Ann&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">                       }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">deepgram_transcribe</span><span style="color: #C9D1D9">(PATH_TO_FILE):</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Initializes the Deepgram SDK</span></span>
<span class="line"><span style="color: #C9D1D9">   deepgram </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Deepgram(os.getenv(</span><span style="color: #A5D6FF">&quot;DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9">))</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Open the audio file</span></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">open</span><span style="color: #C9D1D9">(</span><span style="color: #79C0FF">PATH_TO_FILE</span><span style="color: #C9D1D9">, </span><span style="color: #A5D6FF">&#39;rb&#39;</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> audio:</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #8B949E"># ...or replace mimetype as appropriate</span></span>
<span class="line"><span style="color: #C9D1D9">      source </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;buffer&#39;</span><span style="color: #C9D1D9">: audio, </span><span style="color: #A5D6FF">&#39;mimetype&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&#39;audio/mp3&#39;</span><span style="color: #C9D1D9">}</span></span>
<span class="line"><span style="color: #C9D1D9">      response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram.transcription.prerecorded(source, {</span><span style="color: #A5D6FF">&quot;detect_language&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">True</span><span style="color: #C9D1D9">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">       </span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>
<span class="line"><span style="color: #C9D1D9">           transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;alternatives&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;transcript&#39;</span><span style="color: #C9D1D9">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">       </span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">]:</span></span>
<span class="line"><span style="color: #C9D1D9">           detected_language </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> response[</span><span style="color: #A5D6FF">&#39;results&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;channels&#39;</span><span style="color: #C9D1D9">][</span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">][</span><span style="color: #A5D6FF">&#39;detected_language&#39;</span><span style="color: #C9D1D9">]</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  </span></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> transcript, detected_language</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/&#39;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr&#39;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">home</span><span style="color: #C9D1D9">():</span></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> render_template(</span><span style="color: #A5D6FF">&#39;index.html&#39;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/welcome&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>
<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">welcome</span><span style="color: #C9D1D9">():</span></span>
<span class="line"><span style="color: #C9D1D9">   response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">with</span><span style="color: #C9D1D9"> response.gather(</span></span>
<span class="line"><span style="color: #C9D1D9">       </span><span style="color: #FFA657">num_digits</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">action</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">url_for(</span><span style="color: #A5D6FF">&#39;menu&#39;</span><span style="color: #C9D1D9">), </span><span style="color: #FFA657">method</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;POST&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">   ) </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> g:</span></span>
<span class="line"><span style="color: #C9D1D9">       g.say(</span><span style="color: #FFA657">message</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;Thanks for calling the Deepgram Speech-to-Text Python SDK. &quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>
<span class="line"><span style="color: #C9D1D9">             </span><span style="color: #A5D6FF">&quot;Please press 1 for Spanish&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>
<span class="line"><span style="color: #C9D1D9">             </span><span style="color: #A5D6FF">&quot;Press 2 for French&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">+</span></span>
<span class="line"><span style="color: #C9D1D9">             </span><span style="color: #A5D6FF">&quot;Press 3 for German&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">loop</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">3</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #D2A8FF">@app.route</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;/ivr/menu&#39;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">methods</span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;POST&#39;</span><span style="color: #C9D1D9">])</span></span>
<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">menu</span><span style="color: #C9D1D9">():</span></span>
<span class="line"><span style="color: #C9D1D9">   selected_option </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> request.form[</span><span style="color: #A5D6FF">&#39;Digits&#39;</span><span style="color: #C9D1D9">]</span></span>
<span class="line"><span style="color: #C9D1D9">   option_actions </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span><span style="color: #A5D6FF">&#39;1&#39;</span><span style="color: #C9D1D9">: _spanish_recording,</span></span>
<span class="line"><span style="color: #C9D1D9">                     </span><span style="color: #A5D6FF">&#39;2&#39;</span><span style="color: #C9D1D9">: _french_recording,</span></span>
<span class="line"><span style="color: #C9D1D9">                     </span><span style="color: #A5D6FF">&#39;3&#39;</span><span style="color: #C9D1D9">: _german_recording}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">if</span><span style="color: #C9D1D9"> selected_option </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> option_actions:</span></span>
<span class="line"><span style="color: #C9D1D9">       response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>
<span class="line"><span style="color: #C9D1D9">       </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> option_actions[selected_option](response)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">       </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> _redirect_welcome()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_spanish_recording</span><span style="color: #C9D1D9">(response):</span></span>
<span class="line"><span style="color: #C9D1D9">   recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/spanish-recording.mp3&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">   spanish_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[spanish_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the Spanish response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">                </span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   response.hangup()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_french_recording</span><span style="color: #C9D1D9">(response):</span></span>
<span class="line"><span style="color: #C9D1D9">   recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/french-recording.mp3&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">   french_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[french_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the French response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">                </span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   response.hangup()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_german_recording</span><span style="color: #C9D1D9">(response):</span></span>
<span class="line"><span style="color: #C9D1D9">   recording </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;languages/german-recording.mp3&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">   german_transcript </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> deepgram_transcribe(recording)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   representative </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> customer_service_reps[german_transcript[</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">]]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   response.say(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&quot;This is the German response and </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">representative</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> will help you.&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">                </span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   response.hangup()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> response</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">_redirect_welcome</span><span style="color: #C9D1D9">():</span></span>
<span class="line"><span style="color: #C9D1D9">   response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> VoiceResponse()</span></span>
<span class="line"><span style="color: #C9D1D9">   response.say(</span><span style="color: #A5D6FF">&quot;Returning to the main menu&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">voice</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;alice&quot;</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">language</span><span style="color: #FF7B72">=</span><span style="color: #A5D6FF">&quot;en-US&quot;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"><span style="color: #C9D1D9">   response.redirect(url_for(</span><span style="color: #A5D6FF">&#39;welcome&#39;</span><span style="color: #C9D1D9">))</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> twiml(response)</span></span></code></pre>
<p><strong>view_helpers.py</strong></p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> flask</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">twiml</span><span style="color: #C9D1D9">(resp):</span></span>
<span class="line"><span style="color: #C9D1D9">   resp </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> flask.Response(</span><span style="color: #79C0FF">str</span><span style="color: #C9D1D9">(resp))</span></span>
<span class="line"><span style="color: #C9D1D9">   resp.headers[</span><span style="color: #A5D6FF">&#39;Content-Type&#39;</span><span style="color: #C9D1D9">] </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;text/xml&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> resp</span></span></code></pre>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/identifying-the-best-agent-to-respond-in-your-ivr-system/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
