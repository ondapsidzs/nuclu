import styled from "styled-components";

import { BsPlusCircleFill } from "react-icons/bs";

export const WelcomeUserContainer = styled.div`
  position: fixed;
  display: flex;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 10px;
  z-index: 10;
  padding: 50px;
`;
export const WelcomeUserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > h1 {
    color: rgb(0, 183, 204);
    text-transform: uppercase;
    font-size: 5rem;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }

  > h2 {
    font-weight: 500;
    margin-bottom: 10px;
  }

  > button {
    padding: 10px 30px;
    border: none;
    border-radius: 30px;
    margin-top: 10px;
    background: rgb(0, 183, 204);
    color: white;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    transition-property: opacity;

    &:hover {
      opacity: 0.8;
    }
  }
`;
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(61, 102, 102, 0.8);
  z-index: 5;
`;
export const PlusContainer = styled.div`
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;

  &:hover {
    opacity: 0.8;
  }
`;
export const PlusIcon = styled(BsPlusCircleFill)`
  fill: rgb(0, 183, 204);
  height: 200px;
  width: 200px;
  padding: 70px;
  border: 5px solid rgb(0, 183, 204);
  border-radius: 100%;
  margin-bottom: 10px;
`;
