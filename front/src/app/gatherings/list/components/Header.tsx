import Image from "next/image";

function Header() {
  return (
    <div className="flex justify-start items-center gap-4 pt-10 pb-8">
      <Image
        src="/images/head.svg"
        width={72}
        height={72}
        alt="gatherings-img"
      />

      <section className="gap-2 flex flex-col py-[6px] ">
        <p className="font-medium text-sm text-gray-700">
          함께 할 사람이 없나요?
        </p>
        <p className="md:text-2xl font-semibold text-gray-900 text-lg">
          지금 모임에 참여해보세요
        </p>
      </section>
    </div>
  );
}

export default Header;
