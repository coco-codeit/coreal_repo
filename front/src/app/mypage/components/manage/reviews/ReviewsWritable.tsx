import { useEffect, useState } from "react";
import Button from "../../Button";
import ReviweModal from "../../ReviewModal";
import GatheringInfo from "../../GatheringInfo";
import GatheringImage from "../../GatheringImage";
import { getGatheringsJoined } from "@/apis/profile";
import { ExtendedGatheringInterface } from "@/types/common";

export default function ReviewsWritable() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
        <div key={`${item}-${index}`} className="flex flex-row gap-2">
          <GatheringImage src={item.image} />
          <div className="flex flex-col items-start">
            <GatheringInfo
              info={{
                name: item.name,
                location: item.location,
                dateTime: item.dateTime,
                participantCount: item.participantCount,
                capacity: item.capacity,
              }}
            />
            <Button onClick={() => setIsModalOpen(true)}>리뷰 작성하기</Button>
            <ReviweModal
              gatheringId={String(item.teamId)}
              open={isModalOpen}
              setOpen={setIsModalOpen}
            />
          </div>
        </div>
      ))}
      {data.length === 0 && <div>아직 작성 가능한 리뷰가 없어요</div>}
    </>
  );
}
