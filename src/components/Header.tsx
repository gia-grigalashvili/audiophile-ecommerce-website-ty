import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import check from "/public/assets/Combined Shape 2.svg";
import Burger from "/public/assets/Group.svg";
import Logo from "/public/assets/audiophile 2.svg";
import Tech from "./Tech";
import Minus from "/public/assets/-.png";
import Plus from "/public/assets/+.png";

interface ProductDetail {
  productId: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface HeaderProps {
  totalItems: number;
  productCounters: { [key: number]: number };
  click: boolean;
  onClick: () => void;
  cartProductDetails: ProductDetail[];
  handleIncrement: (productId: number) => void;
  handleDecrement: (productId: number) => void;
  handleResetCart: () => void;
  successfulPurchase: boolean; // Include successful purchase state
}

const Header: React.FC<HeaderProps> = ({
  productCounters,
  handleIncrement,
  totalItems,
  click,
  onClick,
  cartProductDetails,
  handleDecrement,
  handleResetCart,
  successfulPurchase,
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const removeAllItems = () => {
    handleResetCart();
  };

  const totalPrice = cartProductDetails.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div>
      <Navigation>
        {/* Menu toggle */}
        <img className="burger" src={Burger} onClick={toggleMenu} alt="Menu" />
        {/* Audiophile logo */}
        <Link to="/">
          <img className="logo" src={Logo} alt="Audiophile Logo" />
        </Link>
        {/* Menu items */}
        <MenuItems open={menuOpen}>
          <div className="is">
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
          </div>

          {/* Tech component */}
          <TechWrapper>
            <Tech />
          </TechWrapper>
        </MenuItems>
        {/* Cart icon */}
        <Cart>
          <img onClick={onClick} src={check} alt="Check" />
          {/* Display total items count */}
          {totalItems > 0 && <ItemCount>{totalItems}</ItemCount>}
          {/* Show cart content */}
          {click && (
            <CounterDiv>
              <div className="info">
                <h1>cart ({totalItems})</h1>
                <p onClick={removeAllItems}>Remove all</p>
              </div>
              <div className="Informations">
                {/* Display cart products */}
                {cartProductDetails.map((product) => (
                  <div className="if" key={product.productId}>
                    <img
                      className="prduct"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="product">
                      <h1>{product.name}</h1>
                      <p>$ {product.price}</p>
                    </div>
                    <div className="counter">
                      {/* Increment and decrement buttons */}
                      <img
                        onClick={() => handleDecrement(product.productId)}
                        className="Minus"
                        src={Minus}
                        alt=""
                      />
                      <h5>{productCounters[product.productId] || 0}</h5>
                      <img
                        onClick={() => handleIncrement(product.productId)}
                        className="Plus"
                        src={Plus}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="TOTAL">
                <p>TOTAL</p>
                <h1>${totalPrice.toFixed(2)}</h1>
              </div>
              {/* Conditionally render checkout button */}
              {totalItems > 0 && (
                <Link to="/checkout">
                  <button>checkout</button>
                </Link>
              )}
              {/* Display successful purchase message */}
              {successfulPurchase && <p>Successful purchase!</p>}
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
    @media (min-width: 1300px) {
      display: none;
    }
    @media (min-width: 750px) {
      justify-content: space-evenly;
    }
  }
`;

const MenuItems = styled.div<{ open: boolean }>`
  display: flex;
  gap: 20px;

  justify-content: space-around;
  .is {
    display: flex;
    gap: 100px;
    @media (max-width: 1200px) {
      display: none;
    }
  }

  @media (max-width: 800px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 10.3%;
    left: 0;
    height: 800px;
    width: 100%;
    background: #fff;
    padding: 20px;
    transition: transform 0.3s ease-in-out;
    display: block;
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
    width: 271px;
    height: 48px;
    flex-shrink: 0;
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
  .if {
    display: flex;
    gap: 10px;
    align-items: center;

    .product {
      display: flex;
      flex-direction: column;
      h1 {
        color: #000;
        font-family: Manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px; /* 166.667% */
      }
      P {
        color: #595959;
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px; /* 178.571% */
      }
    }
  }
  .prduct {
    width: 85px;
    border-radius: 20px;
    height: 85px;
  }
  .counter {
    display: flex;
    gap: 20px;
    .Minus {
      width: 16px;
      height: 20px;
      cursor: pointer;
    }
    .Plus {
      width: 16px;
      height: 20px;
      cursor: pointer;
    }
  }
`;

export default Header;
