import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  .width-80 {
    width: 80%;
  }
  .width-60 {
    width: 60%;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  padding: 10px 0;
  background: white;

  > a {
    height: 100%;
  }
`;
export const NucluLogo = styled.img`
  height: 100%;
  width: auto;
`;
export const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-size: cover;
  padding: 100px 0;

  > div {
    position: relative;

    > p:first-of-type {
      font-size: 6rem;
      font-weight: 700;
      line-height: 85%;
      text-transform: uppercase;
      color: white;

      @media screen and (max-width: 980px) {
        text-align: center;
      }
      @media screen and (max-width: 736px) {
        font-size: 4rem;
      }
    }
    > p:nth-of-type(2) {
      font-size: 3rem;
      font-weight: 700;
      text-transform: uppercase;
      color: white;

      @media screen and (max-width: 980px) {
        font-size: 2rem;
        text-align: center;
      }
    }
    > div {
      margin-top: 30px;
      transition: 0.2s all ease-in-out;
      transition-property: transform;

      > a {
        background: rgb(0, 183, 204);
        padding: 10px 30px;
        color: white;
        border-radius: 20px;
      }
      &:hover {
        transform: translateY(-5px);
      }

      @media screen and (max-width: 980px) {
        text-align: center;
      }
    }
    > img {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 300px;
      width: auto;
      transform: translateY(80%);

      @media screen and (max-width: 980px) {
        width: 100%;
        position: static;
        transform: translateY(0);
        margin-top: 30px;
        object-fit: cover;
        object-position: center;
      }
    }
  }
`;
export const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;

  > div {
    > p {
      font-family: "Bebas Neue", sans-serif;
      font-size: 8rem;
      text-transform: uppercase;

      @media screen and (max-width: 980px) {
        text-align: center;
      }

      @media screen and (max-width: 1280px) {
        font-size: clamp(3rem, 10vw, 4rem);
      }
    }
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;

      > img {
        height: 300px;
        width: 48%;
        object-fit: cover;
        object-position: center;

        @media screen and (max-width: 980px) {
          width: 100%;
        }
      }

      > div {
        width: 45%;
        display: flex;
        align-items: center;

        > p:first-of-type {
          font-family: "Bebas Neue", sans-serif;
          font-size: 20rem;
        }

        @media screen and (max-width: 980px) {
          width: 100%;
        }
      }

      @media screen and (max-width: 980px) {
        flex-direction: column;

        &:nth-of-type(2) {
          flex-direction: column-reverse;
        }
      }
    }
  }
`;
export const Content3 = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
      font-family: "Bebas Neue", sans-serif;
      font-size: 10rem;
      text-align: right;
      line-height: 80%;

      & + p {
        margin: 50px 0;
        width: 80%;
        text-align: center;
      }
    }

    > h2 {
      font-family: "Bebas Neue", sans-serif;
      font-size: 5rem;
      margin: 50px 0;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > img {
        height: 300px;
        width: auto;
        margin: 0 30px;

        @media screen and (max-width: 980px) {
          height: 100px;
        }
      }

      > p {
        font-style: italic;
        font-weight: 300;
        width: 50%;
      }
    }
  }
`;
export const Content4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-position: center;

  > div {
    font-size: 3rem;
    font-weight: 100;
    width: 20%;
    text-align: center;
    color: white;
  }

  > a {
    font-size: 1.25rem;
    padding: 10px 30px;
    background: rgb(0, 183, 204);
    border-radius: 20px;
    color: white;
    margin-top: 30px;
    transition: 0.2s all ease-in-out;
    transition-property: transform;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;
export const Footer = styled.div`
  padding: 100px 0;
  background: white;
`;
