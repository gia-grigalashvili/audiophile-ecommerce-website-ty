import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GROUP from "/public/assets/Group 12.png";
interface FinishProps {
  cartProductDetails: {
    productId: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[];
  onClose: () => void;
}

const Finish: React.FC<FinishProps> = ({ cartProductDetails }) => {
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartProductDetails.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  // Calculate total VAT
  const totalVAT = (totalPrice * 20) / 100;

  // Calculate total with shipping
  const totalWithShipping = totalPrice + 50;

  // Calculate grand total
  const grandTotal = totalWithShipping + totalVAT;

  return (
    <ModalOverlay>
      <ModalContent>
        <img src={GROUP} alt="" />
        <h1>
          Thank You for <br /> Your Purchase!
        </h1>
        <p>You will receive an email confirmation shortly.</p>
        <OrderSummary>
          {cartProductDetails.map((product) => (
            <Product key={product.productId}>
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>
                  $ {product.price.toFixed(2)} x {product.quantity}
                </p>
              </div>
            </Product>
          ))}
          <Total>
            <div>
              <span>Grand Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </Total>
        </OrderSummary>
        <ButtonContainer>
          <Link to="/header">
            {" "}
            <button>BACK TO HOME</button>
          </Link>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
  h1 {
    color: #000;
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 112.5% */
    letter-spacing: 1.143px;
    text-transform: uppercase;
    margin-top: 20px;
  }
  p {
    color: #000;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    margin-top: 20px;
  }
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;

  width: 90%;
  max-width: 500px;
`;

const OrderSummary = styled.div`
  margin-top: 2rem;
  text-align: left;
  display: flex;
  width: 444px;
  align-items: center;
  background: #f1f1f1;
  justify-content: center;
`;

const Product = styled.div`
  display: flex;
  align-items: center;

  height: 140px;
  border-radius: 8px;
  background: #f1f1f1;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin-right: 1rem;
  }

  div {
    h3 {
      margin: 0;
      font-size: 1rem;
    }

    p {
      margin: 0;
      color: #888;
    }
  }
`;

const Total = styled.div`
  width: 198px;
  height: 140px;
  border-radius: 0px 8px 8px 0px;
  background: #000;
  display: flex;

  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    span {
      color: #fff;

      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
      font-weight: bold;
    }

    &:last-child {
      font-size: 1.2rem;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;

  button {
    background: #d87d4a;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    width: 444px;
    height: 48px;
    flex-shrink: 0;
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
      background-color: #444;
    }
  }
`;

export default Finish;
