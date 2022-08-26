---
title: "Transcribing Podcast Feeds From Your Terminal"
description: "Using some terminal magic, learn how to fetch and transcribe podcast episodes. This is a beginner-friendly guide going through every step."
date: 2022-08-25
cover: https://res.cloudinary.com/deepgram/image/upload/v1661184408/blog/2022/08/downloading-podcast-transcripts-from-terminal/2208-Transcribing-Podcast-Feeds-From-Your-Terminal-blog%402x.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
seo:
    title: "Transcribing Podcast Feeds From Your Terminal"
    description: "Using some terminal magic, learn how to fetch and transcribe podcast episodes. This is a beginner-friendly guide going through every step."
shorturls:
    share: https://dpgr.am/88664b0
    twitter: https://dpgr.am/9cbc75e
    linkedin: https://dpgr.am/361b1a4
    reddit: https://dpgr.am/afd4fa0
    facebook: https://dpgr.am/1f11fd0
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661541398/blog/downloading-podcast-transcripts-from-terminal/ograph.png
---

Every true podcast has a free and publicly available RSS feed that contains information about the show and each episode. In turn, those episode items include metadata about the show and a link to a hosted audio file. In this tutorial, we will download transcripts for the latest episodes of our favorite shows and store them in text files on our computer.

## Before You Start

