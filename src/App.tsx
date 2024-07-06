import "./App.css";
import Header from "./components/Header";
import SeeProduct from "./components/SeeProduct";
import Tech from "./components/Tech";
import Speaker from "./components/Speaker";
import HeadPhones from "./components/HeadPhones";
import Personal from "./components/Personal";
import Footer from "./components/Footer";
import Click from "./components/Click";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
function HomePages() {
  return (
    <>
      <Click />
      <Tech />
      <Personal />
      <Footer />
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<HomePages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
