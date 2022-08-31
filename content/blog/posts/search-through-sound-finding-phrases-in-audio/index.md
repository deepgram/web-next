---
title: "Search Through Sound: Finding Phrases in Audio"
description: ""
date: 2016-01-07
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981169/blog/search-through-sound-finding-phrases-in-audio/search-through-sound%402x.jpg
authors:
  - undefined
category: company_news
tags:
  - asr
  - automatic-speech-recognition
  - speech-to-text
seo:
  title: "Search Through Sound: Finding Phrases in Audio"
  description: ""
shorturls:
  share: 
  twitter: 
  linkedin: 
  reddit: 
  facebook: 
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981169/blog/search-through-sound-finding-phrases-in-audio/search-through-sound%402x.jpg
---

![](https://res.cloudinary.com/deepgram/image/upload/v1661721060/blog/search-through-sound-finding-phrases-in-audio/Screen-Shot-2016-01-25-at-7-42-58-PM.png) My Co-Founder and I were kicking around the idea of a search engine that would let a person find phrases in a block of audio. We were looking for something that could peer into interviews, podcasts, video lectures - things like that. And if it was done right, you would be able to search through many seasons of a certain TV show and find all the crucial moments like, "You're fired!". We thought, _'This has to exist, right?'_. Surprisingly, no. There wasn't a company out there that really provided the functionality. Certainly not in a way that was useful to us, at least. So we started hacking together a Google-based transcription to see if we can get a barebones prototype going. In a couple days it was running - _search for something,_ and _most of the time_ you got it. Huge pat on the back, right?

### Speech recognition is hard.

Reality hit us when we noticed a problem. Sometimes the phrase was definitely spoken-you could hear it plain as day in the audio stream-but the search missed it. It turns out this is due to the inaccuracy of automatic speech transcription software. We went on a quest to get our hands on some top quality speech recognition bad-assery. What we were met with was another dose of reality; _speech recognition is hard_. More evidence emerges when you dig into the current audio research scene and notice that this topic is still a very active topic. The big tech companies (Google, Microsoft, Apple, etc.) put forth large efforts to get this sort of thing right. Even after that, you generally only get 90% word accuracy. That's on very clean, well recorded speech. With input sources containing conversational speech of questionable quality-say, YouTube videos-the word error rate get pretty bad (more than half is wrong sometimes!).

<whitepaper whitepaper="latest"></whitepaper>



### Can audio search work well?

This got us wondering, _'can we improve the audio search situation?'_. We landed on something we think is pretty good- search based on how a phrase sounds, not on the precise spelling in text. We were sure this would provide better results but we weren't sure just how much better it would be. We dug into research to see if this technique had been tried in a production form. We turned up quite a few papers-most were not totally relevant-but a Google academic paper on searching through political speeches from 2008 was striking. _'What was their method?'_, you might wonder. They used just regular old text transcription with no additional incorporation of the way the audio actually sounded. Bummer, right?

### Use the way words sound

What we were stumbling across was what speech researchers call **keyword search**. There is an existing method for doing this called acoustic keyword spotting, but that requires reprocessing the data every time for each and every search - that's totally impractical. So, yeah, applying this idea is a fairly difficult problem. We didn't really know just how hard at the time, but we know now (eight months of coding our first search engine and starting a company along the way helps beat that into you). [Our API](https://developers.deepgram.com/) allows you to upload audio and have the server process that audio into a giant searchable lattice. With a lattice like this, you can fuzzily go through the entire audio file for your search phrase in a fraction of a second. There is a huge improvement using this method when compared to the text-based approach - search recall goes from a tepid 45% to a grin-inducing 90%+. [Now we have our secret sauce](https://www.deepgram.com/).

* * *

_A year and a half after writing this post, NVIDIA's Jensen Huang demonstrated the power of our search on stage at GTC China._<iframe src="https://www.youtube.com/embed/1SxygN_MODg" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
