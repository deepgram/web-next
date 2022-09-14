---
title: "How to Build a Live Streaming Web Application with Amazon IVS and Deepgram"
description: "In this series, learn how to build a live streaming web application using Deepgram's speech-to-text API and Amazon Interactive Video Service."
date: 2022-03-11
cover: https://res.cloudinary.com/deepgram/image/upload/v1646946075/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/Building-Livestreaming-w-AmazonIVS.jpg
authors:
    - sandra-rodgers
category: tutorial
tags:
    - aws
    - javascript
    - serverless
seo:
    title: "How to Build a Live Streaming Web Application with Amazon IVS and Deepgram"
    description: "In this series, learn how to build a live streaming web application using Deepgram's speech-to-text API and Amazon Interactive Video Service."
shorturls:
    share: https://dpgr.am/3f16a52
    twitter: https://dpgr.am/bca64b1
    linkedin: https://dpgr.am/d95369c
    reddit: https://dpgr.am/4ad64e5
    facebook: https://dpgr.am/347b3d4
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454013/blog/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/ograph.png
---

In this series, I will build a live streaming web application with text captions. Companies such as Twitch, StreamYard, Facebook Live, and many others provide live streaming on the web as a product, so I got curious about how I might go about building my own version.

<Panel type="info" title="Build a Live Streaming Web Application with Amazon IVS and Deepgram (SERIES)">
<ol>
<li><a href="https://blog.deepgram.com/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/">How to Build a Live Streaming Web Application with Amazon IVS and Deepgram</a></li>
<li><a href="https://blog.deepgram.com/build-a-livestream-web-application-vue-and-express-setup/"> Build a Live Streaming Web Application: Vue and Express Setup</a></li>
<li><a href="https://blog.deepgram.com/how-to-write-vue-3-composables-for-a-third-party-API-integration/"> How to Write Vue 3 Composables for a Third-Party API Integration</a></li>

<li><a href="https://blog.deepgram.com/asynchronous-logic-to-write-a-vue-3-and-deepgram-captions-component/"> Asynchronous Logic to Write a Vue 3 and Deepgram Captions Component</a></li>
</ol>
</Panel>

The main technologies I will use to build the live stream and text captions functionality are:

*   **Open Broadcast Software** - an open-source software used to capture video streams
*   **Amazon IVS** - an AWS service that can receive a video stream from OBS and put that stream into the browser, optimizing the entire process
*   **Deepgram** - a speech-to-text API that can receive an audio stream and return a text-transcript

I will build two versions of this project. I'll use the following to build each project:

1.  **HTML/Javascript** - The first version I build (the **vanilla version**) will be focused on creating a **front-end** with a very limited back-end, emphasizing the most barebones approach to getting the application working.

2.  **Vue.js/Node.js** - For the second version (the **framework version**), I will use Vue.js, a Javascript framework that gives me the tools I need to more easily include important features for security like routing and navigation guards. I will build a **full-stack** video streaming application with a **node.js** server to help me add a layer of security for some of the data I need to protect.

Here is a gif to demonstrate the final project:

<img src="https://res.cloudinary.com/deepgram/image/upload/v1646946089/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/VideoExample.gif" alt="demo of final project" style="width: 75%; margin:auto;">

## Project One: Vanilla Video Stream Player

Now I'll start by building the first version of the project. I'll build a 'vanilla' video streaming player in the sense that I will only use HTML and Javascript on the front-end, and the only back-end will be the work I do to get Amazon IVS set up to receive the OBS stream.

I want to keep it as simple as possible, focusing on how to build a **video streaming player in the browser that includes text captions**. This means I will not take into account real-world requirements such as hiding API keys or creating an entry page to restrict access to the video stream. Later, in the Vue.js version I build, I'll add those pieces, but to start, I just want to get the video player working - I want it to play my live stream and display text captions for what I'm saying as I stream to viewers.

Here is a diagram to demonstrate the core technology for the **video streaming part** of the project:

<img src="https://res.cloudinary.com/deepgram/image/upload/v1646946508/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/VideoStream.png" alt="Video stream diagram" style="width: 75%; margin:auto;">

The diagram presents this flow: the webcam takes in the video stream --> OBS captures that video stream so it can be sent along to Amazon IVS --> Amazon IVS provides a service to take in the stream, optimize it, and send it in a format to the browser so that it can be used in an HTML video player --> the HTML video element plays the optimized video stream.

