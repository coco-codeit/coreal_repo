import { AnimationControls, motion } from "framer-motion";

interface GradientOverlayProps {
  position: "top" | "bottom";
  controls: AnimationControls;
}

const Gradient = ({ position, controls }: GradientOverlayProps) => {
  const gradientClass =
    position === "top" ? "top-0 bg-gradient-to-b" : "bottom-0 bg-gradient-to-t";

  return (
    <motion.div
      className={`absolute left-0 right-0 h-44 pointer-events-none ${gradientClass} from-[#F9FAFB] to-transparent z-10`}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.4 }}
    />
  );
};

export default Gradient;
