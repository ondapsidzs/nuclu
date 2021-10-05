import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Header,
  NucluLogo,
  Content1,
  Content2,
  Content3,
  Content4,
  Footer,
} from "./styles/Landing.styled";

import NucluLogoPng from "../logo/nuclu_logo.png";
import LandingImage1 from "../images/landing_image_1.png";
import LandingImage2 from "../images/login_background.jpg";
import LandingImage3 from "../images/landing_image_2.png";
import LandingImage4 from "../images/landing_image_3.png";
import LandingImage5 from "../images/landing_image_4.png";
import LandingImage6 from "../images/landing_image_5.png";
import LandingImage7 from "../images/landing_image_6.png";
import LandingImage8 from "../images/landing_image_7.png";

const Landing = () => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <NucluLogo src={NucluLogoPng} />
        </Link>
      </Header>
      <Content1 background={LandingImage1}>
        <div className="width-60">
          <p>Social Media</p>
          <p>at its best</p>
          <div>
            <Link to="/login">Register to Nuclu now!</Link>
          </div>
          <img src={LandingImage2} alt="2" />
        </div>
      </Content1>
      <Content2>
        <div className="width-60">
          <p>Benefits</p>
          <div>
            <img src={LandingImage3} alt="3" />
            <div>
              <p>1</p>
              <p>
                Different people uses this platform to share stories, insights,
                and ideas
              </p>
            </div>
          </div>
          <div>
            <div>
              <p>2</p>
              <p>
                Meet new friends, chat with them no matter how far you are from
                that person
              </p>
            </div>
            <img src={LandingImage4} alt="4" />
          </div>
          <div>
            <img src={LandingImage5} alt="5" />
            <div>
              <p>3</p>
              <p>
                Different people uses this platform to share stories, insights,
                and ideas
              </p>
            </div>
          </div>
        </div>
      </Content2>
      <Content3>
        <div className="width-60">
          <h1>Nuclu ain't just 'it'</h1>
          <p>
            Nuclu isn’t just the social media you use. We also offer a
            marketplace which you guys could enjoy. Make connections with
            customers or sellers. You can also sell stuffs in here. Become
            either a buyer or a seller.
          </p>
          <h2>Social Benefits</h2>
          <div>
            <img src={LandingImage6} alt="6" />
            <p>
              “I really love Nuclu because of how user-friendly it is and how
              easy I can make connections with my friends and customers”
            </p>
          </div>
          <div>
            <p>
              “I sold out for just an hour. With Nuclu, it is easier to have
              contact with anybody”
            </p>
            <img src={LandingImage7} alt="7" />
          </div>
        </div>
      </Content3>
      <Content4 background={LandingImage8}>
        <div>Be you with Nuclu</div>
        <Link to="/login">Register to Nuclu now!</Link>
      </Content4>
      <Footer></Footer>
    </Container>
  );
};

export default Landing;
