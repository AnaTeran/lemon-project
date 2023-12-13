import React from 'react';
import logo from "../img/logo.png"

const Nav = () => {
    return(
        <nav>
            <a href="/">
                <img src={logo} alt='logo'></img>
            </a>
        </nav>
    );
};

export default Nav;
