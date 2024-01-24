import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// TODO Check

export const postAdStateCreate = createAsyncThunk(
  "post ad state create",
  async (val, { getState }) => {
    const s = getState();

    const body = {
      user: s.user.id,
      ad: val.ad,
      state: val.state,
      whyDeactivating: val.whyDeactivating,
      howLong: val.howLong,
      rating: val.rating,
    };

    await axios
      .post(`${process.env.REACT_APP_DEV_API_URL}/ad-state/create`, body)
      .then((res) => {
        // console.log("post ad state create res = ", res)
      })
      .catch((err) => {
        if (err.response) {
          console.error("post ad state create err = ", err);
          window.open(
            `https://www.phind.com/search?q=${err.message}`,
            "_blanck",
          );
        }
      });
  },
);
