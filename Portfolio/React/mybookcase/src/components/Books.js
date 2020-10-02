import React from "react";

const Book = (props) => {
  return (
    <div>
      <h2>{props.book.volumeInfo.title}</h2>
    </div>
  );
};

export default Book;
