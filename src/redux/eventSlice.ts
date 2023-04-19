import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event } from '../types/event';

const initialState: Event = {
  id: 0,
  name: 'Claro Video',
  description: 'Da click sobre un evento para ver sus detalles.',
  startDate: undefined,
  endDate: undefined,
  duration: '',
  preview: '',
};

const eventSlice = createSlice({
  name: 'epgSlice',
  initialState,
  reducers: {
    setEvent: (state, action: PayloadAction<Event>) => ({ ...state, ...action.payload })
  },
});

export default eventSlice.reducer;
export const { setEvent } = eventSlice.actions;