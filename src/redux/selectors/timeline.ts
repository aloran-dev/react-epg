import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getTimelineDates = createSelector(
  [(state: RootState) => state.epgSlice.epg],
  epg => ({ dateFrom: epg.dateFrom, dateTo: epg.dateTo })
);