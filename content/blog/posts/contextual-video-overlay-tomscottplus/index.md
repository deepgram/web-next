---
title: "Creating Contextual Video Overlays with TomScottPlus"
description: "How the team behind TomScottPlus used Deepgram to analyze YouTube videos in real-time and provide an overlay with Wikipedia links to read. Read more here."
date: 2022-03-17
cover: https://res.cloudinary.com/deepgram/image/upload/v1646146501/blog/2022/03/contextual-video-overlay-tomscottplus/cover.jpg
authors:
    - kevin-lewis
category: project-showcase
tags:
    - showcase
    - analysis
    - research
seo:
    title: "Creating Contextual Video Overlays with TomScottPlus"
    description: "How the team behind TomScottPlus used Deepgram to analyze YouTube videos in real-time and provide an overlay with Wikipedia links to read. Read more here."
shorturls:
    share: https://dpgr.am/bfad829
    twitter: https://dpgr.am/afe279a
    linkedin: https://dpgr.am/ced2dbb
    reddit: https://dpgr.am/76bdc62
    facebook: https://dpgr.am/0a64ab6
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454018/blog/contextual-video-overlay-tomscottplus/ograph.png
---

The team behind TomScottPlus used Deepgram to analyze YouTube videos in real-time and provide an contextual overlays with Wikipedia links to read. I sat down with Gwendolen Sellers, Harry Langford, [Maxwell Pettett](https://github.com/StolenCheese), and Tim McGilly to ask them about their project.

[Tom is an English YouTuber](https://www.youtube.com/TomScottGo) who mostly makes videos about geography, history, science, technology, and linguistics. His style is 'talk to camera' as he explains various nerdy topics, sometimes with cutaways to other experts explaining a concept.

<youtube id="cdPymLgfXSY"></youtube>

The team took their inspiration from Tom's YouTube experience, where he shares interesting facts that inspire watchers to learn more. As they talked about learning through YouTube videos, they all agreed that it was cumbersome to learn more about topics mentioned in the videos. They found themselves often pausing videos, opening a browser tab, and searching for a mentioned topic for further reading. That's how the idea for TomScottPlus was born. TomScottPlus is a Chrome extension that aims to make this as seamless as possible by providing clickable overlay for videos with contextual Wikipedia article links in a video overlay as topics are mentioned in the video.

![A frame from a playing video with Tom speaking. On the left side is a purple pane with a link to Wikipedia article "Coins of the pound sterling" with a short page summary underneath.](https://res.cloudinary.com/deepgram/image/upload/v1646146519/blog/2022/03/contextual-video-overlay-tomscottplus/screenshot.jpg)

When a YouTube video is visited, the Chrome extension sends a request to a Python application which downloads the audio and gets a high-quality transcript using the [Deepgram Python SDK](https://developers.deepgram.com/sdks-tools/) and our [utterances](https://developers.deepgram.com/documentation/features/utterances/) feature.

The Python application then performed basic Natural Language Processing to look for contextually-relevant words and look for matching data points on Wikipedia (which took several API requests making this quite computationally expensive even with batching). Data points were filtered based on relevance and returned to the Chrome extension, which would display data over the video.

You can check out the code for this [project on GitHub](https://github.com/StolenCheese/hackathon2022).

        