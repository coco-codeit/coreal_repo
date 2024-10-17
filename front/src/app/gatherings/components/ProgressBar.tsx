"use client";

import React, { useEffect, useState } from "react";

export default function ProgressBar({ percent }: { percent: number }) {
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFillPercent(percent);
    }, 100);

    return () => clearTimeout(timeout);
  }, [percent]);

  return (
    <div className="w-full h-1 mt-3 mb-2 bg-gray-300 rounded-full">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${fillPercent === 100 ? "bg-purple-2" : "bg-purple-3"}`}
        style={{ width: `${fillPercent}%` }}
      ></div>
    </div>
  );
}
