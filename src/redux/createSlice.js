import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, quantity } = action.payload;
      const existingItem = state.find((cartItem) => cartItem.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ id, name, price, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      return state.filter((cartItem) => cartItem.id !== idToRemove);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
