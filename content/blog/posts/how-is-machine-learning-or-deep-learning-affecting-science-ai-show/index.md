---
title: How is Machine Learning, or Deep Learning, Affecting Science? — AI Show
description: Learn more about how deep learning is affecting science in this
  episode of the AI Show.
date: 2018-12-14
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981337/blog/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/how-ml-dl-affecting-science-blog-thumb%402x.jpg
authors:
  - morris-gevirtz
category: ai-and-engineering
tags:
  - machine-learning
  - deep-learning
seo:
  title: How is Machine Learning, or Deep Learning, Affecting Science?  — AI Show
  description: ""
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981337/blog/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/how-ml-dl-affecting-science-blog-thumb%402x.jpg
shorturls:
  share: https://dpgr.am/8d2bec2
  twitter: https://dpgr.am/f836824
  linkedin: https://dpgr.am/9d340bd
  reddit: https://dpgr.am/962e0be
  facebook: https://dpgr.am/43c94c9
---
<iframe src="https://www.youtube.com/embed/5tip6JR_AN8" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

**Scott:** Welcome to the AI Show. Today we're asking the question: How is machine learning, or deep learning, affecting science? 


**Susan:** Actually I'm asking a question of you! For those that do not know, Scott here has a little bit of a science background. 


**Scott:** A little bit. 


**Susan:** And a little bit of machine learning in science background. Scott, can you at least give us the 10,000 foot overview of a little bit of what you've done?

## Finding Dark Matter with AI

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976791/blog/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/lux.jpg)

