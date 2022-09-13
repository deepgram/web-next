---
title: "Diving Into Vue 3 - The Reactivity API"
description: "Learn about reactivity in Vue 3 and how to use ref and reactive helpers"
date: 2022-02-18
cover: https://res.cloudinary.com/deepgram/image/upload/v1644435060/blog/2022/02/diving-into-vue-3-reactivity-api/dive-into-vue-3%402x.jpg
authors:
    - sandra-rodgers
category: tutorial
tags:
    - vuejs
    - javascript
seo:
    title: "Diving Into Vue 3 - The Reactivity API"
    description: "Learn about reactivity in Vue 3 and how to use ref and reactive helpers"
shorturls:
    share: https://dpgr.am/98e7070
    twitter: https://dpgr.am/fa58f26
    linkedin: https://dpgr.am/1ce34ef
    reddit: https://dpgr.am/571a1b6
    facebook: https://dpgr.am/3bf430e
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453991/blog/diving-into-vue-3-reactivity-api/ograph.png
---

This is the fourth post in my 'Diving Into Vue 3' series. Today I hope to give a clear and practical description of how to use the new Reactivity APIs, focusing on `ref` and `reactive`. I'll also introduce how to use related helpers such as `toRef`, `toRefs`, and `isRef`.

The other posts in this series that have already come out are:

