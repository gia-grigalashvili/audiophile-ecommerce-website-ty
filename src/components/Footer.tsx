import Logo from "/public/assets/audiophile 2.svg";
import styled from "styled-components";
import Facebok from "/public/assets/shared/desktop/icon-facebook.svg";
import instagram from "/public/assets/shared/desktop/icon-instagram.svg";
import twitter from "/public/assets/shared/desktop/icon-twitter.svg";
function Footer() {
  return (
    <Footerdiv>
      <img src={Logo} alt="" />
      <Infor>
        <h1>Home</h1>
        <h1>HEADPHONES</h1>
        <h1>SPEAKERS</h1>
        <h1>EARPHONES</h1>
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
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  p {
    color: #fff;
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
  gap: 10px;
  img {
    width: 104px;
    height: 24px;
    flex-shrink: 0;
  }
`;
const Infor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    color: #fff;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 192.308% */
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
export default Footer;
