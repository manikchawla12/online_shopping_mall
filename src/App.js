import {  Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct/addProduct";
import ShowProduct from "./components/adminShowProduct/showProduct";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Product from "./components/product/product";
import Home from "./components/home/home";
import Orders from "./components/Orders/Orders";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addProduct" element={<AddProduct/>} />
        <Route path="/showProduct" element={<ShowProduct/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/orders" element={<Orders/>}/>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
