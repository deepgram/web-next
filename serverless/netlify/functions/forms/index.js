const axios = require("axios");

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body);
  const hookId = body.hookId;
  const url = `${process.env.ZAP_HOOK_URL}${hookId}`;
  const {
    data: { data: streams },
  } = await axios.post(url, event.body);
  return {
    statusCode: 200,
    headers: {
      "access-control-allow-origin": "*",
    },
  };
};
