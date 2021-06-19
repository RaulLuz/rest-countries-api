import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Tools = ({ setInputSearch, setContinent, lightTheme }) => {
    const continentHandler = (e) => {
        setContinent(e.target.value);
    }

    return (
        <section className="tools flex flex-ai-c flex-jc-sb">
            <div className={`tools__search flex flex-ai-c transition ${lightTheme ? 'light-theme' : ''}`}>
                <AiOutlineSearch className="magnifier" />
                <input type="search" placeholder="Search for a Country..." onInput={(e) => setInputSearch(e.target.value)} />
            </div>

            <div className={`tools__filter-wrapper transition ${lightTheme ? 'light-theme' : ''}`}>
                <select className={`tools__filter transition ${lightTheme ? 'light-theme' : ''}`} id="regions" onChange={continentHandler}>
                    <option value="title" hidden>Filter by Region</option>
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}

export default Tools
