---
title: "Getting Started with the MediaStream API"
description: "Get to know the basics of the MediaStream API"
date: 2021-12-13
cover: https://res.cloudinary.com/deepgram/image/upload/v1638832562/blog/2021/12/getting-started-with-mediastream-api/getting-started-w-mediastream-API%402x.jpg
authors:
    - brian-barrow
category: tutorial
tags:
    - mediastream
    - javascript
seo:
    title: "Getting Started with the MediaStream API"
    description: "Get to know the basics of the MediaStream API"
shorturls:
    share: https://dpgr.am/93e84dc
    twitter: https://dpgr.am/e6dcf20
    linkedin: https://dpgr.am/8e652ff
    reddit: https://dpgr.am/34e806b
    facebook: https://dpgr.am/b3cff01
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453829/blog/getting-started-with-mediastream-api/ograph.png
---

When building web applications, you will sometimes need to work with audio and/or video inputs. You'll need to understand the MediaStream API, which is the web API that supports streaming both audio and video information. In this post, we'll cover the basics of the MediaStream API.

## Getting Started

To get started, you'll need to gain access to the user's audio/video devices which provide data in a 'stream.' A common use case would be getting access to the user's microphone and camera. One of the most common ways to do this is through the [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) method that is built into the browser. This post is more about understanding the different parts of the API. To see this method used in action, refer to [Kevin's post about getting audio in the browser](https://blog.deepgram.com/live-transcription-mic-browser/).

Let's take the following code, insert it into an HTML file, and then open that file in the browser.

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Getting Started With MediaStream</h1>
    <script>
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          console.log('MEDIA STREAM: ', stream)
        })
        .catch((err) => {
          alert('PERMISSION DENIED')
        })
    </script>
  </body>
</html>
```

This will prompt you to allow access to the microphone on your machine. If you reject it, you'll get an alert saying `PERMISSION DENIED.` If you allow that, then you will see the following in your console:

![Devtools console result showing the MediaStream object that is initialized on page load](https://res.cloudinary.com/deepgram/image/upload/v1638906691/blog/2021/12/getting-started-with-mediastream-api/initial-console-log.png)

As you can see, there are several properties and methods available on the MediaStream object. Before we dive into these, I want to clarify a couple of definitions.

*   **stream**: A stream of media content. Regarding what we'll be discussing, this refers to the stream of information coming from a user's device. The stream will be coming from either the device's microphone or the camera, or both at the same time. A stream will consist of one or more 'tracks.'
*   **track**: A `track` is a piece of media within a stream. These are typically audio or video tracks. If we get access to both a microphone and a camera, our stream will consist of both an audio and a video track.

### Properties

*   **active**

    The first one we see is the `active` property. This property is simply a boolean value indicating if any part of the MediaStream object is currently active or being used. Most MediaStream objects you'll encounter will contain audio and/or video tracks. If any of these tracks is `active,` then the `active` property on the MediaStream object will be true.

*   **id**

    The other property available on our MediaStream object is the id, a unique identifier for the object and contains 36 characters. This will be helpful if you need to keep track of multiple streams and do different things with them.

### Methods

*   **addTrack**

    This method takes in a `MediaStreamTrack` as an argument and adds it to the MediaStream object.

![image showing that a track gets added to the MediaStream object when addTrack is called](https://res.cloudinary.com/deepgram/image/upload/v1638975710/blog/2021/12/getting-started-with-mediastream-api/addTrack.png)

*   **getTracks**

    This returns a list of all `MediaStreamTrack` objects associated with the stream. To test it out, let's add the `getTracks` method to our code. I've included the `video: true` in the constraints so we can see multiple tracks.

    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <h1>Getting Started With MediaStream</h1>
        <script>
          navigator.mediaDevices
            .getUserMedia({ audio: true, video: true })
            .then((stream) => {
              console.log("tracks", stream.getTracks());
            .catch((err) => {
              console.log("ERROR", err);
              alert("PERMISSION DENIED");
            });
        </script>
      </body>
    </html>
    ```

    You can see in the screenshot below that we get both the audio and the video tracks showing:
    ![Console showing the results of the stream.getTracks() call](https://res.cloudinary.com/deepgram/image/upload/v1638911657/blog/2021/12/getting-started-with-mediastream-api/getTracks.png)

*   **getAudioTracks**

    This returns a list of `MediaStreamTrack` objects that are **audio** types. If we used this instead of `getTracks` above, we would have gotten the list with only the audio track showing.

*   **getVideoTracks**
    This returns a list of `MediaStreamTrack` objects that are **video** types.

*   **getTrackById**
    This method takes in a string and will return the track from the MediaStream object with the corresponding id.

    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <h1>Getting Started With MediaStream</h1>
        <script>
          navigator.mediaDevices
            .getUserMedia({ audio: true, video: true })
            .then((stream) => {
              const trackId = stream.getAudioTracks()[0].id;
              console.log("getTrackById", stream.getTrackById(trackId))
            .catch((err) => {
              console.log("ERROR", err);
              alert("PERMISSION DENIED");
            });
        </script>
      </body>
    </html>
    ```

*   **removeTrack**
    This method removes the given track from the `MediaStream` object. When we add a button to remove the track to our code and then log the `MediaStream.getTracks` to the dev tools console, we can see it is no longer there. If we were displaying a video stream to a div on our page and removed the video track, then the stream would no longer appear.

    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <h1>Getting Started With MediaStream</h1>
        <script>
          navigator.mediaDevices
            .getUserMedia({ audio: true, video: true })
            .then((stream) => {
              const tracks = stream.getTracks()
              console.log("tracks before remove", tracks);
              // remove both tracks
              stream.removeTrack(tracks[1])
              stream.removeTrack(tracks[0])
              console.log("tracks after remove", stream.getTracks());
            .catch((err) => {
              console.log("ERROR", err);
              alert("PERMISSION DENIED");
            });
        </script>
      </body>
    </html>
    ```

    ![browser devtools console showing the MediaStream object before and after the removeTrack has been called](https://res.cloudinary.com/deepgram/image/upload/v1638976221/blog/2021/12/getting-started-with-mediastream-api/removeTrack.png)

### Events

[Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) are simply actions that happen in the system you are programming, which the system tells you about so your code can react to them if needed. An `event listener is a function that runs when a specific event occurs`.

You should be aware of a few events on the `MediaStream` object.

*   **addtrack**
    Fired when a new track object is added.

    *   *Event listener:* `onaddtrack` is fired when a new track is added. To use the event listener, assign it to a function that you want to be called whenever a track is added

    ```js
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => {
        stream.onaddtrack = function(event) {
          // code to execute when track is added
        }
      .catch((err) => {
        console.log("ERROR", err);
        alert("PERMISSION DENIED");
      });
    ```

*   **removetrack**
    Fired when a new track object is added.
    *   *Event listener:* `onremovetrack` is fired when a new track is removed. To use the event listener, assign it to a function you want to be called whenever a track is removed.

## Conclusion

The `MediaStream` API is beneficial and can be utilized in the applications that you build. I hope this has been informative and helped you as a web developer.

        