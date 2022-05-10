import React from 'react'
import './header.css';

import logo from '../../images/logo.png';

export const Header = () => {
  return (
    <>
    <nav className="navbar">
        {/* LOGO */}
        <div className="logo"><img src={logo} alt="logo"/></div>
        {/* NAVIGATION MENU */}
        <ul className="nav-links">
          {/* USING CHECKBOX HACK  */}
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">&#9776;</label>
          {/* NAVIGATION MENUS */}
          <div className="menu animate__animated animate__fadeInLeft">
            <li><a href="/">Home</a></li>
            <li><a href="/">Company<i class="fa-solid fa-angle-down"></i></a></li>
            <li className="services">
              <a href="/">Services<i class="fa-solid fa-angle-down"></i></a>
              {/* DROPDOWN MENU  */}
              <ul className="dropdown">
                <li><a href="/">Dropdown 1 </a></li>
                <li><a href="/">Dropdown 2</a></li>
                <li><a href="/">Dropdown 2</a></li>
                <li><a href="/">Dropdown 3</a></li>
                <li><a href="/">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="/">packages<i class="fa-solid fa-angle-down"></i></a></li>
            <li><a href="/">Case studies<i class="fa-solid fa-angle-down"></i></a></li>
            <li><a href="/">Our Work</a></li>
            <li><a href="/">Clients</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/"><i className="fa-solid fa-mobile-screen-button"></i> 05280 50084</a></li>
            <li><a href="/"><button>Contact us</button></a></li>

          </div>
        </ul>
      </nav>
    </>
  )
}
