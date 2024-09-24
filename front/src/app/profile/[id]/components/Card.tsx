interface CardPropsInterface {
  gatheringName: string;
  description: string;
  techStacks: string[];
}
export default function Card({ item }: { item: CardPropsInterface }) {
  return (
    <div className="w-[calc(100%-20px)] h-[200px] bg-[#CEBCFF] rounded-xl p-4 flex flex-col justify-between">
      <h5 className="font-bold mb-3">{item.gatheringName}</h5>
      <div>{item.description}</div>
      <div>
        {item.techStacks?.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="bg-[#EEEEEE] rounded-2xl py-[2px] px-2 mr-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
