// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="text-logo">
        <div className="logo-text">
          <div className="logo-initials">GR</div>
          <div className="logo-name">RAJAONARIVELO</div>
        </div>
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/Portfolio">Portfolio</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/pp">À propos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
