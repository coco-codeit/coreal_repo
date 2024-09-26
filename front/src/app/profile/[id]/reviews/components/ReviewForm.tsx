"use client";

import { useState } from "react";

const comments = [
  "피드백이 빨라요",
  "커뮤니케이션이 잘 돼요",
  "시간 약속을 잘 지켜요",
  "아이디어가 좋아요",
  "문제해결 능력이 뛰어나요",
  "리더십이 좋아요",
  " 팔로워십이 좋아요",
  "적극적이에요",
  "맡은 일을 끝까지 해내요",
  "세심하고 꼼꼼해요",
];

export default function ReviewForm({
  userId,
  setIsOpen,
}: {
  userId: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [formState, setFormState] = useState<boolean[]>(
    Array(comments.length).fill(false),
  );

  const handleClickComment = (index: number) => {
    const newFormState = [...formState];
    newFormState[index] = !newFormState[index];
    setFormState([...newFormState]);
  };

  const handleSubmit = () => {
    const filtered = comments.filter((_, index) => formState[index]);
    alert(`전달될 내용: [${filtered}]`);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <h1 className="mb-3 font-bold text-lg">{userId}님께 리뷰 작성하기</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4 flex flex-col gap-1">
          {comments.map((comment, index) => (
            <button
              key={`${comment}-${index}`}
              className={`box-border h-7 rounded-lg ${formState[index] && "font-bold text-purple-6"}`}
              onClick={() => handleClickComment(index)}
            >
              {comment}
            </button>
          ))}
        </div>
        <div className="grid gap-1">
          <Button onClick={handleSubmit} className="border-black">
            제출
          </Button>
          <Button onClick={handleClose}>취소</Button>
        </div>
      </form>
    </>
  );
}

function Button({
  className,
  children,
  onClick,
}: {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
}) {
  return (
    <button
      className={`py-2 rounded-lg border ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
