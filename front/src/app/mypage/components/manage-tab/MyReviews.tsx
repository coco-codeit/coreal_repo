"use client";

import { useState } from "react";
import ReviweModal from "./ReviewModal";

export default function MyReviews() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div>
      <p>나의 리뷰 리스트들</p>
      <button onClick={() => setIsModalOpen(true)}>리뷰 작성하기</button>
      <ReviweModal open={isModalOpen} setOpen={setIsModalOpen} />
    </div>
  );
}
