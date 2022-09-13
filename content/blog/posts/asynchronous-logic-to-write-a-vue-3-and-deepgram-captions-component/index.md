---
title: "Asynchronous Logic to Write a Vue 3 and Deepgram Captions Component"
description: "In this segment, learn how to use Vue 3 composables to power a text-captions component that integrates with Deepgram's speech-to-text API. Read more here!"
date: 2022-04-01
cover: https://res.cloudinary.com/deepgram/image/upload/v1648829347/blog/2022/03/asynchronous-logic-to-write-a-vue-3-and-deepgram-captions-component/Building-Livestreaming-w-AmazonIVS.jpg
authors:
    - sandra-rodgers
category: tutorial
tags:
    - aws
    - javascript
    - serverless
seo:
    title: "Asynchronous Logic to Write a Vue 3 and Deepgram Captions Component"
    description: "In this segment, learn how to use Vue 3 composables to power a text-captions component that integrates with Deepgram's speech-to-text API. Read more here!"
shorturls:
    share: https://dpgr.am/5f3d18c
    twitter: https://dpgr.am/6dfa73e
    linkedin: https://dpgr.am/27c8482
    reddit: https://dpgr.am/ec771f4
    facebook: https://dpgr.am/cb3aca0
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454007/blog/asynchronous-logic-to-write-a-vue-3-and-deepgram-captions-component/ograph.png
---

This is the final post of my series, "How to Build a Live Streaming Web Application with Amazon IVS and Deepgram."

<Panel type="info" title="Build a Live Streaming Web Application with Amazon IVS and Deepgram (SERIES)">
<ol> 
<li><a href="https://developers.deepgram.com/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/">How to Build a Live Streaming Web Application with Amazon IVS and Deepgram</a></li>
<li><a href="https://developers.deepgram.com/blog/2022/03/build-a-livestream-web-application-vue-and-express-setup/"> Build a Live Streaming Web Application: Vue and Express Setup</a></li>
<li><a href="https://developers.deepgram.com/blog/2022/03/how-to-write-vue-3-composables-for-a-third-party-API-integration/"> How to Write Vue 3 Composables for a Third-Party API Integration</a></li>

<li><a href="https://developers.deepgram.com/blog/2022/03/asynchronous-logic-to-write-a-vue-3-and-deepgram-captions-component/"> Asynchronous Logic to Write a Vue 3 and Deepgram Captions Component</a></li>
</ol>
</Panel>

For today's post, I recommend getting a Deepgram API key to use in this project, which anyone can get by heading to the [Deepgram console](https://console.deepgram.com/signup?jump=keys).

## Introduction - Async and the Composition API

Today's post will cover how to use Vue 3 composables to power a text-captions component that integrates with Deepgram's speech-to-text API. Some of the things I'll cover today are:

*   Using `async` and `await` to write a composable that fetches a temporary API key from Deepgram.
*   Using Vue 3's `watch` method to react to data that is updating in real-time as Deepgram sends a text transcription back through a browser WebSocket.
*   Writing logic that is sensitive to the order things occur - i.e., asynchronous logic that flows between the component and the composable.

