import React, { Component } from "react";
import Home from "./page/Home";
import About from "./page/About";
import Profile from "./page/Profile";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";

// exact={true} 는 정확히 주소가 맞아야먄 나오도록 할 수 있다.
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <hr />
        <Route path="/" component={Home} exact={true} />
        <hr />
        <Route path="/about" component={About} />
        <hr />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

export default App;
