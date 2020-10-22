import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <h1>The Black Codher Reads</h1>
      <div className="headerLinks">
      <Link to="/" className = "headerHome">Home</Link>
      <Link to="/about" className = "headerAbout">About</Link>
      <Link to="/search" className = "headerSearch">Search</Link>
      <Link to="/bookcase" className="headerBookcase">
        Bookcase
      </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;