import CommentsSection from "../../components/detail/comments-section/CommentsSection";
import GatherInfo from "../../components/detail/GatherInfo";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { prefetchGatherReview } from "@/hooks/queries/gatherDetailQuery";

export default async function Detail({ params }: { params: { id: number } }) {
  const queryClient = new QueryClient();
  const { id } = params;

  await prefetchGatherReview(queryClient, { pageId: id, offset: 0, limit: 4 });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="min-h-screen-minus-nav mx-auto container max-w-[1200px] px-6 md:px-[102px] pt-10 bg-white">
      <GatherInfo pageId={id} />
      <HydrationBoundary state={dehydratedState}>
        <CommentsSection pageId={id} />
      </HydrationBoundary>
    </div>
  );
}
