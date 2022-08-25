---
title: Automatically Transcribe Google Drive Files with Pipedream
description: Learn how to automate the creation of transcriptions by simply dropping files into a Google Drive folder.
date: 2022-08-08
cover: https://res.cloudinary.com/deepgram/image/upload/v1659956235/blog/2022/08/transcribe-google-drive-files-pipedream/cover.png
authors:
    - kevin-lewis
category: tutorial
tags:
    - javascript,
    - low-code,
    - automations
seo:
    title: Automatically Transcribe Google Drive Files with Pipedream
    description: Learn how to automate the creation of transcriptions by simply dropping files into a Google Drive folder.
shorturls:
    share: https://dpgr.am/5fc941
    twitter: https://dpgr.am/ce0b37
    linkedin: https://dpgr.am/c5d388
    reddit: https://dpgr.am/61b176
    facebook: https://dpgr.am/24502d
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454123/blog/transcribe-google-drive-files-pipedream/ograph.png
---

Pipedream is one of my new discoveries, and I've quickly become a fan. It's a low-code automation builder with a solid offering for developers with the ability to install npm packages and write code for the Node.js runtime (as well as other languages). There's ~2GB of ephemeral storage available to your workflows. With hundreds of integrations available, much of the time spent doing CRUD operations is taken away. You can focus on the task-specific 'glue' that brings your automation to life.

In this tutorial, you will build a Pipedream workflow that will listen for new files to be added to a Google Drive folder, transcribe them with the [Deepgram Node.js SDK](https://developers.deepgram.com/sdks-tools/sdks/node-sdk/), and email you the result.

Before you start, you will need a Pipedream account, a Google account, and a free [Deepgram API Key](https://console.deepgram.com/signup?jump=keys).

Create a new, empty, Pipedream workflow for this project.

## Trigger Your Workflow By Adding New Files

Each workflow can have a single trigger that starts it - anything from it being a certain time, a new tweet matching specific criteria, or a new form submission.

In your new empty workflow, pick a **Google Drive New Files (Instant)** Trigger. Connect your Google Drive account, ensuring access to see, edit, delete, and download your Google Drive files.

By default, this trigger will begin your workflow when a file is added anywhere in your Drive. That can be a bit aggressive, so you can set specific folders in the trigger step. Finally, click **Create Source**.

![New Files Google Drive trigger with one folder specified called Pipedream Demo.](https://res.cloudinary.com/deepgram/image/upload/v1658143658/blog/2022/08/transcribe-google-drive-files-pipedream/trigger.png)

Test the step by adding a file to your Google Drive and selecting the event in your Pipedream workflow. This example data can be used in future steps in this workflow.

![Step output showing drive file data, which includes a file ID, name, and mimeType.](https://res.cloudinary.com/deepgram/image/upload/v1658143658/blog/2022/08/transcribe-google-drive-files-pipedream/trigger-exports.png)

## Download File To Temporary Pipedream Storage

It can't be assumed that your file has public permissions, so the next step in the workflow is to download the Google Drive file to Pipedream's temporary storage. This storage is ephemeral, so you can't rely on it for long periods, but it is safe to use for the length of this workflow.

Create a new step with a **Google Drive Download File** action and select your Google Drive account. For File, enter a custom expression of the File ID from the trigger: `{{steps.trigger.event.id}}`.

To download the file to Pipedream's ephemeral storage, set the Destination File Path to `/tmp/{{steps.trigger.event.name}}`. If the filename is `hello.mp3`, the destination will be `/tmp/hello.mp3`.

Test the step, and you should see a success message. This now-local file will be sent to Deepgram in the next step.

![The Downlod File step showing a success message](https://res.cloudinary.com/deepgram/image/upload/v1658143658/blog/2022/08/transcribe-google-drive-files-pipedream/download.png)

## Transcribe File with Deepgram

Create a new step and select Deepgram. Connect a Deepgram account and provide your Deepgram API Key. Replace all of the code in this step with the following:

```js
const fs = require('fs')
const { Deepgram } = require('@deepgram/sdk')

module.exports = defineComponent({
  props: {
    deepgram: {
      type: "app",
      app: "deepgram",
    }
  },
  async run({ steps }) {

  }
})
```

There's no need to separately install the `@deepgram/sdk` package - simply importing or requiring it is enough.

By adding the `deepgram` prop, we can easily and securely access the Deepgram API Key we provided when connecting our account. The `run` method is triggered when this step is executed, and the `steps` object will contain all exported data from the trigger and previous steps.

Inside of `run`, add the following:

```js
const { name, mimeType } = steps.trigger.event
const buffer = await fs.promises.readFile(`/tmp/${name}`)
const source = { buffer, mimetype: mimeType }

const deepgram = new Deepgram(this.deepgram.$auth.api_key)
const { results } = await deepgram.transcription.preRecorded(source, { punctuate: true })
return results.channels[0].alternatives[0].transcript
```

This code snippet uses the [Deepgram Node.js SDK](https://developers.deepgram.com/sdks-tools/sdks/node-sdk/) and the [punctuation](https://developers.deepgram.com/documentation/features/punctuate/) feature, and returns only the transcript string. You can customize this by changing the returned value.

Due to the nature of ephemeral storage, the downloaded file from the last step may have now been deleted. Instead of clicking **Test**, use the dropdown and **Test all above** - this will repeat all steps, up-to-and-including generating transcriptions.

![Dropdown showing several options - highlighted is "Test all above"](https://res.cloudinary.com/deepgram/image/upload/v1658143658/blog/2022/08/transcribe-google-drive-files-pipedream/deepgram.png)

## Send Transcript

Now a transcript is generated, you can store it or send it however you like. You could store it in an Airtable database, create a new Google Docs file with the same filename, or send a text message with the contents.

Create a new step with the **Send Yourself an Email** action. For the subject use `Transcription for {{steps.trigger.event.name}} is ready`. For the email text use `{{steps.deepgram.$return_value}}` to include the Deepgram transcription.

Test your workflow, and you should receive an email with a newly-generated transcript!

## Cleanup Storage

Finally, go ahead and delete the file from the `tmp` directory. While this isn't strictly necessary, it is recommended. Create a new Node.js step, delete all of the code, and replace it with the following:

```js
const fs = require('fs')

module.exports = defineComponent({
  async run({ steps }) {
    return await fs.promises.unlink(`/tmp/${steps.trigger.event.name}`)
  },
})
```

You can now deploy your workflow and automatically receive Deepgram transcripts via email. You can, of course, edit any of the steps to be more useful to your specific use case. If you have any questions, please feel free to reach out to us - we love to help!

