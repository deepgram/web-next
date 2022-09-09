---
title: "Understanding Webhooks"
description: "Let's talk about why, when, and how webhooks are used in development."
date: 2022-02-28
cover: https://res.cloudinary.com/deepgram/image/upload/v1645796672/blog/2022/02/understanding-webhooks/Understanding-Webhooks%402x.jpg
authors:
    - nicole-ohanian
category: tutorial
tags:
    - webhooks
    - beginner
seo:
    title: "Understanding Webhooks"
    description: "Let's talk about why, when, and how webhooks are used in development."
shorturls:
    share: https://dpgr.am/037383e
    twitter: https://dpgr.am/43d85fb
    linkedin: https://dpgr.am/f3c8896
    reddit: https://dpgr.am/f8ec009
    facebook: https://dpgr.am/c2d2619
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454005/blog/understanding-webhooks/ograph.png
---

When using a web application, have you tried to change the information being displayed on the web page you're on? Even if you don't realize it you've probably done so, many times, through your computer's use of client-server communication.

For example, you click on something on a web application's UI on your machine (the client), which then sends an HTTP request to the application's server. The server then sends a response back to your device, which then triggers a change in the UI of the web application.

![A digram shows a web browser with four posts numbered 111 to 108. A button on the top of the list reads "Load new posts" with a cursor on it. An arrow labelled "fetch new data" points at an updated browser window with a list numbered 113 to 109.](https://res.cloudinary.com/deepgram/image/upload/v1645796695/blog/2022/02/understanding-webhooks/update-ui.png)

However, what happens when the web application’s server wants to trigger an event based on something that’s happening on a remote server instead of a user action? That’s where webhooks come in!

## What Is a Webhook?

A webhook is a 'reverse HTTP request' between servers rather than a client and a server. A remote server sends an HTTP POST request to a public URL on your application’s server every time an event occurs on their end so that you may trigger an event in your own application based on that update.

## Exploring Some Examples

Now that you have an idea of what a webhook is, let's look at a couple of sample use cases to solidify your understanding.

### Triggering Actions On Successful Payment

![When a payment form is submitted, the server submits a payment request to Stripe. Stripe them sends an immediate repsonse, and triggers some work before responding a second time with a success webhook. The server then sends an SMS message.](https://res.cloudinary.com/deepgram/image/upload/v1645796801/blog/2022/02/understanding-webhooks/stripe-flow.png)

You have an e-commerce website with a third-party payment processing integration. The process of completing  may be instantly successful but it may also be delayed or end in an error. Since payment processing is done by an external service, you will not have direct access to the payment process happening on their end. Yet, what if you wanted an event triggered on your application after a customer's successful purchase?

A customer purchases on your website, which uses Stripe for payment processing. When a purchase is completed, you send a thank you text. Stripe supports webhooks, to alert us when a purchase has been successful. You provide a URL (that you control) to Stripe, and it receives details about the purchase instantly. Your application then takes the information received and sends an SMS message in response.

### Waiting For a Transcript

When requesting a transcript from Deepgram, you can wait for it to be generated, but this can take a few more seconds than you might be able to wait for larger files. You can access Deepgram's webhook by including the callback feature in your request, which allows the user to redirect the transcription results to the URL of your choice.

Your request for a transcript can be answered immediately, allowing you to receive a response immediately. At the same time, Deepgram works in the background before sending the results are sent to your server through the provided URL.

![A server submits a transcription request to Deepgram. Deepgram sends an immediate repsonse, and triggers some work before responding a second time with a success webhook.](https://res.cloudinary.com/deepgram/image/upload/v1645796695/blog/2022/02/understanding-webhooks/deepgram.png)

Because you control the application that receives a webhook payload, you can build any additional business logic to run once you have data. You might:

*   Send an email to your client to let them know that their transcript is complete with the results.
*   Translate the transcript provided to your server to be displayed on your application’s UI.
*   Send an SMS text to the user's phone with a brief preview of the results.

## Webhooks With Node.js

A webhook consumer is just a route handler. Instead of receiving requests from a user action, it will be triggered by the service emitting webhooks. Here’s an example with Express:

```js
// Require, initialize, and configure Express
const express = require('express');
const app = express();
app.use(express.json());

// This is the route handler our webhook will POST data to
app.post('/hook', (req, res) => {

    /*
        You could do anything here, such as:
        Add data to a database
        Trigger an email or SMS
        Automatically schedule an event on your application's UI
    */

	console.log(req.body); // See the data
	res.status(200).end(); // Return empty response to server
})

// Start express server
app.listen(3000);
```

Since webhooks create a POST request to your application, you will need to create a POST route handler in your application. Assuming our application's URL is https://myDIYstore.com, our webhook consumer’s URL will be https://myDIYstore.com/hook.

## Webhooks vs. Polling

In the examples above, we see that the remote server is sending data to our application using webhooks. However, an alternative to this method is polling from your application's server to the remote server of choice.

Polling means your server will periodically and continuously request to check if there has been an update on the remote server. If there is one, it comes back with the requested information, and your application can stop checking.

The main difference between using webhooks and polling is that webhooks send a request from a remote server to your server as soon as an event occurs. With polling, a request is being made by your server periodically until it detects an update in the remote server.

To take advantage of webhooks, the third-party service needs to support them. Where they aren't available, you'll need to poll for updates. While this method can be more resource-intensive for applications, at times, it may be your only option (or even a more fitting one considering the context, but that's outside of the scope of this article). See below for an example of what polling would look like on an Express server.

```js
// Require cross-fetch library to bring fetch() to Node.js
const fetch = require('cross-fetch');

// Require and initialize Express
const express = require('express');
const app = express();

// Creating a function that once invoked, will poll repeatedly.
async function checkStatus() {

  // Asynchronously making an HTTP GET request to our external API
  let response = await fetch("external-api-example-here").then(r => r.json());

  if (!response.data.status == 'completed') {
    // If status not completed, rerun this function after 2 seconds
    await new Promise(r => setTimeout(r, 2000));
    await checkStatus();
  } else {
    // Criteria was met, continue with logic.
  }
}

// Invoke the function you have just written
checkStatus();

// Start express server
app.listen(3000);
```

In this example, we are continuously querying our chosen third-party API every 2 seconds until the criteria are met. Once the criteria is met, we proceed with our business logic, and the polling stops. As you can see, this can be a resource-intensive method with many requests with no change in data. However, it may be the most appropriate (or only) option, so understanding both polling and webhooks is valuable.

Webhooks are a wonderfully convenient and intuitive tool once you get the hang of it! But, it is important to remember that webhooks need to be supported by the service you are requesting the data from to work! Some platforms that use them include Deepgram, Twitter, Discord, and Stripe.

If you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).

        