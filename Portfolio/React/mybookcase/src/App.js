import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./pages/Search";
import Home from "./pages/Home";
import About from "./pages/About";
import BookList from "./components/BookList";
import data from "./models/books.json";
import "./App.css"

const App = (props) => {
  const [books, setBooks] = useState(data);
  const [ keyword, setKeyword ] = useState('');
  const [bookcase, setBookcase] = useState([]);
  const [count, setCount] = useState(0);

  useEffect (() => {
    document.title = `${count} Book(s) Added To Bookcase`;
  });

  function addBook(title, id) {
    const newBookList = books.filter((book) => book.id !== id);
    const chosenBook = books.filter(book => book.id === id);
    setBooks(newBookList);
    setBookcase([...bookcase, ...chosenBook]);
    setCount(count + 1);
  }

  function removeBook (id) {
    const newBookcaseList = bookcase.filter(book => book.id !== id);
    setBookcase(newBookcaseList);
    setCount (count - 1);
  }

  async function findBooks (term) {
    const results = await fetch (
      `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=40`
      ).then(res => res.json());
    setBooks(results.items);
  }

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <>
            <Header />
            <Home />
          </>
        )}
      />
      <Route
        exact
        path="/search"
        render={() => (
          <>
            <div className="headerSearch">
            <Header />
            <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}/>
            </div>
            <BookList books={books} addBook={addBook} />
          </>
        )}
      />
      <Route
        exact
        path="/about"
        render={() => (
          <>
            <Header />
            <About />
          </>
        )}
      />
      <Route
        exact
        path="/bookcase"
        render={() => (
          <>
            <Header />
            <p className="countText">{count} Book(s) Added To Bookcase</p>
            <BookList books={bookcase} removeBook={removeBook} />
          </>
        )}
      />
    </Router>
  );
};

export default App;
