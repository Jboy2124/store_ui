import { configureStore } from "@reduxjs/toolkit";
import { apiInstance } from "../../api/apiInstance";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import AuthSlice from "../slices/auth-slice";
import CartSlice from "../slices/cart-slice";
import VerifyStatusSlice from "../slices/logged-status-slice";

export const store = configureStore({
  reducer: {
    [apiInstance.reducerPath]: apiInstance.reducer,
    authenticate: AuthSlice,
    cart: CartSlice,
    status: VerifyStatusSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiInstance.middleware),
});

setupListeners(store.dispatch);
