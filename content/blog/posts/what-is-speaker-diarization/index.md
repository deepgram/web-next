---
title: What is Speaker Diarization?
description: Want to learn more about what speaker diarization is and how it
  works? We've got you—this post has everything you need to know.
date: 2022-08-16
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981430/blog/what-is-speaker-diarization/what-is-speaker-diarization-thumb-554x220-1.png
authors:
  - keith-lam
category: ai-and-engineering
tags:
  - deep-learning
  - diarization
seo:
  title: What is Speaker Diarization?
  description: Want to learn more about what speaker diarization is and how it
    works? Weve got you—this post has everything you need to know.
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981430/blog/what-is-speaker-diarization/what-is-speaker-diarization-thumb-554x220-1.png
shorturls:
  share: https://dpgr.am/5c88637
  twitter: https://dpgr.am/8dab2fc
  linkedin: https://dpgr.am/3d52c5d
  reddit: https://dpgr.am/aa2ece3
  facebook: https://dpgr.am/b33a9a4
---
Speaker diarization is a process of separating individual speakers in an audio stream so that, in the automatic speech recognition (ASR) transcript, each speaker's utterances are separated. Each speaker is separated by their unique audio characteristics and their utterances are bucketed together. This type of feature can also be called speaker labels or speaker change detection. Customers who use audio with multiple speakers and want transcripts to appear in a more readable format often use speaker diarization.  Example without speaker diarization:

> Hello, and thank you for calling premier phone service. Please be aware that this call may be recorded for quality and training purposes. My name is Beth, and I will be assisting you today. How are you doing? Not too bad. How are you today? I'm doing well. Thank you. May I please have your name? My name is Blake.

With speaker diarization:

> \[Speaker:0] Hello, and thank you for calling premier phone service. Please be aware that this call may be recorded for quality and training purposes. \[Speaker:0] My name is Beth, and I will be assisting you today. How are you doing? \[Speaker:1] Not too bad. How are you today? \[Speaker:0] I'm doing well. Thank you. May I please have your name? \[Speaker:1] My name is Blake.

In a world-class speech API, like Deepgram, this is how you would request diarization: `curl \` `--request POST \` --url 'https://api.deepgram.com/v1/listen?diarize=true&punctuate=true&utterances=true' --header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' ` `--header 'content-type: audio/mp3' \` ```--data-binary @Premier_broken-phone_numbers.mp3 ' jq -r '.results.utterances[] ' "[Speaker:\(.speaker)] \(.transcript)"'`` When the file is finished processing (often after only a few seconds), you'll receive a JSON response that has the following basic structure:```{ "metadata": {  "transaction_key": "string",  "request_id": "string",  "sha256": "string",  "created": "string",  "duration": 0,  "channels": 0 },"results": {  "channels": \[   {    "alternatives":[]   }  ] }` The outputs from the API can then be used to build downstream workflows. Speaker diarization is different from channel diarization, where each channel in a multi-channel audio stream is separated; i.e., channel 1 is speaker 1 and channel 2 is speaker 2. Channel diarization can be used for one-to-one phone calls, where there is only one speaker per channel. When there are multiple speakers per channel, such as in the recording of a meeting, speaker diarization is needed to separate the speakers.

## How does Speaker Diarization Work?

Speaker diarization is generally broken down into four major subtasks:

1. **Detection** - Find regions of audio that contain speech as opposed to silence or noise.
2. **Segmentation** - Divide and separate those detected regions into smaller audio sections.
3. **Representation** - Use a discriminative vector to represent those segments.
4. **Attribution** - Add a speaker label to each segment based on its discriminative representation.

