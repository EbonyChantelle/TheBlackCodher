import React from "react";
import "./About.css";

const About = (props) => {
  return (
      <div className="pageAbout">
        <h2 className="aboutH2">Welcome To TBCR</h2>
        <p className="aboutP">
          This bookcase application was created and designed by Ebony Chantelle.</p>
        <p className="aboutP">There is a display of randomly selected books on the Search page, with a search facility to allow for new displays of books by author, name or theme.
        </p>
        <p className="aboutP">
          Any books that are of interest, can then be added to a local bookcase, or removed if required.
        </p>
        <p className="aboutP">Happy Reading!</p>
      </div>
  );
};

export default About;