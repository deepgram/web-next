const core = require("@actions/core");
const github = require("@actions/github");
const httpm = require("@actions/http-client");

const { SHORT_URL_FUNCTION_URL } = process.env;

try {
	// Identify files & slugs to generate
	const files = core.getInput("files");

	console.dir(files);
} catch (error) {
	core.setFailed(error.message);
}

const getShortUrl = async (longUrl) => {
	const https = new httpm.HttpClient();
	const result = await https.post(
		SHORT_URL_FUNCTION_URL,
		JSON.stringify({
			longUrl,
			honeypot: "",
		}),
		{
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	);

	const body = await result.readBody();
	const urls = JSON.parse(body);

	return urls.shortUrl;
};
