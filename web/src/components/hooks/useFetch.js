import { useState, useEffect } from 'react'

/**
 *
 * @param {string} url
 * @param {object} options
 *
 * Usage:
 * const {response, error, isLoading} = useFetch(`https://api.kanye.rest`)
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

    fetchData()
  }, [url])

  return { response, error, isLoading }
}

export default useFetch
