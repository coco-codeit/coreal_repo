"use client";
export default function ProgressBar({
  min = 0,
  max = 100,
  diameter = 18,
  className,
  value,
}: {
  value: number;
  min?: number;
  max?: number;
  diameter?: number;
  className?: string;
}) {
  const dotPosition = (value / Math.max(max - min, 1)) * 100;
  return (
    <div
      className={`w-full relative bg-purple-2 rounded-lg ${className}`}
      style={{ height: `${diameter}px` }}
    >
      <div
        className="bg-gradient-to-r from-[#C15EFF] to-[#B182FF] rounded-full absolute top-0"
        style={{
          height: `${diameter}px`,
          width: `${diameter}px`,
          left: `${dotPosition}%`,
        }}
      ></div>
    </div>
  );
}
