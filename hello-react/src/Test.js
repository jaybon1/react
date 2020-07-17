import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      id: 123,
    };
  }

  render() {
    const { number, id } = this.state;

    return (
      <>
        <h1>{number}</h1>
        <h1>{id}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          클릭
        </button>
      </>
    );
  }
}

export default Test;
