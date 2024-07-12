import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SeeProduct from "./components/SeeProduct";
import Tech from "./components/Tech";
import Speaker from "./components/Speaker";
import HeadPhones from "./components/HeadPhones";
import Personal from "./components/Personal";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Category from "./components/Category";
import Checkout from "./components/Checkout"; // Import Checkout component

interface HomePagesssProps {
  productCounters: { [key: number]: number };
  handleIncrement: (productId: number) => void;
  handleDecrement: (productId: number) => void;
  handleAddToCart: (productId: number) => void;
}

function HomePage() {
  return (
    <>
      <SeeProduct />
      <Tech />
      <Speaker />
      <HeadPhones />
      <Personal />
      <Footer />
    </>
  );
}

function HomePagess() {
  return (
    <>
      <Category />
      <Tech />
      <Personal />
      <Footer />
    </>
  );
}

const HomePagesss: React.FC<HomePagesssProps> = ({
  productCounters,
  handleIncrement,
  handleDecrement,
  handleAddToCart,
}) => {
  return (
    <>
      <Card
        productCounters={productCounters}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleAddToCart={handleAddToCart}
      />
      <Tech />
      <Personal />
      <Footer />
    </>
  );
};

function App() {
  const [productCounter, setProductCounter] = useState<number>(0);
  const [cart, setCart] = useState([]);

  const handleIncrement = (productId: number) => {
    setProductCounter((prev) => {
      const newCounters = { ...prev };
      newCounters[productId] = (newCounters[productId] || 0) + 1;
      return newCounters;
    });
  };

  const handleDecrement = (productId: number) => {
    setProductCounter((prev) => {
      const newCounters = { ...prev };
      if (newCounters[productId] > 0) {
        newCounters[productId] -= 1;
      }
      return newCounters;
    });
  };

  const handleAddToCart = (productId: number) => {
    setProductCounter((prev) => {
      const newCounters = { ...prev };
      newCounters[productId] = (newCounters[productId] || 0) + 1;
      return newCounters;
    });
  };

  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick(!click);
  };

  const totalItems = Object.values(productCounter).reduce(
    (total, count) => total + count,
    0
  );

  return (
    <BrowserRouter>
      <Header
        totalItems={totalItems}
        onClick={onClick}
        click={click}
        cartItems={productCounters}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<HomePagess />} />
        <Route
          path="/product/:id"
          element={
            <HomePagesss
              productCounters={productCounters}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/checkout" element={<Checkout />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
