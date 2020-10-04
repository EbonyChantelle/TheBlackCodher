import React from "react";

const Book = (props) => {
  let {
    volumeInfo: { title, authors, description, imageLinks },
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
    if (imageLinks) { // Test if the imagesLinks object exists
      if (imageLinks.thumbnail) { // Test if the thumbnail property exists
        let url = imageLinks.thumbnail;
        return url;
      }
      else if(imageLinks.smallThumbnail) { // Test if the smallThumbnail property exists
        let url = imageLinks.smallThumbnail;
        return url;
      }
      else { // imageLinks object exists, but neither property does
        let url = "#"
        return url;
      }
    }
    else{ // imageLinks object doesn't exist
      let url = "#";
      return url;
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>
        <img src={url()} alt={title} />
      </p>
      <p>{authors}</p>
      <p>{description}</p>
      <p>{amount()}</p>
    </div>
  );
};

export default Book;
