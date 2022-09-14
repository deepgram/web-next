---
title: "Just Released: New Version of On-Premises"
description: Deepgram On-premises Improved Diarization, New Ways to Invoke
  Models, and Streaming Callback Troubleshooting
date: 2022-09-14T22:57:29.350Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1663197013/devrel-on-premise-release-blog_1_ejgm2u.png
authors:
  - evan-henry
category: announcement
tags:
  - on-prem
seo:
  title: Deepgram On-premises Improved Diarization, New Ways to Invoke Models, and
    Streaming Callback Troubleshooting
  description: Deepgram's August feature release includes support for improved
    diarization with significantly improved accuracy. Read more here!
---
## Deepgram On-premises Improved Diarization, New Ways to Invoke Models, and Streaming Callback Troubleshooting

I’m pleased to announce the August release of Deepgram’s on-prem ASR solution. The major feature included in the August release is support for the [improved Diarization](https://deepgram.com/changelog/introducing-improved-diarization/ "https\://deepgram.com/changelog/introducing-improved-diarization/") with significantly improved accuracy which is language agnostic and supports our [generally available language models](https://developers.deepgram.com/documentation/features/language/ "https\://developers.deepgram.com/documentation/features/language/").

In addition to improved Diarization, there are several user experience enhancements included in the August release. One such improvement is the ability to invoke a specific model via its `UUID`. A model’s `UUID` value is visible in a given ASR response within the `model_info` JSON object, but the easiest way to view a model’s `UUID` is by sending an HTTP GET request to the `/v2/models` endpoint in your on-prem deployment. 

For example:


```
curl -X GET 'http://localhost:8080/v2/models'

{
  "name": "general-enhanced",
  "uuid": "125125fb-e391-458e-a227-a60d6426f5d6",
  "version": "2022-05-18.0",
  "tags": \[],
  "languages": \[
    "en",
    "en-US"
  ]
}
{
  "name": "general-dQw4w9WgXcQ",
  "uuid": "41757536-6114-494d-83fd-c2694524d80b",
  "version": "2021-08-18",
  "tags": \[],
  "languages": \[]
}
```

Another improvement is the ability to troubleshoot streaming callback responses which can be done by including the `inspect_response=true` parameter in the ASR request. This will send the contents of a transcription response to the original request connection in addition to the response callback to aid troubleshooting or debugging a streaming callback.

```
curl \
  --request POST \
  --header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \
  --header 'Content-Type: audio/wav' \
  --data-binary @youraudio.wav \
  --url 'https://api.deepgram.com/v1/listen?callback=URL&inspect_response=true'
```



For a full list of changes included in the August release, head over to the [changelog](https://deepgram.com/changelog/deepgram-on-premise-release-220831/ "https\://deepgram.com/changelog/deepgram-on-premise-release-220831/").