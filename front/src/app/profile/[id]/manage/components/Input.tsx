export default function Input({
  type,
  value,
  className,
  placeholder,
  isError,
  errorMessage,
  onChange,
  ...props
}: {
  type: string;
  value?: string | number;
  className?: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  [key: string]: unknown;
}) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={`w-full ${className}`}>
      <input
        type={type}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        className={`w-full h-11 outline-none bg-gray-2 focus:border-2 p-4 rounded-xl ${isError ? "border focus:border border-[red]" : "border-gray-15"}`}
        {...props}
      />
      {isError ? (
        <p className="text-sm text-[red] mt-2">{errorMessage}</p>
      ) : (
        <></>
      )}
    </div>
  );
}
