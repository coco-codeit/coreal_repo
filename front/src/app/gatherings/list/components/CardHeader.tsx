import LikeButton from "@/app/gatherings/components/LikeButton";
import DateTag from "@/app/gatherings/components/DateTag";
import { format } from "date-fns";

function CardHeader({
  name,
  location,
  dateTime,
}: {
  name: string;
  location: string;
  dateTime: string;
}) {
  const formattedDate = format(new Date(dateTime), "M월 dd일");
  const formattedTime = format(new Date(dateTime), "HH:mm");

  return (
    <div className="flex justify-between mb-[20px] md:mb-[21px]">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-start items-center gap-2">
          <span className="text-lg text-gray-800">{name}</span>
          <span className="text-lg text-gray-900">|</span>
          <span className="text-body-1 text-gray-700">{location}</span>
        </div>
        <div className="flex">
          <DateTag dateText={formattedDate} textColor="#EA580C" />
          <DateTag dateText={formattedTime} textColor="white" />
        </div>
      </div>
      <LikeButton />
    </div>
  );
}

export default CardHeader;
