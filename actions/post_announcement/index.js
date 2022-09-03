const core = require("@actions/core");
const github = require("@actions/github");
const httpm = require("@actions/http-client");

const { SHORT_URL_FUNCTION_URL } = process.env;

try {
    // Identify files & slugs to generate
    //const files = github.context?.payload?.head_commit?.added;

    console.dir(github.context.payload, { depth: null });

    // for (const file of files) {
    //     if (file.indexOf("blog/posts/") >= 0 && file.indexOf("index.md") >= 0) {
    //         // blog post
    //         console.log(`Found: ${file}`);
    //     }
    // }
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
