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
import { useParams } from "react-router";

const ProductsByCategory = () => {
  const { category } = useParams();
  const { productsByCat, setProductsByCat } = useContext(ShopContext);
  useEffect(() => {
    axios(
      `${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/productsByCategory/${category}`
    )
      .then((res) => res.data)
      .then((res) => {
        setProductsByCat(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [productsByCat]);

  return (
    <Container className="d-flex flex-wrap flex-row">
      {productsByCat.map((product, index) => {
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

export default ProductsByCategory;
