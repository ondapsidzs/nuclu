import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  Container,
  Content,
  BackgroundContainer,
  BackgroundOverlay,
  BackgroundImage,
  IconsContainer,
  SignUpSuccessful,
  UsernameDuplicate,
  EmailDuplicate,
} from "./styles/LoginOrCreateAccount.styled";
import Login from "../components/Login";
import CreateAccount from "../components/CreateAccount";

import Image1 from "../images/login_background.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const LoginOrCreateAccount = (props) => {
  const [usersData, setUsersData] = useState();
  const [isLogin, setIsLogin] = useState(true);
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const [usernameDuplicate, setUsernameDuplicate] = useState(false);
  const [emailDuplicate, setEmailDuplicate] = useState(false);
  const location = useLocation();

  function isLoginToggler() {
    setIsLogin(!isLogin);
  }

  function usernameDuplicateHandlerTrue() {
    setUsernameDuplicate(true);

    setTimeout(() => {
      setUsernameDuplicate(false);
    }, 3000);
  }

  function emailDuplicateHandlerTrue() {
    setEmailDuplicate(true);

    setTimeout(() => {
      setEmailDuplicate(false);
    }, 3000);
  }

  function signupSuccessPopUp() {
    setIsSignupSuccessful(true);
  }

  if (isSignupSuccessful) {
    setTimeout(() => {
      setIsSignupSuccessful(false);
    }, 4000);
  }

  function fetchUsersData() {
    const gettingData = async () => {
      const res = await fetch(
        "https://nuclu-users-default-rtdb.firebaseio.com/users.json"
      );
      const data = await res.json();
      return data;
    };

    const transformData = async () => {
      const data = await gettingData();

      let allUsersData = [];

      for (const key in data) {
        const userData = {
          id: key,
          ...data[key],
        };

        allUsersData.push(userData);
        setUsersData(allUsersData);
      }
    };

    transformData();
  }

  // useEffect(fetchUsersData);
  useEffect(() => {
    if (location.pathname === "/login" || isSignupSuccessful) {
      fetchUsersData();
    }
  }, [location, isSignupSuccessful]);

  return (
    <>
      <Container>
        <Content>
          {isLogin ? (
            <Login
              isLoginToggler={isLoginToggler}
              usersData={usersData}
              userHandler={props.userHandler}
              loggedIn={props.loggedIn}
            />
          ) : (
            <CreateAccount
              isLogin={isLogin}
              isLoginToggler={isLoginToggler}
              signupSuccessPopUp={signupSuccessPopUp}
              isSignupSuccessful={isSignupSuccessful}
              usersData={usersData}
              usernameDuplicateHandlerTrue={usernameDuplicateHandlerTrue}
              emailDuplicateHandlerTrue={emailDuplicateHandlerTrue}
            />
          )}
        </Content>
        <IconsContainer>
          <Link to="/login">
            <FaFacebookF />
          </Link>
          <Link to="/login">
            <FaInstagram />
          </Link>
          <Link to="/login">
            <FaLinkedinIn />
          </Link>
        </IconsContainer>
      </Container>
      <BackgroundContainer>
        <BackgroundOverlay />
        <BackgroundImage src={Image1} />
      </BackgroundContainer>
      <SignUpSuccessful isSignupSuccessful={isSignupSuccessful}>
        Sign-Up Successful!
      </SignUpSuccessful>
      <UsernameDuplicate usernameDuplicate={usernameDuplicate}>
        Username has already been used!
      </UsernameDuplicate>
      <EmailDuplicate emailDuplicate={emailDuplicate}>
        Email has already been used!
      </EmailDuplicate>
    </>
  );
};

export default LoginOrCreateAccount;
