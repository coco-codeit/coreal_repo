import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import Gatherings from "@/app/gatherings/list/components/Gatherings";
import { usePrefetchGatherings } from "@/hooks/queries/useGatheringsQuery";

export default async function Home() {
  const queryClient = new QueryClient();

  const type = "DALLAEMFIT";
  const location = undefined;
  const date = undefined;
  const sortBy = "dateTime";
  const sortOrder = "asc";

  await usePrefetchGatherings({
    queryClient,
    type,
    location,
    date,
    sortBy,
    sortOrder,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Gatherings />
    </HydrationBoundary>
  );
}
