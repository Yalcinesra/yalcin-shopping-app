import { Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const EmptyBasketTotal = () => {
  return (
    <Typography variant="h5" color={"error"}>
      You have no items in your shopping cart,
      <NavLink
        to="/"
        style={{
          textDecoration: "none",
          color: "blue",
        }}>
        start adding some!
      </NavLink>
    </Typography>
  );
};

export default EmptyBasketTotal;
