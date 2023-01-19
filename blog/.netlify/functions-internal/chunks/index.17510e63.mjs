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
/* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                          */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           */import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [{ "depth": 2, "slug": "hows-ai-going-to-help-us-live-longer", "text": "How\u2019s AI going to help us live longer?" }, { "depth": 2, "slug": "solving-the-discovery-problem", "text": "Solving the discovery problem" }, { "depth": 2, "slug": "what-about-agriculture", "text": "What about agriculture?" }, { "depth": 2, "slug": "what-about-the-medical-perspective", "text": "What about the medical perspective?" }, { "depth": 3, "slug": "lets-talk-transportation", "text": "Let\u2019s talk transportation" }, { "depth": 3, "slug": "think-about-the-energy-sector", "text": "Think about the energy sector" }, { "depth": 3, "slug": "are-there-going-to-be-robot-ai-powered-doctors", "text": "Are there going to be robot, AI powered doctors?" }, { "depth": 2, "slug": "what-does-your-ai-utopia-look-like", "text": "What does your AI Utopia look like?" }], "source": `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/576097014&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

**Scott:** Welcome to the AI show. Today we're asking the question, the very big question. What will the AI Utopia look like?

**Susan:** We were a little negative, Debbie Downer kind of not so happy on the [last podcast](https://blog.deepgram.com/what-does-the-ai-dystopia-look-like-ai-show/).

**Scott:** Why be so negative, man?

**Susan:** Things are going to destroy your life but, man, are there some cool things that it's going to do for us.

**Scott:** Yeah. Like what?

**Susan:** Oh, I'm just looking for all the easy ones, you're going to live longer. Do you want to live longer, Scott?

## How's AI going to help us live longer?

**Susan:** Bioinformatics. NVIDIA had this really cool demo last year where they took an MRI or something and used machine learning to turn it into a 3D view. You know, automatically segmenting out organs and all sorts of stuff. I mean, this is just like the level one stuff.

**Scott:** I'm just going to give you a better view.

**Susan:** Exactly.

**Scott:** Take this thing that used to be slices, turn it into something that you can rotate around and look at it and be like, "Oh, there it is."

![bosluk](https://res.cloudinary.com/deepgram/image/upload/v1661976828/blog/ai-show-what-will-the-ai-utopia-look-like/bos-luk.png)

*An MRI image of a person with an arachnoid cyst in their left, inferior frontal lobe.*

**Susan:** It's amazing. Even without being a doctor you can look at some of the stuff now and say, "That's clearly not supposed to be there, you may want to get that looked at."

**Scott:** Well, speaking of NVIDIA, they use AI now to do [ray tracing](https://en.wikipedia.org/wiki/Ray_tracing_(graphics)) a lot better. Ray tracing allows you to do graphics better. With it you figure out a few things but then fill in the rest using AI and they can speed everything up, make it look awesome

**Susan:** Let's get to brass tacks here. Better video games equals better life.

**Scott:** Everybody likes that one.

**Susan:** The world is just wide open for amazing new things, transformative things. Pretty much everybody has seen cars driving around their city mapping everything around. We all know the autonomous revolution is going to come upon us, but there's so many cool things that it's going to enable.

**Scott:** The cars drive you around, you can take a nap.

**Susan:** I'm not going to lie, there's been a couple of evenings where I wanted a responsible vehicle to take me home and, you know, that will be nice.

**Scott:** The car hasn't had a few...

**Susan:** Exactly. I think you know what I'm talking about, Scott.

**Scott:** Sure, you were just sleepy.

**Susan:** How cool would it be to get into your car after work on a Friday and then, you know, stretch out your arms like this in the nice wide open space because you don't have the driving steering wheel and all there. You know, pull a blanket over yourself and, wake up on the other side of the country, well, not quite but, you know, wake up a thousand miles away.

**Scott:** Hey, we're in San Francisco, why not end up in Denver.

**Susan:** I'm going to go skiing tomorrow.

**Scott:** It's a little far but, yeah.

**Susan:** But just take me there and wake me up every once in a while for a nice little break here and there.

**Scott:** Shake the car a little bit. "Okay, I'm up, I'm up, what?"

**Susan:** That's talking about you and me but, what about Grandma and Grandpa? Could you just imagine the amazing freedom that they will have? I don't know about your particular extended family there but, I know that my grandparents basically reach a day when it's probably not a good day for them to drive, right?

**Scott:** Did you have that conversation?

**Susan:** Yeah and the day before they're good; the day after, probably they're not. This independence thing falls off so quickly and yet, if you can have self driving cars then they can be more gradual. You'll still be programming the car to get them where they're going probably. You'll be getting the phone call, "How do you tell it to go to the store?"

**Scott:** One of my favorite Uber for X companies out there or, there are two companies, Silver Car and, GoGoGrandparent.

**Susan:** I like it.

**Scott:** Basically Uber for old people, which is awesome. But, their great viral marketing technique was not Facebook ads or videos or anything like that. It was postcards that you would send to your friends. Such a good idea.

**Susan:** I love it.

**Scott:** Why not have the grandparents get in the AI car? Now you don't have to have the human driving you around anymore

**Susan:** They can still make it to Sunday dinners.

![dindin](https://res.cloudinary.com/deepgram/image/upload/v1661976829/blog/ai-show-what-will-the-ai-utopia-look-like/A-Swedish-American-family-in-a-small-Minnesota-tow.jpg)

**Scott:** Exactly. Take a trip to go shopping, do all of that.

**Susan:** So what do you think, Scott, what's a big area you're thinking of?

**Scott:** I'm really big on my life becoming easier, that would be awesome. You get in your car and you're about to drive somewhere and you have to fumble with your Google maps and put in a stupid address for it and be like, "No, not that address, this other address." And, "Oh, I also want to make a stop along the way to go get some donuts or cookies or, whatever, because, hey I'm going to this meeting." Why can't I make all this easier, just talk to it like a human or it just knows that, "Hey, it's nine o'clock and, Scott's going to work."

**Susan:** "Should we stop at the coffee shop, Scott?" Politely ask.

**Scott:** "No, it's okay."

**Susan:** "Maybe not today."

**Scott:** But, it suggests a really good thing, bring in donuts or this, "I already called ahead," you know? Oh, great, all we have to do is stop by there.

**Susan:** "You told me last time your coworkers really appreciated you bringing in donuts."

**Scott:** Yeah, exactly. "I heard," you know, "because I was present."

**Susan:** Through the AI grapevine.

**Scott:** I was present because your phone was present and it noticed, you know, that everybody really liked that and so maybe we should do that again.

**Susan:** People are happier with donuts.

**Scott:** We've already kind of noticed that shopping has become easier because of technology. There's a lot of things that've become easier. You still have lots of annoying things that you have to deal with in life and AI won't take care of all of them, but there's a lot that I think it could help with.

Food is another big one for people. Not just agriculture - we should get there - but also, "What are we going to eat tonight?" "Oh, I don't know."

**Susan:** If AI can solve that problem, how many more marriages would be saved?

## Solving the discovery problem

**Scott:** It's a discovery problem in a lot of ways, right? If this machine learning program was able to give you something that you guys would both agree on, that's new, that's interesting, that's great.

And not only that, it suggests a couple of options for that. You probably would want this, this and, this. And actually, I would want that, let's get that, let's get that, let's just see what happens.

**Scott:** And then we can poo poo it later, we can blame the machine.

**Susan:** Exactly, yeah, offloading blame.

**Scott:** Exactly. The machine did it.

**Susan:** I'm loving the offloading blame right now.

## What about agriculture?

**Susan:** Agriculture is rife with disruption for AI in very amazingly good ways. One of my big hopes is that we will re-enable the small farmer again, and that is because when you look at big agriculture, they're all about taking huge tracts of land and trying to make it look very similar and not flatten it all out, grow the exact same crop and because you get the economies of scale, you get everything the same.

**Scott:** Yeah, farming is hard. There's not a super high yield, food doesn't cost all that much so you have to do a whole bunch of it and you have to do it cheaply.

**Susan:** It takes a lot of intelligence and a whole lot of work to deal with any kind of difference.

**Scott:** Situational awareness as well.

**Susan:** Machine learning can help take that load off. Imagine now you only have 10 or 15 acres and it's got hills and nooks and crannies and all sorts of different stuff. The dirt over here is slightly different than the dirt over there. Machine learning can help learn those differences and tell you, "Plant these crops there and plant those crops there."

![farm](https://images.unsplash.com/photo-1429991889170-afd56b2a1210?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)

**Susan:** Then you take it to the next level - the automated machinery of the future could help automate doing all the farm tasks in a much more varied world.

**Scott:** Well it decides what to plant where, it goes and harvests it.

**Susan:** I think it's a guidance thing. I don't want to fall into the trap of machine learning decides. I think it's an enabling thing more than "this is what you shall have on your land."

**Scott:** Well, I think it's more like, "Here's the plan, is that okay?"

**Susan:** "Yeah, go ahead, go do it, go to town." That will allow farmers, like any profession and any professional to focus more on the harder pieces of it. Start taking care of the average, give me a rough plan and maybe I'll tweak it for those little interesting things. I predict prices on this are going to be different, or, maybe farm costs over here are going to be different for things the machine can't take into account and tweak it that way. And those are just a few of the small things. You know, talk about distribution that's going to be revolutionized in farming. It's going to be faster to your table, it's going to be fresher to your table, it's going to be more diverse. If you do enable utilizing more of the land, you're going to enable a more diverse set of crops to come to market.

**Scott:** What about robots cooking?

**Susan:** My wife went to the [robot hamburger joint](http://creator.rest/) here that opened up in San Francisco.

**Scott:** Good?

**Susan:** I think her take was, "Okay."

**Scott:** Well, hey, that's pretty good, right?

**Susan:** But they've just opened up.

**Scott:** I would assume the first one is like, "No, it's disgusting, you don't want to go there."But, hey, "No, it's okay, it was fine." That's a pretty ringing endorsement then.

**Susan:** Yeah, ringing endorsement for a burger from scratch. Well their big thing, I think, was it was literally ground exactly at that point, the moment it was ordered. But, when they grind it they grind it in a way so that it makes it more tender because, now they can literally control as little pieces of meat are put together.

**Scott:** Well, that's cute. Everybody has to have a story so, yeah, that makes sense.

## What about the medical perspective?

**Scott:** We're all going to live longer, we already heard that.

**Susan:** Well, let's talk about you and monitoring you and what you can get out of that. Forget big medicine. Let's not talk about being able to segment the body and find organs and find all sorts of things wrong with you. Let's hook up an AI that monitors you daily, takes your pulse, figures out your heart rate and your respiration and how much you're easting or, what activities you're doing and starts figuring out whether or not you feel good or bad and how to tweak you to get better.

**Scott:** And motivate you to get better.

**Susan:** Wait five more minutes or, right now is the exact perfect time. You know, last time you did exercises these were the ones that seemed to help you more than those, you know? The 16 ounce curls worked best only once a week, not five times a week.

**Susan:** But, monitoring those things that actually make a difference in your life.

**Scott:** I could see how this would be life or death for children.

**Susan:** Oh man.

**Scott:** Start put a monitoring collar on your child. That's the upgrade.

But, it tells you, are they alive or dead at any point in time? Are they drowning? Are they in distress? Take all the worry off. Now you can have free range kids again.

**Susan:** Just let them go.

**Scott:** Just let them go because, you know, you could do this in the past, you could put all these sensors on them but then, what would you do with all the data? You need some AI to tell you, well, actually, this is fine, they're fine. This is the bad stuff. Oh, whoa, something's going on.

**Susan:** They probably will not be eaten by hyenas right now.

**Scott:** It serves a purpose of a scream, you know, a little scream detector. It could be good.

### Let's talk transportation

**Susan:** So, you know, I have a little bit of an aviation background.

**Scott:** Just a little bit. Navy pilot, no big deal.

**Susan:** You know, people think automation is just taking someone out of the cockpit, they don't think that it gets rid of the cockpit.

Often people don't really realize what that means for the redesign of an aircraft.

**Scott:** Why would they want to do that? Why would you want to take people out of the cockpit?

**Susan:** Well, ignoring the fact that the majority of problems actually happen between the yolk and the seat.

**Scott:** Meaning the person.

**Susan:** Correct, most aviation problems are caused by the human operator. From a design perspective, a lot of the things that you don't realize are designed on aircraft that cause a lot of extra weight and structure have everything to do with just pilots being able to see. For example:

> I've got to be able to see the runway and that means I have to do all sorts of crazy things with flaps and stuff like that just to be able to land and take off the plane, just so I can see the runway. If there's a machine, it doesn't need to see in the same way I do.

**Scott:** It would be lighter, more efficient, less complicated?

**Susan:** You can also design it for a better regime of crews as opposed to the landing and take off areas. Not as challenging design as it was before.

**Scott:** Not just autonomous vehicles but, airplanes. That doesn't have to be remote controlled.

**Susan:** Exactly. The same argument now comes over to the self driving car world. You can see it there too. If you got rid of the center, you know the front steering wheel and all the stuff on the console and all that stuff, you'd get a lot more room.

![car](https://res.cloudinary.com/deepgram/image/upload/v1661976830/blog/ai-show-what-will-the-ai-utopia-look-like/columnless-cart.jpg)

**Scott:** Got room to lounge, man.

**Susan:** And this is not a plug for Tesla but, one of their things is, "Hey, because we've gotten rid of a lot of the engine components, there's a lot more room inside the cabin." Well, now you get even more of those components gone and there's even more you can do.

**Scott:** It's like a hotel room in there.

**Susan:** So, again, going back to the aviation world, you can get small airplanes that go longer, further distances and that just really opens up travel.

**Scott:** Well, then does everyone live in a city now? Like, oh, maybe you go further away, more urban sprawl but, is that a bad thing?

**Susan:** Depends on what you want. There's a lot of stuff I think that could happen. Drone delivery of your milk and eggs out of nowhere.

**Scott:** Amazon Prime for everybody.

**Susan:** Yeah, I've got my own personal lake 300 miles away and here comes the drone.

**Scott:** The land of 10,000 lakes and one of them is mine.

**Susan:** That lakefront property becomes a lot more valuable as Amazon starts delivering there. You're no longer disconnected.

### Think about the energy sector

**Scott:** I think also in the energy sector there's going to be a big deal. For example, better use of the grid. This is already kind of happening but, better systems designed for that and then, systems to switch between, choose what you should do, price it, et cetera, make it more efficient. But also, machine learning techniques to find out new power sources. So, what I mean is, [fusion has been a promise for a long time](https://blog.deepgram.com/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/) and, it actually is really close to happening and it's like, man, what's the real problem here? It might be the people. And saying, "Hey, here are the laws of physics and here are the constraints that we have, it's probably going to be real complicated to make this work. Can we throw some computing power and a machine learning algorithm to guess at what the best type of fusion device would be?" And, there's been progress made on this.

**Susan:** Lots of progress. Yeah, I mean, I'm actually hearing the eternal joke of fusion's only 20 years away.

**Scott:** Yeah, 20, 20 years away. Now maybe It might actually be 20 years away.

**Susan:** They're talking about hitting equilibrium points, you know, equal power points or, I forgot that whatever it's called.

**Scott:** Over unity.

**Susan:** Yeah, over unity, there we go and, five, ten years maybe. Now actually capturing back the energy there is a different thing but, you know, it puts out more than you put into it. That's a pretty cool thing.

**Scott:** Absolutely.

**Susan:** I'm super, super stoked.

![tokamak](https://res.cloudinary.com/deepgram/image/upload/v1661976831/blog/ai-show-what-will-the-ai-utopia-look-like/TOKAMAK.jpg)

*A picture of TOKAMAK at the [Princeton Plasma Physics Laboratory (PPPL)](https://www.pppl.gov/)*

**Scott:** I mean if you're turning into a steam thing and you just need to cool it down and whatnot, it can't be too hard to do that but, you know, heat is kind of easy to transport.

**Susan:** But it's all wrapped in those super-conducting magnets. They get heat from in there, outside of there ...

**Scott:** You've got to pipe it out, yeah.

**Susan:** I'm no physics guy.

**Scott:** Let the machine learning algorithm figure out the problems. Tesla's Power wall?

**Susan:** They've done some pretty cool stuff with big batteries in Australia that's really paid off, but their next set of big projects are all about decentralized power. The power wall in the home but also becoming now a municipal power grid because all these things are linked together intelligently to take load and push load and all sorts of different stuff. They're really trying to reshape the grid and, to do that, you're going to have to have some very intelligent controls because it only takes a little bit, everybody deciding at the exact same moment to turn on their toaster, to really throw a system out of whack. You know, talk about civil disobedience, you just put on a big billboard at 6:00PM on Tuesday, every single person go make toast. And then, bam.

**Scott:** I love this idea. I love this idea.

**Susan:** Managing a grid is a lot more complicated than people think and these types of algorithms could potentially really, really cut down on problems with spikes like that.

**Scott:** Like I'm noticing a lot of toaster sales. People talking about toasters going on around here, I'm a little fearful. You may have to crank it up.

**Susan:** Right after we're done here I'm going to open up my browser and I'm going to see an advertisement to sell me a toaster.

**Scott:** I think there's some things in the medical side that we didn't talk about like, identifying cancer, or like, being able to go into this imagery a lot better and tell you what's going on. You touched on like three dimensional reconstruction and being able to look at it better but, you can also have areas pointed out to you like, "Well, this looks like a problem."

**Susan:** This is not your standard kidney. One of the classic things in facial recognition, the first thing you always learn about is using [principal component analysis](https://en.wikipedia.org/wiki/Principal_component_analysis) or something along those lines to say, "This is what the standard face looks like" so, recognizing faces and recognizing those things. You can do that with, effectively, a kidney but, with a lot better results as you use much stronger techniques. And, now you walk in for your weekly, your monthly, your yearly exam and, you quickly zip around, do an MRI or whatever technique they're going to use to scan the inside of your body and, poof, areas in you are marked with little highlights. You know, green, yellow, red, black.

**Scott:** Ooh, shouldn't have done that when I was 18, yeah.

**Susan:** It's like you may want to get that removed today? This one, you just may need to exercise a little bit more.

### Are there going to be robot, AI powered doctors?

**Scott:** Or strap you into a chair dentists that do your dental work for you?

**Susan:** Well the whole thing has been a growing thing for a long time and, one of the biggest problems, I understand, in that field is latency. You know, a thousand miles, speed of light and all the equipment in between means, if you're going to move a scalpel and you've got a little bit of a delay there, machine learning could enable that a lot more. Again, getting to the point where the surgeon is maybe doing more about guiding what's going to go on and not exactly doing what's going to go on. It does the perfect stitch for them, they don't actually have to do it themselves.

**Scott:** Do a perfect stitch here and then, do a perfect stitch here.

**Susan:** Exactly. Cauterize over there. I saw a while ag, a really cool thing where they were taking imagery of a beating heart and fixing it with, I think there was like some sort of strobe light that would sync up to it so the doctor would see it synced up and then the scalpel would actually, the tip of the scalpel would move to stay the same amount away from the beating heart so that it looks like it's a still heart and they can actually do surgery in real time on a beating heart.

**Susan:** That is the future of medicine. There's a competition to basically build the tricorder, you know, like every single year they try to incorporate more and more of those things into it and, it only makes sense.

**Susan:** Don't you want your doctor to be able to come in and just go, "Done." You didn't have to set up some sort of appointment and there it is.

**Scott:** Scientific advancement might start coming quicker too as ML and AI just really starts getting applied and used just like electricity did in the 1900's or, people figuring out radioactivity.

In 10 years try to find a researcher that's not using machine learning to analyze data. It's going to become like water to people.

**Susan:** Well that was your world, teasing a weak signal out using machine learning techniques.

**Scott:** Absolutely. You could try to set up rules and write them but it becomes hard because there are all these exceptions. It might be better if I just tell it: "That's right, that's wrong, that's right, that's wrong. If this is of that type, that's of this type." Then you just do that a few thousand times and then say, "Figure it out yourself." You pick all the parameters in order to satisfy that and it works very well. And, it totally changes how you think about the world. I could spend all my time writing an algorithm or, I could spend all my time getting relevant data and labeling it and then, how is that going to turn out in the end? We're seeing over and over that spending the time on the algorithm is not usually the best option unless you have a very small amount of data.

**Susan:** Well, you know, there's a truism in the machine learning world and, we've kind of hit this before but, data will live forever, your algorithm likely won't.

**Scott:** It always gets better.

**Susan:** The algorithm is [what makes you money right now](https://blog.deepgram.com/ai-show-different-types-of-machine-learning/) but, I can almost guarantee you, 10 years from now, it's not going to be that same model structure, even, fundamental technology. But, you'll probably keep going back to the dataset that you collected.

**Scott:** You see this all over the place. The academic datasets and texts and images and speech that have existed for the past 40 years are still used to train models today.

## What does your AI Utopia look like?

**Scott:** So for my Utopia I want my robot friend. I don't know if it's a phone, if it's a physical thing that can roll around and dance or something stupid but, you know, something that you can talk to and it does stuff for you. Maybe it doesn't have to physically do it for you but, call somebody up or schedule a cake to be ordered or pick up donuts o, suggest food. You're actually like, "I like that, I'm glad I didn't have to go do that discovery. This is great, you know? Tell me more, friend." That will be really dope for me. What about you?

**Susan:** My personal, I like the travel aspect. Personally, that's driven a large chunk of my life - the freedom to go places easily and see places easily.

**Scott:** Teleporter. You're sleeping, you come in and out of consciousness and you wake up in a new place. Hey, that's teleporting man, if you can get moved while you're sleeping.

**Susan:** One of my best travel experiences was we were in Seville in Southern Spain and, we got a night train to Barcelona. We were dead tired because, long story but, we get on this train, we fall asleep in a nice comfortable sleeping car, and we woke up to the Catalina coast with the sunrise. It was like, "This is what I want for every trip."

**Scott:** All traveling should be like this.

**Susan:** It should be the same thing, we're going to Yellowstone or, going to Grand Canyon or just going skiing. It's like," I'm going to fall asleep at the end of a normal day. Those dead hours that I'm not conscious of the world, use them productively, get me somewhere cool." Get me to wake up at a great place every day and I'll be happy. That to me is a really, really huge thing.

**Scott:** Well we should ask our listeners, what do you think will make the most positive impact? What are the things you're excited about? We'd love to hear about it.`, "html": '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/576097014&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />\n<p><strong>Scott:</strong> Welcome to the AI show. Today we\u2019re asking the question, the very big question. What will the AI Utopia look like?</p>\n<p><strong>Susan:</strong> We were a little negative, Debbie Downer kind of not so happy on the <a href="https://blog.deepgram.com/what-does-the-ai-dystopia-look-like-ai-show/">last podcast</a>.</p>\n<p><strong>Scott:</strong> Why be so negative, man?</p>\n<p><strong>Susan:</strong> Things are going to destroy your life but, man, are there some cool things that it\u2019s going to do for us.</p>\n<p><strong>Scott:</strong> Yeah. Like what?</p>\n<p><strong>Susan:</strong> Oh, I\u2019m just looking for all the easy ones, you\u2019re going to live longer. Do you want to live longer, Scott?</p>\n<h2 id="hows-ai-going-to-help-us-live-longer">How\u2019s AI going to help us live longer?</h2>\n<p><strong>Susan:</strong> Bioinformatics. NVIDIA had this really cool demo last year where they took an MRI or something and used machine learning to turn it into a 3D view. You know, automatically segmenting out organs and all sorts of stuff. I mean, this is just like the level one stuff.</p>\n<p><strong>Scott:</strong> I\u2019m just going to give you a better view.</p>\n<p><strong>Susan:</strong> Exactly.</p>\n<p><strong>Scott:</strong> Take this thing that used to be slices, turn it into something that you can rotate around and look at it and be like, \u201COh, there it is.\u201D</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976828/blog/ai-show-what-will-the-ai-utopia-look-like/bos-luk.png" alt="bosluk"></p>\n<p><em>An MRI image of a person with an arachnoid cyst in their left, inferior frontal lobe.</em></p>\n<p><strong>Susan:</strong> It\u2019s amazing. Even without being a doctor you can look at some of the stuff now and say, \u201CThat\u2019s clearly not supposed to be there, you may want to get that looked at.\u201D</p>\n<p><strong>Scott:</strong> Well, speaking of NVIDIA, they use AI now to do <a href="https://en.wikipedia.org/wiki/Ray_tracing_(graphics)">ray tracing</a> a lot better. Ray tracing allows you to do graphics better. With it you figure out a few things but then fill in the rest using AI and they can speed everything up, make it look awesome</p>\n<p><strong>Susan:</strong> Let\u2019s get to brass tacks here. Better video games equals better life.</p>\n<p><strong>Scott:</strong> Everybody likes that one.</p>\n<p><strong>Susan:</strong> The world is just wide open for amazing new things, transformative things. Pretty much everybody has seen cars driving around their city mapping everything around. We all know the autonomous revolution is going to come upon us, but there\u2019s so many cool things that it\u2019s going to enable.</p>\n<p><strong>Scott:</strong> The cars drive you around, you can take a nap.</p>\n<p><strong>Susan:</strong> I\u2019m not going to lie, there\u2019s been a couple of evenings where I wanted a responsible vehicle to take me home and, you know, that will be nice.</p>\n<p><strong>Scott:</strong> The car hasn\u2019t had a few\u2026</p>\n<p><strong>Susan:</strong> Exactly. I think you know what I\u2019m talking about, Scott.</p>\n<p><strong>Scott:</strong> Sure, you were just sleepy.</p>\n<p><strong>Susan:</strong> How cool would it be to get into your car after work on a Friday and then, you know, stretch out your arms like this in the nice wide open space because you don\u2019t have the driving steering wheel and all there. You know, pull a blanket over yourself and, wake up on the other side of the country, well, not quite but, you know, wake up a thousand miles away.</p>\n<p><strong>Scott:</strong> Hey, we\u2019re in San Francisco, why not end up in Denver.</p>\n<p><strong>Susan:</strong> I\u2019m going to go skiing tomorrow.</p>\n<p><strong>Scott:</strong> It\u2019s a little far but, yeah.</p>\n<p><strong>Susan:</strong> But just take me there and wake me up every once in a while for a nice little break here and there.</p>\n<p><strong>Scott:</strong> Shake the car a little bit. \u201COkay, I\u2019m up, I\u2019m up, what?\u201D</p>\n<p><strong>Susan:</strong> That\u2019s talking about you and me but, what about Grandma and Grandpa? Could you just imagine the amazing freedom that they will have? I don\u2019t know about your particular extended family there but, I know that my grandparents basically reach a day when it\u2019s probably not a good day for them to drive, right?</p>\n<p><strong>Scott:</strong> Did you have that conversation?</p>\n<p><strong>Susan:</strong> Yeah and the day before they\u2019re good; the day after, probably they\u2019re not. This independence thing falls off so quickly and yet, if you can have self driving cars then they can be more gradual. You\u2019ll still be programming the car to get them where they\u2019re going probably. You\u2019ll be getting the phone call, \u201CHow do you tell it to go to the store?\u201D</p>\n<p><strong>Scott:</strong> One of my favorite Uber for X companies out there or, there are two companies, Silver Car and, GoGoGrandparent.</p>\n<p><strong>Susan:</strong> I like it.</p>\n<p><strong>Scott:</strong> Basically Uber for old people, which is awesome. But, their great viral marketing technique was not Facebook ads or videos or anything like that. It was postcards that you would send to your friends. Such a good idea.</p>\n<p><strong>Susan:</strong> I love it.</p>\n<p><strong>Scott:</strong> Why not have the grandparents get in the AI car? Now you don\u2019t have to have the human driving you around anymore</p>\n<p><strong>Susan:</strong> They can still make it to Sunday dinners.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976829/blog/ai-show-what-will-the-ai-utopia-look-like/A-Swedish-American-family-in-a-small-Minnesota-tow.jpg" alt="dindin"></p>\n<p><strong>Scott:</strong> Exactly. Take a trip to go shopping, do all of that.</p>\n<p><strong>Susan:</strong> So what do you think, Scott, what\u2019s a big area you\u2019re thinking of?</p>\n<p><strong>Scott:</strong> I\u2019m really big on my life becoming easier, that would be awesome. You get in your car and you\u2019re about to drive somewhere and you have to fumble with your Google maps and put in a stupid address for it and be like, \u201CNo, not that address, this other address.\u201D And, \u201COh, I also want to make a stop along the way to go get some donuts or cookies or, whatever, because, hey I\u2019m going to this meeting.\u201D Why can\u2019t I make all this easier, just talk to it like a human or it just knows that, \u201CHey, it\u2019s nine o\u2019clock and, Scott\u2019s going to work.\u201D</p>\n<p><strong>Susan:</strong> \u201CShould we stop at the coffee shop, Scott?\u201D Politely ask.</p>\n<p><strong>Scott:</strong> \u201CNo, it\u2019s okay.\u201D</p>\n<p><strong>Susan:</strong> \u201CMaybe not today.\u201D</p>\n<p><strong>Scott:</strong> But, it suggests a really good thing, bring in donuts or this, \u201CI already called ahead,\u201D you know? Oh, great, all we have to do is stop by there.</p>\n<p><strong>Susan:</strong> \u201CYou told me last time your coworkers really appreciated you bringing in donuts.\u201D</p>\n<p><strong>Scott:</strong> Yeah, exactly. \u201CI heard,\u201D you know, \u201Cbecause I was present.\u201D</p>\n<p><strong>Susan:</strong> Through the AI grapevine.</p>\n<p><strong>Scott:</strong> I was present because your phone was present and it noticed, you know, that everybody really liked that and so maybe we should do that again.</p>\n<p><strong>Susan:</strong> People are happier with donuts.</p>\n<p><strong>Scott:</strong> We\u2019ve already kind of noticed that shopping has become easier because of technology. There\u2019s a lot of things that\u2019ve become easier. You still have lots of annoying things that you have to deal with in life and AI won\u2019t take care of all of them, but there\u2019s a lot that I think it could help with.</p>\n<p>Food is another big one for people. Not just agriculture - we should get there - but also, \u201CWhat are we going to eat tonight?\u201D \u201COh, I don\u2019t know.\u201D</p>\n<p><strong>Susan:</strong> If AI can solve that problem, how many more marriages would be saved?</p>\n<h2 id="solving-the-discovery-problem">Solving the discovery problem</h2>\n<p><strong>Scott:</strong> It\u2019s a discovery problem in a lot of ways, right? If this machine learning program was able to give you something that you guys would both agree on, that\u2019s new, that\u2019s interesting, that\u2019s great.</p>\n<p>And not only that, it suggests a couple of options for that. You probably would want this, this and, this. And actually, I would want that, let\u2019s get that, let\u2019s get that, let\u2019s just see what happens.</p>\n<p><strong>Scott:</strong> And then we can poo poo it later, we can blame the machine.</p>\n<p><strong>Susan:</strong> Exactly, yeah, offloading blame.</p>\n<p><strong>Scott:</strong> Exactly. The machine did it.</p>\n<p><strong>Susan:</strong> I\u2019m loving the offloading blame right now.</p>\n<h2 id="what-about-agriculture">What about agriculture?</h2>\n<p><strong>Susan:</strong> Agriculture is rife with disruption for AI in very amazingly good ways. One of my big hopes is that we will re-enable the small farmer again, and that is because when you look at big agriculture, they\u2019re all about taking huge tracts of land and trying to make it look very similar and not flatten it all out, grow the exact same crop and because you get the economies of scale, you get everything the same.</p>\n<p><strong>Scott:</strong> Yeah, farming is hard. There\u2019s not a super high yield, food doesn\u2019t cost all that much so you have to do a whole bunch of it and you have to do it cheaply.</p>\n<p><strong>Susan:</strong> It takes a lot of intelligence and a whole lot of work to deal with any kind of difference.</p>\n<p><strong>Scott:</strong> Situational awareness as well.</p>\n<p><strong>Susan:</strong> Machine learning can help take that load off. Imagine now you only have 10 or 15 acres and it\u2019s got hills and nooks and crannies and all sorts of different stuff. The dirt over here is slightly different than the dirt over there. Machine learning can help learn those differences and tell you, \u201CPlant these crops there and plant those crops there.\u201D</p>\n<p><img src="https://images.unsplash.com/photo-1429991889170-afd56b2a1210?ixlib=rb-1.2.1&#x26;ixid=eyJhcHBfaWQiOjEyMDd9&#x26;auto=format&#x26;fit=crop&#x26;w=800&#x26;q=60" alt="farm"></p>\n<p><strong>Susan:</strong> Then you take it to the next level - the automated machinery of the future could help automate doing all the farm tasks in a much more varied world.</p>\n<p><strong>Scott:</strong> Well it decides what to plant where, it goes and harvests it.</p>\n<p><strong>Susan:</strong> I think it\u2019s a guidance thing. I don\u2019t want to fall into the trap of machine learning decides. I think it\u2019s an enabling thing more than \u201Cthis is what you shall have on your land.\u201D</p>\n<p><strong>Scott:</strong> Well, I think it\u2019s more like, \u201CHere\u2019s the plan, is that okay?\u201D</p>\n<p><strong>Susan:</strong> \u201CYeah, go ahead, go do it, go to town.\u201D That will allow farmers, like any profession and any professional to focus more on the harder pieces of it. Start taking care of the average, give me a rough plan and maybe I\u2019ll tweak it for those little interesting things. I predict prices on this are going to be different, or, maybe farm costs over here are going to be different for things the machine can\u2019t take into account and tweak it that way. And those are just a few of the small things. You know, talk about distribution that\u2019s going to be revolutionized in farming. It\u2019s going to be faster to your table, it\u2019s going to be fresher to your table, it\u2019s going to be more diverse. If you do enable utilizing more of the land, you\u2019re going to enable a more diverse set of crops to come to market.</p>\n<p><strong>Scott:</strong> What about robots cooking?</p>\n<p><strong>Susan:</strong> My wife went to the <a href="http://creator.rest/">robot hamburger joint</a> here that opened up in San Francisco.</p>\n<p><strong>Scott:</strong> Good?</p>\n<p><strong>Susan:</strong> I think her take was, \u201COkay.\u201D</p>\n<p><strong>Scott:</strong> Well, hey, that\u2019s pretty good, right?</p>\n<p><strong>Susan:</strong> But they\u2019ve just opened up.</p>\n<p><strong>Scott:</strong> I would assume the first one is like, \u201CNo, it\u2019s disgusting, you don\u2019t want to go there.\u201DBut, hey, \u201CNo, it\u2019s okay, it was fine.\u201D That\u2019s a pretty ringing endorsement then.</p>\n<p><strong>Susan:</strong> Yeah, ringing endorsement for a burger from scratch. Well their big thing, I think, was it was literally ground exactly at that point, the moment it was ordered. But, when they grind it they grind it in a way so that it makes it more tender because, now they can literally control as little pieces of meat are put together.</p>\n<p><strong>Scott:</strong> Well, that\u2019s cute. Everybody has to have a story so, yeah, that makes sense.</p>\n<h2 id="what-about-the-medical-perspective">What about the medical perspective?</h2>\n<p><strong>Scott:</strong> We\u2019re all going to live longer, we already heard that.</p>\n<p><strong>Susan:</strong> Well, let\u2019s talk about you and monitoring you and what you can get out of that. Forget big medicine. Let\u2019s not talk about being able to segment the body and find organs and find all sorts of things wrong with you. Let\u2019s hook up an AI that monitors you daily, takes your pulse, figures out your heart rate and your respiration and how much you\u2019re easting or, what activities you\u2019re doing and starts figuring out whether or not you feel good or bad and how to tweak you to get better.</p>\n<p><strong>Scott:</strong> And motivate you to get better.</p>\n<p><strong>Susan:</strong> Wait five more minutes or, right now is the exact perfect time. You know, last time you did exercises these were the ones that seemed to help you more than those, you know? The 16 ounce curls worked best only once a week, not five times a week.</p>\n<p><strong>Susan:</strong> But, monitoring those things that actually make a difference in your life.</p>\n<p><strong>Scott:</strong> I could see how this would be life or death for children.</p>\n<p><strong>Susan:</strong> Oh man.</p>\n<p><strong>Scott:</strong> Start put a monitoring collar on your child. That\u2019s the upgrade.</p>\n<p>But, it tells you, are they alive or dead at any point in time? Are they drowning? Are they in distress? Take all the worry off. Now you can have free range kids again.</p>\n<p><strong>Susan:</strong> Just let them go.</p>\n<p><strong>Scott:</strong> Just let them go because, you know, you could do this in the past, you could put all these sensors on them but then, what would you do with all the data? You need some AI to tell you, well, actually, this is fine, they\u2019re fine. This is the bad stuff. Oh, whoa, something\u2019s going on.</p>\n<p><strong>Susan:</strong> They probably will not be eaten by hyenas right now.</p>\n<p><strong>Scott:</strong> It serves a purpose of a scream, you know, a little scream detector. It could be good.</p>\n<h3 id="lets-talk-transportation">Let\u2019s talk transportation</h3>\n<p><strong>Susan:</strong> So, you know, I have a little bit of an aviation background.</p>\n<p><strong>Scott:</strong> Just a little bit. Navy pilot, no big deal.</p>\n<p><strong>Susan:</strong> You know, people think automation is just taking someone out of the cockpit, they don\u2019t think that it gets rid of the cockpit.</p>\n<p>Often people don\u2019t really realize what that means for the redesign of an aircraft.</p>\n<p><strong>Scott:</strong> Why would they want to do that? Why would you want to take people out of the cockpit?</p>\n<p><strong>Susan:</strong> Well, ignoring the fact that the majority of problems actually happen between the yolk and the seat.</p>\n<p><strong>Scott:</strong> Meaning the person.</p>\n<p><strong>Susan:</strong> Correct, most aviation problems are caused by the human operator. From a design perspective, a lot of the things that you don\u2019t realize are designed on aircraft that cause a lot of extra weight and structure have everything to do with just pilots being able to see. For example:</p>\n<blockquote>\n<p>I\u2019ve got to be able to see the runway and that means I have to do all sorts of crazy things with flaps and stuff like that just to be able to land and take off the plane, just so I can see the runway. If there\u2019s a machine, it doesn\u2019t need to see in the same way I do.</p>\n</blockquote>\n<p><strong>Scott:</strong> It would be lighter, more efficient, less complicated?</p>\n<p><strong>Susan:</strong> You can also design it for a better regime of crews as opposed to the landing and take off areas. Not as challenging design as it was before.</p>\n<p><strong>Scott:</strong> Not just autonomous vehicles but, airplanes. That doesn\u2019t have to be remote controlled.</p>\n<p><strong>Susan:</strong> Exactly. The same argument now comes over to the self driving car world. You can see it there too. If you got rid of the center, you know the front steering wheel and all the stuff on the console and all that stuff, you\u2019d get a lot more room.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976830/blog/ai-show-what-will-the-ai-utopia-look-like/columnless-cart.jpg" alt="car"></p>\n<p><strong>Scott:</strong> Got room to lounge, man.</p>\n<p><strong>Susan:</strong> And this is not a plug for Tesla but, one of their things is, \u201CHey, because we\u2019ve gotten rid of a lot of the engine components, there\u2019s a lot more room inside the cabin.\u201D Well, now you get even more of those components gone and there\u2019s even more you can do.</p>\n<p><strong>Scott:</strong> It\u2019s like a hotel room in there.</p>\n<p><strong>Susan:</strong> So, again, going back to the aviation world, you can get small airplanes that go longer, further distances and that just really opens up travel.</p>\n<p><strong>Scott:</strong> Well, then does everyone live in a city now? Like, oh, maybe you go further away, more urban sprawl but, is that a bad thing?</p>\n<p><strong>Susan:</strong> Depends on what you want. There\u2019s a lot of stuff I think that could happen. Drone delivery of your milk and eggs out of nowhere.</p>\n<p><strong>Scott:</strong> Amazon Prime for everybody.</p>\n<p><strong>Susan:</strong> Yeah, I\u2019ve got my own personal lake 300 miles away and here comes the drone.</p>\n<p><strong>Scott:</strong> The land of 10,000 lakes and one of them is mine.</p>\n<p><strong>Susan:</strong> That lakefront property becomes a lot more valuable as Amazon starts delivering there. You\u2019re no longer disconnected.</p>\n<h3 id="think-about-the-energy-sector">Think about the energy sector</h3>\n<p><strong>Scott:</strong> I think also in the energy sector there\u2019s going to be a big deal. For example, better use of the grid. This is already kind of happening but, better systems designed for that and then, systems to switch between, choose what you should do, price it, et cetera, make it more efficient. But also, machine learning techniques to find out new power sources. So, what I mean is, <a href="https://blog.deepgram.com/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/">fusion has been a promise for a long time</a> and, it actually is really close to happening and it\u2019s like, man, what\u2019s the real problem here? It might be the people. And saying, \u201CHey, here are the laws of physics and here are the constraints that we have, it\u2019s probably going to be real complicated to make this work. Can we throw some computing power and a machine learning algorithm to guess at what the best type of fusion device would be?\u201D And, there\u2019s been progress made on this.</p>\n<p><strong>Susan:</strong> Lots of progress. Yeah, I mean, I\u2019m actually hearing the eternal joke of fusion\u2019s only 20 years away.</p>\n<p><strong>Scott:</strong> Yeah, 20, 20 years away. Now maybe It might actually be 20 years away.</p>\n<p><strong>Susan:</strong> They\u2019re talking about hitting equilibrium points, you know, equal power points or, I forgot that whatever it\u2019s called.</p>\n<p><strong>Scott:</strong> Over unity.</p>\n<p><strong>Susan:</strong> Yeah, over unity, there we go and, five, ten years maybe. Now actually capturing back the energy there is a different thing but, you know, it puts out more than you put into it. That\u2019s a pretty cool thing.</p>\n<p><strong>Scott:</strong> Absolutely.</p>\n<p><strong>Susan:</strong> I\u2019m super, super stoked.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976831/blog/ai-show-what-will-the-ai-utopia-look-like/TOKAMAK.jpg" alt="tokamak"></p>\n<p><em>A picture of TOKAMAK at the <a href="https://www.pppl.gov/">Princeton Plasma Physics Laboratory (PPPL)</a></em></p>\n<p><strong>Scott:</strong> I mean if you\u2019re turning into a steam thing and you just need to cool it down and whatnot, it can\u2019t be too hard to do that but, you know, heat is kind of easy to transport.</p>\n<p><strong>Susan:</strong> But it\u2019s all wrapped in those super-conducting magnets. They get heat from in there, outside of there \u2026</p>\n<p><strong>Scott:</strong> You\u2019ve got to pipe it out, yeah.</p>\n<p><strong>Susan:</strong> I\u2019m no physics guy.</p>\n<p><strong>Scott:</strong> Let the machine learning algorithm figure out the problems. Tesla\u2019s Power wall?</p>\n<p><strong>Susan:</strong> They\u2019ve done some pretty cool stuff with big batteries in Australia that\u2019s really paid off, but their next set of big projects are all about decentralized power. The power wall in the home but also becoming now a municipal power grid because all these things are linked together intelligently to take load and push load and all sorts of different stuff. They\u2019re really trying to reshape the grid and, to do that, you\u2019re going to have to have some very intelligent controls because it only takes a little bit, everybody deciding at the exact same moment to turn on their toaster, to really throw a system out of whack. You know, talk about civil disobedience, you just put on a big billboard at 6:00PM on Tuesday, every single person go make toast. And then, bam.</p>\n<p><strong>Scott:</strong> I love this idea. I love this idea.</p>\n<p><strong>Susan:</strong> Managing a grid is a lot more complicated than people think and these types of algorithms could potentially really, really cut down on problems with spikes like that.</p>\n<p><strong>Scott:</strong> Like I\u2019m noticing a lot of toaster sales. People talking about toasters going on around here, I\u2019m a little fearful. You may have to crank it up.</p>\n<p><strong>Susan:</strong> Right after we\u2019re done here I\u2019m going to open up my browser and I\u2019m going to see an advertisement to sell me a toaster.</p>\n<p><strong>Scott:</strong> I think there\u2019s some things in the medical side that we didn\u2019t talk about like, identifying cancer, or like, being able to go into this imagery a lot better and tell you what\u2019s going on. You touched on like three dimensional reconstruction and being able to look at it better but, you can also have areas pointed out to you like, \u201CWell, this looks like a problem.\u201D</p>\n<p><strong>Susan:</strong> This is not your standard kidney. One of the classic things in facial recognition, the first thing you always learn about is using <a href="https://en.wikipedia.org/wiki/Principal_component_analysis">principal component analysis</a> or something along those lines to say, \u201CThis is what the standard face looks like\u201D so, recognizing faces and recognizing those things. You can do that with, effectively, a kidney but, with a lot better results as you use much stronger techniques. And, now you walk in for your weekly, your monthly, your yearly exam and, you quickly zip around, do an MRI or whatever technique they\u2019re going to use to scan the inside of your body and, poof, areas in you are marked with little highlights. You know, green, yellow, red, black.</p>\n<p><strong>Scott:</strong> Ooh, shouldn\u2019t have done that when I was 18, yeah.</p>\n<p><strong>Susan:</strong> It\u2019s like you may want to get that removed today? This one, you just may need to exercise a little bit more.</p>\n<h3 id="are-there-going-to-be-robot-ai-powered-doctors">Are there going to be robot, AI powered doctors?</h3>\n<p><strong>Scott:</strong> Or strap you into a chair dentists that do your dental work for you?</p>\n<p><strong>Susan:</strong> Well the whole thing has been a growing thing for a long time and, one of the biggest problems, I understand, in that field is latency. You know, a thousand miles, speed of light and all the equipment in between means, if you\u2019re going to move a scalpel and you\u2019ve got a little bit of a delay there, machine learning could enable that a lot more. Again, getting to the point where the surgeon is maybe doing more about guiding what\u2019s going to go on and not exactly doing what\u2019s going to go on. It does the perfect stitch for them, they don\u2019t actually have to do it themselves.</p>\n<p><strong>Scott:</strong> Do a perfect stitch here and then, do a perfect stitch here.</p>\n<p><strong>Susan:</strong> Exactly. Cauterize over there. I saw a while ag, a really cool thing where they were taking imagery of a beating heart and fixing it with, I think there was like some sort of strobe light that would sync up to it so the doctor would see it synced up and then the scalpel would actually, the tip of the scalpel would move to stay the same amount away from the beating heart so that it looks like it\u2019s a still heart and they can actually do surgery in real time on a beating heart.</p>\n<p><strong>Susan:</strong> That is the future of medicine. There\u2019s a competition to basically build the tricorder, you know, like every single year they try to incorporate more and more of those things into it and, it only makes sense.</p>\n<p><strong>Susan:</strong> Don\u2019t you want your doctor to be able to come in and just go, \u201CDone.\u201D You didn\u2019t have to set up some sort of appointment and there it is.</p>\n<p><strong>Scott:</strong> Scientific advancement might start coming quicker too as ML and AI just really starts getting applied and used just like electricity did in the 1900\u2019s or, people figuring out radioactivity.</p>\n<p>In 10 years try to find a researcher that\u2019s not using machine learning to analyze data. It\u2019s going to become like water to people.</p>\n<p><strong>Susan:</strong> Well that was your world, teasing a weak signal out using machine learning techniques.</p>\n<p><strong>Scott:</strong> Absolutely. You could try to set up rules and write them but it becomes hard because there are all these exceptions. It might be better if I just tell it: \u201CThat\u2019s right, that\u2019s wrong, that\u2019s right, that\u2019s wrong. If this is of that type, that\u2019s of this type.\u201D Then you just do that a few thousand times and then say, \u201CFigure it out yourself.\u201D You pick all the parameters in order to satisfy that and it works very well. And, it totally changes how you think about the world. I could spend all my time writing an algorithm or, I could spend all my time getting relevant data and labeling it and then, how is that going to turn out in the end? We\u2019re seeing over and over that spending the time on the algorithm is not usually the best option unless you have a very small amount of data.</p>\n<p><strong>Susan:</strong> Well, you know, there\u2019s a truism in the machine learning world and, we\u2019ve kind of hit this before but, data will live forever, your algorithm likely won\u2019t.</p>\n<p><strong>Scott:</strong> It always gets better.</p>\n<p><strong>Susan:</strong> The algorithm is <a href="https://blog.deepgram.com/ai-show-different-types-of-machine-learning/">what makes you money right now</a> but, I can almost guarantee you, 10 years from now, it\u2019s not going to be that same model structure, even, fundamental technology. But, you\u2019ll probably keep going back to the dataset that you collected.</p>\n<p><strong>Scott:</strong> You see this all over the place. The academic datasets and texts and images and speech that have existed for the past 40 years are still used to train models today.</p>\n<h2 id="what-does-your-ai-utopia-look-like">What does your AI Utopia look like?</h2>\n<p><strong>Scott:</strong> So for my Utopia I want my robot friend. I don\u2019t know if it\u2019s a phone, if it\u2019s a physical thing that can roll around and dance or something stupid but, you know, something that you can talk to and it does stuff for you. Maybe it doesn\u2019t have to physically do it for you but, call somebody up or schedule a cake to be ordered or pick up donuts o, suggest food. You\u2019re actually like, \u201CI like that, I\u2019m glad I didn\u2019t have to go do that discovery. This is great, you know? Tell me more, friend.\u201D That will be really dope for me. What about you?</p>\n<p><strong>Susan:</strong> My personal, I like the travel aspect. Personally, that\u2019s driven a large chunk of my life - the freedom to go places easily and see places easily.</p>\n<p><strong>Scott:</strong> Teleporter. You\u2019re sleeping, you come in and out of consciousness and you wake up in a new place. Hey, that\u2019s teleporting man, if you can get moved while you\u2019re sleeping.</p>\n<p><strong>Susan:</strong> One of my best travel experiences was we were in Seville in Southern Spain and, we got a night train to Barcelona. We were dead tired because, long story but, we get on this train, we fall asleep in a nice comfortable sleeping car, and we woke up to the Catalina coast with the sunrise. It was like, \u201CThis is what I want for every trip.\u201D</p>\n<p><strong>Scott:</strong> All traveling should be like this.</p>\n<p><strong>Susan:</strong> It should be the same thing, we\u2019re going to Yellowstone or, going to Grand Canyon or just going skiing. It\u2019s like,\u201D I\u2019m going to fall asleep at the end of a normal day. Those dead hours that I\u2019m not conscious of the world, use them productively, get me somewhere cool.\u201D Get me to wake up at a great place every day and I\u2019ll be happy. That to me is a really, really huge thing.</p>\n<p><strong>Scott:</strong> Well we should ask our listeners, what do you think will make the most positive impact? What are the things you\u2019re excited about? We\u2019d love to hear about it.</p>' };
const frontmatter = { "title": "What will the AI Utopia look like? \u2014 AI Show", "description": "Is there an AI utopia coming? What will it look like? Have a listen to this episode of the AI Show for our ideas.", "date": "2019-02-27T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981351/blog/ai-show-what-will-the-ai-utopia-look-like/what-will-ai-utopia-look-like%402x.jpg", "authors": ["morris-gevirtz"], "category": "ai-and-engineering", "tags": ["machine-learning", "deep-learning"], "seo": { "title": "What will the AI Utopia look like? \u2014 AI Show", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981351/blog/ai-show-what-will-the-ai-utopia-look-like/what-will-ai-utopia-look-like%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/e00ea0d", "twitter": "https://dpgr.am/466176f", "linkedin": "https://dpgr.am/069de14", "reddit": "https://dpgr.am/b04485e", "facebook": "https://dpgr.am/2c79813" }, "astro": { "headings": [{ "depth": 2, "slug": "hows-ai-going-to-help-us-live-longer", "text": "How\u2019s AI going to help us live longer?" }, { "depth": 2, "slug": "solving-the-discovery-problem", "text": "Solving the discovery problem" }, { "depth": 2, "slug": "what-about-agriculture", "text": "What about agriculture?" }, { "depth": 2, "slug": "what-about-the-medical-perspective", "text": "What about the medical perspective?" }, { "depth": 3, "slug": "lets-talk-transportation", "text": "Let\u2019s talk transportation" }, { "depth": 3, "slug": "think-about-the-energy-sector", "text": "Think about the energy sector" }, { "depth": 3, "slug": "are-there-going-to-be-robot-ai-powered-doctors", "text": "Are there going to be robot, AI powered doctors?" }, { "depth": 2, "slug": "what-does-your-ai-utopia-look-like", "text": "What does your AI Utopia look like?" }], "source": `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/576097014&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

**Scott:** Welcome to the AI show. Today we're asking the question, the very big question. What will the AI Utopia look like?

**Susan:** We were a little negative, Debbie Downer kind of not so happy on the [last podcast](https://blog.deepgram.com/what-does-the-ai-dystopia-look-like-ai-show/).

**Scott:** Why be so negative, man?

**Susan:** Things are going to destroy your life but, man, are there some cool things that it's going to do for us.

**Scott:** Yeah. Like what?

**Susan:** Oh, I'm just looking for all the easy ones, you're going to live longer. Do you want to live longer, Scott?

## How's AI going to help us live longer?

**Susan:** Bioinformatics. NVIDIA had this really cool demo last year where they took an MRI or something and used machine learning to turn it into a 3D view. You know, automatically segmenting out organs and all sorts of stuff. I mean, this is just like the level one stuff.

**Scott:** I'm just going to give you a better view.

**Susan:** Exactly.

**Scott:** Take this thing that used to be slices, turn it into something that you can rotate around and look at it and be like, "Oh, there it is."

![bosluk](https://res.cloudinary.com/deepgram/image/upload/v1661976828/blog/ai-show-what-will-the-ai-utopia-look-like/bos-luk.png)

*An MRI image of a person with an arachnoid cyst in their left, inferior frontal lobe.*

**Susan:** It's amazing. Even without being a doctor you can look at some of the stuff now and say, "That's clearly not supposed to be there, you may want to get that looked at."

**Scott:** Well, speaking of NVIDIA, they use AI now to do [ray tracing](https://en.wikipedia.org/wiki/Ray_tracing_(graphics)) a lot better. Ray tracing allows you to do graphics better. With it you figure out a few things but then fill in the rest using AI and they can speed everything up, make it look awesome

**Susan:** Let's get to brass tacks here. Better video games equals better life.

**Scott:** Everybody likes that one.

**Susan:** The world is just wide open for amazing new things, transformative things. Pretty much everybody has seen cars driving around their city mapping everything around. We all know the autonomous revolution is going to come upon us, but there's so many cool things that it's going to enable.

**Scott:** The cars drive you around, you can take a nap.

**Susan:** I'm not going to lie, there's been a couple of evenings where I wanted a responsible vehicle to take me home and, you know, that will be nice.

**Scott:** The car hasn't had a few...

**Susan:** Exactly. I think you know what I'm talking about, Scott.

**Scott:** Sure, you were just sleepy.

**Susan:** How cool would it be to get into your car after work on a Friday and then, you know, stretch out your arms like this in the nice wide open space because you don't have the driving steering wheel and all there. You know, pull a blanket over yourself and, wake up on the other side of the country, well, not quite but, you know, wake up a thousand miles away.

**Scott:** Hey, we're in San Francisco, why not end up in Denver.

**Susan:** I'm going to go skiing tomorrow.

**Scott:** It's a little far but, yeah.

**Susan:** But just take me there and wake me up every once in a while for a nice little break here and there.

**Scott:** Shake the car a little bit. "Okay, I'm up, I'm up, what?"

**Susan:** That's talking about you and me but, what about Grandma and Grandpa? Could you just imagine the amazing freedom that they will have? I don't know about your particular extended family there but, I know that my grandparents basically reach a day when it's probably not a good day for them to drive, right?

**Scott:** Did you have that conversation?

**Susan:** Yeah and the day before they're good; the day after, probably they're not. This independence thing falls off so quickly and yet, if you can have self driving cars then they can be more gradual. You'll still be programming the car to get them where they're going probably. You'll be getting the phone call, "How do you tell it to go to the store?"

**Scott:** One of my favorite Uber for X companies out there or, there are two companies, Silver Car and, GoGoGrandparent.

**Susan:** I like it.

**Scott:** Basically Uber for old people, which is awesome. But, their great viral marketing technique was not Facebook ads or videos or anything like that. It was postcards that you would send to your friends. Such a good idea.

**Susan:** I love it.

**Scott:** Why not have the grandparents get in the AI car? Now you don't have to have the human driving you around anymore

**Susan:** They can still make it to Sunday dinners.

![dindin](https://res.cloudinary.com/deepgram/image/upload/v1661976829/blog/ai-show-what-will-the-ai-utopia-look-like/A-Swedish-American-family-in-a-small-Minnesota-tow.jpg)

**Scott:** Exactly. Take a trip to go shopping, do all of that.

**Susan:** So what do you think, Scott, what's a big area you're thinking of?

**Scott:** I'm really big on my life becoming easier, that would be awesome. You get in your car and you're about to drive somewhere and you have to fumble with your Google maps and put in a stupid address for it and be like, "No, not that address, this other address." And, "Oh, I also want to make a stop along the way to go get some donuts or cookies or, whatever, because, hey I'm going to this meeting." Why can't I make all this easier, just talk to it like a human or it just knows that, "Hey, it's nine o'clock and, Scott's going to work."

**Susan:** "Should we stop at the coffee shop, Scott?" Politely ask.

**Scott:** "No, it's okay."

**Susan:** "Maybe not today."

**Scott:** But, it suggests a really good thing, bring in donuts or this, "I already called ahead," you know? Oh, great, all we have to do is stop by there.

**Susan:** "You told me last time your coworkers really appreciated you bringing in donuts."

**Scott:** Yeah, exactly. "I heard," you know, "because I was present."

**Susan:** Through the AI grapevine.

**Scott:** I was present because your phone was present and it noticed, you know, that everybody really liked that and so maybe we should do that again.

**Susan:** People are happier with donuts.

**Scott:** We've already kind of noticed that shopping has become easier because of technology. There's a lot of things that've become easier. You still have lots of annoying things that you have to deal with in life and AI won't take care of all of them, but there's a lot that I think it could help with.

Food is another big one for people. Not just agriculture - we should get there - but also, "What are we going to eat tonight?" "Oh, I don't know."

**Susan:** If AI can solve that problem, how many more marriages would be saved?

## Solving the discovery problem

**Scott:** It's a discovery problem in a lot of ways, right? If this machine learning program was able to give you something that you guys would both agree on, that's new, that's interesting, that's great.

And not only that, it suggests a couple of options for that. You probably would want this, this and, this. And actually, I would want that, let's get that, let's get that, let's just see what happens.

**Scott:** And then we can poo poo it later, we can blame the machine.

**Susan:** Exactly, yeah, offloading blame.

**Scott:** Exactly. The machine did it.

**Susan:** I'm loving the offloading blame right now.

## What about agriculture?

**Susan:** Agriculture is rife with disruption for AI in very amazingly good ways. One of my big hopes is that we will re-enable the small farmer again, and that is because when you look at big agriculture, they're all about taking huge tracts of land and trying to make it look very similar and not flatten it all out, grow the exact same crop and because you get the economies of scale, you get everything the same.

**Scott:** Yeah, farming is hard. There's not a super high yield, food doesn't cost all that much so you have to do a whole bunch of it and you have to do it cheaply.

**Susan:** It takes a lot of intelligence and a whole lot of work to deal with any kind of difference.

**Scott:** Situational awareness as well.

**Susan:** Machine learning can help take that load off. Imagine now you only have 10 or 15 acres and it's got hills and nooks and crannies and all sorts of different stuff. The dirt over here is slightly different than the dirt over there. Machine learning can help learn those differences and tell you, "Plant these crops there and plant those crops there."

![farm](https://images.unsplash.com/photo-1429991889170-afd56b2a1210?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)

**Susan:** Then you take it to the next level - the automated machinery of the future could help automate doing all the farm tasks in a much more varied world.

**Scott:** Well it decides what to plant where, it goes and harvests it.

**Susan:** I think it's a guidance thing. I don't want to fall into the trap of machine learning decides. I think it's an enabling thing more than "this is what you shall have on your land."

**Scott:** Well, I think it's more like, "Here's the plan, is that okay?"

**Susan:** "Yeah, go ahead, go do it, go to town." That will allow farmers, like any profession and any professional to focus more on the harder pieces of it. Start taking care of the average, give me a rough plan and maybe I'll tweak it for those little interesting things. I predict prices on this are going to be different, or, maybe farm costs over here are going to be different for things the machine can't take into account and tweak it that way. And those are just a few of the small things. You know, talk about distribution that's going to be revolutionized in farming. It's going to be faster to your table, it's going to be fresher to your table, it's going to be more diverse. If you do enable utilizing more of the land, you're going to enable a more diverse set of crops to come to market.

**Scott:** What about robots cooking?

**Susan:** My wife went to the [robot hamburger joint](http://creator.rest/) here that opened up in San Francisco.

**Scott:** Good?

**Susan:** I think her take was, "Okay."

**Scott:** Well, hey, that's pretty good, right?

**Susan:** But they've just opened up.

**Scott:** I would assume the first one is like, "No, it's disgusting, you don't want to go there."But, hey, "No, it's okay, it was fine." That's a pretty ringing endorsement then.

**Susan:** Yeah, ringing endorsement for a burger from scratch. Well their big thing, I think, was it was literally ground exactly at that point, the moment it was ordered. But, when they grind it they grind it in a way so that it makes it more tender because, now they can literally control as little pieces of meat are put together.

**Scott:** Well, that's cute. Everybody has to have a story so, yeah, that makes sense.

## What about the medical perspective?

**Scott:** We're all going to live longer, we already heard that.

**Susan:** Well, let's talk about you and monitoring you and what you can get out of that. Forget big medicine. Let's not talk about being able to segment the body and find organs and find all sorts of things wrong with you. Let's hook up an AI that monitors you daily, takes your pulse, figures out your heart rate and your respiration and how much you're easting or, what activities you're doing and starts figuring out whether or not you feel good or bad and how to tweak you to get better.

**Scott:** And motivate you to get better.

**Susan:** Wait five more minutes or, right now is the exact perfect time. You know, last time you did exercises these were the ones that seemed to help you more than those, you know? The 16 ounce curls worked best only once a week, not five times a week.

**Susan:** But, monitoring those things that actually make a difference in your life.

**Scott:** I could see how this would be life or death for children.

**Susan:** Oh man.

**Scott:** Start put a monitoring collar on your child. That's the upgrade.

But, it tells you, are they alive or dead at any point in time? Are they drowning? Are they in distress? Take all the worry off. Now you can have free range kids again.

**Susan:** Just let them go.

**Scott:** Just let them go because, you know, you could do this in the past, you could put all these sensors on them but then, what would you do with all the data? You need some AI to tell you, well, actually, this is fine, they're fine. This is the bad stuff. Oh, whoa, something's going on.

**Susan:** They probably will not be eaten by hyenas right now.

**Scott:** It serves a purpose of a scream, you know, a little scream detector. It could be good.

### Let's talk transportation

**Susan:** So, you know, I have a little bit of an aviation background.

**Scott:** Just a little bit. Navy pilot, no big deal.

**Susan:** You know, people think automation is just taking someone out of the cockpit, they don't think that it gets rid of the cockpit.

Often people don't really realize what that means for the redesign of an aircraft.

**Scott:** Why would they want to do that? Why would you want to take people out of the cockpit?

**Susan:** Well, ignoring the fact that the majority of problems actually happen between the yolk and the seat.

**Scott:** Meaning the person.

**Susan:** Correct, most aviation problems are caused by the human operator. From a design perspective, a lot of the things that you don't realize are designed on aircraft that cause a lot of extra weight and structure have everything to do with just pilots being able to see. For example:

> I've got to be able to see the runway and that means I have to do all sorts of crazy things with flaps and stuff like that just to be able to land and take off the plane, just so I can see the runway. If there's a machine, it doesn't need to see in the same way I do.

**Scott:** It would be lighter, more efficient, less complicated?

**Susan:** You can also design it for a better regime of crews as opposed to the landing and take off areas. Not as challenging design as it was before.

**Scott:** Not just autonomous vehicles but, airplanes. That doesn't have to be remote controlled.

**Susan:** Exactly. The same argument now comes over to the self driving car world. You can see it there too. If you got rid of the center, you know the front steering wheel and all the stuff on the console and all that stuff, you'd get a lot more room.

![car](https://res.cloudinary.com/deepgram/image/upload/v1661976830/blog/ai-show-what-will-the-ai-utopia-look-like/columnless-cart.jpg)

**Scott:** Got room to lounge, man.

**Susan:** And this is not a plug for Tesla but, one of their things is, "Hey, because we've gotten rid of a lot of the engine components, there's a lot more room inside the cabin." Well, now you get even more of those components gone and there's even more you can do.

**Scott:** It's like a hotel room in there.

**Susan:** So, again, going back to the aviation world, you can get small airplanes that go longer, further distances and that just really opens up travel.

**Scott:** Well, then does everyone live in a city now? Like, oh, maybe you go further away, more urban sprawl but, is that a bad thing?

**Susan:** Depends on what you want. There's a lot of stuff I think that could happen. Drone delivery of your milk and eggs out of nowhere.

**Scott:** Amazon Prime for everybody.

**Susan:** Yeah, I've got my own personal lake 300 miles away and here comes the drone.

**Scott:** The land of 10,000 lakes and one of them is mine.

**Susan:** That lakefront property becomes a lot more valuable as Amazon starts delivering there. You're no longer disconnected.

### Think about the energy sector

**Scott:** I think also in the energy sector there's going to be a big deal. For example, better use of the grid. This is already kind of happening but, better systems designed for that and then, systems to switch between, choose what you should do, price it, et cetera, make it more efficient. But also, machine learning techniques to find out new power sources. So, what I mean is, [fusion has been a promise for a long time](https://blog.deepgram.com/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/) and, it actually is really close to happening and it's like, man, what's the real problem here? It might be the people. And saying, "Hey, here are the laws of physics and here are the constraints that we have, it's probably going to be real complicated to make this work. Can we throw some computing power and a machine learning algorithm to guess at what the best type of fusion device would be?" And, there's been progress made on this.

**Susan:** Lots of progress. Yeah, I mean, I'm actually hearing the eternal joke of fusion's only 20 years away.

**Scott:** Yeah, 20, 20 years away. Now maybe It might actually be 20 years away.

**Susan:** They're talking about hitting equilibrium points, you know, equal power points or, I forgot that whatever it's called.

**Scott:** Over unity.

**Susan:** Yeah, over unity, there we go and, five, ten years maybe. Now actually capturing back the energy there is a different thing but, you know, it puts out more than you put into it. That's a pretty cool thing.

**Scott:** Absolutely.

**Susan:** I'm super, super stoked.

![tokamak](https://res.cloudinary.com/deepgram/image/upload/v1661976831/blog/ai-show-what-will-the-ai-utopia-look-like/TOKAMAK.jpg)

*A picture of TOKAMAK at the [Princeton Plasma Physics Laboratory (PPPL)](https://www.pppl.gov/)*

**Scott:** I mean if you're turning into a steam thing and you just need to cool it down and whatnot, it can't be too hard to do that but, you know, heat is kind of easy to transport.

**Susan:** But it's all wrapped in those super-conducting magnets. They get heat from in there, outside of there ...

**Scott:** You've got to pipe it out, yeah.

**Susan:** I'm no physics guy.

**Scott:** Let the machine learning algorithm figure out the problems. Tesla's Power wall?

**Susan:** They've done some pretty cool stuff with big batteries in Australia that's really paid off, but their next set of big projects are all about decentralized power. The power wall in the home but also becoming now a municipal power grid because all these things are linked together intelligently to take load and push load and all sorts of different stuff. They're really trying to reshape the grid and, to do that, you're going to have to have some very intelligent controls because it only takes a little bit, everybody deciding at the exact same moment to turn on their toaster, to really throw a system out of whack. You know, talk about civil disobedience, you just put on a big billboard at 6:00PM on Tuesday, every single person go make toast. And then, bam.

**Scott:** I love this idea. I love this idea.

**Susan:** Managing a grid is a lot more complicated than people think and these types of algorithms could potentially really, really cut down on problems with spikes like that.

**Scott:** Like I'm noticing a lot of toaster sales. People talking about toasters going on around here, I'm a little fearful. You may have to crank it up.

**Susan:** Right after we're done here I'm going to open up my browser and I'm going to see an advertisement to sell me a toaster.

**Scott:** I think there's some things in the medical side that we didn't talk about like, identifying cancer, or like, being able to go into this imagery a lot better and tell you what's going on. You touched on like three dimensional reconstruction and being able to look at it better but, you can also have areas pointed out to you like, "Well, this looks like a problem."

**Susan:** This is not your standard kidney. One of the classic things in facial recognition, the first thing you always learn about is using [principal component analysis](https://en.wikipedia.org/wiki/Principal_component_analysis) or something along those lines to say, "This is what the standard face looks like" so, recognizing faces and recognizing those things. You can do that with, effectively, a kidney but, with a lot better results as you use much stronger techniques. And, now you walk in for your weekly, your monthly, your yearly exam and, you quickly zip around, do an MRI or whatever technique they're going to use to scan the inside of your body and, poof, areas in you are marked with little highlights. You know, green, yellow, red, black.

**Scott:** Ooh, shouldn't have done that when I was 18, yeah.

**Susan:** It's like you may want to get that removed today? This one, you just may need to exercise a little bit more.

### Are there going to be robot, AI powered doctors?

**Scott:** Or strap you into a chair dentists that do your dental work for you?

**Susan:** Well the whole thing has been a growing thing for a long time and, one of the biggest problems, I understand, in that field is latency. You know, a thousand miles, speed of light and all the equipment in between means, if you're going to move a scalpel and you've got a little bit of a delay there, machine learning could enable that a lot more. Again, getting to the point where the surgeon is maybe doing more about guiding what's going to go on and not exactly doing what's going to go on. It does the perfect stitch for them, they don't actually have to do it themselves.

**Scott:** Do a perfect stitch here and then, do a perfect stitch here.

**Susan:** Exactly. Cauterize over there. I saw a while ag, a really cool thing where they were taking imagery of a beating heart and fixing it with, I think there was like some sort of strobe light that would sync up to it so the doctor would see it synced up and then the scalpel would actually, the tip of the scalpel would move to stay the same amount away from the beating heart so that it looks like it's a still heart and they can actually do surgery in real time on a beating heart.

**Susan:** That is the future of medicine. There's a competition to basically build the tricorder, you know, like every single year they try to incorporate more and more of those things into it and, it only makes sense.

**Susan:** Don't you want your doctor to be able to come in and just go, "Done." You didn't have to set up some sort of appointment and there it is.

**Scott:** Scientific advancement might start coming quicker too as ML and AI just really starts getting applied and used just like electricity did in the 1900's or, people figuring out radioactivity.

In 10 years try to find a researcher that's not using machine learning to analyze data. It's going to become like water to people.

**Susan:** Well that was your world, teasing a weak signal out using machine learning techniques.

**Scott:** Absolutely. You could try to set up rules and write them but it becomes hard because there are all these exceptions. It might be better if I just tell it: "That's right, that's wrong, that's right, that's wrong. If this is of that type, that's of this type." Then you just do that a few thousand times and then say, "Figure it out yourself." You pick all the parameters in order to satisfy that and it works very well. And, it totally changes how you think about the world. I could spend all my time writing an algorithm or, I could spend all my time getting relevant data and labeling it and then, how is that going to turn out in the end? We're seeing over and over that spending the time on the algorithm is not usually the best option unless you have a very small amount of data.

**Susan:** Well, you know, there's a truism in the machine learning world and, we've kind of hit this before but, data will live forever, your algorithm likely won't.

**Scott:** It always gets better.

**Susan:** The algorithm is [what makes you money right now](https://blog.deepgram.com/ai-show-different-types-of-machine-learning/) but, I can almost guarantee you, 10 years from now, it's not going to be that same model structure, even, fundamental technology. But, you'll probably keep going back to the dataset that you collected.

**Scott:** You see this all over the place. The academic datasets and texts and images and speech that have existed for the past 40 years are still used to train models today.

## What does your AI Utopia look like?

**Scott:** So for my Utopia I want my robot friend. I don't know if it's a phone, if it's a physical thing that can roll around and dance or something stupid but, you know, something that you can talk to and it does stuff for you. Maybe it doesn't have to physically do it for you but, call somebody up or schedule a cake to be ordered or pick up donuts o, suggest food. You're actually like, "I like that, I'm glad I didn't have to go do that discovery. This is great, you know? Tell me more, friend." That will be really dope for me. What about you?

**Susan:** My personal, I like the travel aspect. Personally, that's driven a large chunk of my life - the freedom to go places easily and see places easily.

**Scott:** Teleporter. You're sleeping, you come in and out of consciousness and you wake up in a new place. Hey, that's teleporting man, if you can get moved while you're sleeping.

**Susan:** One of my best travel experiences was we were in Seville in Southern Spain and, we got a night train to Barcelona. We were dead tired because, long story but, we get on this train, we fall asleep in a nice comfortable sleeping car, and we woke up to the Catalina coast with the sunrise. It was like, "This is what I want for every trip."

**Scott:** All traveling should be like this.

**Susan:** It should be the same thing, we're going to Yellowstone or, going to Grand Canyon or just going skiing. It's like," I'm going to fall asleep at the end of a normal day. Those dead hours that I'm not conscious of the world, use them productively, get me somewhere cool." Get me to wake up at a great place every day and I'll be happy. That to me is a really, really huge thing.

**Scott:** Well we should ask our listeners, what do you think will make the most positive impact? What are the things you're excited about? We'd love to hear about it.`, "html": '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/576097014&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />\n<p><strong>Scott:</strong> Welcome to the AI show. Today we\u2019re asking the question, the very big question. What will the AI Utopia look like?</p>\n<p><strong>Susan:</strong> We were a little negative, Debbie Downer kind of not so happy on the <a href="https://blog.deepgram.com/what-does-the-ai-dystopia-look-like-ai-show/">last podcast</a>.</p>\n<p><strong>Scott:</strong> Why be so negative, man?</p>\n<p><strong>Susan:</strong> Things are going to destroy your life but, man, are there some cool things that it\u2019s going to do for us.</p>\n<p><strong>Scott:</strong> Yeah. Like what?</p>\n<p><strong>Susan:</strong> Oh, I\u2019m just looking for all the easy ones, you\u2019re going to live longer. Do you want to live longer, Scott?</p>\n<h2 id="hows-ai-going-to-help-us-live-longer">How\u2019s AI going to help us live longer?</h2>\n<p><strong>Susan:</strong> Bioinformatics. NVIDIA had this really cool demo last year where they took an MRI or something and used machine learning to turn it into a 3D view. You know, automatically segmenting out organs and all sorts of stuff. I mean, this is just like the level one stuff.</p>\n<p><strong>Scott:</strong> I\u2019m just going to give you a better view.</p>\n<p><strong>Susan:</strong> Exactly.</p>\n<p><strong>Scott:</strong> Take this thing that used to be slices, turn it into something that you can rotate around and look at it and be like, \u201COh, there it is.\u201D</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976828/blog/ai-show-what-will-the-ai-utopia-look-like/bos-luk.png" alt="bosluk"></p>\n<p><em>An MRI image of a person with an arachnoid cyst in their left, inferior frontal lobe.</em></p>\n<p><strong>Susan:</strong> It\u2019s amazing. Even without being a doctor you can look at some of the stuff now and say, \u201CThat\u2019s clearly not supposed to be there, you may want to get that looked at.\u201D</p>\n<p><strong>Scott:</strong> Well, speaking of NVIDIA, they use AI now to do <a href="https://en.wikipedia.org/wiki/Ray_tracing_(graphics)">ray tracing</a> a lot better. Ray tracing allows you to do graphics better. With it you figure out a few things but then fill in the rest using AI and they can speed everything up, make it look awesome</p>\n<p><strong>Susan:</strong> Let\u2019s get to brass tacks here. Better video games equals better life.</p>\n<p><strong>Scott:</strong> Everybody likes that one.</p>\n<p><strong>Susan:</strong> The world is just wide open for amazing new things, transformative things. Pretty much everybody has seen cars driving around their city mapping everything around. We all know the autonomous revolution is going to come upon us, but there\u2019s so many cool things that it\u2019s going to enable.</p>\n<p><strong>Scott:</strong> The cars drive you around, you can take a nap.</p>\n<p><strong>Susan:</strong> I\u2019m not going to lie, there\u2019s been a couple of evenings where I wanted a responsible vehicle to take me home and, you know, that will be nice.</p>\n<p><strong>Scott:</strong> The car hasn\u2019t had a few\u2026</p>\n<p><strong>Susan:</strong> Exactly. I think you know what I\u2019m talking about, Scott.</p>\n<p><strong>Scott:</strong> Sure, you were just sleepy.</p>\n<p><strong>Susan:</strong> How cool would it be to get into your car after work on a Friday and then, you know, stretch out your arms like this in the nice wide open space because you don\u2019t have the driving steering wheel and all there. You know, pull a blanket over yourself and, wake up on the other side of the country, well, not quite but, you know, wake up a thousand miles away.</p>\n<p><strong>Scott:</strong> Hey, we\u2019re in San Francisco, why not end up in Denver.</p>\n<p><strong>Susan:</strong> I\u2019m going to go skiing tomorrow.</p>\n<p><strong>Scott:</strong> It\u2019s a little far but, yeah.</p>\n<p><strong>Susan:</strong> But just take me there and wake me up every once in a while for a nice little break here and there.</p>\n<p><strong>Scott:</strong> Shake the car a little bit. \u201COkay, I\u2019m up, I\u2019m up, what?\u201D</p>\n<p><strong>Susan:</strong> That\u2019s talking about you and me but, what about Grandma and Grandpa? Could you just imagine the amazing freedom that they will have? I don\u2019t know about your particular extended family there but, I know that my grandparents basically reach a day when it\u2019s probably not a good day for them to drive, right?</p>\n<p><strong>Scott:</strong> Did you have that conversation?</p>\n<p><strong>Susan:</strong> Yeah and the day before they\u2019re good; the day after, probably they\u2019re not. This independence thing falls off so quickly and yet, if you can have self driving cars then they can be more gradual. You\u2019ll still be programming the car to get them where they\u2019re going probably. You\u2019ll be getting the phone call, \u201CHow do you tell it to go to the store?\u201D</p>\n<p><strong>Scott:</strong> One of my favorite Uber for X companies out there or, there are two companies, Silver Car and, GoGoGrandparent.</p>\n<p><strong>Susan:</strong> I like it.</p>\n<p><strong>Scott:</strong> Basically Uber for old people, which is awesome. But, their great viral marketing technique was not Facebook ads or videos or anything like that. It was postcards that you would send to your friends. Such a good idea.</p>\n<p><strong>Susan:</strong> I love it.</p>\n<p><strong>Scott:</strong> Why not have the grandparents get in the AI car? Now you don\u2019t have to have the human driving you around anymore</p>\n<p><strong>Susan:</strong> They can still make it to Sunday dinners.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976829/blog/ai-show-what-will-the-ai-utopia-look-like/A-Swedish-American-family-in-a-small-Minnesota-tow.jpg" alt="dindin"></p>\n<p><strong>Scott:</strong> Exactly. Take a trip to go shopping, do all of that.</p>\n<p><strong>Susan:</strong> So what do you think, Scott, what\u2019s a big area you\u2019re thinking of?</p>\n<p><strong>Scott:</strong> I\u2019m really big on my life becoming easier, that would be awesome. You get in your car and you\u2019re about to drive somewhere and you have to fumble with your Google maps and put in a stupid address for it and be like, \u201CNo, not that address, this other address.\u201D And, \u201COh, I also want to make a stop along the way to go get some donuts or cookies or, whatever, because, hey I\u2019m going to this meeting.\u201D Why can\u2019t I make all this easier, just talk to it like a human or it just knows that, \u201CHey, it\u2019s nine o\u2019clock and, Scott\u2019s going to work.\u201D</p>\n<p><strong>Susan:</strong> \u201CShould we stop at the coffee shop, Scott?\u201D Politely ask.</p>\n<p><strong>Scott:</strong> \u201CNo, it\u2019s okay.\u201D</p>\n<p><strong>Susan:</strong> \u201CMaybe not today.\u201D</p>\n<p><strong>Scott:</strong> But, it suggests a really good thing, bring in donuts or this, \u201CI already called ahead,\u201D you know? Oh, great, all we have to do is stop by there.</p>\n<p><strong>Susan:</strong> \u201CYou told me last time your coworkers really appreciated you bringing in donuts.\u201D</p>\n<p><strong>Scott:</strong> Yeah, exactly. \u201CI heard,\u201D you know, \u201Cbecause I was present.\u201D</p>\n<p><strong>Susan:</strong> Through the AI grapevine.</p>\n<p><strong>Scott:</strong> I was present because your phone was present and it noticed, you know, that everybody really liked that and so maybe we should do that again.</p>\n<p><strong>Susan:</strong> People are happier with donuts.</p>\n<p><strong>Scott:</strong> We\u2019ve already kind of noticed that shopping has become easier because of technology. There\u2019s a lot of things that\u2019ve become easier. You still have lots of annoying things that you have to deal with in life and AI won\u2019t take care of all of them, but there\u2019s a lot that I think it could help with.</p>\n<p>Food is another big one for people. Not just agriculture - we should get there - but also, \u201CWhat are we going to eat tonight?\u201D \u201COh, I don\u2019t know.\u201D</p>\n<p><strong>Susan:</strong> If AI can solve that problem, how many more marriages would be saved?</p>\n<h2 id="solving-the-discovery-problem">Solving the discovery problem</h2>\n<p><strong>Scott:</strong> It\u2019s a discovery problem in a lot of ways, right? If this machine learning program was able to give you something that you guys would both agree on, that\u2019s new, that\u2019s interesting, that\u2019s great.</p>\n<p>And not only that, it suggests a couple of options for that. You probably would want this, this and, this. And actually, I would want that, let\u2019s get that, let\u2019s get that, let\u2019s just see what happens.</p>\n<p><strong>Scott:</strong> And then we can poo poo it later, we can blame the machine.</p>\n<p><strong>Susan:</strong> Exactly, yeah, offloading blame.</p>\n<p><strong>Scott:</strong> Exactly. The machine did it.</p>\n<p><strong>Susan:</strong> I\u2019m loving the offloading blame right now.</p>\n<h2 id="what-about-agriculture">What about agriculture?</h2>\n<p><strong>Susan:</strong> Agriculture is rife with disruption for AI in very amazingly good ways. One of my big hopes is that we will re-enable the small farmer again, and that is because when you look at big agriculture, they\u2019re all about taking huge tracts of land and trying to make it look very similar and not flatten it all out, grow the exact same crop and because you get the economies of scale, you get everything the same.</p>\n<p><strong>Scott:</strong> Yeah, farming is hard. There\u2019s not a super high yield, food doesn\u2019t cost all that much so you have to do a whole bunch of it and you have to do it cheaply.</p>\n<p><strong>Susan:</strong> It takes a lot of intelligence and a whole lot of work to deal with any kind of difference.</p>\n<p><strong>Scott:</strong> Situational awareness as well.</p>\n<p><strong>Susan:</strong> Machine learning can help take that load off. Imagine now you only have 10 or 15 acres and it\u2019s got hills and nooks and crannies and all sorts of different stuff. The dirt over here is slightly different than the dirt over there. Machine learning can help learn those differences and tell you, \u201CPlant these crops there and plant those crops there.\u201D</p>\n<p><img src="https://images.unsplash.com/photo-1429991889170-afd56b2a1210?ixlib=rb-1.2.1&#x26;ixid=eyJhcHBfaWQiOjEyMDd9&#x26;auto=format&#x26;fit=crop&#x26;w=800&#x26;q=60" alt="farm"></p>\n<p><strong>Susan:</strong> Then you take it to the next level - the automated machinery of the future could help automate doing all the farm tasks in a much more varied world.</p>\n<p><strong>Scott:</strong> Well it decides what to plant where, it goes and harvests it.</p>\n<p><strong>Susan:</strong> I think it\u2019s a guidance thing. I don\u2019t want to fall into the trap of machine learning decides. I think it\u2019s an enabling thing more than \u201Cthis is what you shall have on your land.\u201D</p>\n<p><strong>Scott:</strong> Well, I think it\u2019s more like, \u201CHere\u2019s the plan, is that okay?\u201D</p>\n<p><strong>Susan:</strong> \u201CYeah, go ahead, go do it, go to town.\u201D That will allow farmers, like any profession and any professional to focus more on the harder pieces of it. Start taking care of the average, give me a rough plan and maybe I\u2019ll tweak it for those little interesting things. I predict prices on this are going to be different, or, maybe farm costs over here are going to be different for things the machine can\u2019t take into account and tweak it that way. And those are just a few of the small things. You know, talk about distribution that\u2019s going to be revolutionized in farming. It\u2019s going to be faster to your table, it\u2019s going to be fresher to your table, it\u2019s going to be more diverse. If you do enable utilizing more of the land, you\u2019re going to enable a more diverse set of crops to come to market.</p>\n<p><strong>Scott:</strong> What about robots cooking?</p>\n<p><strong>Susan:</strong> My wife went to the <a href="http://creator.rest/">robot hamburger joint</a> here that opened up in San Francisco.</p>\n<p><strong>Scott:</strong> Good?</p>\n<p><strong>Susan:</strong> I think her take was, \u201COkay.\u201D</p>\n<p><strong>Scott:</strong> Well, hey, that\u2019s pretty good, right?</p>\n<p><strong>Susan:</strong> But they\u2019ve just opened up.</p>\n<p><strong>Scott:</strong> I would assume the first one is like, \u201CNo, it\u2019s disgusting, you don\u2019t want to go there.\u201DBut, hey, \u201CNo, it\u2019s okay, it was fine.\u201D That\u2019s a pretty ringing endorsement then.</p>\n<p><strong>Susan:</strong> Yeah, ringing endorsement for a burger from scratch. Well their big thing, I think, was it was literally ground exactly at that point, the moment it was ordered. But, when they grind it they grind it in a way so that it makes it more tender because, now they can literally control as little pieces of meat are put together.</p>\n<p><strong>Scott:</strong> Well, that\u2019s cute. Everybody has to have a story so, yeah, that makes sense.</p>\n<h2 id="what-about-the-medical-perspective">What about the medical perspective?</h2>\n<p><strong>Scott:</strong> We\u2019re all going to live longer, we already heard that.</p>\n<p><strong>Susan:</strong> Well, let\u2019s talk about you and monitoring you and what you can get out of that. Forget big medicine. Let\u2019s not talk about being able to segment the body and find organs and find all sorts of things wrong with you. Let\u2019s hook up an AI that monitors you daily, takes your pulse, figures out your heart rate and your respiration and how much you\u2019re easting or, what activities you\u2019re doing and starts figuring out whether or not you feel good or bad and how to tweak you to get better.</p>\n<p><strong>Scott:</strong> And motivate you to get better.</p>\n<p><strong>Susan:</strong> Wait five more minutes or, right now is the exact perfect time. You know, last time you did exercises these were the ones that seemed to help you more than those, you know? The 16 ounce curls worked best only once a week, not five times a week.</p>\n<p><strong>Susan:</strong> But, monitoring those things that actually make a difference in your life.</p>\n<p><strong>Scott:</strong> I could see how this would be life or death for children.</p>\n<p><strong>Susan:</strong> Oh man.</p>\n<p><strong>Scott:</strong> Start put a monitoring collar on your child. That\u2019s the upgrade.</p>\n<p>But, it tells you, are they alive or dead at any point in time? Are they drowning? Are they in distress? Take all the worry off. Now you can have free range kids again.</p>\n<p><strong>Susan:</strong> Just let them go.</p>\n<p><strong>Scott:</strong> Just let them go because, you know, you could do this in the past, you could put all these sensors on them but then, what would you do with all the data? You need some AI to tell you, well, actually, this is fine, they\u2019re fine. This is the bad stuff. Oh, whoa, something\u2019s going on.</p>\n<p><strong>Susan:</strong> They probably will not be eaten by hyenas right now.</p>\n<p><strong>Scott:</strong> It serves a purpose of a scream, you know, a little scream detector. It could be good.</p>\n<h3 id="lets-talk-transportation">Let\u2019s talk transportation</h3>\n<p><strong>Susan:</strong> So, you know, I have a little bit of an aviation background.</p>\n<p><strong>Scott:</strong> Just a little bit. Navy pilot, no big deal.</p>\n<p><strong>Susan:</strong> You know, people think automation is just taking someone out of the cockpit, they don\u2019t think that it gets rid of the cockpit.</p>\n<p>Often people don\u2019t really realize what that means for the redesign of an aircraft.</p>\n<p><strong>Scott:</strong> Why would they want to do that? Why would you want to take people out of the cockpit?</p>\n<p><strong>Susan:</strong> Well, ignoring the fact that the majority of problems actually happen between the yolk and the seat.</p>\n<p><strong>Scott:</strong> Meaning the person.</p>\n<p><strong>Susan:</strong> Correct, most aviation problems are caused by the human operator. From a design perspective, a lot of the things that you don\u2019t realize are designed on aircraft that cause a lot of extra weight and structure have everything to do with just pilots being able to see. For example:</p>\n<blockquote>\n<p>I\u2019ve got to be able to see the runway and that means I have to do all sorts of crazy things with flaps and stuff like that just to be able to land and take off the plane, just so I can see the runway. If there\u2019s a machine, it doesn\u2019t need to see in the same way I do.</p>\n</blockquote>\n<p><strong>Scott:</strong> It would be lighter, more efficient, less complicated?</p>\n<p><strong>Susan:</strong> You can also design it for a better regime of crews as opposed to the landing and take off areas. Not as challenging design as it was before.</p>\n<p><strong>Scott:</strong> Not just autonomous vehicles but, airplanes. That doesn\u2019t have to be remote controlled.</p>\n<p><strong>Susan:</strong> Exactly. The same argument now comes over to the self driving car world. You can see it there too. If you got rid of the center, you know the front steering wheel and all the stuff on the console and all that stuff, you\u2019d get a lot more room.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976830/blog/ai-show-what-will-the-ai-utopia-look-like/columnless-cart.jpg" alt="car"></p>\n<p><strong>Scott:</strong> Got room to lounge, man.</p>\n<p><strong>Susan:</strong> And this is not a plug for Tesla but, one of their things is, \u201CHey, because we\u2019ve gotten rid of a lot of the engine components, there\u2019s a lot more room inside the cabin.\u201D Well, now you get even more of those components gone and there\u2019s even more you can do.</p>\n<p><strong>Scott:</strong> It\u2019s like a hotel room in there.</p>\n<p><strong>Susan:</strong> So, again, going back to the aviation world, you can get small airplanes that go longer, further distances and that just really opens up travel.</p>\n<p><strong>Scott:</strong> Well, then does everyone live in a city now? Like, oh, maybe you go further away, more urban sprawl but, is that a bad thing?</p>\n<p><strong>Susan:</strong> Depends on what you want. There\u2019s a lot of stuff I think that could happen. Drone delivery of your milk and eggs out of nowhere.</p>\n<p><strong>Scott:</strong> Amazon Prime for everybody.</p>\n<p><strong>Susan:</strong> Yeah, I\u2019ve got my own personal lake 300 miles away and here comes the drone.</p>\n<p><strong>Scott:</strong> The land of 10,000 lakes and one of them is mine.</p>\n<p><strong>Susan:</strong> That lakefront property becomes a lot more valuable as Amazon starts delivering there. You\u2019re no longer disconnected.</p>\n<h3 id="think-about-the-energy-sector">Think about the energy sector</h3>\n<p><strong>Scott:</strong> I think also in the energy sector there\u2019s going to be a big deal. For example, better use of the grid. This is already kind of happening but, better systems designed for that and then, systems to switch between, choose what you should do, price it, et cetera, make it more efficient. But also, machine learning techniques to find out new power sources. So, what I mean is, <a href="https://blog.deepgram.com/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/">fusion has been a promise for a long time</a> and, it actually is really close to happening and it\u2019s like, man, what\u2019s the real problem here? It might be the people. And saying, \u201CHey, here are the laws of physics and here are the constraints that we have, it\u2019s probably going to be real complicated to make this work. Can we throw some computing power and a machine learning algorithm to guess at what the best type of fusion device would be?\u201D And, there\u2019s been progress made on this.</p>\n<p><strong>Susan:</strong> Lots of progress. Yeah, I mean, I\u2019m actually hearing the eternal joke of fusion\u2019s only 20 years away.</p>\n<p><strong>Scott:</strong> Yeah, 20, 20 years away. Now maybe It might actually be 20 years away.</p>\n<p><strong>Susan:</strong> They\u2019re talking about hitting equilibrium points, you know, equal power points or, I forgot that whatever it\u2019s called.</p>\n<p><strong>Scott:</strong> Over unity.</p>\n<p><strong>Susan:</strong> Yeah, over unity, there we go and, five, ten years maybe. Now actually capturing back the energy there is a different thing but, you know, it puts out more than you put into it. That\u2019s a pretty cool thing.</p>\n<p><strong>Scott:</strong> Absolutely.</p>\n<p><strong>Susan:</strong> I\u2019m super, super stoked.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976831/blog/ai-show-what-will-the-ai-utopia-look-like/TOKAMAK.jpg" alt="tokamak"></p>\n<p><em>A picture of TOKAMAK at the <a href="https://www.pppl.gov/">Princeton Plasma Physics Laboratory (PPPL)</a></em></p>\n<p><strong>Scott:</strong> I mean if you\u2019re turning into a steam thing and you just need to cool it down and whatnot, it can\u2019t be too hard to do that but, you know, heat is kind of easy to transport.</p>\n<p><strong>Susan:</strong> But it\u2019s all wrapped in those super-conducting magnets. They get heat from in there, outside of there \u2026</p>\n<p><strong>Scott:</strong> You\u2019ve got to pipe it out, yeah.</p>\n<p><strong>Susan:</strong> I\u2019m no physics guy.</p>\n<p><strong>Scott:</strong> Let the machine learning algorithm figure out the problems. Tesla\u2019s Power wall?</p>\n<p><strong>Susan:</strong> They\u2019ve done some pretty cool stuff with big batteries in Australia that\u2019s really paid off, but their next set of big projects are all about decentralized power. The power wall in the home but also becoming now a municipal power grid because all these things are linked together intelligently to take load and push load and all sorts of different stuff. They\u2019re really trying to reshape the grid and, to do that, you\u2019re going to have to have some very intelligent controls because it only takes a little bit, everybody deciding at the exact same moment to turn on their toaster, to really throw a system out of whack. You know, talk about civil disobedience, you just put on a big billboard at 6:00PM on Tuesday, every single person go make toast. And then, bam.</p>\n<p><strong>Scott:</strong> I love this idea. I love this idea.</p>\n<p><strong>Susan:</strong> Managing a grid is a lot more complicated than people think and these types of algorithms could potentially really, really cut down on problems with spikes like that.</p>\n<p><strong>Scott:</strong> Like I\u2019m noticing a lot of toaster sales. People talking about toasters going on around here, I\u2019m a little fearful. You may have to crank it up.</p>\n<p><strong>Susan:</strong> Right after we\u2019re done here I\u2019m going to open up my browser and I\u2019m going to see an advertisement to sell me a toaster.</p>\n<p><strong>Scott:</strong> I think there\u2019s some things in the medical side that we didn\u2019t talk about like, identifying cancer, or like, being able to go into this imagery a lot better and tell you what\u2019s going on. You touched on like three dimensional reconstruction and being able to look at it better but, you can also have areas pointed out to you like, \u201CWell, this looks like a problem.\u201D</p>\n<p><strong>Susan:</strong> This is not your standard kidney. One of the classic things in facial recognition, the first thing you always learn about is using <a href="https://en.wikipedia.org/wiki/Principal_component_analysis">principal component analysis</a> or something along those lines to say, \u201CThis is what the standard face looks like\u201D so, recognizing faces and recognizing those things. You can do that with, effectively, a kidney but, with a lot better results as you use much stronger techniques. And, now you walk in for your weekly, your monthly, your yearly exam and, you quickly zip around, do an MRI or whatever technique they\u2019re going to use to scan the inside of your body and, poof, areas in you are marked with little highlights. You know, green, yellow, red, black.</p>\n<p><strong>Scott:</strong> Ooh, shouldn\u2019t have done that when I was 18, yeah.</p>\n<p><strong>Susan:</strong> It\u2019s like you may want to get that removed today? This one, you just may need to exercise a little bit more.</p>\n<h3 id="are-there-going-to-be-robot-ai-powered-doctors">Are there going to be robot, AI powered doctors?</h3>\n<p><strong>Scott:</strong> Or strap you into a chair dentists that do your dental work for you?</p>\n<p><strong>Susan:</strong> Well the whole thing has been a growing thing for a long time and, one of the biggest problems, I understand, in that field is latency. You know, a thousand miles, speed of light and all the equipment in between means, if you\u2019re going to move a scalpel and you\u2019ve got a little bit of a delay there, machine learning could enable that a lot more. Again, getting to the point where the surgeon is maybe doing more about guiding what\u2019s going to go on and not exactly doing what\u2019s going to go on. It does the perfect stitch for them, they don\u2019t actually have to do it themselves.</p>\n<p><strong>Scott:</strong> Do a perfect stitch here and then, do a perfect stitch here.</p>\n<p><strong>Susan:</strong> Exactly. Cauterize over there. I saw a while ag, a really cool thing where they were taking imagery of a beating heart and fixing it with, I think there was like some sort of strobe light that would sync up to it so the doctor would see it synced up and then the scalpel would actually, the tip of the scalpel would move to stay the same amount away from the beating heart so that it looks like it\u2019s a still heart and they can actually do surgery in real time on a beating heart.</p>\n<p><strong>Susan:</strong> That is the future of medicine. There\u2019s a competition to basically build the tricorder, you know, like every single year they try to incorporate more and more of those things into it and, it only makes sense.</p>\n<p><strong>Susan:</strong> Don\u2019t you want your doctor to be able to come in and just go, \u201CDone.\u201D You didn\u2019t have to set up some sort of appointment and there it is.</p>\n<p><strong>Scott:</strong> Scientific advancement might start coming quicker too as ML and AI just really starts getting applied and used just like electricity did in the 1900\u2019s or, people figuring out radioactivity.</p>\n<p>In 10 years try to find a researcher that\u2019s not using machine learning to analyze data. It\u2019s going to become like water to people.</p>\n<p><strong>Susan:</strong> Well that was your world, teasing a weak signal out using machine learning techniques.</p>\n<p><strong>Scott:</strong> Absolutely. You could try to set up rules and write them but it becomes hard because there are all these exceptions. It might be better if I just tell it: \u201CThat\u2019s right, that\u2019s wrong, that\u2019s right, that\u2019s wrong. If this is of that type, that\u2019s of this type.\u201D Then you just do that a few thousand times and then say, \u201CFigure it out yourself.\u201D You pick all the parameters in order to satisfy that and it works very well. And, it totally changes how you think about the world. I could spend all my time writing an algorithm or, I could spend all my time getting relevant data and labeling it and then, how is that going to turn out in the end? We\u2019re seeing over and over that spending the time on the algorithm is not usually the best option unless you have a very small amount of data.</p>\n<p><strong>Susan:</strong> Well, you know, there\u2019s a truism in the machine learning world and, we\u2019ve kind of hit this before but, data will live forever, your algorithm likely won\u2019t.</p>\n<p><strong>Scott:</strong> It always gets better.</p>\n<p><strong>Susan:</strong> The algorithm is <a href="https://blog.deepgram.com/ai-show-different-types-of-machine-learning/">what makes you money right now</a> but, I can almost guarantee you, 10 years from now, it\u2019s not going to be that same model structure, even, fundamental technology. But, you\u2019ll probably keep going back to the dataset that you collected.</p>\n<p><strong>Scott:</strong> You see this all over the place. The academic datasets and texts and images and speech that have existed for the past 40 years are still used to train models today.</p>\n<h2 id="what-does-your-ai-utopia-look-like">What does your AI Utopia look like?</h2>\n<p><strong>Scott:</strong> So for my Utopia I want my robot friend. I don\u2019t know if it\u2019s a phone, if it\u2019s a physical thing that can roll around and dance or something stupid but, you know, something that you can talk to and it does stuff for you. Maybe it doesn\u2019t have to physically do it for you but, call somebody up or schedule a cake to be ordered or pick up donuts o, suggest food. You\u2019re actually like, \u201CI like that, I\u2019m glad I didn\u2019t have to go do that discovery. This is great, you know? Tell me more, friend.\u201D That will be really dope for me. What about you?</p>\n<p><strong>Susan:</strong> My personal, I like the travel aspect. Personally, that\u2019s driven a large chunk of my life - the freedom to go places easily and see places easily.</p>\n<p><strong>Scott:</strong> Teleporter. You\u2019re sleeping, you come in and out of consciousness and you wake up in a new place. Hey, that\u2019s teleporting man, if you can get moved while you\u2019re sleeping.</p>\n<p><strong>Susan:</strong> One of my best travel experiences was we were in Seville in Southern Spain and, we got a night train to Barcelona. We were dead tired because, long story but, we get on this train, we fall asleep in a nice comfortable sleeping car, and we woke up to the Catalina coast with the sunrise. It was like, \u201CThis is what I want for every trip.\u201D</p>\n<p><strong>Scott:</strong> All traveling should be like this.</p>\n<p><strong>Susan:</strong> It should be the same thing, we\u2019re going to Yellowstone or, going to Grand Canyon or just going skiing. It\u2019s like,\u201D I\u2019m going to fall asleep at the end of a normal day. Those dead hours that I\u2019m not conscious of the world, use them productively, get me somewhere cool.\u201D Get me to wake up at a great place every day and I\u2019ll be happy. That to me is a really, really huge thing.</p>\n<p><strong>Scott:</strong> Well we should ask our listeners, what do you think will make the most positive impact? What are the things you\u2019re excited about? We\u2019d love to hear about it.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/ai-show-what-will-the-ai-utopia-look-like/index.md" };
function rawContent() {
  return `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/576097014&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

**Scott:** Welcome to the AI show. Today we're asking the question, the very big question. What will the AI Utopia look like?

**Susan:** We were a little negative, Debbie Downer kind of not so happy on the [last podcast](https://blog.deepgram.com/what-does-the-ai-dystopia-look-like-ai-show/).

**Scott:** Why be so negative, man?

**Susan:** Things are going to destroy your life but, man, are there some cool things that it's going to do for us.

**Scott:** Yeah. Like what?

**Susan:** Oh, I'm just looking for all the easy ones, you're going to live longer. Do you want to live longer, Scott?

## How's AI going to help us live longer?

**Susan:** Bioinformatics. NVIDIA had this really cool demo last year where they took an MRI or something and used machine learning to turn it into a 3D view. You know, automatically segmenting out organs and all sorts of stuff. I mean, this is just like the level one stuff.

**Scott:** I'm just going to give you a better view.

**Susan:** Exactly.

**Scott:** Take this thing that used to be slices, turn it into something that you can rotate around and look at it and be like, "Oh, there it is."

![bosluk](https://res.cloudinary.com/deepgram/image/upload/v1661976828/blog/ai-show-what-will-the-ai-utopia-look-like/bos-luk.png)

*An MRI image of a person with an arachnoid cyst in their left, inferior frontal lobe.*

**Susan:** It's amazing. Even without being a doctor you can look at some of the stuff now and say, "That's clearly not supposed to be there, you may want to get that looked at."

**Scott:** Well, speaking of NVIDIA, they use AI now to do [ray tracing](https://en.wikipedia.org/wiki/Ray_tracing_(graphics)) a lot better. Ray tracing allows you to do graphics better. With it you figure out a few things but then fill in the rest using AI and they can speed everything up, make it look awesome

**Susan:** Let's get to brass tacks here. Better video games equals better life.

**Scott:** Everybody likes that one.

**Susan:** The world is just wide open for amazing new things, transformative things. Pretty much everybody has seen cars driving around their city mapping everything around. We all know the autonomous revolution is going to come upon us, but there's so many cool things that it's going to enable.

**Scott:** The cars drive you around, you can take a nap.

**Susan:** I'm not going to lie, there's been a couple of evenings where I wanted a responsible vehicle to take me home and, you know, that will be nice.

**Scott:** The car hasn't had a few...

**Susan:** Exactly. I think you know what I'm talking about, Scott.

**Scott:** Sure, you were just sleepy.

**Susan:** How cool would it be to get into your car after work on a Friday and then, you know, stretch out your arms like this in the nice wide open space because you don't have the driving steering wheel and all there. You know, pull a blanket over yourself and, wake up on the other side of the country, well, not quite but, you know, wake up a thousand miles away.

**Scott:** Hey, we're in San Francisco, why not end up in Denver.

**Susan:** I'm going to go skiing tomorrow.

**Scott:** It's a little far but, yeah.

**Susan:** But just take me there and wake me up every once in a while for a nice little break here and there.

**Scott:** Shake the car a little bit. "Okay, I'm up, I'm up, what?"

**Susan:** That's talking about you and me but, what about Grandma and Grandpa? Could you just imagine the amazing freedom that they will have? I don't know about your particular extended family there but, I know that my grandparents basically reach a day when it's probably not a good day for them to drive, right?

**Scott:** Did you have that conversation?

**Susan:** Yeah and the day before they're good; the day after, probably they're not. This independence thing falls off so quickly and yet, if you can have self driving cars then they can be more gradual. You'll still be programming the car to get them where they're going probably. You'll be getting the phone call, "How do you tell it to go to the store?"

**Scott:** One of my favorite Uber for X companies out there or, there are two companies, Silver Car and, GoGoGrandparent.

**Susan:** I like it.

**Scott:** Basically Uber for old people, which is awesome. But, their great viral marketing technique was not Facebook ads or videos or anything like that. It was postcards that you would send to your friends. Such a good idea.

**Susan:** I love it.

**Scott:** Why not have the grandparents get in the AI car? Now you don't have to have the human driving you around anymore

**Susan:** They can still make it to Sunday dinners.

![dindin](https://res.cloudinary.com/deepgram/image/upload/v1661976829/blog/ai-show-what-will-the-ai-utopia-look-like/A-Swedish-American-family-in-a-small-Minnesota-tow.jpg)

**Scott:** Exactly. Take a trip to go shopping, do all of that.

**Susan:** So what do you think, Scott, what's a big area you're thinking of?

**Scott:** I'm really big on my life becoming easier, that would be awesome. You get in your car and you're about to drive somewhere and you have to fumble with your Google maps and put in a stupid address for it and be like, "No, not that address, this other address." And, "Oh, I also want to make a stop along the way to go get some donuts or cookies or, whatever, because, hey I'm going to this meeting." Why can't I make all this easier, just talk to it like a human or it just knows that, "Hey, it's nine o'clock and, Scott's going to work."

**Susan:** "Should we stop at the coffee shop, Scott?" Politely ask.

**Scott:** "No, it's okay."

**Susan:** "Maybe not today."

**Scott:** But, it suggests a really good thing, bring in donuts or this, "I already called ahead," you know? Oh, great, all we have to do is stop by there.

**Susan:** "You told me last time your coworkers really appreciated you bringing in donuts."

**Scott:** Yeah, exactly. "I heard," you know, "because I was present."

**Susan:** Through the AI grapevine.

**Scott:** I was present because your phone was present and it noticed, you know, that everybody really liked that and so maybe we should do that again.

**Susan:** People are happier with donuts.

**Scott:** We've already kind of noticed that shopping has become easier because of technology. There's a lot of things that've become easier. You still have lots of annoying things that you have to deal with in life and AI won't take care of all of them, but there's a lot that I think it could help with.

Food is another big one for people. Not just agriculture - we should get there - but also, "What are we going to eat tonight?" "Oh, I don't know."

**Susan:** If AI can solve that problem, how many more marriages would be saved?

## Solving the discovery problem

**Scott:** It's a discovery problem in a lot of ways, right? If this machine learning program was able to give you something that you guys would both agree on, that's new, that's interesting, that's great.

And not only that, it suggests a couple of options for that. You probably would want this, this and, this. And actually, I would want that, let's get that, let's get that, let's just see what happens.

**Scott:** And then we can poo poo it later, we can blame the machine.

**Susan:** Exactly, yeah, offloading blame.

**Scott:** Exactly. The machine did it.

**Susan:** I'm loving the offloading blame right now.

## What about agriculture?

**Susan:** Agriculture is rife with disruption for AI in very amazingly good ways. One of my big hopes is that we will re-enable the small farmer again, and that is because when you look at big agriculture, they're all about taking huge tracts of land and trying to make it look very similar and not flatten it all out, grow the exact same crop and because you get the economies of scale, you get everything the same.

**Scott:** Yeah, farming is hard. There's not a super high yield, food doesn't cost all that much so you have to do a whole bunch of it and you have to do it cheaply.

**Susan:** It takes a lot of intelligence and a whole lot of work to deal with any kind of difference.

**Scott:** Situational awareness as well.

**Susan:** Machine learning can help take that load off. Imagine now you only have 10 or 15 acres and it's got hills and nooks and crannies and all sorts of different stuff. The dirt over here is slightly different than the dirt over there. Machine learning can help learn those differences and tell you, "Plant these crops there and plant those crops there."

![farm](https://images.unsplash.com/photo-1429991889170-afd56b2a1210?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)

**Susan:** Then you take it to the next level - the automated machinery of the future could help automate doing all the farm tasks in a much more varied world.

**Scott:** Well it decides what to plant where, it goes and harvests it.

**Susan:** I think it's a guidance thing. I don't want to fall into the trap of machine learning decides. I think it's an enabling thing more than "this is what you shall have on your land."

**Scott:** Well, I think it's more like, "Here's the plan, is that okay?"

**Susan:** "Yeah, go ahead, go do it, go to town." That will allow farmers, like any profession and any professional to focus more on the harder pieces of it. Start taking care of the average, give me a rough plan and maybe I'll tweak it for those little interesting things. I predict prices on this are going to be different, or, maybe farm costs over here are going to be different for things the machine can't take into account and tweak it that way. And those are just a few of the small things. You know, talk about distribution that's going to be revolutionized in farming. It's going to be faster to your table, it's going to be fresher to your table, it's going to be more diverse. If you do enable utilizing more of the land, you're going to enable a more diverse set of crops to come to market.

**Scott:** What about robots cooking?

**Susan:** My wife went to the [robot hamburger joint](http://creator.rest/) here that opened up in San Francisco.

**Scott:** Good?

**Susan:** I think her take was, "Okay."

**Scott:** Well, hey, that's pretty good, right?

**Susan:** But they've just opened up.

**Scott:** I would assume the first one is like, "No, it's disgusting, you don't want to go there."But, hey, "No, it's okay, it was fine." That's a pretty ringing endorsement then.

**Susan:** Yeah, ringing endorsement for a burger from scratch. Well their big thing, I think, was it was literally ground exactly at that point, the moment it was ordered. But, when they grind it they grind it in a way so that it makes it more tender because, now they can literally control as little pieces of meat are put together.

**Scott:** Well, that's cute. Everybody has to have a story so, yeah, that makes sense.

## What about the medical perspective?

**Scott:** We're all going to live longer, we already heard that.

**Susan:** Well, let's talk about you and monitoring you and what you can get out of that. Forget big medicine. Let's not talk about being able to segment the body and find organs and find all sorts of things wrong with you. Let's hook up an AI that monitors you daily, takes your pulse, figures out your heart rate and your respiration and how much you're easting or, what activities you're doing and starts figuring out whether or not you feel good or bad and how to tweak you to get better.

**Scott:** And motivate you to get better.

**Susan:** Wait five more minutes or, right now is the exact perfect time. You know, last time you did exercises these were the ones that seemed to help you more than those, you know? The 16 ounce curls worked best only once a week, not five times a week.

**Susan:** But, monitoring those things that actually make a difference in your life.

**Scott:** I could see how this would be life or death for children.

**Susan:** Oh man.

**Scott:** Start put a monitoring collar on your child. That's the upgrade.

But, it tells you, are they alive or dead at any point in time? Are they drowning? Are they in distress? Take all the worry off. Now you can have free range kids again.

**Susan:** Just let them go.

**Scott:** Just let them go because, you know, you could do this in the past, you could put all these sensors on them but then, what would you do with all the data? You need some AI to tell you, well, actually, this is fine, they're fine. This is the bad stuff. Oh, whoa, something's going on.

**Susan:** They probably will not be eaten by hyenas right now.

**Scott:** It serves a purpose of a scream, you know, a little scream detector. It could be good.

### Let's talk transportation

**Susan:** So, you know, I have a little bit of an aviation background.

**Scott:** Just a little bit. Navy pilot, no big deal.

**Susan:** You know, people think automation is just taking someone out of the cockpit, they don't think that it gets rid of the cockpit.

Often people don't really realize what that means for the redesign of an aircraft.

**Scott:** Why would they want to do that? Why would you want to take people out of the cockpit?

**Susan:** Well, ignoring the fact that the majority of problems actually happen between the yolk and the seat.

**Scott:** Meaning the person.

**Susan:** Correct, most aviation problems are caused by the human operator. From a design perspective, a lot of the things that you don't realize are designed on aircraft that cause a lot of extra weight and structure have everything to do with just pilots being able to see. For example:

> I've got to be able to see the runway and that means I have to do all sorts of crazy things with flaps and stuff like that just to be able to land and take off the plane, just so I can see the runway. If there's a machine, it doesn't need to see in the same way I do.

**Scott:** It would be lighter, more efficient, less complicated?

**Susan:** You can also design it for a better regime of crews as opposed to the landing and take off areas. Not as challenging design as it was before.

**Scott:** Not just autonomous vehicles but, airplanes. That doesn't have to be remote controlled.

**Susan:** Exactly. The same argument now comes over to the self driving car world. You can see it there too. If you got rid of the center, you know the front steering wheel and all the stuff on the console and all that stuff, you'd get a lot more room.

![car](https://res.cloudinary.com/deepgram/image/upload/v1661976830/blog/ai-show-what-will-the-ai-utopia-look-like/columnless-cart.jpg)

**Scott:** Got room to lounge, man.

**Susan:** And this is not a plug for Tesla but, one of their things is, "Hey, because we've gotten rid of a lot of the engine components, there's a lot more room inside the cabin." Well, now you get even more of those components gone and there's even more you can do.

**Scott:** It's like a hotel room in there.

**Susan:** So, again, going back to the aviation world, you can get small airplanes that go longer, further distances and that just really opens up travel.

**Scott:** Well, then does everyone live in a city now? Like, oh, maybe you go further away, more urban sprawl but, is that a bad thing?

**Susan:** Depends on what you want. There's a lot of stuff I think that could happen. Drone delivery of your milk and eggs out of nowhere.

**Scott:** Amazon Prime for everybody.

**Susan:** Yeah, I've got my own personal lake 300 miles away and here comes the drone.

**Scott:** The land of 10,000 lakes and one of them is mine.

**Susan:** That lakefront property becomes a lot more valuable as Amazon starts delivering there. You're no longer disconnected.

### Think about the energy sector

**Scott:** I think also in the energy sector there's going to be a big deal. For example, better use of the grid. This is already kind of happening but, better systems designed for that and then, systems to switch between, choose what you should do, price it, et cetera, make it more efficient. But also, machine learning techniques to find out new power sources. So, what I mean is, [fusion has been a promise for a long time](https://blog.deepgram.com/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/) and, it actually is really close to happening and it's like, man, what's the real problem here? It might be the people. And saying, "Hey, here are the laws of physics and here are the constraints that we have, it's probably going to be real complicated to make this work. Can we throw some computing power and a machine learning algorithm to guess at what the best type of fusion device would be?" And, there's been progress made on this.

**Susan:** Lots of progress. Yeah, I mean, I'm actually hearing the eternal joke of fusion's only 20 years away.

**Scott:** Yeah, 20, 20 years away. Now maybe It might actually be 20 years away.

**Susan:** They're talking about hitting equilibrium points, you know, equal power points or, I forgot that whatever it's called.

**Scott:** Over unity.

**Susan:** Yeah, over unity, there we go and, five, ten years maybe. Now actually capturing back the energy there is a different thing but, you know, it puts out more than you put into it. That's a pretty cool thing.

**Scott:** Absolutely.

**Susan:** I'm super, super stoked.

![tokamak](https://res.cloudinary.com/deepgram/image/upload/v1661976831/blog/ai-show-what-will-the-ai-utopia-look-like/TOKAMAK.jpg)

*A picture of TOKAMAK at the [Princeton Plasma Physics Laboratory (PPPL)](https://www.pppl.gov/)*

**Scott:** I mean if you're turning into a steam thing and you just need to cool it down and whatnot, it can't be too hard to do that but, you know, heat is kind of easy to transport.

**Susan:** But it's all wrapped in those super-conducting magnets. They get heat from in there, outside of there ...

**Scott:** You've got to pipe it out, yeah.

**Susan:** I'm no physics guy.

**Scott:** Let the machine learning algorithm figure out the problems. Tesla's Power wall?

**Susan:** They've done some pretty cool stuff with big batteries in Australia that's really paid off, but their next set of big projects are all about decentralized power. The power wall in the home but also becoming now a municipal power grid because all these things are linked together intelligently to take load and push load and all sorts of different stuff. They're really trying to reshape the grid and, to do that, you're going to have to have some very intelligent controls because it only takes a little bit, everybody deciding at the exact same moment to turn on their toaster, to really throw a system out of whack. You know, talk about civil disobedience, you just put on a big billboard at 6:00PM on Tuesday, every single person go make toast. And then, bam.

**Scott:** I love this idea. I love this idea.

**Susan:** Managing a grid is a lot more complicated than people think and these types of algorithms could potentially really, really cut down on problems with spikes like that.

**Scott:** Like I'm noticing a lot of toaster sales. People talking about toasters going on around here, I'm a little fearful. You may have to crank it up.

**Susan:** Right after we're done here I'm going to open up my browser and I'm going to see an advertisement to sell me a toaster.

**Scott:** I think there's some things in the medical side that we didn't talk about like, identifying cancer, or like, being able to go into this imagery a lot better and tell you what's going on. You touched on like three dimensional reconstruction and being able to look at it better but, you can also have areas pointed out to you like, "Well, this looks like a problem."

**Susan:** This is not your standard kidney. One of the classic things in facial recognition, the first thing you always learn about is using [principal component analysis](https://en.wikipedia.org/wiki/Principal_component_analysis) or something along those lines to say, "This is what the standard face looks like" so, recognizing faces and recognizing those things. You can do that with, effectively, a kidney but, with a lot better results as you use much stronger techniques. And, now you walk in for your weekly, your monthly, your yearly exam and, you quickly zip around, do an MRI or whatever technique they're going to use to scan the inside of your body and, poof, areas in you are marked with little highlights. You know, green, yellow, red, black.

**Scott:** Ooh, shouldn't have done that when I was 18, yeah.

**Susan:** It's like you may want to get that removed today? This one, you just may need to exercise a little bit more.

### Are there going to be robot, AI powered doctors?

**Scott:** Or strap you into a chair dentists that do your dental work for you?

**Susan:** Well the whole thing has been a growing thing for a long time and, one of the biggest problems, I understand, in that field is latency. You know, a thousand miles, speed of light and all the equipment in between means, if you're going to move a scalpel and you've got a little bit of a delay there, machine learning could enable that a lot more. Again, getting to the point where the surgeon is maybe doing more about guiding what's going to go on and not exactly doing what's going to go on. It does the perfect stitch for them, they don't actually have to do it themselves.

**Scott:** Do a perfect stitch here and then, do a perfect stitch here.

**Susan:** Exactly. Cauterize over there. I saw a while ag, a really cool thing where they were taking imagery of a beating heart and fixing it with, I think there was like some sort of strobe light that would sync up to it so the doctor would see it synced up and then the scalpel would actually, the tip of the scalpel would move to stay the same amount away from the beating heart so that it looks like it's a still heart and they can actually do surgery in real time on a beating heart.

**Susan:** That is the future of medicine. There's a competition to basically build the tricorder, you know, like every single year they try to incorporate more and more of those things into it and, it only makes sense.

**Susan:** Don't you want your doctor to be able to come in and just go, "Done." You didn't have to set up some sort of appointment and there it is.

**Scott:** Scientific advancement might start coming quicker too as ML and AI just really starts getting applied and used just like electricity did in the 1900's or, people figuring out radioactivity.

In 10 years try to find a researcher that's not using machine learning to analyze data. It's going to become like water to people.

**Susan:** Well that was your world, teasing a weak signal out using machine learning techniques.

**Scott:** Absolutely. You could try to set up rules and write them but it becomes hard because there are all these exceptions. It might be better if I just tell it: "That's right, that's wrong, that's right, that's wrong. If this is of that type, that's of this type." Then you just do that a few thousand times and then say, "Figure it out yourself." You pick all the parameters in order to satisfy that and it works very well. And, it totally changes how you think about the world. I could spend all my time writing an algorithm or, I could spend all my time getting relevant data and labeling it and then, how is that going to turn out in the end? We're seeing over and over that spending the time on the algorithm is not usually the best option unless you have a very small amount of data.

**Susan:** Well, you know, there's a truism in the machine learning world and, we've kind of hit this before but, data will live forever, your algorithm likely won't.

**Scott:** It always gets better.

**Susan:** The algorithm is [what makes you money right now](https://blog.deepgram.com/ai-show-different-types-of-machine-learning/) but, I can almost guarantee you, 10 years from now, it's not going to be that same model structure, even, fundamental technology. But, you'll probably keep going back to the dataset that you collected.

**Scott:** You see this all over the place. The academic datasets and texts and images and speech that have existed for the past 40 years are still used to train models today.

## What does your AI Utopia look like?

**Scott:** So for my Utopia I want my robot friend. I don't know if it's a phone, if it's a physical thing that can roll around and dance or something stupid but, you know, something that you can talk to and it does stuff for you. Maybe it doesn't have to physically do it for you but, call somebody up or schedule a cake to be ordered or pick up donuts o, suggest food. You're actually like, "I like that, I'm glad I didn't have to go do that discovery. This is great, you know? Tell me more, friend." That will be really dope for me. What about you?

**Susan:** My personal, I like the travel aspect. Personally, that's driven a large chunk of my life - the freedom to go places easily and see places easily.

**Scott:** Teleporter. You're sleeping, you come in and out of consciousness and you wake up in a new place. Hey, that's teleporting man, if you can get moved while you're sleeping.

**Susan:** One of my best travel experiences was we were in Seville in Southern Spain and, we got a night train to Barcelona. We were dead tired because, long story but, we get on this train, we fall asleep in a nice comfortable sleeping car, and we woke up to the Catalina coast with the sunrise. It was like, "This is what I want for every trip."

**Scott:** All traveling should be like this.

**Susan:** It should be the same thing, we're going to Yellowstone or, going to Grand Canyon or just going skiing. It's like," I'm going to fall asleep at the end of a normal day. Those dead hours that I'm not conscious of the world, use them productively, get me somewhere cool." Get me to wake up at a great place every day and I'll be happy. That to me is a really, really huge thing.

**Scott:** Well we should ask our listeners, what do you think will make the most positive impact? What are the things you're excited about? We'd love to hear about it.`;
}
function compiledContent() {
  return '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/576097014&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />\n<p><strong>Scott:</strong> Welcome to the AI show. Today we\u2019re asking the question, the very big question. What will the AI Utopia look like?</p>\n<p><strong>Susan:</strong> We were a little negative, Debbie Downer kind of not so happy on the <a href="https://blog.deepgram.com/what-does-the-ai-dystopia-look-like-ai-show/">last podcast</a>.</p>\n<p><strong>Scott:</strong> Why be so negative, man?</p>\n<p><strong>Susan:</strong> Things are going to destroy your life but, man, are there some cool things that it\u2019s going to do for us.</p>\n<p><strong>Scott:</strong> Yeah. Like what?</p>\n<p><strong>Susan:</strong> Oh, I\u2019m just looking for all the easy ones, you\u2019re going to live longer. Do you want to live longer, Scott?</p>\n<h2 id="hows-ai-going-to-help-us-live-longer">How\u2019s AI going to help us live longer?</h2>\n<p><strong>Susan:</strong> Bioinformatics. NVIDIA had this really cool demo last year where they took an MRI or something and used machine learning to turn it into a 3D view. You know, automatically segmenting out organs and all sorts of stuff. I mean, this is just like the level one stuff.</p>\n<p><strong>Scott:</strong> I\u2019m just going to give you a better view.</p>\n<p><strong>Susan:</strong> Exactly.</p>\n<p><strong>Scott:</strong> Take this thing that used to be slices, turn it into something that you can rotate around and look at it and be like, \u201COh, there it is.\u201D</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976828/blog/ai-show-what-will-the-ai-utopia-look-like/bos-luk.png" alt="bosluk"></p>\n<p><em>An MRI image of a person with an arachnoid cyst in their left, inferior frontal lobe.</em></p>\n<p><strong>Susan:</strong> It\u2019s amazing. Even without being a doctor you can look at some of the stuff now and say, \u201CThat\u2019s clearly not supposed to be there, you may want to get that looked at.\u201D</p>\n<p><strong>Scott:</strong> Well, speaking of NVIDIA, they use AI now to do <a href="https://en.wikipedia.org/wiki/Ray_tracing_(graphics)">ray tracing</a> a lot better. Ray tracing allows you to do graphics better. With it you figure out a few things but then fill in the rest using AI and they can speed everything up, make it look awesome</p>\n<p><strong>Susan:</strong> Let\u2019s get to brass tacks here. Better video games equals better life.</p>\n<p><strong>Scott:</strong> Everybody likes that one.</p>\n<p><strong>Susan:</strong> The world is just wide open for amazing new things, transformative things. Pretty much everybody has seen cars driving around their city mapping everything around. We all know the autonomous revolution is going to come upon us, but there\u2019s so many cool things that it\u2019s going to enable.</p>\n<p><strong>Scott:</strong> The cars drive you around, you can take a nap.</p>\n<p><strong>Susan:</strong> I\u2019m not going to lie, there\u2019s been a couple of evenings where I wanted a responsible vehicle to take me home and, you know, that will be nice.</p>\n<p><strong>Scott:</strong> The car hasn\u2019t had a few\u2026</p>\n<p><strong>Susan:</strong> Exactly. I think you know what I\u2019m talking about, Scott.</p>\n<p><strong>Scott:</strong> Sure, you were just sleepy.</p>\n<p><strong>Susan:</strong> How cool would it be to get into your car after work on a Friday and then, you know, stretch out your arms like this in the nice wide open space because you don\u2019t have the driving steering wheel and all there. You know, pull a blanket over yourself and, wake up on the other side of the country, well, not quite but, you know, wake up a thousand miles away.</p>\n<p><strong>Scott:</strong> Hey, we\u2019re in San Francisco, why not end up in Denver.</p>\n<p><strong>Susan:</strong> I\u2019m going to go skiing tomorrow.</p>\n<p><strong>Scott:</strong> It\u2019s a little far but, yeah.</p>\n<p><strong>Susan:</strong> But just take me there and wake me up every once in a while for a nice little break here and there.</p>\n<p><strong>Scott:</strong> Shake the car a little bit. \u201COkay, I\u2019m up, I\u2019m up, what?\u201D</p>\n<p><strong>Susan:</strong> That\u2019s talking about you and me but, what about Grandma and Grandpa? Could you just imagine the amazing freedom that they will have? I don\u2019t know about your particular extended family there but, I know that my grandparents basically reach a day when it\u2019s probably not a good day for them to drive, right?</p>\n<p><strong>Scott:</strong> Did you have that conversation?</p>\n<p><strong>Susan:</strong> Yeah and the day before they\u2019re good; the day after, probably they\u2019re not. This independence thing falls off so quickly and yet, if you can have self driving cars then they can be more gradual. You\u2019ll still be programming the car to get them where they\u2019re going probably. You\u2019ll be getting the phone call, \u201CHow do you tell it to go to the store?\u201D</p>\n<p><strong>Scott:</strong> One of my favorite Uber for X companies out there or, there are two companies, Silver Car and, GoGoGrandparent.</p>\n<p><strong>Susan:</strong> I like it.</p>\n<p><strong>Scott:</strong> Basically Uber for old people, which is awesome. But, their great viral marketing technique was not Facebook ads or videos or anything like that. It was postcards that you would send to your friends. Such a good idea.</p>\n<p><strong>Susan:</strong> I love it.</p>\n<p><strong>Scott:</strong> Why not have the grandparents get in the AI car? Now you don\u2019t have to have the human driving you around anymore</p>\n<p><strong>Susan:</strong> They can still make it to Sunday dinners.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976829/blog/ai-show-what-will-the-ai-utopia-look-like/A-Swedish-American-family-in-a-small-Minnesota-tow.jpg" alt="dindin"></p>\n<p><strong>Scott:</strong> Exactly. Take a trip to go shopping, do all of that.</p>\n<p><strong>Susan:</strong> So what do you think, Scott, what\u2019s a big area you\u2019re thinking of?</p>\n<p><strong>Scott:</strong> I\u2019m really big on my life becoming easier, that would be awesome. You get in your car and you\u2019re about to drive somewhere and you have to fumble with your Google maps and put in a stupid address for it and be like, \u201CNo, not that address, this other address.\u201D And, \u201COh, I also want to make a stop along the way to go get some donuts or cookies or, whatever, because, hey I\u2019m going to this meeting.\u201D Why can\u2019t I make all this easier, just talk to it like a human or it just knows that, \u201CHey, it\u2019s nine o\u2019clock and, Scott\u2019s going to work.\u201D</p>\n<p><strong>Susan:</strong> \u201CShould we stop at the coffee shop, Scott?\u201D Politely ask.</p>\n<p><strong>Scott:</strong> \u201CNo, it\u2019s okay.\u201D</p>\n<p><strong>Susan:</strong> \u201CMaybe not today.\u201D</p>\n<p><strong>Scott:</strong> But, it suggests a really good thing, bring in donuts or this, \u201CI already called ahead,\u201D you know? Oh, great, all we have to do is stop by there.</p>\n<p><strong>Susan:</strong> \u201CYou told me last time your coworkers really appreciated you bringing in donuts.\u201D</p>\n<p><strong>Scott:</strong> Yeah, exactly. \u201CI heard,\u201D you know, \u201Cbecause I was present.\u201D</p>\n<p><strong>Susan:</strong> Through the AI grapevine.</p>\n<p><strong>Scott:</strong> I was present because your phone was present and it noticed, you know, that everybody really liked that and so maybe we should do that again.</p>\n<p><strong>Susan:</strong> People are happier with donuts.</p>\n<p><strong>Scott:</strong> We\u2019ve already kind of noticed that shopping has become easier because of technology. There\u2019s a lot of things that\u2019ve become easier. You still have lots of annoying things that you have to deal with in life and AI won\u2019t take care of all of them, but there\u2019s a lot that I think it could help with.</p>\n<p>Food is another big one for people. Not just agriculture - we should get there - but also, \u201CWhat are we going to eat tonight?\u201D \u201COh, I don\u2019t know.\u201D</p>\n<p><strong>Susan:</strong> If AI can solve that problem, how many more marriages would be saved?</p>\n<h2 id="solving-the-discovery-problem">Solving the discovery problem</h2>\n<p><strong>Scott:</strong> It\u2019s a discovery problem in a lot of ways, right? If this machine learning program was able to give you something that you guys would both agree on, that\u2019s new, that\u2019s interesting, that\u2019s great.</p>\n<p>And not only that, it suggests a couple of options for that. You probably would want this, this and, this. And actually, I would want that, let\u2019s get that, let\u2019s get that, let\u2019s just see what happens.</p>\n<p><strong>Scott:</strong> And then we can poo poo it later, we can blame the machine.</p>\n<p><strong>Susan:</strong> Exactly, yeah, offloading blame.</p>\n<p><strong>Scott:</strong> Exactly. The machine did it.</p>\n<p><strong>Susan:</strong> I\u2019m loving the offloading blame right now.</p>\n<h2 id="what-about-agriculture">What about agriculture?</h2>\n<p><strong>Susan:</strong> Agriculture is rife with disruption for AI in very amazingly good ways. One of my big hopes is that we will re-enable the small farmer again, and that is because when you look at big agriculture, they\u2019re all about taking huge tracts of land and trying to make it look very similar and not flatten it all out, grow the exact same crop and because you get the economies of scale, you get everything the same.</p>\n<p><strong>Scott:</strong> Yeah, farming is hard. There\u2019s not a super high yield, food doesn\u2019t cost all that much so you have to do a whole bunch of it and you have to do it cheaply.</p>\n<p><strong>Susan:</strong> It takes a lot of intelligence and a whole lot of work to deal with any kind of difference.</p>\n<p><strong>Scott:</strong> Situational awareness as well.</p>\n<p><strong>Susan:</strong> Machine learning can help take that load off. Imagine now you only have 10 or 15 acres and it\u2019s got hills and nooks and crannies and all sorts of different stuff. The dirt over here is slightly different than the dirt over there. Machine learning can help learn those differences and tell you, \u201CPlant these crops there and plant those crops there.\u201D</p>\n<p><img src="https://images.unsplash.com/photo-1429991889170-afd56b2a1210?ixlib=rb-1.2.1&#x26;ixid=eyJhcHBfaWQiOjEyMDd9&#x26;auto=format&#x26;fit=crop&#x26;w=800&#x26;q=60" alt="farm"></p>\n<p><strong>Susan:</strong> Then you take it to the next level - the automated machinery of the future could help automate doing all the farm tasks in a much more varied world.</p>\n<p><strong>Scott:</strong> Well it decides what to plant where, it goes and harvests it.</p>\n<p><strong>Susan:</strong> I think it\u2019s a guidance thing. I don\u2019t want to fall into the trap of machine learning decides. I think it\u2019s an enabling thing more than \u201Cthis is what you shall have on your land.\u201D</p>\n<p><strong>Scott:</strong> Well, I think it\u2019s more like, \u201CHere\u2019s the plan, is that okay?\u201D</p>\n<p><strong>Susan:</strong> \u201CYeah, go ahead, go do it, go to town.\u201D That will allow farmers, like any profession and any professional to focus more on the harder pieces of it. Start taking care of the average, give me a rough plan and maybe I\u2019ll tweak it for those little interesting things. I predict prices on this are going to be different, or, maybe farm costs over here are going to be different for things the machine can\u2019t take into account and tweak it that way. And those are just a few of the small things. You know, talk about distribution that\u2019s going to be revolutionized in farming. It\u2019s going to be faster to your table, it\u2019s going to be fresher to your table, it\u2019s going to be more diverse. If you do enable utilizing more of the land, you\u2019re going to enable a more diverse set of crops to come to market.</p>\n<p><strong>Scott:</strong> What about robots cooking?</p>\n<p><strong>Susan:</strong> My wife went to the <a href="http://creator.rest/">robot hamburger joint</a> here that opened up in San Francisco.</p>\n<p><strong>Scott:</strong> Good?</p>\n<p><strong>Susan:</strong> I think her take was, \u201COkay.\u201D</p>\n<p><strong>Scott:</strong> Well, hey, that\u2019s pretty good, right?</p>\n<p><strong>Susan:</strong> But they\u2019ve just opened up.</p>\n<p><strong>Scott:</strong> I would assume the first one is like, \u201CNo, it\u2019s disgusting, you don\u2019t want to go there.\u201DBut, hey, \u201CNo, it\u2019s okay, it was fine.\u201D That\u2019s a pretty ringing endorsement then.</p>\n<p><strong>Susan:</strong> Yeah, ringing endorsement for a burger from scratch. Well their big thing, I think, was it was literally ground exactly at that point, the moment it was ordered. But, when they grind it they grind it in a way so that it makes it more tender because, now they can literally control as little pieces of meat are put together.</p>\n<p><strong>Scott:</strong> Well, that\u2019s cute. Everybody has to have a story so, yeah, that makes sense.</p>\n<h2 id="what-about-the-medical-perspective">What about the medical perspective?</h2>\n<p><strong>Scott:</strong> We\u2019re all going to live longer, we already heard that.</p>\n<p><strong>Susan:</strong> Well, let\u2019s talk about you and monitoring you and what you can get out of that. Forget big medicine. Let\u2019s not talk about being able to segment the body and find organs and find all sorts of things wrong with you. Let\u2019s hook up an AI that monitors you daily, takes your pulse, figures out your heart rate and your respiration and how much you\u2019re easting or, what activities you\u2019re doing and starts figuring out whether or not you feel good or bad and how to tweak you to get better.</p>\n<p><strong>Scott:</strong> And motivate you to get better.</p>\n<p><strong>Susan:</strong> Wait five more minutes or, right now is the exact perfect time. You know, last time you did exercises these were the ones that seemed to help you more than those, you know? The 16 ounce curls worked best only once a week, not five times a week.</p>\n<p><strong>Susan:</strong> But, monitoring those things that actually make a difference in your life.</p>\n<p><strong>Scott:</strong> I could see how this would be life or death for children.</p>\n<p><strong>Susan:</strong> Oh man.</p>\n<p><strong>Scott:</strong> Start put a monitoring collar on your child. That\u2019s the upgrade.</p>\n<p>But, it tells you, are they alive or dead at any point in time? Are they drowning? Are they in distress? Take all the worry off. Now you can have free range kids again.</p>\n<p><strong>Susan:</strong> Just let them go.</p>\n<p><strong>Scott:</strong> Just let them go because, you know, you could do this in the past, you could put all these sensors on them but then, what would you do with all the data? You need some AI to tell you, well, actually, this is fine, they\u2019re fine. This is the bad stuff. Oh, whoa, something\u2019s going on.</p>\n<p><strong>Susan:</strong> They probably will not be eaten by hyenas right now.</p>\n<p><strong>Scott:</strong> It serves a purpose of a scream, you know, a little scream detector. It could be good.</p>\n<h3 id="lets-talk-transportation">Let\u2019s talk transportation</h3>\n<p><strong>Susan:</strong> So, you know, I have a little bit of an aviation background.</p>\n<p><strong>Scott:</strong> Just a little bit. Navy pilot, no big deal.</p>\n<p><strong>Susan:</strong> You know, people think automation is just taking someone out of the cockpit, they don\u2019t think that it gets rid of the cockpit.</p>\n<p>Often people don\u2019t really realize what that means for the redesign of an aircraft.</p>\n<p><strong>Scott:</strong> Why would they want to do that? Why would you want to take people out of the cockpit?</p>\n<p><strong>Susan:</strong> Well, ignoring the fact that the majority of problems actually happen between the yolk and the seat.</p>\n<p><strong>Scott:</strong> Meaning the person.</p>\n<p><strong>Susan:</strong> Correct, most aviation problems are caused by the human operator. From a design perspective, a lot of the things that you don\u2019t realize are designed on aircraft that cause a lot of extra weight and structure have everything to do with just pilots being able to see. For example:</p>\n<blockquote>\n<p>I\u2019ve got to be able to see the runway and that means I have to do all sorts of crazy things with flaps and stuff like that just to be able to land and take off the plane, just so I can see the runway. If there\u2019s a machine, it doesn\u2019t need to see in the same way I do.</p>\n</blockquote>\n<p><strong>Scott:</strong> It would be lighter, more efficient, less complicated?</p>\n<p><strong>Susan:</strong> You can also design it for a better regime of crews as opposed to the landing and take off areas. Not as challenging design as it was before.</p>\n<p><strong>Scott:</strong> Not just autonomous vehicles but, airplanes. That doesn\u2019t have to be remote controlled.</p>\n<p><strong>Susan:</strong> Exactly. The same argument now comes over to the self driving car world. You can see it there too. If you got rid of the center, you know the front steering wheel and all the stuff on the console and all that stuff, you\u2019d get a lot more room.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976830/blog/ai-show-what-will-the-ai-utopia-look-like/columnless-cart.jpg" alt="car"></p>\n<p><strong>Scott:</strong> Got room to lounge, man.</p>\n<p><strong>Susan:</strong> And this is not a plug for Tesla but, one of their things is, \u201CHey, because we\u2019ve gotten rid of a lot of the engine components, there\u2019s a lot more room inside the cabin.\u201D Well, now you get even more of those components gone and there\u2019s even more you can do.</p>\n<p><strong>Scott:</strong> It\u2019s like a hotel room in there.</p>\n<p><strong>Susan:</strong> So, again, going back to the aviation world, you can get small airplanes that go longer, further distances and that just really opens up travel.</p>\n<p><strong>Scott:</strong> Well, then does everyone live in a city now? Like, oh, maybe you go further away, more urban sprawl but, is that a bad thing?</p>\n<p><strong>Susan:</strong> Depends on what you want. There\u2019s a lot of stuff I think that could happen. Drone delivery of your milk and eggs out of nowhere.</p>\n<p><strong>Scott:</strong> Amazon Prime for everybody.</p>\n<p><strong>Susan:</strong> Yeah, I\u2019ve got my own personal lake 300 miles away and here comes the drone.</p>\n<p><strong>Scott:</strong> The land of 10,000 lakes and one of them is mine.</p>\n<p><strong>Susan:</strong> That lakefront property becomes a lot more valuable as Amazon starts delivering there. You\u2019re no longer disconnected.</p>\n<h3 id="think-about-the-energy-sector">Think about the energy sector</h3>\n<p><strong>Scott:</strong> I think also in the energy sector there\u2019s going to be a big deal. For example, better use of the grid. This is already kind of happening but, better systems designed for that and then, systems to switch between, choose what you should do, price it, et cetera, make it more efficient. But also, machine learning techniques to find out new power sources. So, what I mean is, <a href="https://blog.deepgram.com/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/">fusion has been a promise for a long time</a> and, it actually is really close to happening and it\u2019s like, man, what\u2019s the real problem here? It might be the people. And saying, \u201CHey, here are the laws of physics and here are the constraints that we have, it\u2019s probably going to be real complicated to make this work. Can we throw some computing power and a machine learning algorithm to guess at what the best type of fusion device would be?\u201D And, there\u2019s been progress made on this.</p>\n<p><strong>Susan:</strong> Lots of progress. Yeah, I mean, I\u2019m actually hearing the eternal joke of fusion\u2019s only 20 years away.</p>\n<p><strong>Scott:</strong> Yeah, 20, 20 years away. Now maybe It might actually be 20 years away.</p>\n<p><strong>Susan:</strong> They\u2019re talking about hitting equilibrium points, you know, equal power points or, I forgot that whatever it\u2019s called.</p>\n<p><strong>Scott:</strong> Over unity.</p>\n<p><strong>Susan:</strong> Yeah, over unity, there we go and, five, ten years maybe. Now actually capturing back the energy there is a different thing but, you know, it puts out more than you put into it. That\u2019s a pretty cool thing.</p>\n<p><strong>Scott:</strong> Absolutely.</p>\n<p><strong>Susan:</strong> I\u2019m super, super stoked.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976831/blog/ai-show-what-will-the-ai-utopia-look-like/TOKAMAK.jpg" alt="tokamak"></p>\n<p><em>A picture of TOKAMAK at the <a href="https://www.pppl.gov/">Princeton Plasma Physics Laboratory (PPPL)</a></em></p>\n<p><strong>Scott:</strong> I mean if you\u2019re turning into a steam thing and you just need to cool it down and whatnot, it can\u2019t be too hard to do that but, you know, heat is kind of easy to transport.</p>\n<p><strong>Susan:</strong> But it\u2019s all wrapped in those super-conducting magnets. They get heat from in there, outside of there \u2026</p>\n<p><strong>Scott:</strong> You\u2019ve got to pipe it out, yeah.</p>\n<p><strong>Susan:</strong> I\u2019m no physics guy.</p>\n<p><strong>Scott:</strong> Let the machine learning algorithm figure out the problems. Tesla\u2019s Power wall?</p>\n<p><strong>Susan:</strong> They\u2019ve done some pretty cool stuff with big batteries in Australia that\u2019s really paid off, but their next set of big projects are all about decentralized power. The power wall in the home but also becoming now a municipal power grid because all these things are linked together intelligently to take load and push load and all sorts of different stuff. They\u2019re really trying to reshape the grid and, to do that, you\u2019re going to have to have some very intelligent controls because it only takes a little bit, everybody deciding at the exact same moment to turn on their toaster, to really throw a system out of whack. You know, talk about civil disobedience, you just put on a big billboard at 6:00PM on Tuesday, every single person go make toast. And then, bam.</p>\n<p><strong>Scott:</strong> I love this idea. I love this idea.</p>\n<p><strong>Susan:</strong> Managing a grid is a lot more complicated than people think and these types of algorithms could potentially really, really cut down on problems with spikes like that.</p>\n<p><strong>Scott:</strong> Like I\u2019m noticing a lot of toaster sales. People talking about toasters going on around here, I\u2019m a little fearful. You may have to crank it up.</p>\n<p><strong>Susan:</strong> Right after we\u2019re done here I\u2019m going to open up my browser and I\u2019m going to see an advertisement to sell me a toaster.</p>\n<p><strong>Scott:</strong> I think there\u2019s some things in the medical side that we didn\u2019t talk about like, identifying cancer, or like, being able to go into this imagery a lot better and tell you what\u2019s going on. You touched on like three dimensional reconstruction and being able to look at it better but, you can also have areas pointed out to you like, \u201CWell, this looks like a problem.\u201D</p>\n<p><strong>Susan:</strong> This is not your standard kidney. One of the classic things in facial recognition, the first thing you always learn about is using <a href="https://en.wikipedia.org/wiki/Principal_component_analysis">principal component analysis</a> or something along those lines to say, \u201CThis is what the standard face looks like\u201D so, recognizing faces and recognizing those things. You can do that with, effectively, a kidney but, with a lot better results as you use much stronger techniques. And, now you walk in for your weekly, your monthly, your yearly exam and, you quickly zip around, do an MRI or whatever technique they\u2019re going to use to scan the inside of your body and, poof, areas in you are marked with little highlights. You know, green, yellow, red, black.</p>\n<p><strong>Scott:</strong> Ooh, shouldn\u2019t have done that when I was 18, yeah.</p>\n<p><strong>Susan:</strong> It\u2019s like you may want to get that removed today? This one, you just may need to exercise a little bit more.</p>\n<h3 id="are-there-going-to-be-robot-ai-powered-doctors">Are there going to be robot, AI powered doctors?</h3>\n<p><strong>Scott:</strong> Or strap you into a chair dentists that do your dental work for you?</p>\n<p><strong>Susan:</strong> Well the whole thing has been a growing thing for a long time and, one of the biggest problems, I understand, in that field is latency. You know, a thousand miles, speed of light and all the equipment in between means, if you\u2019re going to move a scalpel and you\u2019ve got a little bit of a delay there, machine learning could enable that a lot more. Again, getting to the point where the surgeon is maybe doing more about guiding what\u2019s going to go on and not exactly doing what\u2019s going to go on. It does the perfect stitch for them, they don\u2019t actually have to do it themselves.</p>\n<p><strong>Scott:</strong> Do a perfect stitch here and then, do a perfect stitch here.</p>\n<p><strong>Susan:</strong> Exactly. Cauterize over there. I saw a while ag, a really cool thing where they were taking imagery of a beating heart and fixing it with, I think there was like some sort of strobe light that would sync up to it so the doctor would see it synced up and then the scalpel would actually, the tip of the scalpel would move to stay the same amount away from the beating heart so that it looks like it\u2019s a still heart and they can actually do surgery in real time on a beating heart.</p>\n<p><strong>Susan:</strong> That is the future of medicine. There\u2019s a competition to basically build the tricorder, you know, like every single year they try to incorporate more and more of those things into it and, it only makes sense.</p>\n<p><strong>Susan:</strong> Don\u2019t you want your doctor to be able to come in and just go, \u201CDone.\u201D You didn\u2019t have to set up some sort of appointment and there it is.</p>\n<p><strong>Scott:</strong> Scientific advancement might start coming quicker too as ML and AI just really starts getting applied and used just like electricity did in the 1900\u2019s or, people figuring out radioactivity.</p>\n<p>In 10 years try to find a researcher that\u2019s not using machine learning to analyze data. It\u2019s going to become like water to people.</p>\n<p><strong>Susan:</strong> Well that was your world, teasing a weak signal out using machine learning techniques.</p>\n<p><strong>Scott:</strong> Absolutely. You could try to set up rules and write them but it becomes hard because there are all these exceptions. It might be better if I just tell it: \u201CThat\u2019s right, that\u2019s wrong, that\u2019s right, that\u2019s wrong. If this is of that type, that\u2019s of this type.\u201D Then you just do that a few thousand times and then say, \u201CFigure it out yourself.\u201D You pick all the parameters in order to satisfy that and it works very well. And, it totally changes how you think about the world. I could spend all my time writing an algorithm or, I could spend all my time getting relevant data and labeling it and then, how is that going to turn out in the end? We\u2019re seeing over and over that spending the time on the algorithm is not usually the best option unless you have a very small amount of data.</p>\n<p><strong>Susan:</strong> Well, you know, there\u2019s a truism in the machine learning world and, we\u2019ve kind of hit this before but, data will live forever, your algorithm likely won\u2019t.</p>\n<p><strong>Scott:</strong> It always gets better.</p>\n<p><strong>Susan:</strong> The algorithm is <a href="https://blog.deepgram.com/ai-show-different-types-of-machine-learning/">what makes you money right now</a> but, I can almost guarantee you, 10 years from now, it\u2019s not going to be that same model structure, even, fundamental technology. But, you\u2019ll probably keep going back to the dataset that you collected.</p>\n<p><strong>Scott:</strong> You see this all over the place. The academic datasets and texts and images and speech that have existed for the past 40 years are still used to train models today.</p>\n<h2 id="what-does-your-ai-utopia-look-like">What does your AI Utopia look like?</h2>\n<p><strong>Scott:</strong> So for my Utopia I want my robot friend. I don\u2019t know if it\u2019s a phone, if it\u2019s a physical thing that can roll around and dance or something stupid but, you know, something that you can talk to and it does stuff for you. Maybe it doesn\u2019t have to physically do it for you but, call somebody up or schedule a cake to be ordered or pick up donuts o, suggest food. You\u2019re actually like, \u201CI like that, I\u2019m glad I didn\u2019t have to go do that discovery. This is great, you know? Tell me more, friend.\u201D That will be really dope for me. What about you?</p>\n<p><strong>Susan:</strong> My personal, I like the travel aspect. Personally, that\u2019s driven a large chunk of my life - the freedom to go places easily and see places easily.</p>\n<p><strong>Scott:</strong> Teleporter. You\u2019re sleeping, you come in and out of consciousness and you wake up in a new place. Hey, that\u2019s teleporting man, if you can get moved while you\u2019re sleeping.</p>\n<p><strong>Susan:</strong> One of my best travel experiences was we were in Seville in Southern Spain and, we got a night train to Barcelona. We were dead tired because, long story but, we get on this train, we fall asleep in a nice comfortable sleeping car, and we woke up to the Catalina coast with the sunrise. It was like, \u201CThis is what I want for every trip.\u201D</p>\n<p><strong>Scott:</strong> All traveling should be like this.</p>\n<p><strong>Susan:</strong> It should be the same thing, we\u2019re going to Yellowstone or, going to Grand Canyon or just going skiing. It\u2019s like,\u201D I\u2019m going to fall asleep at the end of a normal day. Those dead hours that I\u2019m not conscious of the world, use them productively, get me somewhere cool.\u201D Get me to wake up at a great place every day and I\u2019ll be happy. That to me is a really, really huge thing.</p>\n<p><strong>Scott:</strong> Well we should ask our listeners, what do you think will make the most positive impact? What are the things you\u2019re excited about? We\u2019d love to hear about it.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/ai-show-what-will-the-ai-utopia-look-like/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/576097014&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
<p><strong>Scott:</strong> Welcome to the AI show. Today we’re asking the question, the very big question. What will the AI Utopia look like?</p>
<p><strong>Susan:</strong> We were a little negative, Debbie Downer kind of not so happy on the <a href="https://blog.deepgram.com/what-does-the-ai-dystopia-look-like-ai-show/">last podcast</a>.</p>
<p><strong>Scott:</strong> Why be so negative, man?</p>
<p><strong>Susan:</strong> Things are going to destroy your life but, man, are there some cool things that it’s going to do for us.</p>
<p><strong>Scott:</strong> Yeah. Like what?</p>
<p><strong>Susan:</strong> Oh, I’m just looking for all the easy ones, you’re going to live longer. Do you want to live longer, Scott?</p>
<h2 id="hows-ai-going-to-help-us-live-longer">How’s AI going to help us live longer?</h2>
<p><strong>Susan:</strong> Bioinformatics. NVIDIA had this really cool demo last year where they took an MRI or something and used machine learning to turn it into a 3D view. You know, automatically segmenting out organs and all sorts of stuff. I mean, this is just like the level one stuff.</p>
<p><strong>Scott:</strong> I’m just going to give you a better view.</p>
<p><strong>Susan:</strong> Exactly.</p>
<p><strong>Scott:</strong> Take this thing that used to be slices, turn it into something that you can rotate around and look at it and be like, “Oh, there it is.”</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976828/blog/ai-show-what-will-the-ai-utopia-look-like/bos-luk.png" alt="bosluk"></p>
<p><em>An MRI image of a person with an arachnoid cyst in their left, inferior frontal lobe.</em></p>
<p><strong>Susan:</strong> It’s amazing. Even without being a doctor you can look at some of the stuff now and say, “That’s clearly not supposed to be there, you may want to get that looked at.”</p>
<p><strong>Scott:</strong> Well, speaking of NVIDIA, they use AI now to do <a href="https://en.wikipedia.org/wiki/Ray_tracing_(graphics)">ray tracing</a> a lot better. Ray tracing allows you to do graphics better. With it you figure out a few things but then fill in the rest using AI and they can speed everything up, make it look awesome</p>
<p><strong>Susan:</strong> Let’s get to brass tacks here. Better video games equals better life.</p>
<p><strong>Scott:</strong> Everybody likes that one.</p>
<p><strong>Susan:</strong> The world is just wide open for amazing new things, transformative things. Pretty much everybody has seen cars driving around their city mapping everything around. We all know the autonomous revolution is going to come upon us, but there’s so many cool things that it’s going to enable.</p>
<p><strong>Scott:</strong> The cars drive you around, you can take a nap.</p>
<p><strong>Susan:</strong> I’m not going to lie, there’s been a couple of evenings where I wanted a responsible vehicle to take me home and, you know, that will be nice.</p>
<p><strong>Scott:</strong> The car hasn’t had a few…</p>
<p><strong>Susan:</strong> Exactly. I think you know what I’m talking about, Scott.</p>
<p><strong>Scott:</strong> Sure, you were just sleepy.</p>
<p><strong>Susan:</strong> How cool would it be to get into your car after work on a Friday and then, you know, stretch out your arms like this in the nice wide open space because you don’t have the driving steering wheel and all there. You know, pull a blanket over yourself and, wake up on the other side of the country, well, not quite but, you know, wake up a thousand miles away.</p>
<p><strong>Scott:</strong> Hey, we’re in San Francisco, why not end up in Denver.</p>
<p><strong>Susan:</strong> I’m going to go skiing tomorrow.</p>
<p><strong>Scott:</strong> It’s a little far but, yeah.</p>
<p><strong>Susan:</strong> But just take me there and wake me up every once in a while for a nice little break here and there.</p>
<p><strong>Scott:</strong> Shake the car a little bit. “Okay, I’m up, I’m up, what?”</p>
<p><strong>Susan:</strong> That’s talking about you and me but, what about Grandma and Grandpa? Could you just imagine the amazing freedom that they will have? I don’t know about your particular extended family there but, I know that my grandparents basically reach a day when it’s probably not a good day for them to drive, right?</p>
<p><strong>Scott:</strong> Did you have that conversation?</p>
<p><strong>Susan:</strong> Yeah and the day before they’re good; the day after, probably they’re not. This independence thing falls off so quickly and yet, if you can have self driving cars then they can be more gradual. You’ll still be programming the car to get them where they’re going probably. You’ll be getting the phone call, “How do you tell it to go to the store?”</p>
<p><strong>Scott:</strong> One of my favorite Uber for X companies out there or, there are two companies, Silver Car and, GoGoGrandparent.</p>
<p><strong>Susan:</strong> I like it.</p>
<p><strong>Scott:</strong> Basically Uber for old people, which is awesome. But, their great viral marketing technique was not Facebook ads or videos or anything like that. It was postcards that you would send to your friends. Such a good idea.</p>
<p><strong>Susan:</strong> I love it.</p>
<p><strong>Scott:</strong> Why not have the grandparents get in the AI car? Now you don’t have to have the human driving you around anymore</p>
<p><strong>Susan:</strong> They can still make it to Sunday dinners.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976829/blog/ai-show-what-will-the-ai-utopia-look-like/A-Swedish-American-family-in-a-small-Minnesota-tow.jpg" alt="dindin"></p>
<p><strong>Scott:</strong> Exactly. Take a trip to go shopping, do all of that.</p>
<p><strong>Susan:</strong> So what do you think, Scott, what’s a big area you’re thinking of?</p>
<p><strong>Scott:</strong> I’m really big on my life becoming easier, that would be awesome. You get in your car and you’re about to drive somewhere and you have to fumble with your Google maps and put in a stupid address for it and be like, “No, not that address, this other address.” And, “Oh, I also want to make a stop along the way to go get some donuts or cookies or, whatever, because, hey I’m going to this meeting.” Why can’t I make all this easier, just talk to it like a human or it just knows that, “Hey, it’s nine o’clock and, Scott’s going to work.”</p>
<p><strong>Susan:</strong> “Should we stop at the coffee shop, Scott?” Politely ask.</p>
<p><strong>Scott:</strong> “No, it’s okay.”</p>
<p><strong>Susan:</strong> “Maybe not today.”</p>
<p><strong>Scott:</strong> But, it suggests a really good thing, bring in donuts or this, “I already called ahead,” you know? Oh, great, all we have to do is stop by there.</p>
<p><strong>Susan:</strong> “You told me last time your coworkers really appreciated you bringing in donuts.”</p>
<p><strong>Scott:</strong> Yeah, exactly. “I heard,” you know, “because I was present.”</p>
<p><strong>Susan:</strong> Through the AI grapevine.</p>
<p><strong>Scott:</strong> I was present because your phone was present and it noticed, you know, that everybody really liked that and so maybe we should do that again.</p>
<p><strong>Susan:</strong> People are happier with donuts.</p>
<p><strong>Scott:</strong> We’ve already kind of noticed that shopping has become easier because of technology. There’s a lot of things that’ve become easier. You still have lots of annoying things that you have to deal with in life and AI won’t take care of all of them, but there’s a lot that I think it could help with.</p>
<p>Food is another big one for people. Not just agriculture - we should get there - but also, “What are we going to eat tonight?” “Oh, I don’t know.”</p>
<p><strong>Susan:</strong> If AI can solve that problem, how many more marriages would be saved?</p>
<h2 id="solving-the-discovery-problem">Solving the discovery problem</h2>
<p><strong>Scott:</strong> It’s a discovery problem in a lot of ways, right? If this machine learning program was able to give you something that you guys would both agree on, that’s new, that’s interesting, that’s great.</p>
<p>And not only that, it suggests a couple of options for that. You probably would want this, this and, this. And actually, I would want that, let’s get that, let’s get that, let’s just see what happens.</p>
<p><strong>Scott:</strong> And then we can poo poo it later, we can blame the machine.</p>
<p><strong>Susan:</strong> Exactly, yeah, offloading blame.</p>
<p><strong>Scott:</strong> Exactly. The machine did it.</p>
<p><strong>Susan:</strong> I’m loving the offloading blame right now.</p>
<h2 id="what-about-agriculture">What about agriculture?</h2>
<p><strong>Susan:</strong> Agriculture is rife with disruption for AI in very amazingly good ways. One of my big hopes is that we will re-enable the small farmer again, and that is because when you look at big agriculture, they’re all about taking huge tracts of land and trying to make it look very similar and not flatten it all out, grow the exact same crop and because you get the economies of scale, you get everything the same.</p>
<p><strong>Scott:</strong> Yeah, farming is hard. There’s not a super high yield, food doesn’t cost all that much so you have to do a whole bunch of it and you have to do it cheaply.</p>
<p><strong>Susan:</strong> It takes a lot of intelligence and a whole lot of work to deal with any kind of difference.</p>
<p><strong>Scott:</strong> Situational awareness as well.</p>
<p><strong>Susan:</strong> Machine learning can help take that load off. Imagine now you only have 10 or 15 acres and it’s got hills and nooks and crannies and all sorts of different stuff. The dirt over here is slightly different than the dirt over there. Machine learning can help learn those differences and tell you, “Plant these crops there and plant those crops there.”</p>
<p><img src="https://images.unsplash.com/photo-1429991889170-afd56b2a1210?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="farm"></p>
<p><strong>Susan:</strong> Then you take it to the next level - the automated machinery of the future could help automate doing all the farm tasks in a much more varied world.</p>
<p><strong>Scott:</strong> Well it decides what to plant where, it goes and harvests it.</p>
<p><strong>Susan:</strong> I think it’s a guidance thing. I don’t want to fall into the trap of machine learning decides. I think it’s an enabling thing more than “this is what you shall have on your land.”</p>
<p><strong>Scott:</strong> Well, I think it’s more like, “Here’s the plan, is that okay?”</p>
<p><strong>Susan:</strong> “Yeah, go ahead, go do it, go to town.” That will allow farmers, like any profession and any professional to focus more on the harder pieces of it. Start taking care of the average, give me a rough plan and maybe I’ll tweak it for those little interesting things. I predict prices on this are going to be different, or, maybe farm costs over here are going to be different for things the machine can’t take into account and tweak it that way. And those are just a few of the small things. You know, talk about distribution that’s going to be revolutionized in farming. It’s going to be faster to your table, it’s going to be fresher to your table, it’s going to be more diverse. If you do enable utilizing more of the land, you’re going to enable a more diverse set of crops to come to market.</p>
<p><strong>Scott:</strong> What about robots cooking?</p>
<p><strong>Susan:</strong> My wife went to the <a href="http://creator.rest/">robot hamburger joint</a> here that opened up in San Francisco.</p>
<p><strong>Scott:</strong> Good?</p>
<p><strong>Susan:</strong> I think her take was, “Okay.”</p>
<p><strong>Scott:</strong> Well, hey, that’s pretty good, right?</p>
<p><strong>Susan:</strong> But they’ve just opened up.</p>
<p><strong>Scott:</strong> I would assume the first one is like, “No, it’s disgusting, you don’t want to go there.”But, hey, “No, it’s okay, it was fine.” That’s a pretty ringing endorsement then.</p>
<p><strong>Susan:</strong> Yeah, ringing endorsement for a burger from scratch. Well their big thing, I think, was it was literally ground exactly at that point, the moment it was ordered. But, when they grind it they grind it in a way so that it makes it more tender because, now they can literally control as little pieces of meat are put together.</p>
<p><strong>Scott:</strong> Well, that’s cute. Everybody has to have a story so, yeah, that makes sense.</p>
<h2 id="what-about-the-medical-perspective">What about the medical perspective?</h2>
<p><strong>Scott:</strong> We’re all going to live longer, we already heard that.</p>
<p><strong>Susan:</strong> Well, let’s talk about you and monitoring you and what you can get out of that. Forget big medicine. Let’s not talk about being able to segment the body and find organs and find all sorts of things wrong with you. Let’s hook up an AI that monitors you daily, takes your pulse, figures out your heart rate and your respiration and how much you’re easting or, what activities you’re doing and starts figuring out whether or not you feel good or bad and how to tweak you to get better.</p>
<p><strong>Scott:</strong> And motivate you to get better.</p>
<p><strong>Susan:</strong> Wait five more minutes or, right now is the exact perfect time. You know, last time you did exercises these were the ones that seemed to help you more than those, you know? The 16 ounce curls worked best only once a week, not five times a week.</p>
<p><strong>Susan:</strong> But, monitoring those things that actually make a difference in your life.</p>
<p><strong>Scott:</strong> I could see how this would be life or death for children.</p>
<p><strong>Susan:</strong> Oh man.</p>
<p><strong>Scott:</strong> Start put a monitoring collar on your child. That’s the upgrade.</p>
<p>But, it tells you, are they alive or dead at any point in time? Are they drowning? Are they in distress? Take all the worry off. Now you can have free range kids again.</p>
<p><strong>Susan:</strong> Just let them go.</p>
<p><strong>Scott:</strong> Just let them go because, you know, you could do this in the past, you could put all these sensors on them but then, what would you do with all the data? You need some AI to tell you, well, actually, this is fine, they’re fine. This is the bad stuff. Oh, whoa, something’s going on.</p>
<p><strong>Susan:</strong> They probably will not be eaten by hyenas right now.</p>
<p><strong>Scott:</strong> It serves a purpose of a scream, you know, a little scream detector. It could be good.</p>
<h3 id="lets-talk-transportation">Let’s talk transportation</h3>
<p><strong>Susan:</strong> So, you know, I have a little bit of an aviation background.</p>
<p><strong>Scott:</strong> Just a little bit. Navy pilot, no big deal.</p>
<p><strong>Susan:</strong> You know, people think automation is just taking someone out of the cockpit, they don’t think that it gets rid of the cockpit.</p>
<p>Often people don’t really realize what that means for the redesign of an aircraft.</p>
<p><strong>Scott:</strong> Why would they want to do that? Why would you want to take people out of the cockpit?</p>
<p><strong>Susan:</strong> Well, ignoring the fact that the majority of problems actually happen between the yolk and the seat.</p>
<p><strong>Scott:</strong> Meaning the person.</p>
<p><strong>Susan:</strong> Correct, most aviation problems are caused by the human operator. From a design perspective, a lot of the things that you don’t realize are designed on aircraft that cause a lot of extra weight and structure have everything to do with just pilots being able to see. For example:</p>
<blockquote>
<p>I’ve got to be able to see the runway and that means I have to do all sorts of crazy things with flaps and stuff like that just to be able to land and take off the plane, just so I can see the runway. If there’s a machine, it doesn’t need to see in the same way I do.</p>
</blockquote>
<p><strong>Scott:</strong> It would be lighter, more efficient, less complicated?</p>
<p><strong>Susan:</strong> You can also design it for a better regime of crews as opposed to the landing and take off areas. Not as challenging design as it was before.</p>
<p><strong>Scott:</strong> Not just autonomous vehicles but, airplanes. That doesn’t have to be remote controlled.</p>
<p><strong>Susan:</strong> Exactly. The same argument now comes over to the self driving car world. You can see it there too. If you got rid of the center, you know the front steering wheel and all the stuff on the console and all that stuff, you’d get a lot more room.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976830/blog/ai-show-what-will-the-ai-utopia-look-like/columnless-cart.jpg" alt="car"></p>
<p><strong>Scott:</strong> Got room to lounge, man.</p>
<p><strong>Susan:</strong> And this is not a plug for Tesla but, one of their things is, “Hey, because we’ve gotten rid of a lot of the engine components, there’s a lot more room inside the cabin.” Well, now you get even more of those components gone and there’s even more you can do.</p>
<p><strong>Scott:</strong> It’s like a hotel room in there.</p>
<p><strong>Susan:</strong> So, again, going back to the aviation world, you can get small airplanes that go longer, further distances and that just really opens up travel.</p>
<p><strong>Scott:</strong> Well, then does everyone live in a city now? Like, oh, maybe you go further away, more urban sprawl but, is that a bad thing?</p>
<p><strong>Susan:</strong> Depends on what you want. There’s a lot of stuff I think that could happen. Drone delivery of your milk and eggs out of nowhere.</p>
<p><strong>Scott:</strong> Amazon Prime for everybody.</p>
<p><strong>Susan:</strong> Yeah, I’ve got my own personal lake 300 miles away and here comes the drone.</p>
<p><strong>Scott:</strong> The land of 10,000 lakes and one of them is mine.</p>
<p><strong>Susan:</strong> That lakefront property becomes a lot more valuable as Amazon starts delivering there. You’re no longer disconnected.</p>
<h3 id="think-about-the-energy-sector">Think about the energy sector</h3>
<p><strong>Scott:</strong> I think also in the energy sector there’s going to be a big deal. For example, better use of the grid. This is already kind of happening but, better systems designed for that and then, systems to switch between, choose what you should do, price it, et cetera, make it more efficient. But also, machine learning techniques to find out new power sources. So, what I mean is, <a href="https://blog.deepgram.com/how-is-machine-learning-or-deep-learning-affecting-science-ai-show/">fusion has been a promise for a long time</a> and, it actually is really close to happening and it’s like, man, what’s the real problem here? It might be the people. And saying, “Hey, here are the laws of physics and here are the constraints that we have, it’s probably going to be real complicated to make this work. Can we throw some computing power and a machine learning algorithm to guess at what the best type of fusion device would be?” And, there’s been progress made on this.</p>
<p><strong>Susan:</strong> Lots of progress. Yeah, I mean, I’m actually hearing the eternal joke of fusion’s only 20 years away.</p>
<p><strong>Scott:</strong> Yeah, 20, 20 years away. Now maybe It might actually be 20 years away.</p>
<p><strong>Susan:</strong> They’re talking about hitting equilibrium points, you know, equal power points or, I forgot that whatever it’s called.</p>
<p><strong>Scott:</strong> Over unity.</p>
<p><strong>Susan:</strong> Yeah, over unity, there we go and, five, ten years maybe. Now actually capturing back the energy there is a different thing but, you know, it puts out more than you put into it. That’s a pretty cool thing.</p>
<p><strong>Scott:</strong> Absolutely.</p>
<p><strong>Susan:</strong> I’m super, super stoked.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976831/blog/ai-show-what-will-the-ai-utopia-look-like/TOKAMAK.jpg" alt="tokamak"></p>
<p><em>A picture of TOKAMAK at the <a href="https://www.pppl.gov/">Princeton Plasma Physics Laboratory (PPPL)</a></em></p>
<p><strong>Scott:</strong> I mean if you’re turning into a steam thing and you just need to cool it down and whatnot, it can’t be too hard to do that but, you know, heat is kind of easy to transport.</p>
<p><strong>Susan:</strong> But it’s all wrapped in those super-conducting magnets. They get heat from in there, outside of there …</p>
<p><strong>Scott:</strong> You’ve got to pipe it out, yeah.</p>
<p><strong>Susan:</strong> I’m no physics guy.</p>
<p><strong>Scott:</strong> Let the machine learning algorithm figure out the problems. Tesla’s Power wall?</p>
<p><strong>Susan:</strong> They’ve done some pretty cool stuff with big batteries in Australia that’s really paid off, but their next set of big projects are all about decentralized power. The power wall in the home but also becoming now a municipal power grid because all these things are linked together intelligently to take load and push load and all sorts of different stuff. They’re really trying to reshape the grid and, to do that, you’re going to have to have some very intelligent controls because it only takes a little bit, everybody deciding at the exact same moment to turn on their toaster, to really throw a system out of whack. You know, talk about civil disobedience, you just put on a big billboard at 6:00PM on Tuesday, every single person go make toast. And then, bam.</p>
<p><strong>Scott:</strong> I love this idea. I love this idea.</p>
<p><strong>Susan:</strong> Managing a grid is a lot more complicated than people think and these types of algorithms could potentially really, really cut down on problems with spikes like that.</p>
<p><strong>Scott:</strong> Like I’m noticing a lot of toaster sales. People talking about toasters going on around here, I’m a little fearful. You may have to crank it up.</p>
<p><strong>Susan:</strong> Right after we’re done here I’m going to open up my browser and I’m going to see an advertisement to sell me a toaster.</p>
<p><strong>Scott:</strong> I think there’s some things in the medical side that we didn’t talk about like, identifying cancer, or like, being able to go into this imagery a lot better and tell you what’s going on. You touched on like three dimensional reconstruction and being able to look at it better but, you can also have areas pointed out to you like, “Well, this looks like a problem.”</p>
<p><strong>Susan:</strong> This is not your standard kidney. One of the classic things in facial recognition, the first thing you always learn about is using <a href="https://en.wikipedia.org/wiki/Principal_component_analysis">principal component analysis</a> or something along those lines to say, “This is what the standard face looks like” so, recognizing faces and recognizing those things. You can do that with, effectively, a kidney but, with a lot better results as you use much stronger techniques. And, now you walk in for your weekly, your monthly, your yearly exam and, you quickly zip around, do an MRI or whatever technique they’re going to use to scan the inside of your body and, poof, areas in you are marked with little highlights. You know, green, yellow, red, black.</p>
<p><strong>Scott:</strong> Ooh, shouldn’t have done that when I was 18, yeah.</p>
<p><strong>Susan:</strong> It’s like you may want to get that removed today? This one, you just may need to exercise a little bit more.</p>
<h3 id="are-there-going-to-be-robot-ai-powered-doctors">Are there going to be robot, AI powered doctors?</h3>
<p><strong>Scott:</strong> Or strap you into a chair dentists that do your dental work for you?</p>
<p><strong>Susan:</strong> Well the whole thing has been a growing thing for a long time and, one of the biggest problems, I understand, in that field is latency. You know, a thousand miles, speed of light and all the equipment in between means, if you’re going to move a scalpel and you’ve got a little bit of a delay there, machine learning could enable that a lot more. Again, getting to the point where the surgeon is maybe doing more about guiding what’s going to go on and not exactly doing what’s going to go on. It does the perfect stitch for them, they don’t actually have to do it themselves.</p>
<p><strong>Scott:</strong> Do a perfect stitch here and then, do a perfect stitch here.</p>
<p><strong>Susan:</strong> Exactly. Cauterize over there. I saw a while ag, a really cool thing where they were taking imagery of a beating heart and fixing it with, I think there was like some sort of strobe light that would sync up to it so the doctor would see it synced up and then the scalpel would actually, the tip of the scalpel would move to stay the same amount away from the beating heart so that it looks like it’s a still heart and they can actually do surgery in real time on a beating heart.</p>
<p><strong>Susan:</strong> That is the future of medicine. There’s a competition to basically build the tricorder, you know, like every single year they try to incorporate more and more of those things into it and, it only makes sense.</p>
<p><strong>Susan:</strong> Don’t you want your doctor to be able to come in and just go, “Done.” You didn’t have to set up some sort of appointment and there it is.</p>
<p><strong>Scott:</strong> Scientific advancement might start coming quicker too as ML and AI just really starts getting applied and used just like electricity did in the 1900’s or, people figuring out radioactivity.</p>
<p>In 10 years try to find a researcher that’s not using machine learning to analyze data. It’s going to become like water to people.</p>
<p><strong>Susan:</strong> Well that was your world, teasing a weak signal out using machine learning techniques.</p>
<p><strong>Scott:</strong> Absolutely. You could try to set up rules and write them but it becomes hard because there are all these exceptions. It might be better if I just tell it: “That’s right, that’s wrong, that’s right, that’s wrong. If this is of that type, that’s of this type.” Then you just do that a few thousand times and then say, “Figure it out yourself.” You pick all the parameters in order to satisfy that and it works very well. And, it totally changes how you think about the world. I could spend all my time writing an algorithm or, I could spend all my time getting relevant data and labeling it and then, how is that going to turn out in the end? We’re seeing over and over that spending the time on the algorithm is not usually the best option unless you have a very small amount of data.</p>
<p><strong>Susan:</strong> Well, you know, there’s a truism in the machine learning world and, we’ve kind of hit this before but, data will live forever, your algorithm likely won’t.</p>
<p><strong>Scott:</strong> It always gets better.</p>
<p><strong>Susan:</strong> The algorithm is <a href="https://blog.deepgram.com/ai-show-different-types-of-machine-learning/">what makes you money right now</a> but, I can almost guarantee you, 10 years from now, it’s not going to be that same model structure, even, fundamental technology. But, you’ll probably keep going back to the dataset that you collected.</p>
<p><strong>Scott:</strong> You see this all over the place. The academic datasets and texts and images and speech that have existed for the past 40 years are still used to train models today.</p>
<h2 id="what-does-your-ai-utopia-look-like">What does your AI Utopia look like?</h2>
<p><strong>Scott:</strong> So for my Utopia I want my robot friend. I don’t know if it’s a phone, if it’s a physical thing that can roll around and dance or something stupid but, you know, something that you can talk to and it does stuff for you. Maybe it doesn’t have to physically do it for you but, call somebody up or schedule a cake to be ordered or pick up donuts o, suggest food. You’re actually like, “I like that, I’m glad I didn’t have to go do that discovery. This is great, you know? Tell me more, friend.” That will be really dope for me. What about you?</p>
<p><strong>Susan:</strong> My personal, I like the travel aspect. Personally, that’s driven a large chunk of my life - the freedom to go places easily and see places easily.</p>
<p><strong>Scott:</strong> Teleporter. You’re sleeping, you come in and out of consciousness and you wake up in a new place. Hey, that’s teleporting man, if you can get moved while you’re sleeping.</p>
<p><strong>Susan:</strong> One of my best travel experiences was we were in Seville in Southern Spain and, we got a night train to Barcelona. We were dead tired because, long story but, we get on this train, we fall asleep in a nice comfortable sleeping car, and we woke up to the Catalina coast with the sunrise. It was like, “This is what I want for every trip.”</p>
<p><strong>Scott:</strong> All traveling should be like this.</p>
<p><strong>Susan:</strong> It should be the same thing, we’re going to Yellowstone or, going to Grand Canyon or just going skiing. It’s like,” I’m going to fall asleep at the end of a normal day. Those dead hours that I’m not conscious of the world, use them productively, get me somewhere cool.” Get me to wake up at a great place every day and I’ll be happy. That to me is a really, really huge thing.</p>
<p><strong>Scott:</strong> Well we should ask our listeners, what do you think will make the most positive impact? What are the things you’re excited about? We’d love to hear about it.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/ai-show-what-will-the-ai-utopia-look-like/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
