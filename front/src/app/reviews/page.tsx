import Image from "next/image";
import Tabs from "./components/section/Tabs";
import { Review } from "@/types/reviews";

const buildApiUrl = (
  endpoint: string,
  params: Record<string, string | number | boolean | undefined>
) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    throw new Error(
      "API Base URL is not defined. Please check NEXT_PUBLIC_API_URL in your .env file."
    );
  }

  const url = new URL(`${baseUrl}/${endpoint}`);
  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined) {
      url.searchParams.append(key, String(params[key]));
    }
  });

  return url.toString();
};

const fetchInitialReviews = async (): Promise<Review[]> => {
  const url = buildApiUrl("reviews", {
    type: "DALLAEMFIT",
    location: undefined,
    sortBy: "createdAt",
    limit: 10,
  });

  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch initial reviews");
  }

  return res.json();
};

export default async function ReviewsPage() {
  const initialReviews = await fetchInitialReviews();

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
          <h1 className="text-gray-900 text-2xl font-semibold">모든 리뷰</h1>
          <p className="text-gray-700 text-sm font-medium">
            같이 달램을 이용한 분들은 이렇게 느꼈어요 &#x1faf6;
          </p>
        </div>
      </div>
      <Tabs initialReviews={initialReviews} />
    </div>
  );
}
