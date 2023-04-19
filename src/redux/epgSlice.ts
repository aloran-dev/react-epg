import axios from 'axios';
import { parse } from 'date-fns';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Epg, EpgSlice } from '../types/epg';

const apiURL = 'https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=20230418000000&date_to=20230419000000&quantity=200';
const EPG_ENTRY_DATE_FORMAT = 'yyyyMMddHHmmss';
const EVENT_ENTRY_DATE_FORMAT = 'yyyy/MM/dd HH:mm:ss';

const initialState: EpgSlice = {
  loading: false,
  epg: {
    dateFrom: undefined,
    dateTo: undefined,
    channels: {}
  },
  error: '',
};

const fetchNewEpg = createAsyncThunk(
  'epg/replace',
  async () => {
    try {
      const { data } = await axios.get(apiURL);

      const resEpg: Epg = {
        dateFrom: parse(data.entry.date_from, EPG_ENTRY_DATE_FORMAT, new Date()),
        dateTo: parse(data.entry.date_to, EPG_ENTRY_DATE_FORMAT, new Date()),
        channels: {}
      }

      data.response.channels.forEach((channel: any) => {
        resEpg.channels[channel.number] = {
          number: parseInt(channel.number),
          name: channel.name,
          logo: channel.image,
          events: channel.events.map((event: any) => ({
            id: event.id,
            name: event.name,
            description: event.description,
            startDate: parse(event.date_begin, EVENT_ENTRY_DATE_FORMAT, new Date()),
            endDate: parse(event.date_end, EVENT_ENTRY_DATE_FORMAT, new Date()),
            duration: event.duration,
            preview: channel.group.common.image_large,
          }))
        };
      });

      return resEpg;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching epg");
    }
  }
);

const epgSlice = createSlice({
  name: 'epgSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNewEpg.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchNewEpg.fulfilled, (state, action) => {
      state.loading = false;
      state.epg = action.payload;
      state.error = '';
    });

    builder.addCase(fetchNewEpg.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  }
});

export default epgSlice.reducer;
export { fetchNewEpg };