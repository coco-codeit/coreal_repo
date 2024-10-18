export default function Button({
  id,
  className,
  onClick,
  children,
  ...props
}: {
  id?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  [key: string]: unknown;
}) {
  const handleClickButton = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    onClick?.(e);
  };
  return (
    <button
      onClick={handleClickButton}
      id={id}
      className={`h-10 px-4 rounded-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
