import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ShopContext from "../context/ShopContext";
require("dotenv").config({ path: "../../.env" });

const BestSeller = () => {
  let bs = {};
  const { bestSelling, setBestSelling } = useContext(ShopContext);
  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/bestsellers`
    );

    setBestSelling(response.data.data);
    console.log(bestSelling);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <div className="title_lines">Bestsellers</div>
      <Splide
        className="mb-5 mt-3 mx-auto"
        options={{
          type: "loop",
          gap: "2rem",
          autowidth: true,
          autoheight: true,

          perPage: 3,
          perMove: 1,

          breakpoints: {
            1024: {
              perPage: 3,
              perMove: 1,
            },
            767: {
              perPage: 2,
              perMove: 1,
            },
            640: {
              perPage: 1,
              perMove: 1,
            },
          },
        }}
      >
        {bestSelling.map((product, index) => {
          return (
            <SplideSlide>
              <img
                src={product.photo}
                alt={product.name}
                width="300"
                height="300"
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </Container>
  );
};

export default BestSeller;
