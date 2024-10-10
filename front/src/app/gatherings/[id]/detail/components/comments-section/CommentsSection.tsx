"use client";

import React, { useState } from "react";
import CommentsCard from "./CommentsCard";
import Pagination from "./Pagination";
import { useReviews } from "@/hooks/queries/useReviews";
import { Review } from "@/types/reviews";
import CommentSecSkeleton from "./CommentSecSkeleton";

export default function CommentsSection({ pageId }: { pageId: string }) {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  const { reviews: reviewData = [], isLoading: isReviewLoading } = useReviews({
    gatherId: pageId,
  });

  const totalPages = Math.ceil(reviewData.length / reviewsPerPage);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewData.slice(
    indexOfFirstReview,
    indexOfLastReview,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isReviewLoading) {
    return <CommentSecSkeleton />;
  }

  return (
    <section className="flex flex-col sm:min-h-360px min-h-[687px] mt-6 p-6 border-t-2 border-[#E5E7EB]">
      <h2 className="text-[18px] font-semibold mb-[16px]">
        이용자들은 이 프로그램을 이렇게 느꼈어요!
      </h2>

      {currentReviews && currentReviews.length > 0 ? (
        <>
          <div className="min-h-[500px]">
            {currentReviews.map((review: Review) => (
              <CommentsCard key={review.id} singleReviewData={review} />
            ))}
          </div>

          {reviewData.length > reviewsPerPage && (
            <div className="mt-2 md:pb-[86px] pb-[134px]">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center h-[600px] md:pb-[86px] pb-[134px]">
          <p className="text-gray-500">이직 리뷰가 없어요</p>
        </div>
      )}
    </section>
  );
}
