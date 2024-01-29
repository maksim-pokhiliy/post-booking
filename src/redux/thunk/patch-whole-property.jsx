import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const patchWholeProperty = createAsyncThunk(
  "patch whole property",
  async (val, { getState }) => {
    const s = getState();

    const body = {
      userId: s.user.id,
      type: "whole-property",
      propertySize: val.propertySize,
      propertyType: val.propertyType,
      thereAreAlready: val.thereAreAlready,
      location: val.location,
      amenities: val.amenities,
      iAmA: val.iAmA,
      costOfRoom: val.costOfRoom,
      furnishings: val.furnishings,
      deposit: val.deposit,
      availableFrom: val.availableFrom,
      minimumStay: val.minimumStay,
      maximumStay: val.maximumStay,
      bills: val.bills,
      advertTitle: val.advertTitle,
      advertDescription: val.advertDescription,
      advertPhotos: val.advertPhotos,
      buddyingUp: val.buddyingUp,
      plan: val.plan,
      preferencesFlatmateAgeMin: val.preferencesFlatmateAgeMin,
      preferencesFlatmateAgeMax: val.preferencesFlatmateAgeMax,
      preferencesFlatmateGender: val.preferencesFlatmateGender,
      preferencesFlatmateSmoking: val.preferencesFlatmateSmoking,
      preferencesFlatmatePets: val.preferencesFlatmatePets,
      preferencesFlatmateLanguage: val.preferencesFlatmateLanguage,
      preferencesFlatmateOccupation: val.preferencesFlatmateOccupation,
    };

    await axios
      .patch(`${process.env.REACT_APP_DEV_API_URL}/room/whole-property`, body)
      .then(() => {
        // console.log("patchWholeProperty res = ", res)
      })
      .catch((err) => {
        if (err.response) {
          window.open(
            `https://www.phind.com/search?q=${err.message}`,
            "_blanck",
          );
        }
      });
  },
);
