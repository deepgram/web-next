---
title: "Tips on Choosing a Sales and Support Enablement Development Path"
description: "Looking to use voice for sales or support enablement, learn some tips on choosing the right solution and what is available out in the market."
date: 2021-11-01
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981384/blog/tips-on-choosing-a-sales-and-support-enablement-development-path/choosing-sales-support-enablement-dev-path-blog-th.png
authors:
  - keith-lam
category: artificial-intelligence
tags:
  - sales-enablement
  - support-enablement
seo:
  title: "Tips on Choosing a Sales and Support Enablement Development Path"
  description: "Looking to use voice for sales or support enablement, learn some tips on choosing the right solution and what is available out in the market."
shorturls:
  share: 
  twitter: 
  linkedin: 
  reddit: 
  facebook: 
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981384/blog/tips-on-choosing-a-sales-and-support-enablement-development-path/choosing-sales-support-enablement-dev-path-blog-th.png
---

Sales and support enablement has changed dramatically with the use of speech recognition.  Sales and support teams can perform situational training and analysis before the employee takes their first call.  They can analyze their voice, facial expressions, tone of voice, speed of delivery to provide coaching on better sales or support conversations.  During calls, the software can record and analyze the conversation and provide on-screen feedback and tips for add-on sales or solutions to issues, thereby improving the customer experience.  Post-call, the conversations can be analyzed for coaching purposes. As such, sales and support enablement reference architecture varies depending on the use case.  The three main use cases can be bucketed as:

*   Onboarding
*   Coaching
*   Real-time sales or support assistance

Overall, these software solutions aim to improve customer satisfaction, improve support, or increase sales. In this document, we would like to share a high-level process flow of the various processes for the types of software.

#### **Onboarding**

Onboarding tools help sales to better understand and deliver the right message, sales pitch and offer to customers.  Overall, reduce the onboarding time for a new salesperson. This could be analyzing the sales pitch or determining how well they did with sales objections or obstacles.

#### ![](https://res.cloudinary.com/deepgram/image/upload/v1661976849/blog/tips-on-choosing-a-sales-and-support-enablement-development-path/coaching-reference-architecture%402x.png)

#### **Coaching**

Sales and support coaching solutions allow sales management to review sales and support calls and determine areas for improvement. There are various coaching solutions available, some focus on the sales call and combine it with sales funnel statistics and others combine the audio with call analytics to determine the best pitches, messaging, or methods for higher sales, and for support, they can provide call analytics of the call along with the transcript and audio for coaching.

#### ![](https://deepgram.com/wp-content/uploads/2021/10/coaching-reference-architecture@2x.png)

#### **Real-time Sales and Support**

Real-time sales and support enablement is a new type of solution to provide hints and tips to the salesperson or support agent as they are making phone calls to customers.  As they are speaking with the customer, the solution parses out keywords and phrases and return to the salesperson or support agent information to help them with the customer encounter, including tips to close the sale, recommended add-on products or services, tips to prevent customer churn, links to articles on a solution to the customer issue.  It is very much like an advisor or coach pushing the agent information as they need it.  The goal is to increase sales or increase customer satisfaction, but it can also be used to assist new salespeople or support agents. ![](https://res.cloudinary.com/deepgram/image/upload/v1661976850/blog/tips-on-choosing-a-sales-and-support-enablement-development-path/real-time-sales-support-reference-architecture%402x.png) **Audio and Meta-Data Collection** Audio capture is normally done with existing infrastructure; UCaaS, CCaaS, on-device applications, smart speakers, PBX, or VOIP.  Depending on the speech-to-text (STT) solution, the audio capture may need to be converted into different file formats for real-time streaming to the STT.  More sophisticated systems may capture audio patterns, tone, and frequency. **Speech-to-text** speech-to-text transcribes the speech in the audio capture into text for the NLU/NLP to parse and use.  The more accurate the STT the better the results from the NLU/NLP.  In addition, some STT systems also provide diarization, audio sentiment, speaker ID, speaker isolation, noise reduction, and metadata on pitch, pace, tone, and utterances.  This is normally a separate best-of-breed vendor.  STT providers include Deepgram, Google speech-to-text, Amazon Transcribe, Nuance, and IBM Watson **Natural Language Processing and Understanding** NLU/NLP is the main process to turn words, sentences, sentiment, audio metadata into intent and sentiment.  What does the speaker want to convey?  It matches the words to the intent so the data integration engine can organize the data and provide additional tags on the speakers. This can be part of a complete coaching solution or a separate best-of-breed vendor, such as OneReach.ai, Rasa, or Cognigy.ai **Data Integration** Data integration takes all the text and organizes it so you can perform queries on the data.  It also organizes the meta-data to be able to query also.  Was the customer happy, neutral, or sad?  Was this a sales inquiry or support call?  This step sorts that conversation into these buckets. **Data Query** Data query engine does the work of pulling the right data for the business intelligence application.  The end-user might ask the business intelligence application to show him where the salesperson lost the sale. **Business intelligence** This business intelligence end-user application is where you see the analytics and gain insight into the sales calls.   Or the BI can create a chart to see which salesperson is always mentioning a new add-on service and the success rate of these sales.

#### **Tips for Choosing Your Development Path**

**Find Biggest Needs/Issues** - Because there are so many solutions out there, you need to determine and prioritize your biggest needs.  Are you onboarding a lot of new salespeople this year?  Is your NPS score too low due to inexperience?  Do you not have enough experienced salespeople for coaching?  Are you losing customers to churn without knowing about it? _Tip - This is the normal risk and rewards assessment or ROI assessment, but this needs to be done for the entire business, not just Sales or Support crying the loudest for help._ **Fix the Issues** - Many of these solutions have great UI and UX and great dashboards to dazzle you, but you have to ask, does the solution truly fix the main issues you have, and do you have the experienced management to implement?  These solutions are tools but you still need to make sure they solve the problems.  You can implement a coaching solution but you better have experienced sales and support management to implement this coaching solution and actually do the coaching.  _Tip - Make sure you have the resources and experienced team to fix the issues and that you are looking at the right issues.  Don't be dazzled by all the other features._ **Measure Twice, Cut Once** - Before implementing these solutions, make sure you have a method to measure the success and key results you want to achieve.  As they say, you cannot improve what you cannot measure. _Tip - Establish your success metrics and key results then look for solutions that will measure these metrics.  Ideas include closed win-rates with new sales hires first call issue resolution with new support hires, etc._ **Create a Win-Win** - You and your provider both want the same thing: for their solution to work for your company, track the metrics, and meet your goals.  The solution provider wants a great case study, so find a win-win for both of your organizations. _Tip - See if the deal you have with the solution provider includes incentives for them to meet your key results.  As they work with other customers like you, will they provide you with best practices and advice?  Will have skin in the game for your success? Will they be a true partner, not just a vendor?_ We hope this gave you the insight you need to take the next step in starting or advancing your sales and support enablement experience.  There are so many solutions out there but make sure they solve your main needs and issues, you have metrics preset to analyze success, and you create a win-win with the solution provider.  Don't buy a hammer when you need to paint a wall.  Find the right tools for the job.
