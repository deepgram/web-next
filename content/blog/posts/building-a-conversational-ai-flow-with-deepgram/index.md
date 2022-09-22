---
title: Building a Conversational AI Flow with Deepgram
description: Learn how to use endpointing and interim results to build a
  conversational AI flow.
date: 2022-09-23T17:38:18.493Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981433/blog/all-about-transcription-for-real-time-audio-streaming/all-about-real-time-audio-streaming-thumb-554x220-.png
authors:
  - kevin-lewis
category: tutorial
tags:
  - conversational-ai
  - endpointing
  - interim-results
---
How do you know when someone is finished talking? Before I started working at Deepgram, I hadn’t thought about this question much. When having conversations in person, us humans can use all sorts of contextual cues, body language, and societal norms to figure out when someone has finished their thought and we can jump in with our own opinion. But as we’ve all seen over Zoom during the last few years, figuring out when someone is done talking is a lot harder to do virtually. It’s even harder when the listener isn’t human at all—and is a machine learning model transcribing speech!

Business problems that need speech-to-text often also need an understanding of when a speaker has completed their thought. One common use case for this is building conversational AI bots that need to respond to a user’s queries. The bot needs to be careful both to not to cut the user off, and to respond in a timely enough manner that the conversation feels “real time”.

Deepgram’s real-time speech-to-text service provides two mechanisms that can help build a conversational flow. One is interim results, and the other is endpointing. Together, the two can give you information about when a speaker has finished talking, and when your system should respond.

Interim results send back transcription messages every few seconds. These messages will be marked with `is_final=false`. This indicates that Deepgram is still gathering more information about its transcription, and has not yet finalized its prediction for the results. Over a longer duration of time, Deepgram will finalize its transcription for these interim results and send back final messages marked with `is_final=true`.

Endpointing sends back a message as soon as no speech is detected (the default is after 10ms of silence). These messages will be marked with `speech_final=true` and `is_final=true`. 

The simplest way to determine when someone is done talking is based on silence. Endpointing can give you almost immediate feedback when silence is detected, which may be useful for applications that prioritize quick processing of results. Here’s a code example that uses your microphone and the Python package beepy to play a notification sound when Deepgram detects an endpoint.

To run the code, install beepy using `pip install beepy`. Then save the following code as `endpointing.py`. Turn your volume up so you’ll be able to hear the beep sound, and run the code:

`python endpointing.py  -k 'YOUR_DG_API_KEY'`

{ insert speech_final.py }

Rather than responding immediately, many applications will want to wait for a few seconds after a speaker finishes. This is a simple and relatively effective way of deciding when someone is done talking. Especially in conversational AI, where users may be speaking for longer and occasionally pause mid-thought, waiting to respond for a few seconds can give the best results. A combination of endpointing and interim results can be used to determine when a desired amount of silence has passed.

Here’s a code example that uses your microphone and the Python package beepy to play a notification sound after the number of seconds defined in the `SILENCE_INTERVAL` on line 11 has passed. 

To run the code, install beepy using `pip install beepy`. Then save the following code as `silence_interval.py`. Turn your volume up so you’ll be able to hear the beep sound, and run the code:

`python silence_interval.py  -k 'YOUR_DG_API_KEY'`

These two samples should give you an idea of how immediate different types of feedback feel, and how they can be incorporated into different types of real-time speech to text applications. After incorporating these into your application, you can have your downstream system decide how to best respond to the user's input. Happy building!