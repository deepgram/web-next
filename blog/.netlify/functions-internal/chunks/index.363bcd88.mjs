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

const metadata = { "headings": [{ "depth": 2, "slug": "what-does-an-ai-transformation-look-like", "text": "What does an AI transformation look like?" }, { "depth": 2, "slug": "agriculture-is-about-to-be-massively-transformed", "text": "Agriculture is about to be massively transformed." }, { "depth": 3, "slug": "what-makes-agriculture-ripe-for-disruption", "text": "What makes agriculture ripe for disruption?" }, { "depth": 2, "slug": "automate-the-simple-stuff", "text": "Automate The Simple Stuff" }, { "depth": 2, "slug": "is-the-ag-ai-problem-easy-to-solve", "text": "Is the Ag AI problem easy to solve?" }, { "depth": 2, "slug": "are-fully-automated-ai-farms-possible", "text": "Are fully automated, AI farms possible?" }, { "depth": 3, "slug": "what-wont-be-touched-by-ai", "text": "What won\u2019t be touched by AI?" }, { "depth": 2, "slug": "how-does-this-transform-the-industry", "text": "How does this transform the industry?" }, { "depth": 2, "slug": "what-are-the-key-components-of-these-transformations", "text": "What are the key components of these transformations?" }], "source": `
<iframe src="https://www.youtube.com/embed/naC8T4FG0Nc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

**Scott:** Welcome to the AI Show. On the AI Show we talk about all things AI. Today we're asking the question, "What does an AI transformation look like?"

## What does an AI transformation look like?

**Susan:** So much of this world is being rapidly transformed by AI. There's so many great things to think about.

**Scott:** What's already been transformed?

**Susan:** What hasn't been already transformed. My favorite is spam. Your inbox is finally cleaned out a little bit.

**Scott:** This is late '90s.

**Susan:** This is a long time ago. Before that you couldn't use it and it really enabled us to have that medium. Without that no one would use email, not that people use email anymore. Do you still use email, Scott?

**Scott** Definitely.

**Susan:** I checked it last week, honest.

**Scott:** I don't believe you now.

**Susan:** You don't believe me?

**Scott:** Yeah.

**Susan:** No, there's some great ones. One of my favorites is the up and coming world.

**Scott:** What's that?

## Agriculture is about to be massively transformed.

**Scott:** That's true, agriculture is getting pretty automated. You've got big tractors that are [listening to a GPS](https://www.gps.gov/applications/agriculture/), figuring out where they are, and going and doing some pre-programmed thing. I think AI applies a lot there.

![alt](https://res.cloudinary.com/deepgram/image/upload/v1661976384/blog/ai-show-what-does-an-ai-tranformation-look-like/joao-marcelo-marques-791496-unsplash_V2.jpg)

**Susan:** There is a tremendous amount of this world that is rapidly changing due to AI. It's mainly making those small decisions. A person would learn to make those decisions pretty quickly and come off the cuff and say, "Okay, we're going to make this, we're going to make that." By automating that, you now free up those people to think about the bigger stuff.

**Scott:** It might even be an easy decision. For agriculture, if you see an area over here, the plants are smaller, and over here they're bigger. There's something different about that. Maybe it doesn't have enough water. Maybe it doesn't have enough nutrients. It would be easy for a human to come to that, but they would have to just go around, and look at every square foot, but that's a pretty menial task.

**Susan:** On the note of agriculture, I'm going to make a little confession here. If I could jump to another field other than speech, it would probably be the Ag world and applying [machine learning](https://en.wikipedia.org/wiki/Machine_learning).

**Susan:** Obviously, it's something that every human on planet deals with every single day, the results of agriculture. You need food, but it is just incredibly ripe for a disruptive change from AI.

### What makes agriculture ripe for disruption?

**Scott:** Is this because it's simplistic or why? Take the savings that simple things could do.

**Susan:** A simple thing, for instance, as you mentioned and what's going on right now, monitoring your fields to say "This area over here needs a little bit more water, or it needs a little bit more fertilizer." Being predictive and being proactive about managing a field of whatever resource.

**Susan:** But that's a small thing, and those are fairly easy things. You can detect through all sorts of fairly cheap sensors, water levels and all that.

**Scott:** Like what? What would a cheap sensor be?

**Susan:** Well, relatively cheap sensor, you could do infrared.

**Scott:** From what though? Like a farmer standing with an infrared gun?

**Susan:** No, there's a couple big sources that have been used traditionally. Satellites and light aircraft, but [very lately, a lot of UAV's](https://en.wikipedia.org/wiki/Agricultural_drone) (un-manned aerial vehicles) are starting to take control.

**Scott:** Aerial imagery of some sort, right?

**Susan:** Aerial imagery, and that's a fun one, because not only the products that they return back, can you analyze with [different machine learning techniques](https://blog.deepgram.com/ai-show-different-types-of-machine-learning/), but also the automation of flying around an area is inevitably going to be automated with machine learning. Right now a lot of it, the ones I've been looking at, is done by hand.

**Scott:** People flying planes?

**Susan:** People flying, or UAV's. That type of stuff. It's pretty easy to imagine a world where you got the tractor of the air, your UAV, taking over.

**Scott:** A UAV that takes off from your barn.

![alt](https://res.cloudinary.com/deepgram/image/upload/v1661976385/blog/ai-show-what-does-an-ai-tranformation-look-like/david-henrichs-399195-unsplash_v2.jpg)

**Susan:** Sure, it does a lap every two hours, and comes back to the charging station, and just keeps doing that.

**Scott:** What would it do with that data, though? It looks around, it gets infrared, it gets visual?

**Susan:** You could do a hundred different tasks. Again, the field one, I think everybody gets intuitively, "Sure, I monitor my crops, and I can do that," but again, go to say, cattle ranching. "Where are my cattle right now?" That's a pretty big question that you probably want to know. Have they left your property?

**Scott:** "Do they have enough grass?"

**Susan:** "Are they in a good area? Maybe I could rotate them on a different field?"

**Scott:** "Have they eaten up too much?"

**Susan:** "Has a new calf been born? Are my fences secure?" All these things are where a combination of this cheap sensor world and machine learning can come into play. You set up something that can fly around your area, it monitors fences, and knows how to look for a fence that is damaged or a gate that is open. It knows how to look for your cattle, and can recognize them and track them for you. And then you get all sorts of much deeper products later on like, being able to track say, the growth rate of a cow over time, as opposed to bringing them back and weighing them, and poking and prodding them for a half a day, which takes a lot of your time, and takes that cow out of the grass, where they're basically turning grass into money.

**Scott:** So you'll be able to personally identify the cow?

**Scott:** Facial recognition, but not facial recognition?

**Susan:** It's sort of like Cow-book. You know, you open up page, and it's got little like, "Oh-"

**Scott:** How much does it weigh? What is it into? It likes to go over here or over there.

**Susan:** "I've been kind of favoring this hoof over here for the last couple days. Maybe you should check this out." Or, "Ever since we've been in that field over there, we've been not as active. Maybe there's something in that field that's not helping us out."

**Scott:** Do you think there's anything down the line? Meaning, further along the pipeline? Okay, you have some grain, now what? Like shipping it, or storing it?

## Automate The Simple Stuff

**Susan:** It's pretty sci-fi still, to say completely automated farm...

> "But the deal is, automate the simple stuff. The stuff that takes those very simple decisions." Then, the bigger things-coordinating schedules, coordinating big muscle movements-that kind of stuff now becomes to purview of the farmer, the rancher, the whatever, allows them to think more strategically instead of tactically.

**Susan:** This is a tool that takes you from kind of that course grained, everything must be uniform. "My goal on this farm is to make it as uniform as possible, so I don't have to think about the differences between here and there. I can do everything all the same to take advantage of that small detail over here. This part of my land is better for this type of crop, and this one's better for that type of crop." These tools can alleviate the detailed work that before, you just couldn't have the time to focus mentally, or even physically, on specializing for that.

**Scott:** So instead of trying to make everything the same so that you can get an average yield from it, now you can take advantage of the uniqueness?

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976386/blog/ai-show-what-does-an-ai-tranformation-look-like/markus-spiske-632419-unsplash_v2.jpg)

**Susan:** Talking about disruptions, that's a very disruptive idea. So you flip the script. Now it's not about the big farm, it's about the small farm, and finding how much you can get the optimal yield out of a smaller area, whereas making a uniform big area actually reduces profits, because you've gotten rid of the potential for an optimal yield.

**Scott:** There are a lot of AI startups sort of cropping up around this area. Why do you think that is?

**Susan:** Well, it's trillions of dollars.

**Scott:** Huge market?

**Susan:** Yeah, with a _T_.

**Scott:** A huge market.

## Is the Ag AI problem easy to solve?

**Scott:** Do you think it's easy though? Like saying: "Hey, this is going to be an easy problem to solve"?

**Susan:** Nothing's easy. _Nothing_ is easy.

**Scott:** Okay, is this going to be easier than something else?

**Susan:** I think there's certain low hanging fruit that's easy in this market, and you're starting to see that more on the sensor side and the simple data analytic side. For example, analytics telling you, "This is how hydrated an area is," and stuff like that. [These are well established things](https://en.wikipedia.org/wiki/Precision_agriculture) that have been there for a while, but giving that on a smaller scale to farmers is starting to happen on ... The smaller scale happening on a larger scale, if that makes any sense whatsoever. But the harder, deeper questions for instance, trying to figure out the best crop rotation for this exact field and those types of problems are going to be a bit hard. They will be solved. Could I give you a timeframe? No.

**Scott:** Presumably, this is going to make food cheaper again. Like, food has already become pretty cheap, at least in the U.S., and most developed regions of the world. What do you think it means to the economy if food becomes even cheaper? It's even easier to make food?

**Susan:** I think the biggest change will be in distribution. If this vision comes to fruition, the idea of local is a lot easier. Not only, as you mentioned, on the transportation/shipping side, so if you have a small farm with a lot of specialized stuff, now machine learning could help manage a bunch of those small farms, and get the distribution chain together to give the volume necessary that big companies would really pay attention to.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976387/blog/ai-show-what-does-an-ai-tranformation-look-like/nigel-tadyanehondo-239555-unsplash_v2.jpg)

**Susan:** Say you've got a hundred acres. That sounds like a lot, but that's not enough to keep grocery story chain X happy with you. But if you got several hundred of these farms and they're all kind of coordinated together, you might have a real change in distribution. Again, you'd need something that would take a lot of small decisions. This would be something that machine learning type of algorithms could help out with. But this is, to me, a big thing. More diversity, more locality. Those are really important things, at least to me, and what I look for at a grocery store.

## Are fully automated, AI farms possible?

**Susan:** Tractor's already, they're basically driving themselves around.

**Scott:** Sure, but think like, Interstellar. There's an AI brain inside the device.

**Susan:** This is definitely well beyond. What I've deeply investigated, the Jetson's make me want to say "yes."

**Scott:** It'd be like a Roomba.

**Susan:** Yeah, the Roomba. I mean, the inevitability is there. The question is, what's the time scale?

**Susan:** Is this next year? This five years? Is this 10 years? Is this 100 years? And what does it mean to be truly automated? We're seeing the growth of the autonomous vehicle go from nothing to "We're really starting to see them in the public sphere this year," and the next five years, it's likely that you're going to have been in one of them.

**Scott:** Yeah, and farms aren't all that complicated. You know, you don't have to worry about the lady with the stroller, pushing out in front of the tractor as much.

**Susan:** Going back to the drone thing, that's what makes, potentially, automated drones around the farm a real possibility. Flying drones like, okay. The first or two you're flying it around, you mark off, "Don't fly here. There are trees."

**Scott:** So is Ag going to be the only transformation we see? Agriculture?

**Susan:** We should probably look for things that aren't going to be transformed.

### What won't be touched by AI?

**Scott:** Electricity will still be a thing.

**Susan:** Hopefully. Maybe when we unify all the forces and physics, we'll figure out that we can do something else.

**Scott:** You'll still probably sleep in beds for a while.

**Susan:** For me, it goes back to people have the wrong view of machine learning, and where its real power is at. The right view, to me, this is again, just Susan's view here, but

> "Get rid of the smaller decisions, those tactical decisions, so you can focus on a higher strategy. Once you start doing that, you realize, there's always something above that."

**Scott:** Focus your creative energy somewhere else.

**Susan:** It's like, why spend 90% of your time down here doing this? We need to stay creative. We need these things to offload those decisions that really all should be offloaded. But we need to be intelligent about what which ones we keep, even if it kind of makes better decisions. By automating it, you're getting rid of a lot of chances for creativity.

**Scott:** I'm pretty sure though, at least in my life, if I had some AI bot that was analyzing my patterns, it would be more creative than me. I go to the same places, I eat the same things, I do whatever. It could definitely diversify my social interactions, just by forcing me to go to new places.

**Susan:** That's true. You need to have more exploration, and less exploitation in your life.

**Scott:** Exactly. So you just have to find a balance with the AI there. Make sure it has exploration and exploitation built in.

**Susan:** There's an author I've read, David Brin, for anyone that is a Brin fan, he wrote a book. One of his characters was forced by a program to view things that they did not want to view. Just a random percentage of the time, "You're gonna view this stuff, just to shake it up."

**Scott:** I'm liking it already. Where's it go? If a book was written about it, a fictional book I presume, then it's gotta go in really good places, right?

**Susan:** Oh, the rest of this book, it goes really good- It's Earth, by David Brin. That was just one character showing the quirks of this particular character, and how she forced herself to stay creative. It does come down to the disruptive side of the house, we do have to manage that. We're seeing so many industries that are led by the change, staying ahead of the change is pretty hard. Making those intelligent decisions is really important. Intelligent decisions to say, "I'm gonna offload this. I'm gonna be creative over here."

## How does this transform the industry?

**Susan:** We talked about little bits and pieces, but how does it actually affect things in the long run? Like I said, this is, especially in Ag, it's a big change that flips the economy as a scale. So now, a smaller farm potentially is the more productive one.

**Scott:** This is because it has local knowledge? Why wouldn't a large farm be able to take care of, like pixelize it's areas, and take care of it really well?

![alt](https://res.cloudinary.com/deepgram/image/upload/v1661976388/blog/ai-show-what-does-an-ai-tranformation-look-like/al-x-407225-unsplash_v2.jpg)

**Susan:** You're right, they can. But I think it now allows a small area to be productive. So, the goal is to focus on the small area. Big farms will have a natural tendency to still just make everything the same. As soon as you say, "I'm gonna go large," why did you go large?

**Scott:** Right, bigger farms are easier easier to manage with 20th century tech.

**Susan:** You went large because you wanted to make things more uniform. And there will always be a place for that, but this is an economic shift, I predict, that will enable smaller farms in a way that we haven't seen for quite a while.

**Scott:** Do you think that data is a big differentiator there, in the Ag case?

**Susan:** Yes, and no. I'm going to say, in the lead up to these transformative times, winning, so to speak, solving the problem takes a tremendous amount of data, and legwork, and hard, hard work. The area we know about speech, it is hard work to get the data you need. But eventually, speech will be solved. I'm not saying it's tomorrow, and I'm not saying you'll be able- But you'll be able to just get a model that someone has put a whole of time and effort-

**Scott:** A lot of effort into it.

**Susan:** Into, and the data that went into it is-

**Scott:** Less and less important.

**Susan:** Is still down to this thing you just download and use. But, the goal on that small scale is then to take it, and specialize it, based off of your local data. And this hugely as important. Again, to bring up the speech world,

> "You can take a generic world, generic speech model, and just give it a few hours of some specialized knowledge, and suddenly you just see massive improvements."

That's the same on the small farm size. So maybe they solve some of these big problems.

**Scott:** It learns general themes, yeah?

**Susan:** Yes, but then you specialize it with just a year or two worth of your own data, and suddenly it's really good at your farm, and really good at making whatever decisions this particular thing was built to solve. Whether it's trying to track the growth rate of your animals, or trying to learn your land, and what it's best at.

## What are the key components of these transformations?

**Susan:** Well, you have to have the environment for the transformation to happen. Generally that means, something that's been there for a while.

**Scott:** Like social environment? Like people kinda know how it already goes?

**Scott:** It's already been figured out pretty well?

**Susan:** Yeah, I mean, Ag's been around, I've been told, more than a few years.

**Scott:** I've heard that, too.

**Susan:** And the longer an industry is around, without massive change, the more likely that there's a good chance for massive change to occur.

**Scott:** Well, yeah, you run up against the problems you're going to run against, and over the years, "Okay," things become established, and some things are hard, and you're not going to do them, and some things are not and you are going to do them.

**Susan:** And people get in the mindset before of, "Well, that didn't work 10 years ago, so why do I want to try it now?" Well, that was 10 years ago. That vision that said, "These ideas didn't work," now may work today, because of changes in technology.

**Susan:** It's someone coming in from the outside, with a different vision, generally powered by seeing what a technology can do today, that maybe it couldn't do before.

**Scott:** Or someone from the inside finding another...

**Susan:** Yeah, finding that notch out of the wilderness, and suddenly getting a glimpse of vision, and realizing, "We're gonna change."

**Susan:** Another great transformation right now, that's happening, is space. I mean, I'm a SpaceX fan. I'm not paid in any way, shape, or form.

**Scott:** This isn't really an AI transformation. Maybe in how they developed some of their parts or something.

**Susan:** Yeah, it just shows this general transformation where, a new vision came into place-

**Scott:** It was one way for a long time.

**Susan:** Rapidly replacing the old system.

**Scott:** Let's take a decade or so to like, work on some stuff, and then...

**Susan:** Now the big companies that were in space are probably very worried about their technology.

**Scott:** SpaceX will be making all the money in the future.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976388/blog/ai-show-what-does-an-ai-tranformation-look-like/spacex-549326-unsplash_V2.jpg)

**Susan:** It's great, but that's how these transformations generally happen. You know, an industry that's been established for a while, it has players that are established for a while, they're big. They've been sitting there.

**Scott:** They've become pretty complacent.

**Susan:** Not necessarily complacent, but they just don't see the way out. Everywhere they look, looks a little worse than where they're at, because they're stuck in a rut. This new entity comes in, and sees a new way, and they just go to a different optimum. That new optimum just crushes the old one.

**Susan:** And a lot of transformations just happen in that way.

**Scott:** This is the classic, great story recipe, the world was one way, then something happened. Now it's a different way.

**Susan:** And suddenly the dust of those old companies, no one really remembers them anymore.

**Scott:** Yeah, nobody cares anymore.

**Susan:** And you're seeing a lot of big, old, massive companies that people aren't hearing about anymore, you know? Where's GE going lately? Not to pick on them-

**Scott:** I'm sure they have some data science and machine learning people there, doing something.

**Susan:** Yeah, they're being forced to rapidly innovate, that's for sure. That, or be left behind.

**Susan:** You need to jump on board with these tools. It's painful, and there's going to be some wrong alleys.

**Scott:** Any final thoughts you have for people that are thinking about the AI transformation, what's going to happen?

**Susan:** Yeah. I would get smart on it, get your shots, get inoculated.

**Scott:** There you go. Get used to this idea.

**Susan:** Yeah. It doesn't mean that you're going to be doing it yourself. It doesn't mean that you won't be impacted by it, but do some due diligence right now. Start looking into it, and keep an eye towards those things that used to not work. Think about, with some sort of machine learning powering them, maybe they could have worked. It took too many people, and too many decisions 10 years ago, but maybe it's now possible.

**Scott:** I would say,

**AI is not going to change literally everything, but just like electricity didn't literally change everything, and the internet didn't literally change everything.**

**Susan:** It didn't?

**Scott:** No, it didn't.

**Susan:** I brush my teeth with an electric toothbrush that can communicate on the internet.

**Scott:** Yeah, but these transformations are usually good in certain areas, but they're like, really, really good in those certain areas, and make a big difference. You'll see that, when there's something along those lines of:

> "What's a mundane task for a human to do, but still takes human intelligence to do at least right now?" Okay, that's probably a really good spot to be thinking about "How is AI going to change that, and extract value?"
`, "html": '<iframe src="https://www.youtube.com/embed/naC8T4FG0Nc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p><strong>Scott:</strong> Welcome to the AI Show. On the AI Show we talk about all things AI. Today we\u2019re asking the question, \u201CWhat does an AI transformation look like?\u201D</p>\n<h2 id="what-does-an-ai-transformation-look-like">What does an AI transformation look like?</h2>\n<p><strong>Susan:</strong> So much of this world is being rapidly transformed by AI. There\u2019s so many great things to think about.</p>\n<p><strong>Scott:</strong> What\u2019s already been transformed?</p>\n<p><strong>Susan:</strong> What hasn\u2019t been already transformed. My favorite is spam. Your inbox is finally cleaned out a little bit.</p>\n<p><strong>Scott:</strong> This is late \u201990s.</p>\n<p><strong>Susan:</strong> This is a long time ago. Before that you couldn\u2019t use it and it really enabled us to have that medium. Without that no one would use email, not that people use email anymore. Do you still use email, Scott?</p>\n<p><strong>Scott</strong> Definitely.</p>\n<p><strong>Susan:</strong> I checked it last week, honest.</p>\n<p><strong>Scott:</strong> I don\u2019t believe you now.</p>\n<p><strong>Susan:</strong> You don\u2019t believe me?</p>\n<p><strong>Scott:</strong> Yeah.</p>\n<p><strong>Susan:</strong> No, there\u2019s some great ones. One of my favorites is the up and coming world.</p>\n<p><strong>Scott:</strong> What\u2019s that?</p>\n<h2 id="agriculture-is-about-to-be-massively-transformed">Agriculture is about to be massively transformed.</h2>\n<p><strong>Scott:</strong> That\u2019s true, agriculture is getting pretty automated. You\u2019ve got big tractors that are <a href="https://www.gps.gov/applications/agriculture/">listening to a GPS</a>, figuring out where they are, and going and doing some pre-programmed thing. I think AI applies a lot there.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976384/blog/ai-show-what-does-an-ai-tranformation-look-like/joao-marcelo-marques-791496-unsplash_V2.jpg" alt="alt"></p>\n<p><strong>Susan:</strong> There is a tremendous amount of this world that is rapidly changing due to AI. It\u2019s mainly making those small decisions. A person would learn to make those decisions pretty quickly and come off the cuff and say, \u201COkay, we\u2019re going to make this, we\u2019re going to make that.\u201D By automating that, you now free up those people to think about the bigger stuff.</p>\n<p><strong>Scott:</strong> It might even be an easy decision. For agriculture, if you see an area over here, the plants are smaller, and over here they\u2019re bigger. There\u2019s something different about that. Maybe it doesn\u2019t have enough water. Maybe it doesn\u2019t have enough nutrients. It would be easy for a human to come to that, but they would have to just go around, and look at every square foot, but that\u2019s a pretty menial task.</p>\n<p><strong>Susan:</strong> On the note of agriculture, I\u2019m going to make a little confession here. If I could jump to another field other than speech, it would probably be the Ag world and applying <a href="https://en.wikipedia.org/wiki/Machine_learning">machine learning</a>.</p>\n<p><strong>Susan:</strong> Obviously, it\u2019s something that every human on planet deals with every single day, the results of agriculture. You need food, but it is just incredibly ripe for a disruptive change from AI.</p>\n<h3 id="what-makes-agriculture-ripe-for-disruption">What makes agriculture ripe for disruption?</h3>\n<p><strong>Scott:</strong> Is this because it\u2019s simplistic or why? Take the savings that simple things could do.</p>\n<p><strong>Susan:</strong> A simple thing, for instance, as you mentioned and what\u2019s going on right now, monitoring your fields to say \u201CThis area over here needs a little bit more water, or it needs a little bit more fertilizer.\u201D Being predictive and being proactive about managing a field of whatever resource.</p>\n<p><strong>Susan:</strong> But that\u2019s a small thing, and those are fairly easy things. You can detect through all sorts of fairly cheap sensors, water levels and all that.</p>\n<p><strong>Scott:</strong> Like what? What would a cheap sensor be?</p>\n<p><strong>Susan:</strong> Well, relatively cheap sensor, you could do infrared.</p>\n<p><strong>Scott:</strong> From what though? Like a farmer standing with an infrared gun?</p>\n<p><strong>Susan:</strong> No, there\u2019s a couple big sources that have been used traditionally. Satellites and light aircraft, but <a href="https://en.wikipedia.org/wiki/Agricultural_drone">very lately, a lot of UAV\u2019s</a> (un-manned aerial vehicles) are starting to take control.</p>\n<p><strong>Scott:</strong> Aerial imagery of some sort, right?</p>\n<p><strong>Susan:</strong> Aerial imagery, and that\u2019s a fun one, because not only the products that they return back, can you analyze with <a href="https://blog.deepgram.com/ai-show-different-types-of-machine-learning/">different machine learning techniques</a>, but also the automation of flying around an area is inevitably going to be automated with machine learning. Right now a lot of it, the ones I\u2019ve been looking at, is done by hand.</p>\n<p><strong>Scott:</strong> People flying planes?</p>\n<p><strong>Susan:</strong> People flying, or UAV\u2019s. That type of stuff. It\u2019s pretty easy to imagine a world where you got the tractor of the air, your UAV, taking over.</p>\n<p><strong>Scott:</strong> A UAV that takes off from your barn.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976385/blog/ai-show-what-does-an-ai-tranformation-look-like/david-henrichs-399195-unsplash_v2.jpg" alt="alt"></p>\n<p><strong>Susan:</strong> Sure, it does a lap every two hours, and comes back to the charging station, and just keeps doing that.</p>\n<p><strong>Scott:</strong> What would it do with that data, though? It looks around, it gets infrared, it gets visual?</p>\n<p><strong>Susan:</strong> You could do a hundred different tasks. Again, the field one, I think everybody gets intuitively, \u201CSure, I monitor my crops, and I can do that,\u201D but again, go to say, cattle ranching. \u201CWhere are my cattle right now?\u201D That\u2019s a pretty big question that you probably want to know. Have they left your property?</p>\n<p><strong>Scott:</strong> \u201CDo they have enough grass?\u201D</p>\n<p><strong>Susan:</strong> \u201CAre they in a good area? Maybe I could rotate them on a different field?\u201D</p>\n<p><strong>Scott:</strong> \u201CHave they eaten up too much?\u201D</p>\n<p><strong>Susan:</strong> \u201CHas a new calf been born? Are my fences secure?\u201D All these things are where a combination of this cheap sensor world and machine learning can come into play. You set up something that can fly around your area, it monitors fences, and knows how to look for a fence that is damaged or a gate that is open. It knows how to look for your cattle, and can recognize them and track them for you. And then you get all sorts of much deeper products later on like, being able to track say, the growth rate of a cow over time, as opposed to bringing them back and weighing them, and poking and prodding them for a half a day, which takes a lot of your time, and takes that cow out of the grass, where they\u2019re basically turning grass into money.</p>\n<p><strong>Scott:</strong> So you\u2019ll be able to personally identify the cow?</p>\n<p><strong>Scott:</strong> Facial recognition, but not facial recognition?</p>\n<p><strong>Susan:</strong> It\u2019s sort of like Cow-book. You know, you open up page, and it\u2019s got little like, \u201COh-\u201D</p>\n<p><strong>Scott:</strong> How much does it weigh? What is it into? It likes to go over here or over there.</p>\n<p><strong>Susan:</strong> \u201CI\u2019ve been kind of favoring this hoof over here for the last couple days. Maybe you should check this out.\u201D Or, \u201CEver since we\u2019ve been in that field over there, we\u2019ve been not as active. Maybe there\u2019s something in that field that\u2019s not helping us out.\u201D</p>\n<p><strong>Scott:</strong> Do you think there\u2019s anything down the line? Meaning, further along the pipeline? Okay, you have some grain, now what? Like shipping it, or storing it?</p>\n<h2 id="automate-the-simple-stuff">Automate The Simple Stuff</h2>\n<p><strong>Susan:</strong> It\u2019s pretty sci-fi still, to say completely automated farm\u2026</p>\n<blockquote>\n<p>\u201CBut the deal is, automate the simple stuff. The stuff that takes those very simple decisions.\u201D Then, the bigger things-coordinating schedules, coordinating big muscle movements-that kind of stuff now becomes to purview of the farmer, the rancher, the whatever, allows them to think more strategically instead of tactically.</p>\n</blockquote>\n<p><strong>Susan:</strong> This is a tool that takes you from kind of that course grained, everything must be uniform. \u201CMy goal on this farm is to make it as uniform as possible, so I don\u2019t have to think about the differences between here and there. I can do everything all the same to take advantage of that small detail over here. This part of my land is better for this type of crop, and this one\u2019s better for that type of crop.\u201D These tools can alleviate the detailed work that before, you just couldn\u2019t have the time to focus mentally, or even physically, on specializing for that.</p>\n<p><strong>Scott:</strong> So instead of trying to make everything the same so that you can get an average yield from it, now you can take advantage of the uniqueness?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976386/blog/ai-show-what-does-an-ai-tranformation-look-like/markus-spiske-632419-unsplash_v2.jpg" alt="Alt"></p>\n<p><strong>Susan:</strong> Talking about disruptions, that\u2019s a very disruptive idea. So you flip the script. Now it\u2019s not about the big farm, it\u2019s about the small farm, and finding how much you can get the optimal yield out of a smaller area, whereas making a uniform big area actually reduces profits, because you\u2019ve gotten rid of the potential for an optimal yield.</p>\n<p><strong>Scott:</strong> There are a lot of AI startups sort of cropping up around this area. Why do you think that is?</p>\n<p><strong>Susan:</strong> Well, it\u2019s trillions of dollars.</p>\n<p><strong>Scott:</strong> Huge market?</p>\n<p><strong>Susan:</strong> Yeah, with a <em>T</em>.</p>\n<p><strong>Scott:</strong> A huge market.</p>\n<h2 id="is-the-ag-ai-problem-easy-to-solve">Is the Ag AI problem easy to solve?</h2>\n<p><strong>Scott:</strong> Do you think it\u2019s easy though? Like saying: \u201CHey, this is going to be an easy problem to solve\u201D?</p>\n<p><strong>Susan:</strong> Nothing\u2019s easy. <em>Nothing</em> is easy.</p>\n<p><strong>Scott:</strong> Okay, is this going to be easier than something else?</p>\n<p><strong>Susan:</strong> I think there\u2019s certain low hanging fruit that\u2019s easy in this market, and you\u2019re starting to see that more on the sensor side and the simple data analytic side. For example, analytics telling you, \u201CThis is how hydrated an area is,\u201D and stuff like that. <a href="https://en.wikipedia.org/wiki/Precision_agriculture">These are well established things</a> that have been there for a while, but giving that on a smaller scale to farmers is starting to happen on \u2026 The smaller scale happening on a larger scale, if that makes any sense whatsoever. But the harder, deeper questions for instance, trying to figure out the best crop rotation for this exact field and those types of problems are going to be a bit hard. They will be solved. Could I give you a timeframe? No.</p>\n<p><strong>Scott:</strong> Presumably, this is going to make food cheaper again. Like, food has already become pretty cheap, at least in the U.S., and most developed regions of the world. What do you think it means to the economy if food becomes even cheaper? It\u2019s even easier to make food?</p>\n<p><strong>Susan:</strong> I think the biggest change will be in distribution. If this vision comes to fruition, the idea of local is a lot easier. Not only, as you mentioned, on the transportation/shipping side, so if you have a small farm with a lot of specialized stuff, now machine learning could help manage a bunch of those small farms, and get the distribution chain together to give the volume necessary that big companies would really pay attention to.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976387/blog/ai-show-what-does-an-ai-tranformation-look-like/nigel-tadyanehondo-239555-unsplash_v2.jpg" alt="Alt"></p>\n<p><strong>Susan:</strong> Say you\u2019ve got a hundred acres. That sounds like a lot, but that\u2019s not enough to keep grocery story chain X happy with you. But if you got several hundred of these farms and they\u2019re all kind of coordinated together, you might have a real change in distribution. Again, you\u2019d need something that would take a lot of small decisions. This would be something that machine learning type of algorithms could help out with. But this is, to me, a big thing. More diversity, more locality. Those are really important things, at least to me, and what I look for at a grocery store.</p>\n<h2 id="are-fully-automated-ai-farms-possible">Are fully automated, AI farms possible?</h2>\n<p><strong>Susan:</strong> Tractor\u2019s already, they\u2019re basically driving themselves around.</p>\n<p><strong>Scott:</strong> Sure, but think like, Interstellar. There\u2019s an AI brain inside the device.</p>\n<p><strong>Susan:</strong> This is definitely well beyond. What I\u2019ve deeply investigated, the Jetson\u2019s make me want to say \u201Cyes.\u201D</p>\n<p><strong>Scott:</strong> It\u2019d be like a Roomba.</p>\n<p><strong>Susan:</strong> Yeah, the Roomba. I mean, the inevitability is there. The question is, what\u2019s the time scale?</p>\n<p><strong>Susan:</strong> Is this next year? This five years? Is this 10 years? Is this 100 years? And what does it mean to be truly automated? We\u2019re seeing the growth of the autonomous vehicle go from nothing to \u201CWe\u2019re really starting to see them in the public sphere this year,\u201D and the next five years, it\u2019s likely that you\u2019re going to have been in one of them.</p>\n<p><strong>Scott:</strong> Yeah, and farms aren\u2019t all that complicated. You know, you don\u2019t have to worry about the lady with the stroller, pushing out in front of the tractor as much.</p>\n<p><strong>Susan:</strong> Going back to the drone thing, that\u2019s what makes, potentially, automated drones around the farm a real possibility. Flying drones like, okay. The first or two you\u2019re flying it around, you mark off, \u201CDon\u2019t fly here. There are trees.\u201D</p>\n<p><strong>Scott:</strong> So is Ag going to be the only transformation we see? Agriculture?</p>\n<p><strong>Susan:</strong> We should probably look for things that aren\u2019t going to be transformed.</p>\n<h3 id="what-wont-be-touched-by-ai">What won\u2019t be touched by AI?</h3>\n<p><strong>Scott:</strong> Electricity will still be a thing.</p>\n<p><strong>Susan:</strong> Hopefully. Maybe when we unify all the forces and physics, we\u2019ll figure out that we can do something else.</p>\n<p><strong>Scott:</strong> You\u2019ll still probably sleep in beds for a while.</p>\n<p><strong>Susan:</strong> For me, it goes back to people have the wrong view of machine learning, and where its real power is at. The right view, to me, this is again, just Susan\u2019s view here, but</p>\n<blockquote>\n<p>\u201CGet rid of the smaller decisions, those tactical decisions, so you can focus on a higher strategy. Once you start doing that, you realize, there\u2019s always something above that.\u201D</p>\n</blockquote>\n<p><strong>Scott:</strong> Focus your creative energy somewhere else.</p>\n<p><strong>Susan:</strong> It\u2019s like, why spend 90% of your time down here doing this? We need to stay creative. We need these things to offload those decisions that really all should be offloaded. But we need to be intelligent about what which ones we keep, even if it kind of makes better decisions. By automating it, you\u2019re getting rid of a lot of chances for creativity.</p>\n<p><strong>Scott:</strong> I\u2019m pretty sure though, at least in my life, if I had some AI bot that was analyzing my patterns, it would be more creative than me. I go to the same places, I eat the same things, I do whatever. It could definitely diversify my social interactions, just by forcing me to go to new places.</p>\n<p><strong>Susan:</strong> That\u2019s true. You need to have more exploration, and less exploitation in your life.</p>\n<p><strong>Scott:</strong> Exactly. So you just have to find a balance with the AI there. Make sure it has exploration and exploitation built in.</p>\n<p><strong>Susan:</strong> There\u2019s an author I\u2019ve read, David Brin, for anyone that is a Brin fan, he wrote a book. One of his characters was forced by a program to view things that they did not want to view. Just a random percentage of the time, \u201CYou\u2019re gonna view this stuff, just to shake it up.\u201D</p>\n<p><strong>Scott:</strong> I\u2019m liking it already. Where\u2019s it go? If a book was written about it, a fictional book I presume, then it\u2019s gotta go in really good places, right?</p>\n<p><strong>Susan:</strong> Oh, the rest of this book, it goes really good- It\u2019s Earth, by David Brin. That was just one character showing the quirks of this particular character, and how she forced herself to stay creative. It does come down to the disruptive side of the house, we do have to manage that. We\u2019re seeing so many industries that are led by the change, staying ahead of the change is pretty hard. Making those intelligent decisions is really important. Intelligent decisions to say, \u201CI\u2019m gonna offload this. I\u2019m gonna be creative over here.\u201D</p>\n<h2 id="how-does-this-transform-the-industry">How does this transform the industry?</h2>\n<p><strong>Susan:</strong> We talked about little bits and pieces, but how does it actually affect things in the long run? Like I said, this is, especially in Ag, it\u2019s a big change that flips the economy as a scale. So now, a smaller farm potentially is the more productive one.</p>\n<p><strong>Scott:</strong> This is because it has local knowledge? Why wouldn\u2019t a large farm be able to take care of, like pixelize it\u2019s areas, and take care of it really well?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976388/blog/ai-show-what-does-an-ai-tranformation-look-like/al-x-407225-unsplash_v2.jpg" alt="alt"></p>\n<p><strong>Susan:</strong> You\u2019re right, they can. But I think it now allows a small area to be productive. So, the goal is to focus on the small area. Big farms will have a natural tendency to still just make everything the same. As soon as you say, \u201CI\u2019m gonna go large,\u201D why did you go large?</p>\n<p><strong>Scott:</strong> Right, bigger farms are easier easier to manage with 20th century tech.</p>\n<p><strong>Susan:</strong> You went large because you wanted to make things more uniform. And there will always be a place for that, but this is an economic shift, I predict, that will enable smaller farms in a way that we haven\u2019t seen for quite a while.</p>\n<p><strong>Scott:</strong> Do you think that data is a big differentiator there, in the Ag case?</p>\n<p><strong>Susan:</strong> Yes, and no. I\u2019m going to say, in the lead up to these transformative times, winning, so to speak, solving the problem takes a tremendous amount of data, and legwork, and hard, hard work. The area we know about speech, it is hard work to get the data you need. But eventually, speech will be solved. I\u2019m not saying it\u2019s tomorrow, and I\u2019m not saying you\u2019ll be able- But you\u2019ll be able to just get a model that someone has put a whole of time and effort-</p>\n<p><strong>Scott:</strong> A lot of effort into it.</p>\n<p><strong>Susan:</strong> Into, and the data that went into it is-</p>\n<p><strong>Scott:</strong> Less and less important.</p>\n<p><strong>Susan:</strong> Is still down to this thing you just download and use. But, the goal on that small scale is then to take it, and specialize it, based off of your local data. And this hugely as important. Again, to bring up the speech world,</p>\n<blockquote>\n<p>\u201CYou can take a generic world, generic speech model, and just give it a few hours of some specialized knowledge, and suddenly you just see massive improvements.\u201D</p>\n</blockquote>\n<p>That\u2019s the same on the small farm size. So maybe they solve some of these big problems.</p>\n<p><strong>Scott:</strong> It learns general themes, yeah?</p>\n<p><strong>Susan:</strong> Yes, but then you specialize it with just a year or two worth of your own data, and suddenly it\u2019s really good at your farm, and really good at making whatever decisions this particular thing was built to solve. Whether it\u2019s trying to track the growth rate of your animals, or trying to learn your land, and what it\u2019s best at.</p>\n<h2 id="what-are-the-key-components-of-these-transformations">What are the key components of these transformations?</h2>\n<p><strong>Susan:</strong> Well, you have to have the environment for the transformation to happen. Generally that means, something that\u2019s been there for a while.</p>\n<p><strong>Scott:</strong> Like social environment? Like people kinda know how it already goes?</p>\n<p><strong>Scott:</strong> It\u2019s already been figured out pretty well?</p>\n<p><strong>Susan:</strong> Yeah, I mean, Ag\u2019s been around, I\u2019ve been told, more than a few years.</p>\n<p><strong>Scott:</strong> I\u2019ve heard that, too.</p>\n<p><strong>Susan:</strong> And the longer an industry is around, without massive change, the more likely that there\u2019s a good chance for massive change to occur.</p>\n<p><strong>Scott:</strong> Well, yeah, you run up against the problems you\u2019re going to run against, and over the years, \u201COkay,\u201D things become established, and some things are hard, and you\u2019re not going to do them, and some things are not and you are going to do them.</p>\n<p><strong>Susan:</strong> And people get in the mindset before of, \u201CWell, that didn\u2019t work 10 years ago, so why do I want to try it now?\u201D Well, that was 10 years ago. That vision that said, \u201CThese ideas didn\u2019t work,\u201D now may work today, because of changes in technology.</p>\n<p><strong>Susan:</strong> It\u2019s someone coming in from the outside, with a different vision, generally powered by seeing what a technology can do today, that maybe it couldn\u2019t do before.</p>\n<p><strong>Scott:</strong> Or someone from the inside finding another\u2026</p>\n<p><strong>Susan:</strong> Yeah, finding that notch out of the wilderness, and suddenly getting a glimpse of vision, and realizing, \u201CWe\u2019re gonna change.\u201D</p>\n<p><strong>Susan:</strong> Another great transformation right now, that\u2019s happening, is space. I mean, I\u2019m a SpaceX fan. I\u2019m not paid in any way, shape, or form.</p>\n<p><strong>Scott:</strong> This isn\u2019t really an AI transformation. Maybe in how they developed some of their parts or something.</p>\n<p><strong>Susan:</strong> Yeah, it just shows this general transformation where, a new vision came into place-</p>\n<p><strong>Scott:</strong> It was one way for a long time.</p>\n<p><strong>Susan:</strong> Rapidly replacing the old system.</p>\n<p><strong>Scott:</strong> Let\u2019s take a decade or so to like, work on some stuff, and then\u2026</p>\n<p><strong>Susan:</strong> Now the big companies that were in space are probably very worried about their technology.</p>\n<p><strong>Scott:</strong> SpaceX will be making all the money in the future.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976388/blog/ai-show-what-does-an-ai-tranformation-look-like/spacex-549326-unsplash_V2.jpg" alt="Alt"></p>\n<p><strong>Susan:</strong> It\u2019s great, but that\u2019s how these transformations generally happen. You know, an industry that\u2019s been established for a while, it has players that are established for a while, they\u2019re big. They\u2019ve been sitting there.</p>\n<p><strong>Scott:</strong> They\u2019ve become pretty complacent.</p>\n<p><strong>Susan:</strong> Not necessarily complacent, but they just don\u2019t see the way out. Everywhere they look, looks a little worse than where they\u2019re at, because they\u2019re stuck in a rut. This new entity comes in, and sees a new way, and they just go to a different optimum. That new optimum just crushes the old one.</p>\n<p><strong>Susan:</strong> And a lot of transformations just happen in that way.</p>\n<p><strong>Scott:</strong> This is the classic, great story recipe, the world was one way, then something happened. Now it\u2019s a different way.</p>\n<p><strong>Susan:</strong> And suddenly the dust of those old companies, no one really remembers them anymore.</p>\n<p><strong>Scott:</strong> Yeah, nobody cares anymore.</p>\n<p><strong>Susan:</strong> And you\u2019re seeing a lot of big, old, massive companies that people aren\u2019t hearing about anymore, you know? Where\u2019s GE going lately? Not to pick on them-</p>\n<p><strong>Scott:</strong> I\u2019m sure they have some data science and machine learning people there, doing something.</p>\n<p><strong>Susan:</strong> Yeah, they\u2019re being forced to rapidly innovate, that\u2019s for sure. That, or be left behind.</p>\n<p><strong>Susan:</strong> You need to jump on board with these tools. It\u2019s painful, and there\u2019s going to be some wrong alleys.</p>\n<p><strong>Scott:</strong> Any final thoughts you have for people that are thinking about the AI transformation, what\u2019s going to happen?</p>\n<p><strong>Susan:</strong> Yeah. I would get smart on it, get your shots, get inoculated.</p>\n<p><strong>Scott:</strong> There you go. Get used to this idea.</p>\n<p><strong>Susan:</strong> Yeah. It doesn\u2019t mean that you\u2019re going to be doing it yourself. It doesn\u2019t mean that you won\u2019t be impacted by it, but do some due diligence right now. Start looking into it, and keep an eye towards those things that used to not work. Think about, with some sort of machine learning powering them, maybe they could have worked. It took too many people, and too many decisions 10 years ago, but maybe it\u2019s now possible.</p>\n<p><strong>Scott:</strong> I would say,</p>\n<p><strong>AI is not going to change literally everything, but just like electricity didn\u2019t literally change everything, and the internet didn\u2019t literally change everything.</strong></p>\n<p><strong>Susan:</strong> It didn\u2019t?</p>\n<p><strong>Scott:</strong> No, it didn\u2019t.</p>\n<p><strong>Susan:</strong> I brush my teeth with an electric toothbrush that can communicate on the internet.</p>\n<p><strong>Scott:</strong> Yeah, but these transformations are usually good in certain areas, but they\u2019re like, really, really good in those certain areas, and make a big difference. You\u2019ll see that, when there\u2019s something along those lines of:</p>\n<blockquote>\n<p>\u201CWhat\u2019s a mundane task for a human to do, but still takes human intelligence to do at least right now?\u201D Okay, that\u2019s probably a really good spot to be thinking about \u201CHow is AI going to change that, and extract value?\u201D</p>\n</blockquote>' };
const frontmatter = { "title": "What does an AI transformation look like? \u2014 AI Show", "description": "How is AI transforming the world? Have a listen to this episode of the AI Show and see what we think.", "date": "2018-10-12T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981319/blog/ai-show-what-does-an-ai-tranformation-look-like/what-does-ai-transformation-look-like-blog-thumb%402.jpg", "authors": ["morris-gevirtz"], "category": "ai-and-engineering", "tags": ["voice-tech"], "seo": { "title": "What does an AI transformation look like? \u2014 AI Show", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981319/blog/ai-show-what-does-an-ai-tranformation-look-like/what-does-ai-transformation-look-like-blog-thumb%402.jpg" }, "shorturls": { "share": "https://dpgr.am/1e57b96", "twitter": "https://dpgr.am/8f8b6c6", "linkedin": "https://dpgr.am/8680425", "reddit": "https://dpgr.am/0590832", "facebook": "https://dpgr.am/971b8a2" }, "astro": { "headings": [{ "depth": 2, "slug": "what-does-an-ai-transformation-look-like", "text": "What does an AI transformation look like?" }, { "depth": 2, "slug": "agriculture-is-about-to-be-massively-transformed", "text": "Agriculture is about to be massively transformed." }, { "depth": 3, "slug": "what-makes-agriculture-ripe-for-disruption", "text": "What makes agriculture ripe for disruption?" }, { "depth": 2, "slug": "automate-the-simple-stuff", "text": "Automate The Simple Stuff" }, { "depth": 2, "slug": "is-the-ag-ai-problem-easy-to-solve", "text": "Is the Ag AI problem easy to solve?" }, { "depth": 2, "slug": "are-fully-automated-ai-farms-possible", "text": "Are fully automated, AI farms possible?" }, { "depth": 3, "slug": "what-wont-be-touched-by-ai", "text": "What won\u2019t be touched by AI?" }, { "depth": 2, "slug": "how-does-this-transform-the-industry", "text": "How does this transform the industry?" }, { "depth": 2, "slug": "what-are-the-key-components-of-these-transformations", "text": "What are the key components of these transformations?" }], "source": `
<iframe src="https://www.youtube.com/embed/naC8T4FG0Nc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

**Scott:** Welcome to the AI Show. On the AI Show we talk about all things AI. Today we're asking the question, "What does an AI transformation look like?"

## What does an AI transformation look like?

**Susan:** So much of this world is being rapidly transformed by AI. There's so many great things to think about.

**Scott:** What's already been transformed?

**Susan:** What hasn't been already transformed. My favorite is spam. Your inbox is finally cleaned out a little bit.

**Scott:** This is late '90s.

**Susan:** This is a long time ago. Before that you couldn't use it and it really enabled us to have that medium. Without that no one would use email, not that people use email anymore. Do you still use email, Scott?

**Scott** Definitely.

**Susan:** I checked it last week, honest.

**Scott:** I don't believe you now.

**Susan:** You don't believe me?

**Scott:** Yeah.

**Susan:** No, there's some great ones. One of my favorites is the up and coming world.

**Scott:** What's that?

## Agriculture is about to be massively transformed.

**Scott:** That's true, agriculture is getting pretty automated. You've got big tractors that are [listening to a GPS](https://www.gps.gov/applications/agriculture/), figuring out where they are, and going and doing some pre-programmed thing. I think AI applies a lot there.

![alt](https://res.cloudinary.com/deepgram/image/upload/v1661976384/blog/ai-show-what-does-an-ai-tranformation-look-like/joao-marcelo-marques-791496-unsplash_V2.jpg)

**Susan:** There is a tremendous amount of this world that is rapidly changing due to AI. It's mainly making those small decisions. A person would learn to make those decisions pretty quickly and come off the cuff and say, "Okay, we're going to make this, we're going to make that." By automating that, you now free up those people to think about the bigger stuff.

**Scott:** It might even be an easy decision. For agriculture, if you see an area over here, the plants are smaller, and over here they're bigger. There's something different about that. Maybe it doesn't have enough water. Maybe it doesn't have enough nutrients. It would be easy for a human to come to that, but they would have to just go around, and look at every square foot, but that's a pretty menial task.

**Susan:** On the note of agriculture, I'm going to make a little confession here. If I could jump to another field other than speech, it would probably be the Ag world and applying [machine learning](https://en.wikipedia.org/wiki/Machine_learning).

**Susan:** Obviously, it's something that every human on planet deals with every single day, the results of agriculture. You need food, but it is just incredibly ripe for a disruptive change from AI.

### What makes agriculture ripe for disruption?

**Scott:** Is this because it's simplistic or why? Take the savings that simple things could do.

**Susan:** A simple thing, for instance, as you mentioned and what's going on right now, monitoring your fields to say "This area over here needs a little bit more water, or it needs a little bit more fertilizer." Being predictive and being proactive about managing a field of whatever resource.

**Susan:** But that's a small thing, and those are fairly easy things. You can detect through all sorts of fairly cheap sensors, water levels and all that.

**Scott:** Like what? What would a cheap sensor be?

**Susan:** Well, relatively cheap sensor, you could do infrared.

**Scott:** From what though? Like a farmer standing with an infrared gun?

**Susan:** No, there's a couple big sources that have been used traditionally. Satellites and light aircraft, but [very lately, a lot of UAV's](https://en.wikipedia.org/wiki/Agricultural_drone) (un-manned aerial vehicles) are starting to take control.

**Scott:** Aerial imagery of some sort, right?

**Susan:** Aerial imagery, and that's a fun one, because not only the products that they return back, can you analyze with [different machine learning techniques](https://blog.deepgram.com/ai-show-different-types-of-machine-learning/), but also the automation of flying around an area is inevitably going to be automated with machine learning. Right now a lot of it, the ones I've been looking at, is done by hand.

**Scott:** People flying planes?

**Susan:** People flying, or UAV's. That type of stuff. It's pretty easy to imagine a world where you got the tractor of the air, your UAV, taking over.

**Scott:** A UAV that takes off from your barn.

![alt](https://res.cloudinary.com/deepgram/image/upload/v1661976385/blog/ai-show-what-does-an-ai-tranformation-look-like/david-henrichs-399195-unsplash_v2.jpg)

**Susan:** Sure, it does a lap every two hours, and comes back to the charging station, and just keeps doing that.

**Scott:** What would it do with that data, though? It looks around, it gets infrared, it gets visual?

**Susan:** You could do a hundred different tasks. Again, the field one, I think everybody gets intuitively, "Sure, I monitor my crops, and I can do that," but again, go to say, cattle ranching. "Where are my cattle right now?" That's a pretty big question that you probably want to know. Have they left your property?

**Scott:** "Do they have enough grass?"

**Susan:** "Are they in a good area? Maybe I could rotate them on a different field?"

**Scott:** "Have they eaten up too much?"

**Susan:** "Has a new calf been born? Are my fences secure?" All these things are where a combination of this cheap sensor world and machine learning can come into play. You set up something that can fly around your area, it monitors fences, and knows how to look for a fence that is damaged or a gate that is open. It knows how to look for your cattle, and can recognize them and track them for you. And then you get all sorts of much deeper products later on like, being able to track say, the growth rate of a cow over time, as opposed to bringing them back and weighing them, and poking and prodding them for a half a day, which takes a lot of your time, and takes that cow out of the grass, where they're basically turning grass into money.

**Scott:** So you'll be able to personally identify the cow?

**Scott:** Facial recognition, but not facial recognition?

**Susan:** It's sort of like Cow-book. You know, you open up page, and it's got little like, "Oh-"

**Scott:** How much does it weigh? What is it into? It likes to go over here or over there.

**Susan:** "I've been kind of favoring this hoof over here for the last couple days. Maybe you should check this out." Or, "Ever since we've been in that field over there, we've been not as active. Maybe there's something in that field that's not helping us out."

**Scott:** Do you think there's anything down the line? Meaning, further along the pipeline? Okay, you have some grain, now what? Like shipping it, or storing it?

## Automate The Simple Stuff

**Susan:** It's pretty sci-fi still, to say completely automated farm...

> "But the deal is, automate the simple stuff. The stuff that takes those very simple decisions." Then, the bigger things-coordinating schedules, coordinating big muscle movements-that kind of stuff now becomes to purview of the farmer, the rancher, the whatever, allows them to think more strategically instead of tactically.

**Susan:** This is a tool that takes you from kind of that course grained, everything must be uniform. "My goal on this farm is to make it as uniform as possible, so I don't have to think about the differences between here and there. I can do everything all the same to take advantage of that small detail over here. This part of my land is better for this type of crop, and this one's better for that type of crop." These tools can alleviate the detailed work that before, you just couldn't have the time to focus mentally, or even physically, on specializing for that.

**Scott:** So instead of trying to make everything the same so that you can get an average yield from it, now you can take advantage of the uniqueness?

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976386/blog/ai-show-what-does-an-ai-tranformation-look-like/markus-spiske-632419-unsplash_v2.jpg)

**Susan:** Talking about disruptions, that's a very disruptive idea. So you flip the script. Now it's not about the big farm, it's about the small farm, and finding how much you can get the optimal yield out of a smaller area, whereas making a uniform big area actually reduces profits, because you've gotten rid of the potential for an optimal yield.

**Scott:** There are a lot of AI startups sort of cropping up around this area. Why do you think that is?

**Susan:** Well, it's trillions of dollars.

**Scott:** Huge market?

**Susan:** Yeah, with a _T_.

**Scott:** A huge market.

## Is the Ag AI problem easy to solve?

**Scott:** Do you think it's easy though? Like saying: "Hey, this is going to be an easy problem to solve"?

**Susan:** Nothing's easy. _Nothing_ is easy.

**Scott:** Okay, is this going to be easier than something else?

**Susan:** I think there's certain low hanging fruit that's easy in this market, and you're starting to see that more on the sensor side and the simple data analytic side. For example, analytics telling you, "This is how hydrated an area is," and stuff like that. [These are well established things](https://en.wikipedia.org/wiki/Precision_agriculture) that have been there for a while, but giving that on a smaller scale to farmers is starting to happen on ... The smaller scale happening on a larger scale, if that makes any sense whatsoever. But the harder, deeper questions for instance, trying to figure out the best crop rotation for this exact field and those types of problems are going to be a bit hard. They will be solved. Could I give you a timeframe? No.

**Scott:** Presumably, this is going to make food cheaper again. Like, food has already become pretty cheap, at least in the U.S., and most developed regions of the world. What do you think it means to the economy if food becomes even cheaper? It's even easier to make food?

**Susan:** I think the biggest change will be in distribution. If this vision comes to fruition, the idea of local is a lot easier. Not only, as you mentioned, on the transportation/shipping side, so if you have a small farm with a lot of specialized stuff, now machine learning could help manage a bunch of those small farms, and get the distribution chain together to give the volume necessary that big companies would really pay attention to.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976387/blog/ai-show-what-does-an-ai-tranformation-look-like/nigel-tadyanehondo-239555-unsplash_v2.jpg)

**Susan:** Say you've got a hundred acres. That sounds like a lot, but that's not enough to keep grocery story chain X happy with you. But if you got several hundred of these farms and they're all kind of coordinated together, you might have a real change in distribution. Again, you'd need something that would take a lot of small decisions. This would be something that machine learning type of algorithms could help out with. But this is, to me, a big thing. More diversity, more locality. Those are really important things, at least to me, and what I look for at a grocery store.

## Are fully automated, AI farms possible?

**Susan:** Tractor's already, they're basically driving themselves around.

**Scott:** Sure, but think like, Interstellar. There's an AI brain inside the device.

**Susan:** This is definitely well beyond. What I've deeply investigated, the Jetson's make me want to say "yes."

**Scott:** It'd be like a Roomba.

**Susan:** Yeah, the Roomba. I mean, the inevitability is there. The question is, what's the time scale?

**Susan:** Is this next year? This five years? Is this 10 years? Is this 100 years? And what does it mean to be truly automated? We're seeing the growth of the autonomous vehicle go from nothing to "We're really starting to see them in the public sphere this year," and the next five years, it's likely that you're going to have been in one of them.

**Scott:** Yeah, and farms aren't all that complicated. You know, you don't have to worry about the lady with the stroller, pushing out in front of the tractor as much.

**Susan:** Going back to the drone thing, that's what makes, potentially, automated drones around the farm a real possibility. Flying drones like, okay. The first or two you're flying it around, you mark off, "Don't fly here. There are trees."

**Scott:** So is Ag going to be the only transformation we see? Agriculture?

**Susan:** We should probably look for things that aren't going to be transformed.

### What won't be touched by AI?

**Scott:** Electricity will still be a thing.

**Susan:** Hopefully. Maybe when we unify all the forces and physics, we'll figure out that we can do something else.

**Scott:** You'll still probably sleep in beds for a while.

**Susan:** For me, it goes back to people have the wrong view of machine learning, and where its real power is at. The right view, to me, this is again, just Susan's view here, but

> "Get rid of the smaller decisions, those tactical decisions, so you can focus on a higher strategy. Once you start doing that, you realize, there's always something above that."

**Scott:** Focus your creative energy somewhere else.

**Susan:** It's like, why spend 90% of your time down here doing this? We need to stay creative. We need these things to offload those decisions that really all should be offloaded. But we need to be intelligent about what which ones we keep, even if it kind of makes better decisions. By automating it, you're getting rid of a lot of chances for creativity.

**Scott:** I'm pretty sure though, at least in my life, if I had some AI bot that was analyzing my patterns, it would be more creative than me. I go to the same places, I eat the same things, I do whatever. It could definitely diversify my social interactions, just by forcing me to go to new places.

**Susan:** That's true. You need to have more exploration, and less exploitation in your life.

**Scott:** Exactly. So you just have to find a balance with the AI there. Make sure it has exploration and exploitation built in.

**Susan:** There's an author I've read, David Brin, for anyone that is a Brin fan, he wrote a book. One of his characters was forced by a program to view things that they did not want to view. Just a random percentage of the time, "You're gonna view this stuff, just to shake it up."

**Scott:** I'm liking it already. Where's it go? If a book was written about it, a fictional book I presume, then it's gotta go in really good places, right?

**Susan:** Oh, the rest of this book, it goes really good- It's Earth, by David Brin. That was just one character showing the quirks of this particular character, and how she forced herself to stay creative. It does come down to the disruptive side of the house, we do have to manage that. We're seeing so many industries that are led by the change, staying ahead of the change is pretty hard. Making those intelligent decisions is really important. Intelligent decisions to say, "I'm gonna offload this. I'm gonna be creative over here."

## How does this transform the industry?

**Susan:** We talked about little bits and pieces, but how does it actually affect things in the long run? Like I said, this is, especially in Ag, it's a big change that flips the economy as a scale. So now, a smaller farm potentially is the more productive one.

**Scott:** This is because it has local knowledge? Why wouldn't a large farm be able to take care of, like pixelize it's areas, and take care of it really well?

![alt](https://res.cloudinary.com/deepgram/image/upload/v1661976388/blog/ai-show-what-does-an-ai-tranformation-look-like/al-x-407225-unsplash_v2.jpg)

**Susan:** You're right, they can. But I think it now allows a small area to be productive. So, the goal is to focus on the small area. Big farms will have a natural tendency to still just make everything the same. As soon as you say, "I'm gonna go large," why did you go large?

**Scott:** Right, bigger farms are easier easier to manage with 20th century tech.

**Susan:** You went large because you wanted to make things more uniform. And there will always be a place for that, but this is an economic shift, I predict, that will enable smaller farms in a way that we haven't seen for quite a while.

**Scott:** Do you think that data is a big differentiator there, in the Ag case?

**Susan:** Yes, and no. I'm going to say, in the lead up to these transformative times, winning, so to speak, solving the problem takes a tremendous amount of data, and legwork, and hard, hard work. The area we know about speech, it is hard work to get the data you need. But eventually, speech will be solved. I'm not saying it's tomorrow, and I'm not saying you'll be able- But you'll be able to just get a model that someone has put a whole of time and effort-

**Scott:** A lot of effort into it.

**Susan:** Into, and the data that went into it is-

**Scott:** Less and less important.

**Susan:** Is still down to this thing you just download and use. But, the goal on that small scale is then to take it, and specialize it, based off of your local data. And this hugely as important. Again, to bring up the speech world,

> "You can take a generic world, generic speech model, and just give it a few hours of some specialized knowledge, and suddenly you just see massive improvements."

That's the same on the small farm size. So maybe they solve some of these big problems.

**Scott:** It learns general themes, yeah?

**Susan:** Yes, but then you specialize it with just a year or two worth of your own data, and suddenly it's really good at your farm, and really good at making whatever decisions this particular thing was built to solve. Whether it's trying to track the growth rate of your animals, or trying to learn your land, and what it's best at.

## What are the key components of these transformations?

**Susan:** Well, you have to have the environment for the transformation to happen. Generally that means, something that's been there for a while.

**Scott:** Like social environment? Like people kinda know how it already goes?

**Scott:** It's already been figured out pretty well?

**Susan:** Yeah, I mean, Ag's been around, I've been told, more than a few years.

**Scott:** I've heard that, too.

**Susan:** And the longer an industry is around, without massive change, the more likely that there's a good chance for massive change to occur.

**Scott:** Well, yeah, you run up against the problems you're going to run against, and over the years, "Okay," things become established, and some things are hard, and you're not going to do them, and some things are not and you are going to do them.

**Susan:** And people get in the mindset before of, "Well, that didn't work 10 years ago, so why do I want to try it now?" Well, that was 10 years ago. That vision that said, "These ideas didn't work," now may work today, because of changes in technology.

**Susan:** It's someone coming in from the outside, with a different vision, generally powered by seeing what a technology can do today, that maybe it couldn't do before.

**Scott:** Or someone from the inside finding another...

**Susan:** Yeah, finding that notch out of the wilderness, and suddenly getting a glimpse of vision, and realizing, "We're gonna change."

**Susan:** Another great transformation right now, that's happening, is space. I mean, I'm a SpaceX fan. I'm not paid in any way, shape, or form.

**Scott:** This isn't really an AI transformation. Maybe in how they developed some of their parts or something.

**Susan:** Yeah, it just shows this general transformation where, a new vision came into place-

**Scott:** It was one way for a long time.

**Susan:** Rapidly replacing the old system.

**Scott:** Let's take a decade or so to like, work on some stuff, and then...

**Susan:** Now the big companies that were in space are probably very worried about their technology.

**Scott:** SpaceX will be making all the money in the future.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976388/blog/ai-show-what-does-an-ai-tranformation-look-like/spacex-549326-unsplash_V2.jpg)

**Susan:** It's great, but that's how these transformations generally happen. You know, an industry that's been established for a while, it has players that are established for a while, they're big. They've been sitting there.

**Scott:** They've become pretty complacent.

**Susan:** Not necessarily complacent, but they just don't see the way out. Everywhere they look, looks a little worse than where they're at, because they're stuck in a rut. This new entity comes in, and sees a new way, and they just go to a different optimum. That new optimum just crushes the old one.

**Susan:** And a lot of transformations just happen in that way.

**Scott:** This is the classic, great story recipe, the world was one way, then something happened. Now it's a different way.

**Susan:** And suddenly the dust of those old companies, no one really remembers them anymore.

**Scott:** Yeah, nobody cares anymore.

**Susan:** And you're seeing a lot of big, old, massive companies that people aren't hearing about anymore, you know? Where's GE going lately? Not to pick on them-

**Scott:** I'm sure they have some data science and machine learning people there, doing something.

**Susan:** Yeah, they're being forced to rapidly innovate, that's for sure. That, or be left behind.

**Susan:** You need to jump on board with these tools. It's painful, and there's going to be some wrong alleys.

**Scott:** Any final thoughts you have for people that are thinking about the AI transformation, what's going to happen?

**Susan:** Yeah. I would get smart on it, get your shots, get inoculated.

**Scott:** There you go. Get used to this idea.

**Susan:** Yeah. It doesn't mean that you're going to be doing it yourself. It doesn't mean that you won't be impacted by it, but do some due diligence right now. Start looking into it, and keep an eye towards those things that used to not work. Think about, with some sort of machine learning powering them, maybe they could have worked. It took too many people, and too many decisions 10 years ago, but maybe it's now possible.

**Scott:** I would say,

**AI is not going to change literally everything, but just like electricity didn't literally change everything, and the internet didn't literally change everything.**

**Susan:** It didn't?

**Scott:** No, it didn't.

**Susan:** I brush my teeth with an electric toothbrush that can communicate on the internet.

**Scott:** Yeah, but these transformations are usually good in certain areas, but they're like, really, really good in those certain areas, and make a big difference. You'll see that, when there's something along those lines of:

> "What's a mundane task for a human to do, but still takes human intelligence to do at least right now?" Okay, that's probably a really good spot to be thinking about "How is AI going to change that, and extract value?"
`, "html": '<iframe src="https://www.youtube.com/embed/naC8T4FG0Nc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p><strong>Scott:</strong> Welcome to the AI Show. On the AI Show we talk about all things AI. Today we\u2019re asking the question, \u201CWhat does an AI transformation look like?\u201D</p>\n<h2 id="what-does-an-ai-transformation-look-like">What does an AI transformation look like?</h2>\n<p><strong>Susan:</strong> So much of this world is being rapidly transformed by AI. There\u2019s so many great things to think about.</p>\n<p><strong>Scott:</strong> What\u2019s already been transformed?</p>\n<p><strong>Susan:</strong> What hasn\u2019t been already transformed. My favorite is spam. Your inbox is finally cleaned out a little bit.</p>\n<p><strong>Scott:</strong> This is late \u201990s.</p>\n<p><strong>Susan:</strong> This is a long time ago. Before that you couldn\u2019t use it and it really enabled us to have that medium. Without that no one would use email, not that people use email anymore. Do you still use email, Scott?</p>\n<p><strong>Scott</strong> Definitely.</p>\n<p><strong>Susan:</strong> I checked it last week, honest.</p>\n<p><strong>Scott:</strong> I don\u2019t believe you now.</p>\n<p><strong>Susan:</strong> You don\u2019t believe me?</p>\n<p><strong>Scott:</strong> Yeah.</p>\n<p><strong>Susan:</strong> No, there\u2019s some great ones. One of my favorites is the up and coming world.</p>\n<p><strong>Scott:</strong> What\u2019s that?</p>\n<h2 id="agriculture-is-about-to-be-massively-transformed">Agriculture is about to be massively transformed.</h2>\n<p><strong>Scott:</strong> That\u2019s true, agriculture is getting pretty automated. You\u2019ve got big tractors that are <a href="https://www.gps.gov/applications/agriculture/">listening to a GPS</a>, figuring out where they are, and going and doing some pre-programmed thing. I think AI applies a lot there.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976384/blog/ai-show-what-does-an-ai-tranformation-look-like/joao-marcelo-marques-791496-unsplash_V2.jpg" alt="alt"></p>\n<p><strong>Susan:</strong> There is a tremendous amount of this world that is rapidly changing due to AI. It\u2019s mainly making those small decisions. A person would learn to make those decisions pretty quickly and come off the cuff and say, \u201COkay, we\u2019re going to make this, we\u2019re going to make that.\u201D By automating that, you now free up those people to think about the bigger stuff.</p>\n<p><strong>Scott:</strong> It might even be an easy decision. For agriculture, if you see an area over here, the plants are smaller, and over here they\u2019re bigger. There\u2019s something different about that. Maybe it doesn\u2019t have enough water. Maybe it doesn\u2019t have enough nutrients. It would be easy for a human to come to that, but they would have to just go around, and look at every square foot, but that\u2019s a pretty menial task.</p>\n<p><strong>Susan:</strong> On the note of agriculture, I\u2019m going to make a little confession here. If I could jump to another field other than speech, it would probably be the Ag world and applying <a href="https://en.wikipedia.org/wiki/Machine_learning">machine learning</a>.</p>\n<p><strong>Susan:</strong> Obviously, it\u2019s something that every human on planet deals with every single day, the results of agriculture. You need food, but it is just incredibly ripe for a disruptive change from AI.</p>\n<h3 id="what-makes-agriculture-ripe-for-disruption">What makes agriculture ripe for disruption?</h3>\n<p><strong>Scott:</strong> Is this because it\u2019s simplistic or why? Take the savings that simple things could do.</p>\n<p><strong>Susan:</strong> A simple thing, for instance, as you mentioned and what\u2019s going on right now, monitoring your fields to say \u201CThis area over here needs a little bit more water, or it needs a little bit more fertilizer.\u201D Being predictive and being proactive about managing a field of whatever resource.</p>\n<p><strong>Susan:</strong> But that\u2019s a small thing, and those are fairly easy things. You can detect through all sorts of fairly cheap sensors, water levels and all that.</p>\n<p><strong>Scott:</strong> Like what? What would a cheap sensor be?</p>\n<p><strong>Susan:</strong> Well, relatively cheap sensor, you could do infrared.</p>\n<p><strong>Scott:</strong> From what though? Like a farmer standing with an infrared gun?</p>\n<p><strong>Susan:</strong> No, there\u2019s a couple big sources that have been used traditionally. Satellites and light aircraft, but <a href="https://en.wikipedia.org/wiki/Agricultural_drone">very lately, a lot of UAV\u2019s</a> (un-manned aerial vehicles) are starting to take control.</p>\n<p><strong>Scott:</strong> Aerial imagery of some sort, right?</p>\n<p><strong>Susan:</strong> Aerial imagery, and that\u2019s a fun one, because not only the products that they return back, can you analyze with <a href="https://blog.deepgram.com/ai-show-different-types-of-machine-learning/">different machine learning techniques</a>, but also the automation of flying around an area is inevitably going to be automated with machine learning. Right now a lot of it, the ones I\u2019ve been looking at, is done by hand.</p>\n<p><strong>Scott:</strong> People flying planes?</p>\n<p><strong>Susan:</strong> People flying, or UAV\u2019s. That type of stuff. It\u2019s pretty easy to imagine a world where you got the tractor of the air, your UAV, taking over.</p>\n<p><strong>Scott:</strong> A UAV that takes off from your barn.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976385/blog/ai-show-what-does-an-ai-tranformation-look-like/david-henrichs-399195-unsplash_v2.jpg" alt="alt"></p>\n<p><strong>Susan:</strong> Sure, it does a lap every two hours, and comes back to the charging station, and just keeps doing that.</p>\n<p><strong>Scott:</strong> What would it do with that data, though? It looks around, it gets infrared, it gets visual?</p>\n<p><strong>Susan:</strong> You could do a hundred different tasks. Again, the field one, I think everybody gets intuitively, \u201CSure, I monitor my crops, and I can do that,\u201D but again, go to say, cattle ranching. \u201CWhere are my cattle right now?\u201D That\u2019s a pretty big question that you probably want to know. Have they left your property?</p>\n<p><strong>Scott:</strong> \u201CDo they have enough grass?\u201D</p>\n<p><strong>Susan:</strong> \u201CAre they in a good area? Maybe I could rotate them on a different field?\u201D</p>\n<p><strong>Scott:</strong> \u201CHave they eaten up too much?\u201D</p>\n<p><strong>Susan:</strong> \u201CHas a new calf been born? Are my fences secure?\u201D All these things are where a combination of this cheap sensor world and machine learning can come into play. You set up something that can fly around your area, it monitors fences, and knows how to look for a fence that is damaged or a gate that is open. It knows how to look for your cattle, and can recognize them and track them for you. And then you get all sorts of much deeper products later on like, being able to track say, the growth rate of a cow over time, as opposed to bringing them back and weighing them, and poking and prodding them for a half a day, which takes a lot of your time, and takes that cow out of the grass, where they\u2019re basically turning grass into money.</p>\n<p><strong>Scott:</strong> So you\u2019ll be able to personally identify the cow?</p>\n<p><strong>Scott:</strong> Facial recognition, but not facial recognition?</p>\n<p><strong>Susan:</strong> It\u2019s sort of like Cow-book. You know, you open up page, and it\u2019s got little like, \u201COh-\u201D</p>\n<p><strong>Scott:</strong> How much does it weigh? What is it into? It likes to go over here or over there.</p>\n<p><strong>Susan:</strong> \u201CI\u2019ve been kind of favoring this hoof over here for the last couple days. Maybe you should check this out.\u201D Or, \u201CEver since we\u2019ve been in that field over there, we\u2019ve been not as active. Maybe there\u2019s something in that field that\u2019s not helping us out.\u201D</p>\n<p><strong>Scott:</strong> Do you think there\u2019s anything down the line? Meaning, further along the pipeline? Okay, you have some grain, now what? Like shipping it, or storing it?</p>\n<h2 id="automate-the-simple-stuff">Automate The Simple Stuff</h2>\n<p><strong>Susan:</strong> It\u2019s pretty sci-fi still, to say completely automated farm\u2026</p>\n<blockquote>\n<p>\u201CBut the deal is, automate the simple stuff. The stuff that takes those very simple decisions.\u201D Then, the bigger things-coordinating schedules, coordinating big muscle movements-that kind of stuff now becomes to purview of the farmer, the rancher, the whatever, allows them to think more strategically instead of tactically.</p>\n</blockquote>\n<p><strong>Susan:</strong> This is a tool that takes you from kind of that course grained, everything must be uniform. \u201CMy goal on this farm is to make it as uniform as possible, so I don\u2019t have to think about the differences between here and there. I can do everything all the same to take advantage of that small detail over here. This part of my land is better for this type of crop, and this one\u2019s better for that type of crop.\u201D These tools can alleviate the detailed work that before, you just couldn\u2019t have the time to focus mentally, or even physically, on specializing for that.</p>\n<p><strong>Scott:</strong> So instead of trying to make everything the same so that you can get an average yield from it, now you can take advantage of the uniqueness?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976386/blog/ai-show-what-does-an-ai-tranformation-look-like/markus-spiske-632419-unsplash_v2.jpg" alt="Alt"></p>\n<p><strong>Susan:</strong> Talking about disruptions, that\u2019s a very disruptive idea. So you flip the script. Now it\u2019s not about the big farm, it\u2019s about the small farm, and finding how much you can get the optimal yield out of a smaller area, whereas making a uniform big area actually reduces profits, because you\u2019ve gotten rid of the potential for an optimal yield.</p>\n<p><strong>Scott:</strong> There are a lot of AI startups sort of cropping up around this area. Why do you think that is?</p>\n<p><strong>Susan:</strong> Well, it\u2019s trillions of dollars.</p>\n<p><strong>Scott:</strong> Huge market?</p>\n<p><strong>Susan:</strong> Yeah, with a <em>T</em>.</p>\n<p><strong>Scott:</strong> A huge market.</p>\n<h2 id="is-the-ag-ai-problem-easy-to-solve">Is the Ag AI problem easy to solve?</h2>\n<p><strong>Scott:</strong> Do you think it\u2019s easy though? Like saying: \u201CHey, this is going to be an easy problem to solve\u201D?</p>\n<p><strong>Susan:</strong> Nothing\u2019s easy. <em>Nothing</em> is easy.</p>\n<p><strong>Scott:</strong> Okay, is this going to be easier than something else?</p>\n<p><strong>Susan:</strong> I think there\u2019s certain low hanging fruit that\u2019s easy in this market, and you\u2019re starting to see that more on the sensor side and the simple data analytic side. For example, analytics telling you, \u201CThis is how hydrated an area is,\u201D and stuff like that. <a href="https://en.wikipedia.org/wiki/Precision_agriculture">These are well established things</a> that have been there for a while, but giving that on a smaller scale to farmers is starting to happen on \u2026 The smaller scale happening on a larger scale, if that makes any sense whatsoever. But the harder, deeper questions for instance, trying to figure out the best crop rotation for this exact field and those types of problems are going to be a bit hard. They will be solved. Could I give you a timeframe? No.</p>\n<p><strong>Scott:</strong> Presumably, this is going to make food cheaper again. Like, food has already become pretty cheap, at least in the U.S., and most developed regions of the world. What do you think it means to the economy if food becomes even cheaper? It\u2019s even easier to make food?</p>\n<p><strong>Susan:</strong> I think the biggest change will be in distribution. If this vision comes to fruition, the idea of local is a lot easier. Not only, as you mentioned, on the transportation/shipping side, so if you have a small farm with a lot of specialized stuff, now machine learning could help manage a bunch of those small farms, and get the distribution chain together to give the volume necessary that big companies would really pay attention to.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976387/blog/ai-show-what-does-an-ai-tranformation-look-like/nigel-tadyanehondo-239555-unsplash_v2.jpg" alt="Alt"></p>\n<p><strong>Susan:</strong> Say you\u2019ve got a hundred acres. That sounds like a lot, but that\u2019s not enough to keep grocery story chain X happy with you. But if you got several hundred of these farms and they\u2019re all kind of coordinated together, you might have a real change in distribution. Again, you\u2019d need something that would take a lot of small decisions. This would be something that machine learning type of algorithms could help out with. But this is, to me, a big thing. More diversity, more locality. Those are really important things, at least to me, and what I look for at a grocery store.</p>\n<h2 id="are-fully-automated-ai-farms-possible">Are fully automated, AI farms possible?</h2>\n<p><strong>Susan:</strong> Tractor\u2019s already, they\u2019re basically driving themselves around.</p>\n<p><strong>Scott:</strong> Sure, but think like, Interstellar. There\u2019s an AI brain inside the device.</p>\n<p><strong>Susan:</strong> This is definitely well beyond. What I\u2019ve deeply investigated, the Jetson\u2019s make me want to say \u201Cyes.\u201D</p>\n<p><strong>Scott:</strong> It\u2019d be like a Roomba.</p>\n<p><strong>Susan:</strong> Yeah, the Roomba. I mean, the inevitability is there. The question is, what\u2019s the time scale?</p>\n<p><strong>Susan:</strong> Is this next year? This five years? Is this 10 years? Is this 100 years? And what does it mean to be truly automated? We\u2019re seeing the growth of the autonomous vehicle go from nothing to \u201CWe\u2019re really starting to see them in the public sphere this year,\u201D and the next five years, it\u2019s likely that you\u2019re going to have been in one of them.</p>\n<p><strong>Scott:</strong> Yeah, and farms aren\u2019t all that complicated. You know, you don\u2019t have to worry about the lady with the stroller, pushing out in front of the tractor as much.</p>\n<p><strong>Susan:</strong> Going back to the drone thing, that\u2019s what makes, potentially, automated drones around the farm a real possibility. Flying drones like, okay. The first or two you\u2019re flying it around, you mark off, \u201CDon\u2019t fly here. There are trees.\u201D</p>\n<p><strong>Scott:</strong> So is Ag going to be the only transformation we see? Agriculture?</p>\n<p><strong>Susan:</strong> We should probably look for things that aren\u2019t going to be transformed.</p>\n<h3 id="what-wont-be-touched-by-ai">What won\u2019t be touched by AI?</h3>\n<p><strong>Scott:</strong> Electricity will still be a thing.</p>\n<p><strong>Susan:</strong> Hopefully. Maybe when we unify all the forces and physics, we\u2019ll figure out that we can do something else.</p>\n<p><strong>Scott:</strong> You\u2019ll still probably sleep in beds for a while.</p>\n<p><strong>Susan:</strong> For me, it goes back to people have the wrong view of machine learning, and where its real power is at. The right view, to me, this is again, just Susan\u2019s view here, but</p>\n<blockquote>\n<p>\u201CGet rid of the smaller decisions, those tactical decisions, so you can focus on a higher strategy. Once you start doing that, you realize, there\u2019s always something above that.\u201D</p>\n</blockquote>\n<p><strong>Scott:</strong> Focus your creative energy somewhere else.</p>\n<p><strong>Susan:</strong> It\u2019s like, why spend 90% of your time down here doing this? We need to stay creative. We need these things to offload those decisions that really all should be offloaded. But we need to be intelligent about what which ones we keep, even if it kind of makes better decisions. By automating it, you\u2019re getting rid of a lot of chances for creativity.</p>\n<p><strong>Scott:</strong> I\u2019m pretty sure though, at least in my life, if I had some AI bot that was analyzing my patterns, it would be more creative than me. I go to the same places, I eat the same things, I do whatever. It could definitely diversify my social interactions, just by forcing me to go to new places.</p>\n<p><strong>Susan:</strong> That\u2019s true. You need to have more exploration, and less exploitation in your life.</p>\n<p><strong>Scott:</strong> Exactly. So you just have to find a balance with the AI there. Make sure it has exploration and exploitation built in.</p>\n<p><strong>Susan:</strong> There\u2019s an author I\u2019ve read, David Brin, for anyone that is a Brin fan, he wrote a book. One of his characters was forced by a program to view things that they did not want to view. Just a random percentage of the time, \u201CYou\u2019re gonna view this stuff, just to shake it up.\u201D</p>\n<p><strong>Scott:</strong> I\u2019m liking it already. Where\u2019s it go? If a book was written about it, a fictional book I presume, then it\u2019s gotta go in really good places, right?</p>\n<p><strong>Susan:</strong> Oh, the rest of this book, it goes really good- It\u2019s Earth, by David Brin. That was just one character showing the quirks of this particular character, and how she forced herself to stay creative. It does come down to the disruptive side of the house, we do have to manage that. We\u2019re seeing so many industries that are led by the change, staying ahead of the change is pretty hard. Making those intelligent decisions is really important. Intelligent decisions to say, \u201CI\u2019m gonna offload this. I\u2019m gonna be creative over here.\u201D</p>\n<h2 id="how-does-this-transform-the-industry">How does this transform the industry?</h2>\n<p><strong>Susan:</strong> We talked about little bits and pieces, but how does it actually affect things in the long run? Like I said, this is, especially in Ag, it\u2019s a big change that flips the economy as a scale. So now, a smaller farm potentially is the more productive one.</p>\n<p><strong>Scott:</strong> This is because it has local knowledge? Why wouldn\u2019t a large farm be able to take care of, like pixelize it\u2019s areas, and take care of it really well?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976388/blog/ai-show-what-does-an-ai-tranformation-look-like/al-x-407225-unsplash_v2.jpg" alt="alt"></p>\n<p><strong>Susan:</strong> You\u2019re right, they can. But I think it now allows a small area to be productive. So, the goal is to focus on the small area. Big farms will have a natural tendency to still just make everything the same. As soon as you say, \u201CI\u2019m gonna go large,\u201D why did you go large?</p>\n<p><strong>Scott:</strong> Right, bigger farms are easier easier to manage with 20th century tech.</p>\n<p><strong>Susan:</strong> You went large because you wanted to make things more uniform. And there will always be a place for that, but this is an economic shift, I predict, that will enable smaller farms in a way that we haven\u2019t seen for quite a while.</p>\n<p><strong>Scott:</strong> Do you think that data is a big differentiator there, in the Ag case?</p>\n<p><strong>Susan:</strong> Yes, and no. I\u2019m going to say, in the lead up to these transformative times, winning, so to speak, solving the problem takes a tremendous amount of data, and legwork, and hard, hard work. The area we know about speech, it is hard work to get the data you need. But eventually, speech will be solved. I\u2019m not saying it\u2019s tomorrow, and I\u2019m not saying you\u2019ll be able- But you\u2019ll be able to just get a model that someone has put a whole of time and effort-</p>\n<p><strong>Scott:</strong> A lot of effort into it.</p>\n<p><strong>Susan:</strong> Into, and the data that went into it is-</p>\n<p><strong>Scott:</strong> Less and less important.</p>\n<p><strong>Susan:</strong> Is still down to this thing you just download and use. But, the goal on that small scale is then to take it, and specialize it, based off of your local data. And this hugely as important. Again, to bring up the speech world,</p>\n<blockquote>\n<p>\u201CYou can take a generic world, generic speech model, and just give it a few hours of some specialized knowledge, and suddenly you just see massive improvements.\u201D</p>\n</blockquote>\n<p>That\u2019s the same on the small farm size. So maybe they solve some of these big problems.</p>\n<p><strong>Scott:</strong> It learns general themes, yeah?</p>\n<p><strong>Susan:</strong> Yes, but then you specialize it with just a year or two worth of your own data, and suddenly it\u2019s really good at your farm, and really good at making whatever decisions this particular thing was built to solve. Whether it\u2019s trying to track the growth rate of your animals, or trying to learn your land, and what it\u2019s best at.</p>\n<h2 id="what-are-the-key-components-of-these-transformations">What are the key components of these transformations?</h2>\n<p><strong>Susan:</strong> Well, you have to have the environment for the transformation to happen. Generally that means, something that\u2019s been there for a while.</p>\n<p><strong>Scott:</strong> Like social environment? Like people kinda know how it already goes?</p>\n<p><strong>Scott:</strong> It\u2019s already been figured out pretty well?</p>\n<p><strong>Susan:</strong> Yeah, I mean, Ag\u2019s been around, I\u2019ve been told, more than a few years.</p>\n<p><strong>Scott:</strong> I\u2019ve heard that, too.</p>\n<p><strong>Susan:</strong> And the longer an industry is around, without massive change, the more likely that there\u2019s a good chance for massive change to occur.</p>\n<p><strong>Scott:</strong> Well, yeah, you run up against the problems you\u2019re going to run against, and over the years, \u201COkay,\u201D things become established, and some things are hard, and you\u2019re not going to do them, and some things are not and you are going to do them.</p>\n<p><strong>Susan:</strong> And people get in the mindset before of, \u201CWell, that didn\u2019t work 10 years ago, so why do I want to try it now?\u201D Well, that was 10 years ago. That vision that said, \u201CThese ideas didn\u2019t work,\u201D now may work today, because of changes in technology.</p>\n<p><strong>Susan:</strong> It\u2019s someone coming in from the outside, with a different vision, generally powered by seeing what a technology can do today, that maybe it couldn\u2019t do before.</p>\n<p><strong>Scott:</strong> Or someone from the inside finding another\u2026</p>\n<p><strong>Susan:</strong> Yeah, finding that notch out of the wilderness, and suddenly getting a glimpse of vision, and realizing, \u201CWe\u2019re gonna change.\u201D</p>\n<p><strong>Susan:</strong> Another great transformation right now, that\u2019s happening, is space. I mean, I\u2019m a SpaceX fan. I\u2019m not paid in any way, shape, or form.</p>\n<p><strong>Scott:</strong> This isn\u2019t really an AI transformation. Maybe in how they developed some of their parts or something.</p>\n<p><strong>Susan:</strong> Yeah, it just shows this general transformation where, a new vision came into place-</p>\n<p><strong>Scott:</strong> It was one way for a long time.</p>\n<p><strong>Susan:</strong> Rapidly replacing the old system.</p>\n<p><strong>Scott:</strong> Let\u2019s take a decade or so to like, work on some stuff, and then\u2026</p>\n<p><strong>Susan:</strong> Now the big companies that were in space are probably very worried about their technology.</p>\n<p><strong>Scott:</strong> SpaceX will be making all the money in the future.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976388/blog/ai-show-what-does-an-ai-tranformation-look-like/spacex-549326-unsplash_V2.jpg" alt="Alt"></p>\n<p><strong>Susan:</strong> It\u2019s great, but that\u2019s how these transformations generally happen. You know, an industry that\u2019s been established for a while, it has players that are established for a while, they\u2019re big. They\u2019ve been sitting there.</p>\n<p><strong>Scott:</strong> They\u2019ve become pretty complacent.</p>\n<p><strong>Susan:</strong> Not necessarily complacent, but they just don\u2019t see the way out. Everywhere they look, looks a little worse than where they\u2019re at, because they\u2019re stuck in a rut. This new entity comes in, and sees a new way, and they just go to a different optimum. That new optimum just crushes the old one.</p>\n<p><strong>Susan:</strong> And a lot of transformations just happen in that way.</p>\n<p><strong>Scott:</strong> This is the classic, great story recipe, the world was one way, then something happened. Now it\u2019s a different way.</p>\n<p><strong>Susan:</strong> And suddenly the dust of those old companies, no one really remembers them anymore.</p>\n<p><strong>Scott:</strong> Yeah, nobody cares anymore.</p>\n<p><strong>Susan:</strong> And you\u2019re seeing a lot of big, old, massive companies that people aren\u2019t hearing about anymore, you know? Where\u2019s GE going lately? Not to pick on them-</p>\n<p><strong>Scott:</strong> I\u2019m sure they have some data science and machine learning people there, doing something.</p>\n<p><strong>Susan:</strong> Yeah, they\u2019re being forced to rapidly innovate, that\u2019s for sure. That, or be left behind.</p>\n<p><strong>Susan:</strong> You need to jump on board with these tools. It\u2019s painful, and there\u2019s going to be some wrong alleys.</p>\n<p><strong>Scott:</strong> Any final thoughts you have for people that are thinking about the AI transformation, what\u2019s going to happen?</p>\n<p><strong>Susan:</strong> Yeah. I would get smart on it, get your shots, get inoculated.</p>\n<p><strong>Scott:</strong> There you go. Get used to this idea.</p>\n<p><strong>Susan:</strong> Yeah. It doesn\u2019t mean that you\u2019re going to be doing it yourself. It doesn\u2019t mean that you won\u2019t be impacted by it, but do some due diligence right now. Start looking into it, and keep an eye towards those things that used to not work. Think about, with some sort of machine learning powering them, maybe they could have worked. It took too many people, and too many decisions 10 years ago, but maybe it\u2019s now possible.</p>\n<p><strong>Scott:</strong> I would say,</p>\n<p><strong>AI is not going to change literally everything, but just like electricity didn\u2019t literally change everything, and the internet didn\u2019t literally change everything.</strong></p>\n<p><strong>Susan:</strong> It didn\u2019t?</p>\n<p><strong>Scott:</strong> No, it didn\u2019t.</p>\n<p><strong>Susan:</strong> I brush my teeth with an electric toothbrush that can communicate on the internet.</p>\n<p><strong>Scott:</strong> Yeah, but these transformations are usually good in certain areas, but they\u2019re like, really, really good in those certain areas, and make a big difference. You\u2019ll see that, when there\u2019s something along those lines of:</p>\n<blockquote>\n<p>\u201CWhat\u2019s a mundane task for a human to do, but still takes human intelligence to do at least right now?\u201D Okay, that\u2019s probably a really good spot to be thinking about \u201CHow is AI going to change that, and extract value?\u201D</p>\n</blockquote>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/ai-show-what-does-an-ai-tranformation-look-like/index.md" };
function rawContent() {
  return `
<iframe src="https://www.youtube.com/embed/naC8T4FG0Nc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

**Scott:** Welcome to the AI Show. On the AI Show we talk about all things AI. Today we're asking the question, "What does an AI transformation look like?"

## What does an AI transformation look like?

**Susan:** So much of this world is being rapidly transformed by AI. There's so many great things to think about.

**Scott:** What's already been transformed?

**Susan:** What hasn't been already transformed. My favorite is spam. Your inbox is finally cleaned out a little bit.

**Scott:** This is late '90s.

**Susan:** This is a long time ago. Before that you couldn't use it and it really enabled us to have that medium. Without that no one would use email, not that people use email anymore. Do you still use email, Scott?

**Scott** Definitely.

**Susan:** I checked it last week, honest.

**Scott:** I don't believe you now.

**Susan:** You don't believe me?

**Scott:** Yeah.

**Susan:** No, there's some great ones. One of my favorites is the up and coming world.

**Scott:** What's that?

## Agriculture is about to be massively transformed.

**Scott:** That's true, agriculture is getting pretty automated. You've got big tractors that are [listening to a GPS](https://www.gps.gov/applications/agriculture/), figuring out where they are, and going and doing some pre-programmed thing. I think AI applies a lot there.

![alt](https://res.cloudinary.com/deepgram/image/upload/v1661976384/blog/ai-show-what-does-an-ai-tranformation-look-like/joao-marcelo-marques-791496-unsplash_V2.jpg)

**Susan:** There is a tremendous amount of this world that is rapidly changing due to AI. It's mainly making those small decisions. A person would learn to make those decisions pretty quickly and come off the cuff and say, "Okay, we're going to make this, we're going to make that." By automating that, you now free up those people to think about the bigger stuff.

**Scott:** It might even be an easy decision. For agriculture, if you see an area over here, the plants are smaller, and over here they're bigger. There's something different about that. Maybe it doesn't have enough water. Maybe it doesn't have enough nutrients. It would be easy for a human to come to that, but they would have to just go around, and look at every square foot, but that's a pretty menial task.

**Susan:** On the note of agriculture, I'm going to make a little confession here. If I could jump to another field other than speech, it would probably be the Ag world and applying [machine learning](https://en.wikipedia.org/wiki/Machine_learning).

**Susan:** Obviously, it's something that every human on planet deals with every single day, the results of agriculture. You need food, but it is just incredibly ripe for a disruptive change from AI.

### What makes agriculture ripe for disruption?

**Scott:** Is this because it's simplistic or why? Take the savings that simple things could do.

**Susan:** A simple thing, for instance, as you mentioned and what's going on right now, monitoring your fields to say "This area over here needs a little bit more water, or it needs a little bit more fertilizer." Being predictive and being proactive about managing a field of whatever resource.

**Susan:** But that's a small thing, and those are fairly easy things. You can detect through all sorts of fairly cheap sensors, water levels and all that.

**Scott:** Like what? What would a cheap sensor be?

**Susan:** Well, relatively cheap sensor, you could do infrared.

**Scott:** From what though? Like a farmer standing with an infrared gun?

**Susan:** No, there's a couple big sources that have been used traditionally. Satellites and light aircraft, but [very lately, a lot of UAV's](https://en.wikipedia.org/wiki/Agricultural_drone) (un-manned aerial vehicles) are starting to take control.

**Scott:** Aerial imagery of some sort, right?

**Susan:** Aerial imagery, and that's a fun one, because not only the products that they return back, can you analyze with [different machine learning techniques](https://blog.deepgram.com/ai-show-different-types-of-machine-learning/), but also the automation of flying around an area is inevitably going to be automated with machine learning. Right now a lot of it, the ones I've been looking at, is done by hand.

**Scott:** People flying planes?

**Susan:** People flying, or UAV's. That type of stuff. It's pretty easy to imagine a world where you got the tractor of the air, your UAV, taking over.

**Scott:** A UAV that takes off from your barn.

![alt](https://res.cloudinary.com/deepgram/image/upload/v1661976385/blog/ai-show-what-does-an-ai-tranformation-look-like/david-henrichs-399195-unsplash_v2.jpg)

**Susan:** Sure, it does a lap every two hours, and comes back to the charging station, and just keeps doing that.

**Scott:** What would it do with that data, though? It looks around, it gets infrared, it gets visual?

**Susan:** You could do a hundred different tasks. Again, the field one, I think everybody gets intuitively, "Sure, I monitor my crops, and I can do that," but again, go to say, cattle ranching. "Where are my cattle right now?" That's a pretty big question that you probably want to know. Have they left your property?

**Scott:** "Do they have enough grass?"

**Susan:** "Are they in a good area? Maybe I could rotate them on a different field?"

**Scott:** "Have they eaten up too much?"

**Susan:** "Has a new calf been born? Are my fences secure?" All these things are where a combination of this cheap sensor world and machine learning can come into play. You set up something that can fly around your area, it monitors fences, and knows how to look for a fence that is damaged or a gate that is open. It knows how to look for your cattle, and can recognize them and track them for you. And then you get all sorts of much deeper products later on like, being able to track say, the growth rate of a cow over time, as opposed to bringing them back and weighing them, and poking and prodding them for a half a day, which takes a lot of your time, and takes that cow out of the grass, where they're basically turning grass into money.

**Scott:** So you'll be able to personally identify the cow?

**Scott:** Facial recognition, but not facial recognition?

**Susan:** It's sort of like Cow-book. You know, you open up page, and it's got little like, "Oh-"

**Scott:** How much does it weigh? What is it into? It likes to go over here or over there.

**Susan:** "I've been kind of favoring this hoof over here for the last couple days. Maybe you should check this out." Or, "Ever since we've been in that field over there, we've been not as active. Maybe there's something in that field that's not helping us out."

**Scott:** Do you think there's anything down the line? Meaning, further along the pipeline? Okay, you have some grain, now what? Like shipping it, or storing it?

## Automate The Simple Stuff

**Susan:** It's pretty sci-fi still, to say completely automated farm...

> "But the deal is, automate the simple stuff. The stuff that takes those very simple decisions." Then, the bigger things-coordinating schedules, coordinating big muscle movements-that kind of stuff now becomes to purview of the farmer, the rancher, the whatever, allows them to think more strategically instead of tactically.

**Susan:** This is a tool that takes you from kind of that course grained, everything must be uniform. "My goal on this farm is to make it as uniform as possible, so I don't have to think about the differences between here and there. I can do everything all the same to take advantage of that small detail over here. This part of my land is better for this type of crop, and this one's better for that type of crop." These tools can alleviate the detailed work that before, you just couldn't have the time to focus mentally, or even physically, on specializing for that.

**Scott:** So instead of trying to make everything the same so that you can get an average yield from it, now you can take advantage of the uniqueness?

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976386/blog/ai-show-what-does-an-ai-tranformation-look-like/markus-spiske-632419-unsplash_v2.jpg)

**Susan:** Talking about disruptions, that's a very disruptive idea. So you flip the script. Now it's not about the big farm, it's about the small farm, and finding how much you can get the optimal yield out of a smaller area, whereas making a uniform big area actually reduces profits, because you've gotten rid of the potential for an optimal yield.

**Scott:** There are a lot of AI startups sort of cropping up around this area. Why do you think that is?

**Susan:** Well, it's trillions of dollars.

**Scott:** Huge market?

**Susan:** Yeah, with a _T_.

**Scott:** A huge market.

## Is the Ag AI problem easy to solve?

**Scott:** Do you think it's easy though? Like saying: "Hey, this is going to be an easy problem to solve"?

**Susan:** Nothing's easy. _Nothing_ is easy.

**Scott:** Okay, is this going to be easier than something else?

**Susan:** I think there's certain low hanging fruit that's easy in this market, and you're starting to see that more on the sensor side and the simple data analytic side. For example, analytics telling you, "This is how hydrated an area is," and stuff like that. [These are well established things](https://en.wikipedia.org/wiki/Precision_agriculture) that have been there for a while, but giving that on a smaller scale to farmers is starting to happen on ... The smaller scale happening on a larger scale, if that makes any sense whatsoever. But the harder, deeper questions for instance, trying to figure out the best crop rotation for this exact field and those types of problems are going to be a bit hard. They will be solved. Could I give you a timeframe? No.

**Scott:** Presumably, this is going to make food cheaper again. Like, food has already become pretty cheap, at least in the U.S., and most developed regions of the world. What do you think it means to the economy if food becomes even cheaper? It's even easier to make food?

**Susan:** I think the biggest change will be in distribution. If this vision comes to fruition, the idea of local is a lot easier. Not only, as you mentioned, on the transportation/shipping side, so if you have a small farm with a lot of specialized stuff, now machine learning could help manage a bunch of those small farms, and get the distribution chain together to give the volume necessary that big companies would really pay attention to.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976387/blog/ai-show-what-does-an-ai-tranformation-look-like/nigel-tadyanehondo-239555-unsplash_v2.jpg)

**Susan:** Say you've got a hundred acres. That sounds like a lot, but that's not enough to keep grocery story chain X happy with you. But if you got several hundred of these farms and they're all kind of coordinated together, you might have a real change in distribution. Again, you'd need something that would take a lot of small decisions. This would be something that machine learning type of algorithms could help out with. But this is, to me, a big thing. More diversity, more locality. Those are really important things, at least to me, and what I look for at a grocery store.

## Are fully automated, AI farms possible?

**Susan:** Tractor's already, they're basically driving themselves around.

**Scott:** Sure, but think like, Interstellar. There's an AI brain inside the device.

**Susan:** This is definitely well beyond. What I've deeply investigated, the Jetson's make me want to say "yes."

**Scott:** It'd be like a Roomba.

**Susan:** Yeah, the Roomba. I mean, the inevitability is there. The question is, what's the time scale?

**Susan:** Is this next year? This five years? Is this 10 years? Is this 100 years? And what does it mean to be truly automated? We're seeing the growth of the autonomous vehicle go from nothing to "We're really starting to see them in the public sphere this year," and the next five years, it's likely that you're going to have been in one of them.

**Scott:** Yeah, and farms aren't all that complicated. You know, you don't have to worry about the lady with the stroller, pushing out in front of the tractor as much.

**Susan:** Going back to the drone thing, that's what makes, potentially, automated drones around the farm a real possibility. Flying drones like, okay. The first or two you're flying it around, you mark off, "Don't fly here. There are trees."

**Scott:** So is Ag going to be the only transformation we see? Agriculture?

**Susan:** We should probably look for things that aren't going to be transformed.

### What won't be touched by AI?

**Scott:** Electricity will still be a thing.

**Susan:** Hopefully. Maybe when we unify all the forces and physics, we'll figure out that we can do something else.

**Scott:** You'll still probably sleep in beds for a while.

**Susan:** For me, it goes back to people have the wrong view of machine learning, and where its real power is at. The right view, to me, this is again, just Susan's view here, but

> "Get rid of the smaller decisions, those tactical decisions, so you can focus on a higher strategy. Once you start doing that, you realize, there's always something above that."

**Scott:** Focus your creative energy somewhere else.

**Susan:** It's like, why spend 90% of your time down here doing this? We need to stay creative. We need these things to offload those decisions that really all should be offloaded. But we need to be intelligent about what which ones we keep, even if it kind of makes better decisions. By automating it, you're getting rid of a lot of chances for creativity.

**Scott:** I'm pretty sure though, at least in my life, if I had some AI bot that was analyzing my patterns, it would be more creative than me. I go to the same places, I eat the same things, I do whatever. It could definitely diversify my social interactions, just by forcing me to go to new places.

**Susan:** That's true. You need to have more exploration, and less exploitation in your life.

**Scott:** Exactly. So you just have to find a balance with the AI there. Make sure it has exploration and exploitation built in.

**Susan:** There's an author I've read, David Brin, for anyone that is a Brin fan, he wrote a book. One of his characters was forced by a program to view things that they did not want to view. Just a random percentage of the time, "You're gonna view this stuff, just to shake it up."

**Scott:** I'm liking it already. Where's it go? If a book was written about it, a fictional book I presume, then it's gotta go in really good places, right?

**Susan:** Oh, the rest of this book, it goes really good- It's Earth, by David Brin. That was just one character showing the quirks of this particular character, and how she forced herself to stay creative. It does come down to the disruptive side of the house, we do have to manage that. We're seeing so many industries that are led by the change, staying ahead of the change is pretty hard. Making those intelligent decisions is really important. Intelligent decisions to say, "I'm gonna offload this. I'm gonna be creative over here."

## How does this transform the industry?

**Susan:** We talked about little bits and pieces, but how does it actually affect things in the long run? Like I said, this is, especially in Ag, it's a big change that flips the economy as a scale. So now, a smaller farm potentially is the more productive one.

**Scott:** This is because it has local knowledge? Why wouldn't a large farm be able to take care of, like pixelize it's areas, and take care of it really well?

![alt](https://res.cloudinary.com/deepgram/image/upload/v1661976388/blog/ai-show-what-does-an-ai-tranformation-look-like/al-x-407225-unsplash_v2.jpg)

**Susan:** You're right, they can. But I think it now allows a small area to be productive. So, the goal is to focus on the small area. Big farms will have a natural tendency to still just make everything the same. As soon as you say, "I'm gonna go large," why did you go large?

**Scott:** Right, bigger farms are easier easier to manage with 20th century tech.

**Susan:** You went large because you wanted to make things more uniform. And there will always be a place for that, but this is an economic shift, I predict, that will enable smaller farms in a way that we haven't seen for quite a while.

**Scott:** Do you think that data is a big differentiator there, in the Ag case?

**Susan:** Yes, and no. I'm going to say, in the lead up to these transformative times, winning, so to speak, solving the problem takes a tremendous amount of data, and legwork, and hard, hard work. The area we know about speech, it is hard work to get the data you need. But eventually, speech will be solved. I'm not saying it's tomorrow, and I'm not saying you'll be able- But you'll be able to just get a model that someone has put a whole of time and effort-

**Scott:** A lot of effort into it.

**Susan:** Into, and the data that went into it is-

**Scott:** Less and less important.

**Susan:** Is still down to this thing you just download and use. But, the goal on that small scale is then to take it, and specialize it, based off of your local data. And this hugely as important. Again, to bring up the speech world,

> "You can take a generic world, generic speech model, and just give it a few hours of some specialized knowledge, and suddenly you just see massive improvements."

That's the same on the small farm size. So maybe they solve some of these big problems.

**Scott:** It learns general themes, yeah?

**Susan:** Yes, but then you specialize it with just a year or two worth of your own data, and suddenly it's really good at your farm, and really good at making whatever decisions this particular thing was built to solve. Whether it's trying to track the growth rate of your animals, or trying to learn your land, and what it's best at.

## What are the key components of these transformations?

**Susan:** Well, you have to have the environment for the transformation to happen. Generally that means, something that's been there for a while.

**Scott:** Like social environment? Like people kinda know how it already goes?

**Scott:** It's already been figured out pretty well?

**Susan:** Yeah, I mean, Ag's been around, I've been told, more than a few years.

**Scott:** I've heard that, too.

**Susan:** And the longer an industry is around, without massive change, the more likely that there's a good chance for massive change to occur.

**Scott:** Well, yeah, you run up against the problems you're going to run against, and over the years, "Okay," things become established, and some things are hard, and you're not going to do them, and some things are not and you are going to do them.

**Susan:** And people get in the mindset before of, "Well, that didn't work 10 years ago, so why do I want to try it now?" Well, that was 10 years ago. That vision that said, "These ideas didn't work," now may work today, because of changes in technology.

**Susan:** It's someone coming in from the outside, with a different vision, generally powered by seeing what a technology can do today, that maybe it couldn't do before.

**Scott:** Or someone from the inside finding another...

**Susan:** Yeah, finding that notch out of the wilderness, and suddenly getting a glimpse of vision, and realizing, "We're gonna change."

**Susan:** Another great transformation right now, that's happening, is space. I mean, I'm a SpaceX fan. I'm not paid in any way, shape, or form.

**Scott:** This isn't really an AI transformation. Maybe in how they developed some of their parts or something.

**Susan:** Yeah, it just shows this general transformation where, a new vision came into place-

**Scott:** It was one way for a long time.

**Susan:** Rapidly replacing the old system.

**Scott:** Let's take a decade or so to like, work on some stuff, and then...

**Susan:** Now the big companies that were in space are probably very worried about their technology.

**Scott:** SpaceX will be making all the money in the future.

![Alt](https://res.cloudinary.com/deepgram/image/upload/v1661976388/blog/ai-show-what-does-an-ai-tranformation-look-like/spacex-549326-unsplash_V2.jpg)

**Susan:** It's great, but that's how these transformations generally happen. You know, an industry that's been established for a while, it has players that are established for a while, they're big. They've been sitting there.

**Scott:** They've become pretty complacent.

**Susan:** Not necessarily complacent, but they just don't see the way out. Everywhere they look, looks a little worse than where they're at, because they're stuck in a rut. This new entity comes in, and sees a new way, and they just go to a different optimum. That new optimum just crushes the old one.

**Susan:** And a lot of transformations just happen in that way.

**Scott:** This is the classic, great story recipe, the world was one way, then something happened. Now it's a different way.

**Susan:** And suddenly the dust of those old companies, no one really remembers them anymore.

**Scott:** Yeah, nobody cares anymore.

**Susan:** And you're seeing a lot of big, old, massive companies that people aren't hearing about anymore, you know? Where's GE going lately? Not to pick on them-

**Scott:** I'm sure they have some data science and machine learning people there, doing something.

**Susan:** Yeah, they're being forced to rapidly innovate, that's for sure. That, or be left behind.

**Susan:** You need to jump on board with these tools. It's painful, and there's going to be some wrong alleys.

**Scott:** Any final thoughts you have for people that are thinking about the AI transformation, what's going to happen?

**Susan:** Yeah. I would get smart on it, get your shots, get inoculated.

**Scott:** There you go. Get used to this idea.

**Susan:** Yeah. It doesn't mean that you're going to be doing it yourself. It doesn't mean that you won't be impacted by it, but do some due diligence right now. Start looking into it, and keep an eye towards those things that used to not work. Think about, with some sort of machine learning powering them, maybe they could have worked. It took too many people, and too many decisions 10 years ago, but maybe it's now possible.

**Scott:** I would say,

**AI is not going to change literally everything, but just like electricity didn't literally change everything, and the internet didn't literally change everything.**

**Susan:** It didn't?

**Scott:** No, it didn't.

**Susan:** I brush my teeth with an electric toothbrush that can communicate on the internet.

**Scott:** Yeah, but these transformations are usually good in certain areas, but they're like, really, really good in those certain areas, and make a big difference. You'll see that, when there's something along those lines of:

> "What's a mundane task for a human to do, but still takes human intelligence to do at least right now?" Okay, that's probably a really good spot to be thinking about "How is AI going to change that, and extract value?"
`;
}
function compiledContent() {
  return '<iframe src="https://www.youtube.com/embed/naC8T4FG0Nc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p><strong>Scott:</strong> Welcome to the AI Show. On the AI Show we talk about all things AI. Today we\u2019re asking the question, \u201CWhat does an AI transformation look like?\u201D</p>\n<h2 id="what-does-an-ai-transformation-look-like">What does an AI transformation look like?</h2>\n<p><strong>Susan:</strong> So much of this world is being rapidly transformed by AI. There\u2019s so many great things to think about.</p>\n<p><strong>Scott:</strong> What\u2019s already been transformed?</p>\n<p><strong>Susan:</strong> What hasn\u2019t been already transformed. My favorite is spam. Your inbox is finally cleaned out a little bit.</p>\n<p><strong>Scott:</strong> This is late \u201990s.</p>\n<p><strong>Susan:</strong> This is a long time ago. Before that you couldn\u2019t use it and it really enabled us to have that medium. Without that no one would use email, not that people use email anymore. Do you still use email, Scott?</p>\n<p><strong>Scott</strong> Definitely.</p>\n<p><strong>Susan:</strong> I checked it last week, honest.</p>\n<p><strong>Scott:</strong> I don\u2019t believe you now.</p>\n<p><strong>Susan:</strong> You don\u2019t believe me?</p>\n<p><strong>Scott:</strong> Yeah.</p>\n<p><strong>Susan:</strong> No, there\u2019s some great ones. One of my favorites is the up and coming world.</p>\n<p><strong>Scott:</strong> What\u2019s that?</p>\n<h2 id="agriculture-is-about-to-be-massively-transformed">Agriculture is about to be massively transformed.</h2>\n<p><strong>Scott:</strong> That\u2019s true, agriculture is getting pretty automated. You\u2019ve got big tractors that are <a href="https://www.gps.gov/applications/agriculture/">listening to a GPS</a>, figuring out where they are, and going and doing some pre-programmed thing. I think AI applies a lot there.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976384/blog/ai-show-what-does-an-ai-tranformation-look-like/joao-marcelo-marques-791496-unsplash_V2.jpg" alt="alt"></p>\n<p><strong>Susan:</strong> There is a tremendous amount of this world that is rapidly changing due to AI. It\u2019s mainly making those small decisions. A person would learn to make those decisions pretty quickly and come off the cuff and say, \u201COkay, we\u2019re going to make this, we\u2019re going to make that.\u201D By automating that, you now free up those people to think about the bigger stuff.</p>\n<p><strong>Scott:</strong> It might even be an easy decision. For agriculture, if you see an area over here, the plants are smaller, and over here they\u2019re bigger. There\u2019s something different about that. Maybe it doesn\u2019t have enough water. Maybe it doesn\u2019t have enough nutrients. It would be easy for a human to come to that, but they would have to just go around, and look at every square foot, but that\u2019s a pretty menial task.</p>\n<p><strong>Susan:</strong> On the note of agriculture, I\u2019m going to make a little confession here. If I could jump to another field other than speech, it would probably be the Ag world and applying <a href="https://en.wikipedia.org/wiki/Machine_learning">machine learning</a>.</p>\n<p><strong>Susan:</strong> Obviously, it\u2019s something that every human on planet deals with every single day, the results of agriculture. You need food, but it is just incredibly ripe for a disruptive change from AI.</p>\n<h3 id="what-makes-agriculture-ripe-for-disruption">What makes agriculture ripe for disruption?</h3>\n<p><strong>Scott:</strong> Is this because it\u2019s simplistic or why? Take the savings that simple things could do.</p>\n<p><strong>Susan:</strong> A simple thing, for instance, as you mentioned and what\u2019s going on right now, monitoring your fields to say \u201CThis area over here needs a little bit more water, or it needs a little bit more fertilizer.\u201D Being predictive and being proactive about managing a field of whatever resource.</p>\n<p><strong>Susan:</strong> But that\u2019s a small thing, and those are fairly easy things. You can detect through all sorts of fairly cheap sensors, water levels and all that.</p>\n<p><strong>Scott:</strong> Like what? What would a cheap sensor be?</p>\n<p><strong>Susan:</strong> Well, relatively cheap sensor, you could do infrared.</p>\n<p><strong>Scott:</strong> From what though? Like a farmer standing with an infrared gun?</p>\n<p><strong>Susan:</strong> No, there\u2019s a couple big sources that have been used traditionally. Satellites and light aircraft, but <a href="https://en.wikipedia.org/wiki/Agricultural_drone">very lately, a lot of UAV\u2019s</a> (un-manned aerial vehicles) are starting to take control.</p>\n<p><strong>Scott:</strong> Aerial imagery of some sort, right?</p>\n<p><strong>Susan:</strong> Aerial imagery, and that\u2019s a fun one, because not only the products that they return back, can you analyze with <a href="https://blog.deepgram.com/ai-show-different-types-of-machine-learning/">different machine learning techniques</a>, but also the automation of flying around an area is inevitably going to be automated with machine learning. Right now a lot of it, the ones I\u2019ve been looking at, is done by hand.</p>\n<p><strong>Scott:</strong> People flying planes?</p>\n<p><strong>Susan:</strong> People flying, or UAV\u2019s. That type of stuff. It\u2019s pretty easy to imagine a world where you got the tractor of the air, your UAV, taking over.</p>\n<p><strong>Scott:</strong> A UAV that takes off from your barn.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976385/blog/ai-show-what-does-an-ai-tranformation-look-like/david-henrichs-399195-unsplash_v2.jpg" alt="alt"></p>\n<p><strong>Susan:</strong> Sure, it does a lap every two hours, and comes back to the charging station, and just keeps doing that.</p>\n<p><strong>Scott:</strong> What would it do with that data, though? It looks around, it gets infrared, it gets visual?</p>\n<p><strong>Susan:</strong> You could do a hundred different tasks. Again, the field one, I think everybody gets intuitively, \u201CSure, I monitor my crops, and I can do that,\u201D but again, go to say, cattle ranching. \u201CWhere are my cattle right now?\u201D That\u2019s a pretty big question that you probably want to know. Have they left your property?</p>\n<p><strong>Scott:</strong> \u201CDo they have enough grass?\u201D</p>\n<p><strong>Susan:</strong> \u201CAre they in a good area? Maybe I could rotate them on a different field?\u201D</p>\n<p><strong>Scott:</strong> \u201CHave they eaten up too much?\u201D</p>\n<p><strong>Susan:</strong> \u201CHas a new calf been born? Are my fences secure?\u201D All these things are where a combination of this cheap sensor world and machine learning can come into play. You set up something that can fly around your area, it monitors fences, and knows how to look for a fence that is damaged or a gate that is open. It knows how to look for your cattle, and can recognize them and track them for you. And then you get all sorts of much deeper products later on like, being able to track say, the growth rate of a cow over time, as opposed to bringing them back and weighing them, and poking and prodding them for a half a day, which takes a lot of your time, and takes that cow out of the grass, where they\u2019re basically turning grass into money.</p>\n<p><strong>Scott:</strong> So you\u2019ll be able to personally identify the cow?</p>\n<p><strong>Scott:</strong> Facial recognition, but not facial recognition?</p>\n<p><strong>Susan:</strong> It\u2019s sort of like Cow-book. You know, you open up page, and it\u2019s got little like, \u201COh-\u201D</p>\n<p><strong>Scott:</strong> How much does it weigh? What is it into? It likes to go over here or over there.</p>\n<p><strong>Susan:</strong> \u201CI\u2019ve been kind of favoring this hoof over here for the last couple days. Maybe you should check this out.\u201D Or, \u201CEver since we\u2019ve been in that field over there, we\u2019ve been not as active. Maybe there\u2019s something in that field that\u2019s not helping us out.\u201D</p>\n<p><strong>Scott:</strong> Do you think there\u2019s anything down the line? Meaning, further along the pipeline? Okay, you have some grain, now what? Like shipping it, or storing it?</p>\n<h2 id="automate-the-simple-stuff">Automate The Simple Stuff</h2>\n<p><strong>Susan:</strong> It\u2019s pretty sci-fi still, to say completely automated farm\u2026</p>\n<blockquote>\n<p>\u201CBut the deal is, automate the simple stuff. The stuff that takes those very simple decisions.\u201D Then, the bigger things-coordinating schedules, coordinating big muscle movements-that kind of stuff now becomes to purview of the farmer, the rancher, the whatever, allows them to think more strategically instead of tactically.</p>\n</blockquote>\n<p><strong>Susan:</strong> This is a tool that takes you from kind of that course grained, everything must be uniform. \u201CMy goal on this farm is to make it as uniform as possible, so I don\u2019t have to think about the differences between here and there. I can do everything all the same to take advantage of that small detail over here. This part of my land is better for this type of crop, and this one\u2019s better for that type of crop.\u201D These tools can alleviate the detailed work that before, you just couldn\u2019t have the time to focus mentally, or even physically, on specializing for that.</p>\n<p><strong>Scott:</strong> So instead of trying to make everything the same so that you can get an average yield from it, now you can take advantage of the uniqueness?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976386/blog/ai-show-what-does-an-ai-tranformation-look-like/markus-spiske-632419-unsplash_v2.jpg" alt="Alt"></p>\n<p><strong>Susan:</strong> Talking about disruptions, that\u2019s a very disruptive idea. So you flip the script. Now it\u2019s not about the big farm, it\u2019s about the small farm, and finding how much you can get the optimal yield out of a smaller area, whereas making a uniform big area actually reduces profits, because you\u2019ve gotten rid of the potential for an optimal yield.</p>\n<p><strong>Scott:</strong> There are a lot of AI startups sort of cropping up around this area. Why do you think that is?</p>\n<p><strong>Susan:</strong> Well, it\u2019s trillions of dollars.</p>\n<p><strong>Scott:</strong> Huge market?</p>\n<p><strong>Susan:</strong> Yeah, with a <em>T</em>.</p>\n<p><strong>Scott:</strong> A huge market.</p>\n<h2 id="is-the-ag-ai-problem-easy-to-solve">Is the Ag AI problem easy to solve?</h2>\n<p><strong>Scott:</strong> Do you think it\u2019s easy though? Like saying: \u201CHey, this is going to be an easy problem to solve\u201D?</p>\n<p><strong>Susan:</strong> Nothing\u2019s easy. <em>Nothing</em> is easy.</p>\n<p><strong>Scott:</strong> Okay, is this going to be easier than something else?</p>\n<p><strong>Susan:</strong> I think there\u2019s certain low hanging fruit that\u2019s easy in this market, and you\u2019re starting to see that more on the sensor side and the simple data analytic side. For example, analytics telling you, \u201CThis is how hydrated an area is,\u201D and stuff like that. <a href="https://en.wikipedia.org/wiki/Precision_agriculture">These are well established things</a> that have been there for a while, but giving that on a smaller scale to farmers is starting to happen on \u2026 The smaller scale happening on a larger scale, if that makes any sense whatsoever. But the harder, deeper questions for instance, trying to figure out the best crop rotation for this exact field and those types of problems are going to be a bit hard. They will be solved. Could I give you a timeframe? No.</p>\n<p><strong>Scott:</strong> Presumably, this is going to make food cheaper again. Like, food has already become pretty cheap, at least in the U.S., and most developed regions of the world. What do you think it means to the economy if food becomes even cheaper? It\u2019s even easier to make food?</p>\n<p><strong>Susan:</strong> I think the biggest change will be in distribution. If this vision comes to fruition, the idea of local is a lot easier. Not only, as you mentioned, on the transportation/shipping side, so if you have a small farm with a lot of specialized stuff, now machine learning could help manage a bunch of those small farms, and get the distribution chain together to give the volume necessary that big companies would really pay attention to.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976387/blog/ai-show-what-does-an-ai-tranformation-look-like/nigel-tadyanehondo-239555-unsplash_v2.jpg" alt="Alt"></p>\n<p><strong>Susan:</strong> Say you\u2019ve got a hundred acres. That sounds like a lot, but that\u2019s not enough to keep grocery story chain X happy with you. But if you got several hundred of these farms and they\u2019re all kind of coordinated together, you might have a real change in distribution. Again, you\u2019d need something that would take a lot of small decisions. This would be something that machine learning type of algorithms could help out with. But this is, to me, a big thing. More diversity, more locality. Those are really important things, at least to me, and what I look for at a grocery store.</p>\n<h2 id="are-fully-automated-ai-farms-possible">Are fully automated, AI farms possible?</h2>\n<p><strong>Susan:</strong> Tractor\u2019s already, they\u2019re basically driving themselves around.</p>\n<p><strong>Scott:</strong> Sure, but think like, Interstellar. There\u2019s an AI brain inside the device.</p>\n<p><strong>Susan:</strong> This is definitely well beyond. What I\u2019ve deeply investigated, the Jetson\u2019s make me want to say \u201Cyes.\u201D</p>\n<p><strong>Scott:</strong> It\u2019d be like a Roomba.</p>\n<p><strong>Susan:</strong> Yeah, the Roomba. I mean, the inevitability is there. The question is, what\u2019s the time scale?</p>\n<p><strong>Susan:</strong> Is this next year? This five years? Is this 10 years? Is this 100 years? And what does it mean to be truly automated? We\u2019re seeing the growth of the autonomous vehicle go from nothing to \u201CWe\u2019re really starting to see them in the public sphere this year,\u201D and the next five years, it\u2019s likely that you\u2019re going to have been in one of them.</p>\n<p><strong>Scott:</strong> Yeah, and farms aren\u2019t all that complicated. You know, you don\u2019t have to worry about the lady with the stroller, pushing out in front of the tractor as much.</p>\n<p><strong>Susan:</strong> Going back to the drone thing, that\u2019s what makes, potentially, automated drones around the farm a real possibility. Flying drones like, okay. The first or two you\u2019re flying it around, you mark off, \u201CDon\u2019t fly here. There are trees.\u201D</p>\n<p><strong>Scott:</strong> So is Ag going to be the only transformation we see? Agriculture?</p>\n<p><strong>Susan:</strong> We should probably look for things that aren\u2019t going to be transformed.</p>\n<h3 id="what-wont-be-touched-by-ai">What won\u2019t be touched by AI?</h3>\n<p><strong>Scott:</strong> Electricity will still be a thing.</p>\n<p><strong>Susan:</strong> Hopefully. Maybe when we unify all the forces and physics, we\u2019ll figure out that we can do something else.</p>\n<p><strong>Scott:</strong> You\u2019ll still probably sleep in beds for a while.</p>\n<p><strong>Susan:</strong> For me, it goes back to people have the wrong view of machine learning, and where its real power is at. The right view, to me, this is again, just Susan\u2019s view here, but</p>\n<blockquote>\n<p>\u201CGet rid of the smaller decisions, those tactical decisions, so you can focus on a higher strategy. Once you start doing that, you realize, there\u2019s always something above that.\u201D</p>\n</blockquote>\n<p><strong>Scott:</strong> Focus your creative energy somewhere else.</p>\n<p><strong>Susan:</strong> It\u2019s like, why spend 90% of your time down here doing this? We need to stay creative. We need these things to offload those decisions that really all should be offloaded. But we need to be intelligent about what which ones we keep, even if it kind of makes better decisions. By automating it, you\u2019re getting rid of a lot of chances for creativity.</p>\n<p><strong>Scott:</strong> I\u2019m pretty sure though, at least in my life, if I had some AI bot that was analyzing my patterns, it would be more creative than me. I go to the same places, I eat the same things, I do whatever. It could definitely diversify my social interactions, just by forcing me to go to new places.</p>\n<p><strong>Susan:</strong> That\u2019s true. You need to have more exploration, and less exploitation in your life.</p>\n<p><strong>Scott:</strong> Exactly. So you just have to find a balance with the AI there. Make sure it has exploration and exploitation built in.</p>\n<p><strong>Susan:</strong> There\u2019s an author I\u2019ve read, David Brin, for anyone that is a Brin fan, he wrote a book. One of his characters was forced by a program to view things that they did not want to view. Just a random percentage of the time, \u201CYou\u2019re gonna view this stuff, just to shake it up.\u201D</p>\n<p><strong>Scott:</strong> I\u2019m liking it already. Where\u2019s it go? If a book was written about it, a fictional book I presume, then it\u2019s gotta go in really good places, right?</p>\n<p><strong>Susan:</strong> Oh, the rest of this book, it goes really good- It\u2019s Earth, by David Brin. That was just one character showing the quirks of this particular character, and how she forced herself to stay creative. It does come down to the disruptive side of the house, we do have to manage that. We\u2019re seeing so many industries that are led by the change, staying ahead of the change is pretty hard. Making those intelligent decisions is really important. Intelligent decisions to say, \u201CI\u2019m gonna offload this. I\u2019m gonna be creative over here.\u201D</p>\n<h2 id="how-does-this-transform-the-industry">How does this transform the industry?</h2>\n<p><strong>Susan:</strong> We talked about little bits and pieces, but how does it actually affect things in the long run? Like I said, this is, especially in Ag, it\u2019s a big change that flips the economy as a scale. So now, a smaller farm potentially is the more productive one.</p>\n<p><strong>Scott:</strong> This is because it has local knowledge? Why wouldn\u2019t a large farm be able to take care of, like pixelize it\u2019s areas, and take care of it really well?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976388/blog/ai-show-what-does-an-ai-tranformation-look-like/al-x-407225-unsplash_v2.jpg" alt="alt"></p>\n<p><strong>Susan:</strong> You\u2019re right, they can. But I think it now allows a small area to be productive. So, the goal is to focus on the small area. Big farms will have a natural tendency to still just make everything the same. As soon as you say, \u201CI\u2019m gonna go large,\u201D why did you go large?</p>\n<p><strong>Scott:</strong> Right, bigger farms are easier easier to manage with 20th century tech.</p>\n<p><strong>Susan:</strong> You went large because you wanted to make things more uniform. And there will always be a place for that, but this is an economic shift, I predict, that will enable smaller farms in a way that we haven\u2019t seen for quite a while.</p>\n<p><strong>Scott:</strong> Do you think that data is a big differentiator there, in the Ag case?</p>\n<p><strong>Susan:</strong> Yes, and no. I\u2019m going to say, in the lead up to these transformative times, winning, so to speak, solving the problem takes a tremendous amount of data, and legwork, and hard, hard work. The area we know about speech, it is hard work to get the data you need. But eventually, speech will be solved. I\u2019m not saying it\u2019s tomorrow, and I\u2019m not saying you\u2019ll be able- But you\u2019ll be able to just get a model that someone has put a whole of time and effort-</p>\n<p><strong>Scott:</strong> A lot of effort into it.</p>\n<p><strong>Susan:</strong> Into, and the data that went into it is-</p>\n<p><strong>Scott:</strong> Less and less important.</p>\n<p><strong>Susan:</strong> Is still down to this thing you just download and use. But, the goal on that small scale is then to take it, and specialize it, based off of your local data. And this hugely as important. Again, to bring up the speech world,</p>\n<blockquote>\n<p>\u201CYou can take a generic world, generic speech model, and just give it a few hours of some specialized knowledge, and suddenly you just see massive improvements.\u201D</p>\n</blockquote>\n<p>That\u2019s the same on the small farm size. So maybe they solve some of these big problems.</p>\n<p><strong>Scott:</strong> It learns general themes, yeah?</p>\n<p><strong>Susan:</strong> Yes, but then you specialize it with just a year or two worth of your own data, and suddenly it\u2019s really good at your farm, and really good at making whatever decisions this particular thing was built to solve. Whether it\u2019s trying to track the growth rate of your animals, or trying to learn your land, and what it\u2019s best at.</p>\n<h2 id="what-are-the-key-components-of-these-transformations">What are the key components of these transformations?</h2>\n<p><strong>Susan:</strong> Well, you have to have the environment for the transformation to happen. Generally that means, something that\u2019s been there for a while.</p>\n<p><strong>Scott:</strong> Like social environment? Like people kinda know how it already goes?</p>\n<p><strong>Scott:</strong> It\u2019s already been figured out pretty well?</p>\n<p><strong>Susan:</strong> Yeah, I mean, Ag\u2019s been around, I\u2019ve been told, more than a few years.</p>\n<p><strong>Scott:</strong> I\u2019ve heard that, too.</p>\n<p><strong>Susan:</strong> And the longer an industry is around, without massive change, the more likely that there\u2019s a good chance for massive change to occur.</p>\n<p><strong>Scott:</strong> Well, yeah, you run up against the problems you\u2019re going to run against, and over the years, \u201COkay,\u201D things become established, and some things are hard, and you\u2019re not going to do them, and some things are not and you are going to do them.</p>\n<p><strong>Susan:</strong> And people get in the mindset before of, \u201CWell, that didn\u2019t work 10 years ago, so why do I want to try it now?\u201D Well, that was 10 years ago. That vision that said, \u201CThese ideas didn\u2019t work,\u201D now may work today, because of changes in technology.</p>\n<p><strong>Susan:</strong> It\u2019s someone coming in from the outside, with a different vision, generally powered by seeing what a technology can do today, that maybe it couldn\u2019t do before.</p>\n<p><strong>Scott:</strong> Or someone from the inside finding another\u2026</p>\n<p><strong>Susan:</strong> Yeah, finding that notch out of the wilderness, and suddenly getting a glimpse of vision, and realizing, \u201CWe\u2019re gonna change.\u201D</p>\n<p><strong>Susan:</strong> Another great transformation right now, that\u2019s happening, is space. I mean, I\u2019m a SpaceX fan. I\u2019m not paid in any way, shape, or form.</p>\n<p><strong>Scott:</strong> This isn\u2019t really an AI transformation. Maybe in how they developed some of their parts or something.</p>\n<p><strong>Susan:</strong> Yeah, it just shows this general transformation where, a new vision came into place-</p>\n<p><strong>Scott:</strong> It was one way for a long time.</p>\n<p><strong>Susan:</strong> Rapidly replacing the old system.</p>\n<p><strong>Scott:</strong> Let\u2019s take a decade or so to like, work on some stuff, and then\u2026</p>\n<p><strong>Susan:</strong> Now the big companies that were in space are probably very worried about their technology.</p>\n<p><strong>Scott:</strong> SpaceX will be making all the money in the future.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976388/blog/ai-show-what-does-an-ai-tranformation-look-like/spacex-549326-unsplash_V2.jpg" alt="Alt"></p>\n<p><strong>Susan:</strong> It\u2019s great, but that\u2019s how these transformations generally happen. You know, an industry that\u2019s been established for a while, it has players that are established for a while, they\u2019re big. They\u2019ve been sitting there.</p>\n<p><strong>Scott:</strong> They\u2019ve become pretty complacent.</p>\n<p><strong>Susan:</strong> Not necessarily complacent, but they just don\u2019t see the way out. Everywhere they look, looks a little worse than where they\u2019re at, because they\u2019re stuck in a rut. This new entity comes in, and sees a new way, and they just go to a different optimum. That new optimum just crushes the old one.</p>\n<p><strong>Susan:</strong> And a lot of transformations just happen in that way.</p>\n<p><strong>Scott:</strong> This is the classic, great story recipe, the world was one way, then something happened. Now it\u2019s a different way.</p>\n<p><strong>Susan:</strong> And suddenly the dust of those old companies, no one really remembers them anymore.</p>\n<p><strong>Scott:</strong> Yeah, nobody cares anymore.</p>\n<p><strong>Susan:</strong> And you\u2019re seeing a lot of big, old, massive companies that people aren\u2019t hearing about anymore, you know? Where\u2019s GE going lately? Not to pick on them-</p>\n<p><strong>Scott:</strong> I\u2019m sure they have some data science and machine learning people there, doing something.</p>\n<p><strong>Susan:</strong> Yeah, they\u2019re being forced to rapidly innovate, that\u2019s for sure. That, or be left behind.</p>\n<p><strong>Susan:</strong> You need to jump on board with these tools. It\u2019s painful, and there\u2019s going to be some wrong alleys.</p>\n<p><strong>Scott:</strong> Any final thoughts you have for people that are thinking about the AI transformation, what\u2019s going to happen?</p>\n<p><strong>Susan:</strong> Yeah. I would get smart on it, get your shots, get inoculated.</p>\n<p><strong>Scott:</strong> There you go. Get used to this idea.</p>\n<p><strong>Susan:</strong> Yeah. It doesn\u2019t mean that you\u2019re going to be doing it yourself. It doesn\u2019t mean that you won\u2019t be impacted by it, but do some due diligence right now. Start looking into it, and keep an eye towards those things that used to not work. Think about, with some sort of machine learning powering them, maybe they could have worked. It took too many people, and too many decisions 10 years ago, but maybe it\u2019s now possible.</p>\n<p><strong>Scott:</strong> I would say,</p>\n<p><strong>AI is not going to change literally everything, but just like electricity didn\u2019t literally change everything, and the internet didn\u2019t literally change everything.</strong></p>\n<p><strong>Susan:</strong> It didn\u2019t?</p>\n<p><strong>Scott:</strong> No, it didn\u2019t.</p>\n<p><strong>Susan:</strong> I brush my teeth with an electric toothbrush that can communicate on the internet.</p>\n<p><strong>Scott:</strong> Yeah, but these transformations are usually good in certain areas, but they\u2019re like, really, really good in those certain areas, and make a big difference. You\u2019ll see that, when there\u2019s something along those lines of:</p>\n<blockquote>\n<p>\u201CWhat\u2019s a mundane task for a human to do, but still takes human intelligence to do at least right now?\u201D Okay, that\u2019s probably a really good spot to be thinking about \u201CHow is AI going to change that, and extract value?\u201D</p>\n</blockquote>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/ai-show-what-does-an-ai-tranformation-look-like/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><iframe src="https://www.youtube.com/embed/naC8T4FG0Nc" width="600" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<p><strong>Scott:</strong> Welcome to the AI Show. On the AI Show we talk about all things AI. Today we’re asking the question, “What does an AI transformation look like?”</p>
<h2 id="what-does-an-ai-transformation-look-like">What does an AI transformation look like?</h2>
<p><strong>Susan:</strong> So much of this world is being rapidly transformed by AI. There’s so many great things to think about.</p>
<p><strong>Scott:</strong> What’s already been transformed?</p>
<p><strong>Susan:</strong> What hasn’t been already transformed. My favorite is spam. Your inbox is finally cleaned out a little bit.</p>
<p><strong>Scott:</strong> This is late ’90s.</p>
<p><strong>Susan:</strong> This is a long time ago. Before that you couldn’t use it and it really enabled us to have that medium. Without that no one would use email, not that people use email anymore. Do you still use email, Scott?</p>
<p><strong>Scott</strong> Definitely.</p>
<p><strong>Susan:</strong> I checked it last week, honest.</p>
<p><strong>Scott:</strong> I don’t believe you now.</p>
<p><strong>Susan:</strong> You don’t believe me?</p>
<p><strong>Scott:</strong> Yeah.</p>
<p><strong>Susan:</strong> No, there’s some great ones. One of my favorites is the up and coming world.</p>
<p><strong>Scott:</strong> What’s that?</p>
<h2 id="agriculture-is-about-to-be-massively-transformed">Agriculture is about to be massively transformed.</h2>
<p><strong>Scott:</strong> That’s true, agriculture is getting pretty automated. You’ve got big tractors that are <a href="https://www.gps.gov/applications/agriculture/">listening to a GPS</a>, figuring out where they are, and going and doing some pre-programmed thing. I think AI applies a lot there.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976384/blog/ai-show-what-does-an-ai-tranformation-look-like/joao-marcelo-marques-791496-unsplash_V2.jpg" alt="alt"></p>
<p><strong>Susan:</strong> There is a tremendous amount of this world that is rapidly changing due to AI. It’s mainly making those small decisions. A person would learn to make those decisions pretty quickly and come off the cuff and say, “Okay, we’re going to make this, we’re going to make that.” By automating that, you now free up those people to think about the bigger stuff.</p>
<p><strong>Scott:</strong> It might even be an easy decision. For agriculture, if you see an area over here, the plants are smaller, and over here they’re bigger. There’s something different about that. Maybe it doesn’t have enough water. Maybe it doesn’t have enough nutrients. It would be easy for a human to come to that, but they would have to just go around, and look at every square foot, but that’s a pretty menial task.</p>
<p><strong>Susan:</strong> On the note of agriculture, I’m going to make a little confession here. If I could jump to another field other than speech, it would probably be the Ag world and applying <a href="https://en.wikipedia.org/wiki/Machine_learning">machine learning</a>.</p>
<p><strong>Susan:</strong> Obviously, it’s something that every human on planet deals with every single day, the results of agriculture. You need food, but it is just incredibly ripe for a disruptive change from AI.</p>
<h3 id="what-makes-agriculture-ripe-for-disruption">What makes agriculture ripe for disruption?</h3>
<p><strong>Scott:</strong> Is this because it’s simplistic or why? Take the savings that simple things could do.</p>
<p><strong>Susan:</strong> A simple thing, for instance, as you mentioned and what’s going on right now, monitoring your fields to say “This area over here needs a little bit more water, or it needs a little bit more fertilizer.” Being predictive and being proactive about managing a field of whatever resource.</p>
<p><strong>Susan:</strong> But that’s a small thing, and those are fairly easy things. You can detect through all sorts of fairly cheap sensors, water levels and all that.</p>
<p><strong>Scott:</strong> Like what? What would a cheap sensor be?</p>
<p><strong>Susan:</strong> Well, relatively cheap sensor, you could do infrared.</p>
<p><strong>Scott:</strong> From what though? Like a farmer standing with an infrared gun?</p>
<p><strong>Susan:</strong> No, there’s a couple big sources that have been used traditionally. Satellites and light aircraft, but <a href="https://en.wikipedia.org/wiki/Agricultural_drone">very lately, a lot of UAV’s</a> (un-manned aerial vehicles) are starting to take control.</p>
<p><strong>Scott:</strong> Aerial imagery of some sort, right?</p>
<p><strong>Susan:</strong> Aerial imagery, and that’s a fun one, because not only the products that they return back, can you analyze with <a href="https://blog.deepgram.com/ai-show-different-types-of-machine-learning/">different machine learning techniques</a>, but also the automation of flying around an area is inevitably going to be automated with machine learning. Right now a lot of it, the ones I’ve been looking at, is done by hand.</p>
<p><strong>Scott:</strong> People flying planes?</p>
<p><strong>Susan:</strong> People flying, or UAV’s. That type of stuff. It’s pretty easy to imagine a world where you got the tractor of the air, your UAV, taking over.</p>
<p><strong>Scott:</strong> A UAV that takes off from your barn.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976385/blog/ai-show-what-does-an-ai-tranformation-look-like/david-henrichs-399195-unsplash_v2.jpg" alt="alt"></p>
<p><strong>Susan:</strong> Sure, it does a lap every two hours, and comes back to the charging station, and just keeps doing that.</p>
<p><strong>Scott:</strong> What would it do with that data, though? It looks around, it gets infrared, it gets visual?</p>
<p><strong>Susan:</strong> You could do a hundred different tasks. Again, the field one, I think everybody gets intuitively, “Sure, I monitor my crops, and I can do that,” but again, go to say, cattle ranching. “Where are my cattle right now?” That’s a pretty big question that you probably want to know. Have they left your property?</p>
<p><strong>Scott:</strong> “Do they have enough grass?”</p>
<p><strong>Susan:</strong> “Are they in a good area? Maybe I could rotate them on a different field?”</p>
<p><strong>Scott:</strong> “Have they eaten up too much?”</p>
<p><strong>Susan:</strong> “Has a new calf been born? Are my fences secure?” All these things are where a combination of this cheap sensor world and machine learning can come into play. You set up something that can fly around your area, it monitors fences, and knows how to look for a fence that is damaged or a gate that is open. It knows how to look for your cattle, and can recognize them and track them for you. And then you get all sorts of much deeper products later on like, being able to track say, the growth rate of a cow over time, as opposed to bringing them back and weighing them, and poking and prodding them for a half a day, which takes a lot of your time, and takes that cow out of the grass, where they’re basically turning grass into money.</p>
<p><strong>Scott:</strong> So you’ll be able to personally identify the cow?</p>
<p><strong>Scott:</strong> Facial recognition, but not facial recognition?</p>
<p><strong>Susan:</strong> It’s sort of like Cow-book. You know, you open up page, and it’s got little like, “Oh-”</p>
<p><strong>Scott:</strong> How much does it weigh? What is it into? It likes to go over here or over there.</p>
<p><strong>Susan:</strong> “I’ve been kind of favoring this hoof over here for the last couple days. Maybe you should check this out.” Or, “Ever since we’ve been in that field over there, we’ve been not as active. Maybe there’s something in that field that’s not helping us out.”</p>
<p><strong>Scott:</strong> Do you think there’s anything down the line? Meaning, further along the pipeline? Okay, you have some grain, now what? Like shipping it, or storing it?</p>
<h2 id="automate-the-simple-stuff">Automate The Simple Stuff</h2>
<p><strong>Susan:</strong> It’s pretty sci-fi still, to say completely automated farm…</p>
<blockquote>
<p>“But the deal is, automate the simple stuff. The stuff that takes those very simple decisions.” Then, the bigger things-coordinating schedules, coordinating big muscle movements-that kind of stuff now becomes to purview of the farmer, the rancher, the whatever, allows them to think more strategically instead of tactically.</p>
</blockquote>
<p><strong>Susan:</strong> This is a tool that takes you from kind of that course grained, everything must be uniform. “My goal on this farm is to make it as uniform as possible, so I don’t have to think about the differences between here and there. I can do everything all the same to take advantage of that small detail over here. This part of my land is better for this type of crop, and this one’s better for that type of crop.” These tools can alleviate the detailed work that before, you just couldn’t have the time to focus mentally, or even physically, on specializing for that.</p>
<p><strong>Scott:</strong> So instead of trying to make everything the same so that you can get an average yield from it, now you can take advantage of the uniqueness?</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976386/blog/ai-show-what-does-an-ai-tranformation-look-like/markus-spiske-632419-unsplash_v2.jpg" alt="Alt"></p>
<p><strong>Susan:</strong> Talking about disruptions, that’s a very disruptive idea. So you flip the script. Now it’s not about the big farm, it’s about the small farm, and finding how much you can get the optimal yield out of a smaller area, whereas making a uniform big area actually reduces profits, because you’ve gotten rid of the potential for an optimal yield.</p>
<p><strong>Scott:</strong> There are a lot of AI startups sort of cropping up around this area. Why do you think that is?</p>
<p><strong>Susan:</strong> Well, it’s trillions of dollars.</p>
<p><strong>Scott:</strong> Huge market?</p>
<p><strong>Susan:</strong> Yeah, with a <em>T</em>.</p>
<p><strong>Scott:</strong> A huge market.</p>
<h2 id="is-the-ag-ai-problem-easy-to-solve">Is the Ag AI problem easy to solve?</h2>
<p><strong>Scott:</strong> Do you think it’s easy though? Like saying: “Hey, this is going to be an easy problem to solve”?</p>
<p><strong>Susan:</strong> Nothing’s easy. <em>Nothing</em> is easy.</p>
<p><strong>Scott:</strong> Okay, is this going to be easier than something else?</p>
<p><strong>Susan:</strong> I think there’s certain low hanging fruit that’s easy in this market, and you’re starting to see that more on the sensor side and the simple data analytic side. For example, analytics telling you, “This is how hydrated an area is,” and stuff like that. <a href="https://en.wikipedia.org/wiki/Precision_agriculture">These are well established things</a> that have been there for a while, but giving that on a smaller scale to farmers is starting to happen on … The smaller scale happening on a larger scale, if that makes any sense whatsoever. But the harder, deeper questions for instance, trying to figure out the best crop rotation for this exact field and those types of problems are going to be a bit hard. They will be solved. Could I give you a timeframe? No.</p>
<p><strong>Scott:</strong> Presumably, this is going to make food cheaper again. Like, food has already become pretty cheap, at least in the U.S., and most developed regions of the world. What do you think it means to the economy if food becomes even cheaper? It’s even easier to make food?</p>
<p><strong>Susan:</strong> I think the biggest change will be in distribution. If this vision comes to fruition, the idea of local is a lot easier. Not only, as you mentioned, on the transportation/shipping side, so if you have a small farm with a lot of specialized stuff, now machine learning could help manage a bunch of those small farms, and get the distribution chain together to give the volume necessary that big companies would really pay attention to.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976387/blog/ai-show-what-does-an-ai-tranformation-look-like/nigel-tadyanehondo-239555-unsplash_v2.jpg" alt="Alt"></p>
<p><strong>Susan:</strong> Say you’ve got a hundred acres. That sounds like a lot, but that’s not enough to keep grocery story chain X happy with you. But if you got several hundred of these farms and they’re all kind of coordinated together, you might have a real change in distribution. Again, you’d need something that would take a lot of small decisions. This would be something that machine learning type of algorithms could help out with. But this is, to me, a big thing. More diversity, more locality. Those are really important things, at least to me, and what I look for at a grocery store.</p>
<h2 id="are-fully-automated-ai-farms-possible">Are fully automated, AI farms possible?</h2>
<p><strong>Susan:</strong> Tractor’s already, they’re basically driving themselves around.</p>
<p><strong>Scott:</strong> Sure, but think like, Interstellar. There’s an AI brain inside the device.</p>
<p><strong>Susan:</strong> This is definitely well beyond. What I’ve deeply investigated, the Jetson’s make me want to say “yes.”</p>
<p><strong>Scott:</strong> It’d be like a Roomba.</p>
<p><strong>Susan:</strong> Yeah, the Roomba. I mean, the inevitability is there. The question is, what’s the time scale?</p>
<p><strong>Susan:</strong> Is this next year? This five years? Is this 10 years? Is this 100 years? And what does it mean to be truly automated? We’re seeing the growth of the autonomous vehicle go from nothing to “We’re really starting to see them in the public sphere this year,” and the next five years, it’s likely that you’re going to have been in one of them.</p>
<p><strong>Scott:</strong> Yeah, and farms aren’t all that complicated. You know, you don’t have to worry about the lady with the stroller, pushing out in front of the tractor as much.</p>
<p><strong>Susan:</strong> Going back to the drone thing, that’s what makes, potentially, automated drones around the farm a real possibility. Flying drones like, okay. The first or two you’re flying it around, you mark off, “Don’t fly here. There are trees.”</p>
<p><strong>Scott:</strong> So is Ag going to be the only transformation we see? Agriculture?</p>
<p><strong>Susan:</strong> We should probably look for things that aren’t going to be transformed.</p>
<h3 id="what-wont-be-touched-by-ai">What won’t be touched by AI?</h3>
<p><strong>Scott:</strong> Electricity will still be a thing.</p>
<p><strong>Susan:</strong> Hopefully. Maybe when we unify all the forces and physics, we’ll figure out that we can do something else.</p>
<p><strong>Scott:</strong> You’ll still probably sleep in beds for a while.</p>
<p><strong>Susan:</strong> For me, it goes back to people have the wrong view of machine learning, and where its real power is at. The right view, to me, this is again, just Susan’s view here, but</p>
<blockquote>
<p>“Get rid of the smaller decisions, those tactical decisions, so you can focus on a higher strategy. Once you start doing that, you realize, there’s always something above that.”</p>
</blockquote>
<p><strong>Scott:</strong> Focus your creative energy somewhere else.</p>
<p><strong>Susan:</strong> It’s like, why spend 90% of your time down here doing this? We need to stay creative. We need these things to offload those decisions that really all should be offloaded. But we need to be intelligent about what which ones we keep, even if it kind of makes better decisions. By automating it, you’re getting rid of a lot of chances for creativity.</p>
<p><strong>Scott:</strong> I’m pretty sure though, at least in my life, if I had some AI bot that was analyzing my patterns, it would be more creative than me. I go to the same places, I eat the same things, I do whatever. It could definitely diversify my social interactions, just by forcing me to go to new places.</p>
<p><strong>Susan:</strong> That’s true. You need to have more exploration, and less exploitation in your life.</p>
<p><strong>Scott:</strong> Exactly. So you just have to find a balance with the AI there. Make sure it has exploration and exploitation built in.</p>
<p><strong>Susan:</strong> There’s an author I’ve read, David Brin, for anyone that is a Brin fan, he wrote a book. One of his characters was forced by a program to view things that they did not want to view. Just a random percentage of the time, “You’re gonna view this stuff, just to shake it up.”</p>
<p><strong>Scott:</strong> I’m liking it already. Where’s it go? If a book was written about it, a fictional book I presume, then it’s gotta go in really good places, right?</p>
<p><strong>Susan:</strong> Oh, the rest of this book, it goes really good- It’s Earth, by David Brin. That was just one character showing the quirks of this particular character, and how she forced herself to stay creative. It does come down to the disruptive side of the house, we do have to manage that. We’re seeing so many industries that are led by the change, staying ahead of the change is pretty hard. Making those intelligent decisions is really important. Intelligent decisions to say, “I’m gonna offload this. I’m gonna be creative over here.”</p>
<h2 id="how-does-this-transform-the-industry">How does this transform the industry?</h2>
<p><strong>Susan:</strong> We talked about little bits and pieces, but how does it actually affect things in the long run? Like I said, this is, especially in Ag, it’s a big change that flips the economy as a scale. So now, a smaller farm potentially is the more productive one.</p>
<p><strong>Scott:</strong> This is because it has local knowledge? Why wouldn’t a large farm be able to take care of, like pixelize it’s areas, and take care of it really well?</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976388/blog/ai-show-what-does-an-ai-tranformation-look-like/al-x-407225-unsplash_v2.jpg" alt="alt"></p>
<p><strong>Susan:</strong> You’re right, they can. But I think it now allows a small area to be productive. So, the goal is to focus on the small area. Big farms will have a natural tendency to still just make everything the same. As soon as you say, “I’m gonna go large,” why did you go large?</p>
<p><strong>Scott:</strong> Right, bigger farms are easier easier to manage with 20th century tech.</p>
<p><strong>Susan:</strong> You went large because you wanted to make things more uniform. And there will always be a place for that, but this is an economic shift, I predict, that will enable smaller farms in a way that we haven’t seen for quite a while.</p>
<p><strong>Scott:</strong> Do you think that data is a big differentiator there, in the Ag case?</p>
<p><strong>Susan:</strong> Yes, and no. I’m going to say, in the lead up to these transformative times, winning, so to speak, solving the problem takes a tremendous amount of data, and legwork, and hard, hard work. The area we know about speech, it is hard work to get the data you need. But eventually, speech will be solved. I’m not saying it’s tomorrow, and I’m not saying you’ll be able- But you’ll be able to just get a model that someone has put a whole of time and effort-</p>
<p><strong>Scott:</strong> A lot of effort into it.</p>
<p><strong>Susan:</strong> Into, and the data that went into it is-</p>
<p><strong>Scott:</strong> Less and less important.</p>
<p><strong>Susan:</strong> Is still down to this thing you just download and use. But, the goal on that small scale is then to take it, and specialize it, based off of your local data. And this hugely as important. Again, to bring up the speech world,</p>
<blockquote>
<p>“You can take a generic world, generic speech model, and just give it a few hours of some specialized knowledge, and suddenly you just see massive improvements.”</p>
</blockquote>
<p>That’s the same on the small farm size. So maybe they solve some of these big problems.</p>
<p><strong>Scott:</strong> It learns general themes, yeah?</p>
<p><strong>Susan:</strong> Yes, but then you specialize it with just a year or two worth of your own data, and suddenly it’s really good at your farm, and really good at making whatever decisions this particular thing was built to solve. Whether it’s trying to track the growth rate of your animals, or trying to learn your land, and what it’s best at.</p>
<h2 id="what-are-the-key-components-of-these-transformations">What are the key components of these transformations?</h2>
<p><strong>Susan:</strong> Well, you have to have the environment for the transformation to happen. Generally that means, something that’s been there for a while.</p>
<p><strong>Scott:</strong> Like social environment? Like people kinda know how it already goes?</p>
<p><strong>Scott:</strong> It’s already been figured out pretty well?</p>
<p><strong>Susan:</strong> Yeah, I mean, Ag’s been around, I’ve been told, more than a few years.</p>
<p><strong>Scott:</strong> I’ve heard that, too.</p>
<p><strong>Susan:</strong> And the longer an industry is around, without massive change, the more likely that there’s a good chance for massive change to occur.</p>
<p><strong>Scott:</strong> Well, yeah, you run up against the problems you’re going to run against, and over the years, “Okay,” things become established, and some things are hard, and you’re not going to do them, and some things are not and you are going to do them.</p>
<p><strong>Susan:</strong> And people get in the mindset before of, “Well, that didn’t work 10 years ago, so why do I want to try it now?” Well, that was 10 years ago. That vision that said, “These ideas didn’t work,” now may work today, because of changes in technology.</p>
<p><strong>Susan:</strong> It’s someone coming in from the outside, with a different vision, generally powered by seeing what a technology can do today, that maybe it couldn’t do before.</p>
<p><strong>Scott:</strong> Or someone from the inside finding another…</p>
<p><strong>Susan:</strong> Yeah, finding that notch out of the wilderness, and suddenly getting a glimpse of vision, and realizing, “We’re gonna change.”</p>
<p><strong>Susan:</strong> Another great transformation right now, that’s happening, is space. I mean, I’m a SpaceX fan. I’m not paid in any way, shape, or form.</p>
<p><strong>Scott:</strong> This isn’t really an AI transformation. Maybe in how they developed some of their parts or something.</p>
<p><strong>Susan:</strong> Yeah, it just shows this general transformation where, a new vision came into place-</p>
<p><strong>Scott:</strong> It was one way for a long time.</p>
<p><strong>Susan:</strong> Rapidly replacing the old system.</p>
<p><strong>Scott:</strong> Let’s take a decade or so to like, work on some stuff, and then…</p>
<p><strong>Susan:</strong> Now the big companies that were in space are probably very worried about their technology.</p>
<p><strong>Scott:</strong> SpaceX will be making all the money in the future.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976388/blog/ai-show-what-does-an-ai-tranformation-look-like/spacex-549326-unsplash_V2.jpg" alt="Alt"></p>
<p><strong>Susan:</strong> It’s great, but that’s how these transformations generally happen. You know, an industry that’s been established for a while, it has players that are established for a while, they’re big. They’ve been sitting there.</p>
<p><strong>Scott:</strong> They’ve become pretty complacent.</p>
<p><strong>Susan:</strong> Not necessarily complacent, but they just don’t see the way out. Everywhere they look, looks a little worse than where they’re at, because they’re stuck in a rut. This new entity comes in, and sees a new way, and they just go to a different optimum. That new optimum just crushes the old one.</p>
<p><strong>Susan:</strong> And a lot of transformations just happen in that way.</p>
<p><strong>Scott:</strong> This is the classic, great story recipe, the world was one way, then something happened. Now it’s a different way.</p>
<p><strong>Susan:</strong> And suddenly the dust of those old companies, no one really remembers them anymore.</p>
<p><strong>Scott:</strong> Yeah, nobody cares anymore.</p>
<p><strong>Susan:</strong> And you’re seeing a lot of big, old, massive companies that people aren’t hearing about anymore, you know? Where’s GE going lately? Not to pick on them-</p>
<p><strong>Scott:</strong> I’m sure they have some data science and machine learning people there, doing something.</p>
<p><strong>Susan:</strong> Yeah, they’re being forced to rapidly innovate, that’s for sure. That, or be left behind.</p>
<p><strong>Susan:</strong> You need to jump on board with these tools. It’s painful, and there’s going to be some wrong alleys.</p>
<p><strong>Scott:</strong> Any final thoughts you have for people that are thinking about the AI transformation, what’s going to happen?</p>
<p><strong>Susan:</strong> Yeah. I would get smart on it, get your shots, get inoculated.</p>
<p><strong>Scott:</strong> There you go. Get used to this idea.</p>
<p><strong>Susan:</strong> Yeah. It doesn’t mean that you’re going to be doing it yourself. It doesn’t mean that you won’t be impacted by it, but do some due diligence right now. Start looking into it, and keep an eye towards those things that used to not work. Think about, with some sort of machine learning powering them, maybe they could have worked. It took too many people, and too many decisions 10 years ago, but maybe it’s now possible.</p>
<p><strong>Scott:</strong> I would say,</p>
<p><strong>AI is not going to change literally everything, but just like electricity didn’t literally change everything, and the internet didn’t literally change everything.</strong></p>
<p><strong>Susan:</strong> It didn’t?</p>
<p><strong>Scott:</strong> No, it didn’t.</p>
<p><strong>Susan:</strong> I brush my teeth with an electric toothbrush that can communicate on the internet.</p>
<p><strong>Scott:</strong> Yeah, but these transformations are usually good in certain areas, but they’re like, really, really good in those certain areas, and make a big difference. You’ll see that, when there’s something along those lines of:</p>
<blockquote>
<p>“What’s a mundane task for a human to do, but still takes human intelligence to do at least right now?” Okay, that’s probably a really good spot to be thinking about “How is AI going to change that, and extract value?”</p>
</blockquote>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/ai-show-what-does-an-ai-tranformation-look-like/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
