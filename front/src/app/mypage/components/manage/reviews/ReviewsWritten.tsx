import { format } from "date-fns";
import { useMyReviews } from "@/hooks/queries/mypage";
import Image from "next/image";
import OnEmpty from "../OnEmpty";
import OnLoading from "../OnLoading";
import ListWrapper from "../../ListWrapper";
import GatheringImage from "../../GatheringImage";
import useAuthStore from "@/stores/useAuthStore";

type GatherType = "OFFICE_STRETCHING" | "MINDFULNESS";

interface ReturnReviewsInterface {
  teamId: number;
  id: number;
  score: number;
  comment: string;
  createdAt: string;
  Gathering: {
    teamId: number;
    id: number;
    type: GatherType;
    name: string;
    dateTime: string;
    location: string;
    image: string;
  };
  User: {
    teamId: number;
    id: number;
    name: string;
    image: string;
  };
}

const gatherTypeMap: Record<GatherType, string> = {
  OFFICE_STRETCHING: "달램핏 오피스 스트레칭",
  MINDFULNESS: "달램핏 마인드풀니스",
};

export default function ReviewsWritten() {
  const { userInfo } = useAuthStore();
  const { data, isLoading } = useMyReviews({ userId: userInfo?.id });

  if (isLoading) return <OnLoading />;
  if (!Array.isArray(data) || data.length === 0)
    return <OnEmpty message="아직 작성한 리뷰가 없어요" />;

  const formatDate = (datetime?: string) =>
    datetime ? format(new Date(datetime), "yyyy.MM.dd") : "";
  return (
    <>
      {data.map((item: ReturnReviewsInterface, index: number) => (
        <ListWrapper key={`${item}-${index}`}>
          <GatheringImage src={item?.Gathering?.image} />
          <div className="flex flex-col items-start gap-3 ml-2 text-gray-700">
            <div className="flex flex-row gap-1">
              {Array.from({ length: item?.score }).map((_, index) => (
                <Image
                  key={index}
                  src="/images/heart_green.svg"
                  width="24"
                  height="24"
                  alt="하트"
                />
              ))}
            </div>
            <p>{item?.comment}</p>
            <div>
              <p className="text-xs mb-1">
                {`${gatherTypeMap[item?.Gathering?.type]} · ${item?.Gathering?.location}`}
              </p>
              <p className="text-gray-500 text-xs">
                {formatDate(item?.Gathering?.dateTime)}
              </p>
            </div>
          </div>
        </ListWrapper>
      ))}
    </>
  );
}
