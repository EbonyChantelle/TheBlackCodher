import React from "react";

const Book = (props) => {
  let {
    imageLinks,
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

  let url = () => {
    if (imageLinks) {
      let url = imageLinks.thumbnail;
      return url;
    } else {
      let url = imageLinks.smallThumbnail;
      return url;
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>
        {url()} alt{title}
      </p>
      <p>{authors}</p>
      <p>{description}</p>
      <p>{amount()}</p>
    </div>
  );
};

export default Book;
