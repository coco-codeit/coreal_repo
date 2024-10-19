import { getUserReviews } from "@/libs/gatherDetail";
import CommentsSection from "../../components/detail/comments-section/CommentsSection";
import ClientGather from "./ClientGather";
import { Review } from "@/types/reviews";

export default async function Detail({ params }: { params: { id: number } }) {
  const { id } = params;
  const initialReviews: Review[] = await getUserReviews({
    pageId: id,
    offset: 0,
    limit: 4,
  });

  return (
    <div className="min-h-screen-minus-nav bg-gray-100">
      <div className="min-h-screen-minus-nav mx-auto container max-w-[1200px] px-6 md:px-[102px] pt-10 bg-white">
        <ClientGather pageId={id} />
        <CommentsSection pageId={id} initialReviews={initialReviews} />
      </div>
    </div>
  );
}
