---
title: "How to Add Deepgram Speech Recognition to Your Unity Game"
description: "In this tutorial, learn how to integrate Deepgram's automatic speech recognition engine into your Unity game."
date: 2022-03-16
cover: https://res.cloudinary.com/deepgram/image/upload/v1647451573/blog/2022/03/deepgram-unity-tutorial/assets/Building-a-Game-w-Unity-Deepgram%402x.jpg
authors:
    - nikola-whallon
category: tutorial
tags:
    - game-dev
    - unity
seo:
    title: "How to Add Deepgram Speech Recognition to Your Unity Game"
    description: "In this tutorial, learn how to integrate Deepgram's automatic speech recognition engine into your Unity game."
shorturls:
    share: https://dpgr.am/0692b8d
    twitter: https://dpgr.am/fb3493d
    linkedin: https://dpgr.am/da35424
    reddit: https://dpgr.am/6adc409
    facebook: https://dpgr.am/3ce4691
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454022/blog/deepgram-unity-tutorial/ograph.png
---

In this tutorial, we will be making a simple physics simulation in Unity with actions triggered by Deepgram's
automatic speech recognition (ASR) engine. Why use Deepgram with Unity? Well, Unity is an industry standard when it comes to game development,
and while speech-enhanced games have been around for decades, high performance, easy-to-use ASR is relatively new, and Deepgram represents the cream-of-the-crop.
So if you are looking to try something new with your games, perhaps for a more immersive or accessible experience, I highly recommend trying this out!

