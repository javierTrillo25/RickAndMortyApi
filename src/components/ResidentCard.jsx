import React from "react"
import cardData from "../Hooks/cardData"

const ResidentCard = ({urlChar}) => {
    const char = cardData(urlChar)
    return (
    <article className="CharResident">
        <div className="ResidentStatus">
            <i 
            className={`bx bxs-circle ${ char?.status }`}
            />
            <p>{char?.status}</p>
        </div>
        <figure>
            <img src={char?.image} alt="" />
            <figcaption>{char?.name}</figcaption>
        </figure>
        <hr />
        <p className="ResidentTittle">Breed</p>
        <p>{char?.species}</p>
        <p className="ResidentTittle">Origin</p>
        <p>{char?.origin?.name}</p>
        <p className="ResidentTittle">Appearance episodes</p>
        <p>{char?.episode?.map(episodeU => episodeU.split('/')[episodeU.split('/').length - 1]).join(', ')}</p>
    </article>
    )
}

export default ResidentCard