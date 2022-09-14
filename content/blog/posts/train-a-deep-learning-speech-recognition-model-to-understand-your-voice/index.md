---
title: Train a Deep Learning Speech Recognition Model to Understand Your Voice
description: Learn how to build a speech recognition system to understand your
  voice with the power of deep learning.
date: 2020-06-19
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981354/blog/train-a-deep-learning-speech-recognition-model-to-understand-your-voice/trouble-w-wer%402x.jpg
authors:
  - natalie-rutgers
category: ai-and-engineering
tags:
  - deep-learning
seo:
  title: Train a Deep Learning Speech Recognition model to understand your voice
  description: ""
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981354/blog/train-a-deep-learning-speech-recognition-model-to-understand-your-voice/trouble-w-wer%402x.jpg
shorturls:
  share: https://dpgr.am/2bbab35
  twitter: https://dpgr.am/6ff1b78
  linkedin: https://dpgr.am/fa3e037
  reddit: https://dpgr.am/c8e778b
  facebook: https://dpgr.am/758e888
---

Here we'll train a speech recognition model to transcribe a phrase that it previously failed to recognize. To do this, we'll record some audio files and train a model using <a target="_blank" rel="noopener noreferrer">Deepgram MissionControl</a> - Deepgram's all-in-one platform for custom training and deploying custom trained speech recognition. To explore custom training with MissionControl, we'll train our model to recognize the phrase: "The proof is in the pudding." We'll do this by recording 50 audio files, pairing those files with accurate labels, and then training a model. That should get us from Deepgram General models belief that I'm saying, "is this in this footing" to a model that knows "The proof is in the pudding."

## Sign up for MissionControl

First, you'll want to [create an account](https://missioncontrol.deepgram.com/signup). Your account comes preloaded with a few freebies:

    1\. 20 audio hours per month of Automatic Speech Recognition  
    2\. The ability to create 2 Custom-Trained Models  
    3\. The ability to deploy 1 of your Custom-Trained Models  
    4\. 10 minutes of professional data labeling to help create training data  
    5\. 2 Free Training-ready datasets  
    6\. Access to 3 of Deepgram's General models  

## Create an API Key

