import CommentsSection from "../../components/detail/comments-section/CommentsSection";
import GatheringSection from "../../components/detail/gathering-section/GatehringSection";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import {
  prefetchGatherReview,
  prefetchGatherDetailQuery,
} from "@/hooks/queries/gatherDetailQuery";

export default async function Detail({ params }: { params: { id: number } }) {
  const queryClient = new QueryClient();
  const { id } = params;

  await prefetchGatherReview(queryClient, { pageId: id, offset: 0, limit: 4 });
  await prefetchGatherDetailQuery(queryClient, id);

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="min-h-screen-minus-nav mx-auto container max-w-[1200px] px-6 md:px-[102px] pt-10 bg-white">
      <HydrationBoundary state={dehydratedState}>
        <GatheringSection pageId={id} />
        <CommentsSection pageId={id} />
      </HydrationBoundary>
    </div>
  );
}
