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
import Checkout from "./components/Checkout";

interface HomePagesssProps {
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
  handleResetCart: () => void; // Add handleResetCart prop
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
  cart,
  handleIncrement,
  handleDecrement,
  handleAddToCart,
  handleResetCart, // Receive handleResetCart prop
}) => {
  return (
    <>
      <Card
        productCounters={productCounters}
        cart={cart}
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
  const [productCounters, setProductCounters] = useState<{
    [key: number]: number;
  }>({});
  const [cart, setCart] = useState<
    Array<{ productId: number; quantity: number }>
  >([]);
  const [cartProductDetails, setCartProductDetails] = useState<
    Array<{
      productId: number;
      name: string;
      price: number;
      image: string;
      quantity: number;
    }>
  >([]);
  const [click, setClick] = useState(false);

  const handleIncrement = (productId: number) => {
    setProductCounters((prev) => {
      const newCounters = { ...prev };
      newCounters[productId] = (newCounters[productId] || 0) + 1;
      return newCounters;
    });
  };

  const handleDecrement = (productId: number) => {
    setProductCounters((prev) => {
      const newCounters = { ...prev };
      if (newCounters[productId] > 0) {
        newCounters[productId] -= 1;
      }
      return newCounters;
    });
  };

  const handleAddToCart = (
    productId: number,
    productName: string,
    productPrice: number,
    productImage: string
  ) => {
    if (productCounters[productId] > 0) {
      setCart((prevCart) => {
        const existingProduct = prevCart.find(
          (item) => item.productId === productId
        );
        if (existingProduct) {
          return prevCart.map((item) =>
            item.productId === productId
              ? { ...item, quantity: productCounters[productId] }
              : item
          );
        } else {
          return [
            ...prevCart,
            { productId, quantity: productCounters[productId] },
          ];
        }
      });

      setCartProductDetails((prevDetails) => {
        const existingProduct = prevDetails.find(
          (item) => item.productId === productId
        );
        if (existingProduct) {
          return prevDetails.map((item) =>
            item.productId === productId
              ? { ...item, quantity: productCounters[productId] }
              : item
          );
        } else {
          return [
            ...prevDetails,
            {
              productId,
              name: productName,
              price: productPrice,
              image: productImage,
              quantity: productCounters[productId],
            },
          ];
        }
      });
    }
  };

  const handleResetCart = () => {
    setProductCounters({});
    setCart([]);
    setCartProductDetails([]);
  };

  const onClick = () => {
    setClick(!click);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
      <Header
        productCounters={productCounters}
        totalItems={totalItems}
        onClick={onClick}
        click={click}
        cartProductDetails={cartProductDetails}
        handleResetCart={handleResetCart} // Pass handleResetCart to Header
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<HomePagess />} />
        <Route
          path="/product/:id"
          element={
            <HomePagesss
              productCounters={productCounters}
              cart={cart}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleAddToCart={handleAddToCart}
              handleResetCart={handleResetCart} // Pass handleResetCart to HomePagesss
            />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
