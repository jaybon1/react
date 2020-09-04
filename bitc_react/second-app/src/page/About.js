import React from "react";

const About = ({match}) => {
  return (
    <div>
      <h1>ABOUT 페이지 입니다. {match.params.num}</h1>
    </div>
  );
};

export default About;
