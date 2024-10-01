import Image from "next/image";
import { Gatherings } from "@/app/types/gatherings";
import ConfirmBadge from "@/app/gatherings/components/ConfirmBadge";
import LikeButton from "@/app/gatherings/components/LikeButton";

interface CardProps {
  data: Gatherings[];
}

function Card({ data }: CardProps) {
  return (
    <div className="grid grid-cols-1 gap-6 py-6 w-full">
      {data.length > 0
        ? data.map((item) => (
            <div
              key={item.id}
              className="h-[316px] md:h-[156px] grid grid-rows-[156px_1fr] md:grid-cols-[280px_1fr]"
            >
              <div className="relative w-full rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.name} 대표이미지`}
                  fill={true}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col border-2 border-gray-900 rounded-b-3xl md:rounded-b-none md:rounded-tr-3xl md:rounded-br-3xl">
                <div className="flex space-between">
                  <p>{item.name}</p>
                  <LikeButton />
                </div>
                <div>
                  <ConfirmBadge />
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Card;
