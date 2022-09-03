import core from "@actions/core";
import github from "@actions/github";
import httpm from "@actions/http-client";

const { SHORT_URL_FUNCTION_URL } = process.env;

const processPost = async (filename) => {
    console.log(filename)
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

try {
    // Identify files & slugs to generate
    const inputfiles = core.getInput("files");

    console.log(inputfiles);
    const files = inputfiles.split(" ");

    for (const file of files) {
        await processPost(file);
    }

} catch (error) {
    core.setFailed(error.message);
}