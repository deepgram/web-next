---
title: Building a Conversational AI Flow with Deepgram
description: Learn how to use endpointing and interim results to build a
  conversational AI flow.
date: 2022-09-23T17:38:18.493Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981433/blog/all-about-transcription-for-real-time-audio-streaming/all-about-real-time-audio-streaming-thumb-554x220-.png
authors:
  - shir-goldberg
category: tutorial
tags:
  - conversational-ai
  - endpointing
  - interim-results
seo:
  title: Building a Conversational AI Flow with Deepgram
  description: Learn how to use endpointing and interim results to build a
    conversational AI flow.
---
How do you know when someone is finished talking? Before I started working at Deepgram, I hadn’t thought about this question much. When having conversations in person, us humans can use all sorts of contextual cues, body language, and societal norms to figure out when someone has finished their thought and we can jump in with our own opinion. But as we’ve all seen over Zoom during the last few years, figuring out when someone is done talking is a lot harder to do virtually. It’s even harder when the listener isn’t human at all—and is a machine learning model transcribing speech!

Business problems that need speech-to-text often also need an understanding of when a speaker has completed their thought. One common use case for this is building conversational AI bots that need to respond to a user’s queries. The bot needs to be careful both to not to cut the user off, and to respond in a timely enough manner that the conversation feels “real time”.

Deepgram’s real-time speech-to-text service provides two mechanisms that can help build a conversational flow. One is interim results, and the other is endpointing. Together, the two can give you information about when a speaker has finished talking, and when your system should respond.

