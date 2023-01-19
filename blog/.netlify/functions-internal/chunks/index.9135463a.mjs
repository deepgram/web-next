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

const metadata = { "headings": [{ "depth": 2, "slug": "definitions", "text": "Definitions" }, { "depth": 2, "slug": "what-is-ethics-in-technical-writing", "text": "What is Ethics in Technical Writing?" }, { "depth": 3, "slug": "questions-to-consider-in-ethical-writing", "text": "Questions to Consider in Ethical Writing" }, { "depth": 3, "slug": "dont-be-deceptive", "text": "Don\u2019t Be Deceptive" }, { "depth": 3, "slug": "give-credit-to-referenced-authors", "text": "Give Credit to Referenced Authors" }, { "depth": 2, "slug": "avoiding-unintentional-ethics-violations", "text": "Avoiding Unintentional Ethics Violations" }, { "depth": 2, "slug": "conclusion", "text": "Conclusion" }], "source": `When I taught Rhetorical Argument, we talked about the concept of the rhetorical triangle. The rhetorical triangle is based on Aristotle\u2019s teaching that you need to appeal to your audience in three primary planes: ethos, pathos, and logos. When you approach an argument in this way, you\u2019re more likely to convince your audience.

- - -

## Definitions

**Ethos**: The Greek word for \u201Ccharacter,\u201D ethos reflects the credibility of the speaker.

**Pathos**: Emotion. Something that evokes feelings. The Greek word pathos means "suffering," "experience," or "emotion."

**Logos**: Logic or meaning.

- - -

In some ways, this series of posts on writing covers a piece of each of these concepts. In my [last post on storytelling](https://blog.deepgram.com/technical-writing-a-developers-guide-to-storytelling/), we talked about enhancing your writing with storytelling, which we can also see as an appeal to *pathos* as we form a connection to our audience. In the [first post on writing](https://blog.deepgram.com/technical-writing-a-beginners-guide/), we learned how to approach writing. In that post, I was appealing to writing knowledge and facts, which aligns with appealing to *logos*. In this post on ethics, we\u2019re going to learn more about--you guessed it--*ethos*.

The word \u201Cethics\u201D stems from \u201Cethos.\u201D When we talk about ethics in technical writing, we\u2019re completing the rhetorical triangle approach and adding another layer to how we write and think about writing. Ethics protects your credibility as a writer and helps to create trust with your readers.

## What is Ethics in Technical Writing?

At the very least, ethics in writing means that you\u2019re honest with your audience, you represent your evidence accurately by avoiding exaggeration or disinformation, and you give credit to the resources you use to complete your writing.

Think about it from a reader\u2019s perspective: you would want someone to give you credit if they use your idea, even if that\u2019s in a tweet. You read articles and resources to gain knowledge, help you formulate opinions, and create strategies for problem-solving.

It is also worth noting that because something is legal, it doesn\u2019t mean that it\u2019s ethical. Ethical dilemmas in technical writing can stem from pressure from an employer, a short deadline, or by not thinking critically about our topics as we're writing. So what are some ways to ensure that your technical writing is ethical? Well, you can get started by evaluating your resources and your writing.

### Questions to Consider in Ethical Writing

* What information have you included? Does it represent the topic honestly and without trying to \u201Ctrick\u201D the reader?
* What words have you used? Do they convey an accurate meaning?
* Have you felt pressured to represent your topic in a certain way?
* Have you given credit to resources you\u2019ve used through linking, citations, or another form of attribution?
* Have you given false information?
* Have you concealed the truth?
* Have you misused information?
* Have you exploited cultural understanding to mislead your audience?

### Don\u2019t Be Deceptive

This might seem like a clear statement, but it means more than \u201Cdon\u2019t lie.\u201D Avoiding deceptive writing means that you do your best to represent an idea without blurring any lines, leaving out pertinent information, or misrepresenting data.

For example, let\u2019s say you\u2019re writing about a particular framework, and you want your readers to think it\u2019s the *best* technology in its category. You know that someone in high standing in the tech industry has said that framework is the best of all. So you add that into your blog post. That doesn\u2019t *seem* deceptive, right? Here\u2019s the catch: that tech person made that statement a year ago and has recently said that a new framework is even better. Despite knowing this, you use the quote to support your argument.

Although you didn\u2019t lie, and it\u2019s not illegal, it\u2019s still unethical because you deceive your audience.

### Give Credit to Referenced Authors

In the tech world, where people often talk about copying and pasting code into their repositories from other resources, it might seem unnatural to credit others for their ideas and content. However, you should recognize the author of the information you\u2019re using if at all possible in your writing. You can do this by linking to the resource, using a footnote that shares the resource, or by listing the source you\u2019ve referenced at the end of your writing. You should do your best to make it clear what information you\u2019ve used from the source.

## Avoiding Unintentional Ethics Violations

Some of the most common ethics violations in writing are unintentional. You might be curious *how* someone could do that. Presenting misinformation that\u2019s been passed along to you or believing that you\u2019re giving information truthfully when [you don\u2019t recognize how your biases are impacting your judgment](https://open.library.okstate.edu/technicalandprofessionalwriting/chapter/chapter-4/) are examples of unintentional ethical violations. Here are some questions to help you avoid ethical violations:

* Have I used reliable resources?
* Have I evaluated my own bias relating to this subject?
* Have I checked that the information provided to me is accurate?
* Have I represented the research and opinions of others accurately?
* Have I considered my primary audience and how they\u2019ll interpret the information I\u2019ve presented?
* Have I disclosed any sponsorships or rewards I\u2019ll receive for posting and/or linking information?

Let\u2019s go back to the example above. What if you didn\u2019t know that the tech person came out in support of another framework? What if you just remembered that they shared that opinion? In cases like these, it\u2019s helpful to do a quick search to verify that the information is up to date and accurate.

You can still update the content if you\u2019ve already posted that blog. It\u2019s also good practice to point out that you\u2019ve edited your post and point to where and why that occurred.

## Conclusion

This post, along with the previous two on writing, should give you an overview of how to approach writing and, hopefully, think a little deeper about the words you put on the page. That\u2019s not to say overthink it. Writing requires practice and effort, but it\u2019s a discovery to find your voice and a voice that your readers can connect to and trust. When you think deliberately about ethical technical communication, you're taking a step to improve your own writing. Next week, we\u2019ll continue our writing journey and learn more about making your writing accessible.

If you have any questions, or you\u2019d like to hear more about finding your voice, you can hit us up on Twitter and listen to our Tuesday Twitter Spaces, at [@DeepgramDevs](https://twitter.com/DeepgramDevs)`, "html": '<p>When I taught Rhetorical Argument, we talked about the concept of the rhetorical triangle. The rhetorical triangle is based on Aristotle\u2019s teaching that you need to appeal to your audience in three primary planes: ethos, pathos, and logos. When you approach an argument in this way, you\u2019re more likely to convince your audience.</p>\n<hr>\n<h2 id="definitions">Definitions</h2>\n<p><strong>Ethos</strong>: The Greek word for \u201Ccharacter,\u201D ethos reflects the credibility of the speaker.</p>\n<p><strong>Pathos</strong>: Emotion. Something that evokes feelings. The Greek word pathos means \u201Csuffering,\u201D \u201Cexperience,\u201D or \u201Cemotion.\u201D</p>\n<p><strong>Logos</strong>: Logic or meaning.</p>\n<hr>\n<p>In some ways, this series of posts on writing covers a piece of each of these concepts. In my <a href="https://blog.deepgram.com/technical-writing-a-developers-guide-to-storytelling/">last post on storytelling</a>, we talked about enhancing your writing with storytelling, which we can also see as an appeal to <em>pathos</em> as we form a connection to our audience. In the <a href="https://blog.deepgram.com/technical-writing-a-beginners-guide/">first post on writing</a>, we learned how to approach writing. In that post, I was appealing to writing knowledge and facts, which aligns with appealing to <em>logos</em>. In this post on ethics, we\u2019re going to learn more about\u2014you guessed it\u2014<em>ethos</em>.</p>\n<p>The word \u201Cethics\u201D stems from \u201Cethos.\u201D When we talk about ethics in technical writing, we\u2019re completing the rhetorical triangle approach and adding another layer to how we write and think about writing. Ethics protects your credibility as a writer and helps to create trust with your readers.</p>\n<h2 id="what-is-ethics-in-technical-writing">What is Ethics in Technical Writing?</h2>\n<p>At the very least, ethics in writing means that you\u2019re honest with your audience, you represent your evidence accurately by avoiding exaggeration or disinformation, and you give credit to the resources you use to complete your writing.</p>\n<p>Think about it from a reader\u2019s perspective: you would want someone to give you credit if they use your idea, even if that\u2019s in a tweet. You read articles and resources to gain knowledge, help you formulate opinions, and create strategies for problem-solving.</p>\n<p>It is also worth noting that because something is legal, it doesn\u2019t mean that it\u2019s ethical. Ethical dilemmas in technical writing can stem from pressure from an employer, a short deadline, or by not thinking critically about our topics as we\u2019re writing. So what are some ways to ensure that your technical writing is ethical? Well, you can get started by evaluating your resources and your writing.</p>\n<h3 id="questions-to-consider-in-ethical-writing">Questions to Consider in Ethical Writing</h3>\n<ul>\n<li>What information have you included? Does it represent the topic honestly and without trying to \u201Ctrick\u201D the reader?</li>\n<li>What words have you used? Do they convey an accurate meaning?</li>\n<li>Have you felt pressured to represent your topic in a certain way?</li>\n<li>Have you given credit to resources you\u2019ve used through linking, citations, or another form of attribution?</li>\n<li>Have you given false information?</li>\n<li>Have you concealed the truth?</li>\n<li>Have you misused information?</li>\n<li>Have you exploited cultural understanding to mislead your audience?</li>\n</ul>\n<h3 id="dont-be-deceptive">Don\u2019t Be Deceptive</h3>\n<p>This might seem like a clear statement, but it means more than \u201Cdon\u2019t lie.\u201D Avoiding deceptive writing means that you do your best to represent an idea without blurring any lines, leaving out pertinent information, or misrepresenting data.</p>\n<p>For example, let\u2019s say you\u2019re writing about a particular framework, and you want your readers to think it\u2019s the <em>best</em> technology in its category. You know that someone in high standing in the tech industry has said that framework is the best of all. So you add that into your blog post. That doesn\u2019t <em>seem</em> deceptive, right? Here\u2019s the catch: that tech person made that statement a year ago and has recently said that a new framework is even better. Despite knowing this, you use the quote to support your argument.</p>\n<p>Although you didn\u2019t lie, and it\u2019s not illegal, it\u2019s still unethical because you deceive your audience.</p>\n<h3 id="give-credit-to-referenced-authors">Give Credit to Referenced Authors</h3>\n<p>In the tech world, where people often talk about copying and pasting code into their repositories from other resources, it might seem unnatural to credit others for their ideas and content. However, you should recognize the author of the information you\u2019re using if at all possible in your writing. You can do this by linking to the resource, using a footnote that shares the resource, or by listing the source you\u2019ve referenced at the end of your writing. You should do your best to make it clear what information you\u2019ve used from the source.</p>\n<h2 id="avoiding-unintentional-ethics-violations">Avoiding Unintentional Ethics Violations</h2>\n<p>Some of the most common ethics violations in writing are unintentional. You might be curious <em>how</em> someone could do that. Presenting misinformation that\u2019s been passed along to you or believing that you\u2019re giving information truthfully when <a href="https://open.library.okstate.edu/technicalandprofessionalwriting/chapter/chapter-4/">you don\u2019t recognize how your biases are impacting your judgment</a> are examples of unintentional ethical violations. Here are some questions to help you avoid ethical violations:</p>\n<ul>\n<li>Have I used reliable resources?</li>\n<li>Have I evaluated my own bias relating to this subject?</li>\n<li>Have I checked that the information provided to me is accurate?</li>\n<li>Have I represented the research and opinions of others accurately?</li>\n<li>Have I considered my primary audience and how they\u2019ll interpret the information I\u2019ve presented?</li>\n<li>Have I disclosed any sponsorships or rewards I\u2019ll receive for posting and/or linking information?</li>\n</ul>\n<p>Let\u2019s go back to the example above. What if you didn\u2019t know that the tech person came out in support of another framework? What if you just remembered that they shared that opinion? In cases like these, it\u2019s helpful to do a quick search to verify that the information is up to date and accurate.</p>\n<p>You can still update the content if you\u2019ve already posted that blog. It\u2019s also good practice to point out that you\u2019ve edited your post and point to where and why that occurred.</p>\n<h2 id="conclusion">Conclusion</h2>\n<p>This post, along with the previous two on writing, should give you an overview of how to approach writing and, hopefully, think a little deeper about the words you put on the page. That\u2019s not to say overthink it. Writing requires practice and effort, but it\u2019s a discovery to find your voice and a voice that your readers can connect to and trust. When you think deliberately about ethical technical communication, you\u2019re taking a step to improve your own writing. Next week, we\u2019ll continue our writing journey and learn more about making your writing accessible.</p>\n<p>If you have any questions, or you\u2019d like to hear more about finding your voice, you can hit us up on Twitter and listen to our Tuesday Twitter Spaces, at <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a></p>' };
const frontmatter = { "title": "Technical Writing: Ethics and Honesty for Developers", "description": "Ethics protects your credibility as a writer and developer and helps to create trust with your readers. Read more about technical writing ethics here.", "date": "2022-03-21T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1647623514/blog/2022/03/technical-writing-ethics-for-developers/ethics-in-technical-blog-posts%402x.jpg", "authors": ["bekah-hawrot-weigel"], "category": "best-practice", "tags": ["technical-writing"], "seo": { "title": "Technical Writing: Ethics and Honesty for Developers", "description": "Ethics protects your credibility as a writer and developer and helps to create trust with your readers. Read more about technical writing ethics here." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661454055/blog/technical-writing-ethics-for-developers/ograph.png" }, "shorturls": { "share": "https://dpgr.am/18bea59", "twitter": "https://dpgr.am/9a4fcc8", "linkedin": "https://dpgr.am/aca0665", "reddit": "https://dpgr.am/2c2a423", "facebook": "https://dpgr.am/8784580" }, "astro": { "headings": [{ "depth": 2, "slug": "definitions", "text": "Definitions" }, { "depth": 2, "slug": "what-is-ethics-in-technical-writing", "text": "What is Ethics in Technical Writing?" }, { "depth": 3, "slug": "questions-to-consider-in-ethical-writing", "text": "Questions to Consider in Ethical Writing" }, { "depth": 3, "slug": "dont-be-deceptive", "text": "Don\u2019t Be Deceptive" }, { "depth": 3, "slug": "give-credit-to-referenced-authors", "text": "Give Credit to Referenced Authors" }, { "depth": 2, "slug": "avoiding-unintentional-ethics-violations", "text": "Avoiding Unintentional Ethics Violations" }, { "depth": 2, "slug": "conclusion", "text": "Conclusion" }], "source": `When I taught Rhetorical Argument, we talked about the concept of the rhetorical triangle. The rhetorical triangle is based on Aristotle\u2019s teaching that you need to appeal to your audience in three primary planes: ethos, pathos, and logos. When you approach an argument in this way, you\u2019re more likely to convince your audience.

- - -

## Definitions

**Ethos**: The Greek word for \u201Ccharacter,\u201D ethos reflects the credibility of the speaker.

**Pathos**: Emotion. Something that evokes feelings. The Greek word pathos means "suffering," "experience," or "emotion."

**Logos**: Logic or meaning.

- - -

In some ways, this series of posts on writing covers a piece of each of these concepts. In my [last post on storytelling](https://blog.deepgram.com/technical-writing-a-developers-guide-to-storytelling/), we talked about enhancing your writing with storytelling, which we can also see as an appeal to *pathos* as we form a connection to our audience. In the [first post on writing](https://blog.deepgram.com/technical-writing-a-beginners-guide/), we learned how to approach writing. In that post, I was appealing to writing knowledge and facts, which aligns with appealing to *logos*. In this post on ethics, we\u2019re going to learn more about--you guessed it--*ethos*.

The word \u201Cethics\u201D stems from \u201Cethos.\u201D When we talk about ethics in technical writing, we\u2019re completing the rhetorical triangle approach and adding another layer to how we write and think about writing. Ethics protects your credibility as a writer and helps to create trust with your readers.

## What is Ethics in Technical Writing?

At the very least, ethics in writing means that you\u2019re honest with your audience, you represent your evidence accurately by avoiding exaggeration or disinformation, and you give credit to the resources you use to complete your writing.

Think about it from a reader\u2019s perspective: you would want someone to give you credit if they use your idea, even if that\u2019s in a tweet. You read articles and resources to gain knowledge, help you formulate opinions, and create strategies for problem-solving.

It is also worth noting that because something is legal, it doesn\u2019t mean that it\u2019s ethical. Ethical dilemmas in technical writing can stem from pressure from an employer, a short deadline, or by not thinking critically about our topics as we're writing. So what are some ways to ensure that your technical writing is ethical? Well, you can get started by evaluating your resources and your writing.

### Questions to Consider in Ethical Writing

* What information have you included? Does it represent the topic honestly and without trying to \u201Ctrick\u201D the reader?
* What words have you used? Do they convey an accurate meaning?
* Have you felt pressured to represent your topic in a certain way?
* Have you given credit to resources you\u2019ve used through linking, citations, or another form of attribution?
* Have you given false information?
* Have you concealed the truth?
* Have you misused information?
* Have you exploited cultural understanding to mislead your audience?

### Don\u2019t Be Deceptive

This might seem like a clear statement, but it means more than \u201Cdon\u2019t lie.\u201D Avoiding deceptive writing means that you do your best to represent an idea without blurring any lines, leaving out pertinent information, or misrepresenting data.

For example, let\u2019s say you\u2019re writing about a particular framework, and you want your readers to think it\u2019s the *best* technology in its category. You know that someone in high standing in the tech industry has said that framework is the best of all. So you add that into your blog post. That doesn\u2019t *seem* deceptive, right? Here\u2019s the catch: that tech person made that statement a year ago and has recently said that a new framework is even better. Despite knowing this, you use the quote to support your argument.

Although you didn\u2019t lie, and it\u2019s not illegal, it\u2019s still unethical because you deceive your audience.

### Give Credit to Referenced Authors

In the tech world, where people often talk about copying and pasting code into their repositories from other resources, it might seem unnatural to credit others for their ideas and content. However, you should recognize the author of the information you\u2019re using if at all possible in your writing. You can do this by linking to the resource, using a footnote that shares the resource, or by listing the source you\u2019ve referenced at the end of your writing. You should do your best to make it clear what information you\u2019ve used from the source.

## Avoiding Unintentional Ethics Violations

Some of the most common ethics violations in writing are unintentional. You might be curious *how* someone could do that. Presenting misinformation that\u2019s been passed along to you or believing that you\u2019re giving information truthfully when [you don\u2019t recognize how your biases are impacting your judgment](https://open.library.okstate.edu/technicalandprofessionalwriting/chapter/chapter-4/) are examples of unintentional ethical violations. Here are some questions to help you avoid ethical violations:

* Have I used reliable resources?
* Have I evaluated my own bias relating to this subject?
* Have I checked that the information provided to me is accurate?
* Have I represented the research and opinions of others accurately?
* Have I considered my primary audience and how they\u2019ll interpret the information I\u2019ve presented?
* Have I disclosed any sponsorships or rewards I\u2019ll receive for posting and/or linking information?

Let\u2019s go back to the example above. What if you didn\u2019t know that the tech person came out in support of another framework? What if you just remembered that they shared that opinion? In cases like these, it\u2019s helpful to do a quick search to verify that the information is up to date and accurate.

You can still update the content if you\u2019ve already posted that blog. It\u2019s also good practice to point out that you\u2019ve edited your post and point to where and why that occurred.

## Conclusion

This post, along with the previous two on writing, should give you an overview of how to approach writing and, hopefully, think a little deeper about the words you put on the page. That\u2019s not to say overthink it. Writing requires practice and effort, but it\u2019s a discovery to find your voice and a voice that your readers can connect to and trust. When you think deliberately about ethical technical communication, you're taking a step to improve your own writing. Next week, we\u2019ll continue our writing journey and learn more about making your writing accessible.

If you have any questions, or you\u2019d like to hear more about finding your voice, you can hit us up on Twitter and listen to our Tuesday Twitter Spaces, at [@DeepgramDevs](https://twitter.com/DeepgramDevs)`, "html": '<p>When I taught Rhetorical Argument, we talked about the concept of the rhetorical triangle. The rhetorical triangle is based on Aristotle\u2019s teaching that you need to appeal to your audience in three primary planes: ethos, pathos, and logos. When you approach an argument in this way, you\u2019re more likely to convince your audience.</p>\n<hr>\n<h2 id="definitions">Definitions</h2>\n<p><strong>Ethos</strong>: The Greek word for \u201Ccharacter,\u201D ethos reflects the credibility of the speaker.</p>\n<p><strong>Pathos</strong>: Emotion. Something that evokes feelings. The Greek word pathos means \u201Csuffering,\u201D \u201Cexperience,\u201D or \u201Cemotion.\u201D</p>\n<p><strong>Logos</strong>: Logic or meaning.</p>\n<hr>\n<p>In some ways, this series of posts on writing covers a piece of each of these concepts. In my <a href="https://blog.deepgram.com/technical-writing-a-developers-guide-to-storytelling/">last post on storytelling</a>, we talked about enhancing your writing with storytelling, which we can also see as an appeal to <em>pathos</em> as we form a connection to our audience. In the <a href="https://blog.deepgram.com/technical-writing-a-beginners-guide/">first post on writing</a>, we learned how to approach writing. In that post, I was appealing to writing knowledge and facts, which aligns with appealing to <em>logos</em>. In this post on ethics, we\u2019re going to learn more about\u2014you guessed it\u2014<em>ethos</em>.</p>\n<p>The word \u201Cethics\u201D stems from \u201Cethos.\u201D When we talk about ethics in technical writing, we\u2019re completing the rhetorical triangle approach and adding another layer to how we write and think about writing. Ethics protects your credibility as a writer and helps to create trust with your readers.</p>\n<h2 id="what-is-ethics-in-technical-writing">What is Ethics in Technical Writing?</h2>\n<p>At the very least, ethics in writing means that you\u2019re honest with your audience, you represent your evidence accurately by avoiding exaggeration or disinformation, and you give credit to the resources you use to complete your writing.</p>\n<p>Think about it from a reader\u2019s perspective: you would want someone to give you credit if they use your idea, even if that\u2019s in a tweet. You read articles and resources to gain knowledge, help you formulate opinions, and create strategies for problem-solving.</p>\n<p>It is also worth noting that because something is legal, it doesn\u2019t mean that it\u2019s ethical. Ethical dilemmas in technical writing can stem from pressure from an employer, a short deadline, or by not thinking critically about our topics as we\u2019re writing. So what are some ways to ensure that your technical writing is ethical? Well, you can get started by evaluating your resources and your writing.</p>\n<h3 id="questions-to-consider-in-ethical-writing">Questions to Consider in Ethical Writing</h3>\n<ul>\n<li>What information have you included? Does it represent the topic honestly and without trying to \u201Ctrick\u201D the reader?</li>\n<li>What words have you used? Do they convey an accurate meaning?</li>\n<li>Have you felt pressured to represent your topic in a certain way?</li>\n<li>Have you given credit to resources you\u2019ve used through linking, citations, or another form of attribution?</li>\n<li>Have you given false information?</li>\n<li>Have you concealed the truth?</li>\n<li>Have you misused information?</li>\n<li>Have you exploited cultural understanding to mislead your audience?</li>\n</ul>\n<h3 id="dont-be-deceptive">Don\u2019t Be Deceptive</h3>\n<p>This might seem like a clear statement, but it means more than \u201Cdon\u2019t lie.\u201D Avoiding deceptive writing means that you do your best to represent an idea without blurring any lines, leaving out pertinent information, or misrepresenting data.</p>\n<p>For example, let\u2019s say you\u2019re writing about a particular framework, and you want your readers to think it\u2019s the <em>best</em> technology in its category. You know that someone in high standing in the tech industry has said that framework is the best of all. So you add that into your blog post. That doesn\u2019t <em>seem</em> deceptive, right? Here\u2019s the catch: that tech person made that statement a year ago and has recently said that a new framework is even better. Despite knowing this, you use the quote to support your argument.</p>\n<p>Although you didn\u2019t lie, and it\u2019s not illegal, it\u2019s still unethical because you deceive your audience.</p>\n<h3 id="give-credit-to-referenced-authors">Give Credit to Referenced Authors</h3>\n<p>In the tech world, where people often talk about copying and pasting code into their repositories from other resources, it might seem unnatural to credit others for their ideas and content. However, you should recognize the author of the information you\u2019re using if at all possible in your writing. You can do this by linking to the resource, using a footnote that shares the resource, or by listing the source you\u2019ve referenced at the end of your writing. You should do your best to make it clear what information you\u2019ve used from the source.</p>\n<h2 id="avoiding-unintentional-ethics-violations">Avoiding Unintentional Ethics Violations</h2>\n<p>Some of the most common ethics violations in writing are unintentional. You might be curious <em>how</em> someone could do that. Presenting misinformation that\u2019s been passed along to you or believing that you\u2019re giving information truthfully when <a href="https://open.library.okstate.edu/technicalandprofessionalwriting/chapter/chapter-4/">you don\u2019t recognize how your biases are impacting your judgment</a> are examples of unintentional ethical violations. Here are some questions to help you avoid ethical violations:</p>\n<ul>\n<li>Have I used reliable resources?</li>\n<li>Have I evaluated my own bias relating to this subject?</li>\n<li>Have I checked that the information provided to me is accurate?</li>\n<li>Have I represented the research and opinions of others accurately?</li>\n<li>Have I considered my primary audience and how they\u2019ll interpret the information I\u2019ve presented?</li>\n<li>Have I disclosed any sponsorships or rewards I\u2019ll receive for posting and/or linking information?</li>\n</ul>\n<p>Let\u2019s go back to the example above. What if you didn\u2019t know that the tech person came out in support of another framework? What if you just remembered that they shared that opinion? In cases like these, it\u2019s helpful to do a quick search to verify that the information is up to date and accurate.</p>\n<p>You can still update the content if you\u2019ve already posted that blog. It\u2019s also good practice to point out that you\u2019ve edited your post and point to where and why that occurred.</p>\n<h2 id="conclusion">Conclusion</h2>\n<p>This post, along with the previous two on writing, should give you an overview of how to approach writing and, hopefully, think a little deeper about the words you put on the page. That\u2019s not to say overthink it. Writing requires practice and effort, but it\u2019s a discovery to find your voice and a voice that your readers can connect to and trust. When you think deliberately about ethical technical communication, you\u2019re taking a step to improve your own writing. Next week, we\u2019ll continue our writing journey and learn more about making your writing accessible.</p>\n<p>If you have any questions, or you\u2019d like to hear more about finding your voice, you can hit us up on Twitter and listen to our Tuesday Twitter Spaces, at <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a></p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/technical-writing-ethics-for-developers/index.md" };
function rawContent() {
  return `When I taught Rhetorical Argument, we talked about the concept of the rhetorical triangle. The rhetorical triangle is based on Aristotle\u2019s teaching that you need to appeal to your audience in three primary planes: ethos, pathos, and logos. When you approach an argument in this way, you\u2019re more likely to convince your audience.

- - -

## Definitions

**Ethos**: The Greek word for \u201Ccharacter,\u201D ethos reflects the credibility of the speaker.

**Pathos**: Emotion. Something that evokes feelings. The Greek word pathos means "suffering," "experience," or "emotion."

**Logos**: Logic or meaning.

- - -

In some ways, this series of posts on writing covers a piece of each of these concepts. In my [last post on storytelling](https://blog.deepgram.com/technical-writing-a-developers-guide-to-storytelling/), we talked about enhancing your writing with storytelling, which we can also see as an appeal to *pathos* as we form a connection to our audience. In the [first post on writing](https://blog.deepgram.com/technical-writing-a-beginners-guide/), we learned how to approach writing. In that post, I was appealing to writing knowledge and facts, which aligns with appealing to *logos*. In this post on ethics, we\u2019re going to learn more about--you guessed it--*ethos*.

The word \u201Cethics\u201D stems from \u201Cethos.\u201D When we talk about ethics in technical writing, we\u2019re completing the rhetorical triangle approach and adding another layer to how we write and think about writing. Ethics protects your credibility as a writer and helps to create trust with your readers.

## What is Ethics in Technical Writing?

At the very least, ethics in writing means that you\u2019re honest with your audience, you represent your evidence accurately by avoiding exaggeration or disinformation, and you give credit to the resources you use to complete your writing.

Think about it from a reader\u2019s perspective: you would want someone to give you credit if they use your idea, even if that\u2019s in a tweet. You read articles and resources to gain knowledge, help you formulate opinions, and create strategies for problem-solving.

It is also worth noting that because something is legal, it doesn\u2019t mean that it\u2019s ethical. Ethical dilemmas in technical writing can stem from pressure from an employer, a short deadline, or by not thinking critically about our topics as we're writing. So what are some ways to ensure that your technical writing is ethical? Well, you can get started by evaluating your resources and your writing.

### Questions to Consider in Ethical Writing

* What information have you included? Does it represent the topic honestly and without trying to \u201Ctrick\u201D the reader?
* What words have you used? Do they convey an accurate meaning?
* Have you felt pressured to represent your topic in a certain way?
* Have you given credit to resources you\u2019ve used through linking, citations, or another form of attribution?
* Have you given false information?
* Have you concealed the truth?
* Have you misused information?
* Have you exploited cultural understanding to mislead your audience?

### Don\u2019t Be Deceptive

This might seem like a clear statement, but it means more than \u201Cdon\u2019t lie.\u201D Avoiding deceptive writing means that you do your best to represent an idea without blurring any lines, leaving out pertinent information, or misrepresenting data.

For example, let\u2019s say you\u2019re writing about a particular framework, and you want your readers to think it\u2019s the *best* technology in its category. You know that someone in high standing in the tech industry has said that framework is the best of all. So you add that into your blog post. That doesn\u2019t *seem* deceptive, right? Here\u2019s the catch: that tech person made that statement a year ago and has recently said that a new framework is even better. Despite knowing this, you use the quote to support your argument.

Although you didn\u2019t lie, and it\u2019s not illegal, it\u2019s still unethical because you deceive your audience.

### Give Credit to Referenced Authors

In the tech world, where people often talk about copying and pasting code into their repositories from other resources, it might seem unnatural to credit others for their ideas and content. However, you should recognize the author of the information you\u2019re using if at all possible in your writing. You can do this by linking to the resource, using a footnote that shares the resource, or by listing the source you\u2019ve referenced at the end of your writing. You should do your best to make it clear what information you\u2019ve used from the source.

## Avoiding Unintentional Ethics Violations

Some of the most common ethics violations in writing are unintentional. You might be curious *how* someone could do that. Presenting misinformation that\u2019s been passed along to you or believing that you\u2019re giving information truthfully when [you don\u2019t recognize how your biases are impacting your judgment](https://open.library.okstate.edu/technicalandprofessionalwriting/chapter/chapter-4/) are examples of unintentional ethical violations. Here are some questions to help you avoid ethical violations:

* Have I used reliable resources?
* Have I evaluated my own bias relating to this subject?
* Have I checked that the information provided to me is accurate?
* Have I represented the research and opinions of others accurately?
* Have I considered my primary audience and how they\u2019ll interpret the information I\u2019ve presented?
* Have I disclosed any sponsorships or rewards I\u2019ll receive for posting and/or linking information?

Let\u2019s go back to the example above. What if you didn\u2019t know that the tech person came out in support of another framework? What if you just remembered that they shared that opinion? In cases like these, it\u2019s helpful to do a quick search to verify that the information is up to date and accurate.

You can still update the content if you\u2019ve already posted that blog. It\u2019s also good practice to point out that you\u2019ve edited your post and point to where and why that occurred.

## Conclusion

This post, along with the previous two on writing, should give you an overview of how to approach writing and, hopefully, think a little deeper about the words you put on the page. That\u2019s not to say overthink it. Writing requires practice and effort, but it\u2019s a discovery to find your voice and a voice that your readers can connect to and trust. When you think deliberately about ethical technical communication, you're taking a step to improve your own writing. Next week, we\u2019ll continue our writing journey and learn more about making your writing accessible.

If you have any questions, or you\u2019d like to hear more about finding your voice, you can hit us up on Twitter and listen to our Tuesday Twitter Spaces, at [@DeepgramDevs](https://twitter.com/DeepgramDevs)`;
}
function compiledContent() {
  return '<p>When I taught Rhetorical Argument, we talked about the concept of the rhetorical triangle. The rhetorical triangle is based on Aristotle\u2019s teaching that you need to appeal to your audience in three primary planes: ethos, pathos, and logos. When you approach an argument in this way, you\u2019re more likely to convince your audience.</p>\n<hr>\n<h2 id="definitions">Definitions</h2>\n<p><strong>Ethos</strong>: The Greek word for \u201Ccharacter,\u201D ethos reflects the credibility of the speaker.</p>\n<p><strong>Pathos</strong>: Emotion. Something that evokes feelings. The Greek word pathos means \u201Csuffering,\u201D \u201Cexperience,\u201D or \u201Cemotion.\u201D</p>\n<p><strong>Logos</strong>: Logic or meaning.</p>\n<hr>\n<p>In some ways, this series of posts on writing covers a piece of each of these concepts. In my <a href="https://blog.deepgram.com/technical-writing-a-developers-guide-to-storytelling/">last post on storytelling</a>, we talked about enhancing your writing with storytelling, which we can also see as an appeal to <em>pathos</em> as we form a connection to our audience. In the <a href="https://blog.deepgram.com/technical-writing-a-beginners-guide/">first post on writing</a>, we learned how to approach writing. In that post, I was appealing to writing knowledge and facts, which aligns with appealing to <em>logos</em>. In this post on ethics, we\u2019re going to learn more about\u2014you guessed it\u2014<em>ethos</em>.</p>\n<p>The word \u201Cethics\u201D stems from \u201Cethos.\u201D When we talk about ethics in technical writing, we\u2019re completing the rhetorical triangle approach and adding another layer to how we write and think about writing. Ethics protects your credibility as a writer and helps to create trust with your readers.</p>\n<h2 id="what-is-ethics-in-technical-writing">What is Ethics in Technical Writing?</h2>\n<p>At the very least, ethics in writing means that you\u2019re honest with your audience, you represent your evidence accurately by avoiding exaggeration or disinformation, and you give credit to the resources you use to complete your writing.</p>\n<p>Think about it from a reader\u2019s perspective: you would want someone to give you credit if they use your idea, even if that\u2019s in a tweet. You read articles and resources to gain knowledge, help you formulate opinions, and create strategies for problem-solving.</p>\n<p>It is also worth noting that because something is legal, it doesn\u2019t mean that it\u2019s ethical. Ethical dilemmas in technical writing can stem from pressure from an employer, a short deadline, or by not thinking critically about our topics as we\u2019re writing. So what are some ways to ensure that your technical writing is ethical? Well, you can get started by evaluating your resources and your writing.</p>\n<h3 id="questions-to-consider-in-ethical-writing">Questions to Consider in Ethical Writing</h3>\n<ul>\n<li>What information have you included? Does it represent the topic honestly and without trying to \u201Ctrick\u201D the reader?</li>\n<li>What words have you used? Do they convey an accurate meaning?</li>\n<li>Have you felt pressured to represent your topic in a certain way?</li>\n<li>Have you given credit to resources you\u2019ve used through linking, citations, or another form of attribution?</li>\n<li>Have you given false information?</li>\n<li>Have you concealed the truth?</li>\n<li>Have you misused information?</li>\n<li>Have you exploited cultural understanding to mislead your audience?</li>\n</ul>\n<h3 id="dont-be-deceptive">Don\u2019t Be Deceptive</h3>\n<p>This might seem like a clear statement, but it means more than \u201Cdon\u2019t lie.\u201D Avoiding deceptive writing means that you do your best to represent an idea without blurring any lines, leaving out pertinent information, or misrepresenting data.</p>\n<p>For example, let\u2019s say you\u2019re writing about a particular framework, and you want your readers to think it\u2019s the <em>best</em> technology in its category. You know that someone in high standing in the tech industry has said that framework is the best of all. So you add that into your blog post. That doesn\u2019t <em>seem</em> deceptive, right? Here\u2019s the catch: that tech person made that statement a year ago and has recently said that a new framework is even better. Despite knowing this, you use the quote to support your argument.</p>\n<p>Although you didn\u2019t lie, and it\u2019s not illegal, it\u2019s still unethical because you deceive your audience.</p>\n<h3 id="give-credit-to-referenced-authors">Give Credit to Referenced Authors</h3>\n<p>In the tech world, where people often talk about copying and pasting code into their repositories from other resources, it might seem unnatural to credit others for their ideas and content. However, you should recognize the author of the information you\u2019re using if at all possible in your writing. You can do this by linking to the resource, using a footnote that shares the resource, or by listing the source you\u2019ve referenced at the end of your writing. You should do your best to make it clear what information you\u2019ve used from the source.</p>\n<h2 id="avoiding-unintentional-ethics-violations">Avoiding Unintentional Ethics Violations</h2>\n<p>Some of the most common ethics violations in writing are unintentional. You might be curious <em>how</em> someone could do that. Presenting misinformation that\u2019s been passed along to you or believing that you\u2019re giving information truthfully when <a href="https://open.library.okstate.edu/technicalandprofessionalwriting/chapter/chapter-4/">you don\u2019t recognize how your biases are impacting your judgment</a> are examples of unintentional ethical violations. Here are some questions to help you avoid ethical violations:</p>\n<ul>\n<li>Have I used reliable resources?</li>\n<li>Have I evaluated my own bias relating to this subject?</li>\n<li>Have I checked that the information provided to me is accurate?</li>\n<li>Have I represented the research and opinions of others accurately?</li>\n<li>Have I considered my primary audience and how they\u2019ll interpret the information I\u2019ve presented?</li>\n<li>Have I disclosed any sponsorships or rewards I\u2019ll receive for posting and/or linking information?</li>\n</ul>\n<p>Let\u2019s go back to the example above. What if you didn\u2019t know that the tech person came out in support of another framework? What if you just remembered that they shared that opinion? In cases like these, it\u2019s helpful to do a quick search to verify that the information is up to date and accurate.</p>\n<p>You can still update the content if you\u2019ve already posted that blog. It\u2019s also good practice to point out that you\u2019ve edited your post and point to where and why that occurred.</p>\n<h2 id="conclusion">Conclusion</h2>\n<p>This post, along with the previous two on writing, should give you an overview of how to approach writing and, hopefully, think a little deeper about the words you put on the page. That\u2019s not to say overthink it. Writing requires practice and effort, but it\u2019s a discovery to find your voice and a voice that your readers can connect to and trust. When you think deliberately about ethical technical communication, you\u2019re taking a step to improve your own writing. Next week, we\u2019ll continue our writing journey and learn more about making your writing accessible.</p>\n<p>If you have any questions, or you\u2019d like to hear more about finding your voice, you can hit us up on Twitter and listen to our Tuesday Twitter Spaces, at <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a></p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/technical-writing-ethics-for-developers/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>When I taught Rhetorical Argument, we talked about the concept of the rhetorical triangle. The rhetorical triangle is based on Aristotle’s teaching that you need to appeal to your audience in three primary planes: ethos, pathos, and logos. When you approach an argument in this way, you’re more likely to convince your audience.</p>
<hr>
<h2 id="definitions">Definitions</h2>
<p><strong>Ethos</strong>: The Greek word for “character,” ethos reflects the credibility of the speaker.</p>
<p><strong>Pathos</strong>: Emotion. Something that evokes feelings. The Greek word pathos means “suffering,” “experience,” or “emotion.”</p>
<p><strong>Logos</strong>: Logic or meaning.</p>
<hr>
<p>In some ways, this series of posts on writing covers a piece of each of these concepts. In my <a href="https://blog.deepgram.com/technical-writing-a-developers-guide-to-storytelling/">last post on storytelling</a>, we talked about enhancing your writing with storytelling, which we can also see as an appeal to <em>pathos</em> as we form a connection to our audience. In the <a href="https://blog.deepgram.com/technical-writing-a-beginners-guide/">first post on writing</a>, we learned how to approach writing. In that post, I was appealing to writing knowledge and facts, which aligns with appealing to <em>logos</em>. In this post on ethics, we’re going to learn more about—you guessed it—<em>ethos</em>.</p>
<p>The word “ethics” stems from “ethos.” When we talk about ethics in technical writing, we’re completing the rhetorical triangle approach and adding another layer to how we write and think about writing. Ethics protects your credibility as a writer and helps to create trust with your readers.</p>
<h2 id="what-is-ethics-in-technical-writing">What is Ethics in Technical Writing?</h2>
<p>At the very least, ethics in writing means that you’re honest with your audience, you represent your evidence accurately by avoiding exaggeration or disinformation, and you give credit to the resources you use to complete your writing.</p>
<p>Think about it from a reader’s perspective: you would want someone to give you credit if they use your idea, even if that’s in a tweet. You read articles and resources to gain knowledge, help you formulate opinions, and create strategies for problem-solving.</p>
<p>It is also worth noting that because something is legal, it doesn’t mean that it’s ethical. Ethical dilemmas in technical writing can stem from pressure from an employer, a short deadline, or by not thinking critically about our topics as we’re writing. So what are some ways to ensure that your technical writing is ethical? Well, you can get started by evaluating your resources and your writing.</p>
<h3 id="questions-to-consider-in-ethical-writing">Questions to Consider in Ethical Writing</h3>
<ul>
<li>What information have you included? Does it represent the topic honestly and without trying to “trick” the reader?</li>
<li>What words have you used? Do they convey an accurate meaning?</li>
<li>Have you felt pressured to represent your topic in a certain way?</li>
<li>Have you given credit to resources you’ve used through linking, citations, or another form of attribution?</li>
<li>Have you given false information?</li>
<li>Have you concealed the truth?</li>
<li>Have you misused information?</li>
<li>Have you exploited cultural understanding to mislead your audience?</li>
</ul>
<h3 id="dont-be-deceptive">Don’t Be Deceptive</h3>
<p>This might seem like a clear statement, but it means more than “don’t lie.” Avoiding deceptive writing means that you do your best to represent an idea without blurring any lines, leaving out pertinent information, or misrepresenting data.</p>
<p>For example, let’s say you’re writing about a particular framework, and you want your readers to think it’s the <em>best</em> technology in its category. You know that someone in high standing in the tech industry has said that framework is the best of all. So you add that into your blog post. That doesn’t <em>seem</em> deceptive, right? Here’s the catch: that tech person made that statement a year ago and has recently said that a new framework is even better. Despite knowing this, you use the quote to support your argument.</p>
<p>Although you didn’t lie, and it’s not illegal, it’s still unethical because you deceive your audience.</p>
<h3 id="give-credit-to-referenced-authors">Give Credit to Referenced Authors</h3>
<p>In the tech world, where people often talk about copying and pasting code into their repositories from other resources, it might seem unnatural to credit others for their ideas and content. However, you should recognize the author of the information you’re using if at all possible in your writing. You can do this by linking to the resource, using a footnote that shares the resource, or by listing the source you’ve referenced at the end of your writing. You should do your best to make it clear what information you’ve used from the source.</p>
<h2 id="avoiding-unintentional-ethics-violations">Avoiding Unintentional Ethics Violations</h2>
<p>Some of the most common ethics violations in writing are unintentional. You might be curious <em>how</em> someone could do that. Presenting misinformation that’s been passed along to you or believing that you’re giving information truthfully when <a href="https://open.library.okstate.edu/technicalandprofessionalwriting/chapter/chapter-4/">you don’t recognize how your biases are impacting your judgment</a> are examples of unintentional ethical violations. Here are some questions to help you avoid ethical violations:</p>
<ul>
<li>Have I used reliable resources?</li>
<li>Have I evaluated my own bias relating to this subject?</li>
<li>Have I checked that the information provided to me is accurate?</li>
<li>Have I represented the research and opinions of others accurately?</li>
<li>Have I considered my primary audience and how they’ll interpret the information I’ve presented?</li>
<li>Have I disclosed any sponsorships or rewards I’ll receive for posting and/or linking information?</li>
</ul>
<p>Let’s go back to the example above. What if you didn’t know that the tech person came out in support of another framework? What if you just remembered that they shared that opinion? In cases like these, it’s helpful to do a quick search to verify that the information is up to date and accurate.</p>
<p>You can still update the content if you’ve already posted that blog. It’s also good practice to point out that you’ve edited your post and point to where and why that occurred.</p>
<h2 id="conclusion">Conclusion</h2>
<p>This post, along with the previous two on writing, should give you an overview of how to approach writing and, hopefully, think a little deeper about the words you put on the page. That’s not to say overthink it. Writing requires practice and effort, but it’s a discovery to find your voice and a voice that your readers can connect to and trust. When you think deliberately about ethical technical communication, you’re taking a step to improve your own writing. Next week, we’ll continue our writing journey and learn more about making your writing accessible.</p>
<p>If you have any questions, or you’d like to hear more about finding your voice, you can hit us up on Twitter and listen to our Tuesday Twitter Spaces, at <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a></p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/technical-writing-ethics-for-developers/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
