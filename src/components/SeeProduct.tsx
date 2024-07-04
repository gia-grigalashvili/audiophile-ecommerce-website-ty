// import data from "../data.json";

import styled from "styled-components";

function SeeProduct() {
  return (
    <Maindiv>
      <h2>NEW PRODUCT</h2>
      <h1>
        XX99 Mark II <br />
        HeadphoneS
      </h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button>See Product</Button>
    </Maindiv>
  );
}
const Maindiv = styled.div`
  background-image: "/public/assets/home/mobile/image-header.jpg";
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 10px;
    text-transform: uppercase;
  }
  h1 {
    color: #fff;
    text-align: center;
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
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
  }
`;
const Button = styled.div`
  width: 160px;
  height: 48px;
  flex-shrink: 0;
  background: #d87d4a;
  color: #fff;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default SeeProduct;
