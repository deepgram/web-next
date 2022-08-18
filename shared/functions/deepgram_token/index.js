const { Deepgram } = require("@deepgram/sdk");
require("dotenv").config();

const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);
const deepgramProjectId = process.env.DEEPGRAM_PROJECT_ID;

exports.handler = async function (event) {
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

	// Only allow GET
	if (event.httpMethod !== "GET") {
		return {
			statusCode: 405,
			body: "Method Not Allowed",
			headers: {
				Allow: "Get",
			},
		};
	}

	try {
		const key = await deepgram.keys.create(deepgramProjectId, "Temporary key", ["member"], {
			timeToLive: 5,
		});

		return {
			statusCode: 200,
			body: JSON.stringify(key),
			headers,
		};
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);

		return {
			statusCode: 500,
			headers,
		};
	}
};
