import React from "react";

import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/" className="site-logo">
        ND
      </Link>
      <ul>
        <Link to="/home"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button> Let's Connect </button>
      </ul>
    </nav>
  );
};

export default Header;
