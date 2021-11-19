import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BorderedButton = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: black;
  text-decoration: none;
  margin-right: 10px;
`;

const LoginButton = () => {
  let id = window.localStorage.getItem("userId");

  const setData = () => {
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("logged-in");
  };
  return localStorage.getItem("logged-in") ? (
    <div>
      <BorderedButton to="/">HOME</BorderedButton>
      <BorderedButton to="write">새로 포스팅</BorderedButton>
      <BorderedButton to="/mylist">MyList</BorderedButton>
      <BorderedButton to="/" onClick={setData}>
        {JSON.parse(id)}
      </BorderedButton>
    </div>
  ) : (
    <div>
      <BorderedButton to="/">HOME</BorderedButton>
      <BorderedButton to="auth/login">로그인/회원가입</BorderedButton>
    </div>
  );
};
export default LoginButton;
