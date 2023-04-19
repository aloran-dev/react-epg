import { Event } from './event';

export interface Channel {
  number: number;
  name: string;
  logo: string;
  events: Event[];
}
