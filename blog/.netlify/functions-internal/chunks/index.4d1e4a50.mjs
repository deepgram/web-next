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

const metadata = { "headings": [{ "depth": 1, "slug": "the-situation", "text": "The situation" }, { "depth": 1, "slug": "text-search-is-pretty-easy", "text": "Text Search is Pretty Easy" }, { "depth": 1, "slug": "speech-search-was-hard-until-now", "text": "Speech Search Was Hard, Until Now" }, { "depth": 1, "slug": "search-all-speech-with-deepgram", "text": "Search All Speech With Deepgram" }, { "depth": 1, "slug": "you-need-this", "text": "You Need This" }], "source": `Today, we're one month away from election day, and the race for the presidency is closing in on the home stretch. Newsrooms around the country are buzzing with activity: interviews, fact checking, reporting and, of course, combing through huge quantities of videos and recordings of both candidates, hunting for that juicy soundbite that might change public opinion and the course of the election.

Here's an example. I uploaded the entirety of Donald Trump's speech at the Republican National Convention from July 2016 to Deepgram. Now you can search through it just like you would with text.

Search for 'jobs', then listen.

Try also searching for:

* taxes
* women
* security
* tremendous
* really
* "I love"
* Hillary
* destruction
* white house
* "I'm with her"

You get taken to the exact time when those terms were mentioned during his speech. Click the red timeline markers to jump through the video to hear each audio clip. This is really fun but also shows ***the power of speech search***.

# The situation

The *Washington Post*'s [David A. Fahrenthold brought to light one such bombshell of a clip](https://www.washingtonpost.com/politics/trump-recorded-having-extremely-lewd-conversation-about-women-in-2005/2016/10/07/3b9ce776-8cb4-11e6-bf8a-3d26847eeed4_story.html), in which Republican candidate Donald Trump was recorded saying a number of things that most would consider very offensive. It's unclear whether the clip, which was recorded in 2005, will make a significant impact on this election. After all, at the time of writing, this news only broke 24 hours ago.

But there is one thing that *is* clear: Fahrenthold is one heck of an investigative journalist. Regardless of which side of the political aisle you sit on, we can all agree that the world would be a better place if there were more journalists with the wherewithal to slog through reams of documents and countless hours of audio and video.

# Text Search is Pretty Easy

If processing this information wasn't so labor intensive, it's likely that there *would* be more Fahrentholds out there. Document search is relatively easy today. If the documents are already digital, searching for keywords is trivially easy. If they're on paper, then it's simply a matter of scanning in the documents, using optical character recognition to transform images of text into text data and then performing keyword searches.

Google and Ctrl+F have been around for a while

Text search only gets challenging when dealing with a huge corpus of documents with different types of data embedded in them (like charts and tables). But still, it's a tractable problem.

For example, when the [Panama Papers](https://en.wikipedia.org/wiki/Panama_Papers) leaked last year, it took an international team of 400 journalists from 100 news organizations to sift through the 4.8 million emails, three million database entries, two million PDFs, one million images and 320,000 text documents that an unknown party exfiltrated from Mossack Fonseca. Using [Apache Solr](http://lucene.apache.org/solr/) and [Apache Tika](https://tika.apache.org/) to index and search through the data, journalists were able to map the network of shady dealings and tax sheltering schemes of some of the world's most powerful people and corporations.

It may have taken hundreds of people around the world almost a year to process through all the records, but it was doable.

# Speech Search Was Hard, Until Now

Searching through recordings is really difficult. In terms of workflow, usually the raw audio is transcribed into text, which is then fed into a search tool. If you transcribe using human transcription, it's too time consuming and expensive. If you try to do it with automatic speech-to-text then search accuracy is the problem. Deepgram fixed that.

Deepgram finds speech with A.I.

Deepgram is an artificial intelligence tool that makes searching for keywords in speeches, private conversations and phone calls faster, cheaper and easier than the old way of doing things. Deepgram indexes audio files in more than half the time of a human transcriber, and **costs only 75\xA2 per hour of audio**. Compare that to the 75\xA2 *per minute* charged by most human transcription services-it's a pretty good deal.

And, Deepgram takes out the extra step of feeding transcriptions into a search platform. You can search for keywords directly within the audio recording, and jump straight to the times the keyword was mentioned in the audio. This lets reporters listen for intonation and inflection, which are totally lost during the transcription process. Deepgram makes finding the timestamp of those sound bites a breeze (I'm looking at you radio and podcast producers).

# Search All Speech With Deepgram

Deepgram is a powerful "speech search engine" that makes the process of identifying key words and phrases in speeches and other spoken-word audio recordings fast and easy.

Deepgram is great for finding bits and pieces of single speeches, and its equally great at searching through a library of audio data. Let's say you came into possession of audio recordings of Hillary Clinton's speeches to big Wall Street firms like Goldman Sachs. You could load them all into Deepgram and use keyword searches to suss out the unifying themes of her speeches.

A more practical use case could involve loading all of a candidate's speeches, television appearances, etc. into Deepgram and search for hot-button issues. You could identify the moments when candidates change their positions on a certain topic, or correct them on the fly when they deny that they'd said a particular thing.

# You Need This

Deepgram's speech search engine won't replace researchers and investigative reporters, but it will make them faster and more effective. Now you can search through dozens or thousands of hours of audio recordings quickly, easily, and without the hassle and expense of transcription.

If you're a journalist or news organization and want to see how Deepgram can fit into your workflow, [reach out and say hello](https://deepgram.com/contact-us/).

- - -

With contribution from [Jason D. Rowley](https://twitter.com/Jason_Rowley). Image: Gage Skidmore from [Flickr](https://www.flickr.com/photos/gageskidmore/8567825104).`, "html": '<p>Today, we\u2019re one month away from election day, and the race for the presidency is closing in on the home stretch. Newsrooms around the country are buzzing with activity: interviews, fact checking, reporting and, of course, combing through huge quantities of videos and recordings of both candidates, hunting for that juicy soundbite that might change public opinion and the course of the election.</p>\n<p>Here\u2019s an example. I uploaded the entirety of Donald Trump\u2019s speech at the Republican National Convention from July 2016 to Deepgram. Now you can search through it just like you would with text.</p>\n<p>Search for \u2018jobs\u2019, then listen.</p>\n<p>Try also searching for:</p>\n<ul>\n<li>taxes</li>\n<li>women</li>\n<li>security</li>\n<li>tremendous</li>\n<li>really</li>\n<li>\u201CI love\u201D</li>\n<li>Hillary</li>\n<li>destruction</li>\n<li>white house</li>\n<li>\u201CI\u2019m with her\u201D</li>\n</ul>\n<p>You get taken to the exact time when those terms were mentioned during his speech. Click the red timeline markers to jump through the video to hear each audio clip. This is really fun but also shows <em><strong>the power of speech search</strong></em>.</p>\n<h1 id="the-situation">The situation</h1>\n<p>The <em>Washington Post</em>\u2019s <a href="https://www.washingtonpost.com/politics/trump-recorded-having-extremely-lewd-conversation-about-women-in-2005/2016/10/07/3b9ce776-8cb4-11e6-bf8a-3d26847eeed4_story.html">David A. Fahrenthold brought to light one such bombshell of a clip</a>, in which Republican candidate Donald Trump was recorded saying a number of things that most would consider very offensive. It\u2019s unclear whether the clip, which was recorded in 2005, will make a significant impact on this election. After all, at the time of writing, this news only broke 24 hours ago.</p>\n<p>But there is one thing that <em>is</em> clear: Fahrenthold is one heck of an investigative journalist. Regardless of which side of the political aisle you sit on, we can all agree that the world would be a better place if there were more journalists with the wherewithal to slog through reams of documents and countless hours of audio and video.</p>\n<h1 id="text-search-is-pretty-easy">Text Search is Pretty Easy</h1>\n<p>If processing this information wasn\u2019t so labor intensive, it\u2019s likely that there <em>would</em> be more Fahrentholds out there. Document search is relatively easy today. If the documents are already digital, searching for keywords is trivially easy. If they\u2019re on paper, then it\u2019s simply a matter of scanning in the documents, using optical character recognition to transform images of text into text data and then performing keyword searches.</p>\n<p>Google and Ctrl+F have been around for a while</p>\n<p>Text search only gets challenging when dealing with a huge corpus of documents with different types of data embedded in them (like charts and tables). But still, it\u2019s a tractable problem.</p>\n<p>For example, when the <a href="https://en.wikipedia.org/wiki/Panama_Papers">Panama Papers</a> leaked last year, it took an international team of 400 journalists from 100 news organizations to sift through the 4.8 million emails, three million database entries, two million PDFs, one million images and 320,000 text documents that an unknown party exfiltrated from Mossack Fonseca. Using <a href="http://lucene.apache.org/solr/">Apache Solr</a> and <a href="https://tika.apache.org/">Apache Tika</a> to index and search through the data, journalists were able to map the network of shady dealings and tax sheltering schemes of some of the world\u2019s most powerful people and corporations.</p>\n<p>It may have taken hundreds of people around the world almost a year to process through all the records, but it was doable.</p>\n<h1 id="speech-search-was-hard-until-now">Speech Search Was Hard, Until Now</h1>\n<p>Searching through recordings is really difficult. In terms of workflow, usually the raw audio is transcribed into text, which is then fed into a search tool. If you transcribe using human transcription, it\u2019s too time consuming and expensive. If you try to do it with automatic speech-to-text then search accuracy is the problem. Deepgram fixed that.</p>\n<p>Deepgram finds speech with A.I.</p>\n<p>Deepgram is an artificial intelligence tool that makes searching for keywords in speeches, private conversations and phone calls faster, cheaper and easier than the old way of doing things. Deepgram indexes audio files in more than half the time of a human transcriber, and <strong>costs only 75\xA2 per hour of audio</strong>. Compare that to the 75\xA2 <em>per minute</em> charged by most human transcription services-it\u2019s a pretty good deal.</p>\n<p>And, Deepgram takes out the extra step of feeding transcriptions into a search platform. You can search for keywords directly within the audio recording, and jump straight to the times the keyword was mentioned in the audio. This lets reporters listen for intonation and inflection, which are totally lost during the transcription process. Deepgram makes finding the timestamp of those sound bites a breeze (I\u2019m looking at you radio and podcast producers).</p>\n<h1 id="search-all-speech-with-deepgram">Search All Speech With Deepgram</h1>\n<p>Deepgram is a powerful \u201Cspeech search engine\u201D that makes the process of identifying key words and phrases in speeches and other spoken-word audio recordings fast and easy.</p>\n<p>Deepgram is great for finding bits and pieces of single speeches, and its equally great at searching through a library of audio data. Let\u2019s say you came into possession of audio recordings of Hillary Clinton\u2019s speeches to big Wall Street firms like Goldman Sachs. You could load them all into Deepgram and use keyword searches to suss out the unifying themes of her speeches.</p>\n<p>A more practical use case could involve loading all of a candidate\u2019s speeches, television appearances, etc. into Deepgram and search for hot-button issues. You could identify the moments when candidates change their positions on a certain topic, or correct them on the fly when they deny that they\u2019d said a particular thing.</p>\n<h1 id="you-need-this">You Need This</h1>\n<p>Deepgram\u2019s speech search engine won\u2019t replace researchers and investigative reporters, but it will make them faster and more effective. Now you can search through dozens or thousands of hours of audio recordings quickly, easily, and without the hassle and expense of transcription.</p>\n<p>If you\u2019re a journalist or news organization and want to see how Deepgram can fit into your workflow, <a href="https://deepgram.com/contact-us/">reach out and say hello</a>.</p>\n<hr>\n<p>With contribution from <a href="https://twitter.com/Jason_Rowley">Jason D. Rowley</a>. Image: Gage Skidmore from <a href="https://www.flickr.com/photos/gageskidmore/8567825104">Flickr</a>.</p>' };
const frontmatter = { "title": "New Tech Lets Journalists Find Damning Soundbites", "description": "Read about how audio search can support journalists.", "date": "2016-10-10T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1662069399/blog/new-tech-lets-journalists-find-damning-soundbites/placeholder-post-image%402x.jpg", "authors": ["scott-stephenson"], "category": "speech-trends", "tags": ["deep-learning"], "seo": { "title": "New Tech Lets Journalists Find Damning Soundbites", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1662069399/blog/new-tech-lets-journalists-find-damning-soundbites/placeholder-post-image%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/e5a9e23", "twitter": "https://dpgr.am/4cfc308", "linkedin": "https://dpgr.am/5850ede", "reddit": "https://dpgr.am/3ebbba5", "facebook": "https://dpgr.am/6d8b661" }, "astro": { "headings": [{ "depth": 1, "slug": "the-situation", "text": "The situation" }, { "depth": 1, "slug": "text-search-is-pretty-easy", "text": "Text Search is Pretty Easy" }, { "depth": 1, "slug": "speech-search-was-hard-until-now", "text": "Speech Search Was Hard, Until Now" }, { "depth": 1, "slug": "search-all-speech-with-deepgram", "text": "Search All Speech With Deepgram" }, { "depth": 1, "slug": "you-need-this", "text": "You Need This" }], "source": `Today, we're one month away from election day, and the race for the presidency is closing in on the home stretch. Newsrooms around the country are buzzing with activity: interviews, fact checking, reporting and, of course, combing through huge quantities of videos and recordings of both candidates, hunting for that juicy soundbite that might change public opinion and the course of the election.

Here's an example. I uploaded the entirety of Donald Trump's speech at the Republican National Convention from July 2016 to Deepgram. Now you can search through it just like you would with text.

Search for 'jobs', then listen.

Try also searching for:

* taxes
* women
* security
* tremendous
* really
* "I love"
* Hillary
* destruction
* white house
* "I'm with her"

You get taken to the exact time when those terms were mentioned during his speech. Click the red timeline markers to jump through the video to hear each audio clip. This is really fun but also shows ***the power of speech search***.

# The situation

The *Washington Post*'s [David A. Fahrenthold brought to light one such bombshell of a clip](https://www.washingtonpost.com/politics/trump-recorded-having-extremely-lewd-conversation-about-women-in-2005/2016/10/07/3b9ce776-8cb4-11e6-bf8a-3d26847eeed4_story.html), in which Republican candidate Donald Trump was recorded saying a number of things that most would consider very offensive. It's unclear whether the clip, which was recorded in 2005, will make a significant impact on this election. After all, at the time of writing, this news only broke 24 hours ago.

But there is one thing that *is* clear: Fahrenthold is one heck of an investigative journalist. Regardless of which side of the political aisle you sit on, we can all agree that the world would be a better place if there were more journalists with the wherewithal to slog through reams of documents and countless hours of audio and video.

# Text Search is Pretty Easy

If processing this information wasn't so labor intensive, it's likely that there *would* be more Fahrentholds out there. Document search is relatively easy today. If the documents are already digital, searching for keywords is trivially easy. If they're on paper, then it's simply a matter of scanning in the documents, using optical character recognition to transform images of text into text data and then performing keyword searches.

Google and Ctrl+F have been around for a while

Text search only gets challenging when dealing with a huge corpus of documents with different types of data embedded in them (like charts and tables). But still, it's a tractable problem.

For example, when the [Panama Papers](https://en.wikipedia.org/wiki/Panama_Papers) leaked last year, it took an international team of 400 journalists from 100 news organizations to sift through the 4.8 million emails, three million database entries, two million PDFs, one million images and 320,000 text documents that an unknown party exfiltrated from Mossack Fonseca. Using [Apache Solr](http://lucene.apache.org/solr/) and [Apache Tika](https://tika.apache.org/) to index and search through the data, journalists were able to map the network of shady dealings and tax sheltering schemes of some of the world's most powerful people and corporations.

It may have taken hundreds of people around the world almost a year to process through all the records, but it was doable.

# Speech Search Was Hard, Until Now

Searching through recordings is really difficult. In terms of workflow, usually the raw audio is transcribed into text, which is then fed into a search tool. If you transcribe using human transcription, it's too time consuming and expensive. If you try to do it with automatic speech-to-text then search accuracy is the problem. Deepgram fixed that.

Deepgram finds speech with A.I.

Deepgram is an artificial intelligence tool that makes searching for keywords in speeches, private conversations and phone calls faster, cheaper and easier than the old way of doing things. Deepgram indexes audio files in more than half the time of a human transcriber, and **costs only 75\xA2 per hour of audio**. Compare that to the 75\xA2 *per minute* charged by most human transcription services-it's a pretty good deal.

And, Deepgram takes out the extra step of feeding transcriptions into a search platform. You can search for keywords directly within the audio recording, and jump straight to the times the keyword was mentioned in the audio. This lets reporters listen for intonation and inflection, which are totally lost during the transcription process. Deepgram makes finding the timestamp of those sound bites a breeze (I'm looking at you radio and podcast producers).

# Search All Speech With Deepgram

Deepgram is a powerful "speech search engine" that makes the process of identifying key words and phrases in speeches and other spoken-word audio recordings fast and easy.

Deepgram is great for finding bits and pieces of single speeches, and its equally great at searching through a library of audio data. Let's say you came into possession of audio recordings of Hillary Clinton's speeches to big Wall Street firms like Goldman Sachs. You could load them all into Deepgram and use keyword searches to suss out the unifying themes of her speeches.

A more practical use case could involve loading all of a candidate's speeches, television appearances, etc. into Deepgram and search for hot-button issues. You could identify the moments when candidates change their positions on a certain topic, or correct them on the fly when they deny that they'd said a particular thing.

# You Need This

Deepgram's speech search engine won't replace researchers and investigative reporters, but it will make them faster and more effective. Now you can search through dozens or thousands of hours of audio recordings quickly, easily, and without the hassle and expense of transcription.

If you're a journalist or news organization and want to see how Deepgram can fit into your workflow, [reach out and say hello](https://deepgram.com/contact-us/).

- - -

With contribution from [Jason D. Rowley](https://twitter.com/Jason_Rowley). Image: Gage Skidmore from [Flickr](https://www.flickr.com/photos/gageskidmore/8567825104).`, "html": '<p>Today, we\u2019re one month away from election day, and the race for the presidency is closing in on the home stretch. Newsrooms around the country are buzzing with activity: interviews, fact checking, reporting and, of course, combing through huge quantities of videos and recordings of both candidates, hunting for that juicy soundbite that might change public opinion and the course of the election.</p>\n<p>Here\u2019s an example. I uploaded the entirety of Donald Trump\u2019s speech at the Republican National Convention from July 2016 to Deepgram. Now you can search through it just like you would with text.</p>\n<p>Search for \u2018jobs\u2019, then listen.</p>\n<p>Try also searching for:</p>\n<ul>\n<li>taxes</li>\n<li>women</li>\n<li>security</li>\n<li>tremendous</li>\n<li>really</li>\n<li>\u201CI love\u201D</li>\n<li>Hillary</li>\n<li>destruction</li>\n<li>white house</li>\n<li>\u201CI\u2019m with her\u201D</li>\n</ul>\n<p>You get taken to the exact time when those terms were mentioned during his speech. Click the red timeline markers to jump through the video to hear each audio clip. This is really fun but also shows <em><strong>the power of speech search</strong></em>.</p>\n<h1 id="the-situation">The situation</h1>\n<p>The <em>Washington Post</em>\u2019s <a href="https://www.washingtonpost.com/politics/trump-recorded-having-extremely-lewd-conversation-about-women-in-2005/2016/10/07/3b9ce776-8cb4-11e6-bf8a-3d26847eeed4_story.html">David A. Fahrenthold brought to light one such bombshell of a clip</a>, in which Republican candidate Donald Trump was recorded saying a number of things that most would consider very offensive. It\u2019s unclear whether the clip, which was recorded in 2005, will make a significant impact on this election. After all, at the time of writing, this news only broke 24 hours ago.</p>\n<p>But there is one thing that <em>is</em> clear: Fahrenthold is one heck of an investigative journalist. Regardless of which side of the political aisle you sit on, we can all agree that the world would be a better place if there were more journalists with the wherewithal to slog through reams of documents and countless hours of audio and video.</p>\n<h1 id="text-search-is-pretty-easy">Text Search is Pretty Easy</h1>\n<p>If processing this information wasn\u2019t so labor intensive, it\u2019s likely that there <em>would</em> be more Fahrentholds out there. Document search is relatively easy today. If the documents are already digital, searching for keywords is trivially easy. If they\u2019re on paper, then it\u2019s simply a matter of scanning in the documents, using optical character recognition to transform images of text into text data and then performing keyword searches.</p>\n<p>Google and Ctrl+F have been around for a while</p>\n<p>Text search only gets challenging when dealing with a huge corpus of documents with different types of data embedded in them (like charts and tables). But still, it\u2019s a tractable problem.</p>\n<p>For example, when the <a href="https://en.wikipedia.org/wiki/Panama_Papers">Panama Papers</a> leaked last year, it took an international team of 400 journalists from 100 news organizations to sift through the 4.8 million emails, three million database entries, two million PDFs, one million images and 320,000 text documents that an unknown party exfiltrated from Mossack Fonseca. Using <a href="http://lucene.apache.org/solr/">Apache Solr</a> and <a href="https://tika.apache.org/">Apache Tika</a> to index and search through the data, journalists were able to map the network of shady dealings and tax sheltering schemes of some of the world\u2019s most powerful people and corporations.</p>\n<p>It may have taken hundreds of people around the world almost a year to process through all the records, but it was doable.</p>\n<h1 id="speech-search-was-hard-until-now">Speech Search Was Hard, Until Now</h1>\n<p>Searching through recordings is really difficult. In terms of workflow, usually the raw audio is transcribed into text, which is then fed into a search tool. If you transcribe using human transcription, it\u2019s too time consuming and expensive. If you try to do it with automatic speech-to-text then search accuracy is the problem. Deepgram fixed that.</p>\n<p>Deepgram finds speech with A.I.</p>\n<p>Deepgram is an artificial intelligence tool that makes searching for keywords in speeches, private conversations and phone calls faster, cheaper and easier than the old way of doing things. Deepgram indexes audio files in more than half the time of a human transcriber, and <strong>costs only 75\xA2 per hour of audio</strong>. Compare that to the 75\xA2 <em>per minute</em> charged by most human transcription services-it\u2019s a pretty good deal.</p>\n<p>And, Deepgram takes out the extra step of feeding transcriptions into a search platform. You can search for keywords directly within the audio recording, and jump straight to the times the keyword was mentioned in the audio. This lets reporters listen for intonation and inflection, which are totally lost during the transcription process. Deepgram makes finding the timestamp of those sound bites a breeze (I\u2019m looking at you radio and podcast producers).</p>\n<h1 id="search-all-speech-with-deepgram">Search All Speech With Deepgram</h1>\n<p>Deepgram is a powerful \u201Cspeech search engine\u201D that makes the process of identifying key words and phrases in speeches and other spoken-word audio recordings fast and easy.</p>\n<p>Deepgram is great for finding bits and pieces of single speeches, and its equally great at searching through a library of audio data. Let\u2019s say you came into possession of audio recordings of Hillary Clinton\u2019s speeches to big Wall Street firms like Goldman Sachs. You could load them all into Deepgram and use keyword searches to suss out the unifying themes of her speeches.</p>\n<p>A more practical use case could involve loading all of a candidate\u2019s speeches, television appearances, etc. into Deepgram and search for hot-button issues. You could identify the moments when candidates change their positions on a certain topic, or correct them on the fly when they deny that they\u2019d said a particular thing.</p>\n<h1 id="you-need-this">You Need This</h1>\n<p>Deepgram\u2019s speech search engine won\u2019t replace researchers and investigative reporters, but it will make them faster and more effective. Now you can search through dozens or thousands of hours of audio recordings quickly, easily, and without the hassle and expense of transcription.</p>\n<p>If you\u2019re a journalist or news organization and want to see how Deepgram can fit into your workflow, <a href="https://deepgram.com/contact-us/">reach out and say hello</a>.</p>\n<hr>\n<p>With contribution from <a href="https://twitter.com/Jason_Rowley">Jason D. Rowley</a>. Image: Gage Skidmore from <a href="https://www.flickr.com/photos/gageskidmore/8567825104">Flickr</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/new-tech-lets-journalists-find-damning-soundbites/index.md" };
function rawContent() {
  return `Today, we're one month away from election day, and the race for the presidency is closing in on the home stretch. Newsrooms around the country are buzzing with activity: interviews, fact checking, reporting and, of course, combing through huge quantities of videos and recordings of both candidates, hunting for that juicy soundbite that might change public opinion and the course of the election.

Here's an example. I uploaded the entirety of Donald Trump's speech at the Republican National Convention from July 2016 to Deepgram. Now you can search through it just like you would with text.

Search for 'jobs', then listen.

Try also searching for:

* taxes
* women
* security
* tremendous
* really
* "I love"
* Hillary
* destruction
* white house
* "I'm with her"

You get taken to the exact time when those terms were mentioned during his speech. Click the red timeline markers to jump through the video to hear each audio clip. This is really fun but also shows ***the power of speech search***.

# The situation

The *Washington Post*'s [David A. Fahrenthold brought to light one such bombshell of a clip](https://www.washingtonpost.com/politics/trump-recorded-having-extremely-lewd-conversation-about-women-in-2005/2016/10/07/3b9ce776-8cb4-11e6-bf8a-3d26847eeed4_story.html), in which Republican candidate Donald Trump was recorded saying a number of things that most would consider very offensive. It's unclear whether the clip, which was recorded in 2005, will make a significant impact on this election. After all, at the time of writing, this news only broke 24 hours ago.

But there is one thing that *is* clear: Fahrenthold is one heck of an investigative journalist. Regardless of which side of the political aisle you sit on, we can all agree that the world would be a better place if there were more journalists with the wherewithal to slog through reams of documents and countless hours of audio and video.

# Text Search is Pretty Easy

If processing this information wasn't so labor intensive, it's likely that there *would* be more Fahrentholds out there. Document search is relatively easy today. If the documents are already digital, searching for keywords is trivially easy. If they're on paper, then it's simply a matter of scanning in the documents, using optical character recognition to transform images of text into text data and then performing keyword searches.

Google and Ctrl+F have been around for a while

Text search only gets challenging when dealing with a huge corpus of documents with different types of data embedded in them (like charts and tables). But still, it's a tractable problem.

For example, when the [Panama Papers](https://en.wikipedia.org/wiki/Panama_Papers) leaked last year, it took an international team of 400 journalists from 100 news organizations to sift through the 4.8 million emails, three million database entries, two million PDFs, one million images and 320,000 text documents that an unknown party exfiltrated from Mossack Fonseca. Using [Apache Solr](http://lucene.apache.org/solr/) and [Apache Tika](https://tika.apache.org/) to index and search through the data, journalists were able to map the network of shady dealings and tax sheltering schemes of some of the world's most powerful people and corporations.

It may have taken hundreds of people around the world almost a year to process through all the records, but it was doable.

# Speech Search Was Hard, Until Now

Searching through recordings is really difficult. In terms of workflow, usually the raw audio is transcribed into text, which is then fed into a search tool. If you transcribe using human transcription, it's too time consuming and expensive. If you try to do it with automatic speech-to-text then search accuracy is the problem. Deepgram fixed that.

Deepgram finds speech with A.I.

Deepgram is an artificial intelligence tool that makes searching for keywords in speeches, private conversations and phone calls faster, cheaper and easier than the old way of doing things. Deepgram indexes audio files in more than half the time of a human transcriber, and **costs only 75\xA2 per hour of audio**. Compare that to the 75\xA2 *per minute* charged by most human transcription services-it's a pretty good deal.

And, Deepgram takes out the extra step of feeding transcriptions into a search platform. You can search for keywords directly within the audio recording, and jump straight to the times the keyword was mentioned in the audio. This lets reporters listen for intonation and inflection, which are totally lost during the transcription process. Deepgram makes finding the timestamp of those sound bites a breeze (I'm looking at you radio and podcast producers).

# Search All Speech With Deepgram

Deepgram is a powerful "speech search engine" that makes the process of identifying key words and phrases in speeches and other spoken-word audio recordings fast and easy.

Deepgram is great for finding bits and pieces of single speeches, and its equally great at searching through a library of audio data. Let's say you came into possession of audio recordings of Hillary Clinton's speeches to big Wall Street firms like Goldman Sachs. You could load them all into Deepgram and use keyword searches to suss out the unifying themes of her speeches.

A more practical use case could involve loading all of a candidate's speeches, television appearances, etc. into Deepgram and search for hot-button issues. You could identify the moments when candidates change their positions on a certain topic, or correct them on the fly when they deny that they'd said a particular thing.

# You Need This

Deepgram's speech search engine won't replace researchers and investigative reporters, but it will make them faster and more effective. Now you can search through dozens or thousands of hours of audio recordings quickly, easily, and without the hassle and expense of transcription.

If you're a journalist or news organization and want to see how Deepgram can fit into your workflow, [reach out and say hello](https://deepgram.com/contact-us/).

- - -

With contribution from [Jason D. Rowley](https://twitter.com/Jason_Rowley). Image: Gage Skidmore from [Flickr](https://www.flickr.com/photos/gageskidmore/8567825104).`;
}
function compiledContent() {
  return '<p>Today, we\u2019re one month away from election day, and the race for the presidency is closing in on the home stretch. Newsrooms around the country are buzzing with activity: interviews, fact checking, reporting and, of course, combing through huge quantities of videos and recordings of both candidates, hunting for that juicy soundbite that might change public opinion and the course of the election.</p>\n<p>Here\u2019s an example. I uploaded the entirety of Donald Trump\u2019s speech at the Republican National Convention from July 2016 to Deepgram. Now you can search through it just like you would with text.</p>\n<p>Search for \u2018jobs\u2019, then listen.</p>\n<p>Try also searching for:</p>\n<ul>\n<li>taxes</li>\n<li>women</li>\n<li>security</li>\n<li>tremendous</li>\n<li>really</li>\n<li>\u201CI love\u201D</li>\n<li>Hillary</li>\n<li>destruction</li>\n<li>white house</li>\n<li>\u201CI\u2019m with her\u201D</li>\n</ul>\n<p>You get taken to the exact time when those terms were mentioned during his speech. Click the red timeline markers to jump through the video to hear each audio clip. This is really fun but also shows <em><strong>the power of speech search</strong></em>.</p>\n<h1 id="the-situation">The situation</h1>\n<p>The <em>Washington Post</em>\u2019s <a href="https://www.washingtonpost.com/politics/trump-recorded-having-extremely-lewd-conversation-about-women-in-2005/2016/10/07/3b9ce776-8cb4-11e6-bf8a-3d26847eeed4_story.html">David A. Fahrenthold brought to light one such bombshell of a clip</a>, in which Republican candidate Donald Trump was recorded saying a number of things that most would consider very offensive. It\u2019s unclear whether the clip, which was recorded in 2005, will make a significant impact on this election. After all, at the time of writing, this news only broke 24 hours ago.</p>\n<p>But there is one thing that <em>is</em> clear: Fahrenthold is one heck of an investigative journalist. Regardless of which side of the political aisle you sit on, we can all agree that the world would be a better place if there were more journalists with the wherewithal to slog through reams of documents and countless hours of audio and video.</p>\n<h1 id="text-search-is-pretty-easy">Text Search is Pretty Easy</h1>\n<p>If processing this information wasn\u2019t so labor intensive, it\u2019s likely that there <em>would</em> be more Fahrentholds out there. Document search is relatively easy today. If the documents are already digital, searching for keywords is trivially easy. If they\u2019re on paper, then it\u2019s simply a matter of scanning in the documents, using optical character recognition to transform images of text into text data and then performing keyword searches.</p>\n<p>Google and Ctrl+F have been around for a while</p>\n<p>Text search only gets challenging when dealing with a huge corpus of documents with different types of data embedded in them (like charts and tables). But still, it\u2019s a tractable problem.</p>\n<p>For example, when the <a href="https://en.wikipedia.org/wiki/Panama_Papers">Panama Papers</a> leaked last year, it took an international team of 400 journalists from 100 news organizations to sift through the 4.8 million emails, three million database entries, two million PDFs, one million images and 320,000 text documents that an unknown party exfiltrated from Mossack Fonseca. Using <a href="http://lucene.apache.org/solr/">Apache Solr</a> and <a href="https://tika.apache.org/">Apache Tika</a> to index and search through the data, journalists were able to map the network of shady dealings and tax sheltering schemes of some of the world\u2019s most powerful people and corporations.</p>\n<p>It may have taken hundreds of people around the world almost a year to process through all the records, but it was doable.</p>\n<h1 id="speech-search-was-hard-until-now">Speech Search Was Hard, Until Now</h1>\n<p>Searching through recordings is really difficult. In terms of workflow, usually the raw audio is transcribed into text, which is then fed into a search tool. If you transcribe using human transcription, it\u2019s too time consuming and expensive. If you try to do it with automatic speech-to-text then search accuracy is the problem. Deepgram fixed that.</p>\n<p>Deepgram finds speech with A.I.</p>\n<p>Deepgram is an artificial intelligence tool that makes searching for keywords in speeches, private conversations and phone calls faster, cheaper and easier than the old way of doing things. Deepgram indexes audio files in more than half the time of a human transcriber, and <strong>costs only 75\xA2 per hour of audio</strong>. Compare that to the 75\xA2 <em>per minute</em> charged by most human transcription services-it\u2019s a pretty good deal.</p>\n<p>And, Deepgram takes out the extra step of feeding transcriptions into a search platform. You can search for keywords directly within the audio recording, and jump straight to the times the keyword was mentioned in the audio. This lets reporters listen for intonation and inflection, which are totally lost during the transcription process. Deepgram makes finding the timestamp of those sound bites a breeze (I\u2019m looking at you radio and podcast producers).</p>\n<h1 id="search-all-speech-with-deepgram">Search All Speech With Deepgram</h1>\n<p>Deepgram is a powerful \u201Cspeech search engine\u201D that makes the process of identifying key words and phrases in speeches and other spoken-word audio recordings fast and easy.</p>\n<p>Deepgram is great for finding bits and pieces of single speeches, and its equally great at searching through a library of audio data. Let\u2019s say you came into possession of audio recordings of Hillary Clinton\u2019s speeches to big Wall Street firms like Goldman Sachs. You could load them all into Deepgram and use keyword searches to suss out the unifying themes of her speeches.</p>\n<p>A more practical use case could involve loading all of a candidate\u2019s speeches, television appearances, etc. into Deepgram and search for hot-button issues. You could identify the moments when candidates change their positions on a certain topic, or correct them on the fly when they deny that they\u2019d said a particular thing.</p>\n<h1 id="you-need-this">You Need This</h1>\n<p>Deepgram\u2019s speech search engine won\u2019t replace researchers and investigative reporters, but it will make them faster and more effective. Now you can search through dozens or thousands of hours of audio recordings quickly, easily, and without the hassle and expense of transcription.</p>\n<p>If you\u2019re a journalist or news organization and want to see how Deepgram can fit into your workflow, <a href="https://deepgram.com/contact-us/">reach out and say hello</a>.</p>\n<hr>\n<p>With contribution from <a href="https://twitter.com/Jason_Rowley">Jason D. Rowley</a>. Image: Gage Skidmore from <a href="https://www.flickr.com/photos/gageskidmore/8567825104">Flickr</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/new-tech-lets-journalists-find-damning-soundbites/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Today, we’re one month away from election day, and the race for the presidency is closing in on the home stretch. Newsrooms around the country are buzzing with activity: interviews, fact checking, reporting and, of course, combing through huge quantities of videos and recordings of both candidates, hunting for that juicy soundbite that might change public opinion and the course of the election.</p>
<p>Here’s an example. I uploaded the entirety of Donald Trump’s speech at the Republican National Convention from July 2016 to Deepgram. Now you can search through it just like you would with text.</p>
<p>Search for ‘jobs’, then listen.</p>
<p>Try also searching for:</p>
<ul>
<li>taxes</li>
<li>women</li>
<li>security</li>
<li>tremendous</li>
<li>really</li>
<li>“I love”</li>
<li>Hillary</li>
<li>destruction</li>
<li>white house</li>
<li>“I’m with her”</li>
</ul>
<p>You get taken to the exact time when those terms were mentioned during his speech. Click the red timeline markers to jump through the video to hear each audio clip. This is really fun but also shows <em><strong>the power of speech search</strong></em>.</p>
<h1 id="the-situation">The situation</h1>
<p>The <em>Washington Post</em>’s <a href="https://www.washingtonpost.com/politics/trump-recorded-having-extremely-lewd-conversation-about-women-in-2005/2016/10/07/3b9ce776-8cb4-11e6-bf8a-3d26847eeed4_story.html">David A. Fahrenthold brought to light one such bombshell of a clip</a>, in which Republican candidate Donald Trump was recorded saying a number of things that most would consider very offensive. It’s unclear whether the clip, which was recorded in 2005, will make a significant impact on this election. After all, at the time of writing, this news only broke 24 hours ago.</p>
<p>But there is one thing that <em>is</em> clear: Fahrenthold is one heck of an investigative journalist. Regardless of which side of the political aisle you sit on, we can all agree that the world would be a better place if there were more journalists with the wherewithal to slog through reams of documents and countless hours of audio and video.</p>
<h1 id="text-search-is-pretty-easy">Text Search is Pretty Easy</h1>
<p>If processing this information wasn’t so labor intensive, it’s likely that there <em>would</em> be more Fahrentholds out there. Document search is relatively easy today. If the documents are already digital, searching for keywords is trivially easy. If they’re on paper, then it’s simply a matter of scanning in the documents, using optical character recognition to transform images of text into text data and then performing keyword searches.</p>
<p>Google and Ctrl+F have been around for a while</p>
<p>Text search only gets challenging when dealing with a huge corpus of documents with different types of data embedded in them (like charts and tables). But still, it’s a tractable problem.</p>
<p>For example, when the <a href="https://en.wikipedia.org/wiki/Panama_Papers">Panama Papers</a> leaked last year, it took an international team of 400 journalists from 100 news organizations to sift through the 4.8 million emails, three million database entries, two million PDFs, one million images and 320,000 text documents that an unknown party exfiltrated from Mossack Fonseca. Using <a href="http://lucene.apache.org/solr/">Apache Solr</a> and <a href="https://tika.apache.org/">Apache Tika</a> to index and search through the data, journalists were able to map the network of shady dealings and tax sheltering schemes of some of the world’s most powerful people and corporations.</p>
<p>It may have taken hundreds of people around the world almost a year to process through all the records, but it was doable.</p>
<h1 id="speech-search-was-hard-until-now">Speech Search Was Hard, Until Now</h1>
<p>Searching through recordings is really difficult. In terms of workflow, usually the raw audio is transcribed into text, which is then fed into a search tool. If you transcribe using human transcription, it’s too time consuming and expensive. If you try to do it with automatic speech-to-text then search accuracy is the problem. Deepgram fixed that.</p>
<p>Deepgram finds speech with A.I.</p>
<p>Deepgram is an artificial intelligence tool that makes searching for keywords in speeches, private conversations and phone calls faster, cheaper and easier than the old way of doing things. Deepgram indexes audio files in more than half the time of a human transcriber, and <strong>costs only 75¢ per hour of audio</strong>. Compare that to the 75¢ <em>per minute</em> charged by most human transcription services-it’s a pretty good deal.</p>
<p>And, Deepgram takes out the extra step of feeding transcriptions into a search platform. You can search for keywords directly within the audio recording, and jump straight to the times the keyword was mentioned in the audio. This lets reporters listen for intonation and inflection, which are totally lost during the transcription process. Deepgram makes finding the timestamp of those sound bites a breeze (I’m looking at you radio and podcast producers).</p>
<h1 id="search-all-speech-with-deepgram">Search All Speech With Deepgram</h1>
<p>Deepgram is a powerful “speech search engine” that makes the process of identifying key words and phrases in speeches and other spoken-word audio recordings fast and easy.</p>
<p>Deepgram is great for finding bits and pieces of single speeches, and its equally great at searching through a library of audio data. Let’s say you came into possession of audio recordings of Hillary Clinton’s speeches to big Wall Street firms like Goldman Sachs. You could load them all into Deepgram and use keyword searches to suss out the unifying themes of her speeches.</p>
<p>A more practical use case could involve loading all of a candidate’s speeches, television appearances, etc. into Deepgram and search for hot-button issues. You could identify the moments when candidates change their positions on a certain topic, or correct them on the fly when they deny that they’d said a particular thing.</p>
<h1 id="you-need-this">You Need This</h1>
<p>Deepgram’s speech search engine won’t replace researchers and investigative reporters, but it will make them faster and more effective. Now you can search through dozens or thousands of hours of audio recordings quickly, easily, and without the hassle and expense of transcription.</p>
<p>If you’re a journalist or news organization and want to see how Deepgram can fit into your workflow, <a href="https://deepgram.com/contact-us/">reach out and say hello</a>.</p>
<hr>
<p>With contribution from <a href="https://twitter.com/Jason_Rowley">Jason D. Rowley</a>. Image: Gage Skidmore from <a href="https://www.flickr.com/photos/gageskidmore/8567825104">Flickr</a>.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/new-tech-lets-journalists-find-damning-soundbites/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
