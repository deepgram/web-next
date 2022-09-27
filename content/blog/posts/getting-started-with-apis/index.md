---
title: "Getting Started with APIs"
description: "Learn about what APIs are, how to use them, and make your first requests."
date: 2021-11-01
cover: https://res.cloudinary.com/deepgram/image/upload/v1635446349/blog/2021/11/getting-started-with-apis/getting-started-with-apis-blog%402x.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
    - nodejs
    - python
seo:
    title: "Getting Started with APIs"
    description: "Learn about what APIs are, how to use them, and make your first requests."
shorturls:
    share: https://dpgr.am/048ee6b
    twitter: https://dpgr.am/69ee488
    linkedin: https://dpgr.am/f3db1d3
    reddit: https://dpgr.am/bbd4f04
    facebook: https://dpgr.am/af636fc
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453803/blog/getting-started-with-apis/ograph.png
---

When I first started building websites it took me a while to gain confidence with making my sites interactive, and even longer to start using APIs. In this post we'll cover the basics of APIs as if you've never heard of them before. We'll talk about some of the intricacies, make our first few requests, and look at what we may get back.

This is a blog post summary of a talk I gave at codebar Festival in March 2021. If you'd rather learn this in video form I've included it here.

<YouTube id="66xLBqosPog"></YouTube>

## What are APIs

APIs are a set of allowed rules that describe how developers can interact with a platform or service. They are often presented along with a set of documentation/references that help developers know what functionality is available, all of the options or variations they can request, and what the expected action should be as a result.

You can think about it like a restaurant menu - all of the dishes are shown along with any variations (fries or salad?) and a description of what you'll get if you order a specific item.

To give you an idea of the breadth of APIs available here are some I have used in the past:

