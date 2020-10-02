import React from "react";
import Button from "./Button";

function Product(books) {
  return (
    <div>
      <img src={books.image} alt={books.alt} />
      <h2>{books.title}</h2>
      <p>{books.price}</p>
      <p>{books.summary}</p>
      <p>
        <Button />
      </p>
    </div>
  );
}

export default Product;
