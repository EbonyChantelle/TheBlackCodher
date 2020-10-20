import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./pages/Search";
import Home from "./pages/Home";
import About from "./pages/About";
import BookList from "./components/BookList";
import data from "./models/books.json";

const App = (props) => {
  const [books, setBooks] = useState(data);
  const [ keyword, setKeyword ] = useState('');
  const [bookcase, setBookcase] = useState([]);
  const [count, setCount] = useState(0);

  useEffect (() => {
    document.title = `You added ${count} books`;
  });

  // return (
  //   <div>
  //     <p>You added {count} books</p>
  //     <button onClick={() => setCount(count + 1)}></button>
  //     <button onClick={() => setCount(count - 1)}></button>
  //   </div>
  // );

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
      `https://www.googleapis.com/books/v1/volumes?q=${term}+inauthor:+subject:&filter=paid-ebooks&print-type=books&projection=lite`
      ).then(res => res.json());
    setBooks(results.items);
  }

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <React.Fragment>
            <Header />
            <Home />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/search"
        render={() => (
          <React.Fragment>
            <Header />
            <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}/>
            <BookList books={books} addBook={addBook} />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/about"
        render={() => (
          <React.Fragment>
            <Header />
            <About />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/bookcase"
        render={() => (
          <React.Fragment>
            <Header />
            <p>You added {count} books</p>
            <BookList books={bookcase} removeBook={removeBook} />
          </React.Fragment>
        )}
      />
    </Router>
  );
};

export default App;
