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
    axios(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/categories`)
      .then((res) => res.data)
      .then((res) => {
        setCategories(res.data);
      });
  }, [categories]);
  return (
    <Container className="d-flex flex-wrap flex-row">
      {categories.map((category, index) => {
        return (
          <Card
            sx={{ maxWidth: 345 }}
            className="mx-auto mb-5 d-flex flex-column justify-content-around"
          >
            <CardActionArea className="">
              <Link
                to={`/products/productsByCategory/${category}`}
                className="linkCard"
              >
                <CardMedia
                  component="img"
                  image={`/${index}cat.jpeg`}
                  alt={category}
                />
                <CardContent className="text-center cardContent">
                  <Typography variant="h6" color="text.secondary">
                    {category}
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
