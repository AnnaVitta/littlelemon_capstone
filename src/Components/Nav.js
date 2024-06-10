import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

function Nav() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const location = useLocation();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'auto'});
      }
    } else {
      // Navigate to home page first and then scroll to section
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className={`App-nav ${navActive ? "nav-active" : ""}`}>
      <div className="hamburger" onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul>
        <li><Link to="/" onClick={toggleNav}>Home</Link></li>
        <li><Link to="#about" onClick={(e) => scrollToSection(e, 'about')}>About</Link></li>
        <li><Link to="/menu" onClick={toggleNav}>Menu</Link></li>
        <li><Link to="/reservation" onClick={toggleNav}>Reservation</Link></li>
        <li><Link to="/orderOnline" onClick={toggleNav}>Order Online</Link></li>
        <li><Link to="/login" onClick={toggleNav}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;