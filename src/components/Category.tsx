import { useParams, useNavigate } from "react-router-dom";
import Data from "../data.json";
import styled from "styled-components";

function Category() {
  const { category } = useParams();
  const navigate = useNavigate();

  const products = category
    ? Data.filter((item) => item.category === category).reverse()
    : [];

  const handleViewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <Header>
        <h1>{category ? category.toUpperCase() : "CATEGORY"}</h1>
      </Header>
      <Maindiv>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image.mobile} alt={product.name} />
            {product.new && <span>NEW PRODUCT</span>}
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <Button onClick={() => handleViewProduct(product.id)}>
              See Product
            </Button>
          </div>
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
  img {
    width: 327px;
    height: 352px;
    border-radius: 8px;
  }
  span {
    color: #d87d4a;
    text-align: center;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 10px;
    text-transform: uppercase;
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
`;

export default Category;
