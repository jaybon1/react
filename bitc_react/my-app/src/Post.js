import React from "react";
import styled from "styled-components";

const PostBox = styled.div`
  border: 1px solid black;
  height: 80px;
  text-align: center;
`;

// props처럼 클래스를 만들지 않아도 자동으로 받을 수 있다
// props는 부모가 주는 값
function Post(props) {
  // const와 final 차이
  // final은 초기화시 read only
  // const는 실행시에 결정(날짜 등은 넣으면 안된다)

  // 변수 넣을 때에는 중괄호
  // return 안의 공간은 jsx공간

  const { id, title, content } = props; //구조 분할 할당 jsx 문법
  return (
    <PostBox>
      <div>번호:{id}</div>
      <div>번호:{title}</div>
      <div>번호:{content}</div>
    </PostBox>
  );
}

export default Post;
