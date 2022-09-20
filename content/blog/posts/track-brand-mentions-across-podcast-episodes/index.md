---
title: Track Brand Mentions Across Podcast Episodes
description: Learn how to generate a report for every podcast episode in a date
  range for mentions of your brand.
date: 2022-09-13T09:01:01.100Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1662992286/blog/2022/09/find-podcast-brand-mentions/cover.jpg
authors:
  - kevin-lewis
category: tutorial
tags:
  - python
  - podcasts
shorturls:
  share: https://dpgr.am/87bab2b
  twitter: https://dpgr.am/b9de264
  linkedin: https://dpgr.am/0ec29a6
  reddit: https://dpgr.am/795f099
  facebook: https://dpgr.am/8f5bfdf
---

In this post, we'll cover how to check podcast episodes for mentions of your brand. This can be particularly useful for ensuring sponsorship obligations are met, or to check when competitors are spoken about.

Given an input of a podcast feed URL, start/end dates, and a brand name, the script will generate a report of all mentions as detected by Deepgram's fast and accurate speech recognition API.

## Before You Start

You must have Python installed on your machine - I'm using Python 3.10 at the time of writing. You will also need a Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys).

Create a new directory and navigate to it in your terminal. [Create a virtual environment](https://developers.deepgram.com/blog/2022/02/python-virtual-environments/) with `python3 -m venv virtual_env` and activate it with `source virtual_env/bin/activate`. Install dependencies with `pip install deepgram_sdk asyncio python-dotenv feedparser`.

Open the directory in a code editor, and create an empty `.env` file. Take your Deepgram API Key, and add the following line to `.env`:

    DEEPGRAM_API_KEY="replace-this-bit-with-your-key"

## Dependency and File Setup

Create an empty `script.py` file and import the dependencies:

```py
import os
import json
from datetime import datetime
from time import mktime
import asyncio
from dotenv import load_dotenv
from deepgram import Deepgram
import feedparser
```

Load values from the `.env` file and initialize the Deepgram Python SDK:

```py
load_dotenv()
deepgram = Deepgram(os.getenv('DEEPGRAM_API_KEY'))
```

Finally, set up a `main()` function that is executed automatically when the script is run:

```py
async def main():
    print('Hello world')

if __name__ == '__main__':
    asyncio.run(main())
```

## Define Parameters

Above the `main()` function, create a set of variables with settings for your report:

```py
podcast_feed = 'http://feeds.codenewbie.org/cnpodcast.xml' # CodeNewbie Podcast
brand_name = 'stellar'
required_confidence = 0.9
start_date = '2022-05-01' # Start of season 20
end_date = '2022-06-27' # End of season 20
```

Each time Deepgram returns a search result, it will come with a confidence between 0 and 1. The `required_confidence` value will only report results above the specified confidence level.

## Fetch Episodes with Feedparser

Remove the `print()` statement in the `main()` function, fetch the podcast, and take a look at the returned data by pretty-printing it:

```py
async def main():
    rss = feedparser.parse(podcast_feed)
    print(json.dumps(rss.entries, indent=2))
```

Try it out! In your terminal, run the file with `python3 script.py` and you should see a bunch of data for each episode.

### Filter Episodes Within Date Range

Feedparser will take in many different date formats for when a RSS entry is published/updated and normalize them to a standard format. Using the standardized output, create a helper function just below the `main()` function:

```py
def check_if_in_date_range(episode):
    date_with_time = datetime.fromtimestamp(mktime(episode.published_parsed))
    date = date_with_time.replace(hour=0, minute=0, second=0)
    is_not_before_start = date >= datetime.fromisoformat(start_date)
    is_not_after_end = date <= datetime.fromisoformat(end_date)
    return is_not_before_start and is_not_after_end
```

This function takes in an episode, gets the date (without time), and returns `True` if it is within the range between and including `start_date` and `end_date`.

Remove `print(json.dumps(rss.entries, indent=2))` and replace it with the following:

```py
episodes = list(filter(check_if_in_date_range, rss.entries))
```

The `episodes` array now contains only episodes within the date range.

## Transcribe Episodes with Keyword Boosting and Search

Inside of the `main()` function, extract the podcast media URL, set transcription options, and request a Deepgram transcription. Finally, extract search results from the result:

```py
for episode in episodes:
    # Get podcast episode URL
    source = { 'url': episode.enclosures[0].href }
    # Increase chance of hearing brand_name
    # Return search results for brand_name
    transcription_options = { 'keywords': f'{brand_name}:2', 'search': brand_name }
    # Request transcription
    response = await deepgram.transcription.prerecorded(source, transcription_options)
    # Extract search results
    search_results = response['results']['channels'][0]['search'][0]['hits']
```

### Filter Only High Confidence Results

Add the following line below `search_results` to filter out any values which are below the required confidence:

```py
strong_results = list(filter(lambda x: x['confidence'] > required_confidence, search_results))
```

## Save Mentions Report

Below `strong_results`, take each episode (and each result within the episode), and add it as a new line in a report file:

```py
# Define file name
filename = f'{brand_name}-mentions-{start_date}-to-{end_date}.txt'
with open(filename, 'a+') as f:
    # Format publish date
    pub = datetime.fromtimestamp(mktime(episode.published_parsed))
    # Create line per episode
    f.write(f'{pub}: "{episode.title}" ({len(strong_results)} mentions)\n')
    # Create line per result (indented two spaces)
    for result in strong_results:
        f.write(f'  Mention at {result["start"]}s of \"{result["snippet"]}\"\n')
```

That's it! Rerun the script with `python3 script.py` and, once completed, you should see a new file called `stellar-mentions-2022-05-01-to-2022-06-27.txt` - perfect if you want to run several reports.

## Extending This Project

This project should equip you with the information you need to understand if and how often brand mentions occur throughout several podcast episodes. You should extend this further by creating more complex or graphical reports, allowing several brands to be searched for in one request, or by building a UI around this logic.

As ever, if you have any questions please feel free to get in touch or post in our [community discussions](https://github.com/orgs/deepgram/discussions).

The final code is as follows:

```py
import asyncio
import os
from datetime import datetime
from time import mktime
from dotenv import load_dotenv
from deepgram import Deepgram
import feedparser

load_dotenv()
deepgram = Deepgram(os.getenv('DEEPGRAM_API_KEY'))

podcast_feed = 'http://feeds.codenewbie.org/cnpodcast.xml'
brand_name = 'stellar'
required_confidence = 0.9
start_date = '2022-05-01'
end_date = '2022-06-27'

async def main():
    rss = feedparser.parse(podcast_feed)
    episodes = list(filter(check_if_in_date_range, rss.entries))
    print(len(episodes))

    for episode in episodes:
        source = { 'url': episode.enclosures[0].href }
        transcription_options = { 'keywords': f'{brand_name}:2', 'search': brand_name }
        response = await deepgram.transcription.prerecorded(source, transcription_options)
        search_results = response['results']['channels'][0]['search'][0]['hits']
        strong_results = list(filter(lambda x: x['confidence'] > required_confidence, search_results))

        filename = f'{brand_name}-mentions-{start_date}-to-{end_date}.txt'
        with open(filename, 'a+') as f:
            pub = datetime.fromtimestamp(mktime(episode.published_parsed))
            f.write(f'{pub}: "{episode.title}" ({len(strong_results)} mentions)\n')
            for result in strong_results:
                f.write(f'  Mention at {result["start"]}s of \"{result["snippet"]}\"\n')

def check_if_in_date_range(episode):
    date_with_time = datetime.fromtimestamp(mktime(episode.published_parsed))
    date = date_with_time.replace(hour=0, minute=0, second=0)
    is_not_before_start = date >= datetime.fromisoformat(start_date)
    is_not_after_end = date <= datetime.fromisoformat(end_date)
    return is_not_before_start and is_not_after_end

if __name__ == '__main__':
    asyncio.run(main())
```

