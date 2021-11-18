import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsByCategory from "../components/ProductsByCategory";

const productsByCategory = () => {
  return (
    <>
      <Header />
      <ProductsByCategory />
      <Footer />
    </>
  );
};

export default productsByCategory;
