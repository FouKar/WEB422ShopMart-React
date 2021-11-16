import React, { useEffect, useContext } from "react";
import axios from "axios";
import ShopContext from "../context/ShopContext";

const ProductList = () => {
  const { products, setProducts } = useContext(ShopContext);
  useEffect(() => {
    axios(``);
  }, []);
  return <div></div>;
};

export default ProductList;
