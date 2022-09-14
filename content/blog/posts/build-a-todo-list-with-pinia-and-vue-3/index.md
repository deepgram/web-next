---
title: "Build a To-do List App with Pinia and Vue 3"
description: "Learn about Vue 3's new official state management system Pinia while building a to-do list app. Bonus - add typescript!"
date: 2022-04-15
cover: https://res.cloudinary.com/deepgram/image/upload/v1649693948/blog/2022/04/build-a-todo-list-with-pinia-and-vue-3/Build-Todo-list-w-Vue3-Pinia%402x.jpg
authors:
    - sandra-rodgers
category: tutorial
tags:
    - vuejs
    - javascript
    - typescript
seo:
    title: "Build a To-do List App with Pinia and Vue 3"
    description: "Learn about Vue 3's new official state management system Pinia while building a to-do list app. Bonus - add typescript!"
shorturls:
    share: https://dpgr.am/9d6a0bc
    twitter: https://dpgr.am/9218baf
    linkedin: https://dpgr.am/b0575b7
    reddit: https://dpgr.am/8761a94
    facebook: https://dpgr.am/f7cf134
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453154/blog/build-a-todo-list-with-pinia-and-vue-3/ograph.png
---

I was building a Vue 3 project for my recent blog series on [how to build a full-stack live streaming web app](https://sweet-pie-c52a63-blog.netlify.app/build-a-livestream-web-application-vue-and-express-setup/). I wanted to use Vuex to manage some global state properties. It was my first time using Vuex with Vue 3 since I began my journey to learn the Composition API.

When I arrived at the [Vuex documentation page](https://vuex.vuejs.org/), I saw this:

![Announcement: The official state management library for Vue has changed to Pinia ](https://res.cloudinary.com/deepgram/image/upload/v1649699509/blog/2022/04/build-a-todo-list-with-pinia-and-vue-3/announcement-pinia-official_.png)

Well, that was a surprise! I had been hearing the word "Pinia" in relation to Vue but didn't know exactly what it was. **Pinia is now the official state management library for Vue**!

I pushed onwards with using Vuex in that project but made a mental note to come back soon to Pinia to find out what it is all about.

Soon is now! Today I will learn a little about Pinia by building a to-do list. I'll show how I build it and provide some of my thoughts about the experience. Let's dive in!

## The Project

Here is a screenshot of the final project. It's a to-do list that lets me **add**, **delete**, and **check off** an item on the list.

The project repo can be found [here](https://github.com/SandraRodgers/todo-pinia).

![Example of the to-do list app I'll build](https://res.cloudinary.com/deepgram/image/upload/v1649860305/blog/2022/04/build-a-todo-list-with-pinia-and-vue-3/todo-list-example1.png)

## Getting Started with Pinia

I'll create my Vue project (making sure to select Vue 3 since I want to use the Composition API). Pinia also works with Vue 2, but I've personally gone totally in on Vue 3 (and haven't looked back - check out [my series on Vue 3](https://sweet-pie-c52a63-blog.netlify.app/diving-into-vue-3-getting-started/) to read about my journey).

```bash
vue create todo-pinia
```

After I `cd` into the project folder, I'll install pinia:

```bash
npm install pinia
```

Then I'll go into the `main.js` file and import `createPinia`. This creates a Pinia instance to be used by my application. The `.use()` tells the Vue app to install Pinia as a plugin.

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')
```

In the `src` folder, in `components`, I'll create the three components that will make up my todo list app - `TodoApp.vue` (the parent component), `TodoForm.vue` (a child component), and `TodoList.vue` (another child component).

<img src="https://res.cloudinary.com/deepgram/image/upload/v1649694505/blog/2022/04/build-a-todo-list-with-pinia-and-vue-3/components-folder-with-files.png" alt="Components folder with files" style="width:50%" />

Here is the plan for how these components will be organized in the browser:

![Example of the to-do list app with component outline](https://res.cloudinary.com/deepgram/image/upload/v1649861642/blog/2022/04/build-a-todo-list-with-pinia-and-vue-3/todo-list-example_components.png)

In each component, I can quickly scaffold out the basic code structure for my template and script. I do that with an extension in VS Code called [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets). Since I have that, I just type the letters **vbase-3**, and the code writes itself for me:

![vbase-3 snippet to scaffold out my code](https://res.cloudinary.com/deepgram/image/upload/v1649694505/blog/2022/04/build-a-todo-list-with-pinia-and-vue-3/vbase-snippet.png)

Now I'll import each component to where it needs to be -`TodoForm.vue` and `TodoList.vue` into the `TodoApp.vue` - and I'll import the `TodoApp.vue` component into `App.vue`. I like to write the name of the component in each to start so I can see them on the screen.

Here's my screen now. The layout is there, but no logic or styles yet:

<img src="https://res.cloudinary.com/deepgram/image/upload/v1649694505/blog/2022/04/build-a-todo-list-with-pinia-and-vue-3/component-layout-browser.png" alt="Component layout in browser" style="width:50%" />

## Pinia - What is it?

Next, I'll create a store and set up my global state with [Pinia](https://pinia.vuejs.org/).

The concept of a Pinia store is the same as it is for Vuex or Redux - **it is a place to hold global state**, and it makes it easy for any component in the project to track changes to that global state.

Not all state needs to go in the store - just state properties that I want to make available throughout the app. This is especially useful when I want to share state between two sibling components like the `TodoForm.vue` and `TodoList.vue` because I can avoid sending props down ('prop drilling') and emitting events up through the parent.

## Define a Pinia Store

I will create a `store` folder in `src`, and in the folder, I'll make a file called `useTodoListStore.js`. I'm naming it starting with the word 'use' because a common convention of Vue 3, both for Pinia store files and for Vue composables, is to start the file name with 'use'.

I can have as many stores as I want; in fact, **I should have separate stores for separate logical concerns**, similar to how Vue 3 composables are built around distinct logical concerns. Each store should be in a different file.

However, since this is such a small project, I only need one store - **one store for the to-do list logic**.

I will first import the `defineStore` function from Pinia. Under the hood, this is going to create the `useStore` function that I will need in my components to retrieve the store I made.

```js
import { defineStore } from 'pinia'
```

I set it to a `const` and use the keyword `export` since I'll need to be able to import it into my components.

This `defineStore` function will take two arguments: a string (the unique name of the store) and an object (options such as state, getters, and actions).

```js
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  // state
  // getters
  // actions
})
```

## State, Getters, and Actions

The options that I pass to the `defineStore` function are my store's `state`, `getters`, and `actions`. Unlike Vuex, there is no longer the need for `mutations`. This makes me happy!

I always found `mutations` confusing because it felt like I was repeating myself when I had to write an action to commit a mutation, which would then make the state change. Pinia has gotten rid of that middleman, and instead, the flow is just **action -> change state**.

I already have a mental model around the way `methods`, `data`, and `computed` work in Vue 2. The `methods` make stuff happen, the `data` contains my state properties, and the `computed` returns an automatically updated property that has had a calculation performed on it.

Pinia's options follow the same mental model - I can think of the `state` as being like `data` in the Vue Options API, the `actions` like `methods`, and the `getters` like `computed` properties.

I really like this change, and it's one of the first things that made me think, "Wow, I think I'm really going to like Pinia!"

### Create Initial State

Now I'll start creating a global state object in my `useTodoListStore`.

The state is actually a function, and it's recommended that I use an arrow function (this is because Pinia has excellent Typescript integration, and using an arrow function will allow Typescript inference to work on the state properties).

I'll add a `todoList` property, which will be an array meant to contain each to-do item (each item is going to be an object, but there's nothing in the `todoList` array at the moment).

```js
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
  }),
})
```

### Actions - Add and Delete an Item

I can also set up my first action. I know the main logic to start will be adding an item to the to-do list. I'll write a function `addTodo` that will perform the logic of pushing an item object into the `todoList` array.

Individual `actions` are methods within the `actions` object in the store.

I will also add an `id` property to state since I will want each item to have an id that increments each time a new item is pushed into the `toDoList` array:

```js
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false })
    },
  },
})
```

Maybe while I'm here, I should go ahead and write an action to delete an item from the to-do list since I know I'll want to have a delete feature. Under the last line of code in the `addToDo` action, I'll add a `deleteTodo`:

```js
deleteTodo(itemID) {
  this.todoList = this.todoList.filter((object) => {
    return object.id !== itemID;
  });
},
```

### Input Form to Add an Item

I'll jump back into the `TodoForm.vue` component now. I want to write a form to enter a to-do item. I'll use the dev-tools to check that the item is getting into the `state` I set up in the Pinia store.

In the `template`, I'll create the basic form:

```html
<!-- TodoForm.vue -->

