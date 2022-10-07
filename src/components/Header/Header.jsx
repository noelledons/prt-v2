import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/" className="site-logo">
        ND
      </Link>

      <ul>
        <CustomLink to="/about"> About </CustomLink>
        <CustomLink to="/work"> Work </CustomLink>
        <CustomLink to="/contact"> Contact </CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Header;
