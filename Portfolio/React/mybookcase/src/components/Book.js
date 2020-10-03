import React from "react";

const Book = (props) => {
  let {
    volumeInfo: { title, authors, description },
    saleInfo,
  } = props.book;

  let amount = () => {
    if (saleInfo.retailPrice) {
      let amount = saleInfo.retailPrice.amount;
      return amount;
    } else {
      let amount = "No Amount Set";
      return amount;
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{authors}</p>
      <p>{description}</p>
      <p>{amount()}</p>
    </div>
  );
};

export default Book;
