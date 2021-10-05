import styled from "styled-components";

import { BsPlusCircleFill } from "react-icons/bs";

export const Background = styled.div`
  display: ${(props) => (props.isCreatePostOpen ? "static" : "none")};
  position: fixed;
  top: 0;
  justify-content: center;
  background: rgba(61, 102, 102, 0.8);
  height: 100vh;
  width: 100vw;
  z-index: 5;
  opacity: ${(props) => (props.isCreatePostOpen ? "1" : "0")};
  transition: 0.5s all ease-in-out;
  transition-property: opacity;
`;
export const ContentContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: ${(props) => (props.isCreatePostOpen ? "100px" : "-300px")};
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  border-radius: 10px;
  background: white;
  z-index: 6;
  transition: 0.2s all ease-in-out;
  transition-property: top;
`;
export const Content = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: inherit;
  width: 100%;
  padding-bottom: 20px;

  > * {
    text-align: center;
  }

  > p:last-child {
    font-size: 0.65rem;
    color: rgb(0, 183, 204);
    cursor: pointer;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  background: ${(props) =>
    props.imageFileData ? `url(${props.imageFileData})` : "rgb(0,183,204)"};
  background-size: cover;
  background-position: center;
  border-radius: inherit;
`;
export const PlusIcon = styled(BsPlusCircleFill)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: white;
  height: 30px;
  width: auto;
  cursor: pointer;
`;
export const ImageUpload = styled.input`
  position: absolute;
  display: none;
`;
export const PostPargraphContainer = styled.div`
  padding: 20px 0;
`;
export const PostParagraph = styled.input`
  width: 90%;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  background: rgb(242, 242, 242);
`;
export const SubmitButtonContainer = styled.div`
  padding-bottom: 10px;
`;
export const SubmitButton = styled.button`
  padding: 10px 20px;
  width: 40%;
  border: none;
  border-radius: 20px;
  background: rgb(255, 204, 77);
  color: white;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;

  &:hover {
    opacity: 0.6;
  }
`;
