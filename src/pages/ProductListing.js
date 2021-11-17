import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const productListing = () => {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
      );
    </>
  );
};

export default productListing;
