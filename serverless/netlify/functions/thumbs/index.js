const axios = require('axios')

exports.handler = async function (event, context) {
  const {
    data: { data: streams },
  } = await axios.post(
    `https://hooks.zapier.com/hooks/catch/11179787/bgv9wf1/`,
    event.body
    
  )
    return {
      statusCode: 200,
    }  
}