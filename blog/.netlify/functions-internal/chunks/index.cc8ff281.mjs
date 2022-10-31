import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../entry.mjs';
import Slugger from 'github-slugger';
import '@astrojs/netlify/netlify-functions.js';
import 'preact';
import 'preact-render-to-string';
import 'vue';
import 'vue/server-renderer';
import 'html-escaper';
import 'node-html-parser';
/* empty css                           */import 'axios';
/* empty css                          *//* empty css                           *//* empty css                          *//* empty css                              *//* empty css                              */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           *//* empty css                              */import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [{ "depth": 2, "slug": "building-airnote", "text": "Building AirNote" }], "source": `\r
The team behind AirNote wanted to bring a fun and novel way to collaborate around note-taking. I sat down with [Peter Zhang](https://pzhang.net), [Shuntian Liu](https://www.linkedin.com/in/shuntian-liu-27b839170/), [Sudarshan Sreeram](https://www.linkedin.com/in/sudarshan-sreeram/), and [Tom Zhao](https://www.linkedin.com/in/zhaoxuan0914/) to ask them about their project.\r
\r
This was a project of many 'firsts' for the team, who made the decision to try out technologies they had not built with before.\r
\r
Sudarshan tells me that their interest in Augmented Reality goes back to attending the Apple Worldwide Developer Conference in 2018, where they had a [table-based AR game with iPads](https://developer.apple.com/documentation/arkit/swiftshot_creating_a_game_for_augmented_reality). "AR was an area we wanted to experiment with and often gets overlooked in the wider set of iOS features." he says.\r
\r
Tom continues, "We explored a few demos from the Apple Developer site. They have an AR game project demo, so we explored building a game first, and that naturally evolved into a shared AR workspace."\r
\r
Having seen our [Deepgram 5-minute demo](https://blog.deepgram.com/live-transcription-mic-browser/), they had the idea for AiRNote: an interactive, collaborative note-taking application using Augmented Reality.\r
\r
![An iPhone being held with the camera open pointing at a table. On the table is a green post-it note. Overlaid is a text box with the current speech being displayed, and an 'add note' button at the bottom of the screen.](https://res.cloudinary.com/deepgram/image/upload/v1651110488/blog/2022/04/ar-note-taking-airnote/airnote-pic.png)\r
\r
## Building AirNote\r
\r
Shuntian was in charge of building the app's integration with Deepgram's Speech Recognition API and used our [Live Transcriptions with iOS](https://blog.deepgram.com/ios-live-transcription/) blog post as a starting point. Thankfully, many of the snippets from our iOS post could be copied and pasted, meaning less time learning to use Deepgram and more time focusing on complex parts of their project.\r
\r
Because there were so many new things for the AiRNote team to learn, they had to overcome a number of challenges, including learning how to write a native iOS app with ARKit and RealityKit, how to use Blender to create 3D models of sticky notes and pins, and how to collaborating on an XCode project - which, I'm told, was not the easiest thing to do while using git version control.\r
\r
I only know the most basic concepts in iOS development, but Sudarshan also spoke about an experience I have encountered first-hand - for anything but the most simple apps, the Apple documentation forces developers to go down many rabbit holes to learn the pre-requisite skills needed to be successful.\r
\r
The team managed to overcome their challenges and build a compelling demo that I had the pleasure to try out. For further development, the team wants to add more ways of interacting with other users, such as supporting drawings, file sharing, or even the ability to share any AR object in the session.\r
\r
You can see the code behind [AiRNote on GitHub](https://github.com/lambda-shuttle/Airnote).\r
\r
        `, "html": '<p>The team behind AirNote wanted to bring a fun and novel way to collaborate around note-taking. I sat down with <a href="https://pzhang.net">Peter Zhang</a>, <a href="https://www.linkedin.com/in/shuntian-liu-27b839170/">Shuntian Liu</a>, <a href="https://www.linkedin.com/in/sudarshan-sreeram/">Sudarshan Sreeram</a>, and <a href="https://www.linkedin.com/in/zhaoxuan0914/">Tom Zhao</a> to ask them about their project.</p>\n<p>This was a project of many \u2018firsts\u2019 for the team, who made the decision to try out technologies they had not built with before.</p>\n<p>Sudarshan tells me that their interest in Augmented Reality goes back to attending the Apple Worldwide Developer Conference in 2018, where they had a <a href="https://developer.apple.com/documentation/arkit/swiftshot_creating_a_game_for_augmented_reality">table-based AR game with iPads</a>. \u201CAR was an area we wanted to experiment with and often gets overlooked in the wider set of iOS features.\u201D he says.</p>\n<p>Tom continues, \u201CWe explored a few demos from the Apple Developer site. They have an AR game project demo, so we explored building a game first, and that naturally evolved into a shared AR workspace.\u201D</p>\n<p>Having seen our <a href="https://blog.deepgram.com/live-transcription-mic-browser/">Deepgram 5-minute demo</a>, they had the idea for AiRNote: an interactive, collaborative note-taking application using Augmented Reality.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1651110488/blog/2022/04/ar-note-taking-airnote/airnote-pic.png" alt="An iPhone being held with the camera open pointing at a table. On the table is a green post-it note. Overlaid is a text box with the current speech being displayed, and an &#x27;add note&#x27; button at the bottom of the screen."></p>\n<h2 id="building-airnote">Building AirNote</h2>\n<p>Shuntian was in charge of building the app\u2019s integration with Deepgram\u2019s Speech Recognition API and used our <a href="https://blog.deepgram.com/ios-live-transcription/">Live Transcriptions with iOS</a> blog post as a starting point. Thankfully, many of the snippets from our iOS post could be copied and pasted, meaning less time learning to use Deepgram and more time focusing on complex parts of their project.</p>\n<p>Because there were so many new things for the AiRNote team to learn, they had to overcome a number of challenges, including learning how to write a native iOS app with ARKit and RealityKit, how to use Blender to create 3D models of sticky notes and pins, and how to collaborating on an XCode project - which, I\u2019m told, was not the easiest thing to do while using git version control.</p>\n<p>I only know the most basic concepts in iOS development, but Sudarshan also spoke about an experience I have encountered first-hand - for anything but the most simple apps, the Apple documentation forces developers to go down many rabbit holes to learn the pre-requisite skills needed to be successful.</p>\n<p>The team managed to overcome their challenges and build a compelling demo that I had the pleasure to try out. For further development, the team wants to add more ways of interacting with other users, such as supporting drawings, file sharing, or even the ability to share any AR object in the session.</p>\n<p>You can see the code behind <a href="https://github.com/lambda-shuttle/Airnote">AiRNote on GitHub</a>.</p>' };
const frontmatter = { "title": "Collaborative Augmented Reality Note-Taking with AiRNote", "description": "The team behind AirNote utilized Deepgram's Speech Recognition API to create an app for generating, editing, and customizing AR sticky notes in a collaborative environment. Read more here.", "date": "2022-04-28T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1651110485/blog/2022/04/ar-note-taking-airnote/cover.jpg", "authors": ["kevin-lewis"], "category": "project-showcase", "tags": ["hackathon", "augmented-reality"], "seo": { "title": "Collaborative Augmented Reality Note-Taking with AiRNote", "description": "The team behind AirNote utilized Deepgram's Speech Recognition API to create an app for generating, editing, and customizing AR sticky notes in a collaborative environment. Read more here." }, "shorturls": { "share": "https://dpgr.am/9c55e61", "twitter": "https://dpgr.am/324762a", "linkedin": "https://dpgr.am/79a2e5a", "reddit": "https://dpgr.am/0e48208", "facebook": "https://dpgr.am/72043a0" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661454058/blog/ar-note-taking-airnote/ograph.png" }, "astro": { "headings": [{ "depth": 2, "slug": "building-airnote", "text": "Building AirNote" }], "source": `\r
The team behind AirNote wanted to bring a fun and novel way to collaborate around note-taking. I sat down with [Peter Zhang](https://pzhang.net), [Shuntian Liu](https://www.linkedin.com/in/shuntian-liu-27b839170/), [Sudarshan Sreeram](https://www.linkedin.com/in/sudarshan-sreeram/), and [Tom Zhao](https://www.linkedin.com/in/zhaoxuan0914/) to ask them about their project.\r
\r
This was a project of many 'firsts' for the team, who made the decision to try out technologies they had not built with before.\r
\r
Sudarshan tells me that their interest in Augmented Reality goes back to attending the Apple Worldwide Developer Conference in 2018, where they had a [table-based AR game with iPads](https://developer.apple.com/documentation/arkit/swiftshot_creating_a_game_for_augmented_reality). "AR was an area we wanted to experiment with and often gets overlooked in the wider set of iOS features." he says.\r
\r
Tom continues, "We explored a few demos from the Apple Developer site. They have an AR game project demo, so we explored building a game first, and that naturally evolved into a shared AR workspace."\r
\r
Having seen our [Deepgram 5-minute demo](https://blog.deepgram.com/live-transcription-mic-browser/), they had the idea for AiRNote: an interactive, collaborative note-taking application using Augmented Reality.\r
\r
![An iPhone being held with the camera open pointing at a table. On the table is a green post-it note. Overlaid is a text box with the current speech being displayed, and an 'add note' button at the bottom of the screen.](https://res.cloudinary.com/deepgram/image/upload/v1651110488/blog/2022/04/ar-note-taking-airnote/airnote-pic.png)\r
\r
## Building AirNote\r
\r
Shuntian was in charge of building the app's integration with Deepgram's Speech Recognition API and used our [Live Transcriptions with iOS](https://blog.deepgram.com/ios-live-transcription/) blog post as a starting point. Thankfully, many of the snippets from our iOS post could be copied and pasted, meaning less time learning to use Deepgram and more time focusing on complex parts of their project.\r
\r
Because there were so many new things for the AiRNote team to learn, they had to overcome a number of challenges, including learning how to write a native iOS app with ARKit and RealityKit, how to use Blender to create 3D models of sticky notes and pins, and how to collaborating on an XCode project - which, I'm told, was not the easiest thing to do while using git version control.\r
\r
I only know the most basic concepts in iOS development, but Sudarshan also spoke about an experience I have encountered first-hand - for anything but the most simple apps, the Apple documentation forces developers to go down many rabbit holes to learn the pre-requisite skills needed to be successful.\r
\r
The team managed to overcome their challenges and build a compelling demo that I had the pleasure to try out. For further development, the team wants to add more ways of interacting with other users, such as supporting drawings, file sharing, or even the ability to share any AR object in the session.\r
\r
You can see the code behind [AiRNote on GitHub](https://github.com/lambda-shuttle/Airnote).\r
\r
        `, "html": '<p>The team behind AirNote wanted to bring a fun and novel way to collaborate around note-taking. I sat down with <a href="https://pzhang.net">Peter Zhang</a>, <a href="https://www.linkedin.com/in/shuntian-liu-27b839170/">Shuntian Liu</a>, <a href="https://www.linkedin.com/in/sudarshan-sreeram/">Sudarshan Sreeram</a>, and <a href="https://www.linkedin.com/in/zhaoxuan0914/">Tom Zhao</a> to ask them about their project.</p>\n<p>This was a project of many \u2018firsts\u2019 for the team, who made the decision to try out technologies they had not built with before.</p>\n<p>Sudarshan tells me that their interest in Augmented Reality goes back to attending the Apple Worldwide Developer Conference in 2018, where they had a <a href="https://developer.apple.com/documentation/arkit/swiftshot_creating_a_game_for_augmented_reality">table-based AR game with iPads</a>. \u201CAR was an area we wanted to experiment with and often gets overlooked in the wider set of iOS features.\u201D he says.</p>\n<p>Tom continues, \u201CWe explored a few demos from the Apple Developer site. They have an AR game project demo, so we explored building a game first, and that naturally evolved into a shared AR workspace.\u201D</p>\n<p>Having seen our <a href="https://blog.deepgram.com/live-transcription-mic-browser/">Deepgram 5-minute demo</a>, they had the idea for AiRNote: an interactive, collaborative note-taking application using Augmented Reality.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1651110488/blog/2022/04/ar-note-taking-airnote/airnote-pic.png" alt="An iPhone being held with the camera open pointing at a table. On the table is a green post-it note. Overlaid is a text box with the current speech being displayed, and an &#x27;add note&#x27; button at the bottom of the screen."></p>\n<h2 id="building-airnote">Building AirNote</h2>\n<p>Shuntian was in charge of building the app\u2019s integration with Deepgram\u2019s Speech Recognition API and used our <a href="https://blog.deepgram.com/ios-live-transcription/">Live Transcriptions with iOS</a> blog post as a starting point. Thankfully, many of the snippets from our iOS post could be copied and pasted, meaning less time learning to use Deepgram and more time focusing on complex parts of their project.</p>\n<p>Because there were so many new things for the AiRNote team to learn, they had to overcome a number of challenges, including learning how to write a native iOS app with ARKit and RealityKit, how to use Blender to create 3D models of sticky notes and pins, and how to collaborating on an XCode project - which, I\u2019m told, was not the easiest thing to do while using git version control.</p>\n<p>I only know the most basic concepts in iOS development, but Sudarshan also spoke about an experience I have encountered first-hand - for anything but the most simple apps, the Apple documentation forces developers to go down many rabbit holes to learn the pre-requisite skills needed to be successful.</p>\n<p>The team managed to overcome their challenges and build a compelling demo that I had the pleasure to try out. For further development, the team wants to add more ways of interacting with other users, such as supporting drawings, file sharing, or even the ability to share any AR object in the session.</p>\n<p>You can see the code behind <a href="https://github.com/lambda-shuttle/Airnote">AiRNote on GitHub</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/ar-note-taking-airnote/index.md" };
function rawContent() {
  return `\r
The team behind AirNote wanted to bring a fun and novel way to collaborate around note-taking. I sat down with [Peter Zhang](https://pzhang.net), [Shuntian Liu](https://www.linkedin.com/in/shuntian-liu-27b839170/), [Sudarshan Sreeram](https://www.linkedin.com/in/sudarshan-sreeram/), and [Tom Zhao](https://www.linkedin.com/in/zhaoxuan0914/) to ask them about their project.\r
\r
This was a project of many 'firsts' for the team, who made the decision to try out technologies they had not built with before.\r
\r
Sudarshan tells me that their interest in Augmented Reality goes back to attending the Apple Worldwide Developer Conference in 2018, where they had a [table-based AR game with iPads](https://developer.apple.com/documentation/arkit/swiftshot_creating_a_game_for_augmented_reality). "AR was an area we wanted to experiment with and often gets overlooked in the wider set of iOS features." he says.\r
\r
Tom continues, "We explored a few demos from the Apple Developer site. They have an AR game project demo, so we explored building a game first, and that naturally evolved into a shared AR workspace."\r
\r
Having seen our [Deepgram 5-minute demo](https://blog.deepgram.com/live-transcription-mic-browser/), they had the idea for AiRNote: an interactive, collaborative note-taking application using Augmented Reality.\r
\r
![An iPhone being held with the camera open pointing at a table. On the table is a green post-it note. Overlaid is a text box with the current speech being displayed, and an 'add note' button at the bottom of the screen.](https://res.cloudinary.com/deepgram/image/upload/v1651110488/blog/2022/04/ar-note-taking-airnote/airnote-pic.png)\r
\r
## Building AirNote\r
\r
Shuntian was in charge of building the app's integration with Deepgram's Speech Recognition API and used our [Live Transcriptions with iOS](https://blog.deepgram.com/ios-live-transcription/) blog post as a starting point. Thankfully, many of the snippets from our iOS post could be copied and pasted, meaning less time learning to use Deepgram and more time focusing on complex parts of their project.\r
\r
Because there were so many new things for the AiRNote team to learn, they had to overcome a number of challenges, including learning how to write a native iOS app with ARKit and RealityKit, how to use Blender to create 3D models of sticky notes and pins, and how to collaborating on an XCode project - which, I'm told, was not the easiest thing to do while using git version control.\r
\r
I only know the most basic concepts in iOS development, but Sudarshan also spoke about an experience I have encountered first-hand - for anything but the most simple apps, the Apple documentation forces developers to go down many rabbit holes to learn the pre-requisite skills needed to be successful.\r
\r
The team managed to overcome their challenges and build a compelling demo that I had the pleasure to try out. For further development, the team wants to add more ways of interacting with other users, such as supporting drawings, file sharing, or even the ability to share any AR object in the session.\r
\r
You can see the code behind [AiRNote on GitHub](https://github.com/lambda-shuttle/Airnote).\r
\r
        `;
}
function compiledContent() {
  return '<p>The team behind AirNote wanted to bring a fun and novel way to collaborate around note-taking. I sat down with <a href="https://pzhang.net">Peter Zhang</a>, <a href="https://www.linkedin.com/in/shuntian-liu-27b839170/">Shuntian Liu</a>, <a href="https://www.linkedin.com/in/sudarshan-sreeram/">Sudarshan Sreeram</a>, and <a href="https://www.linkedin.com/in/zhaoxuan0914/">Tom Zhao</a> to ask them about their project.</p>\n<p>This was a project of many \u2018firsts\u2019 for the team, who made the decision to try out technologies they had not built with before.</p>\n<p>Sudarshan tells me that their interest in Augmented Reality goes back to attending the Apple Worldwide Developer Conference in 2018, where they had a <a href="https://developer.apple.com/documentation/arkit/swiftshot_creating_a_game_for_augmented_reality">table-based AR game with iPads</a>. \u201CAR was an area we wanted to experiment with and often gets overlooked in the wider set of iOS features.\u201D he says.</p>\n<p>Tom continues, \u201CWe explored a few demos from the Apple Developer site. They have an AR game project demo, so we explored building a game first, and that naturally evolved into a shared AR workspace.\u201D</p>\n<p>Having seen our <a href="https://blog.deepgram.com/live-transcription-mic-browser/">Deepgram 5-minute demo</a>, they had the idea for AiRNote: an interactive, collaborative note-taking application using Augmented Reality.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1651110488/blog/2022/04/ar-note-taking-airnote/airnote-pic.png" alt="An iPhone being held with the camera open pointing at a table. On the table is a green post-it note. Overlaid is a text box with the current speech being displayed, and an &#x27;add note&#x27; button at the bottom of the screen."></p>\n<h2 id="building-airnote">Building AirNote</h2>\n<p>Shuntian was in charge of building the app\u2019s integration with Deepgram\u2019s Speech Recognition API and used our <a href="https://blog.deepgram.com/ios-live-transcription/">Live Transcriptions with iOS</a> blog post as a starting point. Thankfully, many of the snippets from our iOS post could be copied and pasted, meaning less time learning to use Deepgram and more time focusing on complex parts of their project.</p>\n<p>Because there were so many new things for the AiRNote team to learn, they had to overcome a number of challenges, including learning how to write a native iOS app with ARKit and RealityKit, how to use Blender to create 3D models of sticky notes and pins, and how to collaborating on an XCode project - which, I\u2019m told, was not the easiest thing to do while using git version control.</p>\n<p>I only know the most basic concepts in iOS development, but Sudarshan also spoke about an experience I have encountered first-hand - for anything but the most simple apps, the Apple documentation forces developers to go down many rabbit holes to learn the pre-requisite skills needed to be successful.</p>\n<p>The team managed to overcome their challenges and build a compelling demo that I had the pleasure to try out. For further development, the team wants to add more ways of interacting with other users, such as supporting drawings, file sharing, or even the ability to share any AR object in the session.</p>\n<p>You can see the code behind <a href="https://github.com/lambda-shuttle/Airnote">AiRNote on GitHub</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/ar-note-taking-airnote/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>The team behind AirNote wanted to bring a fun and novel way to collaborate around note-taking. I sat down with <a href="https://pzhang.net">Peter Zhang</a>, <a href="https://www.linkedin.com/in/shuntian-liu-27b839170/">Shuntian Liu</a>, <a href="https://www.linkedin.com/in/sudarshan-sreeram/">Sudarshan Sreeram</a>, and <a href="https://www.linkedin.com/in/zhaoxuan0914/">Tom Zhao</a> to ask them about their project.</p>
<p>This was a project of many ‘firsts’ for the team, who made the decision to try out technologies they had not built with before.</p>
<p>Sudarshan tells me that their interest in Augmented Reality goes back to attending the Apple Worldwide Developer Conference in 2018, where they had a <a href="https://developer.apple.com/documentation/arkit/swiftshot_creating_a_game_for_augmented_reality">table-based AR game with iPads</a>. “AR was an area we wanted to experiment with and often gets overlooked in the wider set of iOS features.” he says.</p>
<p>Tom continues, “We explored a few demos from the Apple Developer site. They have an AR game project demo, so we explored building a game first, and that naturally evolved into a shared AR workspace.”</p>
<p>Having seen our <a href="https://blog.deepgram.com/live-transcription-mic-browser/">Deepgram 5-minute demo</a>, they had the idea for AiRNote: an interactive, collaborative note-taking application using Augmented Reality.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1651110488/blog/2022/04/ar-note-taking-airnote/airnote-pic.png" alt="An iPhone being held with the camera open pointing at a table. On the table is a green post-it note. Overlaid is a text box with the current speech being displayed, and an 'add note' button at the bottom of the screen."></p>
<h2 id="building-airnote">Building AirNote</h2>
<p>Shuntian was in charge of building the app’s integration with Deepgram’s Speech Recognition API and used our <a href="https://blog.deepgram.com/ios-live-transcription/">Live Transcriptions with iOS</a> blog post as a starting point. Thankfully, many of the snippets from our iOS post could be copied and pasted, meaning less time learning to use Deepgram and more time focusing on complex parts of their project.</p>
<p>Because there were so many new things for the AiRNote team to learn, they had to overcome a number of challenges, including learning how to write a native iOS app with ARKit and RealityKit, how to use Blender to create 3D models of sticky notes and pins, and how to collaborating on an XCode project - which, I’m told, was not the easiest thing to do while using git version control.</p>
<p>I only know the most basic concepts in iOS development, but Sudarshan also spoke about an experience I have encountered first-hand - for anything but the most simple apps, the Apple documentation forces developers to go down many rabbit holes to learn the pre-requisite skills needed to be successful.</p>
<p>The team managed to overcome their challenges and build a compelling demo that I had the pleasure to try out. For further development, the team wants to add more ways of interacting with other users, such as supporting drawings, file sharing, or even the ability to share any AR object in the session.</p>
<p>You can see the code behind <a href="https://github.com/lambda-shuttle/Airnote">AiRNote on GitHub</a>.</p>`;
});

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
