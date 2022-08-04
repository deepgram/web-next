require("dotenv").config();
const { Deepgram } = require("@deepgram/sdk");
const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);

exports.handler = async function transcribePrerecorded(event) {
	// Only allow POST
	if (event.httpMethod !== "POST") {
		return {
			statusCode: 405,
			body: "Method Not Allowed",
			headers: {
				Allow: "Get",
			},
		};
	}

	file = JSON.parse(event.body);
	source = { url: file };

	try {
		const transcription = await deepgram.transcription.preRecorded(source, {
			punctuate: true,
		});

		return {
			statusCode: 200,
			body: JSON.stringify(transcription.results.channels[0].alternatives[0]),
			headers: { "access-control-allow-origin": "*" },
		};
	} catch (err) {
		console.log(err);

		return {
			statusCode: 500,
			headers: { "access-control-allow-origin": "*" },
		};
	}
};
