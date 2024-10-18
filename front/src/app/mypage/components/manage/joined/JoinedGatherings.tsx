"use client";

import { FaCheck } from "react-icons/fa6";
import { GatheringsJoinedReturn } from "@/libs/profileApi";
import { useGatherJoined, useCancelGatherJoined } from "@/hooks/queries/mypage";
import Image from "next/image";
import OnEmpty from "../OnEmpty";
import Button from "../../Button";
import OnLoading from "../OnLoading";
import ListWrapper from "../../ListWrapper";
import GatheringInfo from "../../GatheringInfo";
import GatheringImage from "../../GatheringImage";
import ReviewModalBtn from "../../ReviewModalBtn";

export default function JoinedGatherings() {
  const { data, isLoading } = useGatherJoined();
  const { mutate: cancelGatherJoined } = useCancelGatherJoined();

  if (isLoading) return <OnLoading />;
  if (!Array.isArray(data) || data.length === 0)
    return <OnEmpty message="신청한 모임이 아직 없어요" />;

  return (
    <>
      {data.map((item: GatheringsJoinedReturn, index) => (
        <ListWrapper
          key={`${item}-${index}`}
          href={`/gatherings/${item.id}/detail`}
        >
          {item.canceledAt && (
            <div className="absolute -top-2 -left-2 w-[calc(100%+16px)] h-[calc(100%+16px)] bg-black/80 text-white flex flex-col justify-center items-center rounded-[28px]">
              <p>모집이 취소된 모임이에요.</p>
              <p>다음 기회에 다시 만나요 🙏</p>
              <div className="absolute top-4 right-4 p-3 rounded-full bg-gray-900">
                <Image
                  src="/images/bye.svg"
                  alt=""
                  width="24"
                  height="24"
                  className="w-6 h-6 text-green-2 fill-current"
                />
              </div>
            </div>
          )}
          <GatheringImage src={item.image} />
          <div className="w-full flex flex-col justify-between items-start gap-4">
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
            {new Date(item.dateTime) < new Date() && !item.canceledAt ? (
              <ReviewModalBtn
                gatheringId={item.id}
                isReviewed={item.isReviewed}
              />
            ) : (
              <Button
                className="border-2 bg-white border-gray-900 text-gray-900 hover:bg-red-600 hover:border-red-600 hover:text-white"
                onClick={() => {
                  !item.canceledAt && cancelGatherJoined(item.id);
                }}
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
    <span className="py-1 px-3 leading-6 rounded-full border font-medium text-sm bg-purple-3 text-white">
      이용 예정
    </span>
  );
}

function GatheringConfirm({ participantCount }: { participantCount: number }) {
  return participantCount >= 5 ? (
    <span className="py-1 px-3 leading-6 rounded-full border font-medium text-sm bg-white border-purple-2 text-purple-3">
      <FaCheck className="text-purple-3 inline-block mr-2 mb-1" />
      개설확정
    </span>
  ) : (
    <span className="py-1 px-3 leading-6 rounded-full border font-medium text-sm bg-white border-gray-200 text-gray-500">
      개설대기
    </span>
  );
}
