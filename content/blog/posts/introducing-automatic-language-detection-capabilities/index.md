---
title: Introducing Automatic Language Detection Capabilities
description: Today, we’re very excited to announce the public release of our new
  Automatic Language Detection feature. Deepgram’s speech recognition API, with
  Language Detection, can automatically detect the dominant language in an audio
  file and transcribe the output in the detected language.
date: 2022-09-21T16:05:18.180Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1663776783/blog/Introducing%20Automatic%20Language%20Detection%20Capabilities/2209-ntroducing-automatic-language-detection-capabilities-featured-1200x630_1_krxzpq.png
authors:
  - katie-byrne
category: announcement
tags:
  - nlu
---
Today, we’re very excited to announce the public release of our new Automatic Language Detection feature. Deepgram’s speech recognition API, with Language Detection, can automatically detect the dominant language in an audio file and transcribe the output in the detected language. It is available in 16+ [languages](https://developers.deepgram.com/documentation/features/language/) including Spanish, Hindi, French, German, Japanese and Polish.

[Language identification](https://en.wikipedia.org/wiki/Language_identification) or language detection is the problem of determining which natural language the input audio or text file contains. Given the globalization and size of audio data being generated across the globe, identifying the language of a conversation has become essential to provide targeted customer services, optimize resources, augment search capabilities, and enhance customer experience with the brand and services.

## **Key Benefits of Using Language Detection for Speech Understanding**

Automatic Language Detection generates the transcription in the detected language. It also enhances the overall customer and end-user experience, where the input audio files may be in different languages. In addition it makes it easier for customers to automate specific workflow, such as post-call analysis of Contact Center calls across regions, and organize their large amount of unstructured audio data based on the spoken language. Using Understanding features such as Language Detection allows developers to more easily derive meaningful insights from the audio files based on the identified dominant language in the conversations.

## **Everything You Need to Know about Audio Language Detection**

Deepgram’s Automatic Language Detection feature makes it easier for developers  to identify and generate audio transcription with auto language detection. transcript the output in the detected language. Unlike alternative solutions, there is no need to specify a list of language codes as part of the API call - just enable the language detection feature, and it’ll identify the dominant language through an initial sampling of the audio file and transcribe the output.

Language Detection feature is available in batch mode and  supports all of our generally available [languages](https://developers.deepgram.com/documentation/features/language/). It can be used with all model tiers (base, enhanced and custom trained). 

To get started with Language Detection, all you need to do is add detect_language=true in your API call.

```
curl \
\--request POST \
\--url 'https://api.deepgram.com/v1/listen?detect_language=true&punctuate=true' \
\--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \
\--header 'content-type: audio/mp3' \
\--data-binary ‘@Call_Recording.mp3'
```

When the file is finished processing (often after only a few seconds), you’ll receive a sample JSON response that has the following basic structure:

```
"alternatives":
                [
                    {
                        "transcript": "c'est une bonne s...",
                        "confidence": 0.9323341,
                        "words":
                     \[ … ]
  }
                ],
                "detected_language": "fr"
    }
```

The outputs from the API can then be used to build downstream workflows. 

To learn more about our API, please see the Language Detection page in our documentation. We welcome your feedback, please share it with us at [Product Feedback](https://deepgram.hellonext.co/b/feedback).