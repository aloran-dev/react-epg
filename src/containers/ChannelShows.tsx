import { differenceInMinutes, addMinutes } from 'date-fns'
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getTimelineDates } from '../redux/selectors/timeline';
import { Event } from '../types/event'
import { ShowSchedule } from '../components';
import { ONE_MINUTE_IN_PIXELS } from '../utils/defaults';
import { setEvent } from '../redux/eventSlice';

interface ChannelShowsProps {
  events: Event[];
};

const ChannelShows: React.FC<ChannelShowsProps> = ({ events }) => {
  const dispatch = useAppDispatch();

  const { dateFrom } = useAppSelector(state => getTimelineDates(state));

  const firstElementWidth = (event: Event, index: number) => {
    if (index !== 0) return

    const trimedTime = differenceInMinutes(dateFrom as Date, events[0].startDate);
    const trimedStartdate = addMinutes(event.startDate, trimedTime);
    const minutes = differenceInMinutes(event.endDate, trimedStartdate);
    return (minutes * ONE_MINUTE_IN_PIXELS);
  };

  return (
    <div className='flex'>
      {
        Array.from(events).map((event, index) => (
          <ShowSchedule
            key={index}
            title={event.name}
            startDate={event.startDate}
            endDate={event.endDate}
            sizeInPx={firstElementWidth(event, index)}
            onClick={() => dispatch(setEvent(event))}
          />
        ))
      }
    </div>
  )
}

export default ChannelShows;