import { differenceInMinutes, startOfHour, format, addMinutes } from 'date-fns'
import { TIMELINE_ELEMENT_WIDTH_IN_PIXELS, TIMELINE_MINUTES_DIVISOR } from '../utils/defaults'

interface TimelineRulerProps {
  startDate: Date;
  endDate: Date;
}

const TimelineRuler: React.FC<TimelineRulerProps> = ({ startDate, endDate }) => {

  const generatedShows = () => {
    const accumulatedShows = [];
    const timelineDivisors = differenceInMinutes(endDate, startDate) / TIMELINE_MINUTES_DIVISOR;

    for (let i = 0; i <= timelineDivisors; i++) {
      const startHour = startOfHour(startDate);
      const calculatedDate = addMinutes(startHour, (TIMELINE_MINUTES_DIVISOR * i));

      accumulatedShows.push(
        <div key={i} className='flex-none flex items-end h-10 py-2' style={{ width: `${TIMELINE_ELEMENT_WIDTH_IN_PIXELS}px` }}>
          <div className='bg-gray-500 w-0.5 h-2 mr-2'></div>
          <p className='text-xs text-gray-400'>{format(calculatedDate, 'HH:mm')}</p>
        </div>
      )
    }

    return accumulatedShows;
  }

  return (
    <div className="flex">
      {generatedShows()}
    </div>
  )
}

export default TimelineRuler;
