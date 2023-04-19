import { format, differenceInMinutes } from 'date-fns';
import { ONE_MINUTE_IN_PIXELS } from '../utils/defaults'

interface ShowScheduleProps {
  title: string;
  startDate: Date;
  endDate: Date;
  sizeInPx?: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const getHoursFromDate = (date: Date) => format(date, 'HH:mm');

const ShowSchedule: React.FC<ShowScheduleProps> = ({ title, startDate, endDate, sizeInPx, onClick, onMouseEnter, onMouseLeave }) => {
  const elementWidth = () => {
    if (sizeInPx) return `${sizeInPx}px`;

    const minutes = differenceInMinutes(endDate, startDate);
    return `${minutes * ONE_MINUTE_IN_PIXELS}px`;
  };

  return (
    <div
      className="
        flex-shrink-0 h-20 py-4 pl-3 pr-0 bg-slate-600/20 border-r-8 border-r-slate-800 rounded
        transition ease-in-out hover:bg-red-900/60 hover:-translate-y-1 duration-500
      "
      style={{ width: `${elementWidth()}` }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p className="font-semibold text-sm text-gray-50 whitespace-nowrap text-ellipsis overflow-hidden">{title}</p>
      <p className="text-xs text-gray-400 mt-2 whitespace-nowrap text-ellipsis overflow-hidden">
        {`${getHoursFromDate(startDate)} - ${getHoursFromDate(endDate)}`}
      </p>
    </div>
  )
}

export default ShowSchedule;