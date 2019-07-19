import React from 'react'
import './Navbar.scss'

import logo from './../../logo/logo.png'

const Navbar =  () => {
  return (
    <nav className="navbar">
        {/* hello from navbar */}
        <img src= {logo} alt="City tours logo"/>
            <ul className="nav-links">
                <li> <a href="/" className="nav-link"> Home </a></li>
                <li> <a href="/about" className="nav-link"> About Us </a></li>
                <li> <a href="/contact" className="nav-link"> Contact </a></li>
                <li> <a href="/tours" className="nav-link active"> Tours </a></li>
            </ul>

    </nav>
  )
}

export default Navbar
