const axios = require('axios')

exports.handler = async function (event, context) {
  const hookUrl = process.env.THUMBS_HOOK_URL
  const {
    data: { data: streams },
  } = await axios.post(
    hookUrl,
    event.body
    
  )
    return {
      statusCode: 200,
    }  
}