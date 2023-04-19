import { format, parse } from 'date-fns'
import { useAppSelector } from "../redux/store";
import { getSelectedEvent } from "../redux/selectors/events";


const ShowPreview: React.FC = () => {
  const { name, description, startDate, endDate, duration, preview, } = useAppSelector(state => getSelectedEvent(state));

  const formatedDate = (date: Date) => format(date, 'HH:mm');
  const durationCopy = (duration: string) => {
    const parsedDuration = parse(duration, 'HH:mm:ss', new Date());
    return `${format(parsedDuration, 'HH')}hrs ${format(parsedDuration, 'mm')}mins`;
  }

  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover bg-center rounded overflow-hidden shadow-2xl shadow-red-800/50"
      style={{ backgroundImage: `url(${preview})` }}
    >
      <div className="w-full h-full bg-slate-900/90 backdrop-blur-xl text-slate-50 py-8 px-12 overflow-y-auto">
        <div className='w-full md:w-3/4'>
          <h1 className="text-3xl font-semibold">{name}</h1>

          {startDate && endDate && duration && (
            <>
              <p className="text-xs font-semibold  bg-slate-100/30 py-1 px-2 inline-block mt-6 mb-2">{durationCopy(duration)}</p>
              <p className="text-xs font-light">{`${formatedDate(startDate)}hrs a ${formatedDate(endDate)}hrs`}</p>
            </>
          )}

          <p className="mt-3 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ShowPreview;