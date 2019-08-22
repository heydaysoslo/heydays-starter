export const handler = (event, context, callback) => {
  const body = JSON.parse(event.body)

  console.log(body)

  const responses = [
    {
      statusCode: 200,
      body: JSON.stringify({ statusCode: 200, ...body, status: 'success' })
    },
    {
      statusCode: 500,
      body: JSON.stringify({ statusCode: 500, ...body, status: 'error' })
    }
  ]

  const randomResponse = responses[Math.floor(Math.random() * responses.length)]

  console.log(randomResponse)

  setTimeout(() => {
    callback(null, randomResponse)
  }, 5000)
}
