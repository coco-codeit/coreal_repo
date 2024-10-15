import ConfirmBadge from "@/app/gatherings/components/ConfirmBadge";
import { GatheringsParticipants, GatheringsUser } from "@/types/gatherings";
import Image from "next/image";
import React, { useState } from "react";

interface UserAvatarProps {
  participantData: GatheringsParticipants[];
  gatherCapacity: number;
  participantCount: number;
}

export default function UserAvatar({
  participantData,
  gatherCapacity,
  participantCount,
}: UserAvatarProps) {
  const isMoreUser = participantCount > 5;
  const [displayUser, setIsDisplayUser] = useState(isMoreUser);

  const userArr = participantData?.map(
    (item: GatheringsParticipants) => item.User,
  );

  const displayedUsers = displayUser ? userArr.slice(0, 5) : userArr;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="min-w-[80px] text-[14px]">
          모집정원 {gatherCapacity}명
        </div>
        <div
          className="flex flex-wrap min-h-[29px] ml-[22px]"
          onMouseEnter={() => setIsDisplayUser(false)}
          onMouseLeave={() => setIsDisplayUser(isMoreUser)}
        >
          {displayedUsers?.map((item: GatheringsUser) => {
            const userImgSrc = item.image || "/images/profile.svg";
            return (
              <div
                key={item.id}
                className={`relative h-[29px] w-[29px] rounded-full bg-gray-300 transition-all duration-300 ${
                  displayUser || !isMoreUser ? "-ml-[10px]" : ""
                }`}
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
          {displayUser && (
            <div className="flex items-center justify-center text-[14px] h-[29px] w-[29px] rounded-full bg-gray-200 -ml-[10px] z-30">
              +{participantCount - 5}
            </div>
          )}
        </div>
      </div>
      {isMoreUser && (
        <div className="min-w-[80px]">
          <ConfirmBadge />
        </div>
      )}
    </div>
  );
}
