---
title: How to Get a Job in Deep Learning
description: Want to work in deep learning? Here are some tips and tricks to
  start your learning.
date: 2016-09-23
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981209/blog/how-to-get-a-job-in-deep-learning/how-to-get-job-deep-learning%402x.jpg
authors:
  - scott-stephenson
category: ai-and-engineering
tags:
  - deep-learning
seo:
  title: How to Get a Job In Deep Learning
  description: ""
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981209/blog/how-to-get-a-job-in-deep-learning/how-to-get-job-deep-learning%402x.jpg
shorturls:
  share: https://dpgr.am/2135e00
  twitter: https://dpgr.am/b0c8183
  linkedin: https://dpgr.am/c21ca8a
  reddit: https://dpgr.am/5337044
  facebook: https://dpgr.am/a1bf486
---
If you're a software engineer (or someone who's learning the craft), chances are that you've heard about deep learning (which we'll sometimes abbreviate as "DL"). It's an interesting and rapidly developing field of research that's now being used in industry to address a wide range of problems, from image classification and handwriting recognition, to machine translation and, infamously, [beating the world champion Go player in four games out of five.](http://www.theverge.com/2016/3/15/11213518/alphago-deepmind-go-match-5-result) A lot of people think you need a PhD or tons of experience to get a job in deep learning, but if you're already a decent engineer, you can pick up the requisite skills and techniques pretty quickly. At least, that's our philosophy. (So even if you're a beginner with deep learning, you're welcome to apply for [one of our open positions](https://deepgram.com/company/careers/).)

**Important point:** You need motivation and the ability to code and problem solve well. That's about it. Here at [Deepgram](https://www.deepgram.com/) we're using deep learning to tackle the problem of [speech search](https://sweet-pie-c52a63-blog.netlify.app/search-through-sound-finding-phrases-in-audio/). Basically, we're teaching machines to listen to and remember the contents of recorded conversation, phone calls, online videos, podcasts, and anything else that has audio of people talking. But listening is just half of it.

We're also teaching machines to recall key words and phrases from these recordings in a similar way to how our brains search for memories of conversation: by the sound of those key words and phrases you type into the search bar. Getting involved in deep learning may seem a bit daunting at first, but the good news is that there are more resources out there now than ever before. (There's also a huge, pent up demand for engineers who know how to implement deep learning in software.) So, if you want to get yourself a job in deep learning but need to get yourself up to speed first, let this be your guide! *(If you already know a lot about deep learning and you're just looking for information about getting a job in the field, skip to the bottom.)*

## What Is Deep Learning?

In a nutshell, deep learning involves building and training a large artificial neural network with many hidden layers between the input side of the network and the output side. It's because of these many hidden layers that we call this kind of neural network "deep". Deep neural networks have at least three hidden layers, but some neural networks have hundreds. 

![Deep Neural Network Example - Image Credit: Texample](https://www.texample.net/media/tikz/examples/PNG/neural-network.png) 

Neural networks are complex statistical models that allow computers to create a remarkably accurate abstract representation of information. What kind of information, you ask? Like we mentioned, Deepgram's deep neural network is specifically trained to "understand" and act upon spoken word data, but deep neural networks have been used in plenty of other contexts, from detecting cancers in medical scans to forecasting energy prices and modeling the weather.

There are a number of notable players in the deep learning space. On the academic side, the [Geoffrey Hinton's lab at University of Toronto](http://learning.cs.toronto.edu/), [Yann LeCun's group at New York University](http://www.cs.nyu.edu/~yann/) and [Stanford's AI lab](http://ai.stanford.edu/) are some of the major leaders in deep learning research. On the private side, Google has led the way in applying deep learning to search and computer vision, and Baidu's Chief Scientist, Andrew Ng, is a major contributor to the scientific literature around deep learning on top of being the cofounder of Coursera. Why is deep learning so accessible today, even for newcomers to the field? There are two primary factors:

1. Computing hardware is now fast and cheap enough to make deep learning accessible to just about anyone with a decent graphics card in their PC. (In our own testing, we've found that one GPU server is about as fast as 400 CPU cores for running the algorithms we're using.)
2. Second, new open source deep learning platforms like [TensorFlow](https://www.tensorflow.org/), [Theano](http://deeplearning.net/software/theano/) and [Caffe](http://caffe.berkeleyvision.org/) make spinning up your own deep neural network fairly easy, especially when compared to having to build one from scratch.

There's a lot more to deep learning, of course, but that's what this guide is for!

## What You Should Already Know Before Diving Into Deep Learning

Speaking of math, you should have some familiarity with calculus, probability and linear algebra. All will help you understand the theory and principles of DL. 

![Neural network math - Image Credit: Wikimedia](https://upload.wikimedia.org/wikipedia/commons/f/ff/Rosenblattperceptron.png)

Obviously, there is also going to be some programming involved. As you can see [from this list of deep learning libraries](http://www.teglor.com/b/deep-learning-libraries-language-cm569/), most of the popular libraries are written in Python and R, so some knowledge of Python or R would also be helpful. If you need to bone up on your math or programming skills, there are plenty of very high quality resources online to use. Also, as we mentioned above, having a decent graphics card (or accessing a GPU instance through a cloud computing platform like Amazon Web Services or one of the other hosting providers listed [here](http://www.nvidia.com/object/gpu-cloud-computing-services.html)).

## Where To Learn About Deep Learning

### Talks and Articles About DL

**If you're brand new to the field and you're looking for some high-level explanations of the concepts behind deep learning without getting lost in the math and programming aspects**, there are some really informative talks out there to familiarize yourself with the concepts and terminology.

* The University of Wisconsin has a nice, [one-webpage overview of neural networks](http://pages.cs.wisc.edu/~bolo/shipyard/neural/local.html).
* [Brandon Rohrer](https://twitter.com/_brohrer_), Microsoft's principal data scientist, gave a talk that aims to explain and demystify deep learning without using fancy math or computer jargon at the Boston Open Data Science conference. He has the [video and slides on this page](http://brohrer.github.io/deep_learning_demystified.html).
* Deep learning pioneer [Geoffrey Hinton](https://twitter.com/geoff_hinton) was the first to demonstrate the use of backpropogation algorithms for training deep neural networks. He now leads some of Google's AI research efforts when he's not attending to academic responsibilities at the University of Toronto. He gave a brief but illuminating talk on ["How Neural Networks Really Work"](https://www.youtube.com/watch?v=l2dVjADTEDU) that we really like. You can also find a list of his papers on DL "without much math" on his [faculty page](http://www.cs.toronto.edu/~hinton/).
* [Steve Jurvetson](https://twitter.com/dfjsteve), the founding partner of DFJ, a large Silicon Valley venture capital firm, led a panel discussion at the Stanford Graduate School of Business on the subject. If you're interested in learning about deep learning from the perspective of some startup founders and engineers implementing DL in industry, [check out the video](https://www.youtube.com/watch?v=czLI3oLDe8M).

**If you just want to dive right in and are comfortable with some math, simple code examples, and discussions of applying DL in practice** check out Stanford grad [Andrej Karpathy](https://twitter.com/karpathy?)'s blog post on "[The Unreasonable Effectiveness of Recurrent Neural Networks](http://karpathy.github.io/2015/05/21/rnn-effectiveness/)".

### Online Courses

If you're the type of person who enjoys and gets a lot out of taking online courses, you're in luck. There are several good courses in deep learning available online.

* Andrew Ng's [Stanford course on machine learning](https://www.coursera.org/learn/machine-learning) is very popular and generally well-reviewed. It's considered one of the best introductory courses in machine learning and will give you some rigorous preparation for delving into deep learning.
* Udacity has a free, [ten week introductory course in machine learning](https://www.udacity.com/course/intro-to-machine-learning--ud120) that focuses on both theory and real-world applications. Again, it's a decent preparatory course for those interested in eventually pursuing deep learning.
* Caltech's Yaser S. Abu-Mostafa's self-paced course, "[Learning From Data](https://work.caltech.edu/telecourse.html)" is less mathematically dense, but it's still a very solid survey of machine learning theory and techniques.
* Andrej Karpathy's "[CS231n: Convolutional Neural Networks for Visual Recognition](http://cs231n.stanford.edu/)" at Stanford is challenging but well-done course in deep neural networks, and the syllabus and detailed course notes are available online.
* Geoffrey Hinton's course on "[Neural Networks for Machine Learning](https://www.coursera.org/learn/neural-networks)" is good, and it's taught by one of the godfathers of the field.

### Books

Maybe online courses aren't your thing, or maybe you just prefer reading to watching lectures and reviewing slide decks. There are a few good books out there that are worth checking out. We recommend:

* Andrew Trask's [Grokking Deep Learning](https://iamtrask.github.io/2016/08/17/grokking-deep-learning/) aims to give a really accessible, practical guide to deep learning techniques. If you know some Python and passed algebra in high school, you're 100% prepared for this book.
* Ian Goodfellow, Yoshua Bengio and Aaron Courville's book, *Deep Learning*, which will be published by MIT Press. For now, there is [an early version of the book available for free online](http://www.deeplearningbook.org/), plus lecture slides and exercises.

### Other Learning Resources & Websites

* Metacademy is a very cool site with [a very, very solid overview of deep learning](https://metacademy.org/roadmaps/rgrosse/deep_learning) and tons of links to specific topics in the field.
* Denny Britz of the Google Brain team has [a pretty comprehensive glossary of deep learning terminology](http://www.wildml.com/deep-learning-glossary/) on his website, WildML. He also curates [a weekly newsletter](https://www.getrevue.co/profile/wildml) that contains links to both technical and non-technical articles about machine learning and deep learning.

## Where to Practice Deep Learning

Once you have some of the basics under your belt, you'll be ready to sink your teeth into some actual data and exercises. Here are a few websites where you can find sample datasets and coding challenges:

* Kaggle has a fairly large collection of datasets ranging from [SF/Bay Area Pokemon Go spawn points](https://www.kaggle.com/kveykva/sf-bay-area-pokemon-go-spawns) to [Y Combinator companies](https://www.kaggle.com/benhamner/y-combinator-companies) to the giant text corpus that is [Hillary Clinton's leaked emails](https://www.kaggle.com/kaggle/hillary-clinton-emails).
* UC Irvine also has a [big collection of datasets](http://archive.ics.uci.edu/ml/) to train deep neural networks on.
* For those who like python notebooks, there's a nice [5 part tutorial](https://github.com/alrojo/tensorflow-tutorial) put together by Alexander Johansen on how to use TensorFlow (with links to other DNN library tutorials).

## Where to Find People Interested in Deep Learning

Regardless of whether you're a rank amateur or a PhD at the bleeding edge of deep learning research, it's always good to connect with the community. Here are some places to meet other people interested in deep learning:

* You should see if your city has a machine learning or deep learning group on a site like Meetup.com. Most major cities have something going on.
* There are several online communities devoted to deep learning and deriving insights from data:

  * [Deeplearning.net](http://deeplearning.net/) is one of the major online hubs for deep learning related information. Resources include: a [comprehensive reading list](http://deeplearning.net/reading-list/), a [list of deep learning research labs](http://deeplearning.net/deep-learning-research-groups-and-labs/), and [a collection of nifty demos](http://deeplearning.net/demos/) so you can see DL in practice.
  * [Datatau](http://www.datatau.com/) is kind of like Hacker News, but specifically focused on data and machine learning. The comments sections aren't very active but there are new links posted regularly.
  * There is a [machine learning subreddit](https://www.reddit.com/r/machinelearning) that's fairly active. (They also have a very helpful wiki with even more resources.) The [deep learning subreddit](https://www.reddit.com/r/deeplearning) is a little quieter.
  * There's a surprisingly active [Google Plus group](https://plus.google.com/communities/112866381580457264725) devoted to deep learning with over 30,000 members. (Soon to be extinct)

## Where To Find A Job in Deep Learning

The good news is that basically everyone is hiring people that understand deep learning. You probably know all the usual places to go looking: AngelList, the monthly "Who's Hiring" thread on hacker news, the StackOverflow jobs board, and the dozens of general-purpose job search sites. One of the few jobs boards that specializes in DL positions is found at [Deeplearning.net](http://deeplearning.net/deep-learning-job-listings/), and there is a more [general machine learning jobs board on Kaggle](https://www.kaggle.com/jobs). These are definitely great points. Most companies looking for DL/ML talent aren't interested in setting up HR hoops for the applicant to jump through.

## What To Do When Applying

Companies want to see if you did cool stuff before you applied for the job. If you didn't then you won't get an interview, but if you did then you have a chance no matter what your background is. Of course, the question of "what is cool stuff?" comes up. If your only experience is building small projects with only a little bit of success, *that probably won't do it* (although it might work for larger companies, or companies that need light machine learning performed). But if it is:

> **I built a twitter analysis DNN from scratch using Theano and can predict the topic with pretty good accuracy. Here's:**
>
> * ***the accuracy I achieved***
> * ***a link to what I wrote about it***
> * ***a link to github for the code"***

That type of thing will get you in the door. Then you can work your magic with coding chops and problem solving skills during the interview. Deepgram is also hiring, so if you're interested in solving hard problems and building great tools, [give us a holler](https://deepgram.com/company/careers/)!

- - -

*This article was written in collaboration with [Jason D. Rowley](http://jasondrowley.com).*