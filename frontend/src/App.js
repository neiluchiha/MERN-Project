import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/cart" element={<CartPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/product-list" element={<ProductListPage/>} />
    <Route path="/product-details" element={<ProductDetailsPage/>} /> 
    <Route path="/product-details/:id" element={<ProductDetailsPage/>} />
    <Route path="*" element="Page Not Found"/>
    <Route path="/user" element={<UserProfilePage/>} />
    <Route path="/user/my-orders" element={<UserOrdersPage/>} />
    <Route path="/user/order-details" element={<UserOrderDetailsPage/>} />
    <Route path="/user/cart-details" element={<UserCartDetailsPage/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;