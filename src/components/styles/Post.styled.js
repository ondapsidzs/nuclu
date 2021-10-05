import styled from "styled-components";

import { BiDotsVerticalRounded } from "react-icons/bi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  border-radius: 10px;
`;
export const ContentImage = styled.img`
  height: 250px;
  border-radius: inherit;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
`;
export const Content = styled.div`
  padding: 20px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const UserPic = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  margin-right: 10px;
  cursor: pointer;
  outline: 3px solid greenyellow;
`;
export const Username = styled.p`
  position: relative;
  font-weight: 500;
  cursor: pointer;

  &::after {
    position: absolute;
    content: "Recently Posted";
    font-size: 0.5rem;
    font-weight: 300;
    white-space: nowrap;
    bottom: -50%;
    letter-spacing: 1px;
    left: 0;
  }
`;
export const Settings = styled(BiDotsVerticalRounded)`
  height: 20px;
  width: auto;
  cursor: pointer;
`;
export const PostParagraph = styled.p`
  margin: 20px 0;
  text-align: justify;
  text-indent: 40px;
`;
export const CommentContainer = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px;
  width: 100%;
`;
export const CommentInput = styled.input`
  padding: 5px 10px;
  width: 90%;
  border: none;
  border-radius: 20px;
  background: rgb(242, 242, 242);
`;
export const CommentIcon = styled.img`
  height: 30px;
  width: auto;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;

  &:hover {
    opacity: 0.6;
  }
`;
export const Discussions = styled.p`
  font-size: 0.85rem;
  color: rgb(0, 183, 204);
  width: 100%;
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
`;

ContentImage.defaultProps = {
  src: "https://images.unsplash.com/photo-1522006069418-ff9f9395db48?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
};

UserPic.defaultProps = {
  src: "https://images.unsplash.com/photo-1517036391698-b004444390fe?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
};

Username.defaultProps = {
  children: "User",
};

PostParagraph.defaultProps = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quibusdam commodi error consectetur tenetur voluptatibus cumque hic neque dolor natus illo, ipsa veniam id magni accusamus praesentium quas enim ad",
};
