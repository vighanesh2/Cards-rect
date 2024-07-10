import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/">
      <div className="navbar-left">
        <p>EN</p>
      </div>
      </Link>
      <Link to="/"> 
      <div className="navbar-center">
        <p>CARDLY</p>

      </div>
      </Link>
      <Link to="/options"> 

      <div className="navbar-right">
        <p>Cards</p>
      </div>
      </Link>
    </header>
  );
};

export default Navbar;