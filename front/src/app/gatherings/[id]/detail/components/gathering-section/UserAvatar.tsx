import ConfirmBadge from "@/app/gatherings/components/ConfirmBadge";
import { GatheringsParticipants, GatheringsUser } from "@/types/gatherings";
import Image from "next/image";
import React from "react";

export default function UserAvatar({
  participantData,
}: {
  participantData: GatheringsParticipants[];
}) {
  const userArr = participantData?.map(
    (item: GatheringsParticipants) => item.User,
  );
  const isMoreUser = userArr?.length > 5;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-[14px]">모집정원 16명</div>
        <div className="flex ml-[22px]">
          {userArr?.map((item: GatheringsUser) => {
            const userImgSrc = item.image || "/images/profile.svg";
            return (
              <div
                key={item.id}
                className="relative h-[29px] w-[29px] rounded-full bg-gray-300 -ml-[10px]"
              >
                <Image
                  className="rounded-full"
                  src={userImgSrc}
                  alt="Gather Detail Img"
                  fill
                />
              </div>
            );
          })}
          {isMoreUser && (
            <div className="flex items-center justify-center text-[14px] h-[29px] w-[29px] rounded-full bg-gray-200 -ml-[10px] z-30">
              +{userArr.length - 5}
            </div>
          )}
        </div>
      </div>
      {isMoreUser && <ConfirmBadge />}
    </div>
  );
}
