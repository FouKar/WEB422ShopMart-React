import React, { useEffect, useContext } from "react";
import axios from "axios";
import ShopContext from "../context/ShopContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Paginate from "../components/Paginate";

const ProductList = () => {
  const { products, setProducts, page, setPage } = useContext(ShopContext);
  useEffect(() => {
    axios(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/all`)
      .then((res) => res.data)
      .then((res) => {
        setProducts(res.data);
        setPage(Math.ceil(res.data.length / 12));
      })
      .catch((err) => console.log(err));
  }, [products]);
  return (
    <Container className="d-flex flex-wrap flex-row">
      {products.map((product, index) => {
        return (
          <Card
            sx={{ maxWidth: 345 }}
            className="mx-auto mb-5 d-flex flex-column justify-content-around"
          >
            <CardActionArea className="">
              <Link
                to={`/products/product/${product._id}`}
                className="linkCard"
              >
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

export default ProductList;
