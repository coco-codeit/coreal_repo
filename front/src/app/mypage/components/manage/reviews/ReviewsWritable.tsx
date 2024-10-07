import { useEffect, useState } from "react";
import { getGatheringsJoined } from "@/apis/profile";
import { ExtendedGatheringInterface } from "@/types/common";
import ListWrapper from "../../ListWrapper";
import GatheringInfo from "../../GatheringInfo";
import GatheringImage from "../../GatheringImage";
import ReviewModalBtn from "../../ReviewModalBtn";

export default function ReviewsWritable() {
  const [data, setData] = useState<ExtendedGatheringInterface[]>();

  useEffect(() => {
    getGatheringsJoined({
      completed: true,
      reviewed: false,
    }).then((data) => {
      setData(data);
    });
  }, []);

  if (!Array.isArray(data)) return <></>;

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
      {data.length === 0 && <div>아직 작성 가능한 리뷰가 없어요</div>}
    </>
  );
}
