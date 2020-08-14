import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

// containers 안에 components를 넣고 안바꿀 것은 components / 바꿀것은 containers 사용

const stateProps = (state) => {
  return {
    number: state.number,
  };
};

export default connect(stateProps, null)(DisplayNumber);

// const DisplayNumberContainer = () => {
//   return (
//     <div>
//       <DisplayNumber />
//     </div>
//   );
// };

// export default DisplayNumberContainer;
