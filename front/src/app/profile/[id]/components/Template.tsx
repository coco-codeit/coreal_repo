export default function Template({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <div
      {...props}
      className={`bg-white rounded-xl border border-gray-200 shadow-lg p-6 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}
