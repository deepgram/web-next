const axios = require('axios')
const jwt = require('jsonwebtoken')

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body)
  const email = body.email || "devrel@deepgram.com"
  const secret = process.env.HELLONEXT_SSO
  const token = jwt.sign({email, name: body.name}, secret, { algorithm: "HS256" })
  const payload = {
    title: body.feedback,
    description: `Submitted from ${body.page}`,
    bucket_id: 10405,
  }
  
  await axios.post(
    "https://app.hellonext.co/api/v3/feature_requests",
    payload,
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