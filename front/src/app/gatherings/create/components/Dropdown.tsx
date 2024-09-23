import { useState } from "react";

interface DropdownProps {
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

function Dropdown({ options, selectedValue, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block w-full h-20">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-gray-200 py-2 px-4 cursor-pointer rounded-md"
      >
        <span>{selectedValue}</span>
      </div>

      {isOpen && (
        <ul className="absolute w-full bg-white shadow-lg border border-gray-200 mt-2 rounded-md max-h-20 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
