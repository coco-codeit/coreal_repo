import Image from "next/image";
import { Gatherings } from "@/app/types/gatherings";

interface CardProps {
  data: Gatherings[];
}

function Card({ data }: CardProps) {
  return (
    <div className="grid grid-cols-1 gap-6 py-5">
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="flex bg-white border-2 border-gray-6 rounded-3xl h-40"
          >
            <div className="relative flex-initial w-1/4 h-full">
              <Image
                src={item.image}
                alt={`${item.name} 대표이미지`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-l-3xl"
              />
            </div>
            <div className="flex-auto h-full flex px-6 justify-between">
              {item.name}
            </div>
          </div>
        ))
      ) : (
        <p>모임이 없습니다.</p>
      )}
    </div>
  );
}

export default Card;
