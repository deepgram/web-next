const openapi = "3.0.3";
const servers = [
	{
		description: "Deepgram Brain - Transcription",
		url: "https://brain.deepgram.com/v2"
	}
];
const info = {
	description: "Deepgram's Speech Recognition API gives you streamlined access to automatic transcription from Deepgram's off-the-shelf\nand trained speech recognition models. This feature is very fast, can understand nearly every audio format available,\nand is customizable. You can customize your transcript using various query parameters and apply general purpose and\ncustom-trained AI models.\n",
	version: "1.0.0",
	title: "Speech Recognition API",
	contact: {
		name: "Product Team",
		email: "product@deepgram.com"
	},
	license: {
		name: "Apache 2.0",
		url: "http://www.apache.org/licenses/LICENSE-2.0.html"
	}
};
const tags = [
	{
		name: "Transcription",
		description: "High-speed transcription of audio."
	},
	{
		name: "API Keys",
		description: "Generate API keys."
	}
];
const security = [
	{
		Basic: [
		]
	}
];
const paths = {
	"/listen": {
		post: {
			tags: [
				"Transcription"
			],
			summary: "Transcribe pre-recorded audio",
			operationId: "transcribeAudio",
			description: "Transcribes the specified audio file.",
			parameters: [
				{
					name: "model",
					"in": "query",
					description: "AI model used to process submitted audio.\n\nOff-the-shelf Deepgram models include:\n* `general`: Optimized for everyday audio processing; if you aren't sure which model to select, start here.\n* `meeting`: Optimized for conference room settings, which include multiple speakers with a single microphone.\n* `phonecall`: Optimized for low-bandwidth audio phone calls.\n* `conversationalai`: Optimized to allow artificial intelligence technologies, such as chatbots, to interact with people in a human-like way.\n\nYou may also use a custom model associated with your account by including its `custom_id`.\n",
					schema: {
						type: "string",
						"default": "general",
						"enum": [
							"general",
							"phonecall",
							"meeting",
							"conversationalai",
							"<custom-id>"
						]
					},
					examples: {
						"Use a standard model": {
							value: "model=general",
							description: "Off-the shelf Deepgram models include `general`, `phonecall`, and `meeting`. If you aren't sure which model to select, start with `general`."
						},
						"Use a custom model": {
							value: "model=aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
							description: "To use a custom model associated with your account, include its `custom_id`."
						},
						"Use a single model for all channels": {
							value: "model=meeting",
							description: "If you specify a single model, then that model is applied to all channels when the `multichannel` parameter is set to `true`."
						},
						"Use different models for different channels": {
							value: "model=general:phonecall",
							description: "You can specify that Deepgram apply different models to separate audio channels when the `multichannel` parameter is set to `true`. In this example, Deepgram applies the `general` model to channel 0 and the `phonecall` model to channel 1."
						}
					}
				},
				{
					name: "language",
					"in": "query",
					description: "[BCP-47](https://tools.ietf.org/html/bcp47) language tag that hints at the primary spoken language.\nLanguage support is optimized for the following language/model combinations:\n\n<table className=\"internal\">\n  <thead>\n        <tr>\n            <th scope=\"col\" id=\"lang\">Language</th>\n            <th scope=\"col\" id=\"reg\">Region</th>\n            <th scope=\"col\" id=\"mod\">Model(s)</th>\n        </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <td headers=\"lang\">English</td>\n        <td headers=\"reg\"><code>en-GB</code></td>\n        <td headers=\"mod\"><code>general</code><code>phonecall</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\"></td>\n        <td headers=\"reg\"><code>en-IN</code></td>\n        <td headers=\"mod\"><code>general</code><code>phonecall</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\"></td>\n        <td headers=\"reg\"><code>en-NZ</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\"></td>\n        <td headers=\"reg\"><code>en-US</code></td>\n        <td headers=\"mod\"><code>general</code><code>meeting</code><code>phonecall</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">French</td>\n        <td headers=\"reg\"><code>fr</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Hindi</td>\n        <td headers=\"reg\"><code>hi</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Korean<br/></td>\n        <td headers=\"reg\"><code>ko</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Portuguese</td>\n        <td headers=\"reg\"><code>pt</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\"></td>\n        <td headers=\"reg\"><code>pt-BR</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Russian<br/><em></em></td>\n        <td headers=\"reg\"><code>ru</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Spanish<br/></td>\n        <td headers=\"reg\"><code>es</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Turkish<br/></td>\n        <td headers=\"reg\"><code>tr</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    </tbody>\n</table>\n",
					schema: {
						type: "string",
						nullable: true,
						"default": "en-US",
						"enum": [
							"en-GB",
							"en-IN",
							"en-NZ",
							"en-US",
							"es",
							"fr",
							"hi",
							"ko",
							"pt",
							"pt-BR",
							"ru",
							"tr",
							"null"
						]
					},
					examples: {
						"Use a single language": {
							value: "language=es"
						}
					}
				},
				{
					name: "punctuate",
					"in": "query",
					description: "Indicates whether to add punctuation and capitalization to the transcript.",
					schema: {
						type: "boolean",
						"default": false
					},
					examples: {
						"Do not add punctuation": {
							value: "punctuate=false"
						},
						"Add punctuation": {
							value: "punctuate=true"
						}
					}
				},
				{
					name: "profanity_filter",
					"in": "query",
					description: "Indicates whether to remove profanity from the transcript.",
					schema: {
						type: "boolean",
						"default": false
					},
					examples: {
						"Do not remove profanity": {
							value: "profanity_filter=false"
						},
						"Remove profanity": {
							value: "profanity_filter=true"
						}
					}
				},
				{
					name: "redact",
					"in": "query",
					description: "Indicates whether to redact sensitive information, replacing redacted content with asterisks (*).\nOptions include:\n<ul><li>`pci`: Redacts sensitive credit card information, including credit card number, expiration date, and CVV</li>\n<li>`numbers` (or `true)`: Aggressively redacts strings of numerals</li>\n<li>`ssn` (*beta*): Redacts social security numbers</li></ul>\n<Note style={{ marginTop: '20px' }}>Can send multiple instances in query string (for example, `redact=pci&redact=numbers`).</Note>\"\n",
					schema: {
						anyOf: [
							{
								type: "string"
							},
							{
								type: "array",
								items: {
									type: "string"
								}
							}
						],
						nullable: true,
						"default": null,
						"enum": [
							"pci",
							"numbers",
							"ssn",
							"true",
							"null"
						]
					},
					examples: {
						"Redact all credit card information": {
							value: "redact=pci",
							description: "Redacts sensitive credit card information, including credit card number, expiration date, and CVV."
						},
						"Redact numbers": {
							value: "redact=numbers",
							description: "Aggressively redacts strings of numerals."
						},
						"Redact social security numbers": {
							value: "redact=ssn",
							description: "Redacts social security numbers."
						},
						"Use multiple values": {
							value: "redact=pci&redact=numbers",
							description: "Redacts both sensitive credit card information and strings of numerals."
						}
					}
				},
				{
					name: "diarize",
					"in": "query",
					description: "Indicates whether to recognize speaker changes. When set to `true`, each word in the transcript will be assigned a speaker number starting at 0.",
					schema: {
						type: "boolean",
						nullable: true,
						"default": null
					},
					examples: {
						"Do not recognize speaker changes": {
							value: "diarize=false"
						},
						"Recognize speaker changes": {
							value: "diarize=true"
						}
					}
				},
				{
					name: "multichannel",
					"in": "query",
					description: "Indicates whether to transcribe each audio channel independently. When set to `true`, you will receive one transcript for each channel, which means you can apply a different model to each channel using the model parameter (e.g., set `model` to `general:phonecall`, which applies the `general` model to channel 0 and the `phonecall` model to channel 1).",
					schema: {
						type: "boolean",
						"default": false
					},
					examples: {
						"Do not use multiple channels": {
							value: "multichannel=false"
						},
						"Use multiple channels": {
							value: "multichannel=true"
						}
					}
				},
				{
					name: "alternatives",
					"in": "query",
					description: "Maximum number of transcript alternatives to return. Just like a human listener, Deepgram can provide multiple possible interpretations of what it hears.",
					schema: {
						type: "integer",
						"default": 1
					},
					example: "alternatives=1"
				},
				{
					name: "numerals",
					"in": "query",
					description: "Indicates whether to convert numbers from written format (e.g., one) to numerical format (e.g., 1). Deepgram can format numbers up to 999,999.<Note style={{ marginTop: '20px' }}>Converted numbers do not include punctuation. For example, 999,999 would be transcribed as `999999`.</Note>",
					schema: {
						type: "boolean",
						"default": false
					},
					examples: {
						"Use written format": {
							value: "numerals=false"
						},
						"Use numerical format": {
							value: "numerals=true"
						}
					}
				},
				{
					name: "search",
					"in": "query",
					description: "Terms or phrases to search for in the submitted audio. Deepgram searches for acoustic patterns in audio rather than text patterns in transcripts because we have noticed that acoustic pattern matching is more performant.<Note style={{ marginTop: '20px' }}>Can send multiple instances in query string (for example, `search=speech&search=Friday`).</Note>",
					schema: {
						anyOf: [
							{
								type: "string"
							},
							{
								type: "array",
								items: {
									type: "string"
								}
							}
						],
						nullable: true,
						"default": null
					},
					examples: {
						"Send a single value": {
							value: "search=speech"
						},
						"Send a list of values": {
							value: "search=speech&search=Friday"
						}
					}
				},
				{
					name: "callback",
					"in": "query",
					description: "Callback URL to provide if you would like your submitted audio to be processed asynchronously. When passed, Deepgram will immediately respond with a `request_id`. When it has finished analyzing the audio, it will send a POST request to the provided URL with an appropriate HTTP status code.<Note style={{ marginTop: '20px' }}>Notes:<ul><li>You may embed basic authentication credentials in the callback URL.</li><li>Only ports 80, 443, 8080, and 8443 can be used for callbacks</li></ul></Note>For streaming audio, `callback` can be used to redirect streaming responses to a different server:<ul><li>If the callback URL begins with `http://` or `https://`, then POST requests are sent to the callback server for each streaming response.</li><li>If the callback URL begins with `ws://` or `wss://`, then a WebSocket connection is established with the callback server and WebSocket text messages are sent containing the streaming responses.</li><li>If a WebSocket callback connection is disconnected at any point, the entire real-time transcription stream is killed; this maintains the strong guarantee of a one-to-one relationship between incoming real-time connections and outgoing WebSocket callback connections.</li></ul>",
					schema: {
						type: "string",
						nullable: true,
						"default": null
					},
					example: "callback=https://example.com/callback"
				},
				{
					name: "keywords",
					"in": "query",
					description: "Keywords to which the model should pay particular attention to boosting or suppressing to help it\nunderstand context. Just like a human listener, Deepgram can better understand mumbled, distorted, or\notherwise hard-to-decipher speech when it knows the context of the conversation.\n\nTo learn more about the most effective way to use keywords and recognize context in your transcript,\n[see our guide to keyword boosting](/documentation/features/keywords/).\n\n<Note>\n\nNotes:\n\n- Can send multiple instances in query string (for example, `keywords=medicine&keywords=prescription`).\n- Can request multi-word keywords in a percent-encoded query string (for example, `keywords=miracle%20medicine`).\n  When Deepgram listens for your supplied keywords, it separates them into individual words, then boosts or\n  suppresses them individually.\n- Can append a positive or negative intensifier to either boost or suppress the recognition of particular words.\n  Positive and negative values can be decimals.\n- [Follow best practices for keyword boosting](/documentation/features/keywords/#best-practices).\n- Support for out-of-vocabulary (OOV) keyword boosting is currently in *beta*; to fall back to previous keyword behavior, \n  append the query parameter `keyword_boost=legacy` to your API request.\n\n</Note>\n",
					required: false,
					schema: {
						anyOf: [
							{
								type: "string"
							},
							{
								type: "array",
								items: {
									type: "string"
								}
							}
						],
						nullable: true,
						"default": null
					},
					examples: {
						"Send a single value": {
							value: "keywords=medicine"
						},
						"Send a list of values": {
							value: "keywords=medicine&keywords=prescription&keywords=doctor"
						},
						"Send a value with a boost intensifier": {
							value: "keywords=prescription:2"
						},
						"Send a value with a suppress intensifier": {
							value: "keywords=cancer:-10"
						}
					}
				},
				{
					name: "utterances",
					"in": "query",
					description: "*beta* Indicates whether Deepgram will segment speech into meaningful semantic units, which allows the model to interact more\nnaturally and effectively with speakers' spontaneous speech patterns. For example, when humans speak to each\nother conversationally, they often pause mid-sentence to reformulate their thoughts, or stop and restart a\nbadly-worded sentence. When `utterances` is set to `true`, these utterances are identified and returned in the\ntranscript results.\n\nBy default, when utterances is enabled, it starts a new utterance after 0.8 s of silence. You can customize the\nlength of time used to determine where to split utterances by submitting the `utt_split` parameter.\n",
					schema: {
						type: "boolean",
						"default": false
					},
					examples: {
						"Detect and return utterances": {
							value: "utterances=true"
						},
						"Do not detect and return utterances": {
							value: "utterances=false"
						}
					}
				},
				{
					name: "utt_split",
					"in": "query",
					description: "*beta* Length of time in seconds of silence between words that Deepgram will use when determining where to split utterances. Used\nwhen utterances is enabled. Defaults to 0.8 s.\n",
					schema: {
						type: "number",
						"default": 0.8
					},
					example: "utt_split=1.5"
				}
			],
			requestBody: {
				description: "Request body when submitting pre-recorded audio. Accepts either:\n\n- raw binary audio data. In this case, include a `Content-Type` header set to the audio [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#Audio_and_video_types).\n- JSON object with a single field from which the audio can be retrieved. In this case, include a `Content-Type` header set to `application/json`.\n",
				content: {
					"application/json": {
						schema: {
							properties: {
								url: {
									type: "string",
									description: "Location of audio file to transcribe.\n"
								}
							},
							required: [
								"url"
							]
						},
						examples: {
							"Submit online file": {
								value: {
									url: "https://static.deepgram.com/examples/interview_speech-analytics.wav"
								},
								description: "Online files must be accessible from Deepgram's servers. Most file hosting services can generate shareable links\nthat can be used for this purpose.\n\n<Note>\nYou can include basic authentication credentials in a URL:\n`https://username:password@example.com/audio`\n\nWe will never log your credentials.\n</Note>\n"
							},
							"Submit local file": {
								value: {
									url: "audio_files/deepgram_pwc_podcast.mp3"
								}
							}
						}
					},
					"application/octet-stream": {
						schema: {
							type: "string",
							format: "binary"
						}
					}
				}
			},
			responses: {
				"200": {
					description: "Audio submitted for transcription.",
					content: {
						"application/json": {
							schema: {
								type: "object",
								description: "JSON-formatted object returned when Deepgram finishes transcribing the submitted audio.",
								properties: {
									metadata: {
										type: "object",
										description: "JSON-formatted ListenMetadata object.",
										properties: {
											request_id: {
												type: "string",
												description: "Unique identifier for the submitted audio and derived data returned."
											},
											transaction_key: {
												type: "string",
												description: "Blob of text that helps Deepgram engineers debug any problems you encounter. If you need help getting an API call to work correctly, send this key to us so that we can use it as a starting point when investigating any issues."
											},
											sha256: {
												type: "string",
												description: "SHA-256 hash of the submitted audio data."
											},
											created: {
												type: "string",
												description: "ISO-8601 timestamp that indicates when the audio was submitted."
											},
											duration: {
												type: "number",
												description: "Duration in seconds of the submitted audio."
											},
											channels: {
												type: "integer",
												description: "Number of channels detected in the submitted audio."
											}
										}
									},
									results: {
										type: "object",
										description: "JSON-formatted ListenResults object.",
										properties: {
											channels: {
												type: "array",
												description: "Array of JSON-formatted ChannelResult objects.",
												items: {
													type: "object",
													description: "Object representing a channel in the underlying audio object.",
													properties: {
														search: {
															type: "array",
															description: "Array of JSON-formatted `SearchResults`.",
															items: {
																type: "object",
																properties: {
																	query: {
																		type: "string",
																		description: "Term for which Deepgram is searching."
																	},
																	hits: {
																		type: "array",
																		description: "Array of JSON-formatted Hit objects.",
																		items: {
																			type: "object",
																			properties: {
																				confidence: {
																					type: "number",
																					description: "Value between 0 and 1 that indicates the model's relative confidence in this hit."
																				},
																				start: {
																					type: "number",
																					description: "Offset in seconds from the start of the audio to where the hit occurs."
																				},
																				end: {
																					type: "number",
																					description: "Offset in seconds from the start of the audio to where the hit ends."
																				},
																				snippet: {
																					type: "string",
																					description: "Transcript that corresponds to the time between start and end."
																				}
																			}
																		}
																	}
																}
															}
														},
														alternatives: {
															type: "array",
															description: "Array of JSON-formatted `ResultAlternative` objects. This array will have length *n*, where *n* matches the value of the `alternatives` parameter passed in the request body.",
															items: {
																type: "object",
																properties: {
																	transcript: {
																		type: "string",
																		description: "Single-string transcript containing what the model hears in this channel of audio."
																	},
																	confidence: {
																		type: "number",
																		description: "Value between 0 and 1 indicating the model's relative confidence in this transcript."
																	},
																	words: {
																		type: "array",
																		description: "Array of JSON-formatted Word objects.",
																		items: {
																			type: "object",
																			properties: {
																				word: {
																					type: "string",
																					description: "Distinct word heard by the model."
																				},
																				start: {
																					type: "number",
																					description: "Offset in seconds from the start of the audio to where the spoken word starts."
																				},
																				end: {
																					type: "number",
																					description: "Offset in seconds from the start of the audio to where the spoken word ends."
																				},
																				confidence: {
																					type: "number",
																					description: "Value between 0 and 1 indicating the model's relative confidence in this word."
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	},
	"/listen/stream": {
		post: {
			tags: [
				"Transcription"
			],
			summary: "Transcribe streaming audio",
			operationId: "transcribeStreamingAudio",
			"x-codeSamples": [
				{
					lang: "Javascript",
					file: "content/examples/api-reference/real-time-streaming.js"
				},
				{
					lang: "Python",
					file: "content/examples/api-reference/real-time-streaming.py"
				}
			],
			description: "Deepgram provides its customers with real-time, streaming transcription via its streaming endpoints. These endpoints\nare high-performance, full-duplex services running over the tried-and-true WebSocket protocol, which makes integration\nwith customer pipelines simple due to the wide array of client libraries available.\n\nTo use this endpoint, connect to `wss://brain.deepgram.com/v2`. TLS encryption will\nprotect your connection and data.\n\nAll data is sent to the streaming endpoint as binary-type WebSocket messages containing payloads that are the raw audio data.\nBecause the protocol is full-duplex, you can stream in real-time and still receive transcription responses while uploading data.\n\nWhen you are finished, send an empty (length zero) binary message to the server. The server will interpret it as a shutdown\ncommand, which means it wil finish processing whatever data is still has cached, send the response to the client, send a summary\nmetadata object, and then terminate the WebSocket connection.\n\nTo learn more about working with real-time streaming data and results, see [Getting Started with Streaming Audio](/documentation/getting-started/streaming/).\n",
			parameters: [
				{
					name: "model",
					"in": "query",
					description: "AI model used to process submitted audio.\n\nOff-the-shelf Deepgram models include:\n* `general`: Optimized for everyday audio processing; if you aren't sure which model to select, start here.\n* `meeting`: Optimized for conference room settings, which include multiple speakers with a single microphone.\n* `phonecall`: Optimized for low-bandwidth audio phone calls.\n* `conversationalai`: Optimized to allow artificial intelligence technologies, such as chatbots, to interact with people in a human-like way.\n\nYou may also use a custom model associated with your account by including its `custom_id`.\n",
					schema: {
						type: "string",
						"default": "general",
						"enum": [
							"general",
							"phonecall",
							"meeting",
							"conversationalai",
							"<custom-id>"
						]
					},
					examples: {
						"Use a standard model": {
							value: "model=general",
							description: "Off-the shelf Deepgram models include `general`, `phonecall`, and `meeting`. If you aren't sure which model to select, start with `general`."
						},
						"Use a custom model": {
							value: "model=aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
							description: "To use a custom model associated with your account, include its `custom_id`."
						},
						"Use a single model for all channels": {
							value: "model=meeting",
							description: "If you specify a single model, then that model is applied to all channels when the `multichannel` parameter is set to `true`."
						},
						"Use different models for different channels": {
							value: "model=general:phonecall",
							description: "You can specify that Deepgram apply different models to separate audio channels when the `multichannel` parameter is set to `true`. In this example, Deepgram applies the `general` model to channel 0 and the `phonecall` model to channel 1."
						}
					}
				},
				{
					name: "language",
					"in": "query",
					description: "[BCP-47](https://tools.ietf.org/html/bcp47) language tag that hints at the primary spoken language.\nLanguage support is optimized for the following language/model combinations:\n\n<table className=\"internal\">\n  <thead>\n        <tr>\n            <th scope=\"col\" id=\"lang\">Language</th>\n            <th scope=\"col\" id=\"reg\">Region</th>\n            <th scope=\"col\" id=\"mod\">Model(s)</th>\n        </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <td headers=\"lang\">English</td>\n        <td headers=\"reg\"><code>en-GB</code></td>\n        <td headers=\"mod\"><code>general</code><code>phonecall</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\"></td>\n        <td headers=\"reg\"><code>en-IN</code></td>\n        <td headers=\"mod\"><code>general</code><code>phonecall</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\"></td>\n        <td headers=\"reg\"><code>en-NZ</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\"></td>\n        <td headers=\"reg\"><code>en-US</code></td>\n        <td headers=\"mod\"><code>general</code><code>meeting</code><code>phonecall</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">French</td>\n        <td headers=\"reg\"><code>fr</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Hindi</td>\n        <td headers=\"reg\"><code>hi</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Korean<br/></td>\n        <td headers=\"reg\"><code>ko</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Portuguese</td>\n        <td headers=\"reg\"><code>pt</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\"></td>\n        <td headers=\"reg\"><code>pt-BR</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Russian</td>\n        <td headers=\"reg\"><code>ru</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Spanish<br/></td>\n        <td headers=\"reg\"><code>es</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Turkish<br/></td>\n        <td headers=\"reg\"><code>tr</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    </tbody>\n</table>\n",
					schema: {
						type: "string",
						nullable: true,
						"default": "en-US",
						"enum": [
							"en-GB",
							"en-IN",
							"en-NZ",
							"en-US",
							"es",
							"fr",
							"hi",
							"ko",
							"pt",
							"pt-BR",
							"ru",
							"tr",
							"null"
						]
					},
					examples: {
						"Use a single language": {
							value: "language=es"
						}
					}
				},
				{
					name: "punctuate",
					"in": "query",
					description: "Indicates whether to add punctuation and capitalization to the transcript.",
					schema: {
						type: "boolean",
						"default": false
					},
					examples: {
						"Do not add punctuation": {
							value: "punctuate=false"
						},
						"Add punctuation": {
							value: "punctuate=true"
						}
					}
				},
				{
					name: "profanity_filter",
					"in": "query",
					description: "Indicates whether to remove profanity from the transcript.",
					schema: {
						type: "boolean",
						"default": false
					},
					examples: {
						"Do not remove profanity": {
							value: "profanity_filter=false"
						},
						"Remove profanity": {
							value: "profanity_filter=true"
						}
					}
				},
				{
					name: "redact",
					"in": "query",
					description: "Indicates whether to redact sensitive information, replacing redacted content with asterisks (*).\nOptions include:\n<ul><li>`pci`: Redacts sensitive credit card information, including credit card number, expiration date, and CVV</li>\n<li>`numbers` (or `true)`: Aggressively redacts strings of numerals</li>\n<li>`ssn` (*beta*): Redacts social security numbers</li></ul>\n<Note style={{ marginTop: '20px' }}>Can send multiple instances in query string (for example, `redact=pci&redact=numbers`).</Note>\"\n",
					schema: {
						anyOf: [
							{
								type: "string"
							},
							{
								type: "array",
								items: {
									type: "string"
								}
							}
						],
						nullable: true,
						"default": null,
						"enum": [
							"pci",
							"numbers",
							"ssn",
							"true",
							"null"
						]
					},
					examples: {
						"Redact all credit card information": {
							value: "redact=pci",
							description: "Redacts sensitive credit card information, including credit card number, expiration date, and CVV."
						},
						"Redact numbers": {
							value: "redact=numbers",
							description: "Aggressively redacts strings of numerals."
						},
						"Redact social security numbers": {
							value: "redact=ssn",
							description: "Redacts social security numbers."
						},
						"Use multiple values": {
							value: "redact=pci&redact=numbers",
							description: "Redacts both sensitive credit card information and strings of numerals."
						}
					}
				},
				{
					name: "diarize",
					"in": "query",
					description: "Indicates whether to recognize speaker changes. When set to `true`, each word in the transcript will be assigned a speaker number starting at 0.",
					schema: {
						type: "boolean",
						nullable: true,
						"default": null
					},
					examples: {
						"Do not recognize speaker changes": {
							value: "diarize=false"
						},
						"Recognize speaker changes": {
							value: "diarize=true"
						}
					}
				},
				{
					name: "multichannel",
					"in": "query",
					description: "Indicates whether to transcribe each audio channel independently. When set to `true`, you will receive one transcript for each channel, which means you can apply a different model to each channel using the model parameter (e.g., set `model` to `general:phonecall`, which applies the `general` model to channel 0 and the `phonecall` model to channel 1).",
					schema: {
						type: "boolean",
						"default": false
					},
					examples: {
						"Do not use multiple channels": {
							value: "multichannel=false"
						},
						"Use multiple channels": {
							value: "multichannel=true"
						}
					}
				},
				{
					name: "alternatives",
					"in": "query",
					description: "Maximum number of transcript alternatives to return. Just like a human listener, Deepgram can provide multiple possible interpretations of what it hears.",
					schema: {
						type: "integer",
						"default": 1
					},
					example: "alternatives=1"
				},
				{
					name: "numerals",
					"in": "query",
					description: "Indicates whether to convert numbers from written format (e.g., one) to numerical format (e.g., 1). Deepgram can format numbers up to 999,999.<Note style={{ marginTop: '20px' }}>Converted numbers do not include punctuation. For example, 999,999 would be transcribed as `999999`.</Note>",
					schema: {
						type: "boolean",
						"default": false
					},
					examples: {
						"Use written format": {
							value: "numerals=false"
						},
						"Use numerical format": {
							value: "numerals=true"
						}
					}
				},
				{
					name: "search",
					"in": "query",
					description: "Terms or phrases to search for in the submitted audio. Deepgram searches for acoustic patterns in audio rather than text patterns in transcripts because we have noticed that acoustic pattern matching is more performant.<Note style={{ marginTop: '20px' }}>Can send multiple instances in query string (for example, `search=speech&search=Friday`).</Note>",
					schema: {
						anyOf: [
							{
								type: "string"
							},
							{
								type: "array",
								items: {
									type: "string"
								}
							}
						],
						nullable: true,
						"default": null
					},
					examples: {
						"Send a single value": {
							value: "search=speech"
						},
						"Send a list of values": {
							value: "search=speech&search=Friday"
						}
					}
				},
				{
					name: "callback",
					"in": "query",
					description: "Callback URL to provide if you would like your submitted audio to be processed asynchronously. When passed, Deepgram will immediately respond with a `request_id`. When it has finished analyzing the audio, it will send a POST request to the provided URL with an appropriate HTTP status code.<Note style={{ marginTop: '20px' }}>Notes:<ul><li>You may embed basic authentication credentials in the callback URL.</li><li>Only ports 80, 443, 8080, and 8443 can be used for callbacks</li></ul></Note>For streaming audio, `callback` can be used to redirect streaming responses to a different server:<ul><li>If the callback URL begins with `http://` or `https://`, then POST requests are sent to the callback server for each streaming response.</li><li>If the callback URL begins with `ws://` or `wss://`, then a WebSocket connection is established with the callback server and WebSocket text messages are sent containing the streaming responses.</li><li>If a WebSocket callback connection is disconnected at any point, the entire real-time transcription stream is killed; this maintains the strong guarantee of a one-to-one relationship between incoming real-time connections and outgoing WebSocket callback connections.</li></ul>",
					schema: {
						type: "string",
						nullable: true,
						"default": null
					},
					example: "callback=https://example.com/callback"
				},
				{
					name: "keywords",
					"in": "query",
					description: "Keywords to which the model should pay particular attention to boosting or suppressing to help it\nunderstand context. Just like a human listener, Deepgram can better understand mumbled, distorted, or\notherwise hard-to-decipher speech when it knows the context of the conversation.\n\nTo learn more about the most effective way to use keywords and recognize context in your transcript,\n[see our guide to keyword boosting](/documentation/features/keywords/).\n\n<Note>\n\nNotes:\n\n- Can send multiple instances in query string (for example, `keywords=medicine&keywords=prescription`).\n- Can request multi-word keywords in a percent-encoded query string (for example, `keywords=miracle%20medicine`).\n  When Deepgram listens for your supplied keywords, it separates them into individual words, then boosts or\n  suppresses them individually.\n- Can append a positive or negative intensifier to either boost or suppress the recognition of particular words.\n  Positive and negative values can be decimals.\n- [Follow best practices for keyword boosting](/documentation/features/keywords/#best-practices).\n- Support for out-of-vocabulary (OOV) keyword boosting is currently in *beta*; to fall back to previous keyword behavior, \n  append the query parameter `keyword_boost=legacy` to your API request.\n\n</Note>\n",
					required: false,
					schema: {
						anyOf: [
							{
								type: "string"
							},
							{
								type: "array",
								items: {
									type: "string"
								}
							}
						],
						nullable: true,
						"default": null
					},
					examples: {
						"Send a single value": {
							value: "keywords=medicine"
						},
						"Send a list of values": {
							value: "keywords=medicine&keywords=prescription&keywords=doctor"
						},
						"Send a value with a boost intensifier": {
							value: "keywords=prescription:2"
						},
						"Send a value with a suppress intensifier": {
							value: "keywords=cancer:-10"
						}
					}
				},
				{
					name: "interim_results",
					"in": "query",
					description: "Indicates whether the streaming endpoint should send you updates to its transcription as more audio becomes\navailable. By default, the streaming endpoint returns regular updates, which means transcription results will\nlikely change for a period of time. You can avoid receiving these updates by setting this flag to `false`.\n\n<Note>\n\nSetting the flag to `false` increases latency (usually by several seconds) because the server will need to stabilize\nthe transcription before returning the final results for each piece of incoming audio. If you want the lowest-latency\nstreaming available, then set `interim_results` to `true` and handle the corrected transcripts as they are returned.\n\n</Note>\n",
					schema: {
						type: "boolean",
						"default": false
					},
					examples: {
						"Receive transcript updates": {
							value: "interim_results=true"
						},
						"Do not receive transcript updates": {
							value: "interim_results=false"
						}
					}
				},
				{
					name: "endpointing",
					"in": "query",
					description: "Indicates whether Deepgram will detect whether a speaker has finished speaking (or paused for a significant period of\ntime, indicating the completion of an idea). When Deepgram detects an endpoint, it assumes that no additional data\nwill improve its prediction, so it immediately finalizes the result for the processed time range and returns the\ntranscript with a `speech_final` parameter set to `true`.\n\nFor example, if you are working with a 15-second audio clip, but someone is speaking for only the first 3 seconds,\nendpointing allows you to get a finalized result after the first 3 seconds.\n\nBy default, endpointing is enabled and finalizes a transcript after 10 ms of silence. You can customize the length\nof time used to detect whether a speaker has finished speaking by submitting the `vad_turnoff` parameter.\n",
					schema: {
						type: "boolean",
						"default": true
					},
					examples: {
						"Detect endpoints": {
							value: "endpointing=true"
						},
						"Do not detect endpoints": {
							value: "endpointing=false"
						}
					}
				},
				{
					name: "vad_turnoff",
					"in": "query",
					description: "Length of time in milliseconds of silence that voice activation detection (VAD) will use to detect that a speaker has\nfinished speaking. Used when endpointing is enabled. Defaults to 10 ms. Deepgram customers may configure a value\nbetween 10 ms and 500 ms; on-premise customers may remove this restriction.\n",
					schema: {
						type: "integer",
						"default": 10
					},
					example: "vad_turnoff=30"
				},
				{
					name: "encoding",
					"in": "query",
					description: "Expected encoding of the submitted streaming audio.\n\nOptions include:\n\n- `linear16`: 16-bit, little endian, signed PCM WAV data\n- `flac`: FLAC-encoded data\n- `mulaw`: mu-law encoded WAV data\n- `amr-nb`: adaptive multi-rate narrowband codec (sample rate must be 8000)\n- `amr-wb`: adaptive multi-rate wideband codec (sample rate must be 16000)\n- `opus`: Ogg Opus\n- `speex`: Ogg Speex\n\n<Note>\n\nOnly required when raw, headerless audio packets are sent to the streaming service. For pre-recorded audio or audio\nsubmitted to the standard `/listen` endpoint, we support over 40 popular codecs and do not require this parameter.\n\n</Note>\n",
					schema: {
						type: "string",
						nullable: true,
						"default": null,
						"enum": [
							"amr-nb",
							"amr-wb",
							"flac",
							"linear16",
							"mulaw",
							"opus",
							"speex"
						]
					},
					example: "encoding=flac"
				},
				{
					name: "channels",
					"in": "query",
					description: "Number of independent audio channels contained in submitted streaming audio. Only read when a value is provided for `encoding`.",
					schema: {
						type: "integer",
						"default": "1"
					},
					example: "channels=2"
				},
				{
					name: "sample_rate",
					"in": "query",
					description: "Sample rate of submitted streaming audio. Required (and only read) when a value is provided for `encoding`.",
					schema: {
						type: "integer"
					},
					example: "sample_rate=16000"
				}
			],
			responses: {
				"201": {
					description: "Audio submitted for transcription.",
					content: {
						"application/json": {
							schema: {
								type: "object",
								description: "JSON-formatted object returned as Deepgram transcribes audio. ",
								properties: {
									channel_index: {
										type: "array",
										description: "",
										items: {
											type: "object",
											properties: {
												channel: {
													type: "string",
													description: ""
												},
												num_channels: {
													type: "integer",
													description: ""
												}
											}
										}
									},
									duration: {
										type: "number",
										description: "Duration in seconds."
									},
									start: {
										type: "string",
										description: "Offset in seconds."
									},
									is_final: {
										type: "boolean",
										description: "Indicates final"
									},
									channel: {
										type: "object",
										description: "",
										properties: {
											alternatives: {
												type: "array",
												description: "Array of JSON-formatted `ResultAlternative` objects. This array will have length *n*, where *n* matches the value of the `alternatives` parameter passed in the request body.",
												items: {
													type: "object",
													properties: {
														transcript: {
															type: "string",
															description: "Single-string transcript containing what the model hears in this channel of audio."
														},
														confidence: {
															type: "number",
															description: "Value between 0 and 1 indicating the model's relative confidence in this transcript."
														},
														words: {
															type: "array",
															description: "Array of JSON-formatted Word objects.",
															items: {
																type: "object",
																properties: {
																	word: {
																		type: "string",
																		description: "Distinct word heard by the model."
																	},
																	start: {
																		type: "number",
																		description: "Offset in seconds from the start of the audio to where the spoken word starts."
																	},
																	end: {
																		type: "number",
																		description: "Offset in seconds from the start of the audio to where the spoken word ends."
																	},
																	confidence: {
																		type: "number",
																		description: "Value between 0 and 1 indicating the model's relative confidence in this word."
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	},
	"/keys": {
		post: {
			tags: [
				"API Keys"
			],
			summary: "Create a new key",
			operationId: "createAPIKey",
			description: "Don't want to reuse your username and password in your requests? Don't want to share credentials within your team?\nWant to have separate credentials for your staging and production systems? No problem: generate all the API keys you\nneed and use them just as you would your username and password.\n\n<Note>\nThis is the only opportunity to retrieve your API secret, so be sure to record it someplace safe.\n</Note>\n",
			requestBody: {
				description: "Request body when creating an API key.",
				content: {
					"application/json": {
						schema: {
							properties: {
								label: {
									type: "string",
									description: "User-friendly name of the API Key.",
									example: "My API Key"
								}
							}
						}
					}
				}
			},
			responses: {
				"201": {
					description: "API Key generated",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									key: {
										type: "string",
										description: "Your new API key. This should replace your username in authentication requests."
									},
									secret: {
										type: "string",
										description: "Your new secret. This should replace your password in authentication requests."
									},
									label: {
										type: "string",
										description: "The user-friendly name of the API key that you submitted in the body of the request."
									}
								}
							}
						}
					}
				}
			}
		},
		get: {
			tags: [
				"API Keys"
			],
			summary: "Get all keys",
			operationId: "getAPIKeys",
			description: "Returns the list of keys associated with your account.\n",
			responses: {
				"200": {
					description: "API keys found",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									keys: {
										type: "array",
										items: {
											type: "object",
											properties: {
												key: {
													type: "string"
												},
												label: {
													type: "string"
												}
											}
										}
									}
								}
							}
						}
					}
				},
				"404": {
					description: "The specified resource was not found."
				}
			}
		},
		"delete": {
			tags: [
				"API Keys"
			],
			summary: "Delete a key",
			operationId: "deleteAPIKeys",
			description: "Deletes the specified key.\n",
			requestBody: {
				description: "Request body when deleting an API key.",
				content: {
					"application/json": {
						schema: {
							properties: {
								key: {
									type: "string",
									description: "The API key you wish to delete.",
									example: "x020gx00g0s0"
								}
							}
						}
					}
				}
			},
			responses: {
				"204": {
					description: "The API key was deleted."
				},
				"401": {
					description: "Unauthorized."
				},
				"404": {
					description: "The specified resource was not found."
				}
			}
		}
	}
};
const components = {
	securitySchemes: {
		Basic: {
			type: "http",
			scheme: "basic",
			description: "All requests to the API should include a basic `Authorization` header that references the Base64-encoded username (or email\naddress you used to sign up) and password of your Deepgram account.\n\nFor example, for user `gandalf` with password `mellon`, the base64-encoded value of `gandalf:mellon` is `Z2FuZGFsZjptZWxsb24=`.\nSo Gandalf's requests to the Deepgram API should all include the following header: `Authorization: Basic Z2FuZGFsZjptZWxsb24=`.\n"
		}
	},
	parameters: {
		model: {
			name: "model",
			"in": "query",
			description: "AI model used to process submitted audio.\n\nOff-the-shelf Deepgram models include:\n* `general`: Optimized for everyday audio processing; if you aren't sure which model to select, start here.\n* `meeting`: Optimized for conference room settings, which include multiple speakers with a single microphone.\n* `phonecall`: Optimized for low-bandwidth audio phone calls.\n* `conversationalai`: Optimized to allow artificial intelligence technologies, such as chatbots, to interact with people in a human-like way.\n\nYou may also use a custom model associated with your account by including its `custom_id`.\n",
			schema: {
				type: "string",
				"default": "general",
				"enum": [
					"general",
					"phonecall",
					"meeting",
					"conversationalai",
					"<custom-id>"
				]
			},
			examples: {
				"Use a standard model": {
					value: "model=general",
					description: "Off-the shelf Deepgram models include `general`, `phonecall`, and `meeting`. If you aren't sure which model to select, start with `general`."
				},
				"Use a custom model": {
					value: "model=aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
					description: "To use a custom model associated with your account, include its `custom_id`."
				},
				"Use a single model for all channels": {
					value: "model=meeting",
					description: "If you specify a single model, then that model is applied to all channels when the `multichannel` parameter is set to `true`."
				},
				"Use different models for different channels": {
					value: "model=general:phonecall",
					description: "You can specify that Deepgram apply different models to separate audio channels when the `multichannel` parameter is set to `true`. In this example, Deepgram applies the `general` model to channel 0 and the `phonecall` model to channel 1."
				}
			}
		},
		language: {
			name: "language",
			"in": "query",
			description: "[BCP-47](https://tools.ietf.org/html/bcp47) language tag that hints at the primary spoken language.\nLanguage support is optimized for the following language/model combinations:\n\n<table className=\"internal\">\n  <thead>\n        <tr>\n            <th scope=\"col\" id=\"lang\">Language</th>\n            <th scope=\"col\" id=\"reg\">Region</th>\n            <th scope=\"col\" id=\"mod\">Model(s)</th>\n        </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <td headers=\"lang\">English</td>\n        <td headers=\"reg\"><code>en-GB</code></td>\n        <td headers=\"mod\"><code>general</code><code>phonecall</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\"></td>\n        <td headers=\"reg\"><code>en-IN</code></td>\n        <td headers=\"mod\"><code>general</code><code>phonecall</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\"></td>\n        <td headers=\"reg\"><code>en-NZ</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\"></td>\n        <td headers=\"reg\"><code>en-US</code></td>\n        <td headers=\"mod\"><code>general</code><code>meeting</code><code>phonecall</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">French</td>\n        <td headers=\"reg\"><code>fr</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Hindi</td>\n        <td headers=\"reg\"><code>hi</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Korean<br/></td>\n        <td headers=\"reg\"><code>ko</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Portuguese</td>\n        <td headers=\"reg\"><code>pt</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\"></td>\n        <td headers=\"reg\"><code>pt-BR</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Russian</td>\n        <td headers=\"reg\"><code>ru</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Spanish<br/></td>\n        <td headers=\"reg\"><code>es</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    <tr>\n        <td headers=\"lang\">Turkish<br/></td>\n        <td headers=\"reg\"><code>tr</code></td>\n        <td headers=\"mod\"><code>general</code></td>\n    </tr>\n    </tbody>\n</table>\n",
			schema: {
				type: "string",
				nullable: true,
				"default": "en-US",
				"enum": [
					"en-GB",
					"en-IN",
					"en-NZ",
					"en-US",
					"es",
					"fr",
					"hi",
					"ko",
					"pt",
					"pt-BR",
					"ru",
					"tr",
					"null"
				]
			},
			examples: {
				"Use a single language": {
					value: "language=es"
				}
			}
		},
		punctuate: {
			name: "punctuate",
			"in": "query",
			description: "Indicates whether to add punctuation and capitalization to the transcript.",
			schema: {
				type: "boolean",
				"default": false
			},
			examples: {
				"Do not add punctuation": {
					value: "punctuate=false"
				},
				"Add punctuation": {
					value: "punctuate=true"
				}
			}
		},
		profanity_filter: {
			name: "profanity_filter",
			"in": "query",
			description: "Indicates whether to remove profanity from the transcript.",
			schema: {
				type: "boolean",
				"default": false
			},
			examples: {
				"Do not remove profanity": {
					value: "profanity_filter=false"
				},
				"Remove profanity": {
					value: "profanity_filter=true"
				}
			}
		},
		redact: {
			name: "redact",
			"in": "query",
			description: "Indicates whether to redact sensitive information, replacing redacted content with asterisks (*).\nOptions include:\n<ul><li>`pci`: Redacts sensitive credit card information, including credit card number, expiration date, and CVV</li>\n<li>`numbers` (or `true)`: Aggressively redacts strings of numerals</li>\n<li>`ssn` (*beta*): Redacts social security numbers</li></ul>\n<Note style={{ marginTop: '20px' }}>Can send multiple instances in query string (for example, `redact=pci&redact=numbers`).</Note>\"\n",
			schema: {
				anyOf: [
					{
						type: "string"
					},
					{
						type: "array",
						items: {
							type: "string"
						}
					}
				],
				nullable: true,
				"default": null,
				"enum": [
					"pci",
					"numbers",
					"ssn",
					"true",
					"null"
				]
			},
			examples: {
				"Redact all credit card information": {
					value: "redact=pci",
					description: "Redacts sensitive credit card information, including credit card number, expiration date, and CVV."
				},
				"Redact numbers": {
					value: "redact=numbers",
					description: "Aggressively redacts strings of numerals."
				},
				"Redact social security numbers": {
					value: "redact=ssn",
					description: "Redacts social security numbers."
				},
				"Use multiple values": {
					value: "redact=pci&redact=numbers",
					description: "Redacts both sensitive credit card information and strings of numerals."
				}
			}
		},
		diarize: {
			name: "diarize",
			"in": "query",
			description: "Indicates whether to recognize speaker changes. When set to `true`, each word in the transcript will be assigned a speaker number starting at 0.",
			schema: {
				type: "boolean",
				nullable: true,
				"default": null
			},
			examples: {
				"Do not recognize speaker changes": {
					value: "diarize=false"
				},
				"Recognize speaker changes": {
					value: "diarize=true"
				}
			}
		},
		multichannel: {
			name: "multichannel",
			"in": "query",
			description: "Indicates whether to transcribe each audio channel independently. When set to `true`, you will receive one transcript for each channel, which means you can apply a different model to each channel using the model parameter (e.g., set `model` to `general:phonecall`, which applies the `general` model to channel 0 and the `phonecall` model to channel 1).",
			schema: {
				type: "boolean",
				"default": false
			},
			examples: {
				"Do not use multiple channels": {
					value: "multichannel=false"
				},
				"Use multiple channels": {
					value: "multichannel=true"
				}
			}
		},
		alternatives: {
			name: "alternatives",
			"in": "query",
			description: "Maximum number of transcript alternatives to return. Just like a human listener, Deepgram can provide multiple possible interpretations of what it hears.",
			schema: {
				type: "integer",
				"default": 1
			},
			example: "alternatives=1"
		},
		numerals: {
			name: "numerals",
			"in": "query",
			description: "Indicates whether to convert numbers from written format (e.g., one) to numerical format (e.g., 1). Deepgram can format numbers up to 999,999.<Note style={{ marginTop: '20px' }}>Converted numbers do not include punctuation. For example, 999,999 would be transcribed as `999999`.</Note>",
			schema: {
				type: "boolean",
				"default": false
			},
			examples: {
				"Use written format": {
					value: "numerals=false"
				},
				"Use numerical format": {
					value: "numerals=true"
				}
			}
		},
		search: {
			name: "search",
			"in": "query",
			description: "Terms or phrases to search for in the submitted audio. Deepgram searches for acoustic patterns in audio rather than text patterns in transcripts because we have noticed that acoustic pattern matching is more performant.<Note style={{ marginTop: '20px' }}>Can send multiple instances in query string (for example, `search=speech&search=Friday`).</Note>",
			schema: {
				anyOf: [
					{
						type: "string"
					},
					{
						type: "array",
						items: {
							type: "string"
						}
					}
				],
				nullable: true,
				"default": null
			},
			examples: {
				"Send a single value": {
					value: "search=speech"
				},
				"Send a list of values": {
					value: "search=speech&search=Friday"
				}
			}
		},
		callback: {
			name: "callback",
			"in": "query",
			description: "Callback URL to provide if you would like your submitted audio to be processed asynchronously. When passed, Deepgram will immediately respond with a `request_id`. When it has finished analyzing the audio, it will send a POST request to the provided URL with an appropriate HTTP status code.<Note style={{ marginTop: '20px' }}>Notes:<ul><li>You may embed basic authentication credentials in the callback URL.</li><li>Only ports 80, 443, 8080, and 8443 can be used for callbacks</li></ul></Note>For streaming audio, `callback` can be used to redirect streaming responses to a different server:<ul><li>If the callback URL begins with `http://` or `https://`, then POST requests are sent to the callback server for each streaming response.</li><li>If the callback URL begins with `ws://` or `wss://`, then a WebSocket connection is established with the callback server and WebSocket text messages are sent containing the streaming responses.</li><li>If a WebSocket callback connection is disconnected at any point, the entire real-time transcription stream is killed; this maintains the strong guarantee of a one-to-one relationship between incoming real-time connections and outgoing WebSocket callback connections.</li></ul>",
			schema: {
				type: "string",
				nullable: true,
				"default": null
			},
			example: "callback=https://example.com/callback"
		},
		keywords: {
			name: "keywords",
			"in": "query",
			description: "Keywords to which the model should pay particular attention to boosting or suppressing to help it\nunderstand context. Just like a human listener, Deepgram can better understand mumbled, distorted, or\notherwise hard-to-decipher speech when it knows the context of the conversation.\n\nTo learn more about the most effective way to use keywords and recognize context in your transcript,\n[see our guide to keyword boosting](/documentation/features/keywords/).\n\n<Note>\n\nNotes:\n\n- Can send multiple instances in query string (for example, `keywords=medicine&keywords=prescription`).\n- Can request multi-word keywords in a percent-encoded query string (for example, `keywords=miracle%20medicine`).\n  When Deepgram listens for your supplied keywords, it separates them into individual words, then boosts or\n  suppresses them individually.\n- Can append a positive or negative intensifier to either boost or suppress the recognition of particular words.\n  Positive and negative values can be decimals.\n- [Follow best practices for keyword boosting](/documentation/features/keywords/#best-practices).\n- Support for out-of-vocabulary (OOV) keyword boosting is currently in *beta*; to fall back to previous keyword behavior, \n  append the query parameter `keyword_boost=legacy` to your API request.\n\n</Note>\n",
			required: false,
			schema: {
				anyOf: [
					{
						type: "string"
					},
					{
						type: "array",
						items: {
							type: "string"
						}
					}
				],
				nullable: true,
				"default": null
			},
			examples: {
				"Send a single value": {
					value: "keywords=medicine"
				},
				"Send a list of values": {
					value: "keywords=medicine&keywords=prescription&keywords=doctor"
				},
				"Send a value with a boost intensifier": {
					value: "keywords=prescription:2"
				},
				"Send a value with a suppress intensifier": {
					value: "keywords=cancer:-10"
				}
			}
		},
		utterances: {
			name: "utterances",
			"in": "query",
			description: "*beta* Indicates whether Deepgram will segment speech into meaningful semantic units, which allows the model to interact more\nnaturally and effectively with speakers' spontaneous speech patterns. For example, when humans speak to each\nother conversationally, they often pause mid-sentence to reformulate their thoughts, or stop and restart a\nbadly-worded sentence. When `utterances` is set to `true`, these utterances are identified and returned in the\ntranscript results.\n\nBy default, when utterances is enabled, it starts a new utterance after 0.8 s of silence. You can customize the\nlength of time used to determine where to split utterances by submitting the `utt_split` parameter.\n",
			schema: {
				type: "boolean",
				"default": false
			},
			examples: {
				"Detect and return utterances": {
					value: "utterances=true"
				},
				"Do not detect and return utterances": {
					value: "utterances=false"
				}
			}
		},
		utt_split: {
			name: "utt_split",
			"in": "query",
			description: "*beta* Length of time in seconds of silence between words that Deepgram will use when determining where to split utterances. Used\nwhen utterances is enabled. Defaults to 0.8 s.\n",
			schema: {
				type: "number",
				"default": 0.8
			},
			example: "utt_split=1.5"
		},
		interim_results: {
			name: "interim_results",
			"in": "query",
			description: "Indicates whether the streaming endpoint should send you updates to its transcription as more audio becomes\navailable. By default, the streaming endpoint returns regular updates, which means transcription results will\nlikely change for a period of time. You can avoid receiving these updates by setting this flag to `false`.\n\n<Note>\n\nSetting the flag to `false` increases latency (usually by several seconds) because the server will need to stabilize\nthe transcription before returning the final results for each piece of incoming audio. If you want the lowest-latency\nstreaming available, then set `interim_results` to `true` and handle the corrected transcripts as they are returned.\n\n</Note>\n",
			schema: {
				type: "boolean",
				"default": false
			},
			examples: {
				"Receive transcript updates": {
					value: "interim_results=true"
				},
				"Do not receive transcript updates": {
					value: "interim_results=false"
				}
			}
		},
		endpointing: {
			name: "endpointing",
			"in": "query",
			description: "Indicates whether Deepgram will detect whether a speaker has finished speaking (or paused for a significant period of\ntime, indicating the completion of an idea). When Deepgram detects an endpoint, it assumes that no additional data\nwill improve its prediction, so it immediately finalizes the result for the processed time range and returns the\ntranscript with a `speech_final` parameter set to `true`.\n\nFor example, if you are working with a 15-second audio clip, but someone is speaking for only the first 3 seconds,\nendpointing allows you to get a finalized result after the first 3 seconds.\n\nBy default, endpointing is enabled and finalizes a transcript after 10 ms of silence. You can customize the length\nof time used to detect whether a speaker has finished speaking by submitting the `vad_turnoff` parameter.\n",
			schema: {
				type: "boolean",
				"default": true
			},
			examples: {
				"Detect endpoints": {
					value: "endpointing=true"
				},
				"Do not detect endpoints": {
					value: "endpointing=false"
				}
			}
		},
		vad_turnoff: {
			name: "vad_turnoff",
			"in": "query",
			description: "Length of time in milliseconds of silence that voice activation detection (VAD) will use to detect that a speaker has\nfinished speaking. Used when endpointing is enabled. Defaults to 10 ms. Deepgram customers may configure a value\nbetween 10 ms and 500 ms; on-premise customers may remove this restriction.\n",
			schema: {
				type: "integer",
				"default": 10
			},
			example: "vad_turnoff=30"
		},
		encoding: {
			name: "encoding",
			"in": "query",
			description: "Expected encoding of the submitted streaming audio.\n\nOptions include:\n\n- `linear16`: 16-bit, little endian, signed PCM WAV data\n- `flac`: FLAC-encoded data\n- `mulaw`: mu-law encoded WAV data\n- `amr-nb`: adaptive multi-rate narrowband codec (sample rate must be 8000)\n- `amr-wb`: adaptive multi-rate wideband codec (sample rate must be 16000)\n- `opus`: Ogg Opus\n- `speex`: Ogg Speex\n\n<Note>\n\nOnly required when raw, headerless audio packets are sent to the streaming service. For pre-recorded audio or audio\nsubmitted to the standard `/listen` endpoint, we support over 40 popular codecs and do not require this parameter.\n\n</Note>\n",
			schema: {
				type: "string",
				nullable: true,
				"default": null,
				"enum": [
					"amr-nb",
					"amr-wb",
					"flac",
					"linear16",
					"mulaw",
					"opus",
					"speex"
				]
			},
			example: "encoding=flac"
		},
		channels: {
			name: "channels",
			"in": "query",
			description: "Number of independent audio channels contained in submitted streaming audio. Only read when a value is provided for `encoding`.",
			schema: {
				type: "integer",
				"default": "1"
			},
			example: "channels=2"
		},
		sample_rate: {
			name: "sample_rate",
			"in": "query",
			description: "Sample rate of submitted streaming audio. Required (and only read) when a value is provided for `encoding`.",
			schema: {
				type: "integer"
			},
			example: "sample_rate=16000"
		}
	},
	schemas: {
		ListenResponse: {
			type: "object",
			description: "JSON-formatted object returned when Deepgram finishes transcribing the submitted audio.",
			properties: {
				metadata: {
					type: "object",
					description: "JSON-formatted ListenMetadata object.",
					properties: {
						request_id: {
							type: "string",
							description: "Unique identifier for the submitted audio and derived data returned."
						},
						transaction_key: {
							type: "string",
							description: "Blob of text that helps Deepgram engineers debug any problems you encounter. If you need help getting an API call to work correctly, send this key to us so that we can use it as a starting point when investigating any issues."
						},
						sha256: {
							type: "string",
							description: "SHA-256 hash of the submitted audio data."
						},
						created: {
							type: "string",
							description: "ISO-8601 timestamp that indicates when the audio was submitted."
						},
						duration: {
							type: "number",
							description: "Duration in seconds of the submitted audio."
						},
						channels: {
							type: "integer",
							description: "Number of channels detected in the submitted audio."
						}
					}
				},
				results: {
					type: "object",
					description: "JSON-formatted ListenResults object.",
					properties: {
						channels: {
							type: "array",
							description: "Array of JSON-formatted ChannelResult objects.",
							items: {
								type: "object",
								description: "Object representing a channel in the underlying audio object.",
								properties: {
									search: {
										type: "array",
										description: "Array of JSON-formatted `SearchResults`.",
										items: {
											type: "object",
											properties: {
												query: {
													type: "string",
													description: "Term for which Deepgram is searching."
												},
												hits: {
													type: "array",
													description: "Array of JSON-formatted Hit objects.",
													items: {
														type: "object",
														properties: {
															confidence: {
																type: "number",
																description: "Value between 0 and 1 that indicates the model's relative confidence in this hit."
															},
															start: {
																type: "number",
																description: "Offset in seconds from the start of the audio to where the hit occurs."
															},
															end: {
																type: "number",
																description: "Offset in seconds from the start of the audio to where the hit ends."
															},
															snippet: {
																type: "string",
																description: "Transcript that corresponds to the time between start and end."
															}
														}
													}
												}
											}
										}
									},
									alternatives: {
										type: "array",
										description: "Array of JSON-formatted `ResultAlternative` objects. This array will have length *n*, where *n* matches the value of the `alternatives` parameter passed in the request body.",
										items: {
											type: "object",
											properties: {
												transcript: {
													type: "string",
													description: "Single-string transcript containing what the model hears in this channel of audio."
												},
												confidence: {
													type: "number",
													description: "Value between 0 and 1 indicating the model's relative confidence in this transcript."
												},
												words: {
													type: "array",
													description: "Array of JSON-formatted Word objects.",
													items: {
														type: "object",
														properties: {
															word: {
																type: "string",
																description: "Distinct word heard by the model."
															},
															start: {
																type: "number",
																description: "Offset in seconds from the start of the audio to where the spoken word starts."
															},
															end: {
																type: "number",
																description: "Offset in seconds from the start of the audio to where the spoken word ends."
															},
															confidence: {
																type: "number",
																description: "Value between 0 and 1 indicating the model's relative confidence in this word."
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		ListenMetadata: {
			type: "object",
			description: "JSON-formatted ListenMetadata object.",
			properties: {
				request_id: {
					type: "string",
					description: "Unique identifier for the submitted audio and derived data returned."
				},
				transaction_key: {
					type: "string",
					description: "Blob of text that helps Deepgram engineers debug any problems you encounter. If you need help getting an API call to work correctly, send this key to us so that we can use it as a starting point when investigating any issues."
				},
				sha256: {
					type: "string",
					description: "SHA-256 hash of the submitted audio data."
				},
				created: {
					type: "string",
					description: "ISO-8601 timestamp that indicates when the audio was submitted."
				},
				duration: {
					type: "number",
					description: "Duration in seconds of the submitted audio."
				},
				channels: {
					type: "integer",
					description: "Number of channels detected in the submitted audio."
				}
			}
		},
		ListenResults: {
			type: "object",
			description: "JSON-formatted ListenResults object.",
			properties: {
				channels: {
					type: "array",
					description: "Array of JSON-formatted ChannelResult objects.",
					items: {
						type: "object",
						description: "Object representing a channel in the underlying audio object.",
						properties: {
							search: {
								type: "array",
								description: "Array of JSON-formatted `SearchResults`.",
								items: {
									type: "object",
									properties: {
										query: {
											type: "string",
											description: "Term for which Deepgram is searching."
										},
										hits: {
											type: "array",
											description: "Array of JSON-formatted Hit objects.",
											items: {
												type: "object",
												properties: {
													confidence: {
														type: "number",
														description: "Value between 0 and 1 that indicates the model's relative confidence in this hit."
													},
													start: {
														type: "number",
														description: "Offset in seconds from the start of the audio to where the hit occurs."
													},
													end: {
														type: "number",
														description: "Offset in seconds from the start of the audio to where the hit ends."
													},
													snippet: {
														type: "string",
														description: "Transcript that corresponds to the time between start and end."
													}
												}
											}
										}
									}
								}
							},
							alternatives: {
								type: "array",
								description: "Array of JSON-formatted `ResultAlternative` objects. This array will have length *n*, where *n* matches the value of the `alternatives` parameter passed in the request body.",
								items: {
									type: "object",
									properties: {
										transcript: {
											type: "string",
											description: "Single-string transcript containing what the model hears in this channel of audio."
										},
										confidence: {
											type: "number",
											description: "Value between 0 and 1 indicating the model's relative confidence in this transcript."
										},
										words: {
											type: "array",
											description: "Array of JSON-formatted Word objects.",
											items: {
												type: "object",
												properties: {
													word: {
														type: "string",
														description: "Distinct word heard by the model."
													},
													start: {
														type: "number",
														description: "Offset in seconds from the start of the audio to where the spoken word starts."
													},
													end: {
														type: "number",
														description: "Offset in seconds from the start of the audio to where the spoken word ends."
													},
													confidence: {
														type: "number",
														description: "Value between 0 and 1 indicating the model's relative confidence in this word."
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		ChannelResult: {
			type: "object",
			description: "Object representing a channel in the underlying audio object.",
			properties: {
				search: {
					type: "array",
					description: "Array of JSON-formatted `SearchResults`.",
					items: {
						type: "object",
						properties: {
							query: {
								type: "string",
								description: "Term for which Deepgram is searching."
							},
							hits: {
								type: "array",
								description: "Array of JSON-formatted Hit objects.",
								items: {
									type: "object",
									properties: {
										confidence: {
											type: "number",
											description: "Value between 0 and 1 that indicates the model's relative confidence in this hit."
										},
										start: {
											type: "number",
											description: "Offset in seconds from the start of the audio to where the hit occurs."
										},
										end: {
											type: "number",
											description: "Offset in seconds from the start of the audio to where the hit ends."
										},
										snippet: {
											type: "string",
											description: "Transcript that corresponds to the time between start and end."
										}
									}
								}
							}
						}
					}
				},
				alternatives: {
					type: "array",
					description: "Array of JSON-formatted `ResultAlternative` objects. This array will have length *n*, where *n* matches the value of the `alternatives` parameter passed in the request body.",
					items: {
						type: "object",
						properties: {
							transcript: {
								type: "string",
								description: "Single-string transcript containing what the model hears in this channel of audio."
							},
							confidence: {
								type: "number",
								description: "Value between 0 and 1 indicating the model's relative confidence in this transcript."
							},
							words: {
								type: "array",
								description: "Array of JSON-formatted Word objects.",
								items: {
									type: "object",
									properties: {
										word: {
											type: "string",
											description: "Distinct word heard by the model."
										},
										start: {
											type: "number",
											description: "Offset in seconds from the start of the audio to where the spoken word starts."
										},
										end: {
											type: "number",
											description: "Offset in seconds from the start of the audio to where the spoken word ends."
										},
										confidence: {
											type: "number",
											description: "Value between 0 and 1 indicating the model's relative confidence in this word."
										}
									}
								}
							}
						}
					}
				}
			}
		},
		SearchResults: {
			type: "object",
			properties: {
				query: {
					type: "string",
					description: "Term for which Deepgram is searching."
				},
				hits: {
					type: "array",
					description: "Array of JSON-formatted Hit objects.",
					items: {
						type: "object",
						properties: {
							confidence: {
								type: "number",
								description: "Value between 0 and 1 that indicates the model's relative confidence in this hit."
							},
							start: {
								type: "number",
								description: "Offset in seconds from the start of the audio to where the hit occurs."
							},
							end: {
								type: "number",
								description: "Offset in seconds from the start of the audio to where the hit ends."
							},
							snippet: {
								type: "string",
								description: "Transcript that corresponds to the time between start and end."
							}
						}
					}
				}
			}
		},
		ResultAlternative: {
			type: "object",
			properties: {
				transcript: {
					type: "string",
					description: "Single-string transcript containing what the model hears in this channel of audio."
				},
				confidence: {
					type: "number",
					description: "Value between 0 and 1 indicating the model's relative confidence in this transcript."
				},
				words: {
					type: "array",
					description: "Array of JSON-formatted Word objects.",
					items: {
						type: "object",
						properties: {
							word: {
								type: "string",
								description: "Distinct word heard by the model."
							},
							start: {
								type: "number",
								description: "Offset in seconds from the start of the audio to where the spoken word starts."
							},
							end: {
								type: "number",
								description: "Offset in seconds from the start of the audio to where the spoken word ends."
							},
							confidence: {
								type: "number",
								description: "Value between 0 and 1 indicating the model's relative confidence in this word."
							}
						}
					}
				}
			}
		},
		Hit: {
			type: "object",
			properties: {
				confidence: {
					type: "number",
					description: "Value between 0 and 1 that indicates the model's relative confidence in this hit."
				},
				start: {
					type: "number",
					description: "Offset in seconds from the start of the audio to where the hit occurs."
				},
				end: {
					type: "number",
					description: "Offset in seconds from the start of the audio to where the hit ends."
				},
				snippet: {
					type: "string",
					description: "Transcript that corresponds to the time between start and end."
				}
			}
		},
		Word: {
			type: "object",
			properties: {
				word: {
					type: "string",
					description: "Distinct word heard by the model."
				},
				start: {
					type: "number",
					description: "Offset in seconds from the start of the audio to where the spoken word starts."
				},
				end: {
					type: "number",
					description: "Offset in seconds from the start of the audio to where the spoken word ends."
				},
				confidence: {
					type: "number",
					description: "Value between 0 and 1 indicating the model's relative confidence in this word."
				}
			}
		},
		StreamResponse: {
			type: "object",
			description: "JSON-formatted object returned as Deepgram transcribes audio. ",
			properties: {
				channel_index: {
					type: "array",
					description: "",
					items: {
						type: "object",
						properties: {
							channel: {
								type: "string",
								description: ""
							},
							num_channels: {
								type: "integer",
								description: ""
							}
						}
					}
				},
				duration: {
					type: "number",
					description: "Duration in seconds."
				},
				start: {
					type: "string",
					description: "Offset in seconds."
				},
				is_final: {
					type: "boolean",
					description: "Indicates final"
				},
				channel: {
					type: "object",
					description: "",
					properties: {
						alternatives: {
							type: "array",
							description: "Array of JSON-formatted `ResultAlternative` objects. This array will have length *n*, where *n* matches the value of the `alternatives` parameter passed in the request body.",
							items: {
								type: "object",
								properties: {
									transcript: {
										type: "string",
										description: "Single-string transcript containing what the model hears in this channel of audio."
									},
									confidence: {
										type: "number",
										description: "Value between 0 and 1 indicating the model's relative confidence in this transcript."
									},
									words: {
										type: "array",
										description: "Array of JSON-formatted Word objects.",
										items: {
											type: "object",
											properties: {
												word: {
													type: "string",
													description: "Distinct word heard by the model."
												},
												start: {
													type: "number",
													description: "Offset in seconds from the start of the audio to where the spoken word starts."
												},
												end: {
													type: "number",
													description: "Offset in seconds from the start of the audio to where the spoken word ends."
												},
												confidence: {
													type: "number",
													description: "Value between 0 and 1 indicating the model's relative confidence in this word."
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		StreamChannel: {
			type: "object",
			description: "",
			properties: {
				alternatives: {
					type: "array",
					description: "Array of JSON-formatted `ResultAlternative` objects. This array will have length *n*, where *n* matches the value of the `alternatives` parameter passed in the request body.",
					items: {
						type: "object",
						properties: {
							transcript: {
								type: "string",
								description: "Single-string transcript containing what the model hears in this channel of audio."
							},
							confidence: {
								type: "number",
								description: "Value between 0 and 1 indicating the model's relative confidence in this transcript."
							},
							words: {
								type: "array",
								description: "Array of JSON-formatted Word objects.",
								items: {
									type: "object",
									properties: {
										word: {
											type: "string",
											description: "Distinct word heard by the model."
										},
										start: {
											type: "number",
											description: "Offset in seconds from the start of the audio to where the spoken word starts."
										},
										end: {
											type: "number",
											description: "Offset in seconds from the start of the audio to where the spoken word ends."
										},
										confidence: {
											type: "number",
											description: "Value between 0 and 1 indicating the model's relative confidence in this word."
										}
									}
								}
							}
						}
					}
				}
			}
		},
		APIKey: {
			type: "object",
			properties: {
				key: {
					type: "string",
					description: "Your new API key. This should replace your username in authentication requests."
				},
				secret: {
					type: "string",
					description: "Your new secret. This should replace your password in authentication requests."
				},
				label: {
					type: "string",
					description: "The user-friendly name of the API key that you submitted in the body of the request."
				}
			}
		},
		APIKeys: {
			type: "object",
			properties: {
				keys: {
					type: "array",
					items: {
						type: "object",
						properties: {
							key: {
								type: "string"
							},
							label: {
								type: "string"
							}
						}
					}
				}
			}
		}
	},
	requestBodies: {
		Audio: {
			description: "Request body when submitting pre-recorded audio. Accepts either:\n\n- raw binary audio data. In this case, include a `Content-Type` header set to the audio [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#Audio_and_video_types).\n- JSON object with a single field from which the audio can be retrieved. In this case, include a `Content-Type` header set to `application/json`.\n",
			content: {
				"application/json": {
					schema: {
						properties: {
							url: {
								type: "string",
								description: "Location of audio file to transcribe.\n"
							}
						},
						required: [
							"url"
						]
					},
					examples: {
						"Submit online file": {
							value: {
								url: "https://static.deepgram.com/examples/interview_speech-analytics.wav"
							},
							description: "Online files must be accessible from Deepgram's servers. Most file hosting services can generate shareable links\nthat can be used for this purpose.\n\n<Note>\nYou can include basic authentication credentials in a URL:\n`https://username:password@example.com/audio`\n\nWe will never log your credentials.\n</Note>\n"
						},
						"Submit local file": {
							value: {
								url: "audio_files/deepgram_pwc_podcast.mp3"
							}
						}
					}
				},
				"application/octet-stream": {
					schema: {
						type: "string",
						format: "binary"
					}
				}
			}
		},
		APIKey: {
			description: "Request body when creating an API key.",
			content: {
				"application/json": {
					schema: {
						properties: {
							label: {
								type: "string",
								description: "User-friendly name of the API Key.",
								example: "My API Key"
							}
						}
					}
				}
			}
		},
		APIDeleteKey: {
			description: "Request body when deleting an API key.",
			content: {
				"application/json": {
					schema: {
						properties: {
							key: {
								type: "string",
								description: "The API key you wish to delete.",
								example: "x020gx00g0s0"
							}
						}
					}
				}
			}
		}
	},
	responses: {
		"404NotFound": {
			description: "The specified resource was not found."
		}
	}
};
const openapi$1 = {
	openapi: openapi,
	servers: servers,
	info: info,
	tags: tags,
	security: security,
	paths: paths,
	components: components
};

export { components, openapi$1 as default, info, openapi, paths, security, servers, tags };
