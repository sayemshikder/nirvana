import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav>
      <ul className="nav_ul">
        <li className="logo"></li>
        <li className="login"><Link to="/login">Log In</Link></li>
        <Link to="/signup"><li className="get_started">Get Started</li></Link>
      </ul>
    </nav>
  );
};

export default navbar;
