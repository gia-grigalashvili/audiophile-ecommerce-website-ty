import Logo from "/assets/audiophile 2.svg";
import styled from "styled-components";
import Facebok from "/assets/shared/desktop/icon-facebook.svg";
import instagram from "/assets/shared/desktop/icon-instagram.svg";
import twitter from "/assets/shared/desktop/icon-twitter.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <Footerdiv>
      <Link to="/">
        <img className="logo" src={Logo} alt="Audiophile Logo" />
      </Link>
      <Infor>
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link to="/headphones">HEADPHONES</Link>
        </h1>
        <h1>
          <Link to="/speakers">SPEAKERS</Link>
        </h1>
        <h1>
          <Link to="/earphones">EARPHONES</Link>
        </h1>
      </Infor>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p>Copyright 2021. All Rights Reserved</p>
      <Social>
        <img src={Facebok} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
      </Social>
    </Footerdiv>
  );
}
const Footerdiv = styled.div`
  width: 100%;
  height: 100%;
  background: #101010;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
  margin-top: 100px;
  p {
    color: #9b9b9b;
    text-align: center;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
  }
`;
const Social = styled.div`
  display: flex;
  gap: 20px;
`;
const Infor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  a {
    color: #fff;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 192.308% */
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #d87d4a;
    }
  }
`;
export default Footer;
