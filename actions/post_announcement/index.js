import core from "@actions/core";
import httpm from "@actions/http-client";

const {
    SHORT_URL_FUNCTION_URL,
    SLACK_WEBHOOK_URL } = process.env;

const utm_sources = [
    { label: 'Twitter', source: 'twitter' },
    { label: 'DEVto', source: 'devto' },
    { label: 'LinkedIn', source: 'linkedin' },
    { label: 'Medium', source: 'medium' },
    { label: 'Reddit', source: 'reddit' },
    { label: 'Facebook', source: 'facebook' }
]

const processPost = async (filename) => {
    const slug = filename.split('/')[3];
    const postUrl = `https://blog.deepgram.com/${slug}/`;

    const shortUrls = [];

    for (const source of utm_sources) {
        const shortUrl = await getShortUrl(
            `${postUrl}?utm_source=${source.source}&utm_campaign=blog&utm_content=${slug}`);
        shortUrls.push({
            label: source.label,
            shortUrl
        });
    }

    const socials = shortUrls.map(s => `${s.label}: ${s.shortUrl}\n`).join('')
    const message = `A new blog post has been published.\nPost URL:\n${postUrl}\n\nShort urls were generated for this post to use in socials & cross-posting.\n\n${socials}**Cross-posted link UTMs:**  ?utm_source={medium|devto|hashnode|etc}&utm_campaign=blog&utm_content=${slug}\n\n/cc @dgsocial`

    console.log(message)

    //await sendToSlack(message);
}

const getShortUrl = async (longUrl) => {
    const https = new httpm.HttpClient();
    const result = await https.postJson(
        SHORT_URL_FUNCTION_URL,
        {
            longUrl,
            honeypot: "",
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    if (result.result) {
        return result.result.json.shortUrl;
    }

    return undefined;
};

const sendToSlack = async (message) => {
    await https.post(
        SLACK_WEBHOOK_URL,
        JSON.stringify({
            message
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
}

try {
    // Identify files & slugs to generate
    const inputfiles = core.getInput("files");

    const files = inputfiles.split(" ");

    for (const file of files) {
        await processPost(file);
    }

} catch (error) {
    core.setFailed(error.message);
}