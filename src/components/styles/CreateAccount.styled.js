import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
`;
export const Content1 = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 20px;

  > a:first-of-type {
    text-align: center;
  }
`;
export const NucluLogo = styled.img`
  height: 70px;
  width: auto;
  margin-bottom: 10px;
`;
export const NucluName = styled.div`
  font-weight: 900;
  font-size: 2rem;
  text-transform: uppercase;
  color: rgb(0, 183, 204);
`;
export const NucluForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px 0 0;

  > input {
    font-size: 1.05rem;
    text-align: center;
    padding: 5px 0;
    border-radius: 20px;
    border: none;
    background: rgb(204, 204, 204);
    margin: 5px 0;
  }

  > p {
    margin: 10px 0;
    font-size: 0.8rem;
  }

  #gender {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }

  #birthdate {
    #birthday {
      padding: 10px 30px;
      border: none;
      border-radius: 20px;
      background: rgb(204, 204, 204);
    }
  }
`;
export const Username = styled.input``;
export const Password = styled.input``;
export const CreateAccountBtn = styled.button`
  font-size: 1.1rem;
  width: 80%;
  padding: 10px 0;
  background: rgb(255, 204, 77);
  margin: 10px 0;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: transform, opacity;

  + a {
    font-size: 0.8rem;
    color: rgb(0, 183, 204);
  }

  &:hover {
    transform: translateY(-5px);
    opacity: 0.8;
  }
`;