<template>
  <form @submit.prevent="">
    <input v-model="todo" type="text" /><button>Add</button>
  </form>
</template>
```

The input has a `v-model="todo"` which I'll connect to a `ref` in the `script` to make this property reactive so it updates as the user types the item into the input:

```js
// TodoForm.vue

<script>
import { ref } from "vue";
export default {
  setup() {
    const todo = ref("");
    return { todo };
  },
};
</script>
```

I haven't added a method yet for the `@submit` event listener because I need to set up the logic in the `script` first. The submit button is going to trigger a function to add an item to the todo list, so I'll need to somehow invoke the `addTodo` action in the store.

## Access Pinia Store from a Component

To use a Pinia store in a component, I need to import the store and then set a `const store` to the invoked store function:

```js
// TodoForm.vue

import { useTodoListStore } from '@/store/useTodoListStore'
export default {
  setup() {
    const todo = ref('')
    // use Pinia store:
    const store = useTodoListStore()

    return { todo }
  },
}
```

Now I will have access to state, actions, and getters in the store through that `const store`.

I'll write a method in the `TodoForm.vue` component that will be triggered when the submit button is clicked. I want that method to do two things: add an item to the `todoList` array in the store, and clear the `todo` `ref` so it returns to being an empty string after the item is added to the list:

```js
// in setup function in script in TodoForm.vue:

