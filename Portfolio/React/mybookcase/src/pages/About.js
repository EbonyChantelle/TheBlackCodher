import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="header">
      <h1>About</h1>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
      </div>
      <div className="page">
        <h2>Welcome To The Bookcase Application</h2>
        <p>
          The following application was created by Ebony Chantelle. This
          bookcase app displays a list of books that a user can save to a local
          bookcase.
        </p>
        <p>
          Click on the "Add" button to add a book to your bookcase. Use the
          search bar to find the latest books by name, author or description.
        </p>
      </div>
    </div>
  );
};

export default About;