This tutorial assumes no prior experience with Unity or C# (the language Unity uses for scripting). However, its
focus is on getting you quickly set up to integrate Deepgram in your Unity
project, and does not cover Unity game development or the C# language in depth. There are a plethora of resources out there to learn game development with Unity,
and I highly recommend [checking out their learning website](https://learn.unity.com/) as a starting point!

Finally, for an example of a simple game built with Deepgram ASR, you can check out [Spooky Speech Spells](https://spookyspeechspells.deepgram.com).

## Pre-requisites

You will need:

*   Unity installed on your machine - [download Unity here](https://unity.com/download). This tutorial was written with the Unity Editor version `2020.3.30f1`.
*   *(Optional)* [VS Code](https://code.visualstudio.com/docs/other/unity) or [Script Inspector 3](https://assetstore.unity.com/packages/tools/visual-scripting/script-inspector-3-3535) for editing C# Unity scripts (you can use any text editor, but these are highly recommended for their Unity integration).
*   A Deepgram API Key - [get an API Key here](https://console.deepgram.com/signup?jump=keys).

## Try the Demo

To run the demo we are going to build and browse its files:

*   Download [this repository](https://github.com/deepgram/UnityDeepgramDemo), open Unity, click "Open", and browse to and select the directory `UnityDeepgramDemo`.
*   Edit the script `UnityDeepgramDemo/Assets/DeepgramInstance.cs` and replace the string `INSERT_YOUR_API_KEY` with your Deepgram API key.
*   In the bottom left "Project" tab open `Assets -> Scenes` and double click "SampleScene" to load this scene.
*   In the top center of the Unity editor, hit the "Play" (►) button.
*   Say "left," "right," "up," and "down" to move the ball around!

## Building the Demo

In the following sections, we will walk through step-by-step how to make this demo where you can move
a ball around a simulated physics environment just by commanding it via your computer's microphone.

## Setting Up the Project

Open Unity and click "New project".

<img src="https://res.cloudinary.com/deepgram/image/upload/v1647377747/blog/2022/03/deepgram-unity-tutorial/assets/new_project.png" alt="Create a new project." style="max-width: 2272px;display: block;margin-left: auto;margin-right: auto;">

You will be presented with a list of templates - choose "2D", and under the "Project Settings" panel name the project "UnityDeepgramDemo" (or whatever you'd like!)
and choose a location for the project on your filesystem.
Then click "Create project."

![Create the project from the "2D" template.](https://res.cloudinary.com/deepgram/image/upload/v1647261812/blog/2022/03/deepgram-unity-tutorial/assets/create_the_project.png)

We are now in the Unity Editor. Our demo will rely on one external package to help us handle the websocket connection to Deepgram - [Native WebSockets](https://github.com/endel/NativeWebSocket).
To install Native WebSockets, first, open the Package Manager from `Window -> Package Manager`.

<img src="https://res.cloudinary.com/deepgram/image/upload/v1647377747/blog/2022/03/deepgram-unity-tutorial/assets/open_package_manager.png" alt="Open the Package Manager." style="max-width: 466px;display: block;margin-left: auto;margin-right: auto;">

Then click the "+" drop-down and click "Add package from git URL...".

<img src="https://res.cloudinary.com/deepgram/image/upload/v1647377746/blog/2022/03/deepgram-unity-tutorial/assets/add_package_from_git_url.png" alt="Add a package from a git URL." style="max-width: 400px;display: block;margin-left: auto;margin-right: auto;">

Enter the URL: `https://github.com/endel/NativeWebSocket.git#upm` and click "Add."

We are now ready to start putting the demo together!

## Creating Physics Objects

In the center of the Unity Editor are the "Scene" and "Game" tabs. We will spend most of our time in the "Scene" tab, though when we play the game, we will be shifted over to the "Game"
tab. On the left side of the Unity Editor is the "Hierarchy" tab - this is where we will be adding our game objects.

Let's add some physics objects to our scene - we are going to create a box out of 4 static (non-movable) walls, and add a dynamic (movable) ball in the center.

In the "Hierarchy" tab, right-click and select `2D Object -> Physics -> Static Sprite`.

<img src="https://res.cloudinary.com/deepgram/image/upload/v1647377747/blog/2022/03/deepgram-unity-tutorial/assets/add_static_sprite.png" alt="Add a Static Sprite." style="max-width: 1166px;display: block;margin-left: auto;margin-right: auto;">

We now have a static square sprite in the center of our scene. Let's move this square to the left and make it a vertical rectangle to start building our box.
To do this, go to the "Inspector" tab on the right. Under "Transform," change the "X" "Position" to -5 and the "Y" "Scale" to 5. This will stretch the square
into a vertical rectangle 5 units tall, and place it 5 units to the left.

![Create a static wall.](https://res.cloudinary.com/deepgram/image/upload/v1647404529/blog/2022/03/deepgram-unity-tutorial/assets/wall_left.png)

Now, right-click the "Static Sprite" object in the "Hierarchy" tab, click "Rename," and rename it "WallLeft." Let's do the same procedure to make a "WallRight," "WallUp," and "WallDown."

For "WallRight," change the "X" "Position" to 5 and the "Y" "Scale" to 5.
For "WallUp," change the "Y" "Position" to 3 and the "X" "Scale" to 9.
And for the "WallDown," change the "Y" "Position" to -3 and the "X" "Scale" to 9.
You should now have a box which looks like this:

![Our completed box.](https://res.cloudinary.com/deepgram/image/upload/v1647404529/blog/2022/03/deepgram-unity-tutorial/assets/complete_box.png)

Let's add a dynamic ball inside the box. Right-click inside the "Hierarchy" tab and select `2D Object -> Physics -> Dynamic Sprite` and name the object "Ball."
Dynamic sprites have gravity applied to them by default, and this can be changed if desired in the "Gravity Scale" field of the "Rigidbody 2D" node in the "Inspector" tab.
For now, let's leave it at the default value. Feel free to press "Play" (►) to start the game! You should see the ball fall to the bottom of the box - not much going on yet.
(Note, however, that you will not be able to do certain edits on the game until you stop playing the game by pressing again on the "Play" (►) button.)

Finally, let's attach a script to our "Ball" object. In the bottom panel, select the "Project" tab and open the "Assets" directory. Right-click in the "Assets"
panel and select `Create -> C# Script`. Name the script `Ball` (on your OS's filesystem, the file will exist as `Ball.cs`). Open this script with your text
editor of choice, and paste the following contents:

```
    using System.Collections;
    using System.Collections.Generic;
    using UnityEngine;

    public class Ball : MonoBehaviour
    {
        public int forceFactor = 300;

        void Start()
        {

        }

        void Update()
        {

        }

        public void PushLeft()
        {
            Rigidbody2D rigidBody = GetComponent<Rigidbody2D>();
            rigidBody.AddForce(Vector2.left * forceFactor);
        }
        public void PushRight()
        {
            Rigidbody2D rigidBody = GetComponent<Rigidbody2D>();
            rigidBody.AddForce(Vector2.right * forceFactor);
        }
        public void PushUp()
        {
            Rigidbody2D rigidBody = GetComponent<Rigidbody2D>();
            rigidBody.AddForce(Vector2.up * forceFactor);
        }
        public void PushDown()
        {
            Rigidbody2D rigidBody = GetComponent<Rigidbody2D>();
            rigidBody.AddForce(Vector2.down * forceFactor);
        }
    }
```

This script defines the class `Ball`, which inherits from Unity's `MonoBehavior` class. The class has one member variable, `forceFactor`, and defines
4 methods that can be used to move the object, `PushLeft`, `PushRight`, `PushUp`, and `PushDown`. We will not use these methods yet, but when we
implement our Deepgram integration, we will trigger these methods when you say the words "left," "right," "up," and "down."

So now we have a "Ball" script and a "Ball" object, but they are not coupled yet! To attach the script to the object, click the object in the "Hierarchy"
tab, and drag the "Ball" script to the "Add Component" button found at the bottom of the "Inspector" tab.

## Implementing the Deepgram Integration

To implement the Deepgram integration, we will need to create an object which handles microphone input and an object which handles the websocket
connection to Deepgram.

Let's start with the websocket handler. Right-click in the "Hierarchy" tab and select "Create Empty" - name this object "DeepgramObject." Now,
create a new script and name it "DeepgramInstance." Edit the script and add the following contents:

```
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using UnityEngine;
    using UnityEditor;
    using System.Text.RegularExpressions;

    using NativeWebSocket;

    [System.Serializable]
    public class DeepgramResponse
    {
        public int[] channel_index;
        public bool is_final;
        public Channel channel;
    }

    [System.Serializable]
    public class Channel
    {
        public Alternative[] alternatives;
    }

    [System.Serializable]
    public class Alternative
    {
        public string transcript;
    }

    public class DeepgramInstance : MonoBehaviour
    {
        WebSocket websocket;

        public Ball _ball;

        async void Start()
        {
            var headers = new Dictionary<string, string>
            {
                { "Authorization", "Token INSERT_YOUR_API_KEY" }
            };
            websocket = new WebSocket("wss://api.deepgram.com/v1/listen?encoding=linear16&sample_rate=" + AudioSettings.outputSampleRate.ToString(), headers);

            websocket.OnOpen += () =>
            {
                Debug.Log("Connected to Deepgram!");
            };

            websocket.OnError += (e) =>
            {
                Debug.Log("Error: " + e);
            };

            websocket.OnClose += (e) =>
            {
                Debug.Log("Connection closed!");
            };

            websocket.OnMessage += (bytes) =>
            {
                var message = System.Text.Encoding.UTF8.GetString(bytes);
                Debug.Log("OnMessage: " + message);

                DeepgramResponse deepgramResponse = new DeepgramResponse();
                object boxedDeepgramResponse = deepgramResponse;
                EditorJsonUtility.FromJsonOverwrite(message, boxedDeepgramResponse);
                deepgramResponse = (DeepgramResponse) boxedDeepgramResponse;
                if (deepgramResponse.is_final)
                {
                    var transcript = deepgramResponse.channel.alternatives[0].transcript;
                    Debug.Log(transcript);
                    int leftCount = new Regex(Regex.Escape("left")).Matches(transcript).Count;
                    int rightCount = new Regex(Regex.Escape("right")).Matches(transcript).Count;
                    int upCount = new Regex(Regex.Escape("up")).Matches(transcript).Count;
                    int downCount = new Regex(Regex.Escape("down")).Matches(transcript).Count;
                    for (int i = 0; i < leftCount; i++)
                    {
                        _ball.PushLeft();
                    }
                    for (int i = 0; i < rightCount; i++)
                    {
                        _ball.PushRight();
                    }
                    for (int i = 0; i < upCount; i++)
                    {
                        _ball.PushUp();
                    }
                    for (int i = 0; i < downCount; i++)
                    {
                        _ball.PushDown();
                    }
                }
            };

            await websocket.Connect();
        }
        void Update()
        {
        #if !UNITY_WEBGL || UNITY_EDITOR
            websocket.DispatchMessageQueue();
        #endif
        }

        private async void OnApplicationQuit()
        {
            await websocket.Close();
        }

        public async void ProcessAudio(byte[] audio)
        {
            if (websocket.State == WebSocketState.Open)
            {
                await websocket.Send(audio);
            }
        }
    }
```

Insert your Deepgram API key where the script says "INSERT\_YOUR\_API\_KEY," then
attach this script to the "DeepgramObject", and in the "Inspector" tab click the "Ball" field and select the "Ball" object we created earlier.

<img src="https://res.cloudinary.com/deepgram/image/upload/v1647404524/blog/2022/03/deepgram-unity-tutorial/assets/add_ball_to_deepgram_object.png" alt="Adding a Ball object reference to the DeepgramObject." style="max-width: 556px;display: block;margin-left: auto;margin-right: auto;">

Ok, so what's going on here? Well, first the script defines the classes `DeepgramResponse`, `Channel`, and `Alternative` which we will use to deserialize
the Deepgram ASR response, which is in JSON format. Then the script defines the class `DeepgramInstace` which has two member variables: a `WebSocket` object,
defined by `NativeWebSocket`, and a `Ball` object, defined by us in the "Ball" script.

When the object that this script is attached to gets created, the `Start` method gets called. Inside `Start`, we create a new websocket connection to Deepgram
and define functions that need to get executed when that connection opens, closes, receives an error, and receives a message. When the websocket connection
receives a message, we first parse it as a string, and then use `EditorJsonUtility` to parse the string as a JSON object, deserializing it as a `DeepgramResponse`
object. We can then directly access the transcript contained in this Deepgram message, count how many times the words "left," "right," "up," and "down" were spoken,
and for each time these words were spoken, we call the `PushLeft`, `PushRight`, `PushUp`, and `PushDown` methods on our `Ball` object!

Near the end of the script is one more method of note: `ProcessAudio`. This method will be called by our microphone object, which will pass in raw audio. `ProcessAudio`
will then check to see if the websocket connection is open, and if it is, pass the audio along to Deepgram.

Now let's create an object to handle the microphone input. Right-click in the "Hierarchy" tab, select `Audio -> AudioSource`, and name this object "MicrophoneObject."
Then create a new script called "MicrophoneInstance" and make its contents the following:

```
    using System.Collections;
    using System.Collections.Generic;
    using UnityEngine;
    using UnityEngine.Audio;

    [RequireComponent (typeof (AudioSource))]
    public class MicrophoneInstance : MonoBehaviour
    {
        AudioSource _audioSource;
        int lastPosition, currentPosition;

        public DeepgramInstance _deepgramInstance;

        void Start()
        {
            _audioSource = GetComponent<AudioSource> ();
            if (Microphone.devices.Length > 0)
            {
                _audioSource.clip = Microphone.Start(null, true, 10, AudioSettings.outputSampleRate);
            }
            else
            {
                Debug.Log("This will crash!");
            }

            _audioSource.Play();
        }

        void Update()
        {
            if ((currentPosition = Microphone.GetPosition(null)) > 0)
            {
                if (lastPosition > currentPosition)
                    lastPosition = 0;

                if (currentPosition - lastPosition > 0)
                {
                    float[] samples = new float[(currentPosition - lastPosition) * _audioSource.clip.channels];
                    _audioSource.clip.GetData(samples, lastPosition);

                    short[] samplesAsShorts = new short[(currentPosition - lastPosition) * _audioSource.clip.channels];
                    for (int i = 0; i < samples.Length; i++)
                    {
                        samplesAsShorts[i] = f32_to_i16(samples[i]);
                    }

                    var samplesAsBytes = new byte[samplesAsShorts.Length * 2];
                    System.Buffer.BlockCopy(samplesAsShorts, 0, samplesAsBytes, 0, samplesAsBytes.Length);
                    _deepgramInstance.ProcessAudio(samplesAsBytes);

                    if (!GetComponent<AudioSource>().isPlaying)
                        GetComponent<AudioSource>().Play();
                    lastPosition = currentPosition;
                }
            }
        }

        short f32_to_i16(float sample)
        {
            sample = sample * 32768;
            if (sample > 32767)
            {
                return 32767;
            }
            if (sample < -32768)
            {
                return -32768;
            }
            return (short) sample;
        }
    }
```

Attach this script to the "MicrophoneObject", and in the "Inspector" tab click the "DeepgramInstance" field and select the "DeepgramObject" object we created earlier.

In this script, we define the `MicrophoneInstance` class which contains an `AudioSource` member variable, a `DeepgramInstance` member variable, and 2 integer member
variables which help to keep track of where we are in the microphone's audio stream. The `Start` method will set up the microphone to stream audio data into
the `clip` of the `AudioSource` object, and will start playback of the `AudioSource`.

The `Update` method of a `MonoBehavior` class gets called by the under-the-hood game loop every frame and is the typical place to handle game logic.
In our case, it gets the current position of the microphone's audio stream, compares it to the last position of the microphone's audio stream to
create a buffer, `samples`, of floats the right size to store all of the new audio data since the last time `Update` was called, grabs that audio data via the method `GetData`
and stores it in `samples`. Then, these `f32` samples are converted to `i16` samples, and then converted to raw bytes, and finally passed to the `DeepgramInstance`'s `ProcessAudio`
method which, as we mentioned before, will then pass that audio on to Deepgram to get transcribed!

Now, we are *almost* ready to try out our demo. There is one more task to do to make the demo reasonably playable, and if you try to play the demo now, you may see what it is!
Currently, in order to get the microphone's audio data, the microphone's audio stream must play. However, having the microphone's audio play through your computer's speakers
can be problematic and lead to feedback issues (plus, hearing your voice in the game isn't the point). To fix this issue, go to the "Assets" panel, right-click,
and select `Create -> Audio Mixer`. Name the mixer "Mixer."

<img src="https://res.cloudinary.com/deepgram/image/upload/v1647377747/blog/2022/03/deepgram-unity-tutorial/assets/add_audio_mixer.png" alt="Add a Mixer." style="max-width: 1176px;display: block;margin-left: auto;margin-right: auto;">

Double click "Mixer" in the "Assets" panel, then next to "Groups" click the "+" button and name the group "Microphone."
Now go to the fader for this group and turn it all the way down.

<img src="https://res.cloudinary.com/deepgram/image/upload/v1647377746/blog/2022/03/deepgram-unity-tutorial/assets/turn_fader_down.png" alt="Silence the Microphone group." style="max-width: 1090px;display: block;margin-left: auto;margin-right: auto;">

Now, click the "MicrophoneObject" in the "Hierarchy" tab and then click on the field for "Output" in the "Audio Source" node in the "Inspector" tab and select "Microphone (Mixer)."
This will ensure the microphone audio can stream its data without being directed to your speakers!

<img src="https://res.cloudinary.com/deepgram/image/upload/v1647377746/blog/2022/03/deepgram-unity-tutorial/assets/send_audio_source_to_mixer_group.png" alt="Silence the Microphone group." style="max-width: 568px;display: block;margin-left: auto;margin-right: auto;">

You should now be able to press "Play" (►) and make the ball jump around by saying "left," "right," "up," or "down" in the microphone!

## Build New Features

Controlling a single ball with commands has a noticeable amount of latency. This can be alleviated somewhat
by using [interim results](https://developers.deepgram.com/documentation/features/interim-results/), however,
the same transcribed word might be present in subsequent interim results, so logic would have to be added
to avoid double counting commands. Still, the use of interim results can vastly reduce latency, so I strongly
suggest trying it out! In addition, here are a few more things to think about and try out with this demo before diving into
a full-on speech-enhanced game:

*   Change the [Physics Material](https://docs.unity3d.com/Manual/class-PhysicMaterial.html) of the ball to make it bounce instead of stick to walls.
*   Add more balls to the box - try making just one of them, several of them, or all of them react to the speech commands.
*   Give the balls different colors, and implement logic to control each group (like "red, left!", "blue, up!").
*   Remove gravity for balls and exchange the simple box with a sprawling level of walls.

If you try out the above ideas, you may come to a fun idea for a game - how about a game along the lines of Pikmin, where you command
different groups of creatures to move to different parts of the map to accomplish objectives? Instead of using a complex user interface
of buttons, mice, and/or a keyboard, the game could simply require you to dictate commands!

## Final Thoughts

Speech-enhanced games are not necessarily new, but until recently they have mostly centered around a handful of command words.
With today's ASR engines like Deepgram, supporting thousands of command words out of the box has become trivial, indeed transcribing entire
conversations and complex commands is now easily within reach and has the power to enrich games. I'll end with a few ideas which
may give you some inspiration!

*   Along the lines of the example mentioned in the previous section, build an RTS where you control units with your voice. There may be more
    latency than you get with a mouse click, but this could be turned into a core game mechanic - maybe you are communicating with your units
    via a radio, and any network + transcription latency would feel like latency of your units receiving your message.
*   Also following up on this idea, make a game where you primarily control a single player, but have the option to give commands to other
    AI players on your team - these commands could be conveyed with your voice without having to swap to a complex menu, interrupting the control of
    your primary character. (For a concrete example, think Hyrule Warriors.)
*   For MOBAs where voice chat is not easily available (think Pokémon Unite), allow for command phrases to be selected via ASR instead of clunky menus.
*   To avoid issues with latency entirely, make speech-enhanced sections of your game occur during context-sensitive situations where the main action
    of the game pauses so that reaction time becomes a non-issue. As an example, in many Zelda games, the game freezes when you pull out an instrument,
    and playing the right notes on the instrument can cause events to occur - imagine this but with ASR and specific phrases.
*   For in-game voice chat, write a plugin that performs ASR for each player in their preferred
    language (see Deepgram's supported languages [here](https://developers.deepgram.com/documentation/features/language/), and then passes
    the resulting transcripts through a translator to display everyone's speech to everyone else in their preferred language.

Speech-in-games is a relatively untapped area, so this list of ideas and suggestions is far from exhaustive, but I sincerely hope this helps
on the journey towards making games more immersive, interesting, and inclusive!

If you have any questions, please feel free to reach out on Twitter - we're @DeepgramDevs.

        