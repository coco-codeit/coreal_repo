"use client";

import React, { useState } from "react";
import CommentsCard from "./CommentsCard";
import Pagination from "./Pagination";
import { useReviews } from "@/hooks/reviews/useReviews";

const itemsPerPage = 4;
const totalItems = 100;

export default function CommentsSection({ pageId }: { pageId: string }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: reviewData } = useReviews({
    gatherId: pageId,
  });
  console.log(reviewData);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="mt-6 p-6 border-t-2 border-[#E5E7EB]">
      <h2 className="text-[18px] font-semibold mb-[16px]">
        이용자들은 이 프로그램을 이렇게 느꼈어요!
      </h2>
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <div className="mt-2 mb-[6px]">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
