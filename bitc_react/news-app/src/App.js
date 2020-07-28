import React, { Component } from "react";
import Axios from "axios";

class App extends Component {
  state = {
    data: {
      userId: null,
      id: null,
      title: null,
      completed: null,
    },
  };

  onClick = async () => {
    const { data } = this.state;
    // 다운받은 json데이터를 자바스크립트 오브젝트로 변환해줌
    let resp = Axios.get("https://jsonplaceholder.typicode.com/todos/1"); // get방식으로 호출
    this.setState({
      data: { data, ...resp.data },
    });
  };

  render() {
    const { data } = this.state; // 구조분할할당

    return (
      <div>
        <div>아이디: {data.userId}</div>
        <div>제목: {data.title}</div>
        <hr />
        <h1>클릭하세요</h1>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default App;
