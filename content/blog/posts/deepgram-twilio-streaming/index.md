---
title: "Transcribing Twilio Voice Calls in Real-Time with Deepgram"
description: "In this tutorial, learn how to transcribe Twilio Voice calls with Deepgram with real-time speech-to-text."
date: 2022-04-07
cover: https://res.cloudinary.com/deepgram/image/upload/v1649267223/blog/2022/04/deepgram-twilio-streaming/Transcribing-Twilio-Calls-Real-Time-w-Deepgram%402x.jpg
authors:
    - nikola-whallon
category: tutorial
tags:
    - twilio
    - python
seo:
    title: "Transcribing Twilio Voice Calls in Real-Time with Deepgram"
    description: "In this tutorial, learn how to transcribe Twilio Voice calls with Deepgram with real-time speech-to-text."
shorturls:
    share: https://dpgr.am/650fd92
    twitter: https://dpgr.am/6458d1e
    linkedin: https://dpgr.am/273ef64
    reddit: https://dpgr.am/2fc8f2d
    facebook: https://dpgr.am/80b16d1
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454061/blog/deepgram-twilio-streaming/ograph.png
---

Twilio is a very popular voice platform, and Deepgram is a great automatic speech recognition (ASR) solution, so there
is great value in integrating the two. This tutorial will guide you through building an integration that allows
multiple client subscribers to watch live transcripts from ongoing Twilio calls. The code for this tutorial
is located [here](https://github.com/deepgram-devs/deepgram-twilio-streaming-python).

## Pre-requisites

You will need:

*   A [Twilio account](https://www.twilio.com/try-twilio) with a Twilio number (the free tier will work).
*   A Deepgram API Key - [get an API Key here](https://console.deepgram.com/signup?jump=keys).
*   *(Optional)* [ngrok](https://ngrok.com/) to let Twilio access a local server.

## Setting Up A TwiML Bin

We need to tell Twilio to fork audio data from calls going to your Twilio number to the server we are going to write.
This is done via "TwiML Bin"s. In the Twilio Console, search for TwiML Bin, and click "Create TwiML Bin."

<img src="https://res.cloudinary.com/deepgram/image/upload/v1648782300/blog/2022/04/deepgram-twilio-streaming/assets/find_twiml_bin.png" alt="Navigate to your TwiML Bins." style="max-width: 606px;display: block;margin-left: auto;margin-right: auto;">

Give the TwiML Bin a "Friendly Name" - something like "Streaming" or "Deepgram Streaming," and then make the contents of the TwiML Bin the following:

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

Replace the number in the `Dial` section with the phone number you want incoming calls to be forwarded to (this should not be
your Twilio number, it should be the number of a real phone in your possession!). Then, where it says `INSERT_YOUR_SERVER_URL`
type in the URL where you will be running your server. Without having to setup an AWS or DigitalOcean server, you can use
`ngrok` to expose a local server. To expose port 5000 on your computer, you can use ngrok as follows:

```bash
ngrok http 5000
```

`ngrok` will then tell you the public URL which points to your `localhost:5000`. Your URL may
end up looking something like: `c52e-71-212-124-133.ngrok.io`.

Now, we need to connect this TwiML Bin to your Twilio phone number. Go to the "Develop" tab on the left side
of the Twilio Console, navigate to `Phone Numbers -> Manage -> Active numbers`, and click on your Twilio number
in the list. Then, under the field "A Call Comes In," click the drop-down and select "TwiML Bin"; for the field
directly next to this one, click the drop-down and select "Streaming" (or whatever your TwiML Bin's "Friendly Name" is).
Finally, click "Save" at the bottom of the Twilio Console. Everything on Twilio's side should now be set up, and we
are ready to move on to the Deepgram integration server!

## The Twilio Proxy Server

Let's take a look at the system we are building here:

<img src="https://res.cloudinary.com/deepgram/image/upload/v1648783494/blog/2022/04/deepgram-twilio-streaming/assets/deepgram_twilio_diagram.png" alt="The big picture." style="max-width: 2096px;display: block;margin-left: auto;margin-right: auto;">

We have pairs of callers, inbound and outbound, and, for each call passing through Twilio's servers, Twilio is able to fork the audio from the call
to our proxy server via websockets. Our server then has to do some light processing of that audio, forward it on to Deepgram, receive transcripts
back from Deepgram, and forward those transcripts on to potentially multiple clients who are subscribed to watch the call's transcripts. So in order
to view real-time transcripts in a client application, our backend server must maintain a minimum of three websockets connections - we can see how
this can get complicated, especially when dealing with many concurrent Twilio calls and subscribed clients!

Download the code from [this repository](https://github.com/deepgram-devs/deepgram-twilio-streaming-python). It contains a single file, `twilio.py`!

Let's look at the code (make sure to replace `INSERT_YOUR_DEEPGRAM_API_KEY` with your Deepgram API Key):

```python
import asyncio
import base64
import json
import sys
import websockets
import ssl
from pydub import AudioSegment

subscribers = {}

def deepgram_connect():
 extra_headers = {
  'Authorization': 'Token INSERT_YOUR_DEEPGRAM_API_KEY'
 }
 deepgram_ws = websockets.connect('wss://api.deepgram.com/v1/listen?encoding=mulaw&sample_rate=8000&channels=2&multichannel=true', extra_headers = extra_headers)

 return deepgram_ws

async def twilio_handler(twilio_ws):
 audio_queue = asyncio.Queue()
 callsid_queue = asyncio.Queue()

 async with deepgram_connect() as deepgram_ws:

  async def deepgram_sender(deepgram_ws):
   print('deepgram_sender started')
   while True:
    chunk = await audio_queue.get()
    await deepgram_ws.send(chunk)

  async def deepgram_receiver(deepgram_ws):
   print('deepgram_receiver started')
   # we will wait until the twilio ws connection figures out the callsid
   # then we will initialize our subscribers list for this callsid
   callsid = await callsid_queue.get()
   subscribers[callsid] = []
   # for each deepgram result received, forward it on to all
   # queues subscribed to the twilio callsid
   async for message in deepgram_ws:
    for client in subscribers[callsid]:
     client.put_nowait(message)

   # once the twilio call is over, tell all subscribed clients to close
   # and remove the subscriber list for this callsid
   for client in subscribers[callsid]:
    client.put_nowait('close')

   del subscribers[callsid]

  async def twilio_receiver(twilio_ws):
   print('twilio_receiver started')
   # twilio sends audio data as 160 byte messages containing 20ms of audio each
   # we will buffer 20 twilio messages corresponding to 0.4 seconds of audio to improve throughput performance
   BUFFER_SIZE = 20 * 160
   # the algorithm to deal with mixing the two channels is somewhat complex
   # here we implement an algorithm which fills in silence for channels if that channel is either
   #   A) not currently streaming (e.g. the outbound channel when the inbound channel starts ringing it)
   #   B) packets are dropped (this happens, and sometimes the timestamps which come back for subsequent packets are not aligned)
   inbuffer = bytearray(b'')
   outbuffer = bytearray(b'')
   inbound_chunks_started = False
   outbound_chunks_started = False
   latest_inbound_timestamp = 0
   latest_outbound_timestamp = 0
   async for message in twilio_ws:
    try:
     data = json.loads(message)
     if data['event'] == 'start':
      start = data['start']
      callsid = start['callSid']
      callsid_queue.put_nowait(callsid)
     if data['event'] == 'connected':
      continue
     if data['event'] == 'media':
      media = data['media']
      chunk = base64.b64decode(media['payload'])
      if media['track'] == 'inbound':
       # fills in silence if there have been dropped packets
       if inbound_chunks_started:
        if latest_inbound_timestamp + 20 < int(media['timestamp']):
         bytes_to_fill = 8 * (int(media['timestamp']) - (latest_inbound_timestamp + 20))
         # NOTE: 0xff is silence for mulaw audio
         # and there are 8 bytes per ms of data for our format (8 bit, 8000 Hz)
         inbuffer.extend(b'\xff' * bytes_to_fill)
       else:
        # make it known that inbound chunks have started arriving
        inbound_chunks_started = True
        latest_inbound_timestamp = int(media['timestamp'])
        # this basically sets the starting point for outbound timestamps
        latest_outbound_timestamp = int(media['timestamp']) - 20
       latest_inbound_timestamp = int(media['timestamp'])
       # extend the inbound audio buffer with data
       inbuffer.extend(chunk)
      if media['track'] == 'outbound':
       # make it known that outbound chunks have started arriving
       outbound_chunked_started = True
       # fills in silence if there have been dropped packets
       if latest_outbound_timestamp + 20 < int(media['timestamp']):
        bytes_to_fill = 8 * (int(media['timestamp']) - (latest_outbound_timestamp + 20))
        # NOTE: 0xff is silence for mulaw audio
        # and there are 8 bytes per ms of data for our format (8 bit, 8000 Hz)
        outbuffer.extend(b'\xff' * bytes_to_fill)
       latest_outbound_timestamp = int(media['timestamp'])
       # extend the outbound audio buffer with data
       outbuffer.extend(chunk)
     if data['event'] == 'stop':
      break

     # check if our buffer is ready to send to our audio_queue (and, thus, then to deepgram)
     while len(inbuffer) >= BUFFER_SIZE and len(outbuffer) >= BUFFER_SIZE:
      asinbound = AudioSegment(inbuffer[:BUFFER_SIZE], sample_width=1, frame_rate=8000, channels=1)
      asoutbound = AudioSegment(outbuffer[:BUFFER_SIZE], sample_width=1, frame_rate=8000, channels=1)
      mixed = AudioSegment.from_mono_audiosegments(asinbound, asoutbound)

      # sending to deepgram via the audio_queue
      audio_queue.put_nowait(mixed.raw_data)

      # clearing buffers
      inbuffer = inbuffer[BUFFER_SIZE:]
      outbuffer = outbuffer[BUFFER_SIZE:]
    except:
     break

   # the async for loop will end if the ws connection from twilio dies
   # and if this happens, we should forward an empty byte to deepgram
   # to signal deepgram to send back remaining messages before closing
   audio_queue.put_nowait(b'')

  await asyncio.wait([
   asyncio.ensure_future(deepgram_sender(deepgram_ws)),
   asyncio.ensure_future(deepgram_receiver(deepgram_ws)),
   asyncio.ensure_future(twilio_receiver(twilio_ws))
  ])

  await twilio_ws.close()

async def client_handler(client_ws):
 client_queue = asyncio.Queue()

 # first tell the client all active calls
 await client_ws.send(json.dumps(list(subscribers.keys())))

 # then recieve from the client which call they would like to subscribe to
 # and add our client's queue to the subscriber list for that call
 try:
  # you may want to parse a proper json input here
  # instead of grabbing the entire message as the callsid verbatim
  callsid = await client_ws.recv()
  callsid = callsid.strip()
  if callsid in subscribers:
   subscribers[callsid].append(client_queue)
  else:
   await client_ws.close()
 except:
  await client_ws.close()

 async def client_sender(client_ws):
  while True:
   message = await client_queue.get()
   if message == 'close':
    break
   try:
    await client_ws.send(message)
   except:
    # if there was an error, remove this client queue
    subscribers[callsid].remove(client_queue)
    break

 await asyncio.wait([
  asyncio.ensure_future(client_sender(client_ws)),
 ])

 await client_ws.close()

async def router(websocket, path):
 if path == '/client':
  print('client connection incoming')
  await client_handler(websocket)
 elif path == '/twilio':
  print('twilio connection incoming')
  await twilio_handler(websocket)

def main():
 # use this if using ssl
# ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
# ssl_context.load_cert_chain('cert.pem', 'key.pem')
# server = websockets.serve(router, '0.0.0.0', 443, ssl=ssl_context)

 # use this if not using ssl
 server = websockets.serve(router, 'localhost', 5000)

 asyncio.get_event_loop().run_until_complete(server)
 asyncio.get_event_loop().run_forever()

if __name__ == '__main__':
 sys.exit(main() or 0)
```

This server uses the Python `websocket` library to connect to Twilio, Deepgram, and client applications, and the `asyncio` library to handle
concurrent connections. The server has two routes: `/twilio` and `/client`. As we have configured in our TwiML Bin, Twilio will be connecting
to and sending audio data to the `/twilio` endpoint, and we will use the `/client` endpoint for client applications which will watch the
streaming transcripts.

The server uses a dictionary, called `subscribers`, to handle concurrent connected clients. Specifically, `subscribers` is a dictionary
whose keys are Twilio `callSid`s which uniquely identify calls, and whose values are a list of queues for clients who are "subscribed"
to those calls (i.e. watching for streaming transcripts from those calls).

To dive into the code, let's look at the `client_handler` function. When a client connects to the `/client` endpoint, the `client_handler`
function will first send a websocket message to the client listing the `callSid`s of all currently streaming calls. The function then waits
to receive a websocket message which it expects to be the `callSid` of the call that the client wants to view live transcripts for
(and if the function does not receive a valid `callSid`, it will bail). Having received a valid `callSid`, the function then inserts
this client's queue into the `subscribers` dictionary and starts an async task which reads from this queue, sending transcription
results back to the client via websocket messages, or gracefully closing the websocket connection if the message "close" was received on the queue.

Now let's jump into the more involved `twilio_handler` function. This function handles incoming websocket connections from Twilio,
and begins by setting up a queue for audio data, and a queue to handle passing the incoming `callSid` between async tasks.
It then connects to Deepgram and sets up three async tasks: `deepgram_receiver`, `deepgram_sender`, and `twilio_receiver` (we will
never send websocket messages back to Twilio, hence no "twilio\_sender" task).

The `twilio_receiver` task handles incoming [websocket messages](https://www.twilio.com/docs/voice/twiml/stream#websocket-messages-from-twilio) from Twilio.
Before Twilio sends audio data, it will send some metadata as part of a `start` event. One of these pieces of metadata is the `callSid`
of the call, and we will pass that on to the `deepgram_receiver` task via a queue. Then, when Twilio starts streaming `media` (i.e. audio)
events, we will perform some logic to buffer and mix this audio. In particular, Twilio will stream audio in via separate `inbound`
and `outbound` audio tracks; we must make sure we mix these two audio tracks together as correct stereo audio to pass on to Deepgram.
Some issues arise if call packets are dropped from one of these tracks, and logic is implemented with ample comments to deal with this
without having the two channels in the mixed stereo audio get out of sync. Finally, with correctly mixed audio buffers prepared,
`twilio_receiver` will pass this audio on to the `deepgram_sender` task via a queue. The `deepgram_sender` task then simply passes
this audio on to Deepgram via the Deepgram websocket handle.

Finally, we get to the `deepgram_receiver` task. In order to pass transcripts from Deepgram on to subscribed clients, we must first
know the `callSid` of the call, so the first thing `deepgram_receiver` does is wait to obtain this from the `twilio_receiver` via
a queue. Once the `callSid` is obtained, the `deepgram_receiver` is then able to forward on all transcription results from Deepgram
to all clients subscribed to that `callSid`. It does this via another queue, which is handled by the async task defined in `client_handler`,
and thus we come full circle.

## Running the Server and Testing with WebSocat

To run the server, first `pip3 install` the `websockets`, `pydub`, and `asyncio` libraries, and then run:

```bash
python3 twilio.py
```

If you are running this on your own cloud server, make sure port 5000 is accessible. If you followed the optional
suggestion of using `ngrok`, this should be all set up simply by running `ngrok http 5000` on a separate terminal.

To quickly test the integration, start a call to your Twilio number - this call will be forwarded to the phone number
in the `Dial` section of your TwiML Bin, so you will need two phones (so feel free to grab a friend, or set up
a Google Voice account or something similar!).

After the phone call has started, use a tool like [websocat](https://github.com/vi/websocat#installation) to connect
to `ws://localhost:5000/client`. Upon connecting, the server should output a list of the `callSid`s of ongoing calls
(it should be a list of exactly one call at this point); reply to the server with one of these `callSid`s and watch
the Deepgram transcription responses roll in! You can start multiple clients and have them all subscribe to the
same `callSid` to see how a concurrent system could work.

<img src="https://res.cloudinary.com/deepgram/image/upload/v1649269367/blog/2022/04/deepgram-twilio-streaming/assets/websocat_screenshot.png" alt="Using websocat to view the transcripts." style="max-width: 1623px;display: block;margin-left: auto;margin-right: auto;">

## Further Development

The Deepgram-Twilio integration design presented here is slightly opinionated, in the interest of getting
a reasonably complete demo up and running. You may want to factor in authentication, as the `/client` endpoint
explained here is completely unauthenticated. You also may want to find an alternate way of labelling calls
to subscribe to - instead of grabbing `callSid`s, one could subscribe directly to Twilio numbers, but this
would require extra Twilio API integration to look up the status of calls to your Twilio numbers.

Another clear next step would be to develop a proper client application. Programs like `websocat` are fantastic
for testing, but you will likely want to design a front-end application which handles selecting `callSid`s
to subscribe to, parses and formats the Deepgram transcription response, and possibly other features.

If you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).

        