import React, { useState } from "react";
import Pagination from "./Pagination"; 
import Book from "./Book";

const BookList = (props) => {
  const [currentPage, setCurrentPage] = useState (1);
  const [booksPerPage] = useState (10);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = props.books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {props.books.map((book) => (
        <>
        <Book key={book.id} book={book} currentBooks={currentBooks} addBook={props.addBook} removeBook={props.removeBook} />
        <Pagination booksPerPage={booksPerPage} totalBooks={book.length} paginate={paginate} />
        </>
      ))}
    </div>
  );
};

export default BookList;
