import request from 'superagent'

let auth = '563492ad6f9170000100000164ea0d7bbe0242c650dec13e37ced7cc'
var imagesApi = ('http://api.pexels.com/v1/search?query=example+query&per_page=15&page=1' + '?')

module.exports = {
  getBackgrounds: getBackgrounds,
}

function getBackgrounds(callback) {
  request
    .get(imagesApi, auth)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}
