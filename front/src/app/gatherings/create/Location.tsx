import { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { locations } from "@/types/gatherings";
import { DownIcon } from "@/app/gatherings/list/components/Icons";

export default function LocationDropdown() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleLocationChange = (loc: string) => {
    setSelectedLocation(loc);
  };

  return (
    <div className="w-full">
      <Menu as="div" className="relative inline-block w-full">
        <MenuButton
          className={`w-full h-10 rounded-xl bg-gray-50 border-gray-50 inline-flex items-center justify-between py-2 px-3 border-2 active:outline-none ${selectedLocation ? " text-gray-800" : " text-gray-400"} `}
        >
          <span className="text-sm">
            {selectedLocation || "장소를 선택해주세요"}
          </span>
          <DownIcon />
        </MenuButton>

        <MenuItems className="mt-2 absolute z-20 w-full rounded-xl shadow-xl bg-white focus:outline-none">
          <div className="p-1">
            {locations.map((loc) => (
              <MenuItem key={loc}>
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-orange-100 rounded-xl cursor-pointer"
                  onClick={() => handleLocationChange(loc)}
                >
                  {loc}
                </button>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}
