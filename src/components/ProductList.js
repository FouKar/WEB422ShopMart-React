import React, { useEffect, useContext } from "react";
import axios from "axios";
import ShopContext from "../context/ShopContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Container } from "react-bootstrap";

const ProductList = () => {
  const { products, setProducts } = useContext(ShopContext);
  useEffect(() => {
    axios(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/all`)
      .then((res) => res.data)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="d-flex flex-wrap flex-row">
      {products.map((product, index) => {
        return (
          <Card sx={{ maxWidth: 345 }} className="mx-auto mb-5">
            <CardActionArea>
              <CardMedia
                component="img"
                height="345"
                image={product.photo}
                alt={product.name}
              />
              <CardContent className="text-center">
                <Typography variant="h6" color="text.secondary">
                  {product.name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="priceCard"
                >
                  ${product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Container>
  );
};

export default ProductList;
