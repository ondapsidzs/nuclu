import styled from "styled-components";
import { AiFillInfoCircle, AiFillEdit } from "react-icons/ai";

export const Container = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px;
`;
export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: 400;
    font-size: 1.25rem;
    margin: 10px 0;
  }
`;
export const InfoIcon = styled(AiFillInfoCircle)`
  fill: rgb(0, 183, 204);
  height: 30px;
  width: 30px;
`;
export const EditIcon = styled(AiFillEdit)`
  position: absolute;
  right: 30px;
  fill: rgb(0, 183, 204);
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
