---
title: "Upgrade your freeCodeCamp Project"
description: "As early-career developers looking for your first or second job, upgrading your projects can help you to stand out from other candidates and grow as a new developer. To find out how to upgrade a common project, read more here."
date: 2022-03-31
cover: https://res.cloudinary.com/deepgram/image/upload/v1648719341/blog/2022/03/freecodecamp-quote-generator-upgrade/fcc-cover.jpg
authors:
    - bekah-hawrot-weigel
category: tutorial
tags:
    - javascript
    - beginner
    - freecodecamp
seo:
    title: "Upgrade your freeCodeCamp Project"
    description: "As early-career developers looking for your first or second job, upgrading your projects can help you to stand out from other candidates and grow as a new developer. To find out how to upgrade a common project, read more here."
shorturls:
    share: https://dpgr.am/521c26c
    twitter: https://dpgr.am/ab44d6f
    linkedin: https://dpgr.am/fc5dec0
    reddit: https://dpgr.am/3f6054d
    facebook: https://dpgr.am/c47de40
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454028/blog/freecodecamp-quote-generator-upgrade/ograph.png
---

I spend a lot of time with folks learning to code and early-career developers. One of the things I’ve noticed is that it’s increasingly hard to find your first job. One of the biggest comments I’ve heard from hiring managers is that so many applicants for junior positions are showcasing the same projects. As I was brainstorming some use cases for Deepgram, I wanted to work on something that could help out these folks looking for their first development job. That’s how I decided to upgrade one of the [freeCodeCamp Front End Development Libraries Projects](https://www.freecodecamp.org/learn/front-end-development-libraries/#front-end-development-libraries-projects). In this post, we’re going to take the [Quote Generator Project](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine) up a notch and use [Deepgram’s Node SDK](https://developers.deepgram.com/sdks-tools/sdks/node-sdk/) to fetch a quote.

## Prepping our Project

<panel type="info" title="freeCodeCamp Side Note">

For this tutorial, we’re assuming that you have completed the project. If you haven’t, you can find the <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine">directions for the quote generator here</a> or take a look at <a href="https://codepen.io/freeCodeCamp/pen/qRZeGZ">freeCodeCamp’s demo project</a> to get you started.

</panel>

*   Download Node.js if you haven’t already - get it [here](https://nodejs.org/en/)
*   Create a Deepgram API Key with an admin or owner role - [get it here](https://console.deepgram.com/signup?jump=keys)
*   Create a file called .env and add `DG_KEY='your-api-key'`.

<panel type="info" title="Notes on API keys">

*   Your API key should be a string of letters and numbers that you wrap in single quotes.
*   .env files contain sensitive values. We’ll use a .gitignore file to ensure we don’t expose our information, but if you’re sharing your code with others, don’t include your sensitive information.

</panel>

### Where we started

Before we get into upgrading our freeCodeCamp projects, let’s take a look at the core functionality of our quote generator. When we open our project, there’s a quote to start. When we click the New Quote button, our quote machine fetches a new quote and author and displays that in the quote box. When we click the Twitter button, it takes the quote we see on the screen and creates a new tweet.

![gif of clicking the new quote button](https://res.cloudinary.com/deepgram/image/upload/v1648826507/blog/2022/03/freecodecamp-quote-generator-upgrade/new-quote.gif)

Here’s the basic functionality that allows us to create the new quote:

```js
function getRandomQuote() {
  fetch(
    'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  )
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('#text').innerText =
        data.quotes[`${random(99)}`].quote
      document.querySelector('#author').innerText =
        data.quotes[`${random(99)}`].author
    })
}

newQuoteButton.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)}, 0.4)`
  document.body.style.backgroundColor = rndCol

  getRandomQuote()
})
```

As you can see, the project fetches quotes from a JSON file of quotes and authors on GitHub. You can find the one I used [here](https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json).

As you work on this project, it’s useful to have some understanding of APIs and JSON.

<panel type="info" title="Resource Break!">

<li><a href="https://developers.deepgram.com/blog/2021/11/getting-started-with-apis/">Getting Started with APIs</a>  by <a href="https://developers.deepgram.com/blog/authors/kevinlewis/">Kevin Lewis</a></li>
<li><a href="https://developers.deepgram.com/blog/2021/11/getting-started-with-json/">Getting Started with JSON</a>  by <a href="https://developers.deepgram.com/blog/authors/sandrarodgers/">Sandra Rodgers</a></li>
</panel>

### Overview

The way this looks isn’t going to change, *but* how we’re getting the quotes will. Instead of fetching from the gist, we will fetch a random movie from [this gist](https://gist.github.com/BekahHW/394d81b484f264b0c8b23c0e177f8588), and then transcribe that using Deepgram’s Node SDK.

Rather than using CodePen, I will be working in a public repository. We’ll need a package.json file for this project to install some packages to help us get the data we need.

#### File Structure

We’ll be using a public folder for all the files that impact the front end of our project. We’ll only be actively working on a total of two files, with the assumption that you’ll keep your styles the same.

*   `app.js` will contain our front-end logic with our click events, which will be in the public folder. This is the file that controls rendering the quote and author on the screen.
*   `server.js` is where we’ll work with our server-side logic. We’ll use `node-fetch`--more on this later–to get the data we need from the JSON of movie quotes. We’ll also use Deepgram’s Node SDK to transcribe the quotes and get them on the screen.

Here’s what our file structure is going to look like:

![image of the file structure](https://res.cloudinary.com/deepgram/image/upload/v1648826506/blog/2022/03/freecodecamp-quote-generator-upgrade/folder.png)

## Getting Started

Once you have your project in a repository, cd into your project from your terminal and follow the following steps:

```bash
npm i @deepgram/sdk dotenv express
npm i -g gitignore && gitignore node
```

These are all the packages we’ll need to get us up and running in this project.

#### Package breakdown

*   [dotenv](https://github.com/motdotla/dotenv#readme) - “Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env”
*   [gitignore node and gitignore node](https://github.com/msfeldstein/gitignore) - “​​Automatically fetch github's excellent .gitignore files for any of your new projects”
*   [express](https://expressjs.com/) - Node framework that connects your server-side to your client-side.

<panel type="info" title="Another Resource Break!">

If you’re getting started with learning express like I was, here are a couple of resources to get you started:

*   Sandra’s post [Sending Audio Files to Your Express.js Server](https://developers.deepgram.com/blog/2021/11/sending-audio-files-to-expressjs-server/) can help you better understand express.
*   [Express/Node Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

</panel>

## Updating Your Project with Deepgram

Now we’re ready to upgrade your freeCodeCamp Quote Generator. We’ll start in the `server.js` file. We need to require the packages we just installed to ensure we can use them. At the top of your file add the following:

```js
require('dotenv').config()
const express = require('express')
const fetch = require('node-fetch')
const app = express()
const { Deepgram } = require('@deepgram/sdk')
```

Next, we need to connect our `app.js` file to our `server.js` file. Below the previous code, add the following lines of code:

```js
app.use(express.static('public'))
const deepgram = new Deepgram(process.env.DG_KEY)
```

The first line in that block allows us to serve static files to our Express app. Because we have ‘public’ in there, our app has access to the files in our public folder. If you want a more thorough explanation, you can check out [this Mastering JS tutorial](https://masteringjs.io/tutorials/express/app-use-static).

The second line creates a new instance of Deepgram using our API key that we added to our `.env` file. Because we’ve added the dotenv packages, we have access to that key when we add the `process.env` before the variable name for our API key.

### Accessing the Quote - Logic

Next up, we will add the logic that allows us to access the gist of movie quote data. This is where we’ll also be using [node-fetch](https://github.com/node-fetch/node-fetch), which we’ve named “fetch” in this project.

We’re going to put all of our logic in an async function. With async functions, we know we’ll have to wait for a task, but our application can continue to be responsive while waiting. This is a fairly complex concept, so don’t worry if you don’t fully grasp it right now. You can check out [mdn’s Introduction to asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing) for more information.

Let’s start with this:

```js
async function getTranscript() {}
```

Within this space, we’re going to add:

*   A function that allows us to randomize our quotes
*   Logic to get the wav file and the speaker (although we’re referring to them as “author” in this post).

Just after the first curly brace, we’re going to add our random function with this code:

```js
async function getTranscript() {
  function random(number) {
    return Math.floor(Math.random() * (number + 1))
  }
}
```

Now, we want to make sure that we get a random file and the author associated with that quote. To do that, add the following code underneath our getTranscript function:

```js
const randomNumber = random(6)
const response = await fetch(
  'https://gist.githubusercontent.com/BekahHW/394d81b484f264b0c8b23c0e177f8588/raw/df7bba8dde4f96487dd843977a07991aba4ca511/quotes.json'
)

const data = await response.json()
const audioUrl = data[randomNumber].quote
const author = data[randomNumber].author
```

Our randomNumber variable ensures that the file we’re passing to Deepgram (coming up next!) is associated with the author of that quote.

With `response` and `data`, we’re accessing the gist of movie quotes.

If we console.log(data), we’ll get this plus the rest of the array of objects:

![image of an array of objects with wav files and authors](https://res.cloudinary.com/deepgram/image/upload/v1648826505/blog/2022/03/freecodecamp-quote-generator-upgrade/json.png)

When we console.log(author), we’ll see one of those author’s names as we’re accessing one item in the array.

We’ve made huge progress! Now we’re ready to use Deepgram to upgrade this freeCodeCamp project!

Below the code we’ve just written, but within the getTranscript function, we’re going to add what we need to get the transcript from the wav file:

```js
const quoteTranscription = await deepgram.transcription
  .preRecorded({ url: audioUrl }, { punctuate: true, language: 'en-US' })
  .then((transcription) => transcription.results.channels[0].alternatives[0])

return {
  author: author,
  transcription: quoteTranscription,
}
```

A couple of things with that code block:
We’re using pre-recorded audio, which you can find more about in our [Deepgram docs on pre-recorded transcription](https://developers.deepgram.com/sdks-tools/sdks/node-sdk/pre-recorded-transcription/).

1.  You need to pass the link to the audio file. In this case, we do it with `url: audioUrl`.
    We get access to the transcription of the wav file with `transcription.results.channels[0].alternatives[0]`
2.  We’re returning both the author and the transcription because we need to send them to our app.js file to render in our quote-box.

Now we’re ready to connect all that work in `server.js` to `app.js`. After that code and outside of the function, add this code block:

```js
app.get('/transcribe', (req, res) => {
  getTranscript()
    .then((transcriptObj) => res.send(transcriptObj))
    .catch((err) => {
      console.log(err)
    })
})
```

This is where we’re using express. The /express path should lead you to JSON data that we’re accessing. We’re calling getTranscript, so we have access to the author and transcription values. To send that to our `app.js` file, we use res.send. Right now, we’re not sending it there because we haven’t connected those paths. Before we do that, let’s make sure express is listening to the server. Add this code to the very bottom of the file:

```js
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})
```

Now we’re ready to connect our work. We’re almost done!

#### `app.js`

In our `app.js` file, we have an event listener attached to our new quote button. Previously when we clicked this, it would fetch from the quote gist. We’re going to replace that with this code:

```js
fetch('/transcribe')
  .then((r) => r.json())
  .then((res) => {
    document.querySelector('#text').innerText = res.transcription.transcript
    document.querySelector('#author').innerText = res.author
  })
