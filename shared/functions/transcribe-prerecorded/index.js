const { Deepgram } = require("@deepgram/sdk");
require("dotenv").config();

const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);

const headers = {
	"Access-Control-Allow-Methods": "POST",
};

exports.handler = async function transcribePrerecorded(event) {
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
