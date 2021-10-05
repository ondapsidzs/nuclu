import styled from "styled-components";
import { FaDollarSign } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  background: white;
  border-radius: 10px;
  padding: 20px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  h1 {
    font-weight: 400;
    font-size: 1.15rem;
  }

  > p {
    font-size: 0.85rem;
  }

  p {
    display: flex;
    align-items: center;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    * {
      font-size: 0.75rem;
    }
  }
`;
export const Dollar = styled(FaDollarSign)`
  fill: rgb(0, 183, 204);
  height: 15px;
  width: 15px;
`;
