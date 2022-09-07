---
title: Voice Control Your Browser with Stëmm
description: Leveraging both the Deepgram API & Chrome APIs into a Chrome
  extension that lets users control the browser hands-free with voice commands.
  Learn how we did it here.
date: 2022-03-07
cover: https://res.cloudinary.com/deepgram/image/upload/v1646056012/blog/2022/03/voice-control-browser-stemm/stemm.jpg
authors:
  - kevin-lewis
category: project-showcase
tags:
  - nodejs
  - hackathon
seo:
  title: Voice Control Your Browser with Stëmm
  description: Leveraging both the Deepgram API & Chrome APIs into a Chrome
    extension that lets users control the browser hands-free with voice
    commands. Learn how we did it here.
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661454056/blog/voice-control-browser-stemm/ograph.png
shorturls:
  share: https://dpgr.am/af2c780
  twitter: https://dpgr.am/7bd62ea
  linkedin: https://dpgr.am/57dae70
  reddit: https://dpgr.am/6b556e8
  facebook: https://dpgr.am/f8fce58
---

Back in January, we supported Hack Cambridge - a 24-hour student hackathon. The team behind Stëmm wanted to bring voice control to one of the most used applications globally - Google Chrome. I sat down with [Benedek Der](https://www.linkedin.com/in/benedek-dér-b8b410200/), [Bianca Sandu](https://www.linkedin.com/in/bianca-sandu-89b364202), [Julius Weisser](https://www.linkedin.com/in/julius-weisser-4895a61b8), and [Siddharth Srivastava](http://siddharthsrivastava0501.github.io) to ask them about their project.

The team behind Stëmm all study Computer Science at the University of Warwick, are friends, and most of them are also flatmates. While Hack Cambridge was their first in-person hackathon, at Hack Duke in October 2021, they built a Chrome extension that identified COVID facts in a webpage.

Most of the team met up a week before Hack Cambridge to start brainstorming ideas, not aware that themes would be announced on the morning. They marched down to the venue, electronics kit in hand, and realized they would need to rethink their game plan as soon as the opening ceremony took place.

## The Project

Fortunately, some of the team saw our live demo at the event that highlighted how easy it is to [get started with Deepgram's Speech Recognition API in the browser](https://developers.deepgram.com/blog/2021/11/live-transcription-mic-browser/). While they had to decide which sponsored challenge categories they would incorporate into their project, the team "instantly recognized the vast potential the Deepgram API gives developers by allowing us to use speech recognition in innovative ways within our projects" says Sid.

After bouncing around ideas, they chose to expand their knowledge from October's event. They landed on what would become Stëmm - the aim was to build a browser interface for users with motor disabilities. The team leveraged both the Deepgram API and Chrome API into a Chrome extension that, once installed and given microphone permissions, lets users control Chrome hands-free with voice commands like "chrome, open tab," "chrome, search for recipes," and "chrome, add bookmark."

<youtube id="8w6rmlqOW6o"></youtube>

## Command and Control

This use case category is very familiar to us at Deepgram - and we call it "command and control," which allows voice control of systems. Using Deepgram's [keywords](https://developers.deepgram.com/documentation/features/keywords/) and [search](https://developers.deepgram.com/documentation/features/search/) features, along with custom processing, you can build something similar in just a few lines of code.

We've seen it used in web applications, as an interface for games, and dedicated devices.

## The Hours Tick By

As you might imagine, Google has a strict set of security provisions for extensions, and during the hackathon this became the main challenge to overcome. I remember having multiple conversations with the Stëmm team over several hours and wondering if they'd be able to overcome the blockers and get their project working, especially given the vague error messages they were battling. Thankfully, they managed to work out the right configuration that allowed their extension to operate.

Once the extension could access a user's microphone and get transcripts from Deepgram, the result used a language processing algorithm built by Benedek & Bianca to identify the commands in the recorded text, and by integrating these commands with the Chrome developer tools, it executes them to control the browser.

The extension is still somewhat limited in terms of commands, but the team directly welcomes contributions to their project repository to add new features. You can find setup and contribution guidelines [directly on GitHub](https://github.com/siddharthsrivastava0501/hackcambridge-2022).
