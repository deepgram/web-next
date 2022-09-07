---
title: "Topic Detection in Podcast Episodes with Python"
description: "This tutorial will use Python and the Deepgram API speech-to-text to perform Topic Detection using the TF-IDF Machine Learning Algorithm and KMeans Clustering."
date: 2022-08-23
cover: https://res.cloudinary.com/deepgram/image/upload/v1660892766/blog/2022/08/topic-detection-with-python/2208-Detect-Topics-in-Podcast-Episodes-with-Python-blog%402x.jpg
authors:
    - tonya-sims
category: tutorial
tags:
    - python
seo:
    title: "Topic Detection in Podcast Episodes with Python"
    description: "This tutorial will use Python and the Deepgram API speech-to-text to perform Topic Detection using the TF-IDF Machine Learning Algorithm and KMeans Clustering."
shorturls:
    share: https://dpgr.am/c1098c5
    twitter: https://dpgr.am/335341b
    linkedin: https://dpgr.am/11c3f1c
    reddit: https://dpgr.am/e460418
    facebook: https://dpgr.am/26c7cfa
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454121/blog/topic-detection-with-python/ograph.png
---

Imagine you’re a Python Machine Learning Engineer. Your work day is getting ready to start with the dreaded stand-up meeting, but you're looking the most forward to deep diving into topic detection algorithms.

<Panel title="Important Note">

If you want to see the whole Python code snippet for topic detection, please scroll to the bottom of this post.

</Panel>

You step out to get coffee down the street. A black SUV pulls up next to you, the door opens, and someone tells you to get in the truck.

They explain that your Machine Learning Python prowess is needed badly.

Why?

They need you to transcribe a podcast from speech-to-text urgently. But not just any podcast. It’s Team Coco’s podcast, the legendary Conan O’Brien. Not only do they need it transcribed using AI speech recognition, but they also require a topic analysis to quickly analyze the topics to discover what the podcast is about.

They can’t say too much about the underground Operation Machine Learning Topic Detection, other than if you can’t deliver the topic modeling results or tell anyone, something terrible may happen.

Weird. Ironic but weird. Yesterday, you learned about the TF-IDF (Term Frequency - Inverse Document Frequency) topic detection algorithm.

You should feel confident in your Python and Machine Learning abilities, but you have some reservations.

You think about telling your manager but remember what they said about something terrible that may happen.

You’re going through self-doubt, and most importantly, you’re not even sure where to start with transcribing audio speech-to-text in Python.

What if something bad does happen if you don’t complete the topic detection request?

You decide to put on your superhero cape and take on the challenge because your life could depend on it.

## Discovery of Deepgram AI Speech-to-Text

You’re back at your home office and not sure where to start with finding a Python speech-to-text audio transcription provider.

You try using Company A’s transcription with Python, but it takes a long time to get back a transcript. Besides, the file you need to transcribe is over an hour long, and you don’t have time to waste.

You try Company B’s transcription again with Python. This time, the transcription comes back faster, but one big problem is accuracy. The words in the speech-to-text audio transcript you’re getting back are inaccurate.

You want to give up because you don’t think you’ll be able to find a superior company with an API that provides transcription.

Then you discover Deepgram, and everything changes.

Deepgram is an AI automated speech recognition voice-to-text company that allows us to build applications that transcribe speech-to-text.

