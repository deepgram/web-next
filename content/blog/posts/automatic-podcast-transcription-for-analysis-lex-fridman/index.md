---
title: Automatic Podcast Transcription for Analysis - Lex Fridman
description: test
date: 2022-10-10T21:22:17.324Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1664490424/blog/blog-placeholder_nhrr9p.png
authors:
  - yujian-tang
category: tutorial
tags:
  - podcast
  - python
---
What makes a legendary podcast? [Lex Fridman](https://en.wikipedia.org/wiki/Lex_Fridman) has gotten this down to an art. His podcasts are mostly over 2 hours long, and still get hundreds of thousands to millions of views on YouTube. Lex Fridman is not only a prolific podcaster but also a renowned AI researcher. He's known for as being a great interviewer and for commonly saying things like "poetic", "beautiful", "love", and "profound". We're curious, what makes Lex's podcast so successful?

We know that Lex is a great host, he asks great questions, and he pushes back on his guests to clarify their statements. What else adds to his amazing podcasts? The guests and their topics of course. But what about the content? I wanted to dive even deeper. What can using Python to do ASR and text analysis tell us? Let's take a look.

First, we use Deepgram to transcribe some of his latest podcasts. Once we have these transcripts, we also do some post-processing on the text with [The Text API](https://www.thetextapi.com). We look at the time spent speaking by speaker, the most common phrases mentioned by the guest and Lex, extract the named entities mentioned, and create summaries of the podcasts. This will give us an idea of how Lex and his guests speak, what they tend to talk about, and give us a high-level idea of what was talked about in his 2+ hour-long podcasts.

Find the [GitHub code here](https://github.com/ytang07/transcribe_and_analyze_podcasts).

## Prerequisites for Automatic Podcast Transcription

This is a rather immersive project. We need two different web API tools, [the `youtube_dl`](https://developers.deepgram.com/blog/2022/08/transcribe-youtube-videos-from-terminal/), `requests`, and `matplotlib` libraries, and [FFMPEG](https://developers.deepgram.com/blog/2021/11/ffmpeg-beginners/). You can get FFMPEG in multiple ways. If you are on a Mac you can `brew install ffmpeg`. If you're on a Windows or Linux machine, you can find [FFMPEG here](https://ffmpeg.org/download.html).

The Python libraries can be installed with `pip install youtube_dl requests matplotlib`. You can also use `conda` if that's your package manager. We also need to get API keys for Deepgram for online transcription and The Text API for online text analysis. If you only plan to use the FFMPEG library in Python, you can also run `pip install ffmpeg-python` for the Python library.

## Downloading Lex Fridman's Podcast from YouTube

The first thing we need to do, as with most any ML task, is get the data. In this case, our data is the podcast audio. This is the part of the project that requires the use of `youtube_dl` and `ffmpeg`. We could go look for podcasts on another site, but luckily Lex posts all of his to YouTube and we have a YouTube downloader.

We start by importing `youtube_dl` into our project. Next, we declare the parameters for downloading our YouTube videos. Our main goal here is to get the audio files, so we want the options to reflect that. 

We choose `bestaudio/best` as our format to indicate that we want to download the best audio format. Then, we apply `postprocessors` which indicate what to do once we have the webpage. In this case, we tell `youtube_dl` that we want to use FFMPEG and extract the file into an `mp3` file at 192 kHz. Finally, the last option we provide is where to save the output. In this example, I'm saving it to `lex/audio`.

Now all that's left to do is call the YouTube downloader with the link to the first video in Lex Fridman's podcast playlist. This will automatically run down the list and also download the later videos in the playlist. We stop after downloading 10 in this example due to the size of the podcasts. We leave analyzing the other 300+ 2 hour-long podcasts as an exercise for the reader.

```python
import youtube_dl
 
ydl_opts = {
   'format': 'bestaudio/best',
   'postprocessors': [{
       'key': 'FFmpegExtractAudio',
       'preferredcodec': 'mp3',
       'preferredquality': '192',
   }],
   'outtmpl': 'lex/audio/%(title)s.mp3',
}
with youtube_dl.YoutubeDL(ydl_opts) as ydl:
   ydl.download(['https://www.youtube.com/watch?v=VBPTFlpv31k&list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4&index=1'])
```

## Getting the Podcast Transcription with Speaker Diarization

Step 1, get the data? Check. Step 2 - Automatically transcribe podcasts with speaker diarization. We use the Deepgram SDK to run transcription on a prerecorded piece. The other libraries we need for this part are the `asyncio`, `json`, and `os` libraries. I've stored my API key in a separate config file and loaded it in by importing it.

The first thing we need to do is initialize a Deepgram client with our API key. Next, let's set up some options. The main options we want to set up here are `diarize`, `punctuate`, and `paragraphs`. The `diarize` and `punctuate` arguments help us get a podcast transcription with speaker diarization back. We use `paragraphs` to get separate paragraphs back separately. Click here for more info about [transcription options](https://developers.deepgram.com/documentation/features/).

`model` and `tier` define the model type and tier that we want to use. Deepgram has [multiple models](https://developers.deepgram.com/api-reference/#transcription-prerecorded) from a general model to ones suited for meetings, phone calls, financial vocabulary, and more. For our purposes, we'll use the enhanced General model to take advantage of its high accuracy on long tail vocabulary we commonly see in Lex's content. Next, we set up an `async` function. The Deepgram Python SDK currently uses an `async` interface for both their real-time and pre-recorded audios. A synchronous version for the pre-recorded audio type is coming.

In our function, we use the `os` module to get a list of the filenames in the folder we've stored the audio in. Next, we loop through that list. For each of those podcasts, we read the podcast in as bytes and pass that to the Deepgram SDK along with the options we created earlier. We `await` the response and store it in a response variable.

Once we've received the response, we dump that into a JSON file and save it. We'll use these JSON files as our data sources for text analysis. Since we have an `async` function, we run it by using the [`async.run()` function](https://pythonalgos.com/python-asyncio-run-vs-run-until-complete/) which executes the async loop for us.

```python
from deepgram import Deepgram
import asyncio, json, os
 
from config import dg_key
dg = Deepgram(dg_key)
 
options = {
   "diarize": True,
   "punctuate": True,
   "paragraphs": True,
   "model": 'general',
   "tier": 'enhanced'
}
 
async def main():
   podcasts = os.listdir("./lex/audio")
   for podcast in podcasts:
       print(podcast)
       with open(f"lex/audio/{podcast}", "rb") as audio:
           source = {"buffer": audio, "mimetype":'audio/mp3'}
           res = await dg.transcription.prerecorded(source, options)
           with open(f"lex/transcripts/{podcast[:-4]}.json", "w") as transcript:
               # print(transcript)
               json.dump(res, transcript)
   return
 
asyncio.run(main())
```

## Pretty Print the Lex Fridman Podcast Transcripts

Now that we have the podcast transcripts with speaker diarization, let's make them look pretty. You can see what the raw transcripts look like in the GitHub folder. For this portion, we need to use the `json` and `os` libraries. We create two functions to turn the podcast transcript into a pretty script.

First, we create a function to create the pretty transcripts from the speaker diarized transcript output we got. Second, we create a function that assigns the speaker names to the labeled speakers.

```python
import json
import os
```

### Extracting the Podcast Transcript for Pretty Printing

Let's create our first function. This function takes no parameters. It acts on all the transcripts in one go. First, we use the `os.listdir()` function to get all the transcripts. For each of these transcripts, we load the JSON file into a local variable for storage.

Next, we need to parse the transcript. As shown above, the JSON format of the transcript has many embeds and has more information than we need. All we need from the JSON podcast transcript is the actual words of the transcript, we can disregard confidences and such. 

An example template of a JSON response from Deepgram with paragraphs and words looks like this:

```javascript
{
 "metadata":{
   "transaction_key":"string",
   "request_id":"string",
   "sha256":"string",
   "created":"string",
   "duration":0,
   "channels":0,
   "models":[],
   "model_info": {}
 },
 "results": {
   "channels": [
     {
       "alternatives":[
           {
               "transcript": "string",
               "confidence": "float",
               "words": [
                   {
                       "word": "string",
                       "start": "start time in seconds",
                       "end": "end time in seconds",
                       "confidence": "float",
                       "punctuated_word": "string"
                   }
               ],
               "paragraphs": {
                   "transcript": "string",
                   "paragraphs": [
                       {
                           "sentences": [
                               {
                                   "text": "string",
                                   "start": "start time in seconds",
                                   "end": "end time in seconds"
                               }
                           ],
                           "num_words": "int",
                           "start": "start time in seconds",
                           "end": "end time in seconds"
                       }
                   ]
               }
           }
       ]
     }
   ]
 }
}
```

We dive into the results returned. Then the first element returned in the channels. Then the first element returned in the alternatives. From there, we extract the paragraph key for the set of paragraphs. Remember we used the `paragraphs = True` option earlier. 

From the paragraphs, we extract the speaker diarized transcript. Once we have that transcript, we loop through it and write each line to a new file. To create all the pretty transcripts, we just run the `create_transcripts` function. Another approach would be to have the loop of transcripts outside of the function and have the function just create one pretty script from a file.

```python
# create transcripts
def create_transcripts():
   for filename in os.listdir("lex/transcripts"):
       with open(f"lex/transcripts/{filename}", "r") as file:
           transcript = json.load(file)
       paragraphs = transcript["results"]["channels"][0]["alternatives"][0]["paragraphs"]
       print(paragraphs['transcript'])
       with open(f"lex/pretty_scripts/{filename[:-5]}.txt", "w") as f:
           for line in paragraphs['transcript']:
               f.write(line)
create_transcripts()
```

### Assign Names to Recognized Speakers from Speaker Diarization

Now that we've extracted the pretty version of the podcast transcript, let's assign speakers. Deepgram's speaker diarization feature split the speakers out for us, but we have to assign their names. Just like with the last function, this function acts on all the files at once.

First, we go into the directory where we saved all the pretty printed podcast transcripts. For each one of these, we start by printing which file we're on so we have an idea of the expected speakers. These 10 Lex Fridman podcasts each have two speakers, Lex and the Guest.

We use two lists to keep track of the speakers. One list keeps track of the speaker by number (created by the speaker diarization feature). The other keeps track of the speaker names. For each of the lines in the transcript that starts with "Speaker" we know that there is a diarized speaker there.

We prompt the user (us) to manually enter the name of the speaker as we go through all the speakers. If a speaker has already been added to the `spoken` list, which keeps track of the numbered speakers, we skip it.

When we finish labeling the numbered speakers, we go in and find and replace all the "Speaker" strings with the corresponding name. Finally, we write that to the same document.

```python
# separate transcripts by speaker
# label speakers by printing first lines by the speaker
# coalesce them into one file
def assign_speakers():
   for filename in os.listdir("lex/pretty_scripts"):
       print(f"Current File: {filename}")
       with open(f"lex/pretty_scripts/{filename}", "r") as f:
           lines = f.readlines()
       spoken = []
       names = []
       for line in lines:
           if line.startswith("Speaker "):
               if line[0:9] in spoken:
                   continue
               print(line)
               name = input("Who is the Speaker?")
               if len(name) <= 1:
                   continue
               spoken.append(line[:9])
               names.append(name)
       print(spoken)
       print(names)
       filedata = "\n".join(lines)
       print(filedata)
       for speaker, name in zip(spoken, names):
           filedata = filedata.replace(speaker, name)
       with open(f"lex/pretty_scripts/{filename}", "w") as f:
           f.write(filedata)
 
assign_speakers()
```

## Time Spent Speaking by Lex vs Guests

Now that we have a pretty podcast transcript with speaker diarization, we can do some more advanced analysis. Let's take a look at how often Lex speaks versus how often his guests speak. For this analysis, we use the `json` and `os` libraries as well.  We are going to analyze the length of time spoken and the number of words said.

```python
import json
import os
```

### Assigning Speaker Time and Words Said from the Podcast Transcript

First, we are going to analyze the length of time spoken by each member. The first part of this doesn't require the pretty transcripts we made earlier. We need access to the originally returned podcast transcriptions.

The first thing we do in this section is the speaker labeling we did above. The main difference is that we keep track of the start and end time of each paragraph said. Once we have these paragraphs, we add up all the times a speaker spoke and store that as the value in a dictionary with the speaker's name as the key. Then we dump the resulting dictionary into a JSON file. We use this JSON file to visualize the results later.

```python
def divide_times():
   times = {}
   for filename in os.listdir("lex/transcripts_unenhanced"):
       print(f"Current filename: {filename}")
       with open(f"lex/transcripts_unenhanced/{filename}", "r") as file:
           transcript = json.load(file)
       paragraphs = transcript["results"]["channels"][0]["alternatives"][0]["paragraphs"]["paragraphs"]
       speaker_times = {}
       assigned_speakers = {}
       for paragraph in paragraphs:
           len_spoken = paragraph["end"]-paragraph["start"]
           speaker = paragraph["speaker"]
           if speaker in assigned_speakers:
               speaker = assigned_speakers[speaker]
           else:
               print(paragraph)
               name = input("Who is the speaker?")
               assigned_speakers[speaker] = name
               speaker = name
           if speaker in speaker_times:
               speaker_times[speaker] += len_spoken
           else:
               speaker_times[speaker] = len_spoken
       times[filename] = speaker_times
   with open("./lex/time_speaking.json", "w") as f:
       json.dump(times, f)
 
divide_times()
```

### Finding the Number of Words said by each Speaker

The other metric we look at in this analysis is the number of words said by each speaker. Does the number of words said by a speaker match up with the amount of time spent talking? Or are some guests much faster speakers than others? Let's find out.

In the `words_said` function, we take the pretty podcast transcript and count the words from each speaker. Outside of just counting the words, we also need to keep track of the current speaker. While looping through the transcript, if any line doesn't start with a speaker name, we add it to the last speaker. Once we've separated all the speakers, we dump the resulting dictionary into a JSON file.

```python
def words_said():
   word_split = {}
   for filename in os.listdir("lex/pretty_scripts"):
       print(f"Current filename: {filename}")
       with open(f"lex/pretty_scripts/{filename}", "r") as file:
           lines = file.readlines()
       cur_speaker = None
       file_word_split = {}
       for line in lines:
           if ":" in line:
               sep = line.split(":")
               cur_speaker = sep[0]
               if cur_speaker in file_word_split:
                   file_word_split[cur_speaker] += len(sep[1])
               else:
                   file_word_split[cur_speaker] = len(sep[1])
       word_split[filename] = file_word_split
   with open("./lex/word_split.json", "w") as f:
       json.dump(word_split, f)
 
words_said()
```

## Visualizing Lex Fridman's Podcast by Speaker

![Visualization of Lex Fridman podcast by speaker](https://res.cloudinary.com/deepgram/image/upload/v1664491641/blog/2022/10/automatic-podcast-transcription-for-analysis-lex-fridman/visualizing-lex-fridman-podcast-by-speaker_hz26kr.png)

Now comes the part where we plot the values. For this part, we need the `matplotlib` and `json` libraries. We are going to plot both the word separation and the time analysis (in two plots). 

First, we plot the time speaking graph. We open up the graph and load in the JSON file as a dictionary. Next, we split the dictionary into values for time spoken by Lex vs the Guest as well as create a list containing the names of the guests. We pass these lists to `matplotlib` and give it some options to make the graph pretty and to stack the bars.

Note that in the second `ax.bar` call, we include the values in the first call to Lex's speaking time with the parameter `bottom` so we can stack the guest's time on top of that in the bar. We set a legend, the bar size, tell the plot to make the bar labels angled, set the title and axes, save the plot to an image, and then show it. The time speaking image is shown above.

Once we create the time speaking graph, it's the same process to create the words said graph. We only need to change the labels and title. Everything else remains the same. The words speaking graph is at the bottom of this section. The images show that Lex is probably a faster speaker than most of his guests. He says a similar amount of words in each show, but speaks for less time.

```python
import matplotlib.pyplot as plt
import json
 
# plot speaking times bar charts
def vis_time():
   with open("./lex/time_speaking.json", "r") as f:
       time_dict = json.load(f)
   labels = []
   lex = []
   guest = []
   for podcast in time_dict.values():
       for entry in podcast:
           if "Lex" in entry:
               lex.append(podcast[entry])
           else:
               guest.append(podcast[entry])
               labels.append(entry)
   print(labels)
   print(lex)
   print(guest)
   width = 0.3
   fig, ax = plt.subplots()
   ax.bar(labels, lex, width, label="Lex")
   ax.bar(labels, guest, width, bottom=lex, label="Guest")
   ax.set_ylabel("Time Spent Speaking")
   ax.set_title("Lex vs Guests Speaking Time")
   ax.legend()
   plt.xticks(rotation=45, ha="right")
   fig.tight_layout()
   plt.savefig("./lex/time_speaking.png", pad_inches=1)
   plt.show()
 
vis_time()
 
# plot graph for words said
def vis_words():
   with open("./lex/word_split.json", "r") as f:
       time_dict = json.load(f)
   labels = []
   lex = []
   guest = []
   for podcast in time_dict.values():
       for entry in podcast:
           if "Lex" in entry:
               lex.append(podcast[entry])
           else:
               guest.append(podcast[entry])
               labels.append(entry)
   print(labels)
   print(lex)
   print(guest)
   width = 0.3
   fig, ax = plt.subplots()
   ax.bar(labels, lex, width, label="Lex")
   ax.bar(labels, guest, width, bottom=lex, label="Guest")
   ax.set_ylabel("Words Said")
   ax.set_title("Lex vs Guests Number of Words Said")
   ax.legend()
   plt.xticks(rotation=45, ha="right")
   fig.tight_layout()
   plt.savefig("./lex/words_said.png", pad_inches=1)
   plt.show()
 
vis_words()
```

![Visualization of Lex Fridman vs guests of words said](https://res.cloudinary.com/deepgram/image/upload/v1664491776/blog/2022/10/automatic-podcast-transcription-for-analysis-lex-fridman/visualization-lex-fridman-vs-guests-number-of-words-said_r2jzvf.png)

### Visualizing Time Speaking and Words Said by Percentage

Since Lex's podcasts are all different lengths, we figured it would be helpful to also check out percentages. So here are the corresponding graphs but with the percentage of time spoken and percentage of words said. As you can see, Lex averages about 40% of the words said, but only 25% for the length of time speaking. 

![Lex vs guests speaking time by percentage visualization](https://res.cloudinary.com/deepgram/image/upload/v1664491861/blog/2022/10/automatic-podcast-transcription-for-analysis-lex-fridman/lex-vs-guests-speaking-time-by-percentage_qb88vn.png)

The code to create the visualizations is below. The only functional difference from the earlier visualizations is the three lines to convert the values into percentages. First, we sum the values in the time or word tracking dictionary. Next, we re-assign the value of each key to its value divided by the sum. This gives us a proportion to measure against. 

```python
def vis_time_percentage():
   with open("./lex/time_speaking.json", "r") as f:
       time_dict = json.load(f)
   labels = []
   lex = []
   guest = []
   for podcast in time_dict.values():
       # convert to percentages
       summed = sum(podcast.values())
       for key in podcast:
           podcast[key] = podcast[key]/summed
       for entry in podcast:
           if "Lex" in entry:
               lex.append(podcast[entry])
           else:
               guest.append(podcast[entry])
               labels.append(entry)
   print(labels)
   print(lex)
   print(guest)
   width = 0.3
   fig, ax = plt.subplots()
   ax.bar(labels, lex, width, label="Lex")
   ax.bar(labels, guest, width, bottom=lex, label="Guest")
   ax.set_ylabel("Percent of Time Spent Speaking")
   ax.set_title("Lex vs Guests Speaking Time by Percentage")
   ax.legend()
   plt.xticks(rotation=45, ha="right")
   fig.tight_layout()
   plt.savefig("./lex/time_speaking_percents.png", pad_inches=1)
   plt.show()
 
vis_time_percentage()
# plot percentages of words spoken
def vis_words_percentages():
   with open("./lex/word_split.json", "r") as f:
       time_dict = json.load(f)
   labels = []
   lex = []
   guest = []
   for podcast in time_dict.values():
       for entry in podcast:
           # convert to percentages
           summed = sum(podcast.values())
           for key in podcast:
               podcast[key] = podcast[key]/summed
           if "Lex" in entry:
               lex.append(podcast[entry])
           else:
               guest.append(podcast[entry])
               labels.append(entry)
   print(labels)
   print(lex)
   print(guest)
   width = 0.3
   fig, ax = plt.subplots()
   ax.bar(labels, lex, width, label="Lex")
   ax.bar(labels, guest, width, bottom=lex, label="Guest")
   ax.set_ylabel("Words Said by Percentage")
   ax.set_title("Lex vs Guests Percent of Words Said by")
   ax.legend()
   plt.xticks(rotation=45, ha="right")
   fig.tight_layout()
   plt.savefig("./lex/words_said_percents.png", pad_inches=1)
   plt.show()
 
vis_words_percentages()
```

## Most Common Phrases Mentioned in the Podcast

Next, let's take a look at the most common phrases mentioned in each podcast. This part is where The Text API comes in. For this section, we need the `json` and `os` libraries again. We also need the `requests` library to send API requests and our Text API key. The first thing that we do is create the headers to send off to the API with our API key.

We create one function. I call it `nlp` below, but feel free to call it whatever makes sense to you. This function takes no parameters. Just like the functions above, one call loops it through all the podcasts we are working on. This one starts by opening up the pretty printed podcast transcripts we created earlier.

We separate the speakers by looping through each line of the podcast. Similar to what we did when we added up the number of words said, we're going to coalesce all the words into a single blob of text for the speaker. Once we have all those words together, we call the Text API.

To call the text API, we need a body to send as the JSON argument of the request. We create a body and assign all the text of a speaker to the `text` key. The `most_common_phrases` endpoint also allows a `num_phrases` option to pass in that tells the API how many phrases to return. The default is three, here we'll do five. Once we get our request back, synchronously this time, we write the results to a text file.

```python
import requests
import json
import os
 
from config import textapi_key
headers = {
   "apikey": textapi_key,
   "Content-Type": "application/json"
}
 
def nlp():
   for filename in os.listdir("lex/pretty_scripts"):
       print(f"Current File: {filename}")
       with open(f"lex/pretty_scripts/{filename}", "r") as f:
           lines = f.readlines()
       separated_speakers = dict()
       for line in lines:
           if ":" in line:
               speaker_sep = line.split(":")
               if speaker_sep[0][1:] in separated_speakers.keys():
                   separated_speakers[speaker_sep[0][1:]] += speaker_sep[1]
               else:
                   separated_speakers[speaker_sep[0][1:]] = speaker_sep[1]
       for speaker, spoken in separated_speakers.items():
           body = {
               "text": spoken,
               "num_phrases": 5
           }
           res = requests.post("https://app.thetextapi.com/text/most_common_phrases", headers=headers, json=body)
           mcp = json.loads(res.text)["most common phrases"]
           with open(f"lex/most_common_phrases/{speaker} in {filename}", "w") as f:
               for entry in mcp:
                   f.write(f"{entry}\n")
 
nlp()
```

### A Look into the Most Common Phrases from Lex

Let's take a look into Lex Fridman's most common phrases via these podcast transcripts. As we mentioned above, Lex is known for saying things like "beautiful", "poetic", "loving", and more. Does the transcript agree though? 

Looking through Lex Fridman's most common phrases from [this folder on GitHub](https://github.com/ytang07/transcribe_and_analyze_podcasts/tree/main/lex/most_common_phrases), we can see that he does use the words beautiful, loving, and poetic often enough that they get picked up! We can also see that a lot of the time, these conversations center around types of organizations and people.

The most common adjectives that Lex is known for show up in this order in his most common phrases:

![Lex Fridman's most used adjectives](https://res.cloudinary.com/deepgram/image/upload/v1664491983/blog/2022/10/automatic-podcast-transcription-for-analysis-lex-fridman/lex-fridman-adjective-visualization_ulob4z.png)

I was also curious on the topics of discussion, so here they are:

![Lex Fridman subject of adjective visualization](https://res.cloudinary.com/deepgram/image/upload/v1664492053/blog/2022/10/automatic-podcast-transcription-for-analysis-lex-fridman/lex-fridman-subject-of-adjective-visualization_va5inm.png)

I plotted these using a similar method to the time speaking visualizations. First we import the `matplotlib` and `os` libraries. Then we create a list of the files that specifically are Lex Fridman's most common phrases. From there we create two dictionaries to represent the words we are looking for. In this case, the adjectives "beautiful", "poetic", "fascinating", and "loving" as well as the subjects "things" and "people".

Next, we establish some constants for what we want to call the graph and how we want to label it. Now, let's make our graph visualization function. The main differences between this code and the other visualization code above lies in its customizability. Also since we aren't stacking bars, we don't need a second axis to plot a second set of data.

```python
import matplotlib.pyplot as plt
import os
 
lex_mcp_files = []
for file in os.listdir("./lex/most_common_phrases"):
   if file.startswith("Lex Fridman in "):
       lex_mcp_files.append(file)
 
 
known = {"beautiful": 0, "poetic": 0, "fascinating": 0, "loving": 0}
subjects = {"people": 0, "things": 0}
for filename in lex_mcp_files:
   with open(f"./lex/most_common_phrases/{filename}", "r") as f:
       text = f.read()
   lines = text.split("\n")[:-1]
   for line in lines:
       for word in known.keys():
           if word in line:
               known[word] += 1
       for word in subjects.keys():
           if word in line:
               subjects[word] += 1
 
print(known)
print(subjects)
 
labelname_known = "Words Known For"
labelname_subject = "Subject of Discussion"
title_known = "Lex's Adjectives"
title_subject = "Subject of Podcast"
def plot_dict(data: dict, labelname, title, filename):
   x = data.keys()
   y = data.values()
   width = 0.3
   fig, ax = plt.subplots()
   ax.bar(x, y, width, label=labelname)
   ax.set_ylabel("Number of Appearances")
   ax.set_title(title)
   ax.legend()
   plt.xticks(rotation=45, ha="right")
   fig.tight_layout()
   plt.savefig(f"./lex/{filename}.png", pad_inches=1)
   plt.show()
 
plot_dict(known, labelname_known, title_known, "popular_adjectives")
plot_dict(subjects, labelname_subject, title_subject, "subject_of_discussion")
```

## Extracting Named Entities from a Transcribed Podcast

We can do further processing on the text from the transcribed podcast as well. One of the most popular text analysis techniques for understanding a transcription is [Named Entity Recognition (NER)](https://pythonalgos.com/the-best-way-to-do-named-entity-recognition-ner/). Extracting and analyzing the named entities will tell us more about the who, what, when, and where that these podcasts focus on.

Due to the size of these transcripts, we're going to split them up for faster processing. You can likely process each transcript by itself, but my internet speed doesn't keep my connection alive for the response. The Named Entity Recognition function takes two parameters. One is the text being analyzed, and the other is the filename to save to.

We split these texts into (max) 1500 sentence blocks (roughly 2 hours of talking or 10 MB of data). Then we will process each one by sending it to The Text API's NER endpoint and waiting on the response. We have to run these sequentially because we are sending requests synchronously. If we send them asynchronously, we can run the requests in parallel. Once we get the results back, we save them to a file.

We use a `main()` function to run the NER. You can opt to just run the function itself, but this is how I opt to run NER on each of the files. We re-use this same main function below when getting the summaries of each of the podcast transcripts.

```python
def ner(text: str, filename: str):
   sentences = text.split(".")
   texts = []
   sents = 0
   while sents < len(sentences):
       texts.append(" ".join(sentences[sents:sents+1500 if sents + 1500 < len(sentences) else len(sentences)]))
       sents += 1500
   ners = []
   for text in texts:
       body = {
           "text": text
       }
       words = len(text.split(" "))
       print(f"Processing 1500 Sentences, {words} Words")
       start = time.time()
       res = requests.post(url="https://app.thetextapi.com/text/ner", headers=headers, json=body)
       print(f"Time elapsed: {time.time() - start} seconds")
       ners.append(json.loads(res.text)["ner"])
   with open(f"lex/ner/{filename}.txt", "w") as file:
       for ner in ners:
           for phrase in ner:
               for word in phrase:
                   file.write(word+" ")
               file.write("\n")
 
def main():
   for filename in os.listdir("lex/transcripts_unenhanced"):
       with open(f"lex/transcripts_unenhanced/{filename}", "r") as file:
           transcript = json.load(file)
       text = transcript["results"]["channels"][0]["alternatives"][0]["transcript"]
       ner(text, filename[:-5])
```

## Summaries by Episode of the Last 10 Episodes

The last piece of analysis that we do in this post is going to look at the summaries of the podcasts we transcribed. Summaries provide a quick look at an overview of the given text. In this case, it's especially nice when we don't want to read 2+ hours of a podcast transcript. We use The Text API's [AI text summarizer](https://pythonalgos.com/build-your-own-ai-text-summarizer-in-python/) to create a summary of each podcast.

We create a summary in much the same way we extract the named entities. We split the text file up, again into blocks of 1500 sentences max, and then summarize them and smash them together. We run the requests sequentially and then store the returned values into a text file. You can read all the [summaries of the transcribed podcasts on GitHub](https://github.com/ytang07/transcribe_and_analyze_podcasts/tree/main/lex/summarize). 

```python
def summarize(text: str, filename: str):
   print(f"Title: {filename}")
   sentences = text.split("."
   texts = []
   sents = 0
   while sents < len(sentences):
       texts.append(" ".join(sentences[sents:sents+1500 if sents + 1500 < len(sentences) else len(sentences)]))
       sents += 1500
   summaries = []
   for text in texts:
       body = {
           "text": text
       }
       start = time.time()
       res = requests.post(url="https://app.thetextapi.com/text/summarize", headers=headers, json=body)
       print(f"Time elapsed: {time.time() - start} seconds")
       summaries.append(json.loads(res.text)["summary"])
   # print(summaries)
   with open(f"lex/summarize/{filename}.txt", "w") as file:
       for summary in summaries:
           file.write(summary)
 
​​def main():
   for filename in os.listdir("lex/transcripts_unenhanced"):
       with open(f"lex/transcripts_unenhanced/{filename}", "r") as file:
           transcript = json.load(file)
       text = transcript["results"]["channels"][0]["alternatives"][0]["transcript"]
       summarize(text, filename[:-5])
```

## Summary of Automatic Speech Recognition + NLP for Podcast Analysis

Whew, that's a lot of podcast analysis. We started this project by using `youtube_dl` and `ffmpeg` to get the audio of many episodes of Lex Fridman's podcast from YouTube. Armed with the audio files to his podcasts, we went to Deepgram to get our podcast transcription. After successfully transcribing his podcasts, we run some analysis.

The first thing we did was take a look at talk time and words said. We plot our findings for those, which is that Lex lets his guests talk for much more time, but says a similar number of words. The takeaway? Either Lex says a bunch of small words or talks fast.

Next, we use text analysis with The Text API to analyze the podcast transcripts further. First, we used it to find the most common phrases. This finding led us to confirm that Lex does indeed use the words "beautiful", "poetic", and "loving" a lot. After finding the most common phrases, we went and looked at how to extract the named entities and get the summaries.

To recap: our podcast transcription + NLP analysis gave us a glimpse into the structure of the legendary podcast series by Lex Fridman. It showed us that Lex lets his guests talk much more than he does, and that he does use the words he's known for using a lot. Feel free to derive your own conclusions from the provided NER files and summaries from the GitHub repo.