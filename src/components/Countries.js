import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const url = 'https://restcountries.eu/rest/v2/all';

const Countries = ({ setCountries, countries, inputSearch, filteredCountries, setFilteredCountries, continent, lightTheme }) => {

    const fetchCountryData = async () => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
    }

    useEffect(() => {
        fetchCountryData()
    }, [])

    const filterCountries = () => {
        setFilteredCountries(countries.filter((country) => {
            return country.name.toLowerCase().includes(inputSearch.toLowerCase())
        }))
    }

    useEffect(() => {
        filterCountries();
    }, [inputSearch])

    const filterByContinent = () => {
        switch (continent) {
            case 'africa':
                setFilteredCountries(countries.filter(country => country.region === 'Africa'));
                break;
            case 'america':
                setFilteredCountries(countries.filter(country => country.region === 'Americas'));
                break;
            case 'asia':
                setFilteredCountries(countries.filter(country => country.region === 'Asia'));
                break;
            case 'europe':
                setFilteredCountries(countries.filter(country => country.region === 'Europe'));
                break;
            case 'oceania':
                setFilteredCountries(countries.filter(country => country.region === 'Oceania'));
                break;
            default:
                setFilteredCountries(countries);
        }
    }

    useEffect(() => {
        filterByContinent();
    }, [countries, continent])


    return (
        <>
            <section className="countries-wrapper flex flex-jc-sb">
                {filteredCountries.map((country) => {
                    const { flag, name, population, region, capital, numericCode } = country

                    return (
                        <div className={`country transition ${lightTheme ? 'light-theme' : ''}`} key={numericCode}>
                            <Link to={`/countries/${name}`}>
                                <img src={flag} alt={name} className="country__img" />
                            </Link>
                            <div className="country__info">
                                <h4>{name}</h4>
                                <p><span>Population: </span>{population.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</p>
                                <p><span>Region: </span>{region}</p>
                                <p><span>Capital: </span>{capital}</p>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default Countries
