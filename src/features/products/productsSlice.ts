import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Product } from "./ProductsData";
import { products as seedProducts } from "./ProductsData";

type ProductsState = {
  items: Product[];
  favorites: number[];
  cart: number[];
};
const initialState: ProductsState = {
  items: seedProducts,
  favorites: [],
  cart: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const idx = state.items.findIndex((p) => p.id === action.payload.id);
      if (idx !== -1) state.items[idx] = action.payload;
    },
  },
});

export const { setProducts, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;

export const selectAllProducts = (state: { products: ProductsState }) =>
  state.products.items;
export const selectProductById =
  (id: string) => (state: { products: ProductsState }) =>
    state.products.items.find((p) => p.id === id);
export const selectByCategory =
  (category: string) => (state: { products: ProductsState }) =>
    state.products.items.filter((p) => p.category === category);
export const selectByTag =
  (tag: string) => (state: { products: ProductsState }) =>
    state.products.items.filter((p) => p.tags?.includes(tag));
