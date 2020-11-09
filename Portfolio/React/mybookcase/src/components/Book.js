import React from "react";
import PropTypes from "prop-types";
import "./Book.css";

const Book = (props) => {
  let {
    id,
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks
    },
    saleInfo: { listPrice },
  } = props.books;

  const noImage = "NoImage.jpg"

  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <div className="bookContent">
      <h2 className="bookTitle">{title}</h2>
      <p>
      {imageLinks ? <img src={imageLinks.smallThumbnail || imageLinks.thumbnail} alt={title}/> : <img src={noImage} alt={title} className="bookImage" />}
      </p>
      <p className="bookAuthor">by {authors ? authors.join(" , ") : "No Authors"}</p>
      <p className="bookDescription">{description}</p>
      <p className="bookPrice">{listPrice && formatter.format(listPrice.amount)}</p>
      {props.addBook && (
        <button className="button" onClick={() => props.addBook(title, id)}>Add To Bookcase</button>
      )}
      {props.removeBook && (
        <button className="button" onClick={() => props.removeBook(id)}>Remove From Bookcase</button>
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
