interface HeartScoreProps {
  averageScore: number;
}

export default function HeartScore({ averageScore }: HeartScoreProps) {
  const calculateFillWidth = (index: number) => {
    if (averageScore >= index + 1) return "100%";
    if (averageScore < index) return "0%";
    return `${(averageScore - index) * 100}%`;
  };

  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[2px]"
        >
          <defs>
            <clipPath id={`clip-heart-${index}`}>
              <path d="M22.1 9.1C22 5.7 19.3 3 15.9 3C14.8 3 13.1 3.8 12.4 5.1C12.3 5.4 11.9 5.4 11.8 5.1C11 3.9 9.4 3.1 8.2 3.1C4.9 3.1 2.1 5.8 2 9.1V9.3C2 11 2.7 12.6 3.9 13.8C3.9 13.8 3.9 13.8 3.9 13.9C4 14 8.8 18.2 11 20.1C11.6 20.6 12.5 20.6 13.1 20.1C15.3 18.2 20 14 20.2 13.9C20.2 13.9 20.2 13.9 20.2 13.8C21.4 12.7 22.1 11.1 22.1 9.3V9.1Z" />
            </clipPath>
          </defs>
          <rect
            x="0"
            y="0"
            width={calculateFillWidth(index)}
            height="24"
            fill="#03FFA3"
            clipPath={`url(#clip-heart-${index})`}
          />
          <path
            d="M22.1 9.1C22 5.7 19.3 3 15.9 3C14.8 3 13.1 3.8 12.4 5.1C12.3 5.4 11.9 5.4 11.8 5.1C11 3.9 9.4 3.1 8.2 3.1C4.9 3.1 2.1 5.8 2 9.1V9.3C2 11 2.7 12.6 3.9 13.8C3.9 13.8 3.9 13.8 3.9 13.9C4 14 8.8 18.2 11 20.1C11.6 20.6 12.5 20.6 13.1 20.1C15.3 18.2 20 14 20.2 13.9C20.2 13.9 20.2 13.9 20.2 13.8C21.4 12.7 22.1 11.1 22.1 9.3V9.1Z"
            fill="none"
            stroke="#111827"
            strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  );
}
