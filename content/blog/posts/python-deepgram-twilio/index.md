---
title: Speech Recognition with Twilio and Python
description: Use Deepgram's speech-to-text features with Python and Twilio to
  transcribe audio such as incoming phone calls.
date: 2022-04-13
cover: https://res.cloudinary.com/deepgram/image/upload/v1649274528/blog/2022/04/python-deepgram-twilio/Speech-Analytics-Real-Time-Audio-w-Twilio-Python%402x.jpg
authors:
  - tonya-sims
category: tutorial
tags:
  - python
  - twilio
seo:
  title: Speech Recognition with Twilio and Python
  description: Use Deepgram's speech-to-text features with Python and Twilio to
    transcribe audio such as incoming phone calls.
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661454075/blog/python-deepgram-twilio/ograph.png
shorturls:
  share: https://dpgr.am/8ff4f6b
  twitter: https://dpgr.am/0abeb3e
  linkedin: https://dpgr.am/4674338
  reddit: https://dpgr.am/25a704d
  facebook: https://dpgr.am/a3fa9d8
---
Imagine having the ability to transcribe your voice calls. Look no further because we’ll learn how to do that in this article by combining Twilio with Deepgram.

With Twilio, we can use one of their phone numbers to receive and record incoming calls and get a transcript using the Deepgram Speech Recognition API. We’ll use the Deepgram Python SDK in this example.

Here’s a snapshot of what we’ll see in the browser after making the phone call and using Deepgram voice-to-text.

