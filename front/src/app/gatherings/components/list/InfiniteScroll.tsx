import React from "react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import LoadingSpinner from "@/app/components/LoadingSpinner";

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingRef.current && !isFetching) {
      isFetchingRef.current = true;
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetching, fetchNextPage]);

  useEffect(() => {
    if (!isFetching) {
      isFetchingRef.current = false;
    }
  }, [isFetching]);

  return (
    <>
      <AnimatePresence>
        {React.Children.map(children, (child, index) =>
          isClient ? (
            <motion.div
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {child}
            </motion.div>
          ) : (
            <div key={index}>{child}</div>
          ),
        )}
      </AnimatePresence>
      {hasNextPage && !isFetching && <div ref={ref} className="h-[20px]" />}
      {isFetching && <LoadingSpinner />}
    </>
  );
};

export default InfiniteScroll;
