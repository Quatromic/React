import { useState,useEffect } from "react"

const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [isLoading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()

        setTimeout(() => {fetch(url,{ signal: abortController.signal}).
            then(response => {
                if(!response.ok){
                    throw Error("Couldn't fetch that data from the defined resource")
                }
                return response.json()
            })
            .then(data => {
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch(Error => {
                if(Error.name === "AbortError"){
                    console.log("Fetch aborted")
                }
                else{
                    setLoading(false)
                    setError(Error.message)
                }
            })
            return () => abortController.abort()},2000)
    },[url])

    return { data,isLoading,error }
}

export default useFetch