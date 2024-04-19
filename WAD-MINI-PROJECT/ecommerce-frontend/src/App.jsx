import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './components/ForgotPassword'; // Ensure you import ForgotPassword
import Cart from './pages/Cart.jsx';
import ProductList from './pages/ProductList.jsx';
import Product from './pages/Product.jsx';
import Success from './pages/Success.js';
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList></ProductList>} />
        <Route path="/product/:id" element={<Product></Product>} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/success" element={<Success></Success>} />
        <Route path="/login" element={user ? < Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? < Navigate to="/" /> : <Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
