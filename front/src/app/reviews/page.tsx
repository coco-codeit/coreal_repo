import Image from "next/image";
import Tabs from "./components/section/Tabs";

export default function ReviewsPage() {
  return (
    <div className="min-w-[375px] max-w-[375px] md:max-w-[744px] lg:max-w-[1200px] bg-gray-50 m-auto px-4 md:px-[24.5] lg:px-[102px] min-h-screen md:py-10">
      <div className="flex gap-2 items-center mb-8">
        <Image
          src="/images/reviews.svg"
          alt="Review Image"
          width={72}
          height={72}
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-[#111827] text-2xl font-semibold">모든 리뷰</h1>
          <p className="text-[#374151] text-sm font-medium">
            같이 달램을 이용한 분들은 이렇게 느꼈어요 &#x1faf6;
          </p>
        </div>
      </div>
      <Tabs />
    </div>
  );
}
