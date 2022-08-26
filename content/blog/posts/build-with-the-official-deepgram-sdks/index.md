---
title: "Build With the Official Deepgram SDKs"
description: "Add speech-to-text to your application even faster with the new Node.js and Python SDKs for the Deepgram API."
date: 2021-07-22
cover: https://res.cloudinary.com/deepgram/image/upload/v1635448116/blog/2021/07/build-with-the-official-deepgram-sdks/build-w-official-dg-sdks-blog%402x.jpg
authors:
    - michael-jolley
category: tutorial
tags:
    - nodejs,
    - python,
    - sdk,
    - javascript
seo:
    title: "Build With the Official Deepgram SDKs"
    description: "Add speech-to-text to your application even faster with the new Node.js and Python SDKs for the Deepgram API."
shorturls:
    share: https://dpgr.am/e29db9c
    twitter: https://dpgr.am/d92db2e
    linkedin: https://dpgr.am/c21f01f
    reddit: https://dpgr.am/4ff820a
    facebook: https://dpgr.am/9d3c042
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453793/blog/build-with-the-official-deepgram-sdks/ograph.png
---

We love empowering our developer communities to take full advantage of voice in their applications. So, we're announcing two new official SDKs for Node.js and Python. Both of these SDKs make it easier than ever to add automated speech-to-text recognition to your applications.

### How Easy Is It?

To get started, make sure you have a Deepgram account by signing up at [https://console.deepgram.com/signup](https://console.deepgram.com/signup?jump=keys). After signing up, log in and get an API key. Then, in your terminal, run the appropriate command below to install the SDK.

**Node.js**

```bash
npm install @deepgram/sdk
```

**Python**

```bash
pip install deepgram-sdk
```

**Sample Code**

```bash
npm install @deepgram/sdk
```

```bash
pip install deepgram-sdk
```

Once the SDK has been installed, the following snippets will allow you to transcribe a prerecorded audio file. Be sure to replace YOUR\_DEEPGRAM\_API\_KEY with the API key, you created earlier.

**Node.js**

```js
const { Deepgram } = require('@deepgram/sdk')

const deepgramApiKey = 'YOUR_DEEPGRAM_API_KEY'

function main() {
  return new Promise((resolve, reject) => {
    ;(async () => {
      try {
        const deepgram = new Deepgram(deepgramApiKey)

        const transcription = await newDeepgram.transcription.preRecorded(
          {
            url: 'https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav',
          },
          {
            punctuate: true,
          }
        )
        console.dir(transcription, { depth: null })
        resolve()
      } catch (err) {
        console.log(`Err: ${err}`)
        reject(err)
      }
    })()
  })
}

main()
```

**Python**

```python
from deepgram import Deepgram

import asyncio, json

DEEPGRAM_API_KEY = 'YOUR_API_KEY'

async def main():

    # Initializes the Deepgram SDK

    dg_client = Deepgram(DEEPGRAM_API_KEY)

    source = {'url': 'https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav'}

    response = await dg_client.transcription.prerecorded(source)

    print(json.dumps(response, indent=4))

asyncio.run(main())
```

## Contributions Welcome

Our SDKs are still in their infancy, but we're building them in public. We welcome all issues and pull requests to our Node.js and Python repositories. Of course, we'd also love to hear what you're building, so tweet at [@DeepgramDevs](https://twitter.com/deepgramdevs) and let us know!

