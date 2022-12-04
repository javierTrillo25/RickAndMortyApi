import { useEffect, useState } from "react"
import axios from "axios"


const LocationSearch = (locationName) => {
    const [Locations, setLocations] = useState([])

    useEffect(() => {
        if(locationName){
            const URL = `https://rickandmortyapi.com/api/location/?name=${locationName}`
            axios.get(URL)
            .then(res => setLocations(res.data.results))
            .catch(err => {
                console.log(err)
                setLocations([])
            })
        }else {
            setLocations([])
        }
    }, [locationName])
    
    return Locations
}

export default LocationSearch