[Interim results](https://developers.deepgram.com/documentation/features/interim-results/), which are disabled by default, are sent back every few seconds. These messages, marked with `is_final=false`,  indicate that Deepgram is still gathering more audio and the transcription results may change as additional context is given. Once Deepgram has collected enough audio to make the best possible prediction, it will finalize the prediction and send back a transcript marked with `is_final=true`.

[Endpointing](https://developers.deepgram.com/documentation/features/endpointing/), which is enabled by default, is an algorithm that detects the end of speech. When endpointing triggers, Deepgram immediately sends back a message. These messages will be marked with `speech_final=true` to indicate an endpoint was detected and `is_final=true `to indicate the transcription is finalized.

The simplest way to determine when someone is done talking is based on silence. Endpointing can give you almost immediate feedback when silence is detected, which may be useful for applications that prioritize quick processing of results. Here’s a code example that uses your microphone and the Python package beepy to play a notification sound when Deepgram detects an endpoint.

To run the code, install beepy using `pip install beepy`. Then save the following code as `endpointing.py`. Turn your volume up so you’ll be able to hear the beep sound, and run the code:

`python endpointing.py  -k 'YOUR_DG_API_KEY'`

```python
import pyaudio
import asyncio
import sys
import websockets
import time
import json
import argparse
import beepy

FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 16000
CHUNK = 8000

audio_queue = asyncio.Queue()

def callback(input_data, frame_count, time_info, status_flag):
    audio_queue.put_nowait(input_data)
    return (input_data, pyaudio.paContinue)

async def run(key):
    extra_headers={
        'Authorization': 'Token {}'.format(key)
    }
    async with websockets.connect('wss://api.deepgram.com/v1/listen?endpointing=true&encoding=linear16&sample_rate=16000&channels=1&interim_results=false', extra_headers = extra_headers) as ws:
        async def microphone():
            audio = pyaudio.PyAudio()
            stream = audio.open(
                format = FORMAT,
                channels = CHANNELS,
                rate = RATE,
                input = True,
                frames_per_buffer = CHUNK,
                stream_callback = callback
            )

            stream.start_stream()

            while stream.is_active():
                await asyncio.sleep(0.1)

            stream.stop_stream()
            stream.close()

        async def sender(ws):
            try:
                while True:
                    data = await audio_queue.get()
                    await ws.send(data)
            except Exception as e:
                print('Error while sending: '.format(str(e)))
                raise

        async def receiver(ws):
            transcript = ''
            async for msg in ws:
                msg = json.loads(msg)

                if len(msg['channel']['alternatives'][0]['transcript']) > 0:
                    if len(transcript):
                        transcript += ' '
                    transcript += msg['channel']['alternatives'][0]['transcript']
                    print(transcript, end = '\r')

                    if msg['speech_final']:
                        print(transcript)
                        beepy.beep(sound=1)
                        transcript = ''

        await asyncio.wait([
            asyncio.ensure_future(microphone()),
            asyncio.ensure_future(sender(ws)),
            asyncio.ensure_future(receiver(ws))
        ])

def parse_args():
    """ Parses the command-line arguments.
    """
    parser = argparse.ArgumentParser(description='Submits data to the real-time streaming endpoint.')
    parser.add_argument('-k', '--key', required=True, help='YOUR_DEEPGRAM_API_KEY (authorization)')
    return parser.parse_args()

def main():
    args = parse_args()

    asyncio.get_event_loop().run_until_complete(run(args.key))

if __name__ == '__main__':
    sys.exit(main() or 0)
```

Rather than responding immediately, many applications will want to wait for a few seconds after a speaker finishes talking. This can be especially effective in conversational AI, where users may be speaking for long durations and occasionally pause mid-thought—waiting a few seconds to respond may result in a more natural conversational flow. A combination of endpointing and interim results can be used to determine when a desired duration of silence has passed.

Here’s a code example that uses your microphone and the Python package beepy to play a notification sound after the number of seconds defined in a configurable `SILENCE_INTERVAL` has passed. (The default is 2.0, but this can be specified when running the script.)

To run the code, install beepy using `pip install beepy`. Then save the following code as `silence_interval.py`. Turn your volume up so you’ll be able to hear the beep sound, and run the code:

`python silence_interval.py  -k 'YOUR_DG_API_KEY' [-s SILENCE_INTERVAL_SECONDS_FLOAT]`

```python
import pyaudio
import asyncio
import sys
import websockets
import json
import beepy
import shutil
import argparse

FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 16000
CHUNK = 8000

terminal_size = shutil.get_terminal_size()

audio_queue = asyncio.Queue()

def callback(input_data, frame_count, time_info, status_flag):
    audio_queue.put_nowait(input_data)
    return (input_data, pyaudio.paContinue)

async def run(key, silence_interval):
    async with websockets.connect(
        'wss://api.deepgram.com/v1/listen?endpointing=true&interim_results=true&encoding=linear16&sample_rate=16000&channels=1',
        extra_headers={
            'Authorization': 'Token {}'.format(key)
        }
    ) as ws:
        async def microphone():
            audio = pyaudio.PyAudio()
            stream = audio.open(
                format = FORMAT,
                channels = CHANNELS,
                rate = RATE,
                input = True,
                frames_per_buffer = CHUNK,
                stream_callback = callback
            )

            stream.start_stream()

            while stream.is_active():
                await asyncio.sleep(0.1)

            stream.stop_stream()
            stream.close()

        async def sender(ws):
            try:
                while True:
                    data = await audio_queue.get()
                    await ws.send(data)
            except Exception as e:
                print('Error while sending: '.format(str(e)))
                raise

        async def receiver(ws):
            transcript = ''
            last_word_end = 0.0
            should_beep = False

            async for message in ws:
                message = json.loads(message)

                transcript_cursor = message['start'] + message['duration']

                # if there are any words in the message
                if len(message['channel']['alternatives'][0]['words']) > 0:
                    # handle transcript printing for final messages
                    if message['is_final']:
                        if len(transcript):
                            transcript += ' '
                        transcript += message['channel']['alternatives'][0]['transcript']
                        print(transcript)
                        # overwrite the line regardless of length
                        # https://stackoverflow.com/a/47170056
                        print('\033[{}A'.format(len(transcript) // int(terminal_size.columns) + 1), end='')

                    # if the last word in a previous message is silence_interval seconds
                    # older than the first word in this message (and if that last word hasn't already triggered a beep)
                    current_word_begin = message['channel']['alternatives'][0]['words'][0]['start']
                    if current_word_begin - last_word_end >= silence_interval and last_word_end != 0.0:
                        should_beep = True

                    last_word_end = message['channel']['alternatives'][0]['words'][-1]['end']
                else:
                    # if there were no words in this message, check if the the last word
                    # in a previous message is silence_interval or more seconds older
                    # than the timestamp at the end of this message (if that last word hasn't already triggered a beep)
                    if transcript_cursor - last_word_end >= silence_interval and last_word_end != 0.0:
                        last_word_end = 0.0
                        should_beep = True

                if should_beep:
                    beepy.beep(sound=1)
                    should_beep = False
                    # we set/mark last_word_end to 0.0 to indicate that this last word has already triggered a beep
                    last_word_end = 0.0
                    transcript = ''
                    print('')

        await asyncio.wait([
            asyncio.ensure_future(microphone()),
            asyncio.ensure_future(sender(ws)),
            asyncio.ensure_future(receiver(ws))
        ])

def parse_args():
    """ Parses the command-line arguments.
    """
    parser = argparse.ArgumentParser(description='Submits data to the real-time streaming endpoint.')
    parser.add_argument('-k', '--key', required=True, help='YOUR_DEEPGRAM_API_KEY (authorization)')
    parser.add_argument('-s', '--silence', required=False, help='A float representing the number of seconds of silence to wait before playing a beep. Defaults to 2.0.', default=2.0)
    return parser.parse_args()

def main():
    args = parse_args()

    loop = asyncio.get_event_loop()
    asyncio.get_event_loop().run_until_complete(run(args.key, float(args.silence)))

if __name__ == '__main__':
    sys.exit(main() or 0)
```

These two samples should give you an idea of how immediate different types of feedback feel, and how they can be incorporated into different types of real-time speech to text applications. Both samples can be found in this [GitHub repo](https://github.com/deepgram/conversational-ai-flow).

After applying one of the strategies shown here in your application, you can have your downstream system decide how to best respond to the user's input. Happy building!