import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "Get Users",
  async (_, { dispatch, getState }) => {
    const s = getState();

    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        token: `${s.token}`,
      },
      params: {
        page: 1,
        limit: 0,
      },
    };

    const res = await axios.get(
      `${process.env.REACT_APP_DEV_API_URL}/users`,
      requestOptions,
    );

    console.log("getUsers res = ", res);
  },
);
