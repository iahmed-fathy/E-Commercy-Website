import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Product } from "./ProductsData";
import { products as seedProducts } from "./ProductsData";

type ProductsState = {
  items: Product[];
  favorites: string[];
  cart: string[];
  searchValue: string;
};

const loadFavorites = (): string[] => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

const loadCart = (): string[] => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

const initialState: ProductsState = {
  items: seedProducts,
  favorites: loadFavorites(),
  cart: loadCart(),
  searchValue: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      state.cart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((id) => id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload.toLocaleLowerCase();
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
