import React, { useState, useEffect } from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { Link, useParams } from 'react-router-dom'

const Country = ({ lightTheme }) => {
    const [country, setCountry] = useState([])
    const { name } = useParams()

    const fetchCountryByName = async () => {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        const country = await response.json()
        setCountry(country)
    }

    useEffect(() => {
        fetchCountryByName()
    }, [])

    return (

        <section className="country-all">
            <Link to='/' className="country-all__link">
                <div className={`country-all__link-back flex flex-ai-c flex-jc-sb transition ${lightTheme ? 'light-theme' : ''}`}>
                    <HiArrowNarrowLeft className={`country-all__link-back-arrow transition ${lightTheme ? 'light-theme' : ''}`} />
                    <button>Back</button>
                </div>
            </Link>

            {country.map((c) => {
                const { flag, name, population, region, capital, numericCode, nativeName, subregion, topLevelDomain, currencies, languages } = c

                return (
                    <div className="country-all-each-wrapper" key={numericCode}>
                        <div className="country-all-each flex flex-ai-c flex-jc-c" key={numericCode}>
                            <div className="country-all-each__img-wrapper">
                                <img src={flag} alt={name} />
                            </div>
                            <div className={`country-all-each__info flex transition ${lightTheme ? 'light-theme' : ''}`}>
                                <h2>{name}</h2>
                                <div className="country-all-each__info-left">
                                    <p><span>Native Name: </span>{nativeName}</p>
                                    <p><span>Population: </span>{population.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</p>
                                    <p><span>Region: </span>{region}</p>
                                    <p><span>Sub Region: </span>{subregion}</p>
                                    <p><span>Capital: </span>{capital}</p>
                                </div>
                                <div className="country-all-each__info-right">
                                    <p><span>Top Level Domain: </span>{topLevelDomain}</p>
                                    <p><span>Currencies: </span>{currencies[0].name}</p>
                                    <p><span>Languages: </span>{languages[0].name}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })}

        </section>
    )
}

export default Country
