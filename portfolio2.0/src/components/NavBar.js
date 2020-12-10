import React from 'react';

const NavBar = () => {
    return (
        <ul className="nav nav-pills sticky-top">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about-me">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
            </li>
           
        </ul>
    )
    
}


export default NavBar;


