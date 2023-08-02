import { apiInstance } from "../../api/apiInstance";

const cartEndpoints = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    updateCart: builder.mutation({
      query: (data) => ({
        url: `/product/cart/update?userId=${data.userId}&prodId=${data.prodId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateCartMutation } = cartEndpoints;
