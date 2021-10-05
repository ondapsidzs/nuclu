import React from "react";

import {
  Container,
  Content,
  ImageContainer,
  ConnectionDescription,
  ImageContent,
  ProfileImage,
  InfoContent,
  Name,
  ViewProfile,
  RequestButton,
  Menu,
  Plus,
} from "./styles/ConnectionsCard.styled";

const ConnectionsCard = (props) => {
  return (
    <>
      <Container>
        <Content>
          <ImageContainer>
            <ConnectionDescription>Marketplace Seller</ConnectionDescription>
            <ImageContent src={props.imageSrc} />
            <ProfileImage src={props.profileSrc} />
          </ImageContainer>
          <InfoContent>
            <Name>{props.name}</Name>
            <ViewProfile>View Profile</ViewProfile>
            <RequestButton>
              <Plus />
              Add to Connections
            </RequestButton>
            <Menu />
          </InfoContent>
        </Content>
      </Container>
    </>
  );
};

export default ConnectionsCard;
