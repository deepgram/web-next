---
title: "Practice Spelling Bees with Spelling Hero"
description: "We speak to the developers behind Spelling Hero - a spelling bee simulator complete with contextual usage and multi-difficulty. Learn more here."
date: 2022-04-05
cover: https://res.cloudinary.com/deepgram/image/upload/v1646255609/blog/2022/04/practice-spelling-bees-hero/cover.jpg
authors:
    - kevin-lewis
category: project-showcase
tags:
    - showcase,
    - hackathon,
    - javascript,
    - creative-coding
seo:
    title: "Practice Spelling Bees with Spelling Hero"
    description: "We speak to the developers behind Spelling Hero - a spelling bee simulator complete with contextual usage and multi-difficulty. Learn more here."
shorturls:
    share: https://dpgr.am/455e820
    twitter: https://dpgr.am/3a18a36
    linkedin: https://dpgr.am/9ca137c
    reddit: https://dpgr.am/3980f53
    facebook: https://dpgr.am/d7a84ce
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454069/blog/practice-spelling-bees-hero/ograph.png
---

The Scripps National Spelling Bee is America's longest-running educational competition - its primary goal being to help young people increase the size of their vocabulary through practice and a friendly competitive atmosphere. The team behind Spelling Hero wanted to simulate this great educational experience in the browser. I sat down with [Judah Daniels](https://www.linkedin.com/in/judah-daniels/), [Leon Zhang](https://www.linkedin.com/in/leon-bz/), [Saksham Shah](https://www.linkedin.com/in/saksham-shah-9803581b9/), and [Saomiyan Mathetharan](https://linkedin.com/in/saomiyan-mathetharan) to ask them about their project.

Spelling Hero is a spelling bee simulator to emulate the experience of participating in a spelling bee competition. Users select a difficulty level, and the browser speaks a word aloud. Players then have to spell out the word to complete the level.

![Easy mode. Word 1 of 5 with a score of 1. The word 'answer' is in green and displayed as correct. Several buttons read start spelling, repeat word, definition, language of origin, type of word, and example of sentence.](https://res.cloudinary.com/deepgram/image/upload/v1646255611/blog/2022/04/practice-spelling-bees-hero/screenshot.png)

Spelling Hero's data was manually curated in this first version, and each word also includes a definition, origin, type, and a sample sentence - all options given to spelling bee participants.

The team used the Deepgram Speech Recognition API to understand a user's voice input, basing their code on our [Browser Live Transcription](https://developers.deepgram.com/blog/2021/11/live-transcription-mic-browser/) tutorial. The user interface was built with P5.js ([see our P5.js tutorial here](https://developers.deepgram.com/blog/2022/03/p5js-getting-started/)), and you can check out the [code on GitHub](https://github.com/saksham-shah/deepgram-game).

