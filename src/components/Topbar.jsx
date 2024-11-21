import React, { useState } from "react";
import "../Styles/Topbar.css";
import logo from "../img/logo.jpg"; // Adjust path based on where the logo image is

const TopBar = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="topbar">
      <div className="topbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <h1>DELIN</h1>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <button onClick={() => onNavigate("home")}>HOME</button>
            </li>
            <li>
              <button onClick={() => onNavigate("about")}>ABOUT ME</button>
            </li>
            <li>
              <button onClick={() => onNavigate("projects")}>PROJECTS</button>
            </li>
            <li>
              <button onClick={() => onNavigate("experiance")}>SERVICES</button>
            </li>
            <li>
              <button onClick={() => onNavigate("contact")}>CONTACT</button>
            </li>
            <li>
              <button>Let's Talk</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
