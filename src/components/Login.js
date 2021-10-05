import React, { useRef } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Content1,
  NucluLogo,
  NucluName,
  NucluForm,
  Username,
  Password,
  LoginBtn,
  Content2,
} from "./styles/Login.styled";

import NucluLogoPng from "../logo/nuclu_logo.png";

const Login = (props) => {
  let usersData = props.usersData;
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  function loginCheck(e) {
    if (usernameCheck()) {
    } else {
      e.preventDefault();
    }
  }

  function usernameCheck() {
    let nucluForm = document.getElementById("userLoginForm");
    let usernameFound = false,
      userIndex = null;

    for (let i = 0; i < usersData.length; i++) {
      if (usernameRef.current.value === usersData[i].username) {
        usernameFound = true;
        userIndex = i;
        props.loggedIn(usersData[i].username);
        console.log(usersData[i].username);
      }
    }

    if (usernameFound) {
      if (passwordCheck(userIndex)) {
        nucluForm.action = "/main";
        return true;
      } else {
        return false;
      }
    } else {
      console.log("Username not found!");
      return false;
    }
  }

  function passwordCheck(index) {
    if (passwordRef.current.value === usersData[index].password) {
      return true;
    } else {
      console.log("Password not matched!");
      return false;
    }
  }

  function trial() {
    fetch(
      "https://nuclu-users-default-rtdb.firebaseio.com/users/-MgSMLvJlEK-x7kdvnVf/new.json",
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify("sadfadasd"),
      }
    );
  }

  return (
    <Container onClick={trial}>
      <Content1>
        <Link to="/">
          <NucluLogo src={NucluLogoPng} />
          <NucluName children="nuclu" />
        </Link>
        <NucluForm id="userLoginForm" onSubmit={loginCheck}>
          <Username placeholder="Username" ref={usernameRef} />
          <Password type="password" placeholder="Password" ref={passwordRef} />
          <LoginBtn>Login</LoginBtn>
          <Link to="/">Forgot Password</Link>
        </NucluForm>
      </Content1>
      <Content2>
        <p>Don't have an account yet? Register Now!</p>
        <button onClick={props.isLoginToggler}>Create Account</button>
      </Content2>
    </Container>
  );
};

export default Login;
