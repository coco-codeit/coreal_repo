import Image from "next/image";

function CardImage({ image, name }: { image: string; name: string }) {
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
    </div>
  );
}

export default CardImage;
