import { configureStore } from "@reduxjs/toolkit";
import { apiInstance } from "../../api/apiInstance";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import AuthSlice from "../slices/auth-slice";

export const store = configureStore({
  reducer: {
    [apiInstance.reducerPath]: apiInstance.reducer,
    authenticate: AuthSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiInstance.middleware),
});

setupListeners(store.dispatch);
