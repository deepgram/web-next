---
title: "What are the different types of machine learning? - AI Show"
description: ""
date: 2018-09-15
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981314/blog/ai-show-different-types-of-machine-learning/what-are-the-different-types-of-machine-learning-b.jpg
authors:
  - scott-stephenson
category: ai-and-engineering
tags:
  - deep-learning
seo:
  title: "What are the different types of machine learning? - AI Show"
  description: ""
shorturls:
  share: https://dpgr.am/5c9136c
  twitter: https://dpgr.am/cd3415f
  linkedin: https://dpgr.am/b61ac44
  reddit: https://dpgr.am/af0a17a
  facebook: https://dpgr.am/4bfcd8a
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981314/blog/ai-show-different-types-of-machine-learning/what-are-the-different-types-of-machine-learning-b.jpg
---

<iframe width="600" height="315" src="https://www.youtube.com/embed/7VMio8Tk2so" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>

**Scott**: Welcome to the AI show. Today we're asking a couple big questions. What are those big questions?

*   What are the different types of [machine learning](https://en.wikipedia.org/wiki/Machine_learning)?
*   What are the different types of data?

Usually people think about three different types, like reinforcement learning, unsupervised, or supervised.

#### What is Reinforcement Learning?

**Susan**: [Reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning) is learning from a series of actions where you get a series of choices and rewards along away. So, a classic one that's been in the news is [AlphaGo](https://en.wikipedia.org/wiki/AlphaGo). A large chunk of reinforcement learning techniques are used in there, specifically Monte Carlo tree research techniques.

**Scott**: So, people play the game Go. AlphaGo is a machine playing Go, being very good at it, and beating the world's top Go players.

 [![alt](https://res.cloudinary.com/deepgram/image/upload/v1661976374/blog/ai-show-different-types-of-machine-learning/alphago.jpg)](https://www.independent.co.uk/life-style/gadgets-and-tech/news/google-alphago-computer-beats-professional-at-worlds-most-complex-board-game-go-a6837506.html)

**Susan**: Another one that's really fun and has popped up the last couple of years is based off of Atari games. Atari specifically has a great tool kit if you're into this world. If you want to learn more, dig up the [Atari learning environment](http://yavar.naddaf.name/ale/) and start going through a lot of go of code associated with that. It's a phenomenal toolkit for all sorts of stuff, but specifically it's been helping reinforcement learning because these games are a series actions. They lead to reward, a score.

**Scott**: So, reinforcement learning is like, "Hey, I'm taking some actions. I can do any number of things, but what I'm trying to do is make some number go up - like my score or my happiness."

**Susan**: Exactly. Classically, there isn't just one reward at the end. You can get rewards along the way and the question is, "How do I maximize that in the infinite game? How do I get the biggest payoff throughout time?" It's great because it allows you not only to explore classic reinforcement learning, but also get into things like image recognition:

*   How do I look at the screen?
*   What does it mean to do that?
*   What parts of that screen are important?
*   What do I focus on?

There's a lot of great techniques that can draw you in there. You can do simple stuff or really complex stuff. It is just a fun, awesome environment to explore nothing but a bunch of great technologies.

#### What is Reinforcement Learning good at?

**Scott**: What kind of problem would you throw at reinforcement learning, say, "Go" and expect it to work?

**Susan**: So reinforcement learning has a lot of problems that fit into graphs. So a series actions that lead to other choices, actions that lead to other choices, actions lead to other choices. So,

*   Trying to find a good path on a map.
*   Trying to win one of the thousand Atari games out there.
*   Trying to play a game like checkers or chess.

You know, the classic, "I take a move, my opponent takes a move, I take a move, my opponent takes a move."

**Scott**: So where things are pretty rigid and the actions that you take are known. An act of God isn't going to come in and change something. It's, "Here's your environment, play in it."

**Susan**: Basically where there's some finite set states, they transition in some way that we can model, and they have actions that affect those transitions.

So, say I have four options in front of me. I choose A and I'm in state _n_ right now. There's some probability based off of the action I choose for what state I'll end up in after that. Reinforcement learning allows me to understand those probabilities, these transitions, and also what's called the best policy. In other words, given all this information, "What is the best action I should take to get some sort of reward in the end?" But, it sounds dry and academic when you start talking that way. It's a lot better when you say, "Hey, I'm gonna play Pole Position. Do I move the car left? Do I move it right? Do I tell it to speed up? Do I tell it to slow down?" It's the same thing.

 [![alt](https://res.cloudinary.com/deepgram/image/upload/v1661976374/blog/ai-show-different-types-of-machine-learning/poleposition.png)](https://en.wikipedia.org/wiki/Pole_Position)

**Scott**: Yeah, it might have access to the image - it can look around, it could look on the screen, it can see if a car has passed it or not - but it has to figure all those things out on its own. It's getting the input from the screen, it knows what position it's in, and it's trying to make that position number one or make its lap time faster in the game.

**Susan**: Exactly, it's great. And going back to the Atari learning environment, when you're trying to frame this as a reinforcement learning problem, you've got to figure out how to identify the state you're in and what actions are available and do those different things.

#### What is supervised learning?

**Susan**: So, when we talk about unsupervised, supervised, semi-supervised the classic definitions are all around data. So [supervised learning](https://en.wikipedia.org/wiki/Supervised_learning), you've got a bunch of labeled, training data. Labeled meaning like "I've got a picture of a cat and I've got right next to it `cat`. Every single piece of information I've got has the answer of what it is right next to it.

One of the most famous examples that people start off with is the [MNIST](http://yann.lecun.com/exdb/mnist/) handwriting digit recognition.

 [![alt](https://res.cloudinary.com/deepgram/image/upload/v1661976375/blog/ai-show-different-types-of-machine-learning/mnist.png)](https://en.wikipedia.org/wiki/MNIST_database)

**Scott**: These are images where people have handwritten numbers on a piece of paper. That means 0, 1, 2, 3, 4, 5, 6, 7, 8, 9\. Many different people have written many different digits, but they've all been labeled. So somebody has gone through and said, "A one is a 1 and a five is a 5, and an eight is an 8." It's collections of 28x28 pixels. This was done in the late nineties, but it's a large number, I think sixty thousand images. It's just black and white images of 28x28 pixels, but you can read it. You can look at it as a human and be like, "Yep. That's a two."

**Susan**: It's great as an academic set and it was also very useful when it came out for practical things like reading the mail.

**Scott**: I think this was actually implemented in the post office in the late nineties.

**Susan**: It's awesome because it's small off enough from a data perspective that pretty much anybody with a home computer can do real networks against it, you can see real results, apply some basic stuff, and have a good time learning a lot of stuff about it. It's also very easy for you to say, "Oh, that's a one. That's a two." or whatever and kind of see where your model messes up.

**Scott**: Yeah you only have to pick from ten. It's not that hard, but there are many different objects in the world for other datasets.

#### Let's talk datasets

**Susan**: [ImageNet](https://en.wikipedia.org/wiki/ImageNet) or [CIFAR](https://www.cs.toronto.edu/~kriz/cifar.html) is one of my favorites. 10 and 100 there. That one's actually great because you can start off with the simpler world, the 10, and then go to 100.

**Scott**: It's a large number of color images. It's the same ones, but they're labeled differently. They're either labeled into ten categories or a hundred categories.

 [![alt](https://res.cloudinary.com/deepgram/image/upload/v1661976376/blog/ai-show-different-types-of-machine-learning/cifar.png)](https://www.researchgate.net/figure/Heterogeneousness-and-diversity-of-the-CIFAR-10-entries-in-their-10-image-categories-The_fig1_322148855)

**Susan**: Yeah, same number of pixels and colors and all that stuff so you can use basically the same model.

**Scott**: Yeah so you can take the same data and say like, "Okay, I'm going to try for the simple thing: just picking from one of ten, like `airplane`, `car`, `animal`. Things like that." And then maybe the animal would have ten different ones where it's like `dog`, `cat`,`lizard`.

**Susan**: That's another great kind of step up because you've got more data to play with, harder classification task to deal. The simple model, the simple two layer feed forward network that would have worked on MNIST will not do nearly as well on CIFAR. So it allows you to step up your game that bit. But, both of these sets which are fully supervised, you've got the answer sitting in front of you. They're not super realistic in the real world. They're well cropped, things are well-sized, everything's exactly the same dimensions. It's great for learning, but the real world has a lot more problems than that.

**Scott**: Yeah, not all images are the same size or zoomed in to the same leveling.

#### What is semi-supervised learning?

**Susan**: [Semi-supervised](https://en.wikipedia.org/wiki/Semi-supervised_learning) says, "I have some of the labels and I'm going to use unlabeled data to help me boost my results in some way." Think of audio normalization as an example - I've got a bunch of audio and I'm going to use that to help me normalize background, but I'm really only learning on the subset that I have.

**Scott**: You mean like the volume?

**Susan**: Yeah, like the volume or some simple stuff like that. Or, I could use it in more complex ways like using it to compress down to try to rebuild the exact same audio stream.

**Scott**: Yeah, to expand on that some more, it's like "Hey, if I gave a network or some machine learning algorithm the original image and then I forced that network to squish down into a really small space, meaning it can only hang on to a few numbers, it then has to rebuild that and try to come up with the original image.

If you squeeze that down into one number, it can't reconstruct any image. It could probably do like how bright or dark it was, but you expand that out to a few numbers, at least now it can start to construct what color the image was, maybe some shapes in it, and expanded it a little further. Now it kind of looks like the original image, but it's been compressed way down so it's not the same size as the original image.

This is a traditional [unsupervised](https://en.wikipedia.org/wiki/Unsupervised_learning) technique. Then, what you do is you take that model that tried to squish it down and you use that later in a supervised way.

**Susan**: Basically, what that last little bit is, that little squished down version, is the essential information behind that image.

**Scott**: Yeah, so "I see circles here. It's red. I see some texture here." Maybe it's feathers or something. It doesn't even know the idea of feathers, but it knows that it's sort of grouped together. You can use that information later.

**Susan**: With every single problem, you're going to find some different way of using unlabeled data to help you out. There isn't some "Oh this is the set way." of doing semi-supervised learning. It's "I found this great semi-supervised technique to help me out in problem _x_." In general, that's the way it goes.

"Supervised world, there's a lot more canned answers. Semi-supervised, a lot less canned answers. Unsupervised, it's pretty hard to find answers."

#### Machine learning in business

**Scott**: We started out with the more academic side - reinforcement learning. Is that super useful in real world business? Not so much, right?

You could dream up ways, but is that what people are running right now in order to save money? That's not what they're doing in their business. They're probably using some sort of supervised learning technique.

**Susan**: Yeah, the majority of what we're thinking about in the machine learning world is supervised, likely a [deep learning](https://en.wikipedia.org/wiki/Deep_learning) world.

**Scott**: Like translation. You know, going from English to French or doing speech recognition, going from an audio recording to text that was spoken. Those are all trained. They might be augmented a little bit with some unsupervised technique, but it's almost a hundred percent supervised.

**Susan**: Yeah, currently.

"As we move forward in this world, the real future is semi-supervised, unsupervised as much as possible because that's where most of our data lies."

**Scott**: That's how a human learns.

**Susan**: Exactly. Humans, we bootstrap.

**Scott**: We test the world, we poke.

**Susan**: Exactly. Mom and Dad start off by saying, "Apple. Apple. Apple." Later on, _you_ start testing the world by saying, "Apple?"

**Scott**: But then you hear somebody with an accent that says "apple" and you can kinda work out from context - _They must mean apple, I'm gonna adjust my [acoustic model](https://en.wikipedia.org/wiki/Acoustic_model)._

**Susan**: We start learning more and more and more just by going through the world. That's really an amazing thing that we need to learn a lot more in the machine learning world. The more we can get those techniques and rip them out of our own head, the more we'll be able to take advantage of huge data sources that are out there.

**Scott**: I still think from a pragmatic perspective, if you're a business and you want to tackle some problem using machine learning, you don't start with unsupervised, you don't start with reinforcement learning, you start with supervised learning. You go and label some data, you go gather data, then you label some of it, and then you train a model and you see how well it works. You probably don't even start with deep learning. You start with some tree-based method or something like that.

**Susan**: But you definitely have to have data. If you don't understand your problem enough to have a dataset of examples and answers, then you definitely don't understand the problem well enough to train something to figure it out.

#### What are the different types of data? What do you do with it?

**Susan**: Image and audio.

**Scott**: Video.

**Susan**: Text. Sequences in general.

**Scott**: It might be like, "I turned right down this street, I drove this long, I turned left down that street, and Google's trying to figure out what your intentions are. Are you going to a restaurant? Should I pop up a gas station?" Things like that.

**Susan**: Which, by the way, are great examples of where reinforcement learning is winning big. But, again, on the big classes data we're definitely blurring what it means to say classes of data anymore. Sure, it's easy to say this is an image, this is video, this is audio, this is whatever.

Now we're trying to fuse together different sources of data to help us answer the question at hand: Make the money. What information sources do you need? Is it clicks? Is it pictures? Is it audio? Is it text? Is it bank accounts? Is it all these different sources of information?

**Scott**: Usually called multi-channel in a business setting. Somebody emails you, they send you some chats, they also call you on the phone and you're trying to fuse all that information together, build a model, and predict something about them: Are they pissed off? Are they happy?

**Susan**: That's a big challenge on two fronts.

First of all, we've got a lot of great techniques that are sifting signal from noise, but the more noise you give it the harder it is to work and sometimes adding more data actually hurts you. So, if you can filter out a lot of bad sources, you're going to probably make your model better.

"Focus on useful data that has predictive power. There's this common misconception: If I just put enough layers, enough neurons together and enough data sources and then run it for a long enough time on a big GPU, magic and the right answer happens on the other end."

**Scott**: Not necessarily the case. There are other constraints that come into play.

#### Dealing with data

**Susan**: Just purely dealing with that data becomes a problem. More data means a longer time before your model converges, before it starts being able to get predictive power. Sometimes it's so far that it just never gets there.

**Scott**: You're saying don't get data?

**Susan**: I'm not saying don't get data. I'm saying, try to figure out how useful your data is. If you can pre-process it, you might make a huge difference on your model in some way.

We'll talk audio for a second. If you do absolutely nothing to your audio and send it to a model, you probably will get better results for whatever you're doing to that audio.

It's all about getting to a baseline because, in general, a lot of our techniques are really good at saying, "Hey given that something's at this baseline, I can tell you to nudge it up this way or nudge it down that way." But, if the data's coming in down here all the time, it's working really hard just to predict up to the baseline and go above it. It's going to be biased in some way.

So, if you can get it through some simple statistical technique or whatever to a reasonable baseline, it's a lot easier for your model to nudge it in the right direction and get the right answer.

#### What's considered a large dataset?

**Scott**: MNIST was sixty thousand images. That's not generally considered a large image dataset. It's pretty big. It's good for what it's trying to do. It can tell handwritten digits pretty well, but the large datasets in the world like ImageNet, which is actually not ten or a hundred like CIFAR, but a thousand categories. I think it's nineteen million images labeled into those categories. That's a pretty big dataset, but is it the biggest dataset in the world? No!

**Susan**: It's also purely academic right now. When you look at the self-driving car world at the visual information that they're sucking in and the terabytes worth of data that they're processing through their models, that makes nineteen million images seem quaint. They're sucking down large portions of YouTube.

**Scott**: They also need data that's segmented. It's not just, "Is there a cat in this image?" It's, "There are three people in this image, I've drawn the outline of the person, I've drawn the shape of the road, I've drawn the traffic light," and things like that. It knows exactly where it is.

#### Thinking about your task

**Scott**: So, you kind have to think about your task, right? If you're choosing from one of ten categories, then maybe like sixty thousand or ten thousand or a hundred thousand. Somewhere in that range is the number of labeled pieces of data that you would need.

If you're choosing from a hundred categories, maybe it's five or ten times that. If you're choosing from a thousand categories, maybe it's another five or ten times that in order to get up to the amount of data that you need to tell the differentiation between them. But in the speech world, we're not talking images anymore. We're talking about hours or seconds of labeled audio.

**Susan**: That's an interesting one. We were talking about this earlier: How long does it take a human to learn? How many hours of audio does it take for a human to learn a language? Even from infancy.

**Scott**: To get a really good grasp on your one language that you learn from birth it takes probably ten years.

**Susan**: Yeah, when you think about the amount of audio that was heard in that, it was really not a tremendous amount.

**Scott**: Maybe tens of thousands of hours of speech that you've heard and in a semi-supervised way.

**Susan**: Exactly, a very semi-supervised way. And the crazy thing is, training a world class speech model generally takes a lot more than that.

**Scott**: You're talking tens to thousands of hours or maybe ten times that. It's all purely supervised as well.

So a human is semi-supervised - at about ten thousand hours it can master language. But, a machine at ten thousand hours, even supervised, hasn't really mastered the language. It's doing pretty well, but it's not mastered. Maybe 10x that, now you're getting to the territory where it feels like it mastered the language. Still, it was a supervised way, not a semi-supervised way.

#### What mechanisms do humans have that machines don't?

**Susan**: What are the mechanisms that allow a human to do that that we you don't have available to us? Is it how we're representing the information? Is it the structure of the model inside? Are we asking the question the right way?

This is where speech is such a fun area because there's clearly examples where there are learning algorithms in the world. What's in your head beat the living daylights of what's available on the computer side and that means there's a lot of great, fun play to figure stuff out.

**Scott**: Some of it's like tone inflection, things like that, but it's also that you understand the world around you.

"I couldn't put the pineapple in the suitcase because it was too small." What does "it" refer to? Is it that the pineapple was too small or that the suitcase was too small? We can figure that out really quickly.

_We_ know, but the machine is kind of like, "Huh?"

**Susan**: Yeah, "I saw Grandma." With a handsaw or a power one?

**Scott**: Yeah, what was the "saw" here? There's a lot of common sense here that humans are able to apply really easily. Another really large dataset is text though.

#### Let's talk about text

**Scott**: Text is huge.

**Susan**: It's huge and it's awesome.

**Scott**: The web exists. There's tons of textual data all over the place and titles and bodies of blogs are just everywhere.

**Susan**: The great thing about text is you can learn so much in so many different fields. It's not just "Oh, we're going to only apply this to translation or only to transcription." You can use text to start learning about some subject matter and help your model in interesting ways with that.

Text is a great secondary source to so many problems out there if you can figure out how to work it in just because there's so much and it can be compactly represented comparatively to things.

**Scott**: Text is the biggest, richest data source that people have right now just because the internet exists and everything is kind of in text. Video's kind of growing, audio's growing, images are going, but text is massive.

**Susan**: Yeah you know, "a picture's worth a thousand words." A thousand words may be worth more than single picture in all honesty in how much meaning it conveys. There's a lot of great stuff in text, huge things. The synthetic world, just as a big, broad category, synthetic versus truly labeled, supervised data versus unsupervised.

#### How do you label data?

**Scott**: Humans do it! You have a bunch of humans that look at images and say, "That is a cat" or they circle the person and say, "That's a person" or they listen to audio and they type out what was said. It's very, very tough work.

**Susan**: You know,

"There's a lot of people in companies that think, "AI can do that" and maybe you can build the model, maybe you can buy the GPUs, maybe you can set up the servers, maybe you can dedicate some people, but just go out and find the data and either pay the millions of dollars to get it or spend the tens of thousands of man hours."

**Scott**: Right now there isn't just a, "Here's a ten million dollar check" and get a dataset labeled. It's more like, you're going to be waiting two years or a year or half a year, and you're going to be orchestrating the effort. You have to do it.

**Susan**: Just think about the data it takes to go out and build a map in the world, physically getting people out there. That data will be useful not only today and for the problem you've got, but probably ten, twenty, fifty years from now.

* * *

Tune in to the AI Show every week on [YouTube](https://www.youtube.com/watch?v=7VMio8Tk2so&t=914s) or [Twitch](https://www.twitch.tv/videos/310181430) and share your thoughts in the comments or Tweet Us at [@DeepgramAI](https://twitter.com/deepgramai?lang=en)
