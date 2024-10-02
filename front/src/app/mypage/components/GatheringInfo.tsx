import { format } from "date-fns";
import { FaUser } from "react-icons/fa6";

export default function GatheringInfo({
  info,
}: {
  info: {
    name: string;
    location: string;
    dateTime?: string;
    participantCount?: number;
    capacity?: number;
    type?: string;
    review?: string;
    score?: number;
  };
}) {
  const formatDate = (datetime?: string) =>
    datetime ? format(new Date(datetime), "M월 d일 · HH:mm") : "";

  return (
    <div className="w-full">
      <p className="font-semibold text-lg mb-1 overflow-hidden whitespace-nowrap text-ellipsis">
        {info.name}
        <span className="ml-3 pl-3 border-l-2 border-gray-900 font-medium text-sm">
          {info.location}
        </span>
      </p>
      <p className="text-sm font-medium text-gray-700">
        {formatDate(info.dateTime)}
        <span className="ml-5">
          <FaUser className="inline-block h-3 mb-[2px] mr-1" />
          {info.participantCount}/{info.capacity}
        </span>
      </p>
    </div>
  );
}
