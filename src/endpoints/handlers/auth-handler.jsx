import { apiInstance } from "../../api/apiInstance";

const authEndpoints = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authEndpoints;
