import React from "react";

function Product(books) {
  return (
    <div>
      <img src={books.image} alt={books.alt} />
      <h2>{books.title}</h2>
      <p>{books.price}</p>
      <p>{books.summary}</p>
    </div>
  );
}

export default Product;
