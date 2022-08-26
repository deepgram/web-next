---
title: "Create Comic Books From Videos with yack!"
description: "Developers built a video and restyle it as a classic comic book using Deepgram's Speech Recognition API and computer vision. See how here!"
date: 2022-03-09
cover: https://res.cloudinary.com/deepgram/image/upload/v1646083965/blog/2022/03/comic-books-videos-yack/yack.jpg
authors:
    - kevin-lewis
category: project-showcase
tags:
    - showcase
    - computer-vision
    - hackathon
seo:
    title: "Create Comic Books From Videos with yack!"
    description: "Developers built a video and restyle it as a classic comic book using Deepgram's Speech Recognition API and computer vision. See how here!"
shorturls:
    share: https://dpgr.am/f0ae853
    twitter: https://dpgr.am/4bb8f13
    linkedin: https://dpgr.am/ed4384a
    reddit: https://dpgr.am/3530152
    facebook: https://dpgr.am/c7e98e3
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454016/blog/comic-books-videos-yack/ograph.png
---

The team behind yack! wanted to use Deepgram and computer vision to build a fun and novel project. What came out of it was an automatic video to comic generator, which has more complexity than you might think. I sat down with [Allan Zhang](https://github.com/WeixuanZ), [Andreas Economides](https://github.com/antroseco/), [Felix Chippendale](https://github.com/FChippendale), and [Tom Grant](https://github.com/DaveDuck321/) to ask them about their project.

yack! takes a video and restyles it as a classic comic book using Deepgram's Speech Recognition API and computer vision. The output looks a bit like this:

![A comic book with four panes. In each pane is Mark Zuckerberg. In the first and third is a speech box with text.](https://res.cloudinary.com/deepgram/image/upload/v1646083983/blog/2022/03/comic-books-videos-yack/screenshot.jpg)

Once a video is provided, yack! generates a transcript with Deepgram. Then, keyframes in the video are chosen. Frames are cropped, the image has some comic book styling applied, and captions are overlaid as speech bubbles. Finally, each 'tile' is placed in a dynamic SVG element which is rendered on the page.

That's... a lot.

## How It Works

The team got Deepgram working within the first hour of building, which freed the team to focus on more complex parts of the project. To make the returned transcript as useful as possible, they used our [utterances](https://developers.deepgram.com/documentation/features/utterances/) feature to understand what keyframes to show and [diarization](https://developers.deepgram.com/documentation/features/diarize/) to color text when different speakers are detected.

Once a key frame is chosen, computer vision is used to detect a speaker's location in the frame. It is then cropped to ensure faces are seen, that there's enough space for text to be overlaid, and that the aspect ratio is roughly maintained. During development, the face detection algorithm was one of the slowest parts -- taking up to 20 seconds -- though the team managed to speed this up slightly.

The style transfer then took place -- a set of simple visual tricks to make a real-life image look more comic-like -- reducing colors, finding edges and making them darker/bolder, and stacking. This was by far the slowest bit of the overall processing time - accounting for around 60%. Given more time this could be done with machine learning.

Finally, the text is overlaid, and a dynamic SVG is created. The placement of tiles is, in itself, an engineering challenge. The team used a block-claiming algorithm to have times 'claim' space on the page.

## Try It Out

The yack! team built a website for users to interact with and a Docker image to create a portable, scalable, and easily-deployable server.

You can try out yack! at [yack.ml](https://yack.ml)

        