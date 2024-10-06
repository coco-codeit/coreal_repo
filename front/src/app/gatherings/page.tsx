import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getGatheringList } from "@/apis/gatheringsApi";
import Gatherings from "@/app/gatherings/list/components/Gatherings";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["gatherings"],
    queryFn: () => getGatheringList(),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Gatherings />
    </HydrationBoundary>
  );
}
