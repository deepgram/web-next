---
title: Exploring Whisper
description: test
date: 2022-10-13T20:59:18.175Z
cover: https://res.cloudinary.com/deepgram/image/upload/v1664490424/blog/blog-placeholder_nhrr9p.png
authors:
  - julia-strout
category: ai-and-engineering
tags:
  - whisper
  - machine-learning
---
OpenAI recently released a new open source ASR model named Whisper and a repo full of tools that make it easy to try it out. In this blog, we will explore some of the options in Whisper’s inference and see how they impact results.

When experimenting with Whisper, you have a few options. You can run their command line tool, which will set a bunch of parameters for you, but you can also play around with those parameters and change what kind of results you get.

To install Whisper on your machine, you can follow the Setup guide in their [readme](https://github.com/openai/whisper) which walks you through the steps.

Then, you can import Whisper in your own python code and use their ```load_model``` function to download the pre-trained weights and initialize one of the models.

```bash
import whisper
model = whisper.load_model("medium.en", device="cuda")
```

Whisper is available as multilingual models, but we will focus on the english only versions here. The options are:
```tiny.en```
```base.en```
```small.en```
```medium.en```
```large``` (the large model is only available in the multi-language form)

Whisper is an encoder-decoder transformer model that takes in audio features and generates text. The models’ parameter sizes range from 39 M for tiny and up to 1550 M for large.

Whisper makes it very easy to transcribe an audio file from its path on the file system and will take care of loading the audio using ```ffmpeg``` and featurizing it before running inference on the file.

In order to run the transcribe function, you need to make some decisions about how you want to decode the model's predictions into text.

You can call the transcribe function without explicitly setting the decode options and it will set some defaults for you.

```
transcription = model.transcribe("hello_world.mp3", task=”transcribe”, language="en")
print(transcription["text"])
' Hello world.'
```

## Decoding

In the Whisper [paper](https://cdn.openai.com/papers/whisper.pdf), they describe their complex decoding strategy including a few heuristics they landed on to try and make transcription more reliable. The way these strategies are currently implemented in their code results in slightly improved test results, but can slow down inference by up to 6x. This is because they repeatedly run inference with different decoding strategies until they meet the heuristics.

Two of the heuristics they use are:

**Compression ratio:** the compression ratio heuristic is defined by the calculation:

```compression_ratio = len(text)/len(zlib.compress(text.encode("utf-8")))```

zlib’s compression capitalizes on repeated sequences, so a text string with many repeated sequences will be able to compress down more than a string with more unique sequences. In the whisper code, they set their ratio threshold to be ```2.4```. A sequence that has a higher ratio is re-inferenced and decoded with a different strategy.

**Average log probability:** after taking the log softmax of the network's output logits, the average log probability of the tokens chosen by the decoding is used. This can be thought of as a confidence measure of the model's predictions. The whisper authors use ```-1.0``` as their threshold.

By default, the whisper cli tool runs inference and decoding up to 6 times with the following decoding strategies. For each strategy, if the results pass the compression and log probability heuristics, the predicted tokens are used. If the heuristics are not met, the segment is re-inference and re-decoded with the next strategy. 

The decoding strategies are:
1. Beam search with 5 beams using log probability for the score function
2. Greedy decoding with best of 5 sampling. The following temperatures are     used for successive attempts: (0.0, 0.2, 0.4, 0.6, 0.8, 1.0)

The authors quantify the effects of these strategies in [Table 7](https://cdn.openai.com/papers/whisper.pdf) of their paper. They have a varied impact across datasets, but overall the effects for any single intervention are not large.

Here we can look at a few different decoding strategies for the same file and see how they impact results. For this experiment we use the following [clip](https://www.youtube.com/watch?v=FTrxDBDBOHU) from Star Wars. It's a useful example because the different decoding strategies make the most difference in areas where the model is less certain. In this clip, there is dramatic music at the beginning, followed by the words "hello there" in a normal voice and then "General Kenobi" in a robotic voice with some strange noises thrown in.

First we try running the full decoding strategy, and see that it correctly transcribes the file:
```
beam_size=5
best_of=5
temperature=(0.0, 0.2, 0.4, 0.6, 0.8, 1.0)

decode_options = dict(language="en", best_of=best_of, beam_size=beam_size, temperature=temperature)
transcribe_options = dict(task="transcribe", **decode_options)

transcription = model.transcribe("Obi-Wan.mp3", **transcribe_options)
print(transcription["text"])

' Hello there. General Kenobi!'
```

Next, we try removing the beam size strategy and dropping the best_of value for greedy decoding down to 1. Here we can see that now the model is outputting "ominious music" before the actual speech. This suggests the model was trained on some form of closed captioning.
```
beam_size=None
best_of=1
temperature=(0.0, 0.2, 0.4, 0.6, 0.8, 1.0)

decode_options = dict(language="en", best_of=best_of, beam_size=beam_size, temperature=temperature)
transcribe_options = dict(task="transcribe", **decode_options)

transcription = model.transcribe('Obi-Wan.mp3', **transcribe_options)
print(transcription['text'])

'ominous music hello there General Kenobi!'
```

Finally, we try increasing the best_of value for greedy decoding, but reducing the temperature values tried.
```
beam_size=None
best_of=3
temperature=(0.0, 0.2, 0.4)

decode_options = dict(language="en", best_of=best_of, beam_size=beam_size, temperature=temperature)
transcribe_options = dict(task="transcribe", **decode_options)

transcription = model.transcribe("Obi-Wan.mp3", **transcribe_options)
print(transcription["text"])

' Thanks for watching!'
```

There we can see that with only very low temperature values, and a best_of set to 3, we get a remnant from the weak supervision from internet transcripts. There is randomness in this process, so repeating those experiments will different results each time.

These examples help explain why the authors recommend attempting multiple decodings and checking the heuristics as a way of improving performance. Trying to hone in on what decoding strategy works best for your data can simplify the inference process for running Whisper and make the current code run faster.

### Non-speech
One area the model struggles with is periods of non-speech. After the decoding algorithms requested are run, the authors check one more heursitic:

**No speech threshold:** this is another heuristic the authors check after all the decoding is finished. It is based on the probability assigned to the no speech token during inference. The authors use a threshold of ```0.6``` to detect non-speech. However, if the average log probability passes its threshold then this heuristic is ignored.

To explore the models' performances on areas of non-speech, we use this [cat video](https://www.youtube.com/watch?v=gBx4IwYe3L8) which contains only background music and cat noises.

Sending the first 30 seconds of the cat video through the model with the recommended decoding produces some text.

```
beam_size=5
best_of=5
temperature=(0.0, 0.2, 0.4, 0.6, 0.8, 1.0)

decode_options = dict(language="en", best_of=best_of, beam_size=beam_size, temperature=temperature)
transcribe_options = dict(task="transcribe", **decode_options)

transcription = model.transcribe("kittens_30secs.mp3", **transcribe_options)
print(transcription["text"])

' parrot one parrot you'
```

This means that the no speech threshold described above was not met. And if we check the model's predicted probability for the non-speech token we see that it was only 0.535. Too low to hit the threshold of 0.6.

If we run this same test with the ```base.en``` model instead of the ```medium.en```:

```
model = whisper.load_model("base.en", device="cuda")
beam_size=5
best_of=5
temperature=(0.0, 0.2, 0.4, 0.6, 0.8, 1.0)

decode_options = dict(language="en", best_of=best_of, beam_size=beam_size, temperature=temperature)
transcribe_options = dict(task="transcribe", **decode_options)

transcription = model.transcribe("kittens_30secs.mp3", **transcribe_options)
print(transcription["text"])

''
```

For the base model, the probability for the non speech token was ```0.641```, which hit the threshold, leading the model to correctly output no speech for the audio.

If we run the same experiment for more of the models, we can see how they handle the non-speech differently.

| Model     | no_speech probability | Predicted text |
|-----------|-----------------------|----------------|
| base.en   | 0.64                  |''
| small.en | 0.467                 |' you'          |
| medium.en | 0.53                  |'few weeks ago'|
| large     | 0.5                   |"Last couple days I almost lost it. I am excited for the day cuz I am Bye!"|

It doesn't correlate perfectly with size, but we can see that the larger models may need a higher no silence threshold for audio known to contain periods of background noise and no speech. This could also be solved by using a voice activity detection algorithm in parallel with Whisper, and only running Whisper on segments believed to contain speech.

The other thing noticible in those results is how the larger models are also more "wordy" under uncertainty, with the large model outputting two random sentences. This points to the high capacity for the large models to memorize some of the lower quality supervision. The authors try to counter the effects of the weak supervision by providing a lot of it, over 600k hours, but its clear that some of the noise in the truth quality ends up stored in the weights of the larger models.


Hopefully this blog helped you explore the many options in the Whipser repo and find a configuration that works best for your tasks!


