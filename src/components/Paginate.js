import React, { useContext } from "react";
import { Pagination } from "@mui/material";
import ShopContext from "../context/ShopContext";
import axios from "axios";

const Paginate = () => {
  const { page, setPage, pages, setpages, products, setProducts } =
    useContext(ShopContext);

  const handleChange = (event, value) => {
    setPage(value);
    const prodLL = (page - 1) * 12;
    const prodHl = page * 12;

    axios(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/all`)
      .then((res) => res.data)
      .then((res) => {
        setProducts(res.data.slice(prodLL, prodHl));
      });
  };

  return (
    <Pagination
      count={pages}
      page={page}
      size="large"
      showFirstButton
      showLastButton
      onChange={handleChange}
      color="primary"
      className=" d-flex flex-row justify-content-center"
      mb={5}
    />
  );
};

export default Paginate;
