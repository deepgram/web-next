---
title: "Sharpen Your Foreign Language Skills with Triolingo's Chatbot"
description: "With Deepgram and GPT-3, the team behind Triolingo created a realistic multilingual chatbot to help language learners gain confidence in conversation. Read about it here."
date: 2022-03-17
cover: https://res.cloudinary.com/deepgram/image/upload/v1646156543/blog/2022/03/foreign-language-practice-triolingo/cover.jpg
authors:
    - kevin-lewis
category: project-showcase
tags:
    - showcase,
    - machine-learning,
    - gpt-3,
    - hackathon
seo:
    title: "Sharpen Your Foreign Language Skills with Triolingo's Chatbot"
    description: "With Deepgram and GPT-3, the team behind Triolingo created a realistic multilingual chatbot to help language learners gain confidence in conversation. Read about it here."
shorturls:
    share: https://dpgr.am/710b82d
    twitter: https://dpgr.am/a328d7b
    linkedin: https://dpgr.am/84f952a
    reddit: https://dpgr.am/6df6aa9
    facebook: https://dpgr.am/e31a621
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454026/blog/foreign-language-practice-triolingo/ograph.png
---

Back in January, we supported Hack Cambridge -- a 24-hour student hackathon. The team behind Triolingo wanted to help language learners gain confidence in conversation by practicing with a bot. I sat down with [Alba Navarro Rosales](https://github.com/Alba-NR), [Anoushka Kamazumdar](https://github.com/anoushkamazumdar), [Max Johnson](https://github.com/MaxTheComputerer), and [Megan Elisabeth Finch](https://github.com/meganelisabethfinch) to ask them about their project.

"We were inspired by Deepgram's sponsor challenge to create something cool using speech recognition and were excited to see that it supported [several foreign languages](https://developers.deepgram.com/documentation/features/language/)," the team told me. "Over the past three years, the coronavirus pandemic has had a significant impact on schools, and travel restrictions have limited opportunities for foreign language learning abroad. During this time, the use of online language learning platforms such as Duolingo has soared, but these platforms cannot provide practice for speaking and listening skills. We created Triolingo to cater to this niche, allowing language learners to gain confidence in conversation through practice."

## How It Works

Users select a conversation topic and target language, and the Triolingo bot then begins a conversation with several topic-appropriate prompts. Users then record a verbal response sent for processing by the [Deepgram Python SDK](https://developers.deepgram.com/sdks-tools/).

No two chats are the same as the multilingual chatbot is powered by GPT-3 [provided by OpenAI](https://openai.com/api/), which dynamically responds to prompts. Finally, responses are spoken back to users using a text-to-speech API.

Care was taken to include extended topics beyond everyday and tourism-focused conversation -- prompts included culture, climate change, and politics.

![The webpage shows two starter topics - food and lifestyle, and three advanced topics - environment, sustainability, and culture. Selecting a topic begins a conversation.](https://res.cloudinary.com/deepgram/image/upload/v1646156558/blog/2022/03/foreign-language-practice-triolingo/screenshot.png)

## Hackathon Experience

The Triolingo team had only participated in online hackathons before, so this was a new experience. As a large group of twelve people, they self-organized a random name picker and created three teams within the event's team size limit. "I've never used a GPT-3 API before, and it was both super cool and very impressive" said Alba.

I asked the team about their experience using Deepgram, and Max said that "the performance was really good and accurate, even with background noise." As their project progressed, they were visited by other teams who had fun trying it out.

## Future Development

Given more time, the team would use additional Deepgram functionality such as [confidence](https://developers.deepgram.com/documentation/guides/transcription/#analyze-response) values in a Deepgram response to assess the user's pronunciation. Our [keywords](https://developers.deepgram.com/documentation/features/keywords/) feature would boost recognition of words related to the conversation topic and further improve the reliability of the speech recognition function.

In terms of user interaction, the team would like to set contextual "challenges" or tasks to complete instead of just conversing without direction. For example, the user is presented with the scenario, "You are planning to watch a movie with a friend. Decide what movie you're going to watch and when and where you're going to meet." The system would keep track of whether the user and bot had agreed on these three things, and then congratulate the user when they had completed the challenge.

There are different grammatical constructs in some languages depending on who you are talking to, such as different pronouns or verb endings. As a final idea, the bot could adopt the appropriate type of language according to the situation.

You can try out a [hosted version of Triolingo](https://triolingo.blockfour.co.uk/), and check out the [code on GitHub](https://github.com/meganelisabethfinch/HackCambridgeAtlas).

