---
title: "Saving Transcripts From Your Terminal"
description: "Learn how to use cURL to generate and save Deepgram transcripts directly from your terminal. Start now!"
date: 2022-08-15
cover: https://res.cloudinary.com/deepgram/image/upload/v1660569910/blog/2022/08/saving-transcripts-from-terminal/cover.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
seo:
    title: "Saving Transcripts From Your Terminal"
    description: "Learn how to use cURL to generate and save Deepgram transcripts directly from your terminal. Start now!"
shorturls:
    share: https://dpgr.am/8c8743f
    twitter: https://dpgr.am/4db85ee
    linkedin: https://dpgr.am/76ca356
    reddit: https://dpgr.am/c6681df
    facebook: https://dpgr.am/282a2d3
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454119/blog/saving-transcripts-from-terminal/ograph.png
---

I've recently started doing a lot more work directly in my terminal - and I've learned that writing Bash scripts doesn't have to be scary. Today, we'll write a set of commands and scripts to execute directly in our terminal.

## Before You Start

You will need a Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys). You will also need to install [jq](https://stedolan.github.io/jq/).

## Making a cURL Request

Open your terminal and type (or copy and paste) the following, not forgetting to change `YOUR_DEEPGRAM_API_KEY` with a real API Key, and then press enter:

```bash
curl \
  --request POST \
  --header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}' \
  --url 'https://api.deepgram.com/v1/listen?punctuate=true'
```

![A terminal showing a huge block of JSON data returned from Deepgram](https://res.cloudinary.com/deepgram/image/upload/v1658401448/blog/2022/08/saving-transcripts-from-terminal/full-output.png)

Let's break down each part of this request:

*   `--request POST`: is a HTTP request with the POST method.
*   `--header 'Authorization: Token YOUR_DEEPGRAM_API_KEY'` - include details to link this request with our account/project.
*   `--header 'Content-Type: application/json'` - JSON data will be sent with this request.
*   `--data '{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}'`. - is the JSON data sent to Deepgram (an object containing one url parameter).
*   `--url 'https://api.deepgram.com/v1/listen?punctuate=true'` - the URL to make the request to (Deepgram's endpoint). `punctuate=true` enables the [punctuation](https://developers.deepgram.com/documentation/features/punctuate/) feature.
*   `\` allows us to break one command over several lines for readability.

## Shortening Your Request

The first example is handy for understanding all of the required parameters. Here is a more concise way to make the same request:

```bash
curl https://api.deepgram.com/v1/listen?punctuate=true \
     -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}'
```

The first thing you'll notice is that the URL comes immediately after the `curl` command. You may have also noted the absence of an HTTP method - this would normally default to a GET request, but as this request has a body, a POST request is inferred. `--header` is shortened to `-H`, and `--data` to `-d`.

## Adding jq

`jq` is an excellent command-line utility that allows you to display and manipulate JSON data. On the terminal, a pipe (`|`) is often used to send the output of one command as an input for a second command. `jq` expects some JSON as input and an expression to describe how to display it.

This jq expression will extract just the transcript from the returned data object:

` | jq '.results.channels[0].alternatives[0].transcript'`

You can add it to the end of your cURL request like so:

```bash
curl https://api.deepgram.com/v1/listen?punctuate=true \
  -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}' \
  | jq '.results.channels[0].alternatives[0].transcript'
```

![A terminal showing just the transcript text](https://res.cloudinary.com/deepgram/image/upload/v1658401443/blog/2022/08/saving-transcripts-from-terminal/jq.png)

## Saving Output to File

Once you have the correct data extracted and formatted from `jq`, you can redirect the output to a new file by appending `> output.txt` to any command that prints to the terminal. Here it is in practice:

```bash
curl https://api.deepgram.com/v1/listen?punctuate=true \
  -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url":"https://static.deepgram.com/examples/nasa-spacewalk-interview.wav"}' \
  | jq '.results.channels[0].alternatives[0].transcript'
  > output.txt
```

## Processing Multiple Files

You can create `.sh` files to execute from your terminal, which contain multiple lines of bash script. Create a new file called `transcripts.sh` and open it in a code editor. Copy and paste the following:

```bash
#!/bin/bash

urls=("https://static.deepgram.com/examples/TrumpDemocratsMeeting.nancyshort.wav" "https://static.deepgram.com/examples/nasa-spacewalk-interview.wav" "https://static.deepgram.com/examples/deep-learning-podcast-clip.wav")

dg_features="punctuate=true&utterances=true&diarize=true&tier=enhanced"
dg_key="YOUR_DEEPGRAM_API_KEY"

for url in ${urls[@]}; do
  filename=${url##*/}

  RESPONSE=$(
    curl -X POST https://api.deepgram.com/v1/listen?$dg_features \
         -H "Authorization: Token $dg_key" \
         -H "Content-Type: application/json" \
         -d "{\"url\":\"$url\"}"
  )

  echo $RESPONSE | jq '.results.channels[0].alternatives[0].transcript' > $filename.txt
done
```

Let's break down each part of this file:

*   The first line - `#!/bin/bash` - is a shebang, and specifies which program should be called to run the script. In this case, bash.
*   `urls` is a variable containing an array with three URLs. Notice that arrays use parentheses, and items are separated by a space only.
*   `dg_features` and `dg_key` are variables you should alter for your exact use case.
*   Inside of the `for` loop:
    *   `filename` extracts the last part of the URL (the filename), which will later be used to name the output file.
    *   The `curl` command is the same as before, with variables interpolated. The output is stored in a new variable called `RESPONSE`.
    *   `RESPONSE` is sent to `jq`, and then redirected into a new text file.

Run the file in your terminal with `./transcripts.sh`. As a note, this request uses Deepgram's punctuation, utterances, diarize, and tier features.

## Playing with jq

`jq` is a remarkably powerful tool. The following expression will loop through the `results.utterances` array, and format a string for each item interpolating the speaker identifier and transcript text:

```bash
echo $RESPONSE | jq -r '.results.utterances[] | "[Speaker:\(.speaker)] \(.transcript)"' > $filename.txt
```

The output looks like this:

    [Speaker:0] agreement on other things that are really good. Nancy, would you like to say something?
    [Speaker:1] Well, thank you, mister president for the opportunity to meet with you so that we can work together in a bipartisan way
    [Speaker:1] to meet the needs of the American people. I think the American people recognize
    [Speaker:1] that we must keep government open, that a shutdown is not worth anything.
    [Speaker:1] And that you should

I hope you found this valuable and interesting. If you have any questions, please feel free to get in touch - we love to help!

        