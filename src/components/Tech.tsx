import { Link } from "react-router-dom";
import styled from "styled-components";
import HEADPHONES from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import EARPHONES from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import SPEAKERS from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import ARROW from "/assets/Path 2.png";

function Tech() {
  const technic = [
    { name: "HEADPHONES", image: HEADPHONES, link: "/headphones" },
    { name: "SPEAKERS", image: SPEAKERS, link: "/speakers" },
    { name: "EARPHONES", image: EARPHONES, link: "/earphones" },
  ];

  return (
    <Maindiv>
      {technic.map((item, index) => (
        <Stylediv key={index}>
          <img src={item.image} alt={item.name} />
          <STDIV>
            <h1>{item.name}</h1>
            <ARROWs>
              <Link to={item.link}>
                <p>shop</p>
              </Link>
              <img className="arrow" src={ARROW} alt="arrow icon" />
            </ARROWs>
          </STDIV>
        </Stylediv>
      ))}
    </Maindiv>
  );
}

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 68px;
  margin-top: 111px;
  img {
    width: 127px;
    height: 113px;
    margin-top: -40px;
  }
  h1 {
    color: #000;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1.071px;
    text-transform: uppercase;
  }
  a {
    color: #000;
    text-decoration: none;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  @media (min-width: 740px) {
    flex-direction: row;
    justify-content: center;
    img {
      width: 147px;
      height: 133px;
      margin-top: -60px;
    }
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    img {
      width: 150.947px;
      height: 160px;
      margin-top: -60px;
    }
  }
`;

const Stylediv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  border-radius: 8px;
  background: #f1f1f1;
  width: 290px;
  height: 155px;
  align-items: center;
  @media (min-width: 740px) {
    width: 223px;
    height: 165px;
    flex-shrink: 0;
  }
  @media (min-width: 1440px) {
    width: 350px;
    height: 204px;
    flex-shrink: 0;
  }
`;

const ARROWs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  .arrow {
    width: 5px;
    height: 10px;
    margin-top: 0px;
  }
`;

const STDIV = styled.div`
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export default Tech;
