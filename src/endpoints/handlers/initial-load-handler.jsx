import { apiInstance } from "../../api/apiInstance";

const initialLoadEndpoints = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    initialLoading: builder.query({
      query: () => "/initial/loading",
      providesTags: ["InitialData"],
    }),
  }),
  overrideExisting: false,
});

export const { useInitialLoadingQuery } = initialLoadEndpoints;
