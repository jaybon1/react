import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import Axios from "axios";

const config = {
  headers: { "content-Type": "application/json; charset=utf-8" },
};

//결과가 뜨면 리스폰스를 콘솔로그에 출력
const responseGoogle = async (response) => {
  console.log(1, response);
  // 액시오스 첫번째 매개변수는 주소, 두번째 매개변수는 보낼 값(바디값), 세번째 컨텐트 타입(스프링에서 컨버팅 할 수 있도록)
  let jwtToken = await Axios.post(
    "http://localhost:8080/oauth/jwt/google",
    JSON.stringify(response),
    config
  );
  if (jwtToken.status === 200) {
    console.log(2, jwtToken.data);
    localStorage.setItem("jwtToken", jwtToken.data);
  }
};

const Login = () => {
  return (
    <div>
      <GoogleLogin
        clientId=""
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
