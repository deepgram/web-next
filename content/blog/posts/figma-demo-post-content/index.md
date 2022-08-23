---
title: "Top 3 Use Cases for Speech-to-Text in Gaming"
description: "In the gaming industry, speech-to-text and voice recognition technology are becoming more and more commonplace."
date: 2022-08-19T16:15:44.129Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1660922192/blog/test-blog-post-image_akruql.png
authors:
  - tonya-sims
  - luke-oliff
  - kevin-lewis
category: speech-trends
tags:
  - test
  - demo
  - tags-go-here
---

In the gaming industry, speech-to-text and voice recognition technology are becoming more and more commonplace. This is due to the fact that they offer a number of advantages for both developers and players alike. In this blog post, we’ll cover some of the most common use cases for speech-to-text and voice technology in the video game industry. We’ll also discuss the benefits that these technologies offer to both developers and players. Let’s get started!

## 1. Voice-to-Text Chat

One of the main benefits of speech-to-text and voice recognition technology is improved communication. Although many video games offer voice chats, in some, players can only communicate with others via text. That means you have to stop playing the game briefly to type out your message in order to communicate.
But with in-game speech transcription, players can communicate by speaking and having the game transcribe what they’ve said so they don’t have to stop playing. This can be extremely beneficial for players who are trying to strategize or coordinate their gameplay, or when time is of the essence. In addition, text chat can also be used to simply chat with friends and other players.

## 2. Accessibility

Another benefit of speech-to-text and voice recognition technology is improved accessibility. This is because these technologies can allow players with disabilities to play video games that they otherwise would not be able to play. This can be extremely beneficial for players who want to be able to enjoy their favorite hobby, regardless of their physical abilities.
Voice commands, for instance, allow players to issue commands to their characters without having to use a controller or type them out. This can help players who have limited mobility or otherwise encounter challenges with traditional gaming interfaces. This winning project from the Gram Gamers category of our recent Deepgram + Dev Hackathon, for example, lets you control a video game character using only your voice. This technology can also let players use voice commands to navigate menus without having to use a controller or mouse.

## 3. Content Moderation

Speech-to-text and voice recognition technology can also be used for content moderation purposes by allowing developers to automatically moderate chat rooms and in-game chat. By converting speech to text, game developers can apply all of the same rules that they apply to text chats. And, with technologies like Deepgram that return results in real time, you can moderate conversations as they happen.
This helps keeping players safe from inappropriate or offensive content. In addition, content moderation can also be used to simply keep players from being disruptive to other players. Two companies in this space are Modulate.ai and Spectrum Labs.

## Want to Add Deepgram to Your Game?

If you’re curious how you might add speech-to-text to your game? We’ve got developer resources for that.
Check out How to Add Deepgram Speech Recognition to Your Unity Game and Playing With P5.js: Creating a Voice-Controlled Game for some tutorials looking at how easily Deepgram can be incorporated into what you’re building. You can also check out this project that we did to turn the 404 page on our developer site into a game if you need more gamespiration.

## Wrapping Up

As you can see, there are a number of use cases for speech-to-text and voice recognition technology in the gaming industry. These technologies offer a number of benefits to both developers and players alike. If you’re a developer, we encourage you to consider implementing these technologies into your next project. If you are a player, we encourage you to try out games that use these technologies. You might be surprised at how much they can improve your gaming experience!

### H3 example with icon bulleted list

- [ ] a Twilio account with a Twilio number (the free tier will work)
- [ ] a Deepgram API Key - get an API Key here
- [x] Rust installed
- [x] (optional) ngrok to let Twilio access a local server

### Numbered list and linked text

1. a Twilio account with a [Twilio number](https://twilio.com) (the free tier will work)
2. a Deepgram API Key - get an API Key here
3. Rust installed
4. (optional) ngrok to let Twilio access a local server

### Code snippet, supporting bulleted list, and code highlights

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Start>
    <Stream url="wss://INSERT_YOUR_SERVER_URL/twilio" track="both_tracks"/>
  </Start>
  <Say voice="woman" language="en">"This call may be monitored or recorded for quality purposes."</Say>
  <Dial>+11231231234</Dial>
</Response>
```

- `audio`: handle processing of audio data from Twilio
- `handlers`: handlers for the websocket endpoints `/twilio` and `/client`
- `message`: a helper module to convert between `axum` and `tungstenite` websocket messages
- `state`: will contain the definition for the global state of the server
- `twilio_response`: will contain definitions for Twilio's websocket message shape

The modules we declared are: `audio`, `handlers`, `message`, `state`, and `twilio_response`. We will go over each one, but briefly these will be for the following:

## Table Example: Linguistic Data

### 🇪🇸 Spanish

| Consonants | Symbol | word  | transcription |
| ---------- | ------ | ----- | ------------- |
| plosives   | p      | padre | “paDre        |
|            | b      | vino  | “bino         |
|            | t      | tomo  | “tomo         |
|            | d      | donde | “donde        |
|            | k      | casa  | “kasa         |
|            | g      | gata  | “gata         |
| affricates | tS     | nucho | “mutSo        |
|            | jj     | hielo | “jjelo        |

Normal text after a table

## Table Example: Various Metrics

| GPU  | Batch (hr/hr) | Previous Batch(hr/hr) | Streaming (# streams) | Previous Streaming (# streams) |
| ---- | ------------- | --------------------- | --------------------- | ------------------------------ |
| T4   | 1200          | 300                   | 450                   | 150                            |
| V100 | 1400          | 700                   | 450                   | 300                            |
| A100 | 3200          | —                     | 775                   | —                              |

<small>Table 1. Deepgram benchmark results as of February 11th, 2022.</small>
