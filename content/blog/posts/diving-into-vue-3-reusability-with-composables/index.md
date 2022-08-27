---
title: "Diving Into Vue 3 - Reusability with Composables"
description: "Put everything together that we've learned in the series, and then refactor it all to use composables."
date: 2022-02-25
cover: https://res.cloudinary.com/deepgram/image/upload/v1645127714/blog/2022/02/diving-into-vue-3-reusability-with-composables/dive-into-vue-3%402x.jpg
authors:
    - sandra-rodgers
category: tutorial
tags:
    - vuejs
    - javascript
seo:
    title: "Diving Into Vue 3 - Reusability with Composables"
    description: "Put everything together that we've learned in the series, and then refactor it all to use composables."
shorturls:
    share: https://dpgr.am/d629f17
    twitter: https://dpgr.am/89aab6c
    linkedin: https://dpgr.am/4f3ec42
    reddit: https://dpgr.am/aa1b88d
    facebook: https://dpgr.am/cc7baa5
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453993/blog/diving-into-vue-3-reusability-with-composables/ograph.png
---

## Introduction

This is the fifth and final post of my 'Diving Into Vue 3' series. Today I will combine what I have learned so far with a demonstration of how to use the Composition API to take advantage of its biggest strength: writing reusable code. This post will:

*   review everything I've learned so far by walking through how I build an **example component**, focusing on challenges of working with the DOM and using lifecycle methods.
*   introduce how to use a **template ref** to keep track of an element in the DOM.
*   demonstrate how to refactor the project to use **composition functions** (i.e. **composables**).

Don't forget there are four previous posts in this series that might be useful to you:

