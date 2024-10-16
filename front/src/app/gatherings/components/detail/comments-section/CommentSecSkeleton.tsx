import React from "react";

export default function CommentSecSkeleton() {
  return (
    <section className="flex flex-col items-center  min-h-[687px] mt-6 p-6 border-t-2 border-[#E5E7EB]">
      <div className="h-10 bg-gray-300 rounded w-full"></div>
      <div className="space-y-4 w-full animate-pulse mt-10">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="animate-pulse flex flex-col space-y-2 bg-gray-100 p-4 rounded-lg w-full"
          >
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
