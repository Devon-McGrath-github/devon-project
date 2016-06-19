import request from 'superagent'

var imagesApi = 'https://api.themoviedb.org/3/discover/movie?/550&api_key=b6e723876265b349536936ccc2ca2b01'

module.exports = {
  getBackgrounds: getBackgrounds,
}

function getBackgrounds(callback) {
  request
    .get(imagesApi)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}
