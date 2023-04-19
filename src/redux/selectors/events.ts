import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getAllEventsFromChannel = createSelector(
  [
    (state: RootState) => state.epgSlice.epg.channels,
    (_state, channelNumber) => channelNumber
  ],
  (channels, channelNumber) => channels[channelNumber].events
);


export const getAllEvents = createSelector(
  [
    (state: RootState) => state.epgSlice.epg.channels
  ],
  (channels) => {
    const events = [];

    for(const [_key, value] of Object.entries(channels)) {
      events.push(value.events);
    }

    return events;
  }
);

export const getSelectedEvent = createSelector([(state: RootState) => state.eventSlice],(event) => event);