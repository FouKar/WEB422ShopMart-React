import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ShopContext from "../context/ShopContext";
require("dotenv").config({ path: "../../.env" });

const ProductCategorize = () => {
  const { categories, setCategories } = useContext(ShopContext);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/categories`)
      .then((res) => res.data)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);
  return (
    <>
      <div class="title_lines">Product Categories</div>
      <Container className="d-flex flex-row flex-wrap  mt-5 mb-5 prodCat justify-content-center">
        {categories.map((cat, index) => {
          while (index < 6) {
            return (
              <Link to={`/products/productsByCategory/${cat}`} className="pCat">
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={`/${index}cat.jpeg`}
                    height="180px"
                    width="180px"
                    alt="category Image"
                    className="catImg"
                  />
                  <h5>{cat}</h5>
                </div>
              </Link>
            );
          }
        })}
      </Container>
    </>
  );
};
export default ProductCategorize;
