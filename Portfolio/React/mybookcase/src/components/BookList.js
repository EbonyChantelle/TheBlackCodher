import React, { useState } from "react";
import Pagination from "./Pagination"; 
import Book from "./Book";

const BookList = (props) => {
  const [currentPage, setCurrentPage] = useState (1);
  const [booksPerPage] = useState (5);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = props.books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      {currentBooks.map((book) => (
        <>
        <Book key={book.id} books={book} currentBooks={currentBooks} addBook={props.addBook} removeBook={props.removeBook} />
        </>
      ))}
      <Pagination booksPerPage={booksPerPage} totalBooks={props.books.length} paginate={paginate} />
    </div>
  );
};

export default BookList;
