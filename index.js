const axios = require('axios')
const cheerio = require('cheerio')

const fetchEvents = async () => {
  try {
    await response = axios.get('http://www.go-montreal.com/attraction_events_dec.htm')
  } catch (err) {
    console.error(err)
  }
}
