import styled from "styled-components";
import { BsPlusCircleFill } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: inherit;
  width: inherit;
`;
export const ImageContainer = styled.div`
  position: relative;
  height: inherit;
  width: 40%;
`;
export const ConnectionDescription = styled.div`
  position: absolute;
  font-size: 0.8rem;
  background: rgb(255, 204, 77);
  color: white;
  padding: 5px 10px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  border-radius: 0 0 10px 10px;

  @media screen and (max-width: 980px) {
    display: none;
  }
`;
export const ImageContent = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;
export const ProfileImage = styled.img`
  position: absolute;
  height: 50px;
  width: 50px;
  object-fit: cover;
  object-position: center;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  border-radius: 50%;
  outline: 5px solid white;
`;
export const InfoContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 50%;
  height: 100%;
`;
export const Name = styled.div``;
export const ViewProfile = styled.div`
  color: rgb(0, 183, 204);
  font-size: 0.65rem;
`;
export const RequestButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border: none;
  border-radius: 30px;
  background: rgb(255, 204, 77);
  color: white;
  width: 90%;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;
export const Plus = styled(BsPlusCircleFill)`
  fill: white;
  margin-right: 10px;
`;
export const Menu = styled(BiDotsVerticalRounded)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  cursor: pointer;
`;

ImageContent.defaultProps = {
  src: "https://images.unsplash.com/photo-1601436155198-2ebfea8117b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
};
ProfileImage.defaultProps = {
  src: "https://images.unsplash.com/photo-1487009805257-5ed2eb9f10a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJsdWUlMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
};
Name.defaultProps = {
  children: "user",
};