This post assumes some knowledge of Vue 3, in particular Vue composables. For a refresher on Vue 3, check out my series [Diving Into Vue 3](https://sweet-pie-c52a63-blog.netlify.app/diving-into-vue-3-getting-started/).

Today I will build the `AudioCaptions.vue` component. (For the `VideoPlayer` component, see my [previous post](https://sweet-pie-c52a63-blog.netlify.app/how-to-write-vue-3-composables-for-a-third-party-API-integration/#composable-to-bring-in-an-external-script) in the series.) Here is the page with minimal styling. I've put a red box around the `AudioCaptions.vue` component:

![StreamChannel page emphasizing AudioCaptions.vue component](https://res.cloudinary.com/deepgram/image/upload/v1648829348/blog/2022/03/asynchronous-logic-to-write-a-vue-3-and-deepgram-captions-component/StreamChannel_captions.png)

Where it says "Deepgram Not Connected," there will be text captions that display in real-time along with the video stream.

Here is a diagram of what I will build today:

<img src="https://res.cloudinary.com/deepgram/image/upload/v1648829348/blog/2022/03/asynchronous-logic-to-write-a-vue-3-and-deepgram-captions-component/AudioTranscription_Final.png" alt="Audio Transcription Feature Diagram" style="width: 75%; margin:auto;">

This feature will rely on Vue 3's Composition API, especially Vue Composables, to put Deepgram captions on the screen.

## Composables and Asynchronous Logic

Composables are a feature of the Vue 3 Composition API; **custom composables** are the ones I build myself with the intention of encapsulating reusable, stateful logic.

I feel like it is somewhat of an art learning how to write composables. The key to writing them well is making them as generic as possible so that they can be reused in many contexts.

For example, I could write a function that does everything I need it to do to create text captions on the screen using the Deepgram API - the function would include logic to get an API key, turn on the browser microphone, get the audio stream from the microphone, and then send the stream through a WebSocket. I could call the composable `useDeepgram`.

However, there are several logical concerns in that one large `useDeepgram` function that could be broken out into other composable functions. While it's easier just to write it all in one file, it means I could only use it in situations that are exactly like this project.

The challenge of breaking it apart is that the logic to get the transcription from Deepgram depends on certain things happening first, such as the API key arriving and the microphone being turned on. When I break that logic apart into separate functions, I have to be conscious of the order that those functions run, the state that gets updated in multiple functions (and making sure the functions stay in sync), and the conventions for writing asynchronous logic. Not to mention the challenge of updating the component in real-time with the data that comes through the WebSocket.

The point is that writing composables in the real world can be challenging, so learning some strategies for dealing with more complicated situations, particularly asynchronous logic, is worth it. Because the beauty of composables is that if you write them well, you have a clean, reusable function that you'll return to again and again.

## Composable Using Async and Await

Here is the `AudioCaptions.vue` component right now, before I add the feature logic:

```js
<template>
  <div>
    <p>Status Will Go Here</p>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
```

In the template where it says "Status Will Go Here," I plan to add a reactive variable. That value will update to show the audio captions after everything is working. For now, I've just hard-coded that text.

### useDeepgramKey Composable

The first composable I'm going to write will be called `useDeepgramKey.js`, and its purpose will be to fetch a temporary API key. If I fetch a temporary API key from Deepgram, I can use the key in the browser and not worry about exposing the key since the key will expire almost immediately. Read more about this feature in a blog post that Kevin wrote about [protecting your Deepgram API key](https://sweet-pie-c52a63-blog.netlify.app/protecting-api-key/).

On the backend, I have set up an endpoint to receive the fetch request from the composable. That endpoint can be seen in the `server.js` file in my repo [here](https://github.com/deepgram-devs/livestream-amazonIVS-and-deepgram/blob/deepgram-composables/server.js).

Now I'll create the `useDeepgramKey.js` composable.

<img src="https://res.cloudinary.com/deepgram/image/upload/v1648829348/blog/2022/03/asynchronous-logic-to-write-a-vue-3-and-deepgram-captions-component/useDeepgramKey.png" alt="Create useDeepgramKey.js file in Composables folder" style="width: 50%; margin:auto;">

### Tip #1 - Use async and await to write a composable that returns a promise.

I will do three things to make this composable run asynchronously:

1.  Write the composable as an async function using `export default async` to make the composable itself know to wait for the fetch request to finish.

2.  Encapsulate the fetch request in its own async function called `async function getKey()`, which is called inside the composable using the `await` keyword.

3.  In the component `AudioCaptions`, use a `.then()` when I call the composable so that I get access to the returned state after the Promise completes.

Here is the composable to start. The `key` will update to be the API key when that arrives from the backend, and `DGStatus` will update with a message if there is an error.

```js
import { ref } from 'vue'
let key = ref('')
let DGStatus = ref('Deepgram Not Connected')

export default async function useDeepgramKey() {
  return { key, DGStatus }
}
```

Now I'll write an async function that will perform all the logic of getting the temporary key. I'll name it `getKey()` and I will use a try-catch block to make the fetch request and handle any errors:

```js
async function getKey() {
  try {
    const res = await fetch('http://localhost:8080/deepgram-token', {
      headers: { 'Content-type': 'application/json' },
    })
    if (res) {
      const response = await res.json()
      // update with temporary api key:
      key.value = response.key
      return key
    }
  } catch (error) {
    if (error) {
      // update to show error message on screen:
      DGStatus.value = 'Error. Please try again.'
    }
  }
}
```

To make sure this runs, I need to call the function in the composable. I will add `await getKey()` to the async function that will be exported. Using `await` is to go along with `async` that I used on the composable function itself. These two keywords together tell the composable that it must wait until the `getKey` function resolves.

Here is the composable in its entirety:

```js
import { ref } from 'vue'
let key = ref('')
let DGStatus = ref('Deepgram Not Connected')

async function getKey() {
  try {
    const res = await fetch('http://localhost:8080/deepgram-token', {
      headers: { 'Content-type': 'application/json' },
    })
    if (res) {
      const response = await res.json()
      // update with temporary api key:
      key.value = response.key
      return key
    }
  } catch (error) {
    if (error) {
      // update to show error message on screen:
      DGStatus.value = 'Error. Please try again.'
    }
  }
}

export default async function useDeepgramKey() {
  // call function:
  await getKey()
  return { key, DGStatus }
}
```

I can `console.log(key.value)` to make sure the key is arriving successfully.

Then I'll go back to `AudioCaptions.vue` to wire up a reactive reference that will update to show the error status message if the key does not arrive. I'll create a `ref` called `deepgramStatus` and replace the hardcoded "Status Will Go Here" with that variable.

```js
<template>
  <div>
    <p>{{ deepgramStatus }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let deepgramStatus = ref("Deepgram Not Connected");
    return { deepgramStatus };
  },
};
</script>
```

**I also need to call the composable function in the component.** If I don't call it, the logic won't run. Since it is a promise, I will use a `.then()` method on it to get the result, which will be the `key` and `DGStatus` values. I only need the `DGStatus`, so I'll set that to the `deepgramStatus` ref.

Here's the `AudioCaptions.vue` script now:

```js
<script>
import { ref } from "vue";
import useDeepgramKey from "@/composables/useDeepgramKey";
export default {
  setup() {
    let deepgramStatus = ref("Deepgram Not Connected");

    // use .then() to wait for promise resolution
    useDeepgramKey().then((res) => {
      deepgramStatus.value = res.DGStatus.value;
    });

    return { deepgramStatus };
  },
};
</script>
```

If I want to see the error message, I can delete a character in the fetch request URL, making it `http://localhost:8080/deepgram-toke`, which is incorrect. That will cause the fetch request to fail, and I'll see the error message.

![Error. Please Try Again.](https://res.cloudinary.com/deepgram/image/upload/v1648829348/blog/2022/03/asynchronous-logic-to-write-a-vue-3-and-deepgram-captions-component/error-message.png)

## Composable That Relies on Asynchronous Events in Other Composables

Now I will begin to tackle the `useDeepgramSocket` composable. This composable will take an audio stream from the browser microphone and send it to Deepgram by way of a browser WebSocket. It relies on two other composables to do this:

1.  `useDeepgramKey` - I need to get the temporary API key from the composable I just made, `useDeepgramKey`, to send it in the request to Deepgram; otherwise, Deepgram won't be able to fulfill the request.

2.  `useMicrophone` - I need to get an audio stream from the browser microphone. That audio data will be sent to Deepgram to be transcribed into text that will be put onto the screen as captions.

I haven't created the `useMicrophone` composable yet, so I'll make a quick detour right now to write that composable.

### useMicrophone Composable

The `useMicrophone` composable will rely on the browser Media Stream API and the `getUserMedia` method to request permission to use the browser microphone of the user and pull the audio from it. Since there are several other blog posts in [Deepgram Docs](https://developers.deepgram.com/) about this nifty API, I won't go into detail about how it works. Check out [Brian's post](https://sweet-pie-c52a63-blog.netlify.app/getting-started-with-mediastream-api/) for a general introduction to it.

This composable is also going to use an `async` function since the `getUserMedia` method requires waiting for the user to give permission to use the microphone. The time involved means that this method returns a promise. I already know how to write this type of composable since I just did it in the last section.

I'll make the composable an `async` function and I'll also write the logic to get the audio stream as an `async` function. Here is the composable in its entirety:

```js
async function getAudio() {
  try {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    })
    const mediaRecorder = new MediaRecorder(mediaStream, {
      audio: true,
    })
    return mediaRecorder
  } catch (e) {
    console.error(e)
  }
}

export default async function useMicrophone() {
  const microphone = await getAudio()
  return { microphone }
}
```

Now it's ready for me to use in the next composable I will write.

### useDeepgramSocket Composable

First, I'll import this composable into `AudioCaptions.vue` and call it. That way, everything I write in `useDeepgramSocket` will run and I can check my progress as I build this composable.

```js
<script>
import { ref } from "vue";
import useDeepgramKey from "@/composables/useDeepgramKey";
import useDeepgramSocket from "@/composables/useDeepgramSocket";
export default {
  setup() {
    let deepgramStatus = ref("Deepgram Not Connected");

    useDeepgramKey().then((res) => {
      deepgramStatus.value = res.DGStatus.value;
    });

    // call this so the composable runs as I work on it
    useDeepgramSocket();

    return { deepgramStatus };
  },
};
</script>
```

I know I need to have access to the temporary API key from `useDeepgramToken` and to the microphone from `useMicrophone`. **I will start by setting up my composable to show that I have access to them within the same scope.**

Both composables return a promise. That means I will need to use syntax that will make the functions run but wait for the promise to resolve before moving on to the next thing.

### Tip #2 - Use `.then()` to chain each composable that returns a promise to run asynchronously if returned values need to be in the same scope

Here's what I mean:

```js
import useDeepgramKey from './useDeepgramKey'
import useMicrophone from './useMicrophone'

export default function useDeepgramSocket() {
  // chain .then() methods for each composable:
  useDeepgramKey().then((keyRes) => {
    useMicrophone().then((microphoneRes) => {
      let apiKey = keyRes.key.value
      let microphone = microphoneRes.microphone

      console.log(apiKey)
      console.log(microphone)

      // WEBSOCKET FUNCTION WILL GO HERE
    })
  })
  return {}
}
```

I have named the result argument in each `.then()` a name that shows which composable they came from - `keyRes` and `microphoneRes`, which makes it easy for me to see what each of them represents. The `keyRes` is a `ref`, so I must drill all the way down to the `.value` property. The `microphoneRes` is a Vue 3 `readonly` property, which is why I don't have to drill down as far.

Now that I have the values, I can write a function that encapsulates the logic to open the WebSocket.

### openDeepgramSocket Function

I will write a function called `openDeepgramSocket` that will do the following:

*   Create the socket with `new WebSocket(URL, deepgram protocols)`.
*   Open the socket with `socket.onopen`. When it opens, I'll add an event listener to the microphone to take in the audio stream and send it through the socket.
*   Have `socket.onclose` listen for when the channel closes.

I will also create a reactive reference called `DGStatus_socket` to update the status of the transcription along the way. That value will be returned to the `AudioCaptions.vue` component as the text captions.

Here is the function:

```js
function openDeepgramSocket(apiKey, microphone) {
  const socket = new WebSocket(
    'wss://api.deepgram.com/v1/listen?punctuate=true',
    ['token', apiKey]
  )

  socket.onopen = () => {
    if (microphone.state != 'recording') {
      DGStatus_socket.value = 'Connected to Deepgram'
      console.log('Connection opened.')

      microphone.addEventListener('dataavailable', async (event) => {
        if (event.data.size > 0 && socket.readyState == 1) {
          socket.send(event.data)
        }
      })

      microphone.start(200)
    }
  }

  socket.onmessage = (message) => {
    const received = JSON.parse(message.data)
    const transcript = received.channel.alternatives[0].transcript
    if (transcript && received.is_final) {
      DGStatus_socket.value = transcript + ''
      // shows the transcript in the console:
      console.log(DGStatus_socket.value)
    }
  }

  socket.onclose = () => {
    console.log('Connection closed.')
  }
}
```

I have to make sure to call the function in the composable:

```js
export default function useDeepgramSocket() {
  useDeepgramKey().then((keyRes) => {
    useMicrophone().then((microphoneRes) => {
      let apiKey = keyRes.key.value
      let microphone = microphoneRes.microphone

      // Call function:
      openDeepgramSocket(apiKey, microphone)
    })
  })
  return {}
}
```

Now I see the transcript coming back to me because I have added a console.log to show it:

![transcript returned in console with messages](https://res.cloudinary.com/deepgram/image/upload/v1648829348/blog/2022/03/asynchronous-logic-to-write-a-vue-3-and-deepgram-captions-component/transcript_console.png)

I'm ready to put that transcript onto the screen as the captions!

### Vue watch to Update Transcript Status

I will use the reactive reference `DGStatus_socket` in the composable `useDeepgramSocket` to update the captions in `AudioCaptions.vue`. To do that, I need to return it from the composable and then destructure it in the component `AudioCaptions.vue`.

Here is the `useDeepgramSocket` composable where I return the `DGStatus_socket` value (excluding the large `openDeepgramSocket` function):

```js
import { ref } from "vue";
import useDeepgramKey from "./useDeepgramKey";
import useMicrophone from "./useMicrophone";

// create status ref
let DGStatus_socket = ref("");

function openDeepgramSocket(apiKey, microphone) {
...
}

export default function useDeepgramSocket() {
  useDeepgramKey().then((keyRes) => {
    useMicrophone().then((microphoneRes) => {
      let apiKey = keyRes.key.value;
      let microphone = microphoneRes.microphone;

      openDeepgramSocket(apiKey, microphone);
    });
  });

  // return status ref to component
  return { DGStatus_socket };
}
```

In `AudioCaptions.vue`, I destructure the `DGStatus_socket` so I have access to it:

```js
const { DGStatus_socket } = useDeepgramSocket()
```

Is it working? Not yet. I have to update the `deepgramStatus` ref that is connected to the template if I want to see those captions on the screen.

### Tip #3: Use watch to update a value in the component and trigger a side effect in-sync with that change

According to the Vue documentation, `watch` is used in "cases where we need to perform 'side effects' in reaction to state changes - for example, mutating the DOM or changing another piece of state based on the result of an async operation."

This example of putting the captions on the screen fits that description exactly. I want the `deepgramStatus` value to update if `DGStatus_socket` from the composable `useDeepgramSocket` changes, and I want that state change to trigger the effect of the text updating in the DOM.

I will add a watcher to the `AudioCaptions` component:

```js
watch(DGStatus_socket, () => {
  deepgramStatus.value = DGStatus_socket.value
})
```

And this is what the component in its entirety looks like now:

```js
<template>
  <div>
    <p>{{ deepgramStatus }}</p>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import useDeepgramKey from "@/composables/useDeepgramKey";
import useDeepgramSocket from "@/composables/useDeepgramSocket";
export default {
  setup() {
    let deepgramStatus = ref("Deepgram Not Connected");

    useDeepgramKey().then((res) => {
      deepgramStatus.value = res.DGStatus.value;
    });

    const { DGStatus_socket } = useDeepgramSocket();

    watch(DGStatus_socket, () => {
      deepgramStatus.value = DGStatus_socket.value;
    });

    return { deepgramStatus };
  },
};
</script>

```

And with that, I have my captions powered by Deepgram! Check out the code for this post on my repo branch [deepgram-composables](https://github.com/deepgram-devs/livestream-amazonIVS-and-deepgram/tree/deepgram-composables).

![Captions working](https://res.cloudinary.com/deepgram/image/upload/v1648829348/blog/2022/03/asynchronous-logic-to-write-a-vue-3-and-deepgram-captions-component/captions.gif)

## Conclusion

Today I built the final component of my project, a full-stack video streaming application with text captions.

This post contained the barebones logic for the captions feature, but in my actual project, I have added styling to improve the user experience, and I've added buttons to turn the captions on or off. Check out the repo [here](https://github.com/deepgram-devs/livestream-amazonIVS-and-deepgram).

Here is the final project:

![Final project demo](https://res.cloudinary.com/deepgram/image/upload/v1648829348/blog/2022/03/asynchronous-logic-to-write-a-vue-3-and-deepgram-captions-component/VideoExample.gif)

It's been a great experience learning about Amazon IVS and Deepgram, and I've gotten the chance to get a better taste of how to take advantage Vue 3's composition API.

If you enjoyed this series, please follow me on [Twitter](https://twitter.com/sandra_rodgers_) to receive updates on future series I have in the works!

        