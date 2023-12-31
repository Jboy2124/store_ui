import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiInstance = createApi({
  reducerPath: "apiInstance",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    mode: "cors",
    credentials: "include",
    headers: {
      Accept: "multipart/form",
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({}),
});
