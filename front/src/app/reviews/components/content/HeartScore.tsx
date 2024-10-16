interface HeartScoreProps {
  averageScore: number;
}

export default function HeartScore({ averageScore }: HeartScoreProps) {
  const calculateFill = (index: number) => {
    if (averageScore >= index + 1) return "100%";
    if (averageScore < index) return "0%";
    return `${(averageScore - index) * 100}%`;
  };

  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={`relative bg-cover w-6 h-6`}
          style={{
            backgroundImage: "url(/images/heart.svg)",
            WebkitMaskImage: "url(/images/heart.svg)",
            maskImage: "url(/images/heart.svg)",
          }}
        >
          <div
            className="absolute top-0 left-0 bg-green-2 h-full"
            style={{
              width: calculateFill(index),
            }}
          />
        </div>
      ))}
    </div>
  );
}
