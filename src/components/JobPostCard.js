import React from "react";

import { Container, Content, Dollar } from "./styles/JobPostCard.styled";

const JobPostCard = () => {
  return (
    <Container>
      <Content>
        <h1>Job Title</h1>
        <p>Job Description</p>
        <div>
          <p>Job Poster</p>
          <p>
            <Dollar /> 1000
          </p>
          <p>Date Posted</p>
        </div>
      </Content>
    </Container>
  );
};

export default JobPostCard;
