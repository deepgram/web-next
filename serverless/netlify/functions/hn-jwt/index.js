const axios = require('axios')
const jwt = require('jsonwebtoken')

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body)
  const email = body.email || "devrel@deepgram.com"
  const name = body.name || "DG DevEx"
  const secret = process.env.HELLONEXT_SSO
  const token = jwt.sign({email,
    name}, secret, { algorithm: "HS256" })
  
    return {
      statusCode: 200,
      body: JSON.stringify( { token })
    }  
}