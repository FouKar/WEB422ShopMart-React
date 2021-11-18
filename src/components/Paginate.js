import React, { useContext } from "react";
import { Pagination } from "@mui/material";
import ShopContext from "../context/ShopContext";

const Paginate = () => {
  const { page, setPage } = useContext(ShopContext);
  return (
    <Pagination
      count={page}
      size="large"
      showFirstButton
      showLastButton
      className=" d-flex flex-row justify-content-center"
    />
  );
};

export default Paginate;
