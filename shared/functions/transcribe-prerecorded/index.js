const { Deepgram } = require("@deepgram/sdk");
require("dotenv").config();

const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);

exports.handler = async function transcribePrerecorded(event) {
	const cors = process.env.DEEPGRAM_SERVERLESS_CORS;
	let corsOrigin = "*";

	const eventOrigin = new URL(event.headers["origin"] || event.headers["referer"]);

	if (cors) {
		const corsDomains = [process.env.URL, process.env.DEPLOY_URL, ...cors.split(", ")];
		const thisCors = corsDomains.indexOf(eventOrigin.origin);

		if (thisCors < 0) {
			return {
				statusCode: 403,
				body: "Forbidden by allow-list",
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "POST, GET, OPTIONS",
				},
			};
		}

		corsOrigin = corsDomains[thisCors];
	}

	const headers = {
		"Access-Control-Allow-Origin": corsOrigin,
		"Access-Control-Allow-Methods": "GET",
	};

	// Only allow POST
	if (event.httpMethod !== "POST") {
		return {
			statusCode: 405,
			body: "Method Not Allowed",
		};
	}

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
			headers,
		};
	}
};
