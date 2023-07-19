import { configureStore } from "@reduxjs/toolkit";
import { apiInstance } from "../../api/apiInstance";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [apiInstance.reducerPath]: apiInstance.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiInstance.middleware),
});

setupListeners(store.dispatch);