Here is a diagram to demonstrate the core technology for the **text captions part** of the project:

<img src="https://res.cloudinary.com/deepgram/image/upload/v1646946508/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/AudioTranscription.png" alt="Audio transcription diagram" style="width: 75%; margin:auto;">

The general flow for the text captions technology will be something like this:

The browser Media Streams API gets permission to use the browser microphone --> the microphone takes in an audio stream of the audio that plays from the live stream --> The Deepgram API opens a web socket channel in the browser to send the audio stream to Deepgram --> the browser receives the JSON object in return that contains the text-transcript --> Javascript puts the text onto the page as captions as the video is playing.

Now that I have a high-level picture of how this project will be built, I am ready to build the barebones front-end video stream application. (In the next post in this series, I will build the Vue.js/Node.js full-stack application with added functionality.)

## Setting up Open Broadcast Software

The first thing I need is software to capture my video stream on my computer. I'll use the [Open Broadcast Software](https://obsproject.com/).

### What is OBS?

For anyone serious about streaming, OBS is a powerful tool. It is a free open source software that gives many configuration options for capturing and editing a stream. I can edit every aspect of my stream and create scenes made up of multiple sources such as images, text, etc. I can mix audio, switch between scenes with transitions, adjust the layouts, and so much more.

The stream I capture in OBS can be connected to a streaming platform such as Twitch, YouTube, or others, and it will deliver my stream to that platform; however, for this project, my goal is to stream to a web application that I make myself.

OBS takes some effort to learn, but I only need to familiarize myself with a few parts of it if I'm going to set it up to capture a stream and connect to Amazon IVS (Amazon IVS is not a streaming platform - it is more like an SDK that helps make the stream easier to handle when I build my front-end).

### Set up Live Streaming with OBS

To set up OBS for my project, I will:

