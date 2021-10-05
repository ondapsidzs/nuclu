import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  AiFillLike,
  AiFillDislike,
  AiFillCloseCircle,
  AiFillCaretDown,
} from "react-icons/ai";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 100px;
  height: 200px;
  width: 100vw;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;

  > * {
    background: white;
    border-radius: 10px;
  }
`;
export const PostDescription = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: 20px;

  > p {
    text-align: justify;
    text-indent: 10%;
  }
`;
export const UserProfilePost = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
`;
export const UserPic = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 10px;
  cursor: pointer;
`;
export const Username = styled.p`
  position: relative;

  &::after {
    content: "Recently posted";
    position: absolute;
    bottom: -10px;
    left: 0;
    font-size: 0.5em;
    white-space: nowrap;
  }
`;
export const LikesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;
export const Likes = styled.p`
  margin-right: 10px;
`;
export const LikeIcon = styled(AiFillLike)`
  cursor: pointer;
  height: 30px;
  width: auto;
  margin-right: 30px;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;

  &:hover {
    opacity: 0.8;
  }
`;
export const DislikeIcon = styled(AiFillDislike)`
  cursor: pointer;
  height: 30px;
  width: auto;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;

  &:hover {
    opacity: 0.8;
  }
`;
export const Dislikes = styled.p`
  margin-left: 10px;
`;
export const ShareBtn = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius: 50px;
  background: rgb(255, 204, 77);
  color: white;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;

  &:hover {
    opacity: 0.8;
  }
`;
export const PostImageContainer = styled.div`
  position: relative;
  height: 400px;
  width: 45%;
`;
export const PostImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: inherit;
`;
export const Close = styled(AiFillCloseCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  fill: white;
  height: 30px;
  width: auto;
  cursor: pointer;
`;
export const PostDiscussions = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: 30px;

  > h1 {
    font-size: 1rem;
    font-weight: 300;
    color: rgb(0, 128, 128);
    margin-bottom: 10px;
  }

  > form {
    margin-bottom: 30px;

    > input {
      text-align: center;
      border: none;
      padding: 5px 0;
      border-radius: 30px;
      background: rgb(196, 196, 196);
    }
  }
`;
export const SortContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 30px;
  right: 30px;
  display: flex;
  cursor: pointer;

  > p {
    font-size: 0.75rem;
  }
`;
export const SortIcon = styled(AiFillCaretDown)`
  height: 0.65rem;
  width: auto;
  margin-left: 3px;
`;
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(61, 102, 102, 0.9);
`;
export const OptionIcon = styled(BiDotsVerticalRounded)`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
