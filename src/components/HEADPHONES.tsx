import styled from "styled-components";
import headphoness from "/public/assets/home/desktop/image-earphones-yx1.jpg";
function HeadPhones() {
  return (
    <Maindiv>
      <img src={headphoness} alt="" />
      <Secondidv>
        <h1>YX1 EARPHONES</h1>
        <button>See Product</button>
      </Secondidv>
    </Maindiv>
  );
}
const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  img {
    width: 327px;
    height: 180px;
  }
`;
const Secondidv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  width: 327px;
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
  }
`;
export default HeadPhones;
