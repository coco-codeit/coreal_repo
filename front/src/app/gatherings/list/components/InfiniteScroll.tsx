"use client";

import { useEffect } from "react";
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
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetching, fetchNextPage]);

  return (
    <ul className="grid grid-cols-1 gap-6 py-4 md:py-6 w-full">
      {children}
      {hasNextPage && <li ref={ref} className="h-[20px]" />}
    </ul>
  );
};

export default InfiniteScroll;
