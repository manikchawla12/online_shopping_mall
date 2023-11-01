import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AddProduct from "./components/AddProduct/addProduct";
import ShowProduct from "./components/adminShowProduct/showProduct";
import Footer from "./pages/footer/footer";
import Navbar from "./components/navbar/navbar";
import Product from "./components/product/product";
import Home from "./components/home/home";
import Orders from "./components/Orders/Orders";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Layout from "./components/layout/Layout";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Missing from "./components/Missing/Missing";
import CustomerHome from "./components/CustomerHome/CustomerDashboard";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import AdminHome from "./components/AdminComponents/AdminHome/AdminHome";
import Customers from "./components/AdminComponents/AdminHome/Customers/Customers";
import CustomerDashboard from "./components/CustomerHome/CustomerDashboard";
import { CustomerProfile } from "./components/CustomerHome/customerProfile/customerProfile";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/showProduct" element={<ShowProduct />} />

          {/* Visitor pages */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="product" element={<Product />} />

            {/* Admin pages */}
            <Route element={<RequireAuth allowedRoles={["admin"]} />}>
              <Route path="/admin/" element={<AdminDashboard />}>
                <Route path="/admin/" element={<AdminHome />} />
                <Route path="/admin/customers" element={<Customers />} />
                <Route path="/admin/orders" element={<Orders />} />
                <Route path="/admin/addProduct" element={<AddProduct />} />
                <Route path="/admin/showProduct" element={<ShowProduct/>}/>
              </Route>
            </Route>

            {/* Customer pages */}
            <Route element={<RequireAuth allowedRoles={["customer"]} />}>
              <Route path="/customer/" element={<CustomerDashboard />}>
                <Route path="/customer/customerProfile" element={<CustomerProfile />} />
                
                </Route>
            </Route>

            {/* Missing */}
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
