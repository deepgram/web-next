---
title: "Project Upgrade: Voice Controlled To-Do List App with Deepgram and Vue 3"
description: "Using Vue 3 & Deepgram's Speech-to-Text API, update the classic to-do list project by adding voice controls!"
date: 2022-05-02
cover: https://res.cloudinary.com/deepgram/image/upload/v1651517750/blog/2022/05/build-a-voice-controlled-to-do-list-app-with-deepgram-and-vue-3/Build-Todo-list-w-Vue3-Pinia%402x.jpg
authors:
    - sandra-rodgers
category: tutorial
tags:
    - vuejs
    - pinia
seo:
    title: "Project Upgrade: Voice Controlled To-Do List App with Deepgram and Vue 3"
    description: "Using Vue 3 & Deepgram's Speech-to-Text API, update the classic to-do list project by adding voice controls!"
shorturls:
    share: https://dpgr.am/0b45872
    twitter: https://dpgr.am/0456c9d
    linkedin: https://dpgr.am/e8b79dc
    reddit: https://dpgr.am/8689f6d
    facebook: https://dpgr.am/a85e2b8
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454078/blog/build-a-voice-controlled-to-do-list-app-with-deepgram-and-vue-3/ograph.png
---

Recently I wrote about a project I did to help me learn Pinia, Vue 3's new official state management system. I built a basic to-do list app:

