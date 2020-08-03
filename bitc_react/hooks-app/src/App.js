import React, { useState, useMemo } from "react";

const App = () => {
  const getAverage = (numbers) => {
    console.log("평균값 계산 중..");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
  };

  return (
    <div>
      <button onClick={getAverage([1, 2, 3])}>클릭</button>
    </div>
  );
};

export default App;
