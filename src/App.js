import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/utilities.css";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import HomePage from "./pages/HomePage";
import ProductCategory from "./pages/ProductCategory";
import ProductDescription from "./pages/ProductDescription";
import ProductListing from "./pages/ProductListing";
import RegistrationPage from "./components/RegistrationForm";
import ShopContext from "./context/ShopContext";
import CategoryProducts from "./pages/CategoryProducts";

function App() {
  const [products, setProducts] = useState([{}]);
  const [product, setProduct] = useState({
    _id: "",
    name: "",
    price: "",
    description: "",
    category: "",
    quantity: "",
    bestseller: "",
    photo: "",
  });
  const [productsByCat, setProductsByCat] = useState([{}]);
  const [bestSelling, setBestSelling] = useState([{}]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState([{}]);
  const [categories, setCategories] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [phoneNum, setPhoneNum] = useState([]);
  const [phoneNumOne, setPhoneNumOne] = useState("");
  const [phoneNumTwo, setPhoneNumTwo] = useState("");
  const [errorPhoneNum, setErrorPhoneNum] = useState("");
  const [errorFname, setErrorFname] = useState("");
  const [errorLname, setErrorLname] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [formData, setFormData] = useState({});

  return (
    <Router>
      <ShopContext.Provider
        value={{
          productsByCat,
          setProductsByCat,
          product,
          setProduct,
          products,
          setProducts,
          bestSelling,
          setBestSelling,
          page,
          setPage,
          category,
          setCategory,
          fname,
          setFname,
          lname,
          setLname,
          email,
          setEmail,
          pass,
          setPass,
          phoneNum,
          setPhoneNum,
          phoneNumOne,
          setPhoneNumOne,
          phoneNumTwo,
          setPhoneNumTwo,
          errorPhoneNum,
          setErrorPhoneNum,
          errorFname,
          setErrorFname,
          errorLname,
          setErrorLname,
          errorEmail,
          setErrorEmail,
          errorPass,
          setErrorPass,
          formData,
          setFormData,
          categories,
          setCategories,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="/products/all" element={<ProductListing />}></Route>
          <Route
            path="/products/product/:id"
            element={<ProductDescription />}
          ></Route>

          <Route path="/register" element={<RegistrationPage />}></Route>

          <Route
            path="/products/categories"
            element={<ProductCategory />}
          ></Route>
          <Route
            path="/products/productsByCategory/:category"
            element={<CategoryProducts />}
          ></Route>
          <Route
            path="/product/details/:id"
            element={<ProductDescription />}
          ></Route>
        </Routes>
      </ShopContext.Provider>
    </Router>
  );
}

export default App;
