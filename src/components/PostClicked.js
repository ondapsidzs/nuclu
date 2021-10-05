import React from "react";

import {
  Container,
  Content,
  Background,
  PostDescription,
  PostDiscussions,
  PostImage,
  PostImageContainer,
  Close,
  UserProfilePost,
  UserPic,
  Username,
  OptionIcon,
  LikesContainer,
  Likes,
  LikeIcon,
  DislikeIcon,
  Dislikes,
  ShareBtn,
  SortContainer,
  SortIcon,
} from "./styles/PostClicked.styled";

const PostClicked = (props) => {
  return (
    <>
      <Background />
      <Container>
        <Content>
          <PostDescription>
            <UserProfilePost>
              <UserPic src="https://images.unsplash.com/photo-1628419336189-d4c2b7b5a445?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
              <Username>user</Username>
            </UserProfilePost>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              amet neque, at tristique congue gravida. Adipiscing viverra at
              tristique non nunc condimentum eu sollicitudin. Arcu leo
              pellentesque augue felis fringilla fusce scelerisque. Consequat
              porta mauris iaculis a diam sit eu lorem. Arcu, fames ultrices
              cursus semper imperdiet. Lorem quisque tellus ipsum a in ac.
            </p>
            <LikesContainer>
              <Likes>150</Likes>
              <LikeIcon />
              <DislikeIcon />
              <Dislikes>5</Dislikes>
            </LikesContainer>
            <ShareBtn>Share Post</ShareBtn>
            <OptionIcon />
          </PostDescription>
          <PostImageContainer>
            <PostImage src="https://images.unsplash.com/photo-1628414832152-aafba4dec0d2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
            <Close onClick={props.postClickedActiveFalse} />
          </PostImageContainer>
          <PostDiscussions>
            <h1>Discussions</h1>
            <form action="/">
              <input placeholder="Have something in mind?"></input>
            </form>
            <p>No Discussions Yet</p>
            <SortContainer>
              <p>Sort</p>
              <SortIcon />
            </SortContainer>
          </PostDiscussions>
        </Content>
      </Container>
    </>
  );
};

export default PostClicked;