*   The [TheAudioDB API](https://www.theaudiodb.com/api_guide.php) provides metadata and cover images for music - use it if you want to access or display information about music tracks.
*   Google Maps have a few APIs available - the [Google Maps Directions API](https://developers.google.com/maps/documentation/directions/overview) takes in two points and a transport method (walking, cycling, public transit) and provides step-by-step directions.
*   [Stripe](https://stripe.com/docs) is one of the go-to APIs for letting developers take payments from users. Chances are you've put your card information into a form which processed a payment through Stripe.
*   And, of course, there is Deepgram - which takes in audio files and returns accurate transcriptions using our AI Speech Recognition API (psst [go sign up here](https://console.deepgram.com)).

APIs are like lego blocks - they provide small pieces of functionality that developers like you can build on top of. Instead of needing to build lots of intricate functionality, you can delegate it out to others and focus on parts of your application that are special.

## Making Your First API Call

We are going to jump straight in and make an API call. Before we do - there are two pieces of information required in every request. The first is an **endpoint** (a URL) to access the API, and the second is the **method** which describes the type of request we are making. There are [a bunch](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) but five are particularly common:

*   GET requests retrieve data - often the default method
*   POST requests submits data to create a new entity
*   PUT and PATCH requests update data
*   DELETE requests delete data

Open up your terminal and let's make our first API request. We'll be using the [PokéAPI](https://pokeapi.co) which is a small free API used often for education use. Type the following command and hit enter:

```sh
curl https://pokeapi.co/api/v2/pokemon/castform
```

And you should be greeted with a large block of text containing information about this Pokémon.

## URL Parameters

Some APIs allow you to provide additional information in your request using URL Parameters. You have certainly already seen these when sharing links with your friends - they go at the end of a URL and look like this:

```
https://example.com/product?utm_param=123&src=abc&campaign=xyz
```
We indicate URL Parameters are starting with the `?`, and then they follow the format `item=value`. Where there is more than one we separate them with a `&`. Let's make a new request to the [Data USA API](https://datausa.io) in our terminal:

```sh
curl https://datausa.io/api/data?drilldowns=State&measures=Population
```

Here we are specifying two URL Parameters - the first is `drilldowns` with a value of `State`, and the second is `measures` with a value of `Population` to get the population by state in the USA. If you change the value of `drilldowns` to `County` you'll get different (and much bigger) data back. Try it!

## Including Data

So far we have only made GET requests, but often when making POST requests we actually need to send some data along. That could be new user account information, details of a message to send, or a post to add to a user's feed.

In this next example we will send some data in JSON format as well as setting a method and endpoint. Go ahead and run this, and we'll discuss it after:

```sh
curl -H 'Content-Type: application/json' -d '{"userId": 1, "title": "sample title", "body": "sample body"}' -X POST https://jsonplaceholder.typicode.com/posts
```

cURL sends data in a format which is not JSON by default, so the first portion `-H 'Content-Type: application/json'` is known as a header and provides more information with the request. In this case, we are telling our the API to interpret our data as JSON. We'll be talking more about headers soon, but know each one begins with `-H` when making API requests from the terminal.

In the next section, we are detailing the data which we are going to send in this request. `-d '{"userId": 1, "title": "sample title", "body": "sample body"}'` is a JSON object with three properties - a `userId`, a `title`, and a `body`. Data begins with `-d` when using the terminal for API requests.

Finally, `-X POST` specifies that we are using the POST method. If omitted, this would be a GET request (and you can't send data with a GET request).

## Headers

Headers provide extra information about our requests. We've already used one to specify that we are sending JSON, and a common use case for them is to provide authentication details so the API provider knows who is accessing information and can choose to allow/reject requests as a result.

When authenticating with an API, we often use an API Key/Token provided. Try it out:

1.  Create and login to [the Deepgram Console](https://console.deepgram.com)
2.  Create a project and an API key - any role is fine
3.  Take note of the key provided
4.  Run the following command in your terminal

```sh
curl -H 'Content-Type: application/json' -H 'Authorization: Token REPLACE_WITH_YOUR_KEY' -d '{"url": "https://static.deepgram.com/examples/interview_speech-analytics.wav"}' -X POST https://api.deepgram.com/v1/listen
```

Deepgram will know this request is yours because the API Key is unique to your project. The request would fail if this key was invalid.

## When Should I Use..?

It's perfectly understandable if you're confused about the usage of URL parameters, data, and headers. Unfortunately there's no single rule and you need to refer to API documentation or reference to see what they expect. However, headers almost always carry authentication, passed data goes in data, and URL parameters are used to provide options.

Take some time to get comfortable looking at API References - [here is the reference to the Deepgram API](https://developers.deepgram.com/api-reference/deepgram-api) to begin honing this skill. You'll see all the components we spoke about - authentication details which ask for a header, and then each API having a method, endpoint, query parameters, and required data.

## Understanding Responses

After making our API request, we will receive a response which comprises multiple parts including data in a structured format (JSON in this case) and a HTTP Status Code. The HTTP Status Code gives an indication to whether the request was successful.

*   Anything in the 200-299 range is good.
*   400-499 means you made an error (you're probably used to seeing 404 errors which means 'not found').
*   500-599 means it was a fault on the side of the API provider.

You can find more information about HTTP Status Codes in the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). Specific important 400-level codes for API-usage are:

*   400 Bad Request - the request you have provided is not formatted correctly
*   401 Unauthorized - some kind of authentication issue (more on authentication coming up)
*   403 Forbidden - you don't have access to this content or functionality
*   429 Too Many Requests - most APIs have a limit on how often you can use them in a given timeframe and you have exceeded it

## API Requests in the Browser

To make API requests in the browser, you can use the built-in `fetch()` function. Create a HTML file with just a `<script>` tag. Inside it type:

```js
// GET
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json))

// POST
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
})
  .then((response) => response.json())
  .then((json) => console.log(json))
```

## API Requests in Node.js

There are lots of libraries that make using APIs easier. If you install `node-fetch` you can use identical syntax to the browser. After running `npm install node-fetch`, create and open an `index.js` file:

```js
const fetch = require('node-fetch')

// GET
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json))

// POST
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
})
  .then((response) => response.json())
  .then((json) => console.log(json))
```

## API Requests in Python

```py
import requests

# GET
response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
print(response.text)

# POST
myData = { 'title': 'foo', 'body': 'bar', 'userId': 1 }
response2 = requests.post('https://jsonplaceholder.typicode.com/posts', data = myData)
print(response2.text)
```

## Glossary

Hopefully you feel more confident in using APIs. Before we end I want to share a few more terms with you that are common with APIs:

*   **Rate Limit** - the maximum number of calls you can make in a given period. Often it's something like "100 calls per minute". If you exceed it you may get a HTTP 429.
*   **SDK** - a Software Development Kit makes working with an API easier. Ultimately, it create API calls for you based on easier-to-write code. If an SDK is avialble - it's advisable to use it.
*   **GraphQL** - this is a type of API that requires request data to be formatted in a certain way. It returns only the data you specifically request.
*   **JWT** - JSON Web Tokens are a special type of token often used to authenticate with APIs. They contain more information, and are only valid for a short time. You often generate one with code and then immediately use it.
*   **OAuth** - this is an authentication flow that requires users to give access to your application. This is what the "Login with Google" buttons do.

## Wrapping Up

I hope you found this valuable - it's the kind of summary I would have really appreciated as I started out. If you have further questions because things don't make sense, or you want to expand on topics mentioned here or elsewhere - please reach out to us on Twitter (we are [@DeepgramDevs](https://twitter.com/DeepgramDevs)).

        