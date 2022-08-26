---
title: "How to Write Vue 3 Composables for a Third-Party API Integration"
description: "In this series, learn how to build a live streaming web application using Deepgram's speech-to-text API and Amazon Interactive Video Service."
date: 2022-03-25
cover: https://res.cloudinary.com/deepgram/image/upload/v1647979609/blog/2022/03/how-to-write-vue-3-composables-for-a-third-party-API-integration/Building-Livestreaming-w-AmazonIVS.jpg
authors:
    - sandra-rodgers
category: tutorial
tags:
    - aws
    - javascript
    - vuejs
seo:
    title: "How to Write Vue 3 Composables for a Third-Party API Integration"
    description: "In this series, learn how to build a live streaming web application using Deepgram's speech-to-text API and Amazon Interactive Video Service."
shorturls:
    share: https://dpgr.am/57da115
    twitter: https://dpgr.am/54e93b8
    linkedin: https://dpgr.am/f27181e
    reddit: https://dpgr.am/7b9f73b
    facebook: https://dpgr.am/c3ea449
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454030/blog/how-to-write-vue-3-composables-for-a-third-party-api-integration/ograph.png
---

## Introduction

This post is a continuation of the series "How to Build a Live Streaming Web Application with Amazon IVS and Deepgram."

<panel type="info" title="Build a Live Streaming Web Application with Amazon IVS and Deepgram (SERIES)">
<ol> 
<li><a href="https://developers.deepgram.com/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/">How to Build a Live Streaming Web Application with Amazon IVS and Deepgram</a></li>
<li><a href="https://developers.deepgram.com/blog/2022/03/build-a-livestream-web-application-vue-and-express-setup/"> Build a Live Streaming Web Application: Vue and Express Setup</a></li>
<li><a href="https://developers.deepgram.com/blog/2022/03/how-to-write-vue-3-composables-for-a-third-party-API-integration/"> How to Write Vue 3 Composables for a Third-Party API Integration</a></li>

<li><a href="https://developers.deepgram.com/blog/2022/03/asynchronous-logic-to-write-a-vue-3-and-deepgram-captions-component/"> Asynchronous Logic to Write a Vue 3 and Deepgram Captions Component</a></li>
</ol>
</panel>

### Composables

In Vue.js, the term 'composables' refers to composition functions, a key feature of Vue 3's Composition API. While the API itself includes many composition functions that are core to its design, such as the `setup()` function or the reactivity functions `ref()` and `reactive()`, composables are those composition functions that I write myself to be used throughout my own project as needed.

Composables are functions that encapsulate stateful logic, which means they are like little packages that are focused around performing one logical concern, and they keep track of state that changes due to the function running.

For example, I could write a composable function that toggles a menu open or closed. That logic could be used throughout an application, and it would need to keep track of the state of the menu being opened or closed. I would just need to import the composable into whatever file I need it and run the function.

#### Composable Example `useMenu.js`

```js
import { readonly, ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

export default function useMenu() {
  return {
    isOpen: readonly(isOpen),
    toggleMenu,
  }
}
```

Today I am going to introduce how to write a composable in Vue 3 to bring in the Amazon IVS video player SDK and to connect to my Amazon IVS streaming channel.

If you have wanted to learn more about how to write Vue 3 composables to use third-party technologies, this will be useful to you. In this post, I'll cover:

*   Writing a Vue composable to bring in an external script
*   Writing a Vue composable that is dependent on another composable, utilizing the Javascript function `setInterval`
*   Amazon IVS integration using Vue 3 composables

### Background to the Series

