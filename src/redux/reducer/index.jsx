import { createSlice } from "@reduxjs/toolkit";
import initialState from "./init";

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    reset: () => initialState,
  },
});

export const reducer = rootSlice.reducer;

export const { setToken, setUser, reset } = rootSlice.actions;
