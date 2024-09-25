export function Section({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={`${className} py-10 border-gray-6`}>{children}</section>
  );
}
