import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item nav-active">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/ReadingPage" className="nav-link">Start Reading</Link>
        </li>
        <li className="nav-item">
          <Link to="/BusinessPage" className="nav-link">Find Buyer</Link>
        </li>
        <li className="nav-item">
          <Link to="/Login" className="nav-link">I'm Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
