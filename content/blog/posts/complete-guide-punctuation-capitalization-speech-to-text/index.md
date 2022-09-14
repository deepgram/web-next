---
title: The Complete Guide to Punctuation & Capitalization in Speech-to-Text
description: Punctuation and capitalization make text more readable, but they
  aren’t a part of every ASR system. In this post, youll learn why they matter.
date: 2022-08-17
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981431/blog/complete-guide-punctuation-capitalization-speech-to-text/mplete-guide-to-punctuation-capitalization-in-spee.png
authors:
  - chris-doty
category: tutorial
tags:
  - language
  - word-error-rate
seo:
  title: The Complete Guide to Punctuation & Capitalization in Speech-to-Text
  description: Punctuation and capitalization make text more readable, but they
    aren’t a part of every ASR system. In this post, youll learn why they
    matter.
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981431/blog/complete-guide-punctuation-capitalization-speech-to-text/mplete-guide-to-punctuation-capitalization-in-spee.png
shorturls:
  share: https://dpgr.am/9da2db0
  twitter: https://dpgr.am/2edede0
  linkedin: https://dpgr.am/7e36e39
  reddit: https://dpgr.am/240a42e
  facebook: https://dpgr.am/db5fb50
---
Do you ever get frustrated when you're trying to dictate a text message or email and your phone keeps capitalizing the wrong words? Or adding extra periods at the end of your sentences? You're not alone! Automatic speech recognition for punctuation and capitalization can be tricky. In this blog post, we'll explore what punctuation and capitalization mean, how they're used, and some of the problems they present for speech-to-text solutions. We'll also explain what your best option for a speech recognition solution is if you need a transcript that's punctuated and capitalized correctly. To get started, let's take a look at what punctuation and capitalization are, how they're used, and how they different cross-linguistically.

## What is Punctuation?

