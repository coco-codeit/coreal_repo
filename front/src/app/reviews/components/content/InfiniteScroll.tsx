import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface InfiniteScrollProps {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetching: boolean;
  children: React.ReactNode;
}

const InfiniteScroll = ({
  fetchNextPage,
  hasNextPage,
  isFetching,
  children,
}: InfiniteScrollProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const isFetchingRef = useRef(false);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingRef.current && !isFetching) {
      isFetchingRef.current = true;
      fetchNextPage();
      setTimeout(() => {
        isFetchingRef.current = false;
      }, 1000);
    }
  }, [inView, hasNextPage, isFetching, fetchNextPage]);

  return (
    <div className="w-full">
      {children}
      {hasNextPage && <div ref={ref}>{isFetching && <p>Loading...</p>}</div>}
    </div>
  );
};

export default InfiniteScroll;
