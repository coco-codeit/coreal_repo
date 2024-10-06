import { SortByType, useGatheringsStore } from "@/stores/useGatheringsStore";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import Image from "next/image";

function LocationFilter() {
  const { sortBy, setSortBy, setSortOrder } = useGatheringsStore();

  const sorts = [
    { label: "마감 임박", value: "registrationEnd" },
    { label: "참여 인원 순", value: "participantCount" },
  ];

  const getMenuItemClass = (active: boolean, selected: boolean) =>
    selected
      ? "bg-orange-100 text-gray-900"
      : active
        ? "bg-gray-100 text-gray-900"
        : "text-gray-700";

  const handleSortSelect = (sortValue: SortByType) => {
    setSortBy(sortValue);
    setSortOrder("desc"); // 모든 정렬 기준에서 일관되게 정렬 순서 desc로 설정
  };

  const getSortLabel = () => {
    if (sortBy === "registrationEnd") return "마감 임박";
    if (sortBy === "participantCount") return "참여 인원 순";
    return "마감 임박"; // 기본값 마감 임박
  };

  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton
        className="h-9 md:min-w-[110px] min-w-9 md:h-10 rounded-xl flex justify-center md:justify-between items-center md:py-2 md:px-3 border-2 
    bg-white text-gray-800 md:gap-1"
      >
        <Image src="/images/sort.svg" alt="icon" width={24} height={24} />
        <span className="hidden md:flex text-sm items-center">
          {getSortLabel()}
        </span>
      </MenuButton>

      <MenuItems className="mt-[8px] absolute z-20 min-w-[110px] md:w-full rounded-xl shadow-xl bg-white focus:outline-none">
        <div className="p-1">
          {sorts.map((sort) => (
            <MenuItem key={sort.value}>
              {({ active }) => (
                <div
                  className={`block px-[8px] py-[6px] rounded-xl cursor-pointer focus:bg-orange-100 hover:bg-orange-100 ${
                    active ? "bg-gray-100" : ""
                  }`}
                  onClick={() => handleSortSelect(sort.value as SortByType)}
                >
                  <span
                    className={getMenuItemClass(active, sortBy === sort.value)}
                  >
                    {sort.label}
                  </span>
                </div>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}

export default LocationFilter;
