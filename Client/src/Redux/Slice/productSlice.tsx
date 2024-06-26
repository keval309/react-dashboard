import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../../components/Product/types";

const initialState: ProductProps[] = [
  {
    id: 1,
    name: 'Apple',
    price: 100,
    category: 'Fruits',
    stocks: 10,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
  },
  {
    id: 2,
    name: 'Apple',
    price: 100,
    stocks: 10,

    category: 'Fruits',
    image: "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"
  }
];

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: initialState,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },  
    editProduct: (state, action) => {
      console.log(action.payload);
      
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      state.products[index] = action.payload;
    },

  },
});

export const { addProduct, deleteProduct, editProduct  } = productSlice.actions;
export default productSlice.reducer;