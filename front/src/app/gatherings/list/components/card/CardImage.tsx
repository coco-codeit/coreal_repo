import Image from "next/image";
import DeadLineTag from "@/app/gatherings/components/DeadLineTag";

function CardImage({
  image,
  name,
  endTime,
}: {
  image: string;
  name: string;
  endTime: string;
}) {
  const defaultImage = "/images/detail/gatherDetail.png"; // 기본 이미지 경로 추가
  const imageUrl = image || defaultImage;
  return (
    <div className="relative w-full rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl overflow-hidden">
      <Image
        src={imageUrl}
        alt={`${name} 이미지`}
        fill={true}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (min-width: 768px) and (max-width: 1024px) 50vw, 280px"
      />
      <div className="block absolute top-[-2px] right-[-2px] md:hidden">
        <DeadLineTag endTime={endTime} type="lg" />
      </div>
      <div className="hidden absolute top-[-2px] right-[-2px] md:block">
        <DeadLineTag endTime={endTime} type="sm" />
      </div>
    </div>
  );
}

export default CardImage;
