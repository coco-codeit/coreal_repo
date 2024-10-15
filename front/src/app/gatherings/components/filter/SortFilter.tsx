import Image from "next/image";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { useGatheringsStore } from "@/stores/useGatheringsStore";
import { SortByType } from "@/types/gatherings";

function SortFilter() {
  const { sortBy, setSortBy, setSortOrder } = useGatheringsStore();

  const sorts = [
    { label: "마감 임박", value: "registrationEnd" },
    { label: "참여 인원 순", value: "participantCount" },
  ];

  const handleSortSelect = (sortValue: SortByType) => {
    setSortBy(sortValue);
    setSortOrder(sortValue === "registrationEnd" ? "asc" : "desc");
  };

  const getSortLabel = () => {
    return sortBy === "participantCount" ? "참여 인원 순" : "마감 임박";
  };

  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton
        className="h-9 md:min-w-[110px] min-w-9 md:h-10 rounded-xl flex justify-center md:justify-between items-center md:py-2 md:px-3 border-2 
    bg-white text-gray-800 border-gray-100 md:gap-1"
      >
        <Image src="/images/sort.svg" alt="icon" width={24} height={24} />
        <span className="hidden md:flex text-sm items-center">
          {getSortLabel()}
        </span>
      </MenuButton>

      <MenuItems className="mt-2 absolute z-20 min-w-[110px] w-full rounded-xl shadow-xl bg-white focus:outline-none right-0">
        <div className="p-1">
          {sorts.map((sort) => (
            <MenuItem key={sort.value}>
              <div
                className="block px-[8px] py-[6px] rounded-xl cursor-pointer active:bg-purple-1 focus:bg-purple-1 hover:bg-purple-1 "
                onClick={() => handleSortSelect(sort.value as SortByType)}
              >
                <span className="text-gray-800 font-sm">{sort.label}</span>
              </div>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}

export default SortFilter;
