"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "@phosphor-icons/react";
import { ReactNode } from "react";

interface ToolPageHeaderProps {
  icon: ReactNode;
  title: string;
  description: string;
  illustration: string;
}

export function ToolPageHeader({
  icon,
  title,
  description,
  illustration,
}: ToolPageHeaderProps) {
  return (
    <div className="mb-10">
      <Link
        href="/tools"
        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground/35 hover:text-foreground/70 transition-colors mb-8 group py-2"
      >
        <ArrowLeft
          size={14}
          weight="bold"
          className="group-hover:-translate-x-0.5 transition-transform"
        />
        All tools
      </Link>

      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3.5 mb-3">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-12 h-12 rounded-2xl bg-accent-light flex items-center justify-center text-accent"
            >
              {icon}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold tracking-tight"
            >
              {title}
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/45 text-[15px] leading-relaxed max-w-lg"
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 20 }}
          className="hidden sm:block shrink-0 animate-float"
        >
          <Image
            src={illustration}
            alt=""
            width={120}
            height={120}
            className="w-28 h-28 opacity-80"
          />
        </motion.div>
      </div>
    </div>
  );
}
