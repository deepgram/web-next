import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../entry.mjs';
import Slugger from 'github-slugger';
import '@astrojs/netlify/netlify-functions.js';
import 'preact';
import 'preact-render-to-string';
import 'vue';
import 'vue/server-renderer';
import 'html-escaper';
import 'node-html-parser';
import 'axios';
/* empty css                           *//* empty css                           *//* empty css                           */import '@storyblok/js';
/* empty css                           *//* empty css                          */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           */import 'camelcase';
import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [{ "depth": 2, "slug": "breaking-down-tasks", "text": "Breaking down tasks" }, { "depth": 2, "slug": "think-whats-my-data-set", "text": "Think: What\u2019s my data set?" }, { "depth": 2, "slug": "what-is-gradient-descent", "text": "What is gradient descent?" }, { "depth": 2, "slug": "designing-a-simple-system", "text": "Designing a simple system" }, { "depth": 2, "slug": "the-real-world-has-kinks-and-curves", "text": "The real world has kinks and curves" }, { "depth": 2, "slug": "using-an-off-the-shelf-system", "text": "Using an off-the-shelf system" }, { "depth": 2, "slug": "how-do-you-define-what-your-error-is", "text": "How do you define what your error is?" }, { "depth": 2, "slug": "how-far-away-is-the-output-from-the-model-compared-to-what-the-actual-truth-is", "text": "How far away is the output from the model compared to what the actual truth is?" }, { "depth": 2, "slug": "maintaining-a-deep-neural-network", "text": "Maintaining a deep neural network" }, { "depth": 2, "slug": "whats-the-key-point", "text": "What\u2019s the key point?" }], "source": `\r
<iframe src="https://www.youtube.com/embed/L3qudM5xCv0" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

**Scott:** Welcome to the AI Show. Today we're asking the question: How do you use a neural network in your business?

**Susan:** Well let's just talk about what people think of neural networks, simple ones. There's sort of the classic one, the very first thing you ever build when you're learning how to deal with this stuff, the MNIST digit predictory. You're familiar with this?

**Scott:** Yes, MNIST.

**Susan:** It's like Modified National Institute of Standards and Technology.

**Scott:** Handwritten digits. 28 by 28 pixels. Gray scale.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976776/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/MnistExamples.png)

**Susan:** Gray scale, basically they're handed to you on a silver platter and centered. Absolutely useless without a massive ecosystem around it to feed those digits into you in the perfect way.

**Scott:** What do you mean?

**Susan:** Well, you don't just take a picture of a letter and suddenly everything works.

**Scott:** Not that simple, right?

**Susan:** It's definitely not that simple.\r
\r
*   How do you take something like a task of digit recognition?\r
*   How do you break it down?\r
*   How can you use deep learning to actually make an effective, useful model?\r
*   How do you create a tool that you can use in some meaningful way?\r
\r
## Breaking down tasks\r
\r
**Scott:** In the real world, you have a task and you want to do something with a neural network. In this case it's like, I have a camera and I want to take a picture of something and I want it to figure out what is written on some letter. You have handwritten digits, just the digits - zero, one, two, three, four, five, six, seven, eight, nine - and tell me what the digits are. Simple task, right? A human can tell you right off the bat, they can just read them right off.

**Susan:** This is sort of the difference between accuracy in the machine learning world and utility. You can have the most accurate classifier in the world but it's completely useless because you can't feed it that data in the real world.\r
\r
**Scott:** You want to send letters to the right place at the post office or something and you want it to be mechanized. But, people have handwritten everything, so hey, a hard problem, you used to do it with humans, now you want to do it with a machine.

**Susan:** That's the core idea for today, how do we actually create a machine learning model or use neural networks in a real world situation there? We've got a great example there, digital recognition on a letter or something like that-however in the news they're talking about [license plate scanners](https://en.wikipedia.org/wiki/Automatic_number-plate_recognition). What would it take to actually build something like that? How do you actually take an idea and use deep learning in there? What are your big ideas of what you should be thinking about?\r
\r
## Think: What's my data set?\r
\r
**Scott:** You have to think: "What's my data set?" That data set has to be at least kind of close to the task that you're trying to accomplish. Is it pictures of handwritten digits that are centered and perfect or is it pictures of license plates on cars that are driving down roads at oblique angles with lots of light on them or smoke? If you have those pictures fine, but do you have them labeled by a human and are they properly labeled? Are they centered or not, are they all blown out and all white, are they too dark, do they have a big glare in them, et cetera?

**Susan:** Just that first step we've talked about data so many times.

**Scott:** Very important.

**Susan:** It's important not only just to have data, but data that represents the production environment that you're going to be in. It's all well and good to have, say for instance, license plate data. But, if it's not taken in a meaningful way, if it's staged with professional cameras, is that going to be as good of a dataset as actually taking footage from the real world and from the equipment that I expect to use and dealing with it that way? Not the version that it is pristine, but the version that's already gone through whatever Kodak's have had their hands on.

**Scott:** The kind that has been compressed.

**Susan:** It's been compressed, it's been mangled. By the way, why is it whenever you see video like that it's just absolutely the worst?

**Scott:** It's always crappy, like it's been shot by a potato.

**Susan:** It's like Big Foot. Magically, whenever Big Foot shows up, it's on the worst video equipment ever, but you got to think you're about to take pictures of Big Foot and you need to recognize you're going to have that quality.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976777/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/bigfoot-roger-patterson-1_h-1.jpg)

**Scott:** But, you also have to be careful. Don't try to boil the ocean. You don't have to get every single angle. Is it snowing, is it raining, is it whatever? Okay, get verticalized, get one thing working pretty well first and then you'll start to see the problems crop up. But, maybe 80% or 90% of your solution is already there and then you tackle those problems later. You don't have to do everything all at once.

**Susan:** Yeah. That's also another key thing here is be prepared for: iterations on everything.

**Scott:** Iterate.

**Susan:** Iterate.

**Scott:** ... iterate, iterate, iterate.

**Susan:** Get your first hour of data just so you understand formats and how you might be processing and dealing with it before you spend tens of thousands of hours and umpteen millions dollars collecting data that you then find out is not quite right. That's really heartbreaking.

**Scott:** Yeah, you can't just guess the answer from the outset, it's too hard.

**Susan:** It's [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent), right? You assess, take a step, assess, take a step, assess, take a step, it's pretty classic.\r
\r
## What is gradient descent?\r
\r
**Scott:** What do you mean by gradient descent?

**Susan:** It's the basic algorithm that a huge chunk of machine learning uses to train neural networks. Just like I said, I was giving the example there for assessing, taking a step, assessing, taking a step. The assessment stage is using what's called the gradient and that points in a direction that might be a good way to go for your [weights](https://ml-cheatsheet.readthedocs.io/en/latest/nn_concepts.html).

![Alt](https://cdn-images-1.medium.com/max/1600/1*f9a162GhpMbiTVTAua_lLQ.png)

**Scott:** As an example, if you're walking around in a hilly terrain and it's your job to find water you might want to start walking downhill. What do you do? You look around at your feet and you think, "Oh, well the hill is sloping that way, I should go that way." Does that necessarily mean that water's going to be that way? Not necessarily. If you keep going downhill, if there's water around, it's going to be around there. That gets into the discussion of maybe you're in a local optimum, meaning a local minimum in this case and you might need to go over the next ridge and then find an even lower hole somewhere. Still, this is gradient descent. You're looking at the slope and you're moving along that path.

**Susan:** Gradient descent then applies to machine learning, but it also applies to life. It's a great process/technique that really works well. We were talking about gathering data and the idea behind it is: don't jump in whole hog right away.\r
\r
When you're designing a system that's going to be useful, you're really actually thinking: how am I going to use this thing. You've got to think about the data you're going to feed it and the data it needs to be fed in order to predicate some answer that you can then use to do something with.\r
\r
Just, very briefly, think about the MNIST style digit classifier there, data inputs are a 28 by 28 gray scale, centered.

**Scott:** The pixels are white and black, and gray.

**Susan:** How do you build that? You've got a whole ecosystem surrounding that, which it's kind to find where the digits are at, it's got to parse them out and do all these different things. When you're thinking about a production environment: I've got these cameras, how am I going to get to the classifier itself or to the network itself, the data into the shape and form that it was trained on in order to make the prediction that I'm going to then use back out there. If you find that the task of doing that is a lot harder than the model itself, you're probably right. The real world is not well normalized.

**Scott:** If you get your data set right, you get your tools right, you pick your model architecture correct, you get your input and output set, correctly the training's actually pretty easy, you just say, "Go".

**Susan** Encapsulate the problem, that's really what we're talking about here.

**Scott:** Define the problem well.

**Susan:** You need to define that problem. Going back to the iterative idea here, you'll find that you started collecting some data and then you started designing inputs, and outputs, and a model behind it and you realize maybe those inputs, and outputs, and that model can't work with that data so you need to adjust.\r
\r
You go through this iterative system, but you always have to have an eye on the idea: "I can't do anything that the real world doesn't support."\r
\r
That's what a lot of people lose sight of when they're learning how to use these tools the first time.

**Scott:** It has to work for real in a real setting.

**Susan:** Yeah, they're given these pristine data sets that have well encapsulated some simple problem, or even a complex problem. I've personally spent two weeks working on one dataset just to whip it into shape to be usable.

**It's a really hard task to get the real world to be bent and shaped into something that's usable by your particular model.** Keep that in mind when you're thinking about a usable model.\r
\r
## Designing a simple system\r
\r
**Scott:** Let's go from beginning to end for a simple system. You have a dash cam in your car and you want it to detect license plate numbers and display them on a display in your car. So, you're like a police officer or something, right?

**Susan:** Officer Susan.

**Scott:** Officer Susan reporting for duty. You're driving around in your car, you have a dash cam and you want to get a text or display on your screen. Using all the license plate numbers around you, how do you build that system? Okay, you have the camera, then what?

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976778/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/car-collage.jpg)

The camera what is it doing? It's looking at an optical signal in the world. As a lens it's taking in light and it's digitizing it, so that's really important. You have to be able to digitize the thing that you're actually trying to measure. It's pretty hard to measure people's thoughts.

**Susan:** Like you said, you've got to digitize that, you got to be able to put it in some sort of portable processing system if you're doing this real time.

**Scott:** So maybe it's hooked up to a USB. That dash cam is hooked up to a USB cable that goes to a computer and that computer is just saving an image, 30 of them every second, just saving all of them and just building up tons of data.

**Susan:** Relevant to the the question about inputs and outputs, we'll just take a base one here. Are you going to try to figure out something over time or you treat each image individually?

**Scott:** You have 100 pictures of the same license plate. Do you want 100 notifications of that license plate or just 1?

**Susan:** The image classification world has gone light years, just massive leaps forward since the original work on MNIST and what everybody's familiar with, making a simple multi-layer network to recognize digits. In general, you're going to have to find some way of taking that image that you've digitized which you've been able to feed into some engineering solution that takes a picture n seconds or as fast as it can be processed and then looks for the next one. It takes all that, feeds it in to something that's going to probably normalize the image for light and do some techniques for basic image processing to take care of a whole lot of stuff.

**Scott:** Try to make it not too dark, not too light.

**Susan:** The more you can normalize your data, the less your neural network is going to have to work, which is a great thing because the accuracy is going to go up there.\r
\r
**Scott:** Sure, but you have a camera and it's got a pretty big view, and the license plate could be anywhere inside.

**Susan:** You probably have to go into something that's going to detect where license plates are at.

**Scott:** You probably have two systems.

**Susan:** At least.

**Scott:** One that's a license plate detector. It just says, "I think a license plate is here" but that's looking at the entire image. It's looking for the whole thing and then saying, "Oh, I think a license plate is here". Then you have another one that says, "I'm going to snip out only that section and then I'm going to try and read the digits".

**Susan:** It's going to scale it next. It's going to snip out, scale it. You're going to make certain assumptions, because you know what license plates look like, about how to scale it. It's actually probably a nice problem because of that.

**Scott:** A fun problem.

**Susan:** Then finally, you can send it off to your classifier after you've scaled, and sliced, and diced. Now you've got something that might be able to output possible answers that you then display to the person driving. Hopefully they're not texting while they're doing it.

**Scott:** To build the data set for that, if you're starting out it's like, I want to build a license plate reader for that dash cam but I have no data. What do you start doing, strapping cameras to the front of cars and driving around, right? Then you send it off to crowd source the data labeling or you do it yourself and you sit down and look at images, and you draw a box around the license plates. There's the box around the license plates and you use those boxes, the pixel numbers for those boxes, to say in here, "There was a license plate." That's to get the data to build your first model. That just tells you where the license plate is. Once you've gone through and made all those boxes, now those are just images that are for your next data set. Then you go in and say, "Can I read these or not," or "Can a person read them or not?" Then, type in what that license plate is, the numbers or the letters. Now you actually have a labeled data set at that point and that's how you train the models that we're talking about. Identify where the license plate is, then also what is it, what are the numbers.

**Susan:** Keep in mind, this is all a very simplified version of this problem.

**Scott:** We don't have to make it more complicated though. This is a simplified version and it's already really complicated.\r
\r
## The real world has kinks and curves\r
\r
**Susan:** This is a real world use case. The real world is going to throw all sorts of kinks and curves at you. For instance, having multiple cars. You start detecting multiple license plates. What happens when a motorcycle splits lanes right next to you? What are you going to look at there? Those kinds of things, shadows hitting you, those people that put the shields over their license plates to make him hard to see, which, I don't know the legality of that.

**Scott:** A typical system that would identify either where a license plate is or what the numbers are. That would be just a typical [CNN network](https://en.wikipedia.org/wiki/Convolutional_neural_network), a convolutional neural network. These work really well, but those things have been done to death. Many academic papers written about them. You can figure out how deep should it be, how wide should it be, which kernels should I use, all these different settings. You just go download one like Pytorch, TensorFlow, and there it is for you. Now, it might not be trained for exactly what your task is, but you don't have to pick the model architecture and you don't have to go through that whole design process to figure out what's going to work or not. You can pretty much take it off the shelf and hit train, and maybe adjust a few parameters. But, you spent an hour, five hours on that section, maybe a day, and then you spent two months on the other stuff.

**Susan:** That's a great point because there's a lot off the shelf stuff that didn't exist before, especially in the image recognition world. If you're playing in that world, I don't get a good chance to go back there too often, but every time I look there's just more and more amazing tools, especially when it comes to anything on the road. For obvious reasons due to the [autonomous driving revolution](https://www.iotforall.com/iot-and-autonomous-vehicles/) that's happening. Those tools are just getting a tremendous amount of attention and there's a lot of great work that's out there. If you're thinking about building some of these things look for off-the-shelf solutions first.

**Scott:** There's won't be an end to end, everything you need to do, but there will be parts of it that you can save a considerable amount of time.\r
\r
## Using an off-the-shelf system\r
\r
**Susan:** If you go with some off-the-shelf system, that might dictate some hardware that you don't have access to. This model here is using these tools and these tools you either have to delve into them or figure out how to build something that can mimic them in some way, shape, or form. That becomes a real concern, especially for something in the real world where you don't have a lot of processing power available to do this task.

**This comes back to the difference between accuracy and usability. If you have to have a rack of servers sitting in a car to be able to do the task, that's probably not usable, even if it's accurate.**

**Scott:** Maybe a first proof of concept, but this isn't going to be a real product that you ship.

**Susan:** Driving around with all the fans whirring behind you.

**Scott:** With $100,000 worth of computers in the back of your car.

**Susan:** It's great, I can read those license plates now, although probably don't need that much compute for that task.

**Scott:** We talked about data, super important, we talked about inputs and outputs, loss function.\r
\r
## How do you define what your error is?\r
\r
**Susan:** This is really determining more the type of problem you're doing. When we think about a loss function, what we're talking about is the thing that takes truth versus prediction and says how close are they.

**Scott:** What's my error? How do I define what my error is?

**Susan:** That loss function has to be crafted in such a way that it can work with auto-differentiation, this ability to what we call [backpropagate](https://en.wikipedia.org/wiki/Backpropagation) the error all the way through the model if you're talking about deep neural networks.

**Scott:** What does that do though, this backpropagation?

**Susan:** When we talk about a model and model structure the structure is the physical way that the math is laid out. In other words, this equation leads to that equation, which leads to that equation. This is the layers. But, these layers, those equations, have a whole bunch of parameters. It's the simple slope formula y=mx+b.

**Scott:** Just numbers.

**Susan:** They're just numbers. If you can get those M and Bs just right then you can fit the curve.

**Scott:** And there's just millions of them though.

**Susan:** There's millions and millions and millions of them. Those things we call parameters.

**Scott:** So, all these dials in the network they need to be turned. ![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976779/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/knobs-1.jpg)

**Susan:** That's actually one of my favorite images is a person sitting in front of a switch board with 10,000 knobs between 0 and 11\\. Every single one of those knobs affects every other knob. You've got inputs over here and you've got outputs over there. If you could just twist those knobs right here to the right step-

**Scott:** There is a correct one that minimizes your error.

**Susan:** There is a great setting of them, but finding that out is hard. So what do you do? This is where back propagation, gradient descent and all these things come into play. You send something through that model and you let it make a guess.

**Scott:** Leave the settings where they are and let it just go.

**Susan:** You look at the outputs that came in there, and you look at the truth, and you have your loss function.

**Scott:** You know the answer to the input that you gave it.\r
\r
## How far away is the output from the model compared to what the actual truth is?\r
\r
**Susan:** You've got your loss function that's going to show you that. Now, from that loss function I can take that error and I can propagate it backwards through that network.

**Scott:** Essentially there's a recipe that says if we have this error down here then what you need to do is go back and turn all of these knobs this much, but it's only a little bit, each of them. It doesn't say, "Put this knob in this position." It says, "Move this one a little bit that way, move that one a little bit that way."

**Susan:** In every single example that goes through that it's going to say, "Hey, the knob should have been here" and "The knob's going to be there." When you've got a bunch of these examples, you take the average of a bunch of examples at once, this is what we call a batch, and now the average says, "In general, this knob should have gone over here." You do this a whole lot and eventually you get the settings for those knobs.

**Scott:** You don't do this once or 10 times, you do this millions of times.

**Susan:** In the end, it comes up with a great setting for those knobs and now the outputs are getting you pretty close to what you want.

**Scott:** At first there's a lot of movement, the knobs are moving all over the place and then there's slow refinement as the model starts to get trained.

**Susan:** There is the occasional time where it trips over and a whole bunch of them start going off into their local optimum.

**Scott:** Yeah because they all affect each one of them. It has to make up for that change. That's generally backpropagation.\r
\r
One of the key skills is coming up with 1001 ways of thinking of that. The more ways you start thinking about how this works, the better you understand intuitively what's going on. That can help you design these things in the future.\r
\r
**Scott:** Constraints help a lot with this:\r
\r
*   How much money do you have?\r
*   What computing resources do you have?\r
*   What talent do you have?\r
\r
You can go on many, many goose chases here, a lot of rabbit holes. You could spend the next 15 years working on a problem and never come up with something that's actually valuable. There's still many good things that you're learning along the way.\r
\r
You have to learn to cut off certain things and be like, "Good enough, good enough, good enough". That's kind of the way that machine learning is now at least. You have to have some restraint in order to get a real product out the door.\r
\r
**Susan:** We've talked a bit about designing something, but I think a lot of what people don't realize is that not only is building of them a challenge, but the world isn't static. Maintaining a deep neural network is actually a really big challenge.\r
\r
## Maintaining a deep neural network\r
\r
**Susan:** Even just consider the license plate problem: every single year there's 100s of new license plates. Someone goes right to their state representatives and says, "Hey, I think the state should have this picture of my favorite cartoon character from 1983" and they get enough signatures and suddenly there's a brand new license plate in the world. Car designs change, vehicle designs change, all sorts of things change.

**Scott:** In California, the first digit kind of just incrementally goes up. There's a new first digit just because it's later on. It wasn't likely before, but now it's likely. The idea that you put all this time and effort and it stops, maybe there are problems out there like that, but it's pretty hard to imagine. We'll just go back to handwriting, the digit recognition. I can guarantee you that the average penmanship has changed considerably in the last 15-20 years. So, if you think that handwriting is stagnant, you're not banking on a good bet.\r
\r
You need to have some way of keeping your model, keeping your environment up-to-date, and swapping it out, and keeping it trained, and topped off.\r
\r
![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976779/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/Early_morning_cobwebs_-2859589264-.jpg)

_Keep the cobwebs off your model, keep your environment up-to-date._

**Scott:** Also presumably, you've got a model in production and now what do you do with your time? You try to make it better. Hey, I have some ideas, maybe I could do this or maybe I could do that and that will make it better. Great, but the other stuff is still operating over there. What if you make a small improvement? Okay, now there's this version change, history, and now you get into [version control of your models](https://www.lpalmieri.com/posts/2018-09-14-machine-learning-version-control-is-all-you-need/) which is not really a thing yet. People don't quite think in that way, but they certainly will have to think in that way in the future.

**Susan:** Well that's a really huge challenge. There's some decent articles and blog posts on this fairly recently, talking about version control and the machine learning world. That's just a big challenge. A lot of times you're talking about not just a few bytes of data here but 100s of megs, which doesn't sound like a lot but you version that 15 times a day and suddenly you're talking real data.

**Scott:** A gig or so. You're filling up your hard drive pretty fast.

**Susan:** The reproducibility of these things is a slight challenge because you can take the same exact model, structure, the same training data, the exact same training pipeline, and most of them incorporate randomness into them for very good reasons, [so you'll get a different result if you train a model twice](https://blog.dominodatalab.com/machine-learning-reproducibility-crisis/) with what you thought was all the same stuff. What does it really mean to version control something is a big challenge.

**Scott:** The question will have to be answered in the next few years probably.

**Susan:** Yeah, we're seeing the evolution of the industry.

**Scott:** This is a long timescale thing. Hey, we're at the beginning. It's like electricity in the 1900s or something, that's AI now.\r
\r
## What's the key point?\r
\r
**Susan:** The key point is you got to take real world data somehow. Don't get stuck in some training world.

**Scott:** You got to use real world data.

**Susan:** Real world data. If you can't take real world data, you don't have a useful model, useful structure. How about yourself?

**Scott:** Scott's key point is: try to get water through the pipes. Just get something working, anything working, and then you can iterate.

**Susan:** Iterate.

**Scott:** Iterate.

**Susan:** Iterate.

**Scott:** Then you can iterate. Hey, maybe it doesn't work very well at first, that happens for sure, but then you tweak some things, now it starts to work again. Is it all worth it to go through that?

**Susan:** Depends on the problem, depends on the money.

**Scott:** Some problems are too hard, just don't do it right now. Some problems are really easily solved with something you don't need to use a neural network for. But there's a region in between where it's like, yep, this makes a lot of sense.

**Susan:** If you can get 95% of the way with a simple tool, maybe you should be doing that first.\r
\r
**Scott:** Might keep doing that, unless it's something you make billions of dollars from then hey maybe we can do something with neural networks.\r
`, "html": '<iframe src="https://www.youtube.com/embed/L3qudM5xCv0" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p><strong>Scott:</strong> Welcome to the AI Show. Today we\u2019re asking the question: How do you use a neural network in your business?</p>\n<p><strong>Susan:</strong> Well let\u2019s just talk about what people think of neural networks, simple ones. There\u2019s sort of the classic one, the very first thing you ever build when you\u2019re learning how to deal with this stuff, the MNIST digit predictory. You\u2019re familiar with this?</p>\n<p><strong>Scott:</strong> Yes, MNIST.</p>\n<p><strong>Susan:</strong> It\u2019s like Modified National Institute of Standards and Technology.</p>\n<p><strong>Scott:</strong> Handwritten digits. 28 by 28 pixels. Gray scale.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976776/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/MnistExamples.png" alt="Alt"></p>\n<p><strong>Susan:</strong> Gray scale, basically they\u2019re handed to you on a silver platter and centered. Absolutely useless without a massive ecosystem around it to feed those digits into you in the perfect way.</p>\n<p><strong>Scott:</strong> What do you mean?</p>\n<p><strong>Susan:</strong> Well, you don\u2019t just take a picture of a letter and suddenly everything works.</p>\n<p><strong>Scott:</strong> Not that simple, right?</p>\n<p><strong>Susan:</strong> It\u2019s definitely not that simple.</p>\n<ul>\n<li>How do you take something like a task of digit recognition?</li>\n<li>How do you break it down?</li>\n<li>How can you use deep learning to actually make an effective, useful model?</li>\n<li>How do you create a tool that you can use in some meaningful way?</li>\n</ul>\n<h2 id="breaking-down-tasks">Breaking down tasks</h2>\n<p><strong>Scott:</strong> In the real world, you have a task and you want to do something with a neural network. In this case it\u2019s like, I have a camera and I want to take a picture of something and I want it to figure out what is written on some letter. You have handwritten digits, just the digits - zero, one, two, three, four, five, six, seven, eight, nine - and tell me what the digits are. Simple task, right? A human can tell you right off the bat, they can just read them right off.</p>\n<p><strong>Susan:</strong> This is sort of the difference between accuracy in the machine learning world and utility. You can have the most accurate classifier in the world but it\u2019s completely useless because you can\u2019t feed it that data in the real world.</p>\n<p><strong>Scott:</strong> You want to send letters to the right place at the post office or something and you want it to be mechanized. But, people have handwritten everything, so hey, a hard problem, you used to do it with humans, now you want to do it with a machine.</p>\n<p><strong>Susan:</strong> That\u2019s the core idea for today, how do we actually create a machine learning model or use neural networks in a real world situation there? We\u2019ve got a great example there, digital recognition on a letter or something like that-however in the news they\u2019re talking about <a href="https://en.wikipedia.org/wiki/Automatic_number-plate_recognition">license plate scanners</a>. What would it take to actually build something like that? How do you actually take an idea and use deep learning in there? What are your big ideas of what you should be thinking about?</p>\n<h2 id="think-whats-my-data-set">Think: What\u2019s my data set?</h2>\n<p><strong>Scott:</strong> You have to think: \u201CWhat\u2019s my data set?\u201D That data set has to be at least kind of close to the task that you\u2019re trying to accomplish. Is it pictures of handwritten digits that are centered and perfect or is it pictures of license plates on cars that are driving down roads at oblique angles with lots of light on them or smoke? If you have those pictures fine, but do you have them labeled by a human and are they properly labeled? Are they centered or not, are they all blown out and all white, are they too dark, do they have a big glare in them, et cetera?</p>\n<p><strong>Susan:</strong> Just that first step we\u2019ve talked about data so many times.</p>\n<p><strong>Scott:</strong> Very important.</p>\n<p><strong>Susan:</strong> It\u2019s important not only just to have data, but data that represents the production environment that you\u2019re going to be in. It\u2019s all well and good to have, say for instance, license plate data. But, if it\u2019s not taken in a meaningful way, if it\u2019s staged with professional cameras, is that going to be as good of a dataset as actually taking footage from the real world and from the equipment that I expect to use and dealing with it that way? Not the version that it is pristine, but the version that\u2019s already gone through whatever Kodak\u2019s have had their hands on.</p>\n<p><strong>Scott:</strong> The kind that has been compressed.</p>\n<p><strong>Susan:</strong> It\u2019s been compressed, it\u2019s been mangled. By the way, why is it whenever you see video like that it\u2019s just absolutely the worst?</p>\n<p><strong>Scott:</strong> It\u2019s always crappy, like it\u2019s been shot by a potato.</p>\n<p><strong>Susan:</strong> It\u2019s like Big Foot. Magically, whenever Big Foot shows up, it\u2019s on the worst video equipment ever, but you got to think you\u2019re about to take pictures of Big Foot and you need to recognize you\u2019re going to have that quality.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976777/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/bigfoot-roger-patterson-1_h-1.jpg" alt="Alt"></p>\n<p><strong>Scott:</strong> But, you also have to be careful. Don\u2019t try to boil the ocean. You don\u2019t have to get every single angle. Is it snowing, is it raining, is it whatever? Okay, get verticalized, get one thing working pretty well first and then you\u2019ll start to see the problems crop up. But, maybe 80% or 90% of your solution is already there and then you tackle those problems later. You don\u2019t have to do everything all at once.</p>\n<p><strong>Susan:</strong> Yeah. That\u2019s also another key thing here is be prepared for: iterations on everything.</p>\n<p><strong>Scott:</strong> Iterate.</p>\n<p><strong>Susan:</strong> Iterate.</p>\n<p><strong>Scott:</strong> \u2026 iterate, iterate, iterate.</p>\n<p><strong>Susan:</strong> Get your first hour of data just so you understand formats and how you might be processing and dealing with it before you spend tens of thousands of hours and umpteen millions dollars collecting data that you then find out is not quite right. That\u2019s really heartbreaking.</p>\n<p><strong>Scott:</strong> Yeah, you can\u2019t just guess the answer from the outset, it\u2019s too hard.</p>\n<p><strong>Susan:</strong> It\u2019s <a href="https://en.wikipedia.org/wiki/Gradient_descent">gradient descent</a>, right? You assess, take a step, assess, take a step, assess, take a step, it\u2019s pretty classic.</p>\n<h2 id="what-is-gradient-descent">What is gradient descent?</h2>\n<p><strong>Scott:</strong> What do you mean by gradient descent?</p>\n<p><strong>Susan:</strong> It\u2019s the basic algorithm that a huge chunk of machine learning uses to train neural networks. Just like I said, I was giving the example there for assessing, taking a step, assessing, taking a step. The assessment stage is using what\u2019s called the gradient and that points in a direction that might be a good way to go for your <a href="https://ml-cheatsheet.readthedocs.io/en/latest/nn_concepts.html">weights</a>.</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*f9a162GhpMbiTVTAua_lLQ.png" alt="Alt"></p>\n<p><strong>Scott:</strong> As an example, if you\u2019re walking around in a hilly terrain and it\u2019s your job to find water you might want to start walking downhill. What do you do? You look around at your feet and you think, \u201COh, well the hill is sloping that way, I should go that way.\u201D Does that necessarily mean that water\u2019s going to be that way? Not necessarily. If you keep going downhill, if there\u2019s water around, it\u2019s going to be around there. That gets into the discussion of maybe you\u2019re in a local optimum, meaning a local minimum in this case and you might need to go over the next ridge and then find an even lower hole somewhere. Still, this is gradient descent. You\u2019re looking at the slope and you\u2019re moving along that path.</p>\n<p><strong>Susan:</strong> Gradient descent then applies to machine learning, but it also applies to life. It\u2019s a great process/technique that really works well. We were talking about gathering data and the idea behind it is: don\u2019t jump in whole hog right away.</p>\n<p>When you\u2019re designing a system that\u2019s going to be useful, you\u2019re really actually thinking: how am I going to use this thing. You\u2019ve got to think about the data you\u2019re going to feed it and the data it needs to be fed in order to predicate some answer that you can then use to do something with.</p>\n<p>Just, very briefly, think about the MNIST style digit classifier there, data inputs are a 28 by 28 gray scale, centered.</p>\n<p><strong>Scott:</strong> The pixels are white and black, and gray.</p>\n<p><strong>Susan:</strong> How do you build that? You\u2019ve got a whole ecosystem surrounding that, which it\u2019s kind to find where the digits are at, it\u2019s got to parse them out and do all these different things. When you\u2019re thinking about a production environment: I\u2019ve got these cameras, how am I going to get to the classifier itself or to the network itself, the data into the shape and form that it was trained on in order to make the prediction that I\u2019m going to then use back out there. If you find that the task of doing that is a lot harder than the model itself, you\u2019re probably right. The real world is not well normalized.</p>\n<p><strong>Scott:</strong> If you get your data set right, you get your tools right, you pick your model architecture correct, you get your input and output set, correctly the training\u2019s actually pretty easy, you just say, \u201CGo\u201D.</p>\n<p><strong>Susan</strong> Encapsulate the problem, that\u2019s really what we\u2019re talking about here.</p>\n<p><strong>Scott:</strong> Define the problem well.</p>\n<p><strong>Susan:</strong> You need to define that problem. Going back to the iterative idea here, you\u2019ll find that you started collecting some data and then you started designing inputs, and outputs, and a model behind it and you realize maybe those inputs, and outputs, and that model can\u2019t work with that data so you need to adjust.</p>\n<p>You go through this iterative system, but you always have to have an eye on the idea: \u201CI can\u2019t do anything that the real world doesn\u2019t support.\u201D</p>\n<p>That\u2019s what a lot of people lose sight of when they\u2019re learning how to use these tools the first time.</p>\n<p><strong>Scott:</strong> It has to work for real in a real setting.</p>\n<p><strong>Susan:</strong> Yeah, they\u2019re given these pristine data sets that have well encapsulated some simple problem, or even a complex problem. I\u2019ve personally spent two weeks working on one dataset just to whip it into shape to be usable.</p>\n<p><strong>It\u2019s a really hard task to get the real world to be bent and shaped into something that\u2019s usable by your particular model.</strong> Keep that in mind when you\u2019re thinking about a usable model.</p>\n<h2 id="designing-a-simple-system">Designing a simple system</h2>\n<p><strong>Scott:</strong> Let\u2019s go from beginning to end for a simple system. You have a dash cam in your car and you want it to detect license plate numbers and display them on a display in your car. So, you\u2019re like a police officer or something, right?</p>\n<p><strong>Susan:</strong> Officer Susan.</p>\n<p><strong>Scott:</strong> Officer Susan reporting for duty. You\u2019re driving around in your car, you have a dash cam and you want to get a text or display on your screen. Using all the license plate numbers around you, how do you build that system? Okay, you have the camera, then what?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976778/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/car-collage.jpg" alt="Alt"></p>\n<p>The camera what is it doing? It\u2019s looking at an optical signal in the world. As a lens it\u2019s taking in light and it\u2019s digitizing it, so that\u2019s really important. You have to be able to digitize the thing that you\u2019re actually trying to measure. It\u2019s pretty hard to measure people\u2019s thoughts.</p>\n<p><strong>Susan:</strong> Like you said, you\u2019ve got to digitize that, you got to be able to put it in some sort of portable processing system if you\u2019re doing this real time.</p>\n<p><strong>Scott:</strong> So maybe it\u2019s hooked up to a USB. That dash cam is hooked up to a USB cable that goes to a computer and that computer is just saving an image, 30 of them every second, just saving all of them and just building up tons of data.</p>\n<p><strong>Susan:</strong> Relevant to the the question about inputs and outputs, we\u2019ll just take a base one here. Are you going to try to figure out something over time or you treat each image individually?</p>\n<p><strong>Scott:</strong> You have 100 pictures of the same license plate. Do you want 100 notifications of that license plate or just 1?</p>\n<p><strong>Susan:</strong> The image classification world has gone light years, just massive leaps forward since the original work on MNIST and what everybody\u2019s familiar with, making a simple multi-layer network to recognize digits. In general, you\u2019re going to have to find some way of taking that image that you\u2019ve digitized which you\u2019ve been able to feed into some engineering solution that takes a picture n seconds or as fast as it can be processed and then looks for the next one. It takes all that, feeds it in to something that\u2019s going to probably normalize the image for light and do some techniques for basic image processing to take care of a whole lot of stuff.</p>\n<p><strong>Scott:</strong> Try to make it not too dark, not too light.</p>\n<p><strong>Susan:</strong> The more you can normalize your data, the less your neural network is going to have to work, which is a great thing because the accuracy is going to go up there.</p>\n<p><strong>Scott:</strong> Sure, but you have a camera and it\u2019s got a pretty big view, and the license plate could be anywhere inside.</p>\n<p><strong>Susan:</strong> You probably have to go into something that\u2019s going to detect where license plates are at.</p>\n<p><strong>Scott:</strong> You probably have two systems.</p>\n<p><strong>Susan:</strong> At least.</p>\n<p><strong>Scott:</strong> One that\u2019s a license plate detector. It just says, \u201CI think a license plate is here\u201D but that\u2019s looking at the entire image. It\u2019s looking for the whole thing and then saying, \u201COh, I think a license plate is here\u201D. Then you have another one that says, \u201CI\u2019m going to snip out only that section and then I\u2019m going to try and read the digits\u201D.</p>\n<p><strong>Susan:</strong> It\u2019s going to scale it next. It\u2019s going to snip out, scale it. You\u2019re going to make certain assumptions, because you know what license plates look like, about how to scale it. It\u2019s actually probably a nice problem because of that.</p>\n<p><strong>Scott:</strong> A fun problem.</p>\n<p><strong>Susan:</strong> Then finally, you can send it off to your classifier after you\u2019ve scaled, and sliced, and diced. Now you\u2019ve got something that might be able to output possible answers that you then display to the person driving. Hopefully they\u2019re not texting while they\u2019re doing it.</p>\n<p><strong>Scott:</strong> To build the data set for that, if you\u2019re starting out it\u2019s like, I want to build a license plate reader for that dash cam but I have no data. What do you start doing, strapping cameras to the front of cars and driving around, right? Then you send it off to crowd source the data labeling or you do it yourself and you sit down and look at images, and you draw a box around the license plates. There\u2019s the box around the license plates and you use those boxes, the pixel numbers for those boxes, to say in here, \u201CThere was a license plate.\u201D That\u2019s to get the data to build your first model. That just tells you where the license plate is. Once you\u2019ve gone through and made all those boxes, now those are just images that are for your next data set. Then you go in and say, \u201CCan I read these or not,\u201D or \u201CCan a person read them or not?\u201D Then, type in what that license plate is, the numbers or the letters. Now you actually have a labeled data set at that point and that\u2019s how you train the models that we\u2019re talking about. Identify where the license plate is, then also what is it, what are the numbers.</p>\n<p><strong>Susan:</strong> Keep in mind, this is all a very simplified version of this problem.</p>\n<p><strong>Scott:</strong> We don\u2019t have to make it more complicated though. This is a simplified version and it\u2019s already really complicated.</p>\n<h2 id="the-real-world-has-kinks-and-curves">The real world has kinks and curves</h2>\n<p><strong>Susan:</strong> This is a real world use case. The real world is going to throw all sorts of kinks and curves at you. For instance, having multiple cars. You start detecting multiple license plates. What happens when a motorcycle splits lanes right next to you? What are you going to look at there? Those kinds of things, shadows hitting you, those people that put the shields over their license plates to make him hard to see, which, I don\u2019t know the legality of that.</p>\n<p><strong>Scott:</strong> A typical system that would identify either where a license plate is or what the numbers are. That would be just a typical <a href="https://en.wikipedia.org/wiki/Convolutional_neural_network">CNN network</a>, a convolutional neural network. These work really well, but those things have been done to death. Many academic papers written about them. You can figure out how deep should it be, how wide should it be, which kernels should I use, all these different settings. You just go download one like Pytorch, TensorFlow, and there it is for you. Now, it might not be trained for exactly what your task is, but you don\u2019t have to pick the model architecture and you don\u2019t have to go through that whole design process to figure out what\u2019s going to work or not. You can pretty much take it off the shelf and hit train, and maybe adjust a few parameters. But, you spent an hour, five hours on that section, maybe a day, and then you spent two months on the other stuff.</p>\n<p><strong>Susan:</strong> That\u2019s a great point because there\u2019s a lot off the shelf stuff that didn\u2019t exist before, especially in the image recognition world. If you\u2019re playing in that world, I don\u2019t get a good chance to go back there too often, but every time I look there\u2019s just more and more amazing tools, especially when it comes to anything on the road. For obvious reasons due to the <a href="https://www.iotforall.com/iot-and-autonomous-vehicles/">autonomous driving revolution</a> that\u2019s happening. Those tools are just getting a tremendous amount of attention and there\u2019s a lot of great work that\u2019s out there. If you\u2019re thinking about building some of these things look for off-the-shelf solutions first.</p>\n<p><strong>Scott:</strong> There\u2019s won\u2019t be an end to end, everything you need to do, but there will be parts of it that you can save a considerable amount of time.</p>\n<h2 id="using-an-off-the-shelf-system">Using an off-the-shelf system</h2>\n<p><strong>Susan:</strong> If you go with some off-the-shelf system, that might dictate some hardware that you don\u2019t have access to. This model here is using these tools and these tools you either have to delve into them or figure out how to build something that can mimic them in some way, shape, or form. That becomes a real concern, especially for something in the real world where you don\u2019t have a lot of processing power available to do this task.</p>\n<p><strong>This comes back to the difference between accuracy and usability. If you have to have a rack of servers sitting in a car to be able to do the task, that\u2019s probably not usable, even if it\u2019s accurate.</strong></p>\n<p><strong>Scott:</strong> Maybe a first proof of concept, but this isn\u2019t going to be a real product that you ship.</p>\n<p><strong>Susan:</strong> Driving around with all the fans whirring behind you.</p>\n<p><strong>Scott:</strong> With $100,000 worth of computers in the back of your car.</p>\n<p><strong>Susan:</strong> It\u2019s great, I can read those license plates now, although probably don\u2019t need that much compute for that task.</p>\n<p><strong>Scott:</strong> We talked about data, super important, we talked about inputs and outputs, loss function.</p>\n<h2 id="how-do-you-define-what-your-error-is">How do you define what your error is?</h2>\n<p><strong>Susan:</strong> This is really determining more the type of problem you\u2019re doing. When we think about a loss function, what we\u2019re talking about is the thing that takes truth versus prediction and says how close are they.</p>\n<p><strong>Scott:</strong> What\u2019s my error? How do I define what my error is?</p>\n<p><strong>Susan:</strong> That loss function has to be crafted in such a way that it can work with auto-differentiation, this ability to what we call <a href="https://en.wikipedia.org/wiki/Backpropagation">backpropagate</a> the error all the way through the model if you\u2019re talking about deep neural networks.</p>\n<p><strong>Scott:</strong> What does that do though, this backpropagation?</p>\n<p><strong>Susan:</strong> When we talk about a model and model structure the structure is the physical way that the math is laid out. In other words, this equation leads to that equation, which leads to that equation. This is the layers. But, these layers, those equations, have a whole bunch of parameters. It\u2019s the simple slope formula y=mx+b.</p>\n<p><strong>Scott:</strong> Just numbers.</p>\n<p><strong>Susan:</strong> They\u2019re just numbers. If you can get those M and Bs just right then you can fit the curve.</p>\n<p><strong>Scott:</strong> And there\u2019s just millions of them though.</p>\n<p><strong>Susan:</strong> There\u2019s millions and millions and millions of them. Those things we call parameters.</p>\n<p><strong>Scott:</strong> So, all these dials in the network they need to be turned. <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976779/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/knobs-1.jpg" alt="Alt"></p>\n<p><strong>Susan:</strong> That\u2019s actually one of my favorite images is a person sitting in front of a switch board with 10,000 knobs between 0 and 11. Every single one of those knobs affects every other knob. You\u2019ve got inputs over here and you\u2019ve got outputs over there. If you could just twist those knobs right here to the right step-</p>\n<p><strong>Scott:</strong> There is a correct one that minimizes your error.</p>\n<p><strong>Susan:</strong> There is a great setting of them, but finding that out is hard. So what do you do? This is where back propagation, gradient descent and all these things come into play. You send something through that model and you let it make a guess.</p>\n<p><strong>Scott:</strong> Leave the settings where they are and let it just go.</p>\n<p><strong>Susan:</strong> You look at the outputs that came in there, and you look at the truth, and you have your loss function.</p>\n<p><strong>Scott:</strong> You know the answer to the input that you gave it.</p>\n<h2 id="how-far-away-is-the-output-from-the-model-compared-to-what-the-actual-truth-is">How far away is the output from the model compared to what the actual truth is?</h2>\n<p><strong>Susan:</strong> You\u2019ve got your loss function that\u2019s going to show you that. Now, from that loss function I can take that error and I can propagate it backwards through that network.</p>\n<p><strong>Scott:</strong> Essentially there\u2019s a recipe that says if we have this error down here then what you need to do is go back and turn all of these knobs this much, but it\u2019s only a little bit, each of them. It doesn\u2019t say, \u201CPut this knob in this position.\u201D It says, \u201CMove this one a little bit that way, move that one a little bit that way.\u201D</p>\n<p><strong>Susan:</strong> In every single example that goes through that it\u2019s going to say, \u201CHey, the knob should have been here\u201D and \u201CThe knob\u2019s going to be there.\u201D When you\u2019ve got a bunch of these examples, you take the average of a bunch of examples at once, this is what we call a batch, and now the average says, \u201CIn general, this knob should have gone over here.\u201D You do this a whole lot and eventually you get the settings for those knobs.</p>\n<p><strong>Scott:</strong> You don\u2019t do this once or 10 times, you do this millions of times.</p>\n<p><strong>Susan:</strong> In the end, it comes up with a great setting for those knobs and now the outputs are getting you pretty close to what you want.</p>\n<p><strong>Scott:</strong> At first there\u2019s a lot of movement, the knobs are moving all over the place and then there\u2019s slow refinement as the model starts to get trained.</p>\n<p><strong>Susan:</strong> There is the occasional time where it trips over and a whole bunch of them start going off into their local optimum.</p>\n<p><strong>Scott:</strong> Yeah because they all affect each one of them. It has to make up for that change. That\u2019s generally backpropagation.</p>\n<p>One of the key skills is coming up with 1001 ways of thinking of that. The more ways you start thinking about how this works, the better you understand intuitively what\u2019s going on. That can help you design these things in the future.</p>\n<p><strong>Scott:</strong> Constraints help a lot with this:</p>\n<ul>\n<li>How much money do you have?</li>\n<li>What computing resources do you have?</li>\n<li>What talent do you have?</li>\n</ul>\n<p>You can go on many, many goose chases here, a lot of rabbit holes. You could spend the next 15 years working on a problem and never come up with something that\u2019s actually valuable. There\u2019s still many good things that you\u2019re learning along the way.</p>\n<p>You have to learn to cut off certain things and be like, \u201CGood enough, good enough, good enough\u201D. That\u2019s kind of the way that machine learning is now at least. You have to have some restraint in order to get a real product out the door.</p>\n<p><strong>Susan:</strong> We\u2019ve talked a bit about designing something, but I think a lot of what people don\u2019t realize is that not only is building of them a challenge, but the world isn\u2019t static. Maintaining a deep neural network is actually a really big challenge.</p>\n<h2 id="maintaining-a-deep-neural-network">Maintaining a deep neural network</h2>\n<p><strong>Susan:</strong> Even just consider the license plate problem: every single year there\u2019s 100s of new license plates. Someone goes right to their state representatives and says, \u201CHey, I think the state should have this picture of my favorite cartoon character from 1983\u201D and they get enough signatures and suddenly there\u2019s a brand new license plate in the world. Car designs change, vehicle designs change, all sorts of things change.</p>\n<p><strong>Scott:</strong> In California, the first digit kind of just incrementally goes up. There\u2019s a new first digit just because it\u2019s later on. It wasn\u2019t likely before, but now it\u2019s likely. The idea that you put all this time and effort and it stops, maybe there are problems out there like that, but it\u2019s pretty hard to imagine. We\u2019ll just go back to handwriting, the digit recognition. I can guarantee you that the average penmanship has changed considerably in the last 15-20 years. So, if you think that handwriting is stagnant, you\u2019re not banking on a good bet.</p>\n<p>You need to have some way of keeping your model, keeping your environment up-to-date, and swapping it out, and keeping it trained, and topped off.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976779/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/Early_morning_cobwebs_-2859589264-.jpg" alt="Alt"></p>\n<p><em>Keep the cobwebs off your model, keep your environment up-to-date.</em></p>\n<p><strong>Scott:</strong> Also presumably, you\u2019ve got a model in production and now what do you do with your time? You try to make it better. Hey, I have some ideas, maybe I could do this or maybe I could do that and that will make it better. Great, but the other stuff is still operating over there. What if you make a small improvement? Okay, now there\u2019s this version change, history, and now you get into <a href="https://www.lpalmieri.com/posts/2018-09-14-machine-learning-version-control-is-all-you-need/">version control of your models</a> which is not really a thing yet. People don\u2019t quite think in that way, but they certainly will have to think in that way in the future.</p>\n<p><strong>Susan:</strong> Well that\u2019s a really huge challenge. There\u2019s some decent articles and blog posts on this fairly recently, talking about version control and the machine learning world. That\u2019s just a big challenge. A lot of times you\u2019re talking about not just a few bytes of data here but 100s of megs, which doesn\u2019t sound like a lot but you version that 15 times a day and suddenly you\u2019re talking real data.</p>\n<p><strong>Scott:</strong> A gig or so. You\u2019re filling up your hard drive pretty fast.</p>\n<p><strong>Susan:</strong> The reproducibility of these things is a slight challenge because you can take the same exact model, structure, the same training data, the exact same training pipeline, and most of them incorporate randomness into them for very good reasons, <a href="https://blog.dominodatalab.com/machine-learning-reproducibility-crisis/">so you\u2019ll get a different result if you train a model twice</a> with what you thought was all the same stuff. What does it really mean to version control something is a big challenge.</p>\n<p><strong>Scott:</strong> The question will have to be answered in the next few years probably.</p>\n<p><strong>Susan:</strong> Yeah, we\u2019re seeing the evolution of the industry.</p>\n<p><strong>Scott:</strong> This is a long timescale thing. Hey, we\u2019re at the beginning. It\u2019s like electricity in the 1900s or something, that\u2019s AI now.</p>\n<h2 id="whats-the-key-point">What\u2019s the key point?</h2>\n<p><strong>Susan:</strong> The key point is you got to take real world data somehow. Don\u2019t get stuck in some training world.</p>\n<p><strong>Scott:</strong> You got to use real world data.</p>\n<p><strong>Susan:</strong> Real world data. If you can\u2019t take real world data, you don\u2019t have a useful model, useful structure. How about yourself?</p>\n<p><strong>Scott:</strong> Scott\u2019s key point is: try to get water through the pipes. Just get something working, anything working, and then you can iterate.</p>\n<p><strong>Susan:</strong> Iterate.</p>\n<p><strong>Scott:</strong> Iterate.</p>\n<p><strong>Susan:</strong> Iterate.</p>\n<p><strong>Scott:</strong> Then you can iterate. Hey, maybe it doesn\u2019t work very well at first, that happens for sure, but then you tweak some things, now it starts to work again. Is it all worth it to go through that?</p>\n<p><strong>Susan:</strong> Depends on the problem, depends on the money.</p>\n<p><strong>Scott:</strong> Some problems are too hard, just don\u2019t do it right now. Some problems are really easily solved with something you don\u2019t need to use a neural network for. But there\u2019s a region in between where it\u2019s like, yep, this makes a lot of sense.</p>\n<p><strong>Susan:</strong> If you can get 95% of the way with a simple tool, maybe you should be doing that first.</p>\n<p><strong>Scott:</strong> Might keep doing that, unless it\u2019s something you make billions of dollars from then hey maybe we can do something with neural networks.</p>' };
const frontmatter = { "title": "How Do You Use a Neural Network in Your Business?\u2014AI Show", "description": "What's a neural network, and how can it be used in your business? Find out here!", "date": "2018-11-20T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981332/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/how-use-neural-network-in-business-blog-thumb%402x.jpg", "authors": ["morris-gevirtz"], "category": "ai-and-engineering", "tags": ["deep-learning"], "seo": { "title": "How Do You Use a Neural Network in Your Business?\u2014AI Show", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981332/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/how-use-neural-network-in-business-blog-thumb%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/87430c3", "twitter": "https://dpgr.am/a4ed9b7", "linkedin": "https://dpgr.am/1304f26", "reddit": "https://dpgr.am/dbc998d", "facebook": "https://dpgr.am/69b5994" }, "astro": { "headings": [{ "depth": 2, "slug": "breaking-down-tasks", "text": "Breaking down tasks" }, { "depth": 2, "slug": "think-whats-my-data-set", "text": "Think: What\u2019s my data set?" }, { "depth": 2, "slug": "what-is-gradient-descent", "text": "What is gradient descent?" }, { "depth": 2, "slug": "designing-a-simple-system", "text": "Designing a simple system" }, { "depth": 2, "slug": "the-real-world-has-kinks-and-curves", "text": "The real world has kinks and curves" }, { "depth": 2, "slug": "using-an-off-the-shelf-system", "text": "Using an off-the-shelf system" }, { "depth": 2, "slug": "how-do-you-define-what-your-error-is", "text": "How do you define what your error is?" }, { "depth": 2, "slug": "how-far-away-is-the-output-from-the-model-compared-to-what-the-actual-truth-is", "text": "How far away is the output from the model compared to what the actual truth is?" }, { "depth": 2, "slug": "maintaining-a-deep-neural-network", "text": "Maintaining a deep neural network" }, { "depth": 2, "slug": "whats-the-key-point", "text": "What\u2019s the key point?" }], "source": `\r
<iframe src="https://www.youtube.com/embed/L3qudM5xCv0" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

**Scott:** Welcome to the AI Show. Today we're asking the question: How do you use a neural network in your business?

**Susan:** Well let's just talk about what people think of neural networks, simple ones. There's sort of the classic one, the very first thing you ever build when you're learning how to deal with this stuff, the MNIST digit predictory. You're familiar with this?

**Scott:** Yes, MNIST.

**Susan:** It's like Modified National Institute of Standards and Technology.

**Scott:** Handwritten digits. 28 by 28 pixels. Gray scale.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976776/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/MnistExamples.png)

**Susan:** Gray scale, basically they're handed to you on a silver platter and centered. Absolutely useless without a massive ecosystem around it to feed those digits into you in the perfect way.

**Scott:** What do you mean?

**Susan:** Well, you don't just take a picture of a letter and suddenly everything works.

**Scott:** Not that simple, right?

**Susan:** It's definitely not that simple.\r
\r
*   How do you take something like a task of digit recognition?\r
*   How do you break it down?\r
*   How can you use deep learning to actually make an effective, useful model?\r
*   How do you create a tool that you can use in some meaningful way?\r
\r
## Breaking down tasks\r
\r
**Scott:** In the real world, you have a task and you want to do something with a neural network. In this case it's like, I have a camera and I want to take a picture of something and I want it to figure out what is written on some letter. You have handwritten digits, just the digits - zero, one, two, three, four, five, six, seven, eight, nine - and tell me what the digits are. Simple task, right? A human can tell you right off the bat, they can just read them right off.

**Susan:** This is sort of the difference between accuracy in the machine learning world and utility. You can have the most accurate classifier in the world but it's completely useless because you can't feed it that data in the real world.\r
\r
**Scott:** You want to send letters to the right place at the post office or something and you want it to be mechanized. But, people have handwritten everything, so hey, a hard problem, you used to do it with humans, now you want to do it with a machine.

**Susan:** That's the core idea for today, how do we actually create a machine learning model or use neural networks in a real world situation there? We've got a great example there, digital recognition on a letter or something like that-however in the news they're talking about [license plate scanners](https://en.wikipedia.org/wiki/Automatic_number-plate_recognition). What would it take to actually build something like that? How do you actually take an idea and use deep learning in there? What are your big ideas of what you should be thinking about?\r
\r
## Think: What's my data set?\r
\r
**Scott:** You have to think: "What's my data set?" That data set has to be at least kind of close to the task that you're trying to accomplish. Is it pictures of handwritten digits that are centered and perfect or is it pictures of license plates on cars that are driving down roads at oblique angles with lots of light on them or smoke? If you have those pictures fine, but do you have them labeled by a human and are they properly labeled? Are they centered or not, are they all blown out and all white, are they too dark, do they have a big glare in them, et cetera?

**Susan:** Just that first step we've talked about data so many times.

**Scott:** Very important.

**Susan:** It's important not only just to have data, but data that represents the production environment that you're going to be in. It's all well and good to have, say for instance, license plate data. But, if it's not taken in a meaningful way, if it's staged with professional cameras, is that going to be as good of a dataset as actually taking footage from the real world and from the equipment that I expect to use and dealing with it that way? Not the version that it is pristine, but the version that's already gone through whatever Kodak's have had their hands on.

**Scott:** The kind that has been compressed.

**Susan:** It's been compressed, it's been mangled. By the way, why is it whenever you see video like that it's just absolutely the worst?

**Scott:** It's always crappy, like it's been shot by a potato.

**Susan:** It's like Big Foot. Magically, whenever Big Foot shows up, it's on the worst video equipment ever, but you got to think you're about to take pictures of Big Foot and you need to recognize you're going to have that quality.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976777/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/bigfoot-roger-patterson-1_h-1.jpg)

