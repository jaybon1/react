import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './store';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// 리듀서로 실제 스토어가 만들어짐
const store = createStore(reducer);

//Provider에 App을 감싼다 - 모든컴포넌트가 store 접근가능
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
