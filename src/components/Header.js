import React from 'react'
import { FaMoon } from 'react-icons/fa'
import { FaRegMoon } from 'react-icons/fa'

const Header = ({ lightTheme, setLightTheme }) => {


    return (
        <header className={`header flex flex-ai-c flex-jc-sb transition ${lightTheme ? 'light-theme' : ''}`}>
            <div className="header__logo">Where in the world?</div>
            <div className="header__theme flex flex-ai-c" onClick={() => { setLightTheme(prevTheme => !prevTheme); document.body.classList.toggle('light-theme') }}>
                <FaMoon className={`transition ${lightTheme ? 'light-theme opacity-hide' : ''}`} />
                <FaRegMoon className={`transition ${lightTheme ? 'light-theme' : 'opacity-hide'}`} />
                <p>Dark Mode</p>
            </div>
        </header>
    )
}

export default Header
