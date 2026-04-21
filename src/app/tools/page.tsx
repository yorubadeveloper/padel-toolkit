"use client";

import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolCard } from "@/components/ui/ToolCard";
import { tools } from "@/data/tools";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ToolsPage() {
  return (
    <PageWrapper wide>
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-foreground/30 uppercase tracking-widest mb-3"
          >
            <span className="w-6 h-px bg-foreground/15" />
            {tools.length} tools available
          </motion.div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">All Tools</h1>
          <p className="text-foreground/40 text-[15px] max-w-md">
            Pick a tool and get going. Everything runs instantly in your browser.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <Image
            src="/animation-5.svg"
            alt=""
            width={100}
            height={100}
            className="w-20 h-20 opacity-60 animate-float hidden sm:block"
          />
        </motion.div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {tools.map((tool, i) => (
          <ToolCard key={tool.href} {...tool} index={i} />
        ))}
      </div>
    </PageWrapper>
  );
}
