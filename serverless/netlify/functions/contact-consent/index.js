const axios = require('axios')
const jwt = require('jsonwebtoken')

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body)
  console.log("body", body)
  const email = body.email
  const secret = process.env.HELLONEXT_SSO
  const token = jwt.sign({email}, secret, { algorithm: "HS256" })
  console.log('token', token)
  const {
    data,
  } = await axios.put(
    `https://app.hellonext.co/api/v3/feature_requests/${body.postId}`,
    {
      description: body.description + `<br/><br/><p>Email: ${body.email}</p>`,
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
    console.log("data", data)
    return {
      statusCode: 200,
    }  
}