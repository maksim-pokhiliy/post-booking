import { createAsyncThunk } from "@reduxjs/toolkit";

export const authorization = createAsyncThunk(
  "Get Users",
  async (_, { dispatch, getState }) => {
    const s = getState();

    // const requestOptions = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     token: `${s.token}`,
    //   },
    //   params: {
    //     page: 1,
    //     limit: 0,
    //   },
    // };

    // console.log("getUsers res = ", res);
  },
);
