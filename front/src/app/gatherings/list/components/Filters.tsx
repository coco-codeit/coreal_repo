import DateFilter from "./DateFilter";
import LocationFilter from "./LocationFilter";
import SortFilter from "./SortFilter";

function GatheringsFilter() {
  return (
    <div className="flex justify-between pt-[16px] pb-[24px] text-sm">
      <div className="flex flex-row gap-2">
        <LocationFilter />
        <DateFilter />
      </div>
      <SortFilter />
    </div>
  );
}

export default GatheringsFilter;
