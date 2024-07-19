import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import Minus from "/public/assets/-.png";
import Plus from "/public/assets/+.png";

// Define interfaces for product data
interface Product {
  id: number;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description: string;
  price: number;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others: { id: number; name: string; image: { mobile: string } }[];
}

interface CardProps {
  productCounters: { [key: number]: number };
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
  handleIncrement,
  handleDecrement,
  handleAddToCart,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Ensure `id` is defined before using it
  const productId = id ? parseInt(id, 10) : null;
  const product: Product | null = productId
    ? (data as unknown as Product[]).find((item) => item.id === productId) ||
      null
    : null;

  const handleViewProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <p onClick={() => navigate(-1)}>GO BACK</p>
      <ContainerDiv>
        {product ? (
          <div>
            <div className="is">
              <div>
                <img
                  className="mms"
                  src={product.image.mobile}
                  alt={product.name}
                />
              </div>
              <div className="mainis">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h3>${product.price.toFixed(2)}</h3>
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
              </div>
            </div>
            <div className="Features">
              <div className="Featuresinfo">
                <h1>Features</h1>
                <p>{product.features}</p>
              </div>
              <div>
                <h1 className="IntheBox">In the Box</h1>
                <IncludesList>
                  {product.includes.map((item, index) => (
                    <li key={index}>
                      <strong>{item.quantity}x</strong> {item.item}
                    </li>
                  ))}
                </IncludesList>
              </div>
            </div>
            <Gallery>
              <div className="room">
                <img
                  className="mobile"
                  src={product.gallery.first.mobile}
                  alt="Gallery Image 1"
                />
                <img
                  className="tablet"
                  src={product.gallery.first.tablet}
                  alt="Gallery Image 1"
                />
                <img
                  className="desktop"
                  src={product.gallery.first.desktop}
                  alt="Gallery Image 1"
                />
                <img
                  src={product.gallery.second.mobile}
                  alt="Gallery Image 2"
                />
                <img
                  className="tablet"
                  src={product.gallery.second.tablet}
                  alt="Gallery Image 2"
                />
                <img
                  className="mobile"
                  src={product.gallery.second.mobile}
                  alt="Gallery Image 2"
                />
              </div>
              <div>
                <img
                  className="mobile"
                  src={product.gallery.third.mobile}
                  alt="Gallery Image 3"
                />
                <img
                  className="tablet"
                  src={product.gallery.third.tablet}
                  alt="Gallery Image 3"
                />
                <img
                  className="desktop lomi"
                  src={product.gallery.third.desktop}
                  alt="Gallery Image 3"
                />
              </div>
            </Gallery>
            <OtherProducts>
              <h1>You may also like</h1>
              <div className="productssa">
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
              </div>
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
  .mms {
    width: 327px;
    height: 327px;
    border-radius: 8px;
    @media (min-width: 1440px) {
      width: 540px;
      height: 560px;
    }
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
  .is {
    display: flex;
    flex-direction: column;
    @media (min-width: 1440px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
    .mainis {
      @media (min-width: 1440px) {
        width: 445.5px;
        height: 390px;
      }
    }
  }
  .Features {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media (min-width: 1440px) {
      flex-direction: row;
      align-items: center;
    }
    .Featuresinfo {
      @media (min-width: 1440px) {
        p {
          width: 635px;
          color: #000;
          font-family: Manrope;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;
        }
      }
    }
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
  @media (min-width: 1440px) {
    justify-content: unset;
    margin-top: 20px;
  }
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
    color: #707070;
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
  .room {
    @media (min-width: 740px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    @media (min-width: 1440px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
  }
  img {
    width: 327px;
    border-radius: 8px;
    @media (min-width: 740px) {
      width: 389px;
    }
    @media (min-width: 1440px) {
      width: 589px;
    }
  }
  .lomi {
    @media (min-width: 1440px) {
      height: 700px;
      background-size: cover;
    }
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .mobile {
    display: none;
  }
  .tablet {
    display: none;
  }
  .dektop {
    display: none;
  }

  @media (min-width: 740px) {
    .mobile {
      display: none;
    }
    .tablet {
      display: none;
    }
  }
  @media (min-width: 1440px) {
    .mobile {
      display: none;
    }
    .tablet {
      display: none;
    }
    .dektop {
      display: block;
      width: 300px;
    }
  }
`;

const OtherProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 20px;
  text-align: center;
  @media (min-width: 1440px) {
    text-align: center;
    justify-content: center;
  }
  .productssa {
    @media (min-width: 1440px) {
      display: flex;
      justify-content: center;
      gap: 50px;
    }
  }
`;

const OtherProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 20px;

  img {
    width: 327px;
    height: 125px;
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
