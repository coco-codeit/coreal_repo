import { useEffect, useState } from "react";
import { getReviews } from "@/apis/profile";
import GatheringInfo from "../../GatheringInfo";
import GatheringImage from "../../GatheringImage";
import ListWrapper from "../../ListWrapper";

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
        <ListWrapper key={`${item}-${index}`}>
          <GatheringImage src={item?.Gathering?.image} />
          <div className="flex flex-col justify-between items-start gap-4">
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
        </ListWrapper>
      ))}
      {data.length === 0 && <div>아직 작성한 리뷰가 없어요</div>}
    </>
  );
}
