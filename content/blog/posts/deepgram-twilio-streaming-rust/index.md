---
title: "Transcribe Twilio Voice Calls in Real-Time with Rust and Deepgram"
description: "Learn how to transcribe Twilio Voice calls with Deepgram using real-time speech-to-text in Rust."
date: 2022-06-07
cover: https://res.cloudinary.com/deepgram/image/upload/v1654025615/blog/2022/06/deepgram-twilio-streaming-rust/Transcribing-Twilio-Rust-Calls-Real-Time-w-Deepgram%402x.jpg
authors:
    - nikola-whallon
category: tutorial
tags:
    - tutorial,
    - twilio,
    - rust,
    - streaming
seo:
    title: "Transcribe Twilio Voice Calls in Real-Time with Rust and Deepgram"
    description: "Learn how to transcribe Twilio Voice calls with Deepgram using real-time speech-to-text in Rust."
shorturls:
    share: https://dpgr.am/4359fe3
    twitter: https://dpgr.am/acac658
    linkedin: https://dpgr.am/35deb9b
    reddit: https://dpgr.am/d5b1049
    facebook: https://dpgr.am/32b627a
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454095/blog/deepgram-twilio-streaming-rust/ograph.png
---

In a [previous blog post](https://developers.deepgram.com/blog/2022/04/deepgram-twilio-streaming/), we showed how to build an integration
between Deepgram and Twilio for real-time, live transcription using Python. In this post, we will revisit this integration and implement
it in Rust. The [Rust programming language](https://www.rust-lang.org/) is a favorite among Deepgram engineers, and is known for its
type safety, performance, and powerful memory management achieved via a strict ownership system which eliminates entire categories of bugs!

We will be building our Twilio streaming app using the [Axum web framework](https://docs.rs/axum/latest/axum/)
which is built on top of the powerful and popular asynchronous [Tokio crate](https://tokio.rs/). Using Rust with
an efficient asynchronous runtime like Tokio is a good choice for reliable and performant web app backends.

## Pre-requisites

You will need:

*   a [Twilio account](https://www.twilio.com/try-twilio) with a Twilio number (the free tier will work)
*   a Deepgram API Key - [get an API Key here](https://console.deepgram.com/signup)
*   [Rust installed](https://www.rust-lang.org/tools/install)
*   *(optional)* [ngrok](https://ngrok.com/) to let Twilio access a local server

## Setting Up a TwiML Bin

We will use TwiML Bins to make Twilio fork audio data from phone calls to a server that we will write.
In the Twilio Console, search for TwiML Bin, and click "Create TwiML Bin."

<img src="https://res.cloudinary.com/deepgram/image/upload/v1654025616/blog/2022/06/deepgram-twilio-streaming-rust/assets/find_twiml_bin.png" alt="Navigate to your TwiML Bins." style="max-width: 606px;display: block;margin-left: auto;margin-right: auto;">

Give the TwiML Bin a "Friendly Name" and enter the following as the the contents of the TwiML Bin:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Start>
    <Stream url="wss://INSERT_YOUR_SERVER_URL/twilio" track="both_tracks"/>
  </Start>
  <Say voice="woman" language="en">"This call may be monitored or recorded for quality purposes."</Say>
  <Dial>+11231231234</Dial>
</Response>
```

In the `Dial` section, enter your phone number. Where it says `INSERT_YOUR_SERVER_URL` insert the URL where you will be hosting the server.
Without having to spin up and configure a cloud instance, you can use `ngrok` to expose a port on localhost. To do this for, say,
port 5000, run:

    ngrok http 5000

`ngrok` will then generate a public URL which forwards requests to your computer at `localhost:5000`. This URL may look something like:
`c52e-71-212-124-133.ngrok.io` - enter this URL in your TwiML Bin.

Now the last thing to do on the Twilio Console before hopping over to write our server code is to hook up one of your Twilio numbers to this TwiML Bin.
Go to the "Develop" tab on the left side of the Twilio Console, navigate to `Phone Numbers -> Manage -> Active numbers`, and click on your Twilio number in the list.
Then, under the field "A Call Comes In", click the drop-down and select "TwiML Bin"; for the field directly next to this one, click the drop-down and select
the TwiML Bin you just created.
Click "Save" at the bottom of the Twilio Console.

## The Twilio Proxy Server

The system that we will be building is illustrated here:

<img src="https://res.cloudinary.com/deepgram/image/upload/v1654025618/blog/2022/06/deepgram-twilio-streaming-rust/assets/deepgram_twilio_diagram.png" alt="The big picture." style="max-width: 2096px;display: block;margin-left: auto;margin-right: auto;">

We want audio from phone calls going through Twilio's server to be forked to the proxy server we will be writing. The proxy server then buffers
and processes the audio, sends it to Deepgram, and receives transcripts back from Deepgram. The proxy server also accepts client connections which
subscribe to ongoing calls, and whenever the server receives transcripts from Deepgram for those calls, it broadcasts those transcripts to all subscribers.
This will all be done via WebSockets at near-real-time! Typical latencies for this system hover around 500 ms.

Download the code from [this repository](https://github.com/deepgram-devs/deepgram-twilio-streaming-rust).

Below we will go through creating this project from scratch, but this will also act as a comprehensive code-tour of the repository.
If you are keen on trying the server out right away and perusing the code
more at your leisure, feel free to skip to the [Running the Server and Testing with websocat](#running-the-server-and-testing-with-websocat) section!

## Setup the Rust Project and `main.rs`

Create a new Rust project using `cargo new`:

    cargo new deepgram-twilio-streaming-rust

Go into the project directory and edit the `Cargo.toml` file, giving it the following contents:

    [package]
    name = "deepgram-twilio-streaming-rust"
    version = "0.1.0"
    edition = "2021"

    [dependencies]
    axum = { version = "0.5.1", features = ["ws"] }
    axum-server = { version = "0.4.0", features = ["tls-rustls"] }
    base64 = "0.13.0"
    futures = "0.3.21"
    http = "0.2.6"
    serde = { version = "1.0.136", features = ["derive"] }
    serde_json = "1.0.79"
    tokio = { version = "1.17.0", features = ["macros", "rt", "rt-multi-thread"] }
    tokio-tungstenite = { version = "0.15.0", features = ["native-tls"] }
    tungstenite = "0.14.0"

Now let's modify `src/main.rs`. Let's begin by adding the `use` statements we will need, and defining some modules:

    use axum::{routing::get, Extension, Router};
    use axum_server::tls_rustls::RustlsConfig;
    use futures::lock::Mutex;
    use std::{collections::HashMap, sync::Arc};

    mod audio;
    mod handlers;
    mod message;
    mod state;
    mod twilio_response;

The modules we declared are: `audio`, `handlers`, `message`, `state`, and `twilio_response`.
We will go over each one, but briefly these will be for the following:

*   `audio`: handle processing of audio data from Twilio
*   `handlers`: handlers for the websocket endpoints `/twilio` and `/client`
*   `message`: a helper module to convert between `axum` and `tungstenite` websocket messages
*   `state`: will contain the definition for the global state of the server
*   `twilio_response`: will contain definitions for Twilio's websocket message shape

Now, let's start defining our `main` function and set up the state to be shared among the handlers:

    #[tokio::main]
    async fn main() {
        let proxy_url = std::env::var("PROXY_URL").unwrap_or_else(|_| "127.0.0.1:5000".to_string());

        let deepgram_url = std::env::var("DEEPGRAM_URL")
            .unwrap_or_else(|_| "wss://api.deepgram.com/v1/listen?encoding=mulaw&sample_rate=8000&channels=2&multichannel=true".to_string());

        let api_key =
            std::env::var("DEEPGRAM_API_KEY").expect("Using this server requires a Deepgram API Key.");

        let cert_pem = std::env::var("CERT_PEM").ok();
        let key_pem = std::env::var("KEY_PEM").ok();

        let config = match (cert_pem, key_pem) {
            (Some(cert_pem), Some(key_pem)) => Some(
                RustlsConfig::from_pem_file(cert_pem, key_pem)
                    .await
                    .expect("Failed to make RustlsConfig from cert/key pem files."),
            ),
            (None, None) => None,
            _ => {
                panic!("Failed to start - invalid cert/key.")
            }
        };

        let state = Arc::new(state::State {
            deepgram_url,
            api_key,
            subscribers: Mutex::new(HashMap::new()),
        });

Our `main` function is set up to be asynchronous via the use of the `#[tokio::main]` macro.
`main` and every async function that `main` then calls will be executed by
the Tokio runtime. Inside `main` we grab the following environment variables:

*   `PROXY_URL`: the URL that this server will run on - by default it will use localhost and port 5000
*   `DEEPGRAM_URL`: the URL of Deepgram's streaming endpoint, including query parameters (Twilio audio uses the `mulaw` encoding with
    a sample rate of 8000, and we will be streaming stereo (2 channel) audio)
*   `DEEPGRAM_API_KEY`: your Deepgram API Key
*   `CERT_PEM`: an optional environment variable pointing to a `cert.pem` file used for TLS
*   `KEY_PEM`: an optional environment variable pointing to a `key.pem` file used for TLS

We use these environment variables to construct an `Arc<State>` object to store the global server state.

Now, let's finish filling in our `main` function by configuring our routes and spinning up the `axum` server
to serve these routes:

        let app = Router::new()
            .route("/twilio", get(handlers::twilio::twilio_handler))
            .route("/client", get(handlers::subscriber::subscriber_handler))
            .layer(Extension(state));

        match config {
            Some(config) => {
                axum_server::bind_rustls(proxy_url.parse().unwrap(), config)
                    .serve(app.into_make_service())
                    .await
                    .unwrap();
            }
            None => {
                axum_server::bind(proxy_url.parse().unwrap())
                    .serve(app.into_make_service())
                    .await
                    .unwrap();
            }
        }
    }

The `axum` server is spun up with or without TLS support depending on whether
or not the `CERT_PEM` and `KEY_PEM` environment variables are set.

That's all there is to `main.rs`! The bulk of the application logic will live in the websocket endpoint handlers, but before diving into them
let's go over some of the objects the server will use.

## `state.rs`, `twilio_response.rs`, and `message.rs`

Create the file `src/state.rs` and give it the following contents:

    use axum::extract::ws::WebSocket;
    use futures::lock::Mutex;
    use std::collections::HashMap;

    pub struct State {
        pub deepgram_url: String,
        pub api_key: String,
        pub subscribers: Mutex<HashMap<String, Vec<WebSocket>>>,
    }

This will represent the global state of the server. The server will need to know the URL of Deepgram's streaming endpoint
and a Deepgram API Key to use as authentication when connecting to this endpoint. Additionally, the server will contain
a `HashMap` of websocket handlers for subscribers, one for each incoming connection from Twilio. These websocket handlers will be accessed
via the `callsid` of the Twilio call, and wrapped in a `Mutex` to handle concurrency.

Next, create the file `src/twilio_response.rs` and give it the following contents:

    //! Definitions for the Twilio messages we need to parse

    use serde::{Deserialize, Serialize};

    #[derive(Serialize, Deserialize, Default, Debug)]
    #[serde(rename_all = "camelCase")]
    pub struct Event {
        pub event: String,
        pub sequence_number: String,
        #[serde(flatten)]
        pub event_type: EventType,
        pub stream_sid: String,
    }

    #[derive(Serialize, Deserialize, Debug)]
    #[serde(rename_all = "camelCase")]
    pub enum EventType {
        Start(EventStart),
        Media(EventMedia),
    }

    impl Default for EventType {
        fn default() -> Self {
            EventType::Media(Default::default())
        }
    }

    #[derive(Serialize, Deserialize, Default, Debug)]
    #[serde(rename_all = "camelCase")]
    pub struct EventStart {
        pub account_sid: String,
        pub stream_sid: String,
        pub call_sid: String,
        pub tracks: Vec<String>,
        pub media_format: MediaFormat,
    }

    #[derive(Serialize, Deserialize, Default, Debug)]
    #[serde(rename_all = "camelCase")]
    pub struct MediaFormat {
        pub encoding: String,
        pub sample_rate: u32,
        pub channels: u32,
    }

    #[derive(Serialize, Deserialize, Default, Debug)]
    pub struct EventMedia {
        pub track: String,
        pub chunk: String,
        pub timestamp: String,
        pub payload: String,
    }

These are just basic structs defining the shape of the messages Twilio will send our server. Feel free to checkout
[Twilio's documentation](https://www.twilio.com/docs/voice/twiml/stream#websocket-messages-from-twilio) for more details.

Finally, create the file `src/message.rs` and give it the following contents:

    #[derive(Clone)]
    pub enum Message {
        Text(String),
        Binary(Vec<u8>),
        Ping(Vec<u8>),
        Pong(Vec<u8>),
        Close(Option<tungstenite::protocol::CloseFrame<'static>>),
    }

    impl From<axum::extract::ws::Message> for Message {
        fn from(item: axum::extract::ws::Message) -> Self {
            match item {
                axum::extract::ws::Message::Text(text) => Message::Text(text),
                axum::extract::ws::Message::Binary(binary) => Message::Binary(binary),
                axum::extract::ws::Message::Ping(ping) => Message::Ping(ping),
                axum::extract::ws::Message::Pong(pong) => Message::Pong(pong),
                // will deal with this later
                axum::extract::ws::Message::Close(_) => Message::Close(None),
            }
        }
    }

    impl From<tokio_tungstenite::tungstenite::Message> for Message {
        fn from(item: tokio_tungstenite::tungstenite::Message) -> Self {
            match item {
                tokio_tungstenite::tungstenite::Message::Text(text) => Message::Text(text),
                tokio_tungstenite::tungstenite::Message::Binary(binary) => Message::Binary(binary),
                tokio_tungstenite::tungstenite::Message::Ping(ping) => Message::Ping(ping),
                tokio_tungstenite::tungstenite::Message::Pong(pong) => Message::Pong(pong),
                // will deal with this later
                tokio_tungstenite::tungstenite::Message::Close(_) => Message::Close(None),
            }
        }
    }

    impl From<Message> for axum::extract::ws::Message {
        fn from(item: Message) -> axum::extract::ws::Message {
            match item {
                Message::Text(text) => axum::extract::ws::Message::Text(text),
                Message::Binary(binary) => axum::extract::ws::Message::Binary(binary),
                Message::Ping(ping) => axum::extract::ws::Message::Ping(ping),
                Message::Pong(pong) => axum::extract::ws::Message::Pong(pong),
                // will deal with this later
                Message::Close(_) => axum::extract::ws::Message::Close(None),
            }
        }
    }

    impl From<Message> for tokio_tungstenite::tungstenite::Message {
        fn from(item: Message) -> tokio_tungstenite::tungstenite::Message {
            match item {
                Message::Text(text) => tokio_tungstenite::tungstenite::Message::Text(text),
                Message::Binary(binary) => tokio_tungstenite::tungstenite::Message::Binary(binary),
                Message::Ping(ping) => tokio_tungstenite::tungstenite::Message::Ping(ping),
                Message::Pong(pong) => tokio_tungstenite::tungstenite::Message::Pong(pong),
                // will deal with this later
                Message::Close(_) => tokio_tungstenite::tungstenite::Message::Close(None),
            }
        }
    }

This is also a straightforward module which creates our own websocket `Message` type which can
be used to convert to and from `axum` websocket messages and `tungstenite` websocket messages.

## The WebSocket Endpoint Handlers

Now let's get into the core logic of the server. We need to define functions to handle client/subscriber
connections to `/client` and Twilio connections to `/twilio`. Let's start with the client handler.

Start by creating `src/handlers/mod.rs` with the following contents:

    pub mod subscriber;
    pub mod twilio;

This simply declares the modules we will use to handle the client/subsriber and Twilio websocket connections.

Then, create the file `src/handlers/subscriber.rs` with the following contents:

    use crate::message::Message;
    use crate::state::State;
    use axum::{
        extract::ws::{WebSocket, WebSocketUpgrade},
        response::IntoResponse,
        Extension,
    };
    use std::sync::Arc;

    pub async fn subscriber_handler(
        ws: WebSocketUpgrade,
        Extension(state): Extension<Arc<State>>,
    ) -> impl IntoResponse {
        ws.on_upgrade(|socket| handle_socket(socket, state))
    }

    async fn handle_socket(mut socket: WebSocket, state: Arc<State>) {
        let mut subscribers = state.subscribers.lock().await;
        // send these keys (which will be twilio callsids) to the client
        let keys = subscribers.keys().map(|key| key.to_string()).collect();
        socket
            .send(Message::Text(keys).into())
            .await
            .expect("Failed to send callsids to client.");

        // wait for the first message from the client
        // and interpret it as the callsid to subscribe to
        if let Some(Ok(msg)) = socket.recv().await {
            let msg = Message::from(msg);
            if let Message::Text(callsid) = msg {
                let callsid = callsid.trim();
                if let Some(subscribers) = subscribers.get_mut(callsid) {
                    subscribers.push(socket);
                }
            }
        }
    }

As we saw in `main.rs`, `subscriber_handler` is the function which will be called when a client tries to connect to the
`/client` endpoint of our server. From there, we perform an upgrade from HTTP to websockets. Then, we try to obtain the
subscribers `HashMap` from our server's global state and send to the client a list of the `callsid`s of all ongoing
Twilio calls that the server is handling. The server then waits for a single message back from the client, and it interprets
this message as the `callsid` to subscribe to. If the server receives a valid `callsid`, it will push the websocket handle
into the subscribers `HashMap`. When the Twilio handler receives a transcript for that `callsid`, it will broadcast it to all
subscribers, including the one we just pushed. That's it for `subscriber.rs`!

Now let's look at the bulkier `twilio.rs`. Create `src/handlers/twilio.rs`. Let's build this module
piece by piece, starting with some `use` statements:

    use crate::audio;
    use crate::message::Message;
    use crate::state::State;
    use crate::twilio_response;
    use axum::{
        extract::ws::{WebSocket, WebSocketUpgrade},
        response::IntoResponse,
        Extension,
    };
    use futures::channel::oneshot;
    use futures::{
        sink::SinkExt,
        stream::{SplitSink, SplitStream, StreamExt},
    };
    use std::{convert::From, sync::Arc};
    use tokio::net::TcpStream;
    use tokio_tungstenite::{connect_async, MaybeTlsStream, WebSocketStream};

Then, add the following functions:

    pub async fn twilio_handler(
        ws: WebSocketUpgrade,
        Extension(state): Extension<Arc<State>>,
    ) -> impl IntoResponse {
        ws.on_upgrade(|socket| handle_socket(socket, state))
    }

    async fn handle_socket(socket: WebSocket, state: Arc<State>) {
        let (_this_sender, this_receiver) = socket.split();

        // prepare the connection request with the api key authentication
        let builder = http::Request::builder()
            .method(http::Method::GET)
            .uri(&state.deepgram_url);
        let builder = builder.header("Authorization", format!("Token {}", state.api_key));
        let request = builder
            .body(())
            .expect("Failed to build a connection request to Deepgram.");

        // connect to deepgram
        let (deepgram_socket, _) = connect_async(request)
            .await
            .expect("Failed to connect to Deepgram.");
        let (deepgram_sender, deepgram_reader) = deepgram_socket.split();

        let (callsid_tx, callsid_rx) = oneshot::channel::<String>();

        tokio::spawn(handle_to_subscribers(
            Arc::clone(&state),
            callsid_rx,
            deepgram_reader,
        ));
        tokio::spawn(handle_from_twilio(
            Arc::clone(&state),
            callsid_tx,
            this_receiver,
            deepgram_sender,
        ));
    }

Incoming Twilio connections hitting `/twilio` will be first directed to the function
`twilio_handler` where the websocket upgrade will be performed. Then `handle_socket` will split the websocket connection
into a receiver and a sender, open up an entirely new websocket connection to Deepgram, split the Deepgram websocket
connection into a receiver and a sender, and spawn tasks which call the functions `handle_to_subscribers` and
`handle_from_twilio` which take these receivers and senders as arguments. A oneshot channel is also set up so that
`handle_from_twilio` can send the `callsid` of the Twilio call to `handle_to_subscribers` in a thread-safe manner -
the `callsid` is not yet known when these initial websocket connections are established, it only becomes available
when Twilio sends this information in a Twilio `start` event websocket message.

Let's now define the `handle_to_subscribers` function:

    async fn handle_to_subscribers(
        state: Arc<State>,
        callsid_rx: oneshot::Receiver<String>,
        mut deepgram_receiver: SplitStream<WebSocketStream<MaybeTlsStream<TcpStream>>>,
    ) {
        let callsid = callsid_rx
            .await
            .expect("Failed to receive callsid from handle_from_twilio.");

        while let Some(Ok(msg)) = deepgram_receiver.next().await {
            let mut subscribers = state.subscribers.lock().await;
            if let Some(subscribers) = subscribers.get_mut(&callsid) {
                // send the message to all subscribers concurrently
                let futs = subscribers
                    .iter_mut()
                    .map(|subscriber| subscriber.send(Message::from(msg.clone()).into()));
                let results = futures::future::join_all(futs).await;

                // if we successfully sent a message then the subscriber is still connected
                // other subscribers should be removed
                *subscribers = subscribers
                    .drain(..)
                    .zip(results)
                    .filter_map(|(subscriber, result)| result.is_ok().then(|| subscriber))
                    .collect();
            }
        }
    }

This function first waits to receive the `callsid`
from `handle_from_twilio` and then proceeds to read messages off the Deepgram websocket receiver, broadcasting all
messages that it obtains to all subscribers to that `callsid`.

Now let's define `handle_from_twilio` as follows:

    async fn handle_from_twilio(
        state: Arc<State>,
        callsid_tx: oneshot::Sender<String>,
        mut this_receiver: SplitStream<WebSocket>,
        mut deepgram_sender: SplitSink<
            WebSocketStream<MaybeTlsStream<TcpStream>>,
            tokio_tungstenite::tungstenite::Message,
        >,
    ) {
        let mut buffer_data = audio::BufferData {
            inbound_buffer: Vec::new(),
            outbound_buffer: Vec::new(),
            inbound_last_timestamp: 0,
            outbound_last_timestamp: 0,
        };

        // wrap our oneshot in an Option because we will need it in a loop
        let mut callsid_tx = Some(callsid_tx);
        let mut callsid: Option<String> = None;

        while let Some(Ok(msg)) = this_receiver.next().await {
            let msg = Message::from(msg);
            if let Message::Text(msg) = msg {
                let event: Result<twilio_response::Event, _> = serde_json::from_str(&msg);
                if let Ok(event) = event {
                    match event.event_type {
                        twilio_response::EventType::Start(start) => {
                            // the "start" event only happens once, so having our oneshot in here is kosher
                            callsid = Some(start.call_sid.clone());

                            // sending this callsid on our oneshot will let `handle_to_subscribers` know the callsid
                            if let Some(callsid_tx) = callsid_tx.take() {
                                callsid_tx
                                    .send(start.call_sid.clone())
                                    .expect("Failed to send callsid to handle_to_subscribers.");
                            }

                            // make a new set of subscribers for this call, using the callsid as the key
                            state
                                .subscribers
                                .lock()
                                .await
                                .entry(start.call_sid)
                                .or_default();
                        }
                        twilio_response::EventType::Media(media) => {
                            if let Some(mixed) = audio::process_twilio_media(media, &mut buffer_data) {
                                // send the audio on to deepgram
                                if deepgram_sender
                                    .send(Message::Binary(mixed).into())
                                    .await
                                    .is_err()
                                {
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }

        // close and remove the subscribers, if we have a callsid
        if let Some(callsid) = callsid {
            let mut subscribers = state.subscribers.lock().await;
            if let Some(subscribers) = subscribers.remove(&callsid) {
                for mut subscriber in subscribers {
                    // we don't really care if this succeeds or fails as we are closing/dropping these
                    let _ = subscriber.send(Message::Close(None).into()).await;
                }
            }
        }
    }

This function begins by setting up an object to help handle the audio buffers
from the inbound and outbound callers. We then start reading websocket messages from the Twilio websocket receiver.
When we obtain the Twilio `start` event message, we can grab the `callsid`, use it to set up subscribers
to this call, and send it off to the `handle_to_subscribers` task via the oneshot channel we set up earlier. Subsequent
Twilio media events are then processed via `audio::process_twilio_media`, and when a buffer of mixed stereo audio is
ready, we send it to Deepgram via the Deepgram websocket sender.

Finally, when Twilio closes the connection to our server (or some error occurs), we must remember to remove all subscribers
from the subscriber `HashMap` and close the connections to those subscribers.

## Processing the Audio in `audio.rs`

When discussing the Twilio websocket handler, the processing of Twilio media events was delegated to `audio::process_twilio_media`.
We will define this function in `src/audio.rs`. Make `src/audio.rs` with the following contents:

    use crate::twilio_response;

    const MULAW_SILENCE: u8 = 0xff;
    const MULAW_BYTES_PER_MS: usize = 8;
    const TWILIO_MS_PER_CHUNK: usize = 20;
    const MIN_TWILIO_CHUNKS_TO_MIX: usize = 20;

    pub struct BufferData {
        pub inbound_buffer: Vec<u8>,
        pub outbound_buffer: Vec<u8>,
        pub inbound_last_timestamp: u32,
        pub outbound_last_timestamp: u32,
    }

    fn pad_with_silence(buffer: &mut Vec<u8>, current_timestamp: u32, previous_timestamp: u32) {
        let time_lost = if current_timestamp < previous_timestamp + TWILIO_MS_PER_CHUNK as u32 {
            // here we have received a timestamp that is less than TWILIO_MS_PER_CHUNK = 20 ms ahead of the previous timestamp
            // this occasionally occurs and is unexpected behavior from Twilio
            0
        } else {
            current_timestamp - (previous_timestamp + TWILIO_MS_PER_CHUNK as u32)
        };
        let silence = std::iter::repeat(MULAW_SILENCE).take(MULAW_BYTES_PER_MS * time_lost as usize);
        buffer.extend(silence);
    }

    /// (1) decodes twilio media events
    /// (2) pads inbound and outbound buffers with silence if needed
    /// (3) if there is more than MIN_TWILIO_CHUNKS_TO_MIX * TWILIO_MS_PER_CHUNK = 400 ms
    ///     of audio in both inbound and outbound audio buffers, drains as much audio from
    ///     both buffers as can be mixed together, mixes and returns this audio
    pub fn process_twilio_media(
        media: twilio_response::EventMedia,
        mut buffer_data: &mut BufferData,
    ) -> Option<Vec<u8>> {
        // NOTE: when Twilio sends media data, it should send TWILIO_MS_PER_CHUNK = 20 ms audio chunks
        // at a time, where each ms of audio is MULAW_BYTES_PER_MS = 8 bytes
        let media_chunk = base64::decode(media.payload).unwrap();
        let media_chunk_size = media_chunk.len();
        if media_chunk_size != TWILIO_MS_PER_CHUNK * MULAW_BYTES_PER_MS {
            // here, the Twilio media chunk size is not the expected size of TWILIO_MS_PER_CHUNK * MULAW_BYTES_PER_MS bytes
            // this occasionally occurs and is unexpected behavior from Twilio
        }
        // NOTE: There are rare cases where the timestamp is less than TWILIO_MS_PER_CHUNK = 20 ms ahead of the previous chunk
        let timestamp = media.timestamp.parse::<u32>().unwrap();

        // pad the inbound or outbound buffer with silence if needed depending on timestamp info
        // and then add the audio data from the twilio media message to the buffer
        if media.track == "inbound" {
            pad_with_silence(
                &mut buffer_data.inbound_buffer,
                timestamp,
                buffer_data.inbound_last_timestamp,
            );
            buffer_data.inbound_buffer.extend(media_chunk);
            buffer_data.inbound_last_timestamp = timestamp;
        } else if media.track == "outbound" {
            pad_with_silence(
                &mut buffer_data.outbound_buffer,
                timestamp,
                buffer_data.outbound_last_timestamp,
            );
            buffer_data.outbound_buffer.extend(media_chunk);
            buffer_data.outbound_last_timestamp = timestamp;
        }

        // we will return mixed audio of MIN_TWILIO_CHUNKS_TO_MIX * TWILIO_MS_PER_CHUNK = 400 ms (or more)
        // corresponding to MIN_TWILIO_CHUNKS_TO_MIX = 20 twilio media messages (or more)
        let minimum_chunk_size = MIN_TWILIO_CHUNKS_TO_MIX * TWILIO_MS_PER_CHUNK * MULAW_BYTES_PER_MS;
        let mixable_data_size = std::cmp::min(
            buffer_data.inbound_buffer.len(),
            buffer_data.outbound_buffer.len(),
        );
        if mixable_data_size >= minimum_chunk_size {
            let mut mixed = Vec::with_capacity(mixable_data_size * 2);
            let inbound_buffer_segment = buffer_data.inbound_buffer.drain(0..mixable_data_size);
            let outbound_buffer_segment = buffer_data.outbound_buffer.drain(0..mixable_data_size);

            for (inbound, outbound) in inbound_buffer_segment.zip(outbound_buffer_segment) {
                mixed.push(inbound);
                mixed.push(outbound);
            }
            Some(mixed)
        } else {
            None
        }
    }

Twilio sends its audio data as 8000 Hz `mulaw` data, independently for inbound and outbound callers. Additionally, sometimes Twilio
(or the phones which use Twilio) will drop packets of audio. The function `process_twilio_media`, then, handles inserting silence
should there be dropped packets or timing issues, and mixes together the inbound and outbound audio into a valid stereo audio stream
which we can then send to Deepgram. Several of the finer details are explained in the comments in this file.

## Running the Server and Testing with websocat

Let's use websocat to quickly test our server.

Run the server with the following:

    DEEPGRAM_API_KEY=INSERT_YOUR_DEEPGRAM_API_KEY cargo run

replacing `INSERT_YOUR_DEEPGRAM_API_KEY` with your Deepgram API Key.

This server will need to be accessible to Twilio, and this is set up in the TwiML Bin you created
in the previous [Setting Up a TwiML Bin](#setting-up-a-twiml-bin) section. If you are using `ngrok`, make sure your TwiML Bin
is updated with the current `ngrok` URL.

Now, call your Twilio number with one phone, and answer the call on the phone your Twilio number forwards to.
Then, latch onto the proxy server via the client endpoint with websocat:

    websocat ws://localhost:5000/client

Websocat should immediately send you a message containing a list of the `callsid`s of all active calls (which in this case should be one).
Reply to the message with the `callsid` by copy/pasting and hitting enter:

<img src="https://res.cloudinary.com/deepgram/image/upload/v1654132200/blog/2022/06/deepgram-twilio-streaming-rust/assets/connect_to_callsid.png" alt="Subscribe to the call via the `callsid`." style="max-width: 1326px;display: block;margin-left: auto;margin-right: auto;">

You should start to see transcription results appear in your websocat session in real time:

<img src="https://res.cloudinary.com/deepgram/image/upload/v1654132200/blog/2022/06/deepgram-twilio-streaming-rust/assets/websocat_streaming_asr_results.png" alt="Websocat streaming ASR results." style="max-width: 1326px;display: block;margin-left: auto;margin-right: auto;">

Feel free to try setting up multiple Twilio numbers, and multiple client sessions!

## Making a Docker Image for the Server

Let's go through the process of building a Docker image so that this server can be portably deployed. We'll start by making a `rust-toolchain` file with the following contents:

    1.61

(quite the simple file!). This will ensure that when you run `cargo build` (either manually, or as part of building a Docker image), the same version of Rust will be used
every time.

Now, let's create a Dockerfile called `Dockerfile` and give it the following contents:

    FROM ubuntu:22.04 as builder

    LABEL maintainer="YOUR_INFO"

    ENV DEBIAN_FRONTEND=noninteractive

    RUN apt-get update && \
        apt-get install -y --no-install-recommends \
            ca-certificates \
            clang \
            curl \
            libpq-dev \
            libssl-dev \
            pkg-config

    COPY rust-toolchain /rust-toolchain
    RUN curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain $(cat /rust-toolchain) && \
        . $HOME/.cargo/env

    COPY . /deepgram-twilio-streaming-rust

    RUN . $HOME/.cargo/env && \
        cargo install --path /deepgram-twilio-streaming-rust --root /

    FROM ubuntu:22.04

    LABEL maintainer="YOUR_INFO"

    ENV DEBIAN_FRONTEND=noninteractive

    RUN apt-get update && \
        apt-get install -y --no-install-recommends \
            ca-certificates \
            libpq5 \
            libssl3 && \
        apt-get clean

    COPY --from=builder /bin/deepgram-twilio-streaming-rust /bin/deepgram-twilio-streaming-rust

    ENTRYPOINT ["/bin/deepgram-twilio-streaming-rust"]
    CMD [""]

Replace `YOUR_INFO` with your name and email address (for me, for example, this would be `Nikola Whallon <nikola@deepgram.com>`).
The key bits to take away are:

*   we start with an Ubuntu 22.04 image
*   we install several dependencies via `apt`
*   we use the `rust-toolchain` and build+install our executable with `cargo install`
*   we set the `ENTRYPOINT` to `/bin/deepgram-twilio-streaming-rust`, with no command-line arguments (`CMD`)

Now with the Dockerfile written, build the Docker image with:

    docker build -t your-docker-hub-account/deepgram-twilio-streaming-rust:0.1.0 -f Dockerfile .

If you will be pushing this image to Docker Hub so that the image can be pulled from a remote server (like an AWS instance),
replace `your-docker-hub-account` with your Docker Hub account. For local testing, simply using the image name `deepgram-twilio-streaming-rust:0.1.0`
(or whatever you would like) will work. You are also free to pull and use `deepgram/deepgram-twilio-treaming-rust:0.1.0`!

Now you can run the Docker image in a container locally via:

    docker run -e PROXY_URL=0.0.0.0:5000 -e DEEPGRAM_API_KEY=INSERT_YOUR_DEEPGRAM_API_KEY \
        -p 5000:5000 your-docker-hub-account/deepgram-twilio-streaming-rust:0.1.0

replacing `INSERT_YOUR_DEEPGRAM_API_KEY` with your Deepgram API Key, and make sure the Docker image name matches what you built. This will
run the image in a container in your current terminal, but you can include a `-d` to detach the process to run in the background. If you do this,
you will need to keep track of whether or not it is running with `docker ps` and similar commands.
Refer to the [Docker CLI documentation](https://docs.docker.com/engine/reference/commandline/cli/) for more info.

Now that the Twilio proxy server should be running in a Docker container, feel free to give your Twilio number a call, and subscribe to the call
with websocat by doing:

    websocat ws://localhost:5000/client

and replying to the server with the `callsid` it sends you.

You should be all set to push this Docker image to your Docker Hub (or use ours: `deepgram/deepgram-twilio-treaming-rust:0.1.0`), and pull
and use it on your cloud server! You will need to provide the additional environment variables `CERT_PEM` and `KEY_PEM` to do this, making
sure those files are accessible to the Docker continer by using `-v`, and you may need to specify
the port as `443` in the `PROXY_URL` and use `-p 443:443` among other subtle changes.
You should refer to your cloud server provider's documentation on setting up an https/wss enabled server with certificates. As an example,
here's how I spun up the server app on an AWS Ubuntu 20.04 instance:

    docker run -v /home/ubuntu:/foo -p 443:443 -d \
        -e PROXY_URL=0.0.0.0:443 -e DEEPGRAM_API_KEY=INSERT_YOUR_DEEPGRAM_API_KEY \
        -e CERT_PEM=/foo/cert.pem -e KEY_PEM=/foo/key.pem \
        deepgram/deepgram-twilio-streaming-rust:0.1.0

## Further Development

This should get you up and running with an almost-production-ready Twilio-Deepgram proxy server, written in Rust. There are a few pieces
that have been left out, for the sake of brevity and for the sake of being agnostic to the needs of your desired system. For example, calls to the
`/client` endpoint are currently entirely unauthenticated, and indeed calls to `/twilio` are also unauthenticated (see
[these Twilio docs](https://www.twilio.com/docs/usage/security) for more details). For a fully-production-ready service, you should
take authentication into consideration. Also, no logging or telemetry is presented in the proxy server.

Finally, you will very likely need to build a front-end to interact with the server and properly parse the JSON messages being streamed.
websocat is great for testing, but is not a reasonable final solution for subscribing to calls!

If you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).

