import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    basket: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.basket = state.basket + 1;
    },

    removeFromCart: (state, action) => {
      if (state.basket === 0) {
        state.basket = 0;
      } else {
        state.basket = state.basket - 1;
      }
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addToCart, removeFromCart } = actions;

export default reducer;
