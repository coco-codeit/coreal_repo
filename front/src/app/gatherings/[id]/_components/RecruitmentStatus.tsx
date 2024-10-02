import React from "react";
import Image from "next/image";
import UserInfoCard from "./UserInfoCard";

interface DeveloperTypeItem {
  title: string;
  current: number;
  total: number;
}

const tempUserData = {
  nickname: "사용자닉네임",
  avatar: "/api/placeholder/40/40",
  temperature: 75,
};

export default function DeveloperTypeItem({
  title,
  current,
  total,
}: DeveloperTypeItem) {
  const displayAvatars = current >= 5;

  return (
    <div className="flex w-[222px] justify-between items-center">
      <span className="text-2xl text-[#9a9a9a] ">{title}</span>
      {displayAvatars ? (
        <div className="flex -space-x-2 overflow-hidden group">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="relative w-10 h-10 rounded-full bg-gray-300 hover:z-10 group"
            >
              <Image
                src={tempUserData.avatar}
                alt="avatar"
                layout="fill"
                className="rounded-full"
              />
              <div className="absolute top-12 left-0 hidden group-hover:block z-20">
                <UserInfoCard tempUserData={tempUserData} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <span className="text-2xl text-gray-12">{`${current}/${total}`}</span>
      )}
    </div>
  );
}
