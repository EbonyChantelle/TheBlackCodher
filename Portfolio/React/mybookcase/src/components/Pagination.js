import React from 'react';
import "./Pagination.css";

const Pagination = ({ booksPerPage, totalBooks, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  function handlePagination (event, number) {
    event.preventDefault();
    paginate(number);
    }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="pageNumber">
            <a onClick={(event) => handlePagination(event, number)} href="!#" className="pageNumberLink">{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;