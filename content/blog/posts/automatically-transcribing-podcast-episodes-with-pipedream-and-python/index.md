---
title: Automatically Transcribing Podcast Episodes with Pipedream and Python
description: Learn how to automatically transcribe and email new podcast
  episodes as a newsletter with Deepgram's Speech Recognition API and Pipedream.
date: 2022-09-09T18:59:15.762Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981800/blog/2022/09/automatically-transcribe-new-podcasts-pipedream-python/cover.jpg
authors:
  - kevin-lewis
category: tutorial
tags:
  - python
shorturls:
  share: https://dpgr.am/870760a
  twitter: https://dpgr.am/aad9a28
  linkedin: https://dpgr.am/6e3bb68
  reddit: https://dpgr.am/51f5012
  facebook: https://dpgr.am/4a3ecae
---

I love podcasts, but I rarely find the time to listen to all the new episodes of the ones I love. However, I often find time to read an article or newsletter so I thought it would be fun to automatically transcribe new episodes and send myself the output via email.

We'll be using Pipedream - an online workflow builder that integrates with many services while allowing us to write code in Python, JavaScript, Go, and more. Each workflow has one trigger that starts it and any number of actions that can happen as a result.

Before you start, you will need a [Pipedream account](https://pipedream.com), a Google account, and a [free Deepgram API Key](https://console.deepgram.com/signup?jump=keys).

Create a new empty Pipedream workflow for this project.

## Trigger Your Workflow When New Episodes Are Released

All Podcasts publish via a public RSS feed, which is updated whenever there is a new episode. Pipedream has a built-in trigger which will check every 15 minutes if a new item has been added.

Use the 'New Item in RSS Feed' trigger with any podcast RSS feed - you can use `https://feeds.buzzsprout.com/1976304.rss`, which is for the new Deepgram podcast [Voice of the Future](https://deepgram.com/voiceofthefuturepodcast/).

![Trigger configuration showing a feed URL, timer, and an empty 'name' textbox](https://res.cloudinary.com/deepgram/image/upload/v1661981806/blog/2022/09/automatically-transcribe-new-podcasts-pipedream-python/trigger-create.png)

Click **Create Source** and select the first event. This is representative of one podcast episode.

![Select event shows a dropdown of items. The first reads "Can AI get a read on you"](https://res.cloudinary.com/deepgram/image/upload/v1661981806/blog/2022/09/automatically-transcribe-new-podcasts-pipedream-python/trigger-select.png)

Once selected, you can see all of the data contained in that RSS feed entry - including the episode's metadata and direct media link. All of this data can be used in future steps within the workflow.

![A large amount of JSON-formatted data abotu the episode. Lightly-highlighted is the direct media URL.](https://res.cloudinary.com/deepgram/image/upload/v1661981806/blog/2022/09/automatically-transcribe-new-podcasts-pipedream-python/trigger-data.png)

## Transcribe Podcast With Python

Create a new step (now an 'action') that will be run whenever the workflow is triggered. Pick **Python -> Run Python Code**. In the **Configure** section, click **Add an App** and select **Deepgram**. Insert your API Key and save it before continuing.

![Pipedream step showing a Deepgram account has been configured, with boilerplate code in the editor.](https://res.cloudinary.com/deepgram/image/upload/v1661981806/blog/2022/09/automatically-transcribe-new-podcasts-pipedream-python/python-config.png)

Delete all of the code except `def handler(pd: "pipedream"):`, which is the required function signature that will be executed when this step is reached in the workflow. Make sure you have indented your code underneath this line. Then, get the URL from the trigger and your Deepgram API Key from the configured app:

```py
url = pd.steps["trigger"]["event"]["enclosures"][0]["url"]
token = pd.inputs["deepgram"]["$auth"]['api_key']
```

As mentioned above, Pipedream requires the `def handler(pd: "pipedream"):` signature for the main function in a Python step. Because of this, the asynchronous Deepgram Python SDK won't be usable in this context. Instead, we'll directly make an API request with the `requests` library.

At the very top of your code, add the following line:

```py
import requests
```

Then, at the bottom of your `handler` function, prepare your Deepgram API request:

```py
listen = "https://api.deepgram.com/v1/listen?tier=enhanced&punctuate=true&diarize=true&paragraphs=true"
headers = { "Authorization": f"Token {token}" }
json = { "url": url }
```

This request will use Deepgram's [enhanced tier](https://developers.deepgram.com/documentation/features/tier/), [diarization (speaker detection)](https://developers.deepgram.com/documentation/features/diarize/), and format the output using [punctuation](https://developers.deepgram.com/documentation/features/punctuate/) and [paragraphs](https://developers.deepgram.com/documentation/features/paragraphs/).

Now that you are set up, make the request, extract the formatted response, and return the value:

```py
r = requests.post(listen, json=json, headers=headers)
response = r.json()
transcript = response['results']['channels'][0]['alternatives'][0]['paragraphs']['transcript']
return transcript
```

Final code:

```py
import requests
def handler(pd: "pipedream"):
  url = pd.steps["trigger"]["event"]["enclosures"][0]["url"]
  token = pd.inputs["deepgram"]["$auth"]['api_key']
  listen = "https://api.deepgram.com/v1/listen?tier=enhanced&punctuate=true&diarize=true&paragraphs=true"
  headers = { "Authorization": f"Token {token}" }
  json = { "url": url }
  r = requests.post(listen, json=json, headers=headers)
  response = r.json()
  transcript = response['results']['channels'][0]['alternatives'][0]['paragraphs']['transcript']
  return transcript
```

Click **Test** and the URL from the trigger will be sent to Deepgram, and the returned value will be shown in Pipedream:

![A formatted transcript is shown in Pipdream's 'Exports' section for the Python step. In it is a set of paragraphs each starting with ''](https://res.cloudinary.com/deepgram/image/upload/v1661981806/blog/2022/09/automatically-transcribe-new-podcasts-pipedream-python/python-data.png)

## Send Email With Transcript

Now a transcript has been automatically generated, you can do anything with it - either through Pipedream's integrations or by adding another Python step. As mentioned at the start of this post, the outcome of this project is to send yourself an email with the content of the podcast. You can also include variables in the subject line.

Add a **Send Email To Self** step, and set the subject line to:

    New episode of {{steps.trigger.event.meta.title}}: {{steps.trigger.event.title}}

Set the text to:

    Episode description: {{steps.trigger.event.description}}\n\n{{steps.python.$return_value}}

It should look like the following:

![A send email to self step with a subject line and text containing variables](https://res.cloudinary.com/deepgram/image/upload/v1661981806/blog/2022/09/automatically-transcribe-new-podcasts-pipedream-python/email-config.png)

Test the step, and you should receive an email in just a few seconds. Deploy the workflow, and enjoy reading new podcast episodes. If you have any questions about this project or anything else to do with Deepgram, please get in touch!

