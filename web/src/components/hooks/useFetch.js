import { useState, useEffect } from 'react'

/**
 *
 * @param { string | Array } url
 * @param { object } options
 *
 * Usage:
 * const {response, error, isLoading} = useFetch(`https://api.kanye.rest`)
 *
 * => { "quote": "Only free thinkers" }
 *
 *
 * fetch multiple
 *
 * const { response, error, isLoading } = useFetch([
 * {
 *  key: 'rss',
 *  url: `https://api.rss2json.com/v1/api.json?rss_url=`
 * },
 * {
 *  key: 'kanye',
 *  url: `https://api.kanye.rest`
 * }
 * ])
 *
 * => {
 *  "rss": { "status": "error", "message": "`rss_url` parameter must be a valid url." },
 *  "kanye": { "quote": "Distraction is the enemy of vision" }
 * }
 *
 * We're only handling one set options. If you're doing post one and get on another.
 * I would suggest splitting into two useFetch
 */

const useFetch = (url, options = {}) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(url, { options })
        const data = await request.json()
        setResponse(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    async function fetchMultipleData(urls) {
      urls.forEach(async (item, i) => {
        try {
          const request = await fetch(item.url, { options })
          const data = await request.json()
          setResponse(response =>
            Object.assign(
              {},
              {
                ...response,
                [item.key]: data
              }
            )
          )
          setIsLoading(false)
        } catch (error) {
          setError(error)
          setIsLoading(false)
        }
      })
    }
    if (typeof url === 'string') {
      fetchData()
    } else {
      fetchMultipleData(url)
    }
  }, [])

  return { response, error, isLoading }
}

export default useFetch
