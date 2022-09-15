---
title: What Role Does Bias Have in Machine Learning? — AI Show
description: "Welcome to the AI Show. Today we ask the question: What role does
  bias have in machine learning?"
date: 2018-10-19
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981322/blog/ai-show-bias-in-machine-learning/what-role-does-bias-have-in-ml-blog-thumb%402x.jpg
authors:
  - morris-gevirtz
category: ai-and-engineering
tags:
  - bias
  - machine-learning
seo:
  title: What role does bias have in machine learning? — AI Show
  description: Welcome to the AI Show. On the AI Show, we talk about all things
    AI. Today we ask this question:What role does bias have in machine learning?
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981322/blog/ai-show-bias-in-machine-learning/what-role-does-bias-have-in-ml-blog-thumb%402x.jpg
shorturls:
  share: https://dpgr.am/1df2844
  twitter: https://dpgr.am/06306ca
  linkedin: https://dpgr.am/634934f
  reddit: https://dpgr.am/6b81f61
  facebook: https://dpgr.am/e26011d
---
 <iframe src="https://www.youtube.com/embed/mvvbPmYSHcY" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

**Scott:** Welcome to the AI Show. On the AI Show, we talk about all things AI. Today we ask this question:

## What role does bias have in machine learning?

**Susan:** Whoa. Bias. That's a really cool one.

**Scott:** It is a pretty good one.

**Susan:** I love bias. I'm predisposed towards it at least.

**Scott:** You might be biased.

**Susan:** I might be biased.

**Scott:** You might be biased but you like bias.

**Susan:** I like bias. I think bias is pretty much everywhere.

## How do we define bias in machine learning?

**Susan:** It's the predisposed nature of your model.

**Scott:** What's a good example?

**Susan:** A good example would be digit prediction. Do you think seven happens more often than one?

