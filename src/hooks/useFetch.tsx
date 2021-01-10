import { useEffect, useState } from 'react'

const useFetch = (resource: string): any => {
    const [data, setData] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [url, updateUrl] = useState(`https://pokeapi.co/api/v2/${resource}`)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url)
                const result = await response.json()
                if (response.ok) {
                    setData(result)
                } else {
                    setHasError(true)
                    setErrorMessage(result)
                }
            } catch (error) {
                setHasError(true)
                setErrorMessage(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { data, isLoading, hasError, errorMessage, updateUrl }
}

export default useFetch
