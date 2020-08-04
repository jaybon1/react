import React, { useState, useRef, useEffect } from "react";
import "./App.css";

const App = () => {
  const input1 = useRef();

  useEffect(() => {
    console.log(input1);
    input1.current.focus(); // input1에 current가 담겨있고 그 안에 해당태그가 있다
    input1.current.className = "test";
  }, []); // componentDidMount / 최초에만 실행되게 하려면 []를 입력

  // input 찾을려면 ref

  return (
    <div>
      <input className="" type="text" ref={input1} />
    </div>
  );
};

export default App;