*A photo of the Large Underground Xenon experiment. Scientists hope to detect weakly interacting massive particles (WIMPs). [Credit.](https://physicsworld.com/a/dark-matter-constraints-tightened-after-lux-no-shows/)*

**Scott:** The 10,000 foot overview is I have a Ph.D. in Particle Physics. But, I was searching for dark matter deep underground in a government-controlled region of China. Basically, a James Bond lair.

**Susan:** I like it.

**Scott:** We had to design the experiment and build the experiment, operate the experiment, take data, analyze the data, write a paper. This is what you do in experimental particle physics. We did that searching for dark matter. We did it with lots of computers, servers, CPUs, things like that. Lots of copper, plastic, liquid Xenon, cryogenic stuff.

**Scott:** The CPUs were used to do data analysis, and we were using [boosted decision trees](https://towardsdatascience.com/decision-tree-ensembles-bagging-and-boosting-266a8ba60fd9) and neural-networks and other standard statistics-based cuts in order to figure out was it a dark matter particle or not.

**Susan:** So tons of signal noise search basically, right?

**Scott:** Yes. These detectors are little cameras, but the cameras that have no lenses. And by little, I mean they're actually big. They're maybe a meter by a meter, but the pixels are maybe a few inches so they're really large pixels. But these pixels can sense individual photons, so a very, very small amount of light. But, there's a few hundred of them. You have to pick out what happened inside the detector based on the pattern that is in those pixels.

**Scott:** No lenses. Again, you can't zoom in and see "The particle was right here, and I can see it's hair." But you can say, "Within a region about this big, the particle interaction happened, and it also had a flash that was this size."

**Susan:** But basically, your machine learning techniques were attempting to take that huge amount of data and shift signal to noise in an efficient way from it.

**Scott:** Coming out of the PMTs would be a digitized signal, but it would like a waveform. It kind of looks like an audio waveform. Those signals were different for every type of particle interaction. But the two main types of particle interactions are: What's an atom made of? It's made of a nucleus and some electrons pretty much. At the energies we're talking about, they normally don't blow apart into smithereens. It's either the nucleus gets hit, or the electron gets hit. If the nucleus gets hit, then the whole atom starts ripping through and generating photons, electrons and heat. If an electron gets hit, then an electron goes ripping through. When that happens, the signals are different. They give off different amounts of light, the size of the pulse they give off is different as well.

**Susan:** So for anyone that is interested in why these dark matter, or even neutrino detectors, are so big, but also always full of some fluid, it's because you have to see the light that happens off of that interaction. If it wasn't some sort of clear fluid to the light that's coming off, or clear medium for the light coming off, you wouldn't be able to see it.

**Scott:** Yeah, lots of things scintillate, but many things are not transparent to their own scintillation light. If you throw particles fast enough at things, light will be made.

**Susan:** A lot of light.

**Scott:** But you won't be able to read it, and that's one special thing about Xenon is that it's very clean, it's not radioactive or at least not very radioactive, and it's transparent. It scintillates and it's transparent to its own scintillation light.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976792/blog/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/Dark-Matter-Hairs-Around-Earth.jpg)

*Original Caption Released with Image: This illustration shows Earth surrounded by filaments of dark matter called "hairs," which are proposed in a study in the Astrophysical Journal by Gary Prézeau of NASA's Jet Propulsion Laboratory, Pasadena, California. [Courtesy of JPL](https://photojournal.jpl.nasa.gov/catalog/PIA20176)*

**Susan:** So that gets back to our question. The question is machine learning, how is it impacting the sciences? Your own experience shows right away how the recent world is being impacted by this. Obviously, dark matter, the search for what is that missing ... what it is it 95? 97? What's the percentage?

**Scott:** Yeah, 80%.

**Susan:** Some large amount of the universe we can't really figure out what's going on with.

**Scott:** That's like dark energy. And then matter is like 25%, 20% or so. And then there's like 4% or 5% that we actually know about.

**Susan:** We're seeing some big impacts from machine learning.

**Scott:** The huge thing that we saw was that we could do a lot with a small team.

**Scott:** You could take billions of data points, you could collect data, and a team of five or 10 people can actually analyze the data. This is in contrast to how teams at the LHC or CERN Institute analyze data. Let me explain, so we have a particle detector, but it was looking astrophysical particles. You didn't have to have a collider. You didn't shoot anything into it. The universe is already shooting stuff into it. But if you have a collider, then you actually make the particles that then get shot into the detector and then read. This is like the LHC, Cerne, Atlas, those types of things. Those were started like in the 60s, 70s, those type of colliders. They've been using the same techniques from way back until 2000-teens. There's actually a story here. They tried to do machine learning back in the second AI boom, which is the 80s. They're like, "Oh neural networks, neural networks. We have this problem, can we tell signal from background? Let's train a machine learning model to do it." Well there was some good that came out of that, but for the most part everybody got super burned out in the particle physicists community, and they were just like, "Neural networks suck. They don't do what we need them to do." Really what it was, our computers suck and we don't have enough data, and we don't really know how to train them all that well. But then fast forward 20 years and our computers don't suck anymore. We have the data and we know how to train them now. I see all this repetitive stuff that's happening. Thousands of scientists in this experiment trying to pick which cut we should make, or something like that. It's like why don't we just have computers do it?

**Susan:** Do that mutual sift, yeah.

**Scott:** We can have tons and tons of data, and we can do some complicated analyses, but we have to do it in machine learning because otherwise it would take too many people.

## Efficiency and Processing

**Susan:** I think the other bent on the same note though is efficiency and processing. Have you seen the stuff going on with protein folding? I mean huge processing advances are going on just because they're using deep learning models, or they're using machine learning models to accelerate the guess at what that protein will fold into. For those that don't know, the challenge is you've got a whole bunch of atoms that are strung together in this big complicated molecule, and when you let them go they all kind of fold and convolute into this weird shape. ![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Protein_folding.png/360px-Protein_folding.png)

**Susan:** And that weird shape is the point, right?

**Scott:** If it's not in that shape it doesn't do its job.

**Susan:** You know your cells let through a shape, and if you can figure out the shape that something's going to snap to, you can maybe design a drug that'll enter a cell that another one wouldn't, or something along those lines.

**Scott:** Make proteins actually stay in that shape for longer or something.

**Susan:** If you can predict how proteins are going to fold, crinkle up and do all that stuff, you can do some really good stuff. But, it's really hard. It takes a lot of computational power. Machine learning is coming along and making it more efficient.

**Scott:** It used to be just grid search, just use flops. Lots of computational power. It was distributed ... I remember doing this actually. I have a couple of PlayStation 4s, maybe four or five or so, in my living room and my kitchen, crunching numbers to do protein folding for free. When before I was in graduate school, because I just thought it was so cool. You need computational power in order to do this problem? I'll help you with that.

**Susan:** A spinoff of SETI at home, no?

**Scott:** It was the first well known crowdsourcing of your own computer set before BitCoin mining.

**Susan:** Yeah, before BitCoin mining said, "You can make money so forget all those free altruistic purposes. We don't care if you want to look for aliens or help find the cure for cancer. You can make money."

**Scott:** "You can make money, so let's do that."

## Free energy and AI

**Susan:** Are there any other good examples of improved computational efficiency or great new designs coming out of the academic world?

**Scott:** Well there's a good story about redesigning your [tokamak](https://en.wikipedia.org/wiki/Tokamak).

**Scott:** So it's like fusion has been a thing for the last 60 years.

**Susan:** Isn't the running joke about fusion, it's 50 years away?

**Scott:** The running joke keeps getting longer. It's always 20 years away, but I like that.

**Susan:** Oh, like 20 years away. 20 years ago it was 20 years away.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976793/blog/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/41783636452_5f409422dc_k.jpg)

