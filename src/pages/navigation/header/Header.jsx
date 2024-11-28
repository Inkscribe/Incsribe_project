import React, { useState } from "react"
import {  NavLink } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  

  const [click, setClick] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false); 

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = () => {
    setDropdownOpen(false); 
  };

  const toggleMobileMenu = () => {
    setClick(!click);
  };

  return (
    <>
    <Head/>
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <NavLink onClick={handleOptionClick}  className="nav_link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleOptionClick}  className="nav_link"  to="/about_us">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleOptionClick}  className="nav_link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="dropdown">
              <NavLink
                className="nav_link"
                onClick={toggleDropdown}
              >
                Classes <i className={`ri-arrow-${dropdownOpen ? "up" : "down"}-s-line dropdown-icon`} />
              </NavLink>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink onClick={handleOptionClick}  className="dropdown-item" to="/classes">
                    English Standardize Test Prep
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleOptionClick}  className="dropdown-item" to="/classes_1">
                      General English Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleOptionClick}  className="dropdown-item" to="/classes/option3">
                      Business English
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink onClick={handleOptionClick}  className="nav_link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleOptionClick}  className="nav_link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="start">
            <div className="just_button"><NavLink className="nav_link" to="/booking">
                Book a Class
              </NavLink></div>
          </div>
          <button className="toggle" onClick={toggleMobileMenu}>
            {click ? <i className="fa fa-times"> </i> : <i className="fa fa-bars"></i>}
          </button>
          
        </nav>
      </header>
    </>
  );
};

export default Header;

