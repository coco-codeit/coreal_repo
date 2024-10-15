import Image from "next/image";
import Tabs from "./components/section/Tabs";
import { Review } from "@/types/reviews";
import { fetchReviews } from "@/libs/reviews";

export default async function ReviewsPage() {
  const initialReviews: Review[] = await fetchReviews({
    type: "OFFICE_STRETCHING",
    location: undefined,
    sortBy: "createdAt",
    limit: 4,
  });

  return (
    <div className="max-w-[1200px] bg-[#F9FAFB] m-auto px-28 py-10 ">
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
      <Tabs initialReviews={initialReviews} />
    </div>
  );
}
