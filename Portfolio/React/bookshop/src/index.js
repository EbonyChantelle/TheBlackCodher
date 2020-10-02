// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// import React, { Fragment } from "react";
// import ReactDOM from "react-dom";

// import BookCounter from "./BookCounter";

// const element = (
//   <Fragment>
//     <h1>Welcome to My Library</h1>
//     <BookCounter library={{ name: "Sarah", theme: "Modern" }} />
//   </Fragment>
// );

// ReactDOM.render(element, document.getElementById("root"));

// import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
// import books from "./books.json";

// const formatter = new Intl.NumberFormat("en-GB", {
//   style: "currency",
//   currency: "GBP",
// });

// const element = (
//   <Fragment>
//     {books.map((book) => {
//       let {
//         id,
//         volumeInfo: { title, authors, description },
//         saleInfo: { listPrice },
//       } = book;
//       return (
//         <div>
//           <p>{title}</p>
//           <p>{authors}</p>
//           <p>{description}</p>
//         </div>
//       );
//     })}
//   </Fragment>
// );

/* <h1 id={id}>
      {title} = {formatter.format(amount)}
    </h1> */

// ReactDOM.render(element, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import React from "react";
// import ReactDOM from "react-dom";

// const name = "Ebony";
// function Greeting(user) {
//   if (user) {
//     return <h1>{name}'s Reading List</h1>;
//   }
//   return <h1>Just a Reading List</h1>;
// }

// console.log(Greeting(name));
// ReactDOM.render(Greeting(name), document.getElementById("root"));
