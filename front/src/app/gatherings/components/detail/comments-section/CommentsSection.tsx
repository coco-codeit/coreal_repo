"use client";

import React, { useState } from "react";
import CommentsCard from "./CommentsCard";
import Pagination from "./Pagination";
import { Review } from "@/types/reviews";
import { useGatherReview } from "@/hooks/queries/gatherDetailQuery";

export default function CommentsSection({ pageId }: { pageId: number }) {
  const [offset, setOffset] = useState(0);

  const { data: reviewData = [] } = useGatherReview({
    pageId,
    offset,
    limit: 4,
  });
  const { totalItemCount, totalPages, currentPage } = reviewData;

  const handlePageChange = (page: number) => {
    setOffset((page - 1) * 4);
  };

  return (
    <article className="flex flex-col sm:min-h-360px min-h-[487px] mt-6 p-6 border-t-2 border-[#E5E7EB]">
      <h2 className="text-[18px] font-semibold mb-[16px]">
        이용자들은 이 프로그램을 이렇게 느꼈어요!
      </h2>

      {totalItemCount > 0 ? (
        <>
          <section className="min-h-[500px]">
            {reviewData.data.map((review: Review) => (
              <CommentsCard key={review.id} singleReviewData={review} />
            ))}
          </section>
        </>
      ) : (
        <section className="flex items-center justify-center h-[487px] md:pb-[86px] pb-[134px]">
          <p className="text-gray-500">아직 리뷰가 없어요</p>
        </section>
      )}
      {totalPages > 1 && (
        <section className="mt-2 md:pb-[86px] pb-[134px]">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      )}
    </article>
  );
}
