---
title: "Add Live Speech Bubbles To YouTube Videos with Autobubble"
description: "Using facial recognition and speech recognition to create live speech bubbles."
date: 2022-03-04
cover: https://res.cloudinary.com/deepgram/image/upload/v1646039788/blog/2022/03/autobubble-youtube-speech-bubbles/AutoBubble.jpg
authors:
    - kevin-lewis
category: project-showcase
tags:
    - showcase
    - facial-recognition
    - nodejs
seo:
    title: "Add Live Speech Bubbles To YouTube Videos with Autobubble"
    description: "Using facial recognition and speech recognition to create live speech bubbles."
shorturls:
    share: https://dpgr.am/54a290e
    twitter: https://dpgr.am/ae46666
    linkedin: https://dpgr.am/75df551
    reddit: https://dpgr.am/91c9f29
    facebook: https://dpgr.am/dbcb307
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454009/blog/autobubble-youtube-speech-bubbles/ograph.png
---

Back in January, we supported Hack Cambridge - a 24-hour student hackathon. The team behind AutoBubble wanted to see if they could improve the display of captions for online videos. I sat down with [Andy Zhou](https://github.com/Flesh12138), [Conall Moss](https://www.linkedin.com/in/conall-moss-408037221/), [Dan Wendon-Blixrud](https://dwb.no), and [Lochlann-B Baker](https://github.com/Lochlann-B/) to ask them about their project.

## The Project

"There were a lot of challenges and prompts at Hack Cambridge, but the Deepgram challenge was both the most flexible and the coolest" explains Conall. "We knew we were going to use it but then had to think of an idea."

Dan continues: "A lot of speaker communication comes through facial expressions, and while closed captions are super useful, they are generally in a fixed position. We wanted to build a project which allows for captioning while allowing the depth of expression."

With that, AutoBubble was born. It is a Chrome extenion that uses facial recognition and Deepgram's Speech Recognition API to place captions next to a speaker's face in a YouTube video.

![A screenshot of a video with a man speaking - head in the middle of the frame. To the right of his head is a sentence, with all-but-the-last word slightly bolded.](https://res.cloudinary.com/deepgram/image/upload/v1646039808/blog/2022/03/autobubble-youtube-speech-bubbles/screenshot.jpg)

## First-Time Hackers

The team behind AutoBubble are all first-year Computer Science students at the University of Cambridge and, amazingly, were taking part in their very first hackathon. All of the team had the same sentiment. In the words of Lochlann:

> I expected a super intense competitive event, but it was chill, social, and friendly. All of the activities aside from hacking led to an excellent experience and environment to build a project.

## Building AutoBubble

As soon as the team landed on an idea, they broke it down into pieces and assigned work to each member. They created a shared document to detail what each of their modules would do and the expected inputs/outputs, making it much easier to glue the project together at the end.

Conall got to work on integrating Deepgram, and thanks to the [documentation](https://developers.deepgram.com/documentation/), [tutorials](https://developers.deepgram.com/blog/categories/tutorial/), and [example projects](https://developers.deepgram.com/use-cases/), he could treat them as building blocks to build what they needed.

Meanwhile, Lochlann started to work on facial recognition with [face-api.js](https://github.com/justadudewhohacks/face-api.js), which was a challenge. Still, the moment he overcame the hurdle and got it working, the team knew it provided many cool opportunities for this project.

Andy built the simple but effective UI for the project, and described that "care was put in to how the captions were styled, including a subtle indication of when a word in a phrase was said. A lot of balancing took place in the finer details of the captions themselves - making sure they weren't too long to be distracting, while also not too short that they disappear too quickly."

Dan built the Chrome extension to act as the glue for the project, and the team's shared document made this a lot easier. As a note, I have been involved with hundreds of hackathons, and I have never once seen a team be so intentional with documentation from the outset. It seems to have really paid off!

## The Winner Is...

There were nearly 30 projects that incorporated Deepgram at Hack Cambridge, but this simple idea with a rock-solid execution was super impressive. Once the extension is installed, any YouTube video could start receiving these new captions, and they looked great.

If you're interested in seeing how AutoBubble was built, you can find the code across two repositories - one for the [server](https://github.com/dantechguy/autobubbleserver) and one for the [client](https://github.com/dantechguy/autobubbleclient).

        