import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  count: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push({ ...action.payload, quantity: 1 });
      state.count += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const productToRemove = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (productToRemove) {
        state.totalPrice -= productToRemove.price * productToRemove.quantity;
      }
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.count -= 1;
    },
    updateQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
    
      if (product) {
        state.totalPrice -= product.price * product.quantity;
        product.quantity = action.payload.quantity;
        state.totalPrice += product.price * action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
