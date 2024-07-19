import React from "react";
import styled from "styled-components";

function CSA({ cartProductDetails }) {
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
    <MAINDIV>
      <h1>SUMMARY</h1>
      {cartProductDetails.map((product) => (
        <div className="if" key={product.productId}>
          <img src={product.image} alt={product.name} />
          <div className="product">
            <h1>{product.name}</h1>
            <p>$ {product.price}</p>
          </div>
          <h6>x{product.quantity}</h6>
        </div>
      ))}
      <div className="to">
        <h3>TOTAL</h3>
        <h1>${totalPrice.toFixed(2)}</h1>
      </div>
      <div className="to">
        <h3>SHIPPING</h3>
        <h1>$50</h1>
      </div>
      <div className="to">
        <h3>VAT (INCLUDED)</h3>
        <h1>${totalVAT.toFixed(2)}</h1>
      </div>
      <div className="to">
        <h3>GRAND TOTAL</h3>
        <h1>${grandTotal.toFixed(2)}</h1>
      </div>
      {/* Submit button */}
      <button type="submit">Submit</button>
    </MAINDIV>
  );
}
const MAINDIV = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 500px;
    background: #fff;
    padding: 30px;
    img {
      width: 64px;
      height: 64px;
      flex-shrink: 0;
    }
    button {
      width: 100%;
      margin-top: 30px;
      height: 56px;
      border: none;
      border-radius: 8px;
      background-color: #d87d4a;
      color: #fff;
      font-family: Manrope;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: #7e3f1b;
      }
    }
    p {
      color: #d87d4a;
      font-family: Manrope;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.929px;
      margin-top: 0;
    }
  }
  .if {
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
    img {
      width: 74px;
      height: 74px;
    }
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
      h6 {
        color: #727272;
        text-align: right;
        font-family: Manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px; /* 166.667% */
      }
    }
  }
  .to {
    display: flex;
    justify-content: space-between;

    h1 {
      color: #000;
      text-align: right;
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }
    h3 {
      color: #848484;
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 166.667% */
    }
  }
`;
export default CSA;
