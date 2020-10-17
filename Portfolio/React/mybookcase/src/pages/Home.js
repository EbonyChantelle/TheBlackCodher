import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <h1>The Black Codher Reads</h1>
      <Link to="/About">About</Link>
      <Link to="/Search">Search</Link>
      <Link to="/bookcase" className="bookLink">
        Bookcase
      </Link>
    </React.Fragment>
  );
};

export default Home;