import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Countries from './components/Countries'
import Country from './components/Country'
import Header from './components/Header'
import Tools from './components/Tools'

function App() {
  const [inputSearch, setInputSearch] = useState('')
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [continent, setContinent] = useState('title');
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <Router>
      <Header
        lightTheme={lightTheme}
        setLightTheme={setLightTheme}
      />
      <div className="container">
        <Route exact path="/">
          <Tools
            inputSearch={inputSearch}
            setInputSearch={setInputSearch}
            countries={countries}
            setCountries={setCountries}
            continent={continent}
            setContinent={setContinent}
            lightTheme={lightTheme}
          />
          <Countries
            inputSearch={inputSearch}
            countries={countries}
            setCountries={setCountries}
            filteredCountries={filteredCountries}
            setFilteredCountries={setFilteredCountries}
            continent={continent}
            lightTheme={lightTheme}
          />
        </Route>
        <Route path="/countries/:name" children={<Country lightTheme={lightTheme} />}></Route>
      </div>

    </Router >
  );
}

export default App;
