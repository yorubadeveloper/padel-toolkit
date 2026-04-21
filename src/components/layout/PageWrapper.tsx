"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}

export function PageWrapper({ children, className = "", wide = false }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`${wide ? "max-w-6xl" : "max-w-5xl"} mx-auto px-5 sm:px-8 py-10 sm:py-14 ${className}`}
    >
      {children}
    </motion.div>
  );
}
