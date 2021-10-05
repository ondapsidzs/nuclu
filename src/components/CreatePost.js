import React, { useState, useRef } from "react";

import {
  Background,
  ContentContainer,
  Content,
  ImageContainer,
  PlusIcon,
  ImageUpload,
  PostPargraphContainer,
  PostParagraph,
  SubmitButton,
  SubmitButtonContainer,
} from "./styles/CreatePost.styled";

const CreatePost = (props) => {
  const imageFileRef = useRef("");
  const postParagraphRef = useRef();
  const [imageURLValue, setImageURLValue] = useState();

  const sendUserPosts = (e) => {
    e.preventDefault();

    const userPostData = {};

    const postParagraphData = postParagraphRef.current.value;
    userPostData.postParagraph = postParagraphData;
    const imageURLSrc = imageURLValue;
    userPostData.imageSrc = imageURLSrc;

    postUserPosts(userPostData);

    postParagraphRef.current.value = "";

    props.createPostClose();
  };

  const postUserPosts = (postParagraph) => {
    fetch("https://nuclu-posts-default-rtdb.firebaseio.com/posts.json", {
      method: "POST",
      body: JSON.stringify(postParagraph),
      headers: { "Content-type": "application/json" },
    });
  };

  function imageURLPrompt() {
    let imageURL = prompt("Please enter image URL here:");

    if (imageURL !== null || imageURL !== "") {
      setImageURLValue(imageURL);
    }
  }

  return (
    <>
      <ContentContainer isCreatePostOpen={props.isCreatePostOpen}>
        <Content action="/main" onSubmit={sendUserPosts}>
          <ImageContainer imageFileData={imageURLValue}>
            <label onClick={imageURLPrompt}>
              <PlusIcon />
            </label>
            <ImageUpload type="file" id="imageFile" ref={imageFileRef} />
          </ImageContainer>
          <PostPargraphContainer>
            <PostParagraph
              ref={postParagraphRef}
              placeholder="Post an idea..."
            ></PostParagraph>
          </PostPargraphContainer>
          <SubmitButtonContainer>
            <SubmitButton>Submit</SubmitButton>
          </SubmitButtonContainer>
          <p>Create a post with multiple photos</p>
        </Content>
      </ContentContainer>
      <Background isCreatePostOpen={props.isCreatePostOpen} />
    </>
  );
};

export default CreatePost;
