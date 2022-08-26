---
title: "Diving Into Vue 3 - The Setup Function"
description: "Learn about the new Vue 3 setup function and the Composition API"
date: 2022-02-04
cover: https://res.cloudinary.com/deepgram/image/upload/v1643314554/blog/2022/02/diving-into-vue-3-setup-function/dive-into-vue-3%402x.jpg
authors:
    - sandra-rodgers
category: tutorial
tags:
    - vuejs
    - javascript
seo:
    title: "Diving Into Vue 3 - The Setup Function"
    description: "Learn about the new Vue 3 setup function and the Composition API"
shorturls:
    share: https://dpgr.am/ac518b9
    twitter: https://dpgr.am/3a56d0b
    linkedin: https://dpgr.am/931f9a0
    reddit: https://dpgr.am/736169b
    facebook: https://dpgr.am/dc79347
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453994/blog/diving-into-vue-3-setup-function/ograph.png
---

In this series of posts, I'm diving into Vue 3 as someone who is new to the Composition API but not new to Vue in general. I'm writing my impressions of how to get started with Vue 3 and comparing it to the way I would do things in Vue 2.

Today, I'll take a look at the `setup` function that is new to Vue 3.

And if you want to start at the beginning of the series, take a look at my first post: [Diving into Vue 3: Getting Started](https://developers.deepgram.com/blog/2022/01/diving-into-vue-3-getting-started/).

## The Old Way: Vue 2 Options API

The Options API is familiar to those of us who have used Vue 2. A single-file-component includes a `template`, `script`, and `style` section, and in the script section, we would use the **options** of the Options API, organized something like this:

```html
<script>
  export default {
    name: 'ComponentName',
    components: {},
    props: {},
    data() {},
    watch: {},
    methods: {},
    mounted() {},
  }
</script>
```

The Options API is all the properties and methods we get on our Vue instance, the instance we initialize when we set up the project in the **main.js** file (see my [previous post](https://developers.deepgram.com/blog/2022/01/diving-into-vue-3-getting-started/) for more info on initializing the Vue application object).

This organization of a component seems very easy to read at first glance, and it is one of the things that made me feel unafraid to jump into Vue initially. We clearly see how the different logic is separated by its type - `methods` versus `computed` versus `watch`.

However, after becoming more experienced in using Vue and having worked with really large components, this actually starts to feel like a shortcoming because it forces us to jump around so much to follow the data as it moves through logic.

## New and Improved Way: Vue 3 Composition API

The Composition API is born from experience - the experience of struggling to keep track of logic jumping around within a Vue component, from `data` to `methods` to `watch` to `methods` again back to `watch` and so on...

And when we add a **mixin** to the mix (pun intended), jumping to a completely different file to follow the logic can be a huge headache since pieces of logic in the mixin can affect pieces of logic in the main component (rather than the mixin containing all the logic for a feature).

The better way is not to separate the script into sections by options, but instead to organize by *logical concern for individual features*. The `setup` function lets us do that because we can write the logic for each feature, group it under a function that we name, then invoke all the functions within the scope of the setup function.

This improvement has resulted in a new pattern called Vue 'composables', which is just this idea I described in the previous paragraph - grouping code by logical concern and making it into a reusable function. We'll learn more about composables in a later post, but the important thing to understand now is that the `setup` function is what makes it possible.

## How to Use the Setup Function

Now we'll get into the nitty-gritty of how to use the `setup` function.

Technically, the `setup` function is another **option** you can use in the **Options API** since it can be added alongside the list of other option properties and lifecycle methods, like this:

```html
<script>
  export default {
    name: 'ComponentName',
    components: {},
    data() {},
    methods: {},
    mounted() {},
    setup() {},
  }
</script>
```

However, since we are choosing to do things the Vue 3 way, we'll probably just want to dive in completely and use the `setup` function without all the other options since what we get with `setup` will make it unnecessary to use them.

### Example Using Setup

Here is a very simple example that shows the most basic thing we need to do in Vue - create a variable to represent some data. This is the basic template where we have a data value for a number of employees.

```html
<template>
  <div>
    <h1>Basic Component</h1>
    <p>Employees: {{ numEmployees }}</p>
  </div>
</template>
```

And here is what it would render as:

![Basic component](https://res.cloudinary.com/deepgram/image/upload/v1642110686/blog/2022/02/diving-into-vue-3-setup-function/basic-component.png)

`numEmployees` represents a number of people who work for a company. In Vue 2, in the script section, we would have created a data property using the `data()` option, like this:

#### Vue 2

```html
<script>
  export default {
    data() {
      return {
        numEmployees: 0,
      }
    },
  }
</script>
```

In Vue 3, we will just create our variable inside the `setup` function, like this:

#### Vue 3

```html
<script>
  export default {
    setup() {
      const numEmployees = 10
      return { numEmployees }
    },
  }
</script>
```

However, if we want that data property for numEmployees to be **reactive** (so it updates in the template when it changes in script), we have to use `ref()` around the value, and we have to import ref in order to use it:

```js
<script>
import { ref } from "vue";
export default {
  name: "BasicComponent",
  setup() {
    const numEmployees = ref(10);
    return { numEmployees };
  },
};
</script>
```

We also have to `return` an object with that data value; otherwise, it will not be available in the template.

### Important Facts about the Setup Function

1.  `setup` is a function, and it is also referred to as a 'hook' in a general sense because it is similar to the lifecycle methods in that *timing is important*. `Setup` runs before everything else - before all the lifecycle methods and the mounting of the component (although **not before props are resolved,** so you **will have access to props** in the setup function).

2.  A big difference from Vue 2 is that we won't be seeing the keyword `this` all over the place to reference data values inside a component. In Vue 3, `this` in the way it was used in the Options API is not available in the `setup` function since `setup` runs so early.

3.  `setup` must return an object. The object contains everything from within the scope of the setup function that you want to make available in the template.

4.  Variables aren't reactive in the `setup` function unless you use `ref` with them (or `reactive`, but for now, we only need to concern ourselves with `ref`. Stay tuned for a post on `ref` and `reactive` in the near future).

5.  `setup` can take two arguments - `props` and `context` - which we'll take a look at more closely in the next section.

### Props and Context

`setup` can take two arguments, `props` and `context`.

#### Props

In this example a prop `message` has been added that wasn't there before. The prop is just a simple string. It's passed down the same way as in Vue 2, as we can see in the example:

#### Parent Component

```html
<template>
  <basic-component :message="message" />
</template>
```

#### Child Component

```html
<script>
  import { ref } from 'vue'
  export default {
    name: 'BasicComponent',
    props: {
      message: String,
    },
    setup(props) {
      console.log(props.message)

      const numEmployees = ref(10)

      return { numEmployees }
    },
  }
</script>
```

The `setup` function must have that `props` argument if we want to have access to the prop inside the function. I can `console.log` it to see the prop value:

![Console-logged prop value](https://res.cloudinary.com/deepgram/image/upload/v1642110686/blog/2022/02/diving-into-vue-3-setup-function/console-prop-value.png)

In the template, we'll have it display like this. It is the same way we would do it in Vue 2:

```html
<template>
  <div id="basic">
    <h1>Basic Component</h1>
    <p>Employees: {{ numEmployees }}</p>
    <div>{{ message }}</div>
  </div>
</template>
```

![Basic Component with prop](https://res.cloudinary.com/deepgram/image/upload/v1642110686/blog/2022/02/diving-into-vue-3-setup-function/basic-component-with-prop.png)

If we log `props` by itself to the console, like this:

```js
setup(props) {
  console.log(props);
},
```

Then we see the props object, which looks like this:

![Console-logged props object](https://res.cloudinary.com/deepgram/image/upload/v1642110686/blog/2022/02/diving-into-vue-3-setup-function/console-prop-object.png)

The object uses a `Proxy`, which is the new way that Vue 3 does reactivity (the details of what that is go beyond the scope of this post). Because props are reactive, they cannot easily be destructured in the setup function. If you want to understand more about that, [the docs explain it](https://v3.vuejs.org/guide/composition-api-setup.html#props). I don't find it necessary to destructure them, however (but I'm still very new to using Vue 3).

#### Context

The second argument, `context`, gives us access to three properties that we had available in Vue 2 using the keyword this:

*   `attrs` - (formerly `this.$attrs`) - An object containing the component's attributes

*   `emit` - (formerly `this.$emit`) - A function that takes the event as argument

*   `slots` - (formerly `this.$slots)` - An object containing the component's slots

If we only want to use one of these in the `setup` function, we can destructure the argument like this:

```js
export default {
  setup(props, { attrs }) {
    console.log(attrs)
  },
}
```

There is also another property, `expose`, which is useful in special cases. The [docs](https://v3.vuejs.org/guide/composition-api-setup.html#usage-with-templates) go over the example of using it when returning render functions from the `setup` function. That's a bit advanced for this series. If you have used `expose`, I would be interested to hear from you because I haven't used it myself!

## Conclusion

And that wraps up this post about the `setup` function. In the next post, we will be looking at `methods` and `computed` to see how we use those in Vue 3. And as always, feel free to reach out on [Twitter](https://twitter.com/sandra_rodgers_)!

        