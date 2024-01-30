import { createSlice } from "@reduxjs/toolkit";
import initialState from "./init";

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;

export const { setModal } = modalSlice.actions;
