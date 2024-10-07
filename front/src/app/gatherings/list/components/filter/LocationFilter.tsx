import Image from "next/image";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { useGatheringsStore } from "@/stores/useGatheringsStore";
import { LocationType } from "@/types/gatherings";

function LocationFilter() {
  const { location, setLocation } = useGatheringsStore();
  const locations = ["지역전체", "건대입구", "을지로 3가", "신림", "홍대입구"];

  const getDisplayLocation = (loc: LocationType | undefined) => {
    if (loc === "을지로3가") return "을지로 3가";
    return loc || "지역 전체"; // null이면 "지역 전체" 표시
  };

  const handleLocationChange = (loc: string) => {
    if (loc === "지역전체") {
      setLocation(undefined);
    } else if (loc === "을지로 3가") {
      setLocation("을지로3가" as LocationType);
    } else {
      setLocation(loc as LocationType);
    }
  };

  const getMenuItemClass = (active: boolean) =>
    active ? "bg-orange-100 text-gray-900" : "text-gray-700";

  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton
        className={`min-w-[110px] h-9 md:h-10 rounded-xl inline-flex items-center justify-between py-2 px-3 border-2 ${
          location ? "bg-gray-900 text-gray-50" : "bg-white text-gray-800"
        }`}
      >
        <span className="text-sm flex items-center">
          {getDisplayLocation(location)}
        </span>
        <Image src="/images/down.svg" alt="icon" width={24} height={24} />
      </MenuButton>
      <MenuItems className="mt-[8px] absolute z-20 min-w-[110px] rounded-xl shadow-xl bg-white focus:outline-none">
        <div className="p-1">
          {locations.map((loc) => (
            <MenuItem key={loc}>
              {({ active }) => (
                <button
                  className="block px-[8px] py-[6px] focus:bg-orange-100 hover:bg-orange-100 rounded-xl cursor-pointer"
                  onClick={() => handleLocationChange(loc)}
                >
                  <span className={getMenuItemClass(active)}>{loc}</span>
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}

export default LocationFilter;
