import Image from "next/image";

interface HeaderProps {
  type: "class" | "saved";
}

function Header({ type }: HeaderProps) {
  const imageSrc = `/images/header/${type}.svg`;

  const topTextClassName =
    type === "class"
      ? "font-medium text-sm text-gray-700"
      : "md:text-2xl font-semibold text-gray-900 text-lg";
  const bottomTextClassName =
    type === "class"
      ? "md:text-2xl font-semibold text-gray-900 text-lg"
      : "font-medium text-sm text-gray-700";

  const topText = type === "class" ? "함께 할 사람이 없나요?" : "찜한 모임";
  const bottomText =
    type === "class"
      ? "지금 모임에 참여해보세요"
      : "마감되기 전에 지금 바로 참여해보세요 👀";

  return (
    <div className="flex justify-start items-center gap-4 pt-10 pb-8">
      <Image src={imageSrc} width={72} height={72} alt={type} />

      <section className="gap-2 flex flex-col py-[6px] ">
        <p className={topTextClassName}>{topText}</p>
        <p className={bottomTextClassName}>{bottomText}</p>
      </section>
    </div>
  );
}

export default Header;