![Deepgram voice-to-text with Twilio](https://res.cloudinary.com/deepgram/image/upload/v1649274530/blog/2022/04/python-deepgram-twilio/deepgram_twilio_transcribe.png)

## Getting Started

Before we start, it’s essential to generate a Deepgram API key to use in our project. We can go to our [Deepgram console](https://console.deepgram.com/signup?jump=keys). Make sure to copy it and keep it in a safe place, as you won’t be able to retrieve it again and will have to create a new one. In this tutorial, we’ll use Python 3.10, but Deepgram supports some earlier versions of Python.

Make sure to go to [Twilio](https://www.twilio.com/login?g=%2Fconsole-zen%3F&t=9de6cbac864dd16dddf0f56899857674d172ed98651d03476c82bc96f0bf39e0) and sign up for an account. We’ll need to purchase a phone number with voice capabilities.

We’ll also need two phones to make the outgoing call and another to receive a call.

In our project, we’ll use Ngrok, which provides a temporary URL that will act as the webhook in our application. Ngrok will forward requests to our application that is running locally. You can download it [here](https://ngrok.com/).

Next, let’s make a directory anywhere we’d like.

```
mkdir deepgram-twilio
```

Then change into that directory so we can start adding things to it.

```
cd deepgram-twilio
```

We’ll also need to set up a virtual environment to hold our project and its dependencies. We can read more about those [here](https://sweet-pie-c52a63-blog.netlify.app/python-virtual-environments/) and how to create one.

<Panel> Panel with important note
It’s recommended in Python to use a virtual environment so our project can be installed inside a container rather than installing it system-wide. </Panel>

Ensure our virtual environment is activated because we’ll install dependencies inside. If our virtual environment is named `venv`, then activate it.

```
source venv/bin/activate
```

Let’s install our dependencies for our project by running the below `pip` installs from our terminal inside our virtual environment.

```
 pip install deepgram-sdk
 pip install twilio
 pip install python-dotenv
 pip install Flask
 pip install 'flask[async]'
 pip install pysondb
```

Now we can open up our favorite editor and create a file called `deepgram-twilio-call.py`. If you’d like to make it from the command line, do this:

```
touch deepgram-twilio-call.py
```

## The Code

Now to the fun part! Open our script called `deepgram-twilio-call.py` and add the following code to make sure our Flask application runs without errors:

```python
from flask import Flask

app = Flask(__name__)

@app.get("/")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run()
```

Run our Flask application by typing this into the terminal `python deepgram-twilio-call.py`.

Then pull up the browser window by going to `http://127.0.0.1:5000/` and we should see the text `Hello World`.

At the same time our application is running, open a new terminal window and type ![ngrok terminal with python flask](https://res.cloudinary.com/deepgram/image/upload/v1649274531/blog/2022/04/python-deepgram-twilio/ngrok-terminal-with-python-flask.png):

```
ngrok http 127.0.0.1:5000
```

Copy the ngrok url and add it to Twilio by navigating to ‘Phone Numbers -> Manage -> Active Numbers’, then click on your Twilio phone number.

![manage Twilio phone number](https://res.cloudinary.com/deepgram/image/upload/v1649274531/blog/2022/04/python-deepgram-twilio/active-twilio-numbers.png)

Scroll down to the ‘Voice’ section and add the webhook, our ngrok URL with the recordings endpoint and save. Like this https://6d71-104-6-9-133.ngrok.io/recordings

![twilio webhook ngrok](https://res.cloudinary.com/deepgram/image/upload/v1649274530/blog/2022/04/python-deepgram-twilio/twilio-webhook-ngrok.png)

We’ll implement the `/recordings` endpoint in a few.

Leave both terminals running as we’ll need these to run our application and receive the phone call.

Let’s store our environment variables in a `.env` file with the following:

```
DEEPGRAM_API_KEY=[‘YOUR_API_KEY’]
RECEIVER_NUMBER=[‘PHONE_NUMBER_TO_RECEIVE_CALL’]
```

We can replace `YOUR_API_KEY` with the API key we received from signing up in the Deepgram console, and the `PHONE_NUMBER_TO_RECEIVE_CALL` is the phone number we would like to receive the call.

Let’s replace the code in our `deepgram-twilio-call.py` with the following:

```python
import asyncio
import json
import os


from flask import Flask, request, render_template
from deepgram import Deepgram
from twilio.twiml.voice_response import Dial, VoiceResponse
from twilio.rest import Client
from pysondb import db
from dotenv import load_dotenv


app = Flask(__name__)

calls_db=db.getDb('calls')

load_dotenv()

@app.post("/inbound")
def inbound_call():
  response = VoiceResponse()
  dial = Dial(
      record='record-from-answer-dual',
      recording_status_callback='https://6d71-104-6-9-133.ngrok.io/recordings'
      )

  dial.number(os.getenv("RECEIVER_NUMBER"))
  response.append(dial)

  return str(response)
```

Here we are importing our libraries and creating a new instance of a Flask application. Then we create a new database named `calls`. We are using a lightweight JSON database called [PysonDB](https://dev.to/fredysomy/pysondb-a-json-based-lightweight-database-for-python-ija]).

We create the `/inbound` endpoint, which allows us to make a voice call. The parameter `record='record-from-answer-dual'` will help us make a dual call or a phone that can call another.

Next, in our `/recordings` route below, we tap into Deepgram’s speech-to-text feature by getting the recording of our call and using speech recognition to transcribe the audio. We check if `results` is in the response and format it by using a list comprehension and storing the results in `utterances`. We then add the `utterances` to the `calls` database.

```python
@app.route("/recordings", methods=['GET', 'POST'])
async def get_recordings():
   deepgram = Deepgram(os.getenv("DEEPGRAM_API_KEY"))

   recording_url = request.form['RecordingUrl']
   source = {'url': recording_url}
   transcript_data = await deepgram.transcription.prerecorded(source, {'punctuate': True,
                                                                       'utterances': True,
                                                                       'model': 'phonecall',
                                                                       'multichannel': True
                                                            })


   if 'results' in transcript_data:
       utterances = [
           {
               'channel': utterance['channel'],
               'transcript': utterance['transcript']
           } for utterance in transcript_data['results']['utterances']
       ]

       calls_db.addMany(utterances)

       return json.dumps(utterances, indent=4)
```

We can see how the utterances will look after they’re formatted:

```
    [{'channel': 0, 'transcript': 'Hello?', 'id': 288397603074461838},
    {'channel': 1, 'transcript': 'Hello?', 'id': 109089630999017748},
    {'channel': 0, 'transcript': "Hey. How's it going? It's good to hear from you.", 'id': 124620676610936565},
    {'channel': 0, 'transcript': 'Thanks. You too.', 'id': 182036969834868158},
    {'channel': 1, 'transcript': 'Thanks. You too.', 'id': 817052835121297399}]
```

Lastly, let’s add our `/transcribe` route and a templates folder with an `index.html` file that will display our phone speech-to-text transcript.

In our Python file, add the following code, which will get the voice-to-text transcript from the database and renders them in the HTML template.

```python
@app.route("/transcribe", methods=['GET', 'POST'])
def transcribe_call():
   context = calls_db.getAll()
   return render_template("index.html", context=context )


if __name__ == "__main__":
   app.run(debug=True)
```

Create a folder in our project directory called `templates` and add an `index.html` file. In that file, add the following HTML and Jinja code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    {% for c in context %} {{ c.transcript }} <br />
    {% endfor %}
  </body>
</html>
```

Here we loop through every transcript and display it on the screen.

Finally, let’s try making a phone call and using your non-Twilio phone to initiate a phone conversation with the phone number you provided in the environment variable `RECEIVER_NUMBER`. We should be able to receive a call and engage in a conversation. After we hang up, the transcript will appear in our browser.

Congratulations on building a speech-to-text Python project with Twilio and Deepgram! If you have any questions, please feel free to reach out to us on Twitter at [@DeepgramDevs](https://twitter.com/DeepgramDevs).