To avoid reusing your username and password in requests, it can be helpful to create a new API key to use for development. You can do this at [in MissionControl](https://missioncontrol.deepgram.com/accounts-and-billing) or by running the following request in the command line, being sure to swap in your credentials and a name of your choosing. We highly recommend running these requests through `jq` for easy-to-read outputs.

    curl -X POST -u USERNAME:PASSWORD https://missioncontrol.deepgram.com/v1/keys?name="test"  

## Create a dataset

First, we'll create a new dataset. This dataset will hold all our example recordings and labels so that we can use them for training. Use the following command, being sure to give your dataset a useful name.

    curl -X POST -u SECRET:KEY https://missioncontrol.deepgram.com/v1/datasets?name="Proof"  

In no time, you'll get back a response telling you your new dataset's `dataset-id`. Grab that `dataset-id` for later.

## Record and upload your audio and labels

You can go about this step a number of ways. Ultimately, you want to record and label 50 files of yourself saying, "The proof is in the pudding." This tutorial walks you through two ways to do that:

1.  With the Deepgram MissionControl Recorder
2.  With the Command Line

![](/content/images/2020/06/Screen-Shot-2020-06-18-at-7.51.57-PM.png)

### With the Deepgram MissionControl Recorder

First, navigate to the Deepgram MissionControl Recorder. There, you'll be asked to to fill in some information so that we can send your recordings to your dataset in your MissionControl account. Paste in the `dataset-id` that you received earlier, as well as your API credentials to authenticate your resulting POST requests. For the sentence, we'll be entering in our "The proof is in the pudding." Once you've filled in all the fields, go ahead and click next. You'll see your script displayed, as well as a counter for how many recordings you have left to record. Record and submit yourself saying this phrase until you see a surprise. ![](/content/images/2020/06/Screen-Shot-2020-06-18-at-7.53.49-PM.png) In the background, the app uses the information you supplied to submit each recording to your selected dataset. It then submits the supplied alongside that recording for its label. You can check that your recordings are being captured by viewing your dataset in your [DataFactory in MissionControl](https://missioncontrol.deepgram.com/data). ![](/content/images/2020/06/Screen-Shot-2020-06-18-at-6.17.43-PM.png)

### With the command line

To install a tool to record from command line, use SoX (Sound eXchange).

    sudo apt install sox  
    brew install sox  

And, to record a file in your current directory in your terminal, do this (using SoX's built in rec command):

    rec -b 16 -r 16000 -c 1 yourFile.wav  

This will record a wav file from your computer's onboard microphone (make sure it has an onboard microphone that is in your proximity, this will not work on a remote server, gotta use a laptop or workstation). The wav file has these properties: 16 bit depth, 16,000 Hertz sample rate, mono channel and is recorded to the file yourFile.wav (you should might want to pick a better name than that!). Record yourself saying "The proof is in the pudding." 50 times, giving the resulting file a unique name for each recording. Now you're ready to upload your recordings and labels to your MissionControl dataset. You can upload your recordings to MissionControl using this command:
```
    curl -X POST -u SECRET:KEY --data-binary @path/to/yourFile.wav "https://missioncontrol.deepgram.com/v1/resources?name=myfile.wav&dataset-id=dddddddd-1111-2222-3333-444444444444"  
```
Using the resulting `resource-id`s, you'll then want to pair labels with each recording. This can be uploaded with the following command:
```
    curl -X PUT -u SECRET:KEY -H "Content-Type: text/plain" -d'The proof is in the pudding.'  
     "https://missioncontrol.deepgram.com/v1/resources/{resource-id}/transcript" 
```
Repeat with all of your recordings.

## Train a Custom Model with your dataset

Now that your dataset is training-ready, you're ready to build your Custom Model. Go ahead and submit a `curl` command that names your model and associates the dataset you prepared with it.
```
    curl -X POST -u SECRET:KEY https://missioncontrol.deepgram.com/v1/models?dataset-id=dddddddd-1111-2222-3333-444444444444 -H 'content-type: application/json' -d '{"name": "Proof-in-the-Pudding"}'  
```
To associate additional datasets to your model, take advantage of [`PUT /models/{model-id}/datasets`](https://missioncontrol.deepgram.com/docs). You'll quickly get back a response that shows your new model.
```
    {
      "model_id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      "version_id": "12345678-1234-1234-1234-1234567890ab",
      "model_name": "Proof-in-the-Pudding",
      "created": "2020-05-01T18:56:40.316185Z",
      "model_type": "USER",
      "wer": null,
      "trained_at": null,
      "status": "CANCELLED"
    }
```
Go ahead and copy the `model_id`. We'll use that to submit the model for training. Perfect, plug that `model_id` in and run the following command:
```
    curl -X POST -u SECRET:KEY "https://missioncontrol.deepgram.com/v1/train?model-id={model-id}&base-model-id=e1eea600-6c6b-400a-a707-a491509e52f1"  
```
You'll see a response confirming that your model has been submitted and its status has changed to `PENDING`
```
    {
     "id":"a21e82a7-5bac-4b2a-a816-cb2f84e08ca8",
     "model_id":"aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
     "submitted":"2020-05-01T19:12:24.913587Z",
     "finished": null,
     "status":"PENDING"
    }
```
Training will take some time, but you'll be emailed once your model has finished. Once it's finished training, take a look at the steps for [reviewing your custom model's performance and deploying it for use at scale](https://blog.deepgram.com/quickstart-guide-for-the-deepgram-missioncontrol-api/). To transcribe with your new model, you'll need to [deploy it to SpeechEngine](https://blog.deepgram.com/quickstart-guide-for-the-deepgram-missioncontrol-api/). ![](/content/images/2020/06/Screen-Shot-2020-06-18-at-7.40.49-PM.png)
