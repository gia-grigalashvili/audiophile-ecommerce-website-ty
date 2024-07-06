import styled from "styled-components";
import check from "/public/assets/Combined Shape 2.svg";
import Burger from "/public/assets/Group.svg";
import Logo from "/public/assets/audiophile 2.svg";
import { useState } from "react";
import Tech from "./Tech";
import { Link } from "react-router-dom";

function Header() {
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
          {/* <p>Home</p>
          <p>HEADPHONES</p>
          <p>SPEAKERS</p>
          <p>EARPHONES</p> */}
          <Tech />
        </MenuItems>
        <img src={check} alt="Check" />
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
  @media (max-width: 768px) {
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
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  p {
    color: #fff;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 192.308% */
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      color: #d87d4a;
    }
  }
`;

const Line = styled.div`
  height: 1px;
  opacity: 0.104;
  background: #fff;
  width: 100%;
`;

export default Header;
