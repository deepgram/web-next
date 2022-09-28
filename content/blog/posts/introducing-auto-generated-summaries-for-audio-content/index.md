---
title: Introducing Auto-Generated Summaries for Audio Content
description: Need to automatically generate summaries of your audio content?
  Look no further!
date: 2022-09-28T14:54:14.428Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1664376933/2209-Introducing-Auto-Generated-Summaries-for-Audio-Content-thumb-554x220_acfu0t.png
authors:
  - pankaj-trivedi
category: product-news
tags:
  - summarization
  - ""
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1664377293/2209-Introducing-Auto-Generated-Summaries-for-Audio-Content-featured-1200x630_l5pnli.png
---
Build voice intelligence applications using our latest Summarization API, such as podcast summaries, auto-generated meeting notes, and sales call summaries, enhancing the overall end-user experience. 

Today, we are very excited to announce that Deepgram has launched the latest Summarization feature as part of our Speech Understanding Features. It uses deep learning techniques and abstractive summarization methods to generate meaningful and relevant summaries and insights from the audio data.

## What Developers Can do Using Summarization?

* Enable agents and sales representatives to generate meaningful call summaries automatically and reduce manual effort.
* Help listeners identify interesting conversations through auto-generated relevant podcast previews.
* Enable sales coaches and leaders to navigate through a large number of calls to identify important conversations through auto generated meeting summaries to dive deep into for coaching and monitoring purposes.
* Make it easier for customers to extract actionable insights from conversations and key points discussed and identify calls of interest through AI generated meeting summaries.

Summarization is one of the most challenging problems in the natural language processing and natural language generation space. It attempts to solve the problem of consuming a large amount of information by creating a meaningful, short, and relevant summary of the input text. 

There are primarily two methods to summarize the original text: extractive and abstractive. 

### Extractive Summarization

Extractive summarization works by extracting critical sentences from the original text, modeling the sentence's relationship, and merging selected sentences to generate an overall summary of the original text.

### Abstractive Summarization

In this approach, the model attempts to capture important parts of the input text and generate new sentences to convey the original text's meaning using advanced deep learning and natural language techniques.

## How Deepgram Summarization Works

Deepgram’s Summarization feature first preprocesses the text by splitting it into logical segments. The model also respects sentence boundaries and is sensitive to the context of a sentence or utterance. Then, each input segment is fed individually through the model and the model produces a summarized version of the segment's text. The final JSON output contains a list of meaningful summaries with start and end characters' positions to identify generated summary sections from the source transcript.

Summarization feature is supported for English language and pre-recorded audio and is available for both our on-premises and hosted customers.

To get started with Summarization, all you need to do is add `summarize=true` in your API call.

```
curl \
 --request POST \
 --url 'https://api.deepgram.com/v1/listen?summarize=true&punctuate=true&tier=enhanced' \
 --header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \
 --header 'content-type: audio/mp3' \
 --data-binary ‘@podcast.mp3'
```

When the file is finished processing (often after only a few seconds), you’ll receive a sample JSON response that has the following basic structure:

```json
"summaries": [
  {
    "summary": "This episode is brought to you by levels. With levels you can see how different foods affect your health with real time feedback. The levels app interprets your glucose data and provides a simple score after you eat a meal.",
    "start_word": 0,
    "end_word": 623
  }
```

The outputs from the API can then be used to build downstream workflows, create meeting or call notes in pdf format, power analytics tools, or integrate with other applications. 

To learn more about our API, please see the Summarization page in our documentation. We welcome your feedback, please share it with us at [Product Feedback](https://deepgram.hellonext.co/b/feedback).