import { useEffect, useState } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import LocationSearch from './Hooks/locationSearch';
import RandomLocation from './Hooks/randomLocation';
import axios from 'axios';


function App() {
  const [locationName, setlocationName] = useState('')
  const [dimensionURl, DimensionURl] = useState('')
  
  const { location, setLocation } = RandomLocation()
  const locationSearch = LocationSearch(locationName)

  const handleLocationSearch = (url, name) => {
    setlocationName(name)
    DimensionURl(url)
  }

  useEffect(() => {
    if(dimensionURl){
      axios.get(dimensionURl)
      .then(res => setLocation(res.data))
      .catch(error => console.log(error))
    }
  }, [dimensionURl])

  return (
    <>
      <Header 
        locationName={locationName} 
        setlocationName={setlocationName} 
        locationSearch={locationSearch} 
        handleLocationSearch={handleLocationSearch}
      />
      <Main 
        locationName={locationName} 
        setlocationName={setlocationName} 
        location={location}
      />
          <footer>
      <p>Todos los derechos reservados Javier Trillo - 2022</p>
    <div className="redes">
      <div className="fIcons">
          <a href="https://www.instagram.com/javiier25/?hl=es" target="_blink"> 
              <img src="https://img.icons8.com/nolan/512/instagram-new.png" alt="" className="fIcon"/> 
          </a>
          <a href="https://web.facebook.com/JtrilloK/" target="_blink">
              <img src="https://img.icons8.com/nolan/512/facebook-new.png"  alt="" className="fIcon"/> 
          </a>
          <a href="https://twitter.com/Javiier25" target="_blink">
              <img src="https://img.icons8.com/nolan/512/twitter.png" alt="" className="fIcon"/>
          </a>
          <a href="https://github.com/javierTrillo25" target="_blink">
            <img src="https://img.icons8.com/nolan/512/github.png" alt="" className="fIcon"/>
        </a>
  </div>
  
  </div>
      </footer>
      </>
  )
}

export default App
