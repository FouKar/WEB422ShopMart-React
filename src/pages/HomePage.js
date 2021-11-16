import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCategorize from "../components/ProductCategorize";
import BestSeller from "../components/BestSeller";

import Hero from "../components/Hero";
const HomePage = () => {
  return (
    <>
      <div className="heroContainer">
        <Header />
        <Hero />
      </div>
      <ProductCategorize />
      <BestSeller />
      <Footer />
    </>
  );
};

export default HomePage;
