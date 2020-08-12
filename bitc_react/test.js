// A.js 화면 이벤트가 3개 있다
// onChange, onInsert, onDelete

// A의 자식 중에 B -> C -> D
// D가 A의 onChange를 건들이고 싶을 경우 기본은 props로 단계를 타고 함수를 전해줘야한다
// store는 모든 함수 레퍼런스를 저장하고 찾을 때 액션명으로 찾게 한다

// 1번 - 액션 이름 하나 생성
const ACHANGE = "a/CHANGE"; // 액션이름이 충돌 나지 않게 하기 위해서 a/를 붙여준다
const AINSERT = "a/INSERT";
const ADELETE = "a/DELETE";

// 앞에 파일명을 붙이고 뒤에 함수명을 붙여서 중복을 막는다
const DDELETE = "D/DELETE";

// 2번 - 액션을 함수로 호출할 수 있게 해야 함
const aChange = () => ({
  type: ACHANGE,
});

// const aChange = () => ({ // 여러줄이라도 소괄호로 묶어주면 한줄로 인식한다
//     type: ACHANGE
// });

const aInsert = () => ({
  type: AINSERT,
});

const aDelete = () => ({
  type: ADELETE,
});

const initialState = {
  number: 0,
};

// 3번 - 리듀서 만들기( 리듀서가 알고 있어야 하는 값 state, action)
// 프로젝트에 store는 하나로 관리한다
function aREducer(state = initialState, action) {
  switch (action.type) {
    case aChange:
      return {
        number: state.number + 10,
      };
    case aInsert:
      return {
        number: state.number + 1,
      };
    case aDelete:
      return {
        number: state.number - 10,
      };
  }
}

// 함수들을 익스포트
export { aInsert };
export { aChange };
export { aDelete };

// 리듀서를 익스포트
export default aREducer;
