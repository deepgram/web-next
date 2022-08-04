const { Deepgram } = require("@deepgram/sdk");
require("dotenv").config();

const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);
const deepgramProjectId = process.env.DEEPGRAM_PROJECT_ID;

exports.handler = async function () {
	try {
		const key = await deepgram.keys.create(deepgramProjectId, "Temporary key", ["member"], {
			timeToLive: 5,
		});

		return {
			statusCode: 200,
			body: JSON.stringify(key),
			headers: { "access-control-allow-origin": "*" },
		};
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);

		return {
			statusCode: 500,
			headers: { "access-control-allow-origin": "*" },
		};
	}
};
