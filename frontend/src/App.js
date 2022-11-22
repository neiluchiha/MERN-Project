/*Components*/
import React from 'react';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";


/*User Components */ 
import RoutesWithUserChatComponent from "./components/user/RoutesWithChatComponent";

/*Publicaly Available Routes*/
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
import ProtectedRoutesComponents from "./components/ProtectedRoutesComponent";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";



function App() {
  return (
  <BrowserRouter>
  <HeaderComponent/>
  <Routes>
    <Route element={<RoutesWithUserChatComponent/>}>
    <Route path="/" element={<HomePage/>} />
    <Route path="/cart" element={<CartPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/product-list" element={<ProductListPage/>} />
    <Route path="/product-details" element={<ProductDetailsPage/>} /> 
    <Route path="/product-details/:id" element={<ProductDetailsPage/>} />
    <Route path="*" element="Page Not Found"/>
    </Route>
          {/* {User Protected Pages} */}
    <Route element={<ProtectedRoutesComponents admin={false}/>} >
    <Route path="/user" element={<UserProfilePage/>} />
    <Route path="/user/my-orders" element={<UserOrdersPage/>} />
    <Route path="/user/order-details" element={<UserOrderDetailsPage/>} />
    <Route path="/user/cart-details" element={<UserCartDetailsPage/>}/>
    </Route>
    
    
          {/* { Admin Protected Routes} */}
    <Route element={<ProtectedRoutesComponents admin={true}/>} >
    <Route path="/admin/analytics" element={<AdminAnalyticsPage/>}/>
    <Route path="/admin/chats" element={<AdminChatsPage/>}/>
    <Route path="/admin/create-new-product" element={<AdminCreateProductPage/>}/>
    <Route path="/admin/edit-product" element={<AdminEditProductPage/>}/>
    <Route path="/admin/edit-user" element={<AdminEditUserPage/>}/>
    <Route path="/admin/order-details" element={<AdminOrderDetailsPage/>}/>
    <Route path="/admin/products" element={<AdminProductsPage/>} />
    <Route path="/admin/users" element={<AdminUsersPage/>} />
    </Route>
  </Routes>
<FooterComponent/>
  </BrowserRouter>
  );
}

export default App;
