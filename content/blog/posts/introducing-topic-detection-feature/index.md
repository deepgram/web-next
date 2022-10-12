---
title: Introducing Topic Detection Feature
description: Automate workflow, enhance recommendations and search capabilities,
  and organize customers’ conversations by identifying and extracting key topics
  from your audio data using Deepgram’s Topic Detection API.
date: 2022-10-11T22:06:32.479Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1665610954/blog/Introducing%20Topic%20Detection%20Feature/2210-Topic-Detection-feature-featured-1200x630_2x_j0qroc.png
authors:
  - pankaj-trivedi
category: product-news
tags:
  - nlu
shorturls:
  share: https://dpgr.am/8f90c13
  twitter: https://dpgr.am/d02eedf
  linkedin: https://dpgr.am/0dfcd0a
  reddit: https://dpgr.am/aff224e
  facebook: https://dpgr.am/bcf89e3
---

Today, we are very excited to announce that Deepgram has officially launched the Topic Detection feature as part of our Speech Understanding features. Deepgram’s Topic Detection is based on unsupervised Topic Modeling Technique that enables developers and customers to detect the most important and relevant topics that are referenced in the conversations. 

## **Turn Recorded Audio Into Insights**

Having not enough data isn't a significant problem anymore. In fact over [2.5 quintillion bytes](https://seedscientific.com/how-much-data-is-created-every-day/) of data get created every day. However, one of the biggest challenges customers face today is finding insights, organizing, tagging, and leveraging the data relevant to brands, prospects, and customers to deliver a fantastic experience to their end users. 

Topic Detection in ASR and NLU has become one of the must have features. Developers require advanced solutions to perform a deeper analysis of their audio data based on detected topics and subjects to optimize resources, automate workflow, extract insights, improve search capabilities and enhance end users' experience.

## Popular use cases using Topic Detection:

*   Support the Quality Assurance team to analyze conversations based on discussed topics, identify trends and patterns, and improve overall customer experience.
*   Categorize and tag conversations, meetings, and podcasts based on identified topics to enhance search and recommendation capabilities.
*   Extract meaningful and actionable insights from conversations and audio data based on discussed topics and recurring themes.

## Identify over 350 topics

Deepgram’s Topic Detection  feature identifies patterns and generates key topics along with the output text, confidence score for each topic, and word positions to identify segments of speech. Deepgram’s Topic Detection is based on Topic Modeling which is an unsupervised machine learning technique to cluster generated text based on the detected topics. It supports over 350 topics. Topic Extraction can be enabled using detect\_topics=true  and is supported for English language and pre-recorded audio and is available for both our on-prem and hosted customers.

To implement Topic Detection from audio recordings, all you need to do is add detect\_topics=true in your API call.

```bash
curl --request POST \
--url 'https://api.deepgram.com/v1/listen?detect_topics=true&punctuate=true&tier=enhanced' \
--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \
--header 'content-type: audio/mp3' \
--data-binary '@podcast.mp3' \
```

Alternatively, you can use one of our SDKs to implement Topic Detection:

**NodeJS SDK**

```js
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

```

**Python SDK**

```py
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

```

When the file is finished processing, you’ll receive a sample JSON response that has the following basic structure:

```bash
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
    "text": "Even Greenpeace underestimated the rise of solar. When one of the world's largest environmental advocacy groups released an optimistic industry analysis called the energy revolution in twenty ten. It was far more ambitious than any government predictions, and it still got it wrong. Greenpeace estimated that by twenty twenty, the world would have three hundred and thirty five thousand megawatts of installed solar photovoltaic capacity…...",
    "start_word": 0,
    "end_word": 135
  }
]
```
Developers can take the outputs from the API that performs Topic Identification to build downstream workflows, generate tags based on topics, power analytics tools, build search and recommendation capabilities, or integrate with other applications. 

To learn more about our API, please see the [Topic Detection page](https://developers.deepgram.com/documentation/features/topic-detection/) in our documentation. We welcome your feedback, please share it with us at [Product Feedback](https://deepgram.hellonext.co/b/feedback).

