const axios = require("axios");
const querystring = require("querystring");

exports.handler = async function (event, context) {
	let body = {};

	console.log(event);

	try {
		body = JSON.parse(event.body);
	} catch (e) {
		body = querystring.parse(event.body);
	}

	let { honeypot, hook, redirect, ...payload } = body;
	const url = `${process.env.ZAP_HOOK_URL}${hook}`;

	let statusCode;
	let headers = {
		"access-control-allow-origin": "*",
	};

	if (honeypot !== "") {
		console.log("honeypot triggered");

		statusCode = redirect ? 302 : 200; // fake 200
		redirect = event.headers.referer;
	} else {
		try {
			await axios.post(url, payload);

			statusCode = redirect ? 302 : 200;
		} catch (err) {
			console.log(err);

			statusCode = redirect ? 302 : 500;
			redirect = `${event.headers.referer}?error=500`;
		}
	}

	if (redirect) {
		headers["Location"] = redirect;
	}

	return {
		statusCode,
		headers,
	};
};
