import { useState } from "react";
import Image from "next/image";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  getTechItems,
  TechItemType,
} from "@/app/gatherings/data/techStackData";

function TechStack() {
  const [selectedTech, setSelectedTech] = useState(() => [
    getTechItems[0],
    getTechItems[1],
  ]);

  const TechItem = ({ item }: { item: TechItemType }) => (
    <>
      <Image src={item.logo} alt={`${item.name} logo`} width={30} height={30} />
      <span className="text-body-2">{item.name}</span>
    </>
  );

  return (
    <div className="flex flex-col gap-2 h-auto">
      <label>기술스택</label>
      <Listbox
        value={selectedTech}
        onChange={setSelectedTech}
        multiple
        as="div"
      >
        <ListboxButton className="flex flex-wrap min-h-[60px] w-full items-center gap-2 border-2 p-3 rounded-2xl border-gray-7">
          {selectedTech.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 border-gray-7 border-2 rounded-3xl py-1 px-4 shadow"
            >
              <TechItem item={item} />
            </div>
          ))}
        </ListboxButton>

        <div className="relative">
          <ListboxOptions className="absolute mt-2 overflow-y-auto max-h-40 w-full z-50 px-4 py-3 border-2 border-gray-7 rounded-2xl shadow-sm bg-white">
            {getTechItems.map((item, index) => (
              <ListboxOption
                key={item.id}
                value={item}
                className={`cursor-pointer select-none hover:bg-gray-5 data-[focus]:bg-gray-5 py-2 px-4
                ${index !== getTechItems.length - 1 ? "border-b border-gray-6" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <TechItem item={item} />
                </div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}

export default TechStack;
