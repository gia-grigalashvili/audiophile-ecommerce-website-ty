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

function HomePagesss({ productCounters, handleIncrement, handleDecrement }) {
  return (
    <>
      <Card
        productCounters={productCounters}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <Tech />
      <Personal />
      <Footer />
    </>
  );
}

function App() {
  const [productCounters, setProductCounters] = useState({});

  const handleIncrement = (productId) => {
    setProductCounters((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setProductCounters((prev) => ({
      ...prev,
      [productId]: prev[productId] > 0 ? prev[productId] - 1 : 0,
    }));
  };

  const totalItems = Object.values(productCounters).reduce((a, b) => a + b, 0);

  return (
    <BrowserRouter>
      <Header totalItems={totalItems} />
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
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
