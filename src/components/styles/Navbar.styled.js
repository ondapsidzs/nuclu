import styled from "styled-components";

import { BiSearch, BiLogOut } from "react-icons/bi";
import { BsPlusCircleFill } from "react-icons/bs";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: white;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 80%;
  padding: 10px 0;
`;
export const SearchContainer = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 40%;
`;
export const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 20px;
  background: rgb(242, 242, 242);
  padding: 5px 10px;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const SearchIcon = styled(BiSearch)`
  position: absolute;
  right: 10px;

  @media screen and (max-width: 480px) {
    position: static;
    box-sizing: unset;
    padding: 5px;
    background: rgb(242, 242, 242);
    border-radius: 20px;
    cursor: pointer;
  }
`;
export const NucluLogo = styled.img`
  height: 30px;
  width: auto;
`;
export const RightContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;

  @media screen and (max-width: 980px) {
    justify-content: flex-end;
  }
`;
export const CreatePost = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: transform, opacity;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.8;
  }

  @media screen and (max-width: 980px) {
    display: none;
  }
`;
export const PlusIcon = styled(BsPlusCircleFill)`
  fill: gold;
  margin-right: 10px;
`;
export const UserProfileContainer = styled.a`
  display: flex;
  align-items: center;

  @media screen and (max-width: 980px) {
    display: none;
  }
`;
export const UsersName = styled.p`
  font-size: 0.8rem;
  margin-right: 10px;
  white-space: nowrap;
`;
export const UserProfilePicture = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;

  &:hover {
    opacity: 0.8;
  }
`;
export const NavMenu = styled.img`
  height: 20px;
  width: auto;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: transform, opacity;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.8;
  }
`;
export const SearchBarContainerAbsolute = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    position: fixed;
    display: flex;
    justify-content: center;
    background: white;
    z-index: -5;
    top: ${(props) => (props.dropdown ? "50px" : "-10%")};
    width: 100vw;
    padding: 20px 0;
    transition: 0.2s all ease-in-out;
    transition-property: top;
  }
`;
export const SearchBar = styled.input`
  width: 80%;
  border: none;
  border-radius: 20px;
  background: rgb(242, 242, 242);
  padding: 5px 10px;
`;
export const MenuDropdownContainer = styled.div`
  position: fixed;
  top: ${(props) => (props.isMenuOpen ? "60px" : "-60px")};
  right: 10vw;
  height: 100px;
  width: 150px;
  border-radius: 20px;
  background: white;
  padding: 5px;
  transition: 0.2s all ease-in-out;
  transition-property: top;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const MenuDropdownContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  justify-content: space-evenly;
  align-content: space-evenly;
  height: 100%;
  width: 100%;
  border-radius: inherit;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(242, 242, 242);
    height: 35px;
    width: 35px;
    border-radius: inherit;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    transition: opacity;

    &:hover {
      opacity: 0.8;
    }

    svg {
      fill: rgb(0, 183, 204);
      height: 20px;
      width: auto;
    }

    &:first-child {
      background: rgb(0, 183, 204);

      svg {
        fill: white;
      }
    }
  }
`;
export const LogoutButton = styled(BiLogOut)`
  fill: rgb(0, 183, 204);
  height: 25px;
  width: auto;
  cursor: pointer;
  margin-left: 20px;
`;
export const MenuLogOut = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
