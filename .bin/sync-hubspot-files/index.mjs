import * as dotenv from "dotenv";
import hubspot from "@hubspot/api-client";

dotenv.config();

const { HSPOT_ACCESS_TOKEN, HSPOT_API_KEY } = process.env;
const hubspotClient = new hubspot.Client({ accessToken: HSPOT_ACCESS_TOKEN, developerApiKey: HSPOT_API_KEY });

const response = await hubspotClient.apiRequest({
	method: "GET",
	path: "/files/v3/files/53195473551",
});

console.log(response);
