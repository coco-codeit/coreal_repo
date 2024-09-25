import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { SetStateAction, useEffect, useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

export interface OptionInterface {
  value: string;
  label: string;
}

export function Select({
  defaultValue,
  className,
  list,
  onChange,
}: {
  defaultValue?: OptionInterface;
  className: string;
  list: OptionInterface[];
  onChange: React.Dispatch<SetStateAction<OptionInterface>>;
}) {
  const [select, setSelect] = useState<OptionInterface>(
    defaultValue || list[0],
  );

  useEffect(() => {
    onChange(select);
  }, [select]);

  return (
    <div className={className}>
      <Listbox value={select} onChange={setSelect}>
        <ListboxButton className="w-[200px] flex flex-row justify-between items-center py-2 px-1 bg-white border rounded-lg">
          {({ open }: { open: boolean }) =>
            open ? (
              <>
                {select.label}
                <RiArrowUpSFill />
              </>
            ) : (
              <>
                {select.label}
                <RiArrowDownSFill />
              </>
            )
          }
        </ListboxButton>
        <ListboxOptions
          className="w-[200px] bg-white border border-gray-5 shadow-md rounded-lg"
          anchor="bottom"
        >
          {list.map((option, index) => (
            <ListboxOption
              key={`${option}-${index}`}
              value={option}
              className="cursor-pointer hover:bg-gray-2 py-2 px-1"
            >
              {option.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
