const axios = require('axios')
const baseUri = 'https://maps.googleapis.com/maps/api/place/details/json'
const querystring = require('querystring');

module.exports = (key, placeid) => {

  const parameters = {
    key,
    placeid,
    fields: 'formatted_address,geometry,icon,name,permanently_closed,photos,place_id,plus_code,types,opening_hours,open_now,price_level,rating,user_ratings_total'
  }

  return axios.get(`${baseUri}?${querystring.stringify(parameters)}`)
}