*The newest and most powerful TOKAMAK fusion reactor is scheduled to come online in 2025 and produce, hopefully power (on an experimental basis) years afterward. Photo courtesy of [Oak Ridge National Laboratory.](https://www.flickr.com/photos/oakridgelab/41783636452)*

**Scott:** Now it's 50 years away. It's only 50 years away. it's probably a lot closer now. This is something that's really interesting to me too. It's like if you give the world really cheap power, then you make the world much more productive and you don't destroy the environment. I mean, we will always find ways to destroy the environment, but you don't destroy it as quickly.

**Susan:** Give me a challenge Scott, and I will take that challenge.

**Scott:** It's a really hard complicated thing to build some of these reactors, and they said, "We've tried many things over the last 50, 60 years and spent many billions of dollars trying to build these reactors." We've gotten pretty good, but they're still research-y. They're still not able to be turned into a real one that actually produces power on a large scale for all of humanity and things like that.

**Scott:** [Let's throw machine learning]("https://www.iflscience.com/technology/supercomputer-will-help-us-tackle-nuclear-fusion/") at the problem and see what happens. Now there's talk that these designs are actually able to be built, and they probably will serve the purpose.

**Susan:** What was the last one? They reached some milestone, like 100 seconds or something like that. There are so many challenges going into confining so high of energies in such a small space.

**Scott:** The trick with fusion is that everything is a gas pretty much and so it's really easy to cool it down. Well there's not much mass there, but there doesn't have to be a lot of mass because there's a lot of energy.

**Susan:** It's something about energy equals mass.

**Scott:** E=MC2 or something like that. If any of that gas touches the wall of the reactor then it's instantly going to be cooled down. How can you contain it without touching it? So they try to use magnetic fields, but there's some tricks with that basically that it doesn't work so well. That's why it took so long. It's probably the only way to do it, and you can kind of work out that it'll probably work, but the problem is making it in practice.

**Scott:** So machine learning comes along and says, "Hey, actually we have a design that might be able to be built and serve the purpose that you need."

**Susan:** And it's all about the [hyperparameters](https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)) and something like that. So when you think about a tokamak, this thing that's creating a plasma and squeezing it really tight and all that. The field you have to create is really uniform, but at the same there's practical constraints on this. Like, where do you put this pipe and how do you put these wires?

**Scott:** Yeah, you have to cool it down so everything doesn't melt down. Just how do you design it all?

**Susan:** So there's all these constraints.

**Scott:** When it heats up it's going to crack or something.

**Susan:** There's all these gives and takes in the design. Everything you do may affect how pure that magnetic field is. At the same time if you could route this pipe a little bit better you could get a lot stronger field so it doesn't need to be as perfectly this, that or the other. So that's where things like machine learning can maybe help search a big huge hyper parameter space that is just really impossible in other ways.

**Scott:** Humans typically rely on symmetry to guide this. It's got to be circular, it's got to look nice. A lot of that comes from, well you can calculate the math pretty easily on whether it'll actually work, or well it's easier to produce. It's just, "I can only think of so many things, and I want to think of 15 different designs, well they're all going to be pretty symmetric even though they can be symmetric in all these different ways." But a machine learning model doesn't care so much about that. It cares more about the task at hand and it's like: "I don't care if I put a pipe here *if* I can build some way to get around it without affecting things." That complexity can deal with a complexity a lot better than a human can. It doesn't have to. It will still tend to, but it doesn't have to fall back on symmetry in order to make it simple.

**Susan:** We talked about this in a podcast, but at the core of any good problem is defining the problem. Honestly when you say things like people care about symmetry and it affects it end result, but machine learning only cares about the problem.

That's really a big core thing that I think machine learning might be bringing to the sciences, is really making people focus on super incredibly hardcore defining your problem and how close you are to a solution as opposed to just jumping to ways of fixing it.

**Scott:** It suffers a little bit from the solution in search of a problem. A kind of way of looking at the world where if you come from the other way, I'm just defining my [loss function](https://en.wikipedia.org/wiki/Loss_function) and I have these things that I can do. I can put steel here and plastic here, and this there. It's like I'm just going to exhaustively go through and try and figure it out. A machine learning model never gets tired.

**Susan:** It never gets bored of trying. The next step is .0001 different than the last step.

**Scott:** But it's excited about that! It's like "Oh, this might make it .001 better. A human doesn't get that excited about it."

**Susan:** Not at all. And I bet you, with humans, the recording gets a little bit sloppy after a while.

**Scott:** Once you see the 80%, getting to 90% is real hard and after that everybody is checked out. They did their duty.

**Susan:** Doing a grid search by hand, you really realize how much machines can help us.

**Scott:** People used to do this back in the day too, like pencil and paper. When they would talk about, "Let's do the calculation," it's like we spent weeks on this calculation. It's stuff like that.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976794/blog/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/napier_logtable.jpg)

*John Napier of Merchiston born 1550 - died 1617; is known as the discoverer of logarithms. The picture above is a picture of his log tables book-the calculations for which were all done by hand and thus had errors. Error-free log tables were not made possible until the era of electrical calculators 3 centuries later.*

**Susan:** Yeah, well the hard stuff is actually hard for a reason.

**Scott:** You're always finding the boundaries of what's possible and then spending weeks on the problem. When you don't have a calculator, well that means you're writing down stuff and trying to figure out the answer. When you finally do have the calculator, okay now the complexity of calculation is problematic and so you start doing things that you're going to want to program a computer to do, but you don't know that yet.

**Scott:** Then computers come along and you're like, "Oh, thank God. Now you're taking away a lot of this complexity!" But then you find a new problem to spend weeks on, and that's just how research works.

**Susan:** We've talked about a couple of really important things here. Computers are helping us sift through data in ways that used to take huge teams. They're also reducing the computational costs associated with things like the protein folding that we were talking about. We are getting really good at efficiencies there.

## Education and ML.

**Scott:** Unfortunately, researchers, you're going to have to learn a new skill. It's as if learning calculus and computing, and all these other things wasn't enough, here's another one. But it's a very powerful one and it's a tool such that you don't have to be the one that is smart about what exact little details you need to do in order to accomplish this task.

**Scott:** All you have to be smart about is putting the constraints in and saying, "Stay within these boundaries. Here is some training data," and then try to tackle that task. Not everything is going to be able to be done that way, but there are going to be a lot of things that are going to be able to be done that way. So it's a new tool in the tool belt. People are going to start thinking about the world and their problems, and just like they do with programming and math, statistics.

**Scott:** How can we uncover a new thing and not everything is going to be machine learning.

Not everything is going to be deep learning. Not everything is going to be statistics. You can learn new things just by writing, and you don't have to think about statistics.

It's going to be is a new honed, sharpened tool, is machine learning. Create data sets. Use models. Turn cranks. Get results. And go after the problem that way.

**Susan:** I had an argument with some friends a while ago where I was saying all the sciences in all the fields, and the idea that we have a machine learning degree path, maybe we need to fragment that. Saying you're in paleontology, there should be machine learning in paleontology. There should be machine learning in archaeology. There should machine learning in all sorts of different fields because just like basic stats from the math point of view, you go out there and you do really good math in whatever field acts.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976795/blog/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/Crete-archaeology-sissi..jpg) 
*As long as there is data-or enough data-ML methods can help researchers discover truly novel things. If you are interested, here is one article to read:*  Van Den Dries, M. H. (1998). Archaeology and the application of artificial intelligence: case-studies on use-wear analysis of prehistoric flint tools.

**Susan:** Now machine learning is related, but it's a new set of skills. It's like you said, honing those data sets and understanding how to churn them through a good model and all that stuff.

**Scott:** This is one of the downsides to higher education, meaning like graduate school plus.They don't necessarily have a good track record of taking in things outside their field and utilizing them really well in their own field. Some might describe their pace as glacial in that.

**Susan:** Progress is made one death at a time, right?

**Scott:** Progress is made one funeral at a time. That's a long time scale. That's 50 years or so that you have to wait for your-

**Susan:** Growing every year.

**Scott:** Some might say, from a real practical perspective at least every 30 years. For instance, computer programming has been around for a while now. In particle physics, there's a lot of programming that you have to do. There's no programming for physics course. You're just forced by trial by fire to learn the stuff you need to learn and move on. Same thing with machine learning. Same thing with engineering, or CAD drawing, or any of the stuff you have to do.

**Scott:** This means something like: sprinkle a little bit of money, enough to live. Put you around enough other people that are making a similar amount of money and sort of mix it all together and say, "Go create stuff." Those other people are graduate students. Then you do some search by graduate student descent, gradient descent-

**Susan:** I like that. Grad descent.

**Scott:** Yeah, grad descent. To find a solution to a problem. I think that is going to get an overhaul. I think it's going to have to because the existence of MOOC's (online courses). There probably be an online course that's machine learning for physics, or machine learning for particle physics, or machine learning for biophysics, or machine learning for whatever.

**Scott:** Those are going to crop up in the next 20 years and the whole model is going to change. People actually will be good at those things, and they will have a real sharp tool belt rather than just like a dull one which is kind of the case now.

## New tools, new ways to attack old problems

**Susan:** You know medicine is also an amazing example of this. We're seeing just as it hits, it is a brand new set of tools which allows people to think in brand new ways and attack old problems and new ways and get fresh insights on them.

**Scott:** It'll take time too. Even if you said, "You know what? I'm going to drop everything and I'm going to start doing machine learning in my field," I wouldn't even say that you'd make enough progress to make a contribution in year one. The real contributions are going to come in like year three, four or five when you're like, "Whoa, okay. I just got effective at using this tool." That's a hard time scale for people. If you can't learn it in a week or a day, or an hour, then you have a big drop off. People around will see that though. They'll the success of other researchers, papers, etc. They'll be using them. They'll be citing them. They'll be like, "Man, okay I really gotta do it this time."

**Susan:** This time I finally have to break down and this new tool that seems to be breaking open those problems that my field couldn't crack before, but now well we've got good results.

**Scott:** At least from what I saw, people get a little tired of learning so many different things. This is kind of problematic, but also a good thing in machine learning. You can forget a lot of it, and just go down the path and learn along the way. Then revisit those or something, so like, "What exactly is a Hidden Markov Model? What exactly is... just all these things that people used in the past.

<iframe src="https://www.youtube.com/embed/kqSzLo9fenk" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

**Susan:** That's the difference between someone that is ... not specialized, that is a machine learning scientist and trying to develop those basic techniques and those basic concepts. Some of that's combining it with a field like physics and machine learning together.

**Scott:** Yep, Applied AI.

**Susan:** Applied into the field of physics, which is also probably why those fields need to embrace it and start specializing the curriculum to include it.

**Scott:** I think there's a little love affair here, similar to math and physics, and chemistry and physics, and math and chemistry, and astrophysics and just astronomy and that sort of thing, where they feed off of each other. You learn a lot in a certain area because whoa, tools became available. Resources became available. People are interested in it.

## Astronomy and ML

**Scott:** Then you go do a really good job on that. But then the other one has kind of been left to rust for a while, but then you come back to it. This is definitely true of astronomy and physics essentially. Astronomy happened, right? It was a big deal. The moon, Jupiter, Jupiter's moons, things orbit each other. Back in the 1500s that was still a cutting edge thing. Move forward to the 1800s, still like a big deal. 1900-ish, in Albert Einstein's time, physics really took over. Thermodynamics is cruising, quantum physics, all those nuclear power, MRIs, just stuff like that.

**Scott:** Then, around mid-century, astronomers go out and notice some weird stuff happening in the universe, and discovered dark matter, and discovered dark energy. All of a sudden physicists are like scrambling to be like, "How do we describe this stuff?" We didn't know about it because we were too busy looking down here at really tiny stuff.

**Susan:** And you've got the biggest physics experiment in the universe.

**Scott:** Yeah.

**Susan:** The universe. The cosmic background radiation, how is that all lined up? Does that tell us something about quantum mechanics?

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976796/blog/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/Ilc_9yr_moll4096.png)

