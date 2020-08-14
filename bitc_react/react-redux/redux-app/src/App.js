import React, { useState } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

const App = () => {
  // const [number, setNumber] = useState(0);

  // const add = () => {
  //   setNumber(number + 1);
  // };

  return (
    <div className="container">
      <h1>Root</h1>
      <AddNumberRoot />
      <DisplayNumberRoot />
    </div>
  );
};

export default App;
