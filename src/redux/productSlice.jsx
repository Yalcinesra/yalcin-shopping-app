import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getData = createAsyncThunk("productSlice/getData", async () => {
  const response = await axios(
    "https://fakestoreapi.com/products"
    
  );
  console.log(response.data);
  return response.data;
});




export const productSlice = createSlice({
  name: "productSlice",
  initialState: {
   products : [],
   basket:[],
    loading: true,
    count: 0,
  },
  reducers: {
    clear: (state) => {
      state.products = [];
      state.loading= true;
      state.count=0;
    },
    add: (state,action) => {
   
        state.basket= action.payload;
        state.count= action.payload.length;
    },
    remove: (state,action) => {
     
      state.basket= [...state.basket.filter(item => item.id !== action.payload)];
      state.count= [...state.basket.filter(item => item.id !== action.payload)].length;
      state.basket=[];
      state.loading= true;
      state.count=0;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        console.log(action);
        state.products = action.payload;
        state.loading = false;
       
      })
     
  },
  
});

export const {clear,add,remove} =productSlice.actions

export default productSlice.reducer