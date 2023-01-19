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

const metadata = { "headings": [{ "depth": 2, "slug": "whats-the-first-thing-thats-going-to-go", "text": "What\u2019s the first thing that\u2019s going to go?" }, { "depth": 2, "slug": "are-they-going-to-take-our-jobs", "text": "Are they going to take our jobs?" }, { "depth": 2, "slug": "technology-is-high-tech-mediocrity", "text": "Technology is high-tech mediocrity" }, { "depth": 2, "slug": "creatives-join-doctors-and-pilots-in-the-homeless-shelters", "text": "Creatives join doctors and pilots in the homeless shelters" }, { "depth": 2, "slug": "what-about-ai-dating", "text": "What about AI dating?" }, { "depth": 2, "slug": "the-machines-use-us-for-only-one-thing", "text": "The machines use us for only one thing" }, { "depth": 2, "slug": "your-insurance-premiums-go-up", "text": "Your insurance premiums go up" }], "source": `<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/570095520&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" width="100%" height="166" frameborder="no" scrolling="no"></iframe>

**Scott:** Welcome to the AI Show. Today, we're asking the question: What does the AI dystopia look like?

**Susan:** Oh, man, we are going down the tubes. It's going to be terrible.

**Scott:** Let's take it to negative town. The world is over.

**Susan:** The world, as we knew it, ends basically every year and a half as the next revolution hits, but this is the last one.

**Scott:** There's a law against that, isn't there?

**Susan:** There is?

**Scott:** Everything has a life expectancy about twice what its current age is, but until it abruptly dies.

**Susan:** Oh, yeah, that's cool. I've got to look that one up.

**Scott:** Yeah, so the abrupt death is coming. Everything looks like we're going to live twice as long.

**Susan:** Well, exactly. Well, everybody keeps saying, "Hey, the pendulum's going to swing back, and technology is going to help us more than hurt."

**Scott:** Hey, we're still alive, right?

**Susan:** That's all true up until the very last time. Then, that last time, people are like, "Well, I guess it didn't swing back that time."

**Susan:** Man, there's a lot to be pessimistic about.

## What's the first thing that's going to go?

**Susan:** Oh, the first thing is privacy.

**Scott:** Privacy's number one?

**Susan:** Everybody knows that their privacy is not nearly what it may have been in the past.

**Scott:** What is privacy anyway?

![bigbro](https://res.cloudinary.com/deepgram/image/upload/v1661976812/blog/what-does-the-ai-dystopia-look-like-ai-show-2/1984_by_iskallvinter_d15owbe.jpg)

*Photo credit [iskallvinter](https://www.deviantart.com/iskallvinter/art/1984-70025882)*

**Susan:** Now, we're going to take the loss of privacy to the next level. Not only will they have your data, but they'll have the computing power and the algorithms to actually do something with it.

**Scott:** This isn't like drones looking in your bedroom window.

**Susan:** Who cares how many data points you have, if you can't actually make sense of them? But you know, we can actually listen to every single phone call and record it. But, if you can't actually do anything with all that audio, who cares?

**Susan:** Now we can take all the surveillance cameras, and we can analyze video.

**Susan:** We can put together your entire human history by taking pictures from 4000 different things.

**Scott:** Your browser history.

**Susan:** The smarts are finally there to analyze multiple terabytes of data and come up with you.

**Scott:** Does Google become a state-owned company?

**Susan:** Well, no, Google owns the state.

**Scott:** They become the state. Google's the state.

**Susan:** The United States of Google?

**Scott:** The United States of Google!

**Susan:** How about you, Scott? Where do you think the dystopian future of AI goes?

**Scott:** Well, I think we should bring this to self-driving cars. Every inch of your life is known.

**Susan:** Is this the trolley problem?

**Scott:** You're going to start driving around, or you're not driving around anymore. You've got mainly machines that drive for you.

**Susan:** Of course.

**Scott:** But now, what are they going to do? They're going to drive you around and take you by the billboard that's also AI powered.

**Susan:** I love it! It's like why are we taking this route? Oh, what's that billboard there?

**Scott:** Everybody always has the Uber driver experience. "Why are we going this way?" Well, this is going to have a monetary reason behind it.

**Susan:** From upfront a voice says: "This is faster. Trust me." Why are we stopped in the middle of nowhere, with nothing but advertisement around me?

**Scott:** Is the AI that drives the car like a humanoid? It turns around. "Trust me. It's faster. (robotic voice)" Yeah.

**Susan:** Oh, well, there's a privacy bent to this, too. Just think of it.

**Scott:** No more sexual relations in the back of the Uber?

**Susan:** No, it's creepy if you did, but no. Now, every last inch of your entire life is ... Your position is known. You get in the car, and it knows where you're at, but more than that, it's just a big data collection device. It's built for it. All those LIDARS are constantly going, scanning every single thing around them, all that stuff.

**Scott:** Before, it just knew your position. Now it knows your total surroundings.

**Susan:** The natural outcropping of self-driving car technology is really fantastic image recognition and classification. Not only is it going around recording every last square inch of visual detail, but man, it's saying, "That is a flower pot from Ikea."

**Susan:** $12.99.

**Scott:** You could buy this.

**Susan:** As you're in the car, you're sitting here. You're buying stuff.

**Susan:** As you're in your car, you're looking around over there, and a little advertisement pops up. It's like, "You can also have this flowerpot for $9.99. Just press here." It sees your eyes, and there you go. The attention economy.

**Scott:** Well, have you ever seen the show Black Mirror?


![mirror](https://res.cloudinary.com/deepgram/image/upload/v1661976813/blog/what-does-the-ai-dystopia-look-like-ai-show-2/download-1.jpg)

*"Fifteen Million Merits" Series 1, episode 2 of Black Mirror.*

**Susan:** First of all, if you see the first episode... Go to the second or third episode. The first one will just...

**Scott:** Yeah, don't watch the first.

**Scott:** Yeah, but the attention economy is discussed there in one of the episodes a little bit, right?

**Susan:** There's an episode where they're on bikes, just pedaling aimlessly, just to pay off their credits, and they're being forced to watch TV advertisements. Oh my. That's dystopian.

**Scott:** If they start to fall asleep, it'll jolt them back awake, because AI's watching them. It knows what they're looking at, what they're taking in.

**Susan:** No! Yeah. They're forced to watch a commercial, and it knows whether they're paying attention or not.

**Scott:** You can skip the commercial, but you'll have to pay.

**Susan:** How evil is that? I've got my headphones on now, and a commercial comes on, I just go like that, but then the commercial will pause, and you put them back on, and it's right back there where it was at.

**Scott:** Right back there.

**Susan:** I was like, what? You're just like, oh, I'm going to get smart and switch channels, and it's still there-the commercial does not go away!

**Scott:** Yeah, it's the same one.

**Susan:** Until you listen to that commercial and actually pay attention.

**Scott:** Then you give in. You're like, okay, my AI overlord.

**Susan:** Oh, whew. That is is tremendous.

## Are they going to take our jobs?

**Susan:** If you drive something, you can forget about it. Cars, trucks, planes, which ... Man, get in an aircraft. There's no cockpit.

**Scott:** This is the easiest job ever, right? Why not have an AI pilot?

**Susan:** Yeah, exactly, and by the way most accidents happen up in front, just saying. Maybe it'll be a lot safer, not that airlines are less safe right now. The autonomous revolution. I mean, drones are going to start delivering your food.

**Scott:** They could poison you. Or they just selectively, "Oh, you're not a Trump supporter? Your food is going to be cold."

## Technology is high-tech mediocrity

**Susan:** I was just thinking the whole drone revolution there, delivery revolution, suddenly you're starting to get the seconds stuff. You've got to pay for Prime to get the fresh eggs, right? These are still technically good, but they're one day away from expiration. It's like, magically, all the food that gets delivered to your house, unless you pay the premium, is one day away from expiration.

**Scott:** But it's been managed very well, like the warehouse is near you. It's been stocked just for you, because they know.

**Susan:** Oh yeah, yeah. It knows exactly that cutting point, you know? We call this Susan's Law here.

**Scott:** Susan's Law.

**Susan:** Susan's Law: Technology allows you to make something just good enough. The better your technology is, the finer you can cut that line to be just good enough for the customer that they'll pay for it ... I think we've seen this.

**Scott:** Absolutely.

**Susan:** As technology's gotten more and more capable, we've gotten to the ... We're always on the verge of saying, "This is so bad! If one more thing happened, I'd get rid of it. If just one more thing ..."

**Scott:** Yep, but you won't. You just keep paying.

**Susan:** You won't, because It'll be so perfectly honed to you, that you'll never be actually happy. You'll be on the verge of so unhappy that you'll get rid of it, but you won't actually get rid of it.

**Scott:** AI will optimize the frustrations. AI knows your dreams, and it's going to make sure that you never achieve them, but you're going to be very, very close, always.

**Scott:** Just one more little bit, that's it. You're so close.

**Susan:** You will be addicted to things, because of AI, that are ridiculous. It's like they will have honed the rewards system on whatever to be, well, if you just click this one more time-

**Scott:** Just one more, just one more, what's the big deal.

**Susan:** Just one more ... Eight hours later, you're sitting there in a pile of filth, and you're like, just one more click, and I'll go to sleep.

**Scott:** Well, that might already happen on YouTube. Doctors and pilots are now unemployable.

**Scott:** Yep, what about doctors?

![doc](https://res.cloudinary.com/deepgram/image/upload/v1661976814/blog/what-does-the-ai-dystopia-look-like-ai-show-2/hungry-will-work-for_.jpg)

**Susan:** Oh, doctors, geez ... Not to offend any doctors out there.

**Scott:** You're gone. You're a goner.

**Susan:** A subjective opinion is probably not a good one.

**Scott:** Are you saying doctors are subjective?

**Susan:** Sometimes, sometimes. They're professionals. They're well-trained, but they're still people.

**Scott:** Yeah, they get tired. They're trying to get their Medicare bill/Medicaid bill paid.

**Susan:** After you've seen the 90th simple cold come in and act like they're about to die of the plague and ask for all the wrong medicines, and you have to tell them, "It's just a cold. Drink some fluids. Get some sleep. Tomorrow, you'll feel fine." AI will take over that.

**Scott:** I mean, saying that's kind of an easy job?

**Susan:** I'll say this: that we train doctors and pilots for that last little one percent. AI's going to cut that down to a half a percent, and then a quarter of a percent. Take away that 99, that big huge grunt of stuff that is all normal, right? We understand the things that they go through. Here's the lifecycle of the flu. Here's the whatever. Here's the things to look for. It is this.

**Scott:** Doctors, all your jobs, they're gone.

**Susan:** Doctors, pilots.

**Scott:** Pilots gone.

**Susan:** Oh, did you see the ticket bot?

**Scott:** Ticket bot?

**Susan:** Trying to get you out of tickets, law programs.

**Scott:** Well, now it's an arms race, right? To give you tickets and to get you out of tickets. Funding the AI technology boom. The war on tickets. Old laws become asphyxiating.

**Susan:** Another interesting thing is, as technology gets better we're able to enforce laws that when they were put in place they were never intended to be enforced at that level. Just think about speeding tickets and the like. The idea of speeding and the resources put into catching people and all that were from before we had technology - like cameras and stuff like that. The laws were put in place back then.

![cops](https://res.cloudinary.com/deepgram/image/upload/v1661976815/blog/what-does-the-ai-dystopia-look-like-ai-show-2/lexus_police_edition_by_eun_su_d4xr1fd-1.jpg)

*Photo credit: [Eun-su](https://www.deviantart.com/eun-su/art/Lexus-Police-Edition-298553593)*

**Scott:** Yeah, a while ago.

**Susan:** Now, we get better and better and easier and easier enforcement, and we enforce disproportionately to how the laws were initially put in place.

**Susan:** This enforcement allows for new realms of ... I don't want to say abusing the law, but making it very easy to be in violation of the law and get caught, to the detriment of society, you know?

**Scott:** It might go sour, if you can be caught for everything.

**Susan:** Literally. I mean, you walk out the door and you get in your car, you've probably broken four laws..

**Scott:** Maybe the laws will get better defined now. Couldn't that be a good thing? No, probably not. That's not going to happen.

**Susan:** An AI-enforced legal system, oh man!

**Scott:** Things might go quicker. No, they'll just frustrate you to extract more money from you.

**Susan:** Pretty much, yeah.

**Scott:** Isn't that the Government's job, roughly, to protect you just enough to extract value out of you?

**Susan:** Just enough? Ooh, I think we're in a different territory there.

**Scott:** Well, they're investing a lot in AI.

**Susan:** Maybe I want some AI in my government.

## Creatives join doctors and pilots in the homeless shelters

**Scott:** Well, for now, until they get too efficient. Creative jobs, writers, anything like that? What's that? What's going to happen to them?

**Susan:** Well, I mean, doesn't Facebook already have like a snippet writer for articles?

**Scott:** Yeah, rather than a clickbait title, how about a little summary? Here's two sentences that, hey, if you just knew this one weird trick about swimming pools...

**Susan:** There's been a lot of research about actually generating well-formed text, well-formed software. We're seeing code assistance inside of, again, Facebook, trying to write little snippets of where things might be going wrong. We're seeing ... Coders, look out. Writing copy, actually taking and summarizing articles, these are all areas where AI is making real progress. I mean, let's be honest here. It's not there yet, but does that mean six months from now, a year, five years?

**Scott:** Give it a couple years, stir the pot.

**Susan:** Even if it's ... We'll give it 10 years away, 10 years away, taking away what we thought was deeply creative work? That is a staggering thought right there, you know?

**Scott:** Yeah.

**Susan:** That's deeply into interesting job territory there.

**Scott:** You mean, pop music is formulaic?

**Susan:** Oh, geez, of course. Pop music ... Oh man, we've got to write a...

**Scott:** A pop music bot?

**Susan:** A pop music bot.

**Scott:** I love it.

**Susan:** Well, we've got to give it a cool, cool name, too, like Electon, elector ... I don't know. Let's see what. I'm going to make up a word and see how it gets transcribed.

**Scott:** Yeah, there you go.

**Susan:** That's what it'll be, Eclector.

**Scott:** DeadElectron.

**Susan:** Yeah, DeadElectron! I like it, DeadElectron.

<iframe src="https://www.youtube.com/embed/gA03iyI3yEA" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

*This company really does make AI music.*

**Scott:** There we go, yeah. Is anything going to get better? Is my life going to be easy now, because AI dictates my life? Are you going to get the Jetson's finger cramp from pressing the button?

**Susan:** From pressing the button? It was a long day at work! My finger is so cramped from pushing that button all day long!

**Scott:** Now you can have a to-do list, generated from your friendly AI, telling you what to do.

**Susan:** That's a cool thing. Tell me another good thing, Scott?

**Scott:** Yeah, do you think that that's actually a good thing, though?

**Susan:** Of course, it's going to be shaping the way that you're going to do your day. I mean, yeah, AI is saying, hey, you had these four tasks, and this fifth one that you don't quite remember me putting on there for you.

**Scott:** You're supposed to do this. You're supposed to walk by this billboard.

**Susan:** I don't really remember saying I had to do this.

**Scott:** You're supposed to buy the no-egg mayo, okay?

**Susan:** We're basically going to be well-trained humans. I mean, really, people want to be lazy, right?

**Scott:** It's the human condition.

**Susan:** It's the human condition. If you take that cognitive load off, it's like, "Yours; you can take it." Then, you just follow along like the herd. As long as it's not too far away from what you expect, you're like, ah, whatever. Here's the list of things I'm supposed to do today to be a functioning adult. Oh, on there is buy such-and-such a brand mayonnaise. Oh, of course, that's what I wanted, click.

## What about AI dating?

**Susan:** What do you think about AI dating? Will your soulmate be picked out?

**Scott:** For you, yeah, so you have my AI talk to your AI. They'll figure things out.

**Susan:** Ooh, they can go on a pre-date.

![dating](https://res.cloudinary.com/deepgram/image/upload/v1661976816/blog/what-does-the-ai-dystopia-look-like-ai-show-2/dating-bots.jpg)

*The press seem to believe that we will be dating robots, when indeed, it's the robots who'll date in our stead-proxy dating.*

**Scott:** Yeah, a pre-date to figure out if the ... It's like blind dating, but you blame the AI now, if it doesn't go well.

**Susan:** In a blink of an eye, will the AIs go through the whole thing, the whole date a couple times?

**Scott:** The whole thing. Yeah, a second later, they decided.

**Susan:** They'll decide to shack up together. They'll get married. They'll have little AI children. They'll have some messy fights. Then you'll decide to get divorced, and it'll all break up, and by the end of it, it comes back to you, and it says, "Stay away from this one."

**Scott:** It happens in the span of a second.

**Susan:** It's not going to end well.

**Scott:** It's going to take all the spice out of life.

**Susan:** Yeah, but what if it comes back and says, "This is the one." Now, you sit down and you're like, "My AI says you're the one." The other one says, "Yeah, my AI says you're the one," so how should we act at that point.

**Scott:** Now you're entitled, right? You're stuck with me. We have to be together.

**Susan:** We have to be together. Should I even try?

**Scott:** You just start letting it go right then, right? There's no salad for dinner. It's two T-bone steaks and some Indian food afterward.

**Susan:** Your first meal, you're sitting there, you eat, you belch, you undo the top button. It's like, it doesn't matter. You're my one. You're not going to leave.

**Scott:** It's decided.

**Susan:** The AIs have determined what's going to go on here.

**Susan:** Wait. Let me check how many children we're supposed to have. Oh, two. AI is your new boss

**Scott:** They'll be watching you at work, too. It's like this is some little Santa stuff here.

**Susan:** Do you think they're going to be watching at work? What are they going to do?

**Scott:** Yeah, performance measurement, man. It's like the thing that everybody gets advertised to on Instagram now, that's about slouching. You tape it to your back, and it tells you if you're leaned over, and it zaps you, right? Now, at work, it'll be cameras watching you.

**Susan:** Everywhere.

> "They'll be looking at your email. Have you sent enough emails today? Have you attended enough meetings? Have you spoken enough words to your coworkers? Have you said enough buzzwords?"

**Susan:** A performance review will come into your email, completely crafted by some sort of machine learning algorithm.

**Scott:** Every day.

**Susan:** It'll be brutal. Here are the 10 things you did well, and here's the 10 things you need to work on, you know?

**Susan:** The 10 up at the top- They're kind of fluff.

**Scott:** It's like we have to give you a sandwich.

**Susan:** Yeah, we've got to make you think you're any good but...

**Scott:** A perfectly crafted visual representation of your day to make you react and like, damn, I've got to work harder.

**Susan:** Here's the box you need to be in. If you're not in this box, you are a problem.

**Susan:** There's huge promise in that. Don't get me wrong, but there are dangers of fitting too much to the mean there.

## The machines use us for only one thing

**Scott:** What's the value of a human anymore? I mean, this is just going to be The Matrix soon, where we're just a power source for AI overlords. What's the deal?

**Susan:** I never quite got the power source of the Matrix anyway.

**Scott:** I don't know the power source thing either, but some other thing ... I don't know.

**Susan:** That was weird.

**Scott:** Are we actually going to be more creative?

**Susan:** Oh, is only creativity left?

![imagine](https://res.cloudinary.com/deepgram/image/upload/v1661976817/blog/what-does-the-ai-dystopia-look-like-ai-show-2/04-11_Robots_repost-unsplash-web.jpg)

*Source: [Jehyun Sung](https://unsplash.com/photos/xdEeLyK4iBo)*

**Scott:** Our only job ... Yeah, that's it, and you take in all the inputs and you're like, "No, it should be this way."

**Susan:** You do that one creative thing a year. That's it. There's this exact one moment where you add randomness to the system.

**Scott:** Exactly.

**Susan:** You do some irrational thing.

**Scott:** "No, it shouldn't be this way!"

**Susan:** Suddenly, you get $100,000 because that was your job. That one creative thing.

**Scott:** We needed that. We needed that random thought there. Yeah, everything ... We're too logical.

**Susan:** Thanks, you're our random number generator.

**Scott:** Yeah. What ... We already know the answer.

**Scott:** Random number generator.

**Susan:** They don't need us for power. They need us for random number generation.

**Scott:** We figured it out, yeah, yeah. Well, this is the value of children, right?

**Susan:** Talk about randomness. You never thought the things that could happen would happen. Yeah, 2:00 in the morning, what is that sound? Why is there paint everywhere? Please, please, I told you, not the cat! I'm sorry, is that what we were talking about, Scott?

**Scott:** We'll just all be children in the AI world now. You know, just banging pots and pans together.

**Susan:** I'm looking forward to that.

**Scott:** Yeah, it sounds like a pretty sweet existence, right?

**Susan:** Nap time, you know?

**Scott:** With milk, warm milk, and you have your blanket.

**Susan:** It's going to be awesome. Yeah, the lights slowly go down.

![nap](https://res.cloudinary.com/deepgram/image/upload/v1661976818/blog/what-does-the-ai-dystopia-look-like-ai-show-2/napercise.jpg)

*["Napercise"](https://www.forbes.com/sites/brucelee/2017/04/29/napercise-why-nap-for-free-when-you-can-pay-for-it/#68e889164be4), as David Lloyd Clubs in London calls it, is not far off. Soon all humans will do is be randomly creative and drink juice from sippy cups.*

**Scott:** Is this something you did at school back in the day? This is something that they do at school now in California, at least. You have your own blanket. You get your milk. You take a nap.

**Susan:** I love it.

**Scott:** You're like 10.

**Susan:** Whoa, 10?

**Scott:** I mean, 9, 8-

**Susan:** Great. I remember doing it from kindergarten.

**Scott:** Yeah, I know. I remember it way back. Did you have your special mat?

**Susan:** The most valuable skills from kindergarten ... We completely forget those. Everybody should have nap time.

**Scott:** Well, because we get trained to be more like robots, but now the robots are finally going to take over the rightful owner of those tasks, and now we just get to be children all the time.

## Your insurance premiums go up

**Susan:** They're going to tell you when you're not doing the optimal thing each day, right? This is when you should be napping. Oh, man, oh, you didn't nap. For that day, your insurance premium went up by a dollar. You are not living the optimally healthy life.

**Scott:** Yeah, for randomness. They need you to be healthy for the randomness.

**Susan:** Yeah, but I'm just saying that AIs are going to come in and judge every second of your life, and you're going to be charged more based off of you not living the right way. That beer you wanted? It didn't just cost a couple bucks. It also got reported back to your insurance company.

**Scott:** Well, maybe human lifespan doesn't need to be as long, now, because we lose our mojo by the time we're 30, 20, 15, you know?

**Scott:** It's like, eh, screw you, after a while.

**Susan:** Ooh, it could be like Logan's Run. At 25, you're dead-only they trick us. They say, "Your brain is being uploaded into the cloud. In reality, no.

**Scott:** Bye, everybody. I can't wait to see all my ancestors.

**Susan:** Yeah, some quick little chatbot has put up that fake that says it's you for about a day, until everybody forgets that you exist.

**Scott:** That's true. Let's say, a week, right? Yeah.

**Susan:** A week, for a week your loved ones are typing to you.

**Scott:** "Oh, look at you. Hey ..."

**Susan:** "Oh, it's so great in the cloud." They say, "Yes, you will love it here." A week later, "Got to go now. There's so many exciting things. I can't pay attention to chat anymore."

**Scott:** Yeah, "I can't wait to see you."

**Susan:** Then erase that from the system.

**Scott:** Then they ghost you, yeah. All right, well, we have some worst case scenario. Maybe in the future, we'll have some best case scenario. I mean, the best?

**Susan:** Yeah.

**Scott:** At least something.

**Susan:** Do you think [AI could actually be good for the world?](https://youtu.be/pE5-K7gg0kE)

**Scott:** Nah, I don't think so.

**Susan:** You know what? I have a sneaking suspicion that for everything we said was bad, there might be a couple good things.

**Scott:** Are there some good things?

**Susan:** There just might be.`, "html": '<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/570095520&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" width="100%" height="166" frameborder="no" scrolling="no" />\n<p><strong>Scott:</strong> Welcome to the AI Show. Today, we\u2019re asking the question: What does the AI dystopia look like?</p>\n<p><strong>Susan:</strong> Oh, man, we are going down the tubes. It\u2019s going to be terrible.</p>\n<p><strong>Scott:</strong> Let\u2019s take it to negative town. The world is over.</p>\n<p><strong>Susan:</strong> The world, as we knew it, ends basically every year and a half as the next revolution hits, but this is the last one.</p>\n<p><strong>Scott:</strong> There\u2019s a law against that, isn\u2019t there?</p>\n<p><strong>Susan:</strong> There is?</p>\n<p><strong>Scott:</strong> Everything has a life expectancy about twice what its current age is, but until it abruptly dies.</p>\n<p><strong>Susan:</strong> Oh, yeah, that\u2019s cool. I\u2019ve got to look that one up.</p>\n<p><strong>Scott:</strong> Yeah, so the abrupt death is coming. Everything looks like we\u2019re going to live twice as long.</p>\n<p><strong>Susan:</strong> Well, exactly. Well, everybody keeps saying, \u201CHey, the pendulum\u2019s going to swing back, and technology is going to help us more than hurt.\u201D</p>\n<p><strong>Scott:</strong> Hey, we\u2019re still alive, right?</p>\n<p><strong>Susan:</strong> That\u2019s all true up until the very last time. Then, that last time, people are like, \u201CWell, I guess it didn\u2019t swing back that time.\u201D</p>\n<p><strong>Susan:</strong> Man, there\u2019s a lot to be pessimistic about.</p>\n<h2 id="whats-the-first-thing-thats-going-to-go">What\u2019s the first thing that\u2019s going to go?</h2>\n<p><strong>Susan:</strong> Oh, the first thing is privacy.</p>\n<p><strong>Scott:</strong> Privacy\u2019s number one?</p>\n<p><strong>Susan:</strong> Everybody knows that their privacy is not nearly what it may have been in the past.</p>\n<p><strong>Scott:</strong> What is privacy anyway?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976812/blog/what-does-the-ai-dystopia-look-like-ai-show-2/1984_by_iskallvinter_d15owbe.jpg" alt="bigbro"></p>\n<p><em>Photo credit <a href="https://www.deviantart.com/iskallvinter/art/1984-70025882">iskallvinter</a></em></p>\n<p><strong>Susan:</strong> Now, we\u2019re going to take the loss of privacy to the next level. Not only will they have your data, but they\u2019ll have the computing power and the algorithms to actually do something with it.</p>\n<p><strong>Scott:</strong> This isn\u2019t like drones looking in your bedroom window.</p>\n<p><strong>Susan:</strong> Who cares how many data points you have, if you can\u2019t actually make sense of them? But you know, we can actually listen to every single phone call and record it. But, if you can\u2019t actually do anything with all that audio, who cares?</p>\n<p><strong>Susan:</strong> Now we can take all the surveillance cameras, and we can analyze video.</p>\n<p><strong>Susan:</strong> We can put together your entire human history by taking pictures from 4000 different things.</p>\n<p><strong>Scott:</strong> Your browser history.</p>\n<p><strong>Susan:</strong> The smarts are finally there to analyze multiple terabytes of data and come up with you.</p>\n<p><strong>Scott:</strong> Does Google become a state-owned company?</p>\n<p><strong>Susan:</strong> Well, no, Google owns the state.</p>\n<p><strong>Scott:</strong> They become the state. Google\u2019s the state.</p>\n<p><strong>Susan:</strong> The United States of Google?</p>\n<p><strong>Scott:</strong> The United States of Google!</p>\n<p><strong>Susan:</strong> How about you, Scott? Where do you think the dystopian future of AI goes?</p>\n<p><strong>Scott:</strong> Well, I think we should bring this to self-driving cars. Every inch of your life is known.</p>\n<p><strong>Susan:</strong> Is this the trolley problem?</p>\n<p><strong>Scott:</strong> You\u2019re going to start driving around, or you\u2019re not driving around anymore. You\u2019ve got mainly machines that drive for you.</p>\n<p><strong>Susan:</strong> Of course.</p>\n<p><strong>Scott:</strong> But now, what are they going to do? They\u2019re going to drive you around and take you by the billboard that\u2019s also AI powered.</p>\n<p><strong>Susan:</strong> I love it! It\u2019s like why are we taking this route? Oh, what\u2019s that billboard there?</p>\n<p><strong>Scott:</strong> Everybody always has the Uber driver experience. \u201CWhy are we going this way?\u201D Well, this is going to have a monetary reason behind it.</p>\n<p><strong>Susan:</strong> From upfront a voice says: \u201CThis is faster. Trust me.\u201D Why are we stopped in the middle of nowhere, with nothing but advertisement around me?</p>\n<p><strong>Scott:</strong> Is the AI that drives the car like a humanoid? It turns around. \u201CTrust me. It\u2019s faster. (robotic voice)\u201D Yeah.</p>\n<p><strong>Susan:</strong> Oh, well, there\u2019s a privacy bent to this, too. Just think of it.</p>\n<p><strong>Scott:</strong> No more sexual relations in the back of the Uber?</p>\n<p><strong>Susan:</strong> No, it\u2019s creepy if you did, but no. Now, every last inch of your entire life is \u2026 Your position is known. You get in the car, and it knows where you\u2019re at, but more than that, it\u2019s just a big data collection device. It\u2019s built for it. All those LIDARS are constantly going, scanning every single thing around them, all that stuff.</p>\n<p><strong>Scott:</strong> Before, it just knew your position. Now it knows your total surroundings.</p>\n<p><strong>Susan:</strong> The natural outcropping of self-driving car technology is really fantastic image recognition and classification. Not only is it going around recording every last square inch of visual detail, but man, it\u2019s saying, \u201CThat is a flower pot from Ikea.\u201D</p>\n<p><strong>Susan:</strong> $12.99.</p>\n<p><strong>Scott:</strong> You could buy this.</p>\n<p><strong>Susan:</strong> As you\u2019re in the car, you\u2019re sitting here. You\u2019re buying stuff.</p>\n<p><strong>Susan:</strong> As you\u2019re in your car, you\u2019re looking around over there, and a little advertisement pops up. It\u2019s like, \u201CYou can also have this flowerpot for $9.99. Just press here.\u201D It sees your eyes, and there you go. The attention economy.</p>\n<p><strong>Scott:</strong> Well, have you ever seen the show Black Mirror?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976813/blog/what-does-the-ai-dystopia-look-like-ai-show-2/download-1.jpg" alt="mirror"></p>\n<p><em>\u201CFifteen Million Merits\u201D Series 1, episode 2 of Black Mirror.</em></p>\n<p><strong>Susan:</strong> First of all, if you see the first episode\u2026 Go to the second or third episode. The first one will just\u2026</p>\n<p><strong>Scott:</strong> Yeah, don\u2019t watch the first.</p>\n<p><strong>Scott:</strong> Yeah, but the attention economy is discussed there in one of the episodes a little bit, right?</p>\n<p><strong>Susan:</strong> There\u2019s an episode where they\u2019re on bikes, just pedaling aimlessly, just to pay off their credits, and they\u2019re being forced to watch TV advertisements. Oh my. That\u2019s dystopian.</p>\n<p><strong>Scott:</strong> If they start to fall asleep, it\u2019ll jolt them back awake, because AI\u2019s watching them. It knows what they\u2019re looking at, what they\u2019re taking in.</p>\n<p><strong>Susan:</strong> No! Yeah. They\u2019re forced to watch a commercial, and it knows whether they\u2019re paying attention or not.</p>\n<p><strong>Scott:</strong> You can skip the commercial, but you\u2019ll have to pay.</p>\n<p><strong>Susan:</strong> How evil is that? I\u2019ve got my headphones on now, and a commercial comes on, I just go like that, but then the commercial will pause, and you put them back on, and it\u2019s right back there where it was at.</p>\n<p><strong>Scott:</strong> Right back there.</p>\n<p><strong>Susan:</strong> I was like, what? You\u2019re just like, oh, I\u2019m going to get smart and switch channels, and it\u2019s still there-the commercial does not go away!</p>\n<p><strong>Scott:</strong> Yeah, it\u2019s the same one.</p>\n<p><strong>Susan:</strong> Until you listen to that commercial and actually pay attention.</p>\n<p><strong>Scott:</strong> Then you give in. You\u2019re like, okay, my AI overlord.</p>\n<p><strong>Susan:</strong> Oh, whew. That is is tremendous.</p>\n<h2 id="are-they-going-to-take-our-jobs">Are they going to take our jobs?</h2>\n<p><strong>Susan:</strong> If you drive something, you can forget about it. Cars, trucks, planes, which \u2026 Man, get in an aircraft. There\u2019s no cockpit.</p>\n<p><strong>Scott:</strong> This is the easiest job ever, right? Why not have an AI pilot?</p>\n<p><strong>Susan:</strong> Yeah, exactly, and by the way most accidents happen up in front, just saying. Maybe it\u2019ll be a lot safer, not that airlines are less safe right now. The autonomous revolution. I mean, drones are going to start delivering your food.</p>\n<p><strong>Scott:</strong> They could poison you. Or they just selectively, \u201COh, you\u2019re not a Trump supporter? Your food is going to be cold.\u201D</p>\n<h2 id="technology-is-high-tech-mediocrity">Technology is high-tech mediocrity</h2>\n<p><strong>Susan:</strong> I was just thinking the whole drone revolution there, delivery revolution, suddenly you\u2019re starting to get the seconds stuff. You\u2019ve got to pay for Prime to get the fresh eggs, right? These are still technically good, but they\u2019re one day away from expiration. It\u2019s like, magically, all the food that gets delivered to your house, unless you pay the premium, is one day away from expiration.</p>\n<p><strong>Scott:</strong> But it\u2019s been managed very well, like the warehouse is near you. It\u2019s been stocked just for you, because they know.</p>\n<p><strong>Susan:</strong> Oh yeah, yeah. It knows exactly that cutting point, you know? We call this Susan\u2019s Law here.</p>\n<p><strong>Scott:</strong> Susan\u2019s Law.</p>\n<p><strong>Susan:</strong> Susan\u2019s Law: Technology allows you to make something just good enough. The better your technology is, the finer you can cut that line to be just good enough for the customer that they\u2019ll pay for it \u2026 I think we\u2019ve seen this.</p>\n<p><strong>Scott:</strong> Absolutely.</p>\n<p><strong>Susan:</strong> As technology\u2019s gotten more and more capable, we\u2019ve gotten to the \u2026 We\u2019re always on the verge of saying, \u201CThis is so bad! If one more thing happened, I\u2019d get rid of it. If just one more thing \u2026\u201D</p>\n<p><strong>Scott:</strong> Yep, but you won\u2019t. You just keep paying.</p>\n<p><strong>Susan:</strong> You won\u2019t, because It\u2019ll be so perfectly honed to you, that you\u2019ll never be actually happy. You\u2019ll be on the verge of so unhappy that you\u2019ll get rid of it, but you won\u2019t actually get rid of it.</p>\n<p><strong>Scott:</strong> AI will optimize the frustrations. AI knows your dreams, and it\u2019s going to make sure that you never achieve them, but you\u2019re going to be very, very close, always.</p>\n<p><strong>Scott:</strong> Just one more little bit, that\u2019s it. You\u2019re so close.</p>\n<p><strong>Susan:</strong> You will be addicted to things, because of AI, that are ridiculous. It\u2019s like they will have honed the rewards system on whatever to be, well, if you just click this one more time-</p>\n<p><strong>Scott:</strong> Just one more, just one more, what\u2019s the big deal.</p>\n<p><strong>Susan:</strong> Just one more \u2026 Eight hours later, you\u2019re sitting there in a pile of filth, and you\u2019re like, just one more click, and I\u2019ll go to sleep.</p>\n<p><strong>Scott:</strong> Well, that might already happen on YouTube. Doctors and pilots are now unemployable.</p>\n<p><strong>Scott:</strong> Yep, what about doctors?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976814/blog/what-does-the-ai-dystopia-look-like-ai-show-2/hungry-will-work-for_.jpg" alt="doc"></p>\n<p><strong>Susan:</strong> Oh, doctors, geez \u2026 Not to offend any doctors out there.</p>\n<p><strong>Scott:</strong> You\u2019re gone. You\u2019re a goner.</p>\n<p><strong>Susan:</strong> A subjective opinion is probably not a good one.</p>\n<p><strong>Scott:</strong> Are you saying doctors are subjective?</p>\n<p><strong>Susan:</strong> Sometimes, sometimes. They\u2019re professionals. They\u2019re well-trained, but they\u2019re still people.</p>\n<p><strong>Scott:</strong> Yeah, they get tired. They\u2019re trying to get their Medicare bill/Medicaid bill paid.</p>\n<p><strong>Susan:</strong> After you\u2019ve seen the 90th simple cold come in and act like they\u2019re about to die of the plague and ask for all the wrong medicines, and you have to tell them, \u201CIt\u2019s just a cold. Drink some fluids. Get some sleep. Tomorrow, you\u2019ll feel fine.\u201D AI will take over that.</p>\n<p><strong>Scott:</strong> I mean, saying that\u2019s kind of an easy job?</p>\n<p><strong>Susan:</strong> I\u2019ll say this: that we train doctors and pilots for that last little one percent. AI\u2019s going to cut that down to a half a percent, and then a quarter of a percent. Take away that 99, that big huge grunt of stuff that is all normal, right? We understand the things that they go through. Here\u2019s the lifecycle of the flu. Here\u2019s the whatever. Here\u2019s the things to look for. It is this.</p>\n<p><strong>Scott:</strong> Doctors, all your jobs, they\u2019re gone.</p>\n<p><strong>Susan:</strong> Doctors, pilots.</p>\n<p><strong>Scott:</strong> Pilots gone.</p>\n<p><strong>Susan:</strong> Oh, did you see the ticket bot?</p>\n<p><strong>Scott:</strong> Ticket bot?</p>\n<p><strong>Susan:</strong> Trying to get you out of tickets, law programs.</p>\n<p><strong>Scott:</strong> Well, now it\u2019s an arms race, right? To give you tickets and to get you out of tickets. Funding the AI technology boom. The war on tickets. Old laws become asphyxiating.</p>\n<p><strong>Susan:</strong> Another interesting thing is, as technology gets better we\u2019re able to enforce laws that when they were put in place they were never intended to be enforced at that level. Just think about speeding tickets and the like. The idea of speeding and the resources put into catching people and all that were from before we had technology - like cameras and stuff like that. The laws were put in place back then.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976815/blog/what-does-the-ai-dystopia-look-like-ai-show-2/lexus_police_edition_by_eun_su_d4xr1fd-1.jpg" alt="cops"></p>\n<p><em>Photo credit: <a href="https://www.deviantart.com/eun-su/art/Lexus-Police-Edition-298553593">Eun-su</a></em></p>\n<p><strong>Scott:</strong> Yeah, a while ago.</p>\n<p><strong>Susan:</strong> Now, we get better and better and easier and easier enforcement, and we enforce disproportionately to how the laws were initially put in place.</p>\n<p><strong>Susan:</strong> This enforcement allows for new realms of \u2026 I don\u2019t want to say abusing the law, but making it very easy to be in violation of the law and get caught, to the detriment of society, you know?</p>\n<p><strong>Scott:</strong> It might go sour, if you can be caught for everything.</p>\n<p><strong>Susan:</strong> Literally. I mean, you walk out the door and you get in your car, you\u2019ve probably broken four laws..</p>\n<p><strong>Scott:</strong> Maybe the laws will get better defined now. Couldn\u2019t that be a good thing? No, probably not. That\u2019s not going to happen.</p>\n<p><strong>Susan:</strong> An AI-enforced legal system, oh man!</p>\n<p><strong>Scott:</strong> Things might go quicker. No, they\u2019ll just frustrate you to extract more money from you.</p>\n<p><strong>Susan:</strong> Pretty much, yeah.</p>\n<p><strong>Scott:</strong> Isn\u2019t that the Government\u2019s job, roughly, to protect you just enough to extract value out of you?</p>\n<p><strong>Susan:</strong> Just enough? Ooh, I think we\u2019re in a different territory there.</p>\n<p><strong>Scott:</strong> Well, they\u2019re investing a lot in AI.</p>\n<p><strong>Susan:</strong> Maybe I want some AI in my government.</p>\n<h2 id="creatives-join-doctors-and-pilots-in-the-homeless-shelters">Creatives join doctors and pilots in the homeless shelters</h2>\n<p><strong>Scott:</strong> Well, for now, until they get too efficient. Creative jobs, writers, anything like that? What\u2019s that? What\u2019s going to happen to them?</p>\n<p><strong>Susan:</strong> Well, I mean, doesn\u2019t Facebook already have like a snippet writer for articles?</p>\n<p><strong>Scott:</strong> Yeah, rather than a clickbait title, how about a little summary? Here\u2019s two sentences that, hey, if you just knew this one weird trick about swimming pools\u2026</p>\n<p><strong>Susan:</strong> There\u2019s been a lot of research about actually generating well-formed text, well-formed software. We\u2019re seeing code assistance inside of, again, Facebook, trying to write little snippets of where things might be going wrong. We\u2019re seeing \u2026 Coders, look out. Writing copy, actually taking and summarizing articles, these are all areas where AI is making real progress. I mean, let\u2019s be honest here. It\u2019s not there yet, but does that mean six months from now, a year, five years?</p>\n<p><strong>Scott:</strong> Give it a couple years, stir the pot.</p>\n<p><strong>Susan:</strong> Even if it\u2019s \u2026 We\u2019ll give it 10 years away, 10 years away, taking away what we thought was deeply creative work? That is a staggering thought right there, you know?</p>\n<p><strong>Scott:</strong> Yeah.</p>\n<p><strong>Susan:</strong> That\u2019s deeply into interesting job territory there.</p>\n<p><strong>Scott:</strong> You mean, pop music is formulaic?</p>\n<p><strong>Susan:</strong> Oh, geez, of course. Pop music \u2026 Oh man, we\u2019ve got to write a\u2026</p>\n<p><strong>Scott:</strong> A pop music bot?</p>\n<p><strong>Susan:</strong> A pop music bot.</p>\n<p><strong>Scott:</strong> I love it.</p>\n<p><strong>Susan:</strong> Well, we\u2019ve got to give it a cool, cool name, too, like Electon, elector \u2026 I don\u2019t know. Let\u2019s see what. I\u2019m going to make up a word and see how it gets transcribed.</p>\n<p><strong>Scott:</strong> Yeah, there you go.</p>\n<p><strong>Susan:</strong> That\u2019s what it\u2019ll be, Eclector.</p>\n<p><strong>Scott:</strong> DeadElectron.</p>\n<p><strong>Susan:</strong> Yeah, DeadElectron! I like it, DeadElectron.</p>\n<iframe src="https://www.youtube.com/embed/gA03iyI3yEA" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p><em>This company really does make AI music.</em></p>\n<p><strong>Scott:</strong> There we go, yeah. Is anything going to get better? Is my life going to be easy now, because AI dictates my life? Are you going to get the Jetson\u2019s finger cramp from pressing the button?</p>\n<p><strong>Susan:</strong> From pressing the button? It was a long day at work! My finger is so cramped from pushing that button all day long!</p>\n<p><strong>Scott:</strong> Now you can have a to-do list, generated from your friendly AI, telling you what to do.</p>\n<p><strong>Susan:</strong> That\u2019s a cool thing. Tell me another good thing, Scott?</p>\n<p><strong>Scott:</strong> Yeah, do you think that that\u2019s actually a good thing, though?</p>\n<p><strong>Susan:</strong> Of course, it\u2019s going to be shaping the way that you\u2019re going to do your day. I mean, yeah, AI is saying, hey, you had these four tasks, and this fifth one that you don\u2019t quite remember me putting on there for you.</p>\n<p><strong>Scott:</strong> You\u2019re supposed to do this. You\u2019re supposed to walk by this billboard.</p>\n<p><strong>Susan:</strong> I don\u2019t really remember saying I had to do this.</p>\n<p><strong>Scott:</strong> You\u2019re supposed to buy the no-egg mayo, okay?</p>\n<p><strong>Susan:</strong> We\u2019re basically going to be well-trained humans. I mean, really, people want to be lazy, right?</p>\n<p><strong>Scott:</strong> It\u2019s the human condition.</p>\n<p><strong>Susan:</strong> It\u2019s the human condition. If you take that cognitive load off, it\u2019s like, \u201CYours; you can take it.\u201D Then, you just follow along like the herd. As long as it\u2019s not too far away from what you expect, you\u2019re like, ah, whatever. Here\u2019s the list of things I\u2019m supposed to do today to be a functioning adult. Oh, on there is buy such-and-such a brand mayonnaise. Oh, of course, that\u2019s what I wanted, click.</p>\n<h2 id="what-about-ai-dating">What about AI dating?</h2>\n<p><strong>Susan:</strong> What do you think about AI dating? Will your soulmate be picked out?</p>\n<p><strong>Scott:</strong> For you, yeah, so you have my AI talk to your AI. They\u2019ll figure things out.</p>\n<p><strong>Susan:</strong> Ooh, they can go on a pre-date.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976816/blog/what-does-the-ai-dystopia-look-like-ai-show-2/dating-bots.jpg" alt="dating"></p>\n<p><em>The press seem to believe that we will be dating robots, when indeed, it\u2019s the robots who\u2019ll date in our stead-proxy dating.</em></p>\n<p><strong>Scott:</strong> Yeah, a pre-date to figure out if the \u2026 It\u2019s like blind dating, but you blame the AI now, if it doesn\u2019t go well.</p>\n<p><strong>Susan:</strong> In a blink of an eye, will the AIs go through the whole thing, the whole date a couple times?</p>\n<p><strong>Scott:</strong> The whole thing. Yeah, a second later, they decided.</p>\n<p><strong>Susan:</strong> They\u2019ll decide to shack up together. They\u2019ll get married. They\u2019ll have little AI children. They\u2019ll have some messy fights. Then you\u2019ll decide to get divorced, and it\u2019ll all break up, and by the end of it, it comes back to you, and it says, \u201CStay away from this one.\u201D</p>\n<p><strong>Scott:</strong> It happens in the span of a second.</p>\n<p><strong>Susan:</strong> It\u2019s not going to end well.</p>\n<p><strong>Scott:</strong> It\u2019s going to take all the spice out of life.</p>\n<p><strong>Susan:</strong> Yeah, but what if it comes back and says, \u201CThis is the one.\u201D Now, you sit down and you\u2019re like, \u201CMy AI says you\u2019re the one.\u201D The other one says, \u201CYeah, my AI says you\u2019re the one,\u201D so how should we act at that point.</p>\n<p><strong>Scott:</strong> Now you\u2019re entitled, right? You\u2019re stuck with me. We have to be together.</p>\n<p><strong>Susan:</strong> We have to be together. Should I even try?</p>\n<p><strong>Scott:</strong> You just start letting it go right then, right? There\u2019s no salad for dinner. It\u2019s two T-bone steaks and some Indian food afterward.</p>\n<p><strong>Susan:</strong> Your first meal, you\u2019re sitting there, you eat, you belch, you undo the top button. It\u2019s like, it doesn\u2019t matter. You\u2019re my one. You\u2019re not going to leave.</p>\n<p><strong>Scott:</strong> It\u2019s decided.</p>\n<p><strong>Susan:</strong> The AIs have determined what\u2019s going to go on here.</p>\n<p><strong>Susan:</strong> Wait. Let me check how many children we\u2019re supposed to have. Oh, two. AI is your new boss</p>\n<p><strong>Scott:</strong> They\u2019ll be watching you at work, too. It\u2019s like this is some little Santa stuff here.</p>\n<p><strong>Susan:</strong> Do you think they\u2019re going to be watching at work? What are they going to do?</p>\n<p><strong>Scott:</strong> Yeah, performance measurement, man. It\u2019s like the thing that everybody gets advertised to on Instagram now, that\u2019s about slouching. You tape it to your back, and it tells you if you\u2019re leaned over, and it zaps you, right? Now, at work, it\u2019ll be cameras watching you.</p>\n<p><strong>Susan:</strong> Everywhere.</p>\n<blockquote>\n<p>\u201CThey\u2019ll be looking at your email. Have you sent enough emails today? Have you attended enough meetings? Have you spoken enough words to your coworkers? Have you said enough buzzwords?\u201D</p>\n</blockquote>\n<p><strong>Susan:</strong> A performance review will come into your email, completely crafted by some sort of machine learning algorithm.</p>\n<p><strong>Scott:</strong> Every day.</p>\n<p><strong>Susan:</strong> It\u2019ll be brutal. Here are the 10 things you did well, and here\u2019s the 10 things you need to work on, you know?</p>\n<p><strong>Susan:</strong> The 10 up at the top- They\u2019re kind of fluff.</p>\n<p><strong>Scott:</strong> It\u2019s like we have to give you a sandwich.</p>\n<p><strong>Susan:</strong> Yeah, we\u2019ve got to make you think you\u2019re any good but\u2026</p>\n<p><strong>Scott:</strong> A perfectly crafted visual representation of your day to make you react and like, damn, I\u2019ve got to work harder.</p>\n<p><strong>Susan:</strong> Here\u2019s the box you need to be in. If you\u2019re not in this box, you are a problem.</p>\n<p><strong>Susan:</strong> There\u2019s huge promise in that. Don\u2019t get me wrong, but there are dangers of fitting too much to the mean there.</p>\n<h2 id="the-machines-use-us-for-only-one-thing">The machines use us for only one thing</h2>\n<p><strong>Scott:</strong> What\u2019s the value of a human anymore? I mean, this is just going to be The Matrix soon, where we\u2019re just a power source for AI overlords. What\u2019s the deal?</p>\n<p><strong>Susan:</strong> I never quite got the power source of the Matrix anyway.</p>\n<p><strong>Scott:</strong> I don\u2019t know the power source thing either, but some other thing \u2026 I don\u2019t know.</p>\n<p><strong>Susan:</strong> That was weird.</p>\n<p><strong>Scott:</strong> Are we actually going to be more creative?</p>\n<p><strong>Susan:</strong> Oh, is only creativity left?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976817/blog/what-does-the-ai-dystopia-look-like-ai-show-2/04-11_Robots_repost-unsplash-web.jpg" alt="imagine"></p>\n<p><em>Source: <a href="https://unsplash.com/photos/xdEeLyK4iBo">Jehyun Sung</a></em></p>\n<p><strong>Scott:</strong> Our only job \u2026 Yeah, that\u2019s it, and you take in all the inputs and you\u2019re like, \u201CNo, it should be this way.\u201D</p>\n<p><strong>Susan:</strong> You do that one creative thing a year. That\u2019s it. There\u2019s this exact one moment where you add randomness to the system.</p>\n<p><strong>Scott:</strong> Exactly.</p>\n<p><strong>Susan:</strong> You do some irrational thing.</p>\n<p><strong>Scott:</strong> \u201CNo, it shouldn\u2019t be this way!\u201D</p>\n<p><strong>Susan:</strong> Suddenly, you get $100,000 because that was your job. That one creative thing.</p>\n<p><strong>Scott:</strong> We needed that. We needed that random thought there. Yeah, everything \u2026 We\u2019re too logical.</p>\n<p><strong>Susan:</strong> Thanks, you\u2019re our random number generator.</p>\n<p><strong>Scott:</strong> Yeah. What \u2026 We already know the answer.</p>\n<p><strong>Scott:</strong> Random number generator.</p>\n<p><strong>Susan:</strong> They don\u2019t need us for power. They need us for random number generation.</p>\n<p><strong>Scott:</strong> We figured it out, yeah, yeah. Well, this is the value of children, right?</p>\n<p><strong>Susan:</strong> Talk about randomness. You never thought the things that could happen would happen. Yeah, 2:00 in the morning, what is that sound? Why is there paint everywhere? Please, please, I told you, not the cat! I\u2019m sorry, is that what we were talking about, Scott?</p>\n<p><strong>Scott:</strong> We\u2019ll just all be children in the AI world now. You know, just banging pots and pans together.</p>\n<p><strong>Susan:</strong> I\u2019m looking forward to that.</p>\n<p><strong>Scott:</strong> Yeah, it sounds like a pretty sweet existence, right?</p>\n<p><strong>Susan:</strong> Nap time, you know?</p>\n<p><strong>Scott:</strong> With milk, warm milk, and you have your blanket.</p>\n<p><strong>Susan:</strong> It\u2019s going to be awesome. Yeah, the lights slowly go down.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976818/blog/what-does-the-ai-dystopia-look-like-ai-show-2/napercise.jpg" alt="nap"></p>\n<p><em><a href="https://www.forbes.com/sites/brucelee/2017/04/29/napercise-why-nap-for-free-when-you-can-pay-for-it/#68e889164be4">\u201CNapercise\u201D</a>, as David Lloyd Clubs in London calls it, is not far off. Soon all humans will do is be randomly creative and drink juice from sippy cups.</em></p>\n<p><strong>Scott:</strong> Is this something you did at school back in the day? This is something that they do at school now in California, at least. You have your own blanket. You get your milk. You take a nap.</p>\n<p><strong>Susan:</strong> I love it.</p>\n<p><strong>Scott:</strong> You\u2019re like 10.</p>\n<p><strong>Susan:</strong> Whoa, 10?</p>\n<p><strong>Scott:</strong> I mean, 9, 8-</p>\n<p><strong>Susan:</strong> Great. I remember doing it from kindergarten.</p>\n<p><strong>Scott:</strong> Yeah, I know. I remember it way back. Did you have your special mat?</p>\n<p><strong>Susan:</strong> The most valuable skills from kindergarten \u2026 We completely forget those. Everybody should have nap time.</p>\n<p><strong>Scott:</strong> Well, because we get trained to be more like robots, but now the robots are finally going to take over the rightful owner of those tasks, and now we just get to be children all the time.</p>\n<h2 id="your-insurance-premiums-go-up">Your insurance premiums go up</h2>\n<p><strong>Susan:</strong> They\u2019re going to tell you when you\u2019re not doing the optimal thing each day, right? This is when you should be napping. Oh, man, oh, you didn\u2019t nap. For that day, your insurance premium went up by a dollar. You are not living the optimally healthy life.</p>\n<p><strong>Scott:</strong> Yeah, for randomness. They need you to be healthy for the randomness.</p>\n<p><strong>Susan:</strong> Yeah, but I\u2019m just saying that AIs are going to come in and judge every second of your life, and you\u2019re going to be charged more based off of you not living the right way. That beer you wanted? It didn\u2019t just cost a couple bucks. It also got reported back to your insurance company.</p>\n<p><strong>Scott:</strong> Well, maybe human lifespan doesn\u2019t need to be as long, now, because we lose our mojo by the time we\u2019re 30, 20, 15, you know?</p>\n<p><strong>Scott:</strong> It\u2019s like, eh, screw you, after a while.</p>\n<p><strong>Susan:</strong> Ooh, it could be like Logan\u2019s Run. At 25, you\u2019re dead-only they trick us. They say, \u201CYour brain is being uploaded into the cloud. In reality, no.</p>\n<p><strong>Scott:</strong> Bye, everybody. I can\u2019t wait to see all my ancestors.</p>\n<p><strong>Susan:</strong> Yeah, some quick little chatbot has put up that fake that says it\u2019s you for about a day, until everybody forgets that you exist.</p>\n<p><strong>Scott:</strong> That\u2019s true. Let\u2019s say, a week, right? Yeah.</p>\n<p><strong>Susan:</strong> A week, for a week your loved ones are typing to you.</p>\n<p><strong>Scott:</strong> \u201COh, look at you. Hey \u2026\u201D</p>\n<p><strong>Susan:</strong> \u201COh, it\u2019s so great in the cloud.\u201D They say, \u201CYes, you will love it here.\u201D A week later, \u201CGot to go now. There\u2019s so many exciting things. I can\u2019t pay attention to chat anymore.\u201D</p>\n<p><strong>Scott:</strong> Yeah, \u201CI can\u2019t wait to see you.\u201D</p>\n<p><strong>Susan:</strong> Then erase that from the system.</p>\n<p><strong>Scott:</strong> Then they ghost you, yeah. All right, well, we have some worst case scenario. Maybe in the future, we\u2019ll have some best case scenario. I mean, the best?</p>\n<p><strong>Susan:</strong> Yeah.</p>\n<p><strong>Scott:</strong> At least something.</p>\n<p><strong>Susan:</strong> Do you think <a href="https://youtu.be/pE5-K7gg0kE">AI could actually be good for the world?</a></p>\n<p><strong>Scott:</strong> Nah, I don\u2019t think so.</p>\n<p><strong>Susan:</strong> You know what? I have a sneaking suspicion that for everything we said was bad, there might be a couple good things.</p>\n<p><strong>Scott:</strong> Are there some good things?</p>\n<p><strong>Susan:</strong> There just might be.</p>' };
const frontmatter = { "title": "What Does the AI Dystopia Look Like? \u2014\xA0AI Show", "description": "Is an AI dystopia coming? If so, what will it look like? Have a listen to this episode of the AI Show.", "date": "2019-02-01T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981345/blog/what-does-the-ai-dystopia-look-like-ai-show-2/what-will-ai-dystopia-look-like%402x.jpg", "authors": ["morris-gevirtz"], "category": "ai-and-engineering", "tags": ["deep-learning", "machine-learning"], "seo": { "title": "What Does the AI Dystopia Look Like? \u2014\xA0AI Show", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981345/blog/what-does-the-ai-dystopia-look-like-ai-show-2/what-will-ai-dystopia-look-like%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/18715f2", "twitter": "https://dpgr.am/84d89dd", "linkedin": "https://dpgr.am/02f3c73", "reddit": "https://dpgr.am/ba0efa7", "facebook": "https://dpgr.am/103b135" }, "astro": { "headings": [{ "depth": 2, "slug": "whats-the-first-thing-thats-going-to-go", "text": "What\u2019s the first thing that\u2019s going to go?" }, { "depth": 2, "slug": "are-they-going-to-take-our-jobs", "text": "Are they going to take our jobs?" }, { "depth": 2, "slug": "technology-is-high-tech-mediocrity", "text": "Technology is high-tech mediocrity" }, { "depth": 2, "slug": "creatives-join-doctors-and-pilots-in-the-homeless-shelters", "text": "Creatives join doctors and pilots in the homeless shelters" }, { "depth": 2, "slug": "what-about-ai-dating", "text": "What about AI dating?" }, { "depth": 2, "slug": "the-machines-use-us-for-only-one-thing", "text": "The machines use us for only one thing" }, { "depth": 2, "slug": "your-insurance-premiums-go-up", "text": "Your insurance premiums go up" }], "source": `<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/570095520&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" width="100%" height="166" frameborder="no" scrolling="no"></iframe>

**Scott:** Welcome to the AI Show. Today, we're asking the question: What does the AI dystopia look like?

**Susan:** Oh, man, we are going down the tubes. It's going to be terrible.

**Scott:** Let's take it to negative town. The world is over.

**Susan:** The world, as we knew it, ends basically every year and a half as the next revolution hits, but this is the last one.

**Scott:** There's a law against that, isn't there?

**Susan:** There is?

**Scott:** Everything has a life expectancy about twice what its current age is, but until it abruptly dies.

**Susan:** Oh, yeah, that's cool. I've got to look that one up.

**Scott:** Yeah, so the abrupt death is coming. Everything looks like we're going to live twice as long.

**Susan:** Well, exactly. Well, everybody keeps saying, "Hey, the pendulum's going to swing back, and technology is going to help us more than hurt."

**Scott:** Hey, we're still alive, right?

**Susan:** That's all true up until the very last time. Then, that last time, people are like, "Well, I guess it didn't swing back that time."

**Susan:** Man, there's a lot to be pessimistic about.

## What's the first thing that's going to go?

**Susan:** Oh, the first thing is privacy.

**Scott:** Privacy's number one?

**Susan:** Everybody knows that their privacy is not nearly what it may have been in the past.

**Scott:** What is privacy anyway?

![bigbro](https://res.cloudinary.com/deepgram/image/upload/v1661976812/blog/what-does-the-ai-dystopia-look-like-ai-show-2/1984_by_iskallvinter_d15owbe.jpg)

*Photo credit [iskallvinter](https://www.deviantart.com/iskallvinter/art/1984-70025882)*

**Susan:** Now, we're going to take the loss of privacy to the next level. Not only will they have your data, but they'll have the computing power and the algorithms to actually do something with it.

**Scott:** This isn't like drones looking in your bedroom window.

**Susan:** Who cares how many data points you have, if you can't actually make sense of them? But you know, we can actually listen to every single phone call and record it. But, if you can't actually do anything with all that audio, who cares?

**Susan:** Now we can take all the surveillance cameras, and we can analyze video.

**Susan:** We can put together your entire human history by taking pictures from 4000 different things.

**Scott:** Your browser history.

**Susan:** The smarts are finally there to analyze multiple terabytes of data and come up with you.

**Scott:** Does Google become a state-owned company?

**Susan:** Well, no, Google owns the state.

**Scott:** They become the state. Google's the state.

**Susan:** The United States of Google?

**Scott:** The United States of Google!

**Susan:** How about you, Scott? Where do you think the dystopian future of AI goes?

**Scott:** Well, I think we should bring this to self-driving cars. Every inch of your life is known.

**Susan:** Is this the trolley problem?

**Scott:** You're going to start driving around, or you're not driving around anymore. You've got mainly machines that drive for you.

**Susan:** Of course.

**Scott:** But now, what are they going to do? They're going to drive you around and take you by the billboard that's also AI powered.

**Susan:** I love it! It's like why are we taking this route? Oh, what's that billboard there?

**Scott:** Everybody always has the Uber driver experience. "Why are we going this way?" Well, this is going to have a monetary reason behind it.

**Susan:** From upfront a voice says: "This is faster. Trust me." Why are we stopped in the middle of nowhere, with nothing but advertisement around me?

**Scott:** Is the AI that drives the car like a humanoid? It turns around. "Trust me. It's faster. (robotic voice)" Yeah.

**Susan:** Oh, well, there's a privacy bent to this, too. Just think of it.

**Scott:** No more sexual relations in the back of the Uber?

**Susan:** No, it's creepy if you did, but no. Now, every last inch of your entire life is ... Your position is known. You get in the car, and it knows where you're at, but more than that, it's just a big data collection device. It's built for it. All those LIDARS are constantly going, scanning every single thing around them, all that stuff.

**Scott:** Before, it just knew your position. Now it knows your total surroundings.

**Susan:** The natural outcropping of self-driving car technology is really fantastic image recognition and classification. Not only is it going around recording every last square inch of visual detail, but man, it's saying, "That is a flower pot from Ikea."

**Susan:** $12.99.

**Scott:** You could buy this.

**Susan:** As you're in the car, you're sitting here. You're buying stuff.

**Susan:** As you're in your car, you're looking around over there, and a little advertisement pops up. It's like, "You can also have this flowerpot for $9.99. Just press here." It sees your eyes, and there you go. The attention economy.

**Scott:** Well, have you ever seen the show Black Mirror?


![mirror](https://res.cloudinary.com/deepgram/image/upload/v1661976813/blog/what-does-the-ai-dystopia-look-like-ai-show-2/download-1.jpg)

*"Fifteen Million Merits" Series 1, episode 2 of Black Mirror.*

**Susan:** First of all, if you see the first episode... Go to the second or third episode. The first one will just...

**Scott:** Yeah, don't watch the first.

**Scott:** Yeah, but the attention economy is discussed there in one of the episodes a little bit, right?

**Susan:** There's an episode where they're on bikes, just pedaling aimlessly, just to pay off their credits, and they're being forced to watch TV advertisements. Oh my. That's dystopian.

**Scott:** If they start to fall asleep, it'll jolt them back awake, because AI's watching them. It knows what they're looking at, what they're taking in.

**Susan:** No! Yeah. They're forced to watch a commercial, and it knows whether they're paying attention or not.

**Scott:** You can skip the commercial, but you'll have to pay.

**Susan:** How evil is that? I've got my headphones on now, and a commercial comes on, I just go like that, but then the commercial will pause, and you put them back on, and it's right back there where it was at.

**Scott:** Right back there.

**Susan:** I was like, what? You're just like, oh, I'm going to get smart and switch channels, and it's still there-the commercial does not go away!

**Scott:** Yeah, it's the same one.

**Susan:** Until you listen to that commercial and actually pay attention.

**Scott:** Then you give in. You're like, okay, my AI overlord.

**Susan:** Oh, whew. That is is tremendous.

## Are they going to take our jobs?

**Susan:** If you drive something, you can forget about it. Cars, trucks, planes, which ... Man, get in an aircraft. There's no cockpit.

**Scott:** This is the easiest job ever, right? Why not have an AI pilot?

**Susan:** Yeah, exactly, and by the way most accidents happen up in front, just saying. Maybe it'll be a lot safer, not that airlines are less safe right now. The autonomous revolution. I mean, drones are going to start delivering your food.

**Scott:** They could poison you. Or they just selectively, "Oh, you're not a Trump supporter? Your food is going to be cold."

## Technology is high-tech mediocrity

**Susan:** I was just thinking the whole drone revolution there, delivery revolution, suddenly you're starting to get the seconds stuff. You've got to pay for Prime to get the fresh eggs, right? These are still technically good, but they're one day away from expiration. It's like, magically, all the food that gets delivered to your house, unless you pay the premium, is one day away from expiration.

**Scott:** But it's been managed very well, like the warehouse is near you. It's been stocked just for you, because they know.

**Susan:** Oh yeah, yeah. It knows exactly that cutting point, you know? We call this Susan's Law here.

**Scott:** Susan's Law.

**Susan:** Susan's Law: Technology allows you to make something just good enough. The better your technology is, the finer you can cut that line to be just good enough for the customer that they'll pay for it ... I think we've seen this.

**Scott:** Absolutely.

**Susan:** As technology's gotten more and more capable, we've gotten to the ... We're always on the verge of saying, "This is so bad! If one more thing happened, I'd get rid of it. If just one more thing ..."

**Scott:** Yep, but you won't. You just keep paying.

**Susan:** You won't, because It'll be so perfectly honed to you, that you'll never be actually happy. You'll be on the verge of so unhappy that you'll get rid of it, but you won't actually get rid of it.

**Scott:** AI will optimize the frustrations. AI knows your dreams, and it's going to make sure that you never achieve them, but you're going to be very, very close, always.

**Scott:** Just one more little bit, that's it. You're so close.

**Susan:** You will be addicted to things, because of AI, that are ridiculous. It's like they will have honed the rewards system on whatever to be, well, if you just click this one more time-

**Scott:** Just one more, just one more, what's the big deal.

**Susan:** Just one more ... Eight hours later, you're sitting there in a pile of filth, and you're like, just one more click, and I'll go to sleep.

**Scott:** Well, that might already happen on YouTube. Doctors and pilots are now unemployable.

**Scott:** Yep, what about doctors?

![doc](https://res.cloudinary.com/deepgram/image/upload/v1661976814/blog/what-does-the-ai-dystopia-look-like-ai-show-2/hungry-will-work-for_.jpg)

**Susan:** Oh, doctors, geez ... Not to offend any doctors out there.

**Scott:** You're gone. You're a goner.

**Susan:** A subjective opinion is probably not a good one.

**Scott:** Are you saying doctors are subjective?

**Susan:** Sometimes, sometimes. They're professionals. They're well-trained, but they're still people.

**Scott:** Yeah, they get tired. They're trying to get their Medicare bill/Medicaid bill paid.

**Susan:** After you've seen the 90th simple cold come in and act like they're about to die of the plague and ask for all the wrong medicines, and you have to tell them, "It's just a cold. Drink some fluids. Get some sleep. Tomorrow, you'll feel fine." AI will take over that.

**Scott:** I mean, saying that's kind of an easy job?

**Susan:** I'll say this: that we train doctors and pilots for that last little one percent. AI's going to cut that down to a half a percent, and then a quarter of a percent. Take away that 99, that big huge grunt of stuff that is all normal, right? We understand the things that they go through. Here's the lifecycle of the flu. Here's the whatever. Here's the things to look for. It is this.

**Scott:** Doctors, all your jobs, they're gone.

**Susan:** Doctors, pilots.

**Scott:** Pilots gone.

**Susan:** Oh, did you see the ticket bot?

**Scott:** Ticket bot?

**Susan:** Trying to get you out of tickets, law programs.

**Scott:** Well, now it's an arms race, right? To give you tickets and to get you out of tickets. Funding the AI technology boom. The war on tickets. Old laws become asphyxiating.

**Susan:** Another interesting thing is, as technology gets better we're able to enforce laws that when they were put in place they were never intended to be enforced at that level. Just think about speeding tickets and the like. The idea of speeding and the resources put into catching people and all that were from before we had technology - like cameras and stuff like that. The laws were put in place back then.

![cops](https://res.cloudinary.com/deepgram/image/upload/v1661976815/blog/what-does-the-ai-dystopia-look-like-ai-show-2/lexus_police_edition_by_eun_su_d4xr1fd-1.jpg)

*Photo credit: [Eun-su](https://www.deviantart.com/eun-su/art/Lexus-Police-Edition-298553593)*

**Scott:** Yeah, a while ago.

**Susan:** Now, we get better and better and easier and easier enforcement, and we enforce disproportionately to how the laws were initially put in place.

**Susan:** This enforcement allows for new realms of ... I don't want to say abusing the law, but making it very easy to be in violation of the law and get caught, to the detriment of society, you know?

**Scott:** It might go sour, if you can be caught for everything.

**Susan:** Literally. I mean, you walk out the door and you get in your car, you've probably broken four laws..

**Scott:** Maybe the laws will get better defined now. Couldn't that be a good thing? No, probably not. That's not going to happen.

**Susan:** An AI-enforced legal system, oh man!

**Scott:** Things might go quicker. No, they'll just frustrate you to extract more money from you.

**Susan:** Pretty much, yeah.

**Scott:** Isn't that the Government's job, roughly, to protect you just enough to extract value out of you?

**Susan:** Just enough? Ooh, I think we're in a different territory there.

**Scott:** Well, they're investing a lot in AI.

**Susan:** Maybe I want some AI in my government.

## Creatives join doctors and pilots in the homeless shelters

**Scott:** Well, for now, until they get too efficient. Creative jobs, writers, anything like that? What's that? What's going to happen to them?

**Susan:** Well, I mean, doesn't Facebook already have like a snippet writer for articles?

**Scott:** Yeah, rather than a clickbait title, how about a little summary? Here's two sentences that, hey, if you just knew this one weird trick about swimming pools...

**Susan:** There's been a lot of research about actually generating well-formed text, well-formed software. We're seeing code assistance inside of, again, Facebook, trying to write little snippets of where things might be going wrong. We're seeing ... Coders, look out. Writing copy, actually taking and summarizing articles, these are all areas where AI is making real progress. I mean, let's be honest here. It's not there yet, but does that mean six months from now, a year, five years?

**Scott:** Give it a couple years, stir the pot.

**Susan:** Even if it's ... We'll give it 10 years away, 10 years away, taking away what we thought was deeply creative work? That is a staggering thought right there, you know?

**Scott:** Yeah.

**Susan:** That's deeply into interesting job territory there.

**Scott:** You mean, pop music is formulaic?

**Susan:** Oh, geez, of course. Pop music ... Oh man, we've got to write a...

**Scott:** A pop music bot?

**Susan:** A pop music bot.

**Scott:** I love it.

**Susan:** Well, we've got to give it a cool, cool name, too, like Electon, elector ... I don't know. Let's see what. I'm going to make up a word and see how it gets transcribed.

**Scott:** Yeah, there you go.

**Susan:** That's what it'll be, Eclector.

**Scott:** DeadElectron.

**Susan:** Yeah, DeadElectron! I like it, DeadElectron.

<iframe src="https://www.youtube.com/embed/gA03iyI3yEA" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

*This company really does make AI music.*

**Scott:** There we go, yeah. Is anything going to get better? Is my life going to be easy now, because AI dictates my life? Are you going to get the Jetson's finger cramp from pressing the button?

**Susan:** From pressing the button? It was a long day at work! My finger is so cramped from pushing that button all day long!

**Scott:** Now you can have a to-do list, generated from your friendly AI, telling you what to do.

**Susan:** That's a cool thing. Tell me another good thing, Scott?

**Scott:** Yeah, do you think that that's actually a good thing, though?

**Susan:** Of course, it's going to be shaping the way that you're going to do your day. I mean, yeah, AI is saying, hey, you had these four tasks, and this fifth one that you don't quite remember me putting on there for you.

**Scott:** You're supposed to do this. You're supposed to walk by this billboard.

**Susan:** I don't really remember saying I had to do this.

**Scott:** You're supposed to buy the no-egg mayo, okay?

**Susan:** We're basically going to be well-trained humans. I mean, really, people want to be lazy, right?

**Scott:** It's the human condition.

**Susan:** It's the human condition. If you take that cognitive load off, it's like, "Yours; you can take it." Then, you just follow along like the herd. As long as it's not too far away from what you expect, you're like, ah, whatever. Here's the list of things I'm supposed to do today to be a functioning adult. Oh, on there is buy such-and-such a brand mayonnaise. Oh, of course, that's what I wanted, click.

## What about AI dating?

**Susan:** What do you think about AI dating? Will your soulmate be picked out?

**Scott:** For you, yeah, so you have my AI talk to your AI. They'll figure things out.

**Susan:** Ooh, they can go on a pre-date.

![dating](https://res.cloudinary.com/deepgram/image/upload/v1661976816/blog/what-does-the-ai-dystopia-look-like-ai-show-2/dating-bots.jpg)

*The press seem to believe that we will be dating robots, when indeed, it's the robots who'll date in our stead-proxy dating.*

**Scott:** Yeah, a pre-date to figure out if the ... It's like blind dating, but you blame the AI now, if it doesn't go well.

**Susan:** In a blink of an eye, will the AIs go through the whole thing, the whole date a couple times?

**Scott:** The whole thing. Yeah, a second later, they decided.

**Susan:** They'll decide to shack up together. They'll get married. They'll have little AI children. They'll have some messy fights. Then you'll decide to get divorced, and it'll all break up, and by the end of it, it comes back to you, and it says, "Stay away from this one."

**Scott:** It happens in the span of a second.

**Susan:** It's not going to end well.

**Scott:** It's going to take all the spice out of life.

**Susan:** Yeah, but what if it comes back and says, "This is the one." Now, you sit down and you're like, "My AI says you're the one." The other one says, "Yeah, my AI says you're the one," so how should we act at that point.

**Scott:** Now you're entitled, right? You're stuck with me. We have to be together.

**Susan:** We have to be together. Should I even try?

**Scott:** You just start letting it go right then, right? There's no salad for dinner. It's two T-bone steaks and some Indian food afterward.

**Susan:** Your first meal, you're sitting there, you eat, you belch, you undo the top button. It's like, it doesn't matter. You're my one. You're not going to leave.

**Scott:** It's decided.

**Susan:** The AIs have determined what's going to go on here.

**Susan:** Wait. Let me check how many children we're supposed to have. Oh, two. AI is your new boss

**Scott:** They'll be watching you at work, too. It's like this is some little Santa stuff here.

**Susan:** Do you think they're going to be watching at work? What are they going to do?

**Scott:** Yeah, performance measurement, man. It's like the thing that everybody gets advertised to on Instagram now, that's about slouching. You tape it to your back, and it tells you if you're leaned over, and it zaps you, right? Now, at work, it'll be cameras watching you.

**Susan:** Everywhere.

> "They'll be looking at your email. Have you sent enough emails today? Have you attended enough meetings? Have you spoken enough words to your coworkers? Have you said enough buzzwords?"

**Susan:** A performance review will come into your email, completely crafted by some sort of machine learning algorithm.

**Scott:** Every day.

**Susan:** It'll be brutal. Here are the 10 things you did well, and here's the 10 things you need to work on, you know?

**Susan:** The 10 up at the top- They're kind of fluff.

**Scott:** It's like we have to give you a sandwich.

**Susan:** Yeah, we've got to make you think you're any good but...

**Scott:** A perfectly crafted visual representation of your day to make you react and like, damn, I've got to work harder.

**Susan:** Here's the box you need to be in. If you're not in this box, you are a problem.

**Susan:** There's huge promise in that. Don't get me wrong, but there are dangers of fitting too much to the mean there.

## The machines use us for only one thing

**Scott:** What's the value of a human anymore? I mean, this is just going to be The Matrix soon, where we're just a power source for AI overlords. What's the deal?

**Susan:** I never quite got the power source of the Matrix anyway.

**Scott:** I don't know the power source thing either, but some other thing ... I don't know.

**Susan:** That was weird.

**Scott:** Are we actually going to be more creative?

**Susan:** Oh, is only creativity left?

![imagine](https://res.cloudinary.com/deepgram/image/upload/v1661976817/blog/what-does-the-ai-dystopia-look-like-ai-show-2/04-11_Robots_repost-unsplash-web.jpg)

*Source: [Jehyun Sung](https://unsplash.com/photos/xdEeLyK4iBo)*

**Scott:** Our only job ... Yeah, that's it, and you take in all the inputs and you're like, "No, it should be this way."

**Susan:** You do that one creative thing a year. That's it. There's this exact one moment where you add randomness to the system.

**Scott:** Exactly.

**Susan:** You do some irrational thing.

**Scott:** "No, it shouldn't be this way!"

**Susan:** Suddenly, you get $100,000 because that was your job. That one creative thing.

**Scott:** We needed that. We needed that random thought there. Yeah, everything ... We're too logical.

**Susan:** Thanks, you're our random number generator.

**Scott:** Yeah. What ... We already know the answer.

**Scott:** Random number generator.

**Susan:** They don't need us for power. They need us for random number generation.

**Scott:** We figured it out, yeah, yeah. Well, this is the value of children, right?

**Susan:** Talk about randomness. You never thought the things that could happen would happen. Yeah, 2:00 in the morning, what is that sound? Why is there paint everywhere? Please, please, I told you, not the cat! I'm sorry, is that what we were talking about, Scott?

**Scott:** We'll just all be children in the AI world now. You know, just banging pots and pans together.

**Susan:** I'm looking forward to that.

**Scott:** Yeah, it sounds like a pretty sweet existence, right?

**Susan:** Nap time, you know?

**Scott:** With milk, warm milk, and you have your blanket.

**Susan:** It's going to be awesome. Yeah, the lights slowly go down.

![nap](https://res.cloudinary.com/deepgram/image/upload/v1661976818/blog/what-does-the-ai-dystopia-look-like-ai-show-2/napercise.jpg)

*["Napercise"](https://www.forbes.com/sites/brucelee/2017/04/29/napercise-why-nap-for-free-when-you-can-pay-for-it/#68e889164be4), as David Lloyd Clubs in London calls it, is not far off. Soon all humans will do is be randomly creative and drink juice from sippy cups.*

**Scott:** Is this something you did at school back in the day? This is something that they do at school now in California, at least. You have your own blanket. You get your milk. You take a nap.

**Susan:** I love it.

**Scott:** You're like 10.

**Susan:** Whoa, 10?

**Scott:** I mean, 9, 8-

**Susan:** Great. I remember doing it from kindergarten.

**Scott:** Yeah, I know. I remember it way back. Did you have your special mat?

**Susan:** The most valuable skills from kindergarten ... We completely forget those. Everybody should have nap time.

**Scott:** Well, because we get trained to be more like robots, but now the robots are finally going to take over the rightful owner of those tasks, and now we just get to be children all the time.

## Your insurance premiums go up

**Susan:** They're going to tell you when you're not doing the optimal thing each day, right? This is when you should be napping. Oh, man, oh, you didn't nap. For that day, your insurance premium went up by a dollar. You are not living the optimally healthy life.

**Scott:** Yeah, for randomness. They need you to be healthy for the randomness.

**Susan:** Yeah, but I'm just saying that AIs are going to come in and judge every second of your life, and you're going to be charged more based off of you not living the right way. That beer you wanted? It didn't just cost a couple bucks. It also got reported back to your insurance company.

**Scott:** Well, maybe human lifespan doesn't need to be as long, now, because we lose our mojo by the time we're 30, 20, 15, you know?

**Scott:** It's like, eh, screw you, after a while.

**Susan:** Ooh, it could be like Logan's Run. At 25, you're dead-only they trick us. They say, "Your brain is being uploaded into the cloud. In reality, no.

**Scott:** Bye, everybody. I can't wait to see all my ancestors.

**Susan:** Yeah, some quick little chatbot has put up that fake that says it's you for about a day, until everybody forgets that you exist.

**Scott:** That's true. Let's say, a week, right? Yeah.

**Susan:** A week, for a week your loved ones are typing to you.

**Scott:** "Oh, look at you. Hey ..."

**Susan:** "Oh, it's so great in the cloud." They say, "Yes, you will love it here." A week later, "Got to go now. There's so many exciting things. I can't pay attention to chat anymore."

**Scott:** Yeah, "I can't wait to see you."

**Susan:** Then erase that from the system.

**Scott:** Then they ghost you, yeah. All right, well, we have some worst case scenario. Maybe in the future, we'll have some best case scenario. I mean, the best?

**Susan:** Yeah.

**Scott:** At least something.

**Susan:** Do you think [AI could actually be good for the world?](https://youtu.be/pE5-K7gg0kE)

**Scott:** Nah, I don't think so.

**Susan:** You know what? I have a sneaking suspicion that for everything we said was bad, there might be a couple good things.

**Scott:** Are there some good things?

**Susan:** There just might be.`, "html": '<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/570095520&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" width="100%" height="166" frameborder="no" scrolling="no" />\n<p><strong>Scott:</strong> Welcome to the AI Show. Today, we\u2019re asking the question: What does the AI dystopia look like?</p>\n<p><strong>Susan:</strong> Oh, man, we are going down the tubes. It\u2019s going to be terrible.</p>\n<p><strong>Scott:</strong> Let\u2019s take it to negative town. The world is over.</p>\n<p><strong>Susan:</strong> The world, as we knew it, ends basically every year and a half as the next revolution hits, but this is the last one.</p>\n<p><strong>Scott:</strong> There\u2019s a law against that, isn\u2019t there?</p>\n<p><strong>Susan:</strong> There is?</p>\n<p><strong>Scott:</strong> Everything has a life expectancy about twice what its current age is, but until it abruptly dies.</p>\n<p><strong>Susan:</strong> Oh, yeah, that\u2019s cool. I\u2019ve got to look that one up.</p>\n<p><strong>Scott:</strong> Yeah, so the abrupt death is coming. Everything looks like we\u2019re going to live twice as long.</p>\n<p><strong>Susan:</strong> Well, exactly. Well, everybody keeps saying, \u201CHey, the pendulum\u2019s going to swing back, and technology is going to help us more than hurt.\u201D</p>\n<p><strong>Scott:</strong> Hey, we\u2019re still alive, right?</p>\n<p><strong>Susan:</strong> That\u2019s all true up until the very last time. Then, that last time, people are like, \u201CWell, I guess it didn\u2019t swing back that time.\u201D</p>\n<p><strong>Susan:</strong> Man, there\u2019s a lot to be pessimistic about.</p>\n<h2 id="whats-the-first-thing-thats-going-to-go">What\u2019s the first thing that\u2019s going to go?</h2>\n<p><strong>Susan:</strong> Oh, the first thing is privacy.</p>\n<p><strong>Scott:</strong> Privacy\u2019s number one?</p>\n<p><strong>Susan:</strong> Everybody knows that their privacy is not nearly what it may have been in the past.</p>\n<p><strong>Scott:</strong> What is privacy anyway?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976812/blog/what-does-the-ai-dystopia-look-like-ai-show-2/1984_by_iskallvinter_d15owbe.jpg" alt="bigbro"></p>\n<p><em>Photo credit <a href="https://www.deviantart.com/iskallvinter/art/1984-70025882">iskallvinter</a></em></p>\n<p><strong>Susan:</strong> Now, we\u2019re going to take the loss of privacy to the next level. Not only will they have your data, but they\u2019ll have the computing power and the algorithms to actually do something with it.</p>\n<p><strong>Scott:</strong> This isn\u2019t like drones looking in your bedroom window.</p>\n<p><strong>Susan:</strong> Who cares how many data points you have, if you can\u2019t actually make sense of them? But you know, we can actually listen to every single phone call and record it. But, if you can\u2019t actually do anything with all that audio, who cares?</p>\n<p><strong>Susan:</strong> Now we can take all the surveillance cameras, and we can analyze video.</p>\n<p><strong>Susan:</strong> We can put together your entire human history by taking pictures from 4000 different things.</p>\n<p><strong>Scott:</strong> Your browser history.</p>\n<p><strong>Susan:</strong> The smarts are finally there to analyze multiple terabytes of data and come up with you.</p>\n<p><strong>Scott:</strong> Does Google become a state-owned company?</p>\n<p><strong>Susan:</strong> Well, no, Google owns the state.</p>\n<p><strong>Scott:</strong> They become the state. Google\u2019s the state.</p>\n<p><strong>Susan:</strong> The United States of Google?</p>\n<p><strong>Scott:</strong> The United States of Google!</p>\n<p><strong>Susan:</strong> How about you, Scott? Where do you think the dystopian future of AI goes?</p>\n<p><strong>Scott:</strong> Well, I think we should bring this to self-driving cars. Every inch of your life is known.</p>\n<p><strong>Susan:</strong> Is this the trolley problem?</p>\n<p><strong>Scott:</strong> You\u2019re going to start driving around, or you\u2019re not driving around anymore. You\u2019ve got mainly machines that drive for you.</p>\n<p><strong>Susan:</strong> Of course.</p>\n<p><strong>Scott:</strong> But now, what are they going to do? They\u2019re going to drive you around and take you by the billboard that\u2019s also AI powered.</p>\n<p><strong>Susan:</strong> I love it! It\u2019s like why are we taking this route? Oh, what\u2019s that billboard there?</p>\n<p><strong>Scott:</strong> Everybody always has the Uber driver experience. \u201CWhy are we going this way?\u201D Well, this is going to have a monetary reason behind it.</p>\n<p><strong>Susan:</strong> From upfront a voice says: \u201CThis is faster. Trust me.\u201D Why are we stopped in the middle of nowhere, with nothing but advertisement around me?</p>\n<p><strong>Scott:</strong> Is the AI that drives the car like a humanoid? It turns around. \u201CTrust me. It\u2019s faster. (robotic voice)\u201D Yeah.</p>\n<p><strong>Susan:</strong> Oh, well, there\u2019s a privacy bent to this, too. Just think of it.</p>\n<p><strong>Scott:</strong> No more sexual relations in the back of the Uber?</p>\n<p><strong>Susan:</strong> No, it\u2019s creepy if you did, but no. Now, every last inch of your entire life is \u2026 Your position is known. You get in the car, and it knows where you\u2019re at, but more than that, it\u2019s just a big data collection device. It\u2019s built for it. All those LIDARS are constantly going, scanning every single thing around them, all that stuff.</p>\n<p><strong>Scott:</strong> Before, it just knew your position. Now it knows your total surroundings.</p>\n<p><strong>Susan:</strong> The natural outcropping of self-driving car technology is really fantastic image recognition and classification. Not only is it going around recording every last square inch of visual detail, but man, it\u2019s saying, \u201CThat is a flower pot from Ikea.\u201D</p>\n<p><strong>Susan:</strong> $12.99.</p>\n<p><strong>Scott:</strong> You could buy this.</p>\n<p><strong>Susan:</strong> As you\u2019re in the car, you\u2019re sitting here. You\u2019re buying stuff.</p>\n<p><strong>Susan:</strong> As you\u2019re in your car, you\u2019re looking around over there, and a little advertisement pops up. It\u2019s like, \u201CYou can also have this flowerpot for $9.99. Just press here.\u201D It sees your eyes, and there you go. The attention economy.</p>\n<p><strong>Scott:</strong> Well, have you ever seen the show Black Mirror?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976813/blog/what-does-the-ai-dystopia-look-like-ai-show-2/download-1.jpg" alt="mirror"></p>\n<p><em>\u201CFifteen Million Merits\u201D Series 1, episode 2 of Black Mirror.</em></p>\n<p><strong>Susan:</strong> First of all, if you see the first episode\u2026 Go to the second or third episode. The first one will just\u2026</p>\n<p><strong>Scott:</strong> Yeah, don\u2019t watch the first.</p>\n<p><strong>Scott:</strong> Yeah, but the attention economy is discussed there in one of the episodes a little bit, right?</p>\n<p><strong>Susan:</strong> There\u2019s an episode where they\u2019re on bikes, just pedaling aimlessly, just to pay off their credits, and they\u2019re being forced to watch TV advertisements. Oh my. That\u2019s dystopian.</p>\n<p><strong>Scott:</strong> If they start to fall asleep, it\u2019ll jolt them back awake, because AI\u2019s watching them. It knows what they\u2019re looking at, what they\u2019re taking in.</p>\n<p><strong>Susan:</strong> No! Yeah. They\u2019re forced to watch a commercial, and it knows whether they\u2019re paying attention or not.</p>\n<p><strong>Scott:</strong> You can skip the commercial, but you\u2019ll have to pay.</p>\n<p><strong>Susan:</strong> How evil is that? I\u2019ve got my headphones on now, and a commercial comes on, I just go like that, but then the commercial will pause, and you put them back on, and it\u2019s right back there where it was at.</p>\n<p><strong>Scott:</strong> Right back there.</p>\n<p><strong>Susan:</strong> I was like, what? You\u2019re just like, oh, I\u2019m going to get smart and switch channels, and it\u2019s still there-the commercial does not go away!</p>\n<p><strong>Scott:</strong> Yeah, it\u2019s the same one.</p>\n<p><strong>Susan:</strong> Until you listen to that commercial and actually pay attention.</p>\n<p><strong>Scott:</strong> Then you give in. You\u2019re like, okay, my AI overlord.</p>\n<p><strong>Susan:</strong> Oh, whew. That is is tremendous.</p>\n<h2 id="are-they-going-to-take-our-jobs">Are they going to take our jobs?</h2>\n<p><strong>Susan:</strong> If you drive something, you can forget about it. Cars, trucks, planes, which \u2026 Man, get in an aircraft. There\u2019s no cockpit.</p>\n<p><strong>Scott:</strong> This is the easiest job ever, right? Why not have an AI pilot?</p>\n<p><strong>Susan:</strong> Yeah, exactly, and by the way most accidents happen up in front, just saying. Maybe it\u2019ll be a lot safer, not that airlines are less safe right now. The autonomous revolution. I mean, drones are going to start delivering your food.</p>\n<p><strong>Scott:</strong> They could poison you. Or they just selectively, \u201COh, you\u2019re not a Trump supporter? Your food is going to be cold.\u201D</p>\n<h2 id="technology-is-high-tech-mediocrity">Technology is high-tech mediocrity</h2>\n<p><strong>Susan:</strong> I was just thinking the whole drone revolution there, delivery revolution, suddenly you\u2019re starting to get the seconds stuff. You\u2019ve got to pay for Prime to get the fresh eggs, right? These are still technically good, but they\u2019re one day away from expiration. It\u2019s like, magically, all the food that gets delivered to your house, unless you pay the premium, is one day away from expiration.</p>\n<p><strong>Scott:</strong> But it\u2019s been managed very well, like the warehouse is near you. It\u2019s been stocked just for you, because they know.</p>\n<p><strong>Susan:</strong> Oh yeah, yeah. It knows exactly that cutting point, you know? We call this Susan\u2019s Law here.</p>\n<p><strong>Scott:</strong> Susan\u2019s Law.</p>\n<p><strong>Susan:</strong> Susan\u2019s Law: Technology allows you to make something just good enough. The better your technology is, the finer you can cut that line to be just good enough for the customer that they\u2019ll pay for it \u2026 I think we\u2019ve seen this.</p>\n<p><strong>Scott:</strong> Absolutely.</p>\n<p><strong>Susan:</strong> As technology\u2019s gotten more and more capable, we\u2019ve gotten to the \u2026 We\u2019re always on the verge of saying, \u201CThis is so bad! If one more thing happened, I\u2019d get rid of it. If just one more thing \u2026\u201D</p>\n<p><strong>Scott:</strong> Yep, but you won\u2019t. You just keep paying.</p>\n<p><strong>Susan:</strong> You won\u2019t, because It\u2019ll be so perfectly honed to you, that you\u2019ll never be actually happy. You\u2019ll be on the verge of so unhappy that you\u2019ll get rid of it, but you won\u2019t actually get rid of it.</p>\n<p><strong>Scott:</strong> AI will optimize the frustrations. AI knows your dreams, and it\u2019s going to make sure that you never achieve them, but you\u2019re going to be very, very close, always.</p>\n<p><strong>Scott:</strong> Just one more little bit, that\u2019s it. You\u2019re so close.</p>\n<p><strong>Susan:</strong> You will be addicted to things, because of AI, that are ridiculous. It\u2019s like they will have honed the rewards system on whatever to be, well, if you just click this one more time-</p>\n<p><strong>Scott:</strong> Just one more, just one more, what\u2019s the big deal.</p>\n<p><strong>Susan:</strong> Just one more \u2026 Eight hours later, you\u2019re sitting there in a pile of filth, and you\u2019re like, just one more click, and I\u2019ll go to sleep.</p>\n<p><strong>Scott:</strong> Well, that might already happen on YouTube. Doctors and pilots are now unemployable.</p>\n<p><strong>Scott:</strong> Yep, what about doctors?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976814/blog/what-does-the-ai-dystopia-look-like-ai-show-2/hungry-will-work-for_.jpg" alt="doc"></p>\n<p><strong>Susan:</strong> Oh, doctors, geez \u2026 Not to offend any doctors out there.</p>\n<p><strong>Scott:</strong> You\u2019re gone. You\u2019re a goner.</p>\n<p><strong>Susan:</strong> A subjective opinion is probably not a good one.</p>\n<p><strong>Scott:</strong> Are you saying doctors are subjective?</p>\n<p><strong>Susan:</strong> Sometimes, sometimes. They\u2019re professionals. They\u2019re well-trained, but they\u2019re still people.</p>\n<p><strong>Scott:</strong> Yeah, they get tired. They\u2019re trying to get their Medicare bill/Medicaid bill paid.</p>\n<p><strong>Susan:</strong> After you\u2019ve seen the 90th simple cold come in and act like they\u2019re about to die of the plague and ask for all the wrong medicines, and you have to tell them, \u201CIt\u2019s just a cold. Drink some fluids. Get some sleep. Tomorrow, you\u2019ll feel fine.\u201D AI will take over that.</p>\n<p><strong>Scott:</strong> I mean, saying that\u2019s kind of an easy job?</p>\n<p><strong>Susan:</strong> I\u2019ll say this: that we train doctors and pilots for that last little one percent. AI\u2019s going to cut that down to a half a percent, and then a quarter of a percent. Take away that 99, that big huge grunt of stuff that is all normal, right? We understand the things that they go through. Here\u2019s the lifecycle of the flu. Here\u2019s the whatever. Here\u2019s the things to look for. It is this.</p>\n<p><strong>Scott:</strong> Doctors, all your jobs, they\u2019re gone.</p>\n<p><strong>Susan:</strong> Doctors, pilots.</p>\n<p><strong>Scott:</strong> Pilots gone.</p>\n<p><strong>Susan:</strong> Oh, did you see the ticket bot?</p>\n<p><strong>Scott:</strong> Ticket bot?</p>\n<p><strong>Susan:</strong> Trying to get you out of tickets, law programs.</p>\n<p><strong>Scott:</strong> Well, now it\u2019s an arms race, right? To give you tickets and to get you out of tickets. Funding the AI technology boom. The war on tickets. Old laws become asphyxiating.</p>\n<p><strong>Susan:</strong> Another interesting thing is, as technology gets better we\u2019re able to enforce laws that when they were put in place they were never intended to be enforced at that level. Just think about speeding tickets and the like. The idea of speeding and the resources put into catching people and all that were from before we had technology - like cameras and stuff like that. The laws were put in place back then.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976815/blog/what-does-the-ai-dystopia-look-like-ai-show-2/lexus_police_edition_by_eun_su_d4xr1fd-1.jpg" alt="cops"></p>\n<p><em>Photo credit: <a href="https://www.deviantart.com/eun-su/art/Lexus-Police-Edition-298553593">Eun-su</a></em></p>\n<p><strong>Scott:</strong> Yeah, a while ago.</p>\n<p><strong>Susan:</strong> Now, we get better and better and easier and easier enforcement, and we enforce disproportionately to how the laws were initially put in place.</p>\n<p><strong>Susan:</strong> This enforcement allows for new realms of \u2026 I don\u2019t want to say abusing the law, but making it very easy to be in violation of the law and get caught, to the detriment of society, you know?</p>\n<p><strong>Scott:</strong> It might go sour, if you can be caught for everything.</p>\n<p><strong>Susan:</strong> Literally. I mean, you walk out the door and you get in your car, you\u2019ve probably broken four laws..</p>\n<p><strong>Scott:</strong> Maybe the laws will get better defined now. Couldn\u2019t that be a good thing? No, probably not. That\u2019s not going to happen.</p>\n<p><strong>Susan:</strong> An AI-enforced legal system, oh man!</p>\n<p><strong>Scott:</strong> Things might go quicker. No, they\u2019ll just frustrate you to extract more money from you.</p>\n<p><strong>Susan:</strong> Pretty much, yeah.</p>\n<p><strong>Scott:</strong> Isn\u2019t that the Government\u2019s job, roughly, to protect you just enough to extract value out of you?</p>\n<p><strong>Susan:</strong> Just enough? Ooh, I think we\u2019re in a different territory there.</p>\n<p><strong>Scott:</strong> Well, they\u2019re investing a lot in AI.</p>\n<p><strong>Susan:</strong> Maybe I want some AI in my government.</p>\n<h2 id="creatives-join-doctors-and-pilots-in-the-homeless-shelters">Creatives join doctors and pilots in the homeless shelters</h2>\n<p><strong>Scott:</strong> Well, for now, until they get too efficient. Creative jobs, writers, anything like that? What\u2019s that? What\u2019s going to happen to them?</p>\n<p><strong>Susan:</strong> Well, I mean, doesn\u2019t Facebook already have like a snippet writer for articles?</p>\n<p><strong>Scott:</strong> Yeah, rather than a clickbait title, how about a little summary? Here\u2019s two sentences that, hey, if you just knew this one weird trick about swimming pools\u2026</p>\n<p><strong>Susan:</strong> There\u2019s been a lot of research about actually generating well-formed text, well-formed software. We\u2019re seeing code assistance inside of, again, Facebook, trying to write little snippets of where things might be going wrong. We\u2019re seeing \u2026 Coders, look out. Writing copy, actually taking and summarizing articles, these are all areas where AI is making real progress. I mean, let\u2019s be honest here. It\u2019s not there yet, but does that mean six months from now, a year, five years?</p>\n<p><strong>Scott:</strong> Give it a couple years, stir the pot.</p>\n<p><strong>Susan:</strong> Even if it\u2019s \u2026 We\u2019ll give it 10 years away, 10 years away, taking away what we thought was deeply creative work? That is a staggering thought right there, you know?</p>\n<p><strong>Scott:</strong> Yeah.</p>\n<p><strong>Susan:</strong> That\u2019s deeply into interesting job territory there.</p>\n<p><strong>Scott:</strong> You mean, pop music is formulaic?</p>\n<p><strong>Susan:</strong> Oh, geez, of course. Pop music \u2026 Oh man, we\u2019ve got to write a\u2026</p>\n<p><strong>Scott:</strong> A pop music bot?</p>\n<p><strong>Susan:</strong> A pop music bot.</p>\n<p><strong>Scott:</strong> I love it.</p>\n<p><strong>Susan:</strong> Well, we\u2019ve got to give it a cool, cool name, too, like Electon, elector \u2026 I don\u2019t know. Let\u2019s see what. I\u2019m going to make up a word and see how it gets transcribed.</p>\n<p><strong>Scott:</strong> Yeah, there you go.</p>\n<p><strong>Susan:</strong> That\u2019s what it\u2019ll be, Eclector.</p>\n<p><strong>Scott:</strong> DeadElectron.</p>\n<p><strong>Susan:</strong> Yeah, DeadElectron! I like it, DeadElectron.</p>\n<iframe src="https://www.youtube.com/embed/gA03iyI3yEA" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p><em>This company really does make AI music.</em></p>\n<p><strong>Scott:</strong> There we go, yeah. Is anything going to get better? Is my life going to be easy now, because AI dictates my life? Are you going to get the Jetson\u2019s finger cramp from pressing the button?</p>\n<p><strong>Susan:</strong> From pressing the button? It was a long day at work! My finger is so cramped from pushing that button all day long!</p>\n<p><strong>Scott:</strong> Now you can have a to-do list, generated from your friendly AI, telling you what to do.</p>\n<p><strong>Susan:</strong> That\u2019s a cool thing. Tell me another good thing, Scott?</p>\n<p><strong>Scott:</strong> Yeah, do you think that that\u2019s actually a good thing, though?</p>\n<p><strong>Susan:</strong> Of course, it\u2019s going to be shaping the way that you\u2019re going to do your day. I mean, yeah, AI is saying, hey, you had these four tasks, and this fifth one that you don\u2019t quite remember me putting on there for you.</p>\n<p><strong>Scott:</strong> You\u2019re supposed to do this. You\u2019re supposed to walk by this billboard.</p>\n<p><strong>Susan:</strong> I don\u2019t really remember saying I had to do this.</p>\n<p><strong>Scott:</strong> You\u2019re supposed to buy the no-egg mayo, okay?</p>\n<p><strong>Susan:</strong> We\u2019re basically going to be well-trained humans. I mean, really, people want to be lazy, right?</p>\n<p><strong>Scott:</strong> It\u2019s the human condition.</p>\n<p><strong>Susan:</strong> It\u2019s the human condition. If you take that cognitive load off, it\u2019s like, \u201CYours; you can take it.\u201D Then, you just follow along like the herd. As long as it\u2019s not too far away from what you expect, you\u2019re like, ah, whatever. Here\u2019s the list of things I\u2019m supposed to do today to be a functioning adult. Oh, on there is buy such-and-such a brand mayonnaise. Oh, of course, that\u2019s what I wanted, click.</p>\n<h2 id="what-about-ai-dating">What about AI dating?</h2>\n<p><strong>Susan:</strong> What do you think about AI dating? Will your soulmate be picked out?</p>\n<p><strong>Scott:</strong> For you, yeah, so you have my AI talk to your AI. They\u2019ll figure things out.</p>\n<p><strong>Susan:</strong> Ooh, they can go on a pre-date.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976816/blog/what-does-the-ai-dystopia-look-like-ai-show-2/dating-bots.jpg" alt="dating"></p>\n<p><em>The press seem to believe that we will be dating robots, when indeed, it\u2019s the robots who\u2019ll date in our stead-proxy dating.</em></p>\n<p><strong>Scott:</strong> Yeah, a pre-date to figure out if the \u2026 It\u2019s like blind dating, but you blame the AI now, if it doesn\u2019t go well.</p>\n<p><strong>Susan:</strong> In a blink of an eye, will the AIs go through the whole thing, the whole date a couple times?</p>\n<p><strong>Scott:</strong> The whole thing. Yeah, a second later, they decided.</p>\n<p><strong>Susan:</strong> They\u2019ll decide to shack up together. They\u2019ll get married. They\u2019ll have little AI children. They\u2019ll have some messy fights. Then you\u2019ll decide to get divorced, and it\u2019ll all break up, and by the end of it, it comes back to you, and it says, \u201CStay away from this one.\u201D</p>\n<p><strong>Scott:</strong> It happens in the span of a second.</p>\n<p><strong>Susan:</strong> It\u2019s not going to end well.</p>\n<p><strong>Scott:</strong> It\u2019s going to take all the spice out of life.</p>\n<p><strong>Susan:</strong> Yeah, but what if it comes back and says, \u201CThis is the one.\u201D Now, you sit down and you\u2019re like, \u201CMy AI says you\u2019re the one.\u201D The other one says, \u201CYeah, my AI says you\u2019re the one,\u201D so how should we act at that point.</p>\n<p><strong>Scott:</strong> Now you\u2019re entitled, right? You\u2019re stuck with me. We have to be together.</p>\n<p><strong>Susan:</strong> We have to be together. Should I even try?</p>\n<p><strong>Scott:</strong> You just start letting it go right then, right? There\u2019s no salad for dinner. It\u2019s two T-bone steaks and some Indian food afterward.</p>\n<p><strong>Susan:</strong> Your first meal, you\u2019re sitting there, you eat, you belch, you undo the top button. It\u2019s like, it doesn\u2019t matter. You\u2019re my one. You\u2019re not going to leave.</p>\n<p><strong>Scott:</strong> It\u2019s decided.</p>\n<p><strong>Susan:</strong> The AIs have determined what\u2019s going to go on here.</p>\n<p><strong>Susan:</strong> Wait. Let me check how many children we\u2019re supposed to have. Oh, two. AI is your new boss</p>\n<p><strong>Scott:</strong> They\u2019ll be watching you at work, too. It\u2019s like this is some little Santa stuff here.</p>\n<p><strong>Susan:</strong> Do you think they\u2019re going to be watching at work? What are they going to do?</p>\n<p><strong>Scott:</strong> Yeah, performance measurement, man. It\u2019s like the thing that everybody gets advertised to on Instagram now, that\u2019s about slouching. You tape it to your back, and it tells you if you\u2019re leaned over, and it zaps you, right? Now, at work, it\u2019ll be cameras watching you.</p>\n<p><strong>Susan:</strong> Everywhere.</p>\n<blockquote>\n<p>\u201CThey\u2019ll be looking at your email. Have you sent enough emails today? Have you attended enough meetings? Have you spoken enough words to your coworkers? Have you said enough buzzwords?\u201D</p>\n</blockquote>\n<p><strong>Susan:</strong> A performance review will come into your email, completely crafted by some sort of machine learning algorithm.</p>\n<p><strong>Scott:</strong> Every day.</p>\n<p><strong>Susan:</strong> It\u2019ll be brutal. Here are the 10 things you did well, and here\u2019s the 10 things you need to work on, you know?</p>\n<p><strong>Susan:</strong> The 10 up at the top- They\u2019re kind of fluff.</p>\n<p><strong>Scott:</strong> It\u2019s like we have to give you a sandwich.</p>\n<p><strong>Susan:</strong> Yeah, we\u2019ve got to make you think you\u2019re any good but\u2026</p>\n<p><strong>Scott:</strong> A perfectly crafted visual representation of your day to make you react and like, damn, I\u2019ve got to work harder.</p>\n<p><strong>Susan:</strong> Here\u2019s the box you need to be in. If you\u2019re not in this box, you are a problem.</p>\n<p><strong>Susan:</strong> There\u2019s huge promise in that. Don\u2019t get me wrong, but there are dangers of fitting too much to the mean there.</p>\n<h2 id="the-machines-use-us-for-only-one-thing">The machines use us for only one thing</h2>\n<p><strong>Scott:</strong> What\u2019s the value of a human anymore? I mean, this is just going to be The Matrix soon, where we\u2019re just a power source for AI overlords. What\u2019s the deal?</p>\n<p><strong>Susan:</strong> I never quite got the power source of the Matrix anyway.</p>\n<p><strong>Scott:</strong> I don\u2019t know the power source thing either, but some other thing \u2026 I don\u2019t know.</p>\n<p><strong>Susan:</strong> That was weird.</p>\n<p><strong>Scott:</strong> Are we actually going to be more creative?</p>\n<p><strong>Susan:</strong> Oh, is only creativity left?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976817/blog/what-does-the-ai-dystopia-look-like-ai-show-2/04-11_Robots_repost-unsplash-web.jpg" alt="imagine"></p>\n<p><em>Source: <a href="https://unsplash.com/photos/xdEeLyK4iBo">Jehyun Sung</a></em></p>\n<p><strong>Scott:</strong> Our only job \u2026 Yeah, that\u2019s it, and you take in all the inputs and you\u2019re like, \u201CNo, it should be this way.\u201D</p>\n<p><strong>Susan:</strong> You do that one creative thing a year. That\u2019s it. There\u2019s this exact one moment where you add randomness to the system.</p>\n<p><strong>Scott:</strong> Exactly.</p>\n<p><strong>Susan:</strong> You do some irrational thing.</p>\n<p><strong>Scott:</strong> \u201CNo, it shouldn\u2019t be this way!\u201D</p>\n<p><strong>Susan:</strong> Suddenly, you get $100,000 because that was your job. That one creative thing.</p>\n<p><strong>Scott:</strong> We needed that. We needed that random thought there. Yeah, everything \u2026 We\u2019re too logical.</p>\n<p><strong>Susan:</strong> Thanks, you\u2019re our random number generator.</p>\n<p><strong>Scott:</strong> Yeah. What \u2026 We already know the answer.</p>\n<p><strong>Scott:</strong> Random number generator.</p>\n<p><strong>Susan:</strong> They don\u2019t need us for power. They need us for random number generation.</p>\n<p><strong>Scott:</strong> We figured it out, yeah, yeah. Well, this is the value of children, right?</p>\n<p><strong>Susan:</strong> Talk about randomness. You never thought the things that could happen would happen. Yeah, 2:00 in the morning, what is that sound? Why is there paint everywhere? Please, please, I told you, not the cat! I\u2019m sorry, is that what we were talking about, Scott?</p>\n<p><strong>Scott:</strong> We\u2019ll just all be children in the AI world now. You know, just banging pots and pans together.</p>\n<p><strong>Susan:</strong> I\u2019m looking forward to that.</p>\n<p><strong>Scott:</strong> Yeah, it sounds like a pretty sweet existence, right?</p>\n<p><strong>Susan:</strong> Nap time, you know?</p>\n<p><strong>Scott:</strong> With milk, warm milk, and you have your blanket.</p>\n<p><strong>Susan:</strong> It\u2019s going to be awesome. Yeah, the lights slowly go down.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976818/blog/what-does-the-ai-dystopia-look-like-ai-show-2/napercise.jpg" alt="nap"></p>\n<p><em><a href="https://www.forbes.com/sites/brucelee/2017/04/29/napercise-why-nap-for-free-when-you-can-pay-for-it/#68e889164be4">\u201CNapercise\u201D</a>, as David Lloyd Clubs in London calls it, is not far off. Soon all humans will do is be randomly creative and drink juice from sippy cups.</em></p>\n<p><strong>Scott:</strong> Is this something you did at school back in the day? This is something that they do at school now in California, at least. You have your own blanket. You get your milk. You take a nap.</p>\n<p><strong>Susan:</strong> I love it.</p>\n<p><strong>Scott:</strong> You\u2019re like 10.</p>\n<p><strong>Susan:</strong> Whoa, 10?</p>\n<p><strong>Scott:</strong> I mean, 9, 8-</p>\n<p><strong>Susan:</strong> Great. I remember doing it from kindergarten.</p>\n<p><strong>Scott:</strong> Yeah, I know. I remember it way back. Did you have your special mat?</p>\n<p><strong>Susan:</strong> The most valuable skills from kindergarten \u2026 We completely forget those. Everybody should have nap time.</p>\n<p><strong>Scott:</strong> Well, because we get trained to be more like robots, but now the robots are finally going to take over the rightful owner of those tasks, and now we just get to be children all the time.</p>\n<h2 id="your-insurance-premiums-go-up">Your insurance premiums go up</h2>\n<p><strong>Susan:</strong> They\u2019re going to tell you when you\u2019re not doing the optimal thing each day, right? This is when you should be napping. Oh, man, oh, you didn\u2019t nap. For that day, your insurance premium went up by a dollar. You are not living the optimally healthy life.</p>\n<p><strong>Scott:</strong> Yeah, for randomness. They need you to be healthy for the randomness.</p>\n<p><strong>Susan:</strong> Yeah, but I\u2019m just saying that AIs are going to come in and judge every second of your life, and you\u2019re going to be charged more based off of you not living the right way. That beer you wanted? It didn\u2019t just cost a couple bucks. It also got reported back to your insurance company.</p>\n<p><strong>Scott:</strong> Well, maybe human lifespan doesn\u2019t need to be as long, now, because we lose our mojo by the time we\u2019re 30, 20, 15, you know?</p>\n<p><strong>Scott:</strong> It\u2019s like, eh, screw you, after a while.</p>\n<p><strong>Susan:</strong> Ooh, it could be like Logan\u2019s Run. At 25, you\u2019re dead-only they trick us. They say, \u201CYour brain is being uploaded into the cloud. In reality, no.</p>\n<p><strong>Scott:</strong> Bye, everybody. I can\u2019t wait to see all my ancestors.</p>\n<p><strong>Susan:</strong> Yeah, some quick little chatbot has put up that fake that says it\u2019s you for about a day, until everybody forgets that you exist.</p>\n<p><strong>Scott:</strong> That\u2019s true. Let\u2019s say, a week, right? Yeah.</p>\n<p><strong>Susan:</strong> A week, for a week your loved ones are typing to you.</p>\n<p><strong>Scott:</strong> \u201COh, look at you. Hey \u2026\u201D</p>\n<p><strong>Susan:</strong> \u201COh, it\u2019s so great in the cloud.\u201D They say, \u201CYes, you will love it here.\u201D A week later, \u201CGot to go now. There\u2019s so many exciting things. I can\u2019t pay attention to chat anymore.\u201D</p>\n<p><strong>Scott:</strong> Yeah, \u201CI can\u2019t wait to see you.\u201D</p>\n<p><strong>Susan:</strong> Then erase that from the system.</p>\n<p><strong>Scott:</strong> Then they ghost you, yeah. All right, well, we have some worst case scenario. Maybe in the future, we\u2019ll have some best case scenario. I mean, the best?</p>\n<p><strong>Susan:</strong> Yeah.</p>\n<p><strong>Scott:</strong> At least something.</p>\n<p><strong>Susan:</strong> Do you think <a href="https://youtu.be/pE5-K7gg0kE">AI could actually be good for the world?</a></p>\n<p><strong>Scott:</strong> Nah, I don\u2019t think so.</p>\n<p><strong>Susan:</strong> You know what? I have a sneaking suspicion that for everything we said was bad, there might be a couple good things.</p>\n<p><strong>Scott:</strong> Are there some good things?</p>\n<p><strong>Susan:</strong> There just might be.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-does-the-ai-dystopia-look-like-ai-show-2/index.md" };
function rawContent() {
  return `<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/570095520&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" width="100%" height="166" frameborder="no" scrolling="no"></iframe>

**Scott:** Welcome to the AI Show. Today, we're asking the question: What does the AI dystopia look like?

**Susan:** Oh, man, we are going down the tubes. It's going to be terrible.

**Scott:** Let's take it to negative town. The world is over.

**Susan:** The world, as we knew it, ends basically every year and a half as the next revolution hits, but this is the last one.

**Scott:** There's a law against that, isn't there?

**Susan:** There is?

**Scott:** Everything has a life expectancy about twice what its current age is, but until it abruptly dies.

**Susan:** Oh, yeah, that's cool. I've got to look that one up.

**Scott:** Yeah, so the abrupt death is coming. Everything looks like we're going to live twice as long.

**Susan:** Well, exactly. Well, everybody keeps saying, "Hey, the pendulum's going to swing back, and technology is going to help us more than hurt."

**Scott:** Hey, we're still alive, right?

**Susan:** That's all true up until the very last time. Then, that last time, people are like, "Well, I guess it didn't swing back that time."

**Susan:** Man, there's a lot to be pessimistic about.

## What's the first thing that's going to go?

**Susan:** Oh, the first thing is privacy.

**Scott:** Privacy's number one?

**Susan:** Everybody knows that their privacy is not nearly what it may have been in the past.

**Scott:** What is privacy anyway?

![bigbro](https://res.cloudinary.com/deepgram/image/upload/v1661976812/blog/what-does-the-ai-dystopia-look-like-ai-show-2/1984_by_iskallvinter_d15owbe.jpg)

*Photo credit [iskallvinter](https://www.deviantart.com/iskallvinter/art/1984-70025882)*

**Susan:** Now, we're going to take the loss of privacy to the next level. Not only will they have your data, but they'll have the computing power and the algorithms to actually do something with it.

**Scott:** This isn't like drones looking in your bedroom window.

**Susan:** Who cares how many data points you have, if you can't actually make sense of them? But you know, we can actually listen to every single phone call and record it. But, if you can't actually do anything with all that audio, who cares?

**Susan:** Now we can take all the surveillance cameras, and we can analyze video.

**Susan:** We can put together your entire human history by taking pictures from 4000 different things.

**Scott:** Your browser history.

**Susan:** The smarts are finally there to analyze multiple terabytes of data and come up with you.

**Scott:** Does Google become a state-owned company?

**Susan:** Well, no, Google owns the state.

**Scott:** They become the state. Google's the state.

**Susan:** The United States of Google?

**Scott:** The United States of Google!

**Susan:** How about you, Scott? Where do you think the dystopian future of AI goes?

**Scott:** Well, I think we should bring this to self-driving cars. Every inch of your life is known.

**Susan:** Is this the trolley problem?

**Scott:** You're going to start driving around, or you're not driving around anymore. You've got mainly machines that drive for you.

**Susan:** Of course.

**Scott:** But now, what are they going to do? They're going to drive you around and take you by the billboard that's also AI powered.

**Susan:** I love it! It's like why are we taking this route? Oh, what's that billboard there?

**Scott:** Everybody always has the Uber driver experience. "Why are we going this way?" Well, this is going to have a monetary reason behind it.

**Susan:** From upfront a voice says: "This is faster. Trust me." Why are we stopped in the middle of nowhere, with nothing but advertisement around me?

**Scott:** Is the AI that drives the car like a humanoid? It turns around. "Trust me. It's faster. (robotic voice)" Yeah.

**Susan:** Oh, well, there's a privacy bent to this, too. Just think of it.

**Scott:** No more sexual relations in the back of the Uber?

**Susan:** No, it's creepy if you did, but no. Now, every last inch of your entire life is ... Your position is known. You get in the car, and it knows where you're at, but more than that, it's just a big data collection device. It's built for it. All those LIDARS are constantly going, scanning every single thing around them, all that stuff.

**Scott:** Before, it just knew your position. Now it knows your total surroundings.

**Susan:** The natural outcropping of self-driving car technology is really fantastic image recognition and classification. Not only is it going around recording every last square inch of visual detail, but man, it's saying, "That is a flower pot from Ikea."

**Susan:** $12.99.

**Scott:** You could buy this.

**Susan:** As you're in the car, you're sitting here. You're buying stuff.

**Susan:** As you're in your car, you're looking around over there, and a little advertisement pops up. It's like, "You can also have this flowerpot for $9.99. Just press here." It sees your eyes, and there you go. The attention economy.

**Scott:** Well, have you ever seen the show Black Mirror?


![mirror](https://res.cloudinary.com/deepgram/image/upload/v1661976813/blog/what-does-the-ai-dystopia-look-like-ai-show-2/download-1.jpg)

*"Fifteen Million Merits" Series 1, episode 2 of Black Mirror.*

**Susan:** First of all, if you see the first episode... Go to the second or third episode. The first one will just...

**Scott:** Yeah, don't watch the first.

**Scott:** Yeah, but the attention economy is discussed there in one of the episodes a little bit, right?

**Susan:** There's an episode where they're on bikes, just pedaling aimlessly, just to pay off their credits, and they're being forced to watch TV advertisements. Oh my. That's dystopian.

**Scott:** If they start to fall asleep, it'll jolt them back awake, because AI's watching them. It knows what they're looking at, what they're taking in.

**Susan:** No! Yeah. They're forced to watch a commercial, and it knows whether they're paying attention or not.

**Scott:** You can skip the commercial, but you'll have to pay.

**Susan:** How evil is that? I've got my headphones on now, and a commercial comes on, I just go like that, but then the commercial will pause, and you put them back on, and it's right back there where it was at.

**Scott:** Right back there.

**Susan:** I was like, what? You're just like, oh, I'm going to get smart and switch channels, and it's still there-the commercial does not go away!

**Scott:** Yeah, it's the same one.

**Susan:** Until you listen to that commercial and actually pay attention.

**Scott:** Then you give in. You're like, okay, my AI overlord.

**Susan:** Oh, whew. That is is tremendous.

## Are they going to take our jobs?

**Susan:** If you drive something, you can forget about it. Cars, trucks, planes, which ... Man, get in an aircraft. There's no cockpit.

**Scott:** This is the easiest job ever, right? Why not have an AI pilot?

**Susan:** Yeah, exactly, and by the way most accidents happen up in front, just saying. Maybe it'll be a lot safer, not that airlines are less safe right now. The autonomous revolution. I mean, drones are going to start delivering your food.

**Scott:** They could poison you. Or they just selectively, "Oh, you're not a Trump supporter? Your food is going to be cold."

## Technology is high-tech mediocrity

**Susan:** I was just thinking the whole drone revolution there, delivery revolution, suddenly you're starting to get the seconds stuff. You've got to pay for Prime to get the fresh eggs, right? These are still technically good, but they're one day away from expiration. It's like, magically, all the food that gets delivered to your house, unless you pay the premium, is one day away from expiration.

**Scott:** But it's been managed very well, like the warehouse is near you. It's been stocked just for you, because they know.

**Susan:** Oh yeah, yeah. It knows exactly that cutting point, you know? We call this Susan's Law here.

**Scott:** Susan's Law.

**Susan:** Susan's Law: Technology allows you to make something just good enough. The better your technology is, the finer you can cut that line to be just good enough for the customer that they'll pay for it ... I think we've seen this.

**Scott:** Absolutely.

**Susan:** As technology's gotten more and more capable, we've gotten to the ... We're always on the verge of saying, "This is so bad! If one more thing happened, I'd get rid of it. If just one more thing ..."

**Scott:** Yep, but you won't. You just keep paying.

**Susan:** You won't, because It'll be so perfectly honed to you, that you'll never be actually happy. You'll be on the verge of so unhappy that you'll get rid of it, but you won't actually get rid of it.

**Scott:** AI will optimize the frustrations. AI knows your dreams, and it's going to make sure that you never achieve them, but you're going to be very, very close, always.

**Scott:** Just one more little bit, that's it. You're so close.

**Susan:** You will be addicted to things, because of AI, that are ridiculous. It's like they will have honed the rewards system on whatever to be, well, if you just click this one more time-

**Scott:** Just one more, just one more, what's the big deal.

**Susan:** Just one more ... Eight hours later, you're sitting there in a pile of filth, and you're like, just one more click, and I'll go to sleep.

**Scott:** Well, that might already happen on YouTube. Doctors and pilots are now unemployable.

**Scott:** Yep, what about doctors?

![doc](https://res.cloudinary.com/deepgram/image/upload/v1661976814/blog/what-does-the-ai-dystopia-look-like-ai-show-2/hungry-will-work-for_.jpg)

**Susan:** Oh, doctors, geez ... Not to offend any doctors out there.

**Scott:** You're gone. You're a goner.

**Susan:** A subjective opinion is probably not a good one.

**Scott:** Are you saying doctors are subjective?

**Susan:** Sometimes, sometimes. They're professionals. They're well-trained, but they're still people.

**Scott:** Yeah, they get tired. They're trying to get their Medicare bill/Medicaid bill paid.

**Susan:** After you've seen the 90th simple cold come in and act like they're about to die of the plague and ask for all the wrong medicines, and you have to tell them, "It's just a cold. Drink some fluids. Get some sleep. Tomorrow, you'll feel fine." AI will take over that.

**Scott:** I mean, saying that's kind of an easy job?

**Susan:** I'll say this: that we train doctors and pilots for that last little one percent. AI's going to cut that down to a half a percent, and then a quarter of a percent. Take away that 99, that big huge grunt of stuff that is all normal, right? We understand the things that they go through. Here's the lifecycle of the flu. Here's the whatever. Here's the things to look for. It is this.

**Scott:** Doctors, all your jobs, they're gone.

**Susan:** Doctors, pilots.

**Scott:** Pilots gone.

**Susan:** Oh, did you see the ticket bot?

**Scott:** Ticket bot?

**Susan:** Trying to get you out of tickets, law programs.

**Scott:** Well, now it's an arms race, right? To give you tickets and to get you out of tickets. Funding the AI technology boom. The war on tickets. Old laws become asphyxiating.

**Susan:** Another interesting thing is, as technology gets better we're able to enforce laws that when they were put in place they were never intended to be enforced at that level. Just think about speeding tickets and the like. The idea of speeding and the resources put into catching people and all that were from before we had technology - like cameras and stuff like that. The laws were put in place back then.

![cops](https://res.cloudinary.com/deepgram/image/upload/v1661976815/blog/what-does-the-ai-dystopia-look-like-ai-show-2/lexus_police_edition_by_eun_su_d4xr1fd-1.jpg)

*Photo credit: [Eun-su](https://www.deviantart.com/eun-su/art/Lexus-Police-Edition-298553593)*

**Scott:** Yeah, a while ago.

**Susan:** Now, we get better and better and easier and easier enforcement, and we enforce disproportionately to how the laws were initially put in place.

**Susan:** This enforcement allows for new realms of ... I don't want to say abusing the law, but making it very easy to be in violation of the law and get caught, to the detriment of society, you know?

**Scott:** It might go sour, if you can be caught for everything.

**Susan:** Literally. I mean, you walk out the door and you get in your car, you've probably broken four laws..

**Scott:** Maybe the laws will get better defined now. Couldn't that be a good thing? No, probably not. That's not going to happen.

**Susan:** An AI-enforced legal system, oh man!

**Scott:** Things might go quicker. No, they'll just frustrate you to extract more money from you.

**Susan:** Pretty much, yeah.

**Scott:** Isn't that the Government's job, roughly, to protect you just enough to extract value out of you?

**Susan:** Just enough? Ooh, I think we're in a different territory there.

**Scott:** Well, they're investing a lot in AI.

**Susan:** Maybe I want some AI in my government.

## Creatives join doctors and pilots in the homeless shelters

**Scott:** Well, for now, until they get too efficient. Creative jobs, writers, anything like that? What's that? What's going to happen to them?

**Susan:** Well, I mean, doesn't Facebook already have like a snippet writer for articles?

**Scott:** Yeah, rather than a clickbait title, how about a little summary? Here's two sentences that, hey, if you just knew this one weird trick about swimming pools...

**Susan:** There's been a lot of research about actually generating well-formed text, well-formed software. We're seeing code assistance inside of, again, Facebook, trying to write little snippets of where things might be going wrong. We're seeing ... Coders, look out. Writing copy, actually taking and summarizing articles, these are all areas where AI is making real progress. I mean, let's be honest here. It's not there yet, but does that mean six months from now, a year, five years?

**Scott:** Give it a couple years, stir the pot.

**Susan:** Even if it's ... We'll give it 10 years away, 10 years away, taking away what we thought was deeply creative work? That is a staggering thought right there, you know?

**Scott:** Yeah.

**Susan:** That's deeply into interesting job territory there.

**Scott:** You mean, pop music is formulaic?

**Susan:** Oh, geez, of course. Pop music ... Oh man, we've got to write a...

**Scott:** A pop music bot?

**Susan:** A pop music bot.

**Scott:** I love it.

**Susan:** Well, we've got to give it a cool, cool name, too, like Electon, elector ... I don't know. Let's see what. I'm going to make up a word and see how it gets transcribed.

**Scott:** Yeah, there you go.

**Susan:** That's what it'll be, Eclector.

**Scott:** DeadElectron.

**Susan:** Yeah, DeadElectron! I like it, DeadElectron.

<iframe src="https://www.youtube.com/embed/gA03iyI3yEA" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

*This company really does make AI music.*

**Scott:** There we go, yeah. Is anything going to get better? Is my life going to be easy now, because AI dictates my life? Are you going to get the Jetson's finger cramp from pressing the button?

**Susan:** From pressing the button? It was a long day at work! My finger is so cramped from pushing that button all day long!

**Scott:** Now you can have a to-do list, generated from your friendly AI, telling you what to do.

**Susan:** That's a cool thing. Tell me another good thing, Scott?

**Scott:** Yeah, do you think that that's actually a good thing, though?

**Susan:** Of course, it's going to be shaping the way that you're going to do your day. I mean, yeah, AI is saying, hey, you had these four tasks, and this fifth one that you don't quite remember me putting on there for you.

**Scott:** You're supposed to do this. You're supposed to walk by this billboard.

**Susan:** I don't really remember saying I had to do this.

**Scott:** You're supposed to buy the no-egg mayo, okay?

**Susan:** We're basically going to be well-trained humans. I mean, really, people want to be lazy, right?

**Scott:** It's the human condition.

**Susan:** It's the human condition. If you take that cognitive load off, it's like, "Yours; you can take it." Then, you just follow along like the herd. As long as it's not too far away from what you expect, you're like, ah, whatever. Here's the list of things I'm supposed to do today to be a functioning adult. Oh, on there is buy such-and-such a brand mayonnaise. Oh, of course, that's what I wanted, click.

## What about AI dating?

**Susan:** What do you think about AI dating? Will your soulmate be picked out?

**Scott:** For you, yeah, so you have my AI talk to your AI. They'll figure things out.

**Susan:** Ooh, they can go on a pre-date.

![dating](https://res.cloudinary.com/deepgram/image/upload/v1661976816/blog/what-does-the-ai-dystopia-look-like-ai-show-2/dating-bots.jpg)

*The press seem to believe that we will be dating robots, when indeed, it's the robots who'll date in our stead-proxy dating.*

**Scott:** Yeah, a pre-date to figure out if the ... It's like blind dating, but you blame the AI now, if it doesn't go well.

**Susan:** In a blink of an eye, will the AIs go through the whole thing, the whole date a couple times?

**Scott:** The whole thing. Yeah, a second later, they decided.

**Susan:** They'll decide to shack up together. They'll get married. They'll have little AI children. They'll have some messy fights. Then you'll decide to get divorced, and it'll all break up, and by the end of it, it comes back to you, and it says, "Stay away from this one."

**Scott:** It happens in the span of a second.

**Susan:** It's not going to end well.

**Scott:** It's going to take all the spice out of life.

**Susan:** Yeah, but what if it comes back and says, "This is the one." Now, you sit down and you're like, "My AI says you're the one." The other one says, "Yeah, my AI says you're the one," so how should we act at that point.

**Scott:** Now you're entitled, right? You're stuck with me. We have to be together.

**Susan:** We have to be together. Should I even try?

**Scott:** You just start letting it go right then, right? There's no salad for dinner. It's two T-bone steaks and some Indian food afterward.

**Susan:** Your first meal, you're sitting there, you eat, you belch, you undo the top button. It's like, it doesn't matter. You're my one. You're not going to leave.

**Scott:** It's decided.

**Susan:** The AIs have determined what's going to go on here.

**Susan:** Wait. Let me check how many children we're supposed to have. Oh, two. AI is your new boss

**Scott:** They'll be watching you at work, too. It's like this is some little Santa stuff here.

**Susan:** Do you think they're going to be watching at work? What are they going to do?

**Scott:** Yeah, performance measurement, man. It's like the thing that everybody gets advertised to on Instagram now, that's about slouching. You tape it to your back, and it tells you if you're leaned over, and it zaps you, right? Now, at work, it'll be cameras watching you.

**Susan:** Everywhere.

> "They'll be looking at your email. Have you sent enough emails today? Have you attended enough meetings? Have you spoken enough words to your coworkers? Have you said enough buzzwords?"

**Susan:** A performance review will come into your email, completely crafted by some sort of machine learning algorithm.

**Scott:** Every day.

**Susan:** It'll be brutal. Here are the 10 things you did well, and here's the 10 things you need to work on, you know?

**Susan:** The 10 up at the top- They're kind of fluff.

**Scott:** It's like we have to give you a sandwich.

**Susan:** Yeah, we've got to make you think you're any good but...

**Scott:** A perfectly crafted visual representation of your day to make you react and like, damn, I've got to work harder.

**Susan:** Here's the box you need to be in. If you're not in this box, you are a problem.

**Susan:** There's huge promise in that. Don't get me wrong, but there are dangers of fitting too much to the mean there.

## The machines use us for only one thing

**Scott:** What's the value of a human anymore? I mean, this is just going to be The Matrix soon, where we're just a power source for AI overlords. What's the deal?

**Susan:** I never quite got the power source of the Matrix anyway.

**Scott:** I don't know the power source thing either, but some other thing ... I don't know.

**Susan:** That was weird.

**Scott:** Are we actually going to be more creative?

**Susan:** Oh, is only creativity left?

![imagine](https://res.cloudinary.com/deepgram/image/upload/v1661976817/blog/what-does-the-ai-dystopia-look-like-ai-show-2/04-11_Robots_repost-unsplash-web.jpg)

*Source: [Jehyun Sung](https://unsplash.com/photos/xdEeLyK4iBo)*

**Scott:** Our only job ... Yeah, that's it, and you take in all the inputs and you're like, "No, it should be this way."

**Susan:** You do that one creative thing a year. That's it. There's this exact one moment where you add randomness to the system.

**Scott:** Exactly.

**Susan:** You do some irrational thing.

**Scott:** "No, it shouldn't be this way!"

**Susan:** Suddenly, you get $100,000 because that was your job. That one creative thing.

**Scott:** We needed that. We needed that random thought there. Yeah, everything ... We're too logical.

**Susan:** Thanks, you're our random number generator.

**Scott:** Yeah. What ... We already know the answer.

**Scott:** Random number generator.

**Susan:** They don't need us for power. They need us for random number generation.

**Scott:** We figured it out, yeah, yeah. Well, this is the value of children, right?

**Susan:** Talk about randomness. You never thought the things that could happen would happen. Yeah, 2:00 in the morning, what is that sound? Why is there paint everywhere? Please, please, I told you, not the cat! I'm sorry, is that what we were talking about, Scott?

**Scott:** We'll just all be children in the AI world now. You know, just banging pots and pans together.

**Susan:** I'm looking forward to that.

**Scott:** Yeah, it sounds like a pretty sweet existence, right?

**Susan:** Nap time, you know?

**Scott:** With milk, warm milk, and you have your blanket.

**Susan:** It's going to be awesome. Yeah, the lights slowly go down.

![nap](https://res.cloudinary.com/deepgram/image/upload/v1661976818/blog/what-does-the-ai-dystopia-look-like-ai-show-2/napercise.jpg)

*["Napercise"](https://www.forbes.com/sites/brucelee/2017/04/29/napercise-why-nap-for-free-when-you-can-pay-for-it/#68e889164be4), as David Lloyd Clubs in London calls it, is not far off. Soon all humans will do is be randomly creative and drink juice from sippy cups.*

**Scott:** Is this something you did at school back in the day? This is something that they do at school now in California, at least. You have your own blanket. You get your milk. You take a nap.

**Susan:** I love it.

**Scott:** You're like 10.

**Susan:** Whoa, 10?

**Scott:** I mean, 9, 8-

**Susan:** Great. I remember doing it from kindergarten.

**Scott:** Yeah, I know. I remember it way back. Did you have your special mat?

**Susan:** The most valuable skills from kindergarten ... We completely forget those. Everybody should have nap time.

**Scott:** Well, because we get trained to be more like robots, but now the robots are finally going to take over the rightful owner of those tasks, and now we just get to be children all the time.

## Your insurance premiums go up

**Susan:** They're going to tell you when you're not doing the optimal thing each day, right? This is when you should be napping. Oh, man, oh, you didn't nap. For that day, your insurance premium went up by a dollar. You are not living the optimally healthy life.

**Scott:** Yeah, for randomness. They need you to be healthy for the randomness.

**Susan:** Yeah, but I'm just saying that AIs are going to come in and judge every second of your life, and you're going to be charged more based off of you not living the right way. That beer you wanted? It didn't just cost a couple bucks. It also got reported back to your insurance company.

**Scott:** Well, maybe human lifespan doesn't need to be as long, now, because we lose our mojo by the time we're 30, 20, 15, you know?

**Scott:** It's like, eh, screw you, after a while.

**Susan:** Ooh, it could be like Logan's Run. At 25, you're dead-only they trick us. They say, "Your brain is being uploaded into the cloud. In reality, no.

**Scott:** Bye, everybody. I can't wait to see all my ancestors.

**Susan:** Yeah, some quick little chatbot has put up that fake that says it's you for about a day, until everybody forgets that you exist.

**Scott:** That's true. Let's say, a week, right? Yeah.

**Susan:** A week, for a week your loved ones are typing to you.

**Scott:** "Oh, look at you. Hey ..."

**Susan:** "Oh, it's so great in the cloud." They say, "Yes, you will love it here." A week later, "Got to go now. There's so many exciting things. I can't pay attention to chat anymore."

**Scott:** Yeah, "I can't wait to see you."

**Susan:** Then erase that from the system.

**Scott:** Then they ghost you, yeah. All right, well, we have some worst case scenario. Maybe in the future, we'll have some best case scenario. I mean, the best?

**Susan:** Yeah.

**Scott:** At least something.

**Susan:** Do you think [AI could actually be good for the world?](https://youtu.be/pE5-K7gg0kE)

**Scott:** Nah, I don't think so.

**Susan:** You know what? I have a sneaking suspicion that for everything we said was bad, there might be a couple good things.

**Scott:** Are there some good things?

**Susan:** There just might be.`;
}
function compiledContent() {
  return '<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/570095520&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" width="100%" height="166" frameborder="no" scrolling="no" />\n<p><strong>Scott:</strong> Welcome to the AI Show. Today, we\u2019re asking the question: What does the AI dystopia look like?</p>\n<p><strong>Susan:</strong> Oh, man, we are going down the tubes. It\u2019s going to be terrible.</p>\n<p><strong>Scott:</strong> Let\u2019s take it to negative town. The world is over.</p>\n<p><strong>Susan:</strong> The world, as we knew it, ends basically every year and a half as the next revolution hits, but this is the last one.</p>\n<p><strong>Scott:</strong> There\u2019s a law against that, isn\u2019t there?</p>\n<p><strong>Susan:</strong> There is?</p>\n<p><strong>Scott:</strong> Everything has a life expectancy about twice what its current age is, but until it abruptly dies.</p>\n<p><strong>Susan:</strong> Oh, yeah, that\u2019s cool. I\u2019ve got to look that one up.</p>\n<p><strong>Scott:</strong> Yeah, so the abrupt death is coming. Everything looks like we\u2019re going to live twice as long.</p>\n<p><strong>Susan:</strong> Well, exactly. Well, everybody keeps saying, \u201CHey, the pendulum\u2019s going to swing back, and technology is going to help us more than hurt.\u201D</p>\n<p><strong>Scott:</strong> Hey, we\u2019re still alive, right?</p>\n<p><strong>Susan:</strong> That\u2019s all true up until the very last time. Then, that last time, people are like, \u201CWell, I guess it didn\u2019t swing back that time.\u201D</p>\n<p><strong>Susan:</strong> Man, there\u2019s a lot to be pessimistic about.</p>\n<h2 id="whats-the-first-thing-thats-going-to-go">What\u2019s the first thing that\u2019s going to go?</h2>\n<p><strong>Susan:</strong> Oh, the first thing is privacy.</p>\n<p><strong>Scott:</strong> Privacy\u2019s number one?</p>\n<p><strong>Susan:</strong> Everybody knows that their privacy is not nearly what it may have been in the past.</p>\n<p><strong>Scott:</strong> What is privacy anyway?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976812/blog/what-does-the-ai-dystopia-look-like-ai-show-2/1984_by_iskallvinter_d15owbe.jpg" alt="bigbro"></p>\n<p><em>Photo credit <a href="https://www.deviantart.com/iskallvinter/art/1984-70025882">iskallvinter</a></em></p>\n<p><strong>Susan:</strong> Now, we\u2019re going to take the loss of privacy to the next level. Not only will they have your data, but they\u2019ll have the computing power and the algorithms to actually do something with it.</p>\n<p><strong>Scott:</strong> This isn\u2019t like drones looking in your bedroom window.</p>\n<p><strong>Susan:</strong> Who cares how many data points you have, if you can\u2019t actually make sense of them? But you know, we can actually listen to every single phone call and record it. But, if you can\u2019t actually do anything with all that audio, who cares?</p>\n<p><strong>Susan:</strong> Now we can take all the surveillance cameras, and we can analyze video.</p>\n<p><strong>Susan:</strong> We can put together your entire human history by taking pictures from 4000 different things.</p>\n<p><strong>Scott:</strong> Your browser history.</p>\n<p><strong>Susan:</strong> The smarts are finally there to analyze multiple terabytes of data and come up with you.</p>\n<p><strong>Scott:</strong> Does Google become a state-owned company?</p>\n<p><strong>Susan:</strong> Well, no, Google owns the state.</p>\n<p><strong>Scott:</strong> They become the state. Google\u2019s the state.</p>\n<p><strong>Susan:</strong> The United States of Google?</p>\n<p><strong>Scott:</strong> The United States of Google!</p>\n<p><strong>Susan:</strong> How about you, Scott? Where do you think the dystopian future of AI goes?</p>\n<p><strong>Scott:</strong> Well, I think we should bring this to self-driving cars. Every inch of your life is known.</p>\n<p><strong>Susan:</strong> Is this the trolley problem?</p>\n<p><strong>Scott:</strong> You\u2019re going to start driving around, or you\u2019re not driving around anymore. You\u2019ve got mainly machines that drive for you.</p>\n<p><strong>Susan:</strong> Of course.</p>\n<p><strong>Scott:</strong> But now, what are they going to do? They\u2019re going to drive you around and take you by the billboard that\u2019s also AI powered.</p>\n<p><strong>Susan:</strong> I love it! It\u2019s like why are we taking this route? Oh, what\u2019s that billboard there?</p>\n<p><strong>Scott:</strong> Everybody always has the Uber driver experience. \u201CWhy are we going this way?\u201D Well, this is going to have a monetary reason behind it.</p>\n<p><strong>Susan:</strong> From upfront a voice says: \u201CThis is faster. Trust me.\u201D Why are we stopped in the middle of nowhere, with nothing but advertisement around me?</p>\n<p><strong>Scott:</strong> Is the AI that drives the car like a humanoid? It turns around. \u201CTrust me. It\u2019s faster. (robotic voice)\u201D Yeah.</p>\n<p><strong>Susan:</strong> Oh, well, there\u2019s a privacy bent to this, too. Just think of it.</p>\n<p><strong>Scott:</strong> No more sexual relations in the back of the Uber?</p>\n<p><strong>Susan:</strong> No, it\u2019s creepy if you did, but no. Now, every last inch of your entire life is \u2026 Your position is known. You get in the car, and it knows where you\u2019re at, but more than that, it\u2019s just a big data collection device. It\u2019s built for it. All those LIDARS are constantly going, scanning every single thing around them, all that stuff.</p>\n<p><strong>Scott:</strong> Before, it just knew your position. Now it knows your total surroundings.</p>\n<p><strong>Susan:</strong> The natural outcropping of self-driving car technology is really fantastic image recognition and classification. Not only is it going around recording every last square inch of visual detail, but man, it\u2019s saying, \u201CThat is a flower pot from Ikea.\u201D</p>\n<p><strong>Susan:</strong> $12.99.</p>\n<p><strong>Scott:</strong> You could buy this.</p>\n<p><strong>Susan:</strong> As you\u2019re in the car, you\u2019re sitting here. You\u2019re buying stuff.</p>\n<p><strong>Susan:</strong> As you\u2019re in your car, you\u2019re looking around over there, and a little advertisement pops up. It\u2019s like, \u201CYou can also have this flowerpot for $9.99. Just press here.\u201D It sees your eyes, and there you go. The attention economy.</p>\n<p><strong>Scott:</strong> Well, have you ever seen the show Black Mirror?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976813/blog/what-does-the-ai-dystopia-look-like-ai-show-2/download-1.jpg" alt="mirror"></p>\n<p><em>\u201CFifteen Million Merits\u201D Series 1, episode 2 of Black Mirror.</em></p>\n<p><strong>Susan:</strong> First of all, if you see the first episode\u2026 Go to the second or third episode. The first one will just\u2026</p>\n<p><strong>Scott:</strong> Yeah, don\u2019t watch the first.</p>\n<p><strong>Scott:</strong> Yeah, but the attention economy is discussed there in one of the episodes a little bit, right?</p>\n<p><strong>Susan:</strong> There\u2019s an episode where they\u2019re on bikes, just pedaling aimlessly, just to pay off their credits, and they\u2019re being forced to watch TV advertisements. Oh my. That\u2019s dystopian.</p>\n<p><strong>Scott:</strong> If they start to fall asleep, it\u2019ll jolt them back awake, because AI\u2019s watching them. It knows what they\u2019re looking at, what they\u2019re taking in.</p>\n<p><strong>Susan:</strong> No! Yeah. They\u2019re forced to watch a commercial, and it knows whether they\u2019re paying attention or not.</p>\n<p><strong>Scott:</strong> You can skip the commercial, but you\u2019ll have to pay.</p>\n<p><strong>Susan:</strong> How evil is that? I\u2019ve got my headphones on now, and a commercial comes on, I just go like that, but then the commercial will pause, and you put them back on, and it\u2019s right back there where it was at.</p>\n<p><strong>Scott:</strong> Right back there.</p>\n<p><strong>Susan:</strong> I was like, what? You\u2019re just like, oh, I\u2019m going to get smart and switch channels, and it\u2019s still there-the commercial does not go away!</p>\n<p><strong>Scott:</strong> Yeah, it\u2019s the same one.</p>\n<p><strong>Susan:</strong> Until you listen to that commercial and actually pay attention.</p>\n<p><strong>Scott:</strong> Then you give in. You\u2019re like, okay, my AI overlord.</p>\n<p><strong>Susan:</strong> Oh, whew. That is is tremendous.</p>\n<h2 id="are-they-going-to-take-our-jobs">Are they going to take our jobs?</h2>\n<p><strong>Susan:</strong> If you drive something, you can forget about it. Cars, trucks, planes, which \u2026 Man, get in an aircraft. There\u2019s no cockpit.</p>\n<p><strong>Scott:</strong> This is the easiest job ever, right? Why not have an AI pilot?</p>\n<p><strong>Susan:</strong> Yeah, exactly, and by the way most accidents happen up in front, just saying. Maybe it\u2019ll be a lot safer, not that airlines are less safe right now. The autonomous revolution. I mean, drones are going to start delivering your food.</p>\n<p><strong>Scott:</strong> They could poison you. Or they just selectively, \u201COh, you\u2019re not a Trump supporter? Your food is going to be cold.\u201D</p>\n<h2 id="technology-is-high-tech-mediocrity">Technology is high-tech mediocrity</h2>\n<p><strong>Susan:</strong> I was just thinking the whole drone revolution there, delivery revolution, suddenly you\u2019re starting to get the seconds stuff. You\u2019ve got to pay for Prime to get the fresh eggs, right? These are still technically good, but they\u2019re one day away from expiration. It\u2019s like, magically, all the food that gets delivered to your house, unless you pay the premium, is one day away from expiration.</p>\n<p><strong>Scott:</strong> But it\u2019s been managed very well, like the warehouse is near you. It\u2019s been stocked just for you, because they know.</p>\n<p><strong>Susan:</strong> Oh yeah, yeah. It knows exactly that cutting point, you know? We call this Susan\u2019s Law here.</p>\n<p><strong>Scott:</strong> Susan\u2019s Law.</p>\n<p><strong>Susan:</strong> Susan\u2019s Law: Technology allows you to make something just good enough. The better your technology is, the finer you can cut that line to be just good enough for the customer that they\u2019ll pay for it \u2026 I think we\u2019ve seen this.</p>\n<p><strong>Scott:</strong> Absolutely.</p>\n<p><strong>Susan:</strong> As technology\u2019s gotten more and more capable, we\u2019ve gotten to the \u2026 We\u2019re always on the verge of saying, \u201CThis is so bad! If one more thing happened, I\u2019d get rid of it. If just one more thing \u2026\u201D</p>\n<p><strong>Scott:</strong> Yep, but you won\u2019t. You just keep paying.</p>\n<p><strong>Susan:</strong> You won\u2019t, because It\u2019ll be so perfectly honed to you, that you\u2019ll never be actually happy. You\u2019ll be on the verge of so unhappy that you\u2019ll get rid of it, but you won\u2019t actually get rid of it.</p>\n<p><strong>Scott:</strong> AI will optimize the frustrations. AI knows your dreams, and it\u2019s going to make sure that you never achieve them, but you\u2019re going to be very, very close, always.</p>\n<p><strong>Scott:</strong> Just one more little bit, that\u2019s it. You\u2019re so close.</p>\n<p><strong>Susan:</strong> You will be addicted to things, because of AI, that are ridiculous. It\u2019s like they will have honed the rewards system on whatever to be, well, if you just click this one more time-</p>\n<p><strong>Scott:</strong> Just one more, just one more, what\u2019s the big deal.</p>\n<p><strong>Susan:</strong> Just one more \u2026 Eight hours later, you\u2019re sitting there in a pile of filth, and you\u2019re like, just one more click, and I\u2019ll go to sleep.</p>\n<p><strong>Scott:</strong> Well, that might already happen on YouTube. Doctors and pilots are now unemployable.</p>\n<p><strong>Scott:</strong> Yep, what about doctors?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976814/blog/what-does-the-ai-dystopia-look-like-ai-show-2/hungry-will-work-for_.jpg" alt="doc"></p>\n<p><strong>Susan:</strong> Oh, doctors, geez \u2026 Not to offend any doctors out there.</p>\n<p><strong>Scott:</strong> You\u2019re gone. You\u2019re a goner.</p>\n<p><strong>Susan:</strong> A subjective opinion is probably not a good one.</p>\n<p><strong>Scott:</strong> Are you saying doctors are subjective?</p>\n<p><strong>Susan:</strong> Sometimes, sometimes. They\u2019re professionals. They\u2019re well-trained, but they\u2019re still people.</p>\n<p><strong>Scott:</strong> Yeah, they get tired. They\u2019re trying to get their Medicare bill/Medicaid bill paid.</p>\n<p><strong>Susan:</strong> After you\u2019ve seen the 90th simple cold come in and act like they\u2019re about to die of the plague and ask for all the wrong medicines, and you have to tell them, \u201CIt\u2019s just a cold. Drink some fluids. Get some sleep. Tomorrow, you\u2019ll feel fine.\u201D AI will take over that.</p>\n<p><strong>Scott:</strong> I mean, saying that\u2019s kind of an easy job?</p>\n<p><strong>Susan:</strong> I\u2019ll say this: that we train doctors and pilots for that last little one percent. AI\u2019s going to cut that down to a half a percent, and then a quarter of a percent. Take away that 99, that big huge grunt of stuff that is all normal, right? We understand the things that they go through. Here\u2019s the lifecycle of the flu. Here\u2019s the whatever. Here\u2019s the things to look for. It is this.</p>\n<p><strong>Scott:</strong> Doctors, all your jobs, they\u2019re gone.</p>\n<p><strong>Susan:</strong> Doctors, pilots.</p>\n<p><strong>Scott:</strong> Pilots gone.</p>\n<p><strong>Susan:</strong> Oh, did you see the ticket bot?</p>\n<p><strong>Scott:</strong> Ticket bot?</p>\n<p><strong>Susan:</strong> Trying to get you out of tickets, law programs.</p>\n<p><strong>Scott:</strong> Well, now it\u2019s an arms race, right? To give you tickets and to get you out of tickets. Funding the AI technology boom. The war on tickets. Old laws become asphyxiating.</p>\n<p><strong>Susan:</strong> Another interesting thing is, as technology gets better we\u2019re able to enforce laws that when they were put in place they were never intended to be enforced at that level. Just think about speeding tickets and the like. The idea of speeding and the resources put into catching people and all that were from before we had technology - like cameras and stuff like that. The laws were put in place back then.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976815/blog/what-does-the-ai-dystopia-look-like-ai-show-2/lexus_police_edition_by_eun_su_d4xr1fd-1.jpg" alt="cops"></p>\n<p><em>Photo credit: <a href="https://www.deviantart.com/eun-su/art/Lexus-Police-Edition-298553593">Eun-su</a></em></p>\n<p><strong>Scott:</strong> Yeah, a while ago.</p>\n<p><strong>Susan:</strong> Now, we get better and better and easier and easier enforcement, and we enforce disproportionately to how the laws were initially put in place.</p>\n<p><strong>Susan:</strong> This enforcement allows for new realms of \u2026 I don\u2019t want to say abusing the law, but making it very easy to be in violation of the law and get caught, to the detriment of society, you know?</p>\n<p><strong>Scott:</strong> It might go sour, if you can be caught for everything.</p>\n<p><strong>Susan:</strong> Literally. I mean, you walk out the door and you get in your car, you\u2019ve probably broken four laws..</p>\n<p><strong>Scott:</strong> Maybe the laws will get better defined now. Couldn\u2019t that be a good thing? No, probably not. That\u2019s not going to happen.</p>\n<p><strong>Susan:</strong> An AI-enforced legal system, oh man!</p>\n<p><strong>Scott:</strong> Things might go quicker. No, they\u2019ll just frustrate you to extract more money from you.</p>\n<p><strong>Susan:</strong> Pretty much, yeah.</p>\n<p><strong>Scott:</strong> Isn\u2019t that the Government\u2019s job, roughly, to protect you just enough to extract value out of you?</p>\n<p><strong>Susan:</strong> Just enough? Ooh, I think we\u2019re in a different territory there.</p>\n<p><strong>Scott:</strong> Well, they\u2019re investing a lot in AI.</p>\n<p><strong>Susan:</strong> Maybe I want some AI in my government.</p>\n<h2 id="creatives-join-doctors-and-pilots-in-the-homeless-shelters">Creatives join doctors and pilots in the homeless shelters</h2>\n<p><strong>Scott:</strong> Well, for now, until they get too efficient. Creative jobs, writers, anything like that? What\u2019s that? What\u2019s going to happen to them?</p>\n<p><strong>Susan:</strong> Well, I mean, doesn\u2019t Facebook already have like a snippet writer for articles?</p>\n<p><strong>Scott:</strong> Yeah, rather than a clickbait title, how about a little summary? Here\u2019s two sentences that, hey, if you just knew this one weird trick about swimming pools\u2026</p>\n<p><strong>Susan:</strong> There\u2019s been a lot of research about actually generating well-formed text, well-formed software. We\u2019re seeing code assistance inside of, again, Facebook, trying to write little snippets of where things might be going wrong. We\u2019re seeing \u2026 Coders, look out. Writing copy, actually taking and summarizing articles, these are all areas where AI is making real progress. I mean, let\u2019s be honest here. It\u2019s not there yet, but does that mean six months from now, a year, five years?</p>\n<p><strong>Scott:</strong> Give it a couple years, stir the pot.</p>\n<p><strong>Susan:</strong> Even if it\u2019s \u2026 We\u2019ll give it 10 years away, 10 years away, taking away what we thought was deeply creative work? That is a staggering thought right there, you know?</p>\n<p><strong>Scott:</strong> Yeah.</p>\n<p><strong>Susan:</strong> That\u2019s deeply into interesting job territory there.</p>\n<p><strong>Scott:</strong> You mean, pop music is formulaic?</p>\n<p><strong>Susan:</strong> Oh, geez, of course. Pop music \u2026 Oh man, we\u2019ve got to write a\u2026</p>\n<p><strong>Scott:</strong> A pop music bot?</p>\n<p><strong>Susan:</strong> A pop music bot.</p>\n<p><strong>Scott:</strong> I love it.</p>\n<p><strong>Susan:</strong> Well, we\u2019ve got to give it a cool, cool name, too, like Electon, elector \u2026 I don\u2019t know. Let\u2019s see what. I\u2019m going to make up a word and see how it gets transcribed.</p>\n<p><strong>Scott:</strong> Yeah, there you go.</p>\n<p><strong>Susan:</strong> That\u2019s what it\u2019ll be, Eclector.</p>\n<p><strong>Scott:</strong> DeadElectron.</p>\n<p><strong>Susan:</strong> Yeah, DeadElectron! I like it, DeadElectron.</p>\n<iframe src="https://www.youtube.com/embed/gA03iyI3yEA" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p><em>This company really does make AI music.</em></p>\n<p><strong>Scott:</strong> There we go, yeah. Is anything going to get better? Is my life going to be easy now, because AI dictates my life? Are you going to get the Jetson\u2019s finger cramp from pressing the button?</p>\n<p><strong>Susan:</strong> From pressing the button? It was a long day at work! My finger is so cramped from pushing that button all day long!</p>\n<p><strong>Scott:</strong> Now you can have a to-do list, generated from your friendly AI, telling you what to do.</p>\n<p><strong>Susan:</strong> That\u2019s a cool thing. Tell me another good thing, Scott?</p>\n<p><strong>Scott:</strong> Yeah, do you think that that\u2019s actually a good thing, though?</p>\n<p><strong>Susan:</strong> Of course, it\u2019s going to be shaping the way that you\u2019re going to do your day. I mean, yeah, AI is saying, hey, you had these four tasks, and this fifth one that you don\u2019t quite remember me putting on there for you.</p>\n<p><strong>Scott:</strong> You\u2019re supposed to do this. You\u2019re supposed to walk by this billboard.</p>\n<p><strong>Susan:</strong> I don\u2019t really remember saying I had to do this.</p>\n<p><strong>Scott:</strong> You\u2019re supposed to buy the no-egg mayo, okay?</p>\n<p><strong>Susan:</strong> We\u2019re basically going to be well-trained humans. I mean, really, people want to be lazy, right?</p>\n<p><strong>Scott:</strong> It\u2019s the human condition.</p>\n<p><strong>Susan:</strong> It\u2019s the human condition. If you take that cognitive load off, it\u2019s like, \u201CYours; you can take it.\u201D Then, you just follow along like the herd. As long as it\u2019s not too far away from what you expect, you\u2019re like, ah, whatever. Here\u2019s the list of things I\u2019m supposed to do today to be a functioning adult. Oh, on there is buy such-and-such a brand mayonnaise. Oh, of course, that\u2019s what I wanted, click.</p>\n<h2 id="what-about-ai-dating">What about AI dating?</h2>\n<p><strong>Susan:</strong> What do you think about AI dating? Will your soulmate be picked out?</p>\n<p><strong>Scott:</strong> For you, yeah, so you have my AI talk to your AI. They\u2019ll figure things out.</p>\n<p><strong>Susan:</strong> Ooh, they can go on a pre-date.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976816/blog/what-does-the-ai-dystopia-look-like-ai-show-2/dating-bots.jpg" alt="dating"></p>\n<p><em>The press seem to believe that we will be dating robots, when indeed, it\u2019s the robots who\u2019ll date in our stead-proxy dating.</em></p>\n<p><strong>Scott:</strong> Yeah, a pre-date to figure out if the \u2026 It\u2019s like blind dating, but you blame the AI now, if it doesn\u2019t go well.</p>\n<p><strong>Susan:</strong> In a blink of an eye, will the AIs go through the whole thing, the whole date a couple times?</p>\n<p><strong>Scott:</strong> The whole thing. Yeah, a second later, they decided.</p>\n<p><strong>Susan:</strong> They\u2019ll decide to shack up together. They\u2019ll get married. They\u2019ll have little AI children. They\u2019ll have some messy fights. Then you\u2019ll decide to get divorced, and it\u2019ll all break up, and by the end of it, it comes back to you, and it says, \u201CStay away from this one.\u201D</p>\n<p><strong>Scott:</strong> It happens in the span of a second.</p>\n<p><strong>Susan:</strong> It\u2019s not going to end well.</p>\n<p><strong>Scott:</strong> It\u2019s going to take all the spice out of life.</p>\n<p><strong>Susan:</strong> Yeah, but what if it comes back and says, \u201CThis is the one.\u201D Now, you sit down and you\u2019re like, \u201CMy AI says you\u2019re the one.\u201D The other one says, \u201CYeah, my AI says you\u2019re the one,\u201D so how should we act at that point.</p>\n<p><strong>Scott:</strong> Now you\u2019re entitled, right? You\u2019re stuck with me. We have to be together.</p>\n<p><strong>Susan:</strong> We have to be together. Should I even try?</p>\n<p><strong>Scott:</strong> You just start letting it go right then, right? There\u2019s no salad for dinner. It\u2019s two T-bone steaks and some Indian food afterward.</p>\n<p><strong>Susan:</strong> Your first meal, you\u2019re sitting there, you eat, you belch, you undo the top button. It\u2019s like, it doesn\u2019t matter. You\u2019re my one. You\u2019re not going to leave.</p>\n<p><strong>Scott:</strong> It\u2019s decided.</p>\n<p><strong>Susan:</strong> The AIs have determined what\u2019s going to go on here.</p>\n<p><strong>Susan:</strong> Wait. Let me check how many children we\u2019re supposed to have. Oh, two. AI is your new boss</p>\n<p><strong>Scott:</strong> They\u2019ll be watching you at work, too. It\u2019s like this is some little Santa stuff here.</p>\n<p><strong>Susan:</strong> Do you think they\u2019re going to be watching at work? What are they going to do?</p>\n<p><strong>Scott:</strong> Yeah, performance measurement, man. It\u2019s like the thing that everybody gets advertised to on Instagram now, that\u2019s about slouching. You tape it to your back, and it tells you if you\u2019re leaned over, and it zaps you, right? Now, at work, it\u2019ll be cameras watching you.</p>\n<p><strong>Susan:</strong> Everywhere.</p>\n<blockquote>\n<p>\u201CThey\u2019ll be looking at your email. Have you sent enough emails today? Have you attended enough meetings? Have you spoken enough words to your coworkers? Have you said enough buzzwords?\u201D</p>\n</blockquote>\n<p><strong>Susan:</strong> A performance review will come into your email, completely crafted by some sort of machine learning algorithm.</p>\n<p><strong>Scott:</strong> Every day.</p>\n<p><strong>Susan:</strong> It\u2019ll be brutal. Here are the 10 things you did well, and here\u2019s the 10 things you need to work on, you know?</p>\n<p><strong>Susan:</strong> The 10 up at the top- They\u2019re kind of fluff.</p>\n<p><strong>Scott:</strong> It\u2019s like we have to give you a sandwich.</p>\n<p><strong>Susan:</strong> Yeah, we\u2019ve got to make you think you\u2019re any good but\u2026</p>\n<p><strong>Scott:</strong> A perfectly crafted visual representation of your day to make you react and like, damn, I\u2019ve got to work harder.</p>\n<p><strong>Susan:</strong> Here\u2019s the box you need to be in. If you\u2019re not in this box, you are a problem.</p>\n<p><strong>Susan:</strong> There\u2019s huge promise in that. Don\u2019t get me wrong, but there are dangers of fitting too much to the mean there.</p>\n<h2 id="the-machines-use-us-for-only-one-thing">The machines use us for only one thing</h2>\n<p><strong>Scott:</strong> What\u2019s the value of a human anymore? I mean, this is just going to be The Matrix soon, where we\u2019re just a power source for AI overlords. What\u2019s the deal?</p>\n<p><strong>Susan:</strong> I never quite got the power source of the Matrix anyway.</p>\n<p><strong>Scott:</strong> I don\u2019t know the power source thing either, but some other thing \u2026 I don\u2019t know.</p>\n<p><strong>Susan:</strong> That was weird.</p>\n<p><strong>Scott:</strong> Are we actually going to be more creative?</p>\n<p><strong>Susan:</strong> Oh, is only creativity left?</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976817/blog/what-does-the-ai-dystopia-look-like-ai-show-2/04-11_Robots_repost-unsplash-web.jpg" alt="imagine"></p>\n<p><em>Source: <a href="https://unsplash.com/photos/xdEeLyK4iBo">Jehyun Sung</a></em></p>\n<p><strong>Scott:</strong> Our only job \u2026 Yeah, that\u2019s it, and you take in all the inputs and you\u2019re like, \u201CNo, it should be this way.\u201D</p>\n<p><strong>Susan:</strong> You do that one creative thing a year. That\u2019s it. There\u2019s this exact one moment where you add randomness to the system.</p>\n<p><strong>Scott:</strong> Exactly.</p>\n<p><strong>Susan:</strong> You do some irrational thing.</p>\n<p><strong>Scott:</strong> \u201CNo, it shouldn\u2019t be this way!\u201D</p>\n<p><strong>Susan:</strong> Suddenly, you get $100,000 because that was your job. That one creative thing.</p>\n<p><strong>Scott:</strong> We needed that. We needed that random thought there. Yeah, everything \u2026 We\u2019re too logical.</p>\n<p><strong>Susan:</strong> Thanks, you\u2019re our random number generator.</p>\n<p><strong>Scott:</strong> Yeah. What \u2026 We already know the answer.</p>\n<p><strong>Scott:</strong> Random number generator.</p>\n<p><strong>Susan:</strong> They don\u2019t need us for power. They need us for random number generation.</p>\n<p><strong>Scott:</strong> We figured it out, yeah, yeah. Well, this is the value of children, right?</p>\n<p><strong>Susan:</strong> Talk about randomness. You never thought the things that could happen would happen. Yeah, 2:00 in the morning, what is that sound? Why is there paint everywhere? Please, please, I told you, not the cat! I\u2019m sorry, is that what we were talking about, Scott?</p>\n<p><strong>Scott:</strong> We\u2019ll just all be children in the AI world now. You know, just banging pots and pans together.</p>\n<p><strong>Susan:</strong> I\u2019m looking forward to that.</p>\n<p><strong>Scott:</strong> Yeah, it sounds like a pretty sweet existence, right?</p>\n<p><strong>Susan:</strong> Nap time, you know?</p>\n<p><strong>Scott:</strong> With milk, warm milk, and you have your blanket.</p>\n<p><strong>Susan:</strong> It\u2019s going to be awesome. Yeah, the lights slowly go down.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976818/blog/what-does-the-ai-dystopia-look-like-ai-show-2/napercise.jpg" alt="nap"></p>\n<p><em><a href="https://www.forbes.com/sites/brucelee/2017/04/29/napercise-why-nap-for-free-when-you-can-pay-for-it/#68e889164be4">\u201CNapercise\u201D</a>, as David Lloyd Clubs in London calls it, is not far off. Soon all humans will do is be randomly creative and drink juice from sippy cups.</em></p>\n<p><strong>Scott:</strong> Is this something you did at school back in the day? This is something that they do at school now in California, at least. You have your own blanket. You get your milk. You take a nap.</p>\n<p><strong>Susan:</strong> I love it.</p>\n<p><strong>Scott:</strong> You\u2019re like 10.</p>\n<p><strong>Susan:</strong> Whoa, 10?</p>\n<p><strong>Scott:</strong> I mean, 9, 8-</p>\n<p><strong>Susan:</strong> Great. I remember doing it from kindergarten.</p>\n<p><strong>Scott:</strong> Yeah, I know. I remember it way back. Did you have your special mat?</p>\n<p><strong>Susan:</strong> The most valuable skills from kindergarten \u2026 We completely forget those. Everybody should have nap time.</p>\n<p><strong>Scott:</strong> Well, because we get trained to be more like robots, but now the robots are finally going to take over the rightful owner of those tasks, and now we just get to be children all the time.</p>\n<h2 id="your-insurance-premiums-go-up">Your insurance premiums go up</h2>\n<p><strong>Susan:</strong> They\u2019re going to tell you when you\u2019re not doing the optimal thing each day, right? This is when you should be napping. Oh, man, oh, you didn\u2019t nap. For that day, your insurance premium went up by a dollar. You are not living the optimally healthy life.</p>\n<p><strong>Scott:</strong> Yeah, for randomness. They need you to be healthy for the randomness.</p>\n<p><strong>Susan:</strong> Yeah, but I\u2019m just saying that AIs are going to come in and judge every second of your life, and you\u2019re going to be charged more based off of you not living the right way. That beer you wanted? It didn\u2019t just cost a couple bucks. It also got reported back to your insurance company.</p>\n<p><strong>Scott:</strong> Well, maybe human lifespan doesn\u2019t need to be as long, now, because we lose our mojo by the time we\u2019re 30, 20, 15, you know?</p>\n<p><strong>Scott:</strong> It\u2019s like, eh, screw you, after a while.</p>\n<p><strong>Susan:</strong> Ooh, it could be like Logan\u2019s Run. At 25, you\u2019re dead-only they trick us. They say, \u201CYour brain is being uploaded into the cloud. In reality, no.</p>\n<p><strong>Scott:</strong> Bye, everybody. I can\u2019t wait to see all my ancestors.</p>\n<p><strong>Susan:</strong> Yeah, some quick little chatbot has put up that fake that says it\u2019s you for about a day, until everybody forgets that you exist.</p>\n<p><strong>Scott:</strong> That\u2019s true. Let\u2019s say, a week, right? Yeah.</p>\n<p><strong>Susan:</strong> A week, for a week your loved ones are typing to you.</p>\n<p><strong>Scott:</strong> \u201COh, look at you. Hey \u2026\u201D</p>\n<p><strong>Susan:</strong> \u201COh, it\u2019s so great in the cloud.\u201D They say, \u201CYes, you will love it here.\u201D A week later, \u201CGot to go now. There\u2019s so many exciting things. I can\u2019t pay attention to chat anymore.\u201D</p>\n<p><strong>Scott:</strong> Yeah, \u201CI can\u2019t wait to see you.\u201D</p>\n<p><strong>Susan:</strong> Then erase that from the system.</p>\n<p><strong>Scott:</strong> Then they ghost you, yeah. All right, well, we have some worst case scenario. Maybe in the future, we\u2019ll have some best case scenario. I mean, the best?</p>\n<p><strong>Susan:</strong> Yeah.</p>\n<p><strong>Scott:</strong> At least something.</p>\n<p><strong>Susan:</strong> Do you think <a href="https://youtu.be/pE5-K7gg0kE">AI could actually be good for the world?</a></p>\n<p><strong>Scott:</strong> Nah, I don\u2019t think so.</p>\n<p><strong>Susan:</strong> You know what? I have a sneaking suspicion that for everything we said was bad, there might be a couple good things.</p>\n<p><strong>Scott:</strong> Are there some good things?</p>\n<p><strong>Susan:</strong> There just might be.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-does-the-ai-dystopia-look-like-ai-show-2/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/570095520&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" width="100%" height="166" frameborder="no" scrolling="no"></iframe>
<p><strong>Scott:</strong> Welcome to the AI Show. Today, we’re asking the question: What does the AI dystopia look like?</p>
<p><strong>Susan:</strong> Oh, man, we are going down the tubes. It’s going to be terrible.</p>
<p><strong>Scott:</strong> Let’s take it to negative town. The world is over.</p>
<p><strong>Susan:</strong> The world, as we knew it, ends basically every year and a half as the next revolution hits, but this is the last one.</p>
<p><strong>Scott:</strong> There’s a law against that, isn’t there?</p>
<p><strong>Susan:</strong> There is?</p>
<p><strong>Scott:</strong> Everything has a life expectancy about twice what its current age is, but until it abruptly dies.</p>
<p><strong>Susan:</strong> Oh, yeah, that’s cool. I’ve got to look that one up.</p>
<p><strong>Scott:</strong> Yeah, so the abrupt death is coming. Everything looks like we’re going to live twice as long.</p>
<p><strong>Susan:</strong> Well, exactly. Well, everybody keeps saying, “Hey, the pendulum’s going to swing back, and technology is going to help us more than hurt.”</p>
<p><strong>Scott:</strong> Hey, we’re still alive, right?</p>
<p><strong>Susan:</strong> That’s all true up until the very last time. Then, that last time, people are like, “Well, I guess it didn’t swing back that time.”</p>
<p><strong>Susan:</strong> Man, there’s a lot to be pessimistic about.</p>
<h2 id="whats-the-first-thing-thats-going-to-go">What’s the first thing that’s going to go?</h2>
<p><strong>Susan:</strong> Oh, the first thing is privacy.</p>
<p><strong>Scott:</strong> Privacy’s number one?</p>
<p><strong>Susan:</strong> Everybody knows that their privacy is not nearly what it may have been in the past.</p>
<p><strong>Scott:</strong> What is privacy anyway?</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976812/blog/what-does-the-ai-dystopia-look-like-ai-show-2/1984_by_iskallvinter_d15owbe.jpg" alt="bigbro"></p>
<p><em>Photo credit <a href="https://www.deviantart.com/iskallvinter/art/1984-70025882">iskallvinter</a></em></p>
<p><strong>Susan:</strong> Now, we’re going to take the loss of privacy to the next level. Not only will they have your data, but they’ll have the computing power and the algorithms to actually do something with it.</p>
<p><strong>Scott:</strong> This isn’t like drones looking in your bedroom window.</p>
<p><strong>Susan:</strong> Who cares how many data points you have, if you can’t actually make sense of them? But you know, we can actually listen to every single phone call and record it. But, if you can’t actually do anything with all that audio, who cares?</p>
<p><strong>Susan:</strong> Now we can take all the surveillance cameras, and we can analyze video.</p>
<p><strong>Susan:</strong> We can put together your entire human history by taking pictures from 4000 different things.</p>
<p><strong>Scott:</strong> Your browser history.</p>
<p><strong>Susan:</strong> The smarts are finally there to analyze multiple terabytes of data and come up with you.</p>
<p><strong>Scott:</strong> Does Google become a state-owned company?</p>
<p><strong>Susan:</strong> Well, no, Google owns the state.</p>
<p><strong>Scott:</strong> They become the state. Google’s the state.</p>
<p><strong>Susan:</strong> The United States of Google?</p>
<p><strong>Scott:</strong> The United States of Google!</p>
<p><strong>Susan:</strong> How about you, Scott? Where do you think the dystopian future of AI goes?</p>
<p><strong>Scott:</strong> Well, I think we should bring this to self-driving cars. Every inch of your life is known.</p>
<p><strong>Susan:</strong> Is this the trolley problem?</p>
<p><strong>Scott:</strong> You’re going to start driving around, or you’re not driving around anymore. You’ve got mainly machines that drive for you.</p>
<p><strong>Susan:</strong> Of course.</p>
<p><strong>Scott:</strong> But now, what are they going to do? They’re going to drive you around and take you by the billboard that’s also AI powered.</p>
<p><strong>Susan:</strong> I love it! It’s like why are we taking this route? Oh, what’s that billboard there?</p>
<p><strong>Scott:</strong> Everybody always has the Uber driver experience. “Why are we going this way?” Well, this is going to have a monetary reason behind it.</p>
<p><strong>Susan:</strong> From upfront a voice says: “This is faster. Trust me.” Why are we stopped in the middle of nowhere, with nothing but advertisement around me?</p>
<p><strong>Scott:</strong> Is the AI that drives the car like a humanoid? It turns around. “Trust me. It’s faster. (robotic voice)” Yeah.</p>
<p><strong>Susan:</strong> Oh, well, there’s a privacy bent to this, too. Just think of it.</p>
<p><strong>Scott:</strong> No more sexual relations in the back of the Uber?</p>
<p><strong>Susan:</strong> No, it’s creepy if you did, but no. Now, every last inch of your entire life is … Your position is known. You get in the car, and it knows where you’re at, but more than that, it’s just a big data collection device. It’s built for it. All those LIDARS are constantly going, scanning every single thing around them, all that stuff.</p>
<p><strong>Scott:</strong> Before, it just knew your position. Now it knows your total surroundings.</p>
<p><strong>Susan:</strong> The natural outcropping of self-driving car technology is really fantastic image recognition and classification. Not only is it going around recording every last square inch of visual detail, but man, it’s saying, “That is a flower pot from Ikea.”</p>
<p><strong>Susan:</strong> $12.99.</p>
<p><strong>Scott:</strong> You could buy this.</p>
<p><strong>Susan:</strong> As you’re in the car, you’re sitting here. You’re buying stuff.</p>
<p><strong>Susan:</strong> As you’re in your car, you’re looking around over there, and a little advertisement pops up. It’s like, “You can also have this flowerpot for $9.99. Just press here.” It sees your eyes, and there you go. The attention economy.</p>
<p><strong>Scott:</strong> Well, have you ever seen the show Black Mirror?</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976813/blog/what-does-the-ai-dystopia-look-like-ai-show-2/download-1.jpg" alt="mirror"></p>
<p><em>“Fifteen Million Merits” Series 1, episode 2 of Black Mirror.</em></p>
<p><strong>Susan:</strong> First of all, if you see the first episode… Go to the second or third episode. The first one will just…</p>
<p><strong>Scott:</strong> Yeah, don’t watch the first.</p>
<p><strong>Scott:</strong> Yeah, but the attention economy is discussed there in one of the episodes a little bit, right?</p>
<p><strong>Susan:</strong> There’s an episode where they’re on bikes, just pedaling aimlessly, just to pay off their credits, and they’re being forced to watch TV advertisements. Oh my. That’s dystopian.</p>
<p><strong>Scott:</strong> If they start to fall asleep, it’ll jolt them back awake, because AI’s watching them. It knows what they’re looking at, what they’re taking in.</p>
<p><strong>Susan:</strong> No! Yeah. They’re forced to watch a commercial, and it knows whether they’re paying attention or not.</p>
<p><strong>Scott:</strong> You can skip the commercial, but you’ll have to pay.</p>
<p><strong>Susan:</strong> How evil is that? I’ve got my headphones on now, and a commercial comes on, I just go like that, but then the commercial will pause, and you put them back on, and it’s right back there where it was at.</p>
<p><strong>Scott:</strong> Right back there.</p>
<p><strong>Susan:</strong> I was like, what? You’re just like, oh, I’m going to get smart and switch channels, and it’s still there-the commercial does not go away!</p>
<p><strong>Scott:</strong> Yeah, it’s the same one.</p>
<p><strong>Susan:</strong> Until you listen to that commercial and actually pay attention.</p>
<p><strong>Scott:</strong> Then you give in. You’re like, okay, my AI overlord.</p>
<p><strong>Susan:</strong> Oh, whew. That is is tremendous.</p>
<h2 id="are-they-going-to-take-our-jobs">Are they going to take our jobs?</h2>
<p><strong>Susan:</strong> If you drive something, you can forget about it. Cars, trucks, planes, which … Man, get in an aircraft. There’s no cockpit.</p>
<p><strong>Scott:</strong> This is the easiest job ever, right? Why not have an AI pilot?</p>
<p><strong>Susan:</strong> Yeah, exactly, and by the way most accidents happen up in front, just saying. Maybe it’ll be a lot safer, not that airlines are less safe right now. The autonomous revolution. I mean, drones are going to start delivering your food.</p>
<p><strong>Scott:</strong> They could poison you. Or they just selectively, “Oh, you’re not a Trump supporter? Your food is going to be cold.”</p>
<h2 id="technology-is-high-tech-mediocrity">Technology is high-tech mediocrity</h2>
<p><strong>Susan:</strong> I was just thinking the whole drone revolution there, delivery revolution, suddenly you’re starting to get the seconds stuff. You’ve got to pay for Prime to get the fresh eggs, right? These are still technically good, but they’re one day away from expiration. It’s like, magically, all the food that gets delivered to your house, unless you pay the premium, is one day away from expiration.</p>
<p><strong>Scott:</strong> But it’s been managed very well, like the warehouse is near you. It’s been stocked just for you, because they know.</p>
<p><strong>Susan:</strong> Oh yeah, yeah. It knows exactly that cutting point, you know? We call this Susan’s Law here.</p>
<p><strong>Scott:</strong> Susan’s Law.</p>
<p><strong>Susan:</strong> Susan’s Law: Technology allows you to make something just good enough. The better your technology is, the finer you can cut that line to be just good enough for the customer that they’ll pay for it … I think we’ve seen this.</p>
<p><strong>Scott:</strong> Absolutely.</p>
<p><strong>Susan:</strong> As technology’s gotten more and more capable, we’ve gotten to the … We’re always on the verge of saying, “This is so bad! If one more thing happened, I’d get rid of it. If just one more thing …”</p>
<p><strong>Scott:</strong> Yep, but you won’t. You just keep paying.</p>
<p><strong>Susan:</strong> You won’t, because It’ll be so perfectly honed to you, that you’ll never be actually happy. You’ll be on the verge of so unhappy that you’ll get rid of it, but you won’t actually get rid of it.</p>
<p><strong>Scott:</strong> AI will optimize the frustrations. AI knows your dreams, and it’s going to make sure that you never achieve them, but you’re going to be very, very close, always.</p>
<p><strong>Scott:</strong> Just one more little bit, that’s it. You’re so close.</p>
<p><strong>Susan:</strong> You will be addicted to things, because of AI, that are ridiculous. It’s like they will have honed the rewards system on whatever to be, well, if you just click this one more time-</p>
<p><strong>Scott:</strong> Just one more, just one more, what’s the big deal.</p>
<p><strong>Susan:</strong> Just one more … Eight hours later, you’re sitting there in a pile of filth, and you’re like, just one more click, and I’ll go to sleep.</p>
<p><strong>Scott:</strong> Well, that might already happen on YouTube. Doctors and pilots are now unemployable.</p>
<p><strong>Scott:</strong> Yep, what about doctors?</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976814/blog/what-does-the-ai-dystopia-look-like-ai-show-2/hungry-will-work-for_.jpg" alt="doc"></p>
<p><strong>Susan:</strong> Oh, doctors, geez … Not to offend any doctors out there.</p>
<p><strong>Scott:</strong> You’re gone. You’re a goner.</p>
<p><strong>Susan:</strong> A subjective opinion is probably not a good one.</p>
<p><strong>Scott:</strong> Are you saying doctors are subjective?</p>
<p><strong>Susan:</strong> Sometimes, sometimes. They’re professionals. They’re well-trained, but they’re still people.</p>
<p><strong>Scott:</strong> Yeah, they get tired. They’re trying to get their Medicare bill/Medicaid bill paid.</p>
<p><strong>Susan:</strong> After you’ve seen the 90th simple cold come in and act like they’re about to die of the plague and ask for all the wrong medicines, and you have to tell them, “It’s just a cold. Drink some fluids. Get some sleep. Tomorrow, you’ll feel fine.” AI will take over that.</p>
<p><strong>Scott:</strong> I mean, saying that’s kind of an easy job?</p>
<p><strong>Susan:</strong> I’ll say this: that we train doctors and pilots for that last little one percent. AI’s going to cut that down to a half a percent, and then a quarter of a percent. Take away that 99, that big huge grunt of stuff that is all normal, right? We understand the things that they go through. Here’s the lifecycle of the flu. Here’s the whatever. Here’s the things to look for. It is this.</p>
<p><strong>Scott:</strong> Doctors, all your jobs, they’re gone.</p>
<p><strong>Susan:</strong> Doctors, pilots.</p>
<p><strong>Scott:</strong> Pilots gone.</p>
<p><strong>Susan:</strong> Oh, did you see the ticket bot?</p>
<p><strong>Scott:</strong> Ticket bot?</p>
<p><strong>Susan:</strong> Trying to get you out of tickets, law programs.</p>
<p><strong>Scott:</strong> Well, now it’s an arms race, right? To give you tickets and to get you out of tickets. Funding the AI technology boom. The war on tickets. Old laws become asphyxiating.</p>
<p><strong>Susan:</strong> Another interesting thing is, as technology gets better we’re able to enforce laws that when they were put in place they were never intended to be enforced at that level. Just think about speeding tickets and the like. The idea of speeding and the resources put into catching people and all that were from before we had technology - like cameras and stuff like that. The laws were put in place back then.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976815/blog/what-does-the-ai-dystopia-look-like-ai-show-2/lexus_police_edition_by_eun_su_d4xr1fd-1.jpg" alt="cops"></p>
<p><em>Photo credit: <a href="https://www.deviantart.com/eun-su/art/Lexus-Police-Edition-298553593">Eun-su</a></em></p>
<p><strong>Scott:</strong> Yeah, a while ago.</p>
<p><strong>Susan:</strong> Now, we get better and better and easier and easier enforcement, and we enforce disproportionately to how the laws were initially put in place.</p>
<p><strong>Susan:</strong> This enforcement allows for new realms of … I don’t want to say abusing the law, but making it very easy to be in violation of the law and get caught, to the detriment of society, you know?</p>
<p><strong>Scott:</strong> It might go sour, if you can be caught for everything.</p>
<p><strong>Susan:</strong> Literally. I mean, you walk out the door and you get in your car, you’ve probably broken four laws..</p>
<p><strong>Scott:</strong> Maybe the laws will get better defined now. Couldn’t that be a good thing? No, probably not. That’s not going to happen.</p>
<p><strong>Susan:</strong> An AI-enforced legal system, oh man!</p>
<p><strong>Scott:</strong> Things might go quicker. No, they’ll just frustrate you to extract more money from you.</p>
<p><strong>Susan:</strong> Pretty much, yeah.</p>
<p><strong>Scott:</strong> Isn’t that the Government’s job, roughly, to protect you just enough to extract value out of you?</p>
<p><strong>Susan:</strong> Just enough? Ooh, I think we’re in a different territory there.</p>
<p><strong>Scott:</strong> Well, they’re investing a lot in AI.</p>
<p><strong>Susan:</strong> Maybe I want some AI in my government.</p>
<h2 id="creatives-join-doctors-and-pilots-in-the-homeless-shelters">Creatives join doctors and pilots in the homeless shelters</h2>
<p><strong>Scott:</strong> Well, for now, until they get too efficient. Creative jobs, writers, anything like that? What’s that? What’s going to happen to them?</p>
<p><strong>Susan:</strong> Well, I mean, doesn’t Facebook already have like a snippet writer for articles?</p>
<p><strong>Scott:</strong> Yeah, rather than a clickbait title, how about a little summary? Here’s two sentences that, hey, if you just knew this one weird trick about swimming pools…</p>
<p><strong>Susan:</strong> There’s been a lot of research about actually generating well-formed text, well-formed software. We’re seeing code assistance inside of, again, Facebook, trying to write little snippets of where things might be going wrong. We’re seeing … Coders, look out. Writing copy, actually taking and summarizing articles, these are all areas where AI is making real progress. I mean, let’s be honest here. It’s not there yet, but does that mean six months from now, a year, five years?</p>
<p><strong>Scott:</strong> Give it a couple years, stir the pot.</p>
<p><strong>Susan:</strong> Even if it’s … We’ll give it 10 years away, 10 years away, taking away what we thought was deeply creative work? That is a staggering thought right there, you know?</p>
<p><strong>Scott:</strong> Yeah.</p>
<p><strong>Susan:</strong> That’s deeply into interesting job territory there.</p>
<p><strong>Scott:</strong> You mean, pop music is formulaic?</p>
<p><strong>Susan:</strong> Oh, geez, of course. Pop music … Oh man, we’ve got to write a…</p>
<p><strong>Scott:</strong> A pop music bot?</p>
<p><strong>Susan:</strong> A pop music bot.</p>
<p><strong>Scott:</strong> I love it.</p>
<p><strong>Susan:</strong> Well, we’ve got to give it a cool, cool name, too, like Electon, elector … I don’t know. Let’s see what. I’m going to make up a word and see how it gets transcribed.</p>
<p><strong>Scott:</strong> Yeah, there you go.</p>
<p><strong>Susan:</strong> That’s what it’ll be, Eclector.</p>
<p><strong>Scott:</strong> DeadElectron.</p>
<p><strong>Susan:</strong> Yeah, DeadElectron! I like it, DeadElectron.</p>
<iframe src="https://www.youtube.com/embed/gA03iyI3yEA" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<p><em>This company really does make AI music.</em></p>
<p><strong>Scott:</strong> There we go, yeah. Is anything going to get better? Is my life going to be easy now, because AI dictates my life? Are you going to get the Jetson’s finger cramp from pressing the button?</p>
<p><strong>Susan:</strong> From pressing the button? It was a long day at work! My finger is so cramped from pushing that button all day long!</p>
<p><strong>Scott:</strong> Now you can have a to-do list, generated from your friendly AI, telling you what to do.</p>
<p><strong>Susan:</strong> That’s a cool thing. Tell me another good thing, Scott?</p>
<p><strong>Scott:</strong> Yeah, do you think that that’s actually a good thing, though?</p>
<p><strong>Susan:</strong> Of course, it’s going to be shaping the way that you’re going to do your day. I mean, yeah, AI is saying, hey, you had these four tasks, and this fifth one that you don’t quite remember me putting on there for you.</p>
<p><strong>Scott:</strong> You’re supposed to do this. You’re supposed to walk by this billboard.</p>
<p><strong>Susan:</strong> I don’t really remember saying I had to do this.</p>
<p><strong>Scott:</strong> You’re supposed to buy the no-egg mayo, okay?</p>
<p><strong>Susan:</strong> We’re basically going to be well-trained humans. I mean, really, people want to be lazy, right?</p>
<p><strong>Scott:</strong> It’s the human condition.</p>
<p><strong>Susan:</strong> It’s the human condition. If you take that cognitive load off, it’s like, “Yours; you can take it.” Then, you just follow along like the herd. As long as it’s not too far away from what you expect, you’re like, ah, whatever. Here’s the list of things I’m supposed to do today to be a functioning adult. Oh, on there is buy such-and-such a brand mayonnaise. Oh, of course, that’s what I wanted, click.</p>
<h2 id="what-about-ai-dating">What about AI dating?</h2>
<p><strong>Susan:</strong> What do you think about AI dating? Will your soulmate be picked out?</p>
<p><strong>Scott:</strong> For you, yeah, so you have my AI talk to your AI. They’ll figure things out.</p>
<p><strong>Susan:</strong> Ooh, they can go on a pre-date.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976816/blog/what-does-the-ai-dystopia-look-like-ai-show-2/dating-bots.jpg" alt="dating"></p>
<p><em>The press seem to believe that we will be dating robots, when indeed, it’s the robots who’ll date in our stead-proxy dating.</em></p>
<p><strong>Scott:</strong> Yeah, a pre-date to figure out if the … It’s like blind dating, but you blame the AI now, if it doesn’t go well.</p>
<p><strong>Susan:</strong> In a blink of an eye, will the AIs go through the whole thing, the whole date a couple times?</p>
<p><strong>Scott:</strong> The whole thing. Yeah, a second later, they decided.</p>
<p><strong>Susan:</strong> They’ll decide to shack up together. They’ll get married. They’ll have little AI children. They’ll have some messy fights. Then you’ll decide to get divorced, and it’ll all break up, and by the end of it, it comes back to you, and it says, “Stay away from this one.”</p>
<p><strong>Scott:</strong> It happens in the span of a second.</p>
<p><strong>Susan:</strong> It’s not going to end well.</p>
<p><strong>Scott:</strong> It’s going to take all the spice out of life.</p>
<p><strong>Susan:</strong> Yeah, but what if it comes back and says, “This is the one.” Now, you sit down and you’re like, “My AI says you’re the one.” The other one says, “Yeah, my AI says you’re the one,” so how should we act at that point.</p>
<p><strong>Scott:</strong> Now you’re entitled, right? You’re stuck with me. We have to be together.</p>
<p><strong>Susan:</strong> We have to be together. Should I even try?</p>
<p><strong>Scott:</strong> You just start letting it go right then, right? There’s no salad for dinner. It’s two T-bone steaks and some Indian food afterward.</p>
<p><strong>Susan:</strong> Your first meal, you’re sitting there, you eat, you belch, you undo the top button. It’s like, it doesn’t matter. You’re my one. You’re not going to leave.</p>
<p><strong>Scott:</strong> It’s decided.</p>
<p><strong>Susan:</strong> The AIs have determined what’s going to go on here.</p>
<p><strong>Susan:</strong> Wait. Let me check how many children we’re supposed to have. Oh, two. AI is your new boss</p>
<p><strong>Scott:</strong> They’ll be watching you at work, too. It’s like this is some little Santa stuff here.</p>
<p><strong>Susan:</strong> Do you think they’re going to be watching at work? What are they going to do?</p>
<p><strong>Scott:</strong> Yeah, performance measurement, man. It’s like the thing that everybody gets advertised to on Instagram now, that’s about slouching. You tape it to your back, and it tells you if you’re leaned over, and it zaps you, right? Now, at work, it’ll be cameras watching you.</p>
<p><strong>Susan:</strong> Everywhere.</p>
<blockquote>
<p>“They’ll be looking at your email. Have you sent enough emails today? Have you attended enough meetings? Have you spoken enough words to your coworkers? Have you said enough buzzwords?”</p>
</blockquote>
<p><strong>Susan:</strong> A performance review will come into your email, completely crafted by some sort of machine learning algorithm.</p>
<p><strong>Scott:</strong> Every day.</p>
<p><strong>Susan:</strong> It’ll be brutal. Here are the 10 things you did well, and here’s the 10 things you need to work on, you know?</p>
<p><strong>Susan:</strong> The 10 up at the top- They’re kind of fluff.</p>
<p><strong>Scott:</strong> It’s like we have to give you a sandwich.</p>
<p><strong>Susan:</strong> Yeah, we’ve got to make you think you’re any good but…</p>
<p><strong>Scott:</strong> A perfectly crafted visual representation of your day to make you react and like, damn, I’ve got to work harder.</p>
<p><strong>Susan:</strong> Here’s the box you need to be in. If you’re not in this box, you are a problem.</p>
<p><strong>Susan:</strong> There’s huge promise in that. Don’t get me wrong, but there are dangers of fitting too much to the mean there.</p>
<h2 id="the-machines-use-us-for-only-one-thing">The machines use us for only one thing</h2>
<p><strong>Scott:</strong> What’s the value of a human anymore? I mean, this is just going to be The Matrix soon, where we’re just a power source for AI overlords. What’s the deal?</p>
<p><strong>Susan:</strong> I never quite got the power source of the Matrix anyway.</p>
<p><strong>Scott:</strong> I don’t know the power source thing either, but some other thing … I don’t know.</p>
<p><strong>Susan:</strong> That was weird.</p>
<p><strong>Scott:</strong> Are we actually going to be more creative?</p>
<p><strong>Susan:</strong> Oh, is only creativity left?</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976817/blog/what-does-the-ai-dystopia-look-like-ai-show-2/04-11_Robots_repost-unsplash-web.jpg" alt="imagine"></p>
<p><em>Source: <a href="https://unsplash.com/photos/xdEeLyK4iBo">Jehyun Sung</a></em></p>
<p><strong>Scott:</strong> Our only job … Yeah, that’s it, and you take in all the inputs and you’re like, “No, it should be this way.”</p>
<p><strong>Susan:</strong> You do that one creative thing a year. That’s it. There’s this exact one moment where you add randomness to the system.</p>
<p><strong>Scott:</strong> Exactly.</p>
<p><strong>Susan:</strong> You do some irrational thing.</p>
<p><strong>Scott:</strong> “No, it shouldn’t be this way!”</p>
<p><strong>Susan:</strong> Suddenly, you get $100,000 because that was your job. That one creative thing.</p>
<p><strong>Scott:</strong> We needed that. We needed that random thought there. Yeah, everything … We’re too logical.</p>
<p><strong>Susan:</strong> Thanks, you’re our random number generator.</p>
<p><strong>Scott:</strong> Yeah. What … We already know the answer.</p>
<p><strong>Scott:</strong> Random number generator.</p>
<p><strong>Susan:</strong> They don’t need us for power. They need us for random number generation.</p>
<p><strong>Scott:</strong> We figured it out, yeah, yeah. Well, this is the value of children, right?</p>
<p><strong>Susan:</strong> Talk about randomness. You never thought the things that could happen would happen. Yeah, 2:00 in the morning, what is that sound? Why is there paint everywhere? Please, please, I told you, not the cat! I’m sorry, is that what we were talking about, Scott?</p>
<p><strong>Scott:</strong> We’ll just all be children in the AI world now. You know, just banging pots and pans together.</p>
<p><strong>Susan:</strong> I’m looking forward to that.</p>
<p><strong>Scott:</strong> Yeah, it sounds like a pretty sweet existence, right?</p>
<p><strong>Susan:</strong> Nap time, you know?</p>
<p><strong>Scott:</strong> With milk, warm milk, and you have your blanket.</p>
<p><strong>Susan:</strong> It’s going to be awesome. Yeah, the lights slowly go down.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976818/blog/what-does-the-ai-dystopia-look-like-ai-show-2/napercise.jpg" alt="nap"></p>
<p><em><a href="https://www.forbes.com/sites/brucelee/2017/04/29/napercise-why-nap-for-free-when-you-can-pay-for-it/#68e889164be4">“Napercise”</a>, as David Lloyd Clubs in London calls it, is not far off. Soon all humans will do is be randomly creative and drink juice from sippy cups.</em></p>
<p><strong>Scott:</strong> Is this something you did at school back in the day? This is something that they do at school now in California, at least. You have your own blanket. You get your milk. You take a nap.</p>
<p><strong>Susan:</strong> I love it.</p>
<p><strong>Scott:</strong> You’re like 10.</p>
<p><strong>Susan:</strong> Whoa, 10?</p>
<p><strong>Scott:</strong> I mean, 9, 8-</p>
<p><strong>Susan:</strong> Great. I remember doing it from kindergarten.</p>
<p><strong>Scott:</strong> Yeah, I know. I remember it way back. Did you have your special mat?</p>
<p><strong>Susan:</strong> The most valuable skills from kindergarten … We completely forget those. Everybody should have nap time.</p>
<p><strong>Scott:</strong> Well, because we get trained to be more like robots, but now the robots are finally going to take over the rightful owner of those tasks, and now we just get to be children all the time.</p>
<h2 id="your-insurance-premiums-go-up">Your insurance premiums go up</h2>
<p><strong>Susan:</strong> They’re going to tell you when you’re not doing the optimal thing each day, right? This is when you should be napping. Oh, man, oh, you didn’t nap. For that day, your insurance premium went up by a dollar. You are not living the optimally healthy life.</p>
<p><strong>Scott:</strong> Yeah, for randomness. They need you to be healthy for the randomness.</p>
<p><strong>Susan:</strong> Yeah, but I’m just saying that AIs are going to come in and judge every second of your life, and you’re going to be charged more based off of you not living the right way. That beer you wanted? It didn’t just cost a couple bucks. It also got reported back to your insurance company.</p>
<p><strong>Scott:</strong> Well, maybe human lifespan doesn’t need to be as long, now, because we lose our mojo by the time we’re 30, 20, 15, you know?</p>
<p><strong>Scott:</strong> It’s like, eh, screw you, after a while.</p>
<p><strong>Susan:</strong> Ooh, it could be like Logan’s Run. At 25, you’re dead-only they trick us. They say, “Your brain is being uploaded into the cloud. In reality, no.</p>
<p><strong>Scott:</strong> Bye, everybody. I can’t wait to see all my ancestors.</p>
<p><strong>Susan:</strong> Yeah, some quick little chatbot has put up that fake that says it’s you for about a day, until everybody forgets that you exist.</p>
<p><strong>Scott:</strong> That’s true. Let’s say, a week, right? Yeah.</p>
<p><strong>Susan:</strong> A week, for a week your loved ones are typing to you.</p>
<p><strong>Scott:</strong> “Oh, look at you. Hey …”</p>
<p><strong>Susan:</strong> “Oh, it’s so great in the cloud.” They say, “Yes, you will love it here.” A week later, “Got to go now. There’s so many exciting things. I can’t pay attention to chat anymore.”</p>
<p><strong>Scott:</strong> Yeah, “I can’t wait to see you.”</p>
<p><strong>Susan:</strong> Then erase that from the system.</p>
<p><strong>Scott:</strong> Then they ghost you, yeah. All right, well, we have some worst case scenario. Maybe in the future, we’ll have some best case scenario. I mean, the best?</p>
<p><strong>Susan:</strong> Yeah.</p>
<p><strong>Scott:</strong> At least something.</p>
<p><strong>Susan:</strong> Do you think <a href="https://youtu.be/pE5-K7gg0kE">AI could actually be good for the world?</a></p>
<p><strong>Scott:</strong> Nah, I don’t think so.</p>
<p><strong>Susan:</strong> You know what? I have a sneaking suspicion that for everything we said was bad, there might be a couple good things.</p>
<p><strong>Scott:</strong> Are there some good things?</p>
<p><strong>Susan:</strong> There just might be.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-does-the-ai-dystopia-look-like-ai-show-2/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
