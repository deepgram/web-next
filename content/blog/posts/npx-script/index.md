---
title: "Creating an npx Command"
description: "Build, locally test, and publish npx command scripts"
date: 2022-01-06
cover: https://res.cloudinary.com/deepgram/image/upload/v1640023176/blog/2022/01/npx-script/building-an-npm-package%402x.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
    - nodejs
seo:
    title: "Creating an npx Command"
    description: "Build, locally test, and publish npx command scripts"
shorturls:
    share: https://dpgr.am/5d3010e
    twitter: https://dpgr.am/cf21007
    linkedin: https://dpgr.am/78c8c7d
    reddit: https://dpgr.am/31193f0
    facebook: https://dpgr.am/a2ddc9d
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453846/blog/npx-script/ograph.png
---

<Alert type="info">This post is effectively part 2 on building and publishing npm packages. If you haven't read the first post, you can do so [here](https://sweet-pie-c52a63-blog.netlify.app/build-npm-packages/).</Alert>

Node Package Manager (npm) allows JavaScript developers to manage and include packages in their projects. Bundled with npm is an additional utility - `npx` - which can be used to **run** Node.js scripts hosted in npm packages or at any other URL. Even if not already installed, it will download the package into a cache to execute the files.

Scripts with npx are often used to:

*   Scaffold applications (`create-react-app` and `create-nuxt-app`)
*   Run common long-living tooling (`nodemon`, `tailwindcss`, and `ngrok`)
*   Make you smile (`workin-hard`, `cowsay`)

[We showed you how to create an npm package in a previous blog post.](https://sweet-pie-c52a63-blog.netlify.app/build-npm-packages) In this post, we'll extend on that sample project and build an npx command to interact with our package that queried [The Open Movie Database](http://www.omdbapi.com).

The final project code is available on the [npx branch of our npm-package repository](https://github.com/deepgram-devs/npm-package/tree/npx).

## Before We Start

You will need:

*   Node.js installed on your machine - [download it here](https://nodejs.org/en/).
*   An npm account - [get one here](https://www.npmjs.com/signup).
*   An Open Movie Database API Key - [get one here](http://www.omdbapi.com/apikey.aspx) and be sure to use the verification link in the email with the key.

You will also need to clone the previous project, open the new directory in your code editor of choice, and install the dependencies:

```bash
git clone https://github.com/deepgram-devs/npm-package
cd npm-package
npm install
```

## Making an Executable Script

There are four things you need to do to create an executable script:

1.  Create a file specifically for this logic - commonly `bin.js`.
2.  Specify the executable file in `package.json`.
3.  Start the `bin.js` file with a 'shebang'.
4.  Ensure the code in the file will run whenever the file is executed (not behind a function).

Create a `bin.js` file in your project, open `package.json`, and add a new `bin` property:

```json
{
  "name": "@username/first-package",
  "version": "0.0.3",
  "dependencies": {
    "axios": "^0.24.0"
  },
  "bin": "./bin.js"
}
```

Once the location of your executable file has been specified, it's time to create and populate the executable. Open `bin.js` in your code editor, make the first line a Node shebang, and then create a basic script that will run when the file is executed:

```js
#!/usr/bin/env node

console.log('Hello world!')
```

The shebang tells the machine which interpreter to use when running this file - Node is specified here.

Time to test it! Open your terminal, navigate to the project directory, type `npx .`, and you should see *Hello world!* printed.

## Handling Arguments

Command-Line Interfaces (CLIs) often accept or require additional information when being run - these are known as arguments. All of the arguments in a command can be accessed with `process.args` - try updating the `bin.js` file:

```js
#!/usr/bin/env node

console.log(process.args)
```

Run it with `npx . hello world` and you should see something like this:

```js
;[
  '/Users/kevin/.nvm/versions/node/v16.13.0/bin/node',
  '/Users/kevin/.npm/_npx/0b61241d7c17bcbb/node_modules/.bin/first-package',
  'hello',
  'world',
]
```

Every space-separated string is represented - the first two represent your `node` installation and `first-package`. Then, `hello` and `world` are included.

This is great if you know exactly which order arguments will be passed, but it isn't always the case. If you need more flexible access to arguments, you can use a package called [`yargs`](https://www.npmjs.com/package/yargs). Install it from your terminal with `npm install yargs` and update your `bin.js` file:

```js
#!/usr/bin/env node

const yargs = require('yargs')

console.log(yargs.argv)
```

Then run the following command:

```bash
npx . --capitalize --phrase "Hello World" extra args
```

The result should look like this:

```js
{
  capitalize: true,
  phrase: 'Hello World',
  _: ['extra', 'args']
}
```

This allows you to check for named argument existence and values, as well as non-hyphenated options inside of your `bin.js` file.

## Executing Logic From Main Package

So far, this has all been quite abstract. This section will show how to access the main package features and execute them from your CLI.

As a reminder, the main package code in `index.js` exports a class that expects an `apiKey` value when initialized. It has one member method - `get(parameters)` - that takes in an object with properties with which to call The Open Movie Database API.

So, how do you get an API Key from the user? There are several approaches:

1.  Require it as an argument
2.  Require it as an environment variable on the target machine
3.  Require the user to run an 'init' command which saves the values to a file on the machine, and then use that file's value when making calls

In this tutorial, the project will take the first approach for brevity, but you may consider the others in your future packages. Update `bin.js`:

```js
#!/usr/bin/env node

const yargs = require('yargs')
const OpenMovieDatabase = require('./index')

const omdb = new OpenMovieDatabase(yargs.argv.key)

if (yargs.argv.title) {
  omdb.get({ t: yargs.argv.title }).then((results) => {
    console.log(results)
  })
}

if (yargs.argv.search) {
  omdb.get({ s: yargs.argv.search }).then((results) => {
    console.log(results.Search)
  })
}
```

Try the following commands:

```bash
npx . --key=your_api_key --title "Zombieland"
npx . --key=your_api_key --search "Spiderman"
```

You'll notice a friendlier interface via this CLI than the main API here - instead of needing to know that the parameters as `t` or `s`, you allow the user to provide the `title` or `search` arguments.

## Validating Command Inputs

For this CLI to work, the user **must** provide a `key` argument and **either** a `title` argument or a `search` argument. You will also want to restrict the user from providing both as that will lead to two logs which doesn't look great. Thanks to `yargs`, you already know if arguments have been provided, so some boolean logic is all that's needed.

Just above where `omdb` is declared, add the following checks:

```js
if (!yargs.argv.key) {
  return console.log('You must provide a key argument with an OMDb API Key')
}

if (!yargs.argv.title && !yargs.argv.search) {
  return console.log(
    'You must provide either a title or search argument - you have provided neither'
  )
}

if (yargs.argv.title && yargs.argv.search) {
  return console.log(
    'You must provide either a title or search argument - not both'
  )
}
```

Try now to omit `key`, omit `title` and `search`, or provide both `title` and `search`.

## Publishing & Using Package

Like publishing any updated to npm packages, you must increment the version in `package.json` and then run `npm publish` from your terminal.

Once published, you can run the final package with `npx @username/first-package --key=your_api_key --title "Zombieland"`.

Want to try mine? Use `npx @phazonoverload/first-package --key=your_api_key --title "Zombieland"`.

## Wrapping Up

Like creating npm packages, making them executable with npx was something I struggled to find clear and correct learning material for. I hope this helps fill a gap and gets your project built!

The final project code is available on the [npx branch of our npm-package repository](https://github.com/deepgram-devs/npm-package/tree/npx), and if you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).

        