![alt](https://images.unsplash.com/photo-1522069213448-443a614da9b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3cbcf6bd6971590052f6c18355f0aa40&auto=format&fit=crop&w=800&q=60)

**Scott:** I don't know. It depends on the context.

**Susan:** It does depend on the context, but if you were to just randomly pick up a bunch of numbers and measure the frequency.

**Scott:** So like for area codes on phone numbers or something?

**Susan:** Yes.

**Scott:** Would zero happen a lot? Zero is never the first number.

**Susan:** There's a good set of laws in numbers here about which ones happen first and which one's the relative magnitude to frequency here. That's an example of not necessarily bias, but what the natural tendency of a distribution is.

**Scott:** For example, pick a random name, there's probably like the top 10 names in English speaking world, and we're likely to get one of those.

**Susan:** Our models are predisposed towards certain answers. This is their prior probability here.

* When they're biased, what does that mean?
* Why is it biased?

We're biased because we're predisposed towards one thing, but we're picking against a different distribution. In other words, we train the model one way and we are biased against that training.

## What's a good example?

**Scott:** You have an image recognition program, and you want it to tell the difference between cats and dogs, and all you do is give it cats and dogs, fine. But all of the cats that you give it are brown, and all the dogs that you give it are black. But, then you show it a black cat, and now it guesses that it's a dog. And you're like, "What is that about?" It's because all of the cats that you gave it, or all the dogs you gave it were black, and all the cats were brown, or whatever. It learns these, it doesn't necessarily always learn that, "Hey, that's a cat." How a person would think of it, they think like, "Oh, it's a brown cat." But anything that's brown, I think of it as a cat or something like that.

![alt](https://res.cloudinary.com/deepgram/image/upload/v1661976754/blog/ai-show-bias-in-machine-learning/Havana_Brown_-_choco.jpg)

*Brown cats are actually rather rare. However, the \[Havana Brown Cat](https://commons.wikimedia.org/wiki/File:HavanaBrown-_choco.jpg) just such a cat.*

## Where is bias introduced?

**Susan:** I mean, we were just talking about a little bit, obviously, you can have A, specifically bias but how does that happen?

**Scott:**

* Is it the model that is biased?
* Is it the data that's biased?
* Is it the way that you're training the model or something like that?

Well, it's usually not the model that's biased. But it's usually the data. So that might be the way you get a whole bunch of different data, and the way that you clean the data. Maybe you just cut out a whole section because you don't know how to deal with it. Maybe you can't tell whether it's a cat or a dog, and so you just never include that. That would be your biasing just the input dataset. Just the way that you can collect pictures of cats and dogs. Maybe it's more difficult to collect pictures of dogs, because people don't take as many pictures of them compared to their cats or something like that. So you have this overwhelming majority of pictures of cats or something like that.

**Susan:** Cats demand pictures.

**Scott:** You have to have them. Facebook, et cetera.

**Susan:** Dogs love you no matter what, but cats, cats are like, "You need to do stuff to earn my love."

**Scott:** Some data is easier to get, some data is easier to label, some pictures are more clear, audio is more clear. So the short answer is that

"The data is usually the thing that's biased. Your model might be biased, but usually it's biased in just the fact that maybe it can't learn that type of thing at all, or it can, and that's just what sort of function does it have. But the data is what makes it biased, kind of like a human."

Humans aren't necessarily growing up biased in the way that we think about it, but their experience sort of teaches them that.

**Susan:** It's true. It's very hard to build bias into this structure of a model when you're talking about deep learning networks. I mean, it is possible, like you said. Hey I'm only going to accept these frequencies or something like that. Then you've codified a bias into there, but there you go. There's some fairly famous examples of bias in machine learning popping up lately.

**Scott:** [Amazon is a big one in the news recently](https://www.reuters.com/article/us-amazon-com-jobs-automation-insight/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK08G).

**Susan:** Yeah, what do you think about that?

**Scott:** Yeah, the details behind that are essentially, they had a recruiting machine learning model that would automatically analyze resumes and then try to give a score for how likely that model would think it is to hire that person essentially. If you look at tech companies across the world, you see that they're predominantly male, and the males might tend to describe themselves in different ways. There's a really interesting example in there that was like, if you had just the word "women," or "women's," sort of anywhere in your resume - it doesn't say, "I'm a female" or anything like that. For example: "When I was in college I focused on women's studies." or something like that. Then it was "Negative, we don't think we should hire you." But it's not assessing you as a *person* thinking that they shouldn't hire you, it's just that all of the examples of the people that they've hired didn't have that background. So it was biased against you.

**Susan:** That really points out a pretty significant thing about training data. You really need to know what you're targeting. In this case, it targeted being like the hiring process. It didn't focus on the result.

**Scott:** How would you train a model like that?

**Susan:** What is the correct positive question there? It's not necessarily, "Would that person have been hired?" It's how well they did.

"Focusing on how well a person did is a very hard thing to gather data on, so they had to gather data on the secondary thing, which is: "Would the old system have hired them?" The old system clearly showed bias, and they hired in a gender non-neutral way."

**Scott:** And in some ways, you want your system to be biased, right? You want good people working at your company. You don't want people that are going to just blow everything up. You don't want people that are going to drive things into the ground, you want people to be good. The only example that they have of that is looking back in the past and saying, "Here are all the people that we've hired, and here's the pile of them. Then we're going to train a model based on that." But, it's a little bit of a naïve approach. It might be the only way they can do it, but still it's naïve.

**Susan:** Yeah, it's a really hard problem. In general,

"This is a hard problem to deal with, because first of all, you have to recognize you have a bias and not everybody recognizes that. Then that can permeate every last step of gathering your data and then cleaning your data, and then selecting every single stage, or you're biasing the results."

## How do you avoid bias?

**Susan:** That's a really hard thing. The best way to is large data that you try to be sure that when you go through each step, you actively are thinking, "Is this biasing my training set? Is this doing something that'll have a systemic error, introducing a systemic error in there?"

**Scott:** In particular, biasing in a way that I don't want it to? You might want it to be biased toward good people!

**Susan:** Or perhaps you're biasing it towards a specific population, not of people, but of things. It's like, "Hey, I know that for a fact this visual recognition system is only going to be applied on cars, so I'm not going to give it a bunch of underwater scenes." Probably not going to have many cars that are underwater, and I don't need it to recognize fish. It's a class of image data that you might want to get rid of. But those types of decisions are really, really hard. The more you include in the more noise your model may have to parse through to find the signal. ![Alt](https://cdn-images-1.medium.com/max/1600/1*oKycB6NgLgPJG31fiGwpUA.png) *Photo courtesy of the [Udacity self-driving dataset.](https://github.com/udacity/self-driving-car)*

**Scott:** Yeah, it's true. It's like if you trained an autonomous driving car in fair weather California in the city streets, and then you take it to snowy country roads and say, "Drive." It's like, "I've never seen this before." It's very biased.

## Bias and regularization

**Susan:** In its essence, bias is sort of a [regularization](https://towardsdatascience.com/regularization-in-machine-learning-76441ddcf99a) question. We're trying to make a durable model that is able to predict in a wide field accurately. It's not 100% the exact same thing, I don't want to say fixing bias is all about fixing regularization, it's not totally true.

**Scott:** What do you mean by regularization?

**Susan:** Regularization of a model. So this is the whole overfit, underfit. You know, the overfit question.

**Scott:** And this is related though, bias is related to those things in a meaningful way.

**Susan:** It's definitely related. You can develop a model that overfits, it learns to recognize just the training set. Which very much what just happened with Amazon, they recognized the training set, right?

**Scott:** Or like it thinks all brown things are cats.

**Susan:** Yeah, all brown things are cats. I've never seen a black cat, have you ever seen a black cat?

**Scott:** Well, the model wouldn't in that context.

**Susan:** If the model says, "It's not cat, it can't be." One of the techniques for regularization is a diverse set of data. That is to say diversity in your data will help reduce bias. It's a tool, it's not the only tool.

**Scott:** Yeah, you want to cover the different categories, and you want to have those categories show up in different situations as well, like in the context of images again. Maybe it's a picture of a cat, but you want a picture of a cat outside, in a car, in a bus, with low light, lots of light, lots of glare, cloudy day. All these different things essentially to give you a different feel for that object, but in all these different settings.

**Susan:** Another important thing is just paying attention. You do have to pay attention to the frequency of the data that you're training on. If, for instance, you are trying to recognize common pets, and you give it exactly 50% training examples of pigs, and 50% training examples of cats, then it's going to have a bias, this preconceived notion on training data.

**Scott:** Like, pigs are as popular as cats.

**Susan:** Pigs are pretty darn likely. It's not impossible to see one, but that will likely give your model a bias saying, "That portly cat that you've been feeding too much may have turned into a pig."

**Scott:** A fat cat, calls it a pig. Yeah. But we see bias in other areas as well in these models that you're training. Like a credit transaction doing fraud detection or something, right? Again, may be good, may be bad. But when you're making your weird online purchase, and then it gets denied, it's like, "Hey, I'm a good person. Why did that get denied?" It's like, "Shady characters out there sometimes buy from this site," or something like that. It's not so nefarious, right? But it contributes to that.

**Susan:** Yeah, it's a big challenge. We've talked about sources of bias in the data, and locations of bias throughout the training pipeline. What are your thoughts on the results of bias and the social implications of this in models?

## Is this going to be a bigger problem in the future?

**Scott:** Nothing is going to be perfect tomorrow.

You can't snap your fingers and fix bias. Humans always fall victim to bias all the time. It's a product of the environment that you grow up in as a human.

However, it's also as a model, the product of the environment that you grow up in, et cetera. One of the most important things that you should keep in mind, though, it's like, "Where do I have good predictive power that is not biased? Then, where do I make predictions but I don't have good predictive power and it is biased over here? What should I listen to and what shouldn't I listen to essentially? That's the hard part, really, what are the features that are being sent into your model you should disregard. Although, your model thinks that these are really important. It's like, "You shouldn't be using those as a marker of whether they're good or not, use other things as a marker of whether they're good or not." That's a challenge for AI scientists and engineers to build the different datasets, but also to kind of pick and prune and use your human brain a little bit, and then bootstrap into the future. Like, "Whoa, what did we do wrong in the past?" Let that inform the dataset that we procure in the future. Then also, how we train our model in the future and the frequency that we show the data to our model. Things like that. It's not going to be done tomorrow. It's not, "Oh, oops, we were biased. Now it's going to be solved." You have to evolve into it through multiple processes.

**Susan:** That's a common theme that I've run into, you've run into. The very first time you try to build something, you're going to get it wrong more likely, but you learn so much. The second time you maybe get something that appears to be useful, but that has some crazy, weird behaviors.

**Scott:** Sure, it's probably 80% useful. It's a lot of the way there, but it's got some weird stuff going on.

**Susan:** In general, we're at that point where we're getting really complex problems that subtleties like gender bias are creeping into it.

People are setting their opinions about machine learning right now based off these initial stories. But the real where-are-we-at and what-will-the-trends-be are going to come in the next couple years as the Amazons of the world, the Facebooks of the world start realizing that "Oh, that first one was biased."

They start building in processes that correct that for the next time. They do a complex human modeling kind of task. They start realizing, "Oh, gender bias was a problem. What did we do to fix that in this other type of problem? Or some other type of bias." It's going to be a challenge over the next couple years.

**Scott:** It's not going to be easy. You might look at the first version of the model that you created that it's actually good and you're say, "Wow, such a triumph, look at us, pat on the back, this is so great. World leading, never been done before." Et cetera. Then say, "Well, we're going to have to do five times as much work in order to make it not as biased as it is." Yeah, it's useful now, but it's also hurting us in a lot of ways. To get that extra 10% or 20% or something and sort of take care of those problems is going to be even more work.

**Susan:** It gets well-rounded.

**Scott:** Yeah, it's well-rounded, exactly.

**Susan:** That's really what comes down to. Technology becomes well-rounded as we run into those problems over time. Predicting the problems is very, very hard. No one can say: "Hey, this model is going to have this problem, of course, hindsight it's 2020." You look back and, "Of course you shouldn't have done that." At the time, we didn't know that.

**Scott:** Yeah, it's a lot like a child learning growing up, and becoming more experienced and senior at things. In the very beginning you're like, "Whoa, they're actually pretty good. They get a lot of what's going on here, but do they know the broader context of the entire world?" Do they see one thing and now they've got a hammer and everything becomes a nail? But as you grow up, you start to think like, "Hmm, maybe there's other nuances to take into account here." I think that maturity has to happen with the models as well.

## Going forward, where do you see bias' biggest problem?

**Susan:** Everything's going to get bias, but where are the types of tasks will present the biggest problems?

**Scott:** I'm not sure what the biggest is going to be, but for me, something that comes right to mind are financial decisions, like giving people bank loans or something like that. The economic achievement of a country could be this much, but it's actually this little, because the financial system and distribution of money, or other resources isn't as good as it should be essentially because of bias. This is something that naturally happens in countries now. Who should get federal aid for schools? Or, which company should be saved by the government? Which tax breaks? But, as those things start to turn into a more informed machine, as you take some of the human emotion out of it, I think you're going to get a whole bunch of value from it. But, you probably still aren't going to see the full value.

There's a lot of bias now, you can only remove some of it. If you remove all of it, you probably can extract a ton of value.

I think that's the thing that's going to have the most impact on the world if you just sort of look at the quality of life of people.

**Susan:** That's a great point. We look at machine learning and the bias that it has, but in this exact instance, the Amazon instance, it exposed the bias that was there.

**Scott:** Correct, bias was already there.

**Susan:** This really helped expose it.

So going forward there's a chance that machine learning could really help us understand the biases we have, because when people make these models, they're really critically thinking about the data that's going into it, and there's a very good chance that they're considering, "Am I making this biased?"

**Scott:** We just keep pulling ourselves up by our bootstraps, but over and over. Limp yourself into a better area.

**Susan:** Yeah, hope for the future, I like hope for the future. I'm a positive guy. You may not have known this.

**Scott:** Oh yeah, well, you know. I suspected it. I think another area to think about is

**Whom do you give raises to? How do you keep a company functioning?** In the Amazon example they only had your resume to start with. But then once you're inside a company, and they have all of this other data about you, and some of the tech companies are going to have a lot of data about you because they build their internal systems to know everything that you're doing. Like how often do you email, how long are your emails, do you complain to HR, do you whatever, all these different things. Now, as they're building their internal machine learning algorithms to help figure out how to make their companies more efficient, they're probably going to have another bias. It's definitely going to be crammed in there like a whole other second level of bias.

## Reinforcement and bias

**Susan:** That's a really interesting thing. Sort of that reinforcement issue we spoke about. This thing maybe hires people that fit into this little pigeonhole that then causes them to hire more people that fit into this pigeonhole. It starts learning to narrow it down more and more and more. That's a really dangerous path, because you need diversity and everything to get those new ideas.

**Scott:** And you end up with the [Facebook feed phenomenon](https://www.wired.com/2016/11/facebook-echo-chamber/). Where it's echo chamber. That's biased right there. It's bias that feels really good to people. Search results.

**Susan:** Everyone thinks like me, Scott, everyone.

**Scott:** Yeah, they always like my post.

**Susan:** It's amazing. Every single thing in my feed is like, "I totally agree. I knew that. Wow, that's awesome."

**Scott:** Yeah. You never see an opposing viewpoint.

**Susan:** I always remove those.

**Scott:** Yeah, block.

**Susan:** Block for 30 days, and then put in on constant block for 30 days.

**Scott:** You're feeding the algorithm. Search results are another big one.

**Susan:** Man, yeah. Probably it's paid by us.

**Scott:** Yeah, that's a good point. Ads, yeah. But also the ranking, right?

**Susan:** That's another great one. How can adversaries take advantage of bias? You start learning a little bit about the underpinnings of an algorithm, maybe get ahold of a training set, and you start realizing there's this bias I can take advantage of.

**Scott:** It's a [search engine optimization](https://en.wikipedia.org/wiki/Search_engine_optimization) 3.0!

**Susan:** I'm going to build that perfect resume that just says, "My name is this." And then has a just awesome data dump of words right below. Suddenly, you're at the top of every single resume list. It's just got name is this, and just gibberish below it because you figured out the bias of the algorithm.

**Scott:** You figured out what gave you the highest signal. How would you figure that out? How would you build an adversary to figure that out? What's your first attempt?

**Susan:** My first attempt, well, just brute force running through... The problem is the feedback, how do you know? How do you do it in a black box way? You set up about 50 fake people? You change a couple little things, and you submit those 50 resumes. You try to figure out some pattern.

**Scott:** Then submit 100 different resumes to the same company, but you sort of randomize some of the results and see which one surface to the top.

**Susan:** At least which one gets called back, right? Which does this. I've seen some studies that have done this. They write a resume, and tried their best to keep gender pronouns out, but throw one little thing in there to see how that affects it. Or the same resume and they'll have either a male or a female answer the phone on the call back and see what the result is after that. That type of trying to see if the system is biased. But that's not the machine learning set, that's we'll table that discussion for a different area.

**Scott:** Yeah.

**Susan** Let's see. We've covered quite a bit, the future of bias to a certain degree, what do we think of that, it's social implications.

## What's the solution to bias in machine learning?

**Scott:** We talked about overfitting, how does underfitting fit into this? Is that the solution to bias? Make worse models?

**Susan:** Make worse models. Wow.

**Scott:** That's kind of what Amazon did. They said, "You know, we're going to pull back on this whole model. We're only going to use it to pick out obvious people that are submitting duplicate resumes and things like that."

**Susan:** A solution to bias. I think one of the crucial ones we briefly mentioned before is pay attention to the actual thing you're going for. If you try to gather data based off what you did before, and not actually look at the end result, how good are the employees that you're hiring, and go for effective employee, which is, like we mentioned, really hard to figure out. It's really, really hard to figure out. The approach looks something like this: You hire these X people, you've got these performance reviews. This is the best person that had the best review, and then you kind of [backpropagate](https://en.wikipedia.org/wiki/Backpropagation) through the whole hiring chain to say, "This is what the resume looked like." That's a long set of stuff that led to there. But, that's the point. It's really hard to pay attention to the question - to the thing that actually really, really mattered. That's why we have these proxies that lead to bias.

**Scott:** Generally, a [data sparsity problem](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.144.3180&rep=rep1&type=pdf), right? If you had a whole bunch of examples of all the different categories, but the people still had really good results, then your model wouldn't be that biased probably. But, there are only so many top performers in a company, or so many different examples of the good thing that you want. Then that's a lot of how bias creeps in.

**Susan:** But definitely, you need to admit to yourself when you're [proxying the question](https://en.wikipedia.org/wiki/Proxy_(statistics)), or when you're proxying your cost, I should say, your cost function.

**Scott:** Something that I think correlates with it.

**Susan:**I think it correlates to it, because I can't get to the root thing here. At least, when you admit it, you do two things. First of all, you critically analyze it a lot more. Second of all, you're constantly looking for a way to directly get that direct information. Maybe you'll change your system, your hiring system in some way that allows you to start trickling in that data to be able to build a model better in the future.

**Scott:** You brought up a really good point that I think it can't be hammered enough in the age of AI: what's going to happen? Is it going to replace all humans? Or is it something like that? It's like,

"No, no, no. There should and will probably always be a human in the loop." Use the human intellect. Use the creativity of a person. Use the ability to use common sense as best, you know, in the places that make sense. Essentially, in the ambiguous cases.

Right? There'll always be a human in the loop. The same way that there aren't manufacturing facilities where there's just literally zero people in the building. There are people there. They're making sure the machines are running the way they're supposed to be and they're watching over it.

**Susan:** I did a tour of a brewery, which was phenomenal. There they had people constantly running around checking how things are going, because you know, that one little can could throw the whole thing off.

**Scott** If they're not putting the labels on, they're just making sure that the labels are put on the right way.

**Susan** When you get 4,000 cases of beer that are with an upside down label, what are you going to do with that? Maybe... 

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976755/blog/ai-show-bias-in-machine-learning/Bottles-beer-fill--food-drink..jpg)

*Filling machines have automatically filled, capped and labeled beer and other drinks since the 19th century. As machine learning has improved, humans have had to oversee less and less of the process, focusing on more creative aspects of the process, such as creating labels and making tastier beer."*

**Scott:** Ship them to the Deepgram office.

**Susan** Yeah, please.

**Scott** Any parting thoughts?

**Susan:** Man, what's my favorite bias? My favorite bias, I'm biased against raw onions on pizza. Sorry.

**Scott:** Huge. Yeah, me too. Onions, tomatoes, yeah, get them out of here.

**Susan:** Yeah.

**Scott:** I know you won't agree on the tomatoes.

**Susan:** Yeah, I mean, tomatoes are pretty amazing.