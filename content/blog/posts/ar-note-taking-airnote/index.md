---
title: "Collaborative Augmented Reality Note-Taking with AiRNote"
description: "The team behind AirNote utilized Deepgram's Speech Recognition API to create an app for generating, editing, and customizing AR sticky notes in a collaborative environment. Read more here."
date: 2022-04-28
cover: https://res.cloudinary.com/deepgram/image/upload/v1651110485/blog/2022/04/ar-note-taking-airnote/cover.jpg
authors:
    - kevin-lewis
category: project-showcase
tags:
    - hackathon
    - augmented-reality
seo:
    title: "Collaborative Augmented Reality Note-Taking with AiRNote"
    description: "The team behind AirNote utilized Deepgram's Speech Recognition API to create an app for generating, editing, and customizing AR sticky notes in a collaborative environment. Read more here."
shorturls:
    share: https://dpgr.am/9c55e61
    twitter: https://dpgr.am/324762a
    linkedin: https://dpgr.am/79a2e5a
    reddit: https://dpgr.am/0e48208
    facebook: https://dpgr.am/72043a0
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454058/blog/ar-note-taking-airnote/ograph.png
---

The team behind AirNote wanted to bring a fun and novel way to collaborate around note-taking. I sat down with [Peter Zhang](https://pzhang.net), [Shuntian Liu](https://www.linkedin.com/in/shuntian-liu-27b839170/), [Sudarshan Sreeram](https://www.linkedin.com/in/sudarshan-sreeram/), and [Tom Zhao](https://www.linkedin.com/in/zhaoxuan0914/) to ask them about their project.

This was a project of many 'firsts' for the team, who made the decision to try out technologies they had not built with before.

Sudarshan tells me that their interest in Augmented Reality goes back to attending the Apple Worldwide Developer Conference in 2018, where they had a [table-based AR game with iPads](https://developer.apple.com/documentation/arkit/swiftshot_creating_a_game_for_augmented_reality). "AR was an area we wanted to experiment with and often gets overlooked in the wider set of iOS features." he says.

Tom continues, "We explored a few demos from the Apple Developer site. They have an AR game project demo, so we explored building a game first, and that naturally evolved into a shared AR workspace."

Having seen our [Deepgram 5-minute demo](https://blog.deepgram.com/live-transcription-mic-browser/), they had the idea for AiRNote: an interactive, collaborative note-taking application using Augmented Reality.

![An iPhone being held with the camera open pointing at a table. On the table is a green post-it note. Overlaid is a text box with the current speech being displayed, and an 'add note' button at the bottom of the screen.](https://res.cloudinary.com/deepgram/image/upload/v1651110488/blog/2022/04/ar-note-taking-airnote/airnote-pic.png)

## Building AirNote

Shuntian was in charge of building the app's integration with Deepgram's Speech Recognition API and used our [Live Transcriptions with iOS](https://blog.deepgram.com/ios-live-transcription/) blog post as a starting point. Thankfully, many of the snippets from our iOS post could be copied and pasted, meaning less time learning to use Deepgram and more time focusing on complex parts of their project.

Because there were so many new things for the AiRNote team to learn, they had to overcome a number of challenges, including learning how to write a native iOS app with ARKit and RealityKit, how to use Blender to create 3D models of sticky notes and pins, and how to collaborating on an XCode project - which, I'm told, was not the easiest thing to do while using git version control.

I only know the most basic concepts in iOS development, but Sudarshan also spoke about an experience I have encountered first-hand - for anything but the most simple apps, the Apple documentation forces developers to go down many rabbit holes to learn the pre-requisite skills needed to be successful.

The team managed to overcome their challenges and build a compelling demo that I had the pleasure to try out. For further development, the team wants to add more ways of interacting with other users, such as supporting drawings, file sharing, or even the ability to share any AR object in the session.

You can see the code behind [AiRNote on GitHub](https://github.com/lambda-shuttle/Airnote).

        