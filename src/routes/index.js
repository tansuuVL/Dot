import React from 'react';
import { Route, Routes } from 'react-router';
import MainPage from '../pages/MainPage';
import Product from '../pages/Product';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    );
};

export default AppRoutes;
