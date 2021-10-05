import React from "react";

import {
  WelcomeUserContainer,
  WelcomeUserContent,
  Background,
  PlusContainer,
  PlusIcon,
} from "./styles/WelcomeNewUser.styled";

const WelcomeNewUser = (props) => {
  return (
    <>
      <WelcomeUserContainer>
        <WelcomeUserContent>
          <h1>Welcome</h1>
          <h2>User</h2>
          <PlusContainer>
            <PlusIcon />
          </PlusContainer>
          <p>Add a profile picture for others to know it is you</p>
          <button onClick={props.welcomeNewUserActiveHandler}>
            Nah! I'll do it later
          </button>
        </WelcomeUserContent>
      </WelcomeUserContainer>
      <Background />
    </>
  );
};

export default WelcomeNewUser;
