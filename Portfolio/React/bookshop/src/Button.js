import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    return (
      <button onClick={() => this.setState({ clicked: true })}>
        {this.state.clicked ? "Added To Bookcase" : "Add To Bookcase"}
      </button>
    );
  }
}

export default Button;
