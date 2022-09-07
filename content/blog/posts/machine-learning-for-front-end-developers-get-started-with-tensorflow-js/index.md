---
title: "Machine Learning for Front-end Developers: Get Started with TensorFlow.js"
description: Machine Learning used to be just for Data Scientists and Python
  developers, but with TensorFlow.js, front-end developers have more access than
  ever.
date: 2022-09-05T18:54:17.740Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1660592694/blog/2022/08/getting-started-with-tensorflowjs/tfjs-for-beginners-blog%402x.jpg
authors:
  - bekah-hawrot-weigel
category: tutorial
tags:
  - machine-learning
  - tensorflowjs
shorturls:
  share: https://dpgr.am/4a1060f
  twitter: https://dpgr.am/15b7a58
  linkedin: https://dpgr.am/fc88674
  reddit: https://dpgr.am/ecae480
  facebook: https://dpgr.am/4ff184b
---

Machine Learning (ML) has historically belonged to Python engineers, Data Scientists, and mathematicians, with frontend developers having very usage and support. In fact, JavaScript ranks 5th of all languages used for Machine Learning, coming in at around 7%. With access to microphones and webcams in the browser, we're just getting started with exploring a whole new landscape of what we can do as front-end developers. This is where TensorFlow.js comes in.

TensorFlow.js (TFJS) is a JavaScript framework that we can use to create machine learning models for desktop, web, mobile, and cloud, giving us access to images, video, audio, and text models. We can use this technology for augmented reality, sound recognition, sentiment analysis, web page optimization, accessibility, and more.

## Exploring TFJS Models

### [Pre-trained TensorFlow.js models repository](https://github.com/tensorflow/tfjs-models/)

This repository contains ten different ready-to-use models, categorizes each of them by type of model (images, audio, text, and general utilities), shares the details of each, gives installation directions, links to the source code, and provides a demo for most of the models.

### [TensorFlow Hub](https://tfhub.dev/)

TensorFlow Hub is a centralized site with hundreds of trained models. It includes model formats for TF.js, TFLite, and Coral, so be sure to select `TF.js` to explore other models that are available for TFJS. Within the hub, the name of the model, the type of the model, description, and dataset used are listed. If we click on an entry, we'll see more information, including an overview, how to implement the model, how to fine-tune a model--if that's an option--and more.

## Getting Started with TFJS

There are three different ways we can use TFJS; each requiring a little more knowledge and understanding of how the models work.

### Import an Existing, Pre-trained Model

We can take a TensorFlow or Keras model that's been trained offline and load it into the browser. If we want to explore existing models and their demos, we can check out the [TFJS models repository](https://github.com/tensorflow/tfjs-models/).

When we take an existing model, we can get it working immediately with a couple of lines of JavaScript. We can get this up and running using a script tag or installing with `npm` or `yarn`.

#### MobileNet

We're going to implement the MobileNet model, using the code they've give us in the [MobileNet repository](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet)

> MobileNets are small, low-latency, low-power models parameterized to meet the resource  constraints of a variety of use cases. They can be built upon for classification, detection, embeddings and segmentation similar to how other popular large scale models, such as Inception, are used.
> We're going to use the model to classify an image. We can see a working codesandbox [here](https://codesandbox.io/s/mobilenet-e1gmmh) or checkout the code below:

```js
<!DOCTYPE html>
<html>
  <head>
  </head>
    <body>
      <h1>Check the console for our predictions!</h1>
    </body>
  
    <!-- Load TensorFlow.js. This is required to use MobileNet. -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.1"> </script>
    <!-- Load the MobileNet model. -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0"> </script>
    <!-- Replace this with your image. Make sure CORS settings allow reading the image! -->
    <img id="img" src="cat.jpg" style="width:200px;height:300px">
    <!-- Place your code in the script tag below. You can also use an external .js file -->
    <script>
      // Notice there is no 'import' statement. 'mobilenet' and 'tf' is
      // available on the index-page because of the script tag above.
      const img = document.getElementById('img');
      // Load the model.
      mobilenet.load().then(model => {
        // Classify the image.
        model.classify(img).then(predictions => {
          console.log({predictions});
        });
      });
    </script>
</html>

```

Notice in the console, we're given three predictions for the image. And all of this is put together in fewer than 30 lines of code.

![](https://res.cloudinary.com/deepgram/image/upload/v1660235143/blog/2022/08/getting-started-with-tensorflowjs/predictions.png)

### Retrain an Imported Machine Learning Model

We can do more than use existing models straight of out the box. We can use transfer learning to continue to train a model (known as a base model) that was trained offline with data we collect from the browser. Transfer learning is when we take a pre-trained model and re-use it for a related task. For example, we might take a model trained with image detection. It already knows how to identify features of objects like shapes. We might take this model and further train it to identify a specific object. This gives us a speedy way to train that doesn't require us to invest the full amount of time training and developing a new model.

### Create a New Model

Once we understand models and layers, we can progress to creating our own model. Using the Layers API or the Core API, we can create our own model. This allows us to have control over defining what our model will do, how we train our model, and the output when we run it. It's generally recommended to use the Layers API first since it's modeled after the Keras API.

## Should we use TensorFlow.js for Deep Learning?

Depending on your use case, TFJS can be an incredible valuable tool that allows for browser interaction, including using the webcam and the microphone. There are use cases that create more interactive experiences for education, healthcare support, accessibility advancements, and opportunities for just plain fun.

As front-end developers, we're often kept out of conversations about ML, data science, etc. Tensorflow.js gives us an opportunity to help shape a developing field, access tools we haven't before, and expand the horizon of the frontend experience.  Having a variety of voices in conversations that impact, well, everyone is critical. Diversity of thought, input into development, and different backgrounds can help to not only push the industry forward, but to redefine what we can do in the frontend landscape. Tech that's belonged to Data Scientists can be part of what we do and allow us to keep pushing boundaries on what we're creating and the problems we're solving.

To get started with TensorFlow.js, you can find a tutorial [here](https://www.tensorflow.org/js/tutorials). If you want to see a TFJS + Deepgram Project, you can check out [Add Live Speech Bubbles to YouTube Videos with Autobubble](https://blog.deepgram.com/autobubble-youtube-speech-bubbles/), and, as always, you can hit us up with any questions on Twitter [@deepgramAI](https://twitter.com/DeepgramAI).

