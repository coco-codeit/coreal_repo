import React from "react";
import BrandSection from "./components/BrandSection";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-60px)] bg-gray-50 text-gray-800">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-start md:justify-center w-full px-4 sm:px-6 md:px-8 pt-10 md:pt-20 md:gap-16 lg:gap-24">
        <div className="w-full max-w-[343px] sm:max-w-[400px] md:max-w-[500px] mb-12 md:mb-0">
          <BrandSection />
        </div>
        <div className="w-full max-w-[343px] sm:max-w-[400px] md:max-w-[500px]">
          {children}
        </div>
      </div>
    </div>
  );
}
