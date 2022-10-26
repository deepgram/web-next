---
title: Enable Numeral Formatting in Real-Time
description: Learn how to enable and disable numeral formatting during a
  real-time audio stream with Deepgram's API.
date: 2022-10-27T00:53:05.967Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1666120286/blog/Enhanced%20Messaging%20in%20Streaming/2210-close-stream-update-featured-1200x630_2x_e9k8gi.png
authors:
  - shir-goldberg
category: product-news
tags:
  - streaming
---
Here at Deepgram, we’re making our real-time streaming API as dynamic as our customers’ needs.

In addition to enabling [numeral formatting](https://developers.deepgram.com/documentation/features/numerals/) at the start of a stream via query parameter, numeral formatting can now be turned on and off at any point in an audio stream by sending a JSON `Configure` message.

Want to give this a try? Here’s [a script](https://github.com/deepgram/numerals-on-off) that transcribes audio from your microphone using DG. If you say “turn numerals on” or “turn numerals off”, numeral formatting will be enabled or disabled. Try saying a string of numbers to see the difference.

![]()

Here’s an example of sending a configuration message in Javascript:

```
socket.send(JSON.stringify({
    "type": "Configure",
    "processors": {
        "numerals": false
    }
}))
```

And an example in Python:

```
await ws.send(json.dumps({
    "type": "Configure",
    "processors": {
        "numerals": False
    }
}))
```

To enable numeral formatting, specify `numerals: true`; to disable it, specify `numerals: false`. As many configuration messages can be sent as desired during the stream.

Currently, numerals is the only feature that can be turned on and off mid-stream, but we're excited to continue adding greater flexibility to our real-time API. Stay tuned for more soon!