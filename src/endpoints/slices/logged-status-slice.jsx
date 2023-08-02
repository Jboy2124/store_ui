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
    resetStatus: (state, action) => {
      state.verified = false;
    },
  },
});

const { actions, reducer } = loggedStatusSlice;

export const { verifyStatus, resetStatus } = actions;

export default reducer;
