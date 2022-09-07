---
title: "Live Transcriptions with iOS and Deepgram"
description: "Build an iOS app which takes the user’s microphone and prints transcripts to the screen in real-time."
date: 2022-01-03
cover: https://res.cloudinary.com/deepgram/image/upload/v1638827580/blog/2022/01/ios-live-transcription/Live-Transcriptions-w-iOS-Deepgram-A%402x.jpg
authors:
    - abdul-ajetunmobi
category: tutorial
tags:
    - ios
    - swift
seo:
    title: "Live Transcriptions with iOS and Deepgram"
    description: "Build an iOS app which takes the user’s microphone and prints transcripts to the screen in real-time."
shorturls:
    share: https://dpgr.am/fe8fa3f
    twitter: https://dpgr.am/520da60
    linkedin: https://dpgr.am/d25200f
    reddit: https://dpgr.am/c4783e8
    facebook: https://dpgr.am/f66d6dc
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453843/blog/ios-live-transcription/ograph.png
---

<guest-author></guest-author>

Deepgram's Speech Recognition API can provide accurate transcripts with pre-recorded and live audio. In this post, you will build an iOS app that takes the user's microphone and prints transcripts to the screen in real-time.

The final project code is available at [https://github.com/deepgram-devs/deepgram-live-transcripts-ios](https://github.com/deepgram-devs/deepgram-live-transcripts-ios).

## Before We Start

For this project, you will need:

*   A Deepgram API Key - [get one here](https://console.deepgram.com/signup?jump=keys)
*   [Xcode](https://developer.apple.com/xcode/) installed on your machine.

Once you open Xcode, create a new Xcode project. Select the App template, give it a product name, select "Storyboard" for the interface, and "Swift" for the language. Untick "User Core Data" and "Include Tests", then hit next.

Choose a place to save your project and hit finish to open your new project.

You will be using the WebSocket library [Starscream](https://github.com/daltoniam/Starscream) for this project. You can add it as a Swift Package by going to *File > Add Packages*, then entering the URL ([https://github.com/daltoniam/Starscream](https://github.com/daltoniam/Starscream)) into the search box. Click add package and wait for the package to download.

## Get Microphone Permissions

You will be using the microphone for this project, so you will need to add a microphone usage description to your project. When an iOS app asks for microphone permission, a reason why the permission is being requested is required and will be shown to the user. Open the `info.plist` file to add a description.

Hover over the last entry and click the plus icon to add a new entry. The key should be "Privacy - Microphone Usage Description", and you should add a value that describes why you need the microphone. You can use "To transcribe audio with Deepgram".

![Plist file with the microphone usage description](https://res.cloudinary.com/deepgram/image/upload/v1638827585/blog/2022/01/ios-live-transcription/plist.png)

## Setting Up `AVAudioEngine`

To access a data stream from the microphone, you will use [`AVAudioEngine`](https://developer.apple.com/documentation/avfaudio/avaudioengine).

Before you get started, it is worth having a mental model of how `AVAudioEngine` works. Apple's description is: "An audio engine object contains a group of AVAudioNode instances that you attach to form an audio processing chain".

For this example, you will create a chain of nodes that will take the microphone's input, convert it to a format that Deepgram can process, then send the data to Deepgram. The nodes and conversion will be discussed further in the blog.

![AVAudioEngine nodes for this project](https://res.cloudinary.com/deepgram/image/upload/v1638827585/blog/2022/01/ios-live-transcription/engine-diagram.png)

Open the `ViewController.swift` file and import AVFoundation and Starscream at the top

    import AVFoundation
    Import Starscream

This will give you access to the `AVAudioEngine` class. Then inside the `ViewController` class, create an instance of `AVAudioEngine` by adding a property:

```swift
private let audioEngine = AVAudioEngine()
```

Next, create a function to analyse the audio and declare some constants:

```swift
private func startAnalyzingAudio() {
  let inputNode = audioEngine.inputNode
  let inputFormat = inputNode.inputFormat(forBus: 0)
  let outputFormat = AVAudioFormat(commonFormat: .pcmFormatInt16, sampleRate: inputFormat.sampleRate, channels: inputFormat.channelCount, interleaved: true)
}
```

From the top, you have the `inputNode`, which you can think of as the microphone followed by the `inputFormat`.

Next is the `outputFormat` - The iOS microphone is a 32-bit depth format by default, so you will be converting to a 16-bit depth format before sending the data to Deepgram. While we will use a PCM 16-bit depth format for the audio encoding, Deepgram supports many audio encodings that can be specified to the API. Consider using a more compressed format if your use case requires low network usage. Just below those, add the new nodes that you will need and attach them to the audio engine:

```swift
let converterNode = AVAudioMixerNode()
let sinkNode = AVAudioMixerNode()

audioEngine.attach(converterNode)
audioEngine.attach(sinkNode)
```

The sinkNode is needed because to get the data in the correct format you need to access the data after it has passed through the converterNode, or its output. If you refer to the diagram above, notice how the stream of data to Deepgram is coming from the connection between nodes, the output of the `converterNode`, and not the nodes themselves.

## Get Microphone Data

Use the `installTap` function on the `AVAudioMixerNode` class to get the microphone data. This function gives you a closure that returns the output audio data of a node as a buffer. Call `installTap` on the `converterNode`, continuing the function from above:

```swift
converterNode.installTap(onBus: 0, bufferSize: 1024, format: converterNode.outputFormat(forBus: 0)) { (buffer: AVAudioPCMBuffer!, time: AVAudioTime!) -> Void in

}
```

You will come back to this closure later. Now finish off the `startAnalyzingAudio` by connecting all the nodes and starting the audio engine:

```swift
audioEngine.connect(inputNode, to: converterNode, format: inputFormat)
audioEngine.connect(converterNode, to: sinkNode, format: outputFormat)
audioEngine.prepare()

do {
try AVAudioSession.sharedInstance().setCategory(.record)
  try audioEngine.start()
} catch {
  print(error)
}
```

You can see now how the processing pipeline mirrors the diagram from earlier. Before the audio engine is started, the audio session of the application needs to be set to a record category. This lets the app know that the audio engine is solely being used for recording purposes. Note how the `converterNode` is connected with `outputFormat`.

## Connect to Deepgram

You will be using the Deepgram WebSocket Streaming API, create a `WebSocket` instance at the top of the `ViewController` class:

```swift
private let apiKey = "Token YOUR_DEEPGRAM_API_KEY"
private lazy var socket: WebSocket = {
  let url = URL(string: "wss://api.deepgram.com/v1/listen?encoding=linear16&sample_rate=48000&channels=1")!
  var urlRequest = URLRequest(url: url)
  urlRequest.setValue(apiKey, forHTTPHeaderField: "Authorization")
  return WebSocket(request: urlRequest)
}()
```

<Alert type="warning">A reminder that this key is in your app's source code and, therefore, it is not secure. Please factor this into your actual projects.</Alert>

Note how the URL has an encoding matching the `outputFormat` from earlier. In the `viewDidLoad` function, set the socket's delegate to this class and open the connection:

```swift
override func viewDidLoad() {
  super.viewDidLoad()
  socket.delegate = self
  socket.connect()
}
```

You will implement the delegate later in the post.

## Send Data to Deepgram

Now that the socket connection is open, you can now send the microphone data to Deepgram. To send data over a WebSocket in iOS, it needs to be converted to a `Data` object. Add the following function to the `ViewController` class that does the conversion:

```swift
private func toNSData(buffer: AVAudioPCMBuffer) -> Data? {
  let audioBuffer = buffer.audioBufferList.pointee.mBuffers
  return Data(bytes: audioBuffer.mData!, count: Int(audioBuffer.mDataByteSize))
}
```

Then return to the `startAnalyzingAudio` function, and within the `installTap` closure, you can send the data to Deepgram. Your tap code should look like this now:

```swift
converterNode.installTap(onBus: bus, bufferSize: 1024, format: converterNode.outputFormat(forBus: bus)) { (buffer: AVAudioPCMBuffer!, time: AVAudioTime!) -> Void in
  if let data = self.toNSData(buffer: buffer) {
     self.socket.write(data: data)
  }
}
```

Call `startAnalyzingAudio` in the `viewDidLoad` function below the WebSocket configuration.

## Handle the Deepgram Response

You will get updates from the WebSocket via its [delegate](https://www.hackingwithswift.com/example-code/language/what-is-a-delegate-in-ios). In the `ViewController.swift` file *outside* the class, create an extension for the `WebSocketDelegate` and a `DeepgramResponse` struct:

```swift
extension ViewController: WebSocketDelegate {
  func didReceive(event: WebSocketEvent, client: WebSocket) {
     switch event {
     case .text(let text):

     case .error(let error):
        print(error ?? "")
     default:
        break
     }
  }
}

struct DeepgramResponse: Codable {
  let isFinal: Bool
  let channel: Channel

  struct Channel: Codable {
     let alternatives: [Alternatives]
  }

  struct Alternatives: Codable {
     let transcript: String
  }
}
```

The `didReceive` function on the `WebSocketDelegate` will be called whenever you get an update on the WebSocket. Before you finish implementing `didReceive`, you need to prepare to decode the data and update the UI to display the transcripts. At the top of the `ViewController` class, add the following properties:

```swift
private let jsonDecoder: JSONDecoder = {
  let decoder = JSONDecoder()
  decoder.keyDecodingStrategy = .convertFromSnakeCase
  return decoder
}()

private let transcriptView: UITextView = {
  let textView = UITextView()
  textView.isScrollEnabled = true
  textView.backgroundColor = .lightGray
  textView.translatesAutoresizingMaskIntoConstraints = false
  return textView
}()
```

Create a new function called `setupView` and configure your UI:

```swift
private func setupView() {
  view.addSubview(transcriptView)
  NSLayoutConstraint.activate([
     transcriptView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
     transcriptView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
     transcriptView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),
     transcriptView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor)
  ])
}
```

Then call `setupView` in the `viewDidLoad` function.

Returning to the `didReceive` function of the `WebSocketDelegate`, within the text case; you need to convert the text, which is a `String` type, into a `Data` type so you can decode it into an instance of `DeepgramResponse`:

```swift
extension ViewController: WebSocketDelegate {
  func didReceive(event: WebSocketEvent, client: WebSocket) {
     switch event {
     case .text(let text):
        let jsonData = Data(text.utf8)
        let response = try! jsonDecoder.decode(DeepgramResponse.self, from: jsonData)
        let transcript = response.channel.alternatives.first!.transcript

        if response.isFinal && !transcript.isEmpty {
          if transcriptView.text.isEmpty {
             transcriptView.text = transcript
          } else {
             transcriptView.text = transcriptView.text + " " + transcript
          }
        }
     case .error(let error):
        print(error ?? "")
     default:
        break
     }
  }
}
```

Once you have a `DeepgramResponse` instance, you will check if it is final, meaning it is ready to add to the `transcriptView` while handling the empty scenarios. If you now build and run the project (CMD + R), it will open in the simulator, where you will be prompted to give microphone access. Then you can start transcribing!

![iPhone simulator showing the text hello blog](https://res.cloudinary.com/deepgram/image/upload/v1638827585/blog/2022/01/ios-live-transcription/simulator.png)

The final project code is available at [https://github.com/deepgram-devs/deepgram-live-transcripts-ios](https://github.com/deepgram-devs/deepgram-live-transcripts-ios), and if you have any questions, please feel free to reach out to the Deepgram team on Twitter - [@DeepgramDevs](https://twitter.com/DeepgramDevs).

        