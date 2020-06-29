// Mailchimp implementation
require('dotenv').config()
const axios = require('axios')

export const handler = (event, context, callback) => {
  const { email, concent } = JSON.parse(event.body)

  axios({
    method: 'post',
    url: `https://us2.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/`, //change region (us2) based on last values of apiKey.
    data: {
      email_address: email,
      status: 'subscribed'
    },
    auth: {
      username: 'apikey', // any value will work
      password: process.env.MAILCHIMP_API_KEY
    }
  })
    .then(function(response) {
      // Return data to AJAX request
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({ emailAdded: true, status: 'success' })
      })
    })
    .catch(function(error) {
      // if (error.response) {
      //   // The request was made and the server responded with a status code
      //   // that falls out of the range of 2xx
      //   console.log(error.response.data)
      //   // console.log(error.response.status)
      //   // console.log(error.response.headers)
      // } else if (error.request) {
      //   // The request was made but no response was received
      //   console.log(error.request)
      // } else {
      //   // Something happened in setting up the request that triggered an Error
      //   console.log('Error', error.message)
      // }
      // console.log(error.config)

      // update subscription status if unsubscribed
      if (error.response.data.title === 'Member Exists') {
        const md5 = require('md5')

        axios({
          method: 'PUT',
          url: `https://us2.api.mailchimp.com/3.0/lists/${
            process.env.MAILCHIMP_LIST_ID
          }/members/${md5(email.toLowerCase())}`, //change region (us2) based on last values of apiKey.
          data: {
            status: 'subscribed'
          },
          auth: {
            username: 'apikey', // any value will work
            password: process.env.MAILCHIMP_API_KEY
          }
        })
          .then(function(response) {
            // Return data to AJAX request
            callback(null, {
              statusCode: 200,
              body: JSON.stringify({
                statusCode: 200,
                response: error.response.data,
                status: 'exists'
              })
            })
          })
          .catch(function(error) {
            console.log('Error', error.response.data)
            callback(null, {
              statusCode: 500,
              body: JSON.stringify({
                statusCode: 500,
                response: error.response.data,
                status: 'error'
              })
            })
          })
      } else {
        callback(null, {
          statusCode: 500,
          body: JSON.stringify({
            statusCode: 500,
            response: error.response.data,
            status: 'error'
          })
        })
      }
    })
}
