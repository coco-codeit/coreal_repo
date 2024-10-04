import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-4 border-t-[#F97316] rounded-full animate-spin"></div>
    </div>
  );
}
