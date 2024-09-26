"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getReviewsById } from "@/apis/profile";
const DefaultUserImage = "/images/default_user.webp";

interface CommentInterface {
  created: string;
  updated: string;
  comments: string[];
}

interface UserReviewInterface {
  id: string;
  nickname: string;
  imgUrl: string;
  comment_by_opp: CommentInterface | null;
  comment_by_me: CommentInterface | null;
}

export default function ReviewsSection({
  gatheringId,
}: {
  gatheringId: number | string;
}) {
  const [reviews, setReviews] = useState<UserReviewInterface[] | undefined>();

  useEffect(() => {
    const getData = async () => {
      const data = await getReviewsById(gatheringId);
      setReviews(data);
    };
    getData();
  }, []);

  return (
    <div className="py-4 px-2">
      <h5 className="pb-2 font-medium">리뷰 목록</h5>
      <div>
        {reviews &&
          reviews.map((member, index) => (
            <Review key={`${member}-${index}`} member={member} />
          ))}

        {!reviews && "리뷰 정보가 존재하지 않습니다."}
      </div>
    </div>
  );
}

function Review({ member }: { member: UserReviewInterface }) {
  return (
    <>
      <div className="py-2">
        <div className="flex flex-row items-center gap-4">
          <Image
            src={member.imgUrl || DefaultUserImage}
            alt={`${member.nickname}님의 프로필사진`}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">
              {member.nickname}님이 나에게 남긴 평가
            </p>
            <Comment comments={member.comment_by_opp?.comments} />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center">
          <div className="text-right">
            <p className="font-semibold">
              내가 {member.nickname}님에게 남긴 평가
            </p>
            <Comment comments={member.comment_by_me?.comments} />
          </div>
        </div>
      </div>
    </>
  );
}

function Comment({ comments }: { comments: string[] | null | undefined }) {
  return (
    <div>
      {comments?.map((comment, index) => (
        <p key={`${comment}-${index}`}>{comment}</p>
      )) || "아직 작성되지 않음"}
    </div>
  );
}
