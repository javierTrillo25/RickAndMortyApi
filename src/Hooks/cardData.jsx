import { useState, useEffect } from "react"
import React from "react";
import axios from "axios"

const cardData = (urlChar) => {
    const [char, setChar] = useState({});

    useEffect(() => {
        axios.get(urlChar)
        .then(res => setChar(res.data))
        .catch(err => console.log(err))
    }, [])

    return char
}

export default cardData