---
title: Diving Into Vue 3 - Getting Started
description: Compare how setting up a project in Vue 3 differs from setting one up in Vue 2, and take a look at what Vue 3 gives out of the box.
date: 2022-01-28
cover: https://res.cloudinary.com/deepgram/image/upload/v1643297450/blog/2022/01/diving-into-vue-3-getting-started/dive-into-vue-3%402x.jpg
authors:
    - sandra-rodgers
category: tutorial
tags:
    - vue,
    - javascript
seo:
    title: Diving Into Vue 3 - Getting Started
    description: Compare how setting up a project in Vue 3 differs from setting one up in Vue 2, and take a look at what Vue 3 gives out of the box.
shorturls:
    share: https://dpgr.am/0eeeb5
    twitter: https://dpgr.am/0ba728
    linkedin: https://dpgr.am/ae308b
    reddit: https://dpgr.am/7ba63d
    facebook: https://dpgr.am/828acc
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453841/blog/diving-into-vue-3-getting-started/ograph.png
---

Vue is a front-end JavaScript framework for building UIs (User Interfaces) and SPAs (Single-Page-Applications). Vue 3 has been out for a while, but until now, I hadn't taken the time to jump into it since it's a little daunting to have to learn something new.

But no more excuses. I'm diving into Vue 3, and I'm going to write my impressions of how it compares to Vue 2. If, like me, you have questions such as:

*   How do I set up component files in Vue 3?
*   What is this new `setup()` method?
*   What is the Composition API (Vue 3) versus the Options API (Vue 2)?
*   Are props, events, and lifecycle hooks basically the same? Or will I encounter big changes?
*   How do I even get started with Vue 3?

Then this series of posts will be valuable to you! Read on if you are interested in getting started in Vue 3.

## CLI - What we get out of the box

Let's start by comparing Vue 2 and Vue 3 project setup using the Vue CLI.

Vue CLI helps you bootstrap a new Vue project, giving you all the files you need to get up and running.

With Vue 2, all you had to do was run the following command in your terminal (as long as you had Vue installed first), and the CLI would guide you through setup.

```js
vue create YOUR-PROJECT-NAME
```

Good news! With Vue 3, it's almost entirely the same. After you have [installed Vue 3](https://v3.vuejs.org/guide/installation.html#npm), you can just type that command, and you will see a list to choose from. You can select either Vue 2 or Vue 3 for your new project.

