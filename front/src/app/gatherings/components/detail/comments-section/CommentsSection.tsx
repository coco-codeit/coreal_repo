"use client";

import React, { useState } from "react";
import CommentsCard from "./CommentsCard";
import Pagination from "./Pagination";
import { Review } from "@/types/reviews";
import { useGatherReview } from "@/hooks/queries/gatherDetailQuery";

export default function CommentsSection({
  pageId,
  initialReviews,
}: {
  pageId: number;
  initialReviews: Review[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  const { data: reviewData = [] } = useGatherReview({
    pageId,
    offset: 0,
    limit: 0,
  });

  const totalReviews = reviewData.length;
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews =
    currentPage === 1
      ? initialReviews
      : reviewData.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="flex flex-col sm:min-h-360px min-h-[487px] mt-6 p-6 border-t-2 border-[#E5E7EB]">
      <h2 className="text-[18px] font-semibold mb-[16px]">
        이용자들은 이 프로그램을 이렇게 느꼈어요!
      </h2>

      {currentReviews.length > 0 ? (
        <>
          <div className="mb-[86px]">
            {currentReviews.map((review: Review) => (
              <CommentsCard key={review.id} singleReviewData={review} />
            ))}
          </div>

          {totalPages > 1 && (
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
        <div className="flex items-center justify-center h-[400px] md:pb-[86px] pb-[134px]">
          <p className="text-gray-500">아직 리뷰가 없어요</p>
        </div>
      )}
    </section>
  );
}
