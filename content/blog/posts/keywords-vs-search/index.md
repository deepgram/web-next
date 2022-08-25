---
title: Keywords vs Search
description: Compare Deepgram's search and keywords to learn which scenarios each feature works best for you
date: 2021-12-09
cover: https://res.cloudinary.com/deepgram/image/upload/v1638909280/blog/2021/12/keywords-vs-search/keywords-v-search-blog%402x.jpg
authors:
    - sandra-rodgers
category: best-practice
tags:
    - search,
    - keywords,
    - deepgram,
    - api,
    - features
seo:
    title: Keywords vs Search
    description: Compare Deepgram's search and keywords to learn which scenarios each feature works best for you
shorturls:
    share: https://dpgr.am/5f6b01
    twitter: https://dpgr.am/8aa2bb
    linkedin: https://dpgr.am/9035f8
    reddit: https://dpgr.am/6b0b6a
    facebook: https://dpgr.am/1472b5
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453831/blog/keywords-vs-search/ograph.png
---

**Search** and **keywords** are two different features of Deepgram's API that may sound similar but actually work best in different scenarios. In this blog post, I am going to help you understand these two features and give you a better idea of the very different situations in which you might use them.

To get the most benefit out of this post, I recommend you have at least skimmed through our documentation on [search](https://developers.deepgram.com/documentation/features/search/) and [keywords](https://developers.deepgram.com/documentation/features/keywords/).

## Basic Overview

### Search

Deepgram’s **search** feature is a query that can be made to **find out if a word or phrase has been said** in the audio that is being transcribed. During the transcribing of the audio of a pre-recorded sound file or a stream, Deepgram can analyze the audio to find the queried word or phrase. In the JSON response, it will return information about the **start time** and **end time** of when that word was possibly uttered. It will also give a **confidence** rating to each match. So you will see the **query** (the word or phrase you searched for), and then you will see **hits** (an array of objects that give you the **confidence**, **start**, **end**, and **snippet** of each possible match to your search).

To search for matches to the word 'epistemology,' I would add this query parameter to the API call URL or provide it as an option when using a [Deepgram SDK](https://developers.deepgram.com/sdks-tools/):

**search=epistemology**

```js
"search":[
  {
    "query":"epistemology",
    "hits":[
      {"confidence":0.9348958,"start":10.725,"end":11.485,"snippet":"is a"},
      {"confidence":0.9348958,"start":13.965,"end":14.764999,"snippet":"epi"},
      {"confidence":0.9204282,"start":4.0074897,"end":4.805,"snippet":"social epi"},
      {"confidence":0.27662036,"start":8.792552,"end":10.365,"snippet":"us today is"},
      {"confidence":0.1319444,"start":17.205,"end":18.115,"snippet":"nature of knowledge"},
      {"confidence":0.0885417,"start":15.285,"end":16.085,"snippet":"branch philosophy"},
      {"confidence":0.045138836,"start":5.1240044,"end":5.722137,"snippet":"university of"},
      {"confidence":0.045138836,"start":5.6025105,"end":7.4367843,"snippet":"warwick and"},
      {"confidence":0.0,"start":1.0168257,"end":1.9339627,"snippet":"hello this is steve"},
      {"confidence":0.0,"start":7.277282,"end":8.27417,"snippet":"and the question"}
    ]
  }
]
```

### Keywords

The **keywords** feature is also a query, but it is used to give the Deepgram AI more information so that it can **better transcribe the audio in the request**. Keywords are words that can be sent along with the audio, and then Deepgram will train itself to watch more closely for those words and transcribe them more accurately.

To improve transcription of the words 'epistemology' and 'ontology', I would add this query parameter to the API call URL or provide it as an option when using a [Deepgram SDK](https://developers.deepgram.com/sdks-tools/):

**keywords=epistemology\&keywords=ontology**

It can be challenging for ASR technology to transcribe certain words, particularly jargon, names, or very uncommon words. But the beauty of deep learning is that the technology can *learn*. If you know about these context-unique words ahead of time, you can send them with the request as keywords, and Deepgram will do a better job of actually transcribing those words.

<Alert type="warning">

Keywords are a much less powerful substitute than training a custom model. The best solution is to work with Deepgram to train a model for your specific language context. If you are using the keywords boosting feature for many words, and you are using this feature often, you should look into having a custom model trained for your situation because it will perform better.

</Alert>

## Real-World Scenarios

The fundamental difference between keywords and search is that search will *return a data object that gives you possible matches to your search terms*. If you just need to find a word or to know if that word was said (or not said), use **search**.

Keywords do not return an added data object; they just *improve the transcription itself* so that you see the boosted keywords transcribed correctly in the transcription. If you want to see a better transcription - improved specifically for words important to you - use **keywords** (however, there are caveats to using **keywords**, which we will examine in more detail later).

While this distinction might be becoming more clear to you, the best way to really understand when to use **search** versus when to use **keywords** is to look at some possible scenarios.

### Scenario 1: Compliance

#### Your company's employees speak on the phone in a customer service role, and they are required to say at the start of every phone call, "This call is being recorded." For the purpose of compliance, you want to check that they are actually saying this phrase.

In this scenario, you can use **search** to find matches to that phrase. You will not receive just a yes/no response (as in a Boolean telling you true/false) in the response object, but you will receive the list of matches with a confidence rating. Deepgram's AI will do its best to find phrases that it thinks might match the phrase "This call is being recorded." **However, this doesn't mean that all the matches are correct.**

This is where the nuance comes in. You have a powerful tool that has helped you search through audio files to find possible matches, and then as a user or a customer, you can decide for yourself what confidence rating is more likely to return a match. You can analyze the data you get back and start to see a pattern for what confidence number is bringing back accurate matches.

If it were me, I would pay attention to the confidence level that seems to be bringing back accurate matches, and then I would make an executive decision to say that this number gives us reasonable confidence that this phrase was uttered. Because every language context is different, Deepgram's general language model is going to perform differently when transcribing audio in those different contexts, so this feature can only be used as a tool to guide you to knowing whether the search term/phrase was uttered or not.

### Scenario 2: Discovery

#### Your company is participating in litigation, and as part of the eDiscovery phase, you are tasked with producing electronic documents (including audio and video) which are relevant to the case

Having a list of possible word or phrase matches can be extremely useful, but **search** is also a powerful tool for pointing you in the direction of valuable *sections* of your audio. A perfect example of this is eDiscovery, when attorneys are required to provide documents which are likely to have a certain relevance to the case. In this situation, they wouldn't be searching for just one word or phrase, but they would be looking for language that suggests that the conversation in the audio or video file is relevant.

The goal of ASR is to recognize human speech, but human speech isn't always direct, straightforward, or even completely honest. In order to comprehend what is said, humans often read between the lines. Since Deepgram's search feature isn't just a yes/no check to find a match, but actually gives you a confidence level in the response, this search tool can be combined with the human brain to come up with a combination of words and phrases that might help to find more nuanced relevant language.

To me, this is one of the most exciting possibilities of Deepgram's **search** feature because it demonstrates how AI isn't just about building machines to think for us, it's about building machines to aid humans in thinking better.

### Scenario 3: Demos

#### You are planning an important demo for the upcoming week, and you want to use Deepgram's speech-to-text API, but you haven't trained a language model yet. The demo is crucial to your business, so you want to give an added boost to Deepgram's transcription technology to improve accuracy for certain words.

The purpose of **keywords** is to improve the transcription output, so if you want to get a more accurate transcription (and you have not been able to train a custom model), a less powerful option would be to use keywords. You can improve the transcription by putting a list of keywords that are more difficult to recognize by ASR into the query parameter. Jargon, names, and scientific words are good examples of words that can be tricky for ASR.

The **keywords** feature is one that requires thoughtful implementation. Keywords do on a much smaller scale what model-training does, but **there are tradeoffs.** It might seem like a great way to improve a transcription, but because so many factors go into transcribing audio, and because training a model is something that is done by deep learning experts, substituting keywords for model training doesn't always work very well straight out of the box. However, it can be used if you are willing to test out various keywords and adjust based on the results you see.

The best approach would be to benchmark the transcription results without any keywords, then add words one by one and notice the effect. You want to aim to find that sweet spot where the transcription is coming out as accurate as possible. But due to the improvements Deepgram has made in its various models, adding keywords does not always improve the transcription. Depending on the model you are using and your unique language context, the keywords might even lower the quality of the transcription.

The keywords feature works differently depending on if the words are 'in-vocabulary' or 'out-of-vocabulary' (see the [documentation](https://developers.deepgram.com/documentation/features/keywords/#in-vocabulary--out-of-vocabulary-keywords)). If the words already exist in the model (whether you are using a general model or your own trained model), Deepgram will just put more emphasis on those keywords (which the model already knows exist), telling the AI to boost the confidence that those words were spoken. If you are using keywords to improve the transcription of words that don't exist in the general language model, keyword boosting can be slower. Sending a huge amount of keywords may affect the speed of the transcription creation. **It is recommended to use 10-100 keywords, with 100 really pushing the limits.** This is important for real-time transcription, but it may not be a concern to you if you are doing batch-processing of audio files.

The better Deepgram's general model gets at transcribing on its own, the less powerful the keywords tool is, since more confidence will be given to the transcription itself. Using keywords might not have an effect. If you add really high intensifiers to your keywords (see the documentation about [intensifiers](https://developers.deepgram.com/documentation/features/keywords/#intensifiers)), it might cause the transcription to overuse those keywords. You have to find the right balance, which comes with trial and error.

Finally, keywords **cannot boost phrases**, so if you are searching for a *first name* + *last name* combination, the boosting will happen individually for those two words, and you might see that one shows up correctly while the other does not.

The keywords feature is still in beta at this time, so please factor this into your usage. We are actively working to improve this feature.

### Other Common Scenarios

Here are some other possible scenarios for when **search** would be a great tool:

*   Your product uses Deepgram to provide captions to real-time streams or pre-recorded videos, and you want to be able to search the captions to find a topic or point that was discussed.
*   Searching for competitor or brand names from various types of media recordings, so you can gather information to help build strategies.
*   Searching for specific language phrases that imply dissatisfaction (such as profanity) so you can analyze situations when customers were not happy.

Here are some other possible scenarios for when **keywords** would be a great tool:

*   You haven't had an opportunity to train a custom model, but you have an idea of context-unique words that can improve the transcription.
*   You want to improve real-time transcription of a meeting by including keywords that are names of participants or company terms that will be used during the meeting.

## Final Thoughts

After chatting with Deepgrammers who build our Speech Recognition API, the incredible power of deep learning has become even more evident to me. Deepgram's **search** feature really exemplifies this. **Search** is a tool that can be used in so many different situations and gives us valuable information about a transcription. **Keywords** is more of an added layer to the already impressive Deepgram AI, used to improve the transcription.

ASR is not perfect and humans are not perfect, but we can use a tool like the Deepgram **search** feature to get data about a transcription and make really informed decisions about it. We can use the **keywords** feature to prompt the Deepgram technology to learn so that it performs better for our unique situation.

The AI of Deepgram isn't about to take over the world all by itself, but humans with the AI of Deepgram can build great things.

