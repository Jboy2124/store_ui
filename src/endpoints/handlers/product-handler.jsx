import { apiInstance } from "../../api/apiInstance";

const productEndpoints = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
  }),
  overrideExisting: false,
});

export const { useAllProductsQuery } = productEndpoints;
