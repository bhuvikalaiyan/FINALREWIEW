import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS for the navbar
//import './SilderCompount.js';
//import SliderComponent from './SilderCompount.js';

function Navbar() {
  return (
    <div>
    
    <nav className="navbar">
      <Link to="/" className="logo">EASY ACCOUNTS</Link>
      <ul className="nav-links">
        <li>
          <Link to="/signup">SIGNUP</Link>
        </li>
        <li>
          <Link to="/">LOGIN</Link>
        </li>
        <li>
          <Link to="/getdetails"/>
        </li>
        <li>
          <Link to="/postaccounting"/>
        </li>
        <li>
          <Link to="/putaccounting"/>
        </li>
      </ul>
     
    </nav>
    </div>
  );
}

export default Navbar;