function addItemAndClear(item) {
  if (item.length === 0) {
    return
  }
  // invokes function in the store:
  store.addTodo(item)
  todo.value = ''
}
```

And I'll make sure that function is added to the form's `@submit` event listener in the template:

```js
<form @submit.prevent="addItemAndClear(todo)">
```

I'll type `npm run serve` in the terminal to start up the Vue development server.

Now I can open the Vue dev-tools and see that the item is being added to the `todoList` array in the store.

![Gif showing an item added to the to-do list and data in the store](https://res.cloudinary.com/deepgram/image/upload/v1649704298/blog/2022/04/build-a-todo-list-with-pinia-and-vue-3/add-todo.gif)

## Reactive Properties in Pinia

In the previous section, I used an action from the Pinia store - `addTodo` - in my `todoForm.vue` component. In this section, I'll use a state property in the `todoList.vue` component, and I need it to be reactive to changes that might happen. I'll be using it in the component `template`, and it has to be reactive so it updates in sync with the state change.

There's an important function I'll want to use that comes with the Pinia library - `storeToRefs`. Each to-do list item displayed in the `todoList` component will actually come from the store, and since the store's state is an object, I will use this helper method to destructure the returned object without losing reactivity. It is similar to Vue 3's [utility function `toRefs`](https://vuejs.org/api/reactivity-utilities.html#torefs). I'll demonstrate its usage as I build the next feature.

### Todo List - Show Item

I want access to the `todoList` that's in the store (which now has data to represent the items I've added to the list), so in the `todoList.vue` component I'll need to bring in the store, just like I did in `todoForm.vue`. I'll also set `const store` to the invoked store function.

Then I need to wrap the `todoList` property that I want to pull from the store in the function `storeToRefs`:

```js
<script>
import { useTodoListStore } from "../store/useTodoListStore";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const store = useTodoListStore();
    // storeToRefs lets todoList keep reactivity:
    const { todoList } = storeToRefs(store);

    return { todoList };
  },
};
</script>
```

Now I can use `todoList` in my `template`, and it will stay in sync with the store. I'll write a `v-for` loop to create the list:

```html
<template>
  <div v-for="todo in todoList" :key="todo.id">
    <div>{{ todo.item }}</div>
  </div>
</template>
```

And the list is displaying now:

![Gif showing the list as items are added](https://res.cloudinary.com/deepgram/image/upload/v1649863854/blog/2022/04/build-a-todo-list-with-pinia-and-vue-3/show-list-example_.gif)

### To-do List - Mark as Completed

I want to add some styles to each item to show if the to-do item has been completed.

First, I need the logic to toggle an item to be complete or not complete. Right now, in the store, each item that is added to the list also has a `completed` property set to `false`:

```js
// useTodoListStore.js

this.todoList.push({ item, id: this.id++, completed: false })
```

I can write an action in the store to toggle that to true:

```js
toggleCompleted(idToFind) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
```

In the `todoList.vue` component, I'll add a checkmark emoji as a `span` to the `template` with an event listener to listen for a click on the checkmark. The Unicode is `&#10004;` for a checkmark.

```js
<div v-for="todo in todoList" :key="todo.id">
    <div>
      <span>{{ todo.item }}</span>
      <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
    </div>
  </div>
```

However, I need to make sure that I have brought `toggleCompleted` into the component. Since it's an **action** method and not a reactive state property, I won't use `storeToRefs` for `toggleCompleted`:

```js
<script>
import { useTodoListStore } from "../store/useTodoListStore";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const store = useTodoListStore();
    const { todoList } = storeToRefs(store);
    // destructuring action method doesn't require using storeToRefs:
    const { toggleCompleted } = store;

    return { todoList, toggleCompleted };
  },
};
</script>
```

To add the styles, I first will add a dynamic class to the to-do item `span` in the template:

```js
<span :class="{ completed: todo.completed }">{{ todo.item }}</span>
```

