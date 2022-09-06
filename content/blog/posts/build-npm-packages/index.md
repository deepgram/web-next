---
title: "Building an npm Package"
description: "Create, publish, and use your first npm package returning values, functions, and classes."
date: 2021-12-06
cover: https://res.cloudinary.com/deepgram/image/upload/v1638810126/blog/2021/12/build-npm-packages/building-an-npm-package%402x.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
    - nodejs
seo:
    title: "Building an npm Package"
    description: "Create, publish, and use your first npm package returning values, functions, and classes."
shorturls:
    share: https://dpgr.am/87d0a0c
    twitter: https://dpgr.am/7b35feb
    linkedin: https://dpgr.am/72dcd11
    reddit: https://dpgr.am/2731585
    facebook: https://dpgr.am/db18251
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453825/blog/build-npm-packages/ograph.png
---

If you're a JavaScript developer, you've almost certainly used npm before. The Node Package Manager is a registry that allows developers to package up code and share it using a common set of commands - most commonly `npm install package-name`. Our own Node.js SDK is available on npm under [@deepgram/sdk](https://www.npmjs.com/package/@deepgram/sdk).

In this post, we'll create, publish, install, and use our first npm package. We'll then extend the functionality and end up with a more complex package that will let users query [The Open Movie Database](http://www.omdbapi.com).

Our final class-based package code can be found at <a href="https://github.com/deepgram-devs/npm-package">https://github.com/deepgram-devs/npm-package</a>.

## Before We Start

You will need:

*   Node.js installed on your machine - [download it here](https://nodejs.org/en/).
*   An npm account - [get one here](https://www.npmjs.com/signup).
*   An Open Movie Database API Key - [get one here](http://www.omdbapi.com/apikey.aspx) and be sure to use the verification link in the email with the key.

Create a new directory and open it in your code editor of choice.

## Creating an npm Package

Create a `package.json` file and populate it with minimal information required for an npm package:

```json
{
  "name": "@username/first-package",
  "version": "0.0.1"
}
```

The `name` must be unique across all of npm. To aid this, and help list packages with the same author, we can 'scope' packages to a user or organization. Replace `username` with your npm username to scope it. Some other notes about choosing your package name:

*   You cannot use uppercase letters.
*   You can only use URL-safe characters.
*   The maximum character length is 214.

The `version` should follow [semantic versioning](https://docs.npmjs.com/about-semantic-versioning), which is `NUMBER.NUMBER.NUMBER`. Every time we publish an update to our package, the version must be different from previously-published versions.

If not specified, the default file for your project will be `index.js`. Create a file and open it in your code editor:

```js
const value = 42
module.exports = value
```

This is a viable, though not terribly useful, npm package - it will always return a fixed value of `42`. The `module.exports` value can be anything - a fixed value, an object with multiple values, a function, a class, or any other data.

While fixed values may have limited use, they are useful in some contexts - the `profane-words` package I used in my [automatic profanity censoring](https://developers.deepgram.com/blog/2021/11/censor-profanity-nodejs/) post used a fixed array value to include a list of almost 3000 profanities instead of me needing to include them a more manual way.

## Publishing an npm Package

Open your terminal and navigate to your project directory and run the following commands:

```bash
npm login
npm publish --access=public
```

You have now published your first ever npm package - congratulations! If you go to <a href="https://www.npmjs.com/package/@username/first-package">https://www.npmjs.com/package/@username/first-package</a> you should see it. Reminder: if ever you are publishing again, you must increase the version in `package.json`,or you will get an error.

## Testing Your npm Package

Want to use your package locally to test it before publishing? Create a new file in your repository called `scratchpad.js` (you can call it anything - this is what I use) and open it on your code editor:

```js
const firstPackage = require('./index.js')
console.log(firstPackage) // 42
```

Run this file with `node scratchpad.js`.

If you want to exclude this file from being downloaded by users when they install your package, add it to a `.gitignore` file. Create one now and enter the filenames you want to be excluded (one per line):

    scratchpad.js

## Using Your npm Package

Create a brand new directory outside of this project. Navigate to it in a terminal, and type:

    npm install @username/first-package

Create an `index.js` file to require and use the package:

```js
const firstPackage = require('@username/first-package')
console.log(firstPackage) // 42
```

## Exporting Functions

As mentioned above, you can export any JavaScript value or datatype in your package. Replace the content of your `index.js` with the following:

```js
const value = 42

function sum(a, b) {
  return a + b
}

module.exports = {
  value,
  sum,
}
```

This is exporting an object with both the fixed value and the function. Update `scratchpad.js` and then rerun it:

```js
const firstPackage = require('./index.js')
console.log(firstPackage) // { value: 42, sum: [Function: sum] }
console.log(firstPackage.sum(1, 3)) // 4
```

You may have seen object destructing when requiring packages. Here's how it looks:

```js
const { sum } = require('./index.js')
console.log(sum(1, 3)) // 4
```

This takes the `sum` property in the object returned by our package and makes it available as a top-level variable called `sum`. This is what we do with our [Deepgram Node.js SDK](https://developers.deepgram.com/sdks-tools/sdks/node-sdk/):

```js
const { Deepgram } = require('@deepgram/sdk')
```

## Exporting Classes

Exporting one or more functions is quite a common behavior of npm packages, as is exporting a class. Here's what interacting with a class-based package looks like courtesy of the Deepgram Node.js SDK:

```js
const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram('DEEPGRAM_API_KEY')
deepgram.transcription
  .preRecorded({
    url: 'https://static.deepgram.com/examples/nasa-spacewalk-interview.wav',
  })
  .then((transcript) => {
    console.log(transcript)
  })
```

Let's create our own exported class for the Open Movie Database. First, install the `axios` package that will help us make API calls. In your terminal:

    npm install axios

Once you do this take a look at `package.json` - the `dependencies` section will be created for you. When users install your package, it will also install axios for them, along with axios' dependencies, and so on.

Replace the whole content of `index.js` with the following:

```js
const axios = require('axios')

class OpenMovieDatabase {
  constructor(apiKey) {
    this.apiKey = apiKey
  }

  async get(parameters) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'http://www.omdbapi.com',
        params: { apikey: this.apiKey, ...parameters },
      })
      return data
    } catch (error) {
      console.log(error.response)
      throw error.response.data
    }
  }
}

module.exports = OpenMovieDatabase
```

Replace `scratchpad.js` with the following:

```js
const OpenMovieDatabase = require('./index')
const omdb = new OpenMovieDatabase('YOUR_KEY_HERE')

omdb
  .get({ t: 'Inside Out' })
  .then((results) => {
    console.log({ results })
  })
  .catch((error) => {
    console.log({ error })
  })
```

Once the package is required, an instance needs to be created. The `constructor` we define expects an `apiKey` which is then stored in that instance. When using the package, we only need to provide the key once and then use `omdb.get()` as many times as we want without needing to provide our key as it is automatically included in the API request `params`. Nifty, right?

Before publishing this again, be sure to add `node_modules` to a new line in your `.gitignore`.

## Wrapping Up

This package lacks lots of features I would expect as a user:

*   More robust error handling.
*   Checking required parameters are provided and providing useful errors if not.
*   Splitting the 'get' and 'search' requests.

Our final class-based package code can be found at <a href="https://github.com/deepgram-devs/npm-package">https://github.com/deepgram-devs/npm-package</a>.

When putting together my first npm packages, I found most tutorials stopped at the most basic examples or assumed lots of additional knowledge. I hope this has provided more helpful context and helped you get your first package published. If it did - please let us know what you've published so we can celebrate together - we are [@DeepgramDevs](https://twitter.com/DeepgramDevs) on Twitter or <a href="mailto:devrel@deepgram.com">devrel@deepgram.com</a> via email. 

        