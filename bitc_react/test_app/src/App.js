import React, { useEffect, useState } from 'react';
import axios from 'axios';
const App = (props) => {

  const [temp, setTemp] = useState({id:"공백"});

  const apiCall = async () => {
    const response = await axios.get(`http://localhost:8080/test/axios`);
    setTemp(response.data);
    console.log(response);
  };

  useEffect(() => {
    // apiCall();
  }, []);

  return (
    <div>
      {temp.id}
      <button onClick={apiCall}>asdf</button>
    </div>
  );
};

export default App;