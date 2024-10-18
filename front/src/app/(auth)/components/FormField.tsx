import React from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

// 수정된 FormField 컴포넌트
interface FormFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type: string;
  register: UseFormRegister<T>;
  error?: string;
}

export function FormField<T extends FieldValues>({
  label,
  name,
  type,
  register,
  error,
}: FormFieldProps<T>) {
  return (
    <div className="flex flex-col justify-start items-start w-full relative gap-2 mb-[24px]">
      <label
        htmlFor={name}
        className="text-sm font-semibold text-gray-900 mb-1"
      >
        {label}
      </label>
      <div
        className={`flex justify-start items-center w-full overflow-hidden gap-2.5 px-4 py-2.5 rounded-xl 
          ${error ? "bg-gray-50 border-2 border-red-600" : "bg-gray-50 border-2 border-transparent"}
          focus-within:border-gray-900`}
      >
        <div className="flex justify-between items-center w-full relative">
          <input
            {...register(name)}
            className="w-full text-base font-medium text-left bg-transparent focus:outline-none
                    autofill:bg-gray-50 autofill:text-gray-900 autofill:shadow-[inset_0_0_0px_1000px_rgb(249,250,251)]
                    spellcheck-off"
            id={name}
            type={type}
            placeholder={label}
            spellCheck="false"
            autoCorrect="off"
            autoCapitalize="off"
          />
        </div>
      </div>
      {error && (
        <p className="text-sm font-semibold text-left text-red-600 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
