import { ShowPreview, ChannelLogo, TimelineRuler } from '../components'
import { useAppSelector } from '../redux/store';
import { getAllChannelLogos } from '../redux/selectors/channels';
import { getTimelineDates } from '../redux/selectors/timeline';
import { getAllEvents } from '../redux/selectors/events';
import ChannelShows from './ChannelShows';

const TvGuide: React.FC = () => {
  const logos = useAppSelector(state => getAllChannelLogos(state));
  const events = useAppSelector((state) => getAllEvents(state));
  const { dateFrom, dateTo } = useAppSelector(state => getTimelineDates(state));

  return (
    <div className="w-full h-screen grid grid-cols-1 grid-rows-smLayout md:grid-rows-mdLayout overflow-visible">
      <div className='flex-none p-4'>
        <ShowPreview />
      </div>

      <div className="w-full h-full overflow-auto grid grid-cols-channelTable content-start relative">
        <div className='col-start-2 sticky top-0 bg-slate-900/10 backdrop-blur-lg mb-2 z-10'>
          <TimelineRuler startDate={dateFrom as Date} endDate={dateTo as Date} />
        </div>

        <div className='sticky left-0 w-36 flex flex-col gap-2 bg-slate-800/5 backdrop-blur-lg -mt-12 pt-12 z-10'>
          {logos.map(({ logo, channnelNumber }, i) => <ChannelLogo key={i} logo={logo} channnelNumber={channnelNumber} />)}
        </div>

        <div className='flex flex-col gap-2 overflow-hidden'>
          {events.map((channelEvents, i) => <ChannelShows key={i} events={channelEvents} />)}
        </div>

      </div>
    </div>
  )
}

export default TvGuide;