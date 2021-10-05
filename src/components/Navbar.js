import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Content,
  CreatePost,
  MenuDropdownContainer,
  MenuDropdownContent,
  NavMenu,
  NucluLogo,
  PlusIcon,
  RightContentContainer,
  SearchBar,
  SearchBarContainerAbsolute,
  SearchContainer,
  SearchIcon,
  SearchInput,
  UserProfileContainer,
  UserProfilePicture,
  UsersName,
  LogoutButton,
  MenuLogOut,
} from "./styles/Navbar.styled";
import { BiNews } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { IoStorefront } from "react-icons/io5";
import { GiSuitcase } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";

import Logo from "../logo/nuclu_logo.png";
import MenuImage from "../images/grid_menu.png";
import ProfilePicture from "../images/login_background.jpg";

const Navbar = (props) => {
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function searchbarDropdownHandler() {
    setIsSearchbarOpen(!isSearchbarOpen);
    setIsMenuOpen(false);
  }

  function menuDropdownHandler() {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchbarOpen(false);
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < 480) {
      setIsSearchbarOpen(false);
      setIsMenuOpen(false);
    }
  });

  useEffect(() => {}, [props.username]);

  return (
    <>
      <Container onClick={() => props.loggedIn("Sidney")}>
        <Content>
          <SearchContainer>
            <SearchInput placeholder="Search..." />
            <SearchIcon onClick={searchbarDropdownHandler} />
          </SearchContainer>
          <Link to="/main">
            <NucluLogo src={Logo} />
          </Link>
          <RightContentContainer>
            <CreatePost onClick={props.createPostClicked}>
              <PlusIcon />
              Create Post
            </CreatePost>
            <UserProfileContainer href="/profile">
              <UsersName>{props.username}</UsersName>
              <UserProfilePicture src={ProfilePicture} />
            </UserProfileContainer>
            <MenuLogOut>
              <NavMenu
                src={MenuImage}
                onClick={menuDropdownHandler}
                style={{ marginRight: "10px" }}
              />
              <Link
                to="/login"
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                }}
              >
                <LogoutButton />
              </Link>
            </MenuLogOut>
          </RightContentContainer>
        </Content>
      </Container>
      <SearchBarContainerAbsolute dropdown={isSearchbarOpen}>
        <SearchBar placeholder="Search..." />
      </SearchBarContainerAbsolute>
      <MenuDropdownContainer isMenuOpen={isMenuOpen}>
        <MenuDropdownContent>
          <div>
            <a href="/main">
              <BiNews />
            </a>
          </div>
          <div>
            <a href="/notifications">
              <BsFillBellFill />
            </a>
          </div>
          <div>
            <a href="/connections">
              <HiLink />
            </a>
          </div>
          <div>
            <a href="/marketplace">
              <IoStorefront />
            </a>
          </div>
          <div>
            <a href="/jobs">
              <GiSuitcase />
            </a>
          </div>
          <div>
            <a href="/settings">
              <AiFillSetting />
            </a>
          </div>
        </MenuDropdownContent>
      </MenuDropdownContainer>
    </>
  );
};

export default Navbar;
