import React from 'react';
import '../styles/Navbar.css';
import githubLogo from '../assets/githubLogo.png';

function Navbar() {
    return (
        <div className="Navbar">
            <div id = "logo">
                MIES-TEST
            </div>
            <div id = "about">
                <a href = "https://github.com/rsd511/MIES-Test" target = "_blank" rel="noopener noreferrer" >AB<img src = {githubLogo} alt = "githubLogo"/>UT</a>
            </div>
        </div>
    )
}

export default Navbar;