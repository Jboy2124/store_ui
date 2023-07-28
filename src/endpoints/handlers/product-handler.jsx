import { apiInstance } from "../../api/apiInstance";

const productEndpoints = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: (pageNo) => `/products?page=${pageNo}`,
      providesTags: ["Products"],
    }),

    getTotalProducts: builder.query({
      query: () => "/products/total",
      providesTags: ["Products"],
    }),

    getFeaturedProducts: builder.query({
      query: (feat = 1) => `/products/feature/:${feat}`,
      providesTags: ["Products"],
    }),

    getProductsById: builder.query({
      query: (id) => `/product/prodId=${id}`,
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

    addToDBCart: builder.mutation({
      query: (data) => ({
        url: "/product/cart",
        method: "POST",
        body: data,
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
  useGetFeaturedProductsQuery,
  useGetTotalProductsQuery,
  useAllProductsQuery,
  useAddNewProductMutation,
  useProdImageMutation,
  useGetProductsByIdQuery,
  useAddToDBCartMutation,
} = productEndpoints;
