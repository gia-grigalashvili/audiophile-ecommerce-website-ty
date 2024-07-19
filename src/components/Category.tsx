import { useParams, useNavigate } from "react-router-dom";
import Data from "../data.json";
import styled from "styled-components";

function Category() {
  const { category } = useParams();
  const navigate = useNavigate();

  const products = category
    ? Data.filter((item) => item.category === category).reverse()
    : [];

  const handleViewProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <Header>
        <h1>{category ? category.toUpperCase() : "CATEGORY"}</h1>
      </Header>
      <Maindiv>
        {products.map((product, index) => (
          <ProductCard key={product.id} className={index === 1 ? "second" : ""}>
            <img
              className="mobile"
              src={product.categoryImage.mobile}
              alt={product.name}
            />
            <img className="tablet" src={product.categoryImage.tablet} alt="" />
            <img
              className="desktop"
              src={product.categoryImage.desktop}
              alt=""
            />
            <div className="inf">
              {product.new && <span>NEW PRODUCT</span>}
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <Button onClick={() => handleViewProduct(product.id)}>
                See Product
              </Button>
            </div>
          </ProductCard>
        ))}
      </Maindiv>
    </div>
  );
}

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 100px;
  margin-top: 30px;
  text-align: center;
  @media (min-width: 1440px) {
    text-align: unset;
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 100px;

    &.second {
      flex-direction: row-reverse;
    }
  }
  .mobile {
    display: block;
    width: 327px;
    height: 352px;
    border-radius: 8px;
  }
  .tablet {
    display: none;
    width: 689px;
    height: 352px;
    border-radius: 8px;
  }
  .desktop {
    display: none;
    width: 540px;
    border-radius: 8px;
    height: 560px;
  }

  @media (min-width: 740px) {
    .mobile {
      display: none;
    }
    .tablet {
      display: block;
    }
  }
  @media (min-width: 1440px) {
    .mobile {
      display: none;
    }
    .tablet {
      display: none;
    }
    .desktop {
      display: block;
    }
  }
  .inf {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin-top: 20px;
    @media (min-width: 1440px) {
      text-align: unset;
      align-items: unset;
    }
  }
  p {
    color: #000;
    text-align: center;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    @media (min-width: 740px) {
      width: 560px;
    }
    @media (min-width: 1440px) {
      text-align: unset;
      align-items: unset;
    }
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
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 20px;
`;

const Header = styled.div`
  width: 100%;
  background: #000;
  padding: 30px;
  h1 {
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  @media (min-width: 740px) {
    height: 166px;
    justify-content: center;
    display: flex;
    align-items: center;
  }
`;

export default Category;