*   [Diving Into Vue 3 - Getting Started](https://sweet-pie-c52a63-blog.netlify.app/diving-into-vue-3-getting-started/)
*   [Diving Into Vue 3 - The Setup Function](https://sweet-pie-c52a63-blog.netlify.app/diving-into-vue-3-setup-function/)
*   [Diving Into Vue 3: Methods, Watch, and Computed](https://sweet-pie-c52a63-blog.netlify.app/diving-into-vue-3-methods-watch-and-computed/)

But first, a little background on **reactivity**. Feel free to skip ahead to the section on [how to make data properties reactive](#how-to-make-data-properties-reactive) if you just want to learn about `ref` and `reactive`.

## What is reactivity?

The term **reactivity** in relation to Vue generally refers to a feature where what you see on the screen automatically updates in-sync with any changes to the state. It's the Vue 'magic' that makes the template re-render instantly if a data property changes.

When talking about **reactivity** in JavaScript or in programming in general, the term means programming something to work the way Vue does by implementing a design pattern called the **Observer Pattern**, which is explained in [Design Patterns for Humans](https://github.com/sohamkamani/javascript-design-patterns-for-humans#-observer) as :

> whenever an object changes its state, all its dependents are notified.

Vue automatically updating the DOM when a data property changes is a result of Vue being built using the **Observer Pattern** - Vue state is an object with properties that have dependencies, so if one of those properties changes, its dependents react to the change by updating if they need to, and that triggers the re-render in the browser.

JavaScript on its own is not reactive, as shown in this example:

```js
let numWorkers = 50
let numManagers = 4
let totalEmployees = numWorkers + numManagers

console.log(totalEmployees) // 54

numWorkers = 48

console.log(totalEmployees) // Still 54
```

Vue is reactive because the core Vue.js team built it to be. So in the following example, `totalEmployees` will automatically update anytime `numWorkers` or `numManagers` (two properties in the state object) changes:

```js
  data() {
    //returns the state object
    return { numWorkers: 4, numManagers: 6 }
  },
  computed: {
    totalEmployees() {
      // returns whatever the total is based on current state for numWorkers and numManagers
      return this.numWorkers +  this.numManagers
    }
  }
```

### Reactivity in Vue 2

The reactivity system in both Vue 2 and Vue 3 is based on state being an object, but there are big differences in how the properties are made reactive.

In Vue 2 the data option returns an object:

```js
  data() {
    return {
      numWorkers: 4,
      numManagers: 6
    }
  }
```

Under the hood, Vue 2 uses `Object.defineProperty` to define all the data properties on a component instance, converting them to getters and setters. There's a deep dive into the Vue 2's reactivity system in the [Vue.js docs](https://v2.vuejs.org/v2/guide/reactivity.html) that's worth spending some time with.

Because defining the properties happens at the time of the component instance's initialization, it results in some small drawbacks:

*   data properties cannot be added or deleted after component instance initialization. They have to be present during initialization for them to be reactive

*   If the data property is an array, it is not possible to set an item directly to the array through assignment by using the array index (as in `arr[0] = value`), and it also isn't possible to update the length of the array (as in `arr.length = 0`)

This isn't a *major* problem because the `Vue.$set` method can be used in cases where these updates need to be made after component instance initialization. However, Vue 3's reactivity system is so improved that now these issues are no longer a problem, making it unnecessary to use `Vue.$set`.

### Reactivity in Vue 3

Vue 3's reactivity system had a major rewrite from what it was in Vue 2. The fundamental idea of tracking all the data properties and their dependencies so they can update automatically is still the same, but Vue 3 now uses the JavaScript [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) API to achieve this (instead of `Object.defineProperty` like in Vue 2).

There's a rabbit hole to go down for anyone who wants to learn more about the Vue 3 reactivity system, and the [Vue.js docs](https://v3.vuejs.org/guide/reactivity.html#how-vue-tracks-these-changes) are fantastic. Even though I'm not going to explain it all (there's no way I could!), there are a few things I think are helpful to understand.

The docs state:

> Proxy is an object that encases another object and allows you to intercept any interactions with that object.

Awareness of reactive properties using proxies is helpful when debugging code in the console. If I `console.log` a reactive property such as this property `company`:

```js
const company = reactive({
  employees: ['Tom', 'Sara', 'Joe'],
  managers: ['Julie', 'Jorge'],
})
```

in the console, I see:

![A console.log for a reactive property which shows the proxy](https://res.cloudinary.com/deepgram/image/upload/v1644436537/blog/2022/02/diving-into-vue-3-reactivity-api/console_1.png)

Clicking on it will open the object to show that there is a Handler and a Target. A proxy always contains a Handler and a Target, and since Vue 3 uses proxies, I find it helpful to be comfortable with the shape of this data as a proxy.

![Same console.log for a reactive property which shows the proxy, now open to show handler and target](https://res.cloudinary.com/deepgram/image/upload/v1644436562/blog/2022/02/diving-into-vue-3-reactivity-api/console_2.png)

The Target is where to look for the actual values. It contains the data that I might be looking for. The Handler contains the special logic for making the data properties reactive. The Handler contains methods like `get` and `set`.

The Handler is the rabbit hole if you want to learn about reactivity. The Target is where I need to look for my data values.

![Same console.log for a reactive property which shows the proxy, now open to show handler and target with target open to show data values](https://res.cloudinary.com/deepgram/image/upload/v1644436562/blog/2022/02/diving-into-vue-3-reactivity-api/console_3.png)

Because reactive data is wrapped in a proxy, something to get used to when working with the data is the idea of having to 'unwrap' the data object to get to the value. After reading a lot of different resources about working with Vue 3 reactive data, I now feel comfortable with the idea that using strategies to 'unwrap' the data, such as destructuring or drilling down to the value property, are using the metaphor of unwrapping because Vue 3 reactive data is wrapped in a `Proxy` object.

## How to make data properties reactive

As I said earlier, if I want to make data properties reactive in Vue 2, I have to return them in an object inside the data option of the Options API.

```js
  data() {
    return {
      president: "Mickey Mouse",
      vicePresident: "Donald Duck"
    }
  }
```

If I am using the Vue 3 setup function (see my [post on the setup function](https://sweet-pie-c52a63-blog.netlify.app/diving-into-vue-3-setup-function/) if you need an explainer on that), I can make data reactive by using the `reactive` or `ref` helpers.

### ref

For this first example, I will use `ref`. I'm using `ref` because `"Mickey Mouse"` and `"Donald Duck"` are strings, and the recommendation is to use `ref` with primitive values (i.e. Javascript types that are not objects, such as strings, numbers, etc.)

First, I import `ref`:

```js
<script>import { ref } from "vue";</script>
```

Then in the `setup` function, I set my variable to the `ref()` helper, which takes in the initial value. I must include the data in the return object if I want it to be available to the template.

```js
  setup() {
    let president = ref("Mickey Mouse");
    let vicePresident = ref("Donald Duck");

    return { president, vicePresident };
    },
```

An important difference between `ref` and `reactive` is that if I want to do something to the value of my `ref` properties inside the `setup` function, I have to unwrap the object to access that value. So if I want to change the value of `president`, I will change `president.value`:

```js
  function changePresident() {
    president.value = 'Goofy'
  }
```

I don't have to worry about unwrapping the values for `president` and `vicePresident` in the `template`. Vue can shallow unwrap those for me. 'Shallow unwrap' means the first level of properties in an object are available in the template without having to use `.value` (but nested properties would still need to be unwrapped).

```html
<template>
  <div>
    <p><b>President:</b> {{ president }}</p>
    <p><b>Vice President:</b> {{ vicePresident }}</p>
  </div>
</template>
```

FYI, it's fine not to use `ref` if I don't need the data to be reactive, just writing the data like this:

```js
setup() {
  let president = "Mickey Mouse"
  let vicePresident = "Donald Duck"

  return { president, vicePresident };
},
```

But it would mean the data isn't reactive, so I can't ever see updates to the data. If I use a method to change the data, I would never see that update change anything on the screen, and I would have to be happy with Mickey Mouse and Donald Duck showing as president and vice president forever.

There are times when you don't need the data to be reactive, so in those instances, just don't use `ref` or `reactive`!

### reactive

I can use `reactive` for the same example, but I would only do so if I wanted the data to start out in the form of an object rather than separate string values. So in Vue 2, if I have this:

```js
data() {
  return {
    executiveTeam: {
      president: "Mickey Mouse",
      vicePresident: "Donald Duck",
    },
  };
},
```

To change this to Vue 3 using `reactive`, I will first import `reactive`:

```js
import { reactive } from 'vue'
```

In the `setup` function, I will create an object for `executiveTeam` and define the properties on the object. I can set the object to `const` since the object itself won't change, just the properties inside.

```js
setup() {
  const executiveTeam = reactive({
    president: "Mickey Mouse",
    vicePresident: "Donald Duck",
  });

  return { executiveTeam };
},
```

And if I want to update the data, I do not have to unwrap it with `.value `like I do with `ref`.

```js
function changePresident() {
  executiveTeam.president = 'Goofy'
}
```

This is because `reactive` is used with objects, and objects pass values by *reference* (which lends itself better to reactivity). Reactive references (`ref`) are used for primitive types, and primitives in Javascript pass values by *value*, so Vue has to wrap them in an object to make them reactive. Since `ref` properties are wrapped to make them reactive, they have to be unwrapped down to the `.value` to get the value. Read more about this concept in the  [Composition API RFC](https://github.com/vuejs/composition-api-rfc/blob/master/index.md#computed-state-and-refs) if this concept is something you want to understand more deeply.

However, because I'm returning the object `executiveTeam` and I want to access the properties `president` and `vicePresident` on that object in the template, I will have to drill down into the `executiveTeam` object to get each property I need:

```html
<template>
  <div>
    <p><b>President:</b> {{ executiveTeam.president }}</p>
    <p><b>Vice President:</b> {{ executiveTeam.vicePresident }}</p>
  </div>
</template>
```

I cannot destructure the object that I return because if I do, the properties inside `executiveTeam` will lose reactivity. I'll demonstrate this in the next example to make this more clear.

When using `reactive` to give an object's properties reactivity, like this:

```js
const executiveTeam = reactive({
  president: 'Mickey Mouse',
  vicePresident: 'Donald Duck',
})
```

I cannot destructure to try and return those properties by their key, as in:

```js
//LOSES REACTIVITY:
let { president, vicePresident } = executiveTeam

return { president, vicePresident }
```

This is where `toRefs` comes in handy.

### toRefs

The helper `toRefs` will allow me to turn each of the properties in the object into a `ref`, which means I won't have to use `executiveTeam.president` in the template; I'll be able to just write `president`. Here's the full example now using `toRefs`:

```js
<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const executiveTeam = reactive({
      president: "Mickey Mouse",
      vicePresident: "Donald Duck",
    });

    //toRefs allows me to destructure
    let { president, vicePresident } = toRefs(executiveTeam);

    return { president, vicePresident };
  },
};
</script>

```

Since `toRefs` turns each property into a `ref`, I need to go back to unwrapping them down to their value using `.value `if I want to do something to them in the `setup` function:

```js
function changePresident() {
  president.value = 'Goofy'
}
```

### toRef

Just like `toRefs`, the helper `toRef` is used to turn reactive object properties into reactive references (`ref`), but I would use `toRef` if I just need to turn one property in a reactive object into a `ref`:

```js
setup() {
  const executiveTeam = reactive({
    president: "Mickey Mouse",
    vicePresident: "Donald Duck",
  });
  //toRef used to turn just one property into a ref
  let presidentRef = toRef(executiveTeam, "president");

  const changePresident = () => {
    presidentRef.value = "Goofy";
  };

  return { presidentRef, changePresident };
},
```

I will have to use `.value` if I want to update the ref's value inside the setup function, but in the template, Vue will unwrap `president` for me:

```html
<template>
  <div>
    <h1>Company Roles</h1>
    <p><b>President:</b> {{ presidentRef }}</p>
    <button @click="changePresident">Change President</button>
  </div>
</template>
```

It can be challenging to remember which variables are `reactive` properties and which ones are `ref`. Something that helps is to use a naming convention where I add the suffix **Ref** to anything that is a `ref`, such as `presidentRef`. I don't have a lot of experience with Vue 3 yet, but for the time being, I plan to use that naming convention to see if it helps me get a better handle on the distinction between `ref` and `reactive` properties.

### isRef

Vue 3 also provides the helper `isRef` that I can use to check if something is a `ref`.

```js
console.log(isRef(executiveTeam.president)) //false
console.log(isRef(presidentRef)) //true
```

## My Thoughts on the Vue 3 Reactivity API

This topic of `ref` and `reactive` has been the most challenging for me in my goal to learn Vue 3. There is more nuance to how these helpers are used in practice, and it becomes too much for an introduction post to try to cover all the different situations where I might have to make informed decisions about using `ref` and/or `reactive` and all the other helpers.

The Vue.js team is aware that this is one of the challenges of Vue 3 - the question of when to use `ref` or `reactive` does not always receive a simple answer. In the Composition API RFC they state:

> Understandably, users may get confused regarding which to use between ref and reactive. First thing to know is that you will need to understand both to efficiently make use of the Composition API. Using one exclusively will most likely lead to esoteric workarounds or reinvented wheels.

I have come across many resources that suggest using just `ref` or just `reactive` to start. But I think it is worth the effort to learn the nuances of both. I agree with the Vue.js team: it's better to understand both `ref` and `reactive` if I'm going to use Vue 3 to its fullest potential. And that's what I plan to do.

While using just `ref` for primitives and `reactive` for objects is one suggested approach (suggested by the Vue.js team [here](https://github.com/vuejs/composition-api-rfc/blob/master/index.md#ref-vs-reactive)), I would encourage you to dig deeper into the docs and resources out there to learn more about the Reactivity APIs. For a nuanced feature such as this, it's important to understand why certain approaches can be taken.

## Conclusion

Please join me for my next post about reusability in Vue 3, including a discussion of composition functions (i.e. Vue composables). In my opinion, composables are the best thing about this new Composition API and they make it worth putting in the time to learn the harder concepts of Vue 3.

Please reach out on [Twitter](https://twitter.com/sandra_rodgers_) and let me know if you are enjoying this series on Vue 3.

        