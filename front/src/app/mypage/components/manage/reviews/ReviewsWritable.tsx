import { ExtendedGatheringInterface } from "@/types/common";
import ListWrapper from "../../ListWrapper";
import GatheringInfo from "../../GatheringInfo";
import GatheringImage from "../../GatheringImage";
import ReviewModalBtn from "../../ReviewModalBtn";
import OnEmpty from "../OnEmpty";
import { useGatherJoined } from "@/hooks/queries/gatherings";

export default function ReviewsWritable() {
  const { data, isLoading } = useGatherJoined({
    completed: true,
    reviewed: false,
  });
  if (isLoading) return <>Loading...</>;

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
            <ReviewModalBtn teamId={item.teamId} />
          </div>
        </ListWrapper>
      ))}
    </>
  );
}
