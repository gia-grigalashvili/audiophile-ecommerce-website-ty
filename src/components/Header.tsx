import styled from "styled-components";
import check from "/public/assets/Combined Shape 2.svg";
import Burger from "/public/assets/Group.svg";
import Logo from "/public/assets/audiophile 2.svg";
import { useState } from "react";
import Tech from "./Tech";
import { Link } from "react-router-dom";

function Header({ totalItems }) {
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
          <ResponsiveMenu>
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
          </ResponsiveMenu>
          <TechWrapper>
            <Tech />
          </TechWrapper>
        </MenuItems>
        <Cart>
          <img src={check} alt="Check" />
          {totalItems > 0 && <ItemCount>{totalItems}</ItemCount>}
        </Cart>
      </Navigation>
      <Line />
    </div>
  );
}

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
    @media (min-width: 1440px) {
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
`;

const ResponsiveMenu = styled.div`
  display: flex;

  gap: 20px;
  display: none;
  @media (min-width: 800px) {
    display: block;
  }

  p {
    color: #9b9b9b;
    text-align: center;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */

    cursor: pointer;
    &:hover {
      color: #d87d4a;
    }
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

export default Header;