![Vue CLI choices](https://res.cloudinary.com/deepgram/image/upload/v1642091717/blog/2022/01/diving-into-vue-3-getting-started/vue-presets.png)

I love this because it means I don't have to fully commit to going over to Vue 3 if it turns out it's not to my liking. I can easily bootstrap a project in either Vue 2 or Vue 3 after upgrading to Vue 3.

I'll select Vue 3 this time, so I can see how this scaffolded project compares to what I would get out of the box with Vue 2. I'll start by looking at the files I expect I would need.

## Project Files

As a Vue user, I know that three of the important files that make Vue work and render onto the page are:

*   **index.html**
*   **main.js**
*   **App.vue**.

I'll examine those files first to see if there are any noticeable changes between Vue 2 and Vue 3. Notice in the screenshot that the file structure of a project created by the CLI is identical for both Vue 2 and Vue 3. However, if we dig in and examine the three files I called out in the list above, we'll find some changes.

![File trees Vue 2 vs Vue 3](https://res.cloudinary.com/deepgram/image/upload/v1642091717/blog/2022/01/diving-into-vue-3-getting-started/files-comparison.png)

### index.html

When building even the most basic webpage (not just Vue projects), the **index.html** file is the file that serves as the default starting page, giving the basic skeleton of what we see on the page (the basic HTML structure).

Here is the **index.html** file that is created with a Vue 2 project. And interestingly, the file is exactly the same in a Vue 3 project.

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
        properly without JavaScript enabled. Please enable it to
        continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

This file is extremely important, which is why it is my first instinct to check it out and see if anything has changed between Vue 2 and Vue 3.

The **index.html** file contains a `div` element with `id="app"`, and that is where Vue knows to look so it can mount the application into the DOM.

```html
<div id="app"></div>
```

Vue uses this `div` as an entry point for where to inject all the Vue files. Within those Vue files, the Vue magic happens, but it is that first entry point `div` that gets the Vue code into the main HTML page.

Since this file is identical in both Vue 2 and Vue 3 projects, this tells me that at least in this aspect, both Vue 2 and Vue 3 use the same approach to putting Vue files in the DOM - they search for a `div` in the **index.html** file, and when the `div` is found, the Vue app attaches to that particular element.

### main.js

The **main.js** file in a Vue project is where the Vue instance itself gets initialized. (A Vue application is a Javascript object under the hood - each unique Vue project is an instance object of the Vue object. It inherits properties and methods that make Vue work the way it does.)

In Vue 2, app initialization looks like this:

```js
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: (h) => h(App),
}).$mount('#app')
```

But in Vue 3, it looks like this:

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

This is clearly a big change. I want to understand both, so I'll first explain what's happening in Vue 2 and then compare it with Vue 3.

##### Vue 2

First, I'll take a look at what's going on in Vue 2. I notice these two important statements:

```js
import Vue from 'vue'
import App from './App.vue'
```

The **Vue** constructor function has to be imported from Vue so that it can be used to create a *new instance of Vue*. **App** is also imported (it is the **App.vue** file in the project) because I need a *root Vue component* where all my Vue code will live. Any children components I later build will come into the project through that App file.

Next, I see this in the Vue 2 **main.js** file:

```js
new Vue({
  render: (h) => h(App),
}).$mount('#app')
```

This is the Vue constructor function being used. `new Vue()` creates a new instance of the Vue object. And an object is passed into the constructor function `Vue({...})` which is known as the **options** object. This is why Vue 2 is sometimes referred to as the **Options API** (even though the Options API is just a *part* of Vue 2). The options are those properties like data, methods, mounted, computed, and so on.

On the next line, I see `render: h => h(App)`. The render property tells Vue to render the component as HTML (`render` is actually a function that is part of the Vue options API). You can read more in [this article](https://css-tricks.com/what-does-the-h-stand-for-in-vues-render-method/) about why the `h` is used if you are curious. The code in the **App.vue** component file is passed into that render function, so it gets built out as HTML (and there is other stuff going on to make Vue do its reactivity magic).

The [$mount](https://vuejs.org/v2/api/#vm-mount) method is a built-in Vue method that manually starts the mounting of the Vue instance.

##### Vue 3

In Vue 3, I see that the **main.js** file looks very different:

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

This seems like a lot less code. Instead of importing a constructor function to create a Vue object instance, I see a function called `createApp` being imported. It's striking to me that initialization is happening with just one line of code, `createApp(App).mount('#app')`.

Even though it's not apparent here, the `createApp` function is actually still using the `new Vue()` constructor inside the function. The difference now is that it *makes a copy* of the Vue instance. Instead of using `new Vue()` directly (and directly adding configuration options which will affect all uses of that Vue instance, resulting in mutations to global state), the `createApp` makes a copy that can be separately configured. By encapsulating this within a function, it gives me the ability to create separate Vue instances, and configuration to each instance won't affect other instances.

This is an improvement because now it's easier to create two Vue objects with separate configurations if needed. Here is an example of a setup that is doing that:

```js
import GlobalApp from './App.vue'

//Create one Vue app using same global app file and add unique configuration
const app1 = Vue.createApp(GlobalApp)

app.component('SearchInput', SearchInputComponent)
app.directive('focus', FocusDirective)
app.use(LocalPlugin)

//Create second Vue app using same global app file and add unique configuration
const app2 = Vue.createApp(GlobalApp)

app.component('Modal', ModalComponent)
app.directive('toolip', TooltipDirective)
app.use(DifferentPlugin)
```

Why is this helpful? I can only imagine possible situations. Perhaps if different teams using Vue want to build off the same main App file but add their own options, plugins, features, etc. Or maybe so that I could build something as a core but then branch off on different paths to see how different configurations work.

Whatever the reason, just having that ability has made Vue better.

### App.vue

The last file I want to look at to see if there are any differences out of the box is the **App.vue** file.

The **App.vue** file is the root component, the one that is the starting point for rendering the Vue code when the application gets mounted to that DOM element in the **index.html** file.

After comparing **App.vue** in Vue 2 and **App.vue** in Vue 3, I see only one difference, and it's in the template block.

Here is the Vue 2 **App.vue** template:

```html
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>
```

And here is the Vue 3 **App.vue** template:

```html
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>
```

I'm surprised to see that there is no longer the need for the surrounding root div in the template. We are no longer required to have a single root element, like so:

```html
<template>
  <div id="app">...</div>
</template>
```

In Vue 2, we had to provide a single root element as the direct child of the template, but now in Vue 3, we can have many direct child elements, i.e., multiple root elements. This eliminates all the extra divs that showed up around the HTML code for each component.

However, it means that if you put a non-prop attribute on the component, and you use multi-root elements rather than a single root element like in Vue 2, that attribute won't show up in your component unless you explicitly [bind an element to those attributes](https://v3.vuejs.org/guide/component-attrs.html#disabling-attribute-inheritance). Just something to be aware of.

## Conclusion

So far, I'm not too intimidated by these changes I see in Vue 3 versus Vue 2, but I haven't really gotten into the big stuff yet.

In my next post in this series, I'll examine the `setup() ` function, which is probably the most important change to understand. It will be a good opportunity for comparing the Composition API (which comes with Vue 3) versus the Options API (which was the Vue 2 way of doing things).

Please follow me on [Twitter](https://twitter.com/sandra_rodgers_) if you want to dive into more Vue 3 with me!

