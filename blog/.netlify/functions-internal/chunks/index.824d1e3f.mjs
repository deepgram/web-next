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

const metadata = { "headings": [], "source": "\nYesterday was a big day for voice intelligence as OpenAI released [Whisper](https://github.com/openai/whisper), a general-purpose speech recognition model. We\u2019ve gotten several questions about what this means for the future of Voice AI and companies like Deepgram. We\u2019ve also been humored by posts like this:\n\n![Image of tweet from @LewisNWatson saying \"Deepgram bricking it rn with whisper\"](https://res.cloudinary.com/deepgram/image/upload/v1663883725/blog/use-openai-whisper-speech-recognition-with-the-deepgram-api/1572720107775995904_gvzzzg.jpg)\n\nDeepgram has been doing end-to-end deep learning for speech for over 4 years in production, so we feel uniquely positioned to understand the enormous amount of work it takes to bring something like Whisper to fruition. Congratulations from our team to theirs!\n\nOpenAI chooses to work on some of the most challenging, and promising, foundational aspects of artificial intelligence (AI). We\u2019re thrilled that they\u2019ve expanded into voice. Their entry will only bring even more excitement to the voice revolution. We share the opinion that voice intelligence is one of the most important areas of research in AI and will unlock extraordinary opportunities for AI applications across myriad use cases. In fact, we see this every day as we support our global customers in building voice intelligence products.\n\nProducing transcripts from voice data is just scratching the surface of what humanity should be accomplishing. We, and others in the voice community, are working towards a future where machines gather just as much from a conversation as humans can. Nonetheless, we need to celebrate every accomplishment along the way and support each other where possible.\n\nAs our team, like so many others around the world, tried Whisper for the first time yesterday we thought it would be a great thing if people could use a hosted version. Deepgram\u2019s speech API already hosts some of the most accurate and performant speech recognition models in the world, so we figured what\u2019s one more?\n\nToday, we\u2019re making Whisper available to anyone who wants to use it, hosted by Deepgram. Users that [sign up to use Deepgram](https://console.deepgram.com/signup?jump=demo\\&f-whisper=true) will find Whisper available as an additional model to use among our world-class language and use case models. Alternatively, anyone can access the Whisper model programmatically via a hosted API \u2014 no sign-up required.\n\nTo test it quickly, run this command:\n\n```shell\ncurl --request POST \\\n  --url 'https://api.deepgram.com/v1/listen?model=whisper' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n	\"url\": \"https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav\"\n}'\n```\n\nSo, what does this mean? Deepgram, voice tech, and the voice community are just getting started. Look out for trillion-dollar companies in a decade.\n\n", "html": '<p>Yesterday was a big day for voice intelligence as OpenAI released <a href="https://github.com/openai/whisper">Whisper</a>, a general-purpose speech recognition model. We\u2019ve gotten several questions about what this means for the future of Voice AI and companies like Deepgram. We\u2019ve also been humored by posts like this:</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1663883725/blog/use-openai-whisper-speech-recognition-with-the-deepgram-api/1572720107775995904_gvzzzg.jpg" alt="Image of tweet from @LewisNWatson saying &#x22;Deepgram bricking it rn with whisper&#x22;"></p>\n<p>Deepgram has been doing end-to-end deep learning for speech for over 4 years in production, so we feel uniquely positioned to understand the enormous amount of work it takes to bring something like Whisper to fruition. Congratulations from our team to theirs!</p>\n<p>OpenAI chooses to work on some of the most challenging, and promising, foundational aspects of artificial intelligence (AI). We\u2019re thrilled that they\u2019ve expanded into voice. Their entry will only bring even more excitement to the voice revolution. We share the opinion that voice intelligence is one of the most important areas of research in AI and will unlock extraordinary opportunities for AI applications across myriad use cases. In fact, we see this every day as we support our global customers in building voice intelligence products.</p>\n<p>Producing transcripts from voice data is just scratching the surface of what humanity should be accomplishing. We, and others in the voice community, are working towards a future where machines gather just as much from a conversation as humans can. Nonetheless, we need to celebrate every accomplishment along the way and support each other where possible.</p>\n<p>As our team, like so many others around the world, tried Whisper for the first time yesterday we thought it would be a great thing if people could use a hosted version. Deepgram\u2019s speech API already hosts some of the most accurate and performant speech recognition models in the world, so we figured what\u2019s one more?</p>\n<p>Today, we\u2019re making Whisper available to anyone who wants to use it, hosted by Deepgram. Users that <a href="https://console.deepgram.com/signup?jump=demo&#x26;f-whisper=true">sign up to use Deepgram</a> will find Whisper available as an additional model to use among our world-class language and use case models. Alternatively, anyone can access the Whisper model programmatically via a hosted API \u2014 no sign-up required.</p>\n<p>To test it quickly, run this command:</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl --request POST \\</span></span>\n<span class="line"><span style="color: #C9D1D9">  --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?model=whisper&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">  --header </span><span style="color: #A5D6FF">&#39;Content-Type: application/json&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">  --data </span><span style="color: #A5D6FF">&#39;{</span></span>\n<span class="line"><span style="color: #A5D6FF">	&quot;url&quot;: &quot;https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav&quot;</span></span>\n<span class="line"><span style="color: #A5D6FF">}&#39;</span></span></code></pre>\n<p>So, what does this mean? Deepgram, voice tech, and the voice community are just getting started. Look out for trillion-dollar companies in a decade.</p>' };
const frontmatter = { "title": "Use OpenAI Whisper Speech Recognition with the Deepgram API", "description": "OpenAI's Whisper speech recognition model is now available to anyone who wants to use it and hosted by Deepgram. Test the model today!", "date": "2022-09-22T21:39:04.411Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1663882926/blog/use-openai-whisper-speech-recognition-with-the-deepgram-api/open-ai-whisper-w-deepgram-code-blog_2x_kldwgp.jpg", "authors": ["scott-stephenson"], "category": "ai-and-engineering", "tags": ["whisper", "machine-learning"], "shorturls": { "share": "https://dpgr.am/f4e76b9", "twitter": "https://dpgr.am/e7c9e87", "linkedin": "https://dpgr.am/525dce8", "reddit": "https://dpgr.am/dde3c8d", "facebook": "https://dpgr.am/8888e60" }, "astro": { "headings": [], "source": "\nYesterday was a big day for voice intelligence as OpenAI released [Whisper](https://github.com/openai/whisper), a general-purpose speech recognition model. We\u2019ve gotten several questions about what this means for the future of Voice AI and companies like Deepgram. We\u2019ve also been humored by posts like this:\n\n![Image of tweet from @LewisNWatson saying \"Deepgram bricking it rn with whisper\"](https://res.cloudinary.com/deepgram/image/upload/v1663883725/blog/use-openai-whisper-speech-recognition-with-the-deepgram-api/1572720107775995904_gvzzzg.jpg)\n\nDeepgram has been doing end-to-end deep learning for speech for over 4 years in production, so we feel uniquely positioned to understand the enormous amount of work it takes to bring something like Whisper to fruition. Congratulations from our team to theirs!\n\nOpenAI chooses to work on some of the most challenging, and promising, foundational aspects of artificial intelligence (AI). We\u2019re thrilled that they\u2019ve expanded into voice. Their entry will only bring even more excitement to the voice revolution. We share the opinion that voice intelligence is one of the most important areas of research in AI and will unlock extraordinary opportunities for AI applications across myriad use cases. In fact, we see this every day as we support our global customers in building voice intelligence products.\n\nProducing transcripts from voice data is just scratching the surface of what humanity should be accomplishing. We, and others in the voice community, are working towards a future where machines gather just as much from a conversation as humans can. Nonetheless, we need to celebrate every accomplishment along the way and support each other where possible.\n\nAs our team, like so many others around the world, tried Whisper for the first time yesterday we thought it would be a great thing if people could use a hosted version. Deepgram\u2019s speech API already hosts some of the most accurate and performant speech recognition models in the world, so we figured what\u2019s one more?\n\nToday, we\u2019re making Whisper available to anyone who wants to use it, hosted by Deepgram. Users that [sign up to use Deepgram](https://console.deepgram.com/signup?jump=demo\\&f-whisper=true) will find Whisper available as an additional model to use among our world-class language and use case models. Alternatively, anyone can access the Whisper model programmatically via a hosted API \u2014 no sign-up required.\n\nTo test it quickly, run this command:\n\n```shell\ncurl --request POST \\\n  --url 'https://api.deepgram.com/v1/listen?model=whisper' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n	\"url\": \"https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav\"\n}'\n```\n\nSo, what does this mean? Deepgram, voice tech, and the voice community are just getting started. Look out for trillion-dollar companies in a decade.\n\n", "html": '<p>Yesterday was a big day for voice intelligence as OpenAI released <a href="https://github.com/openai/whisper">Whisper</a>, a general-purpose speech recognition model. We\u2019ve gotten several questions about what this means for the future of Voice AI and companies like Deepgram. We\u2019ve also been humored by posts like this:</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1663883725/blog/use-openai-whisper-speech-recognition-with-the-deepgram-api/1572720107775995904_gvzzzg.jpg" alt="Image of tweet from @LewisNWatson saying &#x22;Deepgram bricking it rn with whisper&#x22;"></p>\n<p>Deepgram has been doing end-to-end deep learning for speech for over 4 years in production, so we feel uniquely positioned to understand the enormous amount of work it takes to bring something like Whisper to fruition. Congratulations from our team to theirs!</p>\n<p>OpenAI chooses to work on some of the most challenging, and promising, foundational aspects of artificial intelligence (AI). We\u2019re thrilled that they\u2019ve expanded into voice. Their entry will only bring even more excitement to the voice revolution. We share the opinion that voice intelligence is one of the most important areas of research in AI and will unlock extraordinary opportunities for AI applications across myriad use cases. In fact, we see this every day as we support our global customers in building voice intelligence products.</p>\n<p>Producing transcripts from voice data is just scratching the surface of what humanity should be accomplishing. We, and others in the voice community, are working towards a future where machines gather just as much from a conversation as humans can. Nonetheless, we need to celebrate every accomplishment along the way and support each other where possible.</p>\n<p>As our team, like so many others around the world, tried Whisper for the first time yesterday we thought it would be a great thing if people could use a hosted version. Deepgram\u2019s speech API already hosts some of the most accurate and performant speech recognition models in the world, so we figured what\u2019s one more?</p>\n<p>Today, we\u2019re making Whisper available to anyone who wants to use it, hosted by Deepgram. Users that <a href="https://console.deepgram.com/signup?jump=demo&#x26;f-whisper=true">sign up to use Deepgram</a> will find Whisper available as an additional model to use among our world-class language and use case models. Alternatively, anyone can access the Whisper model programmatically via a hosted API \u2014 no sign-up required.</p>\n<p>To test it quickly, run this command:</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl --request POST \\</span></span>\n<span class="line"><span style="color: #C9D1D9">  --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?model=whisper&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">  --header </span><span style="color: #A5D6FF">&#39;Content-Type: application/json&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">  --data </span><span style="color: #A5D6FF">&#39;{</span></span>\n<span class="line"><span style="color: #A5D6FF">	&quot;url&quot;: &quot;https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav&quot;</span></span>\n<span class="line"><span style="color: #A5D6FF">}&#39;</span></span></code></pre>\n<p>So, what does this mean? Deepgram, voice tech, and the voice community are just getting started. Look out for trillion-dollar companies in a decade.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/use-openai-whisper-speech-recognition-with-the-deepgram-api/index.md" };
function rawContent() {
  return "\nYesterday was a big day for voice intelligence as OpenAI released [Whisper](https://github.com/openai/whisper), a general-purpose speech recognition model. We\u2019ve gotten several questions about what this means for the future of Voice AI and companies like Deepgram. We\u2019ve also been humored by posts like this:\n\n![Image of tweet from @LewisNWatson saying \"Deepgram bricking it rn with whisper\"](https://res.cloudinary.com/deepgram/image/upload/v1663883725/blog/use-openai-whisper-speech-recognition-with-the-deepgram-api/1572720107775995904_gvzzzg.jpg)\n\nDeepgram has been doing end-to-end deep learning for speech for over 4 years in production, so we feel uniquely positioned to understand the enormous amount of work it takes to bring something like Whisper to fruition. Congratulations from our team to theirs!\n\nOpenAI chooses to work on some of the most challenging, and promising, foundational aspects of artificial intelligence (AI). We\u2019re thrilled that they\u2019ve expanded into voice. Their entry will only bring even more excitement to the voice revolution. We share the opinion that voice intelligence is one of the most important areas of research in AI and will unlock extraordinary opportunities for AI applications across myriad use cases. In fact, we see this every day as we support our global customers in building voice intelligence products.\n\nProducing transcripts from voice data is just scratching the surface of what humanity should be accomplishing. We, and others in the voice community, are working towards a future where machines gather just as much from a conversation as humans can. Nonetheless, we need to celebrate every accomplishment along the way and support each other where possible.\n\nAs our team, like so many others around the world, tried Whisper for the first time yesterday we thought it would be a great thing if people could use a hosted version. Deepgram\u2019s speech API already hosts some of the most accurate and performant speech recognition models in the world, so we figured what\u2019s one more?\n\nToday, we\u2019re making Whisper available to anyone who wants to use it, hosted by Deepgram. Users that [sign up to use Deepgram](https://console.deepgram.com/signup?jump=demo\\&f-whisper=true) will find Whisper available as an additional model to use among our world-class language and use case models. Alternatively, anyone can access the Whisper model programmatically via a hosted API \u2014 no sign-up required.\n\nTo test it quickly, run this command:\n\n```shell\ncurl --request POST \\\n  --url 'https://api.deepgram.com/v1/listen?model=whisper' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n	\"url\": \"https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav\"\n}'\n```\n\nSo, what does this mean? Deepgram, voice tech, and the voice community are just getting started. Look out for trillion-dollar companies in a decade.\n\n";
}
function compiledContent() {
  return '<p>Yesterday was a big day for voice intelligence as OpenAI released <a href="https://github.com/openai/whisper">Whisper</a>, a general-purpose speech recognition model. We\u2019ve gotten several questions about what this means for the future of Voice AI and companies like Deepgram. We\u2019ve also been humored by posts like this:</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1663883725/blog/use-openai-whisper-speech-recognition-with-the-deepgram-api/1572720107775995904_gvzzzg.jpg" alt="Image of tweet from @LewisNWatson saying &#x22;Deepgram bricking it rn with whisper&#x22;"></p>\n<p>Deepgram has been doing end-to-end deep learning for speech for over 4 years in production, so we feel uniquely positioned to understand the enormous amount of work it takes to bring something like Whisper to fruition. Congratulations from our team to theirs!</p>\n<p>OpenAI chooses to work on some of the most challenging, and promising, foundational aspects of artificial intelligence (AI). We\u2019re thrilled that they\u2019ve expanded into voice. Their entry will only bring even more excitement to the voice revolution. We share the opinion that voice intelligence is one of the most important areas of research in AI and will unlock extraordinary opportunities for AI applications across myriad use cases. In fact, we see this every day as we support our global customers in building voice intelligence products.</p>\n<p>Producing transcripts from voice data is just scratching the surface of what humanity should be accomplishing. We, and others in the voice community, are working towards a future where machines gather just as much from a conversation as humans can. Nonetheless, we need to celebrate every accomplishment along the way and support each other where possible.</p>\n<p>As our team, like so many others around the world, tried Whisper for the first time yesterday we thought it would be a great thing if people could use a hosted version. Deepgram\u2019s speech API already hosts some of the most accurate and performant speech recognition models in the world, so we figured what\u2019s one more?</p>\n<p>Today, we\u2019re making Whisper available to anyone who wants to use it, hosted by Deepgram. Users that <a href="https://console.deepgram.com/signup?jump=demo&#x26;f-whisper=true">sign up to use Deepgram</a> will find Whisper available as an additional model to use among our world-class language and use case models. Alternatively, anyone can access the Whisper model programmatically via a hosted API \u2014 no sign-up required.</p>\n<p>To test it quickly, run this command:</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl --request POST \\</span></span>\n<span class="line"><span style="color: #C9D1D9">  --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?model=whisper&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">  --header </span><span style="color: #A5D6FF">&#39;Content-Type: application/json&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">  --data </span><span style="color: #A5D6FF">&#39;{</span></span>\n<span class="line"><span style="color: #A5D6FF">	&quot;url&quot;: &quot;https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav&quot;</span></span>\n<span class="line"><span style="color: #A5D6FF">}&#39;</span></span></code></pre>\n<p>So, what does this mean? Deepgram, voice tech, and the voice community are just getting started. Look out for trillion-dollar companies in a decade.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/use-openai-whisper-speech-recognition-with-the-deepgram-api/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Yesterday was a big day for voice intelligence as OpenAI released <a href="https://github.com/openai/whisper">Whisper</a>, a general-purpose speech recognition model. We’ve gotten several questions about what this means for the future of Voice AI and companies like Deepgram. We’ve also been humored by posts like this:</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1663883725/blog/use-openai-whisper-speech-recognition-with-the-deepgram-api/1572720107775995904_gvzzzg.jpg" alt="Image of tweet from @LewisNWatson saying &quot;Deepgram bricking it rn with whisper&quot;"></p>
<p>Deepgram has been doing end-to-end deep learning for speech for over 4 years in production, so we feel uniquely positioned to understand the enormous amount of work it takes to bring something like Whisper to fruition. Congratulations from our team to theirs!</p>
<p>OpenAI chooses to work on some of the most challenging, and promising, foundational aspects of artificial intelligence (AI). We’re thrilled that they’ve expanded into voice. Their entry will only bring even more excitement to the voice revolution. We share the opinion that voice intelligence is one of the most important areas of research in AI and will unlock extraordinary opportunities for AI applications across myriad use cases. In fact, we see this every day as we support our global customers in building voice intelligence products.</p>
<p>Producing transcripts from voice data is just scratching the surface of what humanity should be accomplishing. We, and others in the voice community, are working towards a future where machines gather just as much from a conversation as humans can. Nonetheless, we need to celebrate every accomplishment along the way and support each other where possible.</p>
<p>As our team, like so many others around the world, tried Whisper for the first time yesterday we thought it would be a great thing if people could use a hosted version. Deepgram’s speech API already hosts some of the most accurate and performant speech recognition models in the world, so we figured what’s one more?</p>
<p>Today, we’re making Whisper available to anyone who wants to use it, hosted by Deepgram. Users that <a href="https://console.deepgram.com/signup?jump=demo&f-whisper=true">sign up to use Deepgram</a> will find Whisper available as an additional model to use among our world-class language and use case models. Alternatively, anyone can access the Whisper model programmatically via a hosted API — no sign-up required.</p>
<p>To test it quickly, run this command:</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl --request POST \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?model=whisper&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --header </span><span style="color: #A5D6FF">&#39;Content-Type: application/json&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --data </span><span style="color: #A5D6FF">&#39;{</span></span>
<span class="line"><span style="color: #A5D6FF">	&quot;url&quot;: &quot;https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav&quot;</span></span>
<span class="line"><span style="color: #A5D6FF">}&#39;</span></span></code></pre>
<p>So, what does this mean? Deepgram, voice tech, and the voice community are just getting started. Look out for trillion-dollar companies in a decade.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/use-openai-whisper-speech-recognition-with-the-deepgram-api/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
