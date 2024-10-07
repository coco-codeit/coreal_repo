export default function Button({
  id,
  className,
  onClick,
  children,
  ...props
}: {
  id?: string;
  className?: string;
  onClick?: React.Dispatch<React.SetStateAction<unknown>>;
  children?: React.ReactNode;
  [key: string]: unknown;
}) {
  return (
    <button
      onClick={onClick}
      id={id}
      className={`h-10 px-4 rounded-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