You loved how effortless it is to sign up for Deepgram by quickly grabbing a Deepgram API Key [from our website](https://console.deepgram.com/signup?jump=keys). You also immediately get hands-on experience after signing up by trying out their console missions for transcribing prerecorded audio in a matter of a few minutes.

There’s even better news!

Deepgam has much higher transcription accuracy than other providers, and you receive a transcript back super fast. You also discover they have a Python SDK that you can use.

It’s do-or-(maybe)-die time.

You hear a tornado warning siren, but disregard it and start coding.

You won’t let anything get in your way, not even a twister.

## Python Code for AI Machine Learning Topic Detection

You first create a [virtual environment](https://developers.deepgram.com/blog/2022/02/python-virtual-environments/) to install your Python packages inside.

Next, from the command line, you `pip install` the following Python packages inside of the virtual environment:

    pip install deepgram-sdk
    pip install python-dotenv
    pip install -U scikit-learn
    pip install -U nltk

Then you create a `.env` file inside your project directory to hold your Deepgram API Key, so it’s not exposed to the whole world. Inside of your `.env` file, you assign your API Key from Deepgram to a variable \`DEEPGRAM\_API\_KEY, like so:

    DEEPGRAM_AP_KEY=”abc123”

Next, you create a new file called \`python\_topic\_detection.py. You write the following code that imports Python libraries and handles the Deepgram prerecorded audio speech-to-text transcription:

```python
from ast import keyword
from posixpath import split
from deepgram import Deepgram
from dotenv import load_dotenv
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from nltk.corpus import stopwords
import asyncio
import json
import os
import nltk


load_dotenv()

PATH_TO_FILE = 'conan_podcast.mp3'

async def transcribe_with_deepgram():
  # Initializes the Deepgram SDK
  deepgram = Deepgram(os.getenv("DEEPGRAM_API_KEY"))
  # Open the audio file
  with open(PATH_TO_FILE, 'rb') as audio:
      # ...or replace mimetype as appropriate
      source = {'buffer': audio, 'mimetype': 'audio/mp3'}
      response = await deepgram.transcription.prerecorded(source)

      if 'transcript' in response['results']['channels'][0]['alternatives'][0]:
          transcript = response['results']['channels'][0]['alternatives'][0]['transcript']

          return transcript
```

The `transcribe_with_deepgram()` function comes from our Deepgram Python SDK, located [here in Github](https://github.com/deepgram/python-sdk).

In this method, you initialize the Deepgram API and open our .mp3 podcast file to read it as audio. Then you use the `prerecorded` transcription option to transcribe a recorded file to text.

You’re on a roll!

Next, you start writing the code for the TF-IDF Machine Learning algorithm to handle the topic detection. The tornado knocks out your power, and you realize you only have 20% laptop battery life.

You need to hurry and continue writing the following code in the same file:

```python
async def remove_stop_words():
  transcript_text = await transcribe_with_deepgram()
  words = transcript_text.split()
  final = []

  nltk.download('stopwords')
  stops = stopwords.words('english')

  for word in words:
      if word not in stops:
          final.append(word)

  final = " ".join(final)

  return final


async def cleaned_docs_to_vectorize():
  final_list = []
  transcript_final = await remove_stop_words()

  split_transcript = transcript_final.split()

  vectorizer = TfidfVectorizer(
                              lowercase=True,
                              max_features=100,
                              max_df=0.8,
                              min_df=4,
                              ngram_range=(1,3),
                              stop_words='english'

                          )


  vectors = vectorizer.fit_transform(split_transcript)

  feature_names = vectorizer.get_feature_names()

  dense = vectors.todense()
  denselist = dense.tolist()

  all_keywords = []

  for description in denselist:
      x = 0
      keywords = []
      for word in description:
          if word > 0:
              keywords.append(feature_names[x])
          x=x+1

      [all_keywords.append(x) for x in keywords if x not in all_keywords]
   topic = "\n".join(all_keywords)
  print(topic)

  k = 10

  model = KMeans(n_clusters=k, init="k-means++", max_iter=100, n_init=1)

  model.fit(vectors)

  centroids = model.cluster_centers_.argsort()[:, ::-1]

  terms = vectorizer.get_feature_names()
   with open("results.txt", "w", encoding="utf-8") as f:
      for i in range(k):
          f.write(f"Cluster {i}")
          f.write("\n")
          for ind in centroids[i, :10]:
              f.write(' %s' % terms[ind],)
              f.write("\n")
          f.write("\n")
          f.write("\n")

asyncio.run(cleaned_docs_to_vectorize())
```

In this code, you create a new function called `cleaned_docs_to_vectorize()`, which will get the previous method's transcript and remove any stop words. Stop words are unimportant, like `a, the, and, this` etc.

The algorithm will then perform the TF-IDF vectorization using these lines of code:

```python
vectorizer = TfidfVectorizer(
                              lowercase=True,
                              max_features=100,
                              max_df=0.8,
                              min_df=4,
                              ngram_range=(1,3),
                              stop_words='english'

                          )
```

You quickly read about the options passed into the vectorizer like `max_features` and `max_df` [on sciki-learn](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html).

You have a little bit on time with 15% battery life, so you decide to use K-Means to create 10 clusters of topics. This way, they can get a more meaningful sense of the data structure from the podcast. You write the K-Means clusters to a file called `results.txt`.

To run the program, type `python3 python_topic_detection.py ` from the terminal.

When you print the topics, you see a list like the following:

    sort
    little
    sitting
    went
    new
    knew
    comedy
    remember
    guys
    funny
    jerry
    club
    point
    gilbert
    york
    chris
    rock
    famous
    later
    getting
    long
    love
    night
    year
    bob
    norm
    car
    news
    space
    astronauts
    nasa

Bingo!

You can now make inferences about the AI Topic Detection to determine the subject matter of the podcast episode.

Then, peek at your `results.txt` file to verify that you received 10 clusters. Here’s an example of four of the ten groups of words using KMeans clustering:

    Cluster 0
    yeah
    think
    ve
    roast
    got
    space
    cat
    say
    joke
    oh


    Cluster 1
    person
    york
    joke
    gonna
    good
    got
    great
    guy
    guys
    heard


    Cluster 2
    know
    york
    jokes
    gonna
    good
    got
    great
    guy
    guys
    heard


    Cluster 3
    right
    york
    joke
    gonna
    good
    got
    great
    guy
    guys
    heard

Just before your laptop battery dies, you show them the topics for Team Coco. They are very happy with your results and drive off.

You’re feeling more confident than ever.

You’ll never know why they needed the Machine Learning topic detection or why they chose you, but you’re on top of the world right now.

## Conclusion

Congratulations on building the Topic Detection AI Python project with Deepgram. Now that you made it to the end of this blog post, Tweet us at [@DeepgramAI](https://twitter.com/DeepgramAI) if you have any questions or to let us know how you enjoyed this post.

## Full Python Code for the AI Machine Learning Podcast Topic Detection Project

```python
from ast import keyword
from posixpath import split
from deepgram import Deepgram
from dotenv import load_dotenv
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from nltk.corpus import stopwords
import asyncio
import json
import os
import nltk


load_dotenv()

PATH_TO_FILE = 'conan_podcast.mp3'

async def transcribe_with_deepgram():
  # Initializes the Deepgram SDK
  deepgram = Deepgram(os.getenv("DEEPGRAM_API_KEY"))
  # Open the audio file
  with open(PATH_TO_FILE, 'rb') as audio:
      # ...or replace mimetype as appropriate
      source = {'buffer': audio, 'mimetype': 'audio/mp3'}
      response = await deepgram.transcription.prerecorded(source)

      if 'transcript' in response['results']['channels'][0]['alternatives'][0]:
          transcript = response['results']['channels'][0]['alternatives'][0]['transcript']

          return transcript

async def remove_stop_words():
  transcript_text = await transcribe_with_deepgram()
  words = transcript_text.split()
  final = []

  nltk.download('stopwords')
  stops = stopwords.words('english')

  for word in words:
      if word not in stops:
          final.append(word)

  final = " ".join(final)

  return final


async def cleaned_docs_to_vectorize():
  final_list = []
  transcript_final = await remove_stop_words()

  split_transcript = transcript_final.split()

  vectorizer = TfidfVectorizer(
                              lowercase=True,
                              max_features=100,
                              max_df=0.8,
                              min_df=4,
                              ngram_range=(1,3),
                              stop_words='english'

                          )


  vectors = vectorizer.fit_transform(split_transcript)

  feature_names = vectorizer.get_feature_names()

  dense = vectors.todense()
  denselist = dense.tolist()

  all_keywords = []

  for description in denselist:
      x = 0
      keywords = []
      for word in description:
          if word > 0:
              keywords.append(feature_names[x])
          x=x+1

      [all_keywords.append(x) for x in keywords if x not in all_keywords]
   topic = "\n".join(all_keywords)
  print(topic)

  k = 10

  model = KMeans(n_clusters=k, init="k-means++", max_iter=100, n_init=1)

  model.fit(vectors)

  centroids = model.cluster_centers_.argsort()[:, ::-1]

  terms = vectorizer.get_feature_names()
   with open("results.txt", "w", encoding="utf-8") as f:
      for i in range(k):
          f.write(f"Cluster {i}")
          f.write("\n")
          for ind in centroids[i, :10]:
              f.write(' %s' % terms[ind],)
              f.write("\n")
          f.write("\n")
          f.write("\n")

asyncio.run(cleaned_docs_to_vectorize())
```

        