import React from "react";
import ResidentCard from "../components/ResidentCard";
import Page from "../components/pag";
import { useEffect } from "react";


const CardLogic = (location, setCards, setPags, NumPag, setNumPag) => {
    useEffect(() => {
        if(Object.keys(location).length !== 0){
            const ArrPag = []
            const quantity = Math.ceil(location?.residents.length / 20)
            for(let i = 1; i <= quantity; i++){
                ArrPag.push((
                <Page key={i} page={i} NumPag={NumPag} setNumPag={setNumPag}
                />
                ))
            }
            setPags(ArrPag)
        }
        }, [NumPag, location])

    useEffect(() => {
        if(Object.keys(location).length !== 0){
            const quantity = Math.ceil(location?.residents.length / 20)
            const Card = []
                for(let i = 0; i <= quantity - 1; i++){
            const subCard = []
            for(let cardAmount = (i + 1)*20 - 20;cardAmount < (i+1)*20 && cardAmount <= location?.residents.length - 1;cardAmount++){
                subCard.push((
                    <ResidentCard 
                key={location?.residents[cardAmount]} 
                urlChar={location?.residents[cardAmount]} 
                />
                ))
            }
            Card.push(subCard)
            }
            setCards(Card)
        }
        }, [location])
}

export default CardLogic
