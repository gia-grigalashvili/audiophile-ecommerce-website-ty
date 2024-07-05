import React from "react";
import Speaker from "/public/assets/home/mobile/image-speaker-zx9.png";
import Speakerzx7 from "/public/assets/home/mobile/image-speaker-zx7.jpg";
import Earphone from "/public/assets/home/mobile/image-earphones-yx1.jpg";
import styled from "styled-components";
function Speaker() {
  return (
    <Maindiv>
      <Speakerdiv>
        <img src={Speakerzx7} alt="" />
        <h1>ZX9 SPEAKER</h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button>See Product</Button>
      </Speakerdiv>
    </Maindiv>
  );
}
const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const Button = styled.button`
  background: #000;
  width: 160px;
  height: 48px;
  padding: 20px;
`;
const Speakerdiv = styled.div`
  width: 327px;
  height: 600px;
  border-radius: 8px;
  background: #d87d4a;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/public/assets/home/desktop/pattern-circles.svg");
  background-repeat: no-repeat;
`;
export default Speaker;
