import React, { useState } from "react";

const PhoneForm = (props) => {
  const [state, setState] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    props.onCreate(state);
    // 상태 초기화
    setState({
      name: "",
      phone: "",
    });
  };

  const test = (e) => {
    console.log(e);
    console.log(PhoneForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="이름"
          value={state.name}
          onChange={handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={state.phone}
          onChange={handleChange}
          name="phone"
        />
        <button type="button" onClick={test}>
          테스트
        </button>
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default PhoneForm;