*   [Diving Into Vue 3 - Getting Started](https://developers.deepgram.com/blog/2022/01/diving-into-vue-3-getting-started/)
*   [Diving Into Vue 3 - The Setup Function](https://developers.deepgram.com/blog/2022/02/diving-into-vue-3-setup-function/)
*   [Diving Into Vue 3: Methods, Watch, and Computed](https://developers.deepgram.com/blog/2022/02/diving-into-vue-3-methods-watch-and-computed/)
*   [Diving Into Vue 3: The Reactivity API](https://developers.deepgram.com/blog/2022/02/diving-into-vue-3-reactivity-api/)

If you don't need the walk-through for building the example project, feel free to jump to the section on [reusability](#reusability-in-the-composition-api), where I show how to refactor the project to use composables.

## Example Component

I am going to build a single-file component that has a mast with an image on the left and text on the right. The problem I need to address is that I want to change the size of the text based on the image being resized.

Here's the demo:

![Rendered component to that uses method to increment and decrement](https://res.cloudinary.com/deepgram/image/upload/v1645128984/blog/2022/02/diving-into-vue-3-reusability-with-composables/demo.gif)

To achieve this, I will:

*   listen for resizing of the window with an event listener.
*   track the image size.
*   update the text size if the image gets to a certain size.

The repo to go along with this example can be found [here](https://github.com/deepgram-devs/vue-reusability-with-composables/tree/main/src). There are several branches to show the progression of how the project gets refactored.

### Vue 2

I won't go over how I built the project in Vue 2, but if it helps, the completed project in Vue 2 can be viewed [here](https://stackblitz.com/edit/vue2-vue-cli-vnp6kn?file=src/components/Mast.vue).

Resizing the window will show how the text size changes as the width of the image changes.

### Vue 3

Here's how to build the component in Vue 3. The html in the `template` is exactly the same as the Vue 2 project:

```html
<template>
  <div class="mast">
    <div class="container">
      <div class="image-container">
        <img ref="imageRef" src="../assets/meatball.jpeg" />
      </div>
      <div ref="textRef" class="text-container">
        <p>
          Meatball, 9. Barks at Amazon guy. Likes sharing your apple slices.
          Wants you to grab the toy but won't let you have it.
        </p>
      </div>
    </div>
  </div>
</template>
```

In the script section, I'll need to add the `setup` function, and then I will define the variables for the data I'll be tracking. Since elements in the DOM will depend on each other to either trigger a change or react to a change, I will need to make them reactive using `ref` so everything stays in sync. Here's how I do that:

```js
<script>
import { ref } from "vue";
export default {
  name: "Mast",
  setup() {
    let imageWidth = ref(0);

    //template refs
    let imageRef = ref(null);
    let textRef = ref(null);

    return { imageRef, textRef };
  },
};
</script>
```

The important data to keep track of is the `imageWidth` because that value is what I will use to determine if the text size should change.

The `imageWidth` value has to come from the image element in the DOM. It will be based on the actual size of the image at a point in time, so I will need to connect to the actual DOM element using a [template ref](https://vuejs.org/guide/essentials/template-refs.html).

#### Template Refs

I think of template refs as the Vue way of using Javascript to hook into a DOM element, such as the method `document.getElementById()` or `document.querySelector()`.

In Vue 2, the way to do that is to add `ref="nameOfRef"` as an attribute on the element that I am targeting, then in the script, I could perform some action on it using `this.$refs.nameOfRef`.

In Vue 3, template refs are now part of the reactive API. If I want to set up a template ref, I still need to add `ref="nameOfRef"` as an attribute on the element that I want to hook into.

```html
<img ref="imageRef" src="../assets/meatball.jpeg" />
```

The difference now is that in the script, I need to define the template ref as a reactive reference variable wrapped in `ref`. And I MUST return it in the `return` object of the `setup` function so that it connects to that DOM element in the template. If I don't, it won't work.

```js
setup() {
    //template refs
    let imageRef = ref(null);
    let textRef = ref(null);

    return { imageRef, textRef };
  },
```

Also, I need to be aware that I won't be able to actually access the ref to do something with it until the component has mounted - which brings me to the next topic.

#### Lifecycle Hooks

Now that I have the data set up I can add the logic to listen for the resize event.

I want to track the size of the image, which will change depending on if the window is resized. Since I'm dealing with a visual element, I need to consider timing of when that element will appear in the browser. It won't appear until the component has mounted.

The hooks that I'll need for setting up the event listener (and destroying it) are `onMounted` and `onUnmounted`, which are the equivalent to `mounted` and `unmounted` in Vue 2.

In `onMounted`, I have access to the template ref, so I will first set the initial value of the `imageWidth` based on the width of the actual image, which I pull from the template ref. I will also put a listener on the window to track the resizing event so that as the window is resized, the `resizeHandler` function runs.

Everything currently resides in the setup function for now, but will be refactored later and moved into composables:

```js
// inside setup function:

onMounted(() => {
  //set initial value
  imageWidth.value = imageRef.value.offsetWidth

  //add listener to track resize
  window.addEventListener('resize', resizeHandler)
})
```

The `resizeHandler` sets the `imageWidth` value to the `imageRef`'s width. I have to remember that with refs in the script, I have to unwrap the value using `.value`:

```js
// inside setup function:

function resizeHandler() {
  //tracking of width changes
  imageWidth.value = imageRef.value.offsetWidth
}
```

Since I'm listening for the resize event starting when the component mounts, I need to be sure to destroy the listener when the component unmounts:

```js
// inside setup function:

onUnmounted(() => {
  //remove listener
  window.removeEventListener('resize', resizeHandler)
})
```

#### watch

I now have the data set up so that the `imageWidth` updates in-sync with the `imageRef`'s width as the event listener fires the `resizeHandler` function.

The last thing I need to do is make something happen as a side effect of the `imageWidth` increasing or decreasing. Vue offers `watch` and `watchEffect` as part of the API for watching a reactive property and causing a side effect to occur based on changes to the property.

In this case, I will use `watch` because I only need to track the `imageWidth` value since a change to `imageWidth` is what I'm using to cause the text size to change.

```js
// inside setup function:

watch(imageWidth, () => {
  //initiate side effects to change text size when window width changes
  if (imageWidth.value < 150) {
    textRef.value.style.fontSize = '.8em'
    textRef.value.style.lineHeight = '1.3'
  }
  if (imageWidth.value < 200 && imageWidth.value > 150) {
    textRef.value.style.fontSize = '1em'
    textRef.value.style.lineHeight = '1.4'
  }
  if (imageWidth.value > 200) {
    textRef.value.style.fontSize = '1.3em'
    textRef.value.style.lineHeight = '1.5'
  }
})
```

Here is the finished [example code](https://github.com/SandraRodgers/vue-reusability-with-composables/tree/no-composables/src) using Vue 3 (and before I refactor it to use composables). Now that everything is working, I will refactor my code to make it more reusable.

## Reusability in The Composition API

Many people would say that the biggest advantage of using Vue 3's Composition API is its emphasis on organizing code by logical concern rather than by option types like in Vue 2. If I'm building a small application that is only going to have minimal logic in a component, the Options API, or even just putting all my logic in the setup function, is fine. But as a component grows larger, it can be challenging to follow the data flow.

For example, a UI component such as a dropdown menu has to deal with opening and closing the dropdown, keyboard interactions, pulling in data to populate the menu, and more. All that logic in one component spread out among the options like `methods`, `watch`, `mounted`, etc., can be hard to decipher.

Vue 2 does offer approaches for separating out logic, such as **mixins** and **utility functions**. But Vue 3's whole philosophy is designed around the idea of writing code that is reusable, focused around logical concern, and easy to read. The most fundamental way it does this is through **composition functions** (i.e. **composables**).

## Composables

The advantage of organizing code by logical concern encapsulated in a composable function is that it becomes easier to read, but it also becomes easier to reuse in other parts of the project or even in other projects.

I feel that the ultimate goal should be to write the most agnostic code possible in a composable, i.e. code that can be recycled in different contexts and isn't so dependent on the one unique context it starts out in.

It does take time and practice to get better at this skill, but the good news is, Vue 3 is the perfect framework to work at it because using the Composition API really emphasizes this approach to coding.

With that in mind, I'll think about how I can refactor my project to take advantage of composables.

### useWindowEvent

A common situation is having to listen for an event on the window, such as a resize event. I see an opportunity to write a composable that can be reused when I want to add or destroy an event listener on the window.

In my project, in the `onMounted` hook I currently have:

```js
window.addEventListener('resize', resizeHandler)
```

And in the `unMounted` hook:

```js
window.removeEventListener('resize', resizeHandler)
```

I can create a composable function that accepts an event-type, a handler, and a string saying 'add' or 'destroy', and write logic that will set up the window event listener. I will put this file in a folder called `~/composables`. The Vue 3 convention is to name composable files with the prefix 'use' as in *useWindowEvent*.

Here is the composable `useWindowEvent.js`:

```js
export default function useWindowEvent(event, handler, addOrDestroy) {
  if (addOrDestroy === 'add') {
    window.addEventListener(event, handler)
  }

  if (addOrDestroy === 'destroy') {
    window.removeEventListener(event, handler)
  }
}
```

Now in my project, I import it into the component where it will be used:

```js
import useWindowEvent from '../composables/useWindowEvent'
```

Then I invoke the function with the arguments that I set it up to receive:

```js
useWindowEvent('resize', resizeHandler, 'add')
```

This is just a small composable, and it doesn't really make my life that much easier since I didn't have to write very much code anyways to set up the listener on the window.

But there is a significant advantage to creating reusable code. I know the composable is written to work, so I'm less likely to have little errors or typos since I'm reusing code that has been tested and used before. Because I've tested it, I can feel confident reusing it in many contexts.

Consistency is another benefit. I keep functionality consistent by using the composable in multiple places, rather than having to reinvent the wheel every time, potentially introducing differences (and problems).

And now that I have created a `useWindowEvent`, I could try to make it to work for all kinds of elements, not just the window. If I spend some time improving it so that it can add an event listener to any type of element, then I have a really useful composable that I can reuse.

### useResizeText

The main feature of my project is that the text resizes based on the image element's width. I can turn this into a composable that can be reused in cases where I want text to resize based on some other element.

In my goal to write it in a way that is more agnostic, I can think of the element that is watched (the image) as the *trigger element*, and the element that changes (the text) as the *react element*. In the `resizeText` composable, I'll refer to them as the `triggerElement` and the `reactElement`, but in the `Mast.vue` component they are the `imageRef` and the `textRef`. These are more specific references to the context of my project, while `triggerElement` and `reactElement` are more general since I would like the composable to be reused if I ever need it in a different project.

I create the composable file called `useResizeText.js`. I anticipate that I'll need to accept two arguments, the `triggerElement` and the `reactElement` (which come in from `Mast.vue` as the `imageRef` and the `textRef`):

```js
//useResizeText.js:

export default function useResizeText(triggerElement, reactElement) {
  return { elementWidth }
}
```

I've included the return object because any data from the composable that I want to make available in the component (or another file) must be included in it. I'll return the `elementWidth` to the component so I can put it in my template in `Mast.vue` and see the resize logic working in real-time.

In the `Mast.vue` component, I will call the composable. I have to send in the template refs so the composable can compute the text size based on those DOM elements. I will destructure the composable so that I get the returned `elementWidth`.

Inside `setup` in `Mast.vue`:

```js
//destructure to get data sent back from the composable
//get updated width for template
const { elementWidth } = useResizeText(imageRef, textRef)
```

I will return `elementWidth` to the template so that I see that number reacting to the window resizing. I also return `imageRef` and `textRef` because that is required for the template refs to stay in-sync between the script and the template.

Here is everything in the `setup` function:

```js
setup() {
    //template refs
    let imageRef = ref(null);
    let textRef = ref(null);
    //destructure to get data sent back from the composable
    //get updated width for template
    const { elementWidth } = useResizeText(imageRef, textRef);
    return { imageRef, textRef, elementWidth };
  },

```

The composable itself is mostly the same as it was when I wrote the logic in the setup function, with a few small updates.

To make sure I don't get an error when I set the `elementWidth` to the imageRef/triggerElement `offsetHeight` value, I use an 'if' statement to make sure the `triggerElement` exists:

```js
if (triggerElement.value) {
  elementWidth.value = triggerElement.value.offsetWidth
}
```

I also set the initial text styles as soon as the component mounts and then run that `setTextStyles` function again inside the watch every time the `elementWidth` (the image's width) changes.

Here is the full code for the `resizeText.js` composable:

```js
import { ref, watch, onMounted, onUnmounted } from 'vue'
import useWindowEvent from './useWindowEvent'

export default function useResize(triggerElement, reactElement) {
  let elementWidth = ref(0)

  //handler to send into useWindowEvent
  function resizeHandler() {
    if (triggerElement.value) {
      elementWidth.value = triggerElement.value.offsetWidth
    }
  }

  //set initial values for elementWidth and text styles
  onMounted(() => {
    if (triggerElement.value) {
      elementWidth.value = triggerElement.value.offsetWidth
      setTextStyles()
    }
  })

  //function to set text styles on mount and in watcher
  function setTextStyles() {
    if (elementWidth.value < 150) {
      reactElement.value.style.fontSize = '.8em'
      reactElement.value.style.lineHeight = '1.3'
    }
    if (elementWidth.value < 200 && elementWidth.value > 150) {
      reactElement.value.style.fontSize = '1em'
      reactElement.value.style.lineHeight = '1.4'
    }
    if (elementWidth.value > 200) {
      reactElement.value.style.fontSize = '1.3em'
      reactElement.value.style.lineHeight = '1.5'
    }
  }

  //add and destroy event listeners
  useWindowEvent('resize', resizeHandler, 'add')
  onUnmounted(() => {
    useWindowEvent('resize', resizeHandler, 'destroy')
  })

  //watch elementWidth and set text styles
  watch(elementWidth, () => {
    setTextStyles()
  })

  return { elementWidth }
}
```

This [refactoring](https://github.com/SandraRodgers/vue-reusability-with-composables/tree/composables-first-refactor/src) makes `Mast.vue` much easier to read because the logic for resizing the text and for adding a window event listener are separated out into composables.

However, my ultimate goal is to make composables that are more reusable in general. There is more I can do to make the `resizeText` composable reusable in other projects.

For example, I could set it up to take a breakpoints object, so that I don't have to always use the same hardcoded width sizes to influence the text.

I could also rework it accept a styles object for the text styles so that I'm not required to use the same hardcoded values for text styles for any component that uses the composable. Something like this in the component:

```js
//constants
const breakPoints = { small: '100', medium: '150', large: '200' }
const textStyles = {
  fontSize: { small: '.8em', medium: '1em', large: '1.3em' },
  lineHeight: { small: '1.3', medium: '1.4', large: '1.5' },
}
```

Here is the [full example](https://github.com/SandraRodgers/vue-reusability-with-composables/tree/composables-second-refactor/src).

There are still many ways to improve this composable to make it more agnostic, but this gives a general idea of the process that goes into making a composable more reusable.

## Conclusion

This concludes my series on Diving into Vue 3. I have learned the fundamentals that will allow me to jump into building projects using the Composition API. I feel so much more confident in Vue 3 now, and I'm also really excited about it.

I hope you have enjoyed this series. There is always more to learn, so stay tuned for future posts about Vue topics.

Questions? Comments? Just want to say hi? You can find me on [Twitter](https://twitter.com/sandra_rodgers_)!

        