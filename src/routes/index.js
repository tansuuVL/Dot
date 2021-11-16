import React from "react";
import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
import Product from "../pages/Product";
import CartPage from "../pages/CardPage";

import Payment from "../pages/Payment";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default AppRoutes;
