---
title: "Use Your Voice to Draw with ARTiculate"
description: "The team behind ARTiculate created a React and P5.js application for voice-based drawing to increase access to creative expression. Learn more here."
date: 2022-03-24
cover: https://res.cloudinary.com/deepgram/image/upload/v1646222951/blog/2022/03/draw-with-your-voice-articulate/cover.jpg
authors:
    - kevin-lewis
category: project-showcase
tags:
    - showcase,
    - hackathon,
    - accessibility,
    - creative-coding
seo:
    title: "Use Your Voice to Draw with ARTiculate"
    description: "The team behind ARTiculate created a React and P5.js application for voice-based drawing to increase access to creative expression. Learn more here."
shorturls:
    share: https://dpgr.am/affd39a
    twitter: https://dpgr.am/f149c68
    linkedin: https://dpgr.am/93e9199
    reddit: https://dpgr.am/154e84e
    facebook: https://dpgr.am/0fe8a51
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454024/blog/draw-with-your-voice-articulate/ograph.png
---

The team behind ARTiculate wanted to increase access to artistic expression for people who can't use traditional input devices. I sat down with [Dan Gooding](https://github.com/DanGooding), [Max McGuinness](https://github.com/mgm52), [Tatiana Sedelnikov](https://github.com/tatiana-s), and [Yi Chen Hock](https://github.com/yichenhock) to ask them about their project.

Since the pandemic began, drawing games and applications focused on creative expression have taken off as a way of connecting to people. However, these experiences rarely consider users with disabilities or provide a second-class experience.

The team explained, "It was apparent to us that in the domain of speech recognition for accessibility, there are many applications for practical matters like word processing and filling out forms, but far fewer for expressing yourself and creating art. We believe that this is an unfortunate missed opportunity and one we wanted to address."

Yi Chen found [a paper from researchers at the University of Washington detailing VoiceDraw](https://faculty.washington.edu/wobbrock/pubs/assets-07.03.pdf) - a drawing application for people with motor impairments. VoiceDraw uses sounds to control the experience, such as vowels for joysticks. It is complex, powerful, but hard to learn. And, with the inspiration to speak commands to improve the learning curve, ARTiculate was born.

## The Project

ARTiculate introduces a hands-free drawing experience. Commands like "bold," "down," and "go" control the brush. Also baked into the project are making the most of a new input modality, advanced features include voice-controlled color mixing, "shortcuts" to jump between bounded regions of the painting, and a velocity-acceleration mode for the brush.

![A browser showing a white canvas with a GitHub mascot drawn.](https://res.cloudinary.com/deepgram/image/upload/v1646222952/blog/2022/03/draw-with-your-voice-articulate/screenshot.jpg)

Thanks to Deepgram's Speech Recognition API and our [documentation](https://developers.deepgram.com/documentation/), the team got a minimal viable project completed very quickly. Then, they expanded the use of Deepgram to utilize our [search](https://developers.deepgram.com/documentation/features/search/) feature to find command words.

The canvas was built with [P5.js](https://p5js.org), a library for creative coding in JavaScript. We just finished publishing a [three-part series on using P5.js](https://developers.deepgram.com/blog/2022/03/p5js-getting-started/) earlier this week. The team also utilized React, enabling team members to work on their own components and easily glue them together into a complete application later. Because the team created a highly-visual application, they focused attention to detail on smaller elements, such as animations.

The team has plenty of extensions planned, including the ability to fluidly pull images from online and insert them into the canvas, and additional accessibility options such as custom voice commands and color-blindness options to assist with color mixing.

You can try ARTiculate by visiting [art-iculate.netlify.app](https://art-iculate.netlify.app).

