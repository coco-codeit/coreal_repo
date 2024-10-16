"use client";

import { useEffect, useState } from "react";

export default function ProgressBar({
  percent,
  className = "",
}: {
  percent: number;
  width?: string;
  className?: string;
}) {
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFillPercent(percent);
    }, 100);
    return () => clearTimeout(timeout);
  }, [percent]);

  return (
    <div className={`h-1 mt-3 mb-2 bg-gray-200 rounded-full mx-3 ${className}`}>
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out bg-gray-900"
        style={{
          width: `${fillPercent}%`,
        }}
      ></div>
    </div>
  );
}