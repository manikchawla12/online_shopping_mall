import "./App.css";
import AddProduct from "./components/AddProduct/addProduct";
import ShowProduct from "./components/adminShowProduct/showProduct";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Product from "./components/product/product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="show" element={<ShowProduct/>} />
      </Routes>
      <Router />
      <Footer />
    </div>
  );
}

export default App;
