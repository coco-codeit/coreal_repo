"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { MdCheckCircle, MdError } from "react-icons/md";
import { useToastStore } from "@/stores/useToastStore";

export const Toast = () => {
  const { message, type, isVisible, hideToast } = useToastStore();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hideToast]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 right-4 flex items-center space-x-2 px-4 py-2 rounded shadow-lg text-white 
        ${type === "success" ? "bg-green-500" : "bg-red-500"}
      `}
    >
      {type === "success" ? (
        <MdCheckCircle className="text-white text-xl" />
      ) : (
        <MdError className="text-white text-xl" />
      )}
      <span>{message}</span>
    </motion.div>
  );
};
