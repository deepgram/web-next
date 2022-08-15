const { Deepgram } = require("@deepgram/sdk");
require("dotenv").config();

const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);
const deepgramProjectId = process.env.DEEPGRAM_PROJECT_ID;

const headers = {
	"Access-Control-Allow-Methods": "GET",
};

exports.handler = async function (event) {
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