![Example to-do list app](https://res.cloudinary.com/deepgram/image/upload/v1651517752/blog/2022/05/build-a-voice-controlled-to-do-list-app-with-deepgram-and-vue-3/todo-list-example1.jpg)

It dawned on me that a fun way to jazz up this project would be to use Deepgram to make the app **voice-powered** so that a user can **speak** commands to add, delete, or check-off items on the list.

I'm inspired by my colleague Bekah's series about [updating portfolio projects](https://developers.deepgram.com/blog/2022/03/freecodecamp-quote-generator-upgrade/). A voice-based to-do list app would be a lot more interesting than a regular to-do list app!

## Project Overview

<Panel type="info" title="Build a To-Do List App With Vue 3, Pinia, and Deepgram (SERIES)">
<ol>
<li><a href="https://developers.deepgram.com/blog/2022/04/build-a-todo-list-with-pinia-and-vue-3/" target="_blank">Build a To-do List App with Pinia and Vue 3</a></li>
<li><a href="https://developers.deepgram.com/blog/2022/05/build-a-voice-controlled-to-do-list-app-with-deepgram-and-vue-3/" target="_blank"> Build a Voice Controlled To-Do List App with Deepgram and Vue 3</a></li>
</ol>
</Panel>

The project I originally did can be found in this [repo](https://github.com/deepgram-devs/todo-pinia), and the accompanying blog post is [here](https://developers.deepgram.com/blog/2022/04/build-a-todo-list-with-pinia-and-vue-3/). Check it out to build the standard to-do list project with Vue 3 and Pinia.

In this iteration of the project, I'll continue to use [Pinia](https://pinia.vuejs.org/) to manage global state, but I'll add Deepgram so I can use Deepgram's speech-to-text API to help me power the voice-control feature. If you want to build this voice-control feature along with me, I've created a starting branch [here](https://github.com/deepgram-devs/todo-pinia-deepgram/tree/starter-branch).

### Deepgram Live Streaming Logic

There are several articles on Deepgram Docs about how to use Deepgram in Javascript to convert an audio stream of speech into text, including one I wrote about how to use it with Vue 3. I won't go over in detail here how I built Vue composables to integrate Deepgram's speech-to-text API. Use these resources or take a look at my repo (in the [composables folder](https://github.com/deepgram-devs/todo-pinia-deepgram/tree/main/src/composables)) to learn how I did this using Vue 3 and the Deepgram Node SDK:

<Panel type="info" title="Additional Resources">
<ul>
<li><a href="https://developers.deepgram.com/blog/2022/03/asynchronous-logic-to-write-a-vue-3-and-deepgram-captions-component/) by [Sandra Rodgers](https://developers.deepgram.com/blog/authors/sandrarodgers/">Asynchronous Logic to Write a Vue 3 and Deepgram Captions Component</a></li>
<li><a href="https://developers.deepgram.com/blog/2021/11/live-transcription-mic-browser/">Get Live Speech Transcriptions In Your Browser</a> by <a href="https://developers.deepgram.com/blog/authors/kevinlewis/">Kevin Lewis</a></li>
<li><a href="https://developers.deepgram.com/blog/2022/01/protecting-api-key/">Browser Live Transcription - Protecting Your API Key</a> by <a href="https://developers.deepgram.com/blog/authors/kevinlewis/">Kevin Lewis</a></li>
</ul>

</Panel>

### Focus: Voice-Control Feature

For today's project, I will focus on dealing with the transcript of text that I get back from Deepgram, analyzing it for speech commands to add, delete, and check off items in the to-do list. This logic will all be part of a voice-control feature.

## Create the Component and Connect Deepgram

The voice-control feature that I build today will be one component with two main elements:

1.  a `button` that, when clicked, **turns on or off voice-control mode** (i.e., toggles the connection to Deepgram)
2.  a `div` that contains text which identifies the status of whether Deepgram is **connected and listening**, if it **misheard what was said**, or if it is **not connected**.

Here's a minimally styled version of this project that highlights the component I'll be building today:

![To-do list app highlighting component](https://res.cloudinary.com/deepgram/image/upload/v1651517754/blog/2022/05/build-a-voice-controlled-to-do-list-app-with-deepgram-and-vue-3/TodoSpeech.png)

In the components folder with the other Todo components, I'll create a component called `TodoSpeech.vue`. It will be a child component of `TodoApp.vue`.

In `TodoSpeech.vue`, I'll start by adding the button element and status div to the template. I'll use a speech bubble emoji on the button, and I'll create an event listener that I plan to program to toggle the Deepgram connection when the button is clicked.

```html
<!-- in template: -->
<button @click="toggleListen()">💬</button>
<div>{{ deepgramStatus }}</div>
```

I'll also create a `deepgramStatus` ref, which I'll program to update when Deepgram is connected and ready to receive audio data. The initial value will report that Deepgram is not connected:

```js
// in script:
let deepgramStatus = ref('Deepgram Not Connected')
```

I'll connect to Deepgram using the composable `useDeepgramSocket` (already built in a previous post), which I import in the script. I also run the composable in the setup function so that it runs at the beginning of the component lifecycle. I destructure four properties off of the composable: `DG_socket`, `DG_transcript`, `openStream`, `closeStream`.

```js
<script>
import { ref } from "vue";
import useDeepgramSocket from "@/composables/useDeepgramSocket";

export default {
  setup() {
    const { DG_socket, DG_transcript, openStream, closeStream } = useDeepgramSocket();
    let deepgramStatus = ref("Deepgram Not Connected");

    return { deepgramStatus };
  },
};
</script>
```

The `openStream` and `closeStream` methods that I destructured off of the `useDeepgramSocket` composable will toggle on and off when the button is clicked and `toggleListen` runs. Notice that I created the `isListening` ref to update the toggle status:

```js
let isListening = ref(false)

function toggleListen() {
  if (!isListening.value) {
    openStream()
    isListening.value = true
  } else {
    closeStream()
    isListening.value = false
  }
}
```

I'll use a watcher to watch the Deepgram socket's status in the composable. That way, the `div` in the template will update when I click the button and Deepgram is connecting, connected, or not connected:

```js
watch(DG_socket, () => {
  if (DG_socket.value === 'Connecting') {
    deepgramStatus.value = 'Connecting'
  } else if (DG_socket.value === 'Not Connected') {
    deepgramStatus.value = 'Voice Controls Off'
  } else if (DG_socket.value === 'Closing connection...') {
    deepgramStatus.value = 'Closing connection...'
  } else {
    deepgramStatus.value = 'Listening'
  }
})
```

Here is the entire component now. I should be able to click the button and see the status change to show the status of the Deepgram connection:

```js
<template>
  <div>
    <button @click="toggleListen()">💬</button>
    <div>{{ deepgramStatus }}</div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import useDeepgramSocket from "@/composables/useDeepgramSocket";

export default {
  setup() {
    const { DG_socket, DG_transcript, openStream, closeStream } =
      useDeepgramSocket();

    let deepgramStatus = ref("Deepgram Not Connected");
    let isListening = ref(false);

    function toggleListen() {
      if (!isListening.value) {
        openStream();
        isListening.value = true;
      } else {
        closeStream();
        isListening.value = false;
      }
    }

    watch(DG_socket, () => {
      if (DG_socket.value === "Connecting") {
        deepgramStatus.value = "Connecting";
      } else if (DG_socket.value === "Not Connected") {
        deepgramStatus.value = "Voice Controls Off";
      } else if (DG_socket.value === "Closing connection...") {
        deepgramStatus.value = "Closing connection...";
      } else {
        deepgramStatus.value = "Listening";
      }
    });

    return { deepgramStatus, toggleListen };
  },
};
</script>
```

## Analyze Deepgram Response for Voice Commands

The logic to add, delete, or check-off an item from the list will be based on what the speaker says. I need to program this application to listen for commands such as "add!" or "delete!".

To do that, I will need to understand the form of the text transcript I'll be getting back from Deepgram.

### Deepgram Audio Stream to Text

When I started using Deepgram to transcribe audio streams, I was surprised that Deepgram was able to send back the text almost immediately, after each phrase or sentence rather than waiting until the socket closes and sending back the entire transcription.

How is it able to send a response back continuously, as the audio is streaming, and how is it able to send meaningful chunks, such as at the end of a sentence or a pause in speech? This is thanks to two of its features: **Endpointing** and **Interim Results**.

To put it very simply, **Endpointing** is how Deepgram uses pauses in speech to process that speech into meaningful text chunks. It can hear longer silences in speech and use them to identify finished thoughts, i.e., phrases or sentences.

**Interim results** is Deepgram analyzing speech as accurately and as quickly as possible with the little bits of info it gets on the fly; then, after it gets more data to work with, it corrects the transcription. That is why as one or two words come back, one might be wrong, but then when the sentence comes back, the whole thing is more accurate.

In my case, I'm using the **Interim Results** property `is_final` to identify a complete voice command. When `is_final` is `true`, it means I'm dealing with a full statement or a complete command such as "Add walk the dog to the list!" The `is_final` property breaks the transcript up at the end of a fully-processed statement:

```js
// in useDeepgramSocket.js:
const transcript = received.channel.alternatives[0].transcript
if (transcript && received.is_final) {
  DG_transcript.value = transcript + ''
}
```

This is a pretty cool feature because it means that a user can speak a command, such as "Add walk the dog to the list", and Deepgram can identify that it is the end of the command based on the flow of the speech. It will send me that sentence back to deal with in text form, and then I can use logic to dig in and find the specific command word, such as *add* or *delete*. Nice!

<Panel type="info" title="Additional Resources">
<ul>
<li><a href="https://developers.deepgram.com/documentation/guides/understand-endpointing-interim-results/">Understanding Endpointing and Interim Results When Transcribing Live Streaming Audio</a></li>
<li><a href="https://developers.deepgram.com/documentation/features/interim-results/">Interim Results</a></li>
<li><a href="https://developers.deepgram.com/documentation/features/endpointing/"> Endpointing</a></li>
</ul>
</Panel>

## Add To-Do Item With Voice-Control

Now I'll write logic to analyze a voice command for the words "add to do", and if the command has those words (such as in the command "ADD TO DO walk the dog!"), the item will be added to the `todoList` array in the Pinia store.

I also want to keep track of the number of commands given, so if Deepgram doesn't transcribe the command correctly due to problems interpreting the speech, I can check that count value against the number of items in the store `todoList` array, and report back to the user that the command was misunderstood and didn't make it in.

Here is pseudo-code for what I need to write:

```js
function addTodo(command) {
  // Create array of Regular Expression words to identify in the text string, such as [/^add to do/, /^ad to do/]
  // Loop through regex values using .find()
  // Turn the command into a standardized string - lower case, no final punctuation, trim whitespace
  // Check if the command string contains the regex value using .test
  // If so, remove the command phrase ADD TO DO to create new string that is just the todo item
  // add todo to the Pinia store todo-list
  // reset the count of uttered commands to match the length of the todo list array in the store
}
watch(utterance, () => {
  // watch for a command and if there is one, add it to the list
})
```

PHEW! That is a lot of logic to get through. Best to take it one step at a time.

### Create a Set of Regular Expressions

I want to analyze the command string such as "Add to do walk the dog" for the three words "add to do". I will:

*   Create a regular expression by enclosing it within slashes `/-/`
*   Use the character `^` before the command phrase to identify that the phrase should be at the beginning of the string

So the regular expression for "add to do" that I will use is `/^add to do/`.

However, since there is the possibility that Deepgram could transcribe this with 'ad' instead of 'add' (seems unlikely, but I want to be prepared), I'll also use `/^ad to do/`. In fact, I'll match to anything that could be a homophone.

I need an array to create a set of all the options. (The reason I don't include something like `/^add two do/` is because it's not grammatically correct, and Deepgram is smart enough to know not to transcribe things as ungrammatical.)

```js
const addRegEx = [/^add to do/, /^ad to do/, /^add to dew/]
```

### Use the Array Method .find()

I'll use the array method `.find` to loop through the array of regular expressions. It will search for the first item in the array that matches. If it finds one, there's no need to continue looping through since all we need is one match:

```js
function addTodo(command) {
  const addRegEx = [/^add to do/, /^ad to do/, /^add to dew/]
  // loop through array to find first match:
  addRegEx.find((reg) => {})
}
```

### Write a Method to Standardize the Command String

I want the command to be lowercase, to not include periods, commas, question marks, or quotation marks, and to not have extra whitespace at the end. (I could entirely turn off punctuation in Deepgram, but I like the transcript to include apostrophes in words such as "she's.")

I'll create a function to take the command string and standardize it:

```js
function standardizeUtterance(command) {
  const punctuation = /[.,?"]+/g
  const change = command.toLowerCase().replace(punctuation, '').trim()
  return change
}
```

Notice that I used another regular expression, `/[.,?"]+/g`. This paired with the `replace` method will search for any of those punctuation marks throughout the entire string and replace them with`""` (which is nothing).

Then I use this `standardizeUtterance` function inside the `addTodo` function. I'll add it before the loop so that it doesn't run for every loop:

```js
function addTodo(command) {
  const addRegEx = [/^add to do/, /^ad to do/, /^add to dew/]
  // clean up utterance
  const item = standardizeUtterance(command)
  addRegEx.find((reg) => {
    // use item for more logic
  })
}
```

### Test that the Item Matches the Regular Expression

I'll write an `if` statement to say that if the string starts with the regular expression command such as `/^add to do/`, then do something else (the something else will involve adding it to the to-do list).

I use the method `.test`, which is a javascript method used to match a regular expression with a string, returning `true` or `false` depending on if there is a match or not.

```js
// inside addTodo method:
addRegEx.find((reg) => {
  if (reg.test(item)) {
  }
})
```

### Remove the Command Phrase from the String

If there is a match, I will want to add the string to the to-do list. But right now the whole string also contains the command phrase "add to do" as in the sentence "Add to do walk the dog." I do not want "add to do" to be part of the string that goes into the to-do list array in the store.

I'll write a function that takes the string and removes the phrase. I'll need to give it both the full command, and the regular expression (which is the command phrase). The method `replace` will search for the phrase and replace it with `""`, i.e., nothing.

```js
function removeCommandPhrase(command, reg) {
  const change = command.replace(reg, '').trim('')
  return change
}
```

Then I add it to `addTodo`:

```js
// inside addTodo method:

addRegEx.find((reg) => {
  if (reg.test(item)) {
    // remove command phrase ADD TO DO
    const todo = removeCommandPhrase(item, reg);
    }
  });
}
```

### Add the To-Do Item to the To-Do List Array

I'm almost done! This is the most important step. I can add the to-do item to the list in the store.

I have to go back up to the start of the `script` and import the store. I also need to run the store function and set it to a variable that I can use (I'll set it to `store`)

```js
<script>
import { ref, watch } from "vue";
import useDeepgramSocket from "@/composables/useDeepgramSocket";
// import store:
import { useTodoListStore } from "../store/useTodoListStore";

export default {
  setup() {
    const { DG_socket, DG_transcript, openStream, closeStream } =
      useDeepgramSocket();
     // run function and set to variable:
    const store = useTodoListStore();
    ...
    function addTodo(command) {
    ...
    });
}
```

Then inside `addTodo` I will use the `store.addTodo` function that is already in the store as an action (I created it in the first post in this series.)

```js
// inside addTodo method:

addRegEx.find((reg) => {
  if (reg.test(item)) {
    // remove command phrase ADD TO DO
    const todo = removeCommandPhrase(item, reg)

    // add to store
    store.addTodo(todo)
  }
})
```

Now the logic is there to add the item to the to-do list. I just need to do one more thing to make it show up on the screen.

### Watch For a Command, Add it To The List

Right now, the `addTodo` function with all the logic to add an item to the list never runs. I need to make it run somehow.

Originally, I set up Deepgram to turn on when the button is clicked. When the logic runs to create the WebSocket connection to Deepgram, I also get a value from it that I defined as `DG_transcript`. This value holds the transcript string that comes back after a user says something such as "Add to do walk the dog".

I want to trigger `addTodo` to run **every time a new command is said**. And I know I'll be using that transcript for logic to keep track of how many times a command has been said (I'll go over that in the next section). So I'm going to create a ref in this `TodoSpeech.vue` component called `utterance`, which will stay in sync with the `DG_transcript` from the `useDeepgramSocket.js` composable.

```js
// inside setup() function in TodoSpeech.vue
const { DG_socket, DG_transcript, openStream, closeStream } =
  useDeepgramSocket()
// create ref
let utterance = ref(DG_transcript)
```

Now the `utterance` ref is in sync with the transcript that comes from Deepgram. I can watch that `utterance` ref for changes, and if there is a change, the `addTodo` function will run.

```js
watch(utterance, () => {
  if (utterance.value !== '') {
    addTodo(utterance.value)
  }
})
```

Now when I use the voice-control feature to add an item to the list, I see it show up on the screen. Woo-hoo!

## Dealing with Misunderstood Commands

Automatic Speech Recognition technology has gotten really good, but there can still be mistakes. People might mumble or slur some of the words, or the garbage truck could be making a lot of noise in the background. Deepgram's ASR technology can handle a lot, but I have to expect that sometimes it will mishear something.

What if I say "Add to do walk the dog", but Deepgram mishears it as "And to do walk the dog"? I want to be ready for that and for any other situation. What if the user forgets to add the command and just says "Walk the dog!"

I'm going to program my app to show a message to the user when this happens. It will display "I didn't catch that" when it doesn't hear a match to the command phrase.

The logic for this will depend on **counting how many times a command has been spoken**. If the speaker says one thing, and it gets added to the list, then the count should be one. But if the speaker says another thing after that, and it doesn't get added to the list, then the count is at two, but the list is at one. So there was a misunderstanding.

Here is the logic that will run:

```js
watch(utterance, () => {
  if (utterance.value !== '') {
    count.value++
    addTodo(utterance.value)
    alertMisunderstood()
  }
})
```

If a command is given, the count is increased by one. Then the`addTodo` function runs.

Inside `addTodo`, I check for a match. If there is a match, it means that an item is added to the list. After it is added to the list, I will reset the count to match the number of items in the list:

```js
function addTodo(command) {
  const addRegEx = [/^add to do/, /^ad to do/, /^add to dew/]
  // clean up utterance
  const item = standardizeUtterance(command)
  addRegEx.find((reg) => {
    if (reg.test(item)) {
      // remove command phrase ADD TO DO
      const todo = removeCommandPhrase(item, reg)
      // add to store
      store.addTodo(todo)
      // reset count
      count.value = store.todoList.length
    }
  })
}
```

However, in the `if` statement above, I test for a match. If it does NOT find a match, none of that logic inside of it runs. So that would result in the count having increased, but the number of items in the to-do list not having increased.

In that case, I need to write logic to notice that discrepancy and alert the user:

```js
function alertMisunderstood() {
  // if count doesn't equal todo list length, the command was misunderstood
  if (count.value !== store.todoList.length) {
    deepgramStatus.value = "I didn't catch that"
  }
}
```

I don't want the phrase "I didn't catch that" to remain on the screen forever. I'll have it disappear after a second and return to "Listening":

```js
function alertMisunderstood() {
  // if count doesn't equal todo list length, the command was misunderstood
  if (count.value !== store.todoList.length) {
    deepgramStatus.value = "I didn't catch that"
    setTimeout(() => {
      deepgramStatus.value = 'Listening'
    }, 1000)
  }
}
```

Now, everything in the watcher is set up to make sure that when a user gives a command, it is either added to the to-do list, or reported back with a message to the user that the command was misunderstood.

```js
watch(utterance, () => {
  if (utterance.value !== '') {
    count.value++
    addTodo(utterance.value)
    alertMisunderstood()
  }
})
```

## Delete To-Do Item With Voice-Control

The hard part of this is done. I walked through the step-by-step logic to analyze voice-control command strings. Now that I want to delete an item, I can use the same logic.

I'll write out the pseudo-code and supply my logic. I won't go through it step-by-step again since the only thing that will be different is writing the step **to remove an item from the store to-do list** instead of add an item.

Anyone following along with this post and building the voice-control feature could now take some time to write a `deleteTodo` function. I recommend copying the pseudo-code below (the commented-out steps) and then writing each step of the logic.

### Pseudo-Code:

```js
function deleteTodo(command) {
  // Create an array of Regular Expression words to identify in the text, such as [/^delete/];
  // Loop through regex values using .find
  // Turn the command into a standardized string - lower case, no final punctuation, trim whitespace
  // Check if the command string contains the regex value using .test()
  // If so, remove the command phrase DELETE to create new string that is just the todo item
  // Loop through store to-do list and for each item, check if that item matches the new string that is just the todo item
  // if item in store todo list matches, delete from store to-do list
  // reset the count of uttered commands to match the length of the todo list array in the store
}

watch(utterance, () => {
  // watch for a command to run delete logic
})
```

Here is the code I wrote for this voice-controlled delete logic:

```js
function deleteTodo(command) {
  const deleteRegEx = [/^delete/]
  // clean up utterance
  const item = standardizeUtterance(command)
  deleteRegEx.find((reg) => {
    if (reg.test(item)) {
      // remove command phrase DELETE
      const todo = removeCommandPhrase(item, reg)
      store.todoList.forEach((storeTodo) => {
        // if item in store todo list matches this utterance,
        if (storeTodo.item === todo) {
          // delete from store
          store.deleteTodo(storeTodo.id)
          // reset count
          count.value = store.todoList.length
        }
      })
    }
  })
}
```

And in the watcher:

```js
watch(utterance, () => {
  if (utterance.value !== '') {
    count.value++
    addTodo(utterance.value)
    deleteTodo(utterance.value)
    alertMisunderstood()
  }
})
```

## Check-Off To-Do Item With Voice-Control

The logic to check off an item on the list is exactly the same as the logic to delete an item, except instead of calling `store.deleteTodo(storeTodo.id)`, I will call `store.toggleCompleted(storeTodo.id)`.

Here is the logic to check-off an item with voice-control:

```js
function checkOffTodo(command) {
  const checkOffRegEx = [/^check off/]
  const item = standardizeUtterance(command)
  checkOffRegEx.find((reg) => {
    if (reg.test(item)) {
      const todo = removeCommandPhrase(item, reg)
      store.todoList.forEach((storeTodo) => {
        if (storeTodo.item === todo) {
          // toggle completed in store:
          store.toggleCompleted(storeTodo.id)
          count.value = store.todoList.length
        }
      })
    }
  })
}
```

And the watcher:

```js
watch(utterance, () => {
  if (utterance.value !== '') {
    count.value++
    addTodo(utterance.value)
    deleteTodo(utterance.value)
    checkOffTodo(utterance.value)
    alertMisunderstood()
  }
})
```

## Conclusion

That concludes this post on how to add voice-control to a Vue 3 to-do list app. It was well worth the trouble to turn a classic to-do list project into a more exciting voice-based app that uses Deepgram's speech-to-text API.

Feel free to reach out with questions on [Twitter](https://twitter.com/sandra_rodgers_). Happy coding!

        