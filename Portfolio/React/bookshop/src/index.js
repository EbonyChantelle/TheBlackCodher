import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

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
