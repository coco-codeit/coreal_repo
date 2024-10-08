import { useDateConverter } from "@/hooks/gatherings/useDateConverter";
import { Review } from "@/types/reviews";
import Image from "next/image";
import React from "react";

export default function CommentsCard({
  singleReviewData,
}: {
  singleReviewData: Review;
}) {
  const userImgSrc = singleReviewData.User.image || "/images/profile.svg";
  const convertedDate = useDateConverter(singleReviewData.createdAt, "date");

  return (
    <div className="h-[102px] mt-4">
      <div className="h-6">하트 추가</div>
      <div className="text-[14px] mt-[10px]">{singleReviewData.comment}</div>
      <div className="flex items-center text-[12px] mt-2">
        <div className="relative w-6 h-6">
          <Image
            src={userImgSrc}
            className="rounded-full"
            fill
            alt="profile img"
          />
        </div>
        <span className="pl-2">{singleReviewData.User.name}</span>
        <span className="w-1 px-[1px] ml-2 mr-3">|</span>
        <span>{convertedDate}</span>
      </div>
      <div className="relative w-full h-[2px] my-4">
        <Image
          src="/images/dashed.svg"
          alt="dashed Img"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
