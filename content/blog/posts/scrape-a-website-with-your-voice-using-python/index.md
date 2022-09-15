---
title: Scrape a Website With Your Voice Using Python
description: This tutorial will use Python, Beautiful Soup and Deepgram
  speech-to-text Python API to scrape a website with your voice.
date: 2022-09-15T15:37:24.138Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1663256104/blog/python-scrape-with-voice/2209-Scrape-a-website-with-your-voice-using-Python-blog_2x_r7cpk9.jpg
authors:
  - tonya-sims
category: tutorial
tags:
  - python
  - scraping
  - beautifulsoup
---
Voice commands are intriguing, especially with a speech recognition API. After getting exposure to Deepgram’s real-time transcription, and speech-to-text Python SDK, I thought it’d be cool to scrape a website with my voice.

The way the project works is simple:

\
1. Speak the command “scrape” into my computer’s microphone.

2. That will kick off the Python scraper, which extracts links from a webpage.



Let’s take a closer look at how I built this project using Python, FastAPI, and Deepgram speech-to-text.



\# Python Code Web Scraper Using a Voice Command With Speech-to-Text



For this voice command scraper, I used one of Python’s newest web frameworks, FastAPI. I’ve already written a blog post about how to \[get up and running with FastAPI and Deepgram’s live transcription using the Python SDK](https://developers.deepgram.com/blog/2022/03/live-transcription-fastapi/).



Since there’s already a tutorial about FastAPI written on Deepgram’s blog, I won’t go into tremendous detail as my \[original post](https://developers.deepgram.com/blog/2022/03/live-transcription-fastapi/) covers most of the Python code.



Let’s start with the installation.



I installed two additional Python libraries from my terminal inside of a virtual environment:



\`\``

pip install beautifulsoup4

pip install requests

\`\``



Then, I added the import statements to the \*\*main.py\*\* file:



\`\``python

from bs4 import BeautifulSoup

import requests

import re

\`\``



\`BeautifuSoup\` is for web scraping.

The \`requests\` library is to get the text from the page source.

The \`re\` import is to get the links in a specific format.



The only new function in this file is \`scrape_links\`. I also defined a new list called \`hold_links\` which will hold all the links extracted from the webpage. I pass in a URL to scrape to \`requests.get\` and loop through a BeautifulSoup object. A link from the webpage gets appended to the list each time through the loop.



\`\``python

hold_links = \[]



def scrape_links():

url = "https://xkcd.com/"

r = requests.get(url)



soup = BeautifulSoup(r.text, "html.parser")



for link in soup.find_all("a", attrs={'href': re.compile("^https://")}):

hold_links.append(link.get('href'))



return hold_links

\`\``



Next, is the \`get_transcript\` inner function.



\`\``python

​​async def process_audio(fast_socket: WebSocket):

async def get_transcript(data: Dict) -> None:

if 'channel' in data:

transcript = data\['channel']\['alternatives']\[0]\['transcript']

if transcript and transcript == 'scrape':

scrape_links()

await fast_socket.send_text(transcript)



deepgram_socket = await connect_to_deepgram(get_transcript)



return deepgram_socket

\`\``



The only change here are these lines to check if there’s a transcript and if the transcript or voice command is “scrape”, then call the \`scrape_links\` function:



\`\``python

if transcript and transcript == 'scrape':

scrape_links()

\`\``



Last but not least, when rendering the template, I passed in the \`hold_links\` list as a context object so the HTML page could display the links using Jinja.



\`\``python

@app.get("/", response_class=HTMLResponse)

def get(request: Request):

return templates.TemplateResponse("index.html", {"request": request, "hold_links": hold_links})

\`\``



In the \*\*index.html\*\* file, I added the following line to the `<head></head>` section to refresh the page every five seconds:



\`\``html

<meta http-equiv="refresh" content="5" />

\`\``



The page needs to be refreshed after speaking the voice command “scrape” to display the extracted links.



Lastly, in the `<body></body>\`, add these lines which loop over the extracted links from the webpage and render them to the HTML page, \`index.html`:



\`\``html

<body>

<p>

{% for link in hold_links %}

{{ link }}</br>

{% endfor %}

</p>

\`\``

Finally, to run the FastAPI Python voice-to-text web scraper, type \`uvicorn main:app --reload\` from the terminal and navigate to \`http://127.0.0.1:8000/\`.



After speaking the word “scrape” into my computer’s microphone, a list of extracted links for the specified URL appeared on the webpage.



!\[Scrape a website using voice commands with Python](python-scrape-with-voice.png)



!\[Scrape and extract links using Beautiful Soup with Python](python-extract-links-with-voice.png)



If you found my project exciting or have questions, please feel free to \[Tweet me](https://twitter.com/DeepgramAI)! I’m happy to help!