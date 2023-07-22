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
        // headers: options,
      }),
      invalidatesTags: ["Products"],
    }),
    prodImage: builder.mutation({
      query: (data) => ({
        url: "/product/image",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAllProductsQuery,
  useAddNewProductMutation,
  useProdImageMutation,
} = productEndpoints;
