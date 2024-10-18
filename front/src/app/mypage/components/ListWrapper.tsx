import Link from "next/link";
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
  const content = (
    <div
      className={`relative flex flex-col sm:flex-row gap-4 my-5 border-b-2 border-gray-200 border-dashed last:border-none hover:bg-[#fafafa] cursor-pointer ${className}`}
    >
      {children}
    </div>
  );

  return <>{href ? <Link href={href}>{content}</Link> : content}</>;
}
