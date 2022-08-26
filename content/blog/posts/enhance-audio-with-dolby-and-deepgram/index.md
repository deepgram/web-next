---
title: "Enhance Your Audio With Dolby.io For Higher Quality Transcripts"
description: "Sometimes your audio will be low quality, and this may affect your transcripts. Learn how to use the Dolby.io Enhance API to clean up your files for better transcripts and happier ears."
date: 2022-06-02
cover: https://res.cloudinary.com/deepgram/image/upload/v1653416318/blog/2022/05/enhance-audio-with-dolby-and-deepgram/Enhance-Audio-wDolby-for-higher-quality%402x.jpg
authors:
    - sandra-rodgers
category: tutorial
tags:
    - dolby,
    - voice-to-text,
    - speech-recognition,
    - tutorial,
    - accessibility
seo:
    title: "Enhance Your Audio With Dolby.io For Higher Quality Transcripts"
    description: "Sometimes your audio will be low quality, and this may affect your transcripts. Learn how to use the Dolby.io Enhance API to clean up your files for better transcripts and happier ears."
shorturls:
    share: https://dpgr.am/efba6c9
    twitter: https://dpgr.am/a9e0379
    linkedin: https://dpgr.am/8876199
    reddit: https://dpgr.am/d10b70b
    facebook: https://dpgr.am/6e5e1c1
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454087/blog/enhance-audio-with-dolby-and-deepgram/ograph.png
---

