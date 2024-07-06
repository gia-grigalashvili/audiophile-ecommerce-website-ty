import Data from "../data.json"; // Assuming data.json is in the same directory
import styled from "styled-components";
// import Tech from "./Tech";
// import Personal from "./Personal";
// import Footer from "./Footer";

function Click() {
  const product1 = Data.find((item) => item.id === 4); // Assuming id 4 exists in your data
  const product2 = Data.find((item) => item.id === 2); // Assuming id 2 exists in your data
  const product3 = Data.find((item) => item.id === 3); // Assuming id 3 exists in your data

  return (
    <div>
      <Header>
        <h1>HEADPHONES</h1>
      </Header>
      <Maindiv>
        {product1 && (
          <div key={product1.id}>
            <img src={product1.image.mobile} alt={product1.name} />
            <span>NEW PRODUCT</span>
            <h1>{product1.name}</h1>
            <p>{product1.description}</p>
            <Button>See Product</Button>
          </div>
        )}

        {product2 && (
          <div key={product2.id}>
            <img src={product2.image.mobile} alt={product2.name} />
            <h1>{product2.name}</h1>
            <p>{product2.description}</p>
            <Button>See Product</Button>
          </div>
        )}

        {product3 && (
          <div key={product3.id}>
            <img src={product3.image.mobile} alt={product3.name} />
            <h1>{product3.name}</h1>
            <p>{product3.description}</p>
            <Button>See Product</Button>
          </div>
        )}
      </Maindiv>
      {/* <Tech></Tech>
      <Personal></Personal>
      <Footer></Footer> */}
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
export default Click;
