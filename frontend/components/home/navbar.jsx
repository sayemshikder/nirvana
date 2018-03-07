import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav>
      <ul className="nav_ul">
        <li className="logo"></li>
        <li className="login"><Link to="/login">Log In</Link></li>
        <li className="get_started"><Link to="/signup">Get Started</Link></li>
      </ul>
    </nav>
  );
};

export default navbar;
