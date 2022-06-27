//@ts-expect-error
import { useState, useEffect } from 'react'

/**
 * get data from API
 * @param {String} url The path to get data
 * @returns  {Objet[]} The data from the URL.
 */

export function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (!url) return
    async function fetchData() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    setLoading(true)
    fetchData()
  }, [url])

  return { isLoading, data }
}