1.  Go to [obsproject.com](https://obsproject.com/) and choose the operating system I use. I'll download the software.

2.  Run the OBS software. In the **Sources** panel, I'll click the **plus** sign to add a new source. I'll select **Video Capture Device**, and in the window that pops up, I'll select the camera I want to use to capture my stream (my computer camera or webcam).

<img src="https://res.cloudinary.com/deepgram/image/upload/v1646946718/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/VideoCaptureDevice.png" alt="Select Video Capture Device to add source from computer camera" style="width: 80%; margin:auto;">

3.  Make sure the source is selected in the sources panel (I may have other sources that I have set up), then I'll click on **Settings** in the far-right **Controls** panel.

4.  Select **Stream** in the left column of the window that opens up. The **Service** will remain **Custom**, but I notice that I could select a streaming platform such as Twitch or YouTube if I weren't planning to build my own streaming application.

5.  There is nothing more to do until I create the Amazon IVS channel. But I know that later I will take the **Server** and the **Stream Key** information from Amazon IVS for the specific channel I create in the AWS console.

![Stream settings](https://res.cloudinary.com/deepgram/image/upload/v1646946718/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/StreamSettings.png)

## Setting up Amazon IVS

In this step, I will create an Amazon IVS channel, which is where my video stream from OBS will feed into once I connect them.

### What is Amazon IVS?

The 'IVS' in Amazon IVS stands for Interactive Video Service. The website for [Amazon IVS](https://aws.amazon.com/ivs/) describes it as a "managed live streaming solution" that I can use to send "live streams to Amazon IVS using streaming software" and "make low-latency live video available to any viewer around the world." In addition, I "can easily customize and enhance the audience experience through the Amazon IVS player SDK."

So what does this mean?

The fact is, building a video player browser can be very complicated. Amazon IVS takes away much of the challenge, allowing me to focus on the design of my front-end rather than the nitty-gritty of the video player. If I did it all without Amazon IVS, I could use the HTML native [video tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#usage_notes), but then there would be much to do to optimize the video stream that comes through (there's an interesting article about this [here](https://medium.com/canal-tech/how-video-streaming-works-on-the-web-an-introduction-7919739f7e1)). A developer could dedicate their entire career to getting good at building stuff that manages audio and video streams in the browser.

Amazon IVS will optimize the stream to make it work for viewers watching it in my web application anywhere in the world. It also provides an SDK for the video player, which I can bring into the browser by adding a script. That script will take control of the video element in my HTML and add all the magic that Amazon IVS does under the hood. The Amazon IVS video player is built for the purpose of streaming live video, so I don't have to build my own complicated video player.

One important thing to consider is cost. AWS is not free, and while it is very cost-effective for a bigger streaming platform like Twitch (the Twitch streaming technology is powered by Amazon IVS), an individual developer like myself building a small project for fun might not find it to be the best option.

The good news is a new user of Amazon IVS can enjoy the free tier, which gives the following:

*   Five hours of live video input for a basic channel per month
*   100 hours of SD live video output per month

This is enough to build this project and not be charged, as long as I am careful about turning off my stream in OBS when I'm not using it. (Yes, I did forget to do this one time and clocked several hours in Amazon IVS.) Be sure to read through the [pricing details](https://aws.amazon.com/ivs/pricing/) and be vigilant about turning off the stream when you don't need it to be on.

### Set up Amazon IVS

Now I'll set up a channel in Amazon IVS. The channel will take my video stream from the OBS software on my computer and make that stream available in a video player that I will bring into the browser with the Amazon IVS SDK (so many acronyms!).

In order to do this, I'll need to [create an AWS account](https://portal.aws.amazon.com/billing/signup). This will require billing information.

In addition, I'll need to set up AWS Identity and Access Management (IAM), which adds a 'policy' to my account that allows me to create an AWS IVS channel. This is standard for doing anything in AWS - the first step is to configure IAM so that users of the AWS console have specific permissions. I am the only user of my console, so I'm not worried about restricting any permissions in my account.

[This guide](https://docs.aws.amazon.com/ivs/latest/userguide/getting-started-iam-permissions.html) walks through how to set up the IAM permissions so that a user can create an AWS IVS channel.

Now I can navigate to IVS to create a channel. In the top search bar, I can type 'IVS' to find Amazon Interactive Video Service.

![AWS search bar](https://res.cloudinary.com/deepgram/image/upload/v1646946745/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/SearchBar.png)

This takes me to the Amazon IVS console. I will click the **Create channel** button to create my channel.

![Click button to create IVS channel](https://res.cloudinary.com/deepgram/image/upload/v1646946808/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/CreateChannel.png)

I can name my stream and stick with the **Default** configuration. Then I'll scroll down and click **Create channel**.

![Set up IVS with default configuration](https://res.cloudinary.com/deepgram/image/upload/v1646946808/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/IVSSetup.png)

This will create the channel and then put me on that channel's page in the console. This is where I can configure the channel and get the information I need to connect my video stream in OBS to this channel. I need to find this section of the page:

![Info about channel for OBS and video player](https://res.cloudinary.com/deepgram/image/upload/v1646946838/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/ChannelInfo.png)

There are three pieces of information I am going to need for my project. Two are to connect OBS to Amazon IVS, and one is to bring the stream from Amazon IVS (with all its optimizations) into the browser video player:

*   **Ingest server** - put this in OBS settings for my stream
*   **Stream key** - put this in OBS settings for my stream
*   **Playback URL** - use this as the src for my script that I put in the video player

I have already set up OBS, so I can just go back to the settings for my stream and add the **Ingest server** and **Stream key**. The **Playback URL** will be used later.

![Stream settings](https://res.cloudinary.com/deepgram/image/upload/v1646946718/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/StreamSettings.png)

Now, if I go back to the OBS controls and click on **Start Streaming**, my stream should be fed to Amazon IVS, and I am able to see it in the Amazon IVS channel page where it says **Live stream**:

![Live stream in channel page](https://res.cloudinary.com/deepgram/image/upload/v1646946953/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/LiveStream.png)

### Connect Front-end Video Player to Amazon IVS

The back-end is done (AWS takes care of most of the work). Now I can build the front-end, which I will do using vanilla Javascript and HTML.

In the `<head>` tag of my HTML document, I will include the script for the Amazon IVS player. Amazon IVS explains how to do this setup [here](https://docs.aws.amazon.com/ivs/latest/userguide/player-web.html), for those who want to go straight to the source.

```html
<head>
  <meta charset="UTF-8" />
  <title>Video Stream Demo</title>
  <script src="https://player.live-video.net/1.6.1/amazon-ivs-player.min.js"></script>
</head>
```

This will load the IVS Player, and I will have access to the `IVSPlayer` variable in the global context. I can type that variable into the console to take a look at the module that has been loaded. There are quite a few properties that could be of use to me, depending on my project's needs.

<img src="https://res.cloudinary.com/deepgram/image/upload/v1646946972/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/ConsoleIVSPlayer.png" alt="IVSPlayer in console" style="width: 50%; margin:auto;">

In the `<body>` tag, I will include a `<video>` player that has an `id` of `video-player` (this id can be renamed, as long as the javascript I write to find this element looks for that specific id).

```html
<body>
  <video
    width="520"
    height="440"
    id="video-player"
    controls
    playsinline
  ></video>
</body>
```

In the browser, I see the video player, but there is no stream coming through. That is because I have only brought in the Amazon IVS player; I have not yet connected the player to my stream channel.

I will use javascript to put my stream channel into the player.

```js
<script>
if (IVSPlayer.isPlayerSupported) {
  const player = IVSPlayer.create();
  player.attachHTMLVideoElement(document.getElementById("video-player"));
  player.load("PLAYBACK_URL");
  player.play();
}
</script>
```

Where it says `PLAYBACK_URL` in the code example, I need to put the string for my playback URL, which I can find in the Amazon IVS console for my channel.

![Playback URL](https://res.cloudinary.com/deepgram/image/upload/v1646946995/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/PlaybackConfiguration.png)

Then I can turn on my stream in OBS, and I should see my stream in the browser!

<img src="https://res.cloudinary.com/deepgram/image/upload/v1646947012/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/StartStream.png" alt="OBS Start stream" style="width: 50%; margin:auto;">

### Use Deepgram to Create Text Captions

The second part of this project, after getting the live stream video player working, is creating text captions. The captions will display what is being said in the live stream as I am streaming.

I will need to do two things: use my computer's microphone to listen to the audio that is being outputted from the live stream, and then send that audio stream to Deepgram to turn it into a text transcription.

### What is the Media Streams API?

The browser contains several APIs for working with audio and video. I need to use one that lets me **gain access to the user's microphone**. If I can gain that access, I can record the audio from the live stream and send it on to Deepgram to get the text transcript.

The **Media Streams API** contains many interfaces and methods for working with **audio and video data**. There is already a really great guide for how it works [here](https://blog.deepgram.com/getting-started-with-mediastream-api/), so I won't go over all the details. I just need to understand that the Media Streams API has so much that I can use when I'm working with audio or video data in the browser. In fact, I'm pretty sure the Amazon IVS SDK uses it under the hood as part of their video player.

### Get Audio with Media Streams API

I will use the `getUserMedia` method from this API. To get access to the user's microphone, I can write this javascript:

```js
<script>
//Get access to user's microphone
navigator.mediaDevices.getUserMedia({ audio: true }).then((res) => {
  mediaRecorder = new MediaRecorder(res, {
    audio: true,
  });
});
</script>
```

This will cause the browser to ask for permission to use the microphone.

<img src="https://res.cloudinary.com/deepgram/image/upload/v1646947043/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/GetMicrophone.png" alt="Request permission to use microphone" style="width: 50%; margin:auto;">

If the user gives permission, then I'll have access to the live stream audio to send to Deepgram.

## Create Text Captions with Deepgram API

In the next step, I will use the Deepgram API to take the audio data and turn it into text.

### What is Deepgram?

Deepgram is an ASR technology (ASR stands for Automatic Speech Recognition). It uses pretty advanced AI and deep learning technology to take speech from audio files or streams and turn it into text. There are probably a million ways to use this technology in a project. It's a fun API to get comfortable with for this reason.

If I'm going to use Deepgram in my project, I need to create an account [here](https://console.deepgram.com/signup?jump=keys). This will give me an API key and $150 in free credit, so I won't need to enter billing information just to get started (unlike AWS).

Now I can connect to the Deepgram socket with my API key.

### Connect to Deepgram to Get Transcription

I want to get the transcription and display it under the video player, so I will create an HTML element for that transcript. I'll give it the **id** of `captions`.

```html
<p id="captions"></p>
```

I'm going to follow the tutorial my colleague Kevin Lewis wrote about [getting live speech transcriptions in the browser](https://blog.deepgram.com/live-transcription-mic-browser/). He explains that I need to connect to Deepgram with a WebSocket. I have to make sure I have access to the microphone before I open the WebSocket, so I will put the logic to connect to Deepgram inside the `.then()` that is attached to the `getUserMedia` function call.

```js
navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  ...
  const socket = new WebSocket("wss://api.deepgram.com/v1/listen", [
    "token",
    "YOUR_KEY_HERE",
  ]);
});

```

I will put my API key where it says "YOUR\_KEY\_HERE".

Once the socket is open, I can add an event listener that listens for when there is audio data that has come through the microphone. When that happens, I can take that audio data and send it through the Deepgram socket to Deepgram.

```js
socket.onopen = () => {
  mediaRecorder.addEventListener('dataavailable', async (event) => {
    if (event.data.size > 0 && socket.readyState == 1) {
      socket.send(event.data)
    }
  })
  mediaRecorder.start(1000)
}
```

Deepgram will send the transcribed audio back to me as text. It will come in the form of a JSON object, so I need to drill down to the `transcript` property using dot notation. I will use `document.querySelector(#captions)` to put the transcript onto the screen under the video element.

```js
socket.onmessage = (message) => {
  const received = JSON.parse(message.data)
  const transcript = received.channel.alternatives[0].transcript
  if (transcript && received.is_final) {
    document.querySelector('#captions').textContent += transcript + ' '
  }
}
```

Here is all the Javascript code for building the text captions feature:

```js
    <script>
    // Get access to user's microphone
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);

      // Open connection to Deepgram
      const socket = new WebSocket("wss://api.deepgram.com/v1/listen", [
        "token",
        "YOUR_KEY_HERE",
      ]);

      // Listen for audio data coming from microphone and send it to Deepgram
      socket.onopen = () => {
        mediaRecorder.addEventListener("dataavailable", async (event) => {
          if (event.data.size > 0 && socket.readyState == 1) {
            socket.send(event.data);
          }
        });
        mediaRecorder.start(1000);
      };

      // Put the transcript onto the screen in the #captions element
      socket.onmessage = (message) => {
        const received = JSON.parse(message.data);
        const transcript = received.channel.alternatives[0].transcript;
        if (transcript && received.is_final) {
          document.querySelector("#captions").textContent += transcript + " ";
        }
      };

      socket.onclose = () => {
        console.log({ event: "onclose" });
      };

      socket.onerror = (error) => {
        console.log({ event: "onerror", error });
      };
    });
    </script>
```

And here is the HTML:

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Video Stream Demo</title>
    <!-- Amazon IVS SDK video player -->
    <script src="https://player.live-video.net/1.6.1/amazon-ivs-player.min.js"></script>
  </head>
  <body>
    <video
      width="520"
      height="440"
      id="video-player"
      controls
      playsinline
    ></video>
    <p id="captions"></p>
    <!-- scripts -->
  </body>
</html>
```

Now I can start my live stream, and the text captions will be displayed under the video player!

## Conclusion

In this tutorial, I built a 'vanilla' live stream player with text captions. I demonstrated how to use the technologies Amazon IVS and Deepgram using fundamentals of web development - HTML and Javascript. You can find the repo for this vanilla Javascript project [here](https://github.com/deepgram-devs/deepgram-livestream-javascript).

But most front-end developers rely on frameworks to build projects like these. And there are other considerations I need to make in regards to keeping my Deepgram API key secure and limiting who has access to this website.

In the next part of the series, **I will improve this project by building it using Vue.js (specifically Vue 3) for the front-end, and node.js for the back-end**. I will include some of the real-world practices for building a full-stack application. I'll need a server file so I can incorporate more security, which I'll build with node.js, and I'll build an entry page with VueRouter navigation guards so that users must enter a code to see my live stream.

Vue.js is my favorite Javascript framework, and I have written a series on [Diving Into Vue 3](https://blog.deepgram.com/diving-into-vue-3-setup-function/), which is worth checking out if you want to come along with me for the rest of this series to build a full-stack live stream application in Vue.js.

Please follow me on [Twitter](https://twitter.com/sandra_rodgers_) if you find my tutorials useful!

        