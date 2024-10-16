import Image from "next/image";

export default function GatheringImage({ src }: { src?: string }) {
  // 아래 코드는 서버 더미데이터 처리용으로, 추후 지워야 함.
  if (src === "string") return <></>;

  return (
    <Image
      src={src || "/images/default_gathering_image.png"}
      alt=""
      width="280"
      height="157"
      className="rounded-3xl aspect-[5/3] sm:aspect-video w-full sm:w-[280px] object-cover"
    />
  );
}
