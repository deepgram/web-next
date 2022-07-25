const Airtable = require('airtable')
Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY })
const base = Airtable.base(process.env.AIRTABLE_BASE_ID)

const Orbit = require('@orbit-love/activities')

exports.handler = async (e) => {
  try {
    const { name, email, contact, html, js, event, orbit } = JSON.parse(e.body)
    const recordId = await createRecord({
      name,
      email,
      contact,
      html,
      js,
      event,
    })
    await addToOrbit({ name, email, event, orbit })
    return res({ recordId })
  } catch (error) {
    console.log(error)
    return res(error, 500)
  }
}

const res = (body = {}, statusCode = 200) => {
  return { body: JSON.stringify(body), statusCode }
}

const addToOrbit = async (data) => {
  console.log(data)
  try {
    const { event, name, email, orbit: workspace } = data
    const orbit = new Orbit(workspace, process.env.ORBIT_API_KEY)
    const activity = await orbit.createActivity({
      activity_type: 'event:booth_engagement',
      title: 'Created a Speech API Challenge Submission',
      description: `Submitted at ${event}`,
      member: { name, email },
    })
    // console.log({ activity })
    return activity
  } catch (error) {
    throw error
  }
}

const createRecord = (data) => {
  return new Promise((resolve, reject) => {
    base('submissions').create(data, (err, record) => {
      if (err) reject(err)
      resolve(record.getId())
    })
  })
}
