"use client";

import React, { useEffect, useState } from "react";
import Button from "../../Button";
import GatheringInfo from "../../GatheringInfo";
import GatheringImage from "../../GatheringImage";
import { cancleGathering, getGatheringsJoined } from "@/apis/profile";
import { ExtendedGatheringInterface } from "@/types/common";
import ReviweModal from "../../ReviewModal";

export default function JoinedGatherings() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [joinedList, setJoinedList] = useState<ExtendedGatheringInterface[]>();

  useEffect(() => {
    getGatheringsJoined().then((data) => setJoinedList(data));
  }, []);

  const handleCancleGathering = async (gatheringId: number) => {
    const res = await cancleGathering(gatheringId);
    if (res.status === 200) console.log("예약 취소 완료");
  };

  if (!joinedList || !Array.isArray(joinedList)) return <></>;

  return (
    <>
      {joinedList.map((item, index) => (
        <div key={`${item}-${index}`} className="flex flex-row gap-2">
          <GatheringImage src={item.image} />
          <div className="flex flex-col items-start">
            <div className="flex flex-row gap-2">
              <GatheringStatus isCompleted={item.isCompleted} />
              <GatheringConfirm participantCount={item.participantCount} />
            </div>
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
              <>
                <Button onClick={() => setIsModalOpen(true)}>
                  리뷰 작성하기
                </Button>
                <ReviweModal
                  gatheringId={String(item.teamId)}
                  open={isModalOpen}
                  setOpen={setIsModalOpen}
                />
              </>
            ) : (
              <Button onClick={() => handleCancleGathering(item.id)}>
                예약 취소하기
              </Button>
            )}
          </div>
        </div>
      ))}
      {joinedList.length === 0 && <p>신청한 모임이 아직 없어요</p>}
    </>
  );
}

function GatheringStatus({ isCompleted }: { isCompleted: boolean }) {
  return isCompleted ? (
    <span className="px-2 py-1 rounded-full border">이용 완료</span>
  ) : (
    <span className="px-2 py-1 rounded-full border">이용 예정</span>
  );
}

function GatheringConfirm({ participantCount }: { participantCount: number }) {
  return participantCount >= 5 ? (
    <span className="px-2 py-1 rounded-full border">개설확정</span>
  ) : (
    <span className="px-2 py-1 rounded-full border">개설대기</span>
  );
}
