import { useState, useEffect, useRef } from 'react'

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
  const initialOptions = useRef(options)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(url, { initialOptions })
        const data = await request.json()
        setResponse(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
      }
    }

    fetchData()
  }, [url, initialOptions])

  return { response, error, isLoading }
}

export default useFetch
