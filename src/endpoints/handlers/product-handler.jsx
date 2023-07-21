import { apiInstance } from "../../api/apiInstance";

const productEndpoints = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    addNewProduct: builder.mutation({
      query: (data) => ({
        url: "/product/new",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
  overrideExisting: false,
});

export const { useAllProductsQuery, useAddNewProductMutation } =
  productEndpoints;
