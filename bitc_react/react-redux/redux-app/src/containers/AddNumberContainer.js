import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

// containers 안에 components를 넣고 안바꿀 것은 components / 바꿀것은 containers 사용

// connect(null, myEvent)에 들어가서 리턴되는 순간 dispatch가 리듀서가 된다
// 리듀서의 액션만 때린다
const actionProps = (dispatch) => {
  return {
    onAdd: () => {
      dispatch({ type: 'INCREMENT' });
    },
  };
};

// AddNumber에 리듀서를 연결한다
// connect(null, null) props 두개를 넘길 수 있다
// 1번 파라메터 state
// 2번 파라메터 event
export default connect(null, actionProps)(AddNumber);

// const AddNumberContainer = () => {
//   return (
//     <div>
//       <AddNumber />
//     </div>
//   );
// };

// export default AddNumberContainer;
