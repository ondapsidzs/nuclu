import React from "react";

import {
  Container,
  Content,
  InfoIcon,
  EditIcon,
} from "./styles/PersonalInformation.styled";

const PersonalInformation = () => {
  return (
    <>
      <Container>
        <Content>
          <InfoIcon />
          <h2>Personal Information</h2>
          <p>User hasn't updated this part yet</p>
          <EditIcon />
        </Content>
      </Container>
    </>
  );
};

export default PersonalInformation;
