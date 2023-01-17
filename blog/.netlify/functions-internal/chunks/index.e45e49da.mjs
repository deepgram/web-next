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

const metadata = { "headings": [{ "depth": 2, "slug": "turn-recorded-audio-into-insights", "text": "Turn Recorded Audio Into Insights" }, { "depth": 2, "slug": "popular-use-cases-using-topic-detection", "text": "Popular Use Cases Using Topic Detection" }, { "depth": 2, "slug": "identify-over-350-topics", "text": "Identify over 350 topics" }, { "depth": 2, "slug": "implement-topic-detection-with-deepgram", "text": "Implement Topic Detection with Deepgram" }, { "depth": 3, "slug": "with-curl", "text": "With cURL" }, { "depth": 3, "slug": "with-nodejs", "text": "With Node.js" }, { "depth": 3, "slug": "with-python", "text": "With Python" }, { "depth": 2, "slug": "topic-detection-results", "text": "Topic Detection Results" }], "source": `Today, we are very excited to announce that Deepgram has officially launched the Topic Detection feature as part of our speech understanding offerings. Deepgram's Topic Detection is based on an unsupervised topic modeling technique that enables developers and customers to detect the most important and relevant topics that are referenced in the conversations. 

## Turn Recorded Audio Into Insights

Having not enough data isn't a significant problem anymore. In fact, over [2.5 quintillion bytes](https://seedscientific.com/how-much-data-is-created-every-day/) of data get created every day. However, one of the biggest challenges customers face today is finding insights, organizing, tagging, and leveraging the data relevant to brands, prospects, and customers to deliver a fantastic experience to their end users. 

Topic Detection in ASR and NLU has become one of the must-have features. Developers require advanced solutions to perform a deeper analysis of their audio data based on detected topics and subjects to optimize resources, automate workflow, extract insights, improve search capabilities and enhance end users' experience.

## Popular Use Cases Using Topic Detection

* Support the Quality Assurance team to analyze conversations based on discussed topics, identify trends and patterns, and improve overall customer experience.
* Categorize and tag conversations, meetings, and podcasts based on identified topics to enhance search and recommendation capabilities.
* Extract meaningful and actionable insights from conversations and audio data based on discussed topics and recurring themes.

## Identify over 350 topics

Deepgram's Topic Detection  feature identifies patterns and generates key topics along with the output text, confidence score for each topic, and word positions to identify segments of speech. Deepgram's Topic Detection is based on Topic Modeling which is an unsupervised machine learning technique to cluster generated text based on the detected topics. It supports over 350 topics. Topic Extraction can be enabled using detect_topics=true  and is supported for English language and pre-recorded audio and is available for both our on-prem and hosted customers.

## Implement Topic Detection with Deepgram

To implement Topic Detection from audio recordings, all you need to do is add detect_topics=true in your API call.

### With cURL

\`\`\`bash
curl --request POST \\
--url 'https://api.deepgram.com/v1/listen?detect_topics=true&punctuate=true&tier=enhanced' \\
--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \\
--header 'content-type: audio/mp3' \\
--data-binary '@podcast.mp3' \\
\`\`\`

Alternatively, you can use one of our SDKs to implement Topic Detection:

### With Node.js

\`\`\`js
const fs = require('fs')
const { Deepgram } = require('@deepgram/sdk')

// Your Deepgram API Key
const deepgramApiKey = 'YOUR_DEEPGRAM_API_KEY'

const file = 'YOUR_FILE_LOCATION'
const mimetype = 'YOUR_FILE_MIME_TYPE'
const deepgram = new Deepgram(deepgramApiKey)

const audio = fs.readFileSync(file)

const source = {
    buffer: audio,
    mimetype: mimetype,
}

deepgram.transcription
  .preRecorded(source, {
    detect_topics: true,
  })
  .then((response) => {
    console.dir(response, { depth: null })

    // Write only the transcript to the console
    //console.dir(response.results.channels[0].alternatives[0].transcript, { depth: null });
  })
  .catch((err) => {
    console.log(err)
  })
\`\`\`

### With Python

\`\`\`py
from deepgram import Deepgram
import asyncio, json

DEEPGRAM_API_KEY = 'YOUR_DEEPGRAM_API_KEY'

FILE = 'YOUR_FILE_LOCATION'
MIMETYPE = 'YOUR_FILE_MIME_TYPE'

async def main():

  deepgram = Deepgram(DEEPGRAM_API_KEY)

  audio = open(FILE, 'rb')

  source = {
    'buffer': audio,
    'mimetype': MIMETYPE
  }

  response = await asyncio.create_task(
    deepgram.transcription.prerecorded(
      source,
      {
        'detect_topics': True
      }
    )
  )

  print(json.dumps(response, indent=4))

  # Write only the transcript to the console
  #print(response["results"]["channels"][0]["alternatives"][0]["transcript"])

try:
  # If running in a Jupyter notebook, Jupyter is already running an event loop, so run main with this line instead:
  #await main()
  asyncio.run(main())
except Exception as e:
  exception_type, exception_object, exception_traceback = sys.exc_info()
  line_number = exception_traceback.tb_lineno
  print(f'line {line_number}: {exception_type} - {e}')
\`\`\`

## Topic Detection Results

When the file is finished processing, you'll receive a sample JSON response that has the following basic structure:

\`\`\`bash
"topics": [
  {
    "topics": [
      {
        "topic": "renewable energy",
        "confidence": 0.80515814
      },
      {
        "topic": "climate change",
        "confidence": 0.51437885
      }
    ],
    "text": "Even Greenpeace underestimated the rise of solar. When one of the world's largest environmental advocacy groups released an optimistic industry analysis called the energy revolution in twenty ten. It was far more ambitious than any government predictions, and it still got it wrong. Greenpeace estimated that by twenty twenty, the world would have three hundred and thirty five thousand megawatts of installed solar photovoltaic capacity\u2026...",
    "start_word": 0,
    "end_word": 135
  }
]
\`\`\`

Developers can take the outputs from the API that performs Topic Identification to build downstream workflows, generate tags based on topics, power analytics tools, build search and recommendation capabilities, or integrate with other applications. 

To learn more about our API, please see the [Topic Detection page](https://developers.deepgram.com/documentation/features/detect-topics/) in our documentation. We welcome your feedback, please share it with us at [Product Feedback](https://deepgram.hellonext.co/b/feedback).`, "html": '<p>Today, we are very excited to announce that Deepgram has officially launched the Topic Detection feature as part of our speech understanding offerings. Deepgram\u2019s Topic Detection is based on an unsupervised topic modeling technique that enables developers and customers to detect the most important and relevant topics that are referenced in the conversations.</p>\n<h2 id="turn-recorded-audio-into-insights">Turn Recorded Audio Into Insights</h2>\n<p>Having not enough data isn\u2019t a significant problem anymore. In fact, over <a href="https://seedscientific.com/how-much-data-is-created-every-day/">2.5 quintillion bytes</a> of data get created every day. However, one of the biggest challenges customers face today is finding insights, organizing, tagging, and leveraging the data relevant to brands, prospects, and customers to deliver a fantastic experience to their end users.</p>\n<p>Topic Detection in ASR and NLU has become one of the must-have features. Developers require advanced solutions to perform a deeper analysis of their audio data based on detected topics and subjects to optimize resources, automate workflow, extract insights, improve search capabilities and enhance end users\u2019 experience.</p>\n<h2 id="popular-use-cases-using-topic-detection">Popular Use Cases Using Topic Detection</h2>\n<ul>\n<li>Support the Quality Assurance team to analyze conversations based on discussed topics, identify trends and patterns, and improve overall customer experience.</li>\n<li>Categorize and tag conversations, meetings, and podcasts based on identified topics to enhance search and recommendation capabilities.</li>\n<li>Extract meaningful and actionable insights from conversations and audio data based on discussed topics and recurring themes.</li>\n</ul>\n<h2 id="identify-over-350-topics">Identify over 350 topics</h2>\n<p>Deepgram\u2019s Topic Detection  feature identifies patterns and generates key topics along with the output text, confidence score for each topic, and word positions to identify segments of speech. Deepgram\u2019s Topic Detection is based on Topic Modeling which is an unsupervised machine learning technique to cluster generated text based on the detected topics. It supports over 350 topics. Topic Extraction can be enabled using detect_topics=true  and is supported for English language and pre-recorded audio and is available for both our on-prem and hosted customers.</p>\n<h2 id="implement-topic-detection-with-deepgram">Implement Topic Detection with Deepgram</h2>\n<p>To implement Topic Detection from audio recordings, all you need to do is add detect_topics=true in your API call.</p>\n<h3 id="with-curl">With cURL</h3>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl --request POST \\</span></span>\n<span class="line"><span style="color: #C9D1D9">--url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?detect_topics=true&amp;punctuate=true&amp;tier=enhanced&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">--header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">--header </span><span style="color: #A5D6FF">&#39;content-type: audio/mp3&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">--data-binary </span><span style="color: #A5D6FF">&#39;@podcast.mp3&#39;</span><span style="color: #C9D1D9"> \\</span></span></code></pre>\n<p>Alternatively, you can use one of our SDKs to implement Topic Detection:</p>\n<h3 id="with-nodejs">With Node.js</h3>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">fs</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">require</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;fs&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> { </span><span style="color: #79C0FF">Deepgram</span><span style="color: #C9D1D9"> } </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">require</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;@deepgram/sdk&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #8B949E">// Your Deepgram API Key</span></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">deepgramApiKey</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_DEEPGRAM_API_KEY&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">file</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_LOCATION&#39;</span></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">mimetype</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_MIME_TYPE&#39;</span></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">deepgram</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">new</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">Deepgram</span><span style="color: #C9D1D9">(deepgramApiKey)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">audio</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> fs.</span><span style="color: #D2A8FF">readFileSync</span><span style="color: #C9D1D9">(file)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">source</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">    buffer: audio,</span></span>\n<span class="line"><span style="color: #C9D1D9">    mimetype: mimetype,</span></span>\n<span class="line"><span style="color: #C9D1D9">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">deepgram.transcription</span></span>\n<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">preRecorded</span><span style="color: #C9D1D9">(source, {</span></span>\n<span class="line"><span style="color: #C9D1D9">    detect_topics: </span><span style="color: #79C0FF">true</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  })</span></span>\n<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">then</span><span style="color: #C9D1D9">((</span><span style="color: #FFA657">response</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">=&gt;</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">    console.</span><span style="color: #D2A8FF">dir</span><span style="color: #C9D1D9">(response, { depth: </span><span style="color: #79C0FF">null</span><span style="color: #C9D1D9"> })</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #8B949E">// Write only the transcript to the console</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #8B949E">//console.dir(response.results.channels[0].alternatives[0].transcript, { depth: null });</span></span>\n<span class="line"><span style="color: #C9D1D9">  })</span></span>\n<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">catch</span><span style="color: #C9D1D9">((</span><span style="color: #FFA657">err</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">=&gt;</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">    console.</span><span style="color: #D2A8FF">log</span><span style="color: #C9D1D9">(err)</span></span>\n<span class="line"><span style="color: #C9D1D9">  })</span></span></code></pre>\n<h3 id="with-python">With Python</h3>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> deepgram </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> Deepgram</span></span>\n<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> asyncio, json</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #79C0FF">DEEPGRAM_API_KEY</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_DEEPGRAM_API_KEY&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #79C0FF">FILE</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_LOCATION&#39;</span></span>\n<span class="line"><span style="color: #79C0FF">MIMETYPE</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_MIME_TYPE&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">main</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  deepgram </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Deepgram(</span><span style="color: #79C0FF">DEEPGRAM_API_KEY</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  audio </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">open</span><span style="color: #C9D1D9">(</span><span style="color: #79C0FF">FILE</span><span style="color: #C9D1D9">, </span><span style="color: #A5D6FF">&#39;rb&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  source </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&#39;buffer&#39;</span><span style="color: #C9D1D9">: audio,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&#39;mimetype&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">MIMETYPE</span></span>\n<span class="line"><span style="color: #C9D1D9">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> asyncio.create_task(</span></span>\n<span class="line"><span style="color: #C9D1D9">    deepgram.transcription.prerecorded(</span></span>\n<span class="line"><span style="color: #C9D1D9">      source,</span></span>\n<span class="line"><span style="color: #C9D1D9">      {</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&#39;detect_topics&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">True</span></span>\n<span class="line"><span style="color: #C9D1D9">      }</span></span>\n<span class="line"><span style="color: #C9D1D9">    )</span></span>\n<span class="line"><span style="color: #C9D1D9">  )</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">print</span><span style="color: #C9D1D9">(json.dumps(response, </span><span style="color: #FFA657">indent</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">4</span><span style="color: #C9D1D9">))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Write only the transcript to the console</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">#print(response[&quot;results&quot;][&quot;channels&quot;][0][&quot;alternatives&quot;][0][&quot;transcript&quot;])</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">try</span><span style="color: #C9D1D9">:</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># If running in a Jupyter notebook, Jupyter is already running an event loop, so run main with this line instead:</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">#await main()</span></span>\n<span class="line"><span style="color: #C9D1D9">  asyncio.run(main())</span></span>\n<span class="line"><span style="color: #FF7B72">except</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">Exception</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> e:</span></span>\n<span class="line"><span style="color: #C9D1D9">  exception_type, exception_object, exception_traceback </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> sys.exc_info()</span></span>\n<span class="line"><span style="color: #C9D1D9">  line_number </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> exception_traceback.tb_lineno</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">print</span><span style="color: #C9D1D9">(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&#39;line </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">line_number</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF">: </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">exception_type</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> - </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">e</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF">&#39;</span><span style="color: #C9D1D9">)</span></span></code></pre>\n<h2 id="topic-detection-results">Topic Detection Results</h2>\n<p>When the file is finished processing, you\u2019ll receive a sample JSON response that has the following basic structure:</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #A5D6FF">&quot;topics&quot;</span><span style="color: #C9D1D9">: [</span></span>\n<span class="line"><span style="color: #C9D1D9">  {</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;topics&quot;</span><span style="color: #C9D1D9">: [</span></span>\n<span class="line"><span style="color: #C9D1D9">      {</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;topic&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;renewable energy&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;confidence&quot;</span><span style="color: #C9D1D9">: 0.80515814</span></span>\n<span class="line"><span style="color: #C9D1D9">      },</span></span>\n<span class="line"><span style="color: #C9D1D9">      {</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;topic&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;climate change&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;confidence&quot;</span><span style="color: #C9D1D9">: 0.51437885</span></span>\n<span class="line"><span style="color: #C9D1D9">      }</span></span>\n<span class="line"><span style="color: #C9D1D9">    ],</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;text&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Even Greenpeace underestimated the rise of solar. When one of the world&#39;s largest environmental advocacy groups released an optimistic industry analysis called the energy revolution in twenty ten. It was far more ambitious than any government predictions, and it still got it wrong. Greenpeace estimated that by twenty twenty, the world would have three hundred and thirty five thousand megawatts of installed solar photovoltaic capacity\u2026...&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;start_word&quot;</span><span style="color: #C9D1D9">: 0,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;end_word&quot;</span><span style="color: #C9D1D9">: 135</span></span>\n<span class="line"><span style="color: #C9D1D9">  }</span></span>\n<span class="line"><span style="color: #C9D1D9">]</span></span></code></pre>\n<p>Developers can take the outputs from the API that performs Topic Identification to build downstream workflows, generate tags based on topics, power analytics tools, build search and recommendation capabilities, or integrate with other applications.</p>\n<p>To learn more about our API, please see the <a href="https://developers.deepgram.com/documentation/features/detect-topics/">Topic Detection page</a> in our documentation. We welcome your feedback, please share it with us at <a href="https://deepgram.hellonext.co/b/feedback">Product Feedback</a>.</p>' };
const frontmatter = { "title": "Introducing Topic Detection Feature", "description": "Automate workflow, enhance recommendations and search capabilities, and organize customers\u2019 conversations by identifying and extracting key topics from your audio data using Deepgram\u2019s Topic Detection API.", "date": "2022-10-11T22:06:32.479Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1665610954/blog/Introducing%20Topic%20Detection%20Feature/2210-Topic-Detection-feature-featured-1200x630_2x_j0qroc.png", "authors": ["pankaj-trivedi"], "category": "product-news", "tags": ["nlu"], "shorturls": { "share": "https://dpgr.am/8f90c13", "twitter": "https://dpgr.am/d02eedf", "linkedin": "https://dpgr.am/0dfcd0a", "reddit": "https://dpgr.am/aff224e", "facebook": "https://dpgr.am/bcf89e3" }, "astro": { "headings": [{ "depth": 2, "slug": "turn-recorded-audio-into-insights", "text": "Turn Recorded Audio Into Insights" }, { "depth": 2, "slug": "popular-use-cases-using-topic-detection", "text": "Popular Use Cases Using Topic Detection" }, { "depth": 2, "slug": "identify-over-350-topics", "text": "Identify over 350 topics" }, { "depth": 2, "slug": "implement-topic-detection-with-deepgram", "text": "Implement Topic Detection with Deepgram" }, { "depth": 3, "slug": "with-curl", "text": "With cURL" }, { "depth": 3, "slug": "with-nodejs", "text": "With Node.js" }, { "depth": 3, "slug": "with-python", "text": "With Python" }, { "depth": 2, "slug": "topic-detection-results", "text": "Topic Detection Results" }], "source": `Today, we are very excited to announce that Deepgram has officially launched the Topic Detection feature as part of our speech understanding offerings. Deepgram's Topic Detection is based on an unsupervised topic modeling technique that enables developers and customers to detect the most important and relevant topics that are referenced in the conversations. 

## Turn Recorded Audio Into Insights

Having not enough data isn't a significant problem anymore. In fact, over [2.5 quintillion bytes](https://seedscientific.com/how-much-data-is-created-every-day/) of data get created every day. However, one of the biggest challenges customers face today is finding insights, organizing, tagging, and leveraging the data relevant to brands, prospects, and customers to deliver a fantastic experience to their end users. 

Topic Detection in ASR and NLU has become one of the must-have features. Developers require advanced solutions to perform a deeper analysis of their audio data based on detected topics and subjects to optimize resources, automate workflow, extract insights, improve search capabilities and enhance end users' experience.

## Popular Use Cases Using Topic Detection

* Support the Quality Assurance team to analyze conversations based on discussed topics, identify trends and patterns, and improve overall customer experience.
* Categorize and tag conversations, meetings, and podcasts based on identified topics to enhance search and recommendation capabilities.
* Extract meaningful and actionable insights from conversations and audio data based on discussed topics and recurring themes.

## Identify over 350 topics

Deepgram's Topic Detection  feature identifies patterns and generates key topics along with the output text, confidence score for each topic, and word positions to identify segments of speech. Deepgram's Topic Detection is based on Topic Modeling which is an unsupervised machine learning technique to cluster generated text based on the detected topics. It supports over 350 topics. Topic Extraction can be enabled using detect_topics=true  and is supported for English language and pre-recorded audio and is available for both our on-prem and hosted customers.

## Implement Topic Detection with Deepgram

To implement Topic Detection from audio recordings, all you need to do is add detect_topics=true in your API call.

### With cURL

\`\`\`bash
curl --request POST \\
--url 'https://api.deepgram.com/v1/listen?detect_topics=true&punctuate=true&tier=enhanced' \\
--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \\
--header 'content-type: audio/mp3' \\
--data-binary '@podcast.mp3' \\
\`\`\`

Alternatively, you can use one of our SDKs to implement Topic Detection:

### With Node.js

\`\`\`js
const fs = require('fs')
const { Deepgram } = require('@deepgram/sdk')

// Your Deepgram API Key
const deepgramApiKey = 'YOUR_DEEPGRAM_API_KEY'

const file = 'YOUR_FILE_LOCATION'
const mimetype = 'YOUR_FILE_MIME_TYPE'
const deepgram = new Deepgram(deepgramApiKey)

const audio = fs.readFileSync(file)

const source = {
    buffer: audio,
    mimetype: mimetype,
}

deepgram.transcription
  .preRecorded(source, {
    detect_topics: true,
  })
  .then((response) => {
    console.dir(response, { depth: null })

    // Write only the transcript to the console
    //console.dir(response.results.channels[0].alternatives[0].transcript, { depth: null });
  })
  .catch((err) => {
    console.log(err)
  })
\`\`\`

### With Python

\`\`\`py
from deepgram import Deepgram
import asyncio, json

DEEPGRAM_API_KEY = 'YOUR_DEEPGRAM_API_KEY'

FILE = 'YOUR_FILE_LOCATION'
MIMETYPE = 'YOUR_FILE_MIME_TYPE'

async def main():

  deepgram = Deepgram(DEEPGRAM_API_KEY)

  audio = open(FILE, 'rb')

  source = {
    'buffer': audio,
    'mimetype': MIMETYPE
  }

  response = await asyncio.create_task(
    deepgram.transcription.prerecorded(
      source,
      {
        'detect_topics': True
      }
    )
  )

  print(json.dumps(response, indent=4))

  # Write only the transcript to the console
  #print(response["results"]["channels"][0]["alternatives"][0]["transcript"])

try:
  # If running in a Jupyter notebook, Jupyter is already running an event loop, so run main with this line instead:
  #await main()
  asyncio.run(main())
except Exception as e:
  exception_type, exception_object, exception_traceback = sys.exc_info()
  line_number = exception_traceback.tb_lineno
  print(f'line {line_number}: {exception_type} - {e}')
\`\`\`

## Topic Detection Results

When the file is finished processing, you'll receive a sample JSON response that has the following basic structure:

\`\`\`bash
"topics": [
  {
    "topics": [
      {
        "topic": "renewable energy",
        "confidence": 0.80515814
      },
      {
        "topic": "climate change",
        "confidence": 0.51437885
      }
    ],
    "text": "Even Greenpeace underestimated the rise of solar. When one of the world's largest environmental advocacy groups released an optimistic industry analysis called the energy revolution in twenty ten. It was far more ambitious than any government predictions, and it still got it wrong. Greenpeace estimated that by twenty twenty, the world would have three hundred and thirty five thousand megawatts of installed solar photovoltaic capacity\u2026...",
    "start_word": 0,
    "end_word": 135
  }
]
\`\`\`

Developers can take the outputs from the API that performs Topic Identification to build downstream workflows, generate tags based on topics, power analytics tools, build search and recommendation capabilities, or integrate with other applications. 

To learn more about our API, please see the [Topic Detection page](https://developers.deepgram.com/documentation/features/detect-topics/) in our documentation. We welcome your feedback, please share it with us at [Product Feedback](https://deepgram.hellonext.co/b/feedback).`, "html": '<p>Today, we are very excited to announce that Deepgram has officially launched the Topic Detection feature as part of our speech understanding offerings. Deepgram\u2019s Topic Detection is based on an unsupervised topic modeling technique that enables developers and customers to detect the most important and relevant topics that are referenced in the conversations.</p>\n<h2 id="turn-recorded-audio-into-insights">Turn Recorded Audio Into Insights</h2>\n<p>Having not enough data isn\u2019t a significant problem anymore. In fact, over <a href="https://seedscientific.com/how-much-data-is-created-every-day/">2.5 quintillion bytes</a> of data get created every day. However, one of the biggest challenges customers face today is finding insights, organizing, tagging, and leveraging the data relevant to brands, prospects, and customers to deliver a fantastic experience to their end users.</p>\n<p>Topic Detection in ASR and NLU has become one of the must-have features. Developers require advanced solutions to perform a deeper analysis of their audio data based on detected topics and subjects to optimize resources, automate workflow, extract insights, improve search capabilities and enhance end users\u2019 experience.</p>\n<h2 id="popular-use-cases-using-topic-detection">Popular Use Cases Using Topic Detection</h2>\n<ul>\n<li>Support the Quality Assurance team to analyze conversations based on discussed topics, identify trends and patterns, and improve overall customer experience.</li>\n<li>Categorize and tag conversations, meetings, and podcasts based on identified topics to enhance search and recommendation capabilities.</li>\n<li>Extract meaningful and actionable insights from conversations and audio data based on discussed topics and recurring themes.</li>\n</ul>\n<h2 id="identify-over-350-topics">Identify over 350 topics</h2>\n<p>Deepgram\u2019s Topic Detection  feature identifies patterns and generates key topics along with the output text, confidence score for each topic, and word positions to identify segments of speech. Deepgram\u2019s Topic Detection is based on Topic Modeling which is an unsupervised machine learning technique to cluster generated text based on the detected topics. It supports over 350 topics. Topic Extraction can be enabled using detect_topics=true  and is supported for English language and pre-recorded audio and is available for both our on-prem and hosted customers.</p>\n<h2 id="implement-topic-detection-with-deepgram">Implement Topic Detection with Deepgram</h2>\n<p>To implement Topic Detection from audio recordings, all you need to do is add detect_topics=true in your API call.</p>\n<h3 id="with-curl">With cURL</h3>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl --request POST \\</span></span>\n<span class="line"><span style="color: #C9D1D9">--url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?detect_topics=true&amp;punctuate=true&amp;tier=enhanced&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">--header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">--header </span><span style="color: #A5D6FF">&#39;content-type: audio/mp3&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">--data-binary </span><span style="color: #A5D6FF">&#39;@podcast.mp3&#39;</span><span style="color: #C9D1D9"> \\</span></span></code></pre>\n<p>Alternatively, you can use one of our SDKs to implement Topic Detection:</p>\n<h3 id="with-nodejs">With Node.js</h3>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">fs</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">require</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;fs&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> { </span><span style="color: #79C0FF">Deepgram</span><span style="color: #C9D1D9"> } </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">require</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;@deepgram/sdk&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #8B949E">// Your Deepgram API Key</span></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">deepgramApiKey</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_DEEPGRAM_API_KEY&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">file</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_LOCATION&#39;</span></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">mimetype</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_MIME_TYPE&#39;</span></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">deepgram</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">new</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">Deepgram</span><span style="color: #C9D1D9">(deepgramApiKey)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">audio</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> fs.</span><span style="color: #D2A8FF">readFileSync</span><span style="color: #C9D1D9">(file)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">source</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">    buffer: audio,</span></span>\n<span class="line"><span style="color: #C9D1D9">    mimetype: mimetype,</span></span>\n<span class="line"><span style="color: #C9D1D9">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">deepgram.transcription</span></span>\n<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">preRecorded</span><span style="color: #C9D1D9">(source, {</span></span>\n<span class="line"><span style="color: #C9D1D9">    detect_topics: </span><span style="color: #79C0FF">true</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  })</span></span>\n<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">then</span><span style="color: #C9D1D9">((</span><span style="color: #FFA657">response</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">=&gt;</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">    console.</span><span style="color: #D2A8FF">dir</span><span style="color: #C9D1D9">(response, { depth: </span><span style="color: #79C0FF">null</span><span style="color: #C9D1D9"> })</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #8B949E">// Write only the transcript to the console</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #8B949E">//console.dir(response.results.channels[0].alternatives[0].transcript, { depth: null });</span></span>\n<span class="line"><span style="color: #C9D1D9">  })</span></span>\n<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">catch</span><span style="color: #C9D1D9">((</span><span style="color: #FFA657">err</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">=&gt;</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">    console.</span><span style="color: #D2A8FF">log</span><span style="color: #C9D1D9">(err)</span></span>\n<span class="line"><span style="color: #C9D1D9">  })</span></span></code></pre>\n<h3 id="with-python">With Python</h3>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> deepgram </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> Deepgram</span></span>\n<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> asyncio, json</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #79C0FF">DEEPGRAM_API_KEY</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_DEEPGRAM_API_KEY&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #79C0FF">FILE</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_LOCATION&#39;</span></span>\n<span class="line"><span style="color: #79C0FF">MIMETYPE</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_MIME_TYPE&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">main</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  deepgram </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Deepgram(</span><span style="color: #79C0FF">DEEPGRAM_API_KEY</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  audio </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">open</span><span style="color: #C9D1D9">(</span><span style="color: #79C0FF">FILE</span><span style="color: #C9D1D9">, </span><span style="color: #A5D6FF">&#39;rb&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  source </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&#39;buffer&#39;</span><span style="color: #C9D1D9">: audio,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&#39;mimetype&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">MIMETYPE</span></span>\n<span class="line"><span style="color: #C9D1D9">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> asyncio.create_task(</span></span>\n<span class="line"><span style="color: #C9D1D9">    deepgram.transcription.prerecorded(</span></span>\n<span class="line"><span style="color: #C9D1D9">      source,</span></span>\n<span class="line"><span style="color: #C9D1D9">      {</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&#39;detect_topics&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">True</span></span>\n<span class="line"><span style="color: #C9D1D9">      }</span></span>\n<span class="line"><span style="color: #C9D1D9">    )</span></span>\n<span class="line"><span style="color: #C9D1D9">  )</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">print</span><span style="color: #C9D1D9">(json.dumps(response, </span><span style="color: #FFA657">indent</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">4</span><span style="color: #C9D1D9">))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Write only the transcript to the console</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">#print(response[&quot;results&quot;][&quot;channels&quot;][0][&quot;alternatives&quot;][0][&quot;transcript&quot;])</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">try</span><span style="color: #C9D1D9">:</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># If running in a Jupyter notebook, Jupyter is already running an event loop, so run main with this line instead:</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">#await main()</span></span>\n<span class="line"><span style="color: #C9D1D9">  asyncio.run(main())</span></span>\n<span class="line"><span style="color: #FF7B72">except</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">Exception</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> e:</span></span>\n<span class="line"><span style="color: #C9D1D9">  exception_type, exception_object, exception_traceback </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> sys.exc_info()</span></span>\n<span class="line"><span style="color: #C9D1D9">  line_number </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> exception_traceback.tb_lineno</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">print</span><span style="color: #C9D1D9">(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&#39;line </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">line_number</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF">: </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">exception_type</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> - </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">e</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF">&#39;</span><span style="color: #C9D1D9">)</span></span></code></pre>\n<h2 id="topic-detection-results">Topic Detection Results</h2>\n<p>When the file is finished processing, you\u2019ll receive a sample JSON response that has the following basic structure:</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #A5D6FF">&quot;topics&quot;</span><span style="color: #C9D1D9">: [</span></span>\n<span class="line"><span style="color: #C9D1D9">  {</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;topics&quot;</span><span style="color: #C9D1D9">: [</span></span>\n<span class="line"><span style="color: #C9D1D9">      {</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;topic&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;renewable energy&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;confidence&quot;</span><span style="color: #C9D1D9">: 0.80515814</span></span>\n<span class="line"><span style="color: #C9D1D9">      },</span></span>\n<span class="line"><span style="color: #C9D1D9">      {</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;topic&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;climate change&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;confidence&quot;</span><span style="color: #C9D1D9">: 0.51437885</span></span>\n<span class="line"><span style="color: #C9D1D9">      }</span></span>\n<span class="line"><span style="color: #C9D1D9">    ],</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;text&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Even Greenpeace underestimated the rise of solar. When one of the world&#39;s largest environmental advocacy groups released an optimistic industry analysis called the energy revolution in twenty ten. It was far more ambitious than any government predictions, and it still got it wrong. Greenpeace estimated that by twenty twenty, the world would have three hundred and thirty five thousand megawatts of installed solar photovoltaic capacity\u2026...&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;start_word&quot;</span><span style="color: #C9D1D9">: 0,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;end_word&quot;</span><span style="color: #C9D1D9">: 135</span></span>\n<span class="line"><span style="color: #C9D1D9">  }</span></span>\n<span class="line"><span style="color: #C9D1D9">]</span></span></code></pre>\n<p>Developers can take the outputs from the API that performs Topic Identification to build downstream workflows, generate tags based on topics, power analytics tools, build search and recommendation capabilities, or integrate with other applications.</p>\n<p>To learn more about our API, please see the <a href="https://developers.deepgram.com/documentation/features/detect-topics/">Topic Detection page</a> in our documentation. We welcome your feedback, please share it with us at <a href="https://deepgram.hellonext.co/b/feedback">Product Feedback</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/introducing-topic-detection-feature/index.md" };
function rawContent() {
  return `Today, we are very excited to announce that Deepgram has officially launched the Topic Detection feature as part of our speech understanding offerings. Deepgram's Topic Detection is based on an unsupervised topic modeling technique that enables developers and customers to detect the most important and relevant topics that are referenced in the conversations. 

## Turn Recorded Audio Into Insights

Having not enough data isn't a significant problem anymore. In fact, over [2.5 quintillion bytes](https://seedscientific.com/how-much-data-is-created-every-day/) of data get created every day. However, one of the biggest challenges customers face today is finding insights, organizing, tagging, and leveraging the data relevant to brands, prospects, and customers to deliver a fantastic experience to their end users. 

Topic Detection in ASR and NLU has become one of the must-have features. Developers require advanced solutions to perform a deeper analysis of their audio data based on detected topics and subjects to optimize resources, automate workflow, extract insights, improve search capabilities and enhance end users' experience.

## Popular Use Cases Using Topic Detection

* Support the Quality Assurance team to analyze conversations based on discussed topics, identify trends and patterns, and improve overall customer experience.
* Categorize and tag conversations, meetings, and podcasts based on identified topics to enhance search and recommendation capabilities.
* Extract meaningful and actionable insights from conversations and audio data based on discussed topics and recurring themes.

## Identify over 350 topics

Deepgram's Topic Detection  feature identifies patterns and generates key topics along with the output text, confidence score for each topic, and word positions to identify segments of speech. Deepgram's Topic Detection is based on Topic Modeling which is an unsupervised machine learning technique to cluster generated text based on the detected topics. It supports over 350 topics. Topic Extraction can be enabled using detect_topics=true  and is supported for English language and pre-recorded audio and is available for both our on-prem and hosted customers.

## Implement Topic Detection with Deepgram

To implement Topic Detection from audio recordings, all you need to do is add detect_topics=true in your API call.

### With cURL

\`\`\`bash
curl --request POST \\
--url 'https://api.deepgram.com/v1/listen?detect_topics=true&punctuate=true&tier=enhanced' \\
--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \\
--header 'content-type: audio/mp3' \\
--data-binary '@podcast.mp3' \\
\`\`\`

Alternatively, you can use one of our SDKs to implement Topic Detection:

### With Node.js

\`\`\`js
const fs = require('fs')
const { Deepgram } = require('@deepgram/sdk')

// Your Deepgram API Key
const deepgramApiKey = 'YOUR_DEEPGRAM_API_KEY'

const file = 'YOUR_FILE_LOCATION'
const mimetype = 'YOUR_FILE_MIME_TYPE'
const deepgram = new Deepgram(deepgramApiKey)

const audio = fs.readFileSync(file)

const source = {
    buffer: audio,
    mimetype: mimetype,
}

deepgram.transcription
  .preRecorded(source, {
    detect_topics: true,
  })
  .then((response) => {
    console.dir(response, { depth: null })

    // Write only the transcript to the console
    //console.dir(response.results.channels[0].alternatives[0].transcript, { depth: null });
  })
  .catch((err) => {
    console.log(err)
  })
\`\`\`

### With Python

\`\`\`py
from deepgram import Deepgram
import asyncio, json

DEEPGRAM_API_KEY = 'YOUR_DEEPGRAM_API_KEY'

FILE = 'YOUR_FILE_LOCATION'
MIMETYPE = 'YOUR_FILE_MIME_TYPE'

async def main():

  deepgram = Deepgram(DEEPGRAM_API_KEY)

  audio = open(FILE, 'rb')

  source = {
    'buffer': audio,
    'mimetype': MIMETYPE
  }

  response = await asyncio.create_task(
    deepgram.transcription.prerecorded(
      source,
      {
        'detect_topics': True
      }
    )
  )

  print(json.dumps(response, indent=4))

  # Write only the transcript to the console
  #print(response["results"]["channels"][0]["alternatives"][0]["transcript"])

try:
  # If running in a Jupyter notebook, Jupyter is already running an event loop, so run main with this line instead:
  #await main()
  asyncio.run(main())
except Exception as e:
  exception_type, exception_object, exception_traceback = sys.exc_info()
  line_number = exception_traceback.tb_lineno
  print(f'line {line_number}: {exception_type} - {e}')
\`\`\`

## Topic Detection Results

When the file is finished processing, you'll receive a sample JSON response that has the following basic structure:

\`\`\`bash
"topics": [
  {
    "topics": [
      {
        "topic": "renewable energy",
        "confidence": 0.80515814
      },
      {
        "topic": "climate change",
        "confidence": 0.51437885
      }
    ],
    "text": "Even Greenpeace underestimated the rise of solar. When one of the world's largest environmental advocacy groups released an optimistic industry analysis called the energy revolution in twenty ten. It was far more ambitious than any government predictions, and it still got it wrong. Greenpeace estimated that by twenty twenty, the world would have three hundred and thirty five thousand megawatts of installed solar photovoltaic capacity\u2026...",
    "start_word": 0,
    "end_word": 135
  }
]
\`\`\`

Developers can take the outputs from the API that performs Topic Identification to build downstream workflows, generate tags based on topics, power analytics tools, build search and recommendation capabilities, or integrate with other applications. 

To learn more about our API, please see the [Topic Detection page](https://developers.deepgram.com/documentation/features/detect-topics/) in our documentation. We welcome your feedback, please share it with us at [Product Feedback](https://deepgram.hellonext.co/b/feedback).`;
}
function compiledContent() {
  return '<p>Today, we are very excited to announce that Deepgram has officially launched the Topic Detection feature as part of our speech understanding offerings. Deepgram\u2019s Topic Detection is based on an unsupervised topic modeling technique that enables developers and customers to detect the most important and relevant topics that are referenced in the conversations.</p>\n<h2 id="turn-recorded-audio-into-insights">Turn Recorded Audio Into Insights</h2>\n<p>Having not enough data isn\u2019t a significant problem anymore. In fact, over <a href="https://seedscientific.com/how-much-data-is-created-every-day/">2.5 quintillion bytes</a> of data get created every day. However, one of the biggest challenges customers face today is finding insights, organizing, tagging, and leveraging the data relevant to brands, prospects, and customers to deliver a fantastic experience to their end users.</p>\n<p>Topic Detection in ASR and NLU has become one of the must-have features. Developers require advanced solutions to perform a deeper analysis of their audio data based on detected topics and subjects to optimize resources, automate workflow, extract insights, improve search capabilities and enhance end users\u2019 experience.</p>\n<h2 id="popular-use-cases-using-topic-detection">Popular Use Cases Using Topic Detection</h2>\n<ul>\n<li>Support the Quality Assurance team to analyze conversations based on discussed topics, identify trends and patterns, and improve overall customer experience.</li>\n<li>Categorize and tag conversations, meetings, and podcasts based on identified topics to enhance search and recommendation capabilities.</li>\n<li>Extract meaningful and actionable insights from conversations and audio data based on discussed topics and recurring themes.</li>\n</ul>\n<h2 id="identify-over-350-topics">Identify over 350 topics</h2>\n<p>Deepgram\u2019s Topic Detection  feature identifies patterns and generates key topics along with the output text, confidence score for each topic, and word positions to identify segments of speech. Deepgram\u2019s Topic Detection is based on Topic Modeling which is an unsupervised machine learning technique to cluster generated text based on the detected topics. It supports over 350 topics. Topic Extraction can be enabled using detect_topics=true  and is supported for English language and pre-recorded audio and is available for both our on-prem and hosted customers.</p>\n<h2 id="implement-topic-detection-with-deepgram">Implement Topic Detection with Deepgram</h2>\n<p>To implement Topic Detection from audio recordings, all you need to do is add detect_topics=true in your API call.</p>\n<h3 id="with-curl">With cURL</h3>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl --request POST \\</span></span>\n<span class="line"><span style="color: #C9D1D9">--url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?detect_topics=true&amp;punctuate=true&amp;tier=enhanced&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">--header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">--header </span><span style="color: #A5D6FF">&#39;content-type: audio/mp3&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">--data-binary </span><span style="color: #A5D6FF">&#39;@podcast.mp3&#39;</span><span style="color: #C9D1D9"> \\</span></span></code></pre>\n<p>Alternatively, you can use one of our SDKs to implement Topic Detection:</p>\n<h3 id="with-nodejs">With Node.js</h3>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">fs</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">require</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;fs&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> { </span><span style="color: #79C0FF">Deepgram</span><span style="color: #C9D1D9"> } </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">require</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;@deepgram/sdk&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #8B949E">// Your Deepgram API Key</span></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">deepgramApiKey</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_DEEPGRAM_API_KEY&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">file</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_LOCATION&#39;</span></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">mimetype</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_MIME_TYPE&#39;</span></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">deepgram</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">new</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">Deepgram</span><span style="color: #C9D1D9">(deepgramApiKey)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">audio</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> fs.</span><span style="color: #D2A8FF">readFileSync</span><span style="color: #C9D1D9">(file)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">source</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">    buffer: audio,</span></span>\n<span class="line"><span style="color: #C9D1D9">    mimetype: mimetype,</span></span>\n<span class="line"><span style="color: #C9D1D9">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">deepgram.transcription</span></span>\n<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">preRecorded</span><span style="color: #C9D1D9">(source, {</span></span>\n<span class="line"><span style="color: #C9D1D9">    detect_topics: </span><span style="color: #79C0FF">true</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  })</span></span>\n<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">then</span><span style="color: #C9D1D9">((</span><span style="color: #FFA657">response</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">=&gt;</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">    console.</span><span style="color: #D2A8FF">dir</span><span style="color: #C9D1D9">(response, { depth: </span><span style="color: #79C0FF">null</span><span style="color: #C9D1D9"> })</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #8B949E">// Write only the transcript to the console</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #8B949E">//console.dir(response.results.channels[0].alternatives[0].transcript, { depth: null });</span></span>\n<span class="line"><span style="color: #C9D1D9">  })</span></span>\n<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">catch</span><span style="color: #C9D1D9">((</span><span style="color: #FFA657">err</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">=&gt;</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">    console.</span><span style="color: #D2A8FF">log</span><span style="color: #C9D1D9">(err)</span></span>\n<span class="line"><span style="color: #C9D1D9">  })</span></span></code></pre>\n<h3 id="with-python">With Python</h3>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> deepgram </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> Deepgram</span></span>\n<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> asyncio, json</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #79C0FF">DEEPGRAM_API_KEY</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_DEEPGRAM_API_KEY&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #79C0FF">FILE</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_LOCATION&#39;</span></span>\n<span class="line"><span style="color: #79C0FF">MIMETYPE</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_MIME_TYPE&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">main</span><span style="color: #C9D1D9">():</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  deepgram </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Deepgram(</span><span style="color: #79C0FF">DEEPGRAM_API_KEY</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  audio </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">open</span><span style="color: #C9D1D9">(</span><span style="color: #79C0FF">FILE</span><span style="color: #C9D1D9">, </span><span style="color: #A5D6FF">&#39;rb&#39;</span><span style="color: #C9D1D9">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  source </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&#39;buffer&#39;</span><span style="color: #C9D1D9">: audio,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&#39;mimetype&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">MIMETYPE</span></span>\n<span class="line"><span style="color: #C9D1D9">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> asyncio.create_task(</span></span>\n<span class="line"><span style="color: #C9D1D9">    deepgram.transcription.prerecorded(</span></span>\n<span class="line"><span style="color: #C9D1D9">      source,</span></span>\n<span class="line"><span style="color: #C9D1D9">      {</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&#39;detect_topics&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">True</span></span>\n<span class="line"><span style="color: #C9D1D9">      }</span></span>\n<span class="line"><span style="color: #C9D1D9">    )</span></span>\n<span class="line"><span style="color: #C9D1D9">  )</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">print</span><span style="color: #C9D1D9">(json.dumps(response, </span><span style="color: #FFA657">indent</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">4</span><span style="color: #C9D1D9">))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Write only the transcript to the console</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">#print(response[&quot;results&quot;][&quot;channels&quot;][0][&quot;alternatives&quot;][0][&quot;transcript&quot;])</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">try</span><span style="color: #C9D1D9">:</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># If running in a Jupyter notebook, Jupyter is already running an event loop, so run main with this line instead:</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">#await main()</span></span>\n<span class="line"><span style="color: #C9D1D9">  asyncio.run(main())</span></span>\n<span class="line"><span style="color: #FF7B72">except</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">Exception</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> e:</span></span>\n<span class="line"><span style="color: #C9D1D9">  exception_type, exception_object, exception_traceback </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> sys.exc_info()</span></span>\n<span class="line"><span style="color: #C9D1D9">  line_number </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> exception_traceback.tb_lineno</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">print</span><span style="color: #C9D1D9">(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&#39;line </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">line_number</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF">: </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">exception_type</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> - </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">e</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF">&#39;</span><span style="color: #C9D1D9">)</span></span></code></pre>\n<h2 id="topic-detection-results">Topic Detection Results</h2>\n<p>When the file is finished processing, you\u2019ll receive a sample JSON response that has the following basic structure:</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #A5D6FF">&quot;topics&quot;</span><span style="color: #C9D1D9">: [</span></span>\n<span class="line"><span style="color: #C9D1D9">  {</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;topics&quot;</span><span style="color: #C9D1D9">: [</span></span>\n<span class="line"><span style="color: #C9D1D9">      {</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;topic&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;renewable energy&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;confidence&quot;</span><span style="color: #C9D1D9">: 0.80515814</span></span>\n<span class="line"><span style="color: #C9D1D9">      },</span></span>\n<span class="line"><span style="color: #C9D1D9">      {</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;topic&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;climate change&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;confidence&quot;</span><span style="color: #C9D1D9">: 0.51437885</span></span>\n<span class="line"><span style="color: #C9D1D9">      }</span></span>\n<span class="line"><span style="color: #C9D1D9">    ],</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;text&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Even Greenpeace underestimated the rise of solar. When one of the world&#39;s largest environmental advocacy groups released an optimistic industry analysis called the energy revolution in twenty ten. It was far more ambitious than any government predictions, and it still got it wrong. Greenpeace estimated that by twenty twenty, the world would have three hundred and thirty five thousand megawatts of installed solar photovoltaic capacity\u2026...&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;start_word&quot;</span><span style="color: #C9D1D9">: 0,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;end_word&quot;</span><span style="color: #C9D1D9">: 135</span></span>\n<span class="line"><span style="color: #C9D1D9">  }</span></span>\n<span class="line"><span style="color: #C9D1D9">]</span></span></code></pre>\n<p>Developers can take the outputs from the API that performs Topic Identification to build downstream workflows, generate tags based on topics, power analytics tools, build search and recommendation capabilities, or integrate with other applications.</p>\n<p>To learn more about our API, please see the <a href="https://developers.deepgram.com/documentation/features/detect-topics/">Topic Detection page</a> in our documentation. We welcome your feedback, please share it with us at <a href="https://deepgram.hellonext.co/b/feedback">Product Feedback</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/introducing-topic-detection-feature/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Today, we are very excited to announce that Deepgram has officially launched the Topic Detection feature as part of our speech understanding offerings. Deepgram’s Topic Detection is based on an unsupervised topic modeling technique that enables developers and customers to detect the most important and relevant topics that are referenced in the conversations.</p>
<h2 id="turn-recorded-audio-into-insights">Turn Recorded Audio Into Insights</h2>
<p>Having not enough data isn’t a significant problem anymore. In fact, over <a href="https://seedscientific.com/how-much-data-is-created-every-day/">2.5 quintillion bytes</a> of data get created every day. However, one of the biggest challenges customers face today is finding insights, organizing, tagging, and leveraging the data relevant to brands, prospects, and customers to deliver a fantastic experience to their end users.</p>
<p>Topic Detection in ASR and NLU has become one of the must-have features. Developers require advanced solutions to perform a deeper analysis of their audio data based on detected topics and subjects to optimize resources, automate workflow, extract insights, improve search capabilities and enhance end users’ experience.</p>
<h2 id="popular-use-cases-using-topic-detection">Popular Use Cases Using Topic Detection</h2>
<ul>
<li>Support the Quality Assurance team to analyze conversations based on discussed topics, identify trends and patterns, and improve overall customer experience.</li>
<li>Categorize and tag conversations, meetings, and podcasts based on identified topics to enhance search and recommendation capabilities.</li>
<li>Extract meaningful and actionable insights from conversations and audio data based on discussed topics and recurring themes.</li>
</ul>
<h2 id="identify-over-350-topics">Identify over 350 topics</h2>
<p>Deepgram’s Topic Detection  feature identifies patterns and generates key topics along with the output text, confidence score for each topic, and word positions to identify segments of speech. Deepgram’s Topic Detection is based on Topic Modeling which is an unsupervised machine learning technique to cluster generated text based on the detected topics. It supports over 350 topics. Topic Extraction can be enabled using detect_topics=true  and is supported for English language and pre-recorded audio and is available for both our on-prem and hosted customers.</p>
<h2 id="implement-topic-detection-with-deepgram">Implement Topic Detection with Deepgram</h2>
<p>To implement Topic Detection from audio recordings, all you need to do is add detect_topics=true in your API call.</p>
<h3 id="with-curl">With cURL</h3>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl --request POST \\</span></span>
<span class="line"><span style="color: #C9D1D9">--url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?detect_topics=true&amp;punctuate=true&amp;tier=enhanced&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">--header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">--header </span><span style="color: #A5D6FF">&#39;content-type: audio/mp3&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">--data-binary </span><span style="color: #A5D6FF">&#39;@podcast.mp3&#39;</span><span style="color: #C9D1D9"> \\</span></span></code></pre>
<p>Alternatively, you can use one of our SDKs to implement Topic Detection:</p>
<h3 id="with-nodejs">With Node.js</h3>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">fs</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">require</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;fs&#39;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> { </span><span style="color: #79C0FF">Deepgram</span><span style="color: #C9D1D9"> } </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">require</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;@deepgram/sdk&#39;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #8B949E">// Your Deepgram API Key</span></span>
<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">deepgramApiKey</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_DEEPGRAM_API_KEY&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">file</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_LOCATION&#39;</span></span>
<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">mimetype</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_MIME_TYPE&#39;</span></span>
<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">deepgram</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">new</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">Deepgram</span><span style="color: #C9D1D9">(deepgramApiKey)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">audio</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> fs.</span><span style="color: #D2A8FF">readFileSync</span><span style="color: #C9D1D9">(file)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">source</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">    buffer: audio,</span></span>
<span class="line"><span style="color: #C9D1D9">    mimetype: mimetype,</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">deepgram.transcription</span></span>
<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">preRecorded</span><span style="color: #C9D1D9">(source, {</span></span>
<span class="line"><span style="color: #C9D1D9">    detect_topics: </span><span style="color: #79C0FF">true</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">  })</span></span>
<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">then</span><span style="color: #C9D1D9">((</span><span style="color: #FFA657">response</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">=&gt;</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">    console.</span><span style="color: #D2A8FF">dir</span><span style="color: #C9D1D9">(response, { depth: </span><span style="color: #79C0FF">null</span><span style="color: #C9D1D9"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #8B949E">// Write only the transcript to the console</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #8B949E">//console.dir(response.results.channels[0].alternatives[0].transcript, { depth: null });</span></span>
<span class="line"><span style="color: #C9D1D9">  })</span></span>
<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">catch</span><span style="color: #C9D1D9">((</span><span style="color: #FFA657">err</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">=&gt;</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">    console.</span><span style="color: #D2A8FF">log</span><span style="color: #C9D1D9">(err)</span></span>
<span class="line"><span style="color: #C9D1D9">  })</span></span></code></pre>
<h3 id="with-python">With Python</h3>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> deepgram </span><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> Deepgram</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> asyncio, json</span></span>
<span class="line"></span>
<span class="line"><span style="color: #79C0FF">DEEPGRAM_API_KEY</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_DEEPGRAM_API_KEY&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #79C0FF">FILE</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_LOCATION&#39;</span></span>
<span class="line"><span style="color: #79C0FF">MIMETYPE</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;YOUR_FILE_MIME_TYPE&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">async</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">def</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">main</span><span style="color: #C9D1D9">():</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  deepgram </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> Deepgram(</span><span style="color: #79C0FF">DEEPGRAM_API_KEY</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  audio </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">open</span><span style="color: #C9D1D9">(</span><span style="color: #79C0FF">FILE</span><span style="color: #C9D1D9">, </span><span style="color: #A5D6FF">&#39;rb&#39;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  source </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&#39;buffer&#39;</span><span style="color: #C9D1D9">: audio,</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&#39;mimetype&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">MIMETYPE</span></span>
<span class="line"><span style="color: #C9D1D9">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  response </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">await</span><span style="color: #C9D1D9"> asyncio.create_task(</span></span>
<span class="line"><span style="color: #C9D1D9">    deepgram.transcription.prerecorded(</span></span>
<span class="line"><span style="color: #C9D1D9">      source,</span></span>
<span class="line"><span style="color: #C9D1D9">      {</span></span>
<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&#39;detect_topics&#39;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">True</span></span>
<span class="line"><span style="color: #C9D1D9">      }</span></span>
<span class="line"><span style="color: #C9D1D9">    )</span></span>
<span class="line"><span style="color: #C9D1D9">  )</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">print</span><span style="color: #C9D1D9">(json.dumps(response, </span><span style="color: #FFA657">indent</span><span style="color: #FF7B72">=</span><span style="color: #79C0FF">4</span><span style="color: #C9D1D9">))</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># Write only the transcript to the console</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">#print(response[&quot;results&quot;][&quot;channels&quot;][0][&quot;alternatives&quot;][0][&quot;transcript&quot;])</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">try</span><span style="color: #C9D1D9">:</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E"># If running in a Jupyter notebook, Jupyter is already running an event loop, so run main with this line instead:</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">#await main()</span></span>
<span class="line"><span style="color: #C9D1D9">  asyncio.run(main())</span></span>
<span class="line"><span style="color: #FF7B72">except</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">Exception</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> e:</span></span>
<span class="line"><span style="color: #C9D1D9">  exception_type, exception_object, exception_traceback </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> sys.exc_info()</span></span>
<span class="line"><span style="color: #C9D1D9">  line_number </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> exception_traceback.tb_lineno</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">print</span><span style="color: #C9D1D9">(</span><span style="color: #FF7B72">f</span><span style="color: #A5D6FF">&#39;line </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">line_number</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF">: </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">exception_type</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF"> - </span><span style="color: #79C0FF">{</span><span style="color: #C9D1D9">e</span><span style="color: #79C0FF">}</span><span style="color: #A5D6FF">&#39;</span><span style="color: #C9D1D9">)</span></span></code></pre>
<h2 id="topic-detection-results">Topic Detection Results</h2>
<p>When the file is finished processing, you’ll receive a sample JSON response that has the following basic structure:</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #A5D6FF">&quot;topics&quot;</span><span style="color: #C9D1D9">: [</span></span>
<span class="line"><span style="color: #C9D1D9">  {</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;topics&quot;</span><span style="color: #C9D1D9">: [</span></span>
<span class="line"><span style="color: #C9D1D9">      {</span></span>
<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;topic&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;renewable energy&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;confidence&quot;</span><span style="color: #C9D1D9">: 0.80515814</span></span>
<span class="line"><span style="color: #C9D1D9">      },</span></span>
<span class="line"><span style="color: #C9D1D9">      {</span></span>
<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;topic&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;climate change&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;confidence&quot;</span><span style="color: #C9D1D9">: 0.51437885</span></span>
<span class="line"><span style="color: #C9D1D9">      }</span></span>
<span class="line"><span style="color: #C9D1D9">    ],</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;text&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;Even Greenpeace underestimated the rise of solar. When one of the world&#39;s largest environmental advocacy groups released an optimistic industry analysis called the energy revolution in twenty ten. It was far more ambitious than any government predictions, and it still got it wrong. Greenpeace estimated that by twenty twenty, the world would have three hundred and thirty five thousand megawatts of installed solar photovoltaic capacity…...&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;start_word&quot;</span><span style="color: #C9D1D9">: 0,</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #A5D6FF">&quot;end_word&quot;</span><span style="color: #C9D1D9">: 135</span></span>
<span class="line"><span style="color: #C9D1D9">  }</span></span>
<span class="line"><span style="color: #C9D1D9">]</span></span></code></pre>
<p>Developers can take the outputs from the API that performs Topic Identification to build downstream workflows, generate tags based on topics, power analytics tools, build search and recommendation capabilities, or integrate with other applications.</p>
<p>To learn more about our API, please see the <a href="https://developers.deepgram.com/documentation/features/detect-topics/">Topic Detection page</a> in our documentation. We welcome your feedback, please share it with us at <a href="https://deepgram.hellonext.co/b/feedback">Product Feedback</a>.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/introducing-topic-detection-feature/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
