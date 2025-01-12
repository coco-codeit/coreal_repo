import { HeartIcon } from "@/app/components/HeartIcon";
import { Review } from "@/types/reviews";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

export default function CommentsCard({
  singleReviewData,
}: {
  singleReviewData: Review;
}) {
  const userImgSrc = singleReviewData.User.image || "/images/profile.svg";

  const renderHearts = (score: number) => {
    const hearts = [];
    for (let i = 1; i <= 5; i++) {
      hearts.push(<HeartIcon key={i} shouldAnimate={i <= score} />);
    }
    return hearts;
  };

  return (
    <article className="h-[102px] mt-4">
      <figure className="flex h-6 space-x-1">
        {renderHearts(singleReviewData.score)}
      </figure>
      <section className="text-[14px] mt-[10px]">
        {singleReviewData.comment}
      </section>
      <footer className="flex items-center text-[12px] mt-2">
        <picture className="relative w-6 h-6">
          <Image
            src={userImgSrc}
            className="rounded-full"
            fill
            alt="profile img"
          />
        </picture>
        <span className="pl-2">{singleReviewData.User.name}</span>
        <span className="w-1 px-[1px] ml-2 mr-3">|</span>
        <time>
          {format(singleReviewData.createdAt, "MMMM d일", {
            locale: ko,
          }).replace("MMMM", "월")}
        </time>
      </footer>
      <hr
        className="border-t-2 border-dashed border-gray-300 my-4"
        aria-hidden="true"
      />
    </article>
  );
}
