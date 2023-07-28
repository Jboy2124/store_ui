import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: "",
    email: "",
    user: "",
    role: "",
    cart: [],
  },
  reducers: {
    auth: (state, action) => {
      (state.id = action.payload),
        (state.email = action.payload),
        (state.user = action.payload),
        (state.role = action.payload),
        (state.cart = action.payload);
    },
  },
});

const { actions, reducer } = authSlice;

export const { auth } = actions;

export default reducer;
