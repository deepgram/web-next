---
title: How To Monitor Media Mentions in Podcasts with Python
description: "This tutorial will use Python, SpaCy and the Deepgram API
  speech-to-text to monitor media mentions in a podcast and label meaningful
  text using entity detection. "
date: 2022-08-31T18:47:17.677Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1661868639/blog/2022/08/monitor-media-mentions/2208-Monitor-Media-Mentions-in-Podcasts-with-Python-blog%402x.jpg
authors:
  - tonya-sims
category: tutorial
tags:
  - python
---
Over the last ten years, the number of people who listen to podcasts has doubled. With this increase comes more ad spending. Companies must monitor media mentions from podcast ads using AI and Python more than ever to identify which companies are mentioned, either theirs or a competitor. 

For example, the podcasts I listen to occasionally include ads from multiple sponsors. What if you’re a company that needs to monitor media mentions in podcasts for your competitors? You need to identify what was said about these companies versus what was paid to be said. This differentiation is an important distinction.

There are a few ways to monitor media mentions in podcasts using AI speech-to-text and Python. Let’s look at a method using diarization (FYI, there is a better way further down in this post).

## Method 1: Monitor Media Mentions in Podcasts Using Diarization with AI Speech Recognition

This method is interesting but not as effective as I’ll show later in this post. As a quick review, [Deepgram’s diarization feature](https://developers.deepgram.com/documentation/features/diarize/) recognizes speaker changes in a transcript. For example, if there are multiple speakers and diarization is set to `True`, a word will be assigned to each speaker in the transcript. 

A readable formatted transcript with the speech-to-text diarize feature may look something like this:

```
[Speaker:0] All alright, guys, before we start, we got a special message from our sponsor.
[Speaker:1] If you wanna rank higher on Google, you gotta look at your page speed time. 
[Speaker:1] The faster website loads, the better off you are.
[Speaker:1] With Google's core vital update that makes it super important to optimize your site or load time.
[Speaker:1] And one easy way to do it is use the host that Eric and I use, Dream Host.
```

In a podcast, there’s usually an even split time between the speakers or the hosts. The way diarization is used to monitor media mentions in podcasts is to determine if one person is a speaker for a more extended time than the other. In our above transcript example, you’ll notice that Speaker 1 talks the longest during that segment. This *could* indicate that’s where the ad is read on behalf of the sponsor. 

I promised you a better way to monitor mentions in a podcast. Let’s look at how that would work with Python, Deepgram’s AI speech-to-text [Search feature](https://developers.deepgram.com/documentation/features/search/), and entity detection with SpaCy.

## Method 2: Monitor Media Mentions in Podcasts Using Search and Entity Detection

I was curious how to come up with a way to monitor media mentions in podcasts that would do the following: 

Search for terms in the podcast transcript like “sponsor” or “paid” that indicate an ad segment
Identify the organizations that are talked about in the ad to determine the company sponsoring that segment
And overall, not cause a bigger headache for me

I needed to use an AI voice recognition API that would transcribe the podcast audio. That part was easy to figure out. Use the [Deepgram Python SDK](https://github.com/deepgram/python-sdk). I used the prerecorded option in this scenario to transcribe the already recorded audio. I also [grabbed a Deepgram API key ](https://console.deepgram.com/signup?jump=keys) from our console, which has gamified missions you can try to get up to speed quicker. 

Deepgram is nice because it has high accuracy, and the transcript gets returned quickly. Both are important in this case. I needed accuracy to correctly flag the organizations (I’ll show you in the code), and speed is an advantage, so I didn’t have to wait long for the transcribed audio. 

The Search feature from Deepgram was a lifesaver when working on this project. It searches for terms or phrases by matching acoustic patterns in audio, then returns the result as a JSON object. 

I added the Search feature as a parameter in the Python code like this:

```python
'search': 'sponsor'
```
Since I wanted to find where the podcast hosts mentioned sponsorships, searching for the world `sponsor` made sense. Imagine them saying something like, “Now a word from our sponsor”.

After printing the results, I received a response similar to this:

```
[{'confidence': 1.0, 'end': 23.57, 'snippet': 'our sponsor', 'start': 23.09},
 {'confidence': 0.7023809, 'end': 79.82909, 'snippet': 'spotify', 'start': 79.38954},
 {'confidence': 0.6279762, 'end': 120.18001, 'snippet': 'stocks','start': 119.740005},
 {'confidence': 0.5535714, 'end': 241.19926,'snippet': 'focus on','start': 240.92029}]
```

The response is a list of dictionaries with the closest match for my search term indicated by the confidence. The higher the confidence, the more likely it matches the search. This feature helped tremendously since all I had to do was pass in a word to search for in the transcript to the speech-to-text Python SDK and spit out a result. 

Next, I used SpaCy to handle the entity detection. SpaCy is a Python library used for Machine Learning and Natural Language Processing. I was looking for a way to tag the entities in the transcribed audio as an organization. 

SpaCy labels the recognized company entities as ORG, but I also used EntityRuler to identify lesser-known organizations. You’ll see how that works in the next section when I break down the code.


### Python Code Breakdown With AI Deepgram Speech-to-Text and SpaCy

The first thing I did was pip install the following Python libraries:

```
pip install deepgram-sdk
pip install python-dotenv
pip install -U pip setuptools wheel
pip install spacy
python3 -m spacy download en_core_web_md
```

If you want to see the Python code that I wrote for this podcast media mentions project, please look below:

```python
from multiprocessing.context import set_spawning_popen
from deepgram import Deepgram
from dotenv import load_dotenv
from spacy.pipeline import EntityRuler
import spacy
import asyncio
import json
import os

load_dotenv()

PATH_TO_FILE = 'podcast-audio-file.mp3'

async def transcribe_with_deepgram():
   # Initializes the Deepgram SDK
   deepgram = Deepgram(os.getenv("DEEPGRAM_API_KEY"))

   options = {
       'punctuate': True,
       'search': 'sponsor'
   }   

   get_start_time = 0.0


   # Open the audio file
   with open(PATH_TO_FILE, 'rb') as audio:
       # ...or replace mimetype as appropriate
       source = {'buffer': audio, 'mimetype': 'audio/mp3'}
       response = await deepgram.transcription.prerecorded(source, options)

       if 'transcript' in response['results']['channels'][0]['alternatives'][0]:
           # search for query word in transcript
           search_term = response['results']['channels'][0]['search'][0]['hits']

           # get search_term with confidence of 1.0
           if search_term[0]['confidence'] == 1.0:
               get_start_time = search_term[0]['start']
                  
           transcript = response['results']['channels'][0]['alternatives'][0]['words']

    get_end_start_time = get_start_time + 30

   start_list = []

   for word in transcript:
       if word['start'] >= get_start_time and word['start'] < get_end_start_time:
           start_list.append(word['punctuated_word'])

   new_transcript = " ".join(start_list)

   return new_transcript


async def get_media_mentions():

   media_transcript = await transcribe_with_deepgram()

   # Build upon the spaCy Medium Model
   nlp = spacy.load("en_core_web_md")

   # Create the EntityRuler (your competition or whichever ORG)
   ruler = nlp.add_pipe("entity_ruler")

   # List of Entities and Patterns
   patterns = [
                   {"label": "ORG", "pattern": "Dream Host"}
              ]

   ruler.add_patterns(patterns)


   doc = nlp(media_transcript)

   #extract entities
   for ent in doc.ents:
       if ent.label_ == "ORG":
           print(ent.text, ent.label_)

      

asyncio.run(get_media_mentions())
```


In the `transcribe_ with_deepgram` method, you initialize the Deepgram API and open our .mp3 podcast file to read it as audio. Then you use the **prerecorded** transcription option to transcribe a recorded file to text.

In the `get_media_mentions` method, I’m loading up the SpaCY medium model and creating an EntityRuler. This EntityRuler allowed me to create a pattern `Dream Host` with a corresponding label `ORG`. In this example, Dream Host is not a recognized company. Still, it is mentioned in the transcript, so I wanted to ensure the code picked it up as I monitored the media mentions in the podcast. 

Finally, I extracted the entities and printed out the text or name of the company mentioned in the sponsored segment of the podcast and all the labels with ORG, identifying it as an organization.

Here’s what it looked like in my terminal:

```
Google ORG
Google ORG
Dream Host ORG
```

As you can see, the podcast hosts mentioned the companies Google and Dream Host. 


## Conclusion

That wraps up this blog post on how to monitor media mentions in podcasts with Python. I hope you found this tutorial helpful. If you did or have any questions, please feel to tweet me at [@DeepgramAI](https://twitter.com/DeepgramAI).
