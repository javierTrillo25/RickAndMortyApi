import { useEffect, useState } from 'react'

const Header = ({locationName, setlocationName, locationSearch, handleLocationSearch}) => {
    const [isActiveInput, setIsActiveInput] = useState(false)

    const imputOut = e => {
    if(e.target.classList[0] !== 'imputCheck' &&
        e.target.classList[0] !== 'listCheck') {
        setIsActiveInput(false)
    }
        }
    useEffect(() => {
    document.addEventListener('click', imputOut)
    }, [])

    return (
    <header className='header'>
        <section className='Header2'>
            <article className='Header-Seach-Con'>
            <input className='imputCheck'
                onFocus={() => setIsActiveInput(true)} value={locationName}
                placeholder='Dimension Searcher'onChange={e => {
                setIsActiveInput(true)
                setlocationName(e.target.value)
                }}
                type="text" />
            <section className={`listCheck ${isActiveInput ? 'on' : 'off'}`}>
                {locationSearch.map(searchedLocation => (
                <p key={searchedLocation?.url} onClick={() => handleLocationSearch(searchedLocation?.url, searchedLocation.name)}>{searchedLocation.name}</p>
                ))}
            </section>
            </article>
        </section>
</header>
)
}

export default Header