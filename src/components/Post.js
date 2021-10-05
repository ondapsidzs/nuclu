import React from "react";
import {
  CommentContainer,
  CommentIcon,
  CommentInput,
  Container,
  Content,
  ContentImage,
  Discussions,
  Header,
  PostParagraph,
  Settings,
  UserContainer,
  Username,
  UserPic,
} from "./styles/Post.styled";
import SendIcon from "../images/send_icon.png";

const Post = (props) => {
  return (
    <Container id={props.id}>
      {props.src && <ContentImage src={props.src} />}
      <Content>
        <Header>
          <UserContainer>
            <UserPic src={props.userpic} />
            <Username>{props.username}</Username>
          </UserContainer>
          <Settings />
        </Header>
        {props.paragraphContent && (
          <PostParagraph>{props.paragraphContent}</PostParagraph>
        )}
        <CommentContainer>
          <CommentInput placeholder="Have something in mind?" />
          <CommentIcon src={SendIcon} />
        </CommentContainer>
        <Discussions>Discussions</Discussions>
      </Content>
    </Container>
  );
};

export default Post;
