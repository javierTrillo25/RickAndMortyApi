import { useEffect, useState } from "react"
import axios from "axios"

const RandomLocation = () => {
    const [location, setLocation] = useState({})

    const getRandomNumber = () =>{
        return Math.floor(Math.random() * 126) + 1 
    }

    useEffect(() => {
        const URL = `https://rickandmortyapi.com/api/location/${getRandomNumber()}`
        axios.get(URL)
        .then(res => {
            setLocation(res.data)})
        .catch(er => console.log(err))
    }, [])

    return { location, setLocation }
}

export default RandomLocation