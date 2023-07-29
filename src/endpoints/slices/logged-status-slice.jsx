import { createSlice } from "@reduxjs/toolkit";

export const loggedStatusSlice = createSlice({
  name: "loggedStatus",
  initialState: {
    verified: false,
  },
  reducers: {
    verifyStatus: (state, action) => {
      state.verified = action.payload;
    },
  },
});

const { actions, reducer } = loggedStatusSlice;

export const { verifyStatus } = actions;

export default reducer;
