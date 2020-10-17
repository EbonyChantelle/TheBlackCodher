import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  let {
    id,
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: { thumbnail, smallThumbnail },
    },
    saleInfo: { listPrice },
  } = props.book;

  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  // let amount = () => {
  //   if (saleInfo.retailPrice) {
  //     let amount = saleInfo.retailPrice.amount;
  //     return formatter.format(amount);
  //   } else {
  //     let amount = "No Amount Set";
  //     return amount;
  //   }
  // };

  // let url = () => {
  //   if (imageLinks) { // Test if the imagesLinks object exists
  //     if (imageLinks.thumbnail) { // Test if the thumbnail property exists
  //       let url = imageLinks.thumbnail;
  //       return url;
  //     }
  //     else if(imageLinks.smallThumbnail) { // Test if the smallThumbnail property exists
  //       let url = imageLinks.smallThumbnail;
  //       return url;
  //     }
  //     else { // imageLinks object exists, but neither property does
  //       let url = "#"
  //       return url;
  //     }
  //   }
  //   else{ // imageLinks object doesn't exist
  //     let url = "#";
  //     return url;
  //   }
  // };

  return (
    <div>
      <h2>{title}</h2>
      <p>
        <img src={thumbnail || smallThumbnail} alt={title} />
      </p>
      <p>by {authors ? authors.join(" , ") : "No Authors"}</p>
      <p>{description}</p>
      <p>{listPrice && formatter.format(listPrice.amount)}</p>
      {props.addBook && (
        <button onClick={() => props.addBook(title, id)}>Add To Bookcase</button>
      )}
      {props.removeBook && (
        <button onClick={() => props.removeBook(id)}>Remove From Bookcase</button>
      )}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    volumeInfo: PropTypes.shape({
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
        smallThumbnail: PropTypes.string,
      }),
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string,
    }),
    saleInfo: PropTypes.shape({
      listPrice: PropTypes.shape({
        amount: PropTypes.number,
      }),
    }),
  }),
};

export default Book;
