import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage";
import Header from "../components/header";
import Footer from "../components/footer";
import Products from "../pages/products";
import Pages from "../components/pages";
import ProductsDetails from "../pages/productsDetails";
const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":slug" element={<Pages />} />
        <Route path="products/:slug" element={<Products />} />
        <Route path="products/details/:slug" element={<ProductsDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default MyRoutes;
