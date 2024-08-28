import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li className='nav-item'>
          <Link to="/mainhome" className="nav-link">
            <h1>Home</h1>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/adduser" className="nav-link">
            <h1>Add User</h1>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/userdetails" className="nav-link">
            <h1>User Details</h1>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/conus" className="nav-link">
            <h1>Contact Us</h1>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/sendpdf" className="nav-link">
            <h1>Send Pdf</h1>
          </Link>
        </li>
      </ul>
      <div className="nav-buttons">
        <Link to="/regi" className="nav-button">
          Register
        </Link>
        <Link to="/log" className="nav-button">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Nav;