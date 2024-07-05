import styled from "styled-components";
import Person from "/public/assets/shared/mobile/image-best-gear.jpg";
function Personal() {
  return (
    <Maindiv>
      <img src={Person} alt="" />
      <Infromation>
        <h1>
          Bringing you the <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </Infromation>
    </Maindiv>
  );
}
const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 20px;
  img {
    width: 327px;
    height: 300px;
    border-radius: 8px;
  }
`;
const Infromation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    color: #000;
    text-align: center;
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;

    span {
      color: #d87d4a;
    }
  }
  p {
    color: #000;

    font-size: 15px;

    font-weight: 400;
    line-height: 25px; /* 166.667% */
  }
`;
export default Personal;
