import React, { Component } from "react";

// ref 는 돔에 직접적으로 접근 할 수 있다
class App extends Component {
  changeFocus = () => {
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => {
            this.input = ref;
          }}
          type="text"
          placeholder="Username"
        />
        <input type="text" placeholder="Password" />
        <button onClick={this.changeFocus}>포커스이동</button>
      </div>
    );
  }
}

export default App;
