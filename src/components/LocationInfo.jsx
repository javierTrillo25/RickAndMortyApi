import React from "react"


const Location = ({name, dimension, type, population}) => {
    return (
    <section className='BodyIL'>
        <h1>Rick, which dimension are we in?</h1>
        <br />
        <div className='Info-LTion'>
            <div className='Tittle_Info-LTion'>
                <h2>{name}</h2>
            </div>
            <div className='InfoCard'>
                <p><span>Type:</span> {type}</p>
                <p><span>Dimension:</span> {dimension}</p>
                <p><span>Population:</span> {population}</p>
            </div>
        </div>
    </section>
    )
}

export default Location