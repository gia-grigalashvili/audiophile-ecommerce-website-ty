import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HEADPHONES from "/public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import EARPHONES from "/public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import SPEAKERS from "/public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import ARROW from "/public/assets/Path 2.png";

function Tech() {
  const technic = [
    { name: "HEADPHONES", image: HEADPHONES },
    { name: "SPEAKERS", image: SPEAKERS },
    { name: "EARPHONES", image: EARPHONES },
  ];

  return (
    <Maindiv>
      {technic.map((item, index) => (
        <Stylediv key={index}>
          <img src={item.image} alt={item.name} />

          <STDIV>
            <h1>{item.name}</h1>
            <ARROWs>
              <Link to="/headphones">Shop</Link>
              <img className="arrow" src={ARROW} alt="" />
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
  margin-top: 50px;
  text-align: center;
  gap: 68px;
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