Punctuation characters are symbols that are used to indicate the structure and organization of a text. In the West, [the tradition of punctuation dates from the 3rd Century BCE](https://www.bbc.com/culture/article/20150902-the-mysterious-origins-of-punctuation). Before that, texts in languages like Greek and Latin were written without any punctuation or capitalization at all-and even without spaces between words! Today, punctuation marks are used, among other things, to separate words and phrases and indicate when a sentence is ending. In English, the most common punctuation characters are the period ( . ), comma ( , ) question mark ( ? ), and exclamation point ( ! ), but there are many others, including the semicolon ( ; ), colon ( : ), dash ( - ), parentheses ( (...) ), and quotation marks ( "..." ). But other languages have different punctuation standards. In German, for example, quotation marks often appear as ( «...» ). Japanese punctuation, although somewhat inspired by how Western languages punctuate, uses its own symbols, using ( 。) instead of a period/full stop, and ( 、) for commas. Other languages have entirely separate traditions of punctuation, marking things that we wouldn't in English or other Western languages. If we look at Tibetan, for example, we find characters that mark the break between syllables ( ་ ), symbols for the end of a section of text ( ། ) and a larger topic ( ༎ ), and a character that marks the start of a text ( ༄ ).

### What is the Purpose of Punctuation?

The main function of punctuation is to make a text more understandable. As mentioned above, prior to punctuation, words were written in a singlestreamofcharacterslikethis, which made texts challenging to read. Language is, first and foremost, a spoken or signed system of communication, and not a written one. That means we often need some help to make sure that we can understand what's being communicated in writing, and punctuation is one of the tools that we use to do that (along with other things like spelling according to the relevant standard). For example, if someone's speaking out loud, you're unlikely to confuse "Let's eat, Grandma!" and "Let's eat Grandma!"

But in writing, it's the comma that makes the difference. Punctuation helps by providing some sense of the intonation and pacing that would occur if a sentence was spoken out loud. For example, commas are used to mark brief pauses between words or phrases, while periods are used to mark the end of a sentence, what linguistically we might call an intonational unit. In both cases, these pauses have specific acoustic features that indicate what a speaker is doing when spoken out loud. Likewise, question marks and exclamation points can be used to show excitement or emphasize a point, again reflecting how a sentence would be pronounced and serve to influence the way that a sentence is read. By including punctuation marks like this in writing, the written word is brought closer to the spoken word.

Organization of a text is another purpose of punctuation. For example, semicolons and colons are often used to list items, while dashes can be used to separate parts of a sentence and quotation marks are used to set off dialogue or direct quotes from other sources. These features might not exactly match certain pauses or intonation in the same way that a question mark does, but they still serve to help make a text more understandable. For example, English has a particular intonation for lists-if I say "I need three things: milk, bread, and eggs" there's a pause at the colon, then rising intonation on "milk", then a pause, then rising intonation on "bread", then a pause, and then falling intonation on "eggs". This pattern helps our listeners understand that we're listing things off, but it's spread across several words, and doesn't occur only where the colon does.

## What is Capitalization?

Capitalization is the process of making a letter capital, or upper case. In English, we typically use capital letters to begin sentences and proper nouns, or for emphasis in casual writing. Proper nouns are the specific names of people, places, things, or organizations. For example, "Susan," "New York City," and "Nintendo" are all proper nouns.  Other languages have different standards for capitalization. In German, you capitalize *every* noun, not just proper nouns. And many languages don't have capital letters at all. Arabic, Hebrew, Japanese, Chinese, Hindi-no "capital" option exists in these languages.

Although capitalization isn't found in all languages, it's still important to consider it along with punctuation when thinking about ASR. To some extent, this is because in many Western languages, the two go together-a period marks the end of one sentence, and a capitalized word marks the start of the next. Additionally, these have often been thought of as the same kind of problem and been treated together historically, so it makes sense to think about them together.

## Why Punctuation and Capitalization Matter for Speech Recognition

Typically, ASR systems don't output punctuation or capitalization-the ASR transcripts that you get just consist of lower-case words without any punctuation at all. If you're planning to use your transcripts as the input for machine learning, you might not need to worry about punctuation at all. Typically, these systems are happiest working with unformatted text. However, there are a couple of reasons why you might want your text to be formatted. The first is that, without this formatting, the texts can be hard for humans to read. Just take a look at the snippet below, from [Deepgram's transcription of NASA's first all-female spacewalk](https://deepgram.com/asr-comparison/compare-accuracy/select-alternative/), and you can see how hard it is to figure out what's happening without capitalization and punctuation.

> and jessica and christina we are so proud of you i'm gonna do great today we'll be waiting for you here in a couple of hours when you get home i'm gonna hand you over to stephanie now have a great great eva drew thank you so much and our pleasure working with you this morning and i'm working on getting my ev hat open and i can report is open and stowed

If you want something that's readable by humans, capitalization and punctuation are necessary to make things clearer. You can see the same NASA text below, but with capitalization and punctuation (as well as [diarization](https://sweet-pie-c52a63-blog.netlify.app/what-is-speaker-diarization/)-breaking up the transcript to isolate different speakers).

> \[SPEAKER 1:] ...and Jessica and Christina, we are so proud of you. I'm gonna do great today. We'll be waiting for you here in a couple of hours when you get home. I'm gonna hand you over to Stephanie now. Have a great great EVA.
>
> \[SPEAKER 2:] Drew, thank you so much. And our pleasure working with you this morning, and I'm working on getting my EV hat open and I can report. Is open and stowed.

It's obvious, even at a glance, how much easier it is to read a text like this than it is to read the kind of stream-of-consciousness we see without punctuation and capitalization.  Another use for punctuation in speech-to-text relates to [sentiment analysis](https://sweet-pie-c52a63-blog.netlify.app/sentiment-analysis-emotion-regulation-difference/). Punctuation marks can be used to divide a text into sections so that you can ask "what's the sentiment in this particular chunk of the transcript?" If you have a transcript from an hour-long call, it's more granular to look at sentiment in small chunks, rather than across the whole call, which punctuation makes easier to do. So how do we get ASR transcripts that have punctuation and capitalization? Let's take a look.

## How Punctuation in Automatic Speech Recognition Works

If you need punctuation in your transcripts, what are your options? ASR providers typically have two ways of getting punctuation into a transcript. The first is a separate punctuation and capitalization model that runs after the text has already been generated by the speech-to-text model. Because punctuation is often a reflection of how something would be said out loud, this method, based only on the text, can create some less-than-useful outputs. This can be shown with a simple example. What is the correct punctuation for the sentence below?

> sam ate dinner

You might have said "a period", which is probably what one of these *post hoc* models would have said. But is this a question or a statement? From the text alone, without any context, it's impossible to determine-it could be a statement or a question. If I played the audio for you, though, you'd immediately understand whether the sentence is a question or a statement based on the speaker's intonation. Determining the correct punctuation in this case is impossible with the words alone; it's much easier if you have access to the audio.

This leads us to the second way to add punctuation to a transcript. If you're using an [end-to-end deep learning system](https://sweet-pie-c52a63-blog.netlify.app/deep-learning-speech-recognition/) as part of the process to generate your transcript, it's possible to have it output punctuation and capitalization at the same time as the words. A model that creates both text and punctuation can make decisions based on acoustic information, which is often the difference between good and bad punctuation. Let's consider another example. 

<WhitepaperPromo whitepaper="latest"></WhitepaperPromo>

Consider how the word "huh" might be used in speech:

* Huh? = "What did you say?"
* Huh!? = "What are you talking about?!"
* Huh. = "Oh, I see."

All of these are clearly different to a native speaker of English, and you'd have no trouble picking out which meaning was intended from speech (and the punctuation here probably helped you know how I intended these to be read). But in the context of an ASR transcript, knowing which meaning was intended would be very difficult, which is why using the audio is so critical. But even with access to the audio, automatic punctuation can still be tricky. Why? There are three main reasons. The first is that people don't always speak in sentences. If they're reading a speech they probably will, but if you listen to how people speak in meetings or casual settings, you'll find that they often don't speak in tidy ways.

This can make it difficult to decide how something should be punctuated since there aren't clear rules for punctuating text that's derived directly from spoken language. Second, people can disagree on punctuation. Some examples include when and where commas get used (I'm looking at you, [Oxford comma](https://thewritelife.com/is-the-oxford-comma-necessary/)), whether two sentences should be separated by a period or a semicolon, and if side thoughts should be put-inside em-dashes-or (inside parentheses). Because of these variations, it can be challenging to get punctuation to seem exactly right to everyone looking at a transcript (or even a written work like this blog post, for example). Finally, deep learning systems for speech recognition typically use small windows of audio to make predictions about what word is being said. This works well at the level of individual sounds, but can be tricky with intonation, which is one of the main things a system might look at to determine punctuation. That's because intonation patterns can be spread across multiple words within a phrase, meaning any given window might not have all the information it needs to make the best prediction possible.

One solution that some vendors have used to address this problem is having a second script that runs after the first model that doesn't seek to punctuate or capitalize the text, but rather to double-check that what the model output is correct. This can serve as a kind of spelling and grammar check after the fact to help make sure that the punctuation looks correct.

## How to Evaluate Punctuation and Capitalization Accuracy

So how do you evaluate the accuracy of different punctuation and capitalization methods? You can do similar calculations that are used for [word error rate (WER)](https://sweet-pie-c52a63-blog.netlify.app/what-is-word-error-rate/), a standard way of calculating the accuracy of ASR transcripts. For punctuation, we use the Punctuation Error Rate (PER). When calculating the PER, we care about how punctuation is placed relative to the words (its grammatical accuracy); PER is thus the number of punctuation errors (including misplacements relative to the truth words) divided by the number of truth punctuation tokens; i.e., number of real places that should have punctuation, as seen below. 

![](https://res.cloudinary.com/deepgram/image/upload/v1661976861/blog/complete-guide-punctuation-capitalization-speech-to-text/per_def.png) 

The Capitalization Error (CapER) is used for capitalization accuracy, and has its own subtlety. If we were to compare capitalization across all words in a text, we'd have a very skewed metric because most words aren't capitalized. Rather than comparing the first letter of all words in the truth/predicted sequences, we compare just the aligned words which are capitalized in the truth and/or predicted text. 

![](https://res.cloudinary.com/deepgram/image/upload/v1661976861/blog/complete-guide-punctuation-capitalization-speech-to-text/caper_example.png) 

In the example above, we see that there are two capitalization errors in a sentence with only two capitalized words in the truth text.

## Deepgram's Punctuation and Capitalization for ASR Offerings

As we've seen, end-to-end deep learning systems like Deepgram that have access to acoustic information provide the best option for punctuating and capitalizing a text based on a spoken audio file. At Deepgram, we offer punctuation for all of our models, in any of the languages that we offer-all for free; capitalization is also included for relevant languages. Both punctuation and capitalization have been optimized for each language and use case model. [Check out our documentation for all of the details about how Deepgram punctuation and capitalization work](https://developers.deepgram.com/documentation/features/punctuate/). 

## Wrapping Up

If you'd like to give Deepgram's speech-to-text solution a try-whether you need punctuation or not-you can [sign up for a free trial and get $150 in free credits](https://console.deepgram.com/signup), or [reach out to a member of our team](https://deepgram.com/contact-us/) to discuss how Deepgram can help your business achieve its goals.