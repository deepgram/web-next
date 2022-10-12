---
title: Introducing Topic Detection feature
description: Automate workflow, enhance recommendations and search capabilities,
  and organize customers’ conversations by identifying and extracting key topics
  from your audio data using Deepgram’s Topic Detection API.
date: 2022-10-11T22:06:32.479Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1663779409/2209-ntroducing-automatic-language-detection-capabilities-thumb-554x220_1_yqwofm.png
authors:
  - pankaj-trivedi
category: product-news
tags:
  - nlu
---
Today, we are very excited to announce that Deepgram has officially launched the Topic Detection feature as part of our Speech Understanding features. Deepgram’s Topic Detection is based on unsupervised Topic Modeling Technique that enables developers and customers to detect the most important and relevant topics that are referenced in the conversations. 

## **Turn Recorded Audio Into Insights**

Having not enough data isn't a significant problem anymore. Infact over [2.5 quintillion bytes](https://seedscientific.com/how-much-data-is-created-every-day/) of data get created every day. However, one of the biggest challenges customers face today is finding insights, organizing, tagging, and leveraging the data relevant to brands, prospects, and customers to deliver a fantastic experience to their end users. 

Topic Detection in ASR and NLU has become one of the must have features. Developers require advanced solutions to perform a deeper analysis of their audio data based on detected topics and subjects to optimize resources, automate workflow, extract insights, improve search capabilities and enhance end users' experience.

## Popular use cases using Topic Detection:

* Support the Quality Assurance team to analyze conversations based on discussed topics, identify trends and patterns, and improve overall customer experience.
* Categorize and tag conversations, meetings, and podcasts based on identified topics to enhance search and recommendation capabilities.
* Extract meaningful and actionable insights from conversations and audio data based on discussed topics and recurring themes.

## Identify over 350 topics

Deepgram’s Topic Detection  feature identifies patterns and generates key topics along with the output text, confidence score for each topic, and word positions to identify segments of speech. Deepgram’s Topic Detection is based on Topic Modeling which is an unsupervised machine learning technique to cluster generated text based on the detected topics. It supports over 350 topics. Topic Extraction can be enabled using detect_topics=true  and is supported for English language and pre-recorded audio and is available for both our on-prem and hosted customers.

To implement Topic Detection from audio recordings, all you need to do is add detect_topics=true in your API call.

```
curl \

\--request POST \

\--url 'https://api.deepgram.com/v1/listen?detect_topics=true&punctuate=true&tier=enhanced' \

\--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \

\--header 'content-type: audio/mp3' \

\--data-binary ‘@podcast.mp3'
```

When the file is finished processing, you’ll receive a sample JSON response that has the following basic structure:

```
"topics": [
                           {
                               "topics": [
                                   {
                                       "topic": "renewable energy",
                                       "confidence": 0.80515814
                                   },
                                   {
                                       "topic": "climate change",
                                       "confidence": 0.51437885
                                   }
                               ],
                               "text": "Even Greenpeace underestimated the rise of solar. When one of the world's largest environmental advocacy groups released an optimistic industry analysis called the energy revolution in twenty ten. It was far more ambitious than any government predictions, and it still got it wrong. Greenpeace estimated that by twenty twenty, the world would have three hundred and thirty five thousand megawatts of installed solar photovoltaic capacity…...",
                               "start_word": 0,
                               "end_word": 135
                           },
```

 

Developers can take the outputs from the API that performs Topic Identification to build downstream workflows, generate tags based on topics, power analytics tools, build search and recommendation capabilities, or integrate with other applications. 

To learn more about our API, please see the [Topic Detection page](https://developers.deepgram.com/documentation/features/topic-detection/) in our documentation. We welcome your feedback, please share it with us at [Product Feedback](https://deepgram.hellonext.co/b/feedback).