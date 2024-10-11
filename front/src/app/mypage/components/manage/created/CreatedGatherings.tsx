"use client";

import useUserInfo from "@/stores/useUserInfo";
import { useGatherCreated } from "@/hooks/queries/mypage";
import { ExtendedGatheringInterface } from "@/types/common";
import OnEmpty from "../OnEmpty";
import OnLoading from "../OnLoading";
import ListWrapper from "../../ListWrapper";
import GatheringInfo from "../../GatheringInfo";
import GatheringImage from "../../GatheringImage";

export default function CreatedGatherings() {
  const { id } = useUserInfo();
  const { data, isLoading } = useGatherCreated(id);

  if (isLoading) return <OnLoading />;
  if (!Array.isArray(data) || data.length === 0)
    return <OnEmpty message="아직 만든 모임이 없어요" />;

  return (
    <>
      {data.map((item: ExtendedGatheringInterface, index: number) => (
        <ListWrapper key={`${item}-${index}`}>
          <GatheringImage src={item.image} />
          <div className="flex flex-col justify-between items-start">
            <GatheringInfo
              info={{
                name: item.name,
                location: item.location,
                dateTime: item.dateTime,
                participantCount: item.participantCount,
                capacity: item.capacity,
              }}
            />
          </div>
        </ListWrapper>
      ))}
    </>
  );
}
