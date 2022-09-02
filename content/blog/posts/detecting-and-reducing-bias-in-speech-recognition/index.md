---
title: "Detecting and Reducing Bias in Speech Recognition"
description: "Machine learning bias is top of mind for many people. This blog post will teach you how to identify ASR bias and what to do about it."
date: 2022-03-09
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981409/blog/detecting-and-reducing-bias-in-speech-recognition/Detecting-Reducing-Bias-in-Speech-thumb-554x220%402x.png
authors:
  - chris-doty
category: ai-and-engineering
tags:
  - bias
seo:
  title: "Detecting and Reducing Bias in Speech Recognition"
  description: "Machine learning bias is top of mind for many people. This blog post will teach you how to identify ASR bias and what to do about it."
shorturls:
  share: https://dpgr.am/4911de4
  twitter: https://dpgr.am/d10214e
  linkedin: https://dpgr.am/a82d026
  reddit: https://dpgr.am/5852ee4
  facebook: https://dpgr.am/3da44b9
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981409/blog/detecting-and-reducing-bias-in-speech-recognition/Detecting-Reducing-Bias-in-Speech-thumb-554x220%402x.png
---

Bias in machine learning has been a hot topic in the news lately, and bias in ASR is no exception. In the recent [State of Voice Technology 2022 report](https://deepgram.com/state-of-voice-technology-2022/), we saw that 92% of companies believe voice technology bias has an important impact on their customers, including in the domains of gender, race, age, and accent (both native and non-native speaker). So how do you detect bias in your automated speech recognition (ASR) systems? And what do you do if you find it? We've got answers below. But before we dive in, let's start with a definition of what "bias" is to make sure we're all on the same page.

## Two Kinds of Bias

It's important to understand that when people talk about bias and machine learning, they might be talking about two different things. On the one hand, they might mean **real-world bias** related to things like race, gender, age, etc. But the term bias is also used in **machine learning** when a model is overpredicting or underpredicting the probability for a given category. That's true even if that category is something that we might not apply the term "bias" to in the real world. For example, a model developed by a brewery to track when its vats are at risk of overheating might sound the alarm frequently, even when there is no risk of overheating-a problem of machine learning bias, but not real-world bias. In many cases, though, when people talk about "machine learning bias" generally-especially in the media-they're referring to the intersection of real world and machine learning bias: a case where a model is overpredicting or underpredicting in terms of something like gender or race. With these definitions out of the way, let's turn to examining where bias comes from before moving on to how you might figure out if you've got bias in your ASR system, as well as what your next steps are if you've found it.

<WhitepaperPromo whitepaper="latest"></WhitepaperPromo>



## Where Does Bias Come From?

Machine learning bias often comes from data-biased data leads to a biased model. If you've taken a statistics course, you're familiar with **sampling bias,** which is when data that is supposed to represent the true range of possibilities is instead skewed in some way. If you use data like this to train a model, the model is going to be skewed in the same way as the data. This sampling bias can show up in your model as machine learning or real-world bias because many organizations who want to create models rely on their own past decisions. If your company has a history of making biased decisions, any model trained on that data will likewise be biased. For example, if a company that trains a model to help make promotion decisions has a poor track record of promoting women, it's likely that their model will make the same kinds of biased decisions if it's trained on the company's past behavior. In some cases, however, a model might be biased towards a certain group of people for less nefarious reasons. For example, an initial ASR model might simply be biased because it was trained on speech that was easy for the creator to collect-from themself, their family, and their friends, who likely all speak similarly. Here, the issue isn't biased past decisions, per se, but simply a lack of data to cover different possibilities.

## How to Detect Bias in ASR Systems

So how do you know if you've got bias on your ASR system? Detecting it is relatively easy on its face. For example, you might ask if your transcripts for some speakers have significantly higher [word error rates (WER)](https://blog.deepgram.com/what-is-word-error-rate/) than for other speakers. But even the answers to a simple question like this can sometimes be difficult to understand on their face. Language is infinitely varied, and even though we speak of, for example, "American English", this actually represents a wide range of linguistic variation, from Massachusetts to North Dakota to Alabama. And in other places around the world, the variation between dialects is sometimes even greater than what we see in the US. When you're thinking about how well your ASR system is performing, you're always going to encounter edge cases that it might have trouble understanding. For example, your model might encounter a non-native accent that it's never heard before-say, a native speaker of Polish who moved to South Africa at 16 and learned English there. To figure out if you've found bias in your ASR system, you need to be very nuanced in how you're looking at the data. For example, if you're finding a few sparse cases of poor transcripts in your ASR system, it could be that you're simply finding people with accents, like the Polish person mentioned above. In most cases, trying to chase down these edge cases and figure out how to fix them isn't going to be worth the time or effort, and isn't evidence that there's a systematic problem with your model. But what if the bias that you've detected seems to be for an entire group of people? Maybe you notice that your call center in the Southern US has transcripts that are consistently of poorer quality than call centers in other parts of the country. Because this looks like a systematic problem, rather than a one-off problem, you'll probably want to take some kind of action to address this bias.

## How to Reduce Bias in ASR Systems

Because of the wide-ranging variation in human speech, it's unrealistic to think that you're going to completely remove bias (in the machine learning sense) from ASR systems. Human beings, after all, sometimes have trouble understanding speakers of other dialects, or with non-native accents, and it's not realistic to expect that AI and ML is going to do better than this-at least, not yet. So the question becomes-when you find that your model is not doing a good job for a specific class of people, what do you do? **You can use that information to make your model better.** And you have two options for how to go about doing this.

### Option 1: Add Data to the Model

The first option is to add more data to your model. In this case, you retrain with a wider range of sample data to also include the varieties of speech that you've discovered your model doesn't perform well on. This can work to improve the model for everyone, especially if the varieties are relatively similar.  However, in some cases, this can be a mistake. If we take the example above, if you're a company in the US, it's unlikely that adding data for Polish-accented South African English is a good choice, even if you're dealing with a community of speakers. That's because doing so might end up making your model perform _worse_ for the majority of speakers you want it to handle. So what do you do if this is a population you want to cover, but you think adding data might reduce the model's performance overall? That's where the second option comes in.

### Option 2: Create Distinct Models

The second option is to create a new model specifically for the newly identified area where the main model is struggling. For example, a bank that has a lot of customers in Guam might discover that Guamanian English is challenging for the general model, and that if you add Guamanian speakers to your training data, the model's performance suffers for speakers in North America. The solution in these cases is to have two distinct models. If you've got a call center in Guam, for example, you could just use a Guam-specific model in that call center only, while you let your more general model run elsewhere. The prevents data from different varieties degrading the quality of a model, while also making sure speech of all relevant groups is transcribed correctly.

## Wrapping Up

As you can see, bias is far from straightforward, and there isn't a simple, one-size-fits all means of identifying bias in ASR systems and addressing it. It all depends on what you're seeing in your data, what populations you expect the models to work well on, and how similar the speech of those populations is to one another. But hopefully this post will serve as a guide for you as you're thinking through these issues. If you'd like to learn more about bias in speech recognition, and how it might even be able to help your ASR efforts, watch our on-demand webinar [When is Speech Recognition Bias a Good Thing?](https://offers.deepgram.com/when-is-speech-recognition-bias-a-good-thing-webinar-on-demand)
