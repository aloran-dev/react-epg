import { Channel } from './channel';

export interface Epg {
  dateFrom?: Date;
  dateTo?: Date;
  channels: {
    [channelNumber: number]: Channel;
  };
}

export interface EpgSlice {
  loading: boolean;
  epg: Epg;
  error: string;
}