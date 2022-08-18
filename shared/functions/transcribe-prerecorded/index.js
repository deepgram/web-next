const { Deepgram } = require("@deepgram/sdk");
require("dotenv").config();

const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);

exports.handler = async function transcribePrerecorded(event) {
	switch (event.httpMethod) {
		case "OPTIONS":
			return {
				statusCode: 200,
				body: "OK",
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Headers": "Content-Type",
					"Access-Control-Allow-Methods": "POST, OPTIONS",
					Allow: "POST, OPTIONS",
					Vary: "Origin",
				},
			};
		case "POST":
			const cors = process.env.DEEPGRAM_SERVERLESS_CORS;
			let corsOrigin = "*";

			const origin = event.headers["origin"] || event.headers["referer"];

			if (cors && origin) {
				const eventOrigin = new URL(origin);
				const corsDomains = [process.env.URL, process.env.DEPLOY_URL, ...cors.split(", ")];
				const thisCors = corsDomains.indexOf(eventOrigin.origin);

				if (thisCors < 0) {
					return {
						statusCode: 403,
						body: "Forbidden by allow-list",
						headers: {
							"Access-Control-Allow-Origin": "*",
							"Access-Control-Allow-Headers": "Content-Type",
							"Access-Control-Allow-Methods": "POST, OPTIONS",
							Allow: "POST, OPTIONS",
							Vary: "Origin",
						},
					};
				}

				corsOrigin = corsDomains[thisCors];
			}

			const headers = {
				"Access-Control-Allow-Origin": corsOrigin,
				"Access-Control-Allow-Headers": "Content-Type",
				"Access-Control-Allow-Methods": "POST, OPTIONS",
				Allow: "POST, OPTIONS",
				Vary: "Origin",
			};

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
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Headers": "Content-Type",
					"Access-Control-Allow-Methods": "POST, OPTIONS",
					Allow: "POST, OPTIONS",
					Vary: "Origin",
				},
			};
	}
};
