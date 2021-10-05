import React from "react";

import {
  Container,
  Content,
  UserLabel,
  ProfileBackground,
  UserPic,
  UserProfile,
  Options,
} from "./styles/Profile.styled";

const Profile = () => {
  return (
    <>
      <Container>
        <UserLabel>Become a seller</UserLabel>
        <ProfileBackground src="https://images.unsplash.com/photo-1628530469276-ec56f8fc34c8?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
        <Content>
          <UserPic src="https://images.unsplash.com/photo-1628432146903-61fad49d32f2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
          <UserProfile>
            <p>User</p>
            <form action="/" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="What are you feeling today? Let other people now" />
              <button>Set</button>
            </form>
            <Options />
          </UserProfile>
        </Content>
      </Container>
    </>
  );
};

export default Profile;
