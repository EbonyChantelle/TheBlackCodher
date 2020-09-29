import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <Product
        image="/assets/Q.jpg"
        alt="Queenie"
        title="Queenie"
        price="£6.99"
        summary="THE SUNDAY TIMES BESTSELLER"
      />
      <Product
        image="/assets/WIANLTTWPAR.jpg"
        alt="Why I'm No Longer Talking To White People About Race"
        title="Why I'm No Longer Talking To White People About Race"
        price="£7.09"
        summary="THE #1 SUNDAY TIMES BESTSELLER"
      />
      <Product
        image="/assets/IKWTCBS1.jpg"
        alt="I know Wht The Caged Bird Sings"
        title="I know Why The Caged Bird Sings"
        price="£5.99"
        summary="THE 1st AUTOBIOGRAPHY"
      />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
