import React, { Component } from "react";

// 클래스형 컴포넌트
class Counter extends Component {
  // 생성자는 첫번째 파라미터로 props를 받는다
  constructor(props) {
    super(props);
    console.log("Counter", "생성자 호출됨");
  }

  // 이번에 넘어온 props 값
  // 넘어온 nextProps와 nextState를 바꿀지 아닐지 결정
  // 리액트 버추얼 박스가 (이전 값과 현재 값을 비교)해서
  // (이전 값과 현재 값을 비교) = 비효율적(내용을 다 비교하기때문)
  // 불변성을 유지하기 위해서 레퍼런스만 비교하도록 오버라이딩
  // 같으면 그림을 안그리고 false
  // 다르면 그림을 다시 그림 true
  //
  // 오리지날 연산이 비효율적이기 때문에 오버라이드해서 비교
  //
  // 호출시점 - 최초 render시는 실행안되고 state, props가 변경(리렌더링)시 실행
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate 호출됨");
    // if (nextProps.data !== this.props.data) {
    //   return false;
    // } else {
    //   return true;
    // }
    return false;
  }

  // render가 종료된 뒤 호출됨. 비동기 처리를 해야 될 때
  // 다운 받는 등 렌더 후 실행할 것들
  // 최초 render 시에만 호출됨. state값 변경시에는 호출되지 않음
  componentDidMount() {
    console.log("componentDidMount 호출됨");
  }

  // 그림을 그려주는 메서드
  //render는 그림을 그려주는 함수 = setState()가 호출되거나, 최초에 객체 생성시 그림 그려줌
  //render 내부에서는 state와 props에 접근할 수 있음
  //return 내부는 JSX 문법이 들어감
  render() {
    // 이 공간은 2가지의 값을 컨트롤 할 수 있다
    // temp1 = this.state;
    // temp2 = this.props;

    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.props.number}</div>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.minus}>-</button>
      </div>
    );
  }
}

export default Counter;
