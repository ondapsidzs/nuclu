import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";

export const Container = styled.div`
  position: relative;
  width: 100%;
  background: white;
  border-radius: 10px;
  display: flex;
`;
export const ProductImage = styled.img`
  height: 100%;
  width: 30%;
  object-fit: cover;
  object-position: center;
  border-radius: inherit;
`;
export const Content = styled.div`
  padding: 30px;

  h1 {
    font-weight: 400;
    font-size: 1.25rem;
  }
`;
export const Reviews = styled.div`
  display: flex;

  p {
    margin-left: 10px;
  }
`;
export const Star = styled(AiFillStar)`
  fill: rgb(0, 183, 204);
`;
export const Favorites = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  top: 0;
  right: 30px;
  height: 50%;
  background: rgb(255, 204, 77);
  padding: 10px;
  border-radius: 0 0 30px 30px;
`;
export const Plus = styled(BsPlusCircleFill)`
  fill: white;
  height: 20px;
  width: auto;
`;
