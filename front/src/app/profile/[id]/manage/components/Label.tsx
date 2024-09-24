export function Label({
  htmlFor,
  children,
}: {
  htmlFor?: string;
  children?: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-base font-normal inline-block mb-2"
    >
      {children}
    </label>
  );
}
