interface ChannelLogoProps {
  logo: string;
  channnelNumber: number;
}

const ChannelLogo: React.FC<ChannelLogoProps> = ({ logo, channnelNumber }) => {
  return (
    <div className="w-full h-20 p-4 pl-8 flex items-center justify-around">
      <p className="text-gray-200 font-medium text-sm">{channnelNumber}</p>
      <img src={logo} alt="Channel logo" className="h-full ml-2 object-contain" />
    </div>
  )
}

export default ChannelLogo;