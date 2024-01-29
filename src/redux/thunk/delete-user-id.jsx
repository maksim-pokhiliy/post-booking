import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteUser = createAsyncThunk("Delete user", async (id) => {
  const body = {};

  await axios.delete(`${process.env.REACT_APP_DEV_API_URL}/users${id}`, body);
});
