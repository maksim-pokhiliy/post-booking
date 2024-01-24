import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteUser = createAsyncThunk(
  "Delete user",
  async (id, { getState }) => {
    const s = getState();

    const body = {};

    const res = await axios.delete(
      `${process.env.REACT_APP_DEV_API_URL}/users${id}`,
      body,
    );

    console.log("delete user === ", res);
  },
);
