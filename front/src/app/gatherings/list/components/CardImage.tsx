import Image from "next/image";

function CardImage({ image, name }: { image: string; name: string }) {
  return (
    <div className="relative w-full rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl overflow-hidden">
      <Image
        src={image}
        alt={`${name} 이미지`}
        fill={true}
        className="object-cover"
      />
    </div>
  );
}

export default CardImage;