And CSS to change the look of the item as it is toggled true and false:

```css
/* CSS Styles */

.completed {
  text-decoration: line-through;
}
```

![Gif showing an item marked complete with checkmark](https://res.cloudinary.com/deepgram/image/upload/v1649864263/blog/2022/04/build-a-todo-list-with-pinia-and-vue-3/check-complete.gif)

### To-Do List - Delete Item

I had already added the `deleteTodo` function to the store, so I can jump into writing the delete feature in the `todoList.vue` component.

I'll do the same thing I did in the previous section, bringing in the store's action `deleteTodo` and using a cross mark emoji for the delete button. I won't explain every step since I just need to repeat what I did in the previous section for marking an item complete, but this time hooking it up to the delete action. But I'll show the code.

Here's the `todoList.vue` component after I added the delete feature:

```js
// todoList.vue

<template>
  <div v-for="todo in todoList" :key="todo.id">
    <div>
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
      <span @click="deleteTodo(todo.id)">&#10060;</span>
    </div>
  </div>
</template>

<script>
import { useTodoListStore } from "../store/useTodoListStore";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const store = useTodoListStore();
    const { todoList } = storeToRefs(store);
    const { toggleCompleted, deleteTodo } = store;

    return { todoList, toggleCompleted, deleteTodo };
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>

```

And here is the **store** now that I have all the logic working:

```js
// useTodoListStore

import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false })
    },
    deleteTodo(itemID) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID
      })
    },
    toggleCompleted(idToFind) {
      const todo = this.todoList.find((obj) => obj.id === idToFind)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
})
```

I've finished a barebones to-do list app with Pinia, minus styling. This code is available on the 'just-pinia' branch of [my project repo](https://github.com/SandraRodgers/todo-pinia/tree/just-pinia) for anyone who would like to see it in its entirety.

## Bonus Section: Add Typescript

One of the best features of Pinia is that **it works very well with Typescript**. I first chose to build the to-do list without Typescript so I could just focus on how to use Pinia, but I also want to demonstrate how it works with Typescript since that is a huge advantage of Pinia.

Setting up Vuex with Typescript was always challenging for me because of the need to create custom complex wrappers. It wasn't easy to just dive in.

But with Pinia, I don't have to do that. I can just add Typescript to my project and start using it.

I'll add Typescript to my existing project with this command:

```js
vue add Typescript
```

When it prompts me to make some choices, I'll be sure to say yes to "Convert all .js files to .ts". That way it will turn the store file into a `.ts` file.

![Prompts when adding Typescript to Vue project](https://res.cloudinary.com/deepgram/image/upload/v1649694505/blog/2022/04/build-a-todo-list-with-pinia-and-vue-3/add-typescript-to-vue-prompts.png)

Then I'll delete the `HelloWorld` file because I don't need that. I might need to delete one of the `extends` properties from the `.eslintrc.js` file.

I'll go to the store file and see that Typescript is pointing out all the missing types I need to add.

![Store with Typescript errors](https://res.cloudinary.com/deepgram/image/upload/v1649694505/blog/2022/04/build-a-todo-list-with-pinia-and-vue-3/store-with-typescript-errors.png)

I'm not going to go through how to use Typescript since this blog post isn't meant to teach how to write Typescript. But I'll add the types and show how my store looks after I revise it to include Typescript:

```js
import { defineStore } from "pinia";

interface ToDoItem {
  item: string;
  id: number;
  completed: boolean;
}

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [] as ToDoItem[],
    id: 0,
  }),
  actions: {
    addTodo(item: string) {
      this.todoList.push({ item, id: this.id++, completed: false });
    },
    deleteTodo(itemID: number) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID;
      });
    },
    toggleCompleted(idToFind: number) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
```

In the components, I'll need to add `lang="ts"` to the script and import `defineComponent`. The export will need to be wrapped in the `defineComponent` function.

```js
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
...
});
</script>
```

And that's how I would add Typescript to my project after-the fact; although I highly recommend starting the project from the beginning with Typescript, since it will help with the developer experience of catching errors and thinking about types.

The Typescript version of the to-do list can be found in my repo on the branch called [pinia-typescript](https://github.com/SandraRodgers/todo-pinia/tree/pinia-typescript).

## Conclusion

I went through creating a to-do list using just Pinia and then I also showed how to build one with Typescript. I've since added styles and an alert feature to the application, and the most updated code can be found on the main branch of the [project repo](https://github.com/SandraRodgers/todo-pinia/tree/main).

I hope this blog post has been helpful. I'm very excited about Pinia because of how straightforward it was to jump in and start using, especially with Typescript.

If you have any questions, feel free to reach out on [Twitter](https://twitter.com/sandra_rodgers_)!

        