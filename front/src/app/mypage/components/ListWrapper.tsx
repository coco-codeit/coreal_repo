export default function ListWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 py-5 border-b-2 border-gray-200 border-dashed last:border-none hover:bg-[#fafafa] cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}