```

We’re connecting the path in `server.js` when we fetch(\`/transcribe’). Then we’re taking that transcript object, getting it in a usable format, and then sending the text and author divs according to that data.

We should be ready!

Go to your terminal and run `node server.js`. You should be able to navigate to `http://localhost:3000/` and see your app. Go ahead and click the New Quote button and see the magic happen.

Whew. That’s a pretty cool update. If you want to check out the code in its entirety, you can navigate to our [freeCodeCamp-Quote-Generator repo](https://github.com/deepgram-devs/freeCodeCamp-Quote-Generator) or to get you up and running faster, check out our [freeCodeCamp Quote Gen with Deepgram Stackblitz](https://stackblitz.com/edit/fcc-dg0). When you open this project it will automatically fork it for you. You just need to add your own `.env`. Then, in the terminal, run `node server.js` and see it live!

This is a project I hope to build on. We’ve been doing Twitter Spaces at Deepgram, and once we have some edited, I’d love to use the quote generator to show random quotes and allow you to select the full recording if you’re interested in the quote. Be on the lookout :eyes: for that future post.

If you have any questions or want a walkthrough of the how to build a freeCodeCamp project with the Deepgram update, hit us up on [@DeepgramDevs](https://twitter.com/DeepgramDevs) on Twitter.

        