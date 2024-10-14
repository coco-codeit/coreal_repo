import { useGatherJoined } from "@/hooks/queries/mypage";
import { ExtendedGatheringInterface } from "@/types/common";
import OnEmpty from "../OnEmpty";
import OnLoading from "../OnLoading";
import ListWrapper from "../../ListWrapper";
import GatheringInfo from "../../GatheringInfo";
import GatheringImage from "../../GatheringImage";
import ReviewModalBtn from "../../ReviewModalBtn";

export default function ReviewsWritable() {
  const { data, isLoading } = useGatherJoined({
    completed: true,
    reviewed: false,
  });
  if (isLoading) return <OnLoading />;

  if (!Array.isArray(data) || data.length === 0)
    return <OnEmpty message="아직 작성 가능한 리뷰가 없어요" />;

  return (
    <>
      {data.map((item: ExtendedGatheringInterface, index: number) => (
        <ListWrapper key={`${item}-${index}`}>
          <GatheringImage src={item.image} />
          <div className="flex flex-col justify-between items-start gap-4">
            <GatheringInfo
              info={{
                name: item.name,
                location: item.location,
                dateTime: item.dateTime,
                participantCount: item.participantCount,
                capacity: item.capacity,
              }}
            />
            <ReviewModalBtn gatheringId={item.id} />
          </div>
        </ListWrapper>
      ))}
    </>
  );
}
