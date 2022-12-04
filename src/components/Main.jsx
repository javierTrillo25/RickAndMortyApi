import { useState } from "react";
import Location from "./LocationInfo";
import cardLogic from "../Hooks/cardLogic";


const Main = ({location}) => {
    const [cards, setCards] = useState([])
    const [pagNum, setPagNum] = useState(1)
    const [pags, setPags] = useState([])

    cardLogic (location,setCards, setPags, pagNum, setPagNum)

    return (
    <main className='body'>
        <Location
            name={location?.name} 
            dimension={location?.dimension} 
            type={location?.type} 
            population={location?.residents?.length}
        />
        <section className='LocationData'>
            {cards[pagNum - 1]}
        </section>
        <section className="LocationPage">
            {pags}
        </section>
    </main>
    )
}

export default Main