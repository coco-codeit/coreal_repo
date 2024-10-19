import Image from "next/image";
import DeadLineTag from "@/app/gatherings/components/DeadLineTag";

function CardImage({
  image,
  registrationEnd,
  deadlineText,
}: {
  image: string;
  registrationEnd: string;
  deadlineText?: string;
}) {
  const defaultImage = "/images/detail/gatherDetail.png";
  const imageUrl = image || defaultImage;

  return (
    <div className="relative w-full rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl overflow-hidden">
      <Image
        src={imageUrl}
        alt={"대표 이미지"}
        fill={true}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (min-width: 768px) and (max-width: 1024px) 50vw, 280px"
      />
      <DeadLineTag
        endTime={registrationEnd}
        type="sm"
        serverDeadlineText={deadlineText}
      />
    </div>
  );
}

export default CardImage;
