import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SeeProduct() {
  const navigate = useNavigate();

  const handleSeeProduct = () => {
    navigate(`/product/4`);
  };

  return (
    <MainDiv>
      <div className="div">
        <h2>NEW PRODUCT</h2>
        <h1>
          XX99 Mark II <br />
          Headphones
        </h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
      </div>

      <Button onClick={handleSeeProduct}>See Product</Button>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  background-image: url("/public/assets/home/mobile/image-header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  height: 100vh;
  text-align: center;
  @media (min-width: 1440px) {
    background-image: url("/public/assets/home/desktop/image-hero.jpg");
    height: 100vh;
    background-size: cover;
    text-align: unset;
    align-items: unset;
    padding: 100px;
  }
  h2 {
    color: #707070;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 10px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 1.286px;
    text-transform: uppercase;
    margin-bottom: 20px;
    @media (min-width: 1440px) {
      font-size: 56px;

      font-weight: 700;
      line-height: 58px;
      letter-spacing: 2px;
    }
  }

  p {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    margin-bottom: 30px;
    @media (min-width: 1440px) {
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
      width: 349px;
    }
  }
  .div {
    margin-top: 80px;
  }
`;

const Button = styled.button`
  width: 160px;
  height: 48px;
  background: #d87d4a;
  color: #fff;
  font-family: Manrope, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #f0895d;
  }
`;

export default SeeProduct;
