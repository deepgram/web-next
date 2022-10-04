---
title: How to Run OpenAI Whisper in the Command Line
description: In this blog, learn how to run the OpenAI Whisper speech
  recognition tool via Command-Line. Load it from the repository and get started
  now!
date: 2022-10-04T14:53:35.183Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1664561631/blog/how-to-run-openai-whisper-in-command-line/2209-How-to-Run-OpenAI-Whisper-in-Command-Line-featured-1200x630_2x_tnwda5.png
authors:
  - kate-weber
category: tutorial
tags:
  - whisper
  - machine-learning
shorturls:
  share: https://dpgr.am/3b50e18
  twitter: https://dpgr.am/62629ca
  linkedin: https://dpgr.am/4c3b882
  reddit: https://dpgr.am/75e494b
  facebook: https://dpgr.am/f1b2079
---

So, you want to run the OpenAI Whisper tool on your machine? You can load it from the [OpenAI Github](https://github.com/openai/whisper) repository to get up and going!

## Setup

You'll need python on your machine, at least version 3.7. Let's set up a [virtual environment](https://realpython.com/python-virtual-environments-a-primer/) with venv (or conda or the like) if you want to isolate these experiments from other work.

```shell
mkdir whisper
cd whisper
python3 -m venv venv
source venv/bin/activate

# always a good idea to make sure pip is up-to-date
pip3 install --upgrade pip
```

Next, install a clone of the Whisper package and its dependencies (torch, numpy, transformers, tqdm, more-itertools, and ffmpeg-python) into your python environment.

```shell
pip3 install git+https://github.com/openai/whisper.git
```

Especially if it's pulling `torch` for the first time, this may take a little while. The repository documentation advises that if you get errors building the wheel for `tokenizers`, you may also need to install `rust`. You'll also need `ffmpeg` - installation depends on your platform. Here are some examples:

```shell
# on Ubuntu or Debian
sudo apt update && sudo apt install ffmpeg

# on Arch Linux
sudo pacman -S ffmpeg

# on MacOS using Homebrew (https://brew.sh/)
brew install ffmpeg

# on Windows using Chocolatey (https://chocolatey.org/)
choco install ffmpeg

# on Windows using Scoop (https://scoop.sh/)
scoop install ffmpeg
```

## Using the Tool

Great! You're ready to transcribe! In this example, we're working with Nicholas Tesla's vision of a wireless future - you can get [this audio file at the LibriVox archive](https://www.archive.org/download/nonfiction025_librivox/snf025_nikolateslawirelessvision_anonymous_gu.mp3) of public-domain audiobooks and bring it to your local machine if you don't have something queued up and ready to go.

The OpenAI Whisper tool has a variety of models that are English-only or multilingual, and come in a range of sizes whose tradeoffs are speed vs. performance. You can learn more about this [here](https://github.com/openai/whisper#available-models-and-languages). We, the researchers at Deepgram, have found that the small model provides a good balance.

```shell
whisper "snf025_nikolateslawirelessvision_anonymous_gu.mp3" --model small --language English
```

```shell
[00:00.000 --> 00:09.880]  Nikola Tesla sees a wireless vision by Anonymous, the New York Times, 3rd October, 1915.
[00:09.880 --> 00:11.920]  This is a LibriVox recording.
[00:11.920 --> 00:14.920]  All LibriVox recordings are in the public domain.
[00:14.920 --> 00:20.200]  For more information or to volunteer, please visit LibriVox.org.
[00:20.200 --> 00:23.760]  Nikola Tesla sees a wireless vision.
[00:23.760 --> 00:29.080]  Things his world system will allow hundreds to talk at once through the Earth.
[00:29.080 --> 00:31.760]  Trans-static disturbance.
[00:31.760 --> 00:37.480]  Inventor hopes also to transmit pictures by the same medium which carries the voice.
[00:37.480 --> 00:43.880]  Nikola Tesla announced to the Times last night that he had received a patent on an invention
[00:43.880 --> 00:50.320]  which would not only eliminate static interference, the present bugaboo of wireless telephony,
[00:50.320 --> 00:55.520]  but would enable thousands of persons to talk at once between wireless stations and make
[00:55.520 --> 01:01.920]  it possible for those talking to see one another by wireless regardless of the distance separating

...

[07:25.160 --> 07:30.520]  Wireless is coming to mankind in its full meaning like a hurricane some of these days.
[07:30.520 --> 07:36.120]  Some day there will be, say, six great wireless telephone stations in a world system connecting
[07:36.120 --> 07:42.080]  all the inhabitants on this earth to one another, not only by voice, but by sight.
[07:42.080 --> 07:45.240]  Its surely coming.
[07:45.240 --> 07:50.940]  End of Nikola Tesla sees a wireless vision by Anonymous, The New York Times, 3rd October
[07:50.940 --> 08:13.840]  1915.
```

## Deepgram's Whisper API Endpoint

Getting the Whisper tool working on your machine may require some fiddly work with dependencies - especially for Torch and any existing software running your GPU.  Our [OpenAI Whisper API endpoint](https://deepgram.com/openai-whisper/) is easy to work with on the command-line - you can use `curl` to quickly send audio to our API.

This call will send your file to the API and save it to a local JSON file called `n_tesla.json`:

```shell
curl --request POST \
  --upload-file snf025_nikolateslawirelessvision_anonymous_gu.mp3 \
  --url 'https://api.deepgram.com/v1/listen?model=whisper' \
  --output n_tesla.json
```

The JSON file is returned in Deepgram's format that offers the transcript as well as information about your transcription request. A quick way to view the transcript is to use the `jq` tool:

```shell
jq .results.channels[0].alternatives[0].transcript n_tesla.json 
```

...and here's your transcript!

```text
"Nikola Tesla sees a wireless vision by anonymous the New York Times 3rd October 1915. This is a LeapRvox recording. All LeapRvox recordings are in the public domain. For more information or to volunteer, please visit LeapRvox.org. Nikola Tesla sees a wireless vision. Things his world system will allow hundreds to talk at once through the earth. Nikola Tesla responds static disturbance. Inventors hopes also to transmit pictures by the same medium which carries the voice. Nikola Tesla announced to the Times last night that he had received a patent on an invention which would not only eliminate static interference, the present bugaboo of wireless telephony, but would enable thousands of persons to talk at once between wireless stations and make it possible for those talking to see one another by wireless, regardless of the distance separating them. 

...

Wireless is coming to mankind, and it's full meaning like a hurricane some of these days. Some day there will be, say, six great wireless telephone stations in a world system, connecting all the inhabitants on this earth to one another, not only by voice, but by sight. It's surely coming. End of Nikola Tesla sees a wireless vision by anonymous, the New York Times 3rd October 1915."
```

## But Wait. Those Transcripts Aren't the Same.

Excellent observation! The local run was able to transcribe "LibriVox," while the API call returned "LeapRvox." This is an artifact of this kind of model - their results are not deterministic. That is, some optimizations for working with large quantities of audio depend on overall system state and do not produce precisely the same output between runs. Our observations are that the resulting differential is typically on the order of 1% (absolute) fluctuations in word-error rate.

> **Author's Note:** I had a really rough time getting this up and going on a fairly standard Ubuntu laptop with a GPU, even in a clean `venv`. The `pip` install failed to build the `whisper` wheel for unclear reasons, although it did OK after I did a `pip3 install --upgrade pip` and then explicitly called pip3 on the second attempt.

> Running `whisper` to do the actual transcriptions failed with an ugly CUDA error (pasted below). It looks as though it tried to fire up my GPU to do the work but balked on some kind of CUDA/Torch driver compatibility problem. It had already been a couple of hours and the thought of breaking a CUDA environment that is working for other stuff to try to fix this was horrifying, so I ran whisper in the [Colab Notebook](https://colab.research.google.com/drive/1bHrlPXLn-nYNZtf8k_q3sTmDL6phAf6p?usp=sharing) Nick has put together and pulled that output for this article.

Error follows:

```shell
whisper "snf025_nikolateslawirelessvision_anonymous_gu.mp3" --model small --language English

Traceback (most recent call last):
  File "/home/kate/projects/whisper/venv/bin/whisper", line 11, in <module>
    load_entry_point('whisper==1.0', 'console_scripts', 'whisper')()
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/whisper/transcribe.py", line 300, in cli
    result = transcribe(model, audio_path, temperature=temperature, **args)
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/whisper/transcribe.py", line 182, in transcribe
    result = decode_with_fallback(segment)[0]
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/whisper/transcribe.py", line 110, in decode_with_fallback
    results = model.decode(segment, options)
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/torch/autograd/grad_mode.py", line 27, in decorate_context
    return func(*args, **kwargs)
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/whisper/decoding.py", line 701, in decode
    result = DecodingTask(model, options).run(mel)
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/torch/autograd/grad_mode.py", line 27, in decorate_context
    return func(*args, **kwargs)
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/whisper/decoding.py", line 617, in run
    audio_features: Tensor = self._get_audio_features(mel)  # encoder forward pass
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/whisper/decoding.py", line 561, in _get_audio_features
    audio_features = self.model.encoder(mel)
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/torch/nn/modules/module.py", line 1130, in _call_impl
    return forward_call(*input, **kwargs)
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/whisper/model.py", line 156, in forward
    x = block(x)
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/torch/nn/modules/module.py", line 1130, in _call_impl
    return forward_call(*input, **kwargs)
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/whisper/model.py", line 127, in forward
    x = x + self.mlp(self.mlp_ln(x))
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/torch/nn/modules/module.py", line 1130, in _call_impl
    return forward_call(*input, **kwargs)
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/torch/nn/modules/container.py", line 139, in forward
    input = module(input)
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/torch/nn/modules/module.py", line 1130, in _call_impl
    return forward_call(*input, **kwargs)
  File "/home/kate/projects/whisper/venv/lib/python3.8/site-packages/whisper/model.py", line 36, in forward
    return F.linear(
RuntimeError: CUDA error: CUBLAS_STATUS_EXECUTION_FAILED when calling `cublasGemmEx( handle, opa, opb, m, n, k, &falpha, a, CUDA_R_16F, lda, b, CUDA_R_16F, ldb, &fbeta, c, CUDA_R_16F, ldc, CUDA_R_32F, CUBLAS_GEMM_DFALT_TENSOR_OP)`
```