**Scott:** But, you also have to be careful. Don't try to boil the ocean. You don't have to get every single angle. Is it snowing, is it raining, is it whatever? Okay, get verticalized, get one thing working pretty well first and then you'll start to see the problems crop up. But, maybe 80% or 90% of your solution is already there and then you tackle those problems later. You don't have to do everything all at once.

**Susan:** Yeah. That's also another key thing here is be prepared for: iterations on everything.

**Scott:** Iterate.

**Susan:** Iterate.

**Scott:** ... iterate, iterate, iterate.

**Susan:** Get your first hour of data just so you understand formats and how you might be processing and dealing with it before you spend tens of thousands of hours and umpteen millions dollars collecting data that you then find out is not quite right. That's really heartbreaking.

**Scott:** Yeah, you can't just guess the answer from the outset, it's too hard.

**Susan:** It's [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent), right? You assess, take a step, assess, take a step, assess, take a step, it's pretty classic.\r
\r
## What is gradient descent?\r
\r
**Scott:** What do you mean by gradient descent?

**Susan:** It's the basic algorithm that a huge chunk of machine learning uses to train neural networks. Just like I said, I was giving the example there for assessing, taking a step, assessing, taking a step. The assessment stage is using what's called the gradient and that points in a direction that might be a good way to go for your [weights](https://ml-cheatsheet.readthedocs.io/en/latest/nn_concepts.html).

![Alt](https://cdn-images-1.medium.com/max/1600/1*f9a162GhpMbiTVTAua_lLQ.png)

**Scott:** As an example, if you're walking around in a hilly terrain and it's your job to find water you might want to start walking downhill. What do you do? You look around at your feet and you think, "Oh, well the hill is sloping that way, I should go that way." Does that necessarily mean that water's going to be that way? Not necessarily. If you keep going downhill, if there's water around, it's going to be around there. That gets into the discussion of maybe you're in a local optimum, meaning a local minimum in this case and you might need to go over the next ridge and then find an even lower hole somewhere. Still, this is gradient descent. You're looking at the slope and you're moving along that path.

**Susan:** Gradient descent then applies to machine learning, but it also applies to life. It's a great process/technique that really works well. We were talking about gathering data and the idea behind it is: don't jump in whole hog right away.\r
\r
When you're designing a system that's going to be useful, you're really actually thinking: how am I going to use this thing. You've got to think about the data you're going to feed it and the data it needs to be fed in order to predicate some answer that you can then use to do something with.\r
\r
Just, very briefly, think about the MNIST style digit classifier there, data inputs are a 28 by 28 gray scale, centered.

**Scott:** The pixels are white and black, and gray.

**Susan:** How do you build that? You've got a whole ecosystem surrounding that, which it's kind to find where the digits are at, it's got to parse them out and do all these different things. When you're thinking about a production environment: I've got these cameras, how am I going to get to the classifier itself or to the network itself, the data into the shape and form that it was trained on in order to make the prediction that I'm going to then use back out there. If you find that the task of doing that is a lot harder than the model itself, you're probably right. The real world is not well normalized.

**Scott:** If you get your data set right, you get your tools right, you pick your model architecture correct, you get your input and output set, correctly the training's actually pretty easy, you just say, "Go".

**Susan** Encapsulate the problem, that's really what we're talking about here.

**Scott:** Define the problem well.

**Susan:** You need to define that problem. Going back to the iterative idea here, you'll find that you started collecting some data and then you started designing inputs, and outputs, and a model behind it and you realize maybe those inputs, and outputs, and that model can't work with that data so you need to adjust.\r
\r
You go through this iterative system, but you always have to have an eye on the idea: "I can't do anything that the real world doesn't support."\r
\r
That's what a lot of people lose sight of when they're learning how to use these tools the first time.

**Scott:** It has to work for real in a real setting.

**Susan:** Yeah, they're given these pristine data sets that have well encapsulated some simple problem, or even a complex problem. I've personally spent two weeks working on one dataset just to whip it into shape to be usable.

**It's a really hard task to get the real world to be bent and shaped into something that's usable by your particular model.** Keep that in mind when you're thinking about a usable model.\r
\r
## Designing a simple system\r
\r
**Scott:** Let's go from beginning to end for a simple system. You have a dash cam in your car and you want it to detect license plate numbers and display them on a display in your car. So, you're like a police officer or something, right?

**Susan:** Officer Susan.

**Scott:** Officer Susan reporting for duty. You're driving around in your car, you have a dash cam and you want to get a text or display on your screen. Using all the license plate numbers around you, how do you build that system? Okay, you have the camera, then what?

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976778/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/car-collage.jpg)

The camera what is it doing? It's looking at an optical signal in the world. As a lens it's taking in light and it's digitizing it, so that's really important. You have to be able to digitize the thing that you're actually trying to measure. It's pretty hard to measure people's thoughts.

**Susan:** Like you said, you've got to digitize that, you got to be able to put it in some sort of portable processing system if you're doing this real time.

**Scott:** So maybe it's hooked up to a USB. That dash cam is hooked up to a USB cable that goes to a computer and that computer is just saving an image, 30 of them every second, just saving all of them and just building up tons of data.

**Susan:** Relevant to the the question about inputs and outputs, we'll just take a base one here. Are you going to try to figure out something over time or you treat each image individually?

**Scott:** You have 100 pictures of the same license plate. Do you want 100 notifications of that license plate or just 1?

**Susan:** The image classification world has gone light years, just massive leaps forward since the original work on MNIST and what everybody's familiar with, making a simple multi-layer network to recognize digits. In general, you're going to have to find some way of taking that image that you've digitized which you've been able to feed into some engineering solution that takes a picture n seconds or as fast as it can be processed and then looks for the next one. It takes all that, feeds it in to something that's going to probably normalize the image for light and do some techniques for basic image processing to take care of a whole lot of stuff.

**Scott:** Try to make it not too dark, not too light.

**Susan:** The more you can normalize your data, the less your neural network is going to have to work, which is a great thing because the accuracy is going to go up there.\r
\r
**Scott:** Sure, but you have a camera and it's got a pretty big view, and the license plate could be anywhere inside.

**Susan:** You probably have to go into something that's going to detect where license plates are at.

**Scott:** You probably have two systems.

**Susan:** At least.

**Scott:** One that's a license plate detector. It just says, "I think a license plate is here" but that's looking at the entire image. It's looking for the whole thing and then saying, "Oh, I think a license plate is here". Then you have another one that says, "I'm going to snip out only that section and then I'm going to try and read the digits".

**Susan:** It's going to scale it next. It's going to snip out, scale it. You're going to make certain assumptions, because you know what license plates look like, about how to scale it. It's actually probably a nice problem because of that.

**Scott:** A fun problem.

**Susan:** Then finally, you can send it off to your classifier after you've scaled, and sliced, and diced. Now you've got something that might be able to output possible answers that you then display to the person driving. Hopefully they're not texting while they're doing it.

**Scott:** To build the data set for that, if you're starting out it's like, I want to build a license plate reader for that dash cam but I have no data. What do you start doing, strapping cameras to the front of cars and driving around, right? Then you send it off to crowd source the data labeling or you do it yourself and you sit down and look at images, and you draw a box around the license plates. There's the box around the license plates and you use those boxes, the pixel numbers for those boxes, to say in here, "There was a license plate." That's to get the data to build your first model. That just tells you where the license plate is. Once you've gone through and made all those boxes, now those are just images that are for your next data set. Then you go in and say, "Can I read these or not," or "Can a person read them or not?" Then, type in what that license plate is, the numbers or the letters. Now you actually have a labeled data set at that point and that's how you train the models that we're talking about. Identify where the license plate is, then also what is it, what are the numbers.

**Susan:** Keep in mind, this is all a very simplified version of this problem.

**Scott:** We don't have to make it more complicated though. This is a simplified version and it's already really complicated.\r
\r
## The real world has kinks and curves\r
\r
**Susan:** This is a real world use case. The real world is going to throw all sorts of kinks and curves at you. For instance, having multiple cars. You start detecting multiple license plates. What happens when a motorcycle splits lanes right next to you? What are you going to look at there? Those kinds of things, shadows hitting you, those people that put the shields over their license plates to make him hard to see, which, I don't know the legality of that.

**Scott:** A typical system that would identify either where a license plate is or what the numbers are. That would be just a typical [CNN network](https://en.wikipedia.org/wiki/Convolutional_neural_network), a convolutional neural network. These work really well, but those things have been done to death. Many academic papers written about them. You can figure out how deep should it be, how wide should it be, which kernels should I use, all these different settings. You just go download one like Pytorch, TensorFlow, and there it is for you. Now, it might not be trained for exactly what your task is, but you don't have to pick the model architecture and you don't have to go through that whole design process to figure out what's going to work or not. You can pretty much take it off the shelf and hit train, and maybe adjust a few parameters. But, you spent an hour, five hours on that section, maybe a day, and then you spent two months on the other stuff.

**Susan:** That's a great point because there's a lot off the shelf stuff that didn't exist before, especially in the image recognition world. If you're playing in that world, I don't get a good chance to go back there too often, but every time I look there's just more and more amazing tools, especially when it comes to anything on the road. For obvious reasons due to the [autonomous driving revolution](https://www.iotforall.com/iot-and-autonomous-vehicles/) that's happening. Those tools are just getting a tremendous amount of attention and there's a lot of great work that's out there. If you're thinking about building some of these things look for off-the-shelf solutions first.

**Scott:** There's won't be an end to end, everything you need to do, but there will be parts of it that you can save a considerable amount of time.\r
\r
## Using an off-the-shelf system\r
\r
**Susan:** If you go with some off-the-shelf system, that might dictate some hardware that you don't have access to. This model here is using these tools and these tools you either have to delve into them or figure out how to build something that can mimic them in some way, shape, or form. That becomes a real concern, especially for something in the real world where you don't have a lot of processing power available to do this task.

**This comes back to the difference between accuracy and usability. If you have to have a rack of servers sitting in a car to be able to do the task, that's probably not usable, even if it's accurate.**

**Scott:** Maybe a first proof of concept, but this isn't going to be a real product that you ship.

**Susan:** Driving around with all the fans whirring behind you.

**Scott:** With $100,000 worth of computers in the back of your car.

**Susan:** It's great, I can read those license plates now, although probably don't need that much compute for that task.

**Scott:** We talked about data, super important, we talked about inputs and outputs, loss function.\r
\r
## How do you define what your error is?\r
\r
**Susan:** This is really determining more the type of problem you're doing. When we think about a loss function, what we're talking about is the thing that takes truth versus prediction and says how close are they.

**Scott:** What's my error? How do I define what my error is?

**Susan:** That loss function has to be crafted in such a way that it can work with auto-differentiation, this ability to what we call [backpropagate](https://en.wikipedia.org/wiki/Backpropagation) the error all the way through the model if you're talking about deep neural networks.

**Scott:** What does that do though, this backpropagation?

**Susan:** When we talk about a model and model structure the structure is the physical way that the math is laid out. In other words, this equation leads to that equation, which leads to that equation. This is the layers. But, these layers, those equations, have a whole bunch of parameters. It's the simple slope formula y=mx+b.

**Scott:** Just numbers.

**Susan:** They're just numbers. If you can get those M and Bs just right then you can fit the curve.

**Scott:** And there's just millions of them though.

**Susan:** There's millions and millions and millions of them. Those things we call parameters.

**Scott:** So, all these dials in the network they need to be turned. ![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976779/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/knobs-1.jpg)

**Susan:** That's actually one of my favorite images is a person sitting in front of a switch board with 10,000 knobs between 0 and 11\\. Every single one of those knobs affects every other knob. You've got inputs over here and you've got outputs over there. If you could just twist those knobs right here to the right step-

**Scott:** There is a correct one that minimizes your error.

**Susan:** There is a great setting of them, but finding that out is hard. So what do you do? This is where back propagation, gradient descent and all these things come into play. You send something through that model and you let it make a guess.

**Scott:** Leave the settings where they are and let it just go.

**Susan:** You look at the outputs that came in there, and you look at the truth, and you have your loss function.

**Scott:** You know the answer to the input that you gave it.\r
\r
## How far away is the output from the model compared to what the actual truth is?\r
\r
**Susan:** You've got your loss function that's going to show you that. Now, from that loss function I can take that error and I can propagate it backwards through that network.

**Scott:** Essentially there's a recipe that says if we have this error down here then what you need to do is go back and turn all of these knobs this much, but it's only a little bit, each of them. It doesn't say, "Put this knob in this position." It says, "Move this one a little bit that way, move that one a little bit that way."

**Susan:** In every single example that goes through that it's going to say, "Hey, the knob should have been here" and "The knob's going to be there." When you've got a bunch of these examples, you take the average of a bunch of examples at once, this is what we call a batch, and now the average says, "In general, this knob should have gone over here." You do this a whole lot and eventually you get the settings for those knobs.

**Scott:** You don't do this once or 10 times, you do this millions of times.

**Susan:** In the end, it comes up with a great setting for those knobs and now the outputs are getting you pretty close to what you want.

**Scott:** At first there's a lot of movement, the knobs are moving all over the place and then there's slow refinement as the model starts to get trained.

**Susan:** There is the occasional time where it trips over and a whole bunch of them start going off into their local optimum.

**Scott:** Yeah because they all affect each one of them. It has to make up for that change. That's generally backpropagation.\r
\r
One of the key skills is coming up with 1001 ways of thinking of that. The more ways you start thinking about how this works, the better you understand intuitively what's going on. That can help you design these things in the future.\r
\r
**Scott:** Constraints help a lot with this:\r
\r
*   How much money do you have?\r
*   What computing resources do you have?\r
*   What talent do you have?\r
\r
You can go on many, many goose chases here, a lot of rabbit holes. You could spend the next 15 years working on a problem and never come up with something that's actually valuable. There's still many good things that you're learning along the way.\r
\r
You have to learn to cut off certain things and be like, "Good enough, good enough, good enough". That's kind of the way that machine learning is now at least. You have to have some restraint in order to get a real product out the door.\r
\r
**Susan:** We've talked a bit about designing something, but I think a lot of what people don't realize is that not only is building of them a challenge, but the world isn't static. Maintaining a deep neural network is actually a really big challenge.\r
\r
## Maintaining a deep neural network\r
\r
**Susan:** Even just consider the license plate problem: every single year there's 100s of new license plates. Someone goes right to their state representatives and says, "Hey, I think the state should have this picture of my favorite cartoon character from 1983" and they get enough signatures and suddenly there's a brand new license plate in the world. Car designs change, vehicle designs change, all sorts of things change.

**Scott:** In California, the first digit kind of just incrementally goes up. There's a new first digit just because it's later on. It wasn't likely before, but now it's likely. The idea that you put all this time and effort and it stops, maybe there are problems out there like that, but it's pretty hard to imagine. We'll just go back to handwriting, the digit recognition. I can guarantee you that the average penmanship has changed considerably in the last 15-20 years. So, if you think that handwriting is stagnant, you're not banking on a good bet.\r
\r
You need to have some way of keeping your model, keeping your environment up-to-date, and swapping it out, and keeping it trained, and topped off.\r
\r
![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976779/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/Early_morning_cobwebs_-2859589264-.jpg)

_Keep the cobwebs off your model, keep your environment up-to-date._

**Scott:** Also presumably, you've got a model in production and now what do you do with your time? You try to make it better. Hey, I have some ideas, maybe I could do this or maybe I could do that and that will make it better. Great, but the other stuff is still operating over there. What if you make a small improvement? Okay, now there's this version change, history, and now you get into [version control of your models](https://www.lpalmieri.com/posts/2018-09-14-machine-learning-version-control-is-all-you-need/) which is not really a thing yet. People don't quite think in that way, but they certainly will have to think in that way in the future.

**Susan:** Well that's a really huge challenge. There's some decent articles and blog posts on this fairly recently, talking about version control and the machine learning world. That's just a big challenge. A lot of times you're talking about not just a few bytes of data here but 100s of megs, which doesn't sound like a lot but you version that 15 times a day and suddenly you're talking real data.

**Scott:** A gig or so. You're filling up your hard drive pretty fast.

**Susan:** The reproducibility of these things is a slight challenge because you can take the same exact model, structure, the same training data, the exact same training pipeline, and most of them incorporate randomness into them for very good reasons, [so you'll get a different result if you train a model twice](https://blog.dominodatalab.com/machine-learning-reproducibility-crisis/) with what you thought was all the same stuff. What does it really mean to version control something is a big challenge.

**Scott:** The question will have to be answered in the next few years probably.

**Susan:** Yeah, we're seeing the evolution of the industry.

**Scott:** This is a long timescale thing. Hey, we're at the beginning. It's like electricity in the 1900s or something, that's AI now.\r
\r
## What's the key point?\r
\r
**Susan:** The key point is you got to take real world data somehow. Don't get stuck in some training world.

**Scott:** You got to use real world data.

**Susan:** Real world data. If you can't take real world data, you don't have a useful model, useful structure. How about yourself?

**Scott:** Scott's key point is: try to get water through the pipes. Just get something working, anything working, and then you can iterate.

**Susan:** Iterate.

**Scott:** Iterate.

**Susan:** Iterate.

**Scott:** Then you can iterate. Hey, maybe it doesn't work very well at first, that happens for sure, but then you tweak some things, now it starts to work again. Is it all worth it to go through that?

**Susan:** Depends on the problem, depends on the money.

**Scott:** Some problems are too hard, just don't do it right now. Some problems are really easily solved with something you don't need to use a neural network for. But there's a region in between where it's like, yep, this makes a lot of sense.

**Susan:** If you can get 95% of the way with a simple tool, maybe you should be doing that first.\r
\r
**Scott:** Might keep doing that, unless it's something you make billions of dollars from then hey maybe we can do something with neural networks.\r
`, "html": '<iframe src="https://www.youtube.com/embed/L3qudM5xCv0" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p><strong>Scott:</strong> Welcome to the AI Show. Today we\u2019re asking the question: How do you use a neural network in your business?</p>\n<p><strong>Susan:</strong> Well let\u2019s just talk about what people think of neural networks, simple ones. There\u2019s sort of the classic one, the very first thing you ever build when you\u2019re learning how to deal with this stuff, the MNIST digit predictory. You\u2019re familiar with this?</p>\n<p><strong>Scott:</strong> Yes, MNIST.</p>\n<p><strong>Susan:</strong> It\u2019s like Modified National Institute of Standards and Technology.</p>\n<p><strong>Scott:</strong> Handwritten digits. 28 by 28 pixels. Gray scale.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976776/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/MnistExamples.png" alt="Alt"></p>\n<p><strong>Susan:</strong> Gray scale, basically they\u2019re handed to you on a silver platter and centered. Absolutely useless without a massive ecosystem around it to feed those digits into you in the perfect way.</p>\n<p><strong>Scott:</strong> What do you mean?</p>\n<p><strong>Susan:</strong> Well, you don\u2019t just take a picture of a letter and suddenly everything works.</p>\n<p><strong>Scott:</strong> Not that simple, right?</p>\n<p><strong>Susan:</strong> It\u2019s definitely not that simple.</p>\n<ul>\n<li>How do you take something like a task of digit recognition?</li>\n<li>How do you break it down?</li>\n<li>How can you use deep learning to actually make an effective, useful model?</li>\n<li>How do you create a tool that you can use in some meaningful way?</li>\n</ul>\n<h2 id="breaking-down-tasks">Breaking down tasks</h2>\n<p><strong>Scott:</strong> In the real world, you have a task and you want to do something with a neural network. In this case it\u2019s like, I have a camera and I want to take a picture of something and I want it to figure out what is written on some letter. You have handwritten digits, just the digits - zero, one, two, three, four, five, six, seven, eight, nine - and tell me what the digits are. Simple task, right? A human can tell you right off the bat, they can just read them right off.</p>\n<p><strong>Susan:</strong> This is sort of the difference between accuracy in the machine learning world and utility. You can have the most accurate classifier in the world but it\u2019s completely useless because you can\u2019t feed it that data in the real world.</p>\n<p><strong>Scott:</strong> You want to send letters to the right place at the post office or something and you want it to be mechanized. But, people have handwritten everything, so hey, a hard problem, you used to do it with humans, now you want to do it with a machine.</p>\n<p><strong>Susan:</strong> That\u2019s the core idea for today, how do we actually create a machine learning model or use neural networks in a real world situation there? We\u2019ve got a great example there, digital recognition on a letter or something like that-however in the news they\u2019re talking about <a href="https://en.wikipedia.org/wiki/Automatic_number-plate_recognition">license plate scanners</a>. What would it take to actually build something like that? How do you actually take an idea and use deep learning in there? What are your big ideas of what you should be thinking about?</p>\n<h2 id="think-whats-my-data-set">Think: What\u2019s my data set?</h2>\n<p><strong>Scott:</strong> You have to think: \u201CWhat\u2019s my data set?\u201D That data set has to be at least kind of close to the task that you\u2019re trying to accomplish. Is it pictures of handwritten digits that are centered and perfect or is it pictures of license plates on cars that are driving down roads at oblique angles with lots of light on them or smoke? If you have those pictures fine, but do you have them labeled by a human and are they properly labeled? Are they centered or not, are they all blown out and all white, are they too dark, do they have a big glare in them, et cetera?</p>\n<p><strong>Susan:</strong> Just that first step we\u2019ve talked about data so many times.</p>\n<p><strong>Scott:</strong> Very important.</p>\n<p><strong>Susan:</strong> It\u2019s important not only just to have data, but data that represents the production environment that you\u2019re going to be in. It\u2019s all well and good to have, say for instance, license plate data. But, if it\u2019s not taken in a meaningful way, if it\u2019s staged with professional cameras, is that going to be as good of a dataset as actually taking footage from the real world and from the equipment that I expect to use and dealing with it that way? Not the version that it is pristine, but the version that\u2019s already gone through whatever Kodak\u2019s have had their hands on.</p>\n<p><strong>Scott:</strong> The kind that has been compressed.</p>\n<p><strong>Susan:</strong> It\u2019s been compressed, it\u2019s been mangled. By the way, why is it whenever you see video like that it\u2019s just absolutely the worst?</p>\n<p><strong>Scott:</strong> It\u2019s always crappy, like it\u2019s been shot by a potato.</p>\n<p><strong>Susan:</strong> It\u2019s like Big Foot. Magically, whenever Big Foot shows up, it\u2019s on the worst video equipment ever, but you got to think you\u2019re about to take pictures of Big Foot and you need to recognize you\u2019re going to have that quality.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976777/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/bigfoot-roger-patterson-1_h-1.jpg" alt="Alt"></p>\n<p><strong>Scott:</strong> But, you also have to be careful. Don\u2019t try to boil the ocean. You don\u2019t have to get every single angle. Is it snowing, is it raining, is it whatever? Okay, get verticalized, get one thing working pretty well first and then you\u2019ll start to see the problems crop up. But, maybe 80% or 90% of your solution is already there and then you tackle those problems later. You don\u2019t have to do everything all at once.</p>\n<p><strong>Susan:</strong> Yeah. That\u2019s also another key thing here is be prepared for: iterations on everything.</p>\n<p><strong>Scott:</strong> Iterate.</p>\n<p><strong>Susan:</strong> Iterate.</p>\n<p><strong>Scott:</strong> \u2026 iterate, iterate, iterate.</p>\n<p><strong>Susan:</strong> Get your first hour of data just so you understand formats and how you might be processing and dealing with it before you spend tens of thousands of hours and umpteen millions dollars collecting data that you then find out is not quite right. That\u2019s really heartbreaking.</p>\n<p><strong>Scott:</strong> Yeah, you can\u2019t just guess the answer from the outset, it\u2019s too hard.</p>\n<p><strong>Susan:</strong> It\u2019s <a href="https://en.wikipedia.org/wiki/Gradient_descent">gradient descent</a>, right? You assess, take a step, assess, take a step, assess, take a step, it\u2019s pretty classic.</p>\n<h2 id="what-is-gradient-descent">What is gradient descent?</h2>\n<p><strong>Scott:</strong> What do you mean by gradient descent?</p>\n<p><strong>Susan:</strong> It\u2019s the basic algorithm that a huge chunk of machine learning uses to train neural networks. Just like I said, I was giving the example there for assessing, taking a step, assessing, taking a step. The assessment stage is using what\u2019s called the gradient and that points in a direction that might be a good way to go for your <a href="https://ml-cheatsheet.readthedocs.io/en/latest/nn_concepts.html">weights</a>.</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*f9a162GhpMbiTVTAua_lLQ.png" alt="Alt"></p>\n<p><strong>Scott:</strong> As an example, if you\u2019re walking around in a hilly terrain and it\u2019s your job to find water you might want to start walking downhill. What do you do? You look around at your feet and you think, \u201COh, well the hill is sloping that way, I should go that way.\u201D Does that necessarily mean that water\u2019s going to be that way? Not necessarily. If you keep going downhill, if there\u2019s water around, it\u2019s going to be around there. That gets into the discussion of maybe you\u2019re in a local optimum, meaning a local minimum in this case and you might need to go over the next ridge and then find an even lower hole somewhere. Still, this is gradient descent. You\u2019re looking at the slope and you\u2019re moving along that path.</p>\n<p><strong>Susan:</strong> Gradient descent then applies to machine learning, but it also applies to life. It\u2019s a great process/technique that really works well. We were talking about gathering data and the idea behind it is: don\u2019t jump in whole hog right away.</p>\n<p>When you\u2019re designing a system that\u2019s going to be useful, you\u2019re really actually thinking: how am I going to use this thing. You\u2019ve got to think about the data you\u2019re going to feed it and the data it needs to be fed in order to predicate some answer that you can then use to do something with.</p>\n<p>Just, very briefly, think about the MNIST style digit classifier there, data inputs are a 28 by 28 gray scale, centered.</p>\n<p><strong>Scott:</strong> The pixels are white and black, and gray.</p>\n<p><strong>Susan:</strong> How do you build that? You\u2019ve got a whole ecosystem surrounding that, which it\u2019s kind to find where the digits are at, it\u2019s got to parse them out and do all these different things. When you\u2019re thinking about a production environment: I\u2019ve got these cameras, how am I going to get to the classifier itself or to the network itself, the data into the shape and form that it was trained on in order to make the prediction that I\u2019m going to then use back out there. If you find that the task of doing that is a lot harder than the model itself, you\u2019re probably right. The real world is not well normalized.</p>\n<p><strong>Scott:</strong> If you get your data set right, you get your tools right, you pick your model architecture correct, you get your input and output set, correctly the training\u2019s actually pretty easy, you just say, \u201CGo\u201D.</p>\n<p><strong>Susan</strong> Encapsulate the problem, that\u2019s really what we\u2019re talking about here.</p>\n<p><strong>Scott:</strong> Define the problem well.</p>\n<p><strong>Susan:</strong> You need to define that problem. Going back to the iterative idea here, you\u2019ll find that you started collecting some data and then you started designing inputs, and outputs, and a model behind it and you realize maybe those inputs, and outputs, and that model can\u2019t work with that data so you need to adjust.</p>\n<p>You go through this iterative system, but you always have to have an eye on the idea: \u201CI can\u2019t do anything that the real world doesn\u2019t support.\u201D</p>\n<p>That\u2019s what a lot of people lose sight of when they\u2019re learning how to use these tools the first time.</p>\n<p><strong>Scott:</strong> It has to work for real in a real setting.</p>\n<p><strong>Susan:</strong> Yeah, they\u2019re given these pristine data sets that have well encapsulated some simple problem, or even a complex problem. I\u2019ve personally spent two weeks working on one dataset just to whip it into shape to be usable.</p>\n<p><strong>It\u2019s a really hard task to get the real world to be bent and shaped into something that\u2019s usable by your particular model.</strong> Keep that in mind when you\u2019re thinking about a usable model.</p>\n<h2 id="designing-a-simple-system">Designing a simple system</h2>\n<p><strong>Scott:</strong> Let\u2019s go from beginning to end for a simple system. You have a dash cam in your car and you want it to detect license plate numbers and display them on a display in your car. So, you\u2019re like a police officer or something, right?</p>\n<p><strong>Susan:</strong> Officer Susan.</p>\n<p><strong>Scott:</strong> Officer Susan reporting for duty. You\u2019re driving around in your car, you have a dash cam and you want to get a text or display on your screen. Using all the license plate numbers around you, how do you build that system? Okay, you have the camera, then what?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976778/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/car-collage.jpg" alt="Alt"></p>\n<p>The camera what is it doing? It\u2019s looking at an optical signal in the world. As a lens it\u2019s taking in light and it\u2019s digitizing it, so that\u2019s really important. You have to be able to digitize the thing that you\u2019re actually trying to measure. It\u2019s pretty hard to measure people\u2019s thoughts.</p>\n<p><strong>Susan:</strong> Like you said, you\u2019ve got to digitize that, you got to be able to put it in some sort of portable processing system if you\u2019re doing this real time.</p>\n<p><strong>Scott:</strong> So maybe it\u2019s hooked up to a USB. That dash cam is hooked up to a USB cable that goes to a computer and that computer is just saving an image, 30 of them every second, just saving all of them and just building up tons of data.</p>\n<p><strong>Susan:</strong> Relevant to the the question about inputs and outputs, we\u2019ll just take a base one here. Are you going to try to figure out something over time or you treat each image individually?</p>\n<p><strong>Scott:</strong> You have 100 pictures of the same license plate. Do you want 100 notifications of that license plate or just 1?</p>\n<p><strong>Susan:</strong> The image classification world has gone light years, just massive leaps forward since the original work on MNIST and what everybody\u2019s familiar with, making a simple multi-layer network to recognize digits. In general, you\u2019re going to have to find some way of taking that image that you\u2019ve digitized which you\u2019ve been able to feed into some engineering solution that takes a picture n seconds or as fast as it can be processed and then looks for the next one. It takes all that, feeds it in to something that\u2019s going to probably normalize the image for light and do some techniques for basic image processing to take care of a whole lot of stuff.</p>\n<p><strong>Scott:</strong> Try to make it not too dark, not too light.</p>\n<p><strong>Susan:</strong> The more you can normalize your data, the less your neural network is going to have to work, which is a great thing because the accuracy is going to go up there.</p>\n<p><strong>Scott:</strong> Sure, but you have a camera and it\u2019s got a pretty big view, and the license plate could be anywhere inside.</p>\n<p><strong>Susan:</strong> You probably have to go into something that\u2019s going to detect where license plates are at.</p>\n<p><strong>Scott:</strong> You probably have two systems.</p>\n<p><strong>Susan:</strong> At least.</p>\n<p><strong>Scott:</strong> One that\u2019s a license plate detector. It just says, \u201CI think a license plate is here\u201D but that\u2019s looking at the entire image. It\u2019s looking for the whole thing and then saying, \u201COh, I think a license plate is here\u201D. Then you have another one that says, \u201CI\u2019m going to snip out only that section and then I\u2019m going to try and read the digits\u201D.</p>\n<p><strong>Susan:</strong> It\u2019s going to scale it next. It\u2019s going to snip out, scale it. You\u2019re going to make certain assumptions, because you know what license plates look like, about how to scale it. It\u2019s actually probably a nice problem because of that.</p>\n<p><strong>Scott:</strong> A fun problem.</p>\n<p><strong>Susan:</strong> Then finally, you can send it off to your classifier after you\u2019ve scaled, and sliced, and diced. Now you\u2019ve got something that might be able to output possible answers that you then display to the person driving. Hopefully they\u2019re not texting while they\u2019re doing it.</p>\n<p><strong>Scott:</strong> To build the data set for that, if you\u2019re starting out it\u2019s like, I want to build a license plate reader for that dash cam but I have no data. What do you start doing, strapping cameras to the front of cars and driving around, right? Then you send it off to crowd source the data labeling or you do it yourself and you sit down and look at images, and you draw a box around the license plates. There\u2019s the box around the license plates and you use those boxes, the pixel numbers for those boxes, to say in here, \u201CThere was a license plate.\u201D That\u2019s to get the data to build your first model. That just tells you where the license plate is. Once you\u2019ve gone through and made all those boxes, now those are just images that are for your next data set. Then you go in and say, \u201CCan I read these or not,\u201D or \u201CCan a person read them or not?\u201D Then, type in what that license plate is, the numbers or the letters. Now you actually have a labeled data set at that point and that\u2019s how you train the models that we\u2019re talking about. Identify where the license plate is, then also what is it, what are the numbers.</p>\n<p><strong>Susan:</strong> Keep in mind, this is all a very simplified version of this problem.</p>\n<p><strong>Scott:</strong> We don\u2019t have to make it more complicated though. This is a simplified version and it\u2019s already really complicated.</p>\n<h2 id="the-real-world-has-kinks-and-curves">The real world has kinks and curves</h2>\n<p><strong>Susan:</strong> This is a real world use case. The real world is going to throw all sorts of kinks and curves at you. For instance, having multiple cars. You start detecting multiple license plates. What happens when a motorcycle splits lanes right next to you? What are you going to look at there? Those kinds of things, shadows hitting you, those people that put the shields over their license plates to make him hard to see, which, I don\u2019t know the legality of that.</p>\n<p><strong>Scott:</strong> A typical system that would identify either where a license plate is or what the numbers are. That would be just a typical <a href="https://en.wikipedia.org/wiki/Convolutional_neural_network">CNN network</a>, a convolutional neural network. These work really well, but those things have been done to death. Many academic papers written about them. You can figure out how deep should it be, how wide should it be, which kernels should I use, all these different settings. You just go download one like Pytorch, TensorFlow, and there it is for you. Now, it might not be trained for exactly what your task is, but you don\u2019t have to pick the model architecture and you don\u2019t have to go through that whole design process to figure out what\u2019s going to work or not. You can pretty much take it off the shelf and hit train, and maybe adjust a few parameters. But, you spent an hour, five hours on that section, maybe a day, and then you spent two months on the other stuff.</p>\n<p><strong>Susan:</strong> That\u2019s a great point because there\u2019s a lot off the shelf stuff that didn\u2019t exist before, especially in the image recognition world. If you\u2019re playing in that world, I don\u2019t get a good chance to go back there too often, but every time I look there\u2019s just more and more amazing tools, especially when it comes to anything on the road. For obvious reasons due to the <a href="https://www.iotforall.com/iot-and-autonomous-vehicles/">autonomous driving revolution</a> that\u2019s happening. Those tools are just getting a tremendous amount of attention and there\u2019s a lot of great work that\u2019s out there. If you\u2019re thinking about building some of these things look for off-the-shelf solutions first.</p>\n<p><strong>Scott:</strong> There\u2019s won\u2019t be an end to end, everything you need to do, but there will be parts of it that you can save a considerable amount of time.</p>\n<h2 id="using-an-off-the-shelf-system">Using an off-the-shelf system</h2>\n<p><strong>Susan:</strong> If you go with some off-the-shelf system, that might dictate some hardware that you don\u2019t have access to. This model here is using these tools and these tools you either have to delve into them or figure out how to build something that can mimic them in some way, shape, or form. That becomes a real concern, especially for something in the real world where you don\u2019t have a lot of processing power available to do this task.</p>\n<p><strong>This comes back to the difference between accuracy and usability. If you have to have a rack of servers sitting in a car to be able to do the task, that\u2019s probably not usable, even if it\u2019s accurate.</strong></p>\n<p><strong>Scott:</strong> Maybe a first proof of concept, but this isn\u2019t going to be a real product that you ship.</p>\n<p><strong>Susan:</strong> Driving around with all the fans whirring behind you.</p>\n<p><strong>Scott:</strong> With $100,000 worth of computers in the back of your car.</p>\n<p><strong>Susan:</strong> It\u2019s great, I can read those license plates now, although probably don\u2019t need that much compute for that task.</p>\n<p><strong>Scott:</strong> We talked about data, super important, we talked about inputs and outputs, loss function.</p>\n<h2 id="how-do-you-define-what-your-error-is">How do you define what your error is?</h2>\n<p><strong>Susan:</strong> This is really determining more the type of problem you\u2019re doing. When we think about a loss function, what we\u2019re talking about is the thing that takes truth versus prediction and says how close are they.</p>\n<p><strong>Scott:</strong> What\u2019s my error? How do I define what my error is?</p>\n<p><strong>Susan:</strong> That loss function has to be crafted in such a way that it can work with auto-differentiation, this ability to what we call <a href="https://en.wikipedia.org/wiki/Backpropagation">backpropagate</a> the error all the way through the model if you\u2019re talking about deep neural networks.</p>\n<p><strong>Scott:</strong> What does that do though, this backpropagation?</p>\n<p><strong>Susan:</strong> When we talk about a model and model structure the structure is the physical way that the math is laid out. In other words, this equation leads to that equation, which leads to that equation. This is the layers. But, these layers, those equations, have a whole bunch of parameters. It\u2019s the simple slope formula y=mx+b.</p>\n<p><strong>Scott:</strong> Just numbers.</p>\n<p><strong>Susan:</strong> They\u2019re just numbers. If you can get those M and Bs just right then you can fit the curve.</p>\n<p><strong>Scott:</strong> And there\u2019s just millions of them though.</p>\n<p><strong>Susan:</strong> There\u2019s millions and millions and millions of them. Those things we call parameters.</p>\n<p><strong>Scott:</strong> So, all these dials in the network they need to be turned. <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976779/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/knobs-1.jpg" alt="Alt"></p>\n<p><strong>Susan:</strong> That\u2019s actually one of my favorite images is a person sitting in front of a switch board with 10,000 knobs between 0 and 11. Every single one of those knobs affects every other knob. You\u2019ve got inputs over here and you\u2019ve got outputs over there. If you could just twist those knobs right here to the right step-</p>\n<p><strong>Scott:</strong> There is a correct one that minimizes your error.</p>\n<p><strong>Susan:</strong> There is a great setting of them, but finding that out is hard. So what do you do? This is where back propagation, gradient descent and all these things come into play. You send something through that model and you let it make a guess.</p>\n<p><strong>Scott:</strong> Leave the settings where they are and let it just go.</p>\n<p><strong>Susan:</strong> You look at the outputs that came in there, and you look at the truth, and you have your loss function.</p>\n<p><strong>Scott:</strong> You know the answer to the input that you gave it.</p>\n<h2 id="how-far-away-is-the-output-from-the-model-compared-to-what-the-actual-truth-is">How far away is the output from the model compared to what the actual truth is?</h2>\n<p><strong>Susan:</strong> You\u2019ve got your loss function that\u2019s going to show you that. Now, from that loss function I can take that error and I can propagate it backwards through that network.</p>\n<p><strong>Scott:</strong> Essentially there\u2019s a recipe that says if we have this error down here then what you need to do is go back and turn all of these knobs this much, but it\u2019s only a little bit, each of them. It doesn\u2019t say, \u201CPut this knob in this position.\u201D It says, \u201CMove this one a little bit that way, move that one a little bit that way.\u201D</p>\n<p><strong>Susan:</strong> In every single example that goes through that it\u2019s going to say, \u201CHey, the knob should have been here\u201D and \u201CThe knob\u2019s going to be there.\u201D When you\u2019ve got a bunch of these examples, you take the average of a bunch of examples at once, this is what we call a batch, and now the average says, \u201CIn general, this knob should have gone over here.\u201D You do this a whole lot and eventually you get the settings for those knobs.</p>\n<p><strong>Scott:</strong> You don\u2019t do this once or 10 times, you do this millions of times.</p>\n<p><strong>Susan:</strong> In the end, it comes up with a great setting for those knobs and now the outputs are getting you pretty close to what you want.</p>\n<p><strong>Scott:</strong> At first there\u2019s a lot of movement, the knobs are moving all over the place and then there\u2019s slow refinement as the model starts to get trained.</p>\n<p><strong>Susan:</strong> There is the occasional time where it trips over and a whole bunch of them start going off into their local optimum.</p>\n<p><strong>Scott:</strong> Yeah because they all affect each one of them. It has to make up for that change. That\u2019s generally backpropagation.</p>\n<p>One of the key skills is coming up with 1001 ways of thinking of that. The more ways you start thinking about how this works, the better you understand intuitively what\u2019s going on. That can help you design these things in the future.</p>\n<p><strong>Scott:</strong> Constraints help a lot with this:</p>\n<ul>\n<li>How much money do you have?</li>\n<li>What computing resources do you have?</li>\n<li>What talent do you have?</li>\n</ul>\n<p>You can go on many, many goose chases here, a lot of rabbit holes. You could spend the next 15 years working on a problem and never come up with something that\u2019s actually valuable. There\u2019s still many good things that you\u2019re learning along the way.</p>\n<p>You have to learn to cut off certain things and be like, \u201CGood enough, good enough, good enough\u201D. That\u2019s kind of the way that machine learning is now at least. You have to have some restraint in order to get a real product out the door.</p>\n<p><strong>Susan:</strong> We\u2019ve talked a bit about designing something, but I think a lot of what people don\u2019t realize is that not only is building of them a challenge, but the world isn\u2019t static. Maintaining a deep neural network is actually a really big challenge.</p>\n<h2 id="maintaining-a-deep-neural-network">Maintaining a deep neural network</h2>\n<p><strong>Susan:</strong> Even just consider the license plate problem: every single year there\u2019s 100s of new license plates. Someone goes right to their state representatives and says, \u201CHey, I think the state should have this picture of my favorite cartoon character from 1983\u201D and they get enough signatures and suddenly there\u2019s a brand new license plate in the world. Car designs change, vehicle designs change, all sorts of things change.</p>\n<p><strong>Scott:</strong> In California, the first digit kind of just incrementally goes up. There\u2019s a new first digit just because it\u2019s later on. It wasn\u2019t likely before, but now it\u2019s likely. The idea that you put all this time and effort and it stops, maybe there are problems out there like that, but it\u2019s pretty hard to imagine. We\u2019ll just go back to handwriting, the digit recognition. I can guarantee you that the average penmanship has changed considerably in the last 15-20 years. So, if you think that handwriting is stagnant, you\u2019re not banking on a good bet.</p>\n<p>You need to have some way of keeping your model, keeping your environment up-to-date, and swapping it out, and keeping it trained, and topped off.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976779/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/Early_morning_cobwebs_-2859589264-.jpg" alt="Alt"></p>\n<p><em>Keep the cobwebs off your model, keep your environment up-to-date.</em></p>\n<p><strong>Scott:</strong> Also presumably, you\u2019ve got a model in production and now what do you do with your time? You try to make it better. Hey, I have some ideas, maybe I could do this or maybe I could do that and that will make it better. Great, but the other stuff is still operating over there. What if you make a small improvement? Okay, now there\u2019s this version change, history, and now you get into <a href="https://www.lpalmieri.com/posts/2018-09-14-machine-learning-version-control-is-all-you-need/">version control of your models</a> which is not really a thing yet. People don\u2019t quite think in that way, but they certainly will have to think in that way in the future.</p>\n<p><strong>Susan:</strong> Well that\u2019s a really huge challenge. There\u2019s some decent articles and blog posts on this fairly recently, talking about version control and the machine learning world. That\u2019s just a big challenge. A lot of times you\u2019re talking about not just a few bytes of data here but 100s of megs, which doesn\u2019t sound like a lot but you version that 15 times a day and suddenly you\u2019re talking real data.</p>\n<p><strong>Scott:</strong> A gig or so. You\u2019re filling up your hard drive pretty fast.</p>\n<p><strong>Susan:</strong> The reproducibility of these things is a slight challenge because you can take the same exact model, structure, the same training data, the exact same training pipeline, and most of them incorporate randomness into them for very good reasons, <a href="https://blog.dominodatalab.com/machine-learning-reproducibility-crisis/">so you\u2019ll get a different result if you train a model twice</a> with what you thought was all the same stuff. What does it really mean to version control something is a big challenge.</p>\n<p><strong>Scott:</strong> The question will have to be answered in the next few years probably.</p>\n<p><strong>Susan:</strong> Yeah, we\u2019re seeing the evolution of the industry.</p>\n<p><strong>Scott:</strong> This is a long timescale thing. Hey, we\u2019re at the beginning. It\u2019s like electricity in the 1900s or something, that\u2019s AI now.</p>\n<h2 id="whats-the-key-point">What\u2019s the key point?</h2>\n<p><strong>Susan:</strong> The key point is you got to take real world data somehow. Don\u2019t get stuck in some training world.</p>\n<p><strong>Scott:</strong> You got to use real world data.</p>\n<p><strong>Susan:</strong> Real world data. If you can\u2019t take real world data, you don\u2019t have a useful model, useful structure. How about yourself?</p>\n<p><strong>Scott:</strong> Scott\u2019s key point is: try to get water through the pipes. Just get something working, anything working, and then you can iterate.</p>\n<p><strong>Susan:</strong> Iterate.</p>\n<p><strong>Scott:</strong> Iterate.</p>\n<p><strong>Susan:</strong> Iterate.</p>\n<p><strong>Scott:</strong> Then you can iterate. Hey, maybe it doesn\u2019t work very well at first, that happens for sure, but then you tweak some things, now it starts to work again. Is it all worth it to go through that?</p>\n<p><strong>Susan:</strong> Depends on the problem, depends on the money.</p>\n<p><strong>Scott:</strong> Some problems are too hard, just don\u2019t do it right now. Some problems are really easily solved with something you don\u2019t need to use a neural network for. But there\u2019s a region in between where it\u2019s like, yep, this makes a lot of sense.</p>\n<p><strong>Susan:</strong> If you can get 95% of the way with a simple tool, maybe you should be doing that first.</p>\n<p><strong>Scott:</strong> Might keep doing that, unless it\u2019s something you make billions of dollars from then hey maybe we can do something with neural networks.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/ai-show-how-do-you-use-a-neural-network-in-your-business/index.md" };
function rawContent() {
  return `\r
<iframe src="https://www.youtube.com/embed/L3qudM5xCv0" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

**Scott:** Welcome to the AI Show. Today we're asking the question: How do you use a neural network in your business?

**Susan:** Well let's just talk about what people think of neural networks, simple ones. There's sort of the classic one, the very first thing you ever build when you're learning how to deal with this stuff, the MNIST digit predictory. You're familiar with this?

**Scott:** Yes, MNIST.

**Susan:** It's like Modified National Institute of Standards and Technology.

**Scott:** Handwritten digits. 28 by 28 pixels. Gray scale.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976776/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/MnistExamples.png)

**Susan:** Gray scale, basically they're handed to you on a silver platter and centered. Absolutely useless without a massive ecosystem around it to feed those digits into you in the perfect way.

**Scott:** What do you mean?

**Susan:** Well, you don't just take a picture of a letter and suddenly everything works.

**Scott:** Not that simple, right?

**Susan:** It's definitely not that simple.\r
\r
*   How do you take something like a task of digit recognition?\r
*   How do you break it down?\r
*   How can you use deep learning to actually make an effective, useful model?\r
*   How do you create a tool that you can use in some meaningful way?\r
\r
## Breaking down tasks\r
\r
**Scott:** In the real world, you have a task and you want to do something with a neural network. In this case it's like, I have a camera and I want to take a picture of something and I want it to figure out what is written on some letter. You have handwritten digits, just the digits - zero, one, two, three, four, five, six, seven, eight, nine - and tell me what the digits are. Simple task, right? A human can tell you right off the bat, they can just read them right off.

**Susan:** This is sort of the difference between accuracy in the machine learning world and utility. You can have the most accurate classifier in the world but it's completely useless because you can't feed it that data in the real world.\r
\r
**Scott:** You want to send letters to the right place at the post office or something and you want it to be mechanized. But, people have handwritten everything, so hey, a hard problem, you used to do it with humans, now you want to do it with a machine.

**Susan:** That's the core idea for today, how do we actually create a machine learning model or use neural networks in a real world situation there? We've got a great example there, digital recognition on a letter or something like that-however in the news they're talking about [license plate scanners](https://en.wikipedia.org/wiki/Automatic_number-plate_recognition). What would it take to actually build something like that? How do you actually take an idea and use deep learning in there? What are your big ideas of what you should be thinking about?\r
\r
## Think: What's my data set?\r
\r
**Scott:** You have to think: "What's my data set?" That data set has to be at least kind of close to the task that you're trying to accomplish. Is it pictures of handwritten digits that are centered and perfect or is it pictures of license plates on cars that are driving down roads at oblique angles with lots of light on them or smoke? If you have those pictures fine, but do you have them labeled by a human and are they properly labeled? Are they centered or not, are they all blown out and all white, are they too dark, do they have a big glare in them, et cetera?

**Susan:** Just that first step we've talked about data so many times.

**Scott:** Very important.

**Susan:** It's important not only just to have data, but data that represents the production environment that you're going to be in. It's all well and good to have, say for instance, license plate data. But, if it's not taken in a meaningful way, if it's staged with professional cameras, is that going to be as good of a dataset as actually taking footage from the real world and from the equipment that I expect to use and dealing with it that way? Not the version that it is pristine, but the version that's already gone through whatever Kodak's have had their hands on.

**Scott:** The kind that has been compressed.

**Susan:** It's been compressed, it's been mangled. By the way, why is it whenever you see video like that it's just absolutely the worst?

**Scott:** It's always crappy, like it's been shot by a potato.

**Susan:** It's like Big Foot. Magically, whenever Big Foot shows up, it's on the worst video equipment ever, but you got to think you're about to take pictures of Big Foot and you need to recognize you're going to have that quality.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976777/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/bigfoot-roger-patterson-1_h-1.jpg)

**Scott:** But, you also have to be careful. Don't try to boil the ocean. You don't have to get every single angle. Is it snowing, is it raining, is it whatever? Okay, get verticalized, get one thing working pretty well first and then you'll start to see the problems crop up. But, maybe 80% or 90% of your solution is already there and then you tackle those problems later. You don't have to do everything all at once.

**Susan:** Yeah. That's also another key thing here is be prepared for: iterations on everything.

**Scott:** Iterate.

**Susan:** Iterate.

**Scott:** ... iterate, iterate, iterate.

**Susan:** Get your first hour of data just so you understand formats and how you might be processing and dealing with it before you spend tens of thousands of hours and umpteen millions dollars collecting data that you then find out is not quite right. That's really heartbreaking.

**Scott:** Yeah, you can't just guess the answer from the outset, it's too hard.

**Susan:** It's [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent), right? You assess, take a step, assess, take a step, assess, take a step, it's pretty classic.\r
\r
## What is gradient descent?\r
\r
**Scott:** What do you mean by gradient descent?

**Susan:** It's the basic algorithm that a huge chunk of machine learning uses to train neural networks. Just like I said, I was giving the example there for assessing, taking a step, assessing, taking a step. The assessment stage is using what's called the gradient and that points in a direction that might be a good way to go for your [weights](https://ml-cheatsheet.readthedocs.io/en/latest/nn_concepts.html).

![Alt](https://cdn-images-1.medium.com/max/1600/1*f9a162GhpMbiTVTAua_lLQ.png)

**Scott:** As an example, if you're walking around in a hilly terrain and it's your job to find water you might want to start walking downhill. What do you do? You look around at your feet and you think, "Oh, well the hill is sloping that way, I should go that way." Does that necessarily mean that water's going to be that way? Not necessarily. If you keep going downhill, if there's water around, it's going to be around there. That gets into the discussion of maybe you're in a local optimum, meaning a local minimum in this case and you might need to go over the next ridge and then find an even lower hole somewhere. Still, this is gradient descent. You're looking at the slope and you're moving along that path.

**Susan:** Gradient descent then applies to machine learning, but it also applies to life. It's a great process/technique that really works well. We were talking about gathering data and the idea behind it is: don't jump in whole hog right away.\r
\r
When you're designing a system that's going to be useful, you're really actually thinking: how am I going to use this thing. You've got to think about the data you're going to feed it and the data it needs to be fed in order to predicate some answer that you can then use to do something with.\r
\r
Just, very briefly, think about the MNIST style digit classifier there, data inputs are a 28 by 28 gray scale, centered.

**Scott:** The pixels are white and black, and gray.

**Susan:** How do you build that? You've got a whole ecosystem surrounding that, which it's kind to find where the digits are at, it's got to parse them out and do all these different things. When you're thinking about a production environment: I've got these cameras, how am I going to get to the classifier itself or to the network itself, the data into the shape and form that it was trained on in order to make the prediction that I'm going to then use back out there. If you find that the task of doing that is a lot harder than the model itself, you're probably right. The real world is not well normalized.

**Scott:** If you get your data set right, you get your tools right, you pick your model architecture correct, you get your input and output set, correctly the training's actually pretty easy, you just say, "Go".

**Susan** Encapsulate the problem, that's really what we're talking about here.

**Scott:** Define the problem well.

**Susan:** You need to define that problem. Going back to the iterative idea here, you'll find that you started collecting some data and then you started designing inputs, and outputs, and a model behind it and you realize maybe those inputs, and outputs, and that model can't work with that data so you need to adjust.\r
\r
You go through this iterative system, but you always have to have an eye on the idea: "I can't do anything that the real world doesn't support."\r
\r
That's what a lot of people lose sight of when they're learning how to use these tools the first time.

**Scott:** It has to work for real in a real setting.

**Susan:** Yeah, they're given these pristine data sets that have well encapsulated some simple problem, or even a complex problem. I've personally spent two weeks working on one dataset just to whip it into shape to be usable.

**It's a really hard task to get the real world to be bent and shaped into something that's usable by your particular model.** Keep that in mind when you're thinking about a usable model.\r
\r
## Designing a simple system\r
\r
**Scott:** Let's go from beginning to end for a simple system. You have a dash cam in your car and you want it to detect license plate numbers and display them on a display in your car. So, you're like a police officer or something, right?

**Susan:** Officer Susan.

**Scott:** Officer Susan reporting for duty. You're driving around in your car, you have a dash cam and you want to get a text or display on your screen. Using all the license plate numbers around you, how do you build that system? Okay, you have the camera, then what?

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976778/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/car-collage.jpg)

The camera what is it doing? It's looking at an optical signal in the world. As a lens it's taking in light and it's digitizing it, so that's really important. You have to be able to digitize the thing that you're actually trying to measure. It's pretty hard to measure people's thoughts.

**Susan:** Like you said, you've got to digitize that, you got to be able to put it in some sort of portable processing system if you're doing this real time.

**Scott:** So maybe it's hooked up to a USB. That dash cam is hooked up to a USB cable that goes to a computer and that computer is just saving an image, 30 of them every second, just saving all of them and just building up tons of data.

**Susan:** Relevant to the the question about inputs and outputs, we'll just take a base one here. Are you going to try to figure out something over time or you treat each image individually?

**Scott:** You have 100 pictures of the same license plate. Do you want 100 notifications of that license plate or just 1?

**Susan:** The image classification world has gone light years, just massive leaps forward since the original work on MNIST and what everybody's familiar with, making a simple multi-layer network to recognize digits. In general, you're going to have to find some way of taking that image that you've digitized which you've been able to feed into some engineering solution that takes a picture n seconds or as fast as it can be processed and then looks for the next one. It takes all that, feeds it in to something that's going to probably normalize the image for light and do some techniques for basic image processing to take care of a whole lot of stuff.

**Scott:** Try to make it not too dark, not too light.

**Susan:** The more you can normalize your data, the less your neural network is going to have to work, which is a great thing because the accuracy is going to go up there.\r
\r
**Scott:** Sure, but you have a camera and it's got a pretty big view, and the license plate could be anywhere inside.

**Susan:** You probably have to go into something that's going to detect where license plates are at.

**Scott:** You probably have two systems.

**Susan:** At least.

**Scott:** One that's a license plate detector. It just says, "I think a license plate is here" but that's looking at the entire image. It's looking for the whole thing and then saying, "Oh, I think a license plate is here". Then you have another one that says, "I'm going to snip out only that section and then I'm going to try and read the digits".

**Susan:** It's going to scale it next. It's going to snip out, scale it. You're going to make certain assumptions, because you know what license plates look like, about how to scale it. It's actually probably a nice problem because of that.

**Scott:** A fun problem.

**Susan:** Then finally, you can send it off to your classifier after you've scaled, and sliced, and diced. Now you've got something that might be able to output possible answers that you then display to the person driving. Hopefully they're not texting while they're doing it.

**Scott:** To build the data set for that, if you're starting out it's like, I want to build a license plate reader for that dash cam but I have no data. What do you start doing, strapping cameras to the front of cars and driving around, right? Then you send it off to crowd source the data labeling or you do it yourself and you sit down and look at images, and you draw a box around the license plates. There's the box around the license plates and you use those boxes, the pixel numbers for those boxes, to say in here, "There was a license plate." That's to get the data to build your first model. That just tells you where the license plate is. Once you've gone through and made all those boxes, now those are just images that are for your next data set. Then you go in and say, "Can I read these or not," or "Can a person read them or not?" Then, type in what that license plate is, the numbers or the letters. Now you actually have a labeled data set at that point and that's how you train the models that we're talking about. Identify where the license plate is, then also what is it, what are the numbers.

**Susan:** Keep in mind, this is all a very simplified version of this problem.

**Scott:** We don't have to make it more complicated though. This is a simplified version and it's already really complicated.\r
\r
## The real world has kinks and curves\r
\r
**Susan:** This is a real world use case. The real world is going to throw all sorts of kinks and curves at you. For instance, having multiple cars. You start detecting multiple license plates. What happens when a motorcycle splits lanes right next to you? What are you going to look at there? Those kinds of things, shadows hitting you, those people that put the shields over their license plates to make him hard to see, which, I don't know the legality of that.

**Scott:** A typical system that would identify either where a license plate is or what the numbers are. That would be just a typical [CNN network](https://en.wikipedia.org/wiki/Convolutional_neural_network), a convolutional neural network. These work really well, but those things have been done to death. Many academic papers written about them. You can figure out how deep should it be, how wide should it be, which kernels should I use, all these different settings. You just go download one like Pytorch, TensorFlow, and there it is for you. Now, it might not be trained for exactly what your task is, but you don't have to pick the model architecture and you don't have to go through that whole design process to figure out what's going to work or not. You can pretty much take it off the shelf and hit train, and maybe adjust a few parameters. But, you spent an hour, five hours on that section, maybe a day, and then you spent two months on the other stuff.

**Susan:** That's a great point because there's a lot off the shelf stuff that didn't exist before, especially in the image recognition world. If you're playing in that world, I don't get a good chance to go back there too often, but every time I look there's just more and more amazing tools, especially when it comes to anything on the road. For obvious reasons due to the [autonomous driving revolution](https://www.iotforall.com/iot-and-autonomous-vehicles/) that's happening. Those tools are just getting a tremendous amount of attention and there's a lot of great work that's out there. If you're thinking about building some of these things look for off-the-shelf solutions first.

**Scott:** There's won't be an end to end, everything you need to do, but there will be parts of it that you can save a considerable amount of time.\r
\r
## Using an off-the-shelf system\r
\r
**Susan:** If you go with some off-the-shelf system, that might dictate some hardware that you don't have access to. This model here is using these tools and these tools you either have to delve into them or figure out how to build something that can mimic them in some way, shape, or form. That becomes a real concern, especially for something in the real world where you don't have a lot of processing power available to do this task.

**This comes back to the difference between accuracy and usability. If you have to have a rack of servers sitting in a car to be able to do the task, that's probably not usable, even if it's accurate.**

**Scott:** Maybe a first proof of concept, but this isn't going to be a real product that you ship.

**Susan:** Driving around with all the fans whirring behind you.

**Scott:** With $100,000 worth of computers in the back of your car.

**Susan:** It's great, I can read those license plates now, although probably don't need that much compute for that task.

**Scott:** We talked about data, super important, we talked about inputs and outputs, loss function.\r
\r
## How do you define what your error is?\r
\r
**Susan:** This is really determining more the type of problem you're doing. When we think about a loss function, what we're talking about is the thing that takes truth versus prediction and says how close are they.

**Scott:** What's my error? How do I define what my error is?

**Susan:** That loss function has to be crafted in such a way that it can work with auto-differentiation, this ability to what we call [backpropagate](https://en.wikipedia.org/wiki/Backpropagation) the error all the way through the model if you're talking about deep neural networks.

**Scott:** What does that do though, this backpropagation?

**Susan:** When we talk about a model and model structure the structure is the physical way that the math is laid out. In other words, this equation leads to that equation, which leads to that equation. This is the layers. But, these layers, those equations, have a whole bunch of parameters. It's the simple slope formula y=mx+b.

**Scott:** Just numbers.

**Susan:** They're just numbers. If you can get those M and Bs just right then you can fit the curve.

**Scott:** And there's just millions of them though.

**Susan:** There's millions and millions and millions of them. Those things we call parameters.

**Scott:** So, all these dials in the network they need to be turned. ![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976779/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/knobs-1.jpg)

**Susan:** That's actually one of my favorite images is a person sitting in front of a switch board with 10,000 knobs between 0 and 11\\. Every single one of those knobs affects every other knob. You've got inputs over here and you've got outputs over there. If you could just twist those knobs right here to the right step-

**Scott:** There is a correct one that minimizes your error.

**Susan:** There is a great setting of them, but finding that out is hard. So what do you do? This is where back propagation, gradient descent and all these things come into play. You send something through that model and you let it make a guess.

**Scott:** Leave the settings where they are and let it just go.

**Susan:** You look at the outputs that came in there, and you look at the truth, and you have your loss function.

**Scott:** You know the answer to the input that you gave it.\r
\r
## How far away is the output from the model compared to what the actual truth is?\r
\r
**Susan:** You've got your loss function that's going to show you that. Now, from that loss function I can take that error and I can propagate it backwards through that network.

**Scott:** Essentially there's a recipe that says if we have this error down here then what you need to do is go back and turn all of these knobs this much, but it's only a little bit, each of them. It doesn't say, "Put this knob in this position." It says, "Move this one a little bit that way, move that one a little bit that way."

**Susan:** In every single example that goes through that it's going to say, "Hey, the knob should have been here" and "The knob's going to be there." When you've got a bunch of these examples, you take the average of a bunch of examples at once, this is what we call a batch, and now the average says, "In general, this knob should have gone over here." You do this a whole lot and eventually you get the settings for those knobs.

**Scott:** You don't do this once or 10 times, you do this millions of times.

**Susan:** In the end, it comes up with a great setting for those knobs and now the outputs are getting you pretty close to what you want.

**Scott:** At first there's a lot of movement, the knobs are moving all over the place and then there's slow refinement as the model starts to get trained.

**Susan:** There is the occasional time where it trips over and a whole bunch of them start going off into their local optimum.

**Scott:** Yeah because they all affect each one of them. It has to make up for that change. That's generally backpropagation.\r
\r
One of the key skills is coming up with 1001 ways of thinking of that. The more ways you start thinking about how this works, the better you understand intuitively what's going on. That can help you design these things in the future.\r
\r
**Scott:** Constraints help a lot with this:\r
\r
*   How much money do you have?\r
*   What computing resources do you have?\r
*   What talent do you have?\r
\r
You can go on many, many goose chases here, a lot of rabbit holes. You could spend the next 15 years working on a problem and never come up with something that's actually valuable. There's still many good things that you're learning along the way.\r
\r
You have to learn to cut off certain things and be like, "Good enough, good enough, good enough". That's kind of the way that machine learning is now at least. You have to have some restraint in order to get a real product out the door.\r
\r
**Susan:** We've talked a bit about designing something, but I think a lot of what people don't realize is that not only is building of them a challenge, but the world isn't static. Maintaining a deep neural network is actually a really big challenge.\r
\r
## Maintaining a deep neural network\r
\r
**Susan:** Even just consider the license plate problem: every single year there's 100s of new license plates. Someone goes right to their state representatives and says, "Hey, I think the state should have this picture of my favorite cartoon character from 1983" and they get enough signatures and suddenly there's a brand new license plate in the world. Car designs change, vehicle designs change, all sorts of things change.

**Scott:** In California, the first digit kind of just incrementally goes up. There's a new first digit just because it's later on. It wasn't likely before, but now it's likely. The idea that you put all this time and effort and it stops, maybe there are problems out there like that, but it's pretty hard to imagine. We'll just go back to handwriting, the digit recognition. I can guarantee you that the average penmanship has changed considerably in the last 15-20 years. So, if you think that handwriting is stagnant, you're not banking on a good bet.\r
\r
You need to have some way of keeping your model, keeping your environment up-to-date, and swapping it out, and keeping it trained, and topped off.\r
\r
![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976779/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/Early_morning_cobwebs_-2859589264-.jpg)

_Keep the cobwebs off your model, keep your environment up-to-date._

**Scott:** Also presumably, you've got a model in production and now what do you do with your time? You try to make it better. Hey, I have some ideas, maybe I could do this or maybe I could do that and that will make it better. Great, but the other stuff is still operating over there. What if you make a small improvement? Okay, now there's this version change, history, and now you get into [version control of your models](https://www.lpalmieri.com/posts/2018-09-14-machine-learning-version-control-is-all-you-need/) which is not really a thing yet. People don't quite think in that way, but they certainly will have to think in that way in the future.

**Susan:** Well that's a really huge challenge. There's some decent articles and blog posts on this fairly recently, talking about version control and the machine learning world. That's just a big challenge. A lot of times you're talking about not just a few bytes of data here but 100s of megs, which doesn't sound like a lot but you version that 15 times a day and suddenly you're talking real data.

**Scott:** A gig or so. You're filling up your hard drive pretty fast.

**Susan:** The reproducibility of these things is a slight challenge because you can take the same exact model, structure, the same training data, the exact same training pipeline, and most of them incorporate randomness into them for very good reasons, [so you'll get a different result if you train a model twice](https://blog.dominodatalab.com/machine-learning-reproducibility-crisis/) with what you thought was all the same stuff. What does it really mean to version control something is a big challenge.

**Scott:** The question will have to be answered in the next few years probably.

**Susan:** Yeah, we're seeing the evolution of the industry.

**Scott:** This is a long timescale thing. Hey, we're at the beginning. It's like electricity in the 1900s or something, that's AI now.\r
\r
## What's the key point?\r
\r
**Susan:** The key point is you got to take real world data somehow. Don't get stuck in some training world.

**Scott:** You got to use real world data.

**Susan:** Real world data. If you can't take real world data, you don't have a useful model, useful structure. How about yourself?

**Scott:** Scott's key point is: try to get water through the pipes. Just get something working, anything working, and then you can iterate.

**Susan:** Iterate.

**Scott:** Iterate.

**Susan:** Iterate.

**Scott:** Then you can iterate. Hey, maybe it doesn't work very well at first, that happens for sure, but then you tweak some things, now it starts to work again. Is it all worth it to go through that?

**Susan:** Depends on the problem, depends on the money.

**Scott:** Some problems are too hard, just don't do it right now. Some problems are really easily solved with something you don't need to use a neural network for. But there's a region in between where it's like, yep, this makes a lot of sense.

**Susan:** If you can get 95% of the way with a simple tool, maybe you should be doing that first.\r
\r
**Scott:** Might keep doing that, unless it's something you make billions of dollars from then hey maybe we can do something with neural networks.\r
`;
}
function compiledContent() {
  return '<iframe src="https://www.youtube.com/embed/L3qudM5xCv0" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p><strong>Scott:</strong> Welcome to the AI Show. Today we\u2019re asking the question: How do you use a neural network in your business?</p>\n<p><strong>Susan:</strong> Well let\u2019s just talk about what people think of neural networks, simple ones. There\u2019s sort of the classic one, the very first thing you ever build when you\u2019re learning how to deal with this stuff, the MNIST digit predictory. You\u2019re familiar with this?</p>\n<p><strong>Scott:</strong> Yes, MNIST.</p>\n<p><strong>Susan:</strong> It\u2019s like Modified National Institute of Standards and Technology.</p>\n<p><strong>Scott:</strong> Handwritten digits. 28 by 28 pixels. Gray scale.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976776/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/MnistExamples.png" alt="Alt"></p>\n<p><strong>Susan:</strong> Gray scale, basically they\u2019re handed to you on a silver platter and centered. Absolutely useless without a massive ecosystem around it to feed those digits into you in the perfect way.</p>\n<p><strong>Scott:</strong> What do you mean?</p>\n<p><strong>Susan:</strong> Well, you don\u2019t just take a picture of a letter and suddenly everything works.</p>\n<p><strong>Scott:</strong> Not that simple, right?</p>\n<p><strong>Susan:</strong> It\u2019s definitely not that simple.</p>\n<ul>\n<li>How do you take something like a task of digit recognition?</li>\n<li>How do you break it down?</li>\n<li>How can you use deep learning to actually make an effective, useful model?</li>\n<li>How do you create a tool that you can use in some meaningful way?</li>\n</ul>\n<h2 id="breaking-down-tasks">Breaking down tasks</h2>\n<p><strong>Scott:</strong> In the real world, you have a task and you want to do something with a neural network. In this case it\u2019s like, I have a camera and I want to take a picture of something and I want it to figure out what is written on some letter. You have handwritten digits, just the digits - zero, one, two, three, four, five, six, seven, eight, nine - and tell me what the digits are. Simple task, right? A human can tell you right off the bat, they can just read them right off.</p>\n<p><strong>Susan:</strong> This is sort of the difference between accuracy in the machine learning world and utility. You can have the most accurate classifier in the world but it\u2019s completely useless because you can\u2019t feed it that data in the real world.</p>\n<p><strong>Scott:</strong> You want to send letters to the right place at the post office or something and you want it to be mechanized. But, people have handwritten everything, so hey, a hard problem, you used to do it with humans, now you want to do it with a machine.</p>\n<p><strong>Susan:</strong> That\u2019s the core idea for today, how do we actually create a machine learning model or use neural networks in a real world situation there? We\u2019ve got a great example there, digital recognition on a letter or something like that-however in the news they\u2019re talking about <a href="https://en.wikipedia.org/wiki/Automatic_number-plate_recognition">license plate scanners</a>. What would it take to actually build something like that? How do you actually take an idea and use deep learning in there? What are your big ideas of what you should be thinking about?</p>\n<h2 id="think-whats-my-data-set">Think: What\u2019s my data set?</h2>\n<p><strong>Scott:</strong> You have to think: \u201CWhat\u2019s my data set?\u201D That data set has to be at least kind of close to the task that you\u2019re trying to accomplish. Is it pictures of handwritten digits that are centered and perfect or is it pictures of license plates on cars that are driving down roads at oblique angles with lots of light on them or smoke? If you have those pictures fine, but do you have them labeled by a human and are they properly labeled? Are they centered or not, are they all blown out and all white, are they too dark, do they have a big glare in them, et cetera?</p>\n<p><strong>Susan:</strong> Just that first step we\u2019ve talked about data so many times.</p>\n<p><strong>Scott:</strong> Very important.</p>\n<p><strong>Susan:</strong> It\u2019s important not only just to have data, but data that represents the production environment that you\u2019re going to be in. It\u2019s all well and good to have, say for instance, license plate data. But, if it\u2019s not taken in a meaningful way, if it\u2019s staged with professional cameras, is that going to be as good of a dataset as actually taking footage from the real world and from the equipment that I expect to use and dealing with it that way? Not the version that it is pristine, but the version that\u2019s already gone through whatever Kodak\u2019s have had their hands on.</p>\n<p><strong>Scott:</strong> The kind that has been compressed.</p>\n<p><strong>Susan:</strong> It\u2019s been compressed, it\u2019s been mangled. By the way, why is it whenever you see video like that it\u2019s just absolutely the worst?</p>\n<p><strong>Scott:</strong> It\u2019s always crappy, like it\u2019s been shot by a potato.</p>\n<p><strong>Susan:</strong> It\u2019s like Big Foot. Magically, whenever Big Foot shows up, it\u2019s on the worst video equipment ever, but you got to think you\u2019re about to take pictures of Big Foot and you need to recognize you\u2019re going to have that quality.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976777/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/bigfoot-roger-patterson-1_h-1.jpg" alt="Alt"></p>\n<p><strong>Scott:</strong> But, you also have to be careful. Don\u2019t try to boil the ocean. You don\u2019t have to get every single angle. Is it snowing, is it raining, is it whatever? Okay, get verticalized, get one thing working pretty well first and then you\u2019ll start to see the problems crop up. But, maybe 80% or 90% of your solution is already there and then you tackle those problems later. You don\u2019t have to do everything all at once.</p>\n<p><strong>Susan:</strong> Yeah. That\u2019s also another key thing here is be prepared for: iterations on everything.</p>\n<p><strong>Scott:</strong> Iterate.</p>\n<p><strong>Susan:</strong> Iterate.</p>\n<p><strong>Scott:</strong> \u2026 iterate, iterate, iterate.</p>\n<p><strong>Susan:</strong> Get your first hour of data just so you understand formats and how you might be processing and dealing with it before you spend tens of thousands of hours and umpteen millions dollars collecting data that you then find out is not quite right. That\u2019s really heartbreaking.</p>\n<p><strong>Scott:</strong> Yeah, you can\u2019t just guess the answer from the outset, it\u2019s too hard.</p>\n<p><strong>Susan:</strong> It\u2019s <a href="https://en.wikipedia.org/wiki/Gradient_descent">gradient descent</a>, right? You assess, take a step, assess, take a step, assess, take a step, it\u2019s pretty classic.</p>\n<h2 id="what-is-gradient-descent">What is gradient descent?</h2>\n<p><strong>Scott:</strong> What do you mean by gradient descent?</p>\n<p><strong>Susan:</strong> It\u2019s the basic algorithm that a huge chunk of machine learning uses to train neural networks. Just like I said, I was giving the example there for assessing, taking a step, assessing, taking a step. The assessment stage is using what\u2019s called the gradient and that points in a direction that might be a good way to go for your <a href="https://ml-cheatsheet.readthedocs.io/en/latest/nn_concepts.html">weights</a>.</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*f9a162GhpMbiTVTAua_lLQ.png" alt="Alt"></p>\n<p><strong>Scott:</strong> As an example, if you\u2019re walking around in a hilly terrain and it\u2019s your job to find water you might want to start walking downhill. What do you do? You look around at your feet and you think, \u201COh, well the hill is sloping that way, I should go that way.\u201D Does that necessarily mean that water\u2019s going to be that way? Not necessarily. If you keep going downhill, if there\u2019s water around, it\u2019s going to be around there. That gets into the discussion of maybe you\u2019re in a local optimum, meaning a local minimum in this case and you might need to go over the next ridge and then find an even lower hole somewhere. Still, this is gradient descent. You\u2019re looking at the slope and you\u2019re moving along that path.</p>\n<p><strong>Susan:</strong> Gradient descent then applies to machine learning, but it also applies to life. It\u2019s a great process/technique that really works well. We were talking about gathering data and the idea behind it is: don\u2019t jump in whole hog right away.</p>\n<p>When you\u2019re designing a system that\u2019s going to be useful, you\u2019re really actually thinking: how am I going to use this thing. You\u2019ve got to think about the data you\u2019re going to feed it and the data it needs to be fed in order to predicate some answer that you can then use to do something with.</p>\n<p>Just, very briefly, think about the MNIST style digit classifier there, data inputs are a 28 by 28 gray scale, centered.</p>\n<p><strong>Scott:</strong> The pixels are white and black, and gray.</p>\n<p><strong>Susan:</strong> How do you build that? You\u2019ve got a whole ecosystem surrounding that, which it\u2019s kind to find where the digits are at, it\u2019s got to parse them out and do all these different things. When you\u2019re thinking about a production environment: I\u2019ve got these cameras, how am I going to get to the classifier itself or to the network itself, the data into the shape and form that it was trained on in order to make the prediction that I\u2019m going to then use back out there. If you find that the task of doing that is a lot harder than the model itself, you\u2019re probably right. The real world is not well normalized.</p>\n<p><strong>Scott:</strong> If you get your data set right, you get your tools right, you pick your model architecture correct, you get your input and output set, correctly the training\u2019s actually pretty easy, you just say, \u201CGo\u201D.</p>\n<p><strong>Susan</strong> Encapsulate the problem, that\u2019s really what we\u2019re talking about here.</p>\n<p><strong>Scott:</strong> Define the problem well.</p>\n<p><strong>Susan:</strong> You need to define that problem. Going back to the iterative idea here, you\u2019ll find that you started collecting some data and then you started designing inputs, and outputs, and a model behind it and you realize maybe those inputs, and outputs, and that model can\u2019t work with that data so you need to adjust.</p>\n<p>You go through this iterative system, but you always have to have an eye on the idea: \u201CI can\u2019t do anything that the real world doesn\u2019t support.\u201D</p>\n<p>That\u2019s what a lot of people lose sight of when they\u2019re learning how to use these tools the first time.</p>\n<p><strong>Scott:</strong> It has to work for real in a real setting.</p>\n<p><strong>Susan:</strong> Yeah, they\u2019re given these pristine data sets that have well encapsulated some simple problem, or even a complex problem. I\u2019ve personally spent two weeks working on one dataset just to whip it into shape to be usable.</p>\n<p><strong>It\u2019s a really hard task to get the real world to be bent and shaped into something that\u2019s usable by your particular model.</strong> Keep that in mind when you\u2019re thinking about a usable model.</p>\n<h2 id="designing-a-simple-system">Designing a simple system</h2>\n<p><strong>Scott:</strong> Let\u2019s go from beginning to end for a simple system. You have a dash cam in your car and you want it to detect license plate numbers and display them on a display in your car. So, you\u2019re like a police officer or something, right?</p>\n<p><strong>Susan:</strong> Officer Susan.</p>\n<p><strong>Scott:</strong> Officer Susan reporting for duty. You\u2019re driving around in your car, you have a dash cam and you want to get a text or display on your screen. Using all the license plate numbers around you, how do you build that system? Okay, you have the camera, then what?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976778/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/car-collage.jpg" alt="Alt"></p>\n<p>The camera what is it doing? It\u2019s looking at an optical signal in the world. As a lens it\u2019s taking in light and it\u2019s digitizing it, so that\u2019s really important. You have to be able to digitize the thing that you\u2019re actually trying to measure. It\u2019s pretty hard to measure people\u2019s thoughts.</p>\n<p><strong>Susan:</strong> Like you said, you\u2019ve got to digitize that, you got to be able to put it in some sort of portable processing system if you\u2019re doing this real time.</p>\n<p><strong>Scott:</strong> So maybe it\u2019s hooked up to a USB. That dash cam is hooked up to a USB cable that goes to a computer and that computer is just saving an image, 30 of them every second, just saving all of them and just building up tons of data.</p>\n<p><strong>Susan:</strong> Relevant to the the question about inputs and outputs, we\u2019ll just take a base one here. Are you going to try to figure out something over time or you treat each image individually?</p>\n<p><strong>Scott:</strong> You have 100 pictures of the same license plate. Do you want 100 notifications of that license plate or just 1?</p>\n<p><strong>Susan:</strong> The image classification world has gone light years, just massive leaps forward since the original work on MNIST and what everybody\u2019s familiar with, making a simple multi-layer network to recognize digits. In general, you\u2019re going to have to find some way of taking that image that you\u2019ve digitized which you\u2019ve been able to feed into some engineering solution that takes a picture n seconds or as fast as it can be processed and then looks for the next one. It takes all that, feeds it in to something that\u2019s going to probably normalize the image for light and do some techniques for basic image processing to take care of a whole lot of stuff.</p>\n<p><strong>Scott:</strong> Try to make it not too dark, not too light.</p>\n<p><strong>Susan:</strong> The more you can normalize your data, the less your neural network is going to have to work, which is a great thing because the accuracy is going to go up there.</p>\n<p><strong>Scott:</strong> Sure, but you have a camera and it\u2019s got a pretty big view, and the license plate could be anywhere inside.</p>\n<p><strong>Susan:</strong> You probably have to go into something that\u2019s going to detect where license plates are at.</p>\n<p><strong>Scott:</strong> You probably have two systems.</p>\n<p><strong>Susan:</strong> At least.</p>\n<p><strong>Scott:</strong> One that\u2019s a license plate detector. It just says, \u201CI think a license plate is here\u201D but that\u2019s looking at the entire image. It\u2019s looking for the whole thing and then saying, \u201COh, I think a license plate is here\u201D. Then you have another one that says, \u201CI\u2019m going to snip out only that section and then I\u2019m going to try and read the digits\u201D.</p>\n<p><strong>Susan:</strong> It\u2019s going to scale it next. It\u2019s going to snip out, scale it. You\u2019re going to make certain assumptions, because you know what license plates look like, about how to scale it. It\u2019s actually probably a nice problem because of that.</p>\n<p><strong>Scott:</strong> A fun problem.</p>\n<p><strong>Susan:</strong> Then finally, you can send it off to your classifier after you\u2019ve scaled, and sliced, and diced. Now you\u2019ve got something that might be able to output possible answers that you then display to the person driving. Hopefully they\u2019re not texting while they\u2019re doing it.</p>\n<p><strong>Scott:</strong> To build the data set for that, if you\u2019re starting out it\u2019s like, I want to build a license plate reader for that dash cam but I have no data. What do you start doing, strapping cameras to the front of cars and driving around, right? Then you send it off to crowd source the data labeling or you do it yourself and you sit down and look at images, and you draw a box around the license plates. There\u2019s the box around the license plates and you use those boxes, the pixel numbers for those boxes, to say in here, \u201CThere was a license plate.\u201D That\u2019s to get the data to build your first model. That just tells you where the license plate is. Once you\u2019ve gone through and made all those boxes, now those are just images that are for your next data set. Then you go in and say, \u201CCan I read these or not,\u201D or \u201CCan a person read them or not?\u201D Then, type in what that license plate is, the numbers or the letters. Now you actually have a labeled data set at that point and that\u2019s how you train the models that we\u2019re talking about. Identify where the license plate is, then also what is it, what are the numbers.</p>\n<p><strong>Susan:</strong> Keep in mind, this is all a very simplified version of this problem.</p>\n<p><strong>Scott:</strong> We don\u2019t have to make it more complicated though. This is a simplified version and it\u2019s already really complicated.</p>\n<h2 id="the-real-world-has-kinks-and-curves">The real world has kinks and curves</h2>\n<p><strong>Susan:</strong> This is a real world use case. The real world is going to throw all sorts of kinks and curves at you. For instance, having multiple cars. You start detecting multiple license plates. What happens when a motorcycle splits lanes right next to you? What are you going to look at there? Those kinds of things, shadows hitting you, those people that put the shields over their license plates to make him hard to see, which, I don\u2019t know the legality of that.</p>\n<p><strong>Scott:</strong> A typical system that would identify either where a license plate is or what the numbers are. That would be just a typical <a href="https://en.wikipedia.org/wiki/Convolutional_neural_network">CNN network</a>, a convolutional neural network. These work really well, but those things have been done to death. Many academic papers written about them. You can figure out how deep should it be, how wide should it be, which kernels should I use, all these different settings. You just go download one like Pytorch, TensorFlow, and there it is for you. Now, it might not be trained for exactly what your task is, but you don\u2019t have to pick the model architecture and you don\u2019t have to go through that whole design process to figure out what\u2019s going to work or not. You can pretty much take it off the shelf and hit train, and maybe adjust a few parameters. But, you spent an hour, five hours on that section, maybe a day, and then you spent two months on the other stuff.</p>\n<p><strong>Susan:</strong> That\u2019s a great point because there\u2019s a lot off the shelf stuff that didn\u2019t exist before, especially in the image recognition world. If you\u2019re playing in that world, I don\u2019t get a good chance to go back there too often, but every time I look there\u2019s just more and more amazing tools, especially when it comes to anything on the road. For obvious reasons due to the <a href="https://www.iotforall.com/iot-and-autonomous-vehicles/">autonomous driving revolution</a> that\u2019s happening. Those tools are just getting a tremendous amount of attention and there\u2019s a lot of great work that\u2019s out there. If you\u2019re thinking about building some of these things look for off-the-shelf solutions first.</p>\n<p><strong>Scott:</strong> There\u2019s won\u2019t be an end to end, everything you need to do, but there will be parts of it that you can save a considerable amount of time.</p>\n<h2 id="using-an-off-the-shelf-system">Using an off-the-shelf system</h2>\n<p><strong>Susan:</strong> If you go with some off-the-shelf system, that might dictate some hardware that you don\u2019t have access to. This model here is using these tools and these tools you either have to delve into them or figure out how to build something that can mimic them in some way, shape, or form. That becomes a real concern, especially for something in the real world where you don\u2019t have a lot of processing power available to do this task.</p>\n<p><strong>This comes back to the difference between accuracy and usability. If you have to have a rack of servers sitting in a car to be able to do the task, that\u2019s probably not usable, even if it\u2019s accurate.</strong></p>\n<p><strong>Scott:</strong> Maybe a first proof of concept, but this isn\u2019t going to be a real product that you ship.</p>\n<p><strong>Susan:</strong> Driving around with all the fans whirring behind you.</p>\n<p><strong>Scott:</strong> With $100,000 worth of computers in the back of your car.</p>\n<p><strong>Susan:</strong> It\u2019s great, I can read those license plates now, although probably don\u2019t need that much compute for that task.</p>\n<p><strong>Scott:</strong> We talked about data, super important, we talked about inputs and outputs, loss function.</p>\n<h2 id="how-do-you-define-what-your-error-is">How do you define what your error is?</h2>\n<p><strong>Susan:</strong> This is really determining more the type of problem you\u2019re doing. When we think about a loss function, what we\u2019re talking about is the thing that takes truth versus prediction and says how close are they.</p>\n<p><strong>Scott:</strong> What\u2019s my error? How do I define what my error is?</p>\n<p><strong>Susan:</strong> That loss function has to be crafted in such a way that it can work with auto-differentiation, this ability to what we call <a href="https://en.wikipedia.org/wiki/Backpropagation">backpropagate</a> the error all the way through the model if you\u2019re talking about deep neural networks.</p>\n<p><strong>Scott:</strong> What does that do though, this backpropagation?</p>\n<p><strong>Susan:</strong> When we talk about a model and model structure the structure is the physical way that the math is laid out. In other words, this equation leads to that equation, which leads to that equation. This is the layers. But, these layers, those equations, have a whole bunch of parameters. It\u2019s the simple slope formula y=mx+b.</p>\n<p><strong>Scott:</strong> Just numbers.</p>\n<p><strong>Susan:</strong> They\u2019re just numbers. If you can get those M and Bs just right then you can fit the curve.</p>\n<p><strong>Scott:</strong> And there\u2019s just millions of them though.</p>\n<p><strong>Susan:</strong> There\u2019s millions and millions and millions of them. Those things we call parameters.</p>\n<p><strong>Scott:</strong> So, all these dials in the network they need to be turned. <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976779/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/knobs-1.jpg" alt="Alt"></p>\n<p><strong>Susan:</strong> That\u2019s actually one of my favorite images is a person sitting in front of a switch board with 10,000 knobs between 0 and 11. Every single one of those knobs affects every other knob. You\u2019ve got inputs over here and you\u2019ve got outputs over there. If you could just twist those knobs right here to the right step-</p>\n<p><strong>Scott:</strong> There is a correct one that minimizes your error.</p>\n<p><strong>Susan:</strong> There is a great setting of them, but finding that out is hard. So what do you do? This is where back propagation, gradient descent and all these things come into play. You send something through that model and you let it make a guess.</p>\n<p><strong>Scott:</strong> Leave the settings where they are and let it just go.</p>\n<p><strong>Susan:</strong> You look at the outputs that came in there, and you look at the truth, and you have your loss function.</p>\n<p><strong>Scott:</strong> You know the answer to the input that you gave it.</p>\n<h2 id="how-far-away-is-the-output-from-the-model-compared-to-what-the-actual-truth-is">How far away is the output from the model compared to what the actual truth is?</h2>\n<p><strong>Susan:</strong> You\u2019ve got your loss function that\u2019s going to show you that. Now, from that loss function I can take that error and I can propagate it backwards through that network.</p>\n<p><strong>Scott:</strong> Essentially there\u2019s a recipe that says if we have this error down here then what you need to do is go back and turn all of these knobs this much, but it\u2019s only a little bit, each of them. It doesn\u2019t say, \u201CPut this knob in this position.\u201D It says, \u201CMove this one a little bit that way, move that one a little bit that way.\u201D</p>\n<p><strong>Susan:</strong> In every single example that goes through that it\u2019s going to say, \u201CHey, the knob should have been here\u201D and \u201CThe knob\u2019s going to be there.\u201D When you\u2019ve got a bunch of these examples, you take the average of a bunch of examples at once, this is what we call a batch, and now the average says, \u201CIn general, this knob should have gone over here.\u201D You do this a whole lot and eventually you get the settings for those knobs.</p>\n<p><strong>Scott:</strong> You don\u2019t do this once or 10 times, you do this millions of times.</p>\n<p><strong>Susan:</strong> In the end, it comes up with a great setting for those knobs and now the outputs are getting you pretty close to what you want.</p>\n<p><strong>Scott:</strong> At first there\u2019s a lot of movement, the knobs are moving all over the place and then there\u2019s slow refinement as the model starts to get trained.</p>\n<p><strong>Susan:</strong> There is the occasional time where it trips over and a whole bunch of them start going off into their local optimum.</p>\n<p><strong>Scott:</strong> Yeah because they all affect each one of them. It has to make up for that change. That\u2019s generally backpropagation.</p>\n<p>One of the key skills is coming up with 1001 ways of thinking of that. The more ways you start thinking about how this works, the better you understand intuitively what\u2019s going on. That can help you design these things in the future.</p>\n<p><strong>Scott:</strong> Constraints help a lot with this:</p>\n<ul>\n<li>How much money do you have?</li>\n<li>What computing resources do you have?</li>\n<li>What talent do you have?</li>\n</ul>\n<p>You can go on many, many goose chases here, a lot of rabbit holes. You could spend the next 15 years working on a problem and never come up with something that\u2019s actually valuable. There\u2019s still many good things that you\u2019re learning along the way.</p>\n<p>You have to learn to cut off certain things and be like, \u201CGood enough, good enough, good enough\u201D. That\u2019s kind of the way that machine learning is now at least. You have to have some restraint in order to get a real product out the door.</p>\n<p><strong>Susan:</strong> We\u2019ve talked a bit about designing something, but I think a lot of what people don\u2019t realize is that not only is building of them a challenge, but the world isn\u2019t static. Maintaining a deep neural network is actually a really big challenge.</p>\n<h2 id="maintaining-a-deep-neural-network">Maintaining a deep neural network</h2>\n<p><strong>Susan:</strong> Even just consider the license plate problem: every single year there\u2019s 100s of new license plates. Someone goes right to their state representatives and says, \u201CHey, I think the state should have this picture of my favorite cartoon character from 1983\u201D and they get enough signatures and suddenly there\u2019s a brand new license plate in the world. Car designs change, vehicle designs change, all sorts of things change.</p>\n<p><strong>Scott:</strong> In California, the first digit kind of just incrementally goes up. There\u2019s a new first digit just because it\u2019s later on. It wasn\u2019t likely before, but now it\u2019s likely. The idea that you put all this time and effort and it stops, maybe there are problems out there like that, but it\u2019s pretty hard to imagine. We\u2019ll just go back to handwriting, the digit recognition. I can guarantee you that the average penmanship has changed considerably in the last 15-20 years. So, if you think that handwriting is stagnant, you\u2019re not banking on a good bet.</p>\n<p>You need to have some way of keeping your model, keeping your environment up-to-date, and swapping it out, and keeping it trained, and topped off.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976779/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/Early_morning_cobwebs_-2859589264-.jpg" alt="Alt"></p>\n<p><em>Keep the cobwebs off your model, keep your environment up-to-date.</em></p>\n<p><strong>Scott:</strong> Also presumably, you\u2019ve got a model in production and now what do you do with your time? You try to make it better. Hey, I have some ideas, maybe I could do this or maybe I could do that and that will make it better. Great, but the other stuff is still operating over there. What if you make a small improvement? Okay, now there\u2019s this version change, history, and now you get into <a href="https://www.lpalmieri.com/posts/2018-09-14-machine-learning-version-control-is-all-you-need/">version control of your models</a> which is not really a thing yet. People don\u2019t quite think in that way, but they certainly will have to think in that way in the future.</p>\n<p><strong>Susan:</strong> Well that\u2019s a really huge challenge. There\u2019s some decent articles and blog posts on this fairly recently, talking about version control and the machine learning world. That\u2019s just a big challenge. A lot of times you\u2019re talking about not just a few bytes of data here but 100s of megs, which doesn\u2019t sound like a lot but you version that 15 times a day and suddenly you\u2019re talking real data.</p>\n<p><strong>Scott:</strong> A gig or so. You\u2019re filling up your hard drive pretty fast.</p>\n<p><strong>Susan:</strong> The reproducibility of these things is a slight challenge because you can take the same exact model, structure, the same training data, the exact same training pipeline, and most of them incorporate randomness into them for very good reasons, <a href="https://blog.dominodatalab.com/machine-learning-reproducibility-crisis/">so you\u2019ll get a different result if you train a model twice</a> with what you thought was all the same stuff. What does it really mean to version control something is a big challenge.</p>\n<p><strong>Scott:</strong> The question will have to be answered in the next few years probably.</p>\n<p><strong>Susan:</strong> Yeah, we\u2019re seeing the evolution of the industry.</p>\n<p><strong>Scott:</strong> This is a long timescale thing. Hey, we\u2019re at the beginning. It\u2019s like electricity in the 1900s or something, that\u2019s AI now.</p>\n<h2 id="whats-the-key-point">What\u2019s the key point?</h2>\n<p><strong>Susan:</strong> The key point is you got to take real world data somehow. Don\u2019t get stuck in some training world.</p>\n<p><strong>Scott:</strong> You got to use real world data.</p>\n<p><strong>Susan:</strong> Real world data. If you can\u2019t take real world data, you don\u2019t have a useful model, useful structure. How about yourself?</p>\n<p><strong>Scott:</strong> Scott\u2019s key point is: try to get water through the pipes. Just get something working, anything working, and then you can iterate.</p>\n<p><strong>Susan:</strong> Iterate.</p>\n<p><strong>Scott:</strong> Iterate.</p>\n<p><strong>Susan:</strong> Iterate.</p>\n<p><strong>Scott:</strong> Then you can iterate. Hey, maybe it doesn\u2019t work very well at first, that happens for sure, but then you tweak some things, now it starts to work again. Is it all worth it to go through that?</p>\n<p><strong>Susan:</strong> Depends on the problem, depends on the money.</p>\n<p><strong>Scott:</strong> Some problems are too hard, just don\u2019t do it right now. Some problems are really easily solved with something you don\u2019t need to use a neural network for. But there\u2019s a region in between where it\u2019s like, yep, this makes a lot of sense.</p>\n<p><strong>Susan:</strong> If you can get 95% of the way with a simple tool, maybe you should be doing that first.</p>\n<p><strong>Scott:</strong> Might keep doing that, unless it\u2019s something you make billions of dollars from then hey maybe we can do something with neural networks.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/ai-show-how-do-you-use-a-neural-network-in-your-business/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><iframe src="https://www.youtube.com/embed/L3qudM5xCv0" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<p><strong>Scott:</strong> Welcome to the AI Show. Today we’re asking the question: How do you use a neural network in your business?</p>
<p><strong>Susan:</strong> Well let’s just talk about what people think of neural networks, simple ones. There’s sort of the classic one, the very first thing you ever build when you’re learning how to deal with this stuff, the MNIST digit predictory. You’re familiar with this?</p>
<p><strong>Scott:</strong> Yes, MNIST.</p>
<p><strong>Susan:</strong> It’s like Modified National Institute of Standards and Technology.</p>
<p><strong>Scott:</strong> Handwritten digits. 28 by 28 pixels. Gray scale.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976776/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/MnistExamples.png" alt="Alt"></p>
<p><strong>Susan:</strong> Gray scale, basically they’re handed to you on a silver platter and centered. Absolutely useless without a massive ecosystem around it to feed those digits into you in the perfect way.</p>
<p><strong>Scott:</strong> What do you mean?</p>
<p><strong>Susan:</strong> Well, you don’t just take a picture of a letter and suddenly everything works.</p>
<p><strong>Scott:</strong> Not that simple, right?</p>
<p><strong>Susan:</strong> It’s definitely not that simple.</p>
<ul>
<li>How do you take something like a task of digit recognition?</li>
<li>How do you break it down?</li>
<li>How can you use deep learning to actually make an effective, useful model?</li>
<li>How do you create a tool that you can use in some meaningful way?</li>
</ul>
<h2 id="breaking-down-tasks">Breaking down tasks</h2>
<p><strong>Scott:</strong> In the real world, you have a task and you want to do something with a neural network. In this case it’s like, I have a camera and I want to take a picture of something and I want it to figure out what is written on some letter. You have handwritten digits, just the digits - zero, one, two, three, four, five, six, seven, eight, nine - and tell me what the digits are. Simple task, right? A human can tell you right off the bat, they can just read them right off.</p>
<p><strong>Susan:</strong> This is sort of the difference between accuracy in the machine learning world and utility. You can have the most accurate classifier in the world but it’s completely useless because you can’t feed it that data in the real world.</p>
<p><strong>Scott:</strong> You want to send letters to the right place at the post office or something and you want it to be mechanized. But, people have handwritten everything, so hey, a hard problem, you used to do it with humans, now you want to do it with a machine.</p>
<p><strong>Susan:</strong> That’s the core idea for today, how do we actually create a machine learning model or use neural networks in a real world situation there? We’ve got a great example there, digital recognition on a letter or something like that-however in the news they’re talking about <a href="https://en.wikipedia.org/wiki/Automatic_number-plate_recognition">license plate scanners</a>. What would it take to actually build something like that? How do you actually take an idea and use deep learning in there? What are your big ideas of what you should be thinking about?</p>
<h2 id="think-whats-my-data-set">Think: What’s my data set?</h2>
<p><strong>Scott:</strong> You have to think: “What’s my data set?” That data set has to be at least kind of close to the task that you’re trying to accomplish. Is it pictures of handwritten digits that are centered and perfect or is it pictures of license plates on cars that are driving down roads at oblique angles with lots of light on them or smoke? If you have those pictures fine, but do you have them labeled by a human and are they properly labeled? Are they centered or not, are they all blown out and all white, are they too dark, do they have a big glare in them, et cetera?</p>
<p><strong>Susan:</strong> Just that first step we’ve talked about data so many times.</p>
<p><strong>Scott:</strong> Very important.</p>
<p><strong>Susan:</strong> It’s important not only just to have data, but data that represents the production environment that you’re going to be in. It’s all well and good to have, say for instance, license plate data. But, if it’s not taken in a meaningful way, if it’s staged with professional cameras, is that going to be as good of a dataset as actually taking footage from the real world and from the equipment that I expect to use and dealing with it that way? Not the version that it is pristine, but the version that’s already gone through whatever Kodak’s have had their hands on.</p>
<p><strong>Scott:</strong> The kind that has been compressed.</p>
<p><strong>Susan:</strong> It’s been compressed, it’s been mangled. By the way, why is it whenever you see video like that it’s just absolutely the worst?</p>
<p><strong>Scott:</strong> It’s always crappy, like it’s been shot by a potato.</p>
<p><strong>Susan:</strong> It’s like Big Foot. Magically, whenever Big Foot shows up, it’s on the worst video equipment ever, but you got to think you’re about to take pictures of Big Foot and you need to recognize you’re going to have that quality.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976777/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/bigfoot-roger-patterson-1_h-1.jpg" alt="Alt"></p>
<p><strong>Scott:</strong> But, you also have to be careful. Don’t try to boil the ocean. You don’t have to get every single angle. Is it snowing, is it raining, is it whatever? Okay, get verticalized, get one thing working pretty well first and then you’ll start to see the problems crop up. But, maybe 80% or 90% of your solution is already there and then you tackle those problems later. You don’t have to do everything all at once.</p>
<p><strong>Susan:</strong> Yeah. That’s also another key thing here is be prepared for: iterations on everything.</p>
<p><strong>Scott:</strong> Iterate.</p>
<p><strong>Susan:</strong> Iterate.</p>
<p><strong>Scott:</strong> … iterate, iterate, iterate.</p>
<p><strong>Susan:</strong> Get your first hour of data just so you understand formats and how you might be processing and dealing with it before you spend tens of thousands of hours and umpteen millions dollars collecting data that you then find out is not quite right. That’s really heartbreaking.</p>
<p><strong>Scott:</strong> Yeah, you can’t just guess the answer from the outset, it’s too hard.</p>
<p><strong>Susan:</strong> It’s <a href="https://en.wikipedia.org/wiki/Gradient_descent">gradient descent</a>, right? You assess, take a step, assess, take a step, assess, take a step, it’s pretty classic.</p>
<h2 id="what-is-gradient-descent">What is gradient descent?</h2>
<p><strong>Scott:</strong> What do you mean by gradient descent?</p>
<p><strong>Susan:</strong> It’s the basic algorithm that a huge chunk of machine learning uses to train neural networks. Just like I said, I was giving the example there for assessing, taking a step, assessing, taking a step. The assessment stage is using what’s called the gradient and that points in a direction that might be a good way to go for your <a href="https://ml-cheatsheet.readthedocs.io/en/latest/nn_concepts.html">weights</a>.</p>
<p><img src="https://cdn-images-1.medium.com/max/1600/1*f9a162GhpMbiTVTAua_lLQ.png" alt="Alt"></p>
<p><strong>Scott:</strong> As an example, if you’re walking around in a hilly terrain and it’s your job to find water you might want to start walking downhill. What do you do? You look around at your feet and you think, “Oh, well the hill is sloping that way, I should go that way.” Does that necessarily mean that water’s going to be that way? Not necessarily. If you keep going downhill, if there’s water around, it’s going to be around there. That gets into the discussion of maybe you’re in a local optimum, meaning a local minimum in this case and you might need to go over the next ridge and then find an even lower hole somewhere. Still, this is gradient descent. You’re looking at the slope and you’re moving along that path.</p>
<p><strong>Susan:</strong> Gradient descent then applies to machine learning, but it also applies to life. It’s a great process/technique that really works well. We were talking about gathering data and the idea behind it is: don’t jump in whole hog right away.</p>
<p>When you’re designing a system that’s going to be useful, you’re really actually thinking: how am I going to use this thing. You’ve got to think about the data you’re going to feed it and the data it needs to be fed in order to predicate some answer that you can then use to do something with.</p>
<p>Just, very briefly, think about the MNIST style digit classifier there, data inputs are a 28 by 28 gray scale, centered.</p>
<p><strong>Scott:</strong> The pixels are white and black, and gray.</p>
<p><strong>Susan:</strong> How do you build that? You’ve got a whole ecosystem surrounding that, which it’s kind to find where the digits are at, it’s got to parse them out and do all these different things. When you’re thinking about a production environment: I’ve got these cameras, how am I going to get to the classifier itself or to the network itself, the data into the shape and form that it was trained on in order to make the prediction that I’m going to then use back out there. If you find that the task of doing that is a lot harder than the model itself, you’re probably right. The real world is not well normalized.</p>
<p><strong>Scott:</strong> If you get your data set right, you get your tools right, you pick your model architecture correct, you get your input and output set, correctly the training’s actually pretty easy, you just say, “Go”.</p>
<p><strong>Susan</strong> Encapsulate the problem, that’s really what we’re talking about here.</p>
<p><strong>Scott:</strong> Define the problem well.</p>
<p><strong>Susan:</strong> You need to define that problem. Going back to the iterative idea here, you’ll find that you started collecting some data and then you started designing inputs, and outputs, and a model behind it and you realize maybe those inputs, and outputs, and that model can’t work with that data so you need to adjust.</p>
<p>You go through this iterative system, but you always have to have an eye on the idea: “I can’t do anything that the real world doesn’t support.”</p>
<p>That’s what a lot of people lose sight of when they’re learning how to use these tools the first time.</p>
<p><strong>Scott:</strong> It has to work for real in a real setting.</p>
<p><strong>Susan:</strong> Yeah, they’re given these pristine data sets that have well encapsulated some simple problem, or even a complex problem. I’ve personally spent two weeks working on one dataset just to whip it into shape to be usable.</p>
<p><strong>It’s a really hard task to get the real world to be bent and shaped into something that’s usable by your particular model.</strong> Keep that in mind when you’re thinking about a usable model.</p>
<h2 id="designing-a-simple-system">Designing a simple system</h2>
<p><strong>Scott:</strong> Let’s go from beginning to end for a simple system. You have a dash cam in your car and you want it to detect license plate numbers and display them on a display in your car. So, you’re like a police officer or something, right?</p>
<p><strong>Susan:</strong> Officer Susan.</p>
<p><strong>Scott:</strong> Officer Susan reporting for duty. You’re driving around in your car, you have a dash cam and you want to get a text or display on your screen. Using all the license plate numbers around you, how do you build that system? Okay, you have the camera, then what?</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976778/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/car-collage.jpg" alt="Alt"></p>
<p>The camera what is it doing? It’s looking at an optical signal in the world. As a lens it’s taking in light and it’s digitizing it, so that’s really important. You have to be able to digitize the thing that you’re actually trying to measure. It’s pretty hard to measure people’s thoughts.</p>
<p><strong>Susan:</strong> Like you said, you’ve got to digitize that, you got to be able to put it in some sort of portable processing system if you’re doing this real time.</p>
<p><strong>Scott:</strong> So maybe it’s hooked up to a USB. That dash cam is hooked up to a USB cable that goes to a computer and that computer is just saving an image, 30 of them every second, just saving all of them and just building up tons of data.</p>
<p><strong>Susan:</strong> Relevant to the the question about inputs and outputs, we’ll just take a base one here. Are you going to try to figure out something over time or you treat each image individually?</p>
<p><strong>Scott:</strong> You have 100 pictures of the same license plate. Do you want 100 notifications of that license plate or just 1?</p>
<p><strong>Susan:</strong> The image classification world has gone light years, just massive leaps forward since the original work on MNIST and what everybody’s familiar with, making a simple multi-layer network to recognize digits. In general, you’re going to have to find some way of taking that image that you’ve digitized which you’ve been able to feed into some engineering solution that takes a picture n seconds or as fast as it can be processed and then looks for the next one. It takes all that, feeds it in to something that’s going to probably normalize the image for light and do some techniques for basic image processing to take care of a whole lot of stuff.</p>
<p><strong>Scott:</strong> Try to make it not too dark, not too light.</p>
<p><strong>Susan:</strong> The more you can normalize your data, the less your neural network is going to have to work, which is a great thing because the accuracy is going to go up there.</p>
<p><strong>Scott:</strong> Sure, but you have a camera and it’s got a pretty big view, and the license plate could be anywhere inside.</p>
<p><strong>Susan:</strong> You probably have to go into something that’s going to detect where license plates are at.</p>
<p><strong>Scott:</strong> You probably have two systems.</p>
<p><strong>Susan:</strong> At least.</p>
<p><strong>Scott:</strong> One that’s a license plate detector. It just says, “I think a license plate is here” but that’s looking at the entire image. It’s looking for the whole thing and then saying, “Oh, I think a license plate is here”. Then you have another one that says, “I’m going to snip out only that section and then I’m going to try and read the digits”.</p>
<p><strong>Susan:</strong> It’s going to scale it next. It’s going to snip out, scale it. You’re going to make certain assumptions, because you know what license plates look like, about how to scale it. It’s actually probably a nice problem because of that.</p>
<p><strong>Scott:</strong> A fun problem.</p>
<p><strong>Susan:</strong> Then finally, you can send it off to your classifier after you’ve scaled, and sliced, and diced. Now you’ve got something that might be able to output possible answers that you then display to the person driving. Hopefully they’re not texting while they’re doing it.</p>
<p><strong>Scott:</strong> To build the data set for that, if you’re starting out it’s like, I want to build a license plate reader for that dash cam but I have no data. What do you start doing, strapping cameras to the front of cars and driving around, right? Then you send it off to crowd source the data labeling or you do it yourself and you sit down and look at images, and you draw a box around the license plates. There’s the box around the license plates and you use those boxes, the pixel numbers for those boxes, to say in here, “There was a license plate.” That’s to get the data to build your first model. That just tells you where the license plate is. Once you’ve gone through and made all those boxes, now those are just images that are for your next data set. Then you go in and say, “Can I read these or not,” or “Can a person read them or not?” Then, type in what that license plate is, the numbers or the letters. Now you actually have a labeled data set at that point and that’s how you train the models that we’re talking about. Identify where the license plate is, then also what is it, what are the numbers.</p>
<p><strong>Susan:</strong> Keep in mind, this is all a very simplified version of this problem.</p>
<p><strong>Scott:</strong> We don’t have to make it more complicated though. This is a simplified version and it’s already really complicated.</p>
<h2 id="the-real-world-has-kinks-and-curves">The real world has kinks and curves</h2>
<p><strong>Susan:</strong> This is a real world use case. The real world is going to throw all sorts of kinks and curves at you. For instance, having multiple cars. You start detecting multiple license plates. What happens when a motorcycle splits lanes right next to you? What are you going to look at there? Those kinds of things, shadows hitting you, those people that put the shields over their license plates to make him hard to see, which, I don’t know the legality of that.</p>
<p><strong>Scott:</strong> A typical system that would identify either where a license plate is or what the numbers are. That would be just a typical <a href="https://en.wikipedia.org/wiki/Convolutional_neural_network">CNN network</a>, a convolutional neural network. These work really well, but those things have been done to death. Many academic papers written about them. You can figure out how deep should it be, how wide should it be, which kernels should I use, all these different settings. You just go download one like Pytorch, TensorFlow, and there it is for you. Now, it might not be trained for exactly what your task is, but you don’t have to pick the model architecture and you don’t have to go through that whole design process to figure out what’s going to work or not. You can pretty much take it off the shelf and hit train, and maybe adjust a few parameters. But, you spent an hour, five hours on that section, maybe a day, and then you spent two months on the other stuff.</p>
<p><strong>Susan:</strong> That’s a great point because there’s a lot off the shelf stuff that didn’t exist before, especially in the image recognition world. If you’re playing in that world, I don’t get a good chance to go back there too often, but every time I look there’s just more and more amazing tools, especially when it comes to anything on the road. For obvious reasons due to the <a href="https://www.iotforall.com/iot-and-autonomous-vehicles/">autonomous driving revolution</a> that’s happening. Those tools are just getting a tremendous amount of attention and there’s a lot of great work that’s out there. If you’re thinking about building some of these things look for off-the-shelf solutions first.</p>
<p><strong>Scott:</strong> There’s won’t be an end to end, everything you need to do, but there will be parts of it that you can save a considerable amount of time.</p>
<h2 id="using-an-off-the-shelf-system">Using an off-the-shelf system</h2>
<p><strong>Susan:</strong> If you go with some off-the-shelf system, that might dictate some hardware that you don’t have access to. This model here is using these tools and these tools you either have to delve into them or figure out how to build something that can mimic them in some way, shape, or form. That becomes a real concern, especially for something in the real world where you don’t have a lot of processing power available to do this task.</p>
<p><strong>This comes back to the difference between accuracy and usability. If you have to have a rack of servers sitting in a car to be able to do the task, that’s probably not usable, even if it’s accurate.</strong></p>
<p><strong>Scott:</strong> Maybe a first proof of concept, but this isn’t going to be a real product that you ship.</p>
<p><strong>Susan:</strong> Driving around with all the fans whirring behind you.</p>
<p><strong>Scott:</strong> With $100,000 worth of computers in the back of your car.</p>
<p><strong>Susan:</strong> It’s great, I can read those license plates now, although probably don’t need that much compute for that task.</p>
<p><strong>Scott:</strong> We talked about data, super important, we talked about inputs and outputs, loss function.</p>
<h2 id="how-do-you-define-what-your-error-is">How do you define what your error is?</h2>
<p><strong>Susan:</strong> This is really determining more the type of problem you’re doing. When we think about a loss function, what we’re talking about is the thing that takes truth versus prediction and says how close are they.</p>
<p><strong>Scott:</strong> What’s my error? How do I define what my error is?</p>
<p><strong>Susan:</strong> That loss function has to be crafted in such a way that it can work with auto-differentiation, this ability to what we call <a href="https://en.wikipedia.org/wiki/Backpropagation">backpropagate</a> the error all the way through the model if you’re talking about deep neural networks.</p>
<p><strong>Scott:</strong> What does that do though, this backpropagation?</p>
<p><strong>Susan:</strong> When we talk about a model and model structure the structure is the physical way that the math is laid out. In other words, this equation leads to that equation, which leads to that equation. This is the layers. But, these layers, those equations, have a whole bunch of parameters. It’s the simple slope formula y=mx+b.</p>
<p><strong>Scott:</strong> Just numbers.</p>
<p><strong>Susan:</strong> They’re just numbers. If you can get those M and Bs just right then you can fit the curve.</p>
<p><strong>Scott:</strong> And there’s just millions of them though.</p>
<p><strong>Susan:</strong> There’s millions and millions and millions of them. Those things we call parameters.</p>
<p><strong>Scott:</strong> So, all these dials in the network they need to be turned. <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976779/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/knobs-1.jpg" alt="Alt"></p>
<p><strong>Susan:</strong> That’s actually one of my favorite images is a person sitting in front of a switch board with 10,000 knobs between 0 and 11. Every single one of those knobs affects every other knob. You’ve got inputs over here and you’ve got outputs over there. If you could just twist those knobs right here to the right step-</p>
<p><strong>Scott:</strong> There is a correct one that minimizes your error.</p>
<p><strong>Susan:</strong> There is a great setting of them, but finding that out is hard. So what do you do? This is where back propagation, gradient descent and all these things come into play. You send something through that model and you let it make a guess.</p>
<p><strong>Scott:</strong> Leave the settings where they are and let it just go.</p>
<p><strong>Susan:</strong> You look at the outputs that came in there, and you look at the truth, and you have your loss function.</p>
<p><strong>Scott:</strong> You know the answer to the input that you gave it.</p>
<h2 id="how-far-away-is-the-output-from-the-model-compared-to-what-the-actual-truth-is">How far away is the output from the model compared to what the actual truth is?</h2>
<p><strong>Susan:</strong> You’ve got your loss function that’s going to show you that. Now, from that loss function I can take that error and I can propagate it backwards through that network.</p>
<p><strong>Scott:</strong> Essentially there’s a recipe that says if we have this error down here then what you need to do is go back and turn all of these knobs this much, but it’s only a little bit, each of them. It doesn’t say, “Put this knob in this position.” It says, “Move this one a little bit that way, move that one a little bit that way.”</p>
<p><strong>Susan:</strong> In every single example that goes through that it’s going to say, “Hey, the knob should have been here” and “The knob’s going to be there.” When you’ve got a bunch of these examples, you take the average of a bunch of examples at once, this is what we call a batch, and now the average says, “In general, this knob should have gone over here.” You do this a whole lot and eventually you get the settings for those knobs.</p>
<p><strong>Scott:</strong> You don’t do this once or 10 times, you do this millions of times.</p>
<p><strong>Susan:</strong> In the end, it comes up with a great setting for those knobs and now the outputs are getting you pretty close to what you want.</p>
<p><strong>Scott:</strong> At first there’s a lot of movement, the knobs are moving all over the place and then there’s slow refinement as the model starts to get trained.</p>
<p><strong>Susan:</strong> There is the occasional time where it trips over and a whole bunch of them start going off into their local optimum.</p>
<p><strong>Scott:</strong> Yeah because they all affect each one of them. It has to make up for that change. That’s generally backpropagation.</p>
<p>One of the key skills is coming up with 1001 ways of thinking of that. The more ways you start thinking about how this works, the better you understand intuitively what’s going on. That can help you design these things in the future.</p>
<p><strong>Scott:</strong> Constraints help a lot with this:</p>
<ul>
<li>How much money do you have?</li>
<li>What computing resources do you have?</li>
<li>What talent do you have?</li>
</ul>
<p>You can go on many, many goose chases here, a lot of rabbit holes. You could spend the next 15 years working on a problem and never come up with something that’s actually valuable. There’s still many good things that you’re learning along the way.</p>
<p>You have to learn to cut off certain things and be like, “Good enough, good enough, good enough”. That’s kind of the way that machine learning is now at least. You have to have some restraint in order to get a real product out the door.</p>
<p><strong>Susan:</strong> We’ve talked a bit about designing something, but I think a lot of what people don’t realize is that not only is building of them a challenge, but the world isn’t static. Maintaining a deep neural network is actually a really big challenge.</p>
<h2 id="maintaining-a-deep-neural-network">Maintaining a deep neural network</h2>
<p><strong>Susan:</strong> Even just consider the license plate problem: every single year there’s 100s of new license plates. Someone goes right to their state representatives and says, “Hey, I think the state should have this picture of my favorite cartoon character from 1983” and they get enough signatures and suddenly there’s a brand new license plate in the world. Car designs change, vehicle designs change, all sorts of things change.</p>
<p><strong>Scott:</strong> In California, the first digit kind of just incrementally goes up. There’s a new first digit just because it’s later on. It wasn’t likely before, but now it’s likely. The idea that you put all this time and effort and it stops, maybe there are problems out there like that, but it’s pretty hard to imagine. We’ll just go back to handwriting, the digit recognition. I can guarantee you that the average penmanship has changed considerably in the last 15-20 years. So, if you think that handwriting is stagnant, you’re not banking on a good bet.</p>
<p>You need to have some way of keeping your model, keeping your environment up-to-date, and swapping it out, and keeping it trained, and topped off.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976779/blog/ai-show-how-do-you-use-a-neural-network-in-your-business/Early_morning_cobwebs_-2859589264-.jpg" alt="Alt"></p>
<p><em>Keep the cobwebs off your model, keep your environment up-to-date.</em></p>
<p><strong>Scott:</strong> Also presumably, you’ve got a model in production and now what do you do with your time? You try to make it better. Hey, I have some ideas, maybe I could do this or maybe I could do that and that will make it better. Great, but the other stuff is still operating over there. What if you make a small improvement? Okay, now there’s this version change, history, and now you get into <a href="https://www.lpalmieri.com/posts/2018-09-14-machine-learning-version-control-is-all-you-need/">version control of your models</a> which is not really a thing yet. People don’t quite think in that way, but they certainly will have to think in that way in the future.</p>
<p><strong>Susan:</strong> Well that’s a really huge challenge. There’s some decent articles and blog posts on this fairly recently, talking about version control and the machine learning world. That’s just a big challenge. A lot of times you’re talking about not just a few bytes of data here but 100s of megs, which doesn’t sound like a lot but you version that 15 times a day and suddenly you’re talking real data.</p>
<p><strong>Scott:</strong> A gig or so. You’re filling up your hard drive pretty fast.</p>
<p><strong>Susan:</strong> The reproducibility of these things is a slight challenge because you can take the same exact model, structure, the same training data, the exact same training pipeline, and most of them incorporate randomness into them for very good reasons, <a href="https://blog.dominodatalab.com/machine-learning-reproducibility-crisis/">so you’ll get a different result if you train a model twice</a> with what you thought was all the same stuff. What does it really mean to version control something is a big challenge.</p>
<p><strong>Scott:</strong> The question will have to be answered in the next few years probably.</p>
<p><strong>Susan:</strong> Yeah, we’re seeing the evolution of the industry.</p>
<p><strong>Scott:</strong> This is a long timescale thing. Hey, we’re at the beginning. It’s like electricity in the 1900s or something, that’s AI now.</p>
<h2 id="whats-the-key-point">What’s the key point?</h2>
<p><strong>Susan:</strong> The key point is you got to take real world data somehow. Don’t get stuck in some training world.</p>
<p><strong>Scott:</strong> You got to use real world data.</p>
<p><strong>Susan:</strong> Real world data. If you can’t take real world data, you don’t have a useful model, useful structure. How about yourself?</p>
<p><strong>Scott:</strong> Scott’s key point is: try to get water through the pipes. Just get something working, anything working, and then you can iterate.</p>
<p><strong>Susan:</strong> Iterate.</p>
<p><strong>Scott:</strong> Iterate.</p>
<p><strong>Susan:</strong> Iterate.</p>
<p><strong>Scott:</strong> Then you can iterate. Hey, maybe it doesn’t work very well at first, that happens for sure, but then you tweak some things, now it starts to work again. Is it all worth it to go through that?</p>
<p><strong>Susan:</strong> Depends on the problem, depends on the money.</p>
<p><strong>Scott:</strong> Some problems are too hard, just don’t do it right now. Some problems are really easily solved with something you don’t need to use a neural network for. But there’s a region in between where it’s like, yep, this makes a lot of sense.</p>
<p><strong>Susan:</strong> If you can get 95% of the way with a simple tool, maybe you should be doing that first.</p>
<p><strong>Scott:</strong> Might keep doing that, unless it’s something you make billions of dollars from then hey maybe we can do something with neural networks.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/ai-show-how-do-you-use-a-neural-network-in-your-business/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
