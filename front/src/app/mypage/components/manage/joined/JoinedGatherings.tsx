"use client";

import Button from "../../Button";
import { FaCheck } from "react-icons/fa6";
import ListWrapper from "../../ListWrapper";
import GatheringInfo from "../../GatheringInfo";
import GatheringImage from "../../GatheringImage";
import ReviewModalBtn from "../../ReviewModalBtn";
import { useGatherJoined, useCancelGatherJoined } from "@/hooks/queries/mypage";
import OnEmpty from "../OnEmpty";
import OnLoading from "../OnLoading";

export default function JoinedGatherings() {
  const { data, isLoading } = useGatherJoined();
  const { mutate: cancelGatherJoined } = useCancelGatherJoined();

  if (isLoading) return <OnLoading />;

  if (!Array.isArray(data) || data.length === 0)
    return <OnEmpty message="신청한 모임이 아직 없어요" />;

  return (
    <>
      {data.map((item, index) => (
        <ListWrapper key={`${item}-${index}`}>
          <GatheringImage src={item.image} />
          <div className="flex flex-col justify-between items-start gap-4">
            <GatheringStates
              isCompleted={item.isCompleted}
              participantCount={item.participantCount}
            />
            <GatheringInfo
              info={{
                name: item.name,
                location: item.location,
                dateTime: item.dateTime,
                participantCount: item.participantCount,
                capacity: item.capacity,
              }}
            />
            {new Date(item.dateTime) < new Date() ? (
              <ReviewModalBtn teamId={item.teamId} />
            ) : (
              <Button
                className="border-2 bg-white border-orange-600 hover:border-red-500 hover:bg-red-500 text-orange-600 hover:text-white"
                onClick={() => cancelGatherJoined(item.id)}
              >
                예약 취소하기
              </Button>
            )}
          </div>
        </ListWrapper>
      ))}
    </>
  );
}

function GatheringStates({
  participantCount,
  isCompleted,
}: {
  participantCount: number;
  isCompleted: boolean;
}) {
  return (
    <div className="flex flex-row gap-2">
      <GatheringStatus isCompleted={isCompleted} />
      <GatheringConfirm participantCount={participantCount} />
    </div>
  );
}

function GatheringStatus({ isCompleted }: { isCompleted: boolean }) {
  return isCompleted ? (
    <span className="py-1 px-3 leading-6 rounded-full border font-medium text-sm bg-gray-200 text-gray-500">
      이용 완료
    </span>
  ) : (
    <span className="py-1 px-3 leading-6 rounded-full border font-medium text-sm bg-orange-100 text-orange-600">
      이용 예정
    </span>
  );
}

function GatheringConfirm({ participantCount }: { participantCount: number }) {
  return participantCount >= 5 ? (
    <span className="py-1 px-3 leading-6 rounded-full border font-medium text-sm bg-white border-orange-100 text-orange-600">
      <FaCheck className="inline-block mr-2 mb-1" />
      개설확정
    </span>
  ) : (
    <span className="py-1 px-3 leading-6 rounded-full border font-medium text-sm bg-white border-gray-200 text-gray-500">
      개설대기
    </span>
  );
}
