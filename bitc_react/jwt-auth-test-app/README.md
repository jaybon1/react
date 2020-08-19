# 리액트 구글 로그인 해보기

## 참고사이트

https://github.com/codingspecialist/Springboot-Security-JWT-Easy

https://cheese10yun.github.io/oauth2/﻿

https://www.npmjs.com/package/react-facebook-login﻿

https://www.npmjs.com/package/react-google-login

https://yamoo9.github.io/axios/guide/api.html

## 리액트 생성 및 라이브러리 설치

yarn create react-app jwt-auth-test-app

npm install react-google-login

yarn add axios

## 스프링세팅

Springboot-Security-JWT-Easy 깃으로 스프링 구성

## 진행

1. 구글 api 콘솔에서 프로젝트 생성
2. 사용자 인증정보 - Oauth 클라이언트 id 만들기
3. 동의 화면 구성 - 내부
4. 사용자 인증정보 - 웹 애플리케이션 선택 (안드는 안드로이드 선택)
5. 승인된 자바스크립트 출처 - http://localhost:3000 - 리액트서버
6. 승인된 리디렉션 URI - http://localhost:3000
7. 생성된 클라이언트 아이디를 리액트 login 컴포넌트에 넣기
8. App.js에서 login 컴포넌트넣기
9. 콘솔로그에서 정보받기 - profileObj 확인
10. 스프링서버에 jwt인증을 위한 컨트롤러 생성
11. 리액트 Login.js의 responseGoogle에서 액시오스 만들기
12. 스프링 서버에서 토큰 만들어서 리턴
13. 리액트에서 로컬스토리지나 세션스토리지에 저장