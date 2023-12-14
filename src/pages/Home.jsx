import { CircularProgress, Container, Grid } from "@mui/material";

import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoriBar from "../components/CategoryBar";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector(
    (state) => state.productSlice
  );
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (selected === '') {
      dispatch(getData()); 
    } else {
      dispatch(getData(selected)); 
    }
  }, [dispatch, selected]);

 

  return (
    <Container>
      {!loading ? (
        <Grid container justifyContent="center" spacing={4} mt={10}>
          <CategoriBar  selected={selected} setSelected={setSelected} />
          {products.map(product => (
            <Grid item key={product.id}>
              <ProductCard product={product} text="Add" />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container justifyContent="center" alignItems={"center"} mt={15}>
          <CircularProgress />
        </Grid>
      )}
    </Container>
  );
};

export default Home;
