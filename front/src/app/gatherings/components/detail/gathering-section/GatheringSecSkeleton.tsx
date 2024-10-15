import React from "react";

export default function GatheringSecSkeleton() {
  return (
    <section className="flex items-center justify-center md:flex-row flex-col gap-6">
      <div className="relative w-full md:w-1/2 h-[270px] bg-gray-200 rounded-3xl animate-pulse"></div>
      <div className="relative w-full md:w-1/2 h-[270px] px-8 py-6 rounded-[24px] border-2 border-gray-200 animate-pulse">
        <div className="w-1/2 h-4 bg-gray-200 rounded mb-4"></div>
        <div className="w-1/2 h-4 bg-gray-200 rounded mb-4"></div>
        <div className="absolute top-5 right-10 w-10 h-10 bg-gray-200 rounded-full mb-4"></div>

        <hr className="border-dashed border-gray-400 mt-[23px]" />
        <div className="py-6 ">
          <div className="flex items-center">
            <div className="w-20 h-5 mr-2 bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
          <div className="h-2 mt-2 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="flex items-center justify-between text-[12px] mt-2">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-200 rounded w-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
