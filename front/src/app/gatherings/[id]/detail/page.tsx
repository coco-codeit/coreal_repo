import { getUserReviews } from "@/libs/gatherDetail";
import CommentsSection from "../../components/detail/comments-section/CommentsSection";
import ClientGather from "./ClientGather";
import { Review } from "@/types/reviews";

export default async function Detail({ params }: { params: { id: string } }) {
  const { id } = params;
  const initialReviews: Review[] = await getUserReviews(id, 0);

  return (
    <div className="h-screen-minus-nav bg-[#F3F4F6]">
      <div className="mx-auto container max-w-[1200px] px-6 md:px-[102px] pt-10 bg-white">
        <ClientGather pageId={id} />
        <CommentsSection pageId={id} initialReviews={initialReviews} />
      </div>
    </div>
  );
}
