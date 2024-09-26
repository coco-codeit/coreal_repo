import { useState } from "react";
import { IoCloseOutline, IoAdd } from "react-icons/io5";

export default function HashtagInput({
  value,
  placeholder,
  id,
  className,
  onChange,
}: {
  value?: string[];
  placeholder?: string;
  id?: string;
  className?: string;
  onChange?: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [tags, setTags] = useState<string[]>(value || []);
  const [currentValue, setCurrentValue] = useState<string>("");

  const resetInput = () => setCurrentValue("");

  const addItemToTags = () => {
    const newTags = value ? [...value, currentValue] : [currentValue];
    onChange?.([...newTags]);
    setTags([...newTags]);
    resetInput();
  };

  const removeItemFromTags = (index: number) => {
    value?.splice(index, 1);
    onChange?.(value ? [...value] : []);
    setTags(value ? [...value] : []);
    resetInput();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentValue(e.target.value);

  const handleOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentValue !== "") addItemToTags();
  };

  return (
    <div className={className}>
      <div className="relative">
        <input
          type="text"
          id={id}
          value={currentValue}
          onChange={handleOnChange}
          onKeyDown={handleOnEnter}
          placeholder={placeholder}
          className={`w-full bg-gray-2 rounded-xl h-11 p-4 box-border outline-none focus:border-2 border-gray-15`}
        />
        <div className="absolute top-0 right-0 h-full grid p-1">
          <button
            type="button"
            onClick={addItemToTags}
            className="px-4 rounded-lg bg-white border border-gray-6 hover:bg-purple-3 hover:text-white active:bg-black"
          >
            <IoAdd />
          </button>
        </div>
      </div>
      {tags.length > 0 && (
        <div className="flex flex-row flex-wrap gap-1 mt-2">
          {tags.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              data-index={index}
              onClick={() => removeItemFromTags(index)}
              className="text-white rounded-lg bg-gray-10 py-1 px-2 cursor-pointer hover:bg-gray-11 active:bg-gray-7 flex flex-row items-center"
            >
              {tag}
              <IoCloseOutline className="inline-block ml-1" />
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
