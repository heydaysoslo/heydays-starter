exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ status: "S'all good from netlify-functions 😎" })
  })
}
