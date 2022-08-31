---
title: "Why Does Your Speech Recognition Need Context?"
description: ""
date: 2018-12-01
cover: 
authors:
  - morris-gevirtz
category: nlp-nlu
tags:
  - automatic-speech-recognition
  - voice-recognition
seo:
  title: "Why Does Your Speech Recognition Need Context?"
  description: ""
shorturls:
  share: 
  twitter: 
  linkedin: 
  reddit: 
  facebook: 
og:
  image: 
---

<iframe src="https://www.youtube.com/embed/04YXLTnafTc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>Alexa and Siri are great and all, but they often make funny, if not serious mistakes. Why is this? ![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976769/blog/why-does-your-speech-recognition-need-context/Screen-Shot-2018-11-19-at-4.19.58-PM-1.png) I conducted an experiment to measure how important context is in understanding audio-especially when the audio is noisy. As humans we tend to enter conversations with some knowledge of what the topic is, which allows us to follow along. The speech recognition APIs which power Google Assistant, Siri, and Amazon Alexa, do not have this context. **As far as they know, every time you speak to them is like the first time you have ever spoken to them.** Suspecting this might be the reason they often misunderstand things which they shouldn't, I decided to test this:

### The experiment

I found an interesting image and recorded myself saying a sentence about it. I chose one of these images and went out to the street to ask people to listen to the recording, first without the visual stimulus, then with it. Both times, I asked people to tell me what they heard in order to see what effect seeing the image had on their ability to understand what was said. Without the context, people said some crazy things-their grammar, word choice and logic was awful. But, when they had some notion as to what the sentence could be about, they performed significantly better (despite the noisy audio).

### The take-home

What is true of the human brain, in this case, is also true of speech recognition APIs. <mark>When you use a speech recognition API trained on your specific voice data, it's context gets narrowed down to your world, limiting and focusing the words it can choose from.</mark> The result is much more accurate, and usable, transcription.

#### Try the experiment yourself:

<iframe src="https://www.youtube.com/embed/IyqLOIDLZnQ" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
