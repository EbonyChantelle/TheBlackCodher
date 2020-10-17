import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <h1>The Black Codher Reads</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/bookcase" className="bookLink">
        Bookcase
      </Link>
    </React.Fragment>
  );
};

export default Header;