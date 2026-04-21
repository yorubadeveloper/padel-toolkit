"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react";

interface ToolCardProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  illustration?: string;
  index?: number;
}

export function ToolCard({
  href,
  icon,
  title,
  description,
  illustration,
  index = 0,
}: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link
        href={href}
        className="group relative block bg-surface rounded-2xl p-6 border border-muted/80 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/[0.04] transition-all duration-500 overflow-hidden h-full"
      >
        {/* Illustration watermark */}
        {illustration && (
          <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-[0.06] group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-500 pointer-events-none">
            <Image
              src={illustration}
              alt=""
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
        )}

        <div className="relative z-10">
          <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center text-accent mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <h3 className="font-semibold text-[15px] mb-1.5 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-foreground/45 leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300">
            Open tool
            <ArrowRight size={12} weight="bold" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
