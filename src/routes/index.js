import React from "react";
import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
import Product from "../pages/Product";
import CartPage from "../pages/CardPage";

import Payment from "../pages/Payment";

import AddNewProduct from "../pages/AddNewProduct";
import Register from "../components/Auth/Register";
import AuthPage from "../pages/AuthPage";
import EditProduct from "../components/EditProduct/EditProduct";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/add" element={<AddNewProduct />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
    );
};

export default AppRoutes;
