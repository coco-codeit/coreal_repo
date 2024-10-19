import FavoriteButton from "@/app/gatherings/components/FavoriteButton";
import DateTag from "@/app/gatherings/components/DateTag";

function CardHeader({
  id,
  name,
  location,
  dateTime,
}: {
  id: number;
  name: string;
  location: string;
  dateTime: string;
}) {
  return (
    <div className="flex justify-between mb-[20px] md:mb-[21px]">
      <div className="flex flex-col gap-2 pr-[15px]">
        <div className="flex flex-row justify-start items-center gap-2 max-w-[248px] md:max-w-[305px] lg:max-w-full">
          <span className="text-lg font-semibold text-gray-800 truncate">
            {name}
          </span>
          <span className="text-lg font-semibold text-gray-900">|</span>
          <span className="text-sm text-gray-700 max-w-[60px] flex-shrink-0">
            {location}
          </span>
        </div>
        <div className="flex">
          <DateTag dateText={dateTime} textColor={"white"} type={"day"} />
          <DateTag dateText={dateTime} textColor={"green"} type={"time"} />
        </div>
      </div>
      <FavoriteButton gatheringId={id} />
    </div>
  );
}

export default CardHeader;
