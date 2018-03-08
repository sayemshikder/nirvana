import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav>
      <ul className="nav_ul">
        <Link to="/" className="logo_link"><li className="logo"></li></Link>
        <Link to="/login" ><li className="login">Log In</li></Link>
        <Link to="/signup"><li className="get_started">Get Started</li></Link>
        <Link to="/demo"><li className="demo">Demo</li></Link>
      </ul>
    </nav>
  );
};

export default navbar;
