export interface Event {
  id: number;
  name: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
  duration: string;
  preview: string;
}