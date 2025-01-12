import GatehringSection from "./gathering-section/GatehringSection";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { prefetchGatherDeatilQuery } from "@/hooks/queries/gatherDetailQuery";

export default async function GatherInfo({ pageId }: { pageId: number }) {
  const queryClient = new QueryClient();
  await prefetchGatherDeatilQuery(queryClient, pageId);
  const dehydratedState = dehydrate(queryClient);

  return (
    <article>
      <HydrationBoundary state={dehydratedState}>
        <GatehringSection pageId={pageId} />
      </HydrationBoundary>
    </article>
  );
}
