---
title: Python Speech Recognition Locally with TorchAudio
description: Learn how to use the Python TorchAudio library and its Emformer
  Model for local speech recognition
date: 2022-07-14
cover: https://res.cloudinary.com/deepgram/image/upload/v1657708926/blog/2022/07/python-speech-recognition-locally-torchaudio/cov.jpg
authors:
  - yujian-tang
category: tutorial
tags:
  - python
seo:
  title: Python Speech Recognition Locally with TorchAudio
  description: Learn how to use the Python TorchAudio library and its Emformer
    Model for local speech recognition
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661454110/blog/python-speech-recognition-locally-torchaudio/ograph.png
shorturls:
  share: https://dpgr.am/6f6eb4e
  twitter: https://dpgr.am/7fdfd20
  linkedin: https://dpgr.am/d2e2258
  reddit: https://dpgr.am/1385e37
  facebook: https://dpgr.am/b02940e
---
"Your call may be recorded for quality assurance purposes."

We’ve all heard this when calling customer service. What are they doing with that call? How are they transcribing it? Back in the early 2000s and late 1990s, companies were using people to transcribe these. Now, [natural language processing](https://en.wikipedia.org/wiki/Natural_language_processing) has come far along enough that we can use Python and machine learning to do automatic speech recognition.

In this post, we’ll focus on how to do speech recognition locally on your device using TorchAudio’s pre-built Emformer RNN-T model. We will cover:

* [Understanding PyTorch TorchAudio](#understanding-pytorch-torchaudio)
* [Setting Up TorchAudio for Speech Recognition](#setting-up-torchaudio-for-speech-recognition)
* [Building a Python Audio Data Streaming Function for Speech Recognition](#building-a-python-audio-data-streaming-function-for-speech-recognition)
* [Setting up Python Speech Recognition Inference Pipeline](#setting-up-python-speech-recognition-inference-pipeline)
* [Creating a Context Cache to Store Audio Data for Speech Recognition](#creating-a-context-cache-to-store-audio-data-for-speech-recognition)
* [Using TorchAudio’s Emformer Model for Local Speech Recognition in Python](#using-torchaudios-emformer-model-for-local-speech-recognition-in-python)
* [In Summary](#in-summary)

## Understanding PyTorch TorchAudio

PyTorch is a versatile and powerful Python library for quickly developing machine learning models. Is it the open-source Python version of the Torch library (built on Lua) and primarily developed by Meta/Facebook. TorchAudio is an additional library to PyTorch that handles dealing with audio data for machine learning models.

TorchAudio isn’t just for creating machine learning models, you can also use it to do some audio data manipulation. We previously covered how to [use TorchAudio to manipulate audio data in Python](https://developers.deepgram.com/blog/2022/06/pytorch-intro-with-torchaudio/). In this piece, we’re going to use it to build an inference pipeline to do speech recognition in real time.

## Setting Up TorchAudio for Speech Recognition

Before we can dive into the program for doing speech recognition with TorchAudio, we need to set up our system. We need to install the `pytorch`, `torchaudio`, `sentencepiece`, and `ffmpeg-python` libraries. We can install all of these with the command `pip install pytorch torchaudio sentencepiece ffmpeg-python`. If you encounter errors, you may need to upgrade `pip`, which you can do using `pip install -U pip`.

If you already have PyTorch and TorchAudio installed and you encounter an error importing `torchaudio` as I did. To get around this, force update both libraries with `pip install -U torch torchaudio --no-cache-dir`. Next, we’re going to build our script. It’s going to consist of an audio data function, the machine learning model pipeline, a context cache, and a main function to run.

## Building a Python Audio Data Streaming Function for Speech Recognition

Now that our system is set up to work with PyTorch and Torchaudio for speech recognition, let’s build our script. The first thing we need is an audio data streaming function, we’ll call ours `stream`. We also declare a constant number of iterations for the streaming function to stream.

Our `stream` function needs five parameters. It needs a queue, a format or device (different for Mac vs Windows), a source, a segment length, and a sample rate. There are some print statements in our function that I’ve commented out. You can uncomment these to show more information about the program as it runs.

The first thing we’re going to do in our `stream` function is create a `StreamReader` instance from `torchaudio.io`. Next, we’ll populate that stream reader with an audio stream of the passed in segment length and sample rate. I would leave the `”Streaming”` and blank `print` statements uncommented so you know when you can start talking into the mic.

Next, we’ll create an iterator to iterate across our stream. Finally, we’ll loop through the number of predefined iterations, in our case 100, and get the next chunk of audio data from the stream iterator and put it in the queue.

```py
import torch
import torchaudio
from torchaudio.io import StreamReader

ITERATIONS = 100

def stream(q, format, src, segment_length, sample_rate):
   # print("Building StreamReader")
   streamer = StreamReader(src, format=format)
   streamer.add_basic_audio_stream(frames_per_chunk=segment_length,
       sample_rate=sample_rate)
   # print(streamer.get_src_stream_info(0))
   # print(streamer.get_out_stream_info(0))
   print("Streaming")
   print()
   stream_iterator = streamer.stream(timeout=-1, backoff=1.0)
   for _ in range(ITERATIONS):
       (chunk,) = next(stream_iterator)
       q.put(chunk)
```

## Setting up Python Speech Recognition Inference Pipeline

Now that we have a way to smoothly stream the audio data from a microphone, we can run predictions on it. Let’s build a pipeline to do speech recognition with. Unlike the part above, this time we will be creating a `Class` and not a function.

We require our class to be initialized with one variable, an RNN-T model from TorchAudio’s Pipelines library. We also allow a second, optional variable to define beam width, which is set at 10 by default. Our `__init__` function sets the instance’s `bundle` value to the model we passed in. Then, it uses that model to get the feature extractor, decoder, and token processor. Next, it sets the beam width, the state of the pipeline, and the predictions.

The other function that our `Pipeline` object has is an inference function. This function takes a PyTorch `Tensor` object and returns a string, the predicted text. This function uses the feature extractor to get the features and the length of the input tensor. Next, call the inference function from the decoder to get the hypothesis and set the state of the Pipeline. We set the instance’s `hypothesis` attribute to the value in the first index of the returned hypothesis. Finally, we use the token processor on the first entry in the instance’s hypothesis attribute and return that value.

```py
class Pipeline:
   def __init__(self, bundle: torchaudio.pipelines.RNNTBundle, beam_width: int=10):
       self.bundle = bundle
       self.feature_extractor = bundle.get_streaming_feature_extractor()
       self.decoder = bundle.get_decoder()
       self.token_processor = bundle.get_token_processor()
       self.beam_width = beam_width
       self.state = None
       self.hypothesis = None

   def infer(self, segment: torch.Tensor) -> str:
       features, length = self.feature_extractor(segment)
       hypos, self.state = self.decoder.infer(
           features, length, self.beam_width, state=self.state,
           hypothesis=self.hypothesis
       )
       self.hypothesis = hypos[0]
       transcript = self.token_processor(self.hypothesis[0], lstrip=False)
       return transcript
```

## Creating a Context Cache to Store Audio Data for Speech Recognition

We need a context cache to batch store the audio data frames as we read them. The context cache requires two parameters to initialize. First, a segment length, then a context length. The initialization function sets the instance’s attributes to the passed in values and initializes a tensor of zeros of the context length as the instance’s current context.

The second function we’ll define is the `call` function. This is another automatic function that we’re overwriting. Whenever you see a class function preceded and followed by two underscores, that’s a default function. In this case, we require the call function to intake a PyTorch tensor object.

If the size of the first object in the tensor is less than the set segment length for the cache, we’ll pad that chunk with 0s. Next, we use the concatenate function from `torch` to add that chunk to the current context. Then, we set the instance’s context attribute to the last entries in the chunk equivalent to the context length. Finally, we return the concatenate context.

```py
class ContextCacher:
   def __init__(self, segment_length: int, context_length: int):
       self.segment_length = segment_length
       self.context_length = context_length
       self.context = torch.zeros([context_length])

   def __call__(self, chunk: torch.Tensor):
       if chunk.size(0) < self.segment_length:
           chunk = torch.nn.functional.pad(chunk,
               (0, self.segment_length - chunk.size(0)))
       chunk_with_context = torch.cat((self.context, chunk))
       self.context = chunk[-self.context_length :]
       return chunk_with_context
```

## Using TorchAudio's Emformer Model for Local Speech Recognition in Python

Finally, all our helper functions have been made. It is now time to create the main function to orchestrate the audio data streamer, the machine learning pipeline, and the cache. Our main function will take three inputs: the input device, the source, and the RNN-T model. As before, I’ve left some print statements in here commented out, uncomment them if you’d like.

First, we create an instance of our Pipeline. This is what turns the audio data into text. Next, we use the RNN-T model to set the sample rate, the segment length, and the context length. Then, we instantiate the context with the newly gotten segment and context lengths.

Now things get funky. We use an annotation on the `infer` function we’re creating that signals to `torch` to turn on inference mode while this function runs. The infer function does not need any parameters. It loops through the preset number of iterations. For each iteration, it gets a chunk of data from the queue, calls the cache to return the concatenated first column entry of that chunk of data and the context, calls the pipeline to do speech recognition on that cached segment of data, and finally prints the transcript and flushes the I/O buffer.

We won’t actually call that `infer` function just yet. We’re just defining it. Next, we import PyTorch’s multiprocessing capability to spawn subprocesses. We need to spawn the audio data capture as a subprocess for correct functionality. Otherwise, it will block I/O.

The first thing we do with the multiprocessing function is to signal we are spawning a new process. Second, we create a queue object in the context. Next, we create a process that runs the `stream` function from above in the context with the created queue, the passed in device, source, and model, the segment length, and the sample rate. Once we start that subprocess, we run our infer function until we end the subprocess.

When the script actually runs (in the `if __name__ == “__main__”` section), we call the main function. For Mac’s we pass the “avfoundation” for the device and the second entry for the source. The first entry in a Mac’s setup is the video.

For Windows, see [the original notebook](https://pytorch.org/audio/main/tutorials/device_asr.html).

```py
def main(device, src, bundle):
   # print(torch.__version__)
   # print(torchaudio.__version__)
   # print("Building pipeline")
   pipeline = Pipeline(bundle)

   sample_rate = bundle.sample_rate
   segment_length = bundle.segment_length * bundle.hop_length
   context_length = bundle.right_context_length * bundle.hop_length

    # print(f"Sample Rate: {sample_rate}")
    # print(f"Main segment: {segment_length} frames ({segment_length/sample_rate} seconds)")
    # print(f"Right context: {context_length} frames ({context_length/sample_rate} seconds)")

   cacher = ContextCacher(segment_length, context_length)

   @torch.inference_mode()
   def infer():
       for _ in range(ITERATIONS):
           chunk = q.get()
           segment = cacher(chunk[:,0])
           transcript = pipeline.infer(segment)
           print(transcript, end="", flush=True)

   import torch.multiprocessing as mp

   ctx = mp.get_context("spawn")
   q = ctx.Queue()
   p = ctx.Process(target=stream, args=(q, device, src, segment_length, sample_rate))
   p.start()
   infer()
   p.join()

if __name__ == "__main__":
   main(
       device="avfoundation",
       src=":1",
       bundle=torchaudio.pipelines.EMFORMER_RNNT_BASE_LIBRISPEECH
   )
```

## In Summary

Speech recognition has come a long way from its first inception. We can now use Python to do speech recognition in many ways, including with the TorchAudio library from PyTorch. The TorchAudio library comes with many pre-built models we can use for automatic speech recognition as well as many audio data manipulation tools.

In this post, we covered how to run speech recognition locally with their Emformer RNN-T. First, we created an audio data streaming function. Next, we defined a pipeline object which can run speech recognition on tensors and turn them into text. Then, we created a cache to cache the audio data as it came in. We also created a main function to handle running the audio data stream as a subprocess and run inference on it while it ran. Finally, we ran that main function with varying parameters to let it know we are streaming data in from the mic and using an Emformer RNN-T model.

Want to do speech recognition without all that code? [Sign up for Deepgram](https://console.deepgram.com) today and be up and running in just a few minutes.