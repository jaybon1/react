import React, { Component } from "react";
import styled from "styled-components";
import Post from "./Post";

const ContainerBox = styled.div`
  display: grid;
  width: 900px;
  border: 1px solid blue;
  text-align: center;
  margin: 10px auto;
`;

class App extends Component {
  state = {
    posts: [],
  };

  // API 호출 함수
  getPosts = async () => {
    let response = await fetch("http://192.168.0.25:8080/post");
    let result = await response.json();
    console.log(result);
    this.setState({
      posts: result,
    });
  };

  // 최초에 그림이 그려질 때 실행되는 함수 (생명주기)
  // 그림그려지기 직전에 실행됨
  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { posts } = this.state;
    return (
      <ContainerBox>
        {posts.map((post) => (
          <Post id={post.id} title={post.title} content={post.content} />
        ))}
      </ContainerBox>
    );
  }
}

export default App;
