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

const metadata = { "headings": [{ "depth": 2, "slug": "how-to-get-access-to-ukrainian-asr", "text": "How to Get Access to Ukrainian ASR" }, { "depth": 2, "slug": "conclusion", "text": "Conclusion" }], "source": `We've been asked by a few different organizations to help with humanitarian efforts in Eastern Europe by creating a speech model to transcribe Ukrainian. Such a model is needed in, for example, call centers that have been set up to help refugees fleeing the conflict. We'd like to offer access to that model to anyone who needs it to help with the current crisis-all Ukrainian speech transcription will be free for at least the next 6 months.

## How to Get Access to Ukrainian ASR

If you'd like to get access to Ukrainian speech-to-text, you can [sign up for a Deepgram account](https://console.deepgram.com/) and select Ukrainian as your audio language in our drop down menu, as seen in the image below. 

![](https://res.cloudinary.com/deepgram/image/upload/v1661976853/blog/speech-to-text-model-ukrainian/image1-1024x732.png) 

To transcribe Ukrainian audio with Deepgram's API, simply add **language=uk** to your transcription requests. You can visit [our documentation](https://developers.deepgram.com/documentation/features/language/) for more information about our language support.

\`\`\`
curl -X POST \\
 -H "Authorization:Token YOUR_API_KEY" \\
 -H 'content-type: application/json' \\
 -d '{"url":"LINK_TO_YOUR_FILE"}' \\
"https://api.deepgram.com/v1/listen?language=uk"
\`\`\`

## Conclusion

We're pleased that we've been able to use [Deepgram's end-to-end approach](https://blog.deepgram.com/deep-learning-speech-recognition/) and transfer learning to quickly train a model for Ukrainian to support those on the ground assisting the Ukrainian people. If there are other languages that would be useful to you, please see our [language page](https://deepgram.com/product/languages/) for a list of all of the models that we currently offer. And if you still have questions or need help getting started, you can reach out to us via the [contact page](https://deepgram.com/contact-us/).`, "html": '<p>We\u2019ve been asked by a few different organizations to help with humanitarian efforts in Eastern Europe by creating a speech model to transcribe Ukrainian. Such a model is needed in, for example, call centers that have been set up to help refugees fleeing the conflict. We\u2019d like to offer access to that model to anyone who needs it to help with the current crisis-all Ukrainian speech transcription will be free for at least the next 6 months.</p>\n<h2 id="how-to-get-access-to-ukrainian-asr">How to Get Access to Ukrainian ASR</h2>\n<p>If you\u2019d like to get access to Ukrainian speech-to-text, you can <a href="https://console.deepgram.com/">sign up for a Deepgram account</a> and select Ukrainian as your audio language in our drop down menu, as seen in the image below.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976853/blog/speech-to-text-model-ukrainian/image1-1024x732.png" alt=""></p>\n<p>To transcribe Ukrainian audio with Deepgram\u2019s API, simply add <strong>language=uk</strong> to your transcription requests. You can visit <a href="https://developers.deepgram.com/documentation/features/language/">our documentation</a> for more information about our language support.</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #c9d1d9">curl -X POST \\</span></span>\n<span class="line"><span style="color: #c9d1d9"> -H &quot;Authorization:Token YOUR_API_KEY&quot; \\</span></span>\n<span class="line"><span style="color: #c9d1d9"> -H &#39;content-type: application/json&#39; \\</span></span>\n<span class="line"><span style="color: #c9d1d9"> -d &#39;{&quot;url&quot;:&quot;LINK_TO_YOUR_FILE&quot;}&#39; \\</span></span>\n<span class="line"><span style="color: #c9d1d9">&quot;https://api.deepgram.com/v1/listen?language=uk&quot;</span></span></code></pre>\n<h2 id="conclusion">Conclusion</h2>\n<p>We\u2019re pleased that we\u2019ve been able to use <a href="https://blog.deepgram.com/deep-learning-speech-recognition/">Deepgram\u2019s end-to-end approach</a> and transfer learning to quickly train a model for Ukrainian to support those on the ground assisting the Ukrainian people. If there are other languages that would be useful to you, please see our <a href="https://deepgram.com/product/languages/">language page</a> for a list of all of the models that we currently offer. And if you still have questions or need help getting started, you can reach out to us via the <a href="https://deepgram.com/contact-us/">contact page</a>.</p>' };
const frontmatter = { "title": "Speech-to-Text Model for Ukrainian Released", "description": "We created a Ukrainian speech-to-text model to help with humanitarian efforts in Eastern Europe. This post explains how to get access to it.", "date": "2022-03-21T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981411/blog/speech-to-text-model-ukrainian/STT-model-for-ukranian-released-thumb-554x220%402x.png", "authors": ["chris-doty"], "category": "product-news", "tags": ["language"], "seo": { "title": "Speech-to-Text Model for Ukrainian Released", "description": "We created a Ukrainian speech-to-text model to help with humanitarian efforts in Eastern Europe. This post explains how to get access to it." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981411/blog/speech-to-text-model-ukrainian/STT-model-for-ukranian-released-thumb-554x220%402x.png" }, "shorturls": { "share": "https://dpgr.am/a6a965c", "twitter": "https://dpgr.am/3cdce26", "linkedin": "https://dpgr.am/1354d71", "reddit": "https://dpgr.am/c87d7dc", "facebook": "https://dpgr.am/8bc4171" }, "astro": { "headings": [{ "depth": 2, "slug": "how-to-get-access-to-ukrainian-asr", "text": "How to Get Access to Ukrainian ASR" }, { "depth": 2, "slug": "conclusion", "text": "Conclusion" }], "source": `We've been asked by a few different organizations to help with humanitarian efforts in Eastern Europe by creating a speech model to transcribe Ukrainian. Such a model is needed in, for example, call centers that have been set up to help refugees fleeing the conflict. We'd like to offer access to that model to anyone who needs it to help with the current crisis-all Ukrainian speech transcription will be free for at least the next 6 months.

## How to Get Access to Ukrainian ASR

If you'd like to get access to Ukrainian speech-to-text, you can [sign up for a Deepgram account](https://console.deepgram.com/) and select Ukrainian as your audio language in our drop down menu, as seen in the image below. 

![](https://res.cloudinary.com/deepgram/image/upload/v1661976853/blog/speech-to-text-model-ukrainian/image1-1024x732.png) 

To transcribe Ukrainian audio with Deepgram's API, simply add **language=uk** to your transcription requests. You can visit [our documentation](https://developers.deepgram.com/documentation/features/language/) for more information about our language support.

\`\`\`
curl -X POST \\
 -H "Authorization:Token YOUR_API_KEY" \\
 -H 'content-type: application/json' \\
 -d '{"url":"LINK_TO_YOUR_FILE"}' \\
"https://api.deepgram.com/v1/listen?language=uk"
\`\`\`

## Conclusion

We're pleased that we've been able to use [Deepgram's end-to-end approach](https://blog.deepgram.com/deep-learning-speech-recognition/) and transfer learning to quickly train a model for Ukrainian to support those on the ground assisting the Ukrainian people. If there are other languages that would be useful to you, please see our [language page](https://deepgram.com/product/languages/) for a list of all of the models that we currently offer. And if you still have questions or need help getting started, you can reach out to us via the [contact page](https://deepgram.com/contact-us/).`, "html": '<p>We\u2019ve been asked by a few different organizations to help with humanitarian efforts in Eastern Europe by creating a speech model to transcribe Ukrainian. Such a model is needed in, for example, call centers that have been set up to help refugees fleeing the conflict. We\u2019d like to offer access to that model to anyone who needs it to help with the current crisis-all Ukrainian speech transcription will be free for at least the next 6 months.</p>\n<h2 id="how-to-get-access-to-ukrainian-asr">How to Get Access to Ukrainian ASR</h2>\n<p>If you\u2019d like to get access to Ukrainian speech-to-text, you can <a href="https://console.deepgram.com/">sign up for a Deepgram account</a> and select Ukrainian as your audio language in our drop down menu, as seen in the image below.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976853/blog/speech-to-text-model-ukrainian/image1-1024x732.png" alt=""></p>\n<p>To transcribe Ukrainian audio with Deepgram\u2019s API, simply add <strong>language=uk</strong> to your transcription requests. You can visit <a href="https://developers.deepgram.com/documentation/features/language/">our documentation</a> for more information about our language support.</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #c9d1d9">curl -X POST \\</span></span>\n<span class="line"><span style="color: #c9d1d9"> -H &quot;Authorization:Token YOUR_API_KEY&quot; \\</span></span>\n<span class="line"><span style="color: #c9d1d9"> -H &#39;content-type: application/json&#39; \\</span></span>\n<span class="line"><span style="color: #c9d1d9"> -d &#39;{&quot;url&quot;:&quot;LINK_TO_YOUR_FILE&quot;}&#39; \\</span></span>\n<span class="line"><span style="color: #c9d1d9">&quot;https://api.deepgram.com/v1/listen?language=uk&quot;</span></span></code></pre>\n<h2 id="conclusion">Conclusion</h2>\n<p>We\u2019re pleased that we\u2019ve been able to use <a href="https://blog.deepgram.com/deep-learning-speech-recognition/">Deepgram\u2019s end-to-end approach</a> and transfer learning to quickly train a model for Ukrainian to support those on the ground assisting the Ukrainian people. If there are other languages that would be useful to you, please see our <a href="https://deepgram.com/product/languages/">language page</a> for a list of all of the models that we currently offer. And if you still have questions or need help getting started, you can reach out to us via the <a href="https://deepgram.com/contact-us/">contact page</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/speech-to-text-model-ukrainian/index.md" };
function rawContent() {
  return `We've been asked by a few different organizations to help with humanitarian efforts in Eastern Europe by creating a speech model to transcribe Ukrainian. Such a model is needed in, for example, call centers that have been set up to help refugees fleeing the conflict. We'd like to offer access to that model to anyone who needs it to help with the current crisis-all Ukrainian speech transcription will be free for at least the next 6 months.

## How to Get Access to Ukrainian ASR

If you'd like to get access to Ukrainian speech-to-text, you can [sign up for a Deepgram account](https://console.deepgram.com/) and select Ukrainian as your audio language in our drop down menu, as seen in the image below. 

![](https://res.cloudinary.com/deepgram/image/upload/v1661976853/blog/speech-to-text-model-ukrainian/image1-1024x732.png) 

To transcribe Ukrainian audio with Deepgram's API, simply add **language=uk** to your transcription requests. You can visit [our documentation](https://developers.deepgram.com/documentation/features/language/) for more information about our language support.

\`\`\`
curl -X POST \\
 -H "Authorization:Token YOUR_API_KEY" \\
 -H 'content-type: application/json' \\
 -d '{"url":"LINK_TO_YOUR_FILE"}' \\
"https://api.deepgram.com/v1/listen?language=uk"
\`\`\`

## Conclusion

We're pleased that we've been able to use [Deepgram's end-to-end approach](https://blog.deepgram.com/deep-learning-speech-recognition/) and transfer learning to quickly train a model for Ukrainian to support those on the ground assisting the Ukrainian people. If there are other languages that would be useful to you, please see our [language page](https://deepgram.com/product/languages/) for a list of all of the models that we currently offer. And if you still have questions or need help getting started, you can reach out to us via the [contact page](https://deepgram.com/contact-us/).`;
}
function compiledContent() {
  return '<p>We\u2019ve been asked by a few different organizations to help with humanitarian efforts in Eastern Europe by creating a speech model to transcribe Ukrainian. Such a model is needed in, for example, call centers that have been set up to help refugees fleeing the conflict. We\u2019d like to offer access to that model to anyone who needs it to help with the current crisis-all Ukrainian speech transcription will be free for at least the next 6 months.</p>\n<h2 id="how-to-get-access-to-ukrainian-asr">How to Get Access to Ukrainian ASR</h2>\n<p>If you\u2019d like to get access to Ukrainian speech-to-text, you can <a href="https://console.deepgram.com/">sign up for a Deepgram account</a> and select Ukrainian as your audio language in our drop down menu, as seen in the image below.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976853/blog/speech-to-text-model-ukrainian/image1-1024x732.png" alt=""></p>\n<p>To transcribe Ukrainian audio with Deepgram\u2019s API, simply add <strong>language=uk</strong> to your transcription requests. You can visit <a href="https://developers.deepgram.com/documentation/features/language/">our documentation</a> for more information about our language support.</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #c9d1d9">curl -X POST \\</span></span>\n<span class="line"><span style="color: #c9d1d9"> -H &quot;Authorization:Token YOUR_API_KEY&quot; \\</span></span>\n<span class="line"><span style="color: #c9d1d9"> -H &#39;content-type: application/json&#39; \\</span></span>\n<span class="line"><span style="color: #c9d1d9"> -d &#39;{&quot;url&quot;:&quot;LINK_TO_YOUR_FILE&quot;}&#39; \\</span></span>\n<span class="line"><span style="color: #c9d1d9">&quot;https://api.deepgram.com/v1/listen?language=uk&quot;</span></span></code></pre>\n<h2 id="conclusion">Conclusion</h2>\n<p>We\u2019re pleased that we\u2019ve been able to use <a href="https://blog.deepgram.com/deep-learning-speech-recognition/">Deepgram\u2019s end-to-end approach</a> and transfer learning to quickly train a model for Ukrainian to support those on the ground assisting the Ukrainian people. If there are other languages that would be useful to you, please see our <a href="https://deepgram.com/product/languages/">language page</a> for a list of all of the models that we currently offer. And if you still have questions or need help getting started, you can reach out to us via the <a href="https://deepgram.com/contact-us/">contact page</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/speech-to-text-model-ukrainian/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>We’ve been asked by a few different organizations to help with humanitarian efforts in Eastern Europe by creating a speech model to transcribe Ukrainian. Such a model is needed in, for example, call centers that have been set up to help refugees fleeing the conflict. We’d like to offer access to that model to anyone who needs it to help with the current crisis-all Ukrainian speech transcription will be free for at least the next 6 months.</p>
<h2 id="how-to-get-access-to-ukrainian-asr">How to Get Access to Ukrainian ASR</h2>
<p>If you’d like to get access to Ukrainian speech-to-text, you can <a href="https://console.deepgram.com/">sign up for a Deepgram account</a> and select Ukrainian as your audio language in our drop down menu, as seen in the image below.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976853/blog/speech-to-text-model-ukrainian/image1-1024x732.png" alt=""></p>
<p>To transcribe Ukrainian audio with Deepgram’s API, simply add <strong>language=uk</strong> to your transcription requests. You can visit <a href="https://developers.deepgram.com/documentation/features/language/">our documentation</a> for more information about our language support.</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #c9d1d9">curl -X POST \\</span></span>
<span class="line"><span style="color: #c9d1d9"> -H &quot;Authorization:Token YOUR_API_KEY&quot; \\</span></span>
<span class="line"><span style="color: #c9d1d9"> -H &#39;content-type: application/json&#39; \\</span></span>
<span class="line"><span style="color: #c9d1d9"> -d &#39;{&quot;url&quot;:&quot;LINK_TO_YOUR_FILE&quot;}&#39; \\</span></span>
<span class="line"><span style="color: #c9d1d9">&quot;https://api.deepgram.com/v1/listen?language=uk&quot;</span></span></code></pre>
<h2 id="conclusion">Conclusion</h2>
<p>We’re pleased that we’ve been able to use <a href="https://blog.deepgram.com/deep-learning-speech-recognition/">Deepgram’s end-to-end approach</a> and transfer learning to quickly train a model for Ukrainian to support those on the ground assisting the Ukrainian people. If there are other languages that would be useful to you, please see our <a href="https://deepgram.com/product/languages/">language page</a> for a list of all of the models that we currently offer. And if you still have questions or need help getting started, you can reach out to us via the <a href="https://deepgram.com/contact-us/">contact page</a>.</p>`;
});

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
