import LocationFilter from "@/app/gatherings/list/components/filter/LocationFilter";
import DateFilter from "@/app/gatherings/list/components/filter/DateFilter";
import SortFilter from "@/app/gatherings/list/components/filter/SortFilter";

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
