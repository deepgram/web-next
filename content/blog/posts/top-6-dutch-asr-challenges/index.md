---
title: "Top 6 Dutch ASR Challenges: Diverse Dialects, Data, and Dictionaries"
description: "The history and diversity of Dutch present unique challenges when building a Dutch ASR system. Here are the top six."
date: 2022-04-21
cover: 
authors:
  - conner-goodrum
category: tutorial
tags:
  - ohsnap
seo:
  title: "Top 6 Dutch ASR Challenges: Diverse Dialects, Data, and Dictionaries"
  description: "The history and diversity of Dutch present unique challenges when building a Dutch ASR system. Here are the top six."
shorturls:
  share: https://dpgr.am/23361a6
  twitter: https://dpgr.am/12657d1
  linkedin: https://dpgr.am/1ae9ea5
  reddit: https://dpgr.am/e12bedd
  facebook: https://dpgr.am/0c2a7be
og:
  image: 
---

Dutch is an Indo-European language, spoken in Northern Europe, primarily in Holland and Belgium. The language has about 25 million native speakers, and another 5 million second language learners. The term "Dutch" actually encompasses two different language varieties-_Nederlands_, the variety of the language spoken in Holland, and _Vlaams_ (or Flemish in English), spoken mainly in Northern Belgium. The two varieties are so similar that they are largely mutually intelligible, and have the same International Organization for Standardization (ISO) code, although there are non-trivial differences in vocabulary and pronunciation between the two. This blog post outlines some of the challenges in training a Dutch automatic speech recognition model that works well on different varieties of the language, given the diversity that we see on the ground.

## 1\. Inflection

**Inflection** refers to the addition of prefixes or suffixes (or, indeed, infixes) to root words to indicate things like person, number, or tense. English has a relatively limited number of these inflectional suffixes. Regular verbs, for example, get an _-s_ in the present tense if the subject of the sentence is third person singular. _I sing_ and _you sing_ but _he/she/it sing_**_s_**. Nouns can also be inflected-regular nouns take an _-s_ suffix to indicate the plural. In Dutch, however, nouns and verbs have more inflectional possibilities than English-there are two options for the plural marker, for example, (_-en_ and _-s_) depending on the noun, as well as other suffixes-the [diminutive](https://en.wikipedia.org/wiki/Diminutive) _-tje_ or _-je_ 'small' is very common in Dutch-consider _aardbei_ 'strawberry' and _aardbeitje_ 'little strawberry'-and is used **productively,** meaning that it occur on almost any noun. In terms of ASR, all of this means that the dictionary that's used by a Dutch speech recognition model to tell it what words it might expect to find needs to be much larger than an English dictionary.

## 2\. Compound Words

Further complicating the issue with dictionary size, Dutch also has a large number of compounds (similar to German), and, like _-tje/-je_ discussed above, these compounds can be created productively by speakers. In English, these would be represented by different words, all of which would appear in the dictionary on their own. But with Dutch, if the compound a speaker creates isn't in the dictionary, the system can have trouble transcribing it correctly. Moreover, it's often the case that the Dutch speech recognition model will transcribe each portion of the compound word as its individual parts, which are more common, but put them into a compound. For example, _autoverzekering_ 'car insurance' is more likely to be transcribed as _auto verzekering_, as these individual words are more common than the compound. Even more so than with inflection, compounds create the potential for lots of unknown words to appear in speech that won't be present in the dictionary. And even if the compounds are known, it can still create vocabulary size issues. Numbers in Dutch are a great example of this. In English, larger numbers are written as a sequence of words-221 is _two hundred twenty one._ But in Dutch, this number is _tweehonderdeenentwintig_. In English, you only need 30 entries in the dictionary to get the numbers from zero to 100, but in Dutch, you need 101 unique entries.

## 3\. Different Dialects

There are many dialects spoken across the Netherlands and Belgium, and they aren't always widely understandable by people who speak a different variety. In the introduction, two large dialect groups were defined-_Nederlands_ and _Vlaams_-but the situation is actually much more complicated and diverse, with each of those two varieties having multiple different dialects subsumed under them. And Frisian-technically a different language, but extremely similar to Dutch (and English!)-is also sometimes included in the general Dutch language area, further complicating matters. This creates challenges when training an ASR model due to different spellings of words, different pronunciations, and altogether different vocabulary items-Flemish, for example, tends to have more words borrowed from French due to being in Belgium.  The dictionaries that models use have limited vocabularies, as discussed above, so you have two options. The first is to standardize everything to one type of Dutch, which requires laborious and careful preprocessing of data and can introduce ambiguities. This also brings into question whether it is actually correct to 'translate' a specific word in one variety of Dutch into another variety-especially if you want to create a model that can handle any kind of Dutch thrown at it. These changes can also [introduce bias](https://blog.deepgram.com/detecting-and-reducing-bias-in-speech-recognition/) into your work, making the model favor some varieties of the language over others. The second option is simply training your model on all of the data with the hopes it does decently well across all varieties. This is [easiest to do with deep learning](https://blog.deepgram.com/deep-learning-speech-recognition/), as you can iterate through different data sets quickly and easily.

<whitepaperpromo whitepaper="latest"></whitepaperpromo>



## 4\. Getting Large Amounts of Diverse Dutch Data

Another challenge of building a model for Dutch is finding a large enough _amount_ of the diverse data that you need to represent all of these different dialects. If you're going for the second option above and training a Dutch speech recognition model on as many varieties as possible, it's important that any data used for model training accurately represent the possible variation in the language. However, not all varieties are equally represented in readily available media and corpora. Maybe people might be bidialectal-they grew up speaking one dialect but might switch to the standard version when, for example, appearing on TV or lecturing in a classroom. This can make it difficult to get the data you need so that the model can understand everyone's words regardless of the speech context.

## 5\. Finding Diverse Validation Data

Related to the above, even if you have a large variety of data to train your model, it's still going to be a problem if you can't find sufficient data to validate and test it. During many machine learning projects, data is split at the beginning into a training set and testing set (the split can vary, but it's often something like 80/20). The model is trained on the training set, and then validated on the test set to see how well it performs. But if you already have limited data for some varieties, splitting it like this can leave you with too little data to train the model, too little data left over to test it on those varieties, or both.

## 6\. Time Required to Train and Test Models

All of the above issues-the diverse dialects, the amount and types of data needed, and limits on dictionary size-come together to create a temporal burden as well. It takes time to collect data, train models, and test them, and each of the complications above increases the amount of time needed to go from no model to accurate model. This problem is further amplified when you consider the time it takes to locate and collect-and potentially transcribe-data from the various dialects, given its rarity. We're fortunate at Deepgram that we use [end-to-end deep learning to train our models](https://deepgram.com/blog/deep-learning-speech-recognition/), which means that the retraining process is relatively straightforward. But if you're using a legacy system that combines several different systems together to generate text from audio, there's likely to be much more work involved to get an accurate model up and running for a language like Dutch.

## Wrapping up

These six challenges for Dutch automatic speech recognition can certainly be tricky, but they aren't insurmountable. With effective tools (like end-to-end deep learning) and data collection and validation procedures, accurate Dutch ASR models are possible. If you'd like to give our Dutch model a try (or [any of the other languages we offer](https://deepgram.com/product/languages/)), you can [sign up for a free API key](https://console.deepgram.com/signup) and get started today. Still have questions? [Contact us](https://deepgram.com/contact-us/) and we can talk through your use case and see how we can help.
