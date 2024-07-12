import styled from "styled-components";
import headphoness from "/public/assets/home/desktop/image-earphones-yx1.jpg";
import { useNavigate } from "react-router-dom";
function HeadPhones() {
  const navigate = useNavigate();
  const CLick = () => {
    navigate(`/product/1`);
  };
  return (
    <Maindiv>
      <img src={headphoness} alt="" />
      <Secondidv>
        <h1>YX1 EARPHONES</h1>
        <button onClick={CLick}>See Product</button>
      </Secondidv>
    </Maindiv>
  );
}
const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;
  img {
    width: 327px;
    height: 210px;
    border-radius: 8px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
      height: 320px;
      width: 540px;
    }
    img {
      height: 320px;
      width: 540px;
    }
  }
`;
const Secondidv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  width: 327px;
  border-radius: 8px;
  background: #f1f1f1;
  height: 200px;
  button {
    width: 160px;
    height: 48px;
    background-color: transparent;
    border: 1px solid;
    padding: 15px;
    color: #000;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background: #000;
      color: #f1f1f1;
    }
  }
  @media (min-width: 1440px) {
    width: 540px;
    height: 320px;
    padding: 100px;
    justify-content: center;
  }
`;
export default HeadPhones;
