import { useEffect, useState } from "react";

export default function useInfiniteScroll(
  target: Element | null,
  callback: () => unknown,
) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const ObserverCallback = (entries: IntersectionObserverEntry[]) => {
      let status = false;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          status = true;
        }
      });
      setIsVisible(status);
    };
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver(ObserverCallback, options);

    if (target) observer.observe(target);
  }, [callback, target]);
  return [isVisible];
}
