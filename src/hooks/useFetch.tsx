import { useEffect, useState } from 'react'

const useFetch = (
    resource: string,
): any => {
    const API_URL = 'https://pokeapi.co/api/v2'
    const [data, setData] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`${API_URL}/${resource}`)
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
    }, [])

    return { data, isLoading, hasError, errorMessage }
}

export default useFetch
