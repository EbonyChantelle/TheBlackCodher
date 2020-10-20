import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className = "Header">
      <h1>The Black Codher Reads</h1>
      <Link to="/" className = "headerLinks">Home</Link>
      <Link to="/about" className = "headerLinks">About</Link>
      <Link to="/search" className = "headerLinks">Search</Link>
      <Link to="/bookcase" className="headerLinks">
        Bookcase
      </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;