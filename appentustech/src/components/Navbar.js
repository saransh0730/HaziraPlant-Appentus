import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-top">
        <div className="navbar-logo">
          <img src="nav-logo.png" alt="Logo" className="logo-image" />
          <div>
            <h1>HAZIRA</h1>
            <p>PLANT</p>
          </div>
        </div>
        <div className="navbar-actions">
          <input type="text" placeholder="Search" className="search-bar" />
          <button className="login-btn">Login</button>
          <span className="language-switch">
            <span>English</span> | <span>हिंदी</span>
          </span>
        </div>
        <div className="hamburger-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      <div className={`navbar-bottom ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>About</li>
          <li>Technical Information</li>
          <li>Departments</li>
          <li>HSE</li>
          <li>Online Services</li>
          <li>Phone Directory</li>
          <li>Incident Reporting</li>
          <li>Miscellaneous</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
