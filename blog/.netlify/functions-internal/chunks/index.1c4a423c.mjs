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

const metadata = { "headings": [{ "depth": 2, "slug": "before-you-start", "text": "Before You Start" }, { "depth": 2, "slug": "making-a-curl-request", "text": "Making a cURL Request" }, { "depth": 2, "slug": "shortening-your-request", "text": "Shortening Your Request" }, { "depth": 2, "slug": "adding-jq", "text": "Adding jq" }, { "depth": 2, "slug": "saving-output-to-file", "text": "Saving Output to File" }, { "depth": 2, "slug": "processing-multiple-files", "text": "Processing Multiple Files" }, { "depth": 2, "slug": "playing-with-jq", "text": "Playing with jq" }], "source": 'I\'ve recently started doing a lot more work directly in my terminal - and I\'ve learned that writing Bash scripts doesn\'t have to be scary. Today, we\'ll write a set of commands and scripts to execute directly in our terminal.\n\n## Before You Start\n\nYou will need a Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys). You will also need to install [jq](https://stedolan.github.io/jq/).\n\n## Making a cURL Request\n\nOpen your terminal and type (or copy and paste) the following, not forgetting to change `YOUR_DEEPGRAM_API_KEY` with a real API Key, and then press enter:\n\n```bash\ncurl \\\n  --request POST \\\n  --header \'Authorization: Token YOUR_DEEPGRAM_API_KEY\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\' \\\n  --url \'https://api.deepgram.com/v1/listen?punctuate=true\'\n```\n\n![A terminal showing a huge block of JSON data returned from Deepgram](https://res.cloudinary.com/deepgram/image/upload/v1658401448/blog/2022/08/saving-transcripts-from-terminal/full-output.png)\n\nLet\'s break down each part of this request:\n\n* `--request POST`: is a HTTP request with the POST method.\n* `--header \'Authorization: Token YOUR_DEEPGRAM_API_KEY\'` - include details to link this request with our account/project.\n* `--header \'Content-Type: application/json\'` - JSON data will be sent with this request.\n* `--data \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\'`. - is the JSON data sent to Deepgram (an object containing one url parameter).\n* `--url \'https://api.deepgram.com/v1/listen?punctuate=true\'` - the URL to make the request to (Deepgram\'s endpoint). `punctuate=true` enables the [punctuation](https://developers.deepgram.com/documentation/features/punctuate/) feature.\n* `\\` allows us to break one command over several lines for readability.\n\n## Shortening Your Request\n\nThe first example is handy for understanding all of the required parameters. Here is a more concise way to make the same request:\n\n```bash\ncurl https://api.deepgram.com/v1/listen?punctuate=true \\\n     -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" \\\n     -H "Content-Type: application/json" \\\n     -d \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\'\n```\n\nThe first thing you\'ll notice is that the URL comes immediately after the `curl` command. You may have also noted the absence of an HTTP method - this would normally default to a GET request, but as this request has a body, a POST request is inferred. `--header` is shortened to `-H`, and `--data` to `-d`.\n\n## Adding jq\n\n`jq` is an excellent command-line utility that allows you to display and manipulate JSON data. On the terminal, a pipe (`|`) is often used to send the output of one command as an input for a second command. `jq` expects some JSON as input and an expression to describe how to display it.\n\nThis jq expression will extract just the transcript from the returned data object:\n\n`| jq \'.results.channels[0].alternatives[0].transcript\'`\n\nYou can add it to the end of your cURL request like so:\n\n```bash\ncurl https://api.deepgram.com/v1/listen?punctuate=true \\\n  -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\' \\\n  | jq \'.results.channels[0].alternatives[0].transcript\'\n```\n\n![A terminal showing just the transcript text](https://res.cloudinary.com/deepgram/image/upload/v1658401443/blog/2022/08/saving-transcripts-from-terminal/jq.png)\n\n## Saving Output to File\n\nOnce you have the correct data extracted and formatted from `jq`, you can redirect the output to a new file by appending `> output.txt` to any command that prints to the terminal. Here it is in practice:\n\n```bash\ncurl https://api.deepgram.com/v1/listen?punctuate=true \\\n  -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\' \\\n  | jq \'.results.channels[0].alternatives[0].transcript\'\n  > output.txt\n```\n\n## Processing Multiple Files\n\nYou can create `.sh` files to execute from your terminal, which contain multiple lines of bash script. Create a new file called `transcripts.sh` and open it in a code editor. Copy and paste the following:\n\n```bash\n#!/bin/bash\n\nurls=("https://static.deepgram.com/examples/TrumpDemocratsMeeting.nancyshort.wav" "https://static.deepgram.com/examples/nasa-spacewalk-interview.wav" "https://static.deepgram.com/examples/deep-learning-podcast-clip.wav")\n\ndg_features="punctuate=true&utterances=true&diarize=true&tier=enhanced"\ndg_key="YOUR_DEEPGRAM_API_KEY"\n\nfor url in ${urls[@]}; do\n  filename=${url##*/}\n\n  RESPONSE=$(\n    curl -X POST https://api.deepgram.com/v1/listen?$dg_features \\\n         -H "Authorization: Token $dg_key" \\\n         -H "Content-Type: application/json" \\\n         -d "{\\"url\\":\\"$url\\"}"\n  )\n\n  echo $RESPONSE | jq \'.results.channels[0].alternatives[0].transcript\' > $filename.txt\ndone\n```\n\nLet\'s break down each part of this file:\n\n* The first line - `#!/bin/bash` - is a shebang, and specifies which program should be called to run the script. In this case, bash.\n* `urls` is a variable containing an array with three URLs. Notice that arrays use parentheses, and items are separated by a space only.\n* `dg_features` and `dg_key` are variables you should alter for your exact use case.\n* Inside of the `for` loop:\n\n  * `filename` extracts the last part of the URL (the filename), which will later be used to name the output file.\n  * The `curl` command is the same as before, with variables interpolated. The output is stored in a new variable called `RESPONSE`.\n  * `RESPONSE` is sent to `jq`, and then redirected into a new text file.\n\nRun the file in your terminal with `./transcripts.sh`. As a note, this request uses Deepgram\'s punctuation, utterances, diarize, and tier features.\n\n## Playing with jq\n\n`jq` is a remarkably powerful tool. The following expression will loop through the `results.utterances` array, and format a string for each item interpolating the speaker identifier and transcript text:\n\n```bash\necho $RESPONSE | jq -r \'.results.utterances[] | "[Speaker:\\(.speaker)] \\(.transcript)"\' > $filename.txt\n```\n\nThe output looks like this:\n\n```\n[Speaker:0] agreement on other things that are really good. Nancy, would you like to say something?\n[Speaker:1] Well, thank you, mister president for the opportunity to meet with you so that we can work together in a bipartisan way\n[Speaker:1] to meet the needs of the American people. I think the American people recognize\n[Speaker:1] that we must keep government open, that a shutdown is not worth anything.\n[Speaker:1] And that you should\n```\n\nI hope you found this valuable and interesting. If you have any questions, please feel free to get in touch - we love to help!', "html": `<p>I\u2019ve recently started doing a lot more work directly in my terminal - and I\u2019ve learned that writing Bash scripts doesn\u2019t have to be scary. Today, we\u2019ll write a set of commands and scripts to execute directly in our terminal.</p>
<h2 id="before-you-start">Before You Start</h2>
<p>You will need a Deepgram API Key - <a href="https://console.deepgram.com/signup?jump=keys">get one here</a>. You will also need to install <a href="https://stedolan.github.io/jq/">jq</a>.</p>
<h2 id="making-a-curl-request">Making a cURL Request</h2>
<p>Open your terminal and type (or copy and paste) the following, not forgetting to change <code is:raw>YOUR_DEEPGRAM_API_KEY</code> with a real API Key, and then press enter:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --request POST \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --header </span><span style="color: #A5D6FF">&#39;Content-Type: application/json&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --data </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?punctuate=true&#39;</span></span></code></pre>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1658401448/blog/2022/08/saving-transcripts-from-terminal/full-output.png" alt="A terminal showing a huge block of JSON data returned from Deepgram"></p>
<p>Let\u2019s break down each part of this request:</p>
<ul>
<li><code is:raw>--request POST</code>: is a HTTP request with the POST method.</li>
<li><code is:raw>--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY'</code> - include details to link this request with our account/project.</li>
<li><code is:raw>--header 'Content-Type: application/json'</code> - JSON data will be sent with this request.</li>
<li><code is:raw>--data '{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}'</code>. - is the JSON data sent to Deepgram (an object containing one url parameter).</li>
<li><code is:raw>--url 'https://api.deepgram.com/v1/listen?punctuate=true'</code> - the URL to make the request to (Deepgram\u2019s endpoint). <code is:raw>punctuate=true</code> enables the <a href="https://developers.deepgram.com/documentation/features/punctuate/">punctuation</a> feature.</li>
<li><code is:raw>\\</code> allows us to break one command over several lines for readability.</li>
</ul>
<h2 id="shortening-your-request">Shortening Your Request</h2>
<p>The first example is handy for understanding all of the required parameters. Here is a more concise way to make the same request:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">punctuate=true \\</span></span>
<span class="line"><span style="color: #C9D1D9">     -H </span><span style="color: #A5D6FF">&quot;Authorization: Token YOUR_DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">     -H </span><span style="color: #A5D6FF">&quot;Content-Type: application/json&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">     -d </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span></span></code></pre>
<p>The first thing you\u2019ll notice is that the URL comes immediately after the <code is:raw>curl</code> command. You may have also noted the absence of an HTTP method - this would normally default to a GET request, but as this request has a body, a POST request is inferred. <code is:raw>--header</code> is shortened to <code is:raw>-H</code>, and <code is:raw>--data</code> to <code is:raw>-d</code>.</p>
<h2 id="adding-jq">Adding jq</h2>
<p><code is:raw>jq</code> is an excellent command-line utility that allows you to display and manipulate JSON data. On the terminal, a pipe (<code is:raw>|</code>) is often used to send the output of one command as an input for a second command. <code is:raw>jq</code> expects some JSON as input and an expression to describe how to display it.</p>
<p>This jq expression will extract just the transcript from the returned data object:</p>
<p><code is:raw>| jq '.results.channels[0].alternatives[0].transcript'</code></p>
<p>You can add it to the end of your cURL request like so:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">punctuate=true \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Authorization: Token YOUR_DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Content-Type: application/json&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -d </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq </span><span style="color: #A5D6FF">&#39;.results.channels[0].alternatives[0].transcript&#39;</span></span></code></pre>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1658401443/blog/2022/08/saving-transcripts-from-terminal/jq.png" alt="A terminal showing just the transcript text"></p>
<h2 id="saving-output-to-file">Saving Output to File</h2>
<p>Once you have the correct data extracted and formatted from <code is:raw>jq</code>, you can redirect the output to a new file by appending <code is:raw>&gt; output.txt</code> to any command that prints to the terminal. Here it is in practice:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">punctuate=true \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Authorization: Token YOUR_DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Content-Type: application/json&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -d </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq </span><span style="color: #A5D6FF">&#39;.results.channels[0].alternatives[0].transcript&#39;</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FF7B72">&gt;</span><span style="color: #C9D1D9"> output.txt</span></span></code></pre>
<h2 id="processing-multiple-files">Processing Multiple Files</h2>
<p>You can create <code is:raw>.sh</code> files to execute from your terminal, which contain multiple lines of bash script. Create a new file called <code is:raw>transcripts.sh</code> and open it in a code editor. Copy and paste the following:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #8B949E">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">urls=(</span><span style="color: #A5D6FF">&quot;https://static.deepgram.com/examples/TrumpDemocratsMeeting.nancyshort.wav&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;https://static.deepgram.com/examples/deep-learning-podcast-clip.wav&quot;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">dg_features=</span><span style="color: #A5D6FF">&quot;punctuate=true&amp;utterances=true&amp;diarize=true&amp;tier=enhanced&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">dg_key=</span><span style="color: #A5D6FF">&quot;YOUR_DEEPGRAM_API_KEY&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">for</span><span style="color: #C9D1D9"> url </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> \${urls[@]}</span><span style="color: #FF7B72">;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">do</span></span>
<span class="line"><span style="color: #C9D1D9">  filename=\${url</span><span style="color: #FF7B72">##*/</span><span style="color: #C9D1D9">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  RESPONSE=</span><span style="color: #A5D6FF">$(</span></span>
<span class="line"><span style="color: #A5D6FF">    curl -X POST https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">$dg_features</span><span style="color: #A5D6FF"> \\</span></span>
<span class="line"><span style="color: #A5D6FF">         -H &quot;Authorization: Token </span><span style="color: #C9D1D9">$dg_key</span><span style="color: #A5D6FF">&quot; \\</span></span>
<span class="line"><span style="color: #A5D6FF">         -H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span style="color: #A5D6FF">         -d &quot;{</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #A5D6FF">url</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #A5D6FF">:</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #C9D1D9">$url</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #A5D6FF">}&quot;</span></span>
<span class="line"><span style="color: #A5D6FF">  )</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">echo</span><span style="color: #C9D1D9"> $RESPONSE </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq </span><span style="color: #A5D6FF">&#39;.results.channels[0].alternatives[0].transcript&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">&gt;</span><span style="color: #C9D1D9"> $filename.txt</span></span>
<span class="line"><span style="color: #FF7B72">done</span></span></code></pre>
<p>Let\u2019s break down each part of this file:</p>
<ul>
<li>
<p>The first line - <code is:raw>#!/bin/bash</code> - is a shebang, and specifies which program should be called to run the script. In this case, bash.</p>
</li>
<li>
<p><code is:raw>urls</code> is a variable containing an array with three URLs. Notice that arrays use parentheses, and items are separated by a space only.</p>
</li>
<li>
<p><code is:raw>dg_features</code> and <code is:raw>dg_key</code> are variables you should alter for your exact use case.</p>
</li>
<li>
<p>Inside of the <code is:raw>for</code> loop:</p>
<ul>
<li><code is:raw>filename</code> extracts the last part of the URL (the filename), which will later be used to name the output file.</li>
<li>The <code is:raw>curl</code> command is the same as before, with variables interpolated. The output is stored in a new variable called <code is:raw>RESPONSE</code>.</li>
<li><code is:raw>RESPONSE</code> is sent to <code is:raw>jq</code>, and then redirected into a new text file.</li>
</ul>
</li>
</ul>
<p>Run the file in your terminal with <code is:raw>./transcripts.sh</code>. As a note, this request uses Deepgram\u2019s punctuation, utterances, diarize, and tier features.</p>
<h2 id="playing-with-jq">Playing with jq</h2>
<p><code is:raw>jq</code> is a remarkably powerful tool. The following expression will loop through the <code is:raw>results.utterances</code> array, and format a string for each item interpolating the speaker identifier and transcript text:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #79C0FF">echo</span><span style="color: #C9D1D9"> $RESPONSE </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq -r </span><span style="color: #A5D6FF">&#39;.results.utterances[] | &quot;[Speaker:\\(.speaker)] \\(.transcript)&quot;&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">&gt;</span><span style="color: #C9D1D9"> $filename.txt</span></span></code></pre>
<p>The output looks like this:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #c9d1d9">[Speaker:0] agreement on other things that are really good. Nancy, would you like to say something?</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] Well, thank you, mister president for the opportunity to meet with you so that we can work together in a bipartisan way</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] to meet the needs of the American people. I think the American people recognize</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] that we must keep government open, that a shutdown is not worth anything.</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] And that you should</span></span></code></pre>
<p>I hope you found this valuable and interesting. If you have any questions, please feel free to get in touch - we love to help!</p>` };
const frontmatter = { "title": "Saving Transcripts From Your Terminal", "description": "Learn how to use cURL to generate and save Deepgram transcripts directly from your terminal. Start now!", "date": "2022-08-15T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1660569910/blog/2022/08/saving-transcripts-from-terminal/cover.jpg", "authors": ["kevin-lewis"], "category": "tutorial", "tags": ["terminal"], "seo": { "title": "Saving Transcripts From Your Terminal", "description": "Learn how to use cURL to generate and save Deepgram transcripts directly from your terminal. Start now!" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661454119/blog/saving-transcripts-from-terminal/ograph.png" }, "shorturls": { "share": "https://dpgr.am/8c8743f", "twitter": "https://dpgr.am/4db85ee", "linkedin": "https://dpgr.am/76ca356", "reddit": "https://dpgr.am/c6681df", "facebook": "https://dpgr.am/282a2d3" }, "astro": { "headings": [{ "depth": 2, "slug": "before-you-start", "text": "Before You Start" }, { "depth": 2, "slug": "making-a-curl-request", "text": "Making a cURL Request" }, { "depth": 2, "slug": "shortening-your-request", "text": "Shortening Your Request" }, { "depth": 2, "slug": "adding-jq", "text": "Adding jq" }, { "depth": 2, "slug": "saving-output-to-file", "text": "Saving Output to File" }, { "depth": 2, "slug": "processing-multiple-files", "text": "Processing Multiple Files" }, { "depth": 2, "slug": "playing-with-jq", "text": "Playing with jq" }], "source": 'I\'ve recently started doing a lot more work directly in my terminal - and I\'ve learned that writing Bash scripts doesn\'t have to be scary. Today, we\'ll write a set of commands and scripts to execute directly in our terminal.\n\n## Before You Start\n\nYou will need a Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys). You will also need to install [jq](https://stedolan.github.io/jq/).\n\n## Making a cURL Request\n\nOpen your terminal and type (or copy and paste) the following, not forgetting to change `YOUR_DEEPGRAM_API_KEY` with a real API Key, and then press enter:\n\n```bash\ncurl \\\n  --request POST \\\n  --header \'Authorization: Token YOUR_DEEPGRAM_API_KEY\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\' \\\n  --url \'https://api.deepgram.com/v1/listen?punctuate=true\'\n```\n\n![A terminal showing a huge block of JSON data returned from Deepgram](https://res.cloudinary.com/deepgram/image/upload/v1658401448/blog/2022/08/saving-transcripts-from-terminal/full-output.png)\n\nLet\'s break down each part of this request:\n\n* `--request POST`: is a HTTP request with the POST method.\n* `--header \'Authorization: Token YOUR_DEEPGRAM_API_KEY\'` - include details to link this request with our account/project.\n* `--header \'Content-Type: application/json\'` - JSON data will be sent with this request.\n* `--data \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\'`. - is the JSON data sent to Deepgram (an object containing one url parameter).\n* `--url \'https://api.deepgram.com/v1/listen?punctuate=true\'` - the URL to make the request to (Deepgram\'s endpoint). `punctuate=true` enables the [punctuation](https://developers.deepgram.com/documentation/features/punctuate/) feature.\n* `\\` allows us to break one command over several lines for readability.\n\n## Shortening Your Request\n\nThe first example is handy for understanding all of the required parameters. Here is a more concise way to make the same request:\n\n```bash\ncurl https://api.deepgram.com/v1/listen?punctuate=true \\\n     -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" \\\n     -H "Content-Type: application/json" \\\n     -d \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\'\n```\n\nThe first thing you\'ll notice is that the URL comes immediately after the `curl` command. You may have also noted the absence of an HTTP method - this would normally default to a GET request, but as this request has a body, a POST request is inferred. `--header` is shortened to `-H`, and `--data` to `-d`.\n\n## Adding jq\n\n`jq` is an excellent command-line utility that allows you to display and manipulate JSON data. On the terminal, a pipe (`|`) is often used to send the output of one command as an input for a second command. `jq` expects some JSON as input and an expression to describe how to display it.\n\nThis jq expression will extract just the transcript from the returned data object:\n\n`| jq \'.results.channels[0].alternatives[0].transcript\'`\n\nYou can add it to the end of your cURL request like so:\n\n```bash\ncurl https://api.deepgram.com/v1/listen?punctuate=true \\\n  -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\' \\\n  | jq \'.results.channels[0].alternatives[0].transcript\'\n```\n\n![A terminal showing just the transcript text](https://res.cloudinary.com/deepgram/image/upload/v1658401443/blog/2022/08/saving-transcripts-from-terminal/jq.png)\n\n## Saving Output to File\n\nOnce you have the correct data extracted and formatted from `jq`, you can redirect the output to a new file by appending `> output.txt` to any command that prints to the terminal. Here it is in practice:\n\n```bash\ncurl https://api.deepgram.com/v1/listen?punctuate=true \\\n  -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\' \\\n  | jq \'.results.channels[0].alternatives[0].transcript\'\n  > output.txt\n```\n\n## Processing Multiple Files\n\nYou can create `.sh` files to execute from your terminal, which contain multiple lines of bash script. Create a new file called `transcripts.sh` and open it in a code editor. Copy and paste the following:\n\n```bash\n#!/bin/bash\n\nurls=("https://static.deepgram.com/examples/TrumpDemocratsMeeting.nancyshort.wav" "https://static.deepgram.com/examples/nasa-spacewalk-interview.wav" "https://static.deepgram.com/examples/deep-learning-podcast-clip.wav")\n\ndg_features="punctuate=true&utterances=true&diarize=true&tier=enhanced"\ndg_key="YOUR_DEEPGRAM_API_KEY"\n\nfor url in ${urls[@]}; do\n  filename=${url##*/}\n\n  RESPONSE=$(\n    curl -X POST https://api.deepgram.com/v1/listen?$dg_features \\\n         -H "Authorization: Token $dg_key" \\\n         -H "Content-Type: application/json" \\\n         -d "{\\"url\\":\\"$url\\"}"\n  )\n\n  echo $RESPONSE | jq \'.results.channels[0].alternatives[0].transcript\' > $filename.txt\ndone\n```\n\nLet\'s break down each part of this file:\n\n* The first line - `#!/bin/bash` - is a shebang, and specifies which program should be called to run the script. In this case, bash.\n* `urls` is a variable containing an array with three URLs. Notice that arrays use parentheses, and items are separated by a space only.\n* `dg_features` and `dg_key` are variables you should alter for your exact use case.\n* Inside of the `for` loop:\n\n  * `filename` extracts the last part of the URL (the filename), which will later be used to name the output file.\n  * The `curl` command is the same as before, with variables interpolated. The output is stored in a new variable called `RESPONSE`.\n  * `RESPONSE` is sent to `jq`, and then redirected into a new text file.\n\nRun the file in your terminal with `./transcripts.sh`. As a note, this request uses Deepgram\'s punctuation, utterances, diarize, and tier features.\n\n## Playing with jq\n\n`jq` is a remarkably powerful tool. The following expression will loop through the `results.utterances` array, and format a string for each item interpolating the speaker identifier and transcript text:\n\n```bash\necho $RESPONSE | jq -r \'.results.utterances[] | "[Speaker:\\(.speaker)] \\(.transcript)"\' > $filename.txt\n```\n\nThe output looks like this:\n\n```\n[Speaker:0] agreement on other things that are really good. Nancy, would you like to say something?\n[Speaker:1] Well, thank you, mister president for the opportunity to meet with you so that we can work together in a bipartisan way\n[Speaker:1] to meet the needs of the American people. I think the American people recognize\n[Speaker:1] that we must keep government open, that a shutdown is not worth anything.\n[Speaker:1] And that you should\n```\n\nI hope you found this valuable and interesting. If you have any questions, please feel free to get in touch - we love to help!', "html": `<p>I\u2019ve recently started doing a lot more work directly in my terminal - and I\u2019ve learned that writing Bash scripts doesn\u2019t have to be scary. Today, we\u2019ll write a set of commands and scripts to execute directly in our terminal.</p>
<h2 id="before-you-start">Before You Start</h2>
<p>You will need a Deepgram API Key - <a href="https://console.deepgram.com/signup?jump=keys">get one here</a>. You will also need to install <a href="https://stedolan.github.io/jq/">jq</a>.</p>
<h2 id="making-a-curl-request">Making a cURL Request</h2>
<p>Open your terminal and type (or copy and paste) the following, not forgetting to change <code is:raw>YOUR_DEEPGRAM_API_KEY</code> with a real API Key, and then press enter:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --request POST \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --header </span><span style="color: #A5D6FF">&#39;Content-Type: application/json&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --data </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?punctuate=true&#39;</span></span></code></pre>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1658401448/blog/2022/08/saving-transcripts-from-terminal/full-output.png" alt="A terminal showing a huge block of JSON data returned from Deepgram"></p>
<p>Let\u2019s break down each part of this request:</p>
<ul>
<li><code is:raw>--request POST</code>: is a HTTP request with the POST method.</li>
<li><code is:raw>--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY'</code> - include details to link this request with our account/project.</li>
<li><code is:raw>--header 'Content-Type: application/json'</code> - JSON data will be sent with this request.</li>
<li><code is:raw>--data '{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}'</code>. - is the JSON data sent to Deepgram (an object containing one url parameter).</li>
<li><code is:raw>--url 'https://api.deepgram.com/v1/listen?punctuate=true'</code> - the URL to make the request to (Deepgram\u2019s endpoint). <code is:raw>punctuate=true</code> enables the <a href="https://developers.deepgram.com/documentation/features/punctuate/">punctuation</a> feature.</li>
<li><code is:raw>\\</code> allows us to break one command over several lines for readability.</li>
</ul>
<h2 id="shortening-your-request">Shortening Your Request</h2>
<p>The first example is handy for understanding all of the required parameters. Here is a more concise way to make the same request:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">punctuate=true \\</span></span>
<span class="line"><span style="color: #C9D1D9">     -H </span><span style="color: #A5D6FF">&quot;Authorization: Token YOUR_DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">     -H </span><span style="color: #A5D6FF">&quot;Content-Type: application/json&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">     -d </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span></span></code></pre>
<p>The first thing you\u2019ll notice is that the URL comes immediately after the <code is:raw>curl</code> command. You may have also noted the absence of an HTTP method - this would normally default to a GET request, but as this request has a body, a POST request is inferred. <code is:raw>--header</code> is shortened to <code is:raw>-H</code>, and <code is:raw>--data</code> to <code is:raw>-d</code>.</p>
<h2 id="adding-jq">Adding jq</h2>
<p><code is:raw>jq</code> is an excellent command-line utility that allows you to display and manipulate JSON data. On the terminal, a pipe (<code is:raw>|</code>) is often used to send the output of one command as an input for a second command. <code is:raw>jq</code> expects some JSON as input and an expression to describe how to display it.</p>
<p>This jq expression will extract just the transcript from the returned data object:</p>
<p><code is:raw>| jq '.results.channels[0].alternatives[0].transcript'</code></p>
<p>You can add it to the end of your cURL request like so:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">punctuate=true \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Authorization: Token YOUR_DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Content-Type: application/json&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -d </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq </span><span style="color: #A5D6FF">&#39;.results.channels[0].alternatives[0].transcript&#39;</span></span></code></pre>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1658401443/blog/2022/08/saving-transcripts-from-terminal/jq.png" alt="A terminal showing just the transcript text"></p>
<h2 id="saving-output-to-file">Saving Output to File</h2>
<p>Once you have the correct data extracted and formatted from <code is:raw>jq</code>, you can redirect the output to a new file by appending <code is:raw>&gt; output.txt</code> to any command that prints to the terminal. Here it is in practice:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">punctuate=true \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Authorization: Token YOUR_DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Content-Type: application/json&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -d </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq </span><span style="color: #A5D6FF">&#39;.results.channels[0].alternatives[0].transcript&#39;</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FF7B72">&gt;</span><span style="color: #C9D1D9"> output.txt</span></span></code></pre>
<h2 id="processing-multiple-files">Processing Multiple Files</h2>
<p>You can create <code is:raw>.sh</code> files to execute from your terminal, which contain multiple lines of bash script. Create a new file called <code is:raw>transcripts.sh</code> and open it in a code editor. Copy and paste the following:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #8B949E">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">urls=(</span><span style="color: #A5D6FF">&quot;https://static.deepgram.com/examples/TrumpDemocratsMeeting.nancyshort.wav&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;https://static.deepgram.com/examples/deep-learning-podcast-clip.wav&quot;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">dg_features=</span><span style="color: #A5D6FF">&quot;punctuate=true&amp;utterances=true&amp;diarize=true&amp;tier=enhanced&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">dg_key=</span><span style="color: #A5D6FF">&quot;YOUR_DEEPGRAM_API_KEY&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">for</span><span style="color: #C9D1D9"> url </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> \${urls[@]}</span><span style="color: #FF7B72">;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">do</span></span>
<span class="line"><span style="color: #C9D1D9">  filename=\${url</span><span style="color: #FF7B72">##*/</span><span style="color: #C9D1D9">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  RESPONSE=</span><span style="color: #A5D6FF">$(</span></span>
<span class="line"><span style="color: #A5D6FF">    curl -X POST https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">$dg_features</span><span style="color: #A5D6FF"> \\</span></span>
<span class="line"><span style="color: #A5D6FF">         -H &quot;Authorization: Token </span><span style="color: #C9D1D9">$dg_key</span><span style="color: #A5D6FF">&quot; \\</span></span>
<span class="line"><span style="color: #A5D6FF">         -H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span style="color: #A5D6FF">         -d &quot;{</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #A5D6FF">url</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #A5D6FF">:</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #C9D1D9">$url</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #A5D6FF">}&quot;</span></span>
<span class="line"><span style="color: #A5D6FF">  )</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">echo</span><span style="color: #C9D1D9"> $RESPONSE </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq </span><span style="color: #A5D6FF">&#39;.results.channels[0].alternatives[0].transcript&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">&gt;</span><span style="color: #C9D1D9"> $filename.txt</span></span>
<span class="line"><span style="color: #FF7B72">done</span></span></code></pre>
<p>Let\u2019s break down each part of this file:</p>
<ul>
<li>
<p>The first line - <code is:raw>#!/bin/bash</code> - is a shebang, and specifies which program should be called to run the script. In this case, bash.</p>
</li>
<li>
<p><code is:raw>urls</code> is a variable containing an array with three URLs. Notice that arrays use parentheses, and items are separated by a space only.</p>
</li>
<li>
<p><code is:raw>dg_features</code> and <code is:raw>dg_key</code> are variables you should alter for your exact use case.</p>
</li>
<li>
<p>Inside of the <code is:raw>for</code> loop:</p>
<ul>
<li><code is:raw>filename</code> extracts the last part of the URL (the filename), which will later be used to name the output file.</li>
<li>The <code is:raw>curl</code> command is the same as before, with variables interpolated. The output is stored in a new variable called <code is:raw>RESPONSE</code>.</li>
<li><code is:raw>RESPONSE</code> is sent to <code is:raw>jq</code>, and then redirected into a new text file.</li>
</ul>
</li>
</ul>
<p>Run the file in your terminal with <code is:raw>./transcripts.sh</code>. As a note, this request uses Deepgram\u2019s punctuation, utterances, diarize, and tier features.</p>
<h2 id="playing-with-jq">Playing with jq</h2>
<p><code is:raw>jq</code> is a remarkably powerful tool. The following expression will loop through the <code is:raw>results.utterances</code> array, and format a string for each item interpolating the speaker identifier and transcript text:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #79C0FF">echo</span><span style="color: #C9D1D9"> $RESPONSE </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq -r </span><span style="color: #A5D6FF">&#39;.results.utterances[] | &quot;[Speaker:\\(.speaker)] \\(.transcript)&quot;&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">&gt;</span><span style="color: #C9D1D9"> $filename.txt</span></span></code></pre>
<p>The output looks like this:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #c9d1d9">[Speaker:0] agreement on other things that are really good. Nancy, would you like to say something?</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] Well, thank you, mister president for the opportunity to meet with you so that we can work together in a bipartisan way</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] to meet the needs of the American people. I think the American people recognize</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] that we must keep government open, that a shutdown is not worth anything.</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] And that you should</span></span></code></pre>
<p>I hope you found this valuable and interesting. If you have any questions, please feel free to get in touch - we love to help!</p>` }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/saving-transcripts-from-terminal/index.md" };
function rawContent() {
  return 'I\'ve recently started doing a lot more work directly in my terminal - and I\'ve learned that writing Bash scripts doesn\'t have to be scary. Today, we\'ll write a set of commands and scripts to execute directly in our terminal.\n\n## Before You Start\n\nYou will need a Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys). You will also need to install [jq](https://stedolan.github.io/jq/).\n\n## Making a cURL Request\n\nOpen your terminal and type (or copy and paste) the following, not forgetting to change `YOUR_DEEPGRAM_API_KEY` with a real API Key, and then press enter:\n\n```bash\ncurl \\\n  --request POST \\\n  --header \'Authorization: Token YOUR_DEEPGRAM_API_KEY\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\' \\\n  --url \'https://api.deepgram.com/v1/listen?punctuate=true\'\n```\n\n![A terminal showing a huge block of JSON data returned from Deepgram](https://res.cloudinary.com/deepgram/image/upload/v1658401448/blog/2022/08/saving-transcripts-from-terminal/full-output.png)\n\nLet\'s break down each part of this request:\n\n* `--request POST`: is a HTTP request with the POST method.\n* `--header \'Authorization: Token YOUR_DEEPGRAM_API_KEY\'` - include details to link this request with our account/project.\n* `--header \'Content-Type: application/json\'` - JSON data will be sent with this request.\n* `--data \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\'`. - is the JSON data sent to Deepgram (an object containing one url parameter).\n* `--url \'https://api.deepgram.com/v1/listen?punctuate=true\'` - the URL to make the request to (Deepgram\'s endpoint). `punctuate=true` enables the [punctuation](https://developers.deepgram.com/documentation/features/punctuate/) feature.\n* `\\` allows us to break one command over several lines for readability.\n\n## Shortening Your Request\n\nThe first example is handy for understanding all of the required parameters. Here is a more concise way to make the same request:\n\n```bash\ncurl https://api.deepgram.com/v1/listen?punctuate=true \\\n     -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" \\\n     -H "Content-Type: application/json" \\\n     -d \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\'\n```\n\nThe first thing you\'ll notice is that the URL comes immediately after the `curl` command. You may have also noted the absence of an HTTP method - this would normally default to a GET request, but as this request has a body, a POST request is inferred. `--header` is shortened to `-H`, and `--data` to `-d`.\n\n## Adding jq\n\n`jq` is an excellent command-line utility that allows you to display and manipulate JSON data. On the terminal, a pipe (`|`) is often used to send the output of one command as an input for a second command. `jq` expects some JSON as input and an expression to describe how to display it.\n\nThis jq expression will extract just the transcript from the returned data object:\n\n`| jq \'.results.channels[0].alternatives[0].transcript\'`\n\nYou can add it to the end of your cURL request like so:\n\n```bash\ncurl https://api.deepgram.com/v1/listen?punctuate=true \\\n  -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\' \\\n  | jq \'.results.channels[0].alternatives[0].transcript\'\n```\n\n![A terminal showing just the transcript text](https://res.cloudinary.com/deepgram/image/upload/v1658401443/blog/2022/08/saving-transcripts-from-terminal/jq.png)\n\n## Saving Output to File\n\nOnce you have the correct data extracted and formatted from `jq`, you can redirect the output to a new file by appending `> output.txt` to any command that prints to the terminal. Here it is in practice:\n\n```bash\ncurl https://api.deepgram.com/v1/listen?punctuate=true \\\n  -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}\' \\\n  | jq \'.results.channels[0].alternatives[0].transcript\'\n  > output.txt\n```\n\n## Processing Multiple Files\n\nYou can create `.sh` files to execute from your terminal, which contain multiple lines of bash script. Create a new file called `transcripts.sh` and open it in a code editor. Copy and paste the following:\n\n```bash\n#!/bin/bash\n\nurls=("https://static.deepgram.com/examples/TrumpDemocratsMeeting.nancyshort.wav" "https://static.deepgram.com/examples/nasa-spacewalk-interview.wav" "https://static.deepgram.com/examples/deep-learning-podcast-clip.wav")\n\ndg_features="punctuate=true&utterances=true&diarize=true&tier=enhanced"\ndg_key="YOUR_DEEPGRAM_API_KEY"\n\nfor url in ${urls[@]}; do\n  filename=${url##*/}\n\n  RESPONSE=$(\n    curl -X POST https://api.deepgram.com/v1/listen?$dg_features \\\n         -H "Authorization: Token $dg_key" \\\n         -H "Content-Type: application/json" \\\n         -d "{\\"url\\":\\"$url\\"}"\n  )\n\n  echo $RESPONSE | jq \'.results.channels[0].alternatives[0].transcript\' > $filename.txt\ndone\n```\n\nLet\'s break down each part of this file:\n\n* The first line - `#!/bin/bash` - is a shebang, and specifies which program should be called to run the script. In this case, bash.\n* `urls` is a variable containing an array with three URLs. Notice that arrays use parentheses, and items are separated by a space only.\n* `dg_features` and `dg_key` are variables you should alter for your exact use case.\n* Inside of the `for` loop:\n\n  * `filename` extracts the last part of the URL (the filename), which will later be used to name the output file.\n  * The `curl` command is the same as before, with variables interpolated. The output is stored in a new variable called `RESPONSE`.\n  * `RESPONSE` is sent to `jq`, and then redirected into a new text file.\n\nRun the file in your terminal with `./transcripts.sh`. As a note, this request uses Deepgram\'s punctuation, utterances, diarize, and tier features.\n\n## Playing with jq\n\n`jq` is a remarkably powerful tool. The following expression will loop through the `results.utterances` array, and format a string for each item interpolating the speaker identifier and transcript text:\n\n```bash\necho $RESPONSE | jq -r \'.results.utterances[] | "[Speaker:\\(.speaker)] \\(.transcript)"\' > $filename.txt\n```\n\nThe output looks like this:\n\n```\n[Speaker:0] agreement on other things that are really good. Nancy, would you like to say something?\n[Speaker:1] Well, thank you, mister president for the opportunity to meet with you so that we can work together in a bipartisan way\n[Speaker:1] to meet the needs of the American people. I think the American people recognize\n[Speaker:1] that we must keep government open, that a shutdown is not worth anything.\n[Speaker:1] And that you should\n```\n\nI hope you found this valuable and interesting. If you have any questions, please feel free to get in touch - we love to help!';
}
function compiledContent() {
  return `<p>I\u2019ve recently started doing a lot more work directly in my terminal - and I\u2019ve learned that writing Bash scripts doesn\u2019t have to be scary. Today, we\u2019ll write a set of commands and scripts to execute directly in our terminal.</p>
<h2 id="before-you-start">Before You Start</h2>
<p>You will need a Deepgram API Key - <a href="https://console.deepgram.com/signup?jump=keys">get one here</a>. You will also need to install <a href="https://stedolan.github.io/jq/">jq</a>.</p>
<h2 id="making-a-curl-request">Making a cURL Request</h2>
<p>Open your terminal and type (or copy and paste) the following, not forgetting to change <code is:raw>YOUR_DEEPGRAM_API_KEY</code> with a real API Key, and then press enter:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --request POST \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --header </span><span style="color: #A5D6FF">&#39;Content-Type: application/json&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --data </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?punctuate=true&#39;</span></span></code></pre>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1658401448/blog/2022/08/saving-transcripts-from-terminal/full-output.png" alt="A terminal showing a huge block of JSON data returned from Deepgram"></p>
<p>Let\u2019s break down each part of this request:</p>
<ul>
<li><code is:raw>--request POST</code>: is a HTTP request with the POST method.</li>
<li><code is:raw>--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY'</code> - include details to link this request with our account/project.</li>
<li><code is:raw>--header 'Content-Type: application/json'</code> - JSON data will be sent with this request.</li>
<li><code is:raw>--data '{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}'</code>. - is the JSON data sent to Deepgram (an object containing one url parameter).</li>
<li><code is:raw>--url 'https://api.deepgram.com/v1/listen?punctuate=true'</code> - the URL to make the request to (Deepgram\u2019s endpoint). <code is:raw>punctuate=true</code> enables the <a href="https://developers.deepgram.com/documentation/features/punctuate/">punctuation</a> feature.</li>
<li><code is:raw>\\</code> allows us to break one command over several lines for readability.</li>
</ul>
<h2 id="shortening-your-request">Shortening Your Request</h2>
<p>The first example is handy for understanding all of the required parameters. Here is a more concise way to make the same request:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">punctuate=true \\</span></span>
<span class="line"><span style="color: #C9D1D9">     -H </span><span style="color: #A5D6FF">&quot;Authorization: Token YOUR_DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">     -H </span><span style="color: #A5D6FF">&quot;Content-Type: application/json&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">     -d </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span></span></code></pre>
<p>The first thing you\u2019ll notice is that the URL comes immediately after the <code is:raw>curl</code> command. You may have also noted the absence of an HTTP method - this would normally default to a GET request, but as this request has a body, a POST request is inferred. <code is:raw>--header</code> is shortened to <code is:raw>-H</code>, and <code is:raw>--data</code> to <code is:raw>-d</code>.</p>
<h2 id="adding-jq">Adding jq</h2>
<p><code is:raw>jq</code> is an excellent command-line utility that allows you to display and manipulate JSON data. On the terminal, a pipe (<code is:raw>|</code>) is often used to send the output of one command as an input for a second command. <code is:raw>jq</code> expects some JSON as input and an expression to describe how to display it.</p>
<p>This jq expression will extract just the transcript from the returned data object:</p>
<p><code is:raw>| jq '.results.channels[0].alternatives[0].transcript'</code></p>
<p>You can add it to the end of your cURL request like so:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">punctuate=true \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Authorization: Token YOUR_DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Content-Type: application/json&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -d </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq </span><span style="color: #A5D6FF">&#39;.results.channels[0].alternatives[0].transcript&#39;</span></span></code></pre>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1658401443/blog/2022/08/saving-transcripts-from-terminal/jq.png" alt="A terminal showing just the transcript text"></p>
<h2 id="saving-output-to-file">Saving Output to File</h2>
<p>Once you have the correct data extracted and formatted from <code is:raw>jq</code>, you can redirect the output to a new file by appending <code is:raw>&gt; output.txt</code> to any command that prints to the terminal. Here it is in practice:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">punctuate=true \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Authorization: Token YOUR_DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Content-Type: application/json&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -d </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq </span><span style="color: #A5D6FF">&#39;.results.channels[0].alternatives[0].transcript&#39;</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FF7B72">&gt;</span><span style="color: #C9D1D9"> output.txt</span></span></code></pre>
<h2 id="processing-multiple-files">Processing Multiple Files</h2>
<p>You can create <code is:raw>.sh</code> files to execute from your terminal, which contain multiple lines of bash script. Create a new file called <code is:raw>transcripts.sh</code> and open it in a code editor. Copy and paste the following:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #8B949E">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">urls=(</span><span style="color: #A5D6FF">&quot;https://static.deepgram.com/examples/TrumpDemocratsMeeting.nancyshort.wav&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;https://static.deepgram.com/examples/deep-learning-podcast-clip.wav&quot;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">dg_features=</span><span style="color: #A5D6FF">&quot;punctuate=true&amp;utterances=true&amp;diarize=true&amp;tier=enhanced&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">dg_key=</span><span style="color: #A5D6FF">&quot;YOUR_DEEPGRAM_API_KEY&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">for</span><span style="color: #C9D1D9"> url </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> \${urls[@]}</span><span style="color: #FF7B72">;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">do</span></span>
<span class="line"><span style="color: #C9D1D9">  filename=\${url</span><span style="color: #FF7B72">##*/</span><span style="color: #C9D1D9">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  RESPONSE=</span><span style="color: #A5D6FF">$(</span></span>
<span class="line"><span style="color: #A5D6FF">    curl -X POST https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">$dg_features</span><span style="color: #A5D6FF"> \\</span></span>
<span class="line"><span style="color: #A5D6FF">         -H &quot;Authorization: Token </span><span style="color: #C9D1D9">$dg_key</span><span style="color: #A5D6FF">&quot; \\</span></span>
<span class="line"><span style="color: #A5D6FF">         -H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span style="color: #A5D6FF">         -d &quot;{</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #A5D6FF">url</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #A5D6FF">:</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #C9D1D9">$url</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #A5D6FF">}&quot;</span></span>
<span class="line"><span style="color: #A5D6FF">  )</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">echo</span><span style="color: #C9D1D9"> $RESPONSE </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq </span><span style="color: #A5D6FF">&#39;.results.channels[0].alternatives[0].transcript&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">&gt;</span><span style="color: #C9D1D9"> $filename.txt</span></span>
<span class="line"><span style="color: #FF7B72">done</span></span></code></pre>
<p>Let\u2019s break down each part of this file:</p>
<ul>
<li>
<p>The first line - <code is:raw>#!/bin/bash</code> - is a shebang, and specifies which program should be called to run the script. In this case, bash.</p>
</li>
<li>
<p><code is:raw>urls</code> is a variable containing an array with three URLs. Notice that arrays use parentheses, and items are separated by a space only.</p>
</li>
<li>
<p><code is:raw>dg_features</code> and <code is:raw>dg_key</code> are variables you should alter for your exact use case.</p>
</li>
<li>
<p>Inside of the <code is:raw>for</code> loop:</p>
<ul>
<li><code is:raw>filename</code> extracts the last part of the URL (the filename), which will later be used to name the output file.</li>
<li>The <code is:raw>curl</code> command is the same as before, with variables interpolated. The output is stored in a new variable called <code is:raw>RESPONSE</code>.</li>
<li><code is:raw>RESPONSE</code> is sent to <code is:raw>jq</code>, and then redirected into a new text file.</li>
</ul>
</li>
</ul>
<p>Run the file in your terminal with <code is:raw>./transcripts.sh</code>. As a note, this request uses Deepgram\u2019s punctuation, utterances, diarize, and tier features.</p>
<h2 id="playing-with-jq">Playing with jq</h2>
<p><code is:raw>jq</code> is a remarkably powerful tool. The following expression will loop through the <code is:raw>results.utterances</code> array, and format a string for each item interpolating the speaker identifier and transcript text:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #79C0FF">echo</span><span style="color: #C9D1D9"> $RESPONSE </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq -r </span><span style="color: #A5D6FF">&#39;.results.utterances[] | &quot;[Speaker:\\(.speaker)] \\(.transcript)&quot;&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">&gt;</span><span style="color: #C9D1D9"> $filename.txt</span></span></code></pre>
<p>The output looks like this:</p>
<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #c9d1d9">[Speaker:0] agreement on other things that are really good. Nancy, would you like to say something?</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] Well, thank you, mister president for the opportunity to meet with you so that we can work together in a bipartisan way</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] to meet the needs of the American people. I think the American people recognize</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] that we must keep government open, that a shutdown is not worth anything.</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] And that you should</span></span></code></pre>
<p>I hope you found this valuable and interesting. If you have any questions, please feel free to get in touch - we love to help!</p>`;
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/saving-transcripts-from-terminal/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>I’ve recently started doing a lot more work directly in my terminal - and I’ve learned that writing Bash scripts doesn’t have to be scary. Today, we’ll write a set of commands and scripts to execute directly in our terminal.</p>
<h2 id="before-you-start">Before You Start</h2>
<p>You will need a Deepgram API Key - <a href="https://console.deepgram.com/signup?jump=keys">get one here</a>. You will also need to install <a href="https://stedolan.github.io/jq/">jq</a>.</p>
<h2 id="making-a-curl-request">Making a cURL Request</h2>
<p>Open your terminal and type (or copy and paste) the following, not forgetting to change <code>YOUR_DEEPGRAM_API_KEY</code> with a real API Key, and then press enter:</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --request POST \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --header </span><span style="color: #A5D6FF">&#39;Content-Type: application/json&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --data </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?punctuate=true&#39;</span></span></code></pre>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1658401448/blog/2022/08/saving-transcripts-from-terminal/full-output.png" alt="A terminal showing a huge block of JSON data returned from Deepgram"></p>
<p>Let’s break down each part of this request:</p>
<ul>
<li><code>--request POST</code>: is a HTTP request with the POST method.</li>
<li><code>--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY'</code> - include details to link this request with our account/project.</li>
<li><code>--header 'Content-Type: application/json'</code> - JSON data will be sent with this request.</li>
<li><code>--data '{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}'</code>. - is the JSON data sent to Deepgram (an object containing one url parameter).</li>
<li><code>--url 'https://api.deepgram.com/v1/listen?punctuate=true'</code> - the URL to make the request to (Deepgram’s endpoint). <code>punctuate=true</code> enables the <a href="https://developers.deepgram.com/documentation/features/punctuate/">punctuation</a> feature.</li>
<li><code>\\</code> allows us to break one command over several lines for readability.</li>
</ul>
<h2 id="shortening-your-request">Shortening Your Request</h2>
<p>The first example is handy for understanding all of the required parameters. Here is a more concise way to make the same request:</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">punctuate=true \\</span></span>
<span class="line"><span style="color: #C9D1D9">     -H </span><span style="color: #A5D6FF">&quot;Authorization: Token YOUR_DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">     -H </span><span style="color: #A5D6FF">&quot;Content-Type: application/json&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">     -d </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span></span></code></pre>
<p>The first thing you’ll notice is that the URL comes immediately after the <code>curl</code> command. You may have also noted the absence of an HTTP method - this would normally default to a GET request, but as this request has a body, a POST request is inferred. <code>--header</code> is shortened to <code>-H</code>, and <code>--data</code> to <code>-d</code>.</p>
<h2 id="adding-jq">Adding jq</h2>
<p><code>jq</code> is an excellent command-line utility that allows you to display and manipulate JSON data. On the terminal, a pipe (<code>|</code>) is often used to send the output of one command as an input for a second command. <code>jq</code> expects some JSON as input and an expression to describe how to display it.</p>
<p>This jq expression will extract just the transcript from the returned data object:</p>
<p><code>| jq '.results.channels[0].alternatives[0].transcript'</code></p>
<p>You can add it to the end of your cURL request like so:</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">punctuate=true \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Authorization: Token YOUR_DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Content-Type: application/json&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -d </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq </span><span style="color: #A5D6FF">&#39;.results.channels[0].alternatives[0].transcript&#39;</span></span></code></pre>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1658401443/blog/2022/08/saving-transcripts-from-terminal/jq.png" alt="A terminal showing just the transcript text"></p>
<h2 id="saving-output-to-file">Saving Output to File</h2>
<p>Once you have the correct data extracted and formatted from <code>jq</code>, you can redirect the output to a new file by appending <code>&gt; output.txt</code> to any command that prints to the terminal. Here it is in practice:</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">punctuate=true \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Authorization: Token YOUR_DEEPGRAM_API_KEY&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -H </span><span style="color: #A5D6FF">&quot;Content-Type: application/json&quot;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  -d </span><span style="color: #A5D6FF">&#39;{&quot;url&quot;:&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;}&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq </span><span style="color: #A5D6FF">&#39;.results.channels[0].alternatives[0].transcript&#39;</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FF7B72">&gt;</span><span style="color: #C9D1D9"> output.txt</span></span></code></pre>
<h2 id="processing-multiple-files">Processing Multiple Files</h2>
<p>You can create <code>.sh</code> files to execute from your terminal, which contain multiple lines of bash script. Create a new file called <code>transcripts.sh</code> and open it in a code editor. Copy and paste the following:</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #8B949E">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">urls=(</span><span style="color: #A5D6FF">&quot;https://static.deepgram.com/examples/TrumpDemocratsMeeting.nancyshort.wav&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;https://static.deepgram.com/examples/nasa-spacewalk-interview.wav&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;https://static.deepgram.com/examples/deep-learning-podcast-clip.wav&quot;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">dg_features=</span><span style="color: #A5D6FF">&quot;punctuate=true&amp;utterances=true&amp;diarize=true&amp;tier=enhanced&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">dg_key=</span><span style="color: #A5D6FF">&quot;YOUR_DEEPGRAM_API_KEY&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">for</span><span style="color: #C9D1D9"> url </span><span style="color: #FF7B72">in</span><span style="color: #C9D1D9"> \${urls[@]}</span><span style="color: #FF7B72">;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">do</span></span>
<span class="line"><span style="color: #C9D1D9">  filename=\${url</span><span style="color: #FF7B72">##*/</span><span style="color: #C9D1D9">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  RESPONSE=</span><span style="color: #A5D6FF">$(</span></span>
<span class="line"><span style="color: #A5D6FF">    curl -X POST https://api.deepgram.com/v1/listen</span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9">$dg_features</span><span style="color: #A5D6FF"> \\</span></span>
<span class="line"><span style="color: #A5D6FF">         -H &quot;Authorization: Token </span><span style="color: #C9D1D9">$dg_key</span><span style="color: #A5D6FF">&quot; \\</span></span>
<span class="line"><span style="color: #A5D6FF">         -H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span style="color: #A5D6FF">         -d &quot;{</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #A5D6FF">url</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #A5D6FF">:</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #C9D1D9">$url</span><span style="color: #79C0FF">\\&quot;</span><span style="color: #A5D6FF">}&quot;</span></span>
<span class="line"><span style="color: #A5D6FF">  )</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">echo</span><span style="color: #C9D1D9"> $RESPONSE </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq </span><span style="color: #A5D6FF">&#39;.results.channels[0].alternatives[0].transcript&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">&gt;</span><span style="color: #C9D1D9"> $filename.txt</span></span>
<span class="line"><span style="color: #FF7B72">done</span></span></code></pre>
<p>Let’s break down each part of this file:</p>
<ul>
<li>
<p>The first line - <code>#!/bin/bash</code> - is a shebang, and specifies which program should be called to run the script. In this case, bash.</p>
</li>
<li>
<p><code>urls</code> is a variable containing an array with three URLs. Notice that arrays use parentheses, and items are separated by a space only.</p>
</li>
<li>
<p><code>dg_features</code> and <code>dg_key</code> are variables you should alter for your exact use case.</p>
</li>
<li>
<p>Inside of the <code>for</code> loop:</p>
<ul>
<li><code>filename</code> extracts the last part of the URL (the filename), which will later be used to name the output file.</li>
<li>The <code>curl</code> command is the same as before, with variables interpolated. The output is stored in a new variable called <code>RESPONSE</code>.</li>
<li><code>RESPONSE</code> is sent to <code>jq</code>, and then redirected into a new text file.</li>
</ul>
</li>
</ul>
<p>Run the file in your terminal with <code>./transcripts.sh</code>. As a note, this request uses Deepgram’s punctuation, utterances, diarize, and tier features.</p>
<h2 id="playing-with-jq">Playing with jq</h2>
<p><code>jq</code> is a remarkably powerful tool. The following expression will loop through the <code>results.utterances</code> array, and format a string for each item interpolating the speaker identifier and transcript text:</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #79C0FF">echo</span><span style="color: #C9D1D9"> $RESPONSE </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> jq -r </span><span style="color: #A5D6FF">&#39;.results.utterances[] | &quot;[Speaker:\\(.speaker)] \\(.transcript)&quot;&#39;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">&gt;</span><span style="color: #C9D1D9"> $filename.txt</span></span></code></pre>
<p>The output looks like this:</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #c9d1d9">[Speaker:0] agreement on other things that are really good. Nancy, would you like to say something?</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] Well, thank you, mister president for the opportunity to meet with you so that we can work together in a bipartisan way</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] to meet the needs of the American people. I think the American people recognize</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] that we must keep government open, that a shutdown is not worth anything.</span></span>
<span class="line"><span style="color: #c9d1d9">[Speaker:1] And that you should</span></span></code></pre>
<p>I hope you found this valuable and interesting. If you have any questions, please feel free to get in touch - we love to help!</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/saving-transcripts-from-terminal/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
