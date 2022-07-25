const Airtable = require('airtable')
Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY })
const base = Airtable.base(process.env.AIRTABLE_BASE_ID)

exports.handler = async (e) => {
  try {
    await completeRecord(e.queryStringParameters.id)
    return res({ message: 'completed' })
  } catch (error) {
    console.log(error)
    return res(error, 500)
  }
}

const res = (body = {}, statusCode = 200) => {
  return { body: JSON.stringify(body), statusCode }
}

const completeRecord = (id) => {
  return new Promise((resolve, reject) => {
    base('submissions').update(id, { completed: true }, (err, record) => {
      if (err) reject(err)
      resolve()
    })
  })
}
