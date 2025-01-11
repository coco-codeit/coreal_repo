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
  initialReviews: { data: Review[] };
}) {
  const [offset, setOffset] = useState(0);

  const { data: reviewData = [] } = useGatherReview({
    pageId,
    offset,
    limit: 4,
  });

  const totalReviews = reviewData?.totalItemCount;
  const totalPages = reviewData?.totalPages;
  const currentPage = reviewData?.currentPage;

  const handlePageChange = (page: number) => {
    setOffset((page - 1) * 4);
  };

  const reviewInpage = currentPage === 1 ? initialReviews : reviewData;
  console.log(reviewInpage);
  return (
    <section className="flex flex-col sm:min-h-360px min-h-[487px] mt-6 p-6 border-t-2 border-[#E5E7EB]">
      <h2 className="text-[18px] font-semibold mb-[16px]">
        이용자들은 이 프로그램을 이렇게 느꼈어요!
      </h2>

      {totalReviews > 0 ? (
        <>
          <div className="min-h-[500px]">
            {reviewInpage.data.map((review: Review) => (
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
        <div className="flex items-center justify-center h-[487px] md:pb-[86px] pb-[134px]">
          <p className="text-gray-500">아직 리뷰가 없어요</p>
        </div>
      )}
    </section>
  );
}