You will need a Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys). You will also need to install [jq](https://stedolan.github.io/jq/) and  [yq](https://kislyuk.github.io/yq/) to traverse and manipulate XML in your terminal (the data format used for RSS feeds).

This tutorial will be a set of building blocks, slowly growing in complexity towards our end goal. We'll take it slow and explain each step so you can apply this knowledge in other contexts, too.

We'll use the [NPR Morning Edition](https://www.npr.org/programs/morning-edition/) Podcast Feed: `https://feeds.npr.org/510318/podcast.xml`, but this can be swapped out for your favorite podcast.

## Getting Started

Open up your terminal and run the following:

```bash
curl https://feeds.npr.org/510318/podcast.xml
```

This should display the full RSS feed - a bunch of XML (similar to HTML) containing information about the feed.

### Get Just The Episode Items

The structure of the XML includes an `rss` tag containing a `channel` tag. Inside of `channel` is a whole bunch of metadata tags for the show and a set of `item` tags for each episode. `item` tags are not inside of a containing list as we might expect with HTML - they are all direct children of `channel`. Try running the following command:

```bash
curl https://feeds.npr.org/510318/podcast.xml | xq '.rss.channel.item[]'
```

This pipes the curl output into the `xq` command and extracts all of the `item` tags. It also pretty prints it in the terminal, which I find quite helpful when exploring the data. What is after the `xq` command in quotes is known as the 'expression.'

![Terminal showing pretty-printed item data](https://res.cloudinary.com/deepgram/image/upload/v1658494374/blog/2022/08/downloading-podcast-transcripts-from-terminal/extract-items.png)

### Get Specific Items

We can specify an index position in the square brackets to extract specific items. This will return only the first (latest) `item`:

```bash
curl https://feeds.npr.org/510318/podcast.xml | xq '.rss.channel.item[0]'
```

We can also slice the results and list the items with the first `n` items. This will return only the first three items:

```bash
curl https://feeds.npr.org/510318/podcast.xml | xq '.rss.channel.item[:3]'
```

Important note - this returns an array (items surrounded in `[]`) while before, it was just several objects being printed to the terminal. To turn this back into a set of objects we can further manipulate, append `[]` to the command:

```bash
curl https://feeds.npr.org/510318/podcast.xml | xq '.rss.channel.item[:3][]'
```

![Showing the difference between the two commands above](https://res.cloudinary.com/deepgram/image/upload/v1658494371/blog/2022/08/downloading-podcast-transcripts-from-terminal/arrays-vs-object-list.png)

## Displaying Specific Properties

Even once you extract a list of items, we can extract just a single property by continuing to use the dot syntax:

```bash
curl https://feeds.npr.org/510318/podcast.xml | xq '.rss.channel.item[:3][].title'
```

If we want to extract a single property from an array of objects, we can use `map`:

```bash
curl https://feeds.npr.org/510318/podcast.xml | xq '.rss.channel.item[:3] | map(.title)'
```

![The terminal showing an array with three strings](https://res.cloudinary.com/deepgram/image/upload/v1658494371/blog/2022/08/downloading-podcast-transcripts-from-terminal/mapped-array-one-key.png)

As opposed to JSON documents, XML also has attributes (like HTML). To access these, we use the following syntax:

```bash
curl https://feeds.npr.org/510318/podcast.xml | xq '.rss.channel.item[:3] | map(.enclosure."@url")'
```

Want to create a new data structure? Here we create an object with just the `title` and `url`:

```bash
curl https://feeds.npr.org/510318/podcast.xml | xq '.rss.channel.item[:3] | map({ title: .title, url: .enclosure."@url" })'
```

![Terminal showing an array of three objects - each with a title and url](https://res.cloudinary.com/deepgram/image/upload/v1658494375/blog/2022/08/downloading-podcast-transcripts-from-terminal/new-structure.png)

## Looping Through Objects

Objects don't really exist in BASH - so looping through them and extracting values can be a bit tough. Thankfully, a working approach is presented by Start & Wayne's [Ruben Koster](https://www.starkandwayne.com/blog/bash-for-loop-over-json-array-using-jq/). Let's walk through it.

Firstly, store the output from the previous step in a variable:

```bash
DATA=$(curl https://feeds.npr.org/510318/podcast.xml | xq '.rss.channel.item[:3] | map({ title: .title, url: .enclosure."@url" })')
```

This can now be addressed in your terminal as `$DATA`:

```bash
echo $DATA
# Array of objects with title and url will show here
```

If you try and loop through this data, you'll notice something undesirable:

![Every log is a string](https://res.cloudinary.com/deepgram/image/upload/v1658494373/blog/2022/08/downloading-podcast-transcripts-from-terminal/every-log-is-a-string.png)

If the whole payload is thought of as a string, this is looping through each word. This isn't what we want. The solution is to base64-encode the data, so it's only one string, then decode it in the loop with a helper function:

```bash
for row in $(echo "${DATA}" | jq -r '.[] | @base64'); do
    _jq() {
        echo ${row} | base64 --decode | jq -r ${1}
    }
    url=$(_jq '.url')
    title=$(_jq '.title')

    echo $url, $title
done
```

## Transcribing Each Episode

Now that each podcast item is available in a loop, with both the `url` and `title` properties individually addressable, we can generate a transcript using cURL. We go through it in more detail in our [recent blog post](https://developers.deepgram.com/blog/2022/08/saving-transcripts-from-terminal/).

Make sure you replace `YOUR_DEEPGRAM_API_KEY` with your own Deepgram API Key.

```bash
DATA=$(curl https://feeds.npr.org/510318/podcast.xml | xq '.rss.channel.item[:3] | map({ title: .title, url: .enclosure."@url" })')
for row in $(echo "${DATA}" | jq -r '.[] | @base64'); do
    _jq() {
        echo ${row} | base64 --decode | jq -r ${1}
    }
    RESPONSE=$(
        curl -X POST "https://api.deepgram.com/v1/listen?punctuate=true&tier=enhanced" \
            -H "Authorization: Token YOUR_DEEPGRAM_API_KEY" \
            -H "Content-Type: application/json" \
            -d "{\"url\":\"$(_jq '.url')\"}"
   )
   echo $RESPONSE | jq '.results.channels[0].alternatives[0].transcript' > "$(_jq '.title').txt"
done
```

This will create one text file for each episode.

## Wrapping Up

`jq` and `xq` are exceptionally powerful tools, even more so when combined with cURL requests. With minimal adjustment, you can begin to alter the podcast fetched, the number of transcripts generated, or include additional metadata about the episode in the generated file.

If you have any questions, feel free to reach out - we love to help!

        