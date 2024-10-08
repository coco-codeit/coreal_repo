"use client";

import React, { useState } from "react";
import CommentsCard from "./CommentsCard";
import Pagination from "./Pagination";
import { useReviews } from "@/hooks/queries/useReviews";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { Review } from "@/types/reviews";

export default function CommentsSection({ pageId }: { pageId: string }) {
  const [currentPage, setCurrentPage] = useState(1);

  const { reviews: reviewData = [], isLoading: isReviewLoading } = useReviews({
    gatherId: pageId,
  });

  const totalPages = Math.ceil(reviewData.length || 0 / 4);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isReviewLoading) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[687px] mt-6 p-6 border-t-2 border-[#E5E7EB]">
        <LoadingSpinner />
      </section>
    );
  }

  return (
    <section className="flex flex-col sm:min-h-360px min-h-[687px] mt-6 p-6 border-t-2 border-[#E5E7EB]">
      <h2 className="text-[18px] font-semibold mb-[16px]">
        이용자들은 이 프로그램을 이렇게 느꼈어요!
      </h2>

      {reviewData && reviewData.length > 0 ? (
        <>
          {reviewData.map((review: Review) => (
            <CommentsCard key={review.id} singleReviewData={review} />
          ))}

          {reviewData.length > 4 && (
            <div className="mt-2 mb-[86px]">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center h-[600px] pb-[86px]">
          <p className="text-gray-500">이직 리뷰가 없어요</p>
        </div>
      )}
    </section>
  );
}
