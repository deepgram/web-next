---
title: Tips on Choosing a Call Analytics Development Path
description: Here are our top tips on choosing a call analytics development path!
date: 2021-10-13
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981382/blog/tips-on-choosing-a-call-analytics-development-path/choosing-call-analytics-dev-path-blog-thumb-554x22.png
authors:
  - keith-lam
category: ai-and-engineering
tags:
  - call-analytics
seo:
  title: Tips on Choosing a Call Analytics Development Path
  description: ""
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981382/blog/tips-on-choosing-a-call-analytics-development-path/choosing-call-analytics-dev-path-blog-thumb-554x22.png
shorturls:
  share: https://dpgr.am/32b250a
  twitter: https://dpgr.am/b295c2c
  linkedin: https://dpgr.am/447bbd8
  reddit: https://dpgr.am/7536bf0
  facebook: https://dpgr.am/3c00d41
---
Call analysis can be real-time or post-call to pull out relevant data or review to make sure the agent said, "This call is being recorded for coaching purposes," or "Prices can fluctuate before you book." Data analysis can look at how many times customers say, "stop my service," use profanity, are angry, are happy, or used words that indicate customer churn. On the positive side, analysis can see how many times a salesperson recommended an add-on service, provided promotional free items, talked less than the customer, or was in a good mood. 

## How Call Analysis Works

This process starts with recording and collecting the audio from both the customer and the agent, normally on two channels, and sending it to a speech-to-text solution that converts the audio to text. The speech-to-text platform may also send other metadata to help the Natural Language Processing/Understanding solution determine the intent of the conversation. NLP/NLU solutions take the text and try to find the intent of the conversation and sentiment. Is the conversation about a product sale or product issue? Are the customer and agent happy or angry? This data is fed into a data integrator that organizes the text and meta-data, like sentiment, into a database that can be queried. The end-user business intelligence (BI) application uses the data query to create the dashboards for supervision and management of all the calls. The overall goal of call analytics is to improve customer experience, improve customer support, increase sales or reduce costs.

![](https://res.cloudinary.com/deepgram/image/upload/v1661976848/blog/tips-on-choosing-a-call-analytics-development-path/call-analytics-reference-architecture%402x-1.png)

### Audio and Meta-Data Collection

Audio capture is normally done with existing infrastructure; UCaaS, CCaaS, on-device applications, smart speakers, PBX, or VOIP. Depending on the speech-to-text (STT) solution, the audio capture may need to be converted into different file formats for real-time streaming to the STT. More sophisticated systems may capture audio patterns, tone, and frequency.

### Speech-to-Text

Speech-to-text transcribes the speech in the audio capture into text for the NLU/NLP to parse and use. The more accurate the STT the better the results from the NLU/NLP. In addition, some STT systems also provide diarization, audio sentiment, speaker ID, speaker isolation, noise reduction, and metadata on pitch, pace, tone, and utterances. This is normally a separate best-of-breed vendor. STT providers include Deepgram, Google speech-to-text, Amazon Transcribe, Nuance, and IBM Watson Natural Language Processing and Understanding NLU/NLP is the main processing to turn words, sentences, sentiment, audio metadata into intent and sentiment. What does the speaker want to convey? It matches the words to the intent so the data integration engine can organize the data and provide additional tags on the speakers. This can be part of a complete sales or support enablement solution or a separate best-of-breed vendor such as OneReach.ai, Rasa, or Cognigy.ai.

### Data Integration

Data integration takes all the text and organizes it so you can perform queries on the data. It also organizes the meta-data to be able to query. Was the customer happy, neutral, or sad? Was this a sales inquiry or support call? This step buckets that conversation into these pieces.

### Data Query

Data query engine does the work of pulling the right data for the business intelligence application. The end-user might ask the business intelligence application to show him all calls where there was profanity and the data query will pull back the results.

### Business Intelligence

This business intelligence end-user application is where you see the analytics and gain insight into the business to make the right decisions. Maybe there is a compliance issue, the BI can search all the calls to see which ones and who is not providing the compliance message that could lead to fines. Or the BI can create a chart to see which salesperson is always mentioning a new add-on service and the success rate of these sales. When looking at call analytics solutions, most of all in one solution which handles all parts of the process, with some handling the audio collection also. All-in-one providers include Calabrio, Call Tracking Metrics, Five9, Genesys, Sharpen, Talkdesk and Tethr.

## Tips for Choosing Your Development Path

**Questions to Answer** - Before looking for a call analytics solution, you should be very clear on the questions you want to be answered by the BI. Are you using it for compliance? Using it for increased sales? Employee management, coaching, or ranking? Trying to tie support calls to churn? Finding ideas for new products or services?

* **Tip** - Write these questions down before reviewing vendors so you already have the list of the top priority questions you want to be answered by the BI. This will also prevent you from being dazzled by great UI that does not provide actionable insights. Some of your questions may not be able to be answered by traditional logic and require AI to find the patterns.

**Real-Time or Post-Call** - Currently you will find many more post-call call analytics solutions than real-time solutions. Mostly because real-time has not been real-time analysis, but most recently this has been changing with vendors adding in true streaming STT, NLU, and BI that may take seconds for updated analyses.

* **Tip** - As you determine what questions you want to be answered, you can determine how quickly you want them. Do you need real-time analysis to escalate a customer who sounds like they might churn? Or can you wait a day or two? Do you want to provide immediate feedback and coaching? Or want to look for more patterns? In addition, you should ask your providers if they have real-time analysis on their roadmap, as well as what do they consider "real-time" (milliseconds, seconds, minutes, next day)?

**Sample or Use All** - Do you want to just sample your audio or record and analyze it all? Less than 5 years ago, this would not be a question as recording, transcribing, and analyzing all your audio data was highly expensive, compute resource-intensive, and would take days to transcribe one day of calls. With the advent of end-to-end deep learning neural networks, cheaper computing, and better optimization, it can be affordable to analyze all your call data and get actionable insights the same day.

* **Tip** - No data scientist ever said, "You know what, I have enough data to analyze and I know it is not going to change." With ongoing churn in your employee base and changing customer needs, you should find a solution that can provide you with all the call data at an affordable price. Sampling 5-10% of your calls may bias your decision. Why stop there when you can get a more comprehensive picture of your customer base? 

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

## Wrapping Up

We hope this gave you the insight you need to start getting more out of your call analysis data. We want to emphasize that this technology is changing rapidly so having a partner that's actively evolving with it and with your needs rather than a vendor with a one-size-fits-all approach is essential. They should have a product that includes real-time analysis powered by AI, which will find insights you missed. Waiting for data and insights to act upon in our real-time world may cost you revenue and customers.