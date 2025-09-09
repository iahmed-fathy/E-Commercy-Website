import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Product } from "./ProductsData";
import { products as seedProducts } from "./ProductsData";

type ProductsState = {
  items: Product[];
  favorites: string[];
  cart: string[];
  searchValue: string;
};
const initialState: ProductsState = {
  items: seedProducts,
  favorites: [],
  cart: [],
  searchValue: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((id) => id !== action.payload);
    },
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addToFavorites,
  removeFromFavorites,
  setSearchValue,
} = productsSlice.actions;

export default productsSlice.reducer;

export const selectAllProducts = (state: { products: ProductsState }) =>
  state.products.items;

export const selectProductById =
  (id: string) => (state: { products: ProductsState }) =>
    state.products.items.find((p) => p.id === id);

export const selectByCategory =
  (category: string) => (state: { products: ProductsState }) =>
    state.products.items.filter(
      (p) => p.category.toLocaleLowerCase() === category
    );

export const selectSearchValue = (state: { products: ProductsState }) =>
  state.products.searchValue;

export const selectSearchedProducts =
  (value: string) => (state: { products: ProductsState }) =>
    state.products.items.filter(
      (p) =>
        p.title.toLocaleLowerCase().includes(value) ||
        p.description.toLocaleLowerCase().includes(value) ||
        p.category.toLowerCase().includes(value)
    );

export const selectByTag =
  (tag: string) => (state: { products: ProductsState }) =>
    state.products.items.filter((p) => p.tags?.includes(tag));

export const selectFavoriteIds = (state: { products: ProductsState }) =>
  state.products.favorites;

export const selectCartIds = (state: { products: ProductsState }) =>
  state.products.cart;
