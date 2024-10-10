import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const InfiniteScroll = ({
  fetchNextPage,
  hasNextPage,
  children,
  isFetching,
}: {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  children: React.ReactNode;
  isFetching: boolean;
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
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
    <div className="grid grid-cols-1 gap-6 py-4 md:py-6 w-full">
      {children}
      <div ref={ref} className="h-[20px]" />
    </div>
  );
};

export default InfiniteScroll;
