import Image from "next/image";

export default function GatheringImage({ src }: { src?: string }) {
  return (
    <Image
      src={src || "/images/default_gathering_image.png"}
      alt=""
      width="150"
      height="100"
      className="rounded-xl"
    />
  );
}
