import React from 'react';
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = (props) => {
    return (
        <>
            <nav className="nav__bar">
                <div className="brand__logo">
                    <Link to="/">
                        <img className="brand__logo__img" src="/Logo_Dark.png" alt="brand-logo" />
                    </Link>
                </div>
                <div className="navbar__action">
                    <Link className="nav__links home__link" to="#">Home</Link>
                    <Link className="nav__links about__link" to="#">About</Link>
                    <select className="nav__select">
                        <option>Services</option>
                    </select>
                    <Link className="nav__links advisory__link" to="#">Advisory projects</Link>
                    <Link className="nav__links smart__link" to="#">Smart reach</Link>
                    <Link className="nav__links blogs__link" to="#">Blogs</Link>
                    <Link className="nav__links careers__link" to="#">Careers</Link>
                    <button className="btn btn-primary nav__button">GET IN TOUCH</button>
                </div>
            </nav>
            <hr className="nav__line"/>
            <img className="top__blob" src="/illustrations/Blob.svg" alt="blob"/>
        </>
    )
}



export default Navbar;