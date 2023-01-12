import asyncio
import base64
import json
import sys
import websockets
import scipy.io.wavfile
import time
import streamlink
import requests

class colors:
    FINAL = '\033[1m\033[92m'
    INTRM = '\033[91m'

async def run():
    extra_headers = {
        'Authorization': 'Token YOUR_DEEPGRAM_API_KEY'
    }

    async with websockets.connect('wss://api.deepgram.com/v1/listen', extra_headers=extra_headers) as ws:
        async def sender(ws):
            chunk_size = 4096
            # this seems to be necessary otherwise waiting for new audio will always block
            pause_time = 0.1

            try:
                for chunk in iter(lambda: sys.stdin.buffer.read(chunk_size), b''):
                    await ws.send(chunk)
                    await asyncio.sleep(pause_time)
                await ws.send(json.dumps({
                    "type": "CloseStream"
                }))
            except:
                print ('error streaming audio')

        async def receiver(ws):
            async for msg in ws:
                try:
                    # print the response in a pretty way - when making this a proper backend, I would instead send the full message to some frontend via websockets
                    listen_response = json.loads(msg)
                    start = "{:.2f}".format(listen_response['start'])
                    end = "{:.2f}".format(listen_response['start'] + listen_response['duration'])
                    if listen_response['is_final']:
                        extra = colors.FINAL + '[final] - [' + start + ' - ' + end + ']'
                    else:
                        extra = colors.INTRM + '[intrm] - [' + start + ' - ' + end + ']'
                    print (extra + ' ' + listen_response['channel']['alternatives'][0]['transcript'])
                except:
                    print ('error interpreting ws message as listen response')

        await asyncio.wait([
            asyncio.ensure_future(sender(ws)),
            asyncio.ensure_future(receiver(ws))
        ])

def main():
    asyncio.get_event_loop().run_until_complete(run())

if __name__ == '__main__':
    sys.exit(main() or 0)