Your recordings may not always be great quality - there might be a graininess to them, or background noise that interferes with what the listener is trying to focus on. While Deepgram may still perform fairly well, it's always true that better source audio results in a higher chance for accurate transcripts. For this tutorial, I'll use a low-quality audio file from the [Library of Congress](https://www.loc.gov).

An excellent tool for improving the quality of audio is [Dolby.io's Media Enhance API](https://docs.dolby.io/media-apis/reference/media-enhance-overview). With this API, all I have to do is make a `POST` request with the audio file, and Dolby.io can analyze it to remove the interfering sounds and the crackling or static you often hear with these types of recordings. I can even specify what type of content the audio is, such as an interview, podcast, or voice recording, and Dolby.io can enhance it even further for that type of content.

## Before We Start

Before jumping into coding, I'll be sure to get an API key from each of the APIs I'll be using today. I'll head to [Dolby.io](https://dolby.io/signup) and then [Deepgram.com](https://console.deepgram.com/signup?jump=keys) to get keys.

I'll also install the dependencies with the following command in my project directory:

    npm install axios @deepgram/sdk

## Create a Node.js Project

I'll create an `index.js` file and require `axios` to help with making API requests:

```js
const axios = require('axios')
```

I intend to send an audio file to Dolby.io for enhancement, wait for it to be processed, and wait for that file to come back to me. Since there will be an unknown amount of time involved in each step of the process, I need to write asynchronous functions for each step. Here are the steps:

## Start the Enhance Job

The first asynchronous function will be called `startEnhanceJob`

```js
const startEnhanceJob = async (url) => {}
```

I need to make the audio file available to Dolby.io by putting it in cloud storage. Dolby offers the option of me putting it in their temporary cloud storage, but I have to use the URL format they expect, which will start with `dlb://`. I'll write some JavaScript to create that Dolby.io URL format:

```js
const startEnhanceJob = async (url) => {
  const dlbUrl =
    'dlb://out/' + url.split('/').slice(-1)[0].split('.')[0] + '.wav'
}
```

Then I will make the `POST` request with the audio file to Dolby.io and receive a job ID for that enhance job (which I'll need in the next step).

```js
const startEnhanceJob = async (url) => {
  // create a dolby URL
  const dlbUrl =
    'dlb://out/' + url.split('/').slice(-1)[0].split('.')[0] + '.wav'

  // POST request
  const { data } = await axios({
    method: 'post',
    url: 'https://api.dolby.com/media/enhance',
    headers: {
      'x-api-key': 'YOUR_DOLBYIO_API_KEY',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: {
      input: url,
      output: dlbUrl,
      content: { type: 'interview' },
    },
  })

  return { jobId: data.job_id, dlbUrl }
}
```

Notice that I added `content: { type: interview }` since the audio file I'm sending is an interview.

## Check the Enhance Job and Report Progress

It will take some amount of time for the enhancement job to run. I need to track the progress so that I know when the file is ready. I'll write two functions in this step: `checkEnhanceJob` and `waitUntilJobCompletes`.

For `checkEnhanceJob`, I'll take the job ID that was returned from the `startEnhanceJob` function, and I'll use it to make a `GET` request to the Dolby.io Enhance API to get progress on the enhancement job:

```js
const checkEnhanceJob = async (job_id) => {
  const { data } = await axios({
    method: 'GET',
    url: 'https://api.dolby.com/media/enhance',
    params: { job_id },
    headers: {
      'x-api-key': api_key,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  // Returns a number between 0 and 100
  return data.progress
}
```

Then I'll write a function that uses the `checkEnhanceJob` result in a loop to show a countdown as progress is being made on the enhance job. It will wait 2000ms (2 seconds) between each loop:

```js
const waitUntilJobCompletes = async (job_id) => {
  let progress = await checkEnhanceJob(job_id)
  while (progress < 100) {
    await new Promise((r) => setTimeout(r, 2000))
    progress = await checkEnhanceJob(job_id)
    console.log(progress)
  }
  return
}
```

## Get Enhanced File URL

Once the enhancement of the file is complete, I need to output that new file to a URL that I can use (in this project, I'll be using it to pass on to Deepgram for transcription).

I'll write a function that will make a `POST` request to put the output of the enhance job at the URL I created for temporary storage of the file. I'll also `console.log` the file URL so I can test it now and see how it sounds.

```js
const getNewFileUrl = async (dlbUrl) => {
  const { data } = await axios({
    method: 'POST',
    url: 'https://api.dolby.com/media/output',
    data: { url: dlbUrl },
    headers,
  })

  console.log(data.url)
  return data.url
}
```

## Run the Enhance Logic

I wrote each step of the enhancement job, but now I need to write a main function that runs every step, i.e., every function I wrote.

I also need to add the URL of the audio file I want to enhance. I've chose a file from the Library of Congress called ["Interview with Lillie Haws, New York, New York, November 12, 2001"](https://www.loc.gov/item/afc911000130/).

Here is the `main` function:

```js
const main = async () => {
  // start enhancement of file:
  const { jobId, dlbUrl } = await startEnhanceJob(
    'https://tile.loc.gov/storage-services/media/afc/911/afc2001015_sr298a01.mp3'
  )

  // track progress as it is processing:
  await waitUntilJobCompletes(jobId)

  // get the output URL:
  const url = await getNewFileUrl(dlbUrl)
}

main()
```

When it runs, I'll see the values of my loop that I printed counting up to completion of the enhancement job. And when it finishes, I'll see a very long URL that I can use to listen to my file.

![A terminal showing values appearing with 2 seconds between them. The values are 0, 19, 19, 46, and 100. As soon as 100 appears, a long URL is shown.](https://res.cloudinary.com/deepgram/image/upload/v1653416323/blog/2022/05/enhance-audio-with-dolby-and-deepgram/progress_console.gif)

If I click on the link, I'm taken to the hosted audio file. It sounds so much better than the original! Now I'm ready to transcribe it with Deepgram.

## Transcribe With Deepgram

I'll be using Deepgram's API for transcribing [Pre-Recorded Audio](https://developers.deepgram.com/documentation/getting-started/prerecorded/). Deepgram has a Node.js SDK, so I'll require it in my `index.js` file. I'll also create a new instance of Deepgram by giving it my Deepgram API key:

```js
const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DEEPGRAM_KEY)
```

I will take the file URL that I received from Dolby.io and send that to Deepgram for transcription. It is the temporarily stored file that I assigned to the `url` variable in the main function (in the last section).

I'll also specify that I would like Deepgram to add punctuation. I can do this by adding `{ punctuate:true }` to the request:

```js
const response = await deepgram.transcription.preRecorded(
  { url },
  { punctuate: true }
)
```

Now I can run the whole function, and I'll see that Deepgram transcribes the enhanced file. I'll `console.log` the response from Deepgram so I can actually see the transcription now:

```js
// main function
const main = async () => {
  const { jobId, dlbUrl } = await startEnhanceJob(
    'https://tile.loc.gov/storage-services/media/afc/911/afc2001015_sr298a01.mp3'
  )
  await waitUntilJobCompletes(jobId)
  const url = await getNewFileUrl(dlbUrl)
  const response = await deepgram.transcription.preRecorded(
    { url },
    { punctuate: true }
  )
  console.log(response.results.channels[0])
}

main()
```

And now I have a full transcript of the audio file from the Library of Congress.

## Conclusion

Today I used [Dolby.io](https://docs.dolby.io/) and [Deepgram](https://developers.deepgram.com/) to enhance an audio file and transcribe the speech of the interview into text. These two APIs seem like a great combination for many future projects!

If you enjoyed my post, follow me at [Twitter](https://twitter.com/sandra_rodgers_) to continue the conversation.

