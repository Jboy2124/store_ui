import { createSlice } from "@reduxjs/toolkit";

export const cartCheckout = createSlice({
  name: "checkout",
  initialState: {
    products: [],
  },
  reducers: {
    list: (state, action) => {
      state.products = action.payload;
    },
    clearList: (state, action) => {
      state.products = [];
    },
  },
});

const { actions, reducer } = cartCheckout;

export const { list, clearList } = actions;

export default reducer;
