import Header from "../components/Header";
import Footer from "../components/Footer";
import RegistrationForm from "../components/RegistrationForm";
import ShopContext from "../context/ShopContext";
import React from "react";

const RegistrationPage = () => {
  return (
    <>
      <Header />
      <RegistrationForm />
      <Footer />
    </>
  );
};

export default RegistrationPage;