Diarization systems can include additional subtasks. For a [true end-to-end AI diarization system](https://blog.deepgram.com/deep-learning-speech-recognition/), one or more of these subtasks may be joined together to improve efficiency. Let's dig a bit deeper into what these subtasks accomplish for speaker diarization. **Detection** is often accomplished by a Voice Activity Detection (VAD) model, which determines if a region of audio contains voice activity (which includes but is not limited to speech) or not. For a more precise outcome, Deepgram leverages the millisecond-level word timings that come with our ASR transcripts. This gives us very accurate regions in time where we are confident that there is speech. **Segmentation** is often done uniformly, using a very small window of a few hundred milliseconds or a slightly longer sliding window. Small windows are used to ensure that segments contain a single speaker, but smaller segments produce less informative representations; i.e., it is also hard for people to decide who's talking from a very short clip. So, instead of relying on fixed windowing, we use a neural model to produce segments based on speaker changes. **Representation** of a segment usually means embedding it. Statistical representations like i-vectors have been broadly surpassed by embeddings like d- or x-vectors that are produced by a neural model trained to distinguish between different speakers. **Attribution** is approached in many different ways and is an active area of research in the field. Notable approaches include the Spectral and Agglomerative Hierarchical Clustering algorithms, Variational Bayes inference algorithms, and various trained neural architectures. Our approach successively refines an initial, density-based clustering result to produce accurate and reliable attributions.

## Why is Speaker Diarization Used?

Speaker diarization is used to increase transcript readability and better understand what a conversation is about. Speaker diarization can help extract important points or action items from the conversation and identify who said what. It also helps to identify how many speakers were on the audio.  Some examples uses are when reviewing a post-call sales meeting and you need to know did if the customer agreed to the business terms or if the salesperson just say they did. Who gave the final buying decision? For [real-time educational use](https://blog.deepgram.com/top-7-uses-speech-to-text-education/), caption diarization would help online students better understand who said what in the classroom. Was it the professor or a student?

## What Are the Use Cases for Speaker Diarization?

As we mentioned above, creating readable transcripts is one major use, but other use cases for diarization include:

* **Audio/Video/Podcast management** - Speaker separated transcripts or captions allow easier searches for company/product attribution and better understanding of viewers or listeners.
* **Compliance** - Determining that a customer agreed to certain business terms in a multi-person meeting.
* **Conversational AI** - A food ordering voicebot trying to determine who is placing the food order when there are multiple adults and children talking.
* **Education** - Transcribing a student question and answer session to parse out the answers given by the professor or the students.
* **Health** - Separate patient and doctor comments for both in-person appointments and phone consultations.
* **Law enforcement** - Parsing who said what in body cam footage or other recordings.
* **Recruiting** - Tracking recruiter and candidate conversations for compliance, bias issues, and review.
* **Sales Enablement** - Tracking who said what in a sales meeting and coaching the salesperson on what to say and when to keep quiet.
* **Speaker Analysis** - Track current and previous comments from a certain speaker during meetings or [track talk time during a phone call](https://developers.deepgram.com/use-cases/talk-time-analytics/).

## What Are the Metrics for Speaker Diarization?

The main metric used for speaker diarization in the business world is the accuracy of identifying the individual speakers or "who spoke what". Most of the measures in academia are measures of "who spoke when". We believe the best way to measure speaker diarization improvement is to measure time base confusion error rate (tCER) and time based time based diarization error rate (tDER). **Time-based Confusion Error Rate**  (tCER)  = confusion time / total reference and model speech time **Time-based Diarization Error Rate**  (tDER) = false alarm time + missed detection time + confusion time / total reference and model speech time ![](https://res.cloudinary.com/deepgram/image/upload/v1661976860/blog/what-is-speaker-diarization/speaker-diarization-blog.gif) **Key** M = Missed model F = False alarm C = Confusion tCER is based on how much time the diarization identifies the wrong speaker over the total time of audio with speech. The smaller the CER the better the diarization. If there are four speakers and the diarization process has a CER of 10% then for one hour of spoken audio, it misidentified speakers for 6 minutes.  A tCER of less than 10% would be considered very good. However, this measurement is not weighted by the number of speakers or other measures, so you can have a 10% tCER result with identifying one speaker on a two-speaker call when one speaker dominates the conversation for 90% of the time and the secondary speaker only speaks 10%. Deepgram's testing consists of audio with widely varying durations and speaker counts. The other metric is tDER which adds to tCER by including false alarm time (time the model thinks someone is talking when there is just noise or silence) and missed detection time (time where there is speech but the model does not pick it up as speech). tDER is a more standard measure and can provide some more insights into model performance.

## Speaker Diarization with Deepgram vs. Others

Now that we understand how diarization works and how accuracy and errors are assessed, it's important to understand that there are varying capabilities to the diarization features that different ASR providers offer. Deepgram has the following benefits:

* **No need to specify the number of speakers** in the audio. Some ASR providers require you to input the number of speakers in the audio before processing. Deepgram separates the different speakers without any human intervention.
* **No cap on the number of speakers in the audio**. We have seen very high accuracy of speaker identification on audio with 16+ speakers. Other ASR providers may only be able to perform speaker diarization on 4 or less speakers on one channel.
* **Supports** **[any language](https://deepgram.com/product/languages/)** **Deepgram transcribes.** Our speaker diarization is language agnostic. Many providers only offer speaker diarization on English or a handful of other languages, which limits your growth.
* **Supports both pre-recorded or real-time streaming audio in the cloud or on-prem**. While other ASR providers can only perform speaker diarization on pre-recorded audio, Deepgram can do both real-time and pre-recorded audio due to our parallel processing and fast AI model architecture.

The [full documentation and implementation guides](https://developers.deepgram.com/documentation/features/diarize/) are available so you can immediately try out our diarization features on our [Console](https://console.deepgram.com/).

## Wrapping Up

If you're looking to get started with a speech-to-text solution, [feel free to contact us](https://deepgram.com/contact-us/) and we'll be happy to discuss your use case and help you get started. Or, you can [sign up for Console for free and get $150 in credits](https://console.deepgram.com/signup) to give Deepgram a try.

<WhitepaperPromo whitepaper="latest"></WhitepaperPromo>