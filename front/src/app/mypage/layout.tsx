export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto max-w-[1200px] min-h-[90vh] bg-gray-50 text-gray-900">
      <div className="max-w-[996px] py-4 md:py-6 px-3 md:px-4 lg:mx-auto">
        {children}
      </div>
    </div>
  );
}
