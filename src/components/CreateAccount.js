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
  CreateAccountBtn,
} from "./styles/CreateAccount.styled";

import NucluLogoPng from "../logo/nuclu_logo.png";

const CreateAccount = (props) => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const firstnameRef = useRef("");
  const lastnameRef = useRef("");
  const emailAddressRef = useRef("");
  const birthdateRef = useRef("");

  let usersData = props.usersData;

  const posting = (userDetails) => {
    fetch("https://nuclu-users-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: { "Content-type": "application/json" },
    });
  };

  function sendUserSignUpDetails(e) {
    e.preventDefault();

    let genderValues = document.getElementsByName("gender");

    const userDetails = {};

    for (let i = 0; i < genderValues.length; i++) {
      if (genderValues[i].checked) {
        userDetails.gender = genderValues[i].value;
      }
    }

    userDetails.username = usernameRef.current.value;
    userDetails.password = passwordRef.current.value;
    userDetails.firstName = firstnameRef.current.value;
    userDetails.lastName = lastnameRef.current.value;
    userDetails.email = emailAddressRef.current.value;
    userDetails.birthdate = birthdateRef.current.value;
    userDetails.new = true;

    let noDuplicates = true;

    for (let i = 0; i < usersData.length; i++) {
      if (userDetails.username === usersData[i].username) {
        props.usernameDuplicateHandlerTrue();
        noDuplicates = false;
      }
      if (userDetails.email === usersData[i].email) {
        props.emailDuplicateHandlerTrue();
        noDuplicates = false;
      }
    }

    if (noDuplicates) {
      posting(userDetails);

      props.signupSuccessPopUp();

      clearInputs();
      genderValues.forEach((items) => (items.checked = false));

      props.isLoginToggler();
    }
  }

  function clearInputs() {
    usernameRef.current.value = "";
    passwordRef.current.value = "";
    firstnameRef.current.value = "";
    lastnameRef.current.value = "";
    emailAddressRef.current.value = "";
    birthdateRef.current.value = "";
  }

  return (
    <Container>
      <Content1>
        <Link to="/">
          <NucluLogo src={NucluLogoPng} />
          <NucluName children="nuclu" />
        </Link>
        <NucluForm action="/login" onSubmit={sendUserSignUpDetails}>
          <Username
            placeholder="Username"
            ref={usernameRef}
            required
            minLength="5"
          />
          <Password
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
            minLength="5"
          />
          <p>Personal Info</p>
          <input placeholder="First Name" required ref={firstnameRef} />
          <input placeholder="Last Name" required ref={lastnameRef} />
          <input
            type="email"
            placeholder="Email Address"
            required
            ref={emailAddressRef}
          />
          <p>Gender</p>
          <div id="gender">
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                required
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                required
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <p>Birthdate</p>
          <div id="birthdate">
            <input
              type="date"
              id="birthday"
              name="birthday"
              required
              ref={birthdateRef}
            />
          </div>
          <CreateAccountBtn>Create Account</CreateAccountBtn>
          <Link to="/login" onClick={props.isLoginToggler}>
            Already have an account? Login now!
          </Link>
        </NucluForm>
      </Content1>
    </Container>
  );
};

export default CreateAccount;
