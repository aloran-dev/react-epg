import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const isEpgFirstLoad = createSelector(
  [(state: RootState) => state.epgSlice.epg.channels],
  (payload) => {
    return Object.keys(payload).length === 0;
  });