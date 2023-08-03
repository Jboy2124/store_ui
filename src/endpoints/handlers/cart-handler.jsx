import { apiInstance } from "../../api/apiInstance";

const cartEndpoints = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    updateCart: builder.mutation({
      query: (data) => ({
        url: "/product/cart/delete",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateCartMutation } = cartEndpoints;
