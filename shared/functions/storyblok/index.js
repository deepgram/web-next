require("dotenv").config();
const axios = require('axios');
const crypto = require('crypto');

const actions = ["published", "unpublished", "deleted"];
const url = 'https://api.github.com/repos/deepgram/web-next/dispatches';
const githubPAT = process.env.GITHUB_BUILD_PAT;
const webhookSecret = process.env.STORYBLOK_WEBHOOK_SECRET;

function verifySignature(body, signature) {
	let bodyHmac = crypto.createHmac('sha1', webhookSecret)
		.update(JSON.stringify(body))
		.digest('hex');

	if (bodyHmac !== signature) {
		throw new Error('Signature mismatch!');
	}
}

exports.handler = async function (event) {

	const signature = event.headers['webhook-signature'];
	const body = JSON.parse(event.body);

	try {
		verifySignature(body, signature);
	} catch (err) {
		return {
			statusCode: 403,
		};
	}

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

	const { action } = body;

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
