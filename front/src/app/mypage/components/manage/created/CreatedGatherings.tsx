"use client";

import { useEffect, useState } from "react";
import GatheringInfo from "../../GatheringInfo";
import GatheringImage from "../../GatheringImage";
import { getGatherings } from "@/apis/profile";
import { ExtendedGatheringInterface } from "@/types/common";
import ListWrapper from "../../ListWrapper";

export default function CreatedGatherings() {
  const [data, setData] = useState<ExtendedGatheringInterface[]>();

  useEffect(() => {
    getGatherings({ createdBy: 0 }).then((data) => {
      setData(data);
    });
  }, []);

  if (!Array.isArray(data)) return <></>;

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
      {data.length === 0 && <div>아직 만든 모임이 없어요</div>}
    </>
  );
}
