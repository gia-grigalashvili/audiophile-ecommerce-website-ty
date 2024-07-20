import Speakers from "/assets/home/mobile/image-speaker-zx9.png";
import Speakerdesk from "/assets/home/desktop/image-speaker-zx9.png";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
function Speaker() {
  const navigate = useNavigate();

  const handleSeeProduct = () => {
    navigate(`/product/6`);
  };
  const handleSeeProducts = () => {
    navigate(`/product/5`);
  };
  return (
    <Maindiv>
      <Speakerdiv>
        <img src={Speakers} alt="Speaker mobile" className="mobile-img" />
        <img src={Speakerdesk} alt="Speaker desktop" className="desktop-img" />
        <Spekaers>
          <h1>
            ZX9 <br /> SPEAKER
          </h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button onClick={handleSeeProduct}>See Product</Button>
        </Spekaers>
      </Speakerdiv>
      <SECONDDIV>
        <h1>ZX7 SPEAKER</h1>
        <button onClick={handleSeeProducts}>See Product</button>
      </SECONDDIV>
    </Maindiv>
  );
}

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 40px;
  margin-top: 200px;
`;

const Button = styled.button`
  background: #000;
  width: 160px;
  height: 48px;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  @media (min-width: 1440px) {
    margin-top: 30px;
  }
  &:hover {
    background: #4c4c4c;
  }
`;

const Spekaers = styled.div``;

const Speakerdiv = styled.div`
  width: 327px;
  height: 600px;
  border-radius: 8px;
  background: #d87d4a;
  padding: 20px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/assets/home/desktop/pattern-circles.svg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  background-position: center;
  overflow: hidden;

  .mobile-img {
    display: block;
    width: 172.248px;
    height: 207px;
  }

  .desktop-img {
    display: none;
    width: 100%;
    height: auto;
  }

  @media (min-width: 1440px) {
    .mobile-img {
      display: none;
    }

    .desktop-img {
      display: block;
      width: 410.234px;
      height: 493px;
      margin-top: 100px;
    }
  }

  h1 {
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 111.111% */
    letter-spacing: 1.286px;
    text-transform: uppercase;
  }

  p {
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
  }
  @media (min-width: 750px) {
    width: 689px;
    height: 720px;

    gap: 120px;

    p {
      width: 349px;
      font-size: 15px;

      margin-top: 20px;
    }
    h1 {
      font-size: 56px;

      font-weight: 700;
      line-height: 58px; /* 103.571% */
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
  @media (min-width: 1440px) {
    width: 1110px;
    height: 560px;
    flex-direction: row;
    gap: 120px;
    text-align: unset;

    p {
      width: 349px;
      font-size: 15px;
      text-align: unset;
      margin-top: 20px;
    }
    h1 {
      font-size: 56px;

      font-weight: 700;
      line-height: 58px; /* 103.571% */
      letter-spacing: 2px;
      text-transform: uppercase;
      text-align: unset;
    }
  }
`;

const SECONDDIV = styled.div`
  background-image: url("../assets/home/mobile/image-speaker-zx7.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  width: 327px;
  height: 327px;
  border-radius: 8px;
  gap: 30px;

  h1 {
    color: #000;
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  button {
    width: 160px;
    padding: 14px;
    background-color: transparent;
    border: 1px solid;
    color: #000;
    cursor: pointer;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    &:hover {
      background-color: #000;
      color: aliceblue;
    }
  }
  @media (min-width: 740px) {
    background-image: url("/assets/home/tablet/image-speaker-zx7.jpg");
    width: 689px;

    padding: 100px;
  }
  @media (min-width: 1440px) {
    background-image: url("/assets/home/desktop/image-speaker-zx7.jpg");
    width: 1110px;
    padding: 100px;
  }
`;

export default Speaker;
