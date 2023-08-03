import { apiInstance } from "../../api/apiInstance";

const transactionEndpoints = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    newTransaction: builder.mutation({
      query: (data) => ({
        url: "/transaction/new",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Transactions"],
    }),
  }),
  overrideExisting: false,
});

export const { useNewTransactionMutation } = transactionEndpoints;
