import Speakers from "/public/assets/home/mobile/image-speaker-zx9.png";

import styled from "styled-components";
function Speaker() {
  return (
    <Maindiv>
      <Speakerdiv>
        <img src={Speakers} alt="" />
        <h1>
          ZX9 <br /> SPEAKER
        </h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button>See Product</Button>
      </Speakerdiv>
      <SECONDDIV>
        <h1>ZX7 SPEAKER</h1>
        <button>See Product</button>
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
`;
const Button = styled.button`
  background: #000;
  width: 160px;
  height: 48px;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
`;
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
  background-image: url("/public/assets/home/desktop/pattern-circles.svg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  background-position: center;
  img {
    width: 172.248px;
    height: 207px;
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
`;
const SECONDDIV = styled.div`
  background-image: url("../public/assets/home/mobile/image-speaker-zx7.jpg");
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
  }
`;
export default Speaker;
