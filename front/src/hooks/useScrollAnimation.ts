import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export function useScrollAnimation(maxScroll = 150, delay = 700) {
  const controls = useAnimation();

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const opacity = Math.min(scrollTop / maxScroll, 1);

      controls.start({ opacity });

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        controls.start({ opacity: 0 });
      }, delay);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [controls, maxScroll, delay]);

  return controls;
}
