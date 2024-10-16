import React from "react";
import BrandSection from "./components/BrandSection";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-60px)] bg-white text-gray-800 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center w-full max-w-7xl gap-8 md:gap-16 lg:gap-24 py-8 md:py-12">
        <div className="w-full max-w-[343px] sm:max-w-[400px] md:max-w-[500px] flex-shrink-0 md:flex md:items-center mb-[56px] sm:mb-[71px]">
          <BrandSection />
        </div>
        <div className="w-full max-w-[343px] sm:max-w-[400px] md:max-w-[500px] flex-shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
}
