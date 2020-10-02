import React, { useState } from "react";
import Book from "./components/Book";
import data from "./models/books.json";

const App = (props) => {
  const [books] = useState(data);
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default App;
