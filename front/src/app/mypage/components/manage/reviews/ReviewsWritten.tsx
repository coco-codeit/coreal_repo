import { useEffect, useState } from "react";
import GatheringInfo from "../../GatheringInfo";
import GatheringImage from "../../GatheringImage";
import { getReviews } from "@/apis/profile";

interface ReturnReviewsInterface {
  teamId: number;
  id: number;
  score: number;
  comment: string;
  createdAt: string;
  Gathering: {
    teamId: number;
    id: number;
    type: string;
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

export default function ReviewsWritten() {
  const [data, setData] = useState<ReturnReviewsInterface[]>();

  useEffect(() => {
    getReviews({}).then((data) => {
      setData(data);
    });
  }, []);

  if (!Array.isArray(data)) return <></>;

  return (
    <>
      {data.map((item: ReturnReviewsInterface, index: number) => (
        <div key={`${item}-${index}`} className="flex flex-row gap-2">
          <GatheringImage src={item?.Gathering?.image} />
          <div className="flex flex-col items-start">
            <GatheringInfo
              info={{
                name: item?.Gathering?.name,
                location: item?.Gathering?.location,
                dateTime: item?.Gathering?.dateTime,
                type: item?.Gathering?.type,
                review: item?.comment,
                score: item?.score,
              }}
            />
          </div>
        </div>
      ))}
      {data.length === 0 && <div>아직 작성한 리뷰가 없어요</div>}
    </>
  );
}
