import asyncio
import base64
import json
import sys
import websockets
import scipy.io.wavfile
import time

async def run():
   # Make sure your audio file is in the same directory as this script.
   with open('interview_speech-analytics.wav', 'rb') as fh:
       data = fh.read()
   # Replace with your Deepgram API key.
   extra_headers = {
       'Authorization': 'Token YOUR_DEEPGRAM_API_KEY'
   }
   # Include the real-time streaming endpoint for the Deepgram API.
   async with websockets.connect('wss://api.deepgram.com/v1/listen?endpointing=false', extra_headers=extra_headers) as ws:
       async def sender(ws):
           try:
               nonlocal data
               total = len(data)
               cur = 0
               while data:
                   chunk, data = data[:10000], data[10000:]
                   await ws.send(chunk)
                   cur += len(chunk)
               await ws.send(json.dumps({
                    "type": "CloseStream"
                }))
           except Exception as e:
               print('Error while sending:')
               print(e)
               raise
       async def receiver(ws):
           async for msg in ws:
               print(msg)
       await asyncio.wait([
           asyncio.ensure_future(sender(ws)),
           asyncio.ensure_future(receiver(ws))
       ])
def main():
   loop = asyncio.get_event_loop()
   asyncio.get_event_loop().run_until_complete(run())
if __name__ == '__main__':
   sys.exit(main() or 0)
