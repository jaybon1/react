// 1번 - 액션 이름 생성
const INCREMENT = 'INCREMENT';

// 액션만 날리는 컴포넌트가 있을 수 있기 때문에 초기값 세팅
const initState = {
  number: 0,
};

// 2번 - 리듀서 - 액션 이름이 많을 때 걸러주는 것 - 함수의 인자(state, action)
// action은 오브젝트 이기 때문에 액션이름이 아니라 오브젝트 자체를 날려도 된다
// 규칙
// action = {
//     type : "INCREMENT",
//     number : 10
// }
const reducer = (state = initState, action) => {
  if (action.type === INCREMENT) {
    console.log('INCREMENT 실행됨');
    // return은 내부적으로 setState가 세팅되어있어서 값만 넘기면 된다
    return { number: state.number + 1 };
  } else {
    return state;
  }
};

// 호출하는 쪽은 액션만 store에 날림(자기의 화면을 변경 할 것이 아니기 때문)

// containers 안에 components를 넣고 안바꿀 것은 components / 바꿀것은 containers 사용

export default reducer;
