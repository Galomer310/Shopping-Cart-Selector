import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Wireless Mouse", price: 25 },
    { id: 2, name: "Mechanical Keyboard", price: 75 },
    { id: 3, name: "USB-C Charging Cable", price: 15 },
    { id: 4, name: "Bluetooth Headphones", price: 50 },
    { id: 5, name: "Portable SSD 500GB", price: 100 },
    { id: 6, name: "Smartphone Stand", price: 20 },
    { id: 7, name: "Gaming Chair", price: 200 },
    { id: 8, name: "Laptop Cooling Pad", price: 30 },
    { id: 9, name: "Webcam 1080p", price: 40 },
    { id: 10, name: 'External Monitor 24"', price: 150 },
    { id: 11, name: "Ergonomic Desk Lamp", price: 35 },
    { id: 12, name: "Noise-Cancelling Earbuds", price: 60 },
    { id: 13, name: "HDMI Cable 6ft", price: 10 },
    { id: 14, name: "Wireless Charging Pad", price: 45 },
    { id: 15, name: "Adjustable Standing Desk", price: 300 },
  ],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.cart.find(
        (product) => product.id === action.payload
      );
      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        const product = state.products.find(
          (product) => product.id === action.payload
        );
        if (product) state.cart.push({ ...product, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
