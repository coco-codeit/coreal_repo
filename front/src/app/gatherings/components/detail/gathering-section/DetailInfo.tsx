import DateTag from "@/app/gatherings/components/DateTag";
import FavoriteButton from "@/app/gatherings/components/FavoriteButton";

interface GatheringInfo {
  dateInfo: string;
  titleInfo: string;
  locationInfo: string;
  pageId: number;
}

export default function DetailInfo({
  dateInfo,
  titleInfo,
  locationInfo,
  pageId,
}: GatheringInfo) {
  console.log(dateInfo);
  return (
    <section className="relative mx-[22px] mb-3">
      <figure className="absolute right-0">
        <FavoriteButton
          gatheringId={
            typeof pageId === "string" ? parseInt(pageId, 10) : pageId
          }
        />
      </figure>
      <h2 className="flex items-center text-[18x] h-7 font-semibold">
        {titleInfo || ""}
      </h2>
      <div className="flex items-center text-[14x] h-5]">
        {locationInfo || ""}
      </div>
      <label className="flex mt-3">
        <DateTag type="day" dateText={dateInfo} textColor="white" />
        <DateTag type="time" dateText={dateInfo} textColor="green" />
      </label>
    </section>
  );
}
