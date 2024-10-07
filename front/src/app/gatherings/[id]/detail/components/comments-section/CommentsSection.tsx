"use client";

import React, { useState } from "react";
import CommentsCard from "./CommentsCard";
import Pagination from "./Pagination";
import { useReviews } from "@/hooks/reviews/useReviews";
import LoadingSpinner from "@/app/components/LoadingSpinner";

const itemsPerPage = 4;
const totalItems = 100;

export default function CommentsSection({ pageId }: { pageId: string }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: reviewData, isLoading: isReviewLoading } = useReviews({
    gatherId: pageId,
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="mt-6 p-6 border-t-2 border-[#E5E7EB]">
      {isReviewLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="min-h-[500px]">
            <h2 className="text-[18px] font-semibold mb-[16px]">
              이용자들은 이 프로그램을 이렇게 느꼈어요!
            </h2>
            {reviewData?.map((_, idx) => (
              <CommentsCard
                key={reviewData[idx].id}
                singleReviewData={reviewData[idx]}
              />
            ))}
          </div>
          <div className="mt-2 mb-[6px]">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </section>
  );
}
