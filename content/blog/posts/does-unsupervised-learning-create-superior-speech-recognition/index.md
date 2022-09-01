---
title: "Does unsupervised learning create superior speech recognition?"
description: "Learn about the three major AI speech model training methods used and which method yields more accurate results."
date: 2021-06-02
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981373/blog/does-unsupervised-learning-create-superior-speech-recognition/does-unsupervised-learning-create%402x.jpg
authors:
  - katie-byrne
category: ai-and-engineering
tags:
  - speech-recognition
seo:
  title: "Does unsupervised learning create superior speech recognition?"
  description: "Learn about the three major AI speech model training methods used and which method yields more accurate results."
shorturls:
  share: 
  twitter: 
  linkedin: 
  reddit: 
  facebook: 
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981373/blog/does-unsupervised-learning-create-superior-speech-recognition/does-unsupervised-learning-create%402x.jpg
---

Recently there have been a number of articles published around the use of unsupervised learning for speech recognition. We asked members of our research team for their take on this type of training, and if it yields more accurate results. The short answer is No. Read further to learn why. 

### **AI Training Methods for Speech Recognition**

Artificial intelligence (AI) and neural networks "learn" by three general methods.  As it relates to speech recognition, speech model improvement or accuracy improvement is accomplished by the following training:

*   **Supervised** learning is when you provide your model with labeled training data sets.  Labeled training datasets comprise of both the audio AND the ground truth transcript; i.e. human transcribed text. This tells your model what features of the audio are important to learn; i.e. this audio waveform is this part of this word.  For humans, this is the same as telling a baby that the spherical object is a ball.
*   **Self-supervised or Unsupervised** is when you provide your model with audio and text files that are not paired. The model then "extracts" information from the audio or text and clusters the data into groups. This is effectively the same approach our human brains make by pattern matching.  The model is able to group a bunch of features but still has no idea what they relate to.  For humans, this is the same as your baby determining that all spherical objects are the same but the baby does not know they are balls.
*   **Semi-supervised** is a combination of supervised and unsupervised training. One approach is to perform pseudo-labeling where your model generates the labels for your unlabeled training data; e.g This phone call has a negative, neutral or positive sentiment. This is helpful when you have a vast amount of data to label. Then this labeling is validated by human transcriptionists.  If we continue our baby example, you have told the baby that the spherical object is a ball, now the baby believes all spherical objects are balls, including oranges, cocoa puffs and ladybugs. An adult then needs to help the baby and correct their misconceptions.

### **Speech Recognition in the Wild**

To create speech models that can survive in the wild (eg. make accurate predictions on datasets they have never encountered before) you need to have a combination of supervised and unsupervised learning techniques. Without these two approaches, models can "overfit" or become biased, making inaccurate predictions. The wide variety of audio in a business setting makes the task of speech recognition extremely difficult as uncommon words, phrases and acronyms are used across companies. When you graduate from 30 second command and control phrases (e.g. Hey Google, what time is it?) to 30 minute phone calls about "fixing your 'spotty wifi' (Spotify) premium account service," training on labeled datasets you care about becomes essential to model success. 

### **Great Speech Recognition is Hard**

There isn't a shortcut to enterprise grade speech recognition. Having a large volume of labeled training data (audio and text) is critical to AI model success. This is why Deepgram has invested heavily not only in our [End to End Deep Neural Network](https://offers.deepgram.com/how-deepgram-works-whitepaper), [model training](https://deepgram.com/product/train/) and [API deployment capabilities](https://developers.deepgram.com/), but also focused on [data collection and labeling](https://deepgram.com/product/label/). To put this in context, we have already labeled over 200K+ hours of business audio data. That is 3x Facebook, Microsoft and 22x that of Mozilla's Common Voice public data set ([source](https://venturebeat.com/2021/05/13/soniox-taps-unsupervised-learning-to-build-speech-recognition-systems/)). Supervised, unsupervised and semi-supervised training techniques are constantly improving. At Deepgram we will continue to invest in our speech training methodologies as we know an incremental improvement to our Deep Neural Network can have an outsized impact on our customers' model performance. [Contact us](https://deepgram.com/contact-us/) to learn more about our [AI Speech Platform](https://deepgram.com/product/overview/) or check out our [careers page](https://deepgram.com/company/careers/) if you are interested in joining the team.
