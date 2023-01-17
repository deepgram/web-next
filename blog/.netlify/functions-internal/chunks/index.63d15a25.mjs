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
/* empty css                          *//* empty css                              */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           */import 'camelcase';
/* empty css                              */import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [{ "depth": 2, "slug": "accuracy", "text": "Accuracy" }, { "depth": 3, "slug": "cost", "text": "Cost" }, { "depth": 2, "slug": "speed-and-latency", "text": "Speed and Latency" }, { "depth": 2, "slug": "functionality-and-features", "text": "Functionality and Features" }, { "depth": 2, "slug": "the-bottom-line", "text": "The Bottom Line" }], "source": `
Last month was big for speech intelligence as OpenAI released Whisper, a general-purpose speech recognition model. We've gotten several questions about what this means for the future of Voice AI, so we wanted to share our thoughts with you.

OpenAI [Whisper](https://openai.com/blog/whisper/) is an open source speech-to-text tool built using end-to-end deep learning. **In OpenAI's own words, Whisper is designed for "AI researchers studying robustness, generalization, capabilities, biases and constraints of the current model."** This use case stands in contrast to Deepgram's speech-to-text API, which is designed for software developers to build highly scalable, production-quality products using voice. The consequences of these differing design objectives are evident in the offerings of both products, as will be described throughout this whitepaper.

OpenAI offers Whisper in five model sizes, where larger models provide higher accuracies at the tradeoff of increased processing speed and compute cost. At Deepgram, we know a good speech model when we see one and are impressed with the accuracy of some of Whisper's larger models. However, we also know that there are many important factors beyond accuracy that make the difference between a research-oriented tool and a tool built for highly scalable products.

Overall, our assessment of Whisper depends on your intended use case. **Whisper is a great tool if you want to quickly create a demo product or conduct research on AI speech recognition. On the other hand, if your use case involves making a reliable, scalable, cost-efficient product, Whisper may not be a good fit.** Its higher-accuracy models are big, slow, and expensive to run. It has a limited feature set and therefore requires its users to divert significant resources to building and maintaining additional functionality. It does not come with dedicated support options. These barriers make the decision to build with Whisper a significant commitment. For those interested in playing with the Whisper model, we've made it available through the Deepgram API \u2014 further instructions are available on our [blog](https://blog.deepgram.com/use-openai-whisper-speech-recognition-with-the-deepgram-api/).

Due to the bare-bones, take-it-or-leave it nature of the offering, companies that build with Whisper must essentially commit to rebuilding the wheel that speech processing companies like Deepgram have been refining for years as their sole mission. For more complex use cases, making Whisper work in production can come at a high cost of diverting engineering, research, and product resources away from the primary mission or product. Deepgram allows users to avoid these disruptions and go straight to production with reliable, accurate, cost-efficient, fast, and feature-rich speech processing tools.

In the rest of this note, we'll provide some data and commentary on Whisper in three areas: **Accuracy**, **Speed and Latency**, and **Functionality**.

## Accuracy

We know that accuracy is top of mind for our users. Deepgram's Enhanced model beats the highest-performing Whisper model by a wide margin \u2014 over 20%, relative \u2014 when tested on English data. Furthermore, our models achieve these accuracies at significantly faster processing speeds: on the order of 25x faster than the Whisper Medium model, which is the basis for the accuracy comparison mentioned above. We built our product to these performance standards because we know the combination of accuracy and speed is what unlocks scalability for our users.

In its documentation, the Whisper team claims that their model "approaches human level robustness and accuracy on English speech recognition." While we are impressed by their work, we encourage users to adopt healthy skepticism toward claims of human-level accuracy in speech recognition. Whisper's highest self-published accuracy statistics are below human levels of accuracy (benchmarked at 95-97%) and seem to be the result of testing on unrealistically easy audio. Real-world audio is messy: audio quality varies, background noise interrupts the dialog, speakers talk quickly with diverse accents, industry jargon and branded terms are common, etc. These natural complexities of speech should be taken into account when assessing the robustness of a speech recognition solution, but seem to be inadequately represented in Whisper's testing data set.

To give you a better sense of how Whisper and Deepgram accuracies compare on real-world audio, we conducted a side-by-side Word Error Rate (WER). For this analysis, we submitted 254 test files to Whisper and the Deepgram Enhanced model. The audio in these files feature noise, speaker accents, and long tail vocabulary typical of real-world audio data from phone calls and meetings. The files contain a range of audio durations and a range of topics, which is important when benchmarking ASR capabilities of a general model. Bear in mind that human-level accuracy can be benchmarked in the 3-5% WER range.

<table>\r
    <tr>\r
        <th></th>\r
        <th>Model Size/Tier and Relative Speed</th>\r
        <th>English Word Error Rate</th>\r
        <th>Multilingual Word Error Rate</th>\r
    </tr>\r
    <tr>\r
        <th rowspan="5">OpenAI Whisper</th>\r
        <td>Tiny</td>\r
        <td>15.3%</td>\r
        <td>16.2%</td>\r
    </tr>\r
    <tr>\r
        <td>Base (.9x faster than Tiny)</td>\r
        <td>13.5%</td>\r
        <td>14.0%</td>\r
    </tr>\r
    <tr>\r
        <td>Small (3x slower than Tiny)</td>\r
        <td>13.1%</td>\r
        <td>12.5%</td>\r
    </tr>\r
    <tr>\r
        <td>Medium (4x slower than Tiny)</td>\r
        <td>13.2%</td>\r
        <td>12.4%</td>\r
    </tr>\r
    <tr>\r
        <td>Large (10x slower than Tiny)</td>\r
        <td>N/A: Large model only available for Multilingual</td>\r
        <td>13.2%</td>\r
    </tr>\r
    <tr>\r
        <th rowspan="3">Deepgram</th>\r
        <td>Base (82x faster than Large; 2.6x faster than Tiny)</td>\r
        <td>12.8%</td>\r
        <td>Unique to each language offering</td>\r
    </tr>\r
    <tr>\r
        <td>Enhanced (66x faster than Large; 7x faster than Tiny)</td>\r
        <td>10.6%</td>\r
        <td>Unique to each language offering</td>\r
    </tr>\r
    <tr>\r
        <td>Custom Trained Enhanced (66x faster than Large; 2.6x faster than Tiny)</td>\r
        <td>4.0%</td>\r
        <td>Unique to each language offering</td>\r
    </tr>\r
</table>

![](https://res.cloudinary.com/deepgram/image/upload/v1665439308/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/194953371-601609cf-51ec-4d7b-90cd-c06aa77bcabf_yah89r.png "Deepgram's Enhanced model outperform's Whisper on real-word data.")

You may have noticed that accuracy gains level off with Whisper's Medium and Large models, which might seem counterintuitive at first glance. There are several possible interpretations of this result, but the most salient is that while model size may be loosely correlated with accuracy, the correlation can be offset by a variety of factors. Our extensive research on speech processing through end-to-end deep learning suggests that when transformer models like Whisper encounter data that they aren't sure how to interpret (e.g., noisy phonecall data), they tend to generate outputs verbosely rather than being quiet. A larger model has more capacity to memorize text and be inventive, and so will tend to be more verbose in its errors, driving accuracy down.

### Cost

OpenAI Whisper is not offered as a service. They only provide example code that has to be integrated into your application. It can run on either CPU or GPU resources, but CPUs are very slow for this type of workload \u2014 roughly 20x slower \u2014  so you will probably need to run your application on hosts equipped with GPU acceleration. These hosts are much more expensive and most of your application will not be able to take advantage of the GPU, meaning it will likely be very lightly utilized.

There are five different versions of the OpenAI model that trade quality vs speed. The best performing version has 32 layers and 1.5B parameters. This is a big model. It is not fast. It runs slower than real time on a typical Google Cloud GPU and costs ~$2/hr to process, even if running flat out with 100% utilization.

Beyond hosting, there are people costs associated with managing in-house speech recognition technology like Whisper. Maintaining speech recognition in-house typically demands that dedicated engineering and research teams integrate the model and regularly optimize for accuracy. Foregoing these investments can severely impact the user experience of your product or the accuracy of a downstream model. As a result, a Whisper deployment will come with $150-250k of additional cost per technical employee added to the team.

## Speed and Latency

One of the major differences between Whisper and Deepgram relates to speed and latency.

Deepgram offers batch processing for pre-recorded audio as well as real-time processing for streaming audio. OpenAI Whisper only offers batch processing for pre-recorded audio. The table below compares processing times for OpenAI Whisper on Google Cloud GPUs and Deepgram on Deepgram's GPUs:

<table>\r
    <tr>\r
        <th></th>\r
        <th>OpenAI Whisper</th>\r
        <th>Deepgram Enhanced</th>\r
    </tr>\r
    <tr>\r
        <th>1 Hour of Pre-Recorded Speech (Batch Processing)</th>\r
        <td>9 minutes \r
        (Large Model)</td>\r
        <td>8s</td>\r
    </tr>\r
    <tr>\r
        <th>Latency (Live Streaming)</th>\r
        <td>N/A - not available for live streaming</td>\r
        <td>Under 300ms</td>\r
    </tr>\r
</table>

![](https://res.cloudinary.com/deepgram/image/upload/v1665439308/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/194954878-c05182bb-e637-4132-9706-6cae1e4a6434_jdae8u.png)

## Functionality and Features

We know our users need more than just raw transcripts, so we've built rich features to help everyone get the most out of their audio. Below is a comparison of functionality and features offered by Deepgram and Whisper.

<table>\r
    <thead>\r
        <tr>\r
            <th>Functionality  Category</th>\r
            <th>Capability</th>\r
            <th>OpenAI Whisper</th>\r
            <th>Deepgram Enhanced</th>\r
        </tr>\r
    </thead>\r
    <tbody>\r
        <tr>\r
            <th>Software Type</th>\r
            <td>Closed or open source</td>\r
            <td>Open Source</td>\r
            <td>Closed</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="2">User Interface</th>\r
            <td>Application Programming Interface (API)</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Graphical User Interface (GUI)</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="17">Transcription</th>\r
            <td>Pre-Recorded</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Live Streaming</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Language Support*</td>\r
            <td>38*</td>\r
            <td>30</td>\r
        </tr>\r
        <tr>\r
            <td>Use Case Models</td>\r
            <td>1 - General</td>\r
            <td>7</td>\r
        </tr>\r
        <tr>\r
            <td>Model Training</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Word Level Timestamps</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Punctuation</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Numeral Formatting</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Paragraphs</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Utterances</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Find & Replace</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Profanity Filtering</td>\r
            <td>\u2705**</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Deep Search</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Keyword Boosting</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Interim Results</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Voice Activity Detection</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Request Tagging</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="9">Speech Understanding</th>\r
            <td>Speaker Diarization</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Language Detection</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Entity Detection</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Redaction</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Summarization</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Topic Detection</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Sentiment Analysis</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Language Translation</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Speaker ID</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="3">Enterprise Support</th>\r
            <td>Hosted or Virtual Private Cloud</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>On-Prem Deployment</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Dedicated Customer Support</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="2">Partner Integrations</th>\r
            <td>UniMRCP</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Twilio</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
    </tbody>\r
</table>

> \\* Whisper has 38 language models available at WER of 30% or less, as assessed on "easy" audio files. We consider 30% WER to be the outer limit of transcript usability, and consider WER of 15% to be the threshold of a high quality model. We therefore exclude their language models for which OpenAI's own studies indicate a WER of greater than 30%. Whisper's documentation states it achieves "strong ASR results in ~10 languages."

> \\*\\* Profanity Filtering is listed as a Whisper feature for English models but our testing of Whisper indicates that the filter has inconsistent performance. We recommend further testing of this feature before adoption in production settings.

## The Bottom Line

For simple use cases, Whisper can be a great choice. OpenAI introduced Whisper as best suited for "AI Researchers interested in evaluating the performance of the Whisper model." It may also be a good tool for building a speech-enabled demo product, as long as the use case doesn't require streaming, advanced functionality, or large scale \u2014 and assuming that the user has GPU hosts available. Developers and companies that want to build scalable products with voice will likely gravitate toward a solution that is designed for that purpose. These differences in design become clear when you compare Whisper to Deepgram, as Deepgram offers higher accuracy, richer features, lower operating costs, faster processing speeds, convenient deployment options, model customization, dedicated support, and more.

**If you have any questions about Whisper, please reach out to your Customer Success team member to discuss.**

`, "html": '<p>Last month was big for speech intelligence as OpenAI released Whisper, a general-purpose speech recognition model. We\u2019ve gotten several questions about what this means for the future of Voice AI, so we wanted to share our thoughts with you.</p>\n<p>OpenAI <a href="https://openai.com/blog/whisper/">Whisper</a> is an open source speech-to-text tool built using end-to-end deep learning. <strong>In OpenAI\u2019s own words, Whisper is designed for \u201CAI researchers studying robustness, generalization, capabilities, biases and constraints of the current model.\u201D</strong> This use case stands in contrast to Deepgram\u2019s speech-to-text API, which is designed for software developers to build highly scalable, production-quality products using voice. The consequences of these differing design objectives are evident in the offerings of both products, as will be described throughout this whitepaper.</p>\n<p>OpenAI offers Whisper in five model sizes, where larger models provide higher accuracies at the tradeoff of increased processing speed and compute cost. At Deepgram, we know a good speech model when we see one and are impressed with the accuracy of some of Whisper\u2019s larger models. However, we also know that there are many important factors beyond accuracy that make the difference between a research-oriented tool and a tool built for highly scalable products.</p>\n<p>Overall, our assessment of Whisper depends on your intended use case. <strong>Whisper is a great tool if you want to quickly create a demo product or conduct research on AI speech recognition. On the other hand, if your use case involves making a reliable, scalable, cost-efficient product, Whisper may not be a good fit.</strong> Its higher-accuracy models are big, slow, and expensive to run. It has a limited feature set and therefore requires its users to divert significant resources to building and maintaining additional functionality. It does not come with dedicated support options. These barriers make the decision to build with Whisper a significant commitment. For those interested in playing with the Whisper model, we\u2019ve made it available through the Deepgram API \u2014 further instructions are available on our <a href="https://blog.deepgram.com/use-openai-whisper-speech-recognition-with-the-deepgram-api/">blog</a>.</p>\n<p>Due to the bare-bones, take-it-or-leave it nature of the offering, companies that build with Whisper must essentially commit to rebuilding the wheel that speech processing companies like Deepgram have been refining for years as their sole mission. For more complex use cases, making Whisper work in production can come at a high cost of diverting engineering, research, and product resources away from the primary mission or product. Deepgram allows users to avoid these disruptions and go straight to production with reliable, accurate, cost-efficient, fast, and feature-rich speech processing tools.</p>\n<p>In the rest of this note, we\u2019ll provide some data and commentary on Whisper in three areas: <strong>Accuracy</strong>, <strong>Speed and Latency</strong>, and <strong>Functionality</strong>.</p>\n<h2 id="accuracy">Accuracy</h2>\n<p>We know that accuracy is top of mind for our users. Deepgram\u2019s Enhanced model beats the highest-performing Whisper model by a wide margin \u2014 over 20%, relative \u2014 when tested on English data. Furthermore, our models achieve these accuracies at significantly faster processing speeds: on the order of 25x faster than the Whisper Medium model, which is the basis for the accuracy comparison mentioned above. We built our product to these performance standards because we know the combination of accuracy and speed is what unlocks scalability for our users.</p>\n<p>In its documentation, the Whisper team claims that their model \u201Capproaches human level robustness and accuracy on English speech recognition.\u201D While we are impressed by their work, we encourage users to adopt healthy skepticism toward claims of human-level accuracy in speech recognition. Whisper\u2019s highest self-published accuracy statistics are below human levels of accuracy (benchmarked at 95-97%) and seem to be the result of testing on unrealistically easy audio. Real-world audio is messy: audio quality varies, background noise interrupts the dialog, speakers talk quickly with diverse accents, industry jargon and branded terms are common, etc. These natural complexities of speech should be taken into account when assessing the robustness of a speech recognition solution, but seem to be inadequately represented in Whisper\u2019s testing data set.</p>\n<p>To give you a better sense of how Whisper and Deepgram accuracies compare on real-world audio, we conducted a side-by-side Word Error Rate (WER). For this analysis, we submitted 254 test files to Whisper and the Deepgram Enhanced model. The audio in these files feature noise, speaker accents, and long tail vocabulary typical of real-world audio data from phone calls and meetings. The files contain a range of audio durations and a range of topics, which is important when benchmarking ASR capabilities of a general model. Bear in mind that human-level accuracy can be benchmarked in the 3-5% WER range.</p>\n<table><tr><th /><th>Model Size/Tier and Relative Speed</th>\r\n<th>English Word Error Rate</th>\r\n<th>Multilingual Word Error Rate</th></tr><tr><th rowspan="5">OpenAI Whisper</th>\r\n<td>Tiny</td>\r\n<td>15.3%</td>\r\n<td>16.2%</td></tr><tr><td>Base (.9x faster than Tiny)</td>\r\n<td>13.5%</td>\r\n<td>14.0%</td></tr><tr><td>Small (3x slower than Tiny)</td>\r\n<td>13.1%</td>\r\n<td>12.5%</td></tr><tr><td>Medium (4x slower than Tiny)</td>\r\n<td>13.2%</td>\r\n<td>12.4%</td></tr><tr><td>Large (10x slower than Tiny)</td>\r\n<td>N/A: Large model only available for Multilingual</td>\r\n<td>13.2%</td></tr><tr><th rowspan="3">Deepgram</th>\r\n<td>Base (82x faster than Large; 2.6x faster than Tiny)</td>\r\n<td>12.8%</td>\r\n<td>Unique to each language offering</td></tr><tr><td>Enhanced (66x faster than Large; 7x faster than Tiny)</td>\r\n<td>10.6%</td>\r\n<td>Unique to each language offering</td></tr><tr><td>Custom Trained Enhanced (66x faster than Large; 2.6x faster than Tiny)</td>\r\n<td>4.0%</td>\r\n<td>Unique to each language offering</td></tr></table>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665439308/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/194953371-601609cf-51ec-4d7b-90cd-c06aa77bcabf_yah89r.png" alt="" title="Deepgram&#x27;s Enhanced model outperform&#x27;s Whisper on real-word data."></p>\n<p>You may have noticed that accuracy gains level off with Whisper\u2019s Medium and Large models, which might seem counterintuitive at first glance. There are several possible interpretations of this result, but the most salient is that while model size may be loosely correlated with accuracy, the correlation can be offset by a variety of factors. Our extensive research on speech processing through end-to-end deep learning suggests that when transformer models like Whisper encounter data that they aren\u2019t sure how to interpret (e.g., noisy phonecall data), they tend to generate outputs verbosely rather than being quiet. A larger model has more capacity to memorize text and be inventive, and so will tend to be more verbose in its errors, driving accuracy down.</p>\n<h3 id="cost">Cost</h3>\n<p>OpenAI Whisper is not offered as a service. They only provide example code that has to be integrated into your application. It can run on either CPU or GPU resources, but CPUs are very slow for this type of workload \u2014 roughly 20x slower \u2014  so you will probably need to run your application on hosts equipped with GPU acceleration. These hosts are much more expensive and most of your application will not be able to take advantage of the GPU, meaning it will likely be very lightly utilized.</p>\n<p>There are five different versions of the OpenAI model that trade quality vs speed. The best performing version has 32 layers and 1.5B parameters. This is a big model. It is not fast. It runs slower than real time on a typical Google Cloud GPU and costs ~$2/hr to process, even if running flat out with 100% utilization.</p>\n<p>Beyond hosting, there are people costs associated with managing in-house speech recognition technology like Whisper. Maintaining speech recognition in-house typically demands that dedicated engineering and research teams integrate the model and regularly optimize for accuracy. Foregoing these investments can severely impact the user experience of your product or the accuracy of a downstream model. As a result, a Whisper deployment will come with $150-250k of additional cost per technical employee added to the team.</p>\n<h2 id="speed-and-latency">Speed and Latency</h2>\n<p>One of the major differences between Whisper and Deepgram relates to speed and latency.</p>\n<p>Deepgram offers batch processing for pre-recorded audio as well as real-time processing for streaming audio. OpenAI Whisper only offers batch processing for pre-recorded audio. The table below compares processing times for OpenAI Whisper on Google Cloud GPUs and Deepgram on Deepgram\u2019s GPUs:</p>\n<table><tr><th /><th>OpenAI Whisper</th>\r\n<th>Deepgram Enhanced</th></tr><tr><th>1 Hour of Pre-Recorded Speech (Batch Processing)</th>\r\n<td>9 minutes\r\n(Large Model)</td>\r\n<td>8s</td></tr><tr><th>Latency (Live Streaming)</th>\r\n<td>N/A - not available for live streaming</td>\r\n<td>Under 300ms</td></tr></table>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665439308/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/194954878-c05182bb-e637-4132-9706-6cae1e4a6434_jdae8u.png" alt=""></p>\n<h2 id="functionality-and-features">Functionality and Features</h2>\n<p>We know our users need more than just raw transcripts, so we\u2019ve built rich features to help everyone get the most out of their audio. Below is a comparison of functionality and features offered by Deepgram and Whisper.</p>\n<table><thead><tr><th>Functionality  Category</th>\r\n<th>Capability</th>\r\n<th>OpenAI Whisper</th>\r\n<th>Deepgram Enhanced</th></tr></thead><tbody><tr><th>Software Type</th>\r\n<td>Closed or open source</td>\r\n<td>Open Source</td>\r\n<td>Closed</td></tr><tr><th rowspan="2">User Interface</th>\r\n<td>Application Programming Interface (API)</td><td /><td>\u2705</td></tr><tr><td>Graphical User Interface (GUI)</td><td /><td>\u2705</td></tr><tr><th rowspan="17">Transcription</th>\r\n<td>Pre-Recorded</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Live Streaming</td><td /><td>\u2705</td></tr><tr><td>Language Support*</td>\r\n<td>38*</td>\r\n<td>30</td></tr><tr><td>Use Case Models</td>\r\n<td>1 - General</td>\r\n<td>7</td></tr><tr><td>Model Training</td><td /><td>\u2705</td></tr><tr><td>Word Level Timestamps</td><td /><td>\u2705</td></tr><tr><td>Punctuation</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Numeral Formatting</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Paragraphs</td><td /><td>\u2705</td></tr><tr><td>Utterances</td><td /><td>\u2705</td></tr><tr><td>Find & Replace</td><td /><td>\u2705</td></tr><tr><td>Profanity Filtering</td>\r\n<td>\u2705**</td>\r\n<td>\u2705</td></tr><tr><td>Deep Search</td><td /><td>\u2705</td></tr><tr><td>Keyword Boosting</td><td /><td>\u2705</td></tr><tr><td>Interim Results</td><td /><td>\u2705</td></tr><tr><td>Voice Activity Detection</td><td /><td>\u2705</td></tr><tr><td>Request Tagging</td><td /><td>\u2705</td></tr><tr><th rowspan="9">Speech Understanding</th>\r\n<td>Speaker Diarization</td><td /><td>\u2705</td></tr><tr><td>Language Detection</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Entity Detection</td><td /><td>\u2705</td></tr><tr><td>Redaction</td><td /><td>\u2705</td></tr><tr><td>Summarization</td><td /><td>\u2705</td></tr><tr><td>Topic Detection</td><td /><td>\u2705</td></tr><tr><td>Sentiment Analysis</td><td /><td>\u2705</td></tr><tr><td>Language Translation</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Speaker ID</td><td /><td>\u2705</td></tr><tr><th rowspan="3">Enterprise Support</th>\r\n<td>Hosted or Virtual Private Cloud</td><td /><td>\u2705</td></tr><tr><td>On-Prem Deployment</td><td /><td>\u2705</td></tr><tr><td>Dedicated Customer Support</td><td /><td>\u2705</td></tr><tr><th rowspan="2">Partner Integrations</th>\r\n<td>UniMRCP</td><td /><td>\u2705</td></tr><tr><td>Twilio</td><td /><td>\u2705</td></tr></tbody></table>\n<blockquote>\n<p>* Whisper has 38 language models available at WER of 30% or less, as assessed on \u201Ceasy\u201D audio files. We consider 30% WER to be the outer limit of transcript usability, and consider WER of 15% to be the threshold of a high quality model. We therefore exclude their language models for which OpenAI\u2019s own studies indicate a WER of greater than 30%. Whisper\u2019s documentation states it achieves \u201Cstrong ASR results in ~10 languages.\u201D</p>\n</blockquote>\n<blockquote>\n<p>** Profanity Filtering is listed as a Whisper feature for English models but our testing of Whisper indicates that the filter has inconsistent performance. We recommend further testing of this feature before adoption in production settings.</p>\n</blockquote>\n<h2 id="the-bottom-line">The Bottom Line</h2>\n<p>For simple use cases, Whisper can be a great choice. OpenAI introduced Whisper as best suited for \u201CAI Researchers interested in evaluating the performance of the Whisper model.\u201D It may also be a good tool for building a speech-enabled demo product, as long as the use case doesn\u2019t require streaming, advanced functionality, or large scale \u2014 and assuming that the user has GPU hosts available. Developers and companies that want to build scalable products with voice will likely gravitate toward a solution that is designed for that purpose. These differences in design become clear when you compare Whisper to Deepgram, as Deepgram offers higher accuracy, richer features, lower operating costs, faster processing speeds, convenient deployment options, model customization, dedicated support, and more.</p>\n<p><strong>If you have any questions about Whisper, please reach out to your Customer Success team member to discuss.</strong></p>' };
const frontmatter = { "title": "A Note to our Customers: OpenAI Whisper's Entrance into Voice", "description": "A Note to our Customers: OpenAI Whisper's Entrance into Voice", "date": "2022-10-14T20:32:06.850Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1665448168/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/2210-Whispers-Entrance-to-Voice-featured-1200x630_2x_rp7bnz.png", "authors": ["scott-stephenson"], "category": "product-news", "tags": ["whisper"], "shorturls": { "share": "https://dpgr.am/c019570", "twitter": "https://dpgr.am/2aa83bd", "linkedin": "https://dpgr.am/1afb8fe", "reddit": "https://dpgr.am/4920fcf", "facebook": "https://dpgr.am/197f389" }, "astro": { "headings": [{ "depth": 2, "slug": "accuracy", "text": "Accuracy" }, { "depth": 3, "slug": "cost", "text": "Cost" }, { "depth": 2, "slug": "speed-and-latency", "text": "Speed and Latency" }, { "depth": 2, "slug": "functionality-and-features", "text": "Functionality and Features" }, { "depth": 2, "slug": "the-bottom-line", "text": "The Bottom Line" }], "source": `
Last month was big for speech intelligence as OpenAI released Whisper, a general-purpose speech recognition model. We've gotten several questions about what this means for the future of Voice AI, so we wanted to share our thoughts with you.

OpenAI [Whisper](https://openai.com/blog/whisper/) is an open source speech-to-text tool built using end-to-end deep learning. **In OpenAI's own words, Whisper is designed for "AI researchers studying robustness, generalization, capabilities, biases and constraints of the current model."** This use case stands in contrast to Deepgram's speech-to-text API, which is designed for software developers to build highly scalable, production-quality products using voice. The consequences of these differing design objectives are evident in the offerings of both products, as will be described throughout this whitepaper.

OpenAI offers Whisper in five model sizes, where larger models provide higher accuracies at the tradeoff of increased processing speed and compute cost. At Deepgram, we know a good speech model when we see one and are impressed with the accuracy of some of Whisper's larger models. However, we also know that there are many important factors beyond accuracy that make the difference between a research-oriented tool and a tool built for highly scalable products.

Overall, our assessment of Whisper depends on your intended use case. **Whisper is a great tool if you want to quickly create a demo product or conduct research on AI speech recognition. On the other hand, if your use case involves making a reliable, scalable, cost-efficient product, Whisper may not be a good fit.** Its higher-accuracy models are big, slow, and expensive to run. It has a limited feature set and therefore requires its users to divert significant resources to building and maintaining additional functionality. It does not come with dedicated support options. These barriers make the decision to build with Whisper a significant commitment. For those interested in playing with the Whisper model, we've made it available through the Deepgram API \u2014 further instructions are available on our [blog](https://blog.deepgram.com/use-openai-whisper-speech-recognition-with-the-deepgram-api/).

Due to the bare-bones, take-it-or-leave it nature of the offering, companies that build with Whisper must essentially commit to rebuilding the wheel that speech processing companies like Deepgram have been refining for years as their sole mission. For more complex use cases, making Whisper work in production can come at a high cost of diverting engineering, research, and product resources away from the primary mission or product. Deepgram allows users to avoid these disruptions and go straight to production with reliable, accurate, cost-efficient, fast, and feature-rich speech processing tools.

In the rest of this note, we'll provide some data and commentary on Whisper in three areas: **Accuracy**, **Speed and Latency**, and **Functionality**.

## Accuracy

We know that accuracy is top of mind for our users. Deepgram's Enhanced model beats the highest-performing Whisper model by a wide margin \u2014 over 20%, relative \u2014 when tested on English data. Furthermore, our models achieve these accuracies at significantly faster processing speeds: on the order of 25x faster than the Whisper Medium model, which is the basis for the accuracy comparison mentioned above. We built our product to these performance standards because we know the combination of accuracy and speed is what unlocks scalability for our users.

In its documentation, the Whisper team claims that their model "approaches human level robustness and accuracy on English speech recognition." While we are impressed by their work, we encourage users to adopt healthy skepticism toward claims of human-level accuracy in speech recognition. Whisper's highest self-published accuracy statistics are below human levels of accuracy (benchmarked at 95-97%) and seem to be the result of testing on unrealistically easy audio. Real-world audio is messy: audio quality varies, background noise interrupts the dialog, speakers talk quickly with diverse accents, industry jargon and branded terms are common, etc. These natural complexities of speech should be taken into account when assessing the robustness of a speech recognition solution, but seem to be inadequately represented in Whisper's testing data set.

To give you a better sense of how Whisper and Deepgram accuracies compare on real-world audio, we conducted a side-by-side Word Error Rate (WER). For this analysis, we submitted 254 test files to Whisper and the Deepgram Enhanced model. The audio in these files feature noise, speaker accents, and long tail vocabulary typical of real-world audio data from phone calls and meetings. The files contain a range of audio durations and a range of topics, which is important when benchmarking ASR capabilities of a general model. Bear in mind that human-level accuracy can be benchmarked in the 3-5% WER range.

<table>\r
    <tr>\r
        <th></th>\r
        <th>Model Size/Tier and Relative Speed</th>\r
        <th>English Word Error Rate</th>\r
        <th>Multilingual Word Error Rate</th>\r
    </tr>\r
    <tr>\r
        <th rowspan="5">OpenAI Whisper</th>\r
        <td>Tiny</td>\r
        <td>15.3%</td>\r
        <td>16.2%</td>\r
    </tr>\r
    <tr>\r
        <td>Base (.9x faster than Tiny)</td>\r
        <td>13.5%</td>\r
        <td>14.0%</td>\r
    </tr>\r
    <tr>\r
        <td>Small (3x slower than Tiny)</td>\r
        <td>13.1%</td>\r
        <td>12.5%</td>\r
    </tr>\r
    <tr>\r
        <td>Medium (4x slower than Tiny)</td>\r
        <td>13.2%</td>\r
        <td>12.4%</td>\r
    </tr>\r
    <tr>\r
        <td>Large (10x slower than Tiny)</td>\r
        <td>N/A: Large model only available for Multilingual</td>\r
        <td>13.2%</td>\r
    </tr>\r
    <tr>\r
        <th rowspan="3">Deepgram</th>\r
        <td>Base (82x faster than Large; 2.6x faster than Tiny)</td>\r
        <td>12.8%</td>\r
        <td>Unique to each language offering</td>\r
    </tr>\r
    <tr>\r
        <td>Enhanced (66x faster than Large; 7x faster than Tiny)</td>\r
        <td>10.6%</td>\r
        <td>Unique to each language offering</td>\r
    </tr>\r
    <tr>\r
        <td>Custom Trained Enhanced (66x faster than Large; 2.6x faster than Tiny)</td>\r
        <td>4.0%</td>\r
        <td>Unique to each language offering</td>\r
    </tr>\r
</table>

![](https://res.cloudinary.com/deepgram/image/upload/v1665439308/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/194953371-601609cf-51ec-4d7b-90cd-c06aa77bcabf_yah89r.png "Deepgram's Enhanced model outperform's Whisper on real-word data.")

You may have noticed that accuracy gains level off with Whisper's Medium and Large models, which might seem counterintuitive at first glance. There are several possible interpretations of this result, but the most salient is that while model size may be loosely correlated with accuracy, the correlation can be offset by a variety of factors. Our extensive research on speech processing through end-to-end deep learning suggests that when transformer models like Whisper encounter data that they aren't sure how to interpret (e.g., noisy phonecall data), they tend to generate outputs verbosely rather than being quiet. A larger model has more capacity to memorize text and be inventive, and so will tend to be more verbose in its errors, driving accuracy down.

### Cost

OpenAI Whisper is not offered as a service. They only provide example code that has to be integrated into your application. It can run on either CPU or GPU resources, but CPUs are very slow for this type of workload \u2014 roughly 20x slower \u2014  so you will probably need to run your application on hosts equipped with GPU acceleration. These hosts are much more expensive and most of your application will not be able to take advantage of the GPU, meaning it will likely be very lightly utilized.

There are five different versions of the OpenAI model that trade quality vs speed. The best performing version has 32 layers and 1.5B parameters. This is a big model. It is not fast. It runs slower than real time on a typical Google Cloud GPU and costs ~$2/hr to process, even if running flat out with 100% utilization.

Beyond hosting, there are people costs associated with managing in-house speech recognition technology like Whisper. Maintaining speech recognition in-house typically demands that dedicated engineering and research teams integrate the model and regularly optimize for accuracy. Foregoing these investments can severely impact the user experience of your product or the accuracy of a downstream model. As a result, a Whisper deployment will come with $150-250k of additional cost per technical employee added to the team.

## Speed and Latency

One of the major differences between Whisper and Deepgram relates to speed and latency.

Deepgram offers batch processing for pre-recorded audio as well as real-time processing for streaming audio. OpenAI Whisper only offers batch processing for pre-recorded audio. The table below compares processing times for OpenAI Whisper on Google Cloud GPUs and Deepgram on Deepgram's GPUs:

<table>\r
    <tr>\r
        <th></th>\r
        <th>OpenAI Whisper</th>\r
        <th>Deepgram Enhanced</th>\r
    </tr>\r
    <tr>\r
        <th>1 Hour of Pre-Recorded Speech (Batch Processing)</th>\r
        <td>9 minutes \r
        (Large Model)</td>\r
        <td>8s</td>\r
    </tr>\r
    <tr>\r
        <th>Latency (Live Streaming)</th>\r
        <td>N/A - not available for live streaming</td>\r
        <td>Under 300ms</td>\r
    </tr>\r
</table>

![](https://res.cloudinary.com/deepgram/image/upload/v1665439308/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/194954878-c05182bb-e637-4132-9706-6cae1e4a6434_jdae8u.png)

## Functionality and Features

We know our users need more than just raw transcripts, so we've built rich features to help everyone get the most out of their audio. Below is a comparison of functionality and features offered by Deepgram and Whisper.

<table>\r
    <thead>\r
        <tr>\r
            <th>Functionality  Category</th>\r
            <th>Capability</th>\r
            <th>OpenAI Whisper</th>\r
            <th>Deepgram Enhanced</th>\r
        </tr>\r
    </thead>\r
    <tbody>\r
        <tr>\r
            <th>Software Type</th>\r
            <td>Closed or open source</td>\r
            <td>Open Source</td>\r
            <td>Closed</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="2">User Interface</th>\r
            <td>Application Programming Interface (API)</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Graphical User Interface (GUI)</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="17">Transcription</th>\r
            <td>Pre-Recorded</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Live Streaming</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Language Support*</td>\r
            <td>38*</td>\r
            <td>30</td>\r
        </tr>\r
        <tr>\r
            <td>Use Case Models</td>\r
            <td>1 - General</td>\r
            <td>7</td>\r
        </tr>\r
        <tr>\r
            <td>Model Training</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Word Level Timestamps</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Punctuation</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Numeral Formatting</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Paragraphs</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Utterances</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Find & Replace</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Profanity Filtering</td>\r
            <td>\u2705**</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Deep Search</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Keyword Boosting</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Interim Results</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Voice Activity Detection</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Request Tagging</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="9">Speech Understanding</th>\r
            <td>Speaker Diarization</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Language Detection</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Entity Detection</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Redaction</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Summarization</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Topic Detection</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Sentiment Analysis</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Language Translation</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Speaker ID</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="3">Enterprise Support</th>\r
            <td>Hosted or Virtual Private Cloud</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>On-Prem Deployment</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Dedicated Customer Support</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="2">Partner Integrations</th>\r
            <td>UniMRCP</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Twilio</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
    </tbody>\r
</table>

> \\* Whisper has 38 language models available at WER of 30% or less, as assessed on "easy" audio files. We consider 30% WER to be the outer limit of transcript usability, and consider WER of 15% to be the threshold of a high quality model. We therefore exclude their language models for which OpenAI's own studies indicate a WER of greater than 30%. Whisper's documentation states it achieves "strong ASR results in ~10 languages."

> \\*\\* Profanity Filtering is listed as a Whisper feature for English models but our testing of Whisper indicates that the filter has inconsistent performance. We recommend further testing of this feature before adoption in production settings.

## The Bottom Line

For simple use cases, Whisper can be a great choice. OpenAI introduced Whisper as best suited for "AI Researchers interested in evaluating the performance of the Whisper model." It may also be a good tool for building a speech-enabled demo product, as long as the use case doesn't require streaming, advanced functionality, or large scale \u2014 and assuming that the user has GPU hosts available. Developers and companies that want to build scalable products with voice will likely gravitate toward a solution that is designed for that purpose. These differences in design become clear when you compare Whisper to Deepgram, as Deepgram offers higher accuracy, richer features, lower operating costs, faster processing speeds, convenient deployment options, model customization, dedicated support, and more.

**If you have any questions about Whisper, please reach out to your Customer Success team member to discuss.**

`, "html": '<p>Last month was big for speech intelligence as OpenAI released Whisper, a general-purpose speech recognition model. We\u2019ve gotten several questions about what this means for the future of Voice AI, so we wanted to share our thoughts with you.</p>\n<p>OpenAI <a href="https://openai.com/blog/whisper/">Whisper</a> is an open source speech-to-text tool built using end-to-end deep learning. <strong>In OpenAI\u2019s own words, Whisper is designed for \u201CAI researchers studying robustness, generalization, capabilities, biases and constraints of the current model.\u201D</strong> This use case stands in contrast to Deepgram\u2019s speech-to-text API, which is designed for software developers to build highly scalable, production-quality products using voice. The consequences of these differing design objectives are evident in the offerings of both products, as will be described throughout this whitepaper.</p>\n<p>OpenAI offers Whisper in five model sizes, where larger models provide higher accuracies at the tradeoff of increased processing speed and compute cost. At Deepgram, we know a good speech model when we see one and are impressed with the accuracy of some of Whisper\u2019s larger models. However, we also know that there are many important factors beyond accuracy that make the difference between a research-oriented tool and a tool built for highly scalable products.</p>\n<p>Overall, our assessment of Whisper depends on your intended use case. <strong>Whisper is a great tool if you want to quickly create a demo product or conduct research on AI speech recognition. On the other hand, if your use case involves making a reliable, scalable, cost-efficient product, Whisper may not be a good fit.</strong> Its higher-accuracy models are big, slow, and expensive to run. It has a limited feature set and therefore requires its users to divert significant resources to building and maintaining additional functionality. It does not come with dedicated support options. These barriers make the decision to build with Whisper a significant commitment. For those interested in playing with the Whisper model, we\u2019ve made it available through the Deepgram API \u2014 further instructions are available on our <a href="https://blog.deepgram.com/use-openai-whisper-speech-recognition-with-the-deepgram-api/">blog</a>.</p>\n<p>Due to the bare-bones, take-it-or-leave it nature of the offering, companies that build with Whisper must essentially commit to rebuilding the wheel that speech processing companies like Deepgram have been refining for years as their sole mission. For more complex use cases, making Whisper work in production can come at a high cost of diverting engineering, research, and product resources away from the primary mission or product. Deepgram allows users to avoid these disruptions and go straight to production with reliable, accurate, cost-efficient, fast, and feature-rich speech processing tools.</p>\n<p>In the rest of this note, we\u2019ll provide some data and commentary on Whisper in three areas: <strong>Accuracy</strong>, <strong>Speed and Latency</strong>, and <strong>Functionality</strong>.</p>\n<h2 id="accuracy">Accuracy</h2>\n<p>We know that accuracy is top of mind for our users. Deepgram\u2019s Enhanced model beats the highest-performing Whisper model by a wide margin \u2014 over 20%, relative \u2014 when tested on English data. Furthermore, our models achieve these accuracies at significantly faster processing speeds: on the order of 25x faster than the Whisper Medium model, which is the basis for the accuracy comparison mentioned above. We built our product to these performance standards because we know the combination of accuracy and speed is what unlocks scalability for our users.</p>\n<p>In its documentation, the Whisper team claims that their model \u201Capproaches human level robustness and accuracy on English speech recognition.\u201D While we are impressed by their work, we encourage users to adopt healthy skepticism toward claims of human-level accuracy in speech recognition. Whisper\u2019s highest self-published accuracy statistics are below human levels of accuracy (benchmarked at 95-97%) and seem to be the result of testing on unrealistically easy audio. Real-world audio is messy: audio quality varies, background noise interrupts the dialog, speakers talk quickly with diverse accents, industry jargon and branded terms are common, etc. These natural complexities of speech should be taken into account when assessing the robustness of a speech recognition solution, but seem to be inadequately represented in Whisper\u2019s testing data set.</p>\n<p>To give you a better sense of how Whisper and Deepgram accuracies compare on real-world audio, we conducted a side-by-side Word Error Rate (WER). For this analysis, we submitted 254 test files to Whisper and the Deepgram Enhanced model. The audio in these files feature noise, speaker accents, and long tail vocabulary typical of real-world audio data from phone calls and meetings. The files contain a range of audio durations and a range of topics, which is important when benchmarking ASR capabilities of a general model. Bear in mind that human-level accuracy can be benchmarked in the 3-5% WER range.</p>\n<table><tr><th /><th>Model Size/Tier and Relative Speed</th>\r\n<th>English Word Error Rate</th>\r\n<th>Multilingual Word Error Rate</th></tr><tr><th rowspan="5">OpenAI Whisper</th>\r\n<td>Tiny</td>\r\n<td>15.3%</td>\r\n<td>16.2%</td></tr><tr><td>Base (.9x faster than Tiny)</td>\r\n<td>13.5%</td>\r\n<td>14.0%</td></tr><tr><td>Small (3x slower than Tiny)</td>\r\n<td>13.1%</td>\r\n<td>12.5%</td></tr><tr><td>Medium (4x slower than Tiny)</td>\r\n<td>13.2%</td>\r\n<td>12.4%</td></tr><tr><td>Large (10x slower than Tiny)</td>\r\n<td>N/A: Large model only available for Multilingual</td>\r\n<td>13.2%</td></tr><tr><th rowspan="3">Deepgram</th>\r\n<td>Base (82x faster than Large; 2.6x faster than Tiny)</td>\r\n<td>12.8%</td>\r\n<td>Unique to each language offering</td></tr><tr><td>Enhanced (66x faster than Large; 7x faster than Tiny)</td>\r\n<td>10.6%</td>\r\n<td>Unique to each language offering</td></tr><tr><td>Custom Trained Enhanced (66x faster than Large; 2.6x faster than Tiny)</td>\r\n<td>4.0%</td>\r\n<td>Unique to each language offering</td></tr></table>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665439308/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/194953371-601609cf-51ec-4d7b-90cd-c06aa77bcabf_yah89r.png" alt="" title="Deepgram&#x27;s Enhanced model outperform&#x27;s Whisper on real-word data."></p>\n<p>You may have noticed that accuracy gains level off with Whisper\u2019s Medium and Large models, which might seem counterintuitive at first glance. There are several possible interpretations of this result, but the most salient is that while model size may be loosely correlated with accuracy, the correlation can be offset by a variety of factors. Our extensive research on speech processing through end-to-end deep learning suggests that when transformer models like Whisper encounter data that they aren\u2019t sure how to interpret (e.g., noisy phonecall data), they tend to generate outputs verbosely rather than being quiet. A larger model has more capacity to memorize text and be inventive, and so will tend to be more verbose in its errors, driving accuracy down.</p>\n<h3 id="cost">Cost</h3>\n<p>OpenAI Whisper is not offered as a service. They only provide example code that has to be integrated into your application. It can run on either CPU or GPU resources, but CPUs are very slow for this type of workload \u2014 roughly 20x slower \u2014  so you will probably need to run your application on hosts equipped with GPU acceleration. These hosts are much more expensive and most of your application will not be able to take advantage of the GPU, meaning it will likely be very lightly utilized.</p>\n<p>There are five different versions of the OpenAI model that trade quality vs speed. The best performing version has 32 layers and 1.5B parameters. This is a big model. It is not fast. It runs slower than real time on a typical Google Cloud GPU and costs ~$2/hr to process, even if running flat out with 100% utilization.</p>\n<p>Beyond hosting, there are people costs associated with managing in-house speech recognition technology like Whisper. Maintaining speech recognition in-house typically demands that dedicated engineering and research teams integrate the model and regularly optimize for accuracy. Foregoing these investments can severely impact the user experience of your product or the accuracy of a downstream model. As a result, a Whisper deployment will come with $150-250k of additional cost per technical employee added to the team.</p>\n<h2 id="speed-and-latency">Speed and Latency</h2>\n<p>One of the major differences between Whisper and Deepgram relates to speed and latency.</p>\n<p>Deepgram offers batch processing for pre-recorded audio as well as real-time processing for streaming audio. OpenAI Whisper only offers batch processing for pre-recorded audio. The table below compares processing times for OpenAI Whisper on Google Cloud GPUs and Deepgram on Deepgram\u2019s GPUs:</p>\n<table><tr><th /><th>OpenAI Whisper</th>\r\n<th>Deepgram Enhanced</th></tr><tr><th>1 Hour of Pre-Recorded Speech (Batch Processing)</th>\r\n<td>9 minutes\r\n(Large Model)</td>\r\n<td>8s</td></tr><tr><th>Latency (Live Streaming)</th>\r\n<td>N/A - not available for live streaming</td>\r\n<td>Under 300ms</td></tr></table>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665439308/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/194954878-c05182bb-e637-4132-9706-6cae1e4a6434_jdae8u.png" alt=""></p>\n<h2 id="functionality-and-features">Functionality and Features</h2>\n<p>We know our users need more than just raw transcripts, so we\u2019ve built rich features to help everyone get the most out of their audio. Below is a comparison of functionality and features offered by Deepgram and Whisper.</p>\n<table><thead><tr><th>Functionality  Category</th>\r\n<th>Capability</th>\r\n<th>OpenAI Whisper</th>\r\n<th>Deepgram Enhanced</th></tr></thead><tbody><tr><th>Software Type</th>\r\n<td>Closed or open source</td>\r\n<td>Open Source</td>\r\n<td>Closed</td></tr><tr><th rowspan="2">User Interface</th>\r\n<td>Application Programming Interface (API)</td><td /><td>\u2705</td></tr><tr><td>Graphical User Interface (GUI)</td><td /><td>\u2705</td></tr><tr><th rowspan="17">Transcription</th>\r\n<td>Pre-Recorded</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Live Streaming</td><td /><td>\u2705</td></tr><tr><td>Language Support*</td>\r\n<td>38*</td>\r\n<td>30</td></tr><tr><td>Use Case Models</td>\r\n<td>1 - General</td>\r\n<td>7</td></tr><tr><td>Model Training</td><td /><td>\u2705</td></tr><tr><td>Word Level Timestamps</td><td /><td>\u2705</td></tr><tr><td>Punctuation</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Numeral Formatting</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Paragraphs</td><td /><td>\u2705</td></tr><tr><td>Utterances</td><td /><td>\u2705</td></tr><tr><td>Find & Replace</td><td /><td>\u2705</td></tr><tr><td>Profanity Filtering</td>\r\n<td>\u2705**</td>\r\n<td>\u2705</td></tr><tr><td>Deep Search</td><td /><td>\u2705</td></tr><tr><td>Keyword Boosting</td><td /><td>\u2705</td></tr><tr><td>Interim Results</td><td /><td>\u2705</td></tr><tr><td>Voice Activity Detection</td><td /><td>\u2705</td></tr><tr><td>Request Tagging</td><td /><td>\u2705</td></tr><tr><th rowspan="9">Speech Understanding</th>\r\n<td>Speaker Diarization</td><td /><td>\u2705</td></tr><tr><td>Language Detection</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Entity Detection</td><td /><td>\u2705</td></tr><tr><td>Redaction</td><td /><td>\u2705</td></tr><tr><td>Summarization</td><td /><td>\u2705</td></tr><tr><td>Topic Detection</td><td /><td>\u2705</td></tr><tr><td>Sentiment Analysis</td><td /><td>\u2705</td></tr><tr><td>Language Translation</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Speaker ID</td><td /><td>\u2705</td></tr><tr><th rowspan="3">Enterprise Support</th>\r\n<td>Hosted or Virtual Private Cloud</td><td /><td>\u2705</td></tr><tr><td>On-Prem Deployment</td><td /><td>\u2705</td></tr><tr><td>Dedicated Customer Support</td><td /><td>\u2705</td></tr><tr><th rowspan="2">Partner Integrations</th>\r\n<td>UniMRCP</td><td /><td>\u2705</td></tr><tr><td>Twilio</td><td /><td>\u2705</td></tr></tbody></table>\n<blockquote>\n<p>* Whisper has 38 language models available at WER of 30% or less, as assessed on \u201Ceasy\u201D audio files. We consider 30% WER to be the outer limit of transcript usability, and consider WER of 15% to be the threshold of a high quality model. We therefore exclude their language models for which OpenAI\u2019s own studies indicate a WER of greater than 30%. Whisper\u2019s documentation states it achieves \u201Cstrong ASR results in ~10 languages.\u201D</p>\n</blockquote>\n<blockquote>\n<p>** Profanity Filtering is listed as a Whisper feature for English models but our testing of Whisper indicates that the filter has inconsistent performance. We recommend further testing of this feature before adoption in production settings.</p>\n</blockquote>\n<h2 id="the-bottom-line">The Bottom Line</h2>\n<p>For simple use cases, Whisper can be a great choice. OpenAI introduced Whisper as best suited for \u201CAI Researchers interested in evaluating the performance of the Whisper model.\u201D It may also be a good tool for building a speech-enabled demo product, as long as the use case doesn\u2019t require streaming, advanced functionality, or large scale \u2014 and assuming that the user has GPU hosts available. Developers and companies that want to build scalable products with voice will likely gravitate toward a solution that is designed for that purpose. These differences in design become clear when you compare Whisper to Deepgram, as Deepgram offers higher accuracy, richer features, lower operating costs, faster processing speeds, convenient deployment options, model customization, dedicated support, and more.</p>\n<p><strong>If you have any questions about Whisper, please reach out to your Customer Success team member to discuss.</strong></p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/a-note-to-our-customers-openai-whispers-entrance-into-voice/index.md" };
function rawContent() {
  return `
Last month was big for speech intelligence as OpenAI released Whisper, a general-purpose speech recognition model. We've gotten several questions about what this means for the future of Voice AI, so we wanted to share our thoughts with you.

OpenAI [Whisper](https://openai.com/blog/whisper/) is an open source speech-to-text tool built using end-to-end deep learning. **In OpenAI's own words, Whisper is designed for "AI researchers studying robustness, generalization, capabilities, biases and constraints of the current model."** This use case stands in contrast to Deepgram's speech-to-text API, which is designed for software developers to build highly scalable, production-quality products using voice. The consequences of these differing design objectives are evident in the offerings of both products, as will be described throughout this whitepaper.

OpenAI offers Whisper in five model sizes, where larger models provide higher accuracies at the tradeoff of increased processing speed and compute cost. At Deepgram, we know a good speech model when we see one and are impressed with the accuracy of some of Whisper's larger models. However, we also know that there are many important factors beyond accuracy that make the difference between a research-oriented tool and a tool built for highly scalable products.

Overall, our assessment of Whisper depends on your intended use case. **Whisper is a great tool if you want to quickly create a demo product or conduct research on AI speech recognition. On the other hand, if your use case involves making a reliable, scalable, cost-efficient product, Whisper may not be a good fit.** Its higher-accuracy models are big, slow, and expensive to run. It has a limited feature set and therefore requires its users to divert significant resources to building and maintaining additional functionality. It does not come with dedicated support options. These barriers make the decision to build with Whisper a significant commitment. For those interested in playing with the Whisper model, we've made it available through the Deepgram API \u2014 further instructions are available on our [blog](https://blog.deepgram.com/use-openai-whisper-speech-recognition-with-the-deepgram-api/).

Due to the bare-bones, take-it-or-leave it nature of the offering, companies that build with Whisper must essentially commit to rebuilding the wheel that speech processing companies like Deepgram have been refining for years as their sole mission. For more complex use cases, making Whisper work in production can come at a high cost of diverting engineering, research, and product resources away from the primary mission or product. Deepgram allows users to avoid these disruptions and go straight to production with reliable, accurate, cost-efficient, fast, and feature-rich speech processing tools.

In the rest of this note, we'll provide some data and commentary on Whisper in three areas: **Accuracy**, **Speed and Latency**, and **Functionality**.

## Accuracy

We know that accuracy is top of mind for our users. Deepgram's Enhanced model beats the highest-performing Whisper model by a wide margin \u2014 over 20%, relative \u2014 when tested on English data. Furthermore, our models achieve these accuracies at significantly faster processing speeds: on the order of 25x faster than the Whisper Medium model, which is the basis for the accuracy comparison mentioned above. We built our product to these performance standards because we know the combination of accuracy and speed is what unlocks scalability for our users.

In its documentation, the Whisper team claims that their model "approaches human level robustness and accuracy on English speech recognition." While we are impressed by their work, we encourage users to adopt healthy skepticism toward claims of human-level accuracy in speech recognition. Whisper's highest self-published accuracy statistics are below human levels of accuracy (benchmarked at 95-97%) and seem to be the result of testing on unrealistically easy audio. Real-world audio is messy: audio quality varies, background noise interrupts the dialog, speakers talk quickly with diverse accents, industry jargon and branded terms are common, etc. These natural complexities of speech should be taken into account when assessing the robustness of a speech recognition solution, but seem to be inadequately represented in Whisper's testing data set.

To give you a better sense of how Whisper and Deepgram accuracies compare on real-world audio, we conducted a side-by-side Word Error Rate (WER). For this analysis, we submitted 254 test files to Whisper and the Deepgram Enhanced model. The audio in these files feature noise, speaker accents, and long tail vocabulary typical of real-world audio data from phone calls and meetings. The files contain a range of audio durations and a range of topics, which is important when benchmarking ASR capabilities of a general model. Bear in mind that human-level accuracy can be benchmarked in the 3-5% WER range.

<table>\r
    <tr>\r
        <th></th>\r
        <th>Model Size/Tier and Relative Speed</th>\r
        <th>English Word Error Rate</th>\r
        <th>Multilingual Word Error Rate</th>\r
    </tr>\r
    <tr>\r
        <th rowspan="5">OpenAI Whisper</th>\r
        <td>Tiny</td>\r
        <td>15.3%</td>\r
        <td>16.2%</td>\r
    </tr>\r
    <tr>\r
        <td>Base (.9x faster than Tiny)</td>\r
        <td>13.5%</td>\r
        <td>14.0%</td>\r
    </tr>\r
    <tr>\r
        <td>Small (3x slower than Tiny)</td>\r
        <td>13.1%</td>\r
        <td>12.5%</td>\r
    </tr>\r
    <tr>\r
        <td>Medium (4x slower than Tiny)</td>\r
        <td>13.2%</td>\r
        <td>12.4%</td>\r
    </tr>\r
    <tr>\r
        <td>Large (10x slower than Tiny)</td>\r
        <td>N/A: Large model only available for Multilingual</td>\r
        <td>13.2%</td>\r
    </tr>\r
    <tr>\r
        <th rowspan="3">Deepgram</th>\r
        <td>Base (82x faster than Large; 2.6x faster than Tiny)</td>\r
        <td>12.8%</td>\r
        <td>Unique to each language offering</td>\r
    </tr>\r
    <tr>\r
        <td>Enhanced (66x faster than Large; 7x faster than Tiny)</td>\r
        <td>10.6%</td>\r
        <td>Unique to each language offering</td>\r
    </tr>\r
    <tr>\r
        <td>Custom Trained Enhanced (66x faster than Large; 2.6x faster than Tiny)</td>\r
        <td>4.0%</td>\r
        <td>Unique to each language offering</td>\r
    </tr>\r
</table>

![](https://res.cloudinary.com/deepgram/image/upload/v1665439308/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/194953371-601609cf-51ec-4d7b-90cd-c06aa77bcabf_yah89r.png "Deepgram's Enhanced model outperform's Whisper on real-word data.")

You may have noticed that accuracy gains level off with Whisper's Medium and Large models, which might seem counterintuitive at first glance. There are several possible interpretations of this result, but the most salient is that while model size may be loosely correlated with accuracy, the correlation can be offset by a variety of factors. Our extensive research on speech processing through end-to-end deep learning suggests that when transformer models like Whisper encounter data that they aren't sure how to interpret (e.g., noisy phonecall data), they tend to generate outputs verbosely rather than being quiet. A larger model has more capacity to memorize text and be inventive, and so will tend to be more verbose in its errors, driving accuracy down.

### Cost

OpenAI Whisper is not offered as a service. They only provide example code that has to be integrated into your application. It can run on either CPU or GPU resources, but CPUs are very slow for this type of workload \u2014 roughly 20x slower \u2014  so you will probably need to run your application on hosts equipped with GPU acceleration. These hosts are much more expensive and most of your application will not be able to take advantage of the GPU, meaning it will likely be very lightly utilized.

There are five different versions of the OpenAI model that trade quality vs speed. The best performing version has 32 layers and 1.5B parameters. This is a big model. It is not fast. It runs slower than real time on a typical Google Cloud GPU and costs ~$2/hr to process, even if running flat out with 100% utilization.

Beyond hosting, there are people costs associated with managing in-house speech recognition technology like Whisper. Maintaining speech recognition in-house typically demands that dedicated engineering and research teams integrate the model and regularly optimize for accuracy. Foregoing these investments can severely impact the user experience of your product or the accuracy of a downstream model. As a result, a Whisper deployment will come with $150-250k of additional cost per technical employee added to the team.

## Speed and Latency

One of the major differences between Whisper and Deepgram relates to speed and latency.

Deepgram offers batch processing for pre-recorded audio as well as real-time processing for streaming audio. OpenAI Whisper only offers batch processing for pre-recorded audio. The table below compares processing times for OpenAI Whisper on Google Cloud GPUs and Deepgram on Deepgram's GPUs:

<table>\r
    <tr>\r
        <th></th>\r
        <th>OpenAI Whisper</th>\r
        <th>Deepgram Enhanced</th>\r
    </tr>\r
    <tr>\r
        <th>1 Hour of Pre-Recorded Speech (Batch Processing)</th>\r
        <td>9 minutes \r
        (Large Model)</td>\r
        <td>8s</td>\r
    </tr>\r
    <tr>\r
        <th>Latency (Live Streaming)</th>\r
        <td>N/A - not available for live streaming</td>\r
        <td>Under 300ms</td>\r
    </tr>\r
</table>

![](https://res.cloudinary.com/deepgram/image/upload/v1665439308/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/194954878-c05182bb-e637-4132-9706-6cae1e4a6434_jdae8u.png)

## Functionality and Features

We know our users need more than just raw transcripts, so we've built rich features to help everyone get the most out of their audio. Below is a comparison of functionality and features offered by Deepgram and Whisper.

<table>\r
    <thead>\r
        <tr>\r
            <th>Functionality  Category</th>\r
            <th>Capability</th>\r
            <th>OpenAI Whisper</th>\r
            <th>Deepgram Enhanced</th>\r
        </tr>\r
    </thead>\r
    <tbody>\r
        <tr>\r
            <th>Software Type</th>\r
            <td>Closed or open source</td>\r
            <td>Open Source</td>\r
            <td>Closed</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="2">User Interface</th>\r
            <td>Application Programming Interface (API)</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Graphical User Interface (GUI)</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="17">Transcription</th>\r
            <td>Pre-Recorded</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Live Streaming</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Language Support*</td>\r
            <td>38*</td>\r
            <td>30</td>\r
        </tr>\r
        <tr>\r
            <td>Use Case Models</td>\r
            <td>1 - General</td>\r
            <td>7</td>\r
        </tr>\r
        <tr>\r
            <td>Model Training</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Word Level Timestamps</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Punctuation</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Numeral Formatting</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Paragraphs</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Utterances</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Find & Replace</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Profanity Filtering</td>\r
            <td>\u2705**</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Deep Search</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Keyword Boosting</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Interim Results</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Voice Activity Detection</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Request Tagging</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="9">Speech Understanding</th>\r
            <td>Speaker Diarization</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Language Detection</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Entity Detection</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Redaction</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Summarization</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Topic Detection</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Sentiment Analysis</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Language Translation</td>\r
            <td>\u2705</td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Speaker ID</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="3">Enterprise Support</th>\r
            <td>Hosted or Virtual Private Cloud</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>On-Prem Deployment</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Dedicated Customer Support</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <th rowspan="2">Partner Integrations</th>\r
            <td>UniMRCP</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
        <tr>\r
            <td>Twilio</td>\r
            <td></td>\r
            <td>\u2705</td>\r
        </tr>\r
    </tbody>\r
</table>

> \\* Whisper has 38 language models available at WER of 30% or less, as assessed on "easy" audio files. We consider 30% WER to be the outer limit of transcript usability, and consider WER of 15% to be the threshold of a high quality model. We therefore exclude their language models for which OpenAI's own studies indicate a WER of greater than 30%. Whisper's documentation states it achieves "strong ASR results in ~10 languages."

> \\*\\* Profanity Filtering is listed as a Whisper feature for English models but our testing of Whisper indicates that the filter has inconsistent performance. We recommend further testing of this feature before adoption in production settings.

## The Bottom Line

For simple use cases, Whisper can be a great choice. OpenAI introduced Whisper as best suited for "AI Researchers interested in evaluating the performance of the Whisper model." It may also be a good tool for building a speech-enabled demo product, as long as the use case doesn't require streaming, advanced functionality, or large scale \u2014 and assuming that the user has GPU hosts available. Developers and companies that want to build scalable products with voice will likely gravitate toward a solution that is designed for that purpose. These differences in design become clear when you compare Whisper to Deepgram, as Deepgram offers higher accuracy, richer features, lower operating costs, faster processing speeds, convenient deployment options, model customization, dedicated support, and more.

**If you have any questions about Whisper, please reach out to your Customer Success team member to discuss.**

`;
}
function compiledContent() {
  return '<p>Last month was big for speech intelligence as OpenAI released Whisper, a general-purpose speech recognition model. We\u2019ve gotten several questions about what this means for the future of Voice AI, so we wanted to share our thoughts with you.</p>\n<p>OpenAI <a href="https://openai.com/blog/whisper/">Whisper</a> is an open source speech-to-text tool built using end-to-end deep learning. <strong>In OpenAI\u2019s own words, Whisper is designed for \u201CAI researchers studying robustness, generalization, capabilities, biases and constraints of the current model.\u201D</strong> This use case stands in contrast to Deepgram\u2019s speech-to-text API, which is designed for software developers to build highly scalable, production-quality products using voice. The consequences of these differing design objectives are evident in the offerings of both products, as will be described throughout this whitepaper.</p>\n<p>OpenAI offers Whisper in five model sizes, where larger models provide higher accuracies at the tradeoff of increased processing speed and compute cost. At Deepgram, we know a good speech model when we see one and are impressed with the accuracy of some of Whisper\u2019s larger models. However, we also know that there are many important factors beyond accuracy that make the difference between a research-oriented tool and a tool built for highly scalable products.</p>\n<p>Overall, our assessment of Whisper depends on your intended use case. <strong>Whisper is a great tool if you want to quickly create a demo product or conduct research on AI speech recognition. On the other hand, if your use case involves making a reliable, scalable, cost-efficient product, Whisper may not be a good fit.</strong> Its higher-accuracy models are big, slow, and expensive to run. It has a limited feature set and therefore requires its users to divert significant resources to building and maintaining additional functionality. It does not come with dedicated support options. These barriers make the decision to build with Whisper a significant commitment. For those interested in playing with the Whisper model, we\u2019ve made it available through the Deepgram API \u2014 further instructions are available on our <a href="https://blog.deepgram.com/use-openai-whisper-speech-recognition-with-the-deepgram-api/">blog</a>.</p>\n<p>Due to the bare-bones, take-it-or-leave it nature of the offering, companies that build with Whisper must essentially commit to rebuilding the wheel that speech processing companies like Deepgram have been refining for years as their sole mission. For more complex use cases, making Whisper work in production can come at a high cost of diverting engineering, research, and product resources away from the primary mission or product. Deepgram allows users to avoid these disruptions and go straight to production with reliable, accurate, cost-efficient, fast, and feature-rich speech processing tools.</p>\n<p>In the rest of this note, we\u2019ll provide some data and commentary on Whisper in three areas: <strong>Accuracy</strong>, <strong>Speed and Latency</strong>, and <strong>Functionality</strong>.</p>\n<h2 id="accuracy">Accuracy</h2>\n<p>We know that accuracy is top of mind for our users. Deepgram\u2019s Enhanced model beats the highest-performing Whisper model by a wide margin \u2014 over 20%, relative \u2014 when tested on English data. Furthermore, our models achieve these accuracies at significantly faster processing speeds: on the order of 25x faster than the Whisper Medium model, which is the basis for the accuracy comparison mentioned above. We built our product to these performance standards because we know the combination of accuracy and speed is what unlocks scalability for our users.</p>\n<p>In its documentation, the Whisper team claims that their model \u201Capproaches human level robustness and accuracy on English speech recognition.\u201D While we are impressed by their work, we encourage users to adopt healthy skepticism toward claims of human-level accuracy in speech recognition. Whisper\u2019s highest self-published accuracy statistics are below human levels of accuracy (benchmarked at 95-97%) and seem to be the result of testing on unrealistically easy audio. Real-world audio is messy: audio quality varies, background noise interrupts the dialog, speakers talk quickly with diverse accents, industry jargon and branded terms are common, etc. These natural complexities of speech should be taken into account when assessing the robustness of a speech recognition solution, but seem to be inadequately represented in Whisper\u2019s testing data set.</p>\n<p>To give you a better sense of how Whisper and Deepgram accuracies compare on real-world audio, we conducted a side-by-side Word Error Rate (WER). For this analysis, we submitted 254 test files to Whisper and the Deepgram Enhanced model. The audio in these files feature noise, speaker accents, and long tail vocabulary typical of real-world audio data from phone calls and meetings. The files contain a range of audio durations and a range of topics, which is important when benchmarking ASR capabilities of a general model. Bear in mind that human-level accuracy can be benchmarked in the 3-5% WER range.</p>\n<table><tr><th /><th>Model Size/Tier and Relative Speed</th>\r\n<th>English Word Error Rate</th>\r\n<th>Multilingual Word Error Rate</th></tr><tr><th rowspan="5">OpenAI Whisper</th>\r\n<td>Tiny</td>\r\n<td>15.3%</td>\r\n<td>16.2%</td></tr><tr><td>Base (.9x faster than Tiny)</td>\r\n<td>13.5%</td>\r\n<td>14.0%</td></tr><tr><td>Small (3x slower than Tiny)</td>\r\n<td>13.1%</td>\r\n<td>12.5%</td></tr><tr><td>Medium (4x slower than Tiny)</td>\r\n<td>13.2%</td>\r\n<td>12.4%</td></tr><tr><td>Large (10x slower than Tiny)</td>\r\n<td>N/A: Large model only available for Multilingual</td>\r\n<td>13.2%</td></tr><tr><th rowspan="3">Deepgram</th>\r\n<td>Base (82x faster than Large; 2.6x faster than Tiny)</td>\r\n<td>12.8%</td>\r\n<td>Unique to each language offering</td></tr><tr><td>Enhanced (66x faster than Large; 7x faster than Tiny)</td>\r\n<td>10.6%</td>\r\n<td>Unique to each language offering</td></tr><tr><td>Custom Trained Enhanced (66x faster than Large; 2.6x faster than Tiny)</td>\r\n<td>4.0%</td>\r\n<td>Unique to each language offering</td></tr></table>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665439308/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/194953371-601609cf-51ec-4d7b-90cd-c06aa77bcabf_yah89r.png" alt="" title="Deepgram&#x27;s Enhanced model outperform&#x27;s Whisper on real-word data."></p>\n<p>You may have noticed that accuracy gains level off with Whisper\u2019s Medium and Large models, which might seem counterintuitive at first glance. There are several possible interpretations of this result, but the most salient is that while model size may be loosely correlated with accuracy, the correlation can be offset by a variety of factors. Our extensive research on speech processing through end-to-end deep learning suggests that when transformer models like Whisper encounter data that they aren\u2019t sure how to interpret (e.g., noisy phonecall data), they tend to generate outputs verbosely rather than being quiet. A larger model has more capacity to memorize text and be inventive, and so will tend to be more verbose in its errors, driving accuracy down.</p>\n<h3 id="cost">Cost</h3>\n<p>OpenAI Whisper is not offered as a service. They only provide example code that has to be integrated into your application. It can run on either CPU or GPU resources, but CPUs are very slow for this type of workload \u2014 roughly 20x slower \u2014  so you will probably need to run your application on hosts equipped with GPU acceleration. These hosts are much more expensive and most of your application will not be able to take advantage of the GPU, meaning it will likely be very lightly utilized.</p>\n<p>There are five different versions of the OpenAI model that trade quality vs speed. The best performing version has 32 layers and 1.5B parameters. This is a big model. It is not fast. It runs slower than real time on a typical Google Cloud GPU and costs ~$2/hr to process, even if running flat out with 100% utilization.</p>\n<p>Beyond hosting, there are people costs associated with managing in-house speech recognition technology like Whisper. Maintaining speech recognition in-house typically demands that dedicated engineering and research teams integrate the model and regularly optimize for accuracy. Foregoing these investments can severely impact the user experience of your product or the accuracy of a downstream model. As a result, a Whisper deployment will come with $150-250k of additional cost per technical employee added to the team.</p>\n<h2 id="speed-and-latency">Speed and Latency</h2>\n<p>One of the major differences between Whisper and Deepgram relates to speed and latency.</p>\n<p>Deepgram offers batch processing for pre-recorded audio as well as real-time processing for streaming audio. OpenAI Whisper only offers batch processing for pre-recorded audio. The table below compares processing times for OpenAI Whisper on Google Cloud GPUs and Deepgram on Deepgram\u2019s GPUs:</p>\n<table><tr><th /><th>OpenAI Whisper</th>\r\n<th>Deepgram Enhanced</th></tr><tr><th>1 Hour of Pre-Recorded Speech (Batch Processing)</th>\r\n<td>9 minutes\r\n(Large Model)</td>\r\n<td>8s</td></tr><tr><th>Latency (Live Streaming)</th>\r\n<td>N/A - not available for live streaming</td>\r\n<td>Under 300ms</td></tr></table>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665439308/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/194954878-c05182bb-e637-4132-9706-6cae1e4a6434_jdae8u.png" alt=""></p>\n<h2 id="functionality-and-features">Functionality and Features</h2>\n<p>We know our users need more than just raw transcripts, so we\u2019ve built rich features to help everyone get the most out of their audio. Below is a comparison of functionality and features offered by Deepgram and Whisper.</p>\n<table><thead><tr><th>Functionality  Category</th>\r\n<th>Capability</th>\r\n<th>OpenAI Whisper</th>\r\n<th>Deepgram Enhanced</th></tr></thead><tbody><tr><th>Software Type</th>\r\n<td>Closed or open source</td>\r\n<td>Open Source</td>\r\n<td>Closed</td></tr><tr><th rowspan="2">User Interface</th>\r\n<td>Application Programming Interface (API)</td><td /><td>\u2705</td></tr><tr><td>Graphical User Interface (GUI)</td><td /><td>\u2705</td></tr><tr><th rowspan="17">Transcription</th>\r\n<td>Pre-Recorded</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Live Streaming</td><td /><td>\u2705</td></tr><tr><td>Language Support*</td>\r\n<td>38*</td>\r\n<td>30</td></tr><tr><td>Use Case Models</td>\r\n<td>1 - General</td>\r\n<td>7</td></tr><tr><td>Model Training</td><td /><td>\u2705</td></tr><tr><td>Word Level Timestamps</td><td /><td>\u2705</td></tr><tr><td>Punctuation</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Numeral Formatting</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Paragraphs</td><td /><td>\u2705</td></tr><tr><td>Utterances</td><td /><td>\u2705</td></tr><tr><td>Find & Replace</td><td /><td>\u2705</td></tr><tr><td>Profanity Filtering</td>\r\n<td>\u2705**</td>\r\n<td>\u2705</td></tr><tr><td>Deep Search</td><td /><td>\u2705</td></tr><tr><td>Keyword Boosting</td><td /><td>\u2705</td></tr><tr><td>Interim Results</td><td /><td>\u2705</td></tr><tr><td>Voice Activity Detection</td><td /><td>\u2705</td></tr><tr><td>Request Tagging</td><td /><td>\u2705</td></tr><tr><th rowspan="9">Speech Understanding</th>\r\n<td>Speaker Diarization</td><td /><td>\u2705</td></tr><tr><td>Language Detection</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Entity Detection</td><td /><td>\u2705</td></tr><tr><td>Redaction</td><td /><td>\u2705</td></tr><tr><td>Summarization</td><td /><td>\u2705</td></tr><tr><td>Topic Detection</td><td /><td>\u2705</td></tr><tr><td>Sentiment Analysis</td><td /><td>\u2705</td></tr><tr><td>Language Translation</td>\r\n<td>\u2705</td>\r\n<td>\u2705</td></tr><tr><td>Speaker ID</td><td /><td>\u2705</td></tr><tr><th rowspan="3">Enterprise Support</th>\r\n<td>Hosted or Virtual Private Cloud</td><td /><td>\u2705</td></tr><tr><td>On-Prem Deployment</td><td /><td>\u2705</td></tr><tr><td>Dedicated Customer Support</td><td /><td>\u2705</td></tr><tr><th rowspan="2">Partner Integrations</th>\r\n<td>UniMRCP</td><td /><td>\u2705</td></tr><tr><td>Twilio</td><td /><td>\u2705</td></tr></tbody></table>\n<blockquote>\n<p>* Whisper has 38 language models available at WER of 30% or less, as assessed on \u201Ceasy\u201D audio files. We consider 30% WER to be the outer limit of transcript usability, and consider WER of 15% to be the threshold of a high quality model. We therefore exclude their language models for which OpenAI\u2019s own studies indicate a WER of greater than 30%. Whisper\u2019s documentation states it achieves \u201Cstrong ASR results in ~10 languages.\u201D</p>\n</blockquote>\n<blockquote>\n<p>** Profanity Filtering is listed as a Whisper feature for English models but our testing of Whisper indicates that the filter has inconsistent performance. We recommend further testing of this feature before adoption in production settings.</p>\n</blockquote>\n<h2 id="the-bottom-line">The Bottom Line</h2>\n<p>For simple use cases, Whisper can be a great choice. OpenAI introduced Whisper as best suited for \u201CAI Researchers interested in evaluating the performance of the Whisper model.\u201D It may also be a good tool for building a speech-enabled demo product, as long as the use case doesn\u2019t require streaming, advanced functionality, or large scale \u2014 and assuming that the user has GPU hosts available. Developers and companies that want to build scalable products with voice will likely gravitate toward a solution that is designed for that purpose. These differences in design become clear when you compare Whisper to Deepgram, as Deepgram offers higher accuracy, richer features, lower operating costs, faster processing speeds, convenient deployment options, model customization, dedicated support, and more.</p>\n<p><strong>If you have any questions about Whisper, please reach out to your Customer Success team member to discuss.</strong></p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/a-note-to-our-customers-openai-whispers-entrance-into-voice/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Last month was big for speech intelligence as OpenAI released Whisper, a general-purpose speech recognition model. We’ve gotten several questions about what this means for the future of Voice AI, so we wanted to share our thoughts with you.</p>
<p>OpenAI <a href="https://openai.com/blog/whisper/">Whisper</a> is an open source speech-to-text tool built using end-to-end deep learning. <strong>In OpenAI’s own words, Whisper is designed for “AI researchers studying robustness, generalization, capabilities, biases and constraints of the current model.”</strong> This use case stands in contrast to Deepgram’s speech-to-text API, which is designed for software developers to build highly scalable, production-quality products using voice. The consequences of these differing design objectives are evident in the offerings of both products, as will be described throughout this whitepaper.</p>
<p>OpenAI offers Whisper in five model sizes, where larger models provide higher accuracies at the tradeoff of increased processing speed and compute cost. At Deepgram, we know a good speech model when we see one and are impressed with the accuracy of some of Whisper’s larger models. However, we also know that there are many important factors beyond accuracy that make the difference between a research-oriented tool and a tool built for highly scalable products.</p>
<p>Overall, our assessment of Whisper depends on your intended use case. <strong>Whisper is a great tool if you want to quickly create a demo product or conduct research on AI speech recognition. On the other hand, if your use case involves making a reliable, scalable, cost-efficient product, Whisper may not be a good fit.</strong> Its higher-accuracy models are big, slow, and expensive to run. It has a limited feature set and therefore requires its users to divert significant resources to building and maintaining additional functionality. It does not come with dedicated support options. These barriers make the decision to build with Whisper a significant commitment. For those interested in playing with the Whisper model, we’ve made it available through the Deepgram API — further instructions are available on our <a href="https://blog.deepgram.com/use-openai-whisper-speech-recognition-with-the-deepgram-api/">blog</a>.</p>
<p>Due to the bare-bones, take-it-or-leave it nature of the offering, companies that build with Whisper must essentially commit to rebuilding the wheel that speech processing companies like Deepgram have been refining for years as their sole mission. For more complex use cases, making Whisper work in production can come at a high cost of diverting engineering, research, and product resources away from the primary mission or product. Deepgram allows users to avoid these disruptions and go straight to production with reliable, accurate, cost-efficient, fast, and feature-rich speech processing tools.</p>
<p>In the rest of this note, we’ll provide some data and commentary on Whisper in three areas: <strong>Accuracy</strong>, <strong>Speed and Latency</strong>, and <strong>Functionality</strong>.</p>
<h2 id="accuracy">Accuracy</h2>
<p>We know that accuracy is top of mind for our users. Deepgram’s Enhanced model beats the highest-performing Whisper model by a wide margin — over 20%, relative — when tested on English data. Furthermore, our models achieve these accuracies at significantly faster processing speeds: on the order of 25x faster than the Whisper Medium model, which is the basis for the accuracy comparison mentioned above. We built our product to these performance standards because we know the combination of accuracy and speed is what unlocks scalability for our users.</p>
<p>In its documentation, the Whisper team claims that their model “approaches human level robustness and accuracy on English speech recognition.” While we are impressed by their work, we encourage users to adopt healthy skepticism toward claims of human-level accuracy in speech recognition. Whisper’s highest self-published accuracy statistics are below human levels of accuracy (benchmarked at 95-97%) and seem to be the result of testing on unrealistically easy audio. Real-world audio is messy: audio quality varies, background noise interrupts the dialog, speakers talk quickly with diverse accents, industry jargon and branded terms are common, etc. These natural complexities of speech should be taken into account when assessing the robustness of a speech recognition solution, but seem to be inadequately represented in Whisper’s testing data set.</p>
<p>To give you a better sense of how Whisper and Deepgram accuracies compare on real-world audio, we conducted a side-by-side Word Error Rate (WER). For this analysis, we submitted 254 test files to Whisper and the Deepgram Enhanced model. The audio in these files feature noise, speaker accents, and long tail vocabulary typical of real-world audio data from phone calls and meetings. The files contain a range of audio durations and a range of topics, which is important when benchmarking ASR capabilities of a general model. Bear in mind that human-level accuracy can be benchmarked in the 3-5% WER range.</p>
<table><tr><th></th><th>Model Size/Tier and Relative Speed</th>
<th>English Word Error Rate</th>
<th>Multilingual Word Error Rate</th></tr><tr><th rowspan="5">OpenAI Whisper</th>
<td>Tiny</td>
<td>15.3%</td>
<td>16.2%</td></tr><tr><td>Base (.9x faster than Tiny)</td>
<td>13.5%</td>
<td>14.0%</td></tr><tr><td>Small (3x slower than Tiny)</td>
<td>13.1%</td>
<td>12.5%</td></tr><tr><td>Medium (4x slower than Tiny)</td>
<td>13.2%</td>
<td>12.4%</td></tr><tr><td>Large (10x slower than Tiny)</td>
<td>N/A: Large model only available for Multilingual</td>
<td>13.2%</td></tr><tr><th rowspan="3">Deepgram</th>
<td>Base (82x faster than Large; 2.6x faster than Tiny)</td>
<td>12.8%</td>
<td>Unique to each language offering</td></tr><tr><td>Enhanced (66x faster than Large; 7x faster than Tiny)</td>
<td>10.6%</td>
<td>Unique to each language offering</td></tr><tr><td>Custom Trained Enhanced (66x faster than Large; 2.6x faster than Tiny)</td>
<td>4.0%</td>
<td>Unique to each language offering</td></tr></table>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665439308/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/194953371-601609cf-51ec-4d7b-90cd-c06aa77bcabf_yah89r.png" alt="" title="Deepgram's Enhanced model outperform's Whisper on real-word data."></p>
<p>You may have noticed that accuracy gains level off with Whisper’s Medium and Large models, which might seem counterintuitive at first glance. There are several possible interpretations of this result, but the most salient is that while model size may be loosely correlated with accuracy, the correlation can be offset by a variety of factors. Our extensive research on speech processing through end-to-end deep learning suggests that when transformer models like Whisper encounter data that they aren’t sure how to interpret (e.g., noisy phonecall data), they tend to generate outputs verbosely rather than being quiet. A larger model has more capacity to memorize text and be inventive, and so will tend to be more verbose in its errors, driving accuracy down.</p>
<h3 id="cost">Cost</h3>
<p>OpenAI Whisper is not offered as a service. They only provide example code that has to be integrated into your application. It can run on either CPU or GPU resources, but CPUs are very slow for this type of workload — roughly 20x slower —  so you will probably need to run your application on hosts equipped with GPU acceleration. These hosts are much more expensive and most of your application will not be able to take advantage of the GPU, meaning it will likely be very lightly utilized.</p>
<p>There are five different versions of the OpenAI model that trade quality vs speed. The best performing version has 32 layers and 1.5B parameters. This is a big model. It is not fast. It runs slower than real time on a typical Google Cloud GPU and costs ~$2/hr to process, even if running flat out with 100% utilization.</p>
<p>Beyond hosting, there are people costs associated with managing in-house speech recognition technology like Whisper. Maintaining speech recognition in-house typically demands that dedicated engineering and research teams integrate the model and regularly optimize for accuracy. Foregoing these investments can severely impact the user experience of your product or the accuracy of a downstream model. As a result, a Whisper deployment will come with $150-250k of additional cost per technical employee added to the team.</p>
<h2 id="speed-and-latency">Speed and Latency</h2>
<p>One of the major differences between Whisper and Deepgram relates to speed and latency.</p>
<p>Deepgram offers batch processing for pre-recorded audio as well as real-time processing for streaming audio. OpenAI Whisper only offers batch processing for pre-recorded audio. The table below compares processing times for OpenAI Whisper on Google Cloud GPUs and Deepgram on Deepgram’s GPUs:</p>
<table><tr><th></th><th>OpenAI Whisper</th>
<th>Deepgram Enhanced</th></tr><tr><th>1 Hour of Pre-Recorded Speech (Batch Processing)</th>
<td>9 minutes
(Large Model)</td>
<td>8s</td></tr><tr><th>Latency (Live Streaming)</th>
<td>N/A - not available for live streaming</td>
<td>Under 300ms</td></tr></table>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665439308/blog/a-note-to-our-customers-openai-whispers-entrance-to-voice/194954878-c05182bb-e637-4132-9706-6cae1e4a6434_jdae8u.png" alt=""></p>
<h2 id="functionality-and-features">Functionality and Features</h2>
<p>We know our users need more than just raw transcripts, so we’ve built rich features to help everyone get the most out of their audio. Below is a comparison of functionality and features offered by Deepgram and Whisper.</p>
<table><thead><tr><th>Functionality  Category</th>
<th>Capability</th>
<th>OpenAI Whisper</th>
<th>Deepgram Enhanced</th></tr></thead><tbody><tr><th>Software Type</th>
<td>Closed or open source</td>
<td>Open Source</td>
<td>Closed</td></tr><tr><th rowspan="2">User Interface</th>
<td>Application Programming Interface (API)</td><td></td><td>✅</td></tr><tr><td>Graphical User Interface (GUI)</td><td></td><td>✅</td></tr><tr><th rowspan="17">Transcription</th>
<td>Pre-Recorded</td>
<td>✅</td>
<td>✅</td></tr><tr><td>Live Streaming</td><td></td><td>✅</td></tr><tr><td>Language Support*</td>
<td>38*</td>
<td>30</td></tr><tr><td>Use Case Models</td>
<td>1 - General</td>
<td>7</td></tr><tr><td>Model Training</td><td></td><td>✅</td></tr><tr><td>Word Level Timestamps</td><td></td><td>✅</td></tr><tr><td>Punctuation</td>
<td>✅</td>
<td>✅</td></tr><tr><td>Numeral Formatting</td>
<td>✅</td>
<td>✅</td></tr><tr><td>Paragraphs</td><td></td><td>✅</td></tr><tr><td>Utterances</td><td></td><td>✅</td></tr><tr><td>Find & Replace</td><td></td><td>✅</td></tr><tr><td>Profanity Filtering</td>
<td>✅**</td>
<td>✅</td></tr><tr><td>Deep Search</td><td></td><td>✅</td></tr><tr><td>Keyword Boosting</td><td></td><td>✅</td></tr><tr><td>Interim Results</td><td></td><td>✅</td></tr><tr><td>Voice Activity Detection</td><td></td><td>✅</td></tr><tr><td>Request Tagging</td><td></td><td>✅</td></tr><tr><th rowspan="9">Speech Understanding</th>
<td>Speaker Diarization</td><td></td><td>✅</td></tr><tr><td>Language Detection</td>
<td>✅</td>
<td>✅</td></tr><tr><td>Entity Detection</td><td></td><td>✅</td></tr><tr><td>Redaction</td><td></td><td>✅</td></tr><tr><td>Summarization</td><td></td><td>✅</td></tr><tr><td>Topic Detection</td><td></td><td>✅</td></tr><tr><td>Sentiment Analysis</td><td></td><td>✅</td></tr><tr><td>Language Translation</td>
<td>✅</td>
<td>✅</td></tr><tr><td>Speaker ID</td><td></td><td>✅</td></tr><tr><th rowspan="3">Enterprise Support</th>
<td>Hosted or Virtual Private Cloud</td><td></td><td>✅</td></tr><tr><td>On-Prem Deployment</td><td></td><td>✅</td></tr><tr><td>Dedicated Customer Support</td><td></td><td>✅</td></tr><tr><th rowspan="2">Partner Integrations</th>
<td>UniMRCP</td><td></td><td>✅</td></tr><tr><td>Twilio</td><td></td><td>✅</td></tr></tbody></table>
<blockquote>
<p>* Whisper has 38 language models available at WER of 30% or less, as assessed on “easy” audio files. We consider 30% WER to be the outer limit of transcript usability, and consider WER of 15% to be the threshold of a high quality model. We therefore exclude their language models for which OpenAI’s own studies indicate a WER of greater than 30%. Whisper’s documentation states it achieves “strong ASR results in ~10 languages.”</p>
</blockquote>
<blockquote>
<p>** Profanity Filtering is listed as a Whisper feature for English models but our testing of Whisper indicates that the filter has inconsistent performance. We recommend further testing of this feature before adoption in production settings.</p>
</blockquote>
<h2 id="the-bottom-line">The Bottom Line</h2>
<p>For simple use cases, Whisper can be a great choice. OpenAI introduced Whisper as best suited for “AI Researchers interested in evaluating the performance of the Whisper model.” It may also be a good tool for building a speech-enabled demo product, as long as the use case doesn’t require streaming, advanced functionality, or large scale — and assuming that the user has GPU hosts available. Developers and companies that want to build scalable products with voice will likely gravitate toward a solution that is designed for that purpose. These differences in design become clear when you compare Whisper to Deepgram, as Deepgram offers higher accuracy, richer features, lower operating costs, faster processing speeds, convenient deployment options, model customization, dedicated support, and more.</p>
<p><strong>If you have any questions about Whisper, please reach out to your Customer Success team member to discuss.</strong></p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/a-note-to-our-customers-openai-whispers-entrance-into-voice/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
