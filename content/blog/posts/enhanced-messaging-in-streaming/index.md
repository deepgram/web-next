---
title: Enhanced Messaging in Streaming
description: We’re excited to announce an update to our streaming API for
  enhanced usability.
date: 2022-10-18T22:09:38.278Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1666120286/blog/Enhanced%20Messaging%20in%20Streaming/2210-close-stream-update-featured-1200x630_2x_e9k8gi.png
authors:
  - shir-goldberg
category: product-news
tags:
  - streaming
---
We’re excited to announce an update to our streaming API for enhanced usability.

Working with websockets to send audio in real-time can be tricky. Today, we’re releasing the first step in our plan to make our streaming API easier to use.

Streaming connections should now be closed by sending the JSON message \`{ "type": "CloseStream" } \`. This tells Deepgram that no more audio will be sent. Deepgram will then finish processing existing audio, and close the connection once all transcripts are returned. 

Gracefully closing your stream is the best way to ensure you get all your transcripts, and aren’t charged for audio you don’t want transcribed.

Here’s an example of sending a CloseStream message in Javascript:

````
```
socket.send(JSON.stringify({
    "type": "CloseStream"
}))
```
And an example in Python:
```
await ws.send(json.dumps({
    "type": "CloseStream"
}))
``` 
````

Previously, streaming connections were closed by sending an empty byte—for example, sending \`Uint8Array(0)\` in Javascript, or \`b''\` in Python. This method of closing connections is now deprecated, and we will remove it in a future release. An empty byte doesn’t inherently translate to closing a connection and some websocket libraries don’t support sending it. Sending a CloseStream message is a clearer and more universal method to accomplish this.

We recommend customers using our API move to using the CloseStream method to avoid potential disruptions. Any customers using our SDK will not need to make changes.

This message is the first of many. We’ll be releasing additional JSON messages in the coming months that will unlock powerful new features in our real-time API. Stay tuned!

To learn more about Streaming, please refer to our Streaming [Documentation](<https://developers.deepgram.com/documentation/getting-started/streaming/>). **We welcome your feedback, please share it with us [here](https://deepgram.hellonext.co/b/feedback).**