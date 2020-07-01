const { extract } = require('oembed-parser')

exports.handler = (event, context, callback) => {
  const { url } = JSON.parse(event.body)

  extract(url)
    .then(data => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          result: data,
          status: 'success'
        })
      })
    })
    .catch(err => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: err,
          status: 'error'
        })
      })
    })
}
