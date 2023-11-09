import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage";
import Header from "../components/header";
import Footer from "../components/footer";
const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/:slug" element={<Pages />} />
        <Route path="products/details/:slug" element={<ProductDetails />} />
        <Route path="blogs/details/:slug" element={<BlogsDetails />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default MyRoutes;
