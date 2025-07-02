import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage";
import Header from "../components/header";
import Footer from "../components/footer";
import Products from "../pages/products";
import Pages from "../components/pages";
import ProductsDetails from "../pages/productsDetails";
import SearchPage from "../pages/searchpage";
import Category from "../pages/category";
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
const MyRoutes = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 3000);
  }
  return (
    !loading && (
      <>
        <Navbar />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:slug" element={<SearchPage />} />
          <Route path=":slug" element={<Pages />} />
          <Route path="products/:slug" element={<Products />} />
          <Route path="category/:slug" element={<Category />} />
          <Route path="products/details/:slug" element={<ProductsDetails />} />
        </Routes>
        <NewFooter />
        {/* <Footer /> */}
      </>
    )
  );
};
export default MyRoutes;
