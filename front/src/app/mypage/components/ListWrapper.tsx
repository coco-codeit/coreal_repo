import { useRouter } from "next/navigation";
import React from "react";

export default function ListWrapper({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  console.log(href);
  const router = useRouter();

  return (
    <>
      <div
        className={`relative flex flex-col sm:flex-row pb-3 gap-4 my-5 border-b-2 border-gray-200 border-dashed last:border-none hover:bg-[#fafafa] cursor-pointer ${className}`}
        onClick={() => href && router.push(href)}
      >
        {children}
      </div>
    </>
  );
}
