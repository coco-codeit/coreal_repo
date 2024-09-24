interface CardPropsInterface {
  gatheringName: string;
  description: string;
  techStacks: string[];
}
interface BgColorInterface {
  cardColor?: string;
  tagColor?: string;
}
export default function Card({
  item,
  bgColors,
}: {
  item: CardPropsInterface;
  bgColors: BgColorInterface;
}) {
  const cardBgColor = bgColors.cardColor?.startsWith("#")
    ? `bg-[${bgColors.cardColor}]`
    : `bg-${bgColors.cardColor}`;

  const tagBgColor = bgColors.tagColor?.startsWith("#")
    ? `bg-[${bgColors.tagColor}]`
    : `bg-${bgColors.tagColor}`;

  return (
    <div
      className={`${cardBgColor} w-[calc(100%-20px)] h-[200px] rounded-xl p-4 flex flex-col justify-between`}
    >
      <h5 className="font-bold mb-3">{item.gatheringName}</h5>
      <div>{item.description}</div>
      <div>
        {item.techStacks?.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className={`${tagBgColor} rounded-2xl py-[2px] px-2 mr-1`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
