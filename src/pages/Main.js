import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";

import Navbar from "../components/Navbar";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";
import {
  Col1,
  Col2,
  Content,
  ContentContainer,
  GoToMainPage,
  LoadingIcon,
  MakeConnectionsContainer,
  SearchIcon,
  Shared,
  Notifications,
  NotificationList,
  MarketplaceHeader,
  Pages,
  JobBoard,
  JobSearchForm,
  JobSearchInput,
  JobSearchIcon,
  JobButtonsContainer,
  JobCategories,
  JobPosts,
  JobApplications,
  SettingsContainer,
} from "./styles/Main.styled";
import Loading_icon from "../images/loading_icon.png";
import WelcomeNewUser from "../components/WelcomeNewUser";
import ConnectionsCard from "../components/ConnectionsCard";
import PostClicked from "../components/PostClicked";
import Profile from "../components/Profile";
import PersonalInformation from "../components/PersonalInformation";
import MarketplaceImage1 from "../images/marketplace_image_1.png";
import MarketplaceImage2 from "../images/marketplace_image_2.png";
import ProductCard from "../components/ProductCard";
import JobBoardImage1 from "../images/job_board_image_1.png";
import JobPostCard from "../components/JobPostCard";

const Main = (props) => {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [oddPosts, setOddPosts] = useState([]);
  const [evenPosts, setEvenPosts] = useState([]);
  const [welcomeNewUserActive, setWelcomeNewUserActive] = useState(true);
  const [postActive, setPostActive] = useState(false);

  function createPostHandler() {
    setIsCreatePostOpen(!isCreatePostOpen);
  }

  function getPosts() {
    setIsFetching(true);

    const fetchingData = async () => {
      const res = await fetch(
        "https://nuclu-posts-default-rtdb.firebaseio.com/posts.json"
      );
      const data = await res.json();
      return data;
    };

    const transformData = async () => {
      const data = await fetchingData();

      let userPosts = [];

      for (const key in data) {
        const postData = {
          id: key,
          ...data[key],
        };

        userPosts.unshift(postData);
      }

      setPosts(userPosts);

      let oddPosts = userPosts.filter((_, index) => index % 2 !== 0);
      let evenPosts = userPosts.filter((_, index) => index % 2 === 0);

      setOddPosts(oddPosts);
      setEvenPosts(evenPosts);

      setIsFetching(false);
    };

    transformData();
  }

  function welcomeNewUserActiveHandler() {
    setWelcomeNewUserActive(false);
  }

  function postClickedActiveTrue() {
    setPostActive(true);
  }

  function postClickedActiveFalse() {
    setPostActive(false);
  }

  useEffect(() => {
    getPosts();
  }, []);

  if (isFetching) {
    console.log("Loading...");
  }

  return (
    <>
      <Navbar
        createPostClicked={createPostHandler}
        username={props.username}
        loggedIn={props.loggedIn}
      />
      <CreatePost
        isCreatePostOpen={isCreatePostOpen}
        createPostClose={createPostHandler}
      />
      <ContentContainer onClick={() => console.log(posts)}>
        <Content>
          <Route path="/settings">
            <Col1>
              <Profile />
            </Col1>
            <Col2>
              <SettingsContainer onSubmit={(e) => e.preventDefault}>
                <h1>Edit</h1>
                <label htmlFor="fullName">Full Name</label>
                <input placeholder="User Full Name" id="fullName" />
                <label htmlFor="username">Username</label>
                <input placeholder="Username" id="username" />
                <label htmlFor="emailAddress">Email Address</label>
                <input placeholder="Email Address" id="emailAddress" />
                <label htmlFor="password">Password</label>
                <input placeholder="password" id="password" />
                <label htmlFor="contactNumber">Contact Number</label>
                <input placeholder="Contact Number" id="contactNumber" />
                <label htmlFor="company">Company</label>
                <input placeholder="-" id="company" />
                <label htmlFor="companyWebsite">Company Website</label>
                <input placeholder="-" id="companyWebsite" />
                <label htmlFor="language">Language</label>
                <input placeholder="English" id="language" />
                <button>Save</button>
              </SettingsContainer>
            </Col2>
          </Route>
          <Route path="/jobs">
            <div style={{ width: "100%" }}>
              <JobBoard>Nuclu Job Board</JobBoard>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <Col1>
                  <JobSearchForm>
                    <JobSearchInput placeholder="Search Job" />
                    <JobSearchIcon />
                  </JobSearchForm>
                  <img
                    src={JobBoardImage1}
                    alt=""
                    style={{ width: "100%", height: "150px" }}
                  />
                  <JobPostCard />
                  <JobPostCard />
                  <JobPostCard />
                  <JobPostCard />
                  <JobPostCard />
                  <JobPostCard />
                </Col1>
                <Col2>
                  <JobButtonsContainer>
                    <JobCategories>Job Categories</JobCategories>
                    <div>
                      <JobPosts>Your Job Posts</JobPosts>
                      <JobApplications>You Job Applications</JobApplications>
                    </div>
                  </JobButtonsContainer>
                  <JobPostCard />
                  <JobPostCard />
                  <JobPostCard />
                  <JobPostCard />
                  <JobPostCard />
                  <JobPostCard />
                  <JobPostCard />
                </Col2>
              </div>
              <div style={{ display: "flex", marginTop: "30px" }}>
                <p
                  style={{
                    marginRight: "10px",
                    color: "rgb(0,183,204)",
                    cursor: "pointer",
                  }}
                >
                  1
                </p>
                <p style={{ marginRight: "10px", cursor: "pointer" }}>2</p>
                <p style={{ marginRight: "10px", cursor: "pointer" }}>3</p>
                <p style={{ marginRight: "10px", cursor: "pointer" }}>4</p>
              </div>
            </div>
          </Route>
          <Route path="/marketplace">
            <div style={{ width: "100%" }}>
              <MarketplaceHeader>Nuclu Marketplace</MarketplaceHeader>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Col1>
                  <img
                    src={MarketplaceImage1}
                    alt=""
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </Col1>
                <Col2>
                  <ProductCard />
                  <ProductCard />
                  <img
                    src={MarketplaceImage2}
                    alt=""
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </Col2>
              </div>
              <Pages>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
              </Pages>
            </div>
          </Route>
          <Route path="/connections">
            <Col1>
              <form
                action="/"
                onSubmit={(e) => e.preventDefault()}
                style={{ width: "100%" }}
              >
                <input
                  placeholder="Search connections"
                  style={{
                    border: "none",
                    padding: " 5px 10px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                />
              </form>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100px",
                  backgroundImage:
                    "linear-gradient(to right,rgba(0,128,128,0.6),rgba(0,128,128,0.6)),url('https://images.unsplash.com/photo-1526929804231-3de5919d43ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZyaWVuZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  color: "white",
                }}
              >
                Connections
              </div>
              <ConnectionsCard
                imageSrc={
                  "https://images.unsplash.com/photo-1571993004197-f136573e0177?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsdWUlMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                profileSrc={
                  "https://images.unsplash.com/photo-1522850067562-a4c60453058d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJsdWUlMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
              />
              <ConnectionsCard />
              <ConnectionsCard />
              <ConnectionsCard />
              <ConnectionsCard />
            </Col1>
            <Col2>
              <form
                action="/"
                onSubmit={(e) => e.preventDefault()}
                style={{ width: "100%", opacity: "0" }}
              >
                <input
                  placeholder="Search connections"
                  style={{
                    border: "none",
                    padding: " 5px 10px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                />
              </form>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100px",
                  backgroundImage:
                    "linear-gradient(to right,rgba(0,128,128,0.2),rgba(0,128,128,0.2)),url('https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZyaWVuZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  color: "white",
                }}
              >
                Make more connections
              </div>
              <ConnectionsCard />
              <ConnectionsCard />
              <ConnectionsCard />
              <ConnectionsCard />
            </Col2>
          </Route>
          <Route path="/notifications">
            <Col1>
              <Notifications>
                Notifications
                <BsFillBellFill style={{ fill: "white", marginLeft: "10px" }} />
              </Notifications>
              <NotificationList>
                <div id="notification" style={{ background: "rgb(0,183,204)" }}>
                  <img
                    src="https://images.unsplash.com/photo-1628615315480-d170afbf27f9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    alt=""
                  />
                  <p style={{ color: "white" }}>
                    <b style={{ color: "white" }}>User</b> liked your post
                  </p>
                  <p style={{ color: "white" }}>1 minute ago</p>
                </div>
                <div id="notification">
                  <img
                    src="https://images.unsplash.com/photo-1628615315480-d170afbf27f9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    alt=""
                  />
                  <p>
                    <b>User</b> liked your post
                  </p>
                  <p>1 minute ago</p>
                </div>
                <div id="notification">
                  <img
                    src="https://images.unsplash.com/photo-1628615315480-d170afbf27f9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    alt=""
                  />
                  <p>
                    <b>User</b> liked your post
                  </p>
                  <p>1 minute ago</p>
                </div>
                <div id="notification">
                  <img
                    src="https://images.unsplash.com/photo-1628615315480-d170afbf27f9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    alt=""
                  />
                  <p>
                    <b>User</b> liked your post
                  </p>
                  <p>1 minute ago</p>
                </div>
                <div id="notification">
                  <img
                    src="https://images.unsplash.com/photo-1628615315480-d170afbf27f9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    alt=""
                  />
                  <p>
                    <b>User</b> liked your post
                  </p>
                  <p>1 minute ago</p>
                </div>
                <div id="notification">
                  <img
                    src="https://images.unsplash.com/photo-1628615315480-d170afbf27f9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    alt=""
                  />
                  <p>
                    <b>User</b> liked your post
                  </p>
                  <p>1 minute ago</p>
                </div>
                <div id="pages">
                  <p>1</p>
                  <p className="blue">2</p>
                  <p>3</p>
                  <p>4</p>
                </div>
              </NotificationList>
            </Col1>
            <Col2>
              <Post />
            </Col2>
          </Route>
          <Route path="/profile">
            <Col1>
              <Profile />
              <Post
                src="https://images.unsplash.com/photo-1628458622153-91f541e903d2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                userpic="https://images.unsplash.com/photo-1628432146903-61fad49d32f2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                paragraphContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi amet neque, at tristique congue gravida. Adipiscing viverra at tristique non nunc condimentum eu sollicitudin. Arcu leo pellentesque augue felis fringilla fusce scelerisque. Consequat porta mauris iaculis a diam sit eu lorem. Arcu, fames ultrices cursus semper imperdiet. Lorem quisque tellus ipsum a in ac."
              />
            </Col1>
            <Col2>
              <PersonalInformation />
              <a href="/photos" id="photos">
                <h1>Photos</h1>
                <p>User hasn’t uploaded any photos yet</p>
              </a>
              <a href="/connections" id="connections">
                <h1>User doesn't have connections yet</h1>
                <p>Use the search button to find some connections</p>
              </a>
              <Post />
              <Post />
              <div>
                <Shared>
                  <img
                    src="https://images.unsplash.com/photo-1628432413263-a6b46e08f153?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    alt=""
                  />
                  <p>
                    <b>User</b> shared
                  </p>
                </Shared>
                <Post />
              </div>
            </Col2>
          </Route>
          <Route path="/welcome">
            {welcomeNewUserActive ? (
              <WelcomeNewUser
                welcomeNewUserActiveHandler={welcomeNewUserActiveHandler}
              />
            ) : (
              ""
            )}
            <Col1 id="col1">
              <a
                href="/main"
                style={{ display: "block", marginBottom: "30px" }}
              >
                <GoToMainPage>Go To Main Page</GoToMainPage>
              </a>
              <Post
                src={
                  "https://images.unsplash.com/photo-1603566234384-f5f5b59168cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHlvdXR1YmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                }
                username="Nuclu"
                paragraphContent="Nuclu statement on welcoming new users and some policies and etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi amet neque, at tristique congue gravida. Adipiscing viverra at tristique non nunc condimentum eu sollicitudin. Arcu leo pellentesque augue felis fringilla fusce scelerisque. Consequat porta mauris iaculis a diam sit eu lorem. Arcu, fames ultrices cursus semper imperdiet. Lorem quisque tellus ipsum a in ac."
              />
              <Post
                username="Nuclu"
                paragraphContent="Users are responsible of what they post. Be responsible to what you post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi amet neque, at tristique congue gravida."
              />
            </Col1>
            <Col2 id="col2">
              <MakeConnectionsContainer>
                <p>Make Connections</p>
                <SearchIcon />
              </MakeConnectionsContainer>
              <ConnectionsCard
                imageSrc={
                  "https://images.unsplash.com/photo-1571993004197-f136573e0177?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsdWUlMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                profileSrc={
                  "https://images.unsplash.com/photo-1522850067562-a4c60453058d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJsdWUlMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
              />
              <ConnectionsCard />
              <ConnectionsCard />
              <ConnectionsCard />
              <ConnectionsCard />
            </Col2>
          </Route>
          <Route path="/main">
            <Col1 id="col1" onClick={postClickedActiveTrue}>
              {!isFetching
                ? oddPosts.map((userPost) => (
                    <Post
                      key={userPost.id}
                      id={userPost.id}
                      src={userPost.imageSrc}
                      paragraphContent={userPost.postParagraph}
                    />
                  ))
                : ""}
            </Col1>
            <Col2 id="col2">
              {!isFetching
                ? evenPosts.map((userPost) => (
                    <Post
                      key={userPost.id}
                      id={userPost.id}
                      src={userPost.imageSrc}
                      paragraphContent={userPost.postParagraph}
                    />
                  ))
                : ""}
            </Col2>
          </Route>
        </Content>
      </ContentContainer>
      <LoadingIcon src={Loading_icon} />
      {postActive ? (
        <PostClicked postClickedActiveFalse={postClickedActiveFalse} />
      ) : (
        ""
      )}
    </>
  );
};

export default Main;
