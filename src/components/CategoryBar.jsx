import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getData } from "../redux/productSlice";
export default function CategoriBar({ selected,setSelected }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);
  console.log(selected);
  const getCategories = () => {
    const baseUrl = "https://fakestoreapi.com/products/categories";
    axios
      .get(baseUrl)
      .then(res => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch(e => console.log(e));
  };
  const dispatch = useDispatch();
  const handleClick = e => {
    const value = e.target.value;
    setSelected(value);
    dispatch(getData(value));
  };
  return (
    <FormControl sx={{ width: "100vw", m: 1 }}>
      <RadioGroup
        row
        sx={{ justifyContent: "center" }}
        name="controlled-radio-buttons-group"
        value={selected}
        onChange={handleClick}>
        <FormControlLabel value="" control={<Radio />} label="All" />
        {categories?.map((categorie, i) => (
          <FormControlLabel
            key={i}
            sx={{ textTransform: "capitalize" }}
            value={categorie}
            control={<Radio />}
            label={categorie}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
