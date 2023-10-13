import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Product from './components/product/product';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Product/>
        <Footer/>
    </div>
  );
}

export default App;
