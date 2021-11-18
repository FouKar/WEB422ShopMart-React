import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import Paginate from "../components/Paginate";

const productListing = () => {
  return (
    <>
      <Header />
      <ProductList />
      <Paginate />
      <Footer />
      );
    </>
  );
};

export default productListing;
