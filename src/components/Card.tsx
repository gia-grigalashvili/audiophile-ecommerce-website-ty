import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import Minus from "/public/assets/-.png";
import Plus from "/public/assets/+.png";

interface CardProps {
  productCounters: { [key: number]: number };
  cart: Array<{ productId: number; quantity: number }>;
  handleIncrement: (productId: number) => void;
  handleDecrement: (productId: number) => void;
  handleAddToCart: (
    productId: number,
    productName: string,
    productPrice: number,
    productImage: string
  ) => void;
}

const Card: React.FC<CardProps> = ({
  productCounters,
  cart,
  handleIncrement,
  handleDecrement,
  handleAddToCart,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = data.find((item) => item.id === parseInt(id, 10));

  const handleViewProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const isProductInCart = (productId: number) => {
    return cart.some((item) => item.productId === productId);
  };

  return (
    <div>
      <p onClick={() => navigate(-1)}>GO BACK</p>
      <ContainerDiv>
        {product ? (
          <div>
            <img src={product.image.mobile} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <COUNTERSDIV>
              <COUNTERS>
                <img
                  className="Minus"
                  src={Minus}
                  alt="Decrement"
                  onClick={() => handleDecrement(product.id)}
                />
                <h5>{productCounters[product.id] || 0}</h5>
                <img
                  className="Plus"
                  src={Plus}
                  alt="Increment"
                  onClick={() => handleIncrement(product.id)}
                />
              </COUNTERS>
              <Button
                onClick={() =>
                  handleAddToCart(
                    product.id,
                    product.name,
                    product.price,
                    product.image.mobile
                  )
                }
                disabled={productCounters[product.id] <= 0}
              >
                ADD TO CART
              </Button>
            </COUNTERSDIV>
            <h1>Features</h1>
            <p>{product.features}</p>
            <h1 className="IntheBox">In the Box</h1>
            <IncludesList>
              {product.includes.map((item, index) => (
                <li key={index}>
                  <strong>{item.quantity}x</strong> {item.item}
                </li>
              ))}
            </IncludesList>
            <Gallery>
              <img src={product.gallery.first.mobile} alt="Gallery Image 1" />
              <img src={product.gallery.second.mobile} alt="Gallery Image 2" />
              <img src={product.gallery.third.mobile} alt="Gallery Image 3" />
            </Gallery>
            <h1>You may also like</h1>
            <OtherProducts>
              {product.others.map((other, index) => (
                <OtherProduct key={index}>
                  <img
                    className="images"
                    src={other.image.mobile}
                    alt={other.name}
                  />
                  <h4>{other.name}</h4>
                  <Button onClick={() => handleViewProduct(other.id)}>
                    See Product
                  </Button>
                </OtherProduct>
              ))}
            </OtherProducts>
          </div>
        ) : (
          <p>Product not found.</p>
        )}
      </ContainerDiv>
    </div>
  );
};

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
  img {
    width: 327px;
    height: 327px;
    border-radius: 8px;
  }
  h1 {
    color: #000;
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 20px;
  }
  p {
    color: #949494;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    margin-top: 20px;
  }
  h3 {
    color: #000;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.286px;
    margin-top: 20px;
  }
  .IntheBox {
    color: #000;
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */
    letter-spacing: 0.857px;
    text-transform: uppercase;
  }
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
`;

const COUNTERS = styled.div`
  display: flex;
  gap: 20px;
`;

const COUNTERSDIV = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 160px;
  height: 48px;
  background: #d87d4a;
  border: none;
  color: #fff;
  font-family: Manrope;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 20px;
  cursor: pointer;
`;

const IncludesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;

  li {
    font-family: Manrope;
    font-size: 15px;
    font-weight: 700;
    margin-top: 10px;
    color: #000;
    display: flex;
    gap: 20px;
    strong {
      color: #d87d4a;
    }
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  img {
    width: 327px;
    height: auto;
    border-radius: 8px;
  }
`;

const OtherProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const OtherProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 327px;
    height: 120px;
    border-radius: 8px;
  }

  h4 {
    color: #000;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
    text-align: center;
  }
`;

export default Card;
