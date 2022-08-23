const { Deepgram } = require("@deepgram/sdk");
require("dotenv").config();

const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);

const buildCorsHeaders = (event, methods) => {
	// set default Access-Control-Allow-Origin to the current deployed URL
	let corsOrigin = process.env.URL;

	// get "allow-list" CORS domains from environment variable
	const cors = process.env.DEEPGRAM_SERVERLESS_CORS;

	// get "origin" or referer from request headers
	const origin = event.headers["origin"] || event.headers["referer"];

	// do we have an allow-list and origin?
	if (cors && origin) {
		// parse the origin as a URL
		const eventOrigin = new URL(origin);

		// get allow-list as an array
		const corsDomains = [process.env.URL, process.env.DEPLOY_URL, ...cors.split(", ")];

		// find the current request origin in the allow-list
		const thisCors = corsDomains.indexOf(eventOrigin.origin);

		// if in the allow-list, over-ride the Access-Control-Allow-Origin
		if (thisCors > -1) {
			corsOrigin = corsDomains[thisCors];
		}
	}

	return {
		"Access-Control-Allow-Origin": corsOrigin,
		"Access-Control-Allow-Headers": "Content-Type",
		"Access-Control-Allow-Methods": methods,
		Allow: methods,
		Vary: "Origin",
	};
};

exports.handler = async function transcribePrerecorded(event) {
	const headers = buildCorsHeaders(event, "POST, OPTIONS");

	switch (event.httpMethod) {
		case "OPTIONS":
			return {
				statusCode: 200,
				body: "OK",
				headers,
			};
		case "POST":
			// format of body is now { url: "https:// etc" }
			// but don't pass the parsed body to the function, to avoid abuse
			const { url } = JSON.parse(event.body);

			try {
				const transcription = await deepgram.transcription.preRecorded({ url }, { punctuate: true });

				return {
					statusCode: 200,
					body: JSON.stringify(transcription.results.channels[0].alternatives[0]),
					headers,
				};
			} catch (err) {
				// eslint-disable-next-line no-console
				console.log(err);

				return {
					statusCode: 500,
					body: "Server Error",
					headers,
				};
			}
		default:
			return {
				statusCode: 405,
				body: "Method Not Allowed",
				headers,
			};
	}
};
