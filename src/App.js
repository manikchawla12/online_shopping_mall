import './App.css';
import AddProduct from './components/AddProduct/addProduct';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Product from './components/product/product';


function App() {
  return (
    <div className="App">
        <Navbar/>
        {/* <Product/> */}
        <AddProduct/>
        <Footer/>
       
    </div>
  );
}

export default App;
