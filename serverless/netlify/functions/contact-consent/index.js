const axios = require('axios')
const jwt = require('jsonwebtoken')

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body)
  const email = body.email
  const secret = process.env.HELLONEXT_SSO
  const token = jwt.sign({email}, secret, { algorithm: "HS256" })
  const {
    data,
  } = await axios.put(
    `https://app.hellonext.co/api/v3/feature_requests/${body.postId}`,
    {
      description: body.description,
    },
    {
      headers: {
        "API-KEY": process.env.HELLO_NEXT_API,
        "Authorization": token,
        "Content-Type": "application/json",
        "Accept": "application/json",
        "ALLOW-PRIVATE": false
      }
    }
    )
    return {
      statusCode: 200,
    }  
}