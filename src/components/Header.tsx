import React from "react";
import styled from "styled-components";
import check from "/public/assets/Combined Shape 2.svg";
import Burger from "/public/assets/Group.svg";
import Logo from "/public/assets/audiophile 2.svg";
function Header() {
  return (
    <Navigation>
      <img src={Burger} alt="" />
      <img src={Logo} alt="" />
      <img src={check} alt="" />
    </Navigation>
  );
}
const Navigation = styled.div`
  width: 100%;
  padding: 24px;
  background: #191919;
  display: flex;
  align-items: center;
`;
export default Header;
