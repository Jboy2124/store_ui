import { apiInstance } from "../../api/apiInstance";

const registerEndpoints = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    addProfile: builder.mutation({
      query: (data) => ({
        url: "/profile/new",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
  overrideExisting: false,
});

export const { useAddProfileMutation } = registerEndpoints;
