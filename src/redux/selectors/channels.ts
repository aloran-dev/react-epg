import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getAllChannelLogos = createSelector(
  [
    (state: RootState) => state.epgSlice.epg.channels
  ],
  (channels) => {
    const logos = [];

    for(const [_key, value] of Object.entries(channels)) {
      logos.push({
        logo: value.logo,
        channnelNumber: value.number,
      });
    }

    return logos;
  }
);

export const getAllChannels = createSelector(
  [(state: RootState) => state.epgSlice.epg.channels],
  (channels) => channels
);