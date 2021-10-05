import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const Container = styled.div`
  position: relative;
  width: 100%;
  background: white;
  border-radius: 10px;
`;
export const UserLabel = styled.p`
  position: absolute;
  right: 30px;
  padding: 5px 20px;
  background: rgb(0, 183, 204);
  color: white;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;

  &:hover {
    opacity: 0.8;
  }
`;
export const ProfileBackground = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: inherit;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 20px;
`;
export const UserPic = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  outline: 5px solid white;
  cursor: pointer;
`;
export const UserProfile = styled.div`
  position: relative;
  margin-top: 10px;
  width: 78%;

  p {
    &::after {
      content: "(Nickname)";
      font-size: 0.95rem;
      font-weight: 100;
      margin-left: 10px;
    }
  }

  form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;

    input {
      width: 90%;
      padding: 5px 10px;
      border: none;
      border-radius: 30px;
      background: rgb(196, 196, 196);
    }
    button {
      padding: 10px;
      border: none;
      border-radius: 50px;
      color: white;
      background: rgb(0, 183, 204);
      margin-left: 10px;
      cursor: pointer;
      transition: 0.2s all ease-in-out;
      transition-property: opacity;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
export const Options = styled(BiDotsVerticalRounded)`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;
