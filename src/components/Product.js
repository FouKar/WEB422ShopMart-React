import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import axios from "axios";
import ShopContext from "../context/ShopContext";
import { Grid, Typography } from "@mui/material";
const Product = () => {
  const { id } = useParams();
  const { product, setProduct } = useContext(ShopContext);
  useEffect(() => {
    axios(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/product/${id}`)
      .then((res) => res.data)
      .then((res) => {
        setProduct(res.data[0]);
      });
  }, [product]);
  return (
    <Grid container justifyContent="center" alignItems="center" mt={5} mb={4}>
      <Grid item md={1}></Grid>
      <Grid item s={12} md={4}>
        <img
          src={product.photo}
          alt={product.name}
          height="375"
          width="375"
        ></img>
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item s={12} md={5} align="center">
        <Typography variant="h4" gutterbottom>
          {product.name}
        </Typography>
        <hr />
        <Typography variant="subtitle1" color="#d63031">
          30% Off Today!
        </Typography>
        <Typography variant="h3" color="#d63031" gutterbottom>
          ${product.price}
        </Typography>
        <Typography
          variant="h6"
          color="#2196f3
"
        >
          Category: {product.category}
        </Typography>
        <Typography variant="h5"> {product.description}</Typography>
        <Typography variant="h6" color="#0d47a1" gutterbottom mt={2}>
          Quantity: {product.quantity} in stock.
        </Typography>
        <Grid item md={1}></Grid>
      </Grid>
    </Grid>
  );
};

export default Product;
