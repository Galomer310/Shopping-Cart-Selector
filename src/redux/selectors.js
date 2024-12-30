import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = (state) => state.cart.products;

export const selectCartItems = (state) => state.cart.cart;

export const selectCartTotal = (state) =>
  state.cart.cart.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );
