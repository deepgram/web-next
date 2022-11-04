require("dotenv").config();
const axios = require('axios');

const actions = ["published", "unpublished", "deleted"];
const url = 'https://api.github.com/repos/deepgram/web-next/dispatches';
const githubPAT = process.env.GITHUB_BUILD_PAT;

exports.handler = async function (event) {
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

	const { action } = JSON.parse(event.body);

	if (actions.find((a) => a === action)) {
		await axios.post(url, {
			event_type: "publish_blog",
		},
			{
				headers: {
					Authorization: `token ${githubPAT}`,
				}
			});
	}

	return {
		statusCode: 200,
	};
};