In the [first post](https://developers.deepgram.com/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/) in the series, I explained how to build a live streaming web application using just Vanilla JS and HTML. That post covers setting up an Amazon IVS account, which is necessary to get the third-party technology example (Amazon IVS) in today's post working. **Setting up an Amazon IVS channel is necessary to build the second composable in this tutorial, but the first one can be built without doing that**.

In the second post, I started building a full-stack application using Vue 3. I set up Vue-Router, Vuex, and a backend server which all helped me build a feature to restrict access to the streaming page of my site. Visitors to the site are required to enter a code, and that code is verified on the backend, resulting in the user being able to navigate to the streaming page. **There is no need to read that post to be able to go through this tutorial on composables.**

Today I'll build the video streaming page in Vue 3, focusing on building this feature with Vue composables. If you want a refresher on Vue composables, check out my post [Reusability with Composables](https://developers.deepgram.com/blog/2022/02/diving-into-vue-3-reusability-with-composables/).

The code for today's tutorial can be found in [this Github repo](https://github.com/deepgram-devs/livestream-amazonIVS-and-deepgram/tree/amazonIVS-composables), the branch named "amazonIVS-composables."

Now I'll get into it!

## Files Organization

This project has two main views, the landing page and the streaming page. Today I'll be working entirely in the streaming page. In my project, I have named this file `StreamChannel.vue`, and it is in the `Views` folder.

The `StreamChannel.vue` will eventually be made up of two components - one for **the video player** that relies on the Amazon IVS technology and one for the **closed-captions** that relies on the Deepgram speech-to-text technology. Today I'll only build the video player component.

I'll set up two folders to start - a `components` folder and a `composables` folder, both in the `src` folder. In the `components` folder, I'll create a `VideoPlayer.vue` component.

The `composables` folder is where I will put the composition functions that contain the logic that makes the video player work. **A common practice in Vue 3 is to name composables so that they begin with 'use'.** The name will identify what the composable does. The two composables I will be writing today are `useIVSPlayer` and `useIVSChannel`. Here is what they will do:

1.  `useIVSPlayer.js` - this composable will bring in the [Amazon IVS video player script](https://docs.aws.amazon.com/ivs/latest/userguide/player-web.html) so that the HTML video element is enhanced with the Amazon IVS Player Web SDK.

2.  `useIVSChannel.js` - this composable will check at an interval if the player in the `useIVSPlayer` script has loaded, and if it has, it will create a connection to my Amazon IVS channel, updating state to show that the channel is connected.

My [Github repo](https://github.com/deepgram-devs/livestream-amazonIVS-and-deepgram/tree/amazonIVS-composables/src) for this project shows how I have set up these folders.

## VideoPlayer Component

The `VideoPlayer.vue` component will be a video player that shows the live stream. The Amazon IVS video player script looks for an HTML `<video>` element with a specific ID and then takes control of that element to bring in its own specially made video player with Amazon IVS optimizations. So the first composable I write will be **a function that brings in the Amazon IVS player with a script**.

In the `VideoPlayer.vue` file, I will start by writing the HTML I need in the Vue template so that I have a basic video player. I've given it a height and a width that I prefer, and the `id="video-player"` so that I can use that id later to bring in the Amazon IVS player. The attributes that the html `<video>` element supports are listed [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attributes).

```html
<template>
  <div>
    <p class="status">AWS Channel {{ IVSStatus }}</p>
    <video
      width="520"
      height="440"
      id="video-player"
      controls
      playsinline
    ></video>
  </div>
</template>
```

The `IVSStatus` will be set to a `ref` property. For now, I'll make that property a string 'Is Not Connected,' but later, it will be hooked up to the status of the channel, and it will update to say 'Is Connected' when the channel is available.

Here is my setup function in the script block with that `ref`:

```js
<script>
import { ref } from "vue";

export default {
  name: "VideoPlayer",
  setup() {
    let IVSStatus = ref("Is Not Connected");

    return { IVSStatus };
  },
};
</script>
```

The last thing I need to do to be able to see this video player is add the component to the `StreamChannel.vue` page in src/views/StreamChannel.vue:

```html
<template>
  <div>
    <h1>Stream Channel</h1>
    <video-player />
  </div>
</template>

<script>
  import VideoPlayer from '@/components/VideoPlayer'
  export default {
    name: 'StreamChannel',
    components: {
      VideoPlayer,
    },
  }
</script>
```

Here is how the page will look:

![Video Player Page](https://res.cloudinary.com/deepgram/image/upload/v1647979619/blog/2022/03/how-to-write-vue-3-composables-for-a-third-party-API-integration/VideoPlayerComponent.png)

Now I am ready to write the first composable, the `useIVSPlayer.js` composition function, which will do the logic to bring in the Amazon IVS player.

## Composable to Bring in An External Script

The `useIVSPlayer.js` composable will bring a script into my `StreamChannel.vue` component. The [docs](https://docs.aws.amazon.com/ivs/latest/userguide/player-web.html) at Amazon IVS say that I need this script so that the player is brought in:

```html
<script src="https://player.live-video.net/1.8.0/amazon-ivs-player.min.js">
```

One way to bring in an external script is to add the script to the `<head>` in my `index.html` page:

```html
<head>
  <meta charset="utf-8" />
  ...
  <script
    type="text/javascript"
    src="https://player.live-video.net/1.8.0/amazon-ivs-player.min.js"
  ></script>
</head>
```

Then I can type "IVSPlayer" in the console, and I should see the module there.

<img src="https://res.cloudinary.com/deepgram/image/upload/v1647979619/blog/2022/03/how-to-write-vue-3-composables-for-a-third-party-API-integration/ConsoleIVSPlayer.png" alt="IVSPlayer in console" style="width: 50%; margin:auto;">

If I choose this way to bring in the script, the module will be available on every page of my application. However, sometimes it is preferable to make a third-party technology only available on the page where it is needed. In that case, I need to remove that script from the `<head>` and bring it in a different way.

If I only want to bring in the script on the `StreamChannel.vue` page, I need to write logic to **build out the script tag with the src of the player URL**. I will use a Vue composable, which is just a Javascript function, to build out this logic. Writing it as a composable makes it reusable, so I can easily copy it into other projects or bring it into other components in my application as needed.

This `useIVSPlayer.js` composable will:

*   be a **Promise**, since I need to account for the small amount of time it will take to load the script
*   use `createElement` to create the script tag and `setAttribute` to add the src
*   append the script to the head with `appendChild`
*   use the global event listener `onload` to trigger the promise being resolved

Here is the composable:

```js
export default new Promise((res) => {
  const script = document.createElement('script')
  script.setAttribute(
    'src',
    'https://player.live-video.net/1.6.1/amazon-ivs-player.min.js'
  )
  document.head.appendChild(script)
  script.onload = () => res()
  script.onerror = () => {
    throw 'IVS PLAYER ERROR'
  }
})
```

I start with `export default` because I need to be able to import this logic into my `VideoPlayer.vue` component.

Now in `VideoPlayer.vue` I can import the composable. I am going to use a `.then()` method because `useIVSPlayer` is a promise. The `.then()` method will wait for the promise to resolve before doing whatever I write inside the `.then()`.

For now, I will check that the player is available and `console.log` that it is ready. Later, I'll add logic inside the `.then()` to bring in my streaming channel.

Here is the `setup` function now in the `VideoPlayer.vue` component:

```js
setup() {
    let IVSStatus = ref("Is Not Connected");

    useIVSPlayer.then(() => {
      if (window.IVSPlayer) {
        console.log("player loaded");
      }
    });
    return { IVSStatus };
  },
```

For now, I will keep `IVSStatus` as "Is Not Connected" because even though I have brought in the Amazon IVS player, I still need to hook up the video player to my channel stream. I'll do that in the next section.

## Composable to Play Channel Stream

Now I want to build a composable that will load my channel stream into the IVS player that I just brought in. This composable will do the following:

*   Check that the IVS Player script is loaded and then create a new player that I can use for my stream.
*   Load my channel stream into the player by adding the playback URL.
*   Turn the player on with the `play()` method.
*   Check that the stream is connected and loaded. This will be done with `setInterval` since I don't know how long the delay might be.

First, I'll write my composable with an `export default` so I can import it into other files as needed. I'll also bring in `ref` from vue so I can track the state of the channel being loaded. I'll create a `ref` variable called `playerIsLoaded` and set it to `false` to start:

```js
import { ref } from 'vue'

export default function useIVSChannel() {
  let playerIsLoaded = ref(false)

  return { playerIsLoaded }
}
```

Everything I need to do in this composable is dependent on the IVS player (the one I brought in with the `useIVSPlayer` composable) being loaded. So I'll wrap all my logic in an `if` statement to check that it is loaded and supported.

```js
if (window.IVSPlayer && window.IVSPlayer.isPlayerSupported) {
  // all logic here
}
```

I'll use the player SDK's method `create()` to create a player for my channel. Then I'll attach the player to the HTML video element in my `VideoPlayer.vue` component with the SDK's `attachHTMLVideoElement()` method and I'll use `.load()` to load my channel's playback URL. I'll use `play()` to play the channel stream:

```js
const player = window.IVSPlayer.create()
player.attachHTMLVideoElement(document.getElementById('video-player'))
player.load('PLAYBACK_URL')
player.play()
```

(The playback URL is unique to my channel, so it has to be taken from the Amazon IVS console. See my walkthrough in [this post](https://deploy-preview-631--romantic-gates-9c0b5e.netlify.app/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/) for more information.)

Now I need to check that the channel stream is loaded. This won't happen instantaneously, but it should load relatively quickly. I don't want to use a `setTimeout `because I don't know how long it will take and I'm concerned about the idea of adding a super long timeout if I don't have to. I'll use `setInterval` to check for the stream being loaded.

`setInterval` is a DOM API method that repeatedly calls a function until some other trigger happens to turn it off. In this case, the other trigger will be the channel being loaded.

The way to turn it off is to use `clearInterval`. I'm going to assign `setInterval` to a variable called `checkInterval`. The callback of `setInterval` will run every 500 milliseconds. Inside that callback, it will check that the channel has loaded, and once it has, it will set `playerIsLoaded` to `true` and clear everything by passing `checkInterval` to `clearInterval`.

Here's the logic I just described:

```js
let checkInterval = setInterval(() => {
  if (player.core.isLoaded) {
    playerIsLoaded.value = true
    clearInterval(checkInterval)
  }
}, 500)
```

I'll return the ref `playerIsLoaded` from the composable, so I have access to it in the `VideoPlayer.vue` component. I want to watch that value so that when it changes, the `IVSStatus` value in the `VideoPlayer.vue` template updates to show that the channel is connected.

Here is the composable in its entirety:

```js
import { ref } from 'vue'

export default function useIVSChannel() {
  let playerIsLoaded = ref(false)

  if (window.IVSPlayer && window.IVSPlayer.isPlayerSupported) {
    const player = window.IVSPlayer.create()
    player.attachHTMLVideoElement(document.getElementById('video-player'))
    player.load('PLAYBACK_URL')
    player.play()

    let checkInterval = setInterval(() => {
      if (player.core.isLoaded) {
        playerIsLoaded.value = true
        clearInterval(checkInterval)
      }
    }, 500)

    return { playerIsLoaded }
  }
}
```

The last thing I need to do to get this working is go back to the `VideoPlayer.vue` component and run the composable function inside `setup` and update `IVSStatus` based on the channel being connected, which I'll do in the next section.

## Run the Composables

In `VideoPlayer.vue`, I will run the `useIVSChannel` composable inside `setup`. Actually, I'll run it inside the `.then()` that I already wrote earlier, which will cause `useIVSChannel` to run after `useIVSPlayer` has resolved. (I have to remember to import `useIVSChannel` from the `composables` folder if I want to use it.)

```js
useIVSPlayer.then(() => {
  const { playerIsLoaded } = useIVSChannel()
})
```

I deconstruct `playerIsLoaded` off of `useIVSChannel` so that I can watch that reactive reference. I'll use Vue's `watch` method to make a side effect occur when the `playerIsLoaded` value changes to true (i.e., when the channel is connected). The side effect will be that the `IVSStatus` will update to "Is Connected":

```js
watch(playerIsLoaded, () => {
  if (playerIsLoaded.value) {
    IVSStatus.value = 'Is Connected'
  }
})
```

Here is the entire script for the `VideoPlayer.vue` component:

```js
<script>
import { ref, watch } from "vue";
import useIVSPlayer from "../composables/useIVSPlayer";
import useIVSChannel from "../composables/useIVSChannel";

export default {
  name: "VideoPlayer",
  setup() {
    let IVSStatus = ref("Is Not Connected");

    useIVSPlayer.then(() => {
      const { playerIsLoaded } = useIVSChannel();
      watch(playerIsLoaded, () => {
        if (playerIsLoaded.value) {
          IVSStatus.value = "Is Connected";
        }
      });
    });
    return { IVSStatus };
  },
};
</script>
```

However, nothing will happen in my video player in the browser if I have not turned on my stream. In [the first post](https://deploy-preview-631--romantic-gates-9c0b5e.netlify.app/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/) in this series, I showed how to set up OBS to use their software on my computer to create a stream, which I connected to an Amazon IVS channel.

If I turn on my stream in OBS, I should see myself in the video player in my application now!

![Video Stream working](https://res.cloudinary.com/deepgram/image/upload/v1647979619/blog/2022/03/how-to-write-vue-3-composables-for-a-third-party-API-integration/VideoStreamWorking.png)

## Conclusion

Vue composables are useful for writing standalone logic that can be reused, but if one composable depends on another, it can be tricky. In this post, I showed how a composable can be written as a promise and how `setInterval` can be used to check if something the composable depends on has happened yet. These are two ways to write composables that may have asynchronous events occurring.

In the next post, I'll show how to write composables for using Deepgram's API to create text captions for my stream. I'll write a composable to use the browser MediaStreams API (a great example of a composable that can be reused in different contexts). I'll also show how to use `fetch` in a composable to get a token from the backend.

I hope you'll join me for the next post. Follow me on [Twitter](https://twitter.com/sandra_rodgers_) so you don't miss it!

        