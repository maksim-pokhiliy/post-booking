import { createSlice } from "@reduxjs/toolkit";
import initialState from "./init";

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const sessionReducer = sessionSlice.reducer;

export const { setToken } = sessionSlice.actions;
