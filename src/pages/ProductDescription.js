import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState, useContext } from "react";
import Product from "../components/Product";

const ProductDescription = () => {
  return (
    <>
      <Header />
      <Product />
      <Footer />
    </>
  );
};

export default ProductDescription;
