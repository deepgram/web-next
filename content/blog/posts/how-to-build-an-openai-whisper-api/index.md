---
title: How to Build an OpenAI Whisper API
description: In this blog, learn step-by-step how to build an API for OpenAI
  Whisper, an open-source automatic speech recognition model.
date: 2022-09-30T15:12:10.691Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1664552366/blog/how-to-build-an-openai-whisper-api/2209-How-to-Build-an-OpenAI-Whisper-API-featured-1200x630_sddsom.png
authors:
  - adam-sypniewski
category: tutorial
tags:
  - whisper
  - machine-learning
---
So, you've probably heard about OpenAI's [Whisper](https://openai.com/blog/whisper/) model; if not, it's an open-source automatic speech recognition (ASR) model – a fancy way of saying "speech-to-text" or just "speech recognition." What makes Whisper particularly interesting is that it works with multiple languages (at the time of writing, it supports 99 languages) and also supports translation into English. It also has a surprisingly low word error rate (WER) out-of-the-box.

Whisper makes it pretty easy to invoke at the command line, as a CLI:

```shell
$ curl -sSfLO https://static.deepgram.com/example/tenant_of_wildfell_hall.mp3
$ whisper tenant_of_wildfell_hall.mp3
Detecting language using up to the first 30 seconds. Use `--language` to specify the language
Detected language: English
[00:00.000 --> 00:07.000]  On entering the parlour, we found that Honoured Lady seated in her armchair at the fireside,
[00:07.000 --> 00:27.000]  working away at her knitting.
```

And here's an example of its language detection at work:

```shell
$ curl -sSfLO https://static.deepgram.com/example/el_caso_leavenworth.mp3
$ whisper el_caso_leavenworth.mp3
Detecting language using up to the first 30 seconds. Use `--language` to specify the language
Detected language: Spanish
[00:00.000 --> 00:02.760]  Mr. Grice exclamé.
[00:02.760 --> 00:05.240]  El mismo me respondió.
[00:05.240 --> 00:29.240]  Entre usted, Mr. Raymond.
```

And if you don't read Spanish, you can use the CLI to translate:

```shell
$ whisper el_caso_leavenworth.mp3 --task translate
Detecting language using up to the first 30 seconds. Use `--language` to specify the language
Detected language: Spanish
[00:00.000 --> 00:02.700]  Mr. Grice exclaimed
[00:02.700 --> 00:05.260]  He replied
[00:05.260 --> 00:29.260]  Among you Mr. Raymond
[00:05.240 --> 00:29.240]  Entre usted, Mr. Raymond.
```

Okay, so maybe that wasn't a very good translation...

CLI's are incredibly useful for getting things working locally **_fast_**. But they don't scale well if you want to hook up other software systems. They aren't good for builders.

## The Gestalt of API's

The moment you start thinking like a builder, you want things that you can piece together. Things that you can scale. Components that can be combined into more than the sum of their parts. That's where APIs come in: you can build services that provide value to any other piece of your system that you want.

Want to build a notetaking app that joins your Zoom calls, records the audio, and saves the transcript for browsing later? Well, you probably don't want to call `whisper` at the command line. You want a little service running, just waiting for requests. You want an API.

So, let's build one. Specifically, let's build an HTTP API that we can send HTTP POST requests to with a tool like `curl` or [Postman](https://www.postman.com). And let's do it in the data science language _du jour_ – Python.

The first thing we need to pick out is a web server framework. There are lots available and range from full-fledged development platforms like [Django](https://www.djangoproject.com/), to simple synchronous frameworks like [Flask](https://palletsprojects.com/p/flask/), to pure-Python asynchronous frameworks like [Tornado](https://www.tornadoweb.org/).

For this example, let's stick with Flask. It does everything we need without bringing too much extra support to the table, and is one of the simplest and easiest web frameworks to get started with. Let's install it:

```shell
$ pip install flask
```

> Pro-tip. You should not install Python packages to your system Python distribution. You should always run in a [virtual environment](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/#creating-a-virtual-environment). To [get started](https://blog.deepgram.com/python-virtual-environments/), first create a virtual environment: `python3 -m venv venv`. Then you can activate the virtual environment: `source venv/bin/activate`. That's it! Now you can install Flask or any other libraries using `pip`. Just remember that if you close and re-open your terminal, you'll need to start by activating the virtual environment again.

Let's look at what a "Hello, World!" application looks like in Flask:

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def handler():
    return "Hello, World!"
```

Well, that looks simple. Does it run? First, save your file as `app.py`. Now, to run it:

```shell
$ flask run
```

> Pro-tip. If you named your file something other than `app.py` -- say `hello.py`, you can run it with: `flask --app hello run` (note that there is no `.py` in the invocation).

By default, Flask listens on port 5000. So let's try hitting our hello-world API endpoint:

```shell
$ curl localhost:5000
Hello, World!
```

Awesome! It's working! But how do we get our user's or client's data into Flask? That example `curl` command didn't send any file to our Flask server. In fact, our Flask app above only handled HTTP GET requests, and it turns out that GET requests can't have data (or "bodies," in HTTP parlance) attached to them. But don't worry! We just need to change our Flask app to handle POST requests and the data that comes attached to them. This isn't hard, either: we just need to tell Flask that our handler will accept POST requests:

```python
@app.route('/', methods=['POST'])
def handler():
    return "Hello, World!"
```

Okay, yeah, that was easy. Now let's put the actual logic for handling an uploaded file (i.e., the "body"). But we need a place to put it. Let's create a temporary file to hold the file.

```python
from flask import Flask, abort, request
from tempfile import NamedTemporaryFile

app = Flask(__name__)

@app.route('/', methods=['POST'])
def handler():
    if not request.files:
        # If the user didn't submit any files, return a 400 (Bad Request) error.
        abort(400)

    # For each file, let's store the results in a list of dictionaries.
    results = []

    # Loop over every file that the user submitted.
    for filename, handle in request.files.items():
        # Create a temporary file.
        # The location of the temporary file is available in `temp.name`.
        temp = NamedTemporaryFile()
        # Write the user's uploaded file to the temporary file.
        # The file will get deleted when it drops out of scope.
        handle.save(temp)
        # Now we can store the result object for this file.
        results.append({
            'filename': filename,
            'transcript': 'Coming soon!',
        })

    # This will be automatically converted to JSON.
    return {'results': results}
```

Let's try running it (if you named your file `app.py`, this is just `flask run`). Can we send a file to it? Let's try the snippet we downloaded earlier:

```shell
$ curl -F file=@tenant_of_wildfell_hall.mp3 localhost:5000
{"results":[{"filename":"file","transcript":"Coming soon!"}]}
```

Perfect. Now we need to connect it to Whisper.

## Making It Real

At this point, it's time to get Whisper installed:

```shell
$ pip install whisper
```

> Pro-tip. Remember to activate your virtual environment before installing!

Whisper also requires `ffmpeg` to be installed. Use your system package manager to get it installed (`apt`, `pacman`, `brew`, `choco`, etc.) - the package is usually just called `ffmpeg`.

Now, what does a minimal code snippet look like to get Whisper running using Python? Well, something like this:

```python
import whisper

# We can pick which model to load.
# Models can be listed with `whisper.available_models()`.
model = whisper.load_model("base")

# We can pass in a filename or a tensor (PyTorch or numpy).
result = model.transcribe("audio.mp3")

# Print the transcript.
print(result["text"])
```

Okay. So we load a model and then give it a file to transcribe. That should be easy to add to our Flask app. We only need to load the model once, so we can do that at the top of our app. And we are already writing uploaded data to a temporary file, so it is extra easy. Let's modify the Flask app:

```python
from flask import Flask, abort, request
import whisper
from tempfile import NamedTemporaryFile

# Load the Whisper model:
model = whisper.load_model('base')

app = Flask(__name__)

@app.route('/', methods=['POST'])
def handler():
    if not request.files:
        # If the user didn't submit any files, return a 400 (Bad Request) error.
        abort(400)

    # For each file, let's store the results in a list of dictionaries.
    results = []

    # Loop over every file that the user submitted.
    for filename, handle in request.files.items():
        # Create a temporary file.
        # The location of the temporary file is available in `temp.name`.
        temp = NamedTemporaryFile()
        # Write the user's uploaded file to the temporary file.
        # The file will get deleted when it drops out of scope.
        handle.save(temp)
        # Let's get the transcript of the temporary file.
        result = model.transcribe(temp.name)
        # Now we can store the result object for this file.
        results.append({
            'filename': filename,
            'transcript': result['text'],
        })

    # This will be automatically converted to JSON.
    return {'results': results}
```

Okay, everyone. Drumroll, please!

## Testing the API

Run the Flask app, just like ever: `flask run`. And now let's submit our file:

```shell
$ curl -F file=@tenant_of_wildfell_hall.mp3 localhost:5000
{"results":[{"filename":"file","transcript":" Hello, this is Steve Fuller. I'm a professor of social epistemology at the University of Warwick. And the question before us today is what is epistemology and why is it important? Epistemology is the branch philosophy that is concerned with the nature of knowledge. Now why is knowledge?"}]}
```

_HOLY CRAP IT WORKED!_

And because we wrote the Flask app to loop over all submitted files, we can submit multiple files at once:

```shell
$ curl -F anne_bronte=@tenant_of_wildfell_hall.mp3 -F anna_green=@el_caso_leavenworth.mp3 localhost:5000
{"results":[{"filename":"anne_bronte","transcript":" On entering the parlour we found that honored lady seated in her armchair at the fireside, working the way after this."},{"filename":"anna_green","transcript":" Mr. Grise exclame. El mismo me respondi\u00f3. Entre usted, Mr. Raymond."}]}
```

Okay, that's seriously cool. If you have [`jq`](https://stedolan.github.io/jq/) installed, you can pipe the output of `curl` into it for easier reading; otherwise, you use `python -m json.tool` as a poor man's `jq` for pretty printing:

```shell
$ curl -s -F anne_bronte=@tenant_of_wildfell_hall.mp3 -F anna_green=@el_caso_leavenworth.mp3 localhost:5000 | python -m json.tool
{
    "results": [
        {
            "filename": "anne_bronte",
            "transcript": " On entering the parlour we found that honored lady seated in her armchair at the fireside, working the way after this."
        },
        {
            "filename": "anna_green",
            "transcript": " Mr. Grise exclame. El mismo me respondi\u00f3. Entre usted, Mr. Raymond."
        }
    ]
}
```

Beautiful.

# To the Moon!

Congratulations! You now have a full-fledged HTTP API at your fingertips. What will you build now?

Here are some ideas for your speech recognition server:
- What features can you add to the API output? Take a look at the [Deepgram documentation](https://developers.deepgram.com/) for some inspiration.
- [Hook up to an RSS feed](https://blog.deepgram.com/podcast-search-engine/#pulling-podcast-episodes-from-an-rss-feed) to automatically transcribe your favorite podcasts.
- Monitor a local directory and automatically transcribe any audio files that land there.
- Build a [voice-controlled car](https://deepgram.com/built-with-deepgram/voice-controlled-car).

Happy building!

*Shortcut: If you've skipped to the bottom and decided you _don't_ want to build an API yourself, you're in luck. Deepgram hosts Whisper on it's API. [Check it out](https://deepgram.com/openai-whisper/).*