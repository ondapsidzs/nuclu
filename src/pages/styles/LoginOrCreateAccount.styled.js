import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;

  @media screen and (max-width: 980px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
export const Content = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: 10%;

  @media screen and (max-width: 980px) {
    margin-left: 0;
  }
`;
export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -9;
`;
export const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgba(266, 266, 266, 0.8),
    rgba(266, 266, 266, 0.2)
  );
  z-index: -9;
`;
export const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
  z-index: -10;
`;
export const IconsContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50px;
  right: 50px;

  > a {
    margin-bottom: 10px;
    background: white;
    padding: 10px;
    border-radius: 20px;
    transition: 0.2s all ease-in-out;
    transition-property: transform, opacity;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-5px);
      opacity: 0.8;
    }

    > * {
      fill: rgb(0, 183, 204);
      height: 30px;
      width: auto;
    }

    @media screen and (max-width: 980px) {
      margin-bottom: 0;

      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }

  @media screen and (max-width: 980px) {
    position: static;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    padding-bottom: 50px;
  }
`;
export const SignUpSuccessful = styled.div`
  position: absolute;
  top: ${(props) => (props.isSignupSuccessful ? "50px" : "-100%")};
  left: 50%;
  background: white;
  border-radius: 10px;
  padding: 10px 30px;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 1s all ease-in-out;
  transition-property: top;
`;
export const UsernameDuplicate = styled.div`
  position: absolute;
  top: ${(props) => (props.usernameDuplicate ? "50px" : "-100%")};
  left: 50%;
  background: white;
  border-radius: 10px;
  padding: 10px 30px;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 1s all ease-in-out;
  transition-property: top;
`;
export const EmailDuplicate = styled.div`
  position: absolute;
  top: ${(props) => (props.emailDuplicate ? "50px" : "-100%")};
  left: 50%;
  background: white;
  border-radius: 10px;
  padding: 10px 30px;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 1s all ease-in-out;
  transition-property: top;
`;
