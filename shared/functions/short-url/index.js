const { Client, query } = require("faunadb");

const client = new Client({
	secret: process.env.FAUNADBSECRET,
});

exports.handler = async (event, context) => {
	const shortUrl = await getLongUrl(event.queryStringParameters.path);
	const redirectUrl = shortUrl ? shortUrl.target : "https://deepgram.com/";

	return {
		statusCode: 302,
		headers: {
			location: redirectUrl,
			"Cache-Control": "no-cache",
		},
		body: JSON.stringify({}),
	};
};

const getLongUrl = async (path) => {
	// Lookup path in FaunaDb & get the longUrl if it exists
	try {
		const response = await client.query(
			query.Map(query.Paginate(query.Match(query.Index("shortCodesBySource"), path)), query.Lambda("shortcodes", query.Get(query.Var("shortcodes"))))
		);

		if (response.data && response.data.length > 0) {
			return response.data[0];
		}
	} catch (err) {
		console.log(err);
	}

	return undefined;
};
