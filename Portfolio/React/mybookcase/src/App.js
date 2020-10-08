import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import BookList from "./components/BookList";
import data from "./models/books.json";

const App = (props) => {
  const [books, setBooks] = useState(data);

  function addBook(title, id) {
    const newBookList = books.filter((book) => book.id !== id);
    setBooks(newBookList);
    console.log(`The Book ${title} Was Clicked`);
  }

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <React.Fragment>
            <Header />
            <BookList books={books} addBook={addBook} />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/about"
        render={() => (
          <React.Fragment>
            {/* <Header /> */}
            <About />
            {/* <BookList books={books} addBook={addBook} /> */}
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/bookcase"
        render={() => (
          <React.Fragment>
            <Header />
            {/* <BookList books={books} addBook={addBook} /> */}
          </React.Fragment>
        )}
      />
    </Router>
  );
};

export default App;
