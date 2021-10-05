import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-top: 100px;
  z-index: 20;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
`;
export const Col = styled.div`
  width: 100%;

  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Col1 = styled.div`
  width: calc((100% - 20px) / 2);

  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Col2 = styled.div`
  width: calc((100% - 20px) / 2);

  > *:not(:last-child) {
    margin-bottom: 20px;
  }

  #photos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url("https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnJpZW5kc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60");
    background-position: center;
    background-size: cover;
    transition: 0.2s all ease-in-out;
    transition-property: transform;

    &:hover {
      transform: scale(1.02);
    }

    * {
      color: white;
    }

    h1 {
      font-weight: 300;
      font-size: 1.25rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 0.85rem;
    }
  }

  #connections {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    border-radius: 10px;
    background: rgb(65, 136, 144);
    transition: 0.2s all ease-in-out;
    transition-property: transform;

    &:hover {
      transform: scale(1.02);
    }

    * {
      color: white;
    }

    h1 {
      font-weight: 400;
      font-size: 1.15rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;
export const LoadingIcon = styled.img`
  display: block;
  height: 20px;
  width: auto;
  margin: 20px auto;
`;
export const GoToMainPage = styled.button`
  padding: 10px 0;
  border: none;
  border-radius: 10px;
  width: 100%;
  background: rgb(255, 204, 77);
  color: white;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;

  &:hover {
    opacity: 0.8;
  }
`;
export const MakeConnectionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  background-image: linear-gradient(
      to right,
      rgba(0, 128, 128, 0.2),
      rgba(0, 128, 128, 0.2)
    ),
    url("https://images.unsplash.com/photo-1534101903809-7f572128332a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGJsdWUlMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  border-radius: 10px;
  background-position: top;
  background-size: cover;
  cursor: pointer;

  p {
    color: white;
  }
`;
export const SearchIcon = styled(BiSearch)`
  fill: white;
  height: 30px;
  width: auto;
  margin-left: 10px;
`;
export const Shared = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  padding: 10px;
  background: rgb(242, 242, 242);
  border-radius: 10px 10px 0 0;
  transform: translateX(10px);

  img {
    height: 30px;
    width: 30px;
    border-radius: 50px;
    margin-right: 10px;
  }
`;
export const Notifications = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100px;
  width: 100%;
  font-size: 1.25rem;
  border-radius: 10px;
  background: white;
  background-image: linear-gradient(
      to right,
      rgba(0, 128, 142, 0.6),
      rgba(0, 128, 142, 0.6)
    ),
    url("https://images.unsplash.com/photo-1533047218705-9d453c0e39fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60");
  background-size: cover;
  background-position: center;
`;
export const NotificationList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: white;
  border-radius: 10px;

  #notification {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    background: rgb(242, 242, 242);
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;

    img {
      height: 30px;
      width: 30px;
      margin-right: 10px;
      border-radius: 30px;
    }

    p:last-of-type {
      position: absolute;
      right: 10px;
      font-size: 0.65rem;
    }
  }

  #pages {
    display: flex;

    > p {
      cursor: pointer;
    }

    > p:not(:last-child) {
      margin-right: 10px;
    }

    .blue {
      color: rgb(0, 183, 204);
    }
  }
`;
export const MarketplaceHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  background-image: linear-gradient(
      to top,
      rgba(0, 183, 204, 0.8),
      rgba(0, 183, 204, 0.4)
    ),
    url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  color: white;
  font-size: 2rem;
  font-weight: 100;
  margin-bottom: 20px;
`;
export const Pages = styled.div`
  display: flex;
  margin-top: 30px;

  p:first-of-type {
    color: rgb(0, 183, 204);
  }

  p:not(:last-of-type) {
    margin-right: 10px;
    cursor: pointer;
  }
`;
export const JobBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8am9ifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60");
  background-size: cover;
  background-position: center;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 5px;
`;
export const JobSearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
`;
export const JobSearchInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: none;
  border-radius: 30px;
`;
export const JobSearchIcon = styled(BiSearch)`
  position: absolute;
  right: 10px;
`;
export const JobButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;

  button {
    padding: 5px 10px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    transition-property: opacity;
    height: 30px;

    &:hover {
      opacity: 0.8;
    }
  }
`;
export const JobCategories = styled.button`
  background: rgb(0, 183, 204);
  color: white;
`;
export const JobPosts = styled.button`
  background: rgb(204, 204, 204);
  color: white;
  margin-right: 10px;
`;
export const JobApplications = styled.button`
  background: rgb(0, 183, 204);
  color: white;
`;
export const SettingsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: white;
  border-radius: 10px;
  padding: 30px;
  text-align: center;

  > h1 {
    font-weight: 400;
    font-size: 1.15rem;
    margin-bottom: 10px;
  }

  > label {
    margin-bottom: 10px;

    &:not(:first-of-type) {
      margin-top: 20px;
    }
  }

  > input {
    height: 30px;
    padding: 0 10px;
    border: none;
    border-radius: 30px;
    background: rgb(196, 196, 196);
    text-align: center;
    width: 100%;
  }

  > button {
    margin-top: 30px;
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    background: rgb(0, 183, 204);
    color: white;
    transition: 0.2s all ease-in-out;
    transition-property: opacity;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
