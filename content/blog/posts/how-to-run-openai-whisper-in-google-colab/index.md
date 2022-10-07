---
title: How to Run OpenAI Whisper in Google Colab
description: test
date: 2022-10-11T21:00:38.699Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1665154754/blog/how-to-run-openai-whisper-in-google-colab/2210-OpenAI-Whisper-in-Google-Colab-featured-1200x630_2x_fjnqcv.png
authors:
  - ross-oconnell
category: tutorial
tags:
  - whisper
  - colab
  - machine-learning
---
OpenAI's Whisper is an exciting new model for automatic speech recognition (ASR). It features a simple architecture based on [transformers](https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)), the same technology that drove recent advancements in natural language processing (NLP), and was trained on 680,000 hours of audio from a wide range of languages. The result is a new leader in open-source solutions for ASR.

The researchers at [Deepgram](https://deepgram.com/) have enjoyed testing Whisper and seeing how it works, and we wanted to make it as easy as possible for you to try it out too. One of the things we've learned in our experiments is that, as with many deep-learning tools, Whisper performs best when it has access to a GPU. While [downloading and installing Whisper](https://blog.deepgram.com/how-to-run-openai-whisper-in-command-line/) may be straightforward, configuring it to properly utilize a GPU (if you have one!) is a potential roadblock.

Google Colab provides a great preconfigured environment for trying out new tools like Whisper, so we've set up a [simple notebook](https://colab.research.google.com/drive/1ZjgNUs2r0x2A-ITG7LS2BC7J8Bo2oqt5?usp=sharing) there to let you see what Whisper can do. We set up the notebook so that you don't need anything extra to run it, you can just click through and go. The notebook will:

* Install Whisper
* Download audio from YouTube
* Transcribe that audio with Whisper

  ![Whisper transcription](https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656318-8a5b0e46-70b7-4017-aff3-43339334e60d_ribevw.png)
* Playback the audio in segments so you can check Whisper's work

  ![Audio segments](https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656477-c9112775-ae9a-414a-847e-fa823b0b9a0b_ertwwq.png)
* And finally... quantitatively evaluate Whisper's performance by computing the Word Error Rate (WER) for the transcription

We think the files we chose are fun, but if you have files that you want to test Whisper on, it should be easy to upload them and drop them in!