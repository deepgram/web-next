---
title: "Adding Live Captions To Your Classroom With Deepgram"
description: "Make your lectures more accessible with live automatic captioning."
date: 2022-02-09
cover: https://res.cloudinary.com/deepgram/image/upload/v1644272672/blog/2022/02/classroom-captioner/Adding-Live-Captions-To-Your-Classroom%402x.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
    - nodejs
    - education
seo:
    title: "Adding Live Captions To Your Classroom With Deepgram"
    description: "Make your lectures more accessible with live automatic captioning."
shorturls:
    share: https://dpgr.am/e0788f9
    twitter: https://dpgr.am/9c1aee5
    linkedin: https://dpgr.am/105bb6d
    reddit: https://dpgr.am/b5d0747
    facebook: https://dpgr.am/565f0de
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453858/blog/classroom-captioner/ograph.png
---

Many places of study offer accessibility accommodations for students who need them to understand and participate in lectures and seminars. However, the process for asking for and receiving this help can limit who can have it, and it really [isn't good enough](https://deepgram.com/blog/automatic-speech-recognition-education/).

![A lecturer at the front of a classroom](https://res.cloudinary.com/deepgram/image/upload/v1644272678/blog/2022/02/classroom-captioner/iglt.jpg)

*A photo of a large lecture hall at Goldsmiths, University of London, my alma mater. [Photo source](https://virtualtours.gold.ac.uk/map/learn/ian-gulland-lecture-theatre/)*

This project, Classroom Captioner, aims to alleviate the concerns of students who need or prefer a text representation of what's happening in a lecture. Most lecturers will present from a computer - either their own or one built into a podium. At the start of a session, lecturers can:

1.  Open a browser tab to the application.
2.  Create a new room and provide the lecture key needed to validate themselves as the lecturer.
3.  Provide the room code to students to put in the same web application.
4.  Speak as usual - the tab can be left in the background.

If you want to see the finished code and deploy your own version of this project in one click, visit <https://github.com/deepgram-devs/classroom-captioner>.

## Before We Start

You will need:

*   Node.js installed on your machine - [download it here](https://nodejs.org/en/).
*   A Deepgram API Key and Project ID - [get them here](https://console.deepgram.com/signup?jump=keys). Make sure your API Key has either an admin or owner role.

Create a new directory and navigate to it with your terminal. Run `npm init -y` to create a `package.json` file and then install the following packages:

    npm install @deepgram/sdk dotenv express socket.io

Create a file called `.env` and add the following to it:

    DEEPGRAM_KEY=your-api-key
    DEEPGRAM_PROJECT=your-project-id
    LECTURE_KEY=any-passphrase

<Alert type="warning">Do not let others access your .env file as it contains sensitive values. If you share your code, omit this file.</Alert>

## Setting Up Server

This application uses a combined express and socket.io server. Express is used to serve files, authenticate our lecture key, and generate temporary Deepgram API keys. Socket.io is used for realtime communication - sending completed transcriptions from the lecturer's view to their students.

Create an `index.js` file and add the following code to create this combined server and set up Deepgram for later use:

```js
require('dotenv').config()
const http = require('http')
const express = require('express')
const Socket = require('socket.io').Server
const { Deepgram } = require('@deepgram/sdk')

const app = express()
const server = http.createServer(app)
const io = new Socket(server)
const deepgram = new Deepgram(process.env.DEEPGRAM_KEY)

app.use(express.static('public'))
app.use(express.json())

// Further code goes here

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`listening on ${PORT} at ${new Date().toISOString()}`)
})
```

Finally, create a `views` and `public` directory.

## Landing Page

The first of three pages to build is our landing page. It will allow users to navigate to a room as either a lecturer or a student.

We must create a route handler to tell express which file to load when a user navigates to our page. While we are here, we will also create route handlers for other pages. In `index.js`:

```js
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})
app.get('/student', (req, res) => {
  res.sendFile(__dirname + '/views/student.html')
})
app.get('/lecturer', (req, res) => {
  res.sendFile(__dirname + '/views/lecturer.html')
})
```

We'll create the student and lecturer views later. For now, add an `index.html` page to your `views` directory, and open it in your code editor:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Classroom Captioner</title>
  </head>
  <body>
    <h1>Classroom Captioner</h1>

    <h2>Join as a student</h2>
    <form action="/student">
      <label for="id">Room ID</label>
      <input type="text" id="id" name="id" />
      <input type="submit" value="Submit" />
    </form>

    <h2>Create as a lecturer</h2>
    <form action="/lecturer">
      <label for="id">Room ID</label>
      <input type="text" id="id" name="id" />
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

Start your server by running `node index.js` and navigate to <http://localhost:3000>. Type a value into the first input and submit the form. You should be sent to `http://localhost:3000/student?id=TYPEDVALUE` (which should present an error as there is no file yet for that page). However, this confirms that our landing page can direct users to the student and lecturer pages.

![Webpage with the title "Classroom Captioner" with two forms. The first form says "join as a student" and asks for a Room ID. The second form is the same except it starts "create as a lecturer".](https://res.cloudinary.com/deepgram/image/upload/v1644272676/blog/2022/02/classroom-captioner/landing-no-style.png)

## Understanding Socket Rooms

When using socket.io for realtime communication, there are two main concepts:

1.  Sending (*broadcasting* or *emitting*) and receiving (*listening*) events with data.
2.  All users (*clients*) connect to a *server*. Messages get sent to and from the server - you can think of the server as an intermediary between all other connections in this context.

Typically, data sent from the server will be sent to all clients connected to it, except the sender, or to one specific client. However, this project needs to handle multiple ongoing rooms with many users in each, and that's where rooms come in.

Any socket connection can be assigned to any number of rooms, which you can think of as groups. When emitting an event from the server, you can specify which rooms should be sent the data. All users in those rooms get it, and those not assigned do not - perfect!

When a client establishes a new connection via socket.io, they are automatically assigned to a room with the name of their unique identifier. This means users are immediately in one room, and they will need to be added to the shared class-wide room when joining. Just keep this in mind as we move into the next section.

## Lecturer View

Inside of the *views* directory, add `lecturer.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Class Captioner: Lecturer</title>
  </head>
  <body>
    <h1>Room <span id="id"></span></h1>
    <form>
      <label for="key">Lecturer Key</label>
      <input type="password" id="key" name="key" />
      <input type="submit" value="Submit" />
    </form>

    <p></p>

    <script src="/socket.io/socket.io.js"></script>
    <script>
      const url = new URL(location.href)
      const search = new URLSearchParams(url.search)
      const id = search.get('id')
      document.querySelector('#id').textContent = id

      const socket = io()
      socket.emit('join', id)

      // Further code goes here
    </script>
  </body>
</html>
```

Let's talk about this page:

1.  There is a form which is asking for a lecturer key. We'll use this shortly to validate the user.
2.  We include the socket.io client file.
3.  We get access to the room name from the URL, store it in a variable called `id`, and display it to the user.
4.  We connect to our socket server, and immediately emit an event called `join` along with the `id` value.

### Add User To Socket Room

It is now time to listen for, and handle, the `join` event. Just below the route handlers in `index.js`:

```js
io.on('connection', (socket) => {
  socket.on('join', (roomId) => {
    socket.join(roomId)
    console.log(`${socket.id} joins ${roomId}`)
  })
})
```

Restart your server, and navigate to a room as a lecturer. Look at your terminal.

![Terminal displays a log of a user joining the specified room name - here "test"](https://res.cloudinary.com/deepgram/image/upload/v1644272676/blog/2022/02/classroom-captioner/socket-user-joins-room.png)

### Accessing Lecturer's Microphone

There are parts of this project which build on our ["Get Live Speech Transcriptions In Your Browser"](https://developers.deepgram.com/blog/2021/11/live-transcription-mic-browser/) blog post and video. I'll call these out, and go into less depth about the code. This is one of them - add this code to `lecturer.html` to get access to the user's mic:

```js
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then((stream) => {
    mediaRecorder = new MediaRecorder(stream)
  })
  .catch(() => alert('You must provide access to the microphone'))
```

### Validate Lecturer Key

The main visual difference between the lecturer and student views is the inclusion of a form that prompts for a "lecturer key". This value must be compared against the `LECTURE_KEY` in our `.env` file, and if it's correct, we must issue a temporary Deepgram API Key to allow transcription to begin. Finally, this new key will be used to establish a connection with Deepgram and begin transcription.

To build this validation system, add a route handler to the `index.js` file:

```js
app.post('/auth', async (req, res) => {
  try {
    const { id, key } = req.body
    if (req.body.key != process.env.LECTURE_KEY)
      return res.json({ error: 'Key is missing or incorrect' })
    const newKey = await deepgram.keys.create(
      process.env.DEEPGRAM_PROJECT,
      'Temporary key - works for 10 secs',
      ['usage:write'],
      { timeToLive: 10 }
    )
    res.json({ deepgramToken: newKey.key })
  } catch (error) {
    res.json({ error })
  }
})
```

A new short-lived Deepgram API Key with minimal permissions will be generated and returned if the provided key is correct. If the provided key is wrong, or an error occurs, we will show this to the browser in the returned payload.

When the form in `lecturer.html` is submitted, let's send a request to our new route handler:

```js
document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault()
  const key = document.querySelector('#key').value

  const resp = await fetch('/auth', {
    method: 'POST',
    body: JSON.stringify({ id, key }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((r) => r.json())
    .catch((error) => alert(error))

  if (resp.error) return alert(resp.error)

  document.querySelector('form').remove()

  // Further code here [1]
})

// Further code here [2]
```

Errors will be shown to users in a popup. Success will lead to the form disappearing. Restart your server and try it out!

### Live Transcribe Lecturer

Now there is a valid Deepgram API Key in our web page, immediately establish a connection with Deepgram. In the first annotated spot above, connect to Deepgram:

```js
ws = new WebSocket('wss://api.deepgram.com/v1/listen', [
  'token',
  resp.deepgramToken,
])
ws.onopen = start
ws.onmessage = handleResponse
```

In the second annotated spot, add our event handlers for a connection being opened, and receiving data back from Deepgram. Take a look at ["Get Live Speech Transcriptions In Your Browser"](https://developers.deepgram.com/blog/2021/11/live-transcription-mic-browser/) for more explanation.

```js
function start() {
  mediaRecorder.addEventListener('dataavailable', (event) => {
    if (event.data.size > 0 && ws.readyState == 1) {
      ws.send(event.data)
    }
  })
  mediaRecorder.start(250)
}

function handleResponse(message) {
  const data = JSON.parse(message.data)
  const transcript = data.channel.alternatives[0].transcript
  if (transcript && data.is_final) {
    document.querySelector('p').textContent += ' ' + transcript
    // Further code here
  }
}
```

Restart your server, and you should see transcripts displayed in the browser.

![A webpage reads "Hello I hope you've had a wonderful week so far and I'm very excited for today's class"](https://res.cloudinary.com/deepgram/image/upload/v1644272676/blog/2022/02/classroom-captioner/lecturer-transcript.png)

### Emit Socket Event With Transcript

The final step on the lecturer side is to emit a socket event with this transcript, so we can bring it into students' pages. Add the following line to the `handleResponse` function:

```js
socket.emit('transcriptReady', transcript)
```

Now, as transcripts are displayed on the lecturer's page, a `transcriptReady` event will also be triggered.

## Emit Transcript

In `index.js`, add a new listener to the socket right below where the `socket.on('join')` callback ends:

```js
socket.on('transcriptReady', (message) => {
  for (let room of socket.rooms) {
    socket.to(room).emit('transcriptComplete', message)
  }
})
```

This goes through all of the rooms this current socket belongs to (which includes the room they joined with the `join` event) and emits a `transcriptComplete` event with the transcript to just the sockets in those rooms.

If the room you navigated to in the browser is called "my-awesome-room" the `join` event will have added your connection to a socket room of the same name. If students join the same room, they will receive the transcripts too.

## Student View

The student view is just a stripped-back version of the lecturer view. Create a `student.html` page in the `views` directory and add the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Class Captioner</title>
  </head>
  <body>
    <h1>Room <span id="id"></span></h1>

    <p></p>

    <script src="/socket.io/socket.io.js"></script>
    <script>
      const url = new URL(location.href)
      const search = new URLSearchParams(url.search)
      const id = search.get('id')
      document.querySelector('#id').textContent = id

      const socket = io()
      socket.emit('join', id)

      socket.on('transcriptComplete', (message) => {
        document.querySelector('p').textContent += ' ' + message
      })
    </script>
  </body>
</html>
```

Restart your server, open the application in various browser windows, with one window acting as the lecturer and the others as students. You should see the transcript appear on all screens.

## Adding Styling

Create a `style.css` file in your `public` directory with the following:

```css
@import url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  padding: 2em;
  font-family: 'Cairo', sans-serif;
  background: #141e29;
  color: white;
}
h2 {
  margin-top: 1.5rem;
}
input {
  display: block;
  font-size: 1em;
  font-family: inherit;
  padding: 0 0.5em;
  width: 200px;
}
input[type='submit'] {
  background: #38edac;
  color: #141e29;
  border: none;
  margin-top: 0.5em;
}
```

Then, just before the `</head>` in all three `.html` files, add the following:

```html
<link rel="stylesheet" href="style.css" />
```

Restart your server one final time and your application should look like this:

![Four browser windows. One is a broadcaster in room test1. Two are students in room test1. The final window is a student in room test 2. The first three have identical text displayed, and the other is empty](https://res.cloudinary.com/deepgram/image/upload/v1644272676/blog/2022/02/classroom-captioner/fin.png)

## Run Your Own

If you want to see the finished code and deploy your own version of this project in one click, visit <https://github.com/deepgram-devs/classroom-captioner>.

## Wrapping Up

Sharing knowledge as an educator feels wonderful, and now you can ensure all of your students have an equal experience in the classroom. If you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).

        