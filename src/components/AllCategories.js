import React, { useEffect, useState, useContext } from "react";
import ShopContext from "../context/ShopContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const AllCategories = () => {
  const { categories, setCategories } = useContext(ShopContext);
  useEffect(() => {
    axios(`${process.env.RECAT_APP_BACK_END_API_DOMAIN}/products/categories`);
  });
  return (
    <Container className="d-flex flex-wrap flex-row">
      {categories.map((category, index) => {
        return (
          <Card
            sx={{ maxWidth: 345 }}
            className="mx-auto mb-5 d-flex flex-column justify-content-around"
          >
            <CardActionArea className="">
              <Link to={`/products/${product._id}`} className="linkCard">
                <CardMedia
                  component="img"
                  image={product.photo}
                  alt={product.name}
                />
                <CardContent className="text-center cardContent">
                  <Typography variant="h6" color="text.secondary">
                    {product.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="priceCard"
                  >
                    ${product.price}
                  </Typography>
                  <Typography variant="caption" color="#8d8d8d">
                    Featured In {product.category}
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        );
      })}
    </Container>
  );
};

export default AllCategories;
