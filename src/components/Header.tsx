import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import check from "/public/assets/Combined Shape 2.svg";
import Burger from "/public/assets/Group.svg";
import Logo from "/public/assets/audiophile 2.svg";
import Tech from "./Tech";

interface HeaderProps {
  totalItems: number;
  click: boolean;
  onClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ totalItems, click, onClick }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Navigation>
        <img className="burger" src={Burger} onClick={toggleMenu} alt="Menu" />
        <Link to="/">
          <img className="logo" src={Logo} alt="Audiophile Logo" />
        </Link>
        <MenuItems open={menuOpen}>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/headphones">HEADPHONES</Link>
          </p>
          <p>
            <Link to="/speakers">SPEAKERS</Link>
          </p>
          <p>
            <Link to="/earphones">EARPHONES</Link>
          </p>
          <TechWrapper>
            <Tech />
          </TechWrapper>
        </MenuItems>
        <Cart>
          <img onClick={onClick} src={check} alt="Check" />
          {totalItems > 0 && <ItemCount>{totalItems}</ItemCount>}
          {click && (
            <CounterDiv>
              <div className="info">
                <h1>cart ({totalItems})</h1>
                <p>Remove all</p>
              </div>
              {/* Add cart items and total calculation here */}
              <div className="TOTAL">
                <p>TOTAL</p>
                <h1>55555</h1>
              </div>
              <Link to="/checkout">
                {" "}
                <button>checkout</button>
              </Link>
            </CounterDiv>
          )}
        </Cart>
      </Navigation>
      <Line />
    </div>
  );
};

const Navigation = styled.div`
  width: 100%;
  padding: 24px;
  background: #191919;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
  }
  .burger {
    display: block;
    @media (min-width: 750px) {
      display: none;
    }
  }
`;

const MenuItems = styled.div<{ open: boolean }>`
  display: flex;
  gap: 20px;
  @media (max-width: 800px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 10.3%;
    left: 0;
    height: 100vh;
    width: 100%;
    background: #fff;
    padding: 20px;
    transition: transform 0.3s ease-in-out;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(-100%)"};
  }
  a {
    color: #fff;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const TechWrapper = styled.div`
  display: block;
  @media (min-width: 800px) {
    display: none;
  }
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  img {
    cursor: pointer;
  }
`;

const ItemCount = styled.div`
  background: #d87d4a;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  position: absolute;
  top: -10px;
  right: -10px;
`;

const Line = styled.div`
  height: 1px;
  opacity: 0.104;
  background: #fff;
  width: 100%;
`;

const CounterDiv = styled.div`
  width: 327px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 0;
  background: #fff;
  position: absolute;
  top: 50px;
  right: 0;
  border-radius: 10px;

  box-shadow: 0px 10px 10px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.286px;
      text-transform: uppercase;
    }
    p {
      color: #000;
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 166.667% */
      text-decoration-line: underline;
      cursor: pointer;
    }
  }
  .TOTAL {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
    height: 48px;
    background: #d87d4a;
    border: none;
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background-color: #7e3f1b;
    }
  }
`;

export default Header;