*The cosmic microwave background is electromagnetic radiation as a remnant from an early stage of the universe in Big Bang cosmology. Source: [Wikipedia.](https://en.wikipedia.org/wiki/Cosmic_microwave_background)*

**Scott:** Similar story with quantum field theory in physics and math, and theory of knots and strings coming back in, and math and physics and that sort of thing. All these things tie together and they feed off of each other. So I think there will be contributions from the applied AI side that are actually fundamental contributions in machine learning as well. And there already have been.

**Susan:** What we've already obviously seen this in the medical field, studying the brain has made contributions and the machine learning huge contributions in machine learning. And vice versa. [Reinforcement learning](https://blog.deepgram.com/ai-show-different-types-of-machine-learning/), talking about potentially how parts of the brain works and back and forth. Like you said, other fields that we're going to see those same things coming out of it.

**Susan:** That's what's super exciting about this. When you start pushing it out into the sciences, you get incredibly brilliant people that are brilliant in ways not exactly the same as everybody around you.

**Scott:** They factorize the problem a different way. Then you get a benefit from that. "Whoa, if you think of it that way then the world becomes really simple." You can jump to different ways of thinking to solve the problem however you need to.

**Susan:** Plus, from the machine learning standpoint we're like, "I gotta beat those guys." I can't let someone dealing with dinosaur bones come up with something new. Competition is great.

**Scott:** Get the blood pumping.

**Scott:** Speaking of getting blood pumping, you made some delicious bread this week.

**Susan:** There's a great recent article, a blog post I read about machine learning being applied to bread starter evolution and all that. This guy did a really great job of setting up, I think it was like [Scikit Learn...](https://scikit-learn.org/stable/index.html) I forget exactly the tools he used, to watch as the yeast would rise and fall.

**Scott:** So it was like a camera?

**Susan:** Well he had a camera set up on his little tubes of starter, and he would feed it and figure out exact times that-

**Scott:** So he wants to find a really good yeast. He wants to breed a really good yeast strain.

**Susan:** People have their starters. I had a starter for about two years and I had to give it up when I moved. It would have been really hard to explain on an international flight why I had this jar of clearly biological matter coming on the plane.

**Scott:** That you're trying to keep warm and alive.

**Susan:** People get into their starters and he was talking. This blog post was amazing. It was talking about cultivating wild yeast and trying to grow it, and what's the optimal feeding schedules and what's the optimal this, that and the other.

**Scott:** Like should you starve them for a while, or give them as much as they wanted to eat? Or cool them down and shock them with heat?

**Susan:** But it really showed first of all a good scientific method at play, using machine learning tools to help aid those experiments. It was mainly on the measurement side, but you could see a lot more that could go into this. It really shows you what machine learning can do. Just recognizing basics of how quickly this is growing versus not that is data points, and collecting those data points in the future analysis. Great stuff there.

**Susan:** The citizen scientist world is being enabled by machine learning, by taking out a lot of the complexities that you would have had to have done by hand.

**Scott:** Yeah, a lot of these things were impossible a decade ago. Certainly two decades ago.

**Susan:** I'm not going to watch my tube of starter growth, take measurements every five minutes for three days straight.

**Scott:** A machine can do it.

**Susan:** A machine can do it for me. Before good image recognition and all that came along, who were you going to get to do that? So there's great stuff. Other awesome sciences that are available with all the stuff that's done with all the image net models that come around. You can set up a camera and start classifying stuff that goes by your window and do a lot of great citizen science with all that. Again, something that would not have been possible before. You can spend a week in designing and building something, taking some off the shelf stuff, and classify all the flying objects that come across and do some basic science on what's flying through your window.

**Scott:** Many things are all coming together at once and it's also definitely true in a lot of these areas that you're sort of limited by data as well. But, of course, you can collect data yourself. And this is what the experimentalist would have to do anyway. They're not going to do it at a much bigger scale than you could. You might even do a bigger better job. So actually you're at the cutting edge.

**Susan:** It's amazing what these technologies are enabling at every single level. We've talked about fusion at big energy levels, and searching for dark matter in the universe, all the way down to improving your sourdough round to make it a little bit bread for you.

**Susan:** All sorts of amazing stuff that you can do with this. I'm excited for machine learning and the sciences.