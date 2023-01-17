const WebSocket = require('ws');
// Include the real-time streaming endpoint for the Deepgram API.
const ws = new WebSocket('wss://api.deepgram.com/v1/listen?endpointing=false', {
  // Replace with your Deepgram project's API Key.
  headers: {
    Authorization: 'Token YOUR_DEEPGRAM_API_KEY',
  },
});
ws.on('open', function open() {
  console.log('Will send audio file');
  let fs = require('fs');
  // Audio file to stream. Make sure it is in the same directory as this script.
  reader = fs.createReadStream('interview_speech-analytics.wav');
  reader.on('data', function (chunk) {
    ws.send(Buffer.from(chunk));
  });
});
ws.on('message', function incoming(data) {
  console.log(data